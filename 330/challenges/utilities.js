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

}

// Delete to do item
const removeItem = (id) => {
    // TODO: make this work
    console.log(`removeItem: ${id}`);
}

// Filter list by done/not done, show outline border of button when tapped/clicked

// function to show how many items are left undone in the to do   list
function itemsLeft(id) {
    let items = document.getElementById("list").children.length;
    if ((items < 2) && (items > 0)) {
    document.getElementById(id).innerText = items + ' task left';
    } else {
    document.getElementById(id).innerText = items + ' tasks left';
    }
}
itemsLeft('tasks');
