// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Objects
// object = { key : value };

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const shin = { name: 'shin', age: 4 };
print(shin);

// with JavaScript magic (dynamically typed language)
// can add properties later
shin.hasJob = true;
console.log(shin.hasJob);

// can delete properties later
delete shin.hasJob;
console.log(shin.hasJob);

// 2. Computed properties
// key should be always string
console.log(shin.name);
console.log(shin['name']);
shin['hasJob'] = true;
console.log(shin.hasJob);

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(shin, 'name');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('shin', 30);
console.log(person4);

// 4. Constructor function
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in shin);
console.log('age' in shin);
console.log('random' in shin);
console.log(shin.random);

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (key in shin) {
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
// -->
for (value of array) {
  console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'shin', age: '33' };
const user2 = user;
user2.name = 'coder';
console.log(user);

// old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);

// new way
const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
