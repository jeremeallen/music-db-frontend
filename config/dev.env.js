var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_LOCATION: '"http://api.music-db.dev"',
  API_CLIENT_ID: "'3'",
  API_CLIENT_SECRET: "'Si2bx1IH4mr28V13NGPRfCvRStnCicC5HWhFGYvg'",
  BROADCAST_AUTH_ENDPOINT: '"http://api.music-db.dev/broadcasting/auth"',
  PUSHER_KEY: '"64e77c6087d76116680e"',
  PUSHER_CLUSTER: '"us2"',
})
