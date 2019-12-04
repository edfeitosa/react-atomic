const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

var isPrd = process.env.NODE_ENV === "production";
var folder = isPrd ? "/dist" : "/public";

module.exports = {
  entry: ["regenerator-runtime", "./src/index.jsx"],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  output: {
    path: __dirname + folder,
    publicPath: "/",
    filename: "bundle.js"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/index.ejs`,
      filename: `${__dirname}/${folder}/index.html`,
      lang: "pt-BR",
      title: "Atomic Model",
      meta: {
        charset: "utf-8",
        viewport: "width=device-width, height=device-height, initial-scale=1"
      },
      scripts: [],
      links: [
        {
          href:
            'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700"'
        },
        { href: "https://fonts.googleapis.com/icon?family=Material+Icons" }
      ]
    })
  ],
  devServer: {
    contentBase: "./public",
    compress: true,
    hot: true,
    port: 3000,
    historyApiFallback: true
  }
};
