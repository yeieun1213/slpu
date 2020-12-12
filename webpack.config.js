const path = require('path');
console.log(path);
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    devtool: 'inline-source-map',
    performance: {hints: false},
    mode: 'development',
    entry: {
        index: './index.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/'
    },
    resolve:{
        extensions: ['.js', '/jsx']
    },

    module: {
        rules: [
            {
                test: /\.css/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test:/\.(jpg|png|svg)$/,
                use:{
                    loader: 'file-loader',
                    options: {
                        limig: 25000
                    }
                }
            },
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_module/,
                options: {
                    presets:[
                    [
                        '@babel/preset-env', {
                            targets: {node: 'current'},
                            modules: 'auto',
                        }
                    ],
                    '@babel/preset-react',
                    ],
                    plugins:[
                        "@babel/plugin-proposal-class-properties",
                    ]                    
                }
            },

        ],
    },


    devServer: {
        inline: true,
        port: 3000,
        open: true,
        //contentBase: "./dist",
        historyApiFallback: true,
        publicPath: "./",
        hot: true,
    },
    plugins: [
        //new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./dist/index.html",
            filename: "index.html"
        }
        )
        //new HtmlWebpackRootPlugin('root')
    ]
};