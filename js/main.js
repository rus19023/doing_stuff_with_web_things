// functions

function getIndexPageTitle(element, page) {
  let weekNo = getWeeknumber();
  // set head and page title for index pages
  if (isElement(`${element}`)) {
    let pageTitle = `${page} | Week ${weekNo}`;
    let headTitle = document.querySelector(`#${element}`);
    console.log(`headTitle: ${headTitle}`);
    let pageHeader = document.querySelector(`.${element}`);
    console.log(`pageHeader: ${pageHeader}`);
    headTitle.innerHTML = pageTitle;
    pageHeader.innerHTML = pageTitle;
  }
}

function getWeekPageTitle(element, page) {
  let weekNo = getWeeknum(getFilename());
  // set page title for CIT327 weekly notes page
  if (isElement(`${element}`)) {
    let pageTitle = `${page} | Week ${weekNo}`;
    document.querySelector(`#${element}`).innerHTML = pageTitle;
    document.querySelector(`.${element}`).innerHTML = pageTitle;
  }
}

function isElement(element) { // check if element exists
  document.getElementById(element);
  if (typeof(element) != 'undefined' && element != null) {
    return element.nodeType === 1;
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
  console.log(`href: ${href}`);
  console.log(`host: ${host}`);
  if ((host === "127.0.0.1") || (host === "localhost")) {  // development
    var baseurl = "/";
  } else {  // production
    var baseurl = "/myportfolio/";
  }
  return baseurl;
}

function getWeeknum(filenamee) {
	console.log(`filenamee: ${filenamee}`);
	let weekno = "";
	let weeek = "no";
	console.log(`filenamee: ${filenamee}`);
	weeek = filenamee.substr(0, 1);
	if (weeek === "wk") {
		weekno = filenamee.substr(2, 4);
		console.log(`weekno: ${weekno}`);
	}
	return weekno;
}
let page1 = "wk01.html";
getWeeknum(page1);

function getFilename() {
  var path = window.location.pathname;
  var page = path.split("/").pop();
  console.log(page);
  return page;
}

function fileExists(url) {
  var http = new XMLHttpRequest();
  http.open("HEAD", url, false);
  http.send();
  return http.status != 404;
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
    console.log(`termdate: ${termdate}`);
    console.log(`today: ${today}`);
    console.log(`seconds: ${seconds}`);
    console.log(`secondsPerWeek: ${secondsPerWeek}`);
    console.log(`weeknumber: ${weeknumber}`);
    // return week number
    return weeknumber;
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