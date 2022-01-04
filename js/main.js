// create link list element
var list = document.getElementById("list");
var ol = document.createElement("ol");
var li = document.createElement("li");
var li2 = document.createElement("li");
var label, url;
// create links array
let weekno = 1;
for (let i = 0; i <= weekno; i++) {
  label = `Week ${i} Notes`;
  url = `week${i}/`;
  console.log(label);
  console.log(url);
  label2 = `Exercise ${i}`;
  url2 = `exercises/exercise${i}.html`;
  console.log(label2);
  console.log(url2);
  li.innerHTML = `<a href="${url}">${label}</a>`;
  li2.innerHTML = `<a href="${url2}">${label2}</a>`;
  ol.appendChild(li);
  ol.appendChild(li2);
  list.appendChild(ol);
}