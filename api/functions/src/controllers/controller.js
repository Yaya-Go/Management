const { db } = require('../config/admin');

const AddController = async (req, res) => {
  try {
    const type = req.params.type;

    const newItem = { ...req.validBody };
    console.log(newItem);
    const data = await db.collection(type).add(newItem);
    newItem.id = data.id;

    return res.json(newItem);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const ListController = async (req, res) => {
  try {
    let year = req.params.year;
    if (!year) {
      year = new Date().getFullYear();
    }
    const results = [];

    const doc = db.collection(req.params.type)
        .where('userId', '==', req.userId);

    let data;
    if (req.params.type === 'transactions' || req.params.type === 'income') {
      data = await doc.where('date', '>=', `${ year }-01-01`)
          .where('date', '<=', `${ year }-12-31`)
          .get();
    } else {
      data = await doc.get();
    }

    data.forEach((doc) => {
      if (doc.exists) {
        const item = doc.data();
        item.id = doc.id;
        results.push(item);
      }
    });

    return res.json(results);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const ListItemBySellerController = async (req, res) => {
  try {
    const results = [];
    const data = await db.collection('items').where('seller', '==', req.params.seller).get();

    data.forEach((doc) => {
      if (doc.exists) {
        const item = doc.data();
        item.id = doc.id;
        results.push(item);
      }
    });

    return res.json(results);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const ListItemByTransController = async (req, res) => {
  try {
    const results = [];
    const data = await db.collection('items').where('transaction', '==', req.params.transaction).get();

    data.forEach((doc) => {
      if (doc.exists) {
        const item = doc.data();
        item.id = doc.id;
        results.push(item);
      }
    });

    return res.json(results);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const RetrieveController = async (req, res) => {
  try {
    const data = await db.collection(req.params.type).doc(req.params.id).get();
    if (!data.exists) {
      return res.status(404).json({ message: 'errors.notfound' });
    }
    const result = data.data();
    result.id = data.id;
    return res.json(result);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const PutController = async (req, res) => {
  try {
    const doc = db.collection(req.params.type).doc(req.params.id);
    const data = await doc.get();
    if (!data.exists) {
      return res.status(404).json({ message: 'errors.notfound' });
    }
    const updated = data.data();
    const validBody = { ...req.validBody };
    for (const key of validBody) {
      updated[key] = validBody[key];
    }
    await doc.set(updated);
    return res.json({ message: 'updated.success' });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const DeleteController = async (req, res) => {
  try {
    const doc = db.collection(req.params.type).doc(req.params.id);
    const data = await doc.get();
    if (!data.exists) {
      return res.status(404).json({ message: 'errors.notfound' });
    }
    await doc.delete();
    return res.json({ message: 'delete.success' });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const ItemUpdateController = async (req, res) => {
  try {
    const doc = db.collection(req.params.type).doc(req.params.id);
    const data = await doc.get();
    if (!data.exists) {
      return res.status(404).json({ message: 'errors.notfound' });
    }
    const validBody = { ...req.validBody };
    const updated = data.data();
    if (validBody.price !== updated.price) {
      if (!updated.history) {
        updated.history = [];
      }
      updated.history.push({
        price: updated.price,
        date: updated.updatedBy
      });
    }
    for (const key of validBody) {
      updated[key] = validBody[key];
    }
    await doc.set(updated);
    return res.json({ message: 'updated.success' });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const SummaryController = async (req, res) => {
  try {
    let year = req.params.year;
    if (!year) {
      year = new Date().getFullYear();
    }
    const result = {};

    const accDoc = await db.collection('accounts').get();
    const sellerDoc = await db.collection('sellers').get();
    const cateDoc = await db.collection('categories').get();
    const transDoc = await db.collection('transactions')
        .where('date', '>=', `${ year }-01-01`)
        .where('date', '<=', `${ year }-12-31`)
        .get();
    const incomeDoc = await db.collection('income')
        .where('date', '>=', `${ year }-01-01`)
        .where('date', '<=', `${ year }-12-31`)
        .get();

    result.accountSize = accDoc.size;
    result.sellerSize = sellerDoc.size;
    result.cateSize = cateDoc.size;
    result.transSize = transDoc.size;
    result.incomeSize = incomeDoc.size;

    result.transTotal = 0;
    result.incomeTotal = 0;

    result.cateList = [];
    result.accList = [];

    transDoc.forEach((d) => {
      if (d.exists) {
        result.transTotal += d.data().amount;
      }
    });

    incomeDoc.forEach((d) => {
      if (d.exists) {
        result.transTotal += d.data().amount;
      }
    });

    accDoc.forEach((a) => {
      if (a.exists) {
        const i = a.data();
        i.id = a.id;
        result.accList.push(i);
      }
    });

    cateDoc.forEach((c) => {
      if (c.exists) {
        const i = c.data();
        i.id = c.id;
        result.cateList.push(c);
      }
    });

    return res.json(result);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

module.exports = {
  AddController,
  ListController,
  ListItemBySellerController,
  ListItemByTransController,
  RetrieveController,
  PutController,
  DeleteController,
  ItemUpdateController,
  SummaryController
};
