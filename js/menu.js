const certs = [
  {
    cert: "01",
    certname: "Certificate: Computer Programming",
    certdate: "2020-07-22",
  },
  {
    cert: "04",
    certname: "Certificate: Databases",
    certdate: "2022-04-15 (Anticipated)",
  },
  {
    cert: "03",
    certname: "Certificate: System Administration",
    certdate: "2021-12-15",
  },
  {
    cert: "02",
    certname: "Certificate: Web Frontend Development",
    certdate: "2020-12-16",
  },
  {
    cert: "05",
    certname: "Certificate: Web Backend Development",
    certdate: "2022-07-22 (Anticipated)",
  },
  {
    cert: "06",
    certname: "Degree: Bachelor of Science in Applied Technology",
    certdate: "2024-04-22 (Anticipated)",
  },
];

const mainNav = [
  {
    url: `${getBase()}101/`,
    term: "04",
    year: "19",
    code: "CS101",
    name: "Introduction to Programming",
    tech: "Python, Trinket.io",
    instructor: "Travis Christiansen",
    cert: "01",
  },
  {
    url: `${getBase()}327/`,
    term: "01",
    year: "22",
    code: "CIT327",
    name: "Data Warehousing",
    tech: "ETL Tools, MongoDB, XQuery",
    instructor: "Troy Hiltbrand",
    cert: "04",
  },
  {
    url: `${getBase()}330/`,
    term: "01",
    year: "22",
    code: "WDD330",
    name: "Web Frontend Development II",
    tech: "HTML, CSS, JavaScript, Node.js, Express.js, Deno, MongoDB, MySQL",
    instructor: "Nathan Birch",
    cert: "05",
  },
  {
    url: `${getBase()}331/`,
    term: "04",
    year: "20",
    code: "WDD331",
    name: "Advanced CSS",
    tech: "HTML, CSS, Bootstrap, GitHub, SASS",
    instructor: "",
    cert: "02",
  },
  {
    url: `${getBase()}111/`,
    term: "04",
    year: "19",
    code: "CIT111",
    name: "Introduction to Databases",
    tech: "MySQL, MySQL Workbench",
    instructor: "Leon Tidwell",
    cert: "04",
  },
  {
    url: `${getBase()}111/`,
    term: "04",
    year: "19",
    code: "CIT111",
    name: "Introduction to Databases",
    tech: "MySQL, MySQL Workbench",
    instructor: "Leon Tidwell",
    cert: "01",
  },
  {
    url: `${getBase()}225/`,
    term: "01",
    year: "21",
    code: "CIT225",
    name: "Database Design and Development",
    tech: "MySQL CLI, MySQL Workbench",
    instructor: "Tanner Crook",
    cert: "04",
  },
  {
    url: `${getBase()}325/`,
    term: "02",
    year: "21",
    code: "CIT325",
    name: "Database Programming",
    tech: "PL/SQL, Oracle DB",
    instructor: "Kent Hinckley",
    cert: "04",
  },
  {
    url: `${getBase()}160/`,
    term: "04",
    year: "19",
    code: "CIT160",
    name: "Introduction to Programming",
    tech: "JavaScript, HTML, CSS",
    instructor: "Nathan Birch",
    cert: "01",
  },
  {
    url: `${getBase()}171/`,
    term: "01",
    year: "21",
    code: "CIT171",
    name: "Introduction to Cybersecurity",
    tech: "Cybersecurity, Social engineering, Ethical hacking",
    instructor: "David Snider",
    cert: "06",
  },
  {
    url: `${getBase()}270/`,
    term: "02",
    year: "21",
    code: "CIT270",
    name: "Systems Security I",
    tech: "System hardening, Server security, Network security, Firewalls, Ethical hacking, Linux CLI",
    instructor: "Kevin Hendricks",
    cert: "03",
  },
  {
    url: `${getBase()}352/`,
    term: "02",
    year: "21",
    code: "CIT352",
    name: "Operating Systems I",
    tech: "Linux CLI, Ubuntu Server, Ubuntu Desktop, Fedora, Bash scripting",
    instructor: "Brian King",
    cert: "03",
  },
  {
    url: `${getBase()}353/`,
    term: "04",
    year: "21",
    code: "CIT353",
    name: "Operating Systems II",
    tech: "Windows Server versions from 2008, PowerShell",
    instructor: "Craig Lindstrom",
    cert: "03",
  },
  {
    url: `${getBase()}341/`,
    term: "04",
    year: "21",
    code: "WDD341",
    name: "Web Backend Development II",
    tech: "HTML, CSS, JavaScript, Node.js, Express.js, Deno, MongoDB, MySQL, GitHub, Heroku, SASS",
    instructor: "Nathan Birch",
    cert: "05",
  },
  {
    url: `${getBase()}340/`,
    term: "04",
    year: "21",
    code: "WDD340",
    name: "Backend Development I",
    tech: "HTML, CSS, JavaScript, PHP, MySQL, MVC",
    instructor: "Bonnie Woods",
    cert: "05",
  },
  {
    url: `${getBase()}100/`,
    term: "04",
    year: "19",
    code: "WDD100",
    name: "Introduction to Web Design and Development",
    tech: "HTML, CSS",
    instructor: "Tracey Johnson",
    cert: "02",
  },
  {
    url: `${getBase()}241-2/`,
    term: "02",
    year: "21",
    code: "CIT241",
    name: "Networking Design I",
    tech: "Advanced Topics: Subnetting, Routers, Switches, Firewalls, DNS, DHCP, TCP/IP",
    instructor: "Paul Stokes",
    cert: "03",
  },
  {
    url: `${getBase()}240/`,
    term: "01",
    year: "21",
    code: "CIT240",
    name: "Networking",
    tech: "Subnetting, Routers, Switches, Firewalls,  DNS, DHCP, TCP/IP",
    instructor: "Sheila Force",
    cert: "03",
  },
  {
    url: `${getBase()}246/`,
    term: "02",
    year: "20",
    code: "CS246",
    name: "Software Design and Development",
    tech: "Java, IntelliJ, Android Studio, GitHub",
    instructor: "Dario Gonzalez-Suarez",
    cert: "01",
  },
  {
    url: `${getBase()}241/`,
    term: "01",
    year: "20",
    code: "CS241",
    name: "Survey Object-Oriented Programming/Data Structures",
    tech: "Python 3, Thonny, PyCharm, GitHub",
    instructor: "Nathan Parrish",
    cert: "01",
  },
  {
    url: `${getBase()}213/`,
    term: "02",
    year: "20",
    code: "CS213",
    name: "Web Engineering I",
    tech: "HTML, CSS, JavaScript, AJAX, JSON, GitHub, Linux CLI",
    instructor: "Jason Rice",
    cert: "02",
  },
  {
    url: `${getBase()}130/`,
    term: "04",
    year: "20",
    code: "COMM130",
    name: "Visual Media",
    tech: "Illustrator, Photoshop, InDesign",
    instructor: "Sara Tranberg",
    cert: "02",
  },
  {
    url: `${getBase()}230/`,
    term: "01",
    year: "20",
    code: "WDD230",
    name: "Web Frontend Development",
    tech: "HTML, CSS, JavaScript, GitHub",
    instructor: "Mike Odom",
    cert: "02",
  },
  {
    url: `${getBase()}260/`,
    term: "02",
    year: "22",
    code: "CIT260",
    name: "Object Oriented Programming",
    tech: "Java, Swing",
    instructor: "",
    cert: "05",
  },
  {
    url: `${getBase()}365/`,
    term: "02",
    year: "22",
    code: "WDD365",
    name: ".NET Software Development",
    tech: ".NET",
    instructor: "",
    cert: "05",
  },
  {
    url: `${getBase()}211/`,
    term: "04",
    year: "21",
    code: "GEINT211",
    name: "Global Hotspot: Pakistan",
    tech: "Social Science",
    instructor: "Annette Bybee",
    cert: "06",
  },
  {
    url: `${getBase()}/`,
    term: "0",
    year: "2",
    code: "",
    name: "",
    tech: "",
    instructor: "",
    cert: "06",
  },
  {
    url: `${getBase()}/`,
    term: "0",
    year: "2",
    code: "GEINT",
    name: "",
    tech: "",
    instructor: "",
    cert: "06",
  },
];

