const webpack = require('webpack');
const minifier = require('minifier')
// const input = ['./src/css/data.css', './src/css/filter.css']
// const options = {
//   output: "jaljagran-data.min.css"
// }
// minifier.minify(input, options);

module.exports = {
  // entry: './main.js',
  entry: {
    app: './main.jsx'
  },
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.min.js',
  },
  plugins: [
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: JSON.stringify('production')
    //   }
    // }),
    // new webpack.optimize.DedupePlugin(),
    // new webpack.optimize.UglifyJsPlugin(),
    // new webpack.optimize.AggressiveMergingPlugin()
  ],
  node: {
    net: 'empty',
    tls: 'empty',
    fs: 'empty'
  },
  devServer: {
    disableHostCheck: true
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query:
        {
          presets:['react']
        }
      }
    ]
  }
};
