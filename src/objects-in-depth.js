export function objectsInDepth() {
    console.log(`
===============================================
Object Literal, Function and Constructor Syntax
===============================================
`);
    const drink = {
        id: 'xhs8Pla',
        name: 'Lemonade',
        price: {
            sale: 99,
            full: 129,
        },
    };

    console.log(drink);

    const drinkReference = drink;

    drinkReference.name = 'Peach';

    console.log(drink);

    console.log(drink === drinkReference);
    console.log({} === {});

    console.log({} instanceof Object);
    console.log(new Object() instanceof Object);
    console.log(Object() instanceof Object);

    console.log(`
===============================================
Properties, Methods and Values
===============================================
`);
    const drink1 = {
        id: 'xhs8Pla',
        name: 'Lemonade',
        price: 99,
        getDrinkDetails() {
            return `Drink ${this.name} (${this.price})`;
        },
        'abc 123': 'I am the value!',
        100: 'I am a number!'
    };

    console.log(drink1);
    console.log(drink1.getDrinkDetails());

    const myId = 'id';

    console.log(drink1[myId]);
    console.log(drink1['name']);
    console.log(drink1.name);
    console.log(drink1.price);
    console.log(drink1['abc 123']);
    console.log(drink1[100]);
}