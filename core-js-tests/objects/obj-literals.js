'use strict';

/* 
	object literals and basic object properties
*/

const assert = require('assert');


// define empty object literals
var obj1 = {},  	 
	obj2 = {};		 


// an object is equal to itself
assert.equal(obj1, obj1);

// two different empty object literals are not equal
assert.notEqual(obj1, obj2);  


// define nonempty object literals
var coord1 = {x: 1, y:0, z:-3},
	coord2 = {x: coord1.x + 10, y: coord1.y + 10, z: coord1.z + 10};

// an object has undefined length
assert (coord1.length == undefined);

// test abject access notations
assert.equal (coord1.x, coord1['x']);
assert.equal (coord2.y, coord2['y']);

// check values
assert.equal(coord1.x + coord1.y + coord1.z, -2);

// access with dynamic property name
var propName = 'z';
assert.equal(coord2[propName], 7);

// enumerating object properties
var propString = '';
for (var prop in coord1) {
	propString +=prop;
}
assert.equal(propString, "xyz");


// define object with nonidentifier property names
var book = {"my title": "The Name of the Rose",
			"author" : "Umberto Eco"
			}
 
assert.equal(book.author, "Umberto Eco");
assert.equal(book['my title'],  "The Name of the Rose");


// define complex object literal
var invoice = {
	invoiceNr: 21331,
	invoiceRef: "order-1",
	total: 102.50,
	currency: "EUR",
	customer: {number: 123, name: "John Doe"},
	items: [
		{nr: 1,  qty: 10, product: "product-A"},
		{nr: 2,  qty: 15, product: "product-B"}
	]
};


// nested property access
assert.equal(invoice.customer.number, 123);
assert.equal(invoice.items[1].product, "product-B");

// nested property access: alterlative notation
assert.equal(invoice["customer"]["name"], "John Doe");
assert.equal(invoice["items"]["0"]["qty"], 10);


