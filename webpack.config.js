const path = require('path');
module.exports = {
   entry: './src/index.js',
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.js',
      libraryTarget: 'commonjs2',
   },
   module: {
      rules: [{
         test: /\.js$/,
         include: path.resolve(__dirname,'src'),
         exclude: /(node_modules|dist|sample)/,
         use: {
            loader: 'babel-loader',
         },
      }],
   }
};