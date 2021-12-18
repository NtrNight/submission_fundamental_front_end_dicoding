/* eslint-disable linebreak-style */
/* eslint-disable semi */
/* eslint-disable eol-last */
/* eslint-disable comma-dangle */
/* eslint-disable indent */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
    mode: "development"
})