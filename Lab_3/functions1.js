// Функція (1)

function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
console.log(random(-100, 100));
