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
    util.onTouch('#allbtn', this.listAll);
    util.onTouch('#actbtn', this.listActive);
    util.onTouch('#donebtn', this.listDone);
  }

  listAll() {
    this.todoList = getTodos(lskey);
    this.renderTodoList(this.todoList, this.parentId);
    this.itemsLeft;
  }

  checkBtn() {
    console.log(checkBtn);
  }

  toggle(id) {
    todoList.forEach(function(item) {
      // use == not ===, because here types are different. One is number and other is string
      if (item.id == id) {
        // toggle the value
        item.done = !item.done;
      }
    });
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
    this.itemsLeft;
  }

  renderTodoList(renderlist, elId) {
      // build new display
      //console.log(elId);
      const parentEl = util.qs(`#${elId}`);
      parentEl.innerText = '';
      renderlist.forEach((field) => {
        // create new list item
        //            createLMNT(LMNT, LMNTtype, LMNTid, LMNTtext, LMNTclass)
        let item = util.createLMNT('li', '', `item${field.id}`, '', 'listitem bordered item-row');
        let itemtext = util.createLMNT("p", "", "", field.task , "todo-text");
        let markbox = util.createLMNT('label', `label${field.id}`, '', '', 'bordered markbtn');
        markbox.setAttribute('name', `label${field.id}`);
        let markbtn = util.createLMNT("input", "checkbox", field.id, "", "markbtn chkbtn");
        let delbtn = util.createLMNT("button", "", `del${field.id}`, "X", "delbtn chkbtn");
        //debugger;
        if (field.done === true) {
          itemtext.classList.add("scratch");
          markbtn.classList.add('markbtnX');
          //markbtn.checked = true;
        } else {
          //markbtn.checked = false;
          markbtn.classList.remove('markbtnX');
          itemtext.classList.remove("scratch");
        }
        markbox.appendChild(markbtn);
        item.appendChild(markbox);
        item.appendChild(itemtext);
        item.appendChild(delbtn);
        parentEl.appendChild(item);
      });
      let listitems = document.querySelectorAll('.chkbtn');
      listitems.forEach(function (item) {
          item.addEventListener('click', function(e) {
          console.log(item);
          // go through list of items, if id matches and markbtn is checked, set item.done to true
          console.log(listitems);
          this.toggle(e.target.getAttribute('id'));
          console.log(listitems);
          // get the updated list
          this.todoList = getTodos(lskey);
          // write the updated list to localStorage
          ls.writeToLS(lskey, JSON.stringify(todoList));
        });
      });
      this.itemsLeft;
  }

    listActive() {
      this.todoList = getTodos(lskey);
      this.renderTodoList(this.todoList.filter(el => el.done === false, this.parentId));
    }

    listDone() {
      this.todoList = getTodos(lskey);
      this.renderTodoList(this.todoList.filter(el => el.done === true, this.parentId));
    }

    // function to show how many items are left undone in the todo list
    itemsLeft() {
      let itemcount = this.todoList.length;
      let t;
      if (itemcount === 1) {
        t = ' task ';
      } else if ((itemcount > 1) || (itemcount === 0)) {
        t = ' tasks ';
      }
      util.qs("#tasks").innerHTML = `${itemcount} ${t} left`;
      this.listAll;
    }

    deleteItem(id) {
        todoList = getTodos(lskey, id);
        todoList = todoList.filter(function(item) {
          // use != not !==, because here types are different. One is number and other is string
          return item.id != id;
        });
        console.log(todoList);
        // save JSON.stringified list to ls
        //ls.writeToLS('items', JSON.stringify(todoList));
    }
}

/***** END OF CLASS *****/

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

// toggle the value to done and not done


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




// $(document).on("ready",function() {

//   // 0 = hidden, 1 = visible

//   var menuState = 0;

//   //if($(".mini-menu-options").is(":hidden")) {

//     /* Add a listener to the Click even for btn-select */

//     $(".btn-select").on("click",function() {

//       if(menuState === 0) {

//         $(".mini-menu-options").slideDown("slow");

//         menuState = 1;

//       } else {

//         $(".mini-menu-options").slideUp("slow");

//         menuState = 0;

//       }

//     });

//   //}

//   // If the link has more than 1 child, it means there is a submenu

//   $(".mini-menu-options li").on("click", function() {

//     var numChildren = $(this).children().length;

//     if(numChildren < 2) {

//       // hide the menu

//       $(".mini-menu-options").hide("fast");

//       // get the text from the selected element

//       var text = $(this).text();

//       // and add it to the menubar

//       $(".menu-select .menu-actual").text(text);

//     }

//     menuState = 0; // reset the menu variable

//   });

// });
