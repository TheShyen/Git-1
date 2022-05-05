'use strict';

class ReadError extends Error {
    constructor(message, cause) {
        super(message);
        this.cause = cause;
        this.name = "ReadError";
    }
}

class NotEnoughArgumentsError extends ReadError {
    constructor(message) {
        super(message);
        console.log(this.cause);
        this.name = "Not enough arguments exception";
    }
}
const arr = ["aboba", "zopa", "ruslan"];

function func(args) {
    if (args.length < 5) {
        throw new NotEnoughArgumentsError("aboba");
    }
}

func(arr);

try {
    func(arr);
} catch (err) {
    if (err instanceof NotEnoughArgumentsError) {
        throw new NotEnoughArgumentsError("Error in try-catch");
    } else {
        throw new ReadError("ReadError in try-catch");
    }
}