const express = require('express');
const Router = express.Router();

const { Auth, Add, Put, ItemUpdate } = require('../config/middleware');
const AuthController = require('../controllers/auth.controller');
const {
  AddController,
  ListController,
  ListItemBySellerController,
  ListItemByTransController,
  RetrieveController,
  PutController,
  DeleteController,
  ItemUpdateController,
  SummaryController
} = require('../controllers/controller');

Router.post('/login', AuthController.Login);
Router.post('/register', AuthController.Register);
Router.post('/add/:type', Auth, Add, AddController);
Router.get('/summary/:year', Auth, SummaryController);
Router.get('/list/:type/:year', Auth, ListController);
Router.get('/item/list/seller/:sellerId', Auth, ListItemBySellerController);
Router.get('/item/list/transaction/:transId', Auth, ListItemByTransController);
Router.get('/retrieve/:type/:id', Auth, RetrieveController);
Router.put('/put/:type/:id', Auth, Put, PutController);
Router.put('/item/update/:id', Auth, ItemUpdate, ItemUpdateController);
Router.delete('/delete/:type/:id', Auth, DeleteController);

module.exports = Router;
