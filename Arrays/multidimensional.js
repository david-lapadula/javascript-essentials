// Array(s) of Array(s)

// Building a Matrix
let table = [];
for (let i = 0; i < 5; i++){
    table[i] = [];
}

for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 5; col++){
        table[row][col] = row * col; // row * col will always be true because is multiplication table of the acutal row and col indices
    }
}

console.log(table);

// Combining Arrays

// join() - array to string. put together on value to put between each element. comma is default
let joinArray = ["I", "am", "a", "developer"],
    joined = joinArray.join();
console.log(joined);

// concat() - join two arrays and return it. takes infinite amount of arguments

let concatArray1 = [1, 2, 3, 4, 5],
    concatArray2 = [6, 7, 8, 9, 10],
    concatenated = concatArray1.concat(concatArray2, [11, 12, 13, 14, 15]);
console.log(concatenated);

// slice() - return portion of array and return it. 1st arg is start, 2nd arg is where to stop (exclusive)
let slicedArray = [1, 2, 3, 4, 5],
    sliced1 = slicedArray.slice(1, 3),
    sliced2 = slicedArray.slice(); // will just return a NEW array. Easy way to clone
console.log(sliced1);
console.log(sliced2);

let sliceFunction = function() {
    let argArray = Array.prototype.slice.call(arguments); // call() will invoke method indirectly (invoking code property of object), but need to use call because slice() requires instance
    console.log(argArray);
}; 

sliceFunction("some", "arguments", 1, 2);

// flat() - will unpack nested arrays and will return a new array

let flattenArray = [[1, 2], [3, 4], [5, 6], [7, 8]],
    flattened = flattenArray.flat();
console.log(flattened);

// flatMap - more efficient than map() + flat() but does same thing. Apply callback to each element and then put into 1d array
let flatMapArray = ["This is a", "array of multiple", "responses from a ", "web server"],
    flatMap = flatMapArray.flatMap(item => item.split(" "));
console.log(flatMap);

// toString() - make a string from every element with a comma
let toStringArray = [1, 2, 3, 5];
console.log(toStringArray.toString());

// Exercise 9;
let exercise9Table = [];
for (let i = 0; i < 10; i++){
    exercise9Table[i] = [];
}

for (let row = 0, rowVal = 2; row < 10; row++, rowVal +=2) {
    for (let col = 0, colVal = 2; col < 10; col++, colVal +=2){
        exercise9Table[row][col] = rowVal * colVal; // row * col will always be true because is multiplication table of the acutal row and col indices
    }
}
console.log(exercise9Table);

// Exercise 10 
let strArray1 = ["Arrays are important", "data structures", "for any", "language"],
    strArray2 = ["and", "should be mastered", "in", "JavaScript"],
    str1FlatMap = strArray1.flatMap(item => item.split(" ")),
    str2FlatMap = strArray2.flatMap(item => item.split(" ")),
    combinedStrArray = str1FlatMap.concat(str2FlatMap),
    arrAsString = combinedStrArray.join(" ");
console.log(arrAsString);