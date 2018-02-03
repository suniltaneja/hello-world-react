const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    entry: './client/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { 
                test: /\.jsx?$/, 
                loader: 'babel-loader', 
                exclude: /node_modules/ 
            },
            {
              test: /\.scss$/,
              use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            }
              
            // ,
            // {
            //   test: /\.scss$/,
            //   use: ExtractTextPlugin.extract({
            //     fallback: 'style-loader',
            //     use: ['css-loader', 'sass-loader']
            //   })
            // }
        ]
    },
    plugins: [
     new ExtractTextPlugin({filename : '/css/main.css', disable : false})
      //if you want to pass in options, you can do so:
      //new ExtractTextPlugin({
      //  filename: 'style.css'
      //})
    ],
    devServer: {
        contentBase: './dist'
    }
};