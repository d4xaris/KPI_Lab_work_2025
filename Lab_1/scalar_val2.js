// Скалярincні типи та покликання (2)

function inc(num) {
    num.a = num.a + 1;
}
const obj = {a: 5};
inc(obj);
console.dir(obj)