const isProd = process.env.NODE_ENV === "production";

module.exports = {
  ...(isProd
    ? { basePath: "/webcamera.com.br", assetPrefix: "/webcamera.com.br" }
    : {}),
};
