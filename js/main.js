
import { isElement } from './utilities.js';
import { } from "./menu.js";
import { } from "./lists.js";




if (isElement("filename")) {
    document.getElementById("filename").innerText = getWeeknum(page);
}

// Week 01

function loadStory() {
    let storyName = document.getElementById("name_input").value;
    let storyHTML = localStorage.getItem(storyName);
    document.getElementById("story_editor").value = storyHTML;
}

function saveStory() {
    let storyName = document.getElementById("name_input").value;
    let storyHTML = document.getElementById("story_editor").value;
    localStorage.setItem(storyName, storyHTML);
}

function showStory() {
    let storyHTML = document.getElementById("story_editor").value;
    document.getElementById("story_show").innerText = storyHTML;
}

function reverseNumber() {
    var number = document.getElementById("number_input").value;
    // console.log(`number: ${number}`);
    let rnumber = "Number reversed: " + number.split("").reverse().join("");
    document.getElementById("reverse_output").innerText = rnumber;
}

// Week 02

function loopingTriangle() {
    var base = "#";
    var triangle = "#";
    for (let i = 0; i < 7; i++) {
        base += "#";
        triangle += "\n" + base;
    }
    document.getElementById("triangle_output").innerText = base;
}
