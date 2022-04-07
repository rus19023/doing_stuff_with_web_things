const getBase = () => {
    //return window.location.href.replace(/\/[^\/]*$/, '/');
    var href = location.href; //returns the entire url
    var host = location.hostname; //returns just the hostname of the url
    //console.log(href);
    return location.href;
}

const getCbase = () => {
    return `${location.href}courses/`;
}

function weeknumber() {
    // calculate which week we are on
    // set first date of term
    let termdate = new Date(2022, 0, 1, 0, 59, 0);
    // set today's date
    let today = new Date();
    // calculate number of milliseconds per week
    let secondsPerWeek = 1000 * 60 * 60 * 24 * 7;
    // calculate difference between today and term date in weeks
    let seconds = today.getTime() - termdate.getTime();
    // add 1 to weeks to account for rounding down
    let weeknumber = Math.floor(seconds / secondsPerWeek) + 1;
    return weeknumber;
}

const cleanInput = (input) => {
    console.log(input);
    // todo: strip out and/or replace and/or escape any offensive parts of the input
    // trim and escape the input
    let cleaned = input.trim().replace(/\/[^\/]*$/, "/");
    console.log(cleaned);
}

const writeById = (output, input) => {
    qs(`#${output}`).innerHTML = input;
}

const writeByClass = (output, input) => {
    qs(`.${output}`).innerHTML = input;
}

const createLink = (url, text) => {
    return '<a href="' + url + '">' + text + '</a>';
};

const getFilename = () => {
    var path = window.location.pathname;
    var page = path.split("/").pop();
    //console.log(page);
    return page;
}

const urlExists = (url) => {
    if (url.includes(getBase())) {
        var http = new XMLHttpRequest();
        http.open("HEAD", url, false);
        //http.send();
        return http.status != 404;
    }
}

// @return {element} The matching element or null if not found /
const qs = (selector) => {
    return document.querySelector(selector);
};

// @return {element} The matching element or null if not found /
const qsAll = (selector) => {
    return document.querySelectorAll(selector);
};

const isElement = (element) => {
    // check if id exists
    const myId = qs(`#${element}`);
    if (typeof myId != "undefined" && myId != null) {
        return myId.nodeType === 1;
    }
}

const isClass = (element) => {
    // check if class exists
    const myClass = qs(`.${element}`);
    if (typeof myClass != "undefined" && myClass != null) {
        return myClass.nodeType === 1;
    }
}

function createLMNT(LMNT, type, id, text, classes, html) {
    let lmnt = document.createElement(LMNT);
    if (type) {
        lmnt.setAttribute('type', type);
    }
    if (id) {
        lmnt.setAttribute('id', id);
    }
    if (text) {
        lmnt.innerText = text;
    }
    if (classes) {
        lmnt.setAttribute('class', classes);
    }
    if (html) {
        lmnt.innerHTML = html;
    }
    console.log(lmnt);
    return lmnt;
}

function appendLMNT(node, append1, append2, append3, append4, append5) {
    node.appendChild(append1);
    if (append1) {
        node.appendChild(append1);
    }
    if (append2) {
        node.appendChild(append2);
    }
    if (append3) {
        node.appendChild(append3);
    }
    if (append4) {
        node.appendChild(append4);
    }
    if (append5) {
        node.appendChild(append5);
    }
    console.log(node);
    return node;
}

function appendNestLMNT(node, append1, append2, append3, append4, append5) {
    if (append5) {
        append4.appendChild(append5);
    }
    if (append4) {
        append3.appendChild(append4);
    }
    if (append3) {
        append2.appendChild(append3);
    }
    if (append2) {
        append1.appendChild(append2);
    }
    node.appendChild(append1);
    console.log(node);
    return node;
}



  export { isClass, isElement, getBase, getCbase, getFilename, writeByClass, writeById, cleanInput, createLink, urlExists, qs, qsAll, createLMNT, appendNestLMNT, appendLMNT, weeknumber };