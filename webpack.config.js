/* eslint-disable @typescript-eslint/no-unsafe-assignment*/
/* eslint-disable @typescript-eslint/no-unsafe-call*/

const WebpackNotifierPlugin = require("webpack-notifier");
const StylelintPlugin = require("stylelint-webpack-plugin");
const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["postcss-loader"],
      },
    ],
  },
  plugins: [
    new WebpackNotifierPlugin({
      alwaysNotify: true,
      title: "Immerge-Homepage",
      contentImage: path.join(__dirname, "src/assets/favicon/favicon-32x32.png"),
    }),
    new StylelintPlugin(),
  ],
};
