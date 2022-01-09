const navlist = [
  {
    name: "Week 01: Data Mart vs. Data Warehouse",
    url: "CIT327/week01.html ",
  },
  {
    name: "Week 02: Kimball method vs. Inmon method of designing a Data Warehouse",
    url: "CIT327/week02.html ",
  },
  {
    name: "Week 03: ETL Processes",
    url: "CIT327/week03.html ",
  },
  {
    name: "Week 04: Data Warehouse Granularity",
    url: "CIT327/week04.html ",
  },
  {
    name: "Week 05: ERD Model",
    url: "CIT327/week05.html ",
  },
  {
    name: "Week 06: Cassandra, Map Reduce, and CSQL",
    url: "CIT327/week06.html ",
  },
  {
    name: "Week 07: Vertical vs. Horizontal Scale",
    url: "CIT327/week07.html ",
  },
  {
    name: "Week 08: MongoDB",
    url: "CIT327/week08.html ",
  },
  {
    name: "Week 09: Schemaless Collections in MongoDB",
    url: "CIT327/week09.html ",
  },
  {
    name: "Week 10: XSLT with XML Documents",
    url: "CIT327/week10.html ",
  },
  {
    name: "Week 11: XQuery",
    url: "CIT327/week11.html ",
  },
  {
    name: "Week 12: Final Paper - Outline",
    url: "CIT327/week12.html ",
  },
  {
    name: "Week 13: Final Paper - Draft",
    url: "CIT327/week13.html ",
  },
  {
    name: "Week 14, Final Paper: MEAN Stack Integration into the Data Warehouse",
    url: "CIT327/week14.html ",
  }
];

function createNav(array) {
  // create link list container element
  const container = document.getElementById("container");
  // create link list element
  let ol = "<ol>";
  //let baseurl = "https://rus19023.github.io/myportfolio/";
  let baseurl = "../";
  // get list of files to create links for each week number
  array.forEach((element) => {
    ol += `<li><a href="${baseurl}${element.url}">${element.name}</a></li>`;
  });
  ol += "</ol>";
  container.innerHTML = ol;
}
createNav(navlist);
