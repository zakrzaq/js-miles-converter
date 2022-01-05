// vars
let inputMls = document.getElementById("miles").value;
console.log(inputMls);
let result;

// // calculate kms

// console.log(calcKmFromMls(10))

// // run function on button click
document.getElementById("calcKm").onclick = function() {
    let inputMls = document.getElementById("miles").value;
    let result = inputMls * 1.608;
    result = result.toFixed(2);
    document.getElementById('output').innerHTML = result + " kilometers.";
    return result
}

// // run function on button click
document.getElementById("calcMl").onclick = function() {
    let inputMls = document.getElementById("miles").value;
    let result = inputMls / 1.608;
    result = result.toFixed(2);
    document.getElementById('output').innerHTML = result + " miles.";
    return result
}

console.log('Hi Judy')

