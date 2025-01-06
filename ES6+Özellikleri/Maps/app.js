// mapler - key - value

// let myMap = new Map(); //olluşturma

// // console.log(typeof myMap);

// const key1 = "Mustafa";
// const key2 = {a:10,b:20};
// const key3 = () => 2;
// //set
// myMap.set(key1,"string değer");
// myMap.set(key2,"object literal değer");
// myMap.set(key3,"function değer");

//get

// console.log(myMap.get(key1));
// console.log(myMap.get(key2));
// console.log(myMap.get(key3));

//console.log(myMap);

//map boyutu

//console.log(myMap.size);

// const cities = new Map();

// cities.set("Ankara",5);
// cities.set("İstanbul",15);
// cities.set("İzmir",4);

// for each

// cities.forEach(function(value,key){
//     console.log(key,value);
// })

//for of

// for(let [key,value] of cities){
//     console.log(key,value);
// }

// map keys

// for(let key of cities.keys()){
//     console.log(key);
// }

// map values

// for(let value of cities.values()){
//     console.log(value);
// }

// arraylerden map oluşturma
// const array = [["key1","value1"],["key2","value2"]];

// const lastMap = new Map(array);

// console.log(lastMap);

//maplerden array oluşturma

const cities = new Map();

cities.set("Ankara",5);
cities.set("İstanbul",15);
cities.set("İzmir",4);

const array = Array.from(cities);
// [["Ankara",5],["İstanbul",15],["İzmir",4]]
console.log(array);
