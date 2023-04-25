const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    // clean: true, czyszczenie folderu dist, ja wolę to mieć wyłączone
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    proxy: {
      '/': {
        target: 'http://localhost:3000', //serwer backendowy express używany do wysyłania danych z formularza do bazy mongo
        secure: false,
        changeOrigin: true,
        onProxyReq: proxyReq => {
          if (proxyReq.getHeader('origin')) {
            proxyReq.setHeader('origin', "http://localhost:3000/");
          }
        },
      },
    },
    port: 9000, //devserver frontendowy webpack, na którym działa aplikacja 
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }), 
    new HtmlWebpackPlugin({
      template: "src/index.html",
      filename: 'step2.html'
    }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          // "style-loader", //PO INSTALACJI miniCssExtractPlugin TO TRZEBA WYŁĄCZYĆ
          "css-loader",
          "sass-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [["autoprefixer"]],
              },
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true,
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        type: "asset/resource",
      },
      
    ],
  },
};
