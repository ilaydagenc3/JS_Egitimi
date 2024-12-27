// elementi id ye göre seçme

let element;

element = document.getElementById("todo-form");
element = document.getElementById("tasks-title");

//element class a göre seçme

element = document.getElementsByClassName("list-group-item");
element = document.getElementsByClassName("card-header");

// element tag e göre seçme

element = document.getElementsByTagName("div");

// querySelector - css selector - tek bir element döner

element = document.querySelector("#todo-form");
element = document.querySelector("#tasks-title");

element = document.querySelector(".list-group-item");

element = document.querySelector("li");
element = document.querySelector("div");


// querySelectorAll - tüm elementleri döner

element = document.querySelectorAll(".list-group-item");

element.forEach(function(el){
    console.log(el);
});

// console.log(element);

