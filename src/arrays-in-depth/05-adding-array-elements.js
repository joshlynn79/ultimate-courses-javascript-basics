export function addingArrayElements() {
  console.log(`
===============================================
Adding Array Elements
===============================================
`);

  const drinks = ['Lemonade', 'Lime', 'Peach'];

  console.log(drinks);

  //beginning
  // drinks.unshift('Water'); // mutable
  const newDrinksArray = ['Water', ...drinks]; // immutable
  console.log(newDrinksArray);

  console.log(drinks);

  // middle
  const index = 1;
  // drinks.splice(index, 0, 'Cola'); // mutable
  const middleNewArray = [
    ...drinks.splice(0, index),
    'Mojito',
    ...drinks.splice(index - 1),
  ];

  console.log(middleNewArray);

  // console.log(drinks);

  // end
  // drinks.push('Cola'); // mutable
  const anotherDrinksArray = [...drinks, 'Cola']; // immutable

  console.log(anotherDrinksArray);
}
