'use strict';

/*
 * Array methods test
*/

const assert = require('chai').assert;

const emptyArray = [];
var numberArray = [3, 1, 5, 9, 7];
var mixedArray = ["a", ["b", 2], 3];
var matrixArray = [ [0, 3, 7],
                    [1, 6, 0  ],
                    [0, -1, 0]];
var sparseArray = [,,1,,,0,1,,];


describe('Arrays:', () => {


describe('Array construction:', function() {
    it('with Array() constructor', () => {
       let otherMixedArray = new Array("a", ["b", 2], 3);
        assert.deepEqual(otherMixedArray, mixedArray)
    });

    it('with Array.of()', () => {
      assert.deepEqual(Array.of("A", "B", "C"), ["A", "B", "C"]);
    });

    it('with Array.from()', () => {
      assert.deepEqual(Array.from('foo'), [ 'f', 'o', 'o' ]);
    });

  });


  describe('Array element access and search:', function() {

    it('element access with [] notation', () => {
      assert.isUndefined(emptyArray[0]);
      assert.equal(numberArray[2], 5);
      assert.equal(numberArray[numberArray.length-1], 7);
      assert.deepEqual(mixedArray[1], ["b", 2]);
      assert.equal(matrixArray[2][1], -1);
      assert.isUndefined(sparseArray[3]);
    });

    it('search with indexOf()', () => {
      assert.equal(numberArray.indexOf(9), 3);
      assert.equal(numberArray.indexOf(10), -1);
    });

    it('search with lastIndexOf()', () => {
      assert.equal(sparseArray.lastIndexOf(1), 6);
    });

    it('search with includes()', () => {
      assert(numberArray.includes(7));
      assert.isNotOk(numberArray.includes(0));
    });

  });


  describe('Looping over arrays:', function() {
    it('with for(...) loop', () => {
      let numericString = '';
       for (let i=0; i < numberArray.length; i++) {
           numericString += numberArray[i];
       }
       assert.equal(numericString, '31597')
    });

    it('with forEach()', () => {
      let numericString = '';
      numberArray.forEach( (item) => {
        numericString +=item;
      });
      assert.equal(numericString, '31597')
    });
  });



  describe('Array functions that do not return an array:', function() {

   it('length attribute', () => {
      assert.equal(emptyArray.length, 0);
      assert.equal(numberArray.length, 5);
      assert.equal(mixedArray.length, 3);
      assert.equal(matrixArray.length, 3);
      assert.equal(sparseArray.length, 8);
    });

    it('Array.isArray()', () => {
      assert(Array.isArray(emptyArray));
      assert(Array.isArray(numberArray));
      assert(Array.isArray(mixedArray));
      assert(Array.isArray(matrixArray));
      assert(Array.isArray(sparseArray));
    });

    it('toString()', () => {
      assert.equal(mixedArray.toString(), 'a,b,2,3');
    });

    it('join()', () => {
         assert.equal(numberArray.join('-'), '3-1-5-9-7');
    });

  });


describe('Array methods that return a new array:', function() {

    it('array copy with slice()', () => {
      let newArray = mixedArray.slice();
      assert.deepEqual(newArray, mixedArray);
      assert.notEqual(newArray, mixedArray);
    });


    it('Array indexes with Object.keys()', () => {
      assert.deepEqual(Object.keys(numberArray), [ '0', '1', '2', '3', '4' ]);
      assert.deepEqual(Object.keys(sparseArray), [ '2', '5', '6' ]);
    });

    it('array concatenation with concat()', () => {
      assert.deepEqual(mixedArray.concat(1, 'x', 'y'), [ 'a', [ 'b', 2 ], 3, 1, 'x', 'y' ]);
    });

    it('subarray with slice()', () => {
      assert.deepEqual(numberArray.slice(2, 4), [ 5, 9 ]);
      assert.deepEqual(mixedArray.slice(1), [ [ 'b', 2 ], 3 ]);
    });

  });


  describe('In-place array manipulation:', function() {

    it('reverse()', () => {
      let testArray = numberArray.slice();
      assert.deepEqual(testArray.reverse(), [ 7, 9, 5, 1, 3 ]);
    });

    it('sort()', () => {
      let testArray = numberArray.slice();
      assert.deepEqual(testArray.sort(), [ 1, 3, 5, 7, 9 ]);
    });

    it('concat()', () => {
      let testArray = numberArray.slice();
      assert.deepEqual(testArray.sort(), [ 1, 3, 5, 7, 9 ]);
    });

    it('element extraction/deletion with splice()', () => {
      let testArray = numberArray.slice();
      assert.deepEqual(testArray.splice(1,2), [ 1, 5]);
      assert.deepEqual(testArray, [3, 9, 7])
    });

    it('element replacement with splice()', () => {
      let testArray = mixedArray.slice();
      testArray.splice(0,1, "X")
      assert.deepEqual(testArray, ["X", ["b", 2], 3]);
    });

    it('element insertion with splice()', () => {
      let testArray = numberArray.slice();
      testArray.splice(3, 0, 11, 13)
      assert.deepEqual(testArray, [ 3, 1, 5, 11, 13, 9, 7 ]);
    });

     it('element insertion with push()', () => {
      let testArray = numberArray.slice();
      testArray.push(11, 13)
      assert.deepEqual(testArray, [ 3, 1, 5, 9, 7, 11, 13 ]);
    });

     it('element insertion with unshift()', () => {
      let testArray = numberArray.slice();
      testArray.unshift(11, 13)
      assert.deepEqual(testArray, [ 11, 13, 3, 1, 5, 9, 7 ]);
    });

    it('element removal with pop()', () => {
      let testArray = numberArray.slice();
      assert.equal(testArray.pop(), 7);
      assert.deepEqual(testArray, [ 3, 1, 5, 9 ]);
    });

    it('element removal with shift()', () => {
      let testArray = numberArray.slice();
      testArray.shift(11);
      assert.deepEqual(testArray, [ 1, 5, 9 , 7 ]);
    });

    it('element overlay with fill()', () => {
      let testArray = numberArray.slice();
      testArray.fill(0, 2, 4);
      assert.deepEqual(testArray, [ 3, 1, 0, 0, 7 ]);
    });

    it('referencing with = assignment', () => {
      let testArray = numberArray.slice();
      let newNumberArray = testArray;
        assert.equal(newNumberArray, testArray);
        assert.strictEqual(newNumberArray, testArray);
        newNumberArray[0] = 10;
        assert.equal(testArray[0], 10);
    });

    it('array truncation', () => {
      let testArray = numberArray.slice();
      testArray.length = 2;
      assert.deepEqual(testArray, [3, 1]);
    });

  });


  describe('Array methods with callbacks  :', function() {

    it('map()', () => {
      assert.deepEqual(numberArray.map( x => x*2 ) , [ 6, 2, 10, 18, 14 ]);
    });

    it('find()', () => {
      assert.equal(numberArray.find( (x) => (x * x > 10 ) ), 5);
    });

    it('findIndex()', () => {
      assert.equal(numberArray.findIndex( (x) => (x * x > 50 ) ), 3);
    });

    it('filter()', () => {
      assert.deepEqual(numberArray.filter( x => (x > 3) ) , [ 5, 9, 7 ]);
    });

    it('every()', () => {
      assert(numberArray.every( x => (x % 2 === 1) ));
    });

    it('some()', () => {
      assert(numberArray.some( x => (x < 5) ));
    });

    it('reduce()', () => {
      assert.equal(numberArray.reduce( (x,y) => (x + y) ), 25);
    });

    it('reduceRight()', () => {
      assert.equal(numberArray.reduce( (x,y) => {return (y.toString() + x); }  ), '79513');
    });

  });


});







