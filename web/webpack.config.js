module.exports = {
  context: __dirname+"/src",
  entry: "./index.js"
  ,

  output: {
    path: __dirname + "/static",
    filename: "bundle.js",
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "css-loader" },
      { test: /\.js?$/, exclude: /node_modules/, loader: "babel-loader", query: { presets: ["react", "es2015","stage-0","stage-1", "stage-2"] }},
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'react-native$': 'react-native-web'
    }
  }
};