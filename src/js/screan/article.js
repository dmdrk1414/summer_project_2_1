const jsonData = require("../../json/article.json"); // take json file
const jsonArray = jsonData.articles; // make json file to array

const getRamNumber = Math.floor(Math.random() * jsonArray.length); // return random int
const jsonArrRan = jsonArray[getRamNumber]; // json ArrRan
const jsonKey = Object.keys(jsonData.articles[0]); // get json key
console.log(jsonArray);
console.log(jsonArrRan);
console.log(jsonKey);

const art_container = document.querySelectorAll(".article");
const art_title = art_container[0];
const art_reporter = art_container[1];
const art_contents = art_container[2];
const art_source = art_container[3];

// fuxk
const testArray = [];
testArray.push(jsonArrRan.tytle);
testArray.push(jsonArrRan.reporter);
testArray.push(jsonArrRan.content);
testArray.push(jsonArrRan.source);
console.log(testArray);

// add div func to individual of art_container
// input class to div
function artAdd_div() {
  let i = 0;
  art_container.forEach((art) => {
    const art_div = document.createElement("div");
    art.appendChild(art_div);
    art_div.classList.add(`${jsonKey[i++]}`);
  });
}

// add txt of div to append child art
function art_div_inputText() {
  for (let i = 0; i < art_container.length; i++) {
    const art_div = document.querySelector(`.article .${jsonKey[i]}`); // get a div
    art_div.innerHTML = testArray[i];
    // art_div.innerHTML = JSON.stringify(jsonArrRan.);
  }
}

// gather func
function init() {
  artAdd_div(); // add div func to individual of art_container
  art_div_inputText(); // input text to div of art
}

// init call
init();
