/*
 * Regex examples
*/

const assert = require('assert')

// test subexpressions  
var regexp = /(\w+)\s(\w+)/
var name = 'John Smith'
var alt_name = name.replace(regexp, '$2, $1')
assert.equal (alt_name, "Smith, John") 
