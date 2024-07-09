// Looks like synch code without blocking execution thread
// Async infront of function forces it to return a promise
// await can only be inside async function, waits for promise, async func will pause where it ways
// Can await ANY functio, even if in constructor or is an object method

const simpleFunction = async () => {
    return 'Simple';
}; 

const simpleFunction2 = async () => {
    let simple = await simpleFunction(); 
    console.log(simple);
    console.log('Simple 2');
}

simpleFunction2();
console.log('Waiting');

// Can await assignments in a loop
/**
 * for let await (p of promises) { console.log(p)}
 * 
 */

// Can use in IIFE
/**
 * (async function() {})()
 * 
 */


