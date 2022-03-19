const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const morgan = require("morgan");

require('./config/db/connect').mongoURI;
require('dotenv').config();
const index = require('./route/index')
const api = require('./route/api')

// Middlewares
app.use(morgan('dev'))
app.use(bodyParser.json())

// HTTP logger
app.use(morgan("combined"));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// Routes
app.get('/', (req, res, next) => {
  return res.status(200).json({
      message: 'Server is OK!'
  })
})
app.use('/users', index)
app.use('/api/v1', api)

// Catch 404 Errors and forward them to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// Error handler function
app.use((err, req, res, next) => {
  const error = app.get('env') === 'development' ? err : {}
  const status = err.status || 500

  // response to client
  return res.status(status).json({
      error: {
          message: error.message
      }
  })
})

const port = process.env.PORT;
app.listen(port , () => {
  console.log(`Example app listening at http://localhost:${port}`);
});