const navlist = [
  {
      "name": "Week 01 Notes",
      "url": "week1/ "
  },
  {
      "name": "Week 01 Exercises",
      "url": "exercises/exercise1.html"
  },
  {
      "name": "Week 02 Notes",
      "url": "week2/"
  },
  {
      "name": "Week 02 Exercises",
      "url": "exercises/exercise2.html"
  },
  {
      "name": "Week 05 Challenge 1",
      "url": "challenges/challenge5.html"
  }
]


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

/*

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
createMenu();
*/