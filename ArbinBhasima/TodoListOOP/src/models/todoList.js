 import todo from "./todo.js"; // Ensures relative resolution inside src/models/

class todoList {
    #storageKey = "todos";
    constructor() {
        this.todos = this.#loadTodosFromStorage();
    }

    addTodo(text) {
        const maxId = this.todos.reduce((max, item) => (item.id > max ? item.id : max), 0);
        const nextId = maxId + 1;
        
        const newTodo = new todo(nextId, text.trim(), false);
        this.todos.push(newTodo);
        this.#saveTodosToStorage();
        return newTodo;
    }

    toggleTodo(id) {
        const targetId = Number(id);
        const item = this.todos.find((t) => t.id === targetId);
        if (item) {
            item.completed = !item.completed;
            this.#saveTodosToStorage();
        }
        return item;
    }

    getCompletedCount() {
        return this.todos.filter((t) => t.completed).length;
    }

    clearCompleted() {
        this.todos = this.todos.filter((t) => !t.completed);
        this.#saveTodosToStorage();
        return this.todos;
    }

    #saveTodosToStorage() {
        localStorage.setItem(this.#storageKey, JSON.stringify(this.todos));
    }

    #loadTodosFromStorage() {
        try {
            const data = localStorage.getItem(this.#storageKey);
            if (!data) return [];
            const parsed = JSON.parse(data);
            return parsed.map((item) => new todo(item.id, item.text, item.completed));
        } catch (error) {
            console.error("Error reading localStorage", error);
            return [];
        }
    }
}

export default todoList;