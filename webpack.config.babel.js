//https://medium.com/oredi/webpack-with-babel-7-b61f7caa9565
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ScriptExtHtmlWebpackPlugin from "script-ext-html-webpack-plugin";
export default {
  mode: "development",
  entry: path.join(__dirname, "src/index.js"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Custom template",
      template: path.join(__dirname, "src/index.template.html")
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: "defer"
    })
  ],
  stats: {
    colors: true
  },
  devtool: "source-map",
  devServer: {
    contentBase: "./dist"
  }
};
