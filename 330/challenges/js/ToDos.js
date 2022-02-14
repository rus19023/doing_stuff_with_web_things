import * as ls from "./ls.js";
import * as util from "./utilities.js";

var todoList = null;

export default class ToDos {
  // a class needs a constructor
  constructor(parentId) {
    this.addbtn = util.createLMNT("button", "button", "addbtn", "+", "");
    util.onTouch('#addbtn', this.addTodo);
    this.parentElement = util.qs(`#${parentId}`);
    //markbtn.onTouch("markbtn", this.markDone(lskey));
  }

  listTodos() {
    // get list of todos from local storage and send them to the render function
    todoList = getTodos('items');
    console.log(todoList);
    let mytask = [];
    todoList.forEach((todo) => {
      console.log(todo.id, todo.task, todo.done);
      mytask.push(todo);
    });
    renderTodoList(this.parentElement, todoList);
    this.itemsLeft();
  }

  addTodo() {
    // grab task from input field
    //console.log(util.qs("#addinput").innerText);
    const task = util.qs("#addinput").value;
    //console.log(task);
    saveTodo(task, 'items');
    this.listTodos();
  }

  removeTodo(id) {
    ls.removeFromLS(id);
    this.listTodos();
  }

    // Mark selected item as completed
    markItemDone = (lskey, id) => {
      let list = getTodos(lskey);
      list.forEach(item => {
          if (item.id === id) {
          item.done = true;
          }
      });
      writeToLS(key, list);
    };

  filterTodos(list, filterstring) {
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
    let items = getTodos('items').length;
    if (items === 1) {
      util.qs("#tasks").innerText = items + " task left";
    } else if (items < 2 && items > 0) {
      util.qs("#tasks").innerText = items + " tasks left";
    }
  }
}

/*
In the Todo.js module, but not in the Todos class, create the following function
/* build a todo object, add it to the todoList, and save the new list to local storage.
@param {string} key The key under which the value is stored under in LS @param {string} task The text of the task to be saved.
A todo should look like this: { id : timestamp, content: string, completed: bool }
*/

function saveTodo(task, lskey) {
  let mytasks = getTodos('items') || [];
  console.log('mytasks: ' + mytasks);
  // build todo object
  const todo = { id: Date.now(), task: task, done: true };
  //console.log('todo: ' + todo);
  // add obj to todoList
  mytasks.push(todo);
  let mytasklist = JSON.stringify(mytasks);
  //console.log('mytasks: ' + mytasklist);
  // save JSON.stringified list to ls
  //console.log(ls.writeToLS(lskey, mytasklist));
  ls.writeToLS(lskey, mytasklist);
}

function renderTodoList(parentId, renderlist) {
    renderlist.forEach((field) => {
      // create new list item
      console.log(renderlist);
      console.log(field.id, field.task, field.done);
      //            createLMNT(LMNT, LMNTtype, LMNTid, LMNTtext, LMNTclass)
      let item = util.createLMNT('li', '', field.id, '', 'listitem bordered item-row');
      let itemtext = util.createLMNT("p", "", '', field.task, "todo-text");
      let markbox = util.createLMNT('div', '', '', '', '');
      let markbtn = util.createLMNT("input", "checkbox", `markbtn${field.id}`, "", "bordered todo-buttons markbtn");
        if (field.done === true) {
          itemtext.classList.add("scratch");
          markbtn.innerText = "✕";
        }
      let delbtn = util.createLMNT("button", "", "delbtn", "X", " del-text");
      //delbtn.onTouch("delbtn", this.removeTodo(todo.id));
      //markbtn.onTouch("markbtn", this.markDone(todo.id));
      //let footer = util.createLMNT("footer", "", "footer", "", "footer");
      markbox.appendChild(markbtn);
      item.appendChild(markbox);
      item.appendChild(itemtext);
      item.appendChild(delbtn);
      console.log(parentId);
      parentId.appendChild(item);
    });
}

/*
In the Todos.js module, but not in the Todos class create the following function
/ check the contents of todoList, a local variable containing a list of ToDos. If it is null then pull the list of todos from localstorage, update the local variable, and return it
@param {string} key The key under which the value is stored under in LS @return {array} The value as an array of objects */

function getTodo(id) {
  //return ls.readFromLS(id);
}

function getTodos(lskey) {
  return JSON.parse(ls.readFromLS(lskey)) || [];
}

export { saveTodo, renderTodoList, getTodos, getTodo };