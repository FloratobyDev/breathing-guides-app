const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { DefinePlugin } = require("webpack");

module.exports = {
  entry: "frontend/src/index.tsx",
  output: {
    path: path.join(__dirname, "/dist/public/"),
    filename: "[name].[contenthash].js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: path.resolve(__dirname, "frontend", "src"),
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-react",
              "@babel/preset-env",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, "frontend", "src"),
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.{tsx|ts}?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        include: path.resolve(__dirname, "frontend", "src"),
        exclude: /node_modules/,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
    plugins: [new TsconfigPathsPlugin()],
  },
  mode: "production",
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "frontend", "index.html"),
      filename: "index.html",
      favicon: path.join(__dirname, "frontend", "src", "asset", "favicon.ico"),
    }),
    new DefinePlugin({
      PRODUCTION: JSON.stringify(true),
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].[contenthash].css",
    }),
  ],
};
