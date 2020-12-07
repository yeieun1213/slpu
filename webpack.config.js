const path = require('path');
console.log(path);

module.exports = {
    devtool: 'inline-source-map',
    performance: {hints: false},
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve:{
        extensions: ['.js', '/jsx']
    },

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.js$/,
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
                    ]
                }
            },
        ],
    },


    devServer: {
        inline: true,
        port: 3000,
        open: true,
        contentBase: "./dist",
        historyApiFallback: true

    }
};