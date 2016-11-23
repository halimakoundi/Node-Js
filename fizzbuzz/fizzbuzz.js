'use strict';

function makeFizzBuzz() {
    return new FizzBuzz();
}
class FizzBuzz {

    generate(value) {

        if (Number.isInteger(parseInt(value))) {

            if (isFizzBuzz(value)) {
                return "fizz buzz";
            }
            if (isFizz(value)) {
                return "fizz";
            }
            if (isBuzz(value)) {
                return "buzz";
            }
            return value;
        } else {
            throw Error("Please provide a number");
        }
    }
}

function isFizz(value) {
    return (value % 3 == 0);
}

function isBuzz(value) {
    return value % 5 == 0;
}

function isFizzBuzz(value) {
    return isFizz(value) && isBuzz(value);
}

module.exports = {generate: makeFizzBuzz().generate};