// dinamik element silme

const todoList = document.querySelector("ul.list-group");
const todos = document.querySelectorAll("li.list-group-item");


// Remove Method

// todos[1].remove();

// Remove Child Method

// todoList.removeChild(todoList.lastElementChild);
todoList.removeChild(todos[2]);

console.log(todos);
console.log(todoList);