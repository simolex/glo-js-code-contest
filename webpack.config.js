const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  context: path.resolve(__dirname, "src"),
  entry: {
    index: "./index.js",
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     title: "Output Management",
  //   }),
  // ],
  devtool: "inline-source-map",
  output: {
    filename: "js/[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    hot: true,
    static: {
      directory: "./dist",
      watch: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
