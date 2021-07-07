export function iterationWithBreakAndContinue() {
  console.log(`
===============================================
Iteration with Break and Continue
===============================================
`);
  const drinks = ['Pepsi', 'Lemonade', 'Cola'];

  console.log(drinks);

  let count = 0;

  for (let i = 0; i < drinks.length; i++) {
    const drink = drinks[i];
    if (drink === 'Lemonade') {
      console.log('Pour me a glass');
      // break;
      continue;
    }
    count++;
  }

  console.log(count);
}
