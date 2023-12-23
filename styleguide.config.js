const webpack = require('webpack')

const webpackConfig = {
  module: {
    rules: [
      // Babel loader will use your project’s babel.config.js
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      // Other loaders that are needed for your components
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    // Rewrites the absolute paths to those two files into relative paths
    new webpack.NormalModuleReplacementPlugin(
      /react-styleguidist\/lib\/loaders\/utils\/client\/requireInRuntime$/,
      'react-styleguidist/lib/loaders/utils/client/requireInRuntime'
    ),
    new webpack.NormalModuleReplacementPlugin(
      /react-styleguidist\/lib\/loaders\/utils\/client\/evalInContext$/,
      'react-styleguidist/lib/loaders/utils/client/evalInContext'
    )
  ]
}

module.exports = {
  webpackConfig,
  components: 'src/components/**/*.js'
}
