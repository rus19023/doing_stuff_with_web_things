// Week 01

function fileExists(url)
{
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status!=404;
}

// create link list element
const container = document.getElementById("container");
let ol = "<ol>";
let termdate = new Date(2022, 0, 1, 0, 59, 0);
let today = new Date();
let secondsPerWeek = (1000 * 60 * 60 * 24 * 7);
let seconds = today.getTime() - termdate.getTime();
let weekno = Math.floor(seconds / secondsPerWeek) + 1;
//let baseurl = "https://rus19023.github.io/myportfolio/";
let baseurl = "/";
console.log(`termdate: ${termdate}`);
console.log(`today: ${today}`);
console.log(`seconds: ${seconds}`);
console.log(`secondsPerWeek: ${secondsPerWeek}`);
console.log(`weekno: ${weekno}`);
// create links list

for (let i = 1; i <= weekno; i++) {
  let n1 = `${baseurl}week${i}/`;
  let e1 = `${baseurl}exercises/exercise${i}.html`;
  let c1 = `${baseurl}challenges/challenge${i}.html`;
  console.log(`n1: ${n1}`);
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
