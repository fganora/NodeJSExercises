'use strict';

/*
 * eval() tests
*/

const assert = require('assert');


assert.equal(eval("2 + 2"), 4);       


var x = 2
var y = 39
var z = "42"
assert.equal(eval("x + y + 1"), z);     