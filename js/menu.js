const navlist = [
    {
        "name": "Week 01 Notes",
        "url": "week01/ "
    },
    {
        "name": "Week 01 Exercises",
        "url": "exercises/exercise1.html"
    },
    {
        "name": "Week 02 Notes",
        "url": "week02/"
    },
    {
        "name": "Week 02 Exercises",
        "url": "exercises/exercise2.html"
    },
    {
        "name": "Week 02 Challenges",
        "url": "challenges/challenge2.html"
    }
]

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

function createMenu() {
  // create link list container element
  const container = document.getElementById("container");
  // create link list element
  let ol = "<ol>";
  let baseurl = "https://rus19023.github.io/myportfolio/";
  //let baseurl = "/";
  // get list of files to create links for each week number
  let weekno = weeknumber();
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
      ol += `<li><a href="${e1}">Exercise ${i}</a></li>`;
    }
    if (fileExists(c1)) {
      ol += `<li><a href="${c1}">Challenge ${i}</a></li>`;
    }
  }
  ol += "</ol>";
  container.innerHTML = ol;
  console.log(`container: ${container.innerHTML}`);
}

function createNav(array) {
    // create link list container element
    const container = document.getElementById("container");
    // create link list element
    let ol = "<ol>";
    //let baseurl = "https://rus19023.github.io/myportfolio/";
    let baseurl = "/";
    // get list of files to create links for each week number
    array.forEach(element => {
        ol += `<li><a href="${baseurl}${element.url}">${element.name}</a></li>`;
    });
    ol += "</ol>";
    container.innerHTML = ol;
}
createNav(navlist);
//createMenu();