const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const precss = require('precss');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        'babel-polyfill',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [ //все остальное осталось не тронутым
            {
                test: /\.js$/,
                enforce: "pre",
                loader: 'eslint-loader',
                include: [
                    path.resolve(__dirname, "src"),
                ]
            },
            {
                test: /\.js$/,
                loader: 'react-hot-loader',
                include: [
                    path.resolve(__dirname, "src"),
                ]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [
                    path.resolve(__dirname, "src"),
                ],
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ['transform-runtime']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
                include: [
                    path.resolve(__dirname, "src"),
                ]
            },
            {
                test: /\.png$/,
                loader : 'file-loader?name=[path][name]',
                include: [
                    path.resolve(__dirname, "img"),
                ]
            }
        ]
    }
};