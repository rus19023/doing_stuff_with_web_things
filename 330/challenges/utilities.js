// Create new to do task

const createItem = () => {
    // get last itemId from localStorage
    const itemId = localStorage.getItem(lastItemId);
    // get text from input
    const itemText = document.getElementById("addinput").value;
    // create new task
    const item = document.createElement('li');
    item.setAttribute('id', `item${itemId}`);
    // create checkbox for mark done
    const markbtn = document.createElement("input");
    markbtn.setAttribute("type", "checkbox");
    markbtn.setAttribute("class", "markbtn");
    markbtn.setAttribute("ontouchend", "markDone()");
    // add text to task line item
    const itemtext = document.textNode("textNode", itemText);
    // create delete button
    const delbtn = document.createElement("button");
    delbtn.setAttribute("ontouchend", "removeItem()");
    delbtn.setAttribute("class", "delbtn");
    // build item list for html file
    item.appendChild(markbtn);
    item.appendChild(itemtext);
    item.appendChild(delbtn);
    document.getElementById("list").appendChild(item);
    // increment item id
    itemId++;
    // save item id to localStorage
    localStorage.setItem(lastItemId, itemId);
    return item;
}

// View to do list items


// Mark item done
const markDone = (id) => {

}

// Delete to do item
const removeItem = (id) => {
    // TODO: make this work
    console.log(`removeItem: ${id}`);
}

// Filter list by done/not done
