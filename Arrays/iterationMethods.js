// Methods that typically return array and do not mutate. Callback is REQUIRED for these to operate on array

// forEach() - 1st arg is item, 2nd arg is index, 3rd arg is the actual array
let forEachArray = [1, 2, 3, 4, 5, 6], 
    total = 0,
    forEachArrayObject = [
        {
            name: "David", 
            score: 100,
            pass: null
        }, 
        {
            name: "Steven", 
            score: 40,
            pass: null
        }
    ];

forEachArray.forEach((item) => {
    total += item;
}); 

console.log(total);

forEachArrayObject.forEach((item) => {
    item.score < 70 ? item.pass = false : item.pass = true; // will mutate original array
});

console.log(forEachArrayObject);

forEachArray.forEach((item, idx, arr) => {
    arr[idx] = item * item; // arr is passed by reference, so will mutate the actual array
}); 

console.log(forEachArray);

// map() - make new array from existing array RETURNED, callback needs to return a value because map() uses it for new array, 2nd arg is index and 3rd is array just like forEach

let mapArray = [6, 5, 4, 3, 2, 1];
let mapped = mapArray.map((item) => {
    return item * item;
}); 

console.log(mapArray);
console.log(mapped);

// filter() - make new array that is RETURNED, to make a subset; Predicate fn, return T or F to determine if item is assigned to new array. Index and array also available as second and third argument

let filterArray = [10, 20, 30, 40, 50, 60];
let filtered = filterArray.filter((item) => {
    return item >= 30;
}); 

console.log(filterArray);
console.log(filtered);

// reduce() and reduceRight() - same just start from opposite sides of array. Meant to sum into one array. Idx and original array available as 3rd and 4th argument
// 1st arg is callback to combine two values and return it and then passed back to the fn as accumulator. 1st arg of CALLBACK is accumulator and second is the value
// 2nd arg is initial val of accumulator passed into fn

let reduceArray = [1, 2, 3, 4, 5, 6];
let reduced = reduceArray.reduce((acc, item) => {
    return acc + (item * 2); // return item will be accumulator for next iteration
}, 0);

console.log(reduceArray);
console.log(reduced);

let reduceObject = [
    {
        name: "David", 
    }, 
    {
        lastname: "Smith",
    }, 
    {
        score: 90
    }
];

let reducedObject = reduceObject.reduce((acc, item) => {
    return Object.assign(acc, item); // acc is object initialized and assign enumberable properties from source to target
}, {});

console.log(reduceObject);
console.log(reducedObject);

// every() - Predicate, so return T or F. use for testing condition of every item. returns boolean. Idx and original array available as 2nd and 3rd argument. Stops as soon as result is known, if one is false.

let everyArray = [10, 20, 30, 40, 50, 60];
let everyArrayResult = everyArray.every((item) => {
    return item >= 10;
}); 

console.log(everyArray);
console.log(everyArrayResult);

// some() - Predicate, so return T or F. use for testing condition of at least one element. returns boolean. Idx and original array available as 2nd and 3rd argument. Stops as soon as result is known, if one is true.

let someArray = [10, 20, 30, 40, 50, 60];
let someArrayResult = everyArray.some((item) => {
    return item < 10;
}); 

console.log(someArray);
console.log(someArrayResult);

// testing spread

let spread1 = [1, 2, 3], 
    spread2 = [4, 5, 6], 
    spread3 = [...spread1, ...spread2];

console.log(spread3);

// Passing callback to Array.from. Usually for converting array like collection (iterable) to array. Takes callback to act on every item. Callback will also pass index

let nums = new Set([1, 2, "3", 4, "5"]);
let numsArray = Array.from(nums, item => Number(item)); // second function acts and CHANGES every item

console.log(numsArray); 
