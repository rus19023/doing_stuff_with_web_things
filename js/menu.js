// set page title for WDD330 index page
if (isElement("wdd330pagetitle") && (getFilename() === "index.html")) {
  document.getElementById("wdd330pagetitle").innerHTML = `My WDD330 Portfolio: BYU-Idaho, Winter 2022, WDD330 - Web Frontend II | Week ${getWeeknum(getFilename())}`;
}

// set nav for CIT327 index page
if (isElement("cit327nav") && (getFilename() === "index.html")) {
  let nav = document.getElementById("cit327nav");
  let navContent = `<ul></ul>`;
  document.getElementById("nav").innerHTML = `My CIT327 Portfolio | Paper: Week${getWeeknum(getFilename())}`;
}

// set page title for CIT327 index page
if (isElement("cit327pagetitle") && (getFilename() === "index.html")) {
  document.getElementById("cit327pagetitle").innerHTML = `My CIT327 Portfolio | Paper: Week${getWeeknum(getFilename())}`;
}

// set weekly page title for CIT327
getWeekPageTitle("cit327weekpagetitle", "My CIT327 Papers");

// set weekly page title for WDD330
getWeekPageTitle("wdd330weekpagetitle", "My WDD330 Notes");

// set page title for CIT327 index page
if (isElement("cit327pagetitle") && (getFilename() === "index.html")) {
  document.getElementById("cit327pagetitle").innerHTML = `My CIT327 Portfolio | Paper: Week${getWeeknum(getFilename())}`;
}

const noteslist = [
  {
      "name": "Week 01 Notes",
      "url": "week1/ "
  },
  {
      "name": "Week 02 Notes",
      "url": "week2/"
  }
]

const exerciseslist = [
  {
      "name": "Week 01 Exercises",
      "url": "exercises/exercise1.html"
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

const paperslist = [
  {
    name: "Week 01 Paper: Data Mart vs. Data Warehouse",
    url: "cit327/week01.html"
  },
  {
    name: "Week 01 Presentation: Data Analysis: Data Marts and Warehouses",
    url: "cit327/week01.html"
  },
  {
    name: "Week 02: Kimball and Inmon Methodologies",
    url: "cit327/week02.html"
  },
  {
    name: "Week 02 Presentation: Kimball and Inmon Methodologies",
    url: "cit327/"
  },
  {
    name: "Week 03: ETL Processes",
    url: "cit327/week03.html"
  },
  {
    name: "Week 04: Data Warehouse Granularity",
    url: "cit327/week04.html"
  },
  {
    name: "Week 05: ERD Model",
    url: "cit327/week05.html"
  },
  {
    name: "Week 06: Cassandra, Map Reduce, and CSQL",
    url: "cit327/week06.html"
  },
  {
    name: "Week 07: Vertical vs. Horizontal Scale",
    url: "cit327/week07.html",
  },
  {
    name: "Week 08: MongoDB",
    url: "cit327/week08.html"
  },
  {
    name: "Week 09: Schemaless Collections in MongoDB",
    url: "cit327/week09.html"
  },
  {
    name: "Week 10: XSLT with XML Documents",
    url: "cit327/week10.html"
  },
  {
    name: "Week 11: XQuery",
    url: "cit327/week11.html"
  },
  {
    name: "Week 12: Final Paper - Outline",
    url: "cit327/week12.html"
  },
  {
    name: "Week 13: Final Paper - Draft",
    url: "cit327/week13.html"
  },
  {
    name: "Week 14, Final Paper: MEAN Stack Integration into the Data Warehouse",
    url: "cit327/week14.html"
  }
];

const presentationslist = [
  {
    name: "Week 01: Data Analysis: Data Marts and Warehouses",
    url: "https://docs.google.com/presentation/d/15pcCC7TgYBYADt-GCUH3Z2PBmvRGabU173_DxFrfDTM/edit#slide=id.g65a5c374d8_0_208"
  },
  {
    name: "Week 02: Kimball Method and Inmon Method",
    url: ""
  }
]

// set footer
if (isElement("footer")) {
  document.getElementById("footer").innerHTML = "&copy; 2019-2022 | Doris Rush-Lopez, Candidate for Bachelor of Science in Applied Technology at BYU-Idaho";
  console.log("footer exists");
}

const base = getBase();
console.log(`base: ${base}`);
const cit327title = setTitle("cit327pagetitle");

const page = getFilename();
console.log(`page: ${page}`);
const weeknum = getWeeknum(page);

if (isElement("filename")) {
  document.getElementById("filename").innerHTML = getWeeknum(page);
}

function createNav(array, id) {
  // create link list container element
  const container = document.getElementById(id);
  // create link list element
  let ol = "<ol>";
  let baseurl = "https://rus19023.github.io/myportfolio/";
  //let baseurl = "/";
  // get list of files to create links for each week number
  array.forEach(element => {
    let fullurl = baseurl + element.url;
    if (!fileExists(fullurl)) {
      return;
    } else {
      ol += `<li><a href="${fullurl}">${element.name}</a></li>`;
    }
  });
  ol += "</ol>";
  container.innerHTML = ol;
}
createNav(noteslist, "notes");
createNav(exerciseslist, "exercises");
createNav(paperslist, "papers");
createNav(presentationslist, "presentations");



/*

function createMenu() {
  // create link list container element
  const container = document.getElementById("container");
  // create link list element
  let ol = "<ol>";
  let baseurl = "getBase()";
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