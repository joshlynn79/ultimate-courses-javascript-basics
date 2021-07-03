export function destructuringArrays() {
  console.log(`
===============================================
Destructuring Arrays
===============================================
`);

  const drinks = [
    ['Lemonade', 99],
    ['Lime', 99],
    ['Peach', 89],
  ];

  console.log(drinks);

  const [one, [, b], ...rest] = drinks;

  console.log(one, b);
  console.log(rest);
}
