const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

let todos = [];
const TODOS_KEY = "todos";

function todoSubmit(event){
    event.preventDefault();
    const newTodoObj = {
        text: todoInput.value,
        id: Date.now(),
    }
    todos.push(newTodoObj);
    saveTodos();
    paintTodo(newTodoObj);
    todoInput.value = "";
}

function paintTodo(todoObj){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    li.id = todoObj.id;
    span.innerText = todoObj.text;
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);

    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function deleteTodo(event){
    const li = event.target.parentElement;
    todos = todos.filter(todo => todo.id !== parseInt(li.id))
    saveTodos();
    li.remove();
}

function saveTodos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

///////////////////////////////////////////////////////////

todoForm.addEventListener("submit", todoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos !== null){
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}