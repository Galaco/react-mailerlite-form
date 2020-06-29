const webpack = require('webpack')
const path = require('path')
const MinifyPlugin = require('babel-minify-webpack-plugin')

let libraryName = 'react-mailerlite-form'
let outputFile
let mode = process.env.NODE_ENV

if (process.env.NODE_ENV === 'production') {
  outputFile = libraryName + '.min.js'
} else {
  outputFile = libraryName + '.js'
}

const config = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd'
  },
  mode: mode,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /(node_modules)/,
        loader: 'ts-loader'
      }
    ]
  },
  externals: {
    react: 'react'
  },
  plugins:[
    new webpack.DefinePlugin({
     'process.env': {
       'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
     }
   })
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  }
}

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(new MinifyPlugin())
}

module.exports = config
