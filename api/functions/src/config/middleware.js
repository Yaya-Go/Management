const { admin } = require('./admin');

const Auth = async (req, res, next) => {
  try {
    let idToken;
    if (
      req.headers.authorization &&
        req.headers.authorization.startsWith('YYGo-Management ')
    ) {
      idToken = req.headers.authorization.split('YYGo-Management ')[1];
    } else {
      return res.status(401).json({ error: 'errors.unauthorized' });
    }
    // const decodedToken = await admin.auth().verifyIdToken(idToken);

    // req.userId = decodedToken.uid;
    req.userId = 'TKnwnKcWXe73O12Xf0yDoR6aSfvH';

    return next();
  } catch (error) {
    return res.status(401).json({ error });
  }
};

const typeList = [
  'accounts',
  'categories',
  'sellers',
  'transactions',
  'income',
  'items'
];

const Add = async (req, res, next) => {
  try {
    if (!req.params.type || !typeList.includes(req.params.type)) {
      return res.status(400).json({ message: 'errors.badrequest' });
    }
    const validBody = {};
    switch (req.params.type) {
      case 'accounts':
      case 'categories':
        if (!req.body.name) {
          return res.status(400).json({ message: 'errors.badrequest' });
        }
        validBody.name = req.body.name;
        break;
      case 'sellers':
        if (!req.body.name || !req.body.category) {
          return res.status(400).json({ message: 'errors.badrequest' });
        }
        validBody.name = req.body.name;
        validBody.description = req.body.description;
        validBody.address = req.body.address;
        validBody.rates = req.body.rates;
        validBody.category = req.body.category;
        break;
      case 'transactions':
      case 'income':
        if (!req.body.seller || !req.body.amount || !req.body.account) {
          return res.status(400).json({ message: 'errors.badrequest' });
        }
        validBody.account = req.body.account;
        validBody.seller = req.body.seller;
        validBody.amount = req.body.amount;
        validBody.date = req.body.date || new Date().toISOString();
        break;
      case 'items':
        if (!req.body.name || !req.body.seller || !req.body.transaction) {
          return res.status(400).json({ message: 'errors.badrequest' });
        }
        validBody.name = req.body.name;
        validBody.seller = req.body.seller;
        validBody.transaction = req.body.transaction;
        validBody.description = req.body.description;
        validBody.amount = req.body.amount;
        validBody.rates = req.body.rates;
        break;
    }

    validBody.createdAt = new Date().toISOString();
    validBody.updatedAt = new Date().toISOString();
    validBody.userId = req.userId;

    req.validBody = validBody;

    return next();
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const updateList = [
  'accounts',
  'categories',
  'seller'
];

const Put = async (req, res, next) => {
  try {
    if (!req.params.type || !updateList.includes(req.params.type) || !req.params.id) {
      return res.status(400).json({ message: 'errors.badrequest' });
    }
    const validBody = {};
    switch (req.params.type) {
      case 'accounts':
      case 'categories':
        if (!req.body.name) {
          return res.status(400).json({ message: 'errors.badrequest' });
        }
        validBody.name = req.body.name;
        break;
      case 'sellers':
        if (!req.body.name || !req.body.category) {
          return res.status(400).json({ message: 'errors.badrequest' });
        }
        validBody.name = req.body.name;
        validBody.address = req.body.address;
        validBody.rates = req.body.rates;
        validBody.category = req.body.category;
        break;
    }

    validBody.updatedAt = new Date().toISOString();

    req.validBody = validBody;

    return next();
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const ItemUpdate = (req, res, next) => {
  try {
    const validBody = {};
    if (!req.body.name || !req.body.seller) {
      return res.status(400).json({ message: 'errors.badrequest' });
    }
    validBody.name = req.body.name;
    validBody.price = req.body.price;
    validBody.rates = req.body.rates;
    validBody.updatedAt = new Date().toISOString();
    req.validBody = validBody;

    return next();
  } catch (error) {
    return res.status(400).json({ error });
  }
};

module.exports = { Auth, Add, Put, ItemUpdate };
