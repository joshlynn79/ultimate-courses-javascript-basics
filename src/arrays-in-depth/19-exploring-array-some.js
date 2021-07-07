export function exploringArraySome() {
  console.log(`
===============================================
Exploring Array.some
===============================================
`);

  const items = [
    { id: '🍔', name: 'Super Burger', price: 399, promo: false },
    { id: '🍟', name: 'Jumbo Fries', price: 199, promo: false },
    { id: '🥤', name: 'Big Slurp', price: 299, promo: true },
  ];

  console.log(items);

  const greaterThanOne = [1, 2, 3].some((x) => x > 1);

  console.log(greaterThanOne);

  const isInPromo = items.some((item) => item.promo);

  console.log(isInPromo);

  const total = isInPromo
    ? 600
    : items.reduce(
        (previousValue, currentValue) => previousValue + currentValue.price,
        0
      );

  console.log(`Total: ${(total / 100).toFixed(2)}`);
}
