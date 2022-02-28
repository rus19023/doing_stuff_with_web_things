import * as ls from "./ls.js";
import * as util from "./utilities.js";

let sList = [];
const lskey = 'items';

export default class Scriptures {
    // a class needs a constructor
    constructor(parentId) {
        this.parentId = parentId;
        this.sList = [];
        this.error = error;
        this.srchbtn = util.qs('#srchbtn');
        this.fltrbtn = util.qs('#fltrbtn');
        this.allbtn = util.qs('#allbtn');
        //this.addbtn = util.qs('#addbtn');
        this.srchbtn.addEventListener("touchend", () => { this.listSearch(); }, false);
        this.fltrbtn.addEventListener("touchend", () => { this.listFilter(); }, false);
        this.allbtn.addEventListener("touchend", () => { this.listAll(); }, false);
        //this.addbtn.addEventListener("touchend", () => { this.addTodo(); }, false);
  }

  listAll() {
      this.sList = getScriptures(lskey);
      this.rendersList(this.sList);
      this.itemsLeft();
  }

  // function to show how many items are left undone in the todo list
  itemsLeft() {
      let itemcount = this.sList.length;
      let t;
      if (itemcount === 1) {
        t = ' scripture ';
      } else if ((itemcount > 1) || (itemcount === 0)) {
        t = ' scriptures ';
      }
      util.qs("#scriptures").innerHTML = `${itemcount} ${t} left`;
  }

  addTodo() {
      // set blank error field
      this.error = '';
      util.qs("#error").innerText = this.error;
      // grab scripture from input field
      const scripture = util.qs("#addinput");
      if (!scripture.value.length > 0) {
          this.error = 'Item cannot be blank, please enter your scripture.';
          util.qs("#error").innerText = this.error;
      } else {
          saveTodo(scripture.value, lskey);
          scripture.value = '';
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

  rendersList(renderlist) {
      // build new display
      const parentEl = util.qs('#Scriptures');
      parentEl.innerText = '';
      renderlist.forEach((field) => {
        // create new list item
        //            createLMNT(LMNT, LMNTtype, LMNTid, LMNTtext, LMNTclass)
        let item = util.createLMNT('li', '', '', '', 'listitem bordered item-row nodots');
        if (field.scripture.length > 75) {
          item.style.height = '12vh';
        } else if (field.scripture.length > 30) {
          item.style.height = '10vh';
        }
        let itemtext = util.createLMNT("p", "", "", field.scripture , "todo-text");
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
      this.sList = getScriptures(lskey);
      this.sList = this.sList.filter(el => el.done === false);
      this.rendersList(this.sList);
    }

    listDone() {
      this.sList = getScriptures(lskey);
      this.sList = this.sList.filter(el => el.done === true);
      this.rendersList(this.sList);
    }
}

/***** END OF Scriptures CLASS *****/

/*
In the Scriptures.js module, but not in the Scriptures class create the following function
/ check the contents of sList, a local variable containing a list of Scriptures. If it is null then pull the list of Scriptures from localstorage, update the local variable, and return it
@param {string} key The key under which the value is stored under in LS @return {array} The value as an array of objects /
function getScriptures(key) { }
*/

function getScriptures(lskey) {
    let scripturelist = JSON.parse(ls.readFromLS(lskey)) || [];
  return scripturelist;
}

/*
In the Todo.js module, but not in the Scriptures class, create the following function
/* build a todo object, add it to the sList, and save the new list to local storage.
@param {string} key The key under which the value is stored under in LS @param {string} scripture The text of the scripture to be saved.
A todo should look like this: { id : timestamp, content: string, completed: bool }
*/

function saveTodo(scripture, lskey) {
  sList = getScriptures(lskey);
  // build todo object
  const todo = { id: Date.now(), scripture: scripture, done: false };
  // add obj to sList
  sList.push(todo);
  // save JSON.stringified list to ls
  ls.writeToLS(lskey, JSON.stringify(sList));
  location.reload();
}

function markDone(id) {
    sList = getScriptures(lskey);
    sList.forEach(function(item) {
        // use == not ===, because here types are different. One is number and other is string
        if (item.id == id) {
          // toggle the value
          item.done = !item.done;
        }
    });
    // save modified JSON.stringified list to ls
    ls.writeToLS(lskey, JSON.stringify(sList));
    console.log(sList);
    location.reload();
}

function deleteTodo(id) {
    sList = getScriptures(lskey);
    sList = sList.filter(item => item.id != id.substr(3, id.length));
    // save JSON.stringified list to ls
    ls.writeToLS('items', JSON.stringify(sList));
    location.reload();
}
