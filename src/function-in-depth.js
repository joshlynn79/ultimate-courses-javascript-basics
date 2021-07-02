export function functionsInDepth() {
    console.log(`
===============================================
Function Declarations and Expressions
===============================================
`);

    // hoisting
    console.log(makeCar1);
    console.log(makeCarAnonymousExpression);
    console.log(makeCarNamedExpression);
    console.log(makeCarArrow);
    console.log(makeCarArrowShort);

    // 1: Function Declaration
    function makeCar1() {
        console.log('Making car...');
    }

    console.log(makeCar1);
    makeCar1();

    // 2: Function Expression
    const makeCarAnonymousExpression = function () {
        console.log('Making car anonymous expression...');
    };

    console.log(makeCarAnonymousExpression.name);
    makeCarAnonymousExpression();

    const makeCarNamedExpression = function myFunction() {
        console.log('Making car names expression...');
    };

    console.log(makeCarNamedExpression.name);
    makeCarNamedExpression();

    // 3: Arrow Function
    const makeCarArrow = () => {
        console.log('Making car arrow...');
    };

    console.log(makeCarArrow.name);
    makeCarArrow();

    const makeCarArrowShort = () => console.log('Make Car Arrow Short');

    console.log(makeCarArrowShort.name);
    makeCarArrowShort();

    console.log(`
===============================================
Function Parameters and Defaults
===============================================
`);

    // name = parameter
    function makeCar2(name = 'UNDEFINED') {
        // name = name || 'UNDEFINED';
        console.log(`Making car: ${name.toUpperCase()}`);

    }

    // strings = arguments
    makeCar2('Porsche');
    makeCar2('Ferrari');
    makeCar2();

    console.log(`
===============================================
Rest Parameters and Arguments
===============================================
`);

    function makeCarPrice() {
        console.log(arguments);
        console.log(Array.isArray(arguments));

        const total = Array.from(arguments).reduce((prev, next) => prev + next);

        console.log(`Total: ${total} USD`);
    }

    makeCarPrice(11, 44, 55, 99, 22);

    function makeCarPriceRest(...params) {
        console.log(params);
        console.log(Array.isArray(params));

        const total = Array.from(arguments).reduce((prev, next) => prev + next);

        console.log(`Total: ${total} USD`);
    }

    makeCarPriceRest(88, 99, 77, 11, 44);

    console.log(`
===============================================
Function Return Values
===============================================
`);

    // const makeCarPrice2 = (...params) => params.reduce((prev, next) => prev + next);

    function makeCarPrice2(...params) {
        return params.reduce((prev, next) => prev + next);
    }

    const totalPrice = makeCarPrice2(11, 44, 55, 99, 22);
    console.log(`Total: ${totalPrice} USD`);

    console.log(`
===============================================
Function Closures and Scope
===============================================
`);

    function makeCarPartId(id) {
        const theId = `CAR_PART_${id}`.toUpperCase();

        return function (name) {
            return `${theId}_${name.toUpperCase().replace(' ', '_')}`;
        };
    }

    const carPartId = makeCarPartId('x8YdsZ12');

    console.log(carPartId('Left Door'));
    console.log(carPartId('Right Door'));
    console.log(carPartId('Windscreen'));

    const anotherCarPartId = makeCarPartId('z34gfd34');

    console.log(anotherCarPartId('Left Door'));
    console.log(anotherCarPartId('Right Door'));
    console.log(anotherCarPartId('Windscreen'));

    console.log(`
===============================================
Immediately-Invoked Function Expressions
===============================================
`);
    const carPartId2 = (function (id) {
        const theId = `CAR_PART_${id}`.toUpperCase();
        return function (name) {
            return `${theId}_${name.toUpperCase().replace(' ', '_')}`;
        };
    })('x7HsdfGfF');

    console.log(carPartId2('Left Door'));
    console.log(carPartId2('Right Door'));
    console.log(carPartId2('Windscreen'));

    console.log(`
===============================================
Functions and Callbacks
===============================================
`);

    function carPartId3(name, fn) {
        const theId = `CAR_PART_x34df34`;
        return fn(`${theId}_${name}`);
    }

    const carPart3 = carPartId3('Left Door', function (id) {
        return `Car Part ID: ${id}`;
    });

    console.log(carPart3);

    console.log(`
===============================================
Functions and “this” 
===============================================
`);
    const firstCar = { id: 'x8KszK0' };
    const secondCar = { id: 'bc90slqa' };
    const thirdCar = { id: 'h9sNsa' };

    function carPartId4(name, quantity) {
        console.log(`${this.id}_${name}_${quantity}`);
    }

    carPartId4.call(firstCar, 'Left Door', 12);
    carPartId4.apply(secondCar, ['Right Door', 12]);

    const boundThirdCar = carPartId4.bind(thirdCar);
    boundThirdCar('Windscreen', 99);
    boundThirdCar('Exhaust', 9);
}
















