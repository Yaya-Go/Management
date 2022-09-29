const express = require('express');
const Router = express.Router();

const { Auth, Add, Put, ItemUpdate } = require('../config/middleware');
const AuthController = require('../controllers/auth.controller');
const {
  AddController,
  ListController,
  ListItemController,
  RetrieveController,
  PutController,
  DeleteController,
  ItemUpdateController
} = require('../controllers/controller');

Router.post('/login', AuthController.Login);
Router.post('/register', AuthController.Register);
Router.post('/add/:type', Auth, Add, AddController);
Router.get('/list/:type', Auth, ListController);
Router.get('/item/list/:sellerId', Auth, ListItemController);
Router.get('/retrieve/:type/:id', Auth, RetrieveController);
Router.put('/put/:type/:id', Auth, Put, PutController);
Router.put('/item/update/:id', Auth, ItemUpdate, ItemUpdateController);
Router.delete('/delete/:type/:id', Auth, DeleteController);

module.exports = Router;
