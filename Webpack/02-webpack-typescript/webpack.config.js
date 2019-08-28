const path = require('path');

module.exports = {
    // Specify Package Type and Entry File
    mode: "production",
    entry: './src/app.ts',


    // Resolve Path for Typescript in 'src' Directory
    resolve: {
        extensions: ['.ts'],
        modules: [
            path.resolve('src'),
            path.resolve('node_modules')
        ]
    },

    // Apply Loaders
    module: {
        rules: [
            {   // Typescript Loader
                test: /\.ts$/,
                use: 'ts-loader'
            }
        ]
    },

    
    // Specify Output
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};