const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const clearAllButton = document.getElementById('clear-all');

clearAllButton.addEventListener('click', () => {
    todos = [];
    localStorage.removeItem('todos');
    todoList.textContent = '';
});

const createTodosUi = (todoItem) => {
    if (typeof todoItem === 'string') {
        todoItem = { text: todoItem, completed: false };
    }

    const newTodo = document.createElement('li');
    const newText = document.createElement('p');

    newText.textContent = todoItem.text;

    if (todoItem.completed) {
        newTodo.classList.add('completed');
    }

    newText.addEventListener('click', () => {
        todoItem.completed = !todoItem.completed;
        newTodo.classList.toggle('completed');
        localStorage.setItem('todos', JSON.stringify(todos));
    });

    newTodo.appendChild(newText);
    todoList.appendChild(newTodo);
};

let todos = [];
const localTodos = localStorage.getItem("todos");

try {
    todos = JSON.parse(localTodos) || [];
    todos.forEach((todo) => {
        createTodosUi(todo);
    });
} catch (error) {
    console.error("Error parsing todos from localStorage:", error);
}

todoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const todoText = todoInput.value.trim();

    if (todoText) {
        const todoItem = { text: todoText, completed: false };
        createTodosUi(todoItem);
        todos.push(todoItem);
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    todoInput.value = "";
});



const themeToggleButton = document.getElementById('theme-toggle');

const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    themeToggleButton.textContent = '☀️ Light Mode';
}


themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    const isDarkMode = document.body.classList.contains('dark');

    if (isDarkMode) {
        themeToggleButton.textContent = '☀️ Light Mode';
        localStorage.setItem('theme', 'dark');
    }
    else {
        themeToggleButton.textContent = '🌙 Dark Mode';
        localStorage.setItem('theme', 'light');
    }   
});

    