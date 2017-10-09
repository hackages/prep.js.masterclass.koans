import { expect, should } from 'chai';

describe('ES6 ', () => {

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

          expect(actual).equal(__);
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

    describe('Destructuring', () => {
      describe('Object', () => {
        function getUserInfo() {
          return {
            id: 8798,
            name: 'Davy Engone',
            company: 'Hackages',
            country: 'Everywhere',
            handles: {
              twitter: 'davyengone',
              skype: 'davy_engone'
            }
          };
        }

        it('With ES6 object Destructuring to do the same operation', () => {
          // TODO Extract the required information using the spread operator.
          expect(id).to.be.defined;
          expect(fullName).to.equal('Davy Engone');
          expect(twitter).to.equal('davyengone');
        });
      })

      describe('Array', ()=>{
        let fruits = ['brussels sprout', 'apple', 'beetroot', 'broccoli', 'carrot', 'cherry'];

        it('With ES5', () => {
          const first = fruits[0];
          expect(first).to.equal('brussels sprout');
          const last = fruits[fruits.length - 1];
          expect(last).to.equal('cherry');
        });

        it('With ES6', () => {
          // TODO: Get the first fruit
          let actual;
          expect(actual).to.equal('brussels sprout');
          // TODO: Get the last fruit
          expect(actual).to.equal('cherry');
          // TODO: Get the queue fruit;
          expect(actual).deep.equal(['apple', 'beetroot', 'broccoli', 'carrot', 'cherry']);
        });
      });
    })

    describe('Default parameters', () => {
      it("With ES5", () => {

        function drawES5Chart(options) {
          options = options === undefined ? {} : options;
          const size = options.size === undefined ? 'big' : options.size;
          const cords = options.cords === undefined ? { x: 0, y: 0 } : options.cords;
          const radius = options.radius === undefined ? 25 : options.radius;
          return [size, cords, radius];
        }
        const actual = drawES5Chart({
          cords: { x: 18, y: 30 },
          radius: 30
        });
        expect(actual).deep.equal(['big', { x: 18, y: 30 }, 30]);

        });
      it("With ES6", () => {

        function drawES6Chart(/* // TODO: Provide the parameter desctructuring to satisfy all assertions below  */) {
          return [size, cords, radius];
        }
        let actual = drawES6Chart();
        expect(actual).deep.equal(['big', { x: 0, y: 0 }, 25]);

        actual = drawES6Chart({
          cords: { x: 18, y: 30 },
          radius: 30
        });
        expect(actual).deep.equal(['big', { x: 18, y: 30 }, 30]);
      });
    });
  });
