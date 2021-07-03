export function removingArrayElements() {
  console.log(`
===============================================
Removing Array Elements
===============================================
`);

  const drinks = ['Lemonade', 'Lime', 'Peach'];

  console.log(drinks);

  // beginning
  // const removed = drinks.shift(); // Mutable
  // console.log(removed, drinks);

  // end
  //   const removed = drinks.pop(); // Mutable
  //   console.log(removed);

  // slice = anywhere
  const index = 1;
  const beginningDrinks = [
    ...drinks.slice(0, index),
    ...drinks.slice(index + 1),
  ];
  console.log(beginningDrinks);
  console.log(drinks);
}
