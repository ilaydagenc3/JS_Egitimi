const cardBody = document.querySelectorAll(".card-body")[1];    

const title = document.querySelector("#tasks-title");

// Click Event
//title.addEventListener("click", run);

//double click
//title.addEventListener("dblclick", run);

//mouse down
//title.addEventListener("mousedown", run);

//mouse up
//title.addEventListener("mouseup", run);

//mouse over
//title.addEventListener("mouseover", run);

//mouse out
//title.addEventListener("mouseout", run);

// cardBody.addEventListener("mouseover", run);
// cardBody.addEventListener("mouseout", run);

//mouse enter ve maouse leave

// cardBody.addEventListener("mouseenter", run);
// cardBody.addEventListener("mouseleave", run);

function run(e){
    console.log(e.type);
}