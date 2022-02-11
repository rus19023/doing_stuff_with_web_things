
localStorage.setItem('items', JSON.stringify(todo));
console.log(JSON.parse(localStorage.getItem('items')));

/*start with two...may add more later
/
read a value from local storage and parse it as JSON @param {string} key
The key under which the value is stored in LS
@return {array} The value as an array of objects */
function readFromLS(key) {
    let todoList = [];
    JSON.parse(localStorage.getItem('items'));
    return todoList;
}
/*
write an array of objects to local storage under the provided key @param {string} key The key under which the value is stored under in LS
* @param {array} data The information to be stored as an array of objects. Must be serialized.

*/
function writeToLS(key, data) {
    localStorage.setItem('items', JSON.stringify(todo));
}



// Local storage helpers

// get last item id from localStorage
const getLastId = () => { return localStorage.getItem(lastItemId.value)};

// save new last item id to localStorage
const setLastId = (lastId) => { localStorage.setItem(lastItemId, lastId)};

// get last item id from localStorage
const getListItems = () => { return localStorage.getItem(listItems)};

// save new last item id to localStorage
const setNewItem = (key, content, done) => { localStorage.setItem(key, content, done)};

const lsHelpers = () => {}``


// Local storage helpers
  // get last item id from localStorage
  getLastId = () => {return localStorage.getItem('lastId', )};

  // save new last item id to localStorage
 setLastId = () => {localStorage.setItem('lastId', getLastId() + 1)};

  // get last item id from localStorage
 getListItems = () => localStorage.getItem(listItems);

  // save new item to localStorage
 createItem = (itemName) => {localStorage.setItem(this.getLastId() + 1, itemName, false)};