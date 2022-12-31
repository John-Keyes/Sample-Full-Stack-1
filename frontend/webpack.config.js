
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
//path is a node native utility module: https://nodejs.org/api/path.html 
module.exports = (env) => {
    return {
        entry: path.join(__dirname, "src", "index.js"),
        devtool: "inline-source-map",
        output: {
          path: path.resolve(__dirname, "dist"),
          filename: 'AppOut.js',
          publicPath: "/"
        },
        devServer: {
          compress: true,
          port: 3030,
          //server: "https",
          proxy: {
            "/api": {
              target: env.HOST,
              pathRewrite: { "^/api": '' },
            },
          }
        },
        module: {
            rules: [
              {
                test: /\.?((j|t)(s|sx))$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"]
                  }
                }
              },
              //loading styles
              {
                test: /\.(sa|sc|c)ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"]
              },
              //images to load
              {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                type: "asset/resource",
                //use: "file-loader?name=./images/"
              },
              //svg as component
              {
                test: /\.svg$/,
                use: "@svgr/webpack"
              },
            ]
        },
        plugins: [
          new webpack.DefinePlugin({"HOST": JSON.stringify(env.HOST)}),
          new HtmlWebpackPlugin({template: "./public/index.html", manifest: "./public/manifest.json"})
        ]
    };
}