const { db } = require('../config/admin');

const { initializeApp } = require('firebase/app');
const { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } = require('firebase/auth');

initializeApp({
  apiKey: 'AIzaSyAghmXkdvYxD0zuwWe6skbuBrIbpnZd43Q',
  authDomain: 'yygo-management.firebaseapp.com',
  projectId: 'yygo-management',
  storageBucket: 'yygo-management.appspot.com',
  messagingSenderId: '1075775636800',
  appId: '1:1075775636800:web:cd71952c2f3c9c32a126a5',
  measurementId: 'G-7PCNHGRSYN'
});

const Auth = {
  Login: async (req, res) => {
    try {
      const login = { ...req.body };

      if (!login.email || !login.password) {
        return res.status(400).json({ error: 'errors.login.missing' });
      }

      const auth = getAuth();

      const userCredential = await signInWithEmailAndPassword(auth, login.email, login.password);

      if (!userCredential || !userCredential.user) {
        return res.status(401).json({ error: 'errors.login.wrongcredential' });
      }

      const data = await db.collection('users').where('email', '==', login.email).get();

      if (!data.docs.length || !data.docs[0].exists) return res.status(401).json({ message: 'error.login.nouser' });

      const user = data.docs[0].data();

      const token = await userCredential.user.getIdToken();

      user.token = token;

      delete user.password;

      return res.json({ user });
    } catch (err) {
      console.log(err);
      return res.status(401).json({ error: 'errors.login.wrongcredential' });
    }
  },

  Register: async (req, res) => {
    try {
      const user = { ...req.body };

      if (!user.email || !user.password || !user.username) {
        return res.status(400).json({ error: 'errors.signup.missing' });
      }

      const existUser = await db.collection('users').where('email', '==', user.email).get();

      if (existUser.docs.length > 0) return res.status(409).json({ message: 'error.message.existuser' });

      const auth = getAuth();
      const data = await createUserWithEmailAndPassword(auth, user.email, user.password);

      user.userId = data.user.uid;
      user.createdAt = new Date().toISOString();
      user.updatedAt = new Date().toISOString();

      await db.doc(`/users/${ user.userId }`).create(user);

      const token = await data.user.getIdToken();

      user.token = token;

      delete user.password;

      return res.json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: 'errors.login.wrongcredential' });
    }
  }
};

module.exports = Auth;
