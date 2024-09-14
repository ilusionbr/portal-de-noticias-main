const express = require('express')
const app = express()
const port = process.env.PORT || 10000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})
var app = require('./config/server');

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
