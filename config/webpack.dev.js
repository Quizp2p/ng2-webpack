const commonConfig = require('./webpack.common.js');
const PATHS = require('./paths');

const webpackMerge = require('webpack-merge');
const DefinePlugin = require('webpack/lib/DefinePlugin');

const METADATA = webpackMerge(commonConfig.metadata, {
    ENV: 'development',
    host: 'localhost',
    port: 3000
});

module.exports = webpackMerge(commonConfig, {
    metadata: METADATA,
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
            'ENV': JSON.stringify(METADATA.ENV)
        })
    ]
});