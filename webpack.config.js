module.exports = {
    mode: 'development',
    entry: './main.js',
    output: {
        filename: 'main.js',
        publicPath: 'dist',
    },
    devServer:{
        open: true,
        port: '8080'
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                }
            }
        ]
    }
}