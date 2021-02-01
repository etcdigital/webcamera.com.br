const isProd = process.env.NODE_ENV === "production";

module.exports = {
  ...(isProd
    ? {
        basePath: "/webcamera.com.br",
        assetPrefix:
          "https://cdn.statically.io/gh/etcdigital/webcamera.com.br/gh-pages/",
      }
    : {}),
};
