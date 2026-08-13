import { todoForm, todoInput, todoListContainer, clearAllButton } from './selectors.js';
import { renderTodo } from './ui.js';
import { todoList } from './models/todoList.js';

const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todoList.todos));
};

export const initEventListeners = () => {
    const initialTodos = JSON.parse(localStorage.getItem('todos')) || [];

    initialTodos.forEach((savedTodo) => {
        const todo = todoList.addTodo(savedTodo.text);
        todo.id = savedTodo.id;
        todo.completed = savedTodo.completed;
        renderTodo(todo);
    });

    todoForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const todoText = todoInput.value.trim();
        if (!todoText) return;

        const newTodo = todoList.addTodo(todoText);
        renderTodo(newTodo);
        saveTodos();

        todoInput.value = '';
    });

    todoListContainer.addEventListener('change', (event) => {
        if (event.target.type === 'checkbox') {
            const liElement = event.target.closest('li');
            const todoId = Number(liElement.dataset.id);

            const targetTodo = todoList.todos.find((todo) => todo.id === todoId);
            if (targetTodo) {
                targetTodo.toggleCompleted();
                liElement.classList.toggle('completed', targetTodo.completed);
                saveTodos();
            }
        }
    });

    todoListContainer.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            const liElement = event.target.closest('li');
            const todoId = Number(liElement.dataset.id);

            todoList.removeTodo(todoId);
            liElement.remove();
            saveTodos();
        }
    });

    clearAllButton.addEventListener('click', () => {
        todoList.clearTodo();
        todoListContainer.replaceChildren();
        saveTodos();
    });
};