// Maps/Dictionaries/Associative arrays - collections of N/V pair

// Map - key does not have to be a string like object; need to use constructor; cannot use square brackets

let obj = {
    name: 'David'
};
obj.age = 29;
obj['hobby'] = 'coding'; // key needs to evaluate to a string or something that will coerce to a string

let x = 'test';
obj.x = true; // this will not read the variable but coerce to a string. Dot syntax DOES NOT work with variables
obj[x] = false; // this will evaluate the variable in the brackets

console.log(obj);

let i = { x: 10 },
    j = { y: 20 },
    obj2 = {};

obj2[i] = 100; // will coerce to object to a string [object Object]
obj2.j = 200; // does not evaluate varibale

console.log(obj2);


let map = new Map(),
    mapObjKey = { x: 10 };
map.set(1, "1");
map.set(mapObjKey, "object"); // legal, name turns into the object
map.set({ y: 10 }, "object");

console.log(map);

console.log(map.get(mapObjKey));
console.log(map.get({ y: 10 })); // will not work with literal because two different objects

console.log(map.size); // substitute for size

map.delete(mapObjKey); // how to remove
console.log(map);

map.clear(); // remove everything
console.log(map);

let map2 = new Map();
map2.set(1, 2);
map2.set(2, 3);

console.log([...map2]); // Eack K/V will be item in array

console.log(map.keys()); // iterator of all the keys

// Sets - array like collection with unique values

let set = new Set();

set.add(100);
set.add(5);
set.add(5); // will do nothing, must be unique

console.log(set);
console.log(set.size); // sub for length

let duplicateArray = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
let setArray = new Set(duplicateArray); // removes all duplicate values

console.log(setArray);
console.log([...setArray]); // is array like with iterator so can be converted back to array

// Exercise 13

let studentsA = ["James", "Annika", "Cameron", "AntoniO", "Kaylie", "Gabriel", "Emily", "sarah"]
    studentsB = ["LJ", "Brianna", "David", "Antonio", "Kelsey", "Joshua", "Emily", "Sarah"],
    studentsALower = studentsA.map(item => item.toLowerCase()),
    studentsBLower = studentsB.map(item => item.toLowerCase()),
    studentsMap = new Set([...studentsALower, ...studentsBLower]),
    uniqueStudents = [...studentsMap];

console.log(uniqueStudents);

let allStudents = new Set([...studentsA.map(item => item.toLowerCase())]); // can chain method on array passed to map
console.log(allStudents);