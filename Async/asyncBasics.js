/** Async vs Sync */ 

// Sync: each line executed in order. Execution waits until fn returns before next line. Negative b/c can get blocked and cannot do anything else
    // Callbacks are traditional way to get non-blocking code
// Async: non-blocking, can do other things in the mean time

const test = function() {
    // setTimeout is non-blocking as other things can happen. Even if set to 0, STILL async, because it calls back to the fn regardless of the time to wait
    setTimeout(() => {
        console.log("Start");
        console.log("End");
    }, 1000);
};

const test2 = function() {
    console.log("Called two");
};

test();
test2();


/** Event Loop */ 

// Callback messages are queued and then event loop checks and de-queues functions from there
// Callbacks set code aside and event loop makes sure its taken care of. This is what allows for asynchronicity; engine can do other things and the come back to items on queue