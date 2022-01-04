function fileExists(url)
{
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status!=404;
}

// create link list element
var container = document.getElementById("container");
var ol = "<ol>";
// create links list
let weekno = 2;
for (let i = 1; i <= weekno; i++) {
  ol += `<li><a href="week${i}/">Week ${i} Notes</a></li>`;
  let e1 = `/week${i}/exercise${i}.html`;
  let c1 = `/week${i}/challenge${i}.html`;
  console.log(`e1: ${e1}`);
  console.log(`c1: ${c1}`);
  console.log(`container: ${container.innerHTML}`);

  if (fileExists(e1)) {
    ol +=  `<li><a href="week${i}/exercise${i}.html">Exercise ${i}</a></li>`;
  }
  if (fileExists(c1)) {
    ol +=  `<li><a href="week${i}/challenge${i}.html">Challenge ${i}</a></li>`;
  }
}
ol += "</ol>";
container.innerHTML = ol;
console.log(`container: ${container.innerHTML}`);