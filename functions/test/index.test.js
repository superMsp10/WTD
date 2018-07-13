// Chai is a commonly used library for creating unit test suites. It is easily extended with plugins.
const chai = require('chai');
const assert = chai.assert;
const mocha = require('mocha');


// Sinon is a library used for mocking or verifying function calls in JavaScript.
const sinon = require('sinon');

// Require firebase-admin so we can stub out some of its methods.
const admin = require('firebase-admin');

const test = require('firebase-functions-test')();

describe('Cloud Functions', () => {
    let myFunctions, adminInitStub;

    before(() => {
        // [START stubAdminInit]
        // If index.js calls admin.initializeApp at the top of the file,
        // we need to stub it out before requiring index.js. This is because the
        // functions will be executed as a part of the require process.
        // Here we stub admin.initializeApp to be a dummy function that doesn't do anything.
        adminInitStub = sinon.stub(admin, 'initializeApp');
        // Now we can require index.js and save the exports inside a namespace called myFunctions.
        myFunctions = require('./../src/index.ts');
        // [END stubAdminInit]
    });

    after(() => {
        // Restore admin.initializeApp() to its original method.
        adminInitStub.restore();
        // Do other cleanup tasks.
        test.cleanup();
    });

    describe('helloWorld', () => {
       
        it('should return hello', (done) => {
        
          // [START assertHTTP]
          // A fake request object, with req.query.text set to 'input'
          const req = { query: {text: 'input'} };
          // A fake response object, with a stubbed redirect function which asserts that it is called
          // with parameters 303, 'new_ref'.
          const res = {
            redirect: (code, url) => {
              assert.equal(code, 303);
              assert.equal(url, 'new_ref');
              done();
            }
          };
    
          // Invoke addMessage with our fake request and response objects. This will cause the
          // assertions in the response object to be evaluated.
          myFunctions.addMessage(req, res);
          // [END assertHTTP]
        });
      });


});
