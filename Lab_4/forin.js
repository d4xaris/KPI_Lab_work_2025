// for in 

  function sum(...args){
  let total = 0
  for (const i in args){
    total += args[i];
  }
  return total;
}

console.log(sum(1, 2, 3));
console.log(sum());
console.log(sum(100, -100));
console.log(sum(1, 6, 1000));
console.log(sum(0));
