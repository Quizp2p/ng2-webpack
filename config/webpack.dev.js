const commonConfig = require('./webpack.common.js');
const PATHS = require('./paths');

const webpackMerge = require('webpack-merge');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const METADATA = webpackMerge(commonConfig.metadata, {
    ENV: 'development',
    host: 'localhost',
    port: 3200
});

module.exports = webpackMerge(commonConfig, {
    metadata: METADATA,
    devtool: 'source-map',
    output: {
        path: PATHS.dist,
        filename: 'bundle.js'
    },
    devServer: {
        port: METADATA.port,
        host: METADATA.host,
        historyApiFallback: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        },
        outputPath: PATHS.dist
    },
    plugins: [
        new DefinePlugin({
            'process.env.ENV': JSON.stringify(METADATA.ENV)
        }),
        new CommonsChunkPlugin({
            names: ['vendor', 'polyfills'],
            filename: '[name].js'
        }),
        new ExtractTextPlugin('styles.css'),
        new UglifyJsPlugin({
            compress: {
                warnings: false
            },
            comments: false
        })
    ]
});