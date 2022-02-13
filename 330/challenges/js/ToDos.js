import * as ls from "./ls.js";
import * as util from "./utilities.js";

export default class ToDos {
  // a class needs a constructor
  constructor(parentId) {
    this.todoList = getTodos('items');
    this.addbtn = util.createLMNT("button", "button", "addbtn", "+", "");
    util.onTouch('#addbtn', this.addTodo);
  }

  listTodos() {
    renderTodoList(parentId, this.todoList);
    todolist.forEach((todo) => {
      markbtn.onTouch("markbtn", this.markDone(todo.id));
      delbtn.onTouch("delbtn", this.removeTodo(todo.id));
    });
  }

  addTodo() {
    // grab task from input field
    console.log(util.qs("#addinput").innerText);
    const task = util.qs("#addinput").value;
    console.log(task);
    saveTodo(task, 'items');
  }

  removeTodo(id) {
    ls.removeFromLS(id);
    this.listTodos();
  }

  // Mark item done
  markDone(id) {
    // get key from document id element
    const lskey = document.getElementById(id);
    // ls.markDone(id);
    // TODO: change checkbox to show X (CSS, checkbox hack)
    // TODO: line through item text (CSS, text decoration?)
    document.getElementById(id).classList.add("scratch");
    // TODO: change itemDone to true
    ls.markItemDone(lskey, id);
  }

  filterTodos(list, filterstring) {
    //   const numbers = [ 2, 7, 6, 5, 11, 23, 12 ];
    //   console.log(numbers.filter(x => x%2 === 0 ));
    console.log(`filterTodos list before filtering: ${list}`);
    console.log(list.filter((item) => item.lskey === filterstring));
    return list.filter((item) => item.lskey === filterstring);
  }

  listActive(list) {
    renderTodoList(this.parentElement, filterTodos(list, false));
  }

  listDone(list) {
    renderTodoList(this.parentElement, filterTodos(list, true));
  }

  // function to show how many items are left undone in the todo list
  itemsLeft() {
    let items = document.getElementById("list").children.length;
    if (items === 1) {
      document.getElementById("tasks").innerText = items + " task left";
    } else if (items < 2 && items > 0) {
      document.getElementById("tasks").innerText = items + " tasks left";
    }
  }
}

/*
In the Todo.js module, but not in the Todos class, create the following function
/* build a todo object, add it to the todoList, and save the new list to local storage.
@param {string} key The key under which the value is stored under in LS @param {string} task The text of the task to be saved.
A todo should look like this: { id : timestamp, content: string, completed: bool }
*/

let mytasks = getTodos('items');

function saveTodo(task, lskey) {
  mytasks = getTodos('items');
  console.log('mytasks: ' + mytasks);
  // build todo object
  const todo = { id: Date.now(), task: task, done: false };
  console.log('todo: ' + todo);
  // add obj to todoList
  mytasks.push(todo);
  console.log('mytasks: ' + mytasks);
  // save JSON.stringified list to ls
  console.log(ls.writeToLS(lskey, JSON.stringify(mytasks)));
  ls.writeToLS(lskey, JSON.stringify(mytasks));
}

function renderTodoList(parentId, todolist) {
  todolist.forEach((todo) => {
    // create new list item
    console.log(todo.id, todo.task, todo.done);
    const item = document.createElement("li");
    const itemtext = util.createLMNT("p", "", todo.id, todo.task, "listitem");
    itemtext.setAttribute("id", todo.id);
    // createLMNT(LMNT, LMNTtype, LMNTid, LMNTtext, LMNTclass)
    const markbtn = util.createLMNT("button", "", "markbtn", "✕", "");
    const delbtn = util.createLMNT("button", "", "delbtn", "X", "");
    //item.append(markbtn);
    item.append(itemtext);
    //item.append(delbtn);
    console.log(parentId);
    parentId.append(item);
  });
}

/*
In the Todos.js module, but not in the Todos class create the following function
/ check the contents of todoList, a local variable containing a list of ToDos. If it is null then pull the list of todos from localstorage, update the local variable, and return it
@param {string} key The key under which the value is stored under in LS @return {array} The value as an array of objects */

function getTodo(lskey) {
  return ls.readFromLS(lskey);
}

function getTodos(lskey) {

  let mytasks = Array.from(JSON.parse(ls.readFromLS(lskey)));
  return mytasks;
}

export { saveTodo, renderTodoList, getTodos, getTodo };