const list330 = [
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
    name: "Week 01 Exercises",
    url: `${getBase()}exercises/week01.html`,
  },
  {
    name: "Week 02 Exercises",
    url: `${getBase()}exercises/week02.html`,
  },
  {
    name: "Week 04 Exercises: Further work on team project - Tic Tac Toe game",
    url: `${getBase()}exercises/week04.html`,
  },
  {
    name: "Week 05 Challenge 1: To Do App",
    url: `${getBase()}challenges/week05.html`,
  },
  {
    name: "Week 06 Challenge 1: To Do App",
    url: `${getBase()}challenges/todo-app/`,
  },
  {
    name: "Week 07 Quiz Ninja",
    url: `${getBase()}exercises/ninjaquiz.html`,
  },
  {
    name: "Week 07 Exercises",
    url: `${getBase()}exercises/week07.html`,
  },
  {
    name: "Week 08 Quiz Ninja",
    url: `${getBase()}exercises/week08ninjaquiz.html`,
  },
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
    name: "ERD Model for Snowflake Schema",
    url: `${getBase()}week05.html`,
  },
  {
    name: "Cassandra, Map Reduce, and CSQL",
    url: `${getBase()}week06.html`,
  },
  {
    name: "Vertical vs. Horizontal Scaling",
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
    url: "template.html",
  },
];


