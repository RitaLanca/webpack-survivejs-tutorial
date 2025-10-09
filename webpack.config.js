const { mode } = require("webpack-nano/argv");
const {
  MiniHtmlWebpackPlugin,
} = require("mini-html-webpack-plugin");
const { WebpackPluginServe } = require('webpack-plugin-serve');

module.exports = {
  watch: mode === "development",
  entry: [
    "./src",
    'webpack-plugin-serve/client' // ← important: this is required, where the magic happens in the browser
  ],
  mode, // the current mode => production, development, etc
  plugins: [
    new MiniHtmlWebpackPlugin({ context: { title: "Demo" } }),
    new WebpackPluginServe({
      port: parseInt(process.env.PORT,10) || 3000,
      static: "./dist",
      liveReload: true,
      waitForBuild: true
    })
  ],
};