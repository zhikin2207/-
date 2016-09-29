const webpack = require('webpack');
const path = require('path');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: './index',
    output: {
        path: path.join(__dirname, 'www'),
        publicPath: '/',
        filename: 'app.bundle.js'
    },
    plugins: [
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [{ 
            test: /\.js$/,
            include: path.join(__dirname, 'src'),
            loader: 'babel' 
        }, {
            test: /\.sass$/,
            loader: 'style!css!autoprefixer?browsers=last 2 versions!sass'
        }, {
            test: /\.css$/,
            loader: 'style!css!autoprefixer?browsers=last 2 versions'
        }, {
            test: /\.(png|jpg|jpeg|svg|ttf|eot|woff|woff2)$/,
            loader: 'file'
        }]
    }
};
