'use strict';

/* 
	Immmediate queiing for execution by Node.js
*/

var x = 0;

// assignment x=1 of (at the next oppurtunity by the Event Loop)
var execRequest = setImmediate( function () {

		// check x = 0 initially
		console.assert(x === 0);

		x = 1;
		console.log("Assigned x = 1 at timestamp:" + Date());
		console.log("Value of x = " + x);
	}
);

console.log("Value of x = " + x);


// cancel execution if passed command line argumenr == 'no'
if (process.argv[2] === "no") {
		clearImmediate(execRequest);
}



