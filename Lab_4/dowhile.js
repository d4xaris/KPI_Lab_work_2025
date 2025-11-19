function sum(...args) {
  let total = 0;
  let i = 0;
  do {
    total += args[i];
    i++;
  } while (i < args.length);
  if (args.length === 0) return 0;
  return total;
}

console.log(sum(1, 2, 3));
console.log(sum());
console.log(sum(100, -100));
console.log(sum(1, 6, 1000));
console.log(sum(0));
