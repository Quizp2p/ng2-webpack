const commonConfig = require('./webpack.common.js');
const PATHS = require('./paths');

const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const WebpackMd5Hash = require('webpack-md5-hash');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const DedupePlugin = require('webpack/lib/optimize/DedupePlugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const NoErrorsPlugin = require('webpack/lib/NoErrorsPlugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const METADATA = webpackMerge(commonConfig.metadata, {
    ENV: 'production'
});

module.exports = webpackMerge(commonConfig, {
    metadata: METADATA,
    devtool: 'source-map',
    output: {
        path: PATHS.dist,
        filename: 'bundle.[chunkhash].js'
    },
    plugins: [
        new NoErrorsPlugin(),
        new WebpackMd5Hash(),
        new DedupePlugin(),
        new ExtractTextPlugin('styles.[contenthash].css'),
        new CommonsChunkPlugin({
            names: ['vendor', 'polyfills'],
            filename: '[name].[chunkhash].js'
        }),
        new DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(METADATA.ENV)
        }),
        new UglifyJsPlugin({
            beautify: false,
            mangle: {
                screw_ie8: true,
                keep_fnames: true
            },
            compress: {
                screw_ie8: true
            },
            comments: false
        })
    ]

});