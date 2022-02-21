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
    util.onTouch('#addbtn', this.addTodo);
    //util.onTouch('#allbtn', this.listAll);
    util.onTouch('#actbtn', this.listActive);
    util.onTouch('#donebtn', this.listDone);
  }

  listAll() {
    //debugger;
    //this.todoList = getTodos(lskey);
    this.todoList = getTodos(lskey);
    console.log(this.todoList);
    console.log(this.parentId);
    this.renderTodoList(this.todoList, this.parentId);
    this.itemsLeft();
  }

  // function to show how many items are left undone in the todo list
  itemsLeft() {
    this.todoList = getTodos(lskey);
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
    this.todoList = getTodos(lskey);
    // set blank error field
    this.error = '';
    util.qs("#error").innerText = this.error;
    // grab task from input field
    const task = util.qs("#addinput");
    if (!task.value.length > 0) {
        this.error = 'Item cannot be blank, please enter your task.';
        util.qs("#error").innerText = this.error;
    } else {
        //debugger;
        saveTodo(task.value, lskey);
        task.value = '';
    }
    this.listAll;
  }

  markDone(id) {
      this.todoList = getTodos(lskey);
      this.todoList.forEach(function(item) {
        // use == not ===, because here types are different. One is number and other is string
        console.log(id);
        console.log(item);
        if (item.id == id) {
          // toggle the value
          item.done = !item.done;
        }
    });
    this.listAll;
  }

  deleteTodo(id) {
      this.todoList = getTodos(lskey);
      this.todoList = todoList.filter(function(item) {
        // use != not !==, because here types are different. One is number and other is string
        return item.id != id;
      });
      console.log(this.todoList);
      // save JSON.stringified list to ls
      //ls.writeToLS('items', JSON.stringify(todoList));
      this.listAll;
  }

  renderTodoList(renderlist, elId) {
      // build new display
      const parentEl = util.qs(`#${elId}`);
      parentEl.innerText = '';
      renderlist.forEach((field) => {
        // create new list item
        //            createLMNT(LMNT, LMNTtype, LMNTid, LMNTtext, LMNTclass)
        let item = util.createLMNT('li', '', field.id, '', 'listitem bordered item-row');
        let itemtext = util.createLMNT("p", "", "", field.task , "todo-text");
        let markbox = util.createLMNT('label', `label${field.id}`, '', '', 'bordered markbtn');
        markbox.setAttribute('name', `label${field.id}`);
        let markbtn = util.createLMNT("input", "checkbox", `mark${field.id}`, "", "markbtn chkbtn");
        let delbtn = util.createLMNT("button", "", `del${field.id}`, "X", "delbtn chkbtn");
        //debugger;
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
        //console.log(`#mark${field.id}`);
        // util.onTouch(`#mark${field.id}`, this.markDone(`mark${field.id}`));
        // util.onTouch(`#del${field.id}`, this.deleteItem(`del${field.id}`));
      });
      let btnitems = Array.from(document.querySelectorAll('.chkbtn'));
      //console.log(btnitems);
      btnitems.forEach(function (item) {
          item.addEventListener('click', function(e) {
            // check if the event is on checkbox
            if (e.target.type === 'checkbox') {
              console.log(e.target.getAttribute('id'));
              // toggle the state
              this.markDone(e.target.getAttribute('id'));
            }

            // check if that is a delete-button
            if (e.target.classList.contains('delbtn')) {
              console.log(e.target.getAttribute('id'));
              // get id from data-key attribute's value of parent <li> where the delete-button is present
              this.deleteTodo(e.target.getAttribute('id'));
            }
          console.log(item);
          //this.todoList = getTodos(lskey);
          // write the updated list to localStorage
          ls.writeToLS(lskey, JSON.stringify(todoList));
        });
      });
      this.listAll;
  }

    listActive() {

      this.todoList = getTodos(lskey);
      //console.log(this.todoList.filter(el => el.done === true));
      let donelist = this.todoList.filter(el => el.done === false);
      console.log(donelist);
      console.log(this.parentId);
      this.renderTodoList(donelist, this.parentId);
    }

    listDone() {
      this.todoList = getTodos(lskey);
      let parent = 'todos';
      //console.log(this.todoList.filter(el => el.done === true));
      let donelist = this.todoList.filter(el => el.done === true);
      console.log(donelist);
      console.log(parent);
      this.renderTodoList(donelist, parent);
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
}
