'use strict';

/* 
	test different ways of instationating objects
*/

const assert = require('assert');


// instantiate empty objects with constructor
var obj1 = new Object,
	obj2 = new Object;

// the two empty objects are different objects
assert.notEqual(obj1, obj2);
// the two empty object  contain the same properties (i.e. nothing)
assert.deepEqual(obj1, obj2);


// instantiate objects with with literal prototype
var obj3 = new Object ({x:1, y:"abc"}),
	obj4 = new Object({x:1, y:"abc"}),
	obj5 = new Object({x:1, y:"abcd"});

// obj3 and obj4 are twoi disctinct object but with the same contebts
assert.notEqual(obj3, obj4);
assert.deepEqual(obj3, obj4);
// but obj3 and obj have different contents
assert.notDeepEqual(obj3, obj5);

// instantiate object using another object as protopype and add an additional property 'z'
var obj6 = new Object(obj5);
obj6.z = 2.0;

// obj6 contains properties z and y (inherited from obj5) as well as property z
assert("x" in obj6);
assert("y" in obj6);
assert("z" in obj6);
// but property z has also been added to obj5 !
assert("z" in obj5);

// test property is shared across different linked objects
assert.equal(obj5.z, obj6.z);
// when property 'z' is changed via object obj5, change is visoble also in obj6
obj5.z = 3.0;
assert.equal(obj5.z, obj6.z);

 


