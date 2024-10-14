// !متد show چک شود
// const showModal = document.querySelector(".show-modal");
// const backdrop = document.querySelector(".backdrop");
// const modal = document.querySelector(".modal");
// const closeModal = document.querySelector(".close-modal")


// function show(){
//   backdrop.classList.remove("hidden");
//   modal.classList.remove("hidden");
// }
// function closebuttonModal(){
//   backdrop.classList.add("hidden");
//   modal.classList.add("hidden");
// }
// backdrop.addEventListener("click",show);
// modal.addEventListener("click",show);
// backdrop.addEventListener("click",closebuttonModal);
// modal.addEventListener("click",closebuttonModal);


// form => submit (event) =>+,enter,form
// crete new todo {id,title,createdAt,,iscompleted(false)}
// save to array => const newTodo = []


const todos = [];
const searchInput = document.querySelector(".search__input");
const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todoList");
const selectFilter = document.querySelector(".filter__todos");

searchInput.addEventListener("submit",addNewTodos);
selectFilter.addEventListener("change",filterTodo);

function addNewTodos(e){
  e.preventDefault();
  if(!todoInput.value) return null;
  const newTodo = {
    id: Date.now(),
    createdAt: new Date().toISOString(),
    title :todoInput.value,
    isCompleted :false, 
  }
  todos.push(newTodo);
  createdTodos(todos)
};

// created  newtodo
function createdTodos(todos){
  let result ="";
  todos.forEach((todo)=>{
   
     result += `
    <li class="todo">
    <p class="todo__title">${todo.title}</p>
    <span class="todo__createAt">${new Date(todo.createdAt).toLocaleDateString("fa-IR")}</span>
    <button data-todo-id = ${todo.id}>
    <i class="todo__checked  fa-solid fa-square-check"></i>
    </button>
    <button data-todo-id = ${todo.id}>
    <i class="todo__trash     fa-solid fa-trash-can"></i>
    </button>
    </li> `;
    todoList.innerHTML = result;
    todoInput.value = "";
  });
};


function filterTodo(e){
  const filter = e.target.value;
  switch (filter){
    case "all" :{
      createdTodos(todos);
      break;
    }
    case "completed" :{
      const filteredTodos = todos.filter((t)=>t.isCompleted);
      createdTodos(filteredTodos);
      break;
    }
    case "uncompleted" :{
      const filteredTodos = todos.filter((t)=> !t.isCompleted);
    createdTodos(filteredTodos);
    break;
    }
    default : createdTodos(todos)
  };
}