// Menu Functions
//import * as lists from './menulists.js';

const siteTitle = (element) => {
  // set header
  if (isElement("autoheader")) {
      writeById("autoheader", '<h1 id="siteTitle2">Doris Rush-Lopez - My BYU-Idaho Portfolio <br>  Major: Applied Technology</h1>' + `<h2 id="tabbar">${createLink("../", "Back to Index")}</h2>`);
  }
}
siteTitle("siteTitle");

// set footer
if (isElement("autofooter")) {
  writeById("autofooter", "&copy; 2019-2022 | Doris Rush-Lopez, BYU-Idaho Candidate for Bachelor of Science in Applied Technology");
}

const footerText = footer => `Hello ${footer}`;
const footertext = footerText("Ada");

function getTerm(term) {
  switch (term) {
    case "01":
      return "Fall";
      break;
    case "02":
      return "Winter";
      break;
    case "03":
      return "Spring";
      break;
    case "04":
      return "Summer";
      break;
    default:
      return "";
  }
}

function getIndexPageTitle(id) {
  //console.table(`mainNav.sort: ${mainNav.sort((a, b) => (a.term.toLowerCase() > b.term.toLowerCase()) ? 1 : -1)}`);
  const courses = mainNav.sort((a, b) => ((a.cert + a.year + a.term) > (b.cert + b.year + b.term)) ? 1 : -1);
  //console.table(courses);
  if (isElement(id)) {
    let spot;
    let title;
    courses.forEach(course => {
      const termtext = getTerm(course.term);
      const term = `${course.term}: 20${course.year}-${termtext}`;
      spot = id.indexOf("-");
      if ((course.code.toLowerCase() === id.substr(0, spot).toLowerCase()) && (isElement(id)) && (isElement(`${id}`))) {
        title = `${course.code} - ${course.name}

        Technology learned:
        ${course.tech}

        `;
        writeById(id, title);
        let id2 = `${id}2`;
        writeById(id2, title);
      }
    });
  }
}
getIndexPageTitle("CS101-indexpagetitle");
getIndexPageTitle("CIT327-indexpagetitle");
getIndexPageTitle("WDD330-indexpagetitle");


// set page title for WDD330 weekly pages
const header330 = `WDD330 - Web Frontend II | Week ${getWeeknum(getFilename()) }`;
if (isElement("wdd330pagetitle") && substr(0, 4, getFilename()) === "week") {
  document.getElementById("wdd330pagetitle").innerText = header330;
}


function setTitle(course) {
  if (isElement(course)) {
    writeById(course, `My ${course} Portfolio`);
  }
}

function getWeekPageTitle(id, page) {
  let weekNo = getWeeknum(getFilename()) || '5';
  // set page title for weekly pages
    let pageTitle = `${page} | Week ${weekNo}`;
  if (isElement(id)) {
    writeById(id, pageTitle);
  }
    let id2 = id + "2";
    if (isElement(id2)) {
    writeById(id2, pageTitle);
  }
}
getWeekPageTitle("cs101weekpagetitle", "CS101");
getWeekPageTitle("cit327weekpagetitle", "CIT327 Paper");
getWeekPageTitle("wdd330weekpagetitle", "WDD330 Notes");
getWeekPageTitle("wdd330weekexercisetitle", "Exercises");
getWeekPageTitle("wdd330challengetitle", "Challenges");
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

