export function exploringArrayReduce() {
  console.log(`
===============================================
Exploring Array.reduce
===============================================
`);
  const items = [
    { id: '🍔', name: 'Super Burger', price: 399 },
    { id: '🍟', name: 'Jumbo Fries', price: 199 },
    { id: '🥤', name: 'Big Slurp', price: 299 },
  ];

  console.log(items);

  const initialValue = 0;

  const reducedValue = [1, 2, 3, 4, 5].reduce(
    (accumulator, currentValue, index, array) => {
      console.log(accumulator, currentValue, index, array);
      return accumulator + currentValue;
    },
    initialValue
  );

  console.log(reducedValue);

  const total = items.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    initialValue
  );

  console.log(total);
}
