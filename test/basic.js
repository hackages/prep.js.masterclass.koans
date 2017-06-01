import {expect, should} from 'chai';

describe('Basic javascript tests', function () {
  it('equality with type coercion', function () {
    expect(3).equal('__');
  });
  it('string.length', function () {
    var fruit = 'apple';
    expect(__).equal(fruit.length);
  });

  it('slice', function () {
    var fruit = 'apple pie';
    expect(__).equal(fruit.slice(0, 5));
  });
  it('typeof', function () {
    expect(__).equal(typeof({}));
    expect(__).equal(typeof('apple'));
    expect(__).equal(typeof(-5));
    expect(__).equal(typeof(false));
  });
  describe('About Objects', function () {
    it('object literal notation', function () {
      var person = {
        __: __,
        __: __
      };
      expect('Amory Blaine').equal(person.name);
      expect(102).equal(person.age);
    });

    it('dynamically adding properties', function () {
      var person = {};
      person.__ = 'Amory Blaine';
      person.__ = 102;
      expect('Amory Blaine').equal(person.name);
      expect(102).equal(person.age);
    });

    it('adding properties from strings', function () {
      var person = {};
      person['__'] = 'Amory Blaine';
      person['__'] = 102;
      expect('Amory Blaine').equal(person.name);
      expect(102).equal(person.age);
    });

    it('adding functions', function () {
      var person = {
        name: 'Amory Blaine',
        age: 102,
        toString: function () {
          return __;  // HINT: use the 'this' keyword to refer to the person object.
        }
      };
      expect('I Amory Blaine am 102 years old.').equal(person.toString());
    });
  });

  it('self invoking functions', function () {
    var publicValue = 'shared';

    // self invoking functions are used to provide scoping and to alias variables
    (function (pv) {
      var secretValue = 'password';
      expect(__).equal(pv, 'what is the value of pv?');
      expect('__').equal(typeof (secretValue), 'is secretValue available in this context?');
      expect('__').equal(typeof (publicValue), 'is publicValue available in this context?');
    })(publicValue);

    expect('__').equal(typeof (secretValue), 'is secretValue available in this context?');
    expect('__').equal(typeof (publicValue), 'is publicValue available in this context?');
  });
  // https://developer.mozilla.org/en/JavaScript/Guide/Inheritance_and_the_prototype_chain
  describe('Prototype Chain', function () {

    var father = {
      b: 3,
      c: 4
    };

    var child = Object.create(father);
    child.a = 1;
    child.b = 2;

    /*
     * ---------------------- ---- ---- ----
     *                      [a]  [b]  [c]
     * ---------------------- ---- ---- ----
     * [child]               1    2
     * ---------------------- ---- ---- ----
     * [father]                   3    4
     * ---------------------- ---- ---- ----
     * [Object.prototype]
     * ---------------------- ---- ---- ----
     * [null]
     * ---------------------- ---- ---- ----
     * */

    it('Is there an "a" and "b" own property on child?', function () {
      expect(__).equal(child.hasOwnProperty('a'));
      expect(__).equal(child.hasOwnProperty('b'));
    });

    it('Is there an "a" and "b" property on child?', function () {
      expect(__).equal(child.a);
      expect(__).equal(child.b);
    });

    it('If "b" was removed, whats b value?', function () {
      delete child.b;
      expect(__).equal(child.b);
    });


    it('Is there a "c" own property on child?', function () {
      expect(__).equal(child.hasOwnProperty('c'));
    });

    // Is there a 'c' own property on child? No, check its prototype
    // Is there a 'c' own property on child.[[Prototype]]? Yes, its value is...
    it('Is there a "c" property on child?', function () {
      expect(__).equal(child.c);
    });

    // Is there a 'd' own property on child? No, check its prototype
    // Is there a 'd' own property on child.[[Prototype]]? No, check it prototype
    // child.[[Prototype]].[[Prototype]] is null, stop searching, no property found, return...
    it('Is there an "d" property on child?', function () {
      expect(__).equal(child.d);
    });

  });

  it('"this" on unattached function', function () {
    var person = {
      globalName: 'bob',
      intro: function () {
        return 'Hello, my name is ' + this.globalName;
      }
    }

    var alias = person.intro;

    // if the function is not called as an object property 'this' is the global context
    // (window in a browser). This is an example. Please do not do this in practise.
    window.__ = 'Peter';
    expect(alias()).equal('Hello, my name is Peter');
  });
  it('"this" set explicitly', function () {
    const person = {
      name: 'bob',
      intro: function () {
        return 'Hello, my name is ' + this.name;
      }
    };

    // calling a function with 'call' lets us assign 'this' explicitly
    const message = person.intro.call({__: 'Frank'});
    expect(message).equal(message);
  });
  it('variables declared inside of a function', function () {
    var outerVariable = 'outer';

    // this is a self-invoking function. Notice that it calls itself at the end ().
    (function () {
      var innerVariable = 'inner';
      expect(__).equal(outerVariable);
      expect(__).equal(innerVariable);
    })();

    expect(__).equal(outerVariable);
    expect(__).equal(typeof (innerVariable));
  });

});