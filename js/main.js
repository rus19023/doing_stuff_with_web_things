// Week 01

function fileExists(url)
{
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status!=404;
}

function createMenu() {
  // create link list container element
  const container = document.getElementById("container");
  // create link list element
  let ol = "<ol>";
  // calculate which week we are on
  // set first date of term
  let termdate = new Date(2022, 0, 1, 0, 59, 0);
  // set today's date
  let today = new Date();
  // calculate number of milliseconds per week
  let secondsPerWeek = (1000 * 60 * 60 * 24 * 7);
  // calculate difference between today and term date in weeks
  let seconds = today.getTime() - termdate.getTime();
  // add 1 to weeks to account for rounding down
  let weekno = Math.floor(seconds / secondsPerWeek) + 1;
  let baseurl = "https://rus19023.github.io/myportfolio/";
  //let baseurl = "/";
  console.log(`termdate: ${termdate}`);
  console.log(`today: ${today}`);
  console.log(`seconds: ${seconds}`);
  console.log(`secondsPerWeek: ${secondsPerWeek}`);
  console.log(`weekno: ${weekno}`);
  // get list of files to create links for each weekno
  for (let i = 1; i <= weekno; i++) {
    //let folderString = `/${folder}${i}/${file}`;
    //let folderString = `${baseurl}${folder}${i}/${file}`;
    let n1 = `${baseurl}week${i}/`;
    let e1 = `${baseurl}exercises/exercise${i}.html`;
    let c1 = `${baseurl}challenges/challenge${i}.html`;
    //console.log(`folderString: ${folderString}`);
    console.log(`e1: ${e1}`);
    console.log(`c1: ${c1}`);
    ol += `<li><a href="${n1}">Week ${i} Notes</a></li>`;
    console.log(`container: ${container.innerHTML}`);
    if (fileExists(e1)) {
      ol +=  `<li><a href="${e1}">Exercise ${i}</a></li>`;
    }
    if (fileExists(c1)) {
      ol +=  `<li><a href="${c1}">Challenge ${i}</a></li>`;
    }
  }
  ol += "</ol>";
  container.innerHTML = ol;
  console.log(`container: ${container.innerHTML}`);
}
createMenu();


// Exercises

function loadStory() {
  var storyName = document.getElementById("name_input").value
  var storyHTML = localStorage.getItem(storyName)
  document.getElementById("story_editor").value = storyHTML
}

function saveStory() {
  var storyName = document.getElementById("name_input").value
  var storyHTML = document.getElementById("story_editor").value
  localStorage.setItem(storyName,storyHTML)
}

function displayStory() {
  var storyHTML = document.getElementById("story_editor").value
  document.getElementById("story_display").innerHTML = storyHTML
}

function reverseNumber() {
  var number = document.getElementById("number_input").value;
  document.getElementById("reverse_output").innerHTML = "Number reversed: " + number.split("").reverse().join("");
}