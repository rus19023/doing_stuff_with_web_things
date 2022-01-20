const mainNav = [,
  {
    url: `${getBase()}101/`,
    term: "Fall 2019",
    code: "CIT101",
    name: "Intro to Programming",
    tech: "Python"
  },
  {
    url: `${getBase()}327/`,
    term: "Winter 2022",
    code: "CIT327",
    name: "Data Warehousing",
    tech: "MySQl, "
  },
  {
    url: `${getBase()}330/`,
    term: "Winter 2022",
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
  },
  {
    name: "",
    url: ""
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
    name: "Week 05 Challenge 1",
    url: `${getBase()}challenges/challenge1.html`,
  },
  {
    name: "",
    url: ""
  }
];

const paperslist = [
  {
    name: "Week 01: Data Mart vs. Data Warehouse",
    url: `${getBase()}week01.html`,
  },
  {
    name: "Week 02: Kimball and Inmon Methodologies",
    url: `${getBase()}week02.html`,
  },
  {
    name: "Week 03: ETL Processes",
    url: `${getBase()}week03.html`,
  },
  {
    name: "Week 04: Data Warehouse Granularity",
    url: `${getBase()}week04.html`,
  },
  {
    name: "Week 05: ERD Model",
    url: `${getBase()}week05.html`,
  },
  {
    name: "Week 06: Cassandra, Map Reduce, and CSQL",
    url: `${getBase()}week06.html`,
  },
  {
    name: "Week 07: Vertical vs. Horizontal Scale",
    url: `${getBase()}week07.html`,
  },
  {
    name: "Week 08: MongoDB",
    url: `${getBase()}week08.html`,
  },
  {
    name: "Week 09: Schemaless Collections in MongoDB",
    url: `${getBase()}week09.html`,
  },
  {
    name: "Week 10: XSLT with XML Documents",
    url: `${getBase()}week10.html`,
  },
  {
    name: "Week 11: XQuery",
    url: `${getBase()}week11.html`,
  },
  {
    name: "Week 12: Final Paper - Outline",
    url: `${getBase()}week12.html`,
  },
  {
    name: "Week 13: Final Paper - Draft",
    url: `${getBase()}week13.html`,
  },
  {
    name: "Week 14, Final Paper: MEAN Stack Integration into the Data Warehouse",
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

function createNavItem(array) {
  console.log(`createNavItem: ${array}`);
}

function createNav(array, id) {
  // create link list container element
  // console.log(`createNav: ${id}`);
  // console.log(`isElement ${id}: ${isElement(id)}`);
  if (isElement(id)) {
    const container = document.getElementById(id);
    // create link list element
    let menu = "<ol>";
    // get list of files to create links for each week number
    array.forEach((element) => {
      let len = element.url.length;
      console.log(`element.url.len: ${len}`);
      if ((!urlExists(element.url)) && (len < 100)) {
        console.log(`element.url: ${element.url} is not found`);
        return;
      } else {
        if ((element.term) && (element.term.length > 0)) {
          menu += `<li><a href="${element.url}">${element.term}, ${element.code} - ${element.name}, (${element.tech})</a></li>`;
        } else {
          menu += `<li><a href="${element.url}">${element.name}</a></li>`;
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
    if (urlExists(e1)) {
      ol += `<li><a href="${e1}">Exercise ${i}</a></li>`;
    }
    if (urlExists(c1)) {
      ol += `<li><a href="${c1}">Challenge ${i}</a></li>`;
    }
  }
  ol += "</ol>";
  container.innerHTML = ol;
  console.log(`container: ${container.innerHTML}`);
}
createMenu();
*/