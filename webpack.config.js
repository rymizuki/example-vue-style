const path    = require('path')
const webpack = require('webpack')

module.exports = [
  {
    entry: {
      vendor: ['vue'],
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].dll.js',
      library: 'lib_[chunkhash]',
    },
    resolve: {
      modules: [
        path.join(__dirname, 'src'),
        'node_modules',
      ]
    },
    plugins: [
      new webpack.DllPlugin({
        path: path.join(__dirname, 'manifests/[name].json'),
        name: 'lib_[chunkhash]',
      })
    ],
  },
  {
    entry: {
      example: 'example',
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].bundle.js',
    },
    resolve: {
      extensions: [
        '.js',
        '.vue',
        '.scss',
      ],
      modules: [
        path.resolve(__dirname, 'src'),
        'node_modules',
      ]
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'vue-loader',
              options: {
                postcss: [
                  require('autoprefixer'),
                ],
              }
            }
          ]
        },
      ]
    },
    plugins: [
      new webpack.DllReferencePlugin({
        context: __dirname,
        manifest: require('./manifests/vendor.json'),
      }),
    ]
  }
]