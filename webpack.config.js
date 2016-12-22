var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool: 'cheap-module-eval-source-map',

	entry: ['webpack/hot/dev-server','webpack-hot-middleware/client?reload=true','./client/src/js/main.jsx'],
  output: {
    path: path.join(__dirname, 'client', 'assets'),
    //publicPath: './client/assets/',
    filename: 'bundle.js'
  },

  module: {
    loaders : [{
     loader: 'babel',
     test : /\.jsx$/
   },
   ]
 },

 node: {
  fs: "empty",
  net:"empty"
},

/*devServer: {
    host: 'localhost',
    port: 8080,
    contentBase: path.join(__dirname, 'client', 'assets'),
    hot: true,
    proxy: {
      '/api/*' : 'http://localhost:3000',
    }
  },*/

devtool: '#source-map',

watch: true,

resolve: {
  extensions: ['','.js','.jsx','/index','/index.js','/index.jsx']
},

plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]

}