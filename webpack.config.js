const HTMLPlugin = require('html-webpack-plugin')

module.exports = {
    entry: ['./src/index.js'],
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    devServer: {
        historyApiFallback: true,
        contentBase: __dirname + '/dist',
        open: true,
        compress: true,
        hot: true,
        port: 9000,
      },
    plugins: [
        new HTMLPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),       
    ],
    resolve: {
        extensions: ['.js']
    }
}