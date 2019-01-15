module.exports = {
    entry: './App/index.jsx',
    mode: /*'development'*/ 'production',
    output: {
        path: require("path").resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }]
    }
};
