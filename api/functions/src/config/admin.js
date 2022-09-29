const admin = require('firebase-admin');
const SERVICE_ACCOUNT = require('./service_account.json');

admin.initializeApp({
  credential: admin.credential.cert(SERVICE_ACCOUNT),
  apiKey: 'AIzaSyAghmXkdvYxD0zuwWe6skbuBrIbpnZd43Q',
  authDomain: 'yygo-management.firebaseapp.com',
  projectId: 'yygo-management',
  storageBucket: 'yygo-management.appspot.com',
  messagingSenderId: '1075775636800',
  appId: '1:1075775636800:web:cd71952c2f3c9c32a126a5',
  measurementId: 'G-7PCNHGRSYN'
});

const db = admin.firestore();
const storage = admin.storage();

module.exports = { admin, db, storage };
