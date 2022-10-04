const express = require('express');
const cors = require('cors');

// const arrayOfValidOrigins = [
//   'http://localhost:4200'
// ];

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204,
}));
// app.options('*', cors({ origin: true }));

app.use((req, res, next) => {
  // const origin = req.headers.origin;
  // arrayOfValidOrigins is an array of all the URL from where you want to allow
  // to accept requests. In your case: ['http://localhost:3000'].
  // In case you want to accept requests from everywhere, set:
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Here allow all the HTTP methods you want
  res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,HEAD,PUT,OPTIONS');
  // Here you allow the headers for the HTTP requests to your server
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  // Method to reference to the next Node.js function in your flow
  next();
});

app.get('/welcome', (req, res) => {
  return res.json({ message: 'Welcome' });
});

const route = require('./routes/route');
app.use('/', route);

module.exports = app;
