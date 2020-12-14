const todoinput = document.querySelector(".todo-input")
const todobutton = document.querySelector(".todo-button")
const todoList = document.querySelector(".todo-list")



todobutton.addEventListener("click", addtolist);
todoList.addEventListener("click", deletecheck);


function addtolist(event) {
    event.preventDefault();




const tododiv = document.createElement('div');
tododiv.classList.add("todo");

const newtodo = document.createElement("li");
    newtodo.innerText = todoinput.value;
    newtodo.classList.add("todo-item")
tododiv.appendChild(newtodo);

const completedbutton = document.createElement("button");
completedbutton.innerText = 'complete'
completedbutton.classList.add("complete-button");
tododiv.appendChild(completedbutton);

const deletebutton = document.createElement("button");
deletebutton.innerText = 'x'
deletebutton.classList.add("delete-button");
tododiv.appendChild(deletebutton);


todoList.appendChild(tododiv);

todoinput.value = "";


};


function deletecheck(event) {
    const item = event.target;
    if (item.classList[0] === "delete-button"){
        const todo = item.parentElement;
        todo.remove();
    }


    if(item.classList[0] === "complete-button"){
        const todo = item.parentElement;
        todo.classList.toggle("completed")
    }
    

}

