export function numbersInDepth() {
// =========================================
// Parsing Strings to Numbers
// =========================================

    console.log(parseInt('55px', 10));
    console.log(parseFloat('55.9999px'));

    console.log(Number('55e10'));
    console.log(Number('55.99999'));

    console.log(+'99.55555');

// =========================================
// Integers and Floating Points
// =========================================

console.log(0.1 + 0.2);
console.log(100 / 3);

const price = 9.33;
const quantity = 3;
console.log(price * quantity);

const anotherPrice = 9.33 * 100;
const anotherQuantity = 3;
console.log(anotherPrice * anotherQuantity / 100);


// =========================================
// Number Literal, Function and Construction
// =========================================

const literalNumber = 99;
console.log(literalNumber);

console.log(Number(55));
console.log(Number('33'));
console.log(Number('44px'));

console.log(new Number(66));

// =========================================
// Understanding Not-a-Number
// =========================================

    console.log(`
=========================================
Understanding Not-a-Number
=========================================
`);

    const result = Number('55px');

    console.log(isNaN(result));
    console.log(isNaN('I am a String!'));

    console.log(Number.isNaN(result));
    console.log(Number.isNaN('I am another String!'));
    console.log(Number.isNaN(Number.isNaN));

    console.log(Number.isInteger(66));
    console.log(Number.isInteger(66.99));

    console.log(`
=========================================
Numbers and Immutability
=========================================
`);

    const immutableNumber = 99;
    let referencedNumber = immutableNumber;

    referencedNumber = 44;
    console.log('immutableNumber', immutableNumber);
    console.log('referencedNumber', referencedNumber);

    console.log(`
=========================================
Correctly Type-Checking Numbers
=========================================
`);

    console.log(typeof 99);
    console.log(99 instanceof Number);
    console.log(Number('99') instanceof Number);
    console.log(new Number('99') instanceof Number);
    console.log({}.toString());
    console.log(Object.prototype.toString());
    console.log(Object.prototype.toString.call(99));
    console.log(Object.prototype.toString.call(99).slice(8, -1) === 'Number');

    console.log(`
=========================================
Exploring Number Methods
=========================================
`);

    console.log(Number.prototype);
    console.log(99.12345678.toFixed(2));
    console.log(99..toFixed(2));
    console.log((99).toFixed(2));

    console.log(parseFloat(99.12345678.toFixed(4)));
    console.log((99.12345678).toPrecision(4));
    console.log(new Number(99).valueOf());

}