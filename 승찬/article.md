```js
// json을 가져오는 곳 -------------------
const jsonData = require("../../json/article.json"); // take json file
const jsonArray = jsonData.articles; // make json file to array
const getRamNumber = Math.floor(Math.random() * jsonArray.length); // return random int
const jsonArrRan = jsonArray[getRamNumber]; // json ArrRan
const jsonKey = Object.keys(jsonData.articles[0]); // get json key
console.log(jsonArray);
console.log(jsonArrRan);
console.log(jsonKey);
// html document 를 가져오는 js
const art_container = document.querySelectorAll(".article");
const art_title = art_container[0];
const art_reporter = art_container[1];
const art_contents = art_container[2];
const art_source = art_container[3];
// 이 배열을 만든 이유는
// jsonkey 의 배열에 key 값을 저장을 하여
// JSON.stringify(jsonArrRan.key값이들어가있는배열);
// 이런 식으로 json파일에 있는 key값을 자동으로? 가져오는 코드를 만들고 싶었지만... 못하였다
// 하드 코딩을 하였지만 나중에 js을 좀더 생각을 한후 수정을 하는 식으로 해야될꺼 같습니다.
const testArray = [];
testArray.push(jsonArrRan.tytle);
testArray.push(jsonArrRan.reporter);
testArray.push(jsonArrRan.content);
testArray.push(jsonArrRan.source);
console.log(testArray);
// add div func to individual of art_container
// input class to div
// 간단한 div을 추가해주는 코드입니다.
function artAdd_div() {
  let i = 0;
  art_container.forEach((art) => {
    const art_div = document.createElement("div");
    art.appendChild(art_div);
    art_div.classList.add(`${jsonKey[i++]}`);
  });
}
// add txt of div to append child art
// artAdd_div 의 div에 글자를 집어넣는 코드입니다.
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
```
