import * as functions from 'firebase-functions';
import isURL from 'validator/lib/isURL';

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

var Xray = require('x-ray');
var x = Xray().timeout(300).driver('request').delay(100);
// const corsFn = require('cors')("Access-Control-Allow-Origin");

const db = admin.firestore();
// firebase deploy --only functions
// Firebase serve --only functions 
// or
// Firebase functions:shell
//TO update changes, in the functions/src directory
//npm  run build

export const helloWorld = functions.https.onRequest((req, res) => {
    // corsFn(req, res, function () {
    res.send({ "data": "hello" });
    // });
});

// scrape({json: {"scrapeURL": "https://www.google.com/"}})
export const scrape = functions.https.onCall((data, context) => {

    const url = data.scrapeURL;
    console.log("Scrapeing...");

    if (!url === undefined && !isURL.isURL(url)) {
        // Throwing an HttpsError so that the client gets the error details. 
        throw new functions.https.HttpsError('invalid-argument', 'The url must be valid');
    } else {
        console.log(url);
        // const html = "<body><h2>Pear</h2></body>";
        return x(url, 'body', 'h2')
        .then((title) => {
            console.log("title: " + title);
            return { scrape: title };
        })
        .catch(function (err) {
            throw new functions.https.HttpsError('not-found', 'The url could not be fetched', err);
        });
        
        // return x(url, 'body', 'title')
        //     .then((title) => {
        //         console.log("title: " + title);
        //         return { scrape: title };
        //     })
        //     .catch(function (err) {
        //         throw new functions.https.HttpsError('not-found', 'The url could not be fetched', err);
        //     });


        // return x(html, 'body', 'h2')
        //     .then((res) => {
        //         console.log("header" + res);
        //         return { data: res };
        //     });
    }
});

export const addMessage = functions.https.onCall((data, context) => {
    // Message text passed from the client.
    const text = data.text;

    // Checking attribute.
    if (!(typeof text === 'string') || text.length === 0) {
        // Throwing an HttpsError so that the client gets the error details.
        throw new functions.https.HttpsError('invalid-argument', 'The function must be called with ' +
            'one arguments "text" containing the message text to add.');
    }

    // Authentication / user information is automatically added to the request.
    // const uid = context.auth.uid;
    // const name = context.auth.token.name || null;
    // const picture = context.auth.token.picture || null;
    // const email = context.auth.token.email || null;

    // returning result.
    return { text: text + " || " };

});

export const saveData = functions.https.onRequest((request, response) => {
    var scrapes = db.collection('Scrapes');

    var setAlan = scrapes.add({
        'Name': 'Test',
        'URL': 'TEST.com',
        'Description': 'Hello'
    });

    response.send("Hello from Firebase!");

});
