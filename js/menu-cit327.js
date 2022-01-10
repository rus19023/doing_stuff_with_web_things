const navlist = [
  {
    name: "Week 01: Data Mart vs. Data Warehouse",
    url: "week01.html ",
  },
  {
    name: "Week 02: Kimball method vs. Inmon method of designing a Data Warehouse",
    url: "week02.html ",
  },
  {
    name: "Week 03: ETL Processes",
    url: "week03.html ",
  },
  {
    name: "Week 04: Data Warehouse Granularity",
    url: "week04.html ",
  },
  {
    name: "Week 05: ERD Model",
    url: "week05.html ",
  },
  {
    name: "Week 06: Cassandra, Map Reduce, and CSQL",
    url: "week06.html ",
  },
  {
    name: "Week 07: Vertical vs. Horizontal Scale",
    url: "week07.html ",
  },
  {
    name: "Week 08: MongoDB",
    url: "week08.html ",
  },
  {
    name: "Week 09: Schemaless Collections in MongoDB",
    url: "week09.html ",
  },
  {
    name: "Week 10: XSLT with XML Documents",
    url: "week10.html ",
  },
  {
    name: "Week 11: XQuery",
    url: "week11.html ",
  },
  {
    name: "Week 12: Final Paper - Outline",
    url: "week12.html ",
  },
  {
    name: "Week 13: Final Paper - Draft",
    url: "week13.html ",
  },
  {
    name: "Week 14, Final Paper: MEAN Stack Integration into the Data Warehouse",
    url: "week14.html ",
  }
];

function createNav(array) {
  // create link list container element
  const container = document.getElementById("container");
  // create link list element
  let ol = "<ol>";
  let baseurl = "./cit327/";
  //let baseurl = "/";
  // get list of files to create links for each week number
  array.forEach((element) => {
    ol += `<li><a href="${baseurl}${element.url}">${element.name}</a></li>`;
  });
  ol += "</ol>";
  container.innerHTML = ol;
}
createNav(navlist);
