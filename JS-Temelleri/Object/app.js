let value;

const programmer = {
    name : "Mustafa Murat Coşkun",
    age : 25 ,
    email : "coskun.m.murat@gmail.com" ,
    langs : ["Python","Java","JavaScript"],

    addess : {
        city : "Ankara",
        street : "Bahçelievler"
    },

    work : function(){
        console.log("Programcı Çalışıyor...");
    }
}

value = programmer;

value = programmer.email;
value = programmer["email"];

value = programmer.langs;

value = programmer.addess.city;

programmer.work();

const programmers = [
    {name : "Mustafa Murat Coşkun",age:25},
    {name : "Oğuz",age:23}
];

value = programmers[0].name;

console.log(value);