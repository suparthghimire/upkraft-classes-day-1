
    function renderTodoTable(data) {
    const table = document.createElement("table");
    table.border = "1";
    table.style.borderCollapse = "collapse";
    table.style.width = "100%";

    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    const headers = ["User ID", "ID", "Title", "Status"];

    headers.forEach((headerText) => {
        const th = document.createElement("th");
        th.textContent = headerText;
        th.style.padding = "8px";
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);


    const tbody = document.createElement("tbody");


    const createCell = (text) => {
        const td = document.createElement("td");
        td.textContent = text;
        td.style.padding = "8px";
        return td;
    };

    data.forEach((todo) => {
        const row = document.createElement("tr");

        row.appendChild(createCell(todo.userId));
        row.appendChild(createCell(todo.id));
        row.appendChild(createCell(todo.title));
        row.appendChild(createCell(todo.completed ? "Completed" : "Pending"));

        tbody.appendChild(row);
    });

    table.appendChild(tbody);

    document.body.appendChild(table);
    }

const getTodoApi = "https://jsonplaceholder.typicode.com/todos";
async function fetchAndRenderTodos() {

    try {
        const response = await fetch(getTodoApi);
        const data = await response.json();
        renderTodoTable(data);
        console.log(data)

    } catch (error) {
        console.error(error);
    }
}
fetchAndRenderTodos();