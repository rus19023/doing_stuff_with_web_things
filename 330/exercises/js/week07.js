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

// Exercise 5.2 - Your own loop
// Your code here.
function loop(n, fn1, fn2, display) {
    let result = 'Result: <br>';
    for (let i = n; fn1(i); i = fn2(i)) {
        display(i);
        result += `${i}<br>`;
    }
    document.getElementById('result7-2').innerHTML = result;
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

function every(array, test) {
    // Your code here.
    let result = true;
    array.forEach(item => {
      if (test(item)) {
        result = true;
      } else {
        result = false;
      }
    });
    return result;
}
console.log(every([1, 3, 5], n => n < 10));
console.log(every([2, 4, 16], n => n < 10));
console.log(every([], n => n < 10));

let results = `Results: <br>every([1, 3, 5], n => n < 10) = ${every([1, 3, 5], n => n < 10)}<br>`;
results += `every([2, 4, 16], n => n < 10) = ${every([2, 4, 16], n => n < 10)}<br>`;
results += `every([], n => n < 10) = ${every([], n => n < 10)}`;
document.getElementById('result7-3').innerHTML = results; 