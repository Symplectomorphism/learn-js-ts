// Anything following double slashes is an English-language comment.
// Read the comments carefully: they explain the JavaScript code.

// A variable is a symbolic name for a value.
// Variables are declared with the let keyword:
let x;                  // Declare a variable named x.

// Values can be assigned to variables with an = sign.
x = 0;
console.log(x)

// JavaScript supports several types of values.
x = 1;
x = 0.01;
x = "hello world";          // Strings of text in quotation  marks.
x = 'JavaScript';           // Single quote marks also delimit strings.
console.log(x);

// JavaScript's most important datatype is the object.
// An object is a collection of name/value pairs, or a string to value map.
let book = {
    topic: "JavaScript",
    edition: 7
}
console.log(book);

// Access the properties of an object with . or []:
console.log(book.topic);
console.log(book["edition"]);
book.author = "Flanagan";
book.contents = {};
console.log(book);

// Conditionally access properties with ?.
console.log(book.contents?.ch01?.sect1)

// JavaScript also supports arrays (numerically indexed lists) of values:
let primes = [2, 3, 5, 7];
console.log(primes[0])
console.log(primes.length)
console.log(primes[primes.length-1])
primes[4] = 9;
primes[4] = 11;
let empty = [];
console.log(empty.length)

// Arrays and objects can hold other arrays and objects:
let points = [
    {x: 0, y: 0},
    {x: 1, y: 1}
];
let data = {
    trial1: [[1,2], [3,4]],
    trial2: [[2,3], [4,5]]
}


// Operators act on values (the operands) to produce a new value.
// Arithmetic operators are some of the simplest:
console.log(points[1].x - points[0].x);
console.log("3" + "2");

// JavaScript defines some shorthand arithmetic operators
let count = 0;          // Define a variable;
count++;
count--;
count += 2;
count *= 3;
console.log(count);

let y = 3;

// Functions are parametrized block of JavaScript code that we can invoke.
function plus1(x) {
    return x + 1;
}

console.log(plus1(y))

let square = function (x) {
    return x * x;
};

console.log(
    square(plus1(y))
)

// Arrow Functions
const plus2 = x => x + 1;
const square2 = x => x * x;

console.log( plus2(y) )
console.log( square(plus2(y)) )

// When functions are assigned to the properties of an object, we call 
// them "methods." All JavaScript objects (including arrays) have methods:
let a = [];
a.push(1, 2, 3);
a.reverse();
console.log(a)

// We can define our own methods, too. The "this" keyword refers to the object 
// on which the method is defined: in this case, the points array from earlier. 
points.dist = function() {
    let p1 = this[0];
    let p2 = this[1];
    let a = p2.x - p1.x;
    let b = p2.y - p1.y;
    return Math.sqrt(a * a + b * b);
};

console.log( points.dist() );
