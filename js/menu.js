const mainNav = [
  {
    url: `${getBase()}101/`,
    term: "2019 04-Fall",
    code: "CS101",
    name: "Intro to Programming",
    tech: "Python"
  },
  {
    url: `${getBase()}327/`,
    term: "2022 01-Winter",
    code: "CIT327",
    name: "Data Warehousing",
    tech: "MySQL, ETL, MongoDB"
  },
  {
    url: `${getBase()}330/`,
    term: "2022 01-Winter",
    code: "WDD330",
    name: "Web Frontend Development II",
    tech: "HTML/CSS/JavaScript"
  }
];

const noteslist = [
  {
    name: "Week 01 Notes",
    url: `${getBase()}week01.html`,
  },
  {
    name: "Week 02 Notes",
    url: `${getBase()}week02.html`,
  },
  {
    name: "Week 03 Notes",
    url: `${getBase()}week03.html`,
  }
];

const exerciseslist = [
  {
    name: "Week 01 Exercises",
    url: `${getBase()}exercises/week01.html`,
  },
  {
    name: "Week 02 Exercises",
    url: `${getBase()}exercises/week02.html`,
  },
  {
    name: "Week 03 Exercises",
    url: `${getBase()}exercises/week03.html`,
  },
  {
    name: "Week 04 Exercises",
    url: `${getBase()}exercises/week04.html`,
  },
  {
    name: "Week 05 Challenge 1: To Do App",
    url: `${getBase()}challenges/week05.html`,
  }
];

const paperslist = [
  {
    name: "Data Mart vs. Data Warehouse",
    url: `${getBase()}week01.html`,
  },
  {
    name: "Kimball and Inmon Methodologies",
    url: `${getBase()}week02.html`,
  },
  {
    name: "ETL Processes",
    url: `${getBase()}week03.html`,
  },
  {
    name: "Data Warehouse Granularity",
    url: `${getBase()}week04.html`,
  },
  {
    name: "ERD Model",
    url: `${getBase()}week05.html`,
  },
  {
    name: "Cassandra, Map Reduce, and CSQL",
    url: `${getBase()}week06.html`,
  },
  {
    name: "Vertical vs. Horizontal Scale",
    url: `${getBase()}week07.html`,
  },
  {
    name: "MongoDB",
    url: `${getBase()}week08.html`,
  },
  {
    name: "Schemaless Collections in MongoDB",
    url: `${getBase()}week09.html`,
  },
  {
    name: "XSLT with XML Documents",
    url: `${getBase()}week10.html`,
  },
  {
    name: "XQuery",
    url: `${getBase()}week11.html`,
  },
  {
    name: "MEAN Stack Integration into the Data Warehouse - Outline",
    url: `${getBase()}week12.html`,
  },
  {
    name: "MEAN Stack Integration into the Data Warehouse - Draft",
    url: `${getBase()}week13.html`,
  },
  {
    name: "MEAN Stack Integration into the Data Warehouse",
    url: `${getBase()}week14.html`,
  },
  {
    name: "",
    url: ""
  }
];

const presentations = [
  {
    name: "Week 01: Data Analysis: Data Marts and Warehouses",
    url: "https://docs.google.com/presentation/d/15pcCC7TgYBYADt-GCUH3Z2PBmvRGabU173_DxFrfDTM/edit#slide=id.g65a5c374d8_0_208",
  },
  {
    name: "Week 02: Data Models, Methodologies and Analysis",
    url: "https://docs.google.com/presentation/d/e/2PACX-1vSmsQEfdjs7kauZoXWd4oqFNkwVR6ykmo83GPylSiWiKAH-arkbtY6u66kazQhtrDRZ8ItA5GC1fPOc/pub?start=true&loop=false&delayms=30000",
  },
  {
    name: "template",
    url: "template.html"
  }
];


// Functions

const siteTitle = (element) => {
  // set header
  if (isElement("autoheader")) {
      writeById("autoheader", `<h1 id="siteTitle2">Doris Rush-Lopez - My BYU-Idaho Portfolio | Major: Applied Technology</h1><h2 class="tabbar">${createLink("../", "Back to Index")}</h2>`);
  }
}
siteTitle("siteTitle");

