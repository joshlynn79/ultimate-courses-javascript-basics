export function findingArrayElements() {
  console.log(`
===============================================
Finding Array Elements
===============================================
`);
  const drinks = ['Lemonade', 'Lime', 'Peach'];

  console.log(drinks);

  const index = drinks.indexOf('Peach');

  console.log(index);

  if (index !== -1) {
    console.log(drinks[index]);
  }

  const included = drinks.includes('Peach');
  console.log(included);

  const drinksWithId = [
    { id: 1, name: 'Lemonade' },
    { id: 2, name: 'Lime' },
    { id: 3, name: 'Peach' },
  ];

  console.log(drinksWithId);

  const idIndex = drinksWithId.findIndex((value) => value.name === 'Peach');
  console.log(idIndex);
  console.log(drinksWithId[idIndex]);

  const foundItem = drinksWithId.find((value) => value.name === 'Peach');
  console.log(foundItem);
}
