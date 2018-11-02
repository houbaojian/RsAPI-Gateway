'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // BASE_API: ' "http://127.0.0.1:7300/mock/5b8df84ba0c56a24940f980e/common/"',
  BASE_API: '" https://easy-mock.com/mock/5bd2c5c072587d2d96a836b7/admaxT"',
})
