import ToDos from "./ToDos.js";

window.addEventListener("load", () => {
    const myTodos = new ToDos('list');
    myTodos.itemsLeft();
});
