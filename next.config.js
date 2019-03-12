const withCSS = require('@zeit/next-css')
module.exports = withCSS({
    /* my next config */
        entry: './pages/index.js',
        output: {
          path: __dirname + '/app/assets/javascripts',
          filename: 'index.js'
        },
        resolve: {
          extensions: ['', '.js', '.jsx']
        },
        module: {
          loaders: [
            {
              test: /\.jsx?$/,
              loader: 'babel',
              exclude: /node_modules/,
              query: {
                cacheDirectory: true,
                presets: ['react', 'es2015']
              }
            }
          ]
        }
})