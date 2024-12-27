let value;

const value1 = 10;
const value2 = 4;

// Aritmetik Operatörler   

// value = value1 + value2;
// value = value1 - value2;
// value = value1 * value2;
// value = value1 / value2;
// value = value1 % value2;

value = Math.PI;
value = Math.E;

value = Math.round(3.6); // 4
value = Math.round(3.5); 
value = Math.round(3.2); // 3


value = Math.ceil(3.2); // 4
value = Math.ceil(3.7); // 4

value = Math.floor(3.2); // 3
value = Math.floor(3.7); // 3

value = Math.sqrt(16); // 4
value = Math.sqrt(31); // 5.5677643628300215

value = Math.abs(-10); // 10

value = Math.pow(8, 3); // 512
value = Math.pow(4, 2); // 16

value = Math.max(10, -1, 100, 32); // 100
value = Math.min(10, -1, 100, 32); // -1

value = Math.random(); // 0 ile 1 arasında rastgele sayı üretir.
value = Math.random() * 20; // 0 ile 20 arasında rastgele sayı üretir. 
value = Math.floor(Math.random() * 20 + 1); // 0 ile 21 arasında rastgele sayı üretir.


console.log(value);