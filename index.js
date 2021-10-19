let wordOne = prompt("Type first word");
let wordTwo = prompt("Type second word");

let wordOneLength = wordOne.length;
let wordTwoLength = wordTwo.length;

console.log(wordOne + ' ' + wordOneLength);
console.log(wordTwo + ' ' + wordTwoLength);

if (wordOneLength > wordTwoLength) {
    console.log("Word one is longer");
} else {
    console.log("Word two is longer");
}