export const SITE_NAME = 'Bitcoin Institute';
export const PRIMARY_ORIGIN = 'https://bitcoin-institute.pages.dev';
export const MIRROR_ORIGIN = 'https://cypher256.github.io';
export const MIRROR_BASE = '/BitcoinArchive';

export function getDeploymentConfig(env = process.env) {
  const isPrimaryDeployment = Boolean(env.CF_PAGES);

  return {
    isPrimaryDeployment,
    site: isPrimaryDeployment ? PRIMARY_ORIGIN : MIRROR_ORIGIN,
    base: isPrimaryDeployment ? '/' : MIRROR_BASE,
  };
}
