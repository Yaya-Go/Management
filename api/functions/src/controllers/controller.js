const { db } = require('../config/admin');

const AddController = async (req, res) => {
  try {
    const type = req.params.type;

    const newItem = { ...req.validBody };

    const data = await db.collection(type).add(newItem);
    newItem.id = data.id;

    return res.json(newItem);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const ListController = async (req, res) => {
  try {
    const results = [];

    const data = await db.collection(req.params.type).where('userId', '==', req.userId).get();

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

const ListItemController = async (req, res) => {
  try {
    const results = [];
    const data = await db.collection(req.params.type).where('sellerId', '==', req.params.sellerId).get();

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

module.exports = {
  AddController,
  ListController,
  ListItemController,
  RetrieveController,
  PutController,
  DeleteController,
  ItemUpdateController
};
