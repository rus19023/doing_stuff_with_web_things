document.getElementById("footer").innerHTML =
"&copy; 2019-2022 | Doris Rush-Lopez, Candidate for Bachelor of Science in Applied Technology at BYU-Idaho";

document.getElementById("wdd330pagetitle").innerHTML = `My WDD330 Portfolio: BYU-Idaho, Winter 2022, WDD330 - Web Frontend II | Week ${getWeekno()}`;

document.getElementById("cit327pagetitle").innerHTML = `My CIT327 Portfolio | Paper: Week${getWeekno()}`;

function getBase() {
  //return window.location.href.replace(/\/[^\/]*$/, '/');
  var href = location.href; //returns the entire url
  var host = location.hostname; //returns just the hostname of the url
  console.log(`href: ${href}`);
  console.log(`host: ${host}`);
  if (host == "localhost") {  // development
  var baseurl = "/";
  } else {  // production
  var baseurl = "/myportfolio/";
  }
  return baseurl;
}
const base = getBase();

function getFilename() {
  var path = window.location.pathname;
  var page = path.split("/").pop();
  console.log(page);
  return page;
}
const page = getFilename();

function getWeekno(page) {
  let weekno = "";
  let wk = page.slice(0,1);
  if (wk = "wk") {
    weekno = page.slice(2,4);
    console.log(`weekno: ${weekno}`);
  }
  return weekno;
}
const weeknum = getWeekno(page);


document.getElementById("filename").innerHTML = getWeekno();

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

function loopingTriangle() {
    var base = '#';
    var triangle = '#';
    for (let i = 0; i < 7; i++) {
      base += '#';
      triangle += '\n' + base;
    }
    document.getElementById("triangle_output").innerHTML = base;
}