// Функція (2) з ключами

function generateKey(length, characters) {
  let key = "";
  for (let i = 0; i < length; i++) {
    const randomKey = Math.floor(Math.random() * characters.length);
    key += characters[randomKey];
  }
  return key;
}

const characters =
  "абвгґдеєжзииіїйклмнопрстуфхцчшщьюяabcdefghijklmnopqrstuvwxyz0123456789";
const key = generateKey(30, characters);
console.log(key);
