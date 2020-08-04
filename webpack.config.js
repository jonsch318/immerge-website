const WebpackNotifierPlugin = require("webpack-notifier");
const path = require("path");

module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                   'postcss-loader'
                ]
            }
        ]
    },
    plugins: [
        new WebpackNotifierPlugin({
            alwaysNotify: true,
            title: "Immerge-Homepage",
            contentImage: path.join(__dirname, "src/assets/favicon/favicon-32x32.png")
        }),
    ]
}