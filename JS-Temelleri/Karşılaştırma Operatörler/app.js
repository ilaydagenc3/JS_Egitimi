//karşılaştırma operatörleri

// == (eşit mi) operatörü
// === (üçlü eşitlik) operatörü
// != (eşit değil mi) operatörü 
// !== (üçlü eşit değil mi) operatörü
// > (büyüktür) operatörü
// < (küçüktür) operatörü
// >= (büyük eşittir) operatörü
// <= (küçük eşittir) operatörü

// console.log(2 == 2); // true
// console.log("js" == "java"); // false

// console.log(2 == "2"); // true
// console.log(2 === "2"); // false

// console.log(4 > 2); // true
// console.log(2 > 4); // false

// console.log(2 != 2); // false

// console.log(2 < 4); // true
// console.log(4 < 2); // false

// console.log(2 >= 2); // true

// console.log(2 <= 4); // true

//mantıksal bağlaçlar

//not operatörü

// console.log(!(2 != 2)); // true

// //and operatörü

// console.log((4 == 2) && ("Ahmet" == "Ahmet")); // false

// //or operatörü

// console.log((4 == 2) || ("Ahmet" == "Ahmet")); // true

// const error = false;

// if (error == true) {
//     console.log("Hata oluştu");
// }
// else {
//     console.log("Hata oluşmadı");
// }

// const user = "mmc";

// if (user === "mmc") {
//     console.log("Kullanıcı bulundu");
// }
// else {
//     console.log("Kullanıcı bulunamadı");
// }

// const process = "4";

// if (process === "1") {
//     console.log("İşlem 1");
// }
// else if (process === "2") {
//     console.log("İşlem 2");
// }
// else if (process === "3") {
//     console.log("İşlem 3");
// }
// else if (process === "4") {
//     console.log("İşlem 4");
// }
// else {
//     console.log("Geçersiz işlem"); // işlem 1,2,3,4 dışında bir işlem girilirse
// }

const number = 100;

// if (number === 100) {
//     console.log("Sayı 100'e eşit");
// }
// else {
//     console.log("Sayı 100'e eşit değil");
// }

//Ternary Operatörü 

// console.log(number === 100 ? "Sayı 100'e eşit" : "Sayı 100'e eşit değil");

if (number === 100) console.log("Sayı 100'e eşit");
else console.log("Sayı 100'e eşit değil");
