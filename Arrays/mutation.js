// Array is special object, so can be mutated. Funtional approach = do not mutate existing

// reverse() - available on all arrays and will mutate
let reverseArr = ["Nick", "Terry", "David", "Matthew"];
console.log(reverseArr.reverse());

// sort() - temp converts to a string and does so alphabetical - takes a callback that can be used as comparison
let sortArrString = ["Some", "list", "of", "strings"]; // effected by upper and lower case
let sortArrNums = [1, 2, -3, 4, 5, 112]; // converts to a string, so incorrect

console.log(sortArrString.sort());
console.log(sortArrNums.sort());

// First arg precedes, return < 0
// Second arg precedes, return > 0
// Equal, return 0
let compareNumAsc = function (a, b) {
    if (a === b) return 0;
    if (a < b) return -1;
    return 1;

    // return a - b; return negative if a < b, pos if a > b, 0 if equal
};
console.log(sortArrNums.sort(compareNumAsc));

let compareString = function (a, b) {
    let x = a.toLowerCase(),
        y = b.toLowerCase();

    return (x < y) ? -1 : (y < x) ? 1 : 0; // can use comparison on characters and order will go alphabetically, i.e a < b is true

};
console.log(sortArrString.sort(compareString));

let objArray = [
    {

        name: "Michael",
        age: 31
    },
    {
        name: "Steven",
        age: 30
    },
    {
        name: "David",
        age: 29
    }
];

console.log(
    objArray.sort((a, b) => {
        let x = a.name.toLowerCase(),
            y = b.name.toLowerCase();

        return (x < y) ? -1 : (y < x) ? 1 : 0;
    })
);

console.log(
    objArray.sort((a, b) => {
        let x = a.age,
            y = b.age;

        return (x < y) ? -1 : (y < x) ? 1 : 0;
    })
);


// splice() - mutates, arg 1 start position, arg 2 is # of elements to delete, deleted elements are returned (optional), 3rg arg is values added to the array
let spliceArr1 = [1, 2, 3, 4, 5, 6];
console.log(spliceArr1.splice(2, 2)); // inclusive of index it starts at

let spliceArr2 = [1, 2, 3, 4, 5, 6];
spliceArr2.splice(2, 0, "a", "b"); // does not return anything, just adds
console.log(spliceArr2);

let spliceArr3 = [1, 2, 3, 4, 5, 6];
spliceArr3.splice(2, 2, "a", "b"); // delete 2 starting at index 2 and then add two elements
console.log(spliceArr3);

// copyWithin() - mutates, first arg is target for copy, second arg is start of copy (inclusive), third arg is el to stop copying (exclusive)(optional), length DOES NOT change, negative index takes from the end
let copyWithinArr = [1, 2, 3, 4, 5, 6];
copyWithinArr.copyWithin(2, 3, 5); // if end index out of bounds, will be ignored
console.log(copyWithinArr);

// Array prototype - inherting from array prototype that is attached to every array

// Cloning an array - assigning to a new variable is just pointer to the same object. Methods just using known iterable (any array) to make a new array; same process for objects
let cloneArr = ["nick", "terry", "david", "matthew"];

let cloneArr2 = [...cloneArr]; // takes each individual element and put in new array
let cloneArr3 = Array.from(cloneArr); // static property DOES NOT mutate

cloneArr.sort();
console.log(cloneArr2);
console.log(cloneArr3);

// Chaining - methods need to belong to the same object and return something
let chainArray = ["nick", "terry", "david", "matthew"];
console.log([...chainArray].sort());
console.log(chainArray.reverse());


