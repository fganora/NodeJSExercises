'use strict';

/* 
	Test use to setImmediate to dispatch processing
*/

const Message = require('./lib/message.js');


var msg1 = new Message({a: "1", b: 2});
var msg2 = new Message({firstName: "John", lastName: "Smith"}, "user-1");
msg1.setBusinessID("myid");

console.log( msg1.getPayload());
console.log( msg1.getPayloadAsJSON());
console.log( msg1.getBusinessID());
console.log(msg1.toString());

console.log( msg2.getPayload());
console.log( msg2.getPayloadAsJSON());
console.log( msg2.getBusinessID());
console.log(msg2.toString());
