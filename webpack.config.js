module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        preLoaders: [
          {
            test: /\.js$/,
            loader: "eslint-loader",
            exclude: /node_modules/,
          },
        ],
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ["react-hot", "babel-loader"],
            },
            {
                test: /\.css$/,
                loaders: ["style", "css"]
            }
        ]
    }
};