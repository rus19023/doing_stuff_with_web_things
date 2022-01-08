// Week 01

function loadStory() {
  var storyName = document.getElementById("name_input").value
  var storyHTML = localStorage.getItem(storyName)
  document.getElementById("story_editor").value = storyHTML
}

function saveStory() {
  var storyName = document.getElementById("name_input").value
  var storyHTML = document.getElementById("story_editor").value
  localStorage.setItem(storyName,storyHTML)
}

function showStory() {
  var storyHTML = document.getElementById("story_editor").value
  document.getElementById("story_show").innerHTML = storyHTML
}

function reverseNumber() {
  var number = document.getElementById("number_input").value;
  console.log(`number: ${number}`);
  let rnumber = "Number reversed: " + number.split("").reverse().join("");
  console.log(`rnumber: ${rnumber}`);
  document.getElementById("reverse_output").innerHTML = "Number reversed: " + number.split("").reverse().join("");
}