function createCertNav(array, id) {
  // create link list container element
  if (isElement(id)) {
    const certbox = document.getElementById(id);
    console.log(certbox)
      // sort cert array by certdate
      certs.sort(function(a, b) {
        var dateA = a.certdate;
        var dateB = b.certdate;
        if (dateA < dateB) {
          return -1;
        }
        if (dateA > dateB) {
          return 1;
        }
        // dates must be equal
        return 0;
      });
      // create cert list element
      const certmenu = document.createElement('ol');
      certmenu.setAttribute(id, 'menu');
      // get list of files to create links for each menu entry
      let certcount = 1;
      certs.forEach((element) => {
          // get cert number
          const certCheck = element.cert;
          // create list item for this cert
          const certitem = document.createElement('li');
          certitem.classList.add('nav');
          certitem.setAttribute(id, `cert${certcount}`);
          // set text for item
          certitem.innerText += `${element.certname}, Issue date: ${element.certdate}`;
          // add item to cert submenu list
          certmenu.appendChild(certitem);
          // sort array by name
          array.sort(function(a, b) {
            var nameA = a.name.toUpperCase(); // ignore upper and lowercase
            var nameB = b.name.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            // names must be equal
            return 0;
          });
      let submenu = document.createElement('ol');
      submenu.setAttribute(id, 'submenu');
      // sort array by name
      array.sort(function(a, b) {
        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      });
      // set count of courses
      let coursecount = 1;
      // get list of files to create links for each menu entry
      array.forEach((element) => {
        // console.log('element.cert === certCheck' + element.cert === certCheck);
        // console.log('element.cert: ' + element.cert);
        // console.log('certCheck: ' + certCheck);
        // if subitem's cert number = item's cert number, add to submenu list
        if (element.cert === certCheck) {
          const submenuitem = document.createElement('li');
          submenuitem.classList.add('nav');
          submenuitem.setAttribute(id, `course${coursecount}`);
          // if url does not exist AND data url length is less than 100, exit program
          if ((!urlExists(element.url)) && (element.url.length < 100)) {
            return;
          } else {
            const link = document.createElement('a');
            // url and term exist, create the link and post to page
            if ((element.term) && (element.term.length > 0)) {
              const linktext = document.createTextNode(`${element.term}, ${element.code} - ${element.name}, (${element.tech})`);
              link.setAttribute('href', element.url);
              link.appendChild(linktext);
              //submenuitem.innerText = `${createLink(url, linktext)}`;
            } else {
              link.setAttribute('href', element.url);
              const linktext = document.createTextNode(`${createLink(element.url, element.name)}`);
              link.appendChild(linktext);
              //submenuitem.innerText = `${createLink(element.url, element.name)}`;
            }
            submenuitem.appendChild(link);
            submenu.appendChild(submenuitem);
          }
        certitem.appendChild(submenu);
        }
        coursecount++;
      });
      certcount++;
      certmenu.appendChild(certitem);
    })
    console.log(certmenu)
    certbox.appendChild(certmenu);
  }
}

createCertNav(mainNav,'certnav');

function createNav(array, id) {
  // create link list container element
  if (isElement(id)) {
    const container = document.getElementById(id);
    // sort array by name
    array.sort(function(a, b) {
      var nameA = a.name.toUpperCase(); // ignore upper and lowercase
      var nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      // names must be equal
      return 0;
    });
    // create link list element
    let menu = "<ol>";
    // get list of files to create links for each menu entry
    array.forEach((element) => {
      // if url does not exist AND data url length is less than 100, exit program
      if ((!urlExists(element.url)) && (element.url.length < 100)) {
        return;
      } else {
        // url and term exist, create the link and post to page
        if ((element.term) && (element.term.length > 0)) {
          const url = element.url;
          const linktext = `${element.term}, ${element.code} - ${element.name}, (${element.tech})`;
          menu += `<li class="nav">${createLink(url, linktext)}</li>`;
        } else {
          menu += `<li class="nav">${createLink(element.url, element.name)}</li>`;
        }
      }
    });
    menu += "</ol>";
    container.innerHTML = menu;
    return;
  }
}
createNav(mainNav, "main-nav");
createNav(list330, "notes");
createNav(paperslist, "papers");
createNav(presentations, "presentations");


  // //console.table(`mainNav.sort: ${mainNav.sort((a, b) => (a.term.toLowerCase() > b.term.toLowerCase()) ? 1 : -1)}`);
  // //console.table(courses);
  // if (isElement(id)) {
  //   let spot;
  //   let title;
  //   courses.forEach(course => {
  //     const termtext = getTerm(course.term);
  //     const term = `${term}: 20${course.year}-${termtext}`;
  //     spot = id.indexOf("-");
  //     console.log(`course: ${course.code}`);
  //     // console.log(`spot: ${spot}`);
  //     // console.log('course.code: ' + course.code === id.substr(0, spot));
  //     if ((course.code.toLowerCase() === id.substr(0, spot).toLowerCase()) && (isElement(id)) && (isElement(`${id}`))) {
  //       title = `${course.code} - ${course.name}`;
  //       title += "<br>";
  //       title += `Technology learned: ${course.tech}`;
  //       title += "<br><br>";
  //       //console.log(`title: ${title}`);
  //       writeById(id, title);
  //       let id2 = `${id}2`;
  //       //console.log(`id2: ${id2}`);
  //       writeById(id2, title);
  //     }
  //   });
  //}