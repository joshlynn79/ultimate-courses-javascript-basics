export function iterationWithForOf() {
  console.log(`
===============================================
Iteration with For...of
===============================================
`);
  const drinks = ['Pepsi', 'Lemonade', 'Cola'];

  for (let i = 0; i < drinks.length; i++) {
    console.log(drinks[i]);
  }

  for (const drink of drinks) {
    console.log(drink);
  }

  console.log([1, 2, 3]);
}
