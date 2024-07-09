// indexOf/lastIndexOf - search for EXACT cse sensitive value, return index if have it, not found returns -1. no coercion b/c compares with ===. lastIndexOf just starts at the END of the array

let students = ["Michael", "David", "John", "Joe"],
    scores = [20, 30, 40, 50, 60, 70],
    studentIndex = students.indexOf("John"),
    missingStudentIndex = students.indexOf("Michelle"),
    scoresIndex = scores.indexOf(60),
    missingScoresIndex = scores.indexOf(99);

console.log(studentIndex);
console.log(missingStudentIndex);
console.log(scoresIndex);
console.log(missingScoresIndex);

// includes() - return boolean if item is in array. no coercion b/c compares with ===

let includesArray = [1, 2, 3, 4, 5, 6];
console.log(includesArray.includes(1));
console.log(includesArray.includes(7));

// find() will return value when it is found. Good for objects because can access values. undefiend it they cant find it
let findArray = [1, 2, "3", 4, 5, "6"];
console.log(findArray.find(item => item == 6));
console.log(findArray.find(item => item == "6"));
console.log(findArray.find(item => item == 7));
console.log(findArray.find(item => item == "7"));

// findIndex() - will return index if found and -1 if item is not there. More flexible because uses callback vs indexOf
let findIndexArray = [1, 2, "3", 4, 5, "6"];
console.log(findArray.findIndex(item => item == 6));
console.log(findArray.findIndex(item => item == "6"));
console.log(findArray.findIndex(item => item == "70"));

// Exercise 12
let exercise12WithZero = [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0];
let exercise12WithoutZero = [1, 1, 1, 1, 1, 1, 1];

function isViewed(arr) {
    if (arr.includes(0)) {
        return arr.indexOf(0);
    }
    return arr.length - 1; 
}

console.log(isViewed(exercise12WithZero));
console.log(isViewed(exercise12WithoutZero));