/** Basics */

// Promises is object with properties/methods that represents eventual completion or failure of async event
// Promise provides value upon completion or failure
// B/C JS single threaded, DO NOT get additional thread to help, item placed on event loop to not block other things

/** Using promises */

// 'thenable' can call .then on it. Other things can still run when this is running
// promise object returns reference to 'this' which makes them chainable
// promise takes 2 functions as parameters. one to resolve and reject

let asyncFunction = function() {
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            resolve("async done");  // value passed to resolve available in .then
        }, 1000)
    })
}; 

let promise = asyncFunction();

promise
    .then((val) => {
        console.log(val);
        return asyncFunction();
    })
    .then((val2) => {
        console.log("2 " + val2);
    })
    .catch((err) => {
        console.log("Err " + err); // can be used to catch any error from anywhere in the promise chain
    }); 

/** Creating Promises */

// Can convert a callback to a promise
// resolve/reject are called when the promise succeeds or fails
// with setTimeout, outer env handles putting it on event loop so JS is free to run the rest of the code.
// If ONLY promise, JS handles it using microtasks which take priority on event loop
// If JS handling everything, single thread must still execute it, so async is only for scheduling as JS is not free. Non async code will execute first but only after async code is processed by JS

let a = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('a is resolved'); // this is the value that gets returned in the promise
    }, 1000);
});

// callback to .then is what gets passed the 'resolve' 
a.then(val => console.log(val));

let setTimeoutP = (time) => {
    return new Promise((resolve, reject) => {
        if (isNaN(time)){
            reject('Must pass a number');
        }
        setTimeout(resolve, time); 
    }); 
}; 

setTimeoutP(5000)
        .then(() => console.log('Timed out'))
        .catch((err) => console.log(err));

/** Static methods on Promise object */

// all() - pass in array of promises or k/v object of promises. Returns a promise once all promises passed in fulfilled. Will reject if any reject
// race() - return only the first promise to resolve
// allSettled() - waits until all are either resolved or rejected
// any() - as soon as any are fulfilled