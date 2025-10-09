const { mode } = require("webpack-nano/argv");
const {
  MiniHtmlWebpackPlugin,
} = require("mini-html-webpack-plugin");
const { WebpackPluginServe } = require('webpack-plugin-serve');

module.exports = {
  watch: mode === "development",
  watchOptions: { // to config POLLING instead of watching files
    aggregateTimeout: 300, // Delay the first rebuild (in ms)
    poll: 1000, // Poll using interval (in ms or a boolean)
    ignored: /node_modules/, // ignore to decrease CPU usage
  },
  entry: [
    "./src",
    'webpack-plugin-serve/client' // ← important: this is required, where the magic happens in the browser
  ],
  mode, // the current mode => production, development, etc
  plugins: [
    new MiniHtmlWebpackPlugin({ context: { title: "Demo" } }),
    new WebpackPluginServe({
      host: "localhost", // "0.0.0.0"
      port: parseInt(process.env.PORT,10) || 3000,
      static: "./dist",
      liveReload: true,
      waitForBuild: true
    })
  ],
};