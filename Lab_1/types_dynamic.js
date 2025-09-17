// Типи даних (динамічні ключі в циклі)

const array = [true, "mamamia", 5, ":3", 228, false, -1007, -20, "baka"]; 
const hash = {};

for (const element of array) {
    const type = typeof element;
    const count = hash[type] || 0;
    hash[type] = count + 1; 
}
console.dir(hash);
