// Closures & chaining (2)

function array() {
  const arr = [];

  function fn(i) {
    return arr[i];
  }

  fn.push = (value) => arr.push(value);
  fn.pop = () => arr.pop();

  return fn;
}

const arr = array();

arr.push("first");
arr.push("second");
arr.push("third");

console.log(arr(0)); // first
console.log(arr(1)); // second
console.log(arr(2)); // third

console.log(arr.pop()); // third
console.log(arr.pop()); // second
console.log(arr.pop()); // first

console.log(arr.pop()); // undefined
