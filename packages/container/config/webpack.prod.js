const { merge } = require('webpack-merge')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common')

// This is useful when we want webpack to share dependencies automatically
const packageJson = require('../package.json')

// We will define this variable when we build our environment throw our CI/CD pipelines
const domain = process.env.PRODUCTION_DOMAIN

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        // Domain is dynamic for production, so we will get it from an environment variable
        marketing: `marketing@${domain}/marketing/remoteEntry.js`
      },
      shared: packageJson.dependencies
    })
  ]
}

module.exports = merge(commonConfig, prodConfig)
