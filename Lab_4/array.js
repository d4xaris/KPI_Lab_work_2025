// Array.prototype.reduce()

function sum(...args) {
  const total = args.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return total;
}


console.log(sum(1, 2, 3));
console.log(sum());
console.log(sum(100, -100));
console.log(sum(1, 6, 1000));
console.log(sum(0));
