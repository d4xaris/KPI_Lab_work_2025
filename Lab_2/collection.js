// Колекції

const people = [ 
 {name: 'Katy', phone: '+380988003645'},
 {name: 'Sofia', phone: '+380696999696'},
 {name: 'Baka', phone: '+380123456789'},
 {name: 'Obama', phone: '+14156729384'},
 {name: 'Mom', phone: '+491607245138'}
]

function findPhoneByName(name) {
 for (const person of people) {
    if (person.name === name) {
      return person.phone; 
    }
  }
  return 'Контакт не знайдено';
}
console.log(findPhoneByName('Katy'));
console.log(findPhoneByName('Obama'));
console.log(findPhoneByName('Doctor House'));