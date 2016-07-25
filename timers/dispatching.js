'use strict';

/* 
	Test use to setImmediate to dispatch processing
*/

function a() {
	console.log("Execution of a()");
}

function b() {
	console.log("Execution of b()");
}

function c() {
	console.log("Execution of c()");
}

// execute ASAP a() then b()
setImmediate(a);
setImmediate(b);

// the execute c() 10 times
for (var i = 0; i < 10; i++) {
	setImmediate(c);
};


