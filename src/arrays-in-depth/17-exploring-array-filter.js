export function exploringArrayFilter() {
  console.log(`
===============================================
Exploring Array.filter
===============================================
`);
  const items = [
    { id: '🍔', name: 'Super Burger', price: 399 },
    { id: '🍟', name: 'Jumbo Fries', price: 199 },
    { id: '🥤', name: 'Big Slurp', price: 299 },
  ];

  console.log(items);

  const expensiveItems = items.filter((item) => item.price > 199);

  console.log(expensiveItems);

  console.log(
    `Expensive Items: ${expensiveItems.map((item) => item.name).join(', ')}`
  );
}
