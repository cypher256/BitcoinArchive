#!/usr/bin/env node
/**
 * with-lock.mjs — refuse to start a second concurrent run of the wrapped
 * command. Used to guard `npm run check` (see package.json), because
 * multiple sessions working on this repo can each launch `check` around
 * the same time; without a guard they race on the same generated files
 * (git-dates.json, keyword-index.json, derived-related.json,
 * derived-commentaries.json, llms.txt / llms-full.txt via sync-content.mjs)
 * and whichever run loses the race can end up with a corrupt or partial
 * write.
 *
 * The lock is a PID + start-time record in the OS temp dir, not the repo,
 * so it never shows up in `git status`. A held lock is honored only while
 * its PID is alive and younger than STALE_MS; a lock left behind by a
 * killed/crashed process is reclaimed automatically on the next run.
 *
 * Usage: node scripts/with-lock.mjs <command> [args...]
 */
import { existsSync, readFileSync, writeFileSync, unlinkSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import path from 'node:path';

const LOCK_PATH = path.join(tmpdir(), 'bitcoinarchive-check.lock');
const STALE_MS = 30 * 60 * 1000; // 30 min: well past any observed check runtime

function isPidAlive(pid) {
  try {
    process.kill(pid, 0);
    return true;
  } catch {
    return false;
  }
}

function readLock() {
  try {
    return JSON.parse(readFileSync(LOCK_PATH, 'utf8'));
  } catch {
    return null;
  }
}

function refuse(held, age) {
  console.error(
    `\n✗ Another "npm run check" is already running (pid ${held.pid}, started ${Math.round(age / 1000)}s ago).\n` +
    `  Refusing to start a second instance — concurrent runs race on the same\n` +
    `  generated files (git-dates.json, keyword-index.json, derived-related.json,\n` +
    `  derived-commentaries.json, llms.txt / llms-full.txt) and can corrupt\n` +
    `  whichever one loses the race.\n` +
    `  Wait for the running check to finish, then retry.\n`
  );
  process.exit(1);
}

function sleepMs(ms) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

// Acquiring the lock must be a single atomic step, not "check, then write" —
// two processes launched at nearly the same instant would both observe "no
// lock" and both proceed, defeating the guard exactly when it matters most
// (simultaneous launches). `wx` opens with O_CREAT | O_EXCL: the create
// fails with EEXIST if the file already exists, so only one process can ever
// win a given lock file, decided atomically by the kernel.
function acquireLock() {
  const payload = JSON.stringify({ pid: process.pid, startedAt: Date.now() });
  for (let attempt = 0; attempt < 50; attempt++) {
    try {
      writeFileSync(LOCK_PATH, payload, { flag: 'wx' });
      return; // won the race
    } catch (err) {
      if (err.code !== 'EEXIST') throw err;
    }
    const held = readLock();
    if (held) {
      const age = Date.now() - held.startedAt;
      if (age < STALE_MS && isPidAlive(held.pid)) refuse(held, age);
    }
    // Stale, dead, or unreadable lock — clear it and retry the atomic create.
    // If another process clears/recreates it first, our next `wx` attempt
    // simply loses the race and loops again; only one process ever wins.
    try {
      unlinkSync(LOCK_PATH);
    } catch {
      // already removed by a racing process — fall through and retry
    }
    sleepMs(10 + Math.floor(Math.random() * 20));
  }
  throw new Error('with-lock: could not acquire lock after 50 attempts');
}

function releaseLock() {
  const held = readLock();
  if (held && held.pid === process.pid) {
    try {
      unlinkSync(LOCK_PATH);
    } catch {
      // best-effort cleanup
    }
  }
}

acquireLock();
const [cmd, ...args] = process.argv.slice(2);
const result = spawnSync(cmd, args, { stdio: 'inherit' });
releaseLock();
process.exit(result.status ?? 1);
