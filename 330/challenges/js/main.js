import ToDos from '.ToDos.js';

const myTodos = new ToDos('todos');
window.addEventListener('load', () => {
  myTodos.showAll();
});
