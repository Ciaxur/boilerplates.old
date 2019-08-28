const path = require('path');

module.exports = {
    mode: 'production',         // Production | Development | None
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    }
};