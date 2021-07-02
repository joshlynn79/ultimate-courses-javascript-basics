export function stringsInDepth() {

    console.log(`
===============================================
String Literal, Function and Constructor Syntax
===============================================
`);

    console.log('Pizza "Hello!"');
    const pizza = 'Pepperoni';
    console.log('Pizza is: ' + pizza);
    console.log(`Pizza is: ${pizza}`);

    console.log(`
Pizza is:
${pizza}!
`);

    console.log(String(55 + 11), 55 + '11');
    console.log(String({name: 'Pepperoni'}));
    console.log(String([1, 2, 3, 4]));

    console.log(new String(5555555));

    console.log(`
===============================================
String Properties and Indexes
===============================================
`);

    console.log(new String(5599));


    console.log(pizza.length);

    console.log(pizza[0]);
    console.log(pizza[1]);
    console.log(pizza['0']);
    console.log(pizza.charAt(0));
    console.log(pizza[0], pizza[pizza.length - 1]);

    console.log(`
===============================================
Strings and Immutability
===============================================
`);

    const immutableString = 'I Shall not change!';
    const uppercaseString = immutableString.toUpperCase();

    console.log('immutableString', immutableString);
    console.log('uppercaseString', uppercaseString);

    console.log(`
===============================================
Correctly Type-Checking Strings
===============================================
`);

    console.log(typeof 'Pepperoni');
    console.log('Pepperoni' instanceof String);
    console.log(new String('Pepperoni') instanceof String);
    console.log(String('Pepperoni') instanceof String);
    console.log(Object.prototype.toString.call('Pepperoni'));

    console.log(`
===============================================
Exploring String Methods
===============================================
`);

    console.log(String.prototype);
    console.log(pizza.indexOf('P'));
    console.log(pizza.indexOf('p'));
    console.log(pizza.indexOf('z'));

    if (pizza.indexOf('P') !== -1) {
        console.log('Exists');
    }

    console.log(pizza.includes('P'));
    console.log(pizza.includes('z'));

    console.log(pizza.replace('oni', 'fire'));
    console.log(pizza.replace(/oni$/, 'fire'));
    console.log(pizza.replace('as', 'fire'));

    console.log(pizza.slice(2, -1));
    console.log(pizza.slice(0, -1));
    console.log(pizza.slice(0, 1));
    console.log(pizza.slice(0, -2));
    console.log(pizza.slice(2, -3));

    console.log('Pepperoni~Plain'.split('~'));
    console.log('Pepperoni~Plain'.split('~')[0]);
    console.log('Pepperoni~Plain'.split('~')[1]);
    console.log('Pepperoni~Plain'.split(/~/)[1]);

    console.log('    4444 5555 6666 7777   ');
    console.log('    4444 5555 6666 7777   '.length);
    console.log('    4444 5555 6666 7777   '.trim());
    console.log('    4444 5555 6666 7777   '.trim().length);
    console.log('    4444 5555 6666 7777   '.replace(/\s/g, ''));

}