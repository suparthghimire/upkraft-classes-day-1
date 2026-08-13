class todoController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.view.bindAddTodo(this.handleAddTodo.bind(this));
        this.view.bindToggleTodo(this.handleToggleTodo.bind(this));
        this.view.bindClearCompleted(this.handleClearCompleted.bind(this));
        this.view.renderTodoList(this.model.todos);
    }

    handleAddTodo(text) {
        const newTodo = this.model.addTodo(text);
        this.view.renderTodoItem(newTodo);
        this.view.clearInput();
    }

    handleToggleTodo(id) {
        const updatedTodo = this.model.toggleTodo(id);
        if (updatedTodo) {
            this.view.toggleTodoItem(updatedTodo.id, updatedTodo.completed);
        }
    }

    handleClearCompleted() {
        const count = this.model.getCompletedCount();
        if (count === 0) {
            this.view.showAlert("No completed todos to clear.");
            return;
        }

        if (this.view.confirmAction(`Are you sure you want to clear ${count} completed todo(s)?`)) {
            const remaining = this.model.clearCompleted();
            this.view.renderTodoList(remaining);
        }
    }
}

export default todoController;