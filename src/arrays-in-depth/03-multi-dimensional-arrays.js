export function multiDimensionalArrays() {
  console.log(`
===============================================
Multi-dimensional Arrays
===============================================
`);

  const drinks = [
    ['Lemonade', 99],
    ['Lime', 99],
    ['Peach', 89],
  ];

  console.log(drinks);

  console.log(`Drink: ${drinks[0][0]}, Price: ${drinks[0][1]}`);
}
