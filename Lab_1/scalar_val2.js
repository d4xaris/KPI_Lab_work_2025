// Скалярні типи та покликання (2)

function inc(num) {
    num.val = num.val + 1;
}
const obj = {a: 5};
inc(obj);
console.dir(obj)