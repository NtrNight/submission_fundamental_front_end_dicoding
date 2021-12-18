/* eslint-disable linebreak-style */
/* eslint-disable semi */
/* eslint-disable indent */
/* eslint-disable comma-dangle */
/* eslint-disable eol-last */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
const HtmlWebPlugin = require("html-webpack-plugin");
const path = require("path");
const { webpack } = require("webpack");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPlugin({
            template: "./src/index.html",
            filename: "index.html"
        })
    ]
}