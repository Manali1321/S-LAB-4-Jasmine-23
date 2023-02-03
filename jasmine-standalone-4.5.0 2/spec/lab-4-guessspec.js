describe("Test to pass", function () {
    it("should return ‘You guessed it!’ when the correct number is entered", function () {
        expect(guessNum(4)).toEqual('You guessed it!');
    });
    it("should return ‘Guess again.’ for any number between 1 and 10 (inclusive) that is not the correct answer", function () {
        expect(guessNum(9)).toEqual("Guess again.");
    });
});


describe("Test to Fail", function () {
    it("should return ‘A number was not input.’ if the value entered is not a number.", function () {
        expect(guessNum('p')).toEqual("A number was not input.");
    });
    it("should return ‘A value was not entered.’ if it receives an empty string.", function () {
        expect(guessNum('')).toEqual("A value was not entered.");
    });
    it("should return ‘A number was not input.’ if the value entered is not a number.", function () {
        expect(guessNum('!')).toEqual("A number was not input.");
    });
});
describe("GuessNum Boundary testing", function () {
    it("should return ‘Way off!!!! Pick between 1 and 10.’ if the value entered is a number outside of the allowed range of guessing values.", function () {
        expect(guessNum('11')).toEqual("Way off!!!! Pick between 1 and 10.");
    });
    it("should return ‘A value was not entered.’ if it receives an empty string.", function () {
        expect(guessNum('')).toEqual("A value was not entered.");
    });
    it("should return ‘A number was not input.’ if the value entered is not a number.", function () {
        expect(guessNum('!')).toEqual("A number was not input.");
    });
    it("should return ‘Guess again.’ for any number between 1 and 10 (inclusive) that is not the correct answer", function () {
        expect(guessNum(8)).toEqual("Guess again.");
    });
    it("should return ‘Guess again.’ for any number between 1 and 10 (inclusive) that is not the correct answer", function () {
        expect(guessNum(2)).toEqual("Guess again.");
    });
    it("should return ‘Way off!!!! Pick between 1 and 10.’ if the value entered is a number outside of the allowed range of guessing values.", function () {
        expect(guessNum('0')).toEqual("Way off!!!! Pick between 1 and 10.");
    });
});