const path = require('path');

module.exports = {
    // Specify Package Type and Entry File
    mode: "production",
    entry: {
        app: './src/app.ts',    // Main App | Note: Can be called anything
        file1: './src/file1.ts' // Another Entry

    },


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
        filename: '[name].js',                  // Outputs Files as their own Name
        path: path.resolve(__dirname, 'dist')
    }
};