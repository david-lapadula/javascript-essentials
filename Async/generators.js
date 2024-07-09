// Code to pause and then come back at a later time
// Can exit function and not hold up and then return to execution

function *genTest() {
    let x = 0;
    console.log('start');
    x++;
    yield; // generator will stop here until subsuquent .next. Can return value in yield
    console.log(x);
    x++;
    console.log(x);
    x++;
    yield;
    console.log('end');
    return x;
}

let gen = genTest(); // only invoking does nothing. Generator is suspeneded until is told to run

let val = gen.next(); // this will be object with return and 'done' attribute

console.log(val);

let val2 = gen.next();

console.log(val2);

/** Iterators */

let arr = ['a', 'b', 'c', 'd'];

let it = arr[Symbol.iterator](); // iterator can also allow for using .next()

console.log(it);