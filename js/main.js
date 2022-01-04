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
let weekno = 1;
for (let i = 1; i <= weekno; i++) {
  let n1 = `/week${i}/`;
  let e1 = `/week${i}/exercise${i}.html`;
  let c1 = `/week${i}/challenge${i}.html`;
  console.log(`n1: ${n1}`);
  console.log(`e1: ${e1}`);
  console.log(`c1: ${c1}`);
  ol += `<li><a href="${n1}">Week ${i} Notes</a></li>`;
  console.log(`container: ${container.innerHTML}`);

  if (fileExists(e1)) {
    ol +=  `<li><a href="${e1}">Exercise ${i}</a></li>`;
  }
  if (fileExists(c1)) {
    ol +=  `<li><a href="${c1}">Challenge ${i}</a></li>`;
  }
}
ol += "</ol>";
container.innerHTML = ol;
console.log(`container: ${container.innerHTML}`);