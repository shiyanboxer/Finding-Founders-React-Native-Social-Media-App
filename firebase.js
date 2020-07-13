import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC_cZf61yMSKmzjbTptFHVNXpCiNTTpZQI",
    authDomain: "finding-founders.firebaseapp.com",
    databaseURL: "https://finding-founders.firebaseio.com",
    projectId: "finding-founders",
    storageBucket: "finding-founders.appspot.com",
    messagingSenderId: "943889751311",
    appId: "1:943889751311:web:a855e919c9ba76e93eb27a",
    measurementId: "G-SQCF0ZT8HR"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;