
const webpack = require('webpack');
const path = require('path');
//path is a node native utility module: https://nodejs.org/api/path.html 
module.exports = (env) => {
    return {
        entry: path.join(__dirname, "src", "index.js"),
        mode: "development",
        devtool: "inline-source-map",
        output: {
            path: path.resolve(__dirname, "dist")
        },
        devServer: {
            compress: true,
            port: 8084,
        },
        /*resolver: {
            extensions: ['jsx', 'js', 'ts', 'tsx']
            test: /\.?(js|jsx|ts|tsx)$/, /\.?(js)$/,
        },*/
        module: {
            rules: [
              {
                test: /\.?(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
              },
              //css
              {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
              },
              //images to load
              {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                use: ['file-loader']
              },
              //svg as component
              {
                test: /\.svg$/,
                use: ['@svgr/webpack']
              },
            ]
        },
        plugins: [
            new webpack.DefinePlugin({"HOST": JSON.stringify(env.HOST)})
        ]
    };
}