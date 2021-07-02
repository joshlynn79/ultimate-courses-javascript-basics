export function booleansInDepth() {
    console.log(`
===============================================
Boolean Literal, Function and Constructor Syn
===============================================
`);

    console.log(true, false);

    console.log(Boolean);
    console.log(Boolean(''));

    const arg = 'X';
    console.log(Boolean(arg));
    console.log(!!arg);
    console.log(Boolean([]));
    console.log(Boolean({}));

    console.log(new Boolean(arg));


    console.log(`
===============================================
Correctly Type-Checking Booleans
===============================================
`);

    console.log(typeof true);
    console.log(typeof false);
    console.log(true instanceof Boolean);
    console.log(new Boolean('') instanceof Boolean);
    console.log(Object.prototype.toString.call(true));




}