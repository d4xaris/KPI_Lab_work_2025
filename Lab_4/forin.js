function sum(...args) {
  let total = 0;
  for (const i in args);
  {
    total += args[i];
  }
  return total;
}
