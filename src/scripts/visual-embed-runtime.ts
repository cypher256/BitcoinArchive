// Body of VisualEmbedRuntime.astro's client runtime. Sibling of
// chart-embed-runtime.ts, deliberately simpler: these are static (or
// lightly-interactive) metaphor illustrations, not data-driven d3 charts, so
// there is no d3 dependency and no chart-anim.js lazy-load step here.
import { mount as mountUtxoReceipt } from './visuals/utxo-receipt.js';
import { mount as mountKeySignature } from './visuals/key-signature.js';
import { mount as mountHashFingerprint } from './visuals/hash-fingerprint.js';
import { mount as mountNonceSearch } from './visuals/nonce-search.js';
import { mount as mountMempoolToBlock } from './visuals/mempool-to-block.js';
import { mount as mountChainRace } from './visuals/chain-race.js';
import { mount as mountDifficultyRetarget } from './visuals/difficulty-retarget.js';
import { mount as mountBlockValidationGates } from './visuals/block-validation-gates.js';
import { mount as mountBlockAnatomy } from './visuals/block-anatomy.js';
import { mount as mountChainSelectionScale } from './visuals/chain-selection-scale.js';
import { mount as mountKeyGeneration } from './visuals/key-generation.js';
import { mount as mountSighashSeal } from './visuals/sighash-seal.js';
import { mount as mountAddressFormats } from './visuals/address-formats.js';
import { mount as mountChannelLifecycle } from './visuals/channel-lifecycle.js';
import { mount as mountHtlcRelay } from './visuals/htlc-relay.js';
import { mount as mountWitnessEnvelope } from './visuals/witness-envelope.js';
import { mount as mountMiningPoolShares } from './visuals/mining-pool-shares.js';
import { mount as mountCoinbaseConfluence } from './visuals/coinbase-confluence.js';
import { mount as mountFeeQueue } from './visuals/fee-queue.js';
import { mount as mountIncentiveLoop } from './visuals/incentive-loop.js';
import { mount as mountPeerBootstrap } from './visuals/peer-bootstrap.js';
import { mount as mountHiddenChainAttack } from './visuals/hidden-chain-attack.js';
import { mount as mountEclipseIsolation } from './visuals/eclipse-isolation.js';
import { mount as mountSelfishMiningWithhold } from './visuals/selfish-mining-withhold.js';
import { mount as mountDefenseRings } from './visuals/defense-rings.js';
import { mount as mountHashrateCostChain } from './visuals/hashrate-cost-chain.js';
import { mount as mountCoinsCacheLookup } from './visuals/coins-cache-lookup.js';
import { mount as mountBlockFileIndex } from './visuals/block-file-index.js';
import { mount as mountMempoolLifecycle } from './visuals/mempool-lifecycle.js';
import { mount as mountAssumeutxoBootstrap } from './visuals/assumeutxo-bootstrap.js';
import { mount as mountUtxoLifecycle } from './visuals/utxo-lifecycle.js';
import { mount as mountScriptLockFit } from './visuals/script-lock-fit.js';
import { mount as mountPsbtRelay } from './visuals/psbt-relay.js';
import { mount as mountLayerFoundation } from './visuals/layer-foundation.js';
import { mount as mountGossipNetwork } from './visuals/gossip-network.js';
import { mount as mountHonestyCheckpoints } from './visuals/honesty-checkpoints.js';
import { mount as mountTwoDecentralizationAudits } from './visuals/two-decentralization-audits.js';
import { mount as mountSixShieldWall } from './visuals/six-shield-wall.js';
import { mount as mountGenesisBlueprintRebuild } from './visuals/genesis-blueprint-rebuild.js';
import { mount as mountTimewarpClockTrick } from './visuals/timewarp-clock-trick.js';
import { mount as mountQuantumKeyDuplication } from './visuals/quantum-key-duplication.js';

type Drawer = (host: HTMLElement, lang: string) => void;

// Keyed by the `NAME` in `<!-- visual: NAME -->`. Add a new illustration by
// writing a `src/scripts/visuals/<name>.js` module with a `mount(host, lang)`
// export and registering it here -- same pattern as chart-embed-runtime.ts's
// DRAWERS, kept in this separate registry per remark-visual-embed.mjs's
// header comment.
const VISUAL_DRAWERS: Record<string, Drawer> = {
  'utxo-receipt': mountUtxoReceipt,
  'key-signature': mountKeySignature,
  'hash-fingerprint': mountHashFingerprint,
  'nonce-search': mountNonceSearch,
  'mempool-to-block': mountMempoolToBlock,
  'chain-race': mountChainRace,
  'difficulty-retarget': mountDifficultyRetarget,
  'block-validation-gates': mountBlockValidationGates,
  'block-anatomy': mountBlockAnatomy,
  'chain-selection-scale': mountChainSelectionScale,
  'key-generation': mountKeyGeneration,
  'sighash-seal': mountSighashSeal,
  'address-formats': mountAddressFormats,
  'channel-lifecycle': mountChannelLifecycle,
  'htlc-relay': mountHtlcRelay,
  'witness-envelope': mountWitnessEnvelope,
  'mining-pool-shares': mountMiningPoolShares,
  'coinbase-confluence': mountCoinbaseConfluence,
  'fee-queue': mountFeeQueue,
  'incentive-loop': mountIncentiveLoop,
  'peer-bootstrap': mountPeerBootstrap,
  'hidden-chain-attack': mountHiddenChainAttack,
  'eclipse-isolation': mountEclipseIsolation,
  'selfish-mining-withhold': mountSelfishMiningWithhold,
  'defense-rings': mountDefenseRings,
  'hashrate-cost-chain': mountHashrateCostChain,
  'coins-cache-lookup': mountCoinsCacheLookup,
  'block-file-index': mountBlockFileIndex,
  'mempool-lifecycle': mountMempoolLifecycle,
  'assumeutxo-bootstrap': mountAssumeutxoBootstrap,
  'utxo-lifecycle': mountUtxoLifecycle,
  'script-lock-fit': mountScriptLockFit,
  'psbt-relay': mountPsbtRelay,
  'layer-foundation': mountLayerFoundation,
  'gossip-network': mountGossipNetwork,
  'honesty-checkpoints': mountHonestyCheckpoints,
  'two-decentralization-audits': mountTwoDecentralizationAudits,
  'six-shield-wall': mountSixShieldWall,
  'genesis-blueprint-rebuild': mountGenesisBlueprintRebuild,
  'timewarp-clock-trick': mountTimewarpClockTrick,
  'quantum-key-duplication': mountQuantumKeyDuplication,
};

(function () {
  const embeds = document.querySelectorAll<HTMLElement>('.visual-embed[data-visual]');
  if (embeds.length === 0) return;
  const lang = document.documentElement.lang === 'ja' ? 'ja' : 'en';
  embeds.forEach((el) => {
    const name = el.getAttribute('data-visual');
    const fn = name ? VISUAL_DRAWERS[name] : undefined;
    if (fn) {
      try {
        fn(el, lang);
      } catch (e) {
        // Unknown/failed drawer: leave the placeholder empty rather than
        // breaking the rest of the page.
      }
    }
  });
})();
