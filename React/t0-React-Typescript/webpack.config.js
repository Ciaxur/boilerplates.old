// Imports Module
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Variables
const isProduction = process.argv.indexOf('-p') !== -1; // True (Production) | False (Development)

/**
 * Client Configuration Part of the Webpack
 */
const clientConfig = {
    // Build Config
    mode: isProduction ? 'production' : 'development',
    devtool: 'source-map',

    // Entry Files
    entry: {
        index: './src/index.tsx'
    },

    // Resolve File Types
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        modules: [
            path.resolve('src'),
            path.resolve('node_modules')
        ]
    },

    // Apply Loaders
    module: {
        rules: [
            {   // Typescript Loader
                test: /\.tsx?$/,
                use: 'ts-loader'
            },

            {   // CSS Loader
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },

            {   // Image Loader
                test: /\.(jpe?g|svg|gif|png)$/i,
                use: ['file-loader']
            }
        ]
    },

    // Plugins
    plugins: [
        new HtmlWebpackPlugin({
            title: 'React App',
            template: './src/index.html',
            minify: isProduction ? true : false
        })
    ],

    // Output
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};

// Multiple Configuration Exports
module.exports = [clientConfig];