import * as ls from "./ls.js";
import * as util from "./utilities.js";

let todoList = [];
const lskey = 'items';

export default class todos {
    // a class needs a constructor
    constructor(parentId) {
        this.parentId = parentId;
        this.todoList = [];
        this.todo_error = error;
        this.searchWord = util.qs('#searchinput');
        this.srchbtn = util.qs('#srchbtn');
        this.allbtn = util.qs('#allbtn');
        this.actbtn = util.qs('#actbtn');
        this.donebtn = util.qs('#donebtn');
        this.fltrbtn = util.qs('#fltrbtn');
        this.allbtn = util.qs('#allbtn');
        this.addbtn = util.qs('#addbtn');
        this.srchbtn.addEventListener("touchend", () => { this.listFiltered(); }, false);
        this.allbtn.addEventListener("touchend", () => { this.listAll(); }, false);
        this.addbtn.addEventListener("touchend", () => { this.addTodo(); }, false);
        this.allbtn.addEventListener("touchend", () => { this.listAll(); }, false);
        this.actbtn.addEventListener("touchend", () => { this.listActive(); }, false);
        this.donebtn.addEventListener("touchend", () => { this.listDone(); }, false);
  }

  listAll() {
      this.todoList = gettodos(lskey);
      this.renderTodoList(this.todoList);
      this.itemsLeft();
  }

  // function to show how many items are left undone in the todo list
  itemsLeft() {
      let itemcount = this.todoList.length;
      let t;
      if (itemcount === 1) {
        t = ' todo ';
      } else if ((itemcount > 1) || (itemcount === 0)) {
        t = ' todos ';
      }
      util.qs("#todos").innerHTML = `${itemcount} ${t} left`;
  }

  addTodo() {
      // set blank error field
      this.todo_error = '';
      util.qs("#error").innerText = this.todo_error;
      // grab todo from input field
      const todo = util.qs("#addinput");
      if (!todo.value.length > 0) {
          this.todo_error = 'Item cannot be blank, please enter your todo.';
          util.qs("#error").innerText = this.todo_error;
      } else {
          saveTodo(todo.value, lskey);
          todo.value = '';
      }
  }

  markItem(id) {
      markDone(id);
      this.listAll;
  }

  removeItem(id) {
      deleteTodo(id);
      this.listAll;
  }

  renderTodoList(renderlist) {
      // build new display
      const parentEl = util.qs('#todos');
      parentEl.innerText = '';
      renderlist.forEach((field) => {
        // create new list item
        //            createLMNT(LMNT, LMNTtype, LMNTid, LMNTtext, LMNTclass)
        let item = util.createLMNT('li', '', '', '', 'listitem bordered item-row nodots');
        if (field.task.length > 75) {
          item.style.height = '12vh';
        } else if (field.task.length > 30) {
          item.style.height = '10vh';
        }
        let itemtext = util.createLMNT("p", "", "", field.task , "todo-text");
        let markbox = util.createLMNT('label', `label${field.id}`, '', '', 'bordered markbtn');
        markbox.setAttribute('name', `label${field.id}`);
        let markbtn = util.createLMNT("input", "checkbox", field.id, "", "markbtn chkbtn");
        let delbtn = util.createLMNT("button", "", `del${field.id}`, "X", "delbtn chkbtn");
        if (field.done === true) {
          itemtext.classList.add("scratch");
          markbtn.classList.add('markbtnX');
          markbtn.checked = true;
        } else {
          markbtn.checked = false;
          markbtn.classList.remove('markbtnX');
          itemtext.classList.remove("scratch");
        }
        markbox.appendChild(markbtn);
        item.appendChild(markbox);
        item.appendChild(itemtext);
        item.appendChild(delbtn);
        parentEl.appendChild(item);
      });
      this.checkBtn();
  }

  checkBtn() {
      let btnitems = Array.from(document.querySelectorAll('.chkbtn'));
      btnitems.forEach(function (item) {
          item.addEventListener('touchend', function(e) {
            // check if the event is a checkbox
            if (e.target.type === 'checkbox') {
              // get id from button id value and toggle the state
              markDone(e.target.getAttribute('id'));
            }
            // check if that is a delete-button
            if (e.target.classList.contains('delbtn')) {
              // get id from button id value and delete it
              deleteTodo(e.target.getAttribute('id'));
            }
            console.log(item);
          });
      });
  }

  listActive() {
      this.todoList = getTodos(lskey);
      this.todoList = this.todoList.filter(el => el.done === false);
      this.renderTodoList(this.todoList);
    }

    listDone() {
      this.todoList = getTodos(lskey);
      this.todoList = this.todoList.filter(el => el.done === true);
      this.renderTodoList(this.todoList);
    }

    listFiltered(searchKeyword) {
        this.todoList = getTodos(lskey);
        this.todoList = this.todoList.filter(el => el.task.contains(searchKeyword));
        this.renderTodoList(this.todoList);
    }
}

/***** END OF todos CLASS *****/

/*
In the todos.js module, but not in the todos class create the following function
/ check the contents of sList, a local variable containing a list of todos. If it is null then pull the list of todos from localstorage, update the local variable, and return it
@param {string} key The key under which the value is stored under in LS @return {array} The value as an array of objects /
function gettodos(key) { }
*/

function getTodos(lskey) {
    let todolist = JSON.parse(ls.readFromLS(lskey)) || [];
  return todolist;
}

/*
In the Todo.js module, but not in the todos class, create the following function
/* build a todo object, add it to the sList, and save the new list to local storage.
@param {string} key The key under which the value is stored under in LS @param {string} todo The text of the todo to be saved.
A todo should look like this: { id : timestamp, content: string, completed: bool }
*/

function saveTodo(todo, lskey) {
  todoList = getTodos(lskey);
  // build todo object
  const newItem = { id: Date.now(), task: todo.task, done: false };
  // add obj to todoList
  todoList.push(newItem);
  // save JSON.stringified list to ls
  ls.writeToLS(lskey, JSON.stringify(todoList));
  location.reload();
}

function markDone(id) {
    todoList = getTodos(lskey);
    todoList.forEach(function(item) {
        // use == not ===, because here types are different. One is number and other is string
        if (item.id == id) {
          // toggle the value
          item.done = !item.done;
        }
    });
    // save modified JSON.stringified list to ls
    ls.writeToLS(lskey, JSON.stringify(todoList));
    console.log(todoList);
    location.reload();
}

function deleteTodo(id) {
    todoList = getTodos(lskey);
    todoList = todoList.filter(item => item.id != id.substr(3, id.length));
    // save JSON.stringified list to ls
    ls.writeToLS('items', JSON.stringify(todoList));
    location.reload();
}
