export function arrayLiteralFunctionAndConstructorSyntax() {
  console.log(`
===============================================
Array Literal, Function and Constructor Syntax
===============================================
`);

  const drinks = ['Lemonade', 'Lime', 'Peach'];

  // Creates Reference
  const drinksReference = drinks;
  console.log(drinks);
  console.log(drinksReference);

  console.log(drinks === drinksReference);

  drinksReference[0] = 'Changed';

  console.log(drinks);
  console.log(drinksReference);

  // No reason to ever use this
  console.log(new Array('Lemonade', 'Lime', 'Peach'));

  console.log(['Lemonade', 'Lime', 'Peach']);
  console.log(Array('Lemonade', 'Lime', 'Peach'));
}
