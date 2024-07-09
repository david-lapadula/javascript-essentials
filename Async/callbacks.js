// Function called after something else happens, fn pointer passed as arg (HOF)

let logCall = () => {
    console.log("logCall called");
};

setTimeout(logCall, 2000); // logCall not called until 3 second timer has passed

// Using an anonymous fn. WOULD NOT prevent code after fn from executing, so NON-BLOCKING
// setTimeout takes third argument for callback parameter
setTimeout(() => {
    console.log("Anon Called");
}, 3000);

/** Event Listeners */

// Make sure that something only happens once event occurs, like clicking event
// When event occurs, function added to event loop, which will then execute it once it gets to that point on the stack

let students = [
    { name: "Mary", score: 90, school: "East" },
    { name: "James", score: 100, school: "East" },
    { name: "Steve", score: 40, school: "East" },
    { name: "Gabe", score: 90, school: "West" },
    { name: "Rachel", score: 85, school: "East" },
    { name: "Rochelle", score: 95, school: "West" },
    { name: "Lynette", score: 75, school: "East" }
];

let processStudents = function (data, callback) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].school.toLowerCase() === "east") {
            if (typeof callback === "function") {
                callback(data[i]);
            }
        }
    }
}; 


// student is available because passed into callback utilized in processStudents
processStudents(students, (student) => {
    if (student.score > 60) {
        console.log(student.name);
    }
}); 

/** Async coding and callbacks */

// Only async if uses event queue and put message on stack
// Best used when time consuming operation you do not want to wait for
// Async code is what happens 'in the gaps' of processing

/** Problems with callbacks */

// Callback hell
// Hard to reason about
// Inversion of control - control is passed to whatever the async code is