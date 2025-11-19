// Ітерація по двовимірному масиву

function max(arr) {
  return Math.max(...arr.flat());
}

const a = max([
  [14, 20, 332],
  [411, 32, 111],
  [73, 54, 91],
  [513, 1001, 500],
]);
console.log(a);
