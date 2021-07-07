export function exploringArrayFind() {
  console.log(`
===============================================
Exploring Array.find
===============================================
`);
  const items = [
    { id: '🍔', name: 'Super Burger', price: 399 },
    { id: '🍟', name: 'Jumbo Fries', price: 199 },
    { id: '🥤', name: 'Big Slurp', price: 299 },
  ];

  const found = items.find((item) => item.id === '🍟');

  if (found) {
    console.log(`${found.name} ${(found.price / 100).toFixed(2)}`);
  }
}
