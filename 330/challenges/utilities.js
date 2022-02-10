// 1. Create DOM manipulation helper functions in utilities.js
//Two here for starters should be good as well...may add more later
// do a querySelector lookup @param {string} selector The selector passed to querySelector

// @return {element} The matching element or null if not found /
function qs(selector) {
    return document.querySelector(selector);
}

/*
add a touchend event listener to an element for mobile with a click event fallback for desktops @param {string} elementSelector The selector for the element to attach the listener to
* @param {function} callback The callback function to run

*/
function onTouch(elementSelector, callback) {
    let element = document.querySelector(elementSelector);
    console.log(`element.addEventListener, ${element.addeventlistener}`);
    if (element.addEventListener) {
        element.addEventListener('touchend', callback, false);
    } else if (element.attachEvent) {
        element.attachEvent('ontouchend', callback);
    }
}




// Create new to do task
const createItem = () => {
    const itemId = getItemId();

    // get text from input
    const itemText = document.getElementById("addinput").value;

    // create new task
    item.setAttribute('id', `item${itemId}`);

    // increment item id
    itemId++;

    // save item id to localStorage
    setLastId(itemId);
}

// View to do list items
const displayItems = () => {
    // create new list item
    const item = document.createElement('li');
    // forEach loop to get items from localStorage
        // add text to task line item
        const itemtext = document.createElement('p');
        p.setAttribute(itemText);
        // create delete button
        const delbtn = document.createElement("button");
        delbtn.setAttribute("ontouchend", "removeItem()");
        delbtn.setAttribute("class", "delbtn");

        // build item list for html file
        item.appendChild(markbtn);
        item.appendChild(itemtext);
        item.appendChild(delbtn);

    //append list items to list
    document.getElementById("list").appendChild(item);
}

// Mark item done
const markDone = (id) => {
    // TODO: change checkbox to show X (CSS, checkbox hack)
    // TODO: line through item text (CSS, text decoration?)
}

// Delete to do item
const removeItem = (key) => {
    // TODO: use ls utility to remove item from localStorage
    console.log(`removeItem: ${key}`);
    storage.removeItem(key);
}

// Filter list by done/not done, show outline border of button when tapped/clicked

// function to show how many items are left undone in the to do   list
function itemsLeft(list) {
    let items = document.getElementById("list").children.length;
    if ((items < 2) && (items > 0)) {
    document.getElementById(id).innerText = items + ' task left';
    } else {
    document.getElementById(id).innerText = items + ' tasks left';
    }
}
itemsLeft('tasks');

function showAll() {
    let items = document.getElementById("list").children;
    for (let i = 0; i < items.length; i++) {
        items[i].style.display = 'list-item';
    }
}

function showActive() {
    let items = document.getElementById("list").children;
    for (let i = 0; i < items.length; i++) {
        if (items[i].className === 'done') {
            items[i].style.display = 'none';
        } else {
            items[i].style.display = 'list-item';
        }
    }
}

function showDone() {
    let items = document.getElementById("list").children;
    for (let i = 0; i < items.length; i++) {
        if (items[i].className === 'done') {
            items[i].style.display = 'list-item';
        } else {
            items[i].style.display = 'none';
        }
    }
}