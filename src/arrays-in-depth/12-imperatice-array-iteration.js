export function imperativeArrayIteration() {
  console.log(`
===============================================
Imperative Array Iteration
===============================================
`);

  const drinks = ['Pepsi', 'Lemonade', 'Cola'];

  console.log(drinks);

  for (let i = 0; i < drinks.length; i++) {
    const drink = drinks[i];
    console.log(drink);
    if (drink === 'Pepsi') {
      console.log('Let me pour you a glass');
    }
  }
}
