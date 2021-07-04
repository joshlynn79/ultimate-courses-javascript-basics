export function mergingArrays() {
  console.log(`
===============================================
Merging Arrays
===============================================
`);
  const drinks = [
    ['Lemonade', 99],
    ['Lime', 99],
  ];
  const newDrinks = ['Peach', 89];

  console.log(drinks);
  console.log(newDrinks);

  // const merged = drinks.concat(newDrinks); // Immutable

  const merged = [newDrinks, ...drinks];
  console.log(merged);

  // merged[0] = ['test', 9999];
  //
  // console.log(drinks);
  // console.log(merged);
}
