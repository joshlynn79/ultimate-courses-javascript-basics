export function propertiesIndexesAndElements() {
  console.log(`
===============================================
Properties, Indexes and Elements
===============================================
`);

  const drinks = ['Lemonade', 'Lime', 'Peach'];

  console.log(drinks);

  console.log(drinks[0]);
  console.log(drinks[drinks.length - 1]);

  drinks[0] = 'Diet Lemonade';
  drinks['favorite'] = 'Cola';

  console.log(drinks);

  drinks.splice(0, drinks.length);
  // drinks.length = 0;

  console.log(drinks);
}
