
const form = document.querySelector("#todo-form");
const input = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const localTodos = localStorage.getItem("todos");
let todos = [];
const clearBtn = document.querySelector("#clear-btn");

try {
  if (localTodos) {
    const parsedTodos = JSON.parse(localTodos);
    if (Array.isArray(parsedTodos)) {
      todos = parsedTodos;
    }
  }
} catch (error) {
  console.error("Error parsing todos from localStorage:", error);
}

todos.forEach((todo) => {
  createNewTodoInUI(todo);
});


todoList.addEventListener('change', function(event){
  if (event.target.matches('input[type="checkbox"]')){
    const checkbox = event.target;
    const li = checkbox.closest('li');

    if(!li) return;

    const index = Array.from(todoList.children).indexOf(li);
    const p = li.querySelector('p');

    if(index !== -1){
      todos[index].completed = checkbox.checked;
      p.classList.toggle('completed', checkbox.checked);
      saveToLocalStorage();
    }
  }
})


form.addEventListener("submit", (event) => {
  event.preventDefault();
  const rawValue = input.value;
  const nonWhitespaceValue = /.*\S.*/;
  if (!nonWhitespaceValue.test(rawValue)){
    return;
  }
  // Get the input value
  const newTodo = {
    text: rawValue.trim(),
    completed: false
  }

  createNewTodoInUI(newTodo);

  todos.push(newTodo);

  saveToLocalStorage();

  input.value = ""; // Clear the input field after adding the todo item
});

clearBtn.addEventListener('click', function(){

  const completedTodos = todos.filter(todo => todo.completed).length

  if (completedTodos === 0){
    alert('No completed todos to clear.');
    return
  }

  const userConfirmation = confirm(`Are you sure you want to clear ${completedTodos} completed todo(s)?`);

  if (userConfirmation){
    todos = todos.filter(todo => !todo.completed)
    saveToLocalStorage();
    todoList.innerHTML = ''
    todos.forEach(todo => {
      createNewTodoInUI(todo)
    })
  }
})



function createNewTodoInUI(todo) {
  const li = document.createElement("li");
  const p = document.createElement("p");
  const checkbox = document.createElement("input");
  checkbox.type = 'checkbox';
  checkbox.checked = todo.completed
  
  p.textContent = todo.text;
  if (todo.completed){
    p.classList.add('completed');
  }

  li.appendChild(checkbox)
  li.appendChild(p);
  todoList.appendChild(li);
}


function saveToLocalStorage(){
  localStorage.setItem('todos', JSON.stringify(todos));
}
