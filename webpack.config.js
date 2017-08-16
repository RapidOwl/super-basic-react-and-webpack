const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: "./src/index.js",

    plugins: [
        new webpack.HotModuleReplacementPlugin() // Enable HMR
    ],

    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },

    devServer: {
        hot: true, // Tell the dev-server we're using HMR
        contentBase: path.resolve(__dirname, "dist"),
        publicPath: "/"
    },

    devtool: "source-map"
};
