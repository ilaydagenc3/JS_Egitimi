let value;

const numbers = [43,56,33,23,44,36,5];

// const numbers2 = new Array(1,2,3,4,5,6,7);

const langs = ["Python","Java","C++","Javascript"];

const a = ["Merhaba",22,null,undefined,3.14];

value = numbers.length;
//indeks
value = numbers[0];
value = numbers[2];
value = numbers[numbers.length-1];

// Herhangi bir elemanı değiştirme

numbers[2] = 1000;
value = numbers;

// Index of
value = numbers.indexOf(1000);

// Arrayin sonuna eleman ekleme - push
numbers.push(2000);

//başına eleman ekleme

numbers.unshift(3000);
value = numbers;

// sonundan değer atma

numbers.pop();
value = numbers;

//başından değer atma

numbers.shift();
value = numbers;

//belirli bir indexe değer ekleme

numbers.splice(0,3);
value = numbers;

//reverse 
numbers.reverse();
value = numbers;

value = numbers.sort();


value = numbers.sort(function(x,y){ //küççükten büyüğe sıralama
    return x-y;
});

value = numbers.sort(function(x,y){  //büyükten küçüğe sıralama
    return y-x; 
});


console.log(value); 