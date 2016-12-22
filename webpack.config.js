var path = require('path');
module.exports = {
    devtool: 'cheap-eval-source-map',
    entry: {
   app: ['./src/js/main.jsx']
 },
 output: {
   path: path.join(__dirname, 'assets'),
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

    watch: true,

    resolve: {
   extensions: ['','.js','.jsx','/index','/index.js','/index.jsx']
 },
 devServer : {
       host : '0.0.0.0',
       port : '8080'
   }

}

