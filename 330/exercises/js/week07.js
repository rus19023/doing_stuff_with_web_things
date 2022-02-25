// Exercise 5.1
var arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
const flatten = (array => {
    let newarray = [];
    array.forEach(subarray => {
        subarray.forEach(item => {
            newarray.push(item);
        });
    });
    console.log(newarray)
    newarray.sort();
    return newarray;
});
document.getElementById('result7-1').innerHTML = `Result: <pre>${JSON.stringify(flatten(arrays))} </pre>`;
// → [1, 2, 3, 4, 5, 6]

// Exercise 5.2
function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
  }

  var byName = {};
  ancestry.forEach(function(person) {
    byName[person.name] = person;
  });

  var differences = ancestry.filter(function(person) {
    return byName[person.mother] != null;
  }).map(function(person) {
    return person.born - byName[person.mother].born;
  });
  document.getElementById('result7-2').innerHTML = `Result: <pre>${differences}</pre>`;

  // → 31.2