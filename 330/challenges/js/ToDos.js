import * as ls from "./ls.js";
import * as util from "./utilities.js";

let todoList = [];

export default class ToDos {
  // a class needs a constructor
  constructor(parentId) {
    util.onTouch('#addbtn', this.addTodo);
    util.onTouch('#allbtn', this.listTodos);
    util.onTouch('#actbtn', this.listActive);
    util.onTouch('#donebtn', this.listDone);
    this.parentElement = util.qs(`#${parentId}`);
  }

  listTodos() {
    // // get list of todos from local storage and send them to the render function
    // let mytask = [];
    // todoList.forEach((todo) => {
    //   mytask.push(todo);
    // });
    todoList = getTodos('items');
    renderTodoList(this.parentElement, todoList);
    this.itemsLeft();
  }

  addTodo() {
    // grab task from input field
    const task = util.qs("#addinput").value;
    if (task.length > 0) {
      saveTodo(task, 'items');
      this.listTodos();
    } else {
      util.qs("#error").innerText = 'Item cannot be blank, please enter your task.'
    }
  }

  removeTodo(id) {
    deleteItem(id);
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
    ls.writeToLS(lskey, JSON.stringify(list));
  };

  filterTodos(filterstring) {
    //todoList = getTodos('items');
    console.log(`filterTodos list before filtering: ${list}`);
    console.log(list.filter((item) => item.done === filterstring));
    return todoList.filter(item => item.done === filterstring);
  }

  listActive() {
    let filtered = todoList.filter(item => item.done === false);
    renderTodoList(this.parentElement, filtered);
  }

  listDone() {
    renderTodoList(this.parentElement, this.filterTodos(true));
  }

  // function to show how many items are left undone in the todo list
  itemsLeft() {
    let itemcount = todoList.length;
    let t;
    if (itemcount === 1) {
      t = ' task ';
    } else if (itemcount > 1) {
      t = ' tasks '
    }
    util.qs("#tasks").innerHTML = `${itemcount}${t}left`;
  }
}

/*
In the Todo.js module, but not in the Todos class, create the following function
/* build a todo object, add it to the todoList, and save the new list to local storage.
@param {string} key The key under which the value is stored under in LS @param {string} task The text of the task to be saved.
A todo should look like this: { id : timestamp, content: string, completed: bool }
*/

function saveTodo(task) {
  console.log('todoList: ' + todoList);
  // build todo object
  const todo = { id: Date.now(), task: task, done: false };
  // add obj to todoList
  todoList.push(todo);
  console.log('todoList: ' + todoList);
  // save JSON.stringified list to ls
  //console.log(ls.writeToLS(lskey, mysavelist));
  ls.writeToLS('items', JSON.stringify(todoList));
  console.log('todo added!');
}

function renderTodoList(parentId, renderlist) {
    // start with clean slate for todo items display
    parentId.innerHTML = '';
    // build new display
    renderlist.forEach((field) => {
      // create new list item
      //            createLMNT(LMNT, LMNTtype, LMNTid, LMNTtext, LMNTclass)
      let item = util.createLMNT('li', '', field.id, '', 'listitem bordered item-row');
      let itemtext = util.createLMNT("p", "", "", field.task, "todo-text");
      let markbox = util.createLMNT('label', `label${field.id}`, '', '', 'bordered markbtn');
      markbox.setAttribute('name', `label${field.id}`);
      let markbtn = util.createLMNT("input", "checkbox", `mark${field.id}`, "", "markbtn");
      let delbtn = util.createLMNT("button", "", `del${field.id}`, "X", "delbtn");
      console.log(`#del${field.id}`);
      console.log(field.id);
      //util.onTouch(`#del${field.id}`, deleteItem(field.id));
      //util.onTouch(`#mark${field.id}`, markDone(field.id));

      if (field.done === true) {
        itemtext.classList.add("scratch");
        markbtn.classList.add('markbtnX');
      }
      markbox.appendChild(markbtn);
      item.appendChild(markbox);
      item.appendChild(itemtext);
      item.appendChild(delbtn);
      parentId.appendChild(item);
    });
}

function markDone(id) {
  todoList.forEach(item => {
    if (item.id === id) {
    item.done = true;
    }
  });
  ls.writeToLS('items', JSON.stringify(todoList));
  //markItemDone('items', id);
}

function deleteItem(id) {
  //console.log("todoList: " + todoList);
  // get the index of the item with this id
  const gotindex = todoList.findIndex((todo) => todo.id === id);
  // set the boolean to true for this list item
  //todoList[gotindex] = { id: todo.id, task: todo.task, done: true };
  // add obj to todoList
  todoList.splice( gotindex, 1 );
  // save JSON.stringified list to ls
  ls.writeToLS('items', JSON.stringify(todoList));
}


/*
In the Todos.js module, but not in the Todos class create the following function
/ check the contents of todoList, a local variable containing a list of ToDos. If it is null then pull the list of todos from localstorage, update the local variable, and return it
@param {string} key The key under which the value is stored under in LS @return {array} The value as an array of objects */


function getTodos(lskey) {
  return JSON.parse(ls.readFromLS(lskey)) || [];
}

export { saveTodo, renderTodoList, getTodos, markDone, deleteItem };