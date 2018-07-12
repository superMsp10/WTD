import * as functions from 'firebase-functions';

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

var db = admin.firestore();

// Firebase serve --only functions 
// or
// Firebase functions:shell
//TO update changes, in the functions/src directory
//npm  run build

export const helloWorld = functions.https.onRequest((request, response) => {
    var aTuringRef = db.collection('Scrapes');

    var setAlan = aTuringRef.add({
        'Name': 'Test',
        'URL': 'TEST.com',
        'Description': 'Hello'
    });

    response.send("Hello from Firebase!");

});
