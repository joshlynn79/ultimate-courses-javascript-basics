export function exploringArrayForEach() {
  console.log(`
===============================================
Exploring Array.forEach
===============================================
`);
  const items = [
    { id: '🍔', name: 'Super Burger', price: 399 },
    { id: '🍟', name: 'Jumbo Fries', price: 199 },
    { id: '🥤', name: 'Big Slurp', price: 299 },
  ];

  console.log(items);

  const app = document.querySelector('#app');

  console.log(app);

  items.forEach((item) => {
    app.innerHTML += `
      <li>
        ${item.id} ${item.name} - ${(item.price / 100).toFixed(2)}
      </li>
    `;
  });
}
