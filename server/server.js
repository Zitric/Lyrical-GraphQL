const express = require('express')
const expressGraphQL = require('express-graphql')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

// Replace with your mongoLab URI
const MONGO_URI =
  'mongodb+srv://zitric:gandalias@lyricsdb-dxlzi.mongodb.net/test?retryWrites=true&w=majority'
if (!MONGO_URI) {
  throw new Error('You must provide a MongoLab URI')
}

mongoose.Promise = global.Promise
mongoose.connect(MONGO_URI, { useNewUrlParser: true })
mongoose.connection
  .once('open', () => console.log('Connected to MongoLab instance.'))
  .on('error', error => console.log('Error connecting to MongoLab:', error))

const webpackMiddleware = require('webpack-dev-middleware')
const webpack = require('webpack')
const schema = require('./schema/schema')
const webpackConfig = require('../webpack.config.js')

app.use(bodyParser.json())
app.use(
  '/graphql',
  expressGraphQL({
    schema,
    graphiql: true,
  }),
)

app.use(webpackMiddleware(webpack(webpackConfig)))

module.exports = app
