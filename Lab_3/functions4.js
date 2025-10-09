// Інтроспекція об'єкта

function introspect(obj) {
  const result = [];

  for (let key in obj) {
    if (typeof obj[key] === "function") {
      result.push([key, obj[key].length]);
    }
  }

  return result;
}

const obj = {
  m1: (x) => [x],
  m2: function (x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  },
};

console.log(introspect(obj));
