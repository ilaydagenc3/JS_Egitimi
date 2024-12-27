// yeni element oluşturma
// <a id="clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>

const newLink = document.createElement("a");
const cardBody = document.getElementsByClassName("card-body")[1];

newLink.id = "clear-todos";
newLink.className = "btn btn-danger";
newLink.href = "https://www.google.com.tr";
newLink.target = "_blank";

// text content

// cardbody.textContent = "asdasd"; // sadece texti değiştirir

// text node

// const text = document.createTextNode("Naber");
// cardBody.appendChild(text);
// console.log(cardBody);

newLink.appendChild(document.createTextNode("Farklı Sayfaya Git"));

cardBody.appendChild(newLink);

console.log(newLink);