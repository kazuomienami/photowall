import firebase from 'firebase';


const config = {
  apiKey: "AIzaSyBB6lMwaXbiQR_fwMyU4rEFfgfOPUY21OU",
  authDomain: "photowall-b1834.firebaseapp.com",
  databaseURL: "https://photowall-b1834-default-rtdb.firebaseio.com",
  projectId: "photowall-b1834",
  storageBucket: "photowall-b1834.appspot.com",
  messagingSenderId: "768112834361",
  appId: "1:768112834361:web:2ecb918d93005f7725dae8"
};

firebase.initializeApp(config)

const db = firebase.database()
export {db}