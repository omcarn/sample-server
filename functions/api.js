const express = require('express');
const serverless = require('serverless-http');

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const app = express();
const router = express.Router();

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA9nAX2JWMGsfE7fCcMKEXLECMCWtaCnyo",
    authDomain: "nodejsapp-6a41d.firebaseapp.com",
    databaseURL: "https://nodejsapp-6a41d-default-rtdb.firebaseio.com",
    projectId: "nodejsapp-6a41d",
    storageBucket: "nodejsapp-6a41d.appspot.com",
    messagingSenderId: "222991184277",
    appId: "1:222991184277:web:85c273a78ed66399a8869c",
    measurementId: "G-TZ41PP60XQ"
  };
  
  // Initialize Firebase
  const fbapp = initializeApp(firebaseConfig);
  const analytics = getAnalytics(fbapp);
  const database = getDatabase(fbapp);

router.get('/hello', (req, res) => {
  const mySecret = process.env.MY_SECRET || 'No secret set';
  res.json({ message: 'Hello from Express!', secret: mySecret });

  
    //const db = database();
    set(ref(database, process.env.MY_SECRET+'/' + userId), {
      username: 'abc',
      email: 'email',
      profile_picture : 'imageUrl'
    });
  
});

app.use('/api', router);




module.exports.handler = serverless(app);
