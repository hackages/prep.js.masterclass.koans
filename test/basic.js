import { expect, should } from 'chai';

describe("Basic javascript tests", function () {
  it("equality with type coercion", function () {
    expect(3).equal("__");
  });
  it("for", function () {
    var counter = 10;
    for (var i = 1; i <= 3; i++) {
      counter = counter + i;
    }
    expect(__).equal(counter);
  });
  it("string.length", function () {
    var fruit = "apple";
    expect(__).equal(fruit.length);
  });

  it("slice", function () {
    var fruit = "apple pie";
    expect(__).equal(fruit.slice(0, 5));
  });
  it("typeof", function() {
    expect(__).equal(typeof({}));
    expect(__).equal(typeof('apple'));
    expect(__).equal(typeof(-5));
    expect(__).equal(typeof(false));
  });
  describe("About Objects", function() {
    it("object type", function() {
      var empty_object = {};
      expect(__).equal(typeof(empty_object));
    });

    it("object literal notation", function() {
      var person = {
        __:__,
        __:__
      };
      expect("Amory Blaine").equal(person.name);
      expect(102).equal(person.age);
    });

    it("dynamically adding properties", function() {
      var person = {};
      person.__ = "Amory Blaine";
      person.__ = 102;
      expect("Amory Blaine").equal(person.name);
      expect(102).equal(person.age);
    });

    it("adding properties from strings", function() {
      var person = {};
      person["__"] = "Amory Blaine";
      person["__"] = 102;
      expect("Amory Blaine").equal(person.name);
      expect(102).equal(person.age);
    });

    it("adding functions", function() {
      var person = {
        name: "Amory Blaine",
        age: 102,
        toString: function() {
          return __;  // HINT: use the 'this' keyword to refer to the person object.
        }
      };
      expect("I Amory Blaine am 102 years old.").equal(person.toString());
    });
  });

  it("self invoking functions", function () {
    var publicValue = "shared";

    // self invoking functions are used to provide scoping and to alias variables
    (function (pv) {
      var secretValue = "password";
      expect(__).equal(pv, 'what is the value of pv?');
      expect("__").equal(typeof (secretValue), "is secretValue available in this context?");
      expect("__").equal(typeof (publicValue), "is publicValue available in this context?");
    })(publicValue);

    expect("__").equal(typeof (secretValue), "is secretValue available in this context?");
    expect("__").equal(typeof (publicValue), "is publicValue available in this context?");
  });
  it("'this' set explicitly", function () {
    const person = {
      name: 'bob',
      intro: function () {
        return "Hello, my name is " + this.name;
      }
    };

    // calling a function with 'call' lets us assign 'this' explicitly
    const message = person.intro.call({__: "Frank"});
    expect(message).equal(message);
  });

});