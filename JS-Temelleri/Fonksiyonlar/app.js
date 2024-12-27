//fonksiyon tanımlama

// function merhaba(name= "Bilgi ypk",age="Bilgi Yok"){ 
//     // if(typeof name === "undefined") name = "Bilgi Yok";

//     // if(typeof age === "undefined") age = "Bilgi Yok";

//     console.log(`İsim: ${name} Yaş: ${age}`);
// }

// merhaba("Murat",25); //fonksiyonu çağırma

// merhaba("Ayşe",30);

// merhaba();

// merhaba("Kadir");


// function square(x){
//     return x*x;
// }
// function cube(x){    
//     return x*x*x;
// }

// let a = cube(square(12));

// function merhaba(){
//     return "Merhaba";
// }

// console.log(merhaba());



// function expression

// const merhaba = function(name){
//     console.log("Merhaba" + name);
// };

// merhaba("Murat");

// Immediately Invoked Function Expression (IIFE)   

// (function(name){
//     console.log("Merhaba: " + name);
// })("Murat");

const database = {
    host: "localhost",
    add: function(){
        console.log("Eklendi");
    },
    get: function(){
        console.log("Elde Edildi");
    },
    update: function(id){
        console.log(`Id: ${id} Güncellendi`);
    },
    delete: function(id){
        console.log(`Id: ${id} Silindi`);
    }
}

console.log(database.host);

database.add();


database.delete(10);

