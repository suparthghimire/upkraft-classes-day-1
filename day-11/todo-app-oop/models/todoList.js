import { Todos } from './todos.js';

class TodoList {
    constructor() {
        this.todos = [];
    }

    addTodo(text) {
        const todo = new Todos(text);
        this.todos.push(todo);
        return todo;
    }

    removeTodo(id) {
        this.todos = this.todos.filter((todo) => todo.id !== id);
    }

    clearTodo() {
        this.todos = [];
    }
}

export const todoList = new TodoList();