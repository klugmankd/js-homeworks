const webpack = require('webpack');
const path = require('path');

module.exports = {
    devtool: 'source-map',
    debug: true,
    verbose: true,
    displayErrorDetails: true,
    context: __dirname,
    stats: {
        colors: true,
        reasons: true
    },
    entry: {
        'my-app': './app/app.ts'
    },
    resolve: {
        extensions: ['', '.ts', '.js'],
        root: __dirname,
        modulesDirectories: ['node_modules']
    },
    module: {
        preLoaders: [{
            test: /\.js$/,
            loader: 'source-map-loader',
            exclude: [
                'node_modules/rxjs'
            ]
        }],
        loaders: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader'
            }
        ],
    },

    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(true),
    ],

    output: {
        path: 'src',
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].bundle.map',
        //chunkFilename: '[id].[chunkhash].chunk.js'
    }
};
