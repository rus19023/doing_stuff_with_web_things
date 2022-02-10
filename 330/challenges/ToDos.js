const onTap = (event) => {
    // If delete button is clicked/tapped, remove the todo from the map
  if ((event.target.id === 'remove')) {
    removeItem(event.target.id);
  }
  if ((event.target.id === 'done')) {
    markDone(event.target.id);
  }
  if ((event.target.id === 'add')) {
    createItem(event.target.id);
  }
}
window.addEventListener('touchend', onTap);

// Add a Todos class to the Todos.js file, and make it the default export for the module. In the constructor you should set a variable with the element our todo list will be built in, and the key we will use to read/write from localStorage.

class Todos {
  getAllTodos() {
     return todoList;
   }
   // For the first stretch we will need to get just one todo.
   getTodoByName(todoName) {
     return todoList.find(todo => todo.name === todoName);
   }
 }

 export default Todos;
