// Array is just specialized object, so has prototype with methods, but can contain multiple types

/** Creating */

// literal
let arr1 = [];
let arr2 = [1, 2, 3, true, "item", { key: "value" }, [3, 4]];

// constructor - static methods available on constructor, other methods are inherited for each instance
let arr3 = new Array();
let arr4 = new Array(10); //set length, can do with only commas using literal like [,,,,,] 
let arr5 = new Array(1, 2, 3, 4, true);

// Array.of: method on object (static method because need to use Array object)
let arr6 = Array.of(5); // make array with elements

// Array.fill: add value that is at every element. Worrks on Array object or literal
let scores = Array(10).fill(0);
let scores2 = [10, 1, 2, 3, 4, 5, , ,].fill(0, 0, 3); // second and third arguments are indicies to fill non-inclusive


// Reading/Writing Elements
let element = scores[0]; // specify index, out of bbounds will return undefined
scores[4] = 'new'; // brackets to assign as well
scores[15] = 'out of bounds'; // will make empty spaces for new elements and assign new value at index (length will change)

// Sparse Arrays - has empty elements
let arr7 = [1, 2, 3];
arr7[20] = "20";
arr7[15] = "15"; // elements between 15 and 20 will be sparse

// .length - how any elements in the array
let arr8 = [1, 2, 3, 4, 5].length; // .length is property so access it as such
arr8[arr8.length] = 'length'; // length property will be next element
arr8.length = 50; // will make sparse array for elements. Length prop should be read only

// Deleting elements
let arr9 = [1, 2, 3, 4, 5, 6, 7];
delete arr9[1]; // will make this item empty, will NOT adjust length

// Arrays as stacks - LIFO
let arr10 = [1, 2, 3, 4, 5, 6];
let push = arr10.push(1, 2, 3); // add element(s) to the end and return length
let pop = arr10.pop(); // remove item from the end and return it

// shift() and unshift() - operate from start of array, so change the index of existing - Like a queue b/c FIFO
let arr11 = [1, 2, 3, 4, 5, 6];
let unshift = arr11.unshift(55); // at element(s) to the beginning and return length
let shift = arr11.shift(55); // remove and return first element in the array



