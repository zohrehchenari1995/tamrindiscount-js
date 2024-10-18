

// let todos = [];
let filterValue ="all";

const searchInput = document.querySelector(".search__input");
const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todoList");
const selectFilter = document.querySelector(".filter__todos");

searchInput.addEventListener("submit",addNewTodos);
selectFilter.addEventListener("change",(e)=>{
  filterValue =e.target.value;
  filterTodo();
});
document.addEventListener("DOMContentLoaded",(e)=>{
  let todos = getAllTodos();
  createdTodos(todos);
})


function addNewTodos(e){
  e.preventDefault();
  if(!todoInput.value) return null;
  const newTodo = {
    id: Date.now(),
    createdAt: new Date().toISOString(),
    title :todoInput.value,
    isCompleted :false, 
  }
  // todos.push(newTodo);
  saveTodos(newTodo);
  filterTodo();
};

// created  newtodo
function createdTodos(todos){
  let result ="";
  todos.forEach((todo)=>{
    
    result += `
    <li class="todo">
    <p class="todo__title  ${todo.isCompleted && "completed"}">${todo.title}</p>
    <span class="todo__createAt">${new Date(todo.createdAt).toLocaleDateString("fa-IR")}</span>

    <button  data-todo-id = ${todo.id} class="todo__edit">
    <i class='fas'>&#xf044;</i>
    </button>
    <div class="backdrop  hidden"></div>
    <div class="modal  hidden">
      <div class="modal__content">
        <input type="text" name="text">
        <button class="modal__submitEdit">edit</button>
        <button class="close__modal">x</button>
      </div>
    </div>

    <button data-todo-id = ${todo.id} class="todo__checked">
      <i class="fa-solid fa-square-check"></i>
    </button>
    <button data-todo-id = ${todo.id}  class="todo__trash">
      <i class="fa-solid fa-trash-can"></i>
    </button>
    </li> `;
   
  });
  todoList.innerHTML = result;
  todoInput.value = "";

  // select and addEvent for remove
  const todoTrash =[...document.querySelectorAll(".todo__trash")];
  todoTrash.forEach((btn)=>{
    btn.addEventListener("click",trashTodo);
  })
  // select and addEvent for check 
  const todoChecked = [...document.querySelectorAll(".todo__checked")];
  todoChecked.forEach((btns)=>{
    btns.addEventListener("click",checkTodo);
  })

  //! select and addEvent for edit

  const editButton = [...document.querySelectorAll(".todo__edit")];
  editButton.forEach((btnEdit)=>{
    btnEdit.addEventListener("click",showModal);
  })
  const backdropBac = document.querySelector(".backdrop");
  const modal = document.querySelector(".modal");

  backdropBac.addEventListener("clikc",backDropModal);
  modal.addEventListener("click",modalInput)
};

function filterTodo(){
  let todos = getAllTodos();
  switch (filterValue){
    case "all" :{
      createdTodos(todos);
      break;
    }
    case "completed" :{
      const filteredTodos = todos.filter((t)=>{ return t.isCompleted});
      createdTodos(filteredTodos);
      break;
    }
    case "uncompleted" :{
      const filteredTodos = todos.filter((t)=>{return ! t.isCompleted});
    createdTodos(filteredTodos);
    break;
    }
    default : createdTodos(todos)
  };
}
function trashTodo(e){
  let todos = getAllTodos();
  const todoId = Number(e.target.dataset.todoId);
  todos = todos.filter((t)=>{return  t.id !== todoId;});
  saveAllTodos(todos);
  filterTodo();
}
function checkTodo(e){
  let todos = getAllTodos();
  const todoIdCheck = Number(e.target.dataset.todoId);
  const findTodo = todos.find((t)=>t.id === todoIdCheck);
  findTodo.isCompleted = !findTodo.isCompleted;
  saveAllTodos(todos);
  filterTodo();
  
}
// !function showModal
function showModal(){
  backdropBac.classList.remove("hidden");
  modal.classList.remove("hidden");
}
function backDropModal(){
  backdrop.classList.add("hidden");
  modal.classList.add("hidden");
}
function modalInput(){
  backdrop.classList.add("hidden");
  modal.classList.add("hidden");
}


// localstorage
function getAllTodos(){
  const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
  return savedTodos;
}

function saveTodos(todo){
  const savedTodos = getAllTodos();
  savedTodos.push(todo);
  localStorage.setItem("todos",JSON.stringify(savedTodos));
  return savedTodos;
}

function saveAllTodos (todos){
  localStorage.setItem("todos",JSON.stringify(todos));
}