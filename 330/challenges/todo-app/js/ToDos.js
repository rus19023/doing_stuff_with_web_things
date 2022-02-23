import * as ls from "./ls.js";
import * as util from "./utilities.js";

let todoList = [];
const lskey = 'items';

export default class ToDos {
    // a class needs a constructor
    constructor(parentId) {
        this.parentId = parentId;
        this.todoList = [];
        this.error = error;
        this.donebtn = util.qs('#donebtn');
        this.actbtn = util.qs('#actbtn');
        this.allbtn = util.qs('#allbtn');
        this.donebtn.addEventListener("click", () => { this.listDone(); }, false);
        this.actbtn.addEventListener("click", () => { this.listActive(); }, false);
        this.allbtn.addEventListener("click", () => { this.listAll(); }, false);
        // this.actbtn = util.qs('#actbtn');

        util.onTouch('#addbtn', this.addTodo);
        //util.onTouch('#allbtn', this.listAll);
        //util.onTouch('#actbtn', this.listActive);
        //util.onTouch('#donebtn', this.listDone);
  }

  listAll() {
      this.todoList = getTodos(lskey);
      console.log(this.todoList);
      console.log(this.parentId);
      this.renderTodoList(this.todoList);
      this.itemsLeft();
  }

  // function to show how many items are left undone in the todo list
  itemsLeft() {
      console.log(this.todoList.length);
      let itemcount = this.todoList.length;
      let t;
      if (itemcount === 1) {
        t = ' task ';
      } else if ((itemcount > 1) || (itemcount === 0)) {
        t = ' tasks ';
      }
      util.qs("#tasks").innerHTML = `${itemcount} ${t} left`;
  }

  addTodo() {
      // set blank error field
      this.error = '';
      util.qs("#error").innerText = this.error;
      // grab task from input field
      const task = util.qs("#addinput");
      if (!task.value.length > 0) {
          this.error = 'Item cannot be blank, please enter your task.';
          util.qs("#error").innerText = this.error;
      } else {
          saveTodo(task.value, lskey);
          task.value = '';
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
    console.log(renderlist);
      // build new display
      const parentEl = util.qs('#todos');
      parentEl.innerText = '';
      console.log(renderlist);
      renderlist.forEach((field) => {
        // create new list item
        //            createLMNT(LMNT, LMNTtype, LMNTid, LMNTtext, LMNTclass)
        let item = util.createLMNT('li', '', '', '', 'listitem bordered item-row');
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
          item.addEventListener('click', function(e) {
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
      console.log(this.todoList);
      this.todoList = this.todoList.filter(el => el.done === false);
      console.log(this.todoList);
      this.renderTodoList(this.todoList);
    }

    listDone() {
      this.todoList = getTodos(lskey);
      this.todoList = this.todoList.filter(el => el.done === true);
      console.log(this.todoList);
      this.renderTodoList(this.todoList);
    }
}

/***** END OF ToDos CLASS *****/

/*
In the Todos.js module, but not in the Todos class create the following function
/ check the contents of todoList, a local variable containing a list of ToDos. If it is null then pull the list of todos from localstorage, update the local variable, and return it
@param {string} key The key under which the value is stored under in LS @return {array} The value as an array of objects /
function getTodos(key) { }
*/

function getTodos(lskey) {
    let tasklist = JSON.parse(ls.readFromLS(lskey)) || [];
  return tasklist;
}

/*
In the Todo.js module, but not in the Todos class, create the following function
/* build a todo object, add it to the todoList, and save the new list to local storage.
@param {string} key The key under which the value is stored under in LS @param {string} task The text of the task to be saved.
A todo should look like this: { id : timestamp, content: string, completed: bool }
*/

function saveTodo(task, lskey) {
  todoList = getTodos(lskey);
  // build todo object
  const todo = { id: Date.now(), task: task, done: false };
  // add obj to todoList
  todoList.push(todo);
  // save JSON.stringified list to ls
  ls.writeToLS(lskey, JSON.stringify(todoList));
  location.reload();
}

function markDone(id) {
    todoList = getTodos(lskey);
    todoList.forEach(function(item) {
        // use == not ===, because here types are different. One is number and other is string
        if (item.id == id) {
          console.log(id);
          console.log(item);
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
