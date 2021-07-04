export function correctlyTypeCheckingArrays() {
  console.log(`
===============================================
Correctly Type-Checking Arrays
===============================================
`);

  console.log([]);
  console.log(typeof []);
  console.log([] instanceof Array);
  console.log(new Array() instanceof Array);
  console.log(Array.isArray([1, 2, 3, 4]));
  console.log(Array.isArray('test'));
  console.log(Object.prototype.toString.call([]));
}
