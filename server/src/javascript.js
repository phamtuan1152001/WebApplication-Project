const express = require("express");
require('dotenv').config();
const app = express();
const bodyParser = require('body-parser')
const morgan = require("morgan");
const cors = require("cors")

require('./config/db/connect').mongoURI;
const index = require('./route/index')
const product = require('./route/product')
const order = require('./route/order')

app.use(cors({
  origin: '*'
}))

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

app.use("/user", index);
app.use("/", product);
app.use("/v1/api", order);


// Catch 404 Errors and forward them to error handler
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// Error handler function
app.use((err, req, res, next) => {
  const error = app.get("env") === "development" ? err : {};
  const status = err.status || 500;

  // response to client
  return res.status(status).json({
    error: {
      message: error.message,
    },
  });
});



const port = process.env.PORT;
// app.use(function(req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', process.env.REACT_URL)
//   res.setHeader('Access-Control-Allow-Methods', 'GET')
//   res.setHeader('Access-Control-Allow-Headers', 'application/json')
//   res.setHeader('Access-Control-Allow-Credentials', true)

//   next()
// })
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

