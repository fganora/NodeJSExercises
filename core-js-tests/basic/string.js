'use strict';

/*
 * String methods test
*/

const assert = require('chai').assert;

const testString = "hello";
const longString = "The quick brown fox \
jumped over the lazy dog"

describe('Strings:', () => {

    it('type', () => {
      assert.typeOf(testString, 'string');
    });

   it('length', () => {
      assert.equal(testString.length, 5);
    });

    it('equality', () => {
      assert.equal(longString, "The quick brown fox jumped over the lazy dog");
    });

    it('comparison', () => {
      assert(testString < testString + ".");
    });

    it('localeCompare()', () => {
      assert.equal(testString.localeCompare("hi"), -1);
    });

    it('split()', () => {
      assert.deepEqual(longString.split("he"), ["T", " quick brown fox jumped over t", " lazy dog"]);
    });



  describe('Construction from characters:', function() {
    it('with fromCharCode()', () => {
      assert.equal(String.fromCharCode(65, 66, 67), "ABC");
    });
  });

  describe('Access to characters in strings:', function() {
    it('with Array notation', () => {
      assert.equal(testString[2], "l");
    });
    it('with charAt()', () => {
      assert.equal(testString.charAt(1), "e");
    });
    it('with charCodeAt()', () => {
      assert.equal(testString.charCodeAt(0), 104);
    });
  });

  describe('String concatenation:', () => {
    it('with concat()', () => {
      assert.equal(testString.concat(" Dolly"), "hello Dolly");
    });
    it('with + operator', () => {
      assert.equal(testString + " Dolly", "hello Dolly");
    });
  });


  describe('Searching, matching and replacing:', () => {
    it('search substring with indexOf()', () => {
      assert.equal(testString.indexOf("ll"), 2);
    });
    it('search substring with lastIndexOf()', () => {
      assert.equal(testString.lastIndexOf("l"), 3);
    });
    it('search substring with search(regexp)', () => {
      assert.equal(testString.search("o$"), 4);
    });
    it('startsWith()', () => {
      assert(testString.startsWith("h"));
    });
    it('endsWith()', () => {
      assert(testString.endsWith("lo"));
    });
     it('includes()', () => {
      assert(longString.includes("lazy"));
    });
    it('includes() from start index', () => {
      assert.isNotOk(longString.includes("quick", 20));
    });
    it('regex match with match()', () => {
      assert(testString.match("^h"));
    });
    it('replace()', () => {
      assert.equal(testString.replace("ll", "y"), "heyo");
    });

  });

  describe('Substring extraction:', () => {
    it('substr()', () => {
      assert.equal(testString.substr(1, 2), "el");
    });
    it('substring()', () => {
      assert.equal(testString.substring(3,5), "lo");
    });
    it('slice()', () => {
      assert.equal(testString.slice(1,3), "el");
    });
  });

  describe('Trimming:', () => {
    it('trim()', () => {
      assert.equal("  hello  ".trim(), testString);
    });
    it('trimLeft()', () => {
      assert.equal("  hello  ".trimLeft(), "hello  ");
    });
    it('trimRight()', () => {
      assert.equal("  hello  ".trimRight(), "  hello");
    });
  });

  describe('Other string manipulation:', () => {
    it('toLowerCase()', () => {
      assert.equal(testString.toLowerCase(), testString);
    });
    it('toUpperCase()', () => {
      assert.equal(testString.toUpperCase(), "HELLO");
    });
    it('repeat()', () => {
      assert.equal(testString.repeat(3), "hellohellohello");
    });
  });

  describe('String interpolation:', () => {
    it('${ ... }', () => {
      let action = "mess", state = "Texas";
      assert.equal(`Don't ${action} with ${state}!`, "Don't mess with Texas!");
    });
  });

});







