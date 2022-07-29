// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/json/article.json":[function(require,module,exports) {
module.exports = {
  "articles": [{
    "tytle": "尹 대통령 내부 총질이나 하던 당 대표 바뀌니 달라져",
    "reporter": "노기섭 기자",
    "content": "윤석열 대통령이 이준석 국민의힘 대표에 대해 “내부 총질이나 하던 당 대표”라는 표현을 휴대전화 메시지에 쓴 장면이 포착됐다.국회 사진기자단은 26일 오후 4시쯤 국회 본회의장에서 개최된 대정부질문을 지켜보던 권성동 국민의힘 당 대표 직무대행 겸 원내대표의 휴대전화에서 윤 대통령 추정 인물이 권 직무대행과 텔레그램 메시지를 주고받은 장면을 촬영했다. ‘대통령 윤석열’로 표시된 발신자는 권 직무대행에게 “우리당도 잘하네요. 계속 이렇게 해야”·“내부 총질이나 하던 당대표가 바뀌니 달라졌습니다”라고 메시지를 보냈다.이에 권 원내대표는 “대통령님의 뜻을 잘 받들어 당정이 하나되는 모습을 보이겠습니다”라고 답했다. 만약 ‘대통령 윤석열’로 표시된 발신자가 윤 대통령으로 확인될 경우, 그동안 공개적으로 이 대표에 대한 평가를 내놓지 않았던 윤 대통령의 본심이 그대로 드러난 것이어서 큰 논란이 일 것으로 보인다.",
    "source": "https://n.news.naver.com/article/021/0002523796?cds=news_media_pc&type=editn"
  }, {
    "tytle": "국내 RE100 기업 21곳으로 세계 4번째…\"인센티브 적극 검토\"",
    "reporter": "박상돈 기자",
    "content": "(서울=연합뉴스) 박상돈 기자 = 산업통상자원부는 27일 중구 대한상공회의소에서 국내 RE100(2050년까지 사용전력을 100% 재생에너지로 전환하는 것을 목표로 하는 캠페인) 참여 기업들과 간담회를 열고 RE100 정책 방향을 논의했다고 밝혔다. 글로벌 기업의 환경·사회·지배구조(ESG) 경영 강화로 전 세계 RE100 가입 기업은 2014년 13곳에서 최근 376곳으로 늘었다.",
    "source": "https://n.news.naver.com/article/021/0002523796?cds=news_media_pc&type=editn"
  }, {
    "tytle": "'물가 정점 아직 멀었다'…7월 기대인플레 4.7%, 사상 최고",
    "reporter": "이주환 기자",
    "content": "소비자들의 기대인플레이션율(향후 1년의 예상 소비자물가 상승률)이 한 달 만에 0.8%포인트(P) 오르며 4%대 후반까지 올랐다.",
    "source": "https://n.news.naver.com/article/021/0002523796?cds=news_media_pc&type=editn"
  }]
};
},{}],"src/js/screan/article.js":[function(require,module,exports) {
var jsonData = require("../../json/article.json"); // take json file


var jsonArray = jsonData.articles; // make json file to array

var getRamNumber = Math.floor(Math.random() * jsonArray.length); // return random int

var jsonArrRan = jsonArray[getRamNumber]; // json ArrRan

var jsonKey = Object.keys(jsonData.articles[0]); // get json key

console.log(jsonArray);
console.log(jsonArrRan);
console.log(jsonKey);
var art_container = document.querySelectorAll(".article");
var art_title = art_container[0];
var art_reporter = art_container[1];
var art_contents = art_container[2];
var art_source = art_container[3]; // fuxk

var testArray = [];
testArray.push(jsonArrRan.tytle);
testArray.push(jsonArrRan.reporter);
testArray.push(jsonArrRan.content);
testArray.push(jsonArrRan.source);
console.log(testArray); // add div func to individual of art_container
// input class to div

function artAdd_div() {
  var i = 0;
  art_container.forEach(function (art) {
    var art_div = document.createElement("div");
    art.appendChild(art_div);
    art_div.classList.add("".concat(jsonKey[i++]));
  });
} // add txt of div to append child art


function art_div_inputText() {
  for (var i = 0; i < art_container.length; i++) {
    var art_div = document.querySelector(".article .".concat(jsonKey[i])); // get a div

    art_div.innerHTML = testArray[i]; // art_div.innerHTML = JSON.stringify(jsonArrRan.);
  }
} // gather func


function init() {
  artAdd_div(); // add div func to individual of art_container

  art_div_inputText(); // input text to div of art
} // init call


init();
},{"../../json/article.json":"src/json/article.json"}],"src/js/screan/todo.js":[function(require,module,exports) {
var toDoForm = document.getElementById("comment-form");
var toDoList = document.getElementById("comment-list");
var toDoInput = document.querySelector("#comment-form input");
var TODOS_KEY = "todos";
var toComment = [];

function savedToComment() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toComment));
}

function deleteToComment(event) {
  var li = event.target.parentElement;
  li.remove();
  var li_ID = li.id;
  toComment = toComment.filter(function (toDo) {
    return toDo.id !== parseInt(li_ID);
  });
  savedToComment();
}

function paintToComment(newTodo) {
  var li = document.createElement("li");
  li.id = newTodo.id;
  li.classList.add("comment_li");
  var span = document.createElement("span");
  span.innerText = newTodo.text;
  span.classList.add("comment_span");
  var div = document.createElement("div");
  div.classList.add("comment-list_button");
  var button = document.createElement("button");
  button.classList.add("commentlist_delete_button");
  button.addEventListener("click", deleteToComment);
  button.innerText = "❌";
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToCommentSubmit(event) {
  event.preventDefault();
  var newTodo = toDoInput.value;
  toDoInput.value = "";
  var newTodoObj = {
    text: newTodo,
    id: Date.now()
  };
  toComment.push(newTodoObj);
  paintToComment(newTodoObj);
  savedToComment();
}

toDoForm.addEventListener("submit", handleToCommentSubmit);
var savedToCommentss = localStorage.getItem(TODOS_KEY);

if (savedToCommentss !== null) {
  var parseToComments = JSON.parse(savedToCommentss); // localStorage에 받은것들을 배열로 저장

  toComment = parseToComments;
  parseToComments.forEach(paintToComment);
}
},{}],"src/js/main.js":[function(require,module,exports) {
"use strict";

require("./screan/article");

require("./screan/todo");
},{"./screan/article":"src/js/screan/article.js","./screan/todo":"src/js/screan/todo.js"}],"../../.nvm/versions/node/v14.16.1/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "37497" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../.nvm/versions/node/v14.16.1/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/js/main.js"], null)
//# sourceMappingURL=/main.c48f6146.js.map