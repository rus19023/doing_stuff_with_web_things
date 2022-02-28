import Scriptures from "./Scriptures.js";

window.addEventListener("load", () => {
    const myTodos = new Scriptures("scriptures");
    Scriptures.listAll();
});