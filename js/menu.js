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

const siteTitle = () => {
  document.getElementById("siteTitle").innerText = "Doris Rush-Lopez, My BYU-Idaho Applied Tech Portfolio";
}

function createNavItem(array) {
  console.log(`createNavItem: ${array}`);
}

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
      let len = element.url.length;
      if ((!urlExists(element.url)) && (len < 100)) {
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