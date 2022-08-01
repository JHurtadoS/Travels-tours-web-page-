const path = require("path");
const ExcludeAssetsPlugin = require("webpack-exclude-assets-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const host = process.env.HOST || "localhost";
const devMode = process.env.NODE_ENV !== "production";
module.exports = {
  devtool: "source-map",
  mode: "development",
  entry: "./src/js/main.js",
  cache: false,

  output: {
    path: path.resolve(__dirname + "/public"),
    filename: "[name].js",
    filename: "js/bundle.js",
  },
  devServer: {
    port: 3000,
    static: path.resolve(__dirname, "public"),
    liveReload: true,
    host,
  },
  mode: "development",
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: "style-loader!css-loader!sass-loader",
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "/build/Fonts",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "dist/[id].css",
    }),
  ],

  module: {
    rules: [
      {
        test: /.s?css$/,

        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { sourceMap: true } },
          { loader: "sass-loader", options: { sourceMap: true } },
        ],
      },
    ],
  },

  /*optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin()],
  },*/
};
