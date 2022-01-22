function writeById(output, input) {
  document.getElementById(output).innerText = input;
}

function writeByQuery(output, input) {
  document.querySelector(output).innerText = input;
}

// set page title for WDD330 weekly pages
const header330 = `WDD330 - Web Frontend II | Week ${getWeeknum(
  getFilename()
)}`;
if (isElement("wdd330pagetitle") && substr(0, 4, getFilename()) === "week") {
  document.getElementById("wdd330pagetitle").innerText = `WDD330 - Web Frontend II | Week ${getWeeknum(getFilename())}`;
}

function getIndexPageTitle(element, coursecode) {
  // set head and page title for index pages
  if (isElement(`${element}`)) {
    //console.log(`${element}`);
    writeByQuery(`#${element}`, `My ${coursecode} Portfolio`);
    writeByQuery(`.${element}`, `My ${coursecode} Portfolio `);
  }
}
getIndexPageTitle("cs101indexpagetitle", "CS101");
getIndexPageTitle("cit327indexpagetitle", "CIT327");
getIndexPageTitle("wdd330indexpagetitle", "WDD330");

function getWeekPageTitle(element, page) {
  let weekNo = getWeeknum(getFilename());
  // set page title for weekly pages
  if (isElement(`${element}`)) {
    let pageTitle = `${page} | Week ${weekNo}`;
    if (isElement(`#${element}`)) {
    document.querySelector(`#${element}`).innerText = pageTitle;
    }
    if (isElement(`.${element}`)) {
    document.querySelector(`.${element}`).innerText = pageTitle;
    }
  }
}
getWeekPageTitle("cs101pagetitle", "CS101");
getWeekPageTitle("cit327pagetitle", "CIT327");
getWeekPageTitle("wdd330pagetitle", "WDD330");
getWeekPageTitle("wdd330weekexercisetitle", "Exercises");

function isElement(element) {
  // check if element exists
  const myelement = document.getElementById(element);
  if (typeof myelement != "undefined" && myelement != null) {
    return myelement.nodeType === 1;
  }
}

function setTitle(course) {
  if (isElement(course)) {
    document.getElementById(course).innerText = `My ${course} Portfolio`;
  }
}

function getBase() {
  //return window.location.href.replace(/\/[^\/]*$/, '/');
  var href = location.href; //returns the entire url
  var host = location.hostname; //returns just the hostname of the url
  return location.href;
}

function getWeeknum(filenamee) {
  let weekno;
  if (filenamee.substr(0, 4) === "week") {
    weekno = filenamee.substr(4, 2);
  }
  return weekno;
}

function getFilename() {
  var path = window.location.pathname;
  var page = path.split("/").pop();
  return page;
}

function urlExists(url) {
  if (url.includes(getBase())) {
    var http = new XMLHttpRequest();
    http.open("HEAD", url, false);
    http.send();
    return http.status != 404;
  }
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

// set footer
if (isElement("autofooter")) {
  document.getElementById("autofooter").innerHTML =
    "&copy; 2019-2022 | Doris Rush-Lopez, BYU-Idaho Candidate for Bachelor of Science in Applied Technology";
}

const base = getBase();
const cit327title = setTitle("cit327pagetitle");

const page = getFilename();
const weeknum = getWeeknum(page);

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
