// iterable
let arr = [1, 2, 3];

// non-iterable, but has named properties and length so can make it iterable-like
let obj = {
    1: 'one',
    2: 'two',
    3: 'three',
    length: 3
}

// other DS have iterators, but have different data structures based on type it is

let map = new Map(); // key can be any data type
map.set(1, 'one');
map.set(2, 'two');
map.set(3, 'three');

for (let val of map) {
    console.log(val);
}

// static method on array object
console.log(Array.isArray(arr));
console.log(Array.isArray(map));

// convert iterable collections to an array. must be ITERABLE
// Array.from and other static methods can operate on numerically named properties (array is object with index as key) and a length property

// spread can act on any iterable by acting on values
let mapArray = [...map];
console.log(mapArray);

// static method onArray object
let mapArray2 = Array.from(map); // second argument can be function to operate on each item
console.log(mapArray2);

// String (is iterable) to Array
let str = "This is a random string to test methods jj";
let str2 = "";
let str3 = "";

let strArray = [...str];
let strArray2 = Array.from(str);

console.log(strArray);
console.log(strArray2);

for (let val of str) {
    if (val === "j") {
        val = val.toUpperCase();
    } 

    str2 += val;
}

console.log(str2);

console.log(str[1]); // can access string like it is an array

for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()){
        str3 += str[i].toUpperCase();
    } else {
        str3 += str[i]
    }
}

console.log(str3);

// split() can be used to split string to array on a delimiter
let strSplit = "We. are. going, to--split this. string.";

console.log(strSplit.split(" ", 3)); // second argument determines how long the array should be
console.log(strSplit.split(", "));
console.log(strSplit.split("-"));
console.log(strSplit.split(/[,.]|--/)); // can use a regex as a delimiter, can specify multiple values in delimiter

// Gathering arguments into an array

let sumIt = function() {
    console.log(arguments); // array like iterator, object with index as key and arg as value
    let nums = [...arguments]; // can be converted to an array, can also be done in expression like fn(...arguments)
}

sumIt(1, 2, 3, 5);
sumIt(1);

// Accessing array elements with a statement

let scores = [10, 20, 30, 50, 87, 90, 89];
let index = 5;
console.log(scores[index - 1]); // can use statement if evaluates to a number

// Converting object properties to array

let scoresObj = {
    q1: 23, 
    q2: 45, 
    q3: 56,
    q4: 78
}

// Static methods on object for creating arrays from values
console.log(Object.values(scoresObj));
console.log(Object.keys(scoresObj));
console.log(Object.entries(scoresObj)); // will make nested 2 item array for each k,v pair

// Checking for array like Collections, property/symbol attached to objects with method for processing values

console.log(scores[Symbol.iterator]); // property on object which is function that can process values. can be added, but not by default

const isArrayLike = function(collection) {
        return (collection !== null && typeof collection[Symbol.iterator] === 'function')
};

console.log(isArrayLike(scoresObj));
console.log(isArrayLike(scores));
console.log(isArrayLike(5));
