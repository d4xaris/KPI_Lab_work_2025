// Higher-order functions (3)

function contract(fn, ...types) {
  return function (...args) {
    if (args.length !== types.length - 1) throw new TypeError();
    for (let i = 0; i < args.length; i++) {
      if (typeof args[i] !== types[i].name.toLowerCase()) throw new TypeError();
    }
    const res = fn(...args);
    if (typeof res !== types[types.length - 1].name.toLowerCase()) throw new TypeError();
    return res;
  };
}

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
console.log(addNumbers(2, 3));

const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
console.log(concatStrings("Hello ", "world!"));
