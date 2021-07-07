export function exploringArrayEvery() {
  console.log(`
===============================================
Exploring Array.every
===============================================
`);
  const items = [
    { id: '🍔', name: 'Super Burger', price: 399, stock: false },
    { id: '🍟', name: 'Jumbo Fries', price: 199, stock: true },
    { id: '🥤', name: 'Big Slurp', price: 299, stock: false },
  ];

  console.log(items);

  const isInStock = items.every((item) => item.stock);

  console.log(isInStock);

  if (!isInStock) {
    console.log(`
    Sorry, ${items.find((item) => !item.stock).name} is out of Stock
    `);
  }
}
