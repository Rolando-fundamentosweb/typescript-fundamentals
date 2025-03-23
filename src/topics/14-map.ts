/*
  Map -> It is a built-in object that allows you
  to store key-value pairs. It is similar to an object
*/

// 1) Map allows keys of any type
// creating a map
let map = new Map();
const keyObj = { id: 1 };
// Use set method to add key-value pairs
map.set(keyObj, 'Value for object key');
// Use get method to retrieve the value associated with a key
console.log(map.get(keyObj)); // 'Value for object key'

// 2) Mainting insertion order
// It preserves the order in which key-value pairs are inserted
map = new Map();
map.set('b', 2);
map.set('a', 1);
console.log([...map]); //[['b',2], ['a',1]]

// 3) Efficient key-value management
map = new Map();
map.set('key', 'value1');
// Checking for a key
console.log(map.has('key')); // true
// Deleting key-value pair
map.delete('key');
console.log(map.has('key')) // false

// 4) Iteraton Map
// It provides iterators [keys(), values(),entries()], making it easier to loop
// through key-value pairs
map = new Map();
map.set('a', 1);
map.set('b', 2);
// Iterating over a Map
for (const [key, value] of map) {
  console.log(`${key} - ${value}`);
}
/*
  Output:
  a - 1
  b - 2
*/

// Clearing the Map
map.clear();
// Getting the size
console.log(map.size); // 0

