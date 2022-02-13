/*start with two...may add more later

read a value from local storage and parse it as JSON @param {string} key
The key under which the value is stored in LS
@return {array} The value as an array of objects */
const readFromLS = lskey => localStorage.getItem(lskey);

function getAllItems() {
    let itemlist;
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var value = localStorage[key];
        console.log(key + " => " + value);
        itemlist.push(JSON.parse(window.localStorage.getItem(key)));
    }
}
/*
write an array of objects to local storage under the provided key @param {string} key The key under which the value is stored under in LS
* @param {array} data The information to be stored as an array of objects. Must be serialized.
*/
const writeToLS = (lskey, list) =>  localStorage.setItem(lskey, list);

// remove selected item from localStorage
const removeFromLS = (lskey, id) => localStorage.removeItem(lskey, id);

// Mark selected item as completed
const markItemDone = (lskey, id) => {
    let list = readFromLS(lskey);
    list.forEach(item => {
        if (item.id === id) {
        localStorage.setItem(item.done = true);
        }
    });
    writeToLS(key, list);
};

export { getAllItems, readFromLS, writeToLS, markItemDone, removeFromLS };