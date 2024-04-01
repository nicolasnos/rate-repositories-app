const path = require("path");
const createWebpackConfigAsync = require("@expo/webpack-config");

module.exports = async function (env, arg) {
  const config = await createWebpackConfigAsync(env, arg);
  config.module.rules.push({
    test: /\.js$/,
    loader: "babel-loader",
    include: [path.join(__dirname, "node-modules/react-router-native")],
  });
  return config;
};
