/***********************************************************************
Write a function using fat arrow syntax, `arrowGetFullName(person)` that takes in
a person object and returns a string containing their full name. 

Assign the below function to a variable using the const keyword. Using the const
keyword will allow any value assigned to that variable protection from being
reassigned within that scope.

Examples:
let p1 = {firstName: 'John', lastName: 'Doe'};
arrowGetFullName(p1); // => 'John Doe'
let p2 = {firstName: 'Charlie', lastName: 'Brown', age: 9};
arrowGetFullName(p2); // => 'Charlie Brown'

***********************************************************************/

// Your code hereconst assert = require("assert");
const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const arrowGetFullName = require("../problems/01-arrow-full-name.js");

describe("arrowGetFullName()", function () {
  it("should return the full name values from within the object", function () {
    const p1 = { firstName: "John", lastName: "Doe" };
    const test1 = arrowGetFullName(p1);
    const p2 = { firstName: "Charlie", lastName: "Brown", age: 9 };
    const test2 = arrowGetFullName(p2);

    const result1 = "John Doe";
    const result2 = "Charlie Brown";

    assert.deepEqual(test1, result1);
    assert.deepEqual(test2, result2);
  });

  it("should be an arrow function", function () {
    expect(typeof arrowGetFullName.prototype).to.equal("undefined");
  });
});

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = arrowGetFullName;
} catch (e) {
  return null;
}
