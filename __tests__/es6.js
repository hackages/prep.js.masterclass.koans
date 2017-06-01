import { expect, should } from 'chai';

describe('ES6 ', () => {
  describe('var, let, const', () => {
    describe('var...', () => {
      function iterator(bool) {
        if (bool) {
          var name = 'Hackages';
        }
        return name;
      }

      it('what do you expect???', () => {
        const actual = iterator(false);

        expect(actual).equal(__);
      });
    });

    xdescribe('let...', () => {
      function iterator(bool) {
        if (bool) {
          let name = 'Hackages';
        }
        return name;
      }

      it('what do you expect???', () => {
        // TODO: uncomment this line below to see what happens when you change var to let
        //console.log(iterator());
      });
    });

    xdescribe('const...', () => {
      function iterator(bool) {
        if (bool) {
          const name = 'we';
        }
        return name;
      }

      it('what do you expect???', () => {
        // TODO: uncomment this line below to see what happens when you change var to const
        //console.log(iterator());
      });
    });
  });

  // You can implement your solution in another file or inline here
  // You can find more information about arrow-function mdn by following the link below
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

  describe('Arrow function', () => {
    describe('Invoked through call or apply', () => {
      it('Should not bind this through call', () => {
        const person = {
          age: 1,

          add: function(age) {
            const f = v => v + this.age;
            return f(age);
          },

          addThruCall: function(age) {
            let f = v => {
              return v + this.age;
            };

            const hidden = {
              age: 2,
            };

            return f.call(hidden, age);
          },
          addThruApply: function(age) {
            let f = v => {
              return v + this.age;
            };

            const hidden = {
              age: 2,
            };

            return f.apply(hidden, [age]);
          },
        };

        let actual = person.add(1);

        expect(actual).equal(__);

        actual = person.addThruCall(1);

        expect(actual).equal(__);

        actual = person.addThruApply(1);

        expect(actual).equal(__);
      });
    });
    describe('Used as methods', () => {
      it('Should return undefined', () => {
        const person = {
          age: 10,
          getAge: function() {
            return this.age;
          },
          getAgeByArrow: () => {
            return this ? this.age : undefined;
          },
        };

        Object.defineProperty(person, 'getAgeProperty', {
          get: () => {
            return this ? this.age : undefined;
          },
        });

        let actual = person.getAge();

        expect(actual).equal(__);

        actual = person.getAgeByArrow();

        expect(actual).equal(__);

        actual = person.getAgeProperty;
      });
    });
  });

  describe('Class in ES6', () => {
    describe('Like a function ...', () => {
      // Declare the Human class below that will satisfy all assertions
      let Human;
      it('should be a function', () => {
        expect(Human).to.be.a('function');
      });
      it('should not be hoisted like function', () => {
        let polyFunc;

        (() => {
          polyFunc = new PolygoneFunc(3, 5);
        }).should.not.throw(Error);

        function PolygoneFunc(height, width) {
          this.height = height;
          this.width = width;

          this.log = function() {
            return `H:${this.height} & W:${this.width}`;
          };
        }

        let actual = polyFunc.log();

        expect(actual).equal('H:3 & W:5');

        let polyClass;

        // Hint: the declaration position of PolygoneClass is not correct
        (() => {
          polyClass = new PolygoneClass(3, 5);
        }).should.not.throw(Error);

        class PolygoneClass {
          constructor(height, width) {
            this.height = height;
            this.width = width;
          }

          log() {
            return `H:${this.height} & W:${this.width}`;
          }
        }

        actual = polyClass.log();

        expect(actual).equal('H:3 & W:5');
      });
    });
  });

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators
  // http://koajs.com/
  // http://www.2ality.com/2015/03/es6-generators.html

  describe('Generators', () => {
    function getGeneratorResultInArray(func) {
      const res = [];
      for (let val of func()) {
        res.push(val);
      }
      return res;
    }

    describe('Syntax', () => {
      it('Via function declaration', () => {
        // Declare and Implement the generator function foo that will satisfy all assertions

        const actual = getGeneratorResultInArray(foo);
        expect(actual).deep.equal(['a', 1, 'c']);
      });

      it('Via function expression', () => {
        // Declare and Implement the generator function foo that will satisfy all assertions
        let foo;

        const actual = getGeneratorResultInArray(foo);
        expect(actual).deep.equal(['d', 1, 'lol']);
      });

      it('Via a method definition in an object literal', () => {
        let obj = {
          // Declare and Implement the generator function foo that will satisfy all assertions
        };

        const actual = getGeneratorResultInArray(obj.foo);
        expect(actual).deep.equal(['daddy', 1000, -100]);
      });

      it('Via a method definition in a class definition', () => {
        class Bar {
          // Declare and Implement the generator function foo that will satisfy all assertions
        }

        const actual = getGeneratorResultInArray(new Bar().foo);
        expect(actual).deep.equal(['Mu', 1000, { name: 'Hackages' }]);
      });
    });
  });
});
