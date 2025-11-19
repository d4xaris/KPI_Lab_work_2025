// Closures & chaining

function seq(...args) {
  const fns = [...args];

  function chain(arg) {
    if (typeof arg === "number") {
      return fns.reduceRight((u, f) => f(u), arg);
    }
    fns.push(arg);
    return chain;
  }

  return chain;
}

console.log(seq((x) => x + 7)((x) => x * 2)(5));

console.log(seq((x) => x * 2)((x) => x + 7)(5));

console.log(seq((x) => x + 1)((x) => x * 2)((x) => x / 3)((x) => x - 4)(7));
