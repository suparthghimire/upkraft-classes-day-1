import { todoListContainer } from './selectors.js';

export const renderTodo = (todo) => {
    const p = document.createElement("p");
    const li = document.createElement("li");
    const checkBox = document.createElement('input');
    const deleteButton = document.createElement('button');

    checkBox.type = 'checkbox';
    p.textContent = todo.text;
    li.dataset.id = todo.id;
    deleteButton.textContent = 'Delete';

    if (todo.completed) {
        li.classList.add('completed');
        checkBox.checked = true;
    }

    li.appendChild(checkBox);
    li.appendChild(p);
    li.appendChild(deleteButton);

    todoListContainer.appendChild(li);
};