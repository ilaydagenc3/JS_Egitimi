// setler - kümeler

const mySet = new Set();

mySet.add(100);
mySet.add(100);
mySet.add(3.14);
mySet.add("Mustafa");
mySet.add(true);
mySet.add([1,2,3]);
mySet.add({a:1, b:2});

const mySet2 = new Set([100, 3.14, "Mustafa", true]);

// console.log(mySet);
// console.log(mySet2);

// size
// console.log(mySet.size);

//delete metodu
// mySet.delete("Mustafa");

//has metodu

// console.log(mySet.has("Mustafa"));
// console.log(mySet.has(3.14));
// console.log(mySet.has(200));
// console.log(mySet.has([1,2,3])); // false

// forEach

// mySet.forEach(function(value){
//     console.log(value);
// });

// for...of

// for (let value of mySet){
//     console.log(value);
// }

// Set to Array

const array = Array.from(mySet);
console.log(array);