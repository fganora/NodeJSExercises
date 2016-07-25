'use strict';

/*
 * String methods
*/

const assert = require('assert');

// aaccess to characters in strings
assert.equal("hello"[2], "l")
assert.equal("hello".charAt(1), "e")
assert.equal("hello".charCodeAt(0), 104)

//other methods
assert.equal("hello".concat(" Dolly"),"hello Dolly")
assert.equal("hello".indexOf("ll"), 2);
assert.equal("hello".lastIndexOf("l"), 3)
assert.equal("hello".length, 5)
assert.equal("hello".localeCompare("hi"), -1)
assert("hello".match("^h"))
assert.equal("hello".replace("ll", "y"), "heyo")
assert.equal("hello".search("x"), -1)
assert.equal("hello".slice(1,3), "el")
assert.equal("a,b,c".split(",")[1], "b")
assert.equal("hello".substr(1, 2), "el")
assert.equal("hello".substring(3,5), "lo")
assert.equal("HellO".toLowerCase(), "hello")
assert.equal("HellO".toUpperCase(), "HELLO")
assert.equal("  hello  ".trim(), "hello")
assert.equal("  hello  ".trimRight(), "  hello")
assert.equal("  hello  ".trimLeft(), "hello  ")

// array methods applied to Strings
var str = "hello"
var result = "-"

assert.equal(Array.prototype.join.call(str, " "), "h e l l o")
Array.prototype.forEach.call(str, function(x) {result += (x+"-")})
assert.equal(result, "-h-e-l-l-o-")

var result = ""
Array.prototype.map.call(str, function(x) {result += x.toUpperCase()})
assert.equal(result, "HELLO")

assert(Array.prototype.some.call(str, function(x) {return x === "l"}))
