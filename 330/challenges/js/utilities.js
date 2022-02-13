// 1. Create DOM manipulation helper functions in utilities.js
//Two here for starters should be good as well...may add more later
// do a querySelector lookup @param {string} selector The selector passed to querySelector

// @return {element} The matching element or null if not found /
const qs = selector => {
    return document.querySelector(selector);
}

/*
add a touchend event listener to an element for mobile with a click event fallback for desktops @param {string} elementSelector The selector for the element to attach the listener to
* @param {function} callback The callback function to run
*/

function onTouch(elementSelector, callback) {
    const element = qs(elementSelector);
    //console.log(`element.addEventListener, ${element.addeventlistener}`);
    if (element.addEventListener) {
        element.addEventListener('touchend', callback, false);
    } else if (element.attachEvent) {
        element.attachEvent('click', callback);
    }
}

function createLMNT(LMNT, LMNTtype, LMNTid, LMNTtext, LMNTclass) {
    let lmnt = document.createElement(LMNT);
    lmnt.setAttribute('type', LMNTtype);
    lmnt.setAttribute('id', LMNTid);
    lmnt.innerText = LMNTtext;
    lmnt.setAttribute('class', LMNTclass);
    return lmnt;
}

// Delete to do item
const removeItem = (key) => {
    // TODO: use ls utility to remove item from localStorage
    console.log(`removeItem: ${key}`);
    ls.removeFromLS(id);
}
export { qs, onTouch, createLMNT, removeItem };