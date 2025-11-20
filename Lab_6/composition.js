// Функція pipe

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const pipe = (...fns) => {
  if (!fns.every(fn => typeof fn === 'function')) {
    throw new Error("All arguments to pipe must be functions");
  }
  return x => fns.reduce((v, fn) => fn(v), x);
};

const f1 = pipe(inc, twice, cube);
console.log(f1(5)); 

const f2 = pipe(inc, inc);
console.log(f2(7)); 