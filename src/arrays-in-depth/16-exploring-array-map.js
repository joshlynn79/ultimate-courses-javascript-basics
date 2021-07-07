export function exploringArrayMap() {
  console.log(`
===============================================
Exploring Array.map
===============================================
`);

  const items = [
    { id: '🍔', name: 'Super Burger', price: 399 },
    { id: '🍟', name: 'Jumbo Fries', price: 199 },
    { id: '🥤', name: 'Big Slurp', price: 299 },
  ];

  console.log(items);

  const halfOffFries = items.map((item) => {
    if (item.id === '🍟') {
      return {
        ...item,
        price: parseFloat((item.price / 2).toFixed(2)),
      };
    }
    return item;
  });

  console.log(halfOffFries);
}