// set footer
if (isElement("autofooter")) {
  writeById("autofooter", "&copy; 2019-2022 | Doris Rush-Lopez, BYU-Idaho Candidate for Bachelor of Science in Applied Technology");
}

function getIndexPageTitle(id) {
  if (isElement(id)) {
    const array = mainNav;
    let spot;
    let title;
    // get paper title from menu array where filename is the week number
    array.forEach(element => {
      spot = id.indexOf("-");
      console.log(`element: ${element.code}`);
      console.log(`spot: ${spot}`);
      console.log('element.code: ' + element.code.toLowerCase() === id.substr(0, spot));
      if ((element.code.toLowerCase() === id.substr(0, spot)) && (isElement(id)) && (isElement(`${id}`))) {
        title = `${element.code} - ${element.name} (${element.tech})`;
        //console.log(`title: ${title}`);
        writeById(id, title);
        let id2 = `${id}2`;
        writeById(id2, title);
      }
    });
  }
}
getIndexPageTitle("cs101-indexpagetitle");
getIndexPageTitle("cit327-indexpagetitle");
getIndexPageTitle("wdd330-indexpagetitle");


// set page title for WDD330 weekly pages
const header330 = `WDD330 - Web Frontend II | Week ${ getWeeknum(getFilename()) }`;
if (isElement("wdd330pagetitle") && substr(0, 4, getFilename()) === "week") {
  document.getElementById("wdd330pagetitle").innerText = header330;
}


function setTitle(course) {
  if (isElement(course)) {
    writeById(course, `My ${course} Portfolio`);
  }
}

function getWeekPageTitle(id, page) {
  let weekNo = getWeeknum(getFilename());
  // set page title for weekly pages
  if (isElement(id)) {
    let pageTitle = `${page} | Week ${weekNo}`;
    console.log(`pageTitle: ${pageTitle}`);
    writeById(id, pageTitle);
  }
}
getWeekPageTitle("cs101weekpagetitle", "CS101");
getWeekPageTitle("cit327weekpagetitle", "CIT327 Paper");
getWeekPageTitle("wdd330weekpagetitle", "WDD330 Notes");
getWeekPageTitle("wdd330weekexercisetitle", "Exercises");
getWeekPageTitle("wdd330weekexercisetitle2", "Exercises");
getWeekPageTitle("wdd330challengetitle", "Challenges");
getWeekPageTitle("wdd330challengetitle2", "Challenges");
getWeekPageTitle("wdd330weekpageheading", "WDD330 Notes");

function getWeekPaperTitle(array) {
  let weekFile = `week${getWeeknum(getFilename())}`;
  // get paper title from menu array where filename is the week number
  array.forEach(element => {
    if ((element.url.substr(-11, 6) === weekFile) && (isElement("paperTitle"))) {
      document.getElementById("paperTitle").innerText = element.name;
      return;
    }
  });
}
getWeekPaperTitle(paperslist);

function createNav(array, id) {
  // create link list container element
  if (isElement(id)) {
    const container = document.getElementById(id);
    // create link list element
    let menu = "<ol>";
    // get list of files to create links for each week number
    array.forEach((element) => {
      if ((!urlExists(element.url)) && (element.url.length < 100)) {
        return;
      } else {
        if ((element.term) && (element.term.length > 0)) {
          const url = element.url;
          const linktext = `${element.term}, ${element.code} - ${element.name}, (${element.tech})`;
          menu += `<li>${createLink(url, linktext)}</li>`;
        } else {
          menu += `<li>${createLink(element.url, element.name)}</li>`;
        }
      }
    });
    menu += "</ol>";
    container.innerHTML = menu;
    return;
  }
}
createNav(mainNav, "main-nav");
createNav(noteslist, "notes");
createNav(exerciseslist, "exercises");
createNav(paperslist, "papers");
createNav(presentations, "presentations");