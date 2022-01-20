// set page title for WDD330 weekly pages
if (isElement("wdd330pagetitle") && (substr(0, 4, getFilename()) === "week")) {
  document.getElementById("wdd330pagetitle").innerHTML = `WDD330 - Web Frontend II | Week ${getWeeknum(getFilename())}`;
}

function setNav(term, code, name, tech) {
  // set nav for CIT327 index page
  if (isElement("mainNav") && (getFilename() === "index.html")) {
    if (tech.length > 0) {
      let techContent = "(" + tech + ")";
    } else {
      let techContent = "";
    }
    let techContent = "";
    let navContent = `<ul><li><a href="${getBase()}">${term}, ${code} - ${name} ${techContent} </a></li></ul>`;
    document.getElementById("mainNav").innerHTML = navContent;
  }
}
//setNav ("Winter 2022", "CIT327", "Data Warehousing", "");
//setNav ("Winter 2022", "WDD330", "Web Frontend II", "HTML, CSS, JavaScript");

// set weekly page title for CIT327
getWeekPageTitle("cit327weekpagetitle", "My CIT327 Portfolio ");

// set weekly page title for WDD330
getWeekPageTitle("wdd330weekpagetitle", "My WDD330 Portfolio ");

function getIndexPageTitle(element, coursecode) {
  // set head and page title for index pages
  if (isElement(`${element}`)) {
    document.querySelector(`#${element}`).innerHTML = `My ${coursecode} Portfolio `;
    document.querySelector(`.${element}`).innerHTML = `My ${coursecode} Portfolio `;
  }
}
getIndexPageTitle("cit327pagetitle", "CIT327");
getIndexPageTitle("wdd330pagetitle", "WDD330");

function getWeekPageTitle(element, page) {
  let weekNo = getWeeknum(getFilename());
  // set page title for weekly pages
  if (isElement(`${element}`)) {
    let pageTitle = `${page} | Week ${weekNo}`;
    document.querySelector(`#${element}`).innerHTML = pageTitle;
    document.querySelector(`.${element}`).innerHTML = pageTitle;
  }
}

function isElement(element) { // check if element exists
  const myelement = document.getElementById(element);
  if (typeof(myelement) != 'undefined' && myelement != null) {
    return myelement.nodeType === 1;
  }
}

function setTitle(course) {
  if (isElement(course)) {
    let title = document.getElementById(course).innerHTML;
    document.getElementById(course).innerHTML = title;
  }
}

function getBase() {
  //return window.location.href.replace(/\/[^\/]*$/, '/');
  var href = location.href; //returns the entire url
  var host = location.hostname; //returns just the hostname of the url
  console.log(`href: ${location.href}`);
  //console.log(`host: ${location.hostname}`);
  return location.href;
}

function getWeeknum(filenamee) {
	//console.log(`filenamee: ${filenamee}`);
	let weekno = "";
	console.log(`filenamee: ${filenamee}`);
	if (filenamee.substr(0, 4) === "week") {
		weekno = filenamee.substr(4, 2);
		console.log(`weekno: ${weekno}`);
	}
	return weekno;
}
// let page1 = "wk01.html";
// getWeeknum(page1);

function getFilename() {
  var path = window.location.pathname;
  var page = path.split("/").pop();
  //console.log(path);
  //console.log(page);
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
    // console.log(`termdate: ${termdate}`);
    // console.log(`today: ${today}`);
    // console.log(`seconds: ${seconds}`);
    // console.log(`secondsPerWeek: ${secondsPerWeek}`);
    // console.log(`weeknumber: ${weeknumber}`);
    // return week number
    return weeknumber;
}

// set footer
if (isElement("footerclass")) {
  document.getElementById("footerclass").innerHTML = "&copy; 2019-2022 | Doris Rush-Lopez, BYU-Idaho Candidate for Bachelor of Science in Applied Technology";
  //console.log("footer exists");
}

const base = getBase();
//console.log(`base: ${base}`);
const cit327title = setTitle("cit327pagetitle");

const page = getFilename();
//console.log(`page: ${page}`);
const weeknum = getWeeknum(page);

if (isElement("filename")) {
  document.getElementById("filename").innerHTML = getWeeknum(page);
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
  localStorage.setItem(storyName,storyHTML);
}

function showStory() {
  let storyHTML = document.getElementById("story_editor").value;
  document.getElementById("story_show").innerHTML = storyHTML;
}

function reverseNumber() {
  var number = document.getElementById("number_input").value;
  console.log(`number: ${number}`);
  let rnumber = "Number reversed: " + number.split("").reverse().join("");
  console.log(`rnumber: ${rnumber}`);
  document.getElementById("reverse_output").innerHTML = rnumber;
}

// Week 02

function loopingTriangle() {
    var base = '#';
    var triangle = '#';
    for (let i = 0; i < 7; i++) {
      base += '#';
      triangle += '\n' + base;
    }
    document.getElementById("triangle_output").innerHTML = base;
}