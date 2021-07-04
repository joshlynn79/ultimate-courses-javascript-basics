export function reversingAndSortingArrays() {
  console.log(`
===============================================
Reversing and Sorting Arrays
===============================================
`);

  const drinks = [
    { name: 'Lemonade', price: 79 },
    { name: 'Peach', price: 99 },
    { name: 'Lime', price: 89 },
  ];

  console.log(drinks);

  console.log(drinks.reverse());

  console.log(drinks.sort((a, b) => b.price - a.price));
}
