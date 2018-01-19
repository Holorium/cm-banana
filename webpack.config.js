const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        banana: ['@/plugin.js'],
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'banana',
        libraryTarget: 'jsonp',
    },
    module: {
        rules: [{ // basic js loaders
            test: /\.js$/,
            exclude: /node_modules/,
            use: [
                'eslint-loader',
            ]
        }, { // load css
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
        }],
    },
    resolve: {
        alias: {
          '@': path.resolve(__dirname, 'src')
        }
    },
    plugins: [new CopyWebpackPlugin([{
        from: path.resolve(__dirname, 'node_modules/collectors-management-core/dist'),
        to: '',
    }, {
        from: '../static',
        to: '.',
    }])],
};
