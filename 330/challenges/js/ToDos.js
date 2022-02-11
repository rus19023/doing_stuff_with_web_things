import * as ls from '/ls.js';
import * as util from 'utilities.js';


localStorage.setItem('items', JSON.stringify(itemsArray));
const todolist = JSON.parse(localStorage.getItem('items'));
console.log(todolist);

export default class ToDos {
  // a class needs a constructor
  constructor(parentId) {
      this.parentElement = document.getElementById(parentId);
      // TODO: buttons need to be in child elements, markbtn and delbtn in li; allbtn, donbtn & actbtn in footer, addbtn in form
      this.addbtn = this.ls.createItem();
      this.markbtn = this.ls.markDone();
      this.delbtn = this.ls.removeItem();
      this.allbtn = this.showAll();
      this.actbtn = this.showActive();
      this.donbtn = this.showDone();
  }

  onTap(event) {
    // If delete button is clicked/tapped, remove the todo from the local 0storage
    if ((event.target.id === 'delbtn')) {
      util.onTouch(this.itemkey, ls.removeItem(event.target.id));
    }
    // If mark button is clicked/tapped, mark the done boolean as true
    if ((event.target.id === 'markbtn')) {
      util.onTouch(this.itemkey, markDone());
    }
    // If the add item is clicked/tapped, create a new local storage item
    if ((event.target.id === 'addbtn')) {
        // if there is no lastId set in local storage, set it to 0
        if (!localStorage.getItem('lastId')) {
            localStorage.setItem('lastId', 0);
        }
      this.lastId = localStorage.getItem('lastId');
      this.itemName = document.getElementById('addinput').value;
      console.log(getElementById('addinput').value);
      onTouch(this.lastId, createItem('items', this.lastId, this.itemName, this.itemdone));
    }
    // If the active button is clicked/tapped, show all active todos
    if ((event.target.id === 'actbtn')) {
      showActive();
    }
    // If the all button is clicked/tapped, show all todos
    if ((event.target.id === 'allbtn')) {
      showAll();
    }
    // If the done button is clicked/tapped, show all done todos
    if ((event.target.id === 'donbtn')) {
      showDone();
    }
  }

  showAll(todolist) {
      // the list of todos will come from the model
      //const todolist = this.todosModel.getAllTodos();
      // send the list of todos and the element we would like those placed into to the view.
      this.todoView.renderTodoList(this.parentElement, todolist);
      // after the todos have been rendered...add our listener
      this.addTodoListener();
  }

  showOneTodo(todoName) {
      const todo = this.todosModel.gettodoByName(todoName);
      this.todosView.renderOneTodoFull(this.parentElement, todo).ontouchend =
      () => {
          this.showTodoList();
      };
  }

  showActive() {
      const todolist = this.todosModel.getAllTodos();
      const activeTodos = todolist.filter(todo => !todo.itemDone);
      this.todoView.renderTodoList(this.parentElement, activeTodos);
      this.addTodoListener();
  }

  showDone() {
      const todolist = this.todosModel.getAllTodos();
      const doneTodos = todolist.filter(todo => todo.itemDone);
      this.todoView.renderTodoList(this.parentElement, doneTodos);
      this.addTodoListener();
  }


 // function to show how many items are left undone in the to do   list
 itemsLeft() {
     let items = document.getElementById("list").children.length;
     if ((items < 2) && (items > 0)) {
     document.getElementById(id).innerText = items + ' task left';
     } else {
     document.getElementById(id).innerText = items + ' tasks left';
     }
 }

  // in order to show the details of a todo ontouchend we will need to attach a listener AFTER the list of todos has been built. The function below does that.
  addTodoListener() {
    // We need to loop through the children of our list and attach a listener to each, remember though that children is a nodeList...not an array. So in order to use something like a forEach we need to convert it to an array.
    const childrenArray = Array.from(this.parentElement.children);
    childrenArray.forEach((child) => {
      child.addEventListener("touchend", (e) => {
        // why currentTarget instead of target?
        this.showOneTodo(e.currentTarget.dataset.name);
      });
    });
  }
}


/*
In the Todo.js module, but not in the Todos class, create the following function
/* build a todo object, add it to the todoList, and save the new list to local storage.
@param {string} key The key under which the value is stored under in LS @param {string} task The text of the task to be saved.
A todo should look like this: { id : timestamp, content: string, completed: bool }
 */

function saveTodo(task, key) {
  // build todo object
  const todo = {};
  todo.id = Date.now();
  todo.content = task;
  todo.done = false;
  // add obj to todoList
  todoList = JSON.parse(localStorage.getItem(key));
  todoList += todo;
  // JSON.stringify list, then save todoList to ls
  localStorage.setItem(key, todoList);
}



/*
In the Todos.js module, but not in the Todos class create the following function
/ check the contents of todoList, a local variable containing a list of ToDos. If it is null then pull the list of todos from localstorage, update the local variable, and return it
@param {string} key The key under which the value is stored under in LS @return {array} The value as an array of objects */

function getTodos(key) {
  if (key) {
    console.log(`getTodos(): ${key}`);
  }
}


getAllTodos() {
  console.log(`getAllTodos(): ${todoList}`);
  return JSON.stringify(todoList);
}
// Get just one todo.
getTodoByName(todoName) {
  return todoList.find((todo) => todo.itemName === todoName);
}

export default todosModel;