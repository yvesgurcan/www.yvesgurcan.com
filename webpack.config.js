const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  
  // just a placeholder, really
  entry: ['./index.js', './style.scss'],

  devServer: {
    port: 8080,
    contentBase: './',
    watchContentBase: true
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],

  module:{
    rules:[
      {
        test:/\.(s*)css$/,
        use:['style-loader','css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,  
        use: [{
            loader: 'url-loader',
        }]
    }
     ]
  },

  watch: true,

  mode: 'production'

}