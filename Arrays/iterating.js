/**Iterating */

// for loop
let arr1 = [1, 2, 3, 4, 5];
// initalize; condition; increment
for (let i = 0; i < arr1.length; i++) {
    arr1[i] *= 5;
}; 

// for...in (intended for objects)
let arr2 = [1, 2, 3, 4, 5];

// Could display values attached to prototype, because those are part of every array
// does not guarantee order of iteration
// does not iterate over empty values in structure
for (let key in arr2) {
    // console.log(key);
    // console.log(arr2[key]);
}

// for...of - loops over values only, not index
let arr3 = [1, 2, 3, 4, 5];

for (let val of arr2) {
    console.log(val);
}