import todoList from "./models/todoList.js";
import todoView from "./views/todoView.js";
import todoController from "./controller/todoController.js";

document.addEventListener("DOMContentLoaded", () => {
    new todoController(new todoList(), new todoView());

});