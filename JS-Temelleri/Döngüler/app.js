// while döngüleri

// let i = 0;

// while (i < 10) {
//     console.log(i);
//     i++;
// }

// let i = 10;

// while (i > 0) {
//     console.log(i);
//     i--;
// }

//break ve continue

// let i = 0;

// while (i < 10) {
//     console.log(i);
//     if (i == 5) {
//         break;
//     }
//     i++;
// }

// whilw (i < 10) {
//     if (i == 3 || i == 5) {
//         i++;
//         continue;
//     }
//     console.log(i);
//     i++;
// }

// do while döngüsü

// let i = 0;

// do {
//     console.log(i);
//     i++;
// } while (i < 10);

const langs = ["Python", "Java", "C++"];

// let index = 0;

// while (index < langs.length) {
//     console.log(langs[index]);
//     index++;
// }

// for (let index = 0; index < langs.length; index++) {
//     console.log(langs[index]);
// }

// langs.forEach(function (lang, index) {
//     console.log(lang, index);
// });

// const users = [ 
//     { name: "Mustafa", age: 25 }, 
//     { name: "Zeynep", age: 40 }, 
//     { name: "Ali", age: 12 } 
// ];

// const names = users.map(function (user) {
//     return user.name;
// });

// const ages = users.map(function (user) {    
//     return user.age;
// });

// console.log(names);
// console.log(ages);

const user = {
    name: "Mustafa",
    age: 25
};

for (let key in user) {
    console.log(key, user[key]);
}
