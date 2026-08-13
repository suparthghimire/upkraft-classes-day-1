const form = document.querySelector("form");
const input = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const clearTodosButton = document.querySelector("#clear-todos");

const localTodos = localStorage.getItem("todos");

// Array of string => Array of objects
// abc, def, => {text: abc, completed: false}, {text: def, completed: true}
let todos = [];

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

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get the input valuezzz
  const inputValue = input.value;

  if (inputValue.trim() === "") {
    alert("Empty todo cannot be added.");
    return;
  }

  const newTodoItem = {
    id: (todos.length + 1).toString(),
    text: inputValue,
    completed: false,
  };

  createNewTodoInUI(newTodoItem);

  todos.push(newTodoItem);

  localStorage.setItem("todos", JSON.stringify(todos));

  input.value = ""; // Clear the input field after adding the todo item
});

clearTodosButton.addEventListener("click", () => {
  todos = [];
  localStorage.removeItem("todos");
  todoList.innerHTML = ""; // Clear the UI
});

// The arg todo, is object and not a string
function createNewTodoInUI(todo) {
  const li = document.createElement("li");
  const p = document.createElement("p");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = todo.completed;

  p.textContent = todo.text;

  li.setAttribute("data-id", todo.id);

  const div = document.createElement("div");

  div.style.display = "flex";
  div.style.alignItems = "center";
  div.style.marginBottom = "10px";
  div.style.listStyleType = "disc";

  updatePUI(todo, p);

  div.appendChild(p);
  div.appendChild(checkbox);
  li.appendChild(div);
  todoList.appendChild(li);
}

// Find all checkboxes and add event listener
// But doing this will create multiple closures
// const checkboxes = document.querySelectorAll("input[type='checkbox']");

// checkboxes.forEach((checkbox, index) => {
//   checkbox.addEventListener("change", () => {
//     todos[index].completed = checkbox.checked;
//     localStorage.setItem("todos", JSON.stringify(todos));
//   });
// });

todoList.addEventListener("change", (event) => {
  const closestCheckbox = event.target.closest("input[type='checkbox']");
  const closestLi = event.target.closest("li");
  const closestP = event.target.closest("p");

  const liDataId = closestLi.getAttribute("data-id");
  console.log("liDataId", liDataId);

  if (!closestCheckbox || !closestLi) {
    return;
  }

  // Mark the todo item as completed or not completed
  const isCompleted = closestCheckbox.checked;

  // Find the index of todo in the todos array
  const todoIndex = todos.findIndex((todo) => todo.id === liDataId);
  console.log("todoIndex", todoIndex);

  if (todoIndex === -1) {
    return;
  }

  const todoItem = todos[todoIndex];
  todoItem.completed = isCompleted;

  console.log("todoItem", todoItem);
  const p = document.querySelector(`li[data-id='${todoItem.id}'] p`);
  updatePUI(todoItem, p);

  localStorage.setItem("todos", JSON.stringify(todos));
});

function updatePUI(todo, p) {
  if (todo.completed) {
    p.style.textDecoration = "line-through";
  } else {
    p.style.textDecoration = "none";
  }
}
