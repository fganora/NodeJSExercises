'use strict';
/*
 * Parsing examples
*/

const assert = require('assert')


// parsing decimal, binary and hex integers  

assert.equal( parseInt("-0123", 10), -123 ) 

assert.equal(parseInt("100011101", 2), 285)        

assert.equal(parseInt("0xff0", 16), 4080) 

// parsing floats
assert.equal(parseFloat("-0.1509"), -0.1509) 

// parsing invalid number ==> NaN
assert( isNaN(parseInt("$150", 10))  ) 

// test encodeURI
assert.equal( encodeURI("https://mail.google.com/mail/u/0/#inbox/ 150d2cd10099655a"), 
	"https://mail.google.com/mail/u/0/#inbox/%20150d2cd10099655a" ) 