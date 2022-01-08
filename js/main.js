// Week 01

function loadStory() {
  let storyName = document.getElementById("name_input").value;
  let storyHTML = localStorage.getItem(storyName);
  document.getElementById("story_editor").value = storyHTML;
}

function saveStory() {
  let storyName = document.getElementById("name_input").value;
  let storyHTML = document.getElementById("story_editor").value;
  localStorage.setItem(storyName,storyHTML);
}

function showStory() {
  let storyHTML = document.getElementById("story_editor").value;
  document.getElementById("story_show").innerHTML = storyHTML;
}

function reverseNumber() {
  var number = document.getElementById("number_input").value;
  console.log(`number: ${number}`);
  let rnumber = "Number reversed: " + number.split("").reverse().join("");
  console.log(`rnumber: ${rnumber}`);
  document.getElementById("reverse_output").innerHTML = rnumber;
}

function loopingTriangle() {
    var base = '#';
    var triangle = '#';
    for (let i = 0; i < 7; i++) {
      base += '#';
      triangle += '\n' + base;
    }
    document.getElementById("triangle_output").innerHTML = base;
}