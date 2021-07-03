export function shallowAndDeepArrayCloning() {
  console.log(`
===============================================
Shallow and Deep Array Cloning
===============================================
`);

  const drinks = [
    ['Lemonade', 99],
    ['Lime', 99],
    ['Peach', 89],
  ];

  // console.log(drinks);

  // const drinksClone = [...drinks];
  // const drinksClone = drinks.slice();
  // const drinksClone = Array.from(drinks);

  const drinksClone = JSON.parse(JSON.stringify(drinks));

  drinksClone[0][1] = 1000;

  console.log(drinksClone);
  console.log(drinks);
}
