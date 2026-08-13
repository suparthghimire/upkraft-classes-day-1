class todoView {
    constructor() {
        this.form = document.querySelector("#todo-form");
        this.input = document.querySelector("#todo-input");
        this.todoList = document.querySelector("#todo-list");
        this.clearBtn = document.querySelector("#clear-btn");
    }

    renderTodoList(todos) {
        this.todoList.innerHTML = "";
        todos.forEach((item) => this.renderTodoItem(item));
    }

    renderTodoItem(todo) {
        const li = document.createElement("li");
        li.dataset.id = todo.id;

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = todo.completed;

        const p = document.createElement("p");
        p.textContent = todo.text;
        if (todo.completed) {
            p.classList.add("completed");
        }

        li.appendChild(checkbox);
        li.appendChild(p);
        this.todoList.appendChild(li);
    }

    toggleTodoItem(id, completed) {
        const li = this.todoList.querySelector(`[data-id="${id}"]`);
        if (li) {
            const p = li.querySelector("p");
            const checkbox = li.querySelector('input[type="checkbox"]');
            if (checkbox) checkbox.checked = completed;
            if (p) p.classList.toggle("completed", completed);
        }
    }

    clearInput() {
        this.input.value = "";
    }

    bindAddTodo(handler) {
        this.form.addEventListener("submit", (e) => {
            e.preventDefault();
            const rawValue = this.input.value;
            if (/.*\S.*/.test(rawValue)) {
                handler(rawValue);
            }
        });
    }

    bindToggleTodo(handler) {
        // Listens to clicks on both checkbox AND the paragraph text
        this.todoList.addEventListener("click", (e) => {
            const isCheckbox = e.target.matches('input[type="checkbox"]');
            const isText = e.target.matches("p");

            if (isCheckbox || isText) {
                const li = e.target.closest("li");
                if (li) {
                    handler(Number(li.dataset.id));
                }
            }
        });
    }

    bindClearCompleted(handler) {
        if (!this.clearBtn) return;
        this.clearBtn.addEventListener("click", () => handler());
    }

    confirmAction(message) {
        return confirm(message);
    }

    showAlert(message) {
        alert(message);
    }
}

export default todoView;