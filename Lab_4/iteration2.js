// Ітерування об'єктів-довідників

function age(p) {
  const result = {};

  for (const person in p) {
    const born = p[person].born;
    const died = p[person].died;
    result[person] = died - born;
  }
  return result;
}

const people = {
  Shakespeare: { born: 1564, died: 1616 },
  Princess_Diana: { born: 1961, died: 1997 },
  Elvis_Presley: { born: 1935, died: 1977 },
  Michael_Jackson: { born: 1958, died: 2009 },
};

console.log(age(people));
