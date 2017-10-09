/** https://github.com/hackages/advanced.js.koans/blob/master/test/00_intro_testing.spec.js **/
import { expect } from "chai";

describe("Advanced JS", () => {
  describe("JS falsy values", () => {
    it("List all the falsy values in JavaScript", () => {
      let falsy = __;
      expect(falsy).to.not.be.ok;
      falsy = __;
      expect(falsy).to.not.be.ok;
      falsy = __;
      expect(falsy).to.not.be.ok;
      falsy = __;
      expect(falsy).to.not.be.ok;
      falsy = __;
      expect(falsy).to.not.be.ok;
    });
  });

  describe("About functions", () => {
    it("should declare function: add", () => {
      expect(add(1, 2)).to.equal(__);
    });

    it("should know internal variables override outer variables", () => {
      let message = "Outer";

      function getMessage() {
        return message;
      }

      function overrideMessage() {
        message = "Inner";
        return message;
      }

      expect(getMessage()).to.equal(__);
      expect(overrideMessage()).to.equal(__);
      expect(message).to.equal(__);
    });

    it("should allow extra function arguments", () => {
      function returnFirstArg(firstArg) {
        return firstArg;
      }

      expect(returnFirstArg("first", "second", "third")).to.equal(__);

      function returnSecondArg(firstArg, secondArg) {
        return secondArg;
      }

      expect(returnSecondArg("arguments")).to.equal(__);

      // TODO: Fix the function to return all arguments.
      function returnAllArgs() {}

      expect(returnAllArgs("first", "second", "third")).to.equal(__);
    });
  });

  describe("Context in JavaScript", () => {
    describe("Should use bind", () => {

      it("push a new user after 0,5s", done => {
        const hackcamp = {
          members: ["Davy"]
        };
        // TODO Modify the code below to satisfy all the assertions below.
        function addMembers() {
          this.members.push("Joker");
          expect(this.members.length).equal(2);
          done();
        }
        setTimeout(addMembers, 500);
      });
    });

    describe('What does "this" refer to ?', () => {
      function addMentor(mentor) {
        this.mentors.push(mentor);
        return this.mentors;
      }

      it("Should add new mentor ", () => {
        const company = {
          name: "Hackages Lab",
          addMentor: addMentor
        };
        const actual = company.addMentor("Juan");

        expect(actual).to.be.deep.equal(["Alex", "Juan"]);
      });
    });
  });
});
