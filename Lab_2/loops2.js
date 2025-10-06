// Цикл для непарних чисел

const oddRange = (start, end) => {
  const result = [];
  let i = start % 2 === 0 ? start + 1 : start;
  for (; i <= end; i += 2) {
    result.push(i);
  }
  return result;
};
console.log(oddRange(15, 30));

/* let i;
if (start % 2 === 0) {
  i = start + 1; 
} else {
  i = start; 
} 
*/
