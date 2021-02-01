const isProd = process.env.NODE_ENV === "production";

module.exports = {
  // Use the CDN in production and localhost for development.
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
    };
  },
  assetPrefix: isProd
    ? "https://cdn.statically.io/gh/etcdigital/etcdigital.github.io/gh-pages/"
    : "",
};
