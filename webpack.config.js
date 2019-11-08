const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');

module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif|ico|svg)$/i,
                use: [
                  'file-loader?name=./images2/[name].[ext]',
                  {
                    loader: 'image-webpack-loader',
                    options: {
                      bypassOnDebug: true, // webpack@1.x
                      disable: true // webpack@2.x and newer
                    }
                  }
                ]
            },
            // {
            //     test: /\.svg$/,
            //     loader: 'svg-inline-loader'
            // },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                loader: 'file-loader?name=./fonts/[name].[ext]'
            }
            // {
            //     test: /\.(png|jp(e*)g|svg)$/,
            //     use: [{
            //         loader: 'url-loader',
            //         options: {
            //             limit: 8000, // Convert images < 8kb to base64 strings
            //             name: 'images2/[hash]-[name].[ext]'
            //         }
            //     }]
            // }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.[contenthash].css',
        }),

        new HtmlWebpackPlugin({
            inject: false,
            // hash: true,
            template: './src/index.html',
            filename: 'index.html'
          })
    ]
};