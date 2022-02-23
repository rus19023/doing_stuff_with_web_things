import ToDos from "./ToDos.js";

window.addEventListener("load", () => {
    const myTodos = new ToDos("todos");
    myTodos.listAll();
    // myTodos.donebtn.addEventListener('click', myTodos.renderTodoList.bind());
    // myTodos.actbtn.addEventListener('click', myTodos.renderTodoList.bind());
});
