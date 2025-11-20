// Композиція функцій справа наліво

function compose(...fns) {
  const errors = [];

  const fn = x => {
    let result = x;

    for (let i = fns.length - 1; i >= 0; i--) {
      try {
        result = fns[i](result);
      } catch (e) {
        errors.forEach(h => h(e));
        return undefined;
      }
    }

    return result;
  };

  fn.on = (event, handler) => {
    if (event === 'error') errors.push(handler);
    return fn;
  };

  return fn;
}

// Приклад 1
const inc = x => x + 1;
const twice = x => x * 2;
const cube = x => x ** 3;
const f = compose(inc, twice, cube);
console.log(f(2)); 

//Приклад 2 (з помилкою)
const boom = () => { throw new Error() };
const f2 = compose(inc, boom, cube);
f2.on('error', e => console.log("Помилка:", e.message));
console.log(f2(3));