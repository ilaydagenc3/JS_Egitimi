const element = document.querySelector("#clear-todos");

// Element Özellikleri

// console.log(element.id);
// console.log(element.className);
// console.log(element.classList);
// console.log(element.classList[0]);
// console.log(element.textContent);
// console.log(element.innerHTML);
// console.log(element.href);
// console.log(element.style);

// Style ve Element Özelliklerini Değiştirme

// element.className = "btn btn-primary";
// element.style.color = "#000";
// element.style.marginLeft = "10px";
// element.href = "https://www.google.com.tr";
// element.target = "_blank";
// element.textContent = "Silin";
// element.innerHTML = "<span style='color:red'>Silin</span>";


let element2 = document.querySelector("li:last-child");
element2 = document.querySelector("li:nth-child(2)");
element2 = document.querySelector("li:nth-child(3)");
element2 = document.querySelector("li:nth-child(4)");
element2 = document.querySelectorAll("li:nth-child(odd)");
element2 = document.querySelectorAll("li:nth-child(even)");

element2.forEach(function(el){
    el.style.background = "#ccc";
    el.style.color = "red";
});

// const elements = document.querySelectorAll(".list-group-item");//node list döner
// elements.forEach(function(el){
//     el.style.color = "red";
//     el.style.background = "#eee";
// });

console.log(element2);
// console.log(element);