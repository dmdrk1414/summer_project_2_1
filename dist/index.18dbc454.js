// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"gTyiG":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "0bcb44a518dbc454";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"1SICI":[function(require,module,exports) {
// screan
var _article = require("./screan/article");
var _tocommand = require("./screan/tocommand");

},{"./screan/article":"3IlQm","./screan/tocommand":"97s4C"}],"3IlQm":[function(require,module,exports) {
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
    art_container.forEach((art)=>{
        const art_div = document.createElement("div");
        art.appendChild(art_div);
        art_div.classList.add(`${jsonKey[i++]}`);
    });
}
// add txt of div to append child art
function art_div_inputText() {
    for(let i = 0; i < art_container.length; i++){
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

},{"../../json/article.json":"7MhIV"}],"7MhIV":[function(require,module,exports) {
module.exports = JSON.parse('{"article":[{"title":"\'\uBC31\uBC18\uAE30\uD589\' \uC2E0\uC131\uC6B0 \\"\'\u266516\uC0B4\uC5F0\uD558 \uC544\uB0B4\', \uB0B4\uAC00 \uB3C4\uB451\uC778\uAC00 \uC2F6\uC5B4\u2026\uC0AC\uD6C4 \uC7AC\uC0B0 \uB9C8\uB828\uD574\uB46C\\" [\uC885\uD569]","reporter":"\uAE40\uC608\uC194 \uAE30\uC790","contents":"[OSEN=\uAE40\uC608\uC194 \uAE30\uC790] \uC2E0\uC131\uC6B0\uAC00 16\uC0B4 \uC5F0\uD558\uC758 \uC544\uB0B4\uC5D0 \uB300\uD55C \uC774\uC57C\uAE30\uB97C \uC804\uD588\uB2E4.\xa029\uC77C\uC5D0 \uBC29\uC1A1\uB41C TV\uC870\uC120 \'\uD5C8\uC601\uB9CC\uC758 \uBC31\uBC18\uAE30\uD589\'\uC5D0\uC11C\uB294 \uC2E0\uC131\uC6B0\uAC00 \uD5C8\uC601\uB9CC\uACFC \uD568\uAED8 \uC18C\uC694\uC0B0\uC73C\uB85C \uB2E4\uC591\uD55C \uBA39\uAC70\uB9AC \uC5EC\uD589\uC744 \uB5A0\uB098\uB294 \uBAA8\uC2B5\uC774 \uADF8\uB824\uC84C\uB2E4.\xa0\uC774\uB0A0 \uC2E0\uC131\uC6B0\uB294 \uBC84\uC12F \uC804\uACE8\uC744 \uC990\uAE30\uBA70 \\"\uBC84\uC12F \uC804\uACE8\uC740 \uBC14\uB2E5\uC758 \uD5A5\uC744 \uB290\uB07C\uB294 \uB9DB\uC774\uB2E4\\"\uB77C\uBA70 \uD589\uBCF5\uD574\uD588\uB2E4. \uD5C8\uC601\uB9CC\uC740 \\"\uC778\uAC04\uC774\uB098 \uBC84\uC12F\uC774\uB098 \uD5A5\uC774 \uC88B\uC544\uC57C \uD55C\uB2E4\\"\uB77C\uACE0 \uB9D0\uD588\uB2E4. \uC2E0\uC131\uC6B0\uB294 \\"\uB18D\uB2F4\uC774 \uAD49\uC7A5\uD788 \uAD6C\uC218\uD558\uC2DC\uB2E4\\"\uB77C\uACE0 \uB9D0\uD574 \uC6C3\uC74C\uC744 \uC790\uC544\uB0C8\uB2E4. \uC774\uC5B4 \uC2E0\uC131\uC6B0\uB294 \\"\uB4F1\uC0B0\uD558\uACE0 \uB0B4\uB824\uC654\uB2E4\uAC00 \uC774\uAC70 \uBA39\uACE0 \uB2E4\uC2DC \uC62C\uB77C\uAC00\uC2E4 \uAC83 \uAC19\uB2E4\\"\uB77C\uACE0 \uAC10\uD0C4\uD588\uB2E4.\xa0 \\n\uD5C8\uC601\uB9CC\uACFC \uC2E0\uC131\uC6B0\uB294 \uC655\uBC29\uACC4\uACE1\uC5D0 \uB4E4\uB838\uB2E4. \uD5C8\uC601\uB9CC\uC740 \\"\uC5EC\uAE30\uAE4C\uC9C0 \uC654\uC73C\uB2C8\uAE4C \uBC1C\uC774\uB098 \uD55C \uBC88 \uB2F4\uADF8\uACE0 \uAC00\uC790\\"\uB77C\uBA70 \uBC14\uB85C \uC790\uB9AC\uC5D0 \uC8FC\uC800 \uC549\uC558\uB2E4. \uB450 \uC0AC\uB78C\uC740 \uB3D9\uC2EC\uC744 \uB5A0\uC62C\uB9AC\uBA70 \uBB3C\uC7A5\uAD6C\uB97C \uCCD0 \uC6C3\uC74C\uC744 \uC790\uC544\uB0C8\uB2E4. \uD5C8\uC601\uB9CC\uC740 \\"\uC774 \uAE30\uBD84\uB300\uB85C \uB098\uC774\uAC00 \uB3CC\uC544\uAC14\uC73C\uBA74 \uC88B\uACA0\uB2E4\\"\uB77C\uACE0 \uB9D0\uD588\uB2E4. \uC2E0\uC131\uC6B0\uB294 \\"\uC77C\uD558\uAE30 \uC2EB\uB2E4\\"\uB77C\uACE0 \uC678\uCCD0 \uC6C3\uC74C\uC744 \uC790\uC544\uB0C8\uB2E4.\xa0\uC2E0\uC131\uC6B0\uC640 \uD5C8\uC601\uB9CC\uC740 50\uB144 \uB0B4\uACF5\uC758 \uC624\uB9AC\uBCF4\uC308 \uC9D1\uC744 \uBC29\uBB38\uD588\uB2E4. \uC8FC\uC778\uC740 \uB530\uB73B\uD55C \uB18B\uADF8\uB987 \uC704\uC5D0 \uC62C\uB9B0 \uC624\uB9AC\uBCF4\uC308\uC744 \uC900\uBE44\uD588\uB2E4. \uC8FC\uC778\uC740 \uD64D\uC0BC\uAFC0\uB85C \uB9CC\uB4E0 \uD2B9\uC81C \uC18C\uC2A4\uB97C \uBC14\uB978 \uC624\uB9AC\uBCF4\uC308\uC744 \uC18C\uAC1C\uD588\uB2E4. \uC2E0\uC131\uC6B0\uC640 \uD5C8\uC601\uB9CC\uC740 \uACE0\uAC1C\uB97C \uB044\uB355\uC774\uBA70 \uB9DB\uC744 \uC778\uC815\uD588\uB2E4.\xa0 \\n\uC2E0\uC131\uC6B0\uB294 \\"\uD64D\uC0BC\uC758 \uD5A5\uC774 \uC740\uC740\uD558\uAC8C \uC465 \uB4E4\uC5B4\uC628\uB2E4. \uD798\uC774 \uB098\uB294 \uAC83 \uAC19\uB2E4\\"\uB77C\uBA70 \uD589\uBCF5\uD574\uD588\uB2E4. \uC2E0\uC131\uC6B0\uB294 \\"\uC624\uB9AC\uAECD\uC9C8\uC774 \uCD5C\uACE0\uC758 \uB9DB\uC774\uB2E4\\"\uB77C\uACE0 \uB9D0\uD588\uB2E4. \uD5C8\uC601\uB9CC\uC740 \\"\uAC89\uC774 \uBC14\uC0AD\uD558\uACE0 \uC18D\uC774 \uCD09\uCD09\uD558\uB2E4\\"\uB77C\uACE0 \uB9D0\uD588\uB2E4. \uC8FC\uC778\uC740 \uC9C1\uC811 \uB9CC\uB4E0 \uD669\uD1A0 \uD759\uAC00\uB9C8\uC5D0 \uC624\uB9AC\uB97C \uAD6C\uC6CC\uC11C \uC900\uBE44\uD55C\uB2E4\uACE0 \uB9D0\uD574 \uB208\uAE38\uC744 \uB04C\uC5C8\uB2E4.\xa0\uD5C8\uC601\uB9CC\uC740 \\"\uD669\uD1A0\uC5D0 \uAD6C\uC6CC \uBA39\uB294 \uAC74 \uCC98\uC74C\uC774\uB2E4. \uCAC0\uB4DD\uCAC0\uB4DD\uD558\uACE0 \uAE4A\uC740 \uB9DB\uC774 \uC0DD\uACBC\uB2E4\\"\uB77C\uACE0 \uAC10\uD0C4\uD588\uB2E4. \uC2E0\uC131\uC6B0\uB294 \\"\uC544\uB0B4\uAC00 \uAC00\uB054 \uCCAB\uC9F8\uC5D0\uAC8C \uC624\uB9AC \uC694\uB9AC\uB97C \uD574\uC900\uB2E4\\"\uB77C\uACE0 \uB9D0\uD588\uB2E4. \uC774\uC5D0 \uD5C8\uC601\uB9CC\uC740 \\"\uC544\uC774 \uC5C4\uB9C8\uAC00 \uD574\uC8FC\uB294 \uBCF4\uC591\uC2DD\uC740 \uC5C6\uB098\\"\uB77C\uACE0 \uBB3C\uC5C8\uB2E4. \uC774\uC5D0 \uC2E0\uC131\uC6B0\uB294 \uD55C\uC228\uC744 \uC26C\uBA70 \\"\uC544\uC774 \uCC59\uAE30\uAE30\uB3C4 \uBC14\uC058\uB2E4\\"\uB77C\uACE0 \uB9D0\uD574 \uC6C3\uC74C\uC744 \uC790\uC544\uB0C8\uB2E4. \\n\uC2E0\uC131\uC6B0\uB294 \\"\uC544\uB0B4\uB97C \uCC98\uC74C \uB9CC\uB0AC\uC744 \uB54C\uAC00 \uACB0\uD63C\uD558\uAE30 10\uB144 \uC804\uC774\uC5C8\uB2E4. \uADF8\uB54C \uC544\uB0B4\uB294 20\uB300 \uCD08\uBC18, \uB098\uB294 30\uB300\uC600\uB2E4. \uADF8\uB54C\uB3C4 \uC0AC\uC2E4 \uD638\uAC10\uC740 \uC788\uC5C8\uB294\uB370 \uB0B4\uAC00 \uC800 \uCE5C\uAD6C\uB97C \uB9CC\uB098\uBA74 \uB3C4\uB451\uC774\uB77C\uACE0 \uC0DD\uAC01\uD588\uB2E4\\"\uB77C\uACE0 \uB9D0\uD588\uB2E4. \uC774\uC5D0 \uD5C8\uC601\uB9CC\uC740 \\"\uC54C\uAE34 \uC544\uB294 \uAD6C\uB098\\"\uB77C\uACE0 \uB9D0\uD574 \uD3ED\uC18C\uCF00 \uD588\uB2E4.\xa0\uC2E0\uC131\uC6B0\uB294 \\"\uADF8 \uCE5C\uAD6C\uB3C4 \uB098\uC774\uB97C \uBA39\uACE0 \uB098\uB3C4 \uB098\uC774\uB97C \uBA39\uC73C\uB2C8\uAE4C \uADF8 \uCE5C\uAD6C\uAC00 \uC544 \uC774\uC81C \uC5B4\uB978\uC774 \uB410\uAD6C\uB098 \uC2F6\uC5C8\uB2E4: \uB77C\uACE0 \uB9D0\uD588\uB2E4. \uD5C8\uC601\uB9CC\uC740 \uC2E0\uC131\uC6B0\uC640 \uC544\uB0B4\uC758 16\uC0B4\uC758 \uB098\uC774\uCC28\uB97C \uC0DD\uAC01\uD558\uBA70 \\"\uC6B0\uB9AC \uB538\uC774 \uC774\uB7F0 \uC0C1\uD669\uC774\uB77C\uBA74 \uB2F9\uC0AC\uC790\uB4E4\uB07C\uB9B0 \uC774\uBBF8 \uC598\uAE30\uB97C \uB2E4 \uD558\uACE0 \uB2EC\uB824\uB4E0 \uAC70 \uC544\uB2C8\uB0D0. \uADF8\uB7FC \uB098\uB77C\uB3C4 \uB9C9\uC744 \uC218 \uC5C6\uB2E4\\"\uB77C\uACE0 \uB9D0\uD574 \uC6C3\uC74C\uC744 \uC790\uC544\uB0C8\uB2E4.\xa0 \\n\uC774\uB0A0 \uC2E0\uC131\uC6B0\uB294 \uBC14\uBE44\uD050\uB97C \uC990\uAE30\uBA70 \\"\uC774\uB7F0 \uAC78 \uBA39\uC73C\uBA74 \uC544\uB4E4 \uC0DD\uAC01\uC774 \uB09C\uB2E4\\"\uB77C\uACE0 \uB9D0\uD588\uB2E4. \uD5C8\uC601\uB9CC\uC740 \\"\uB2E4 \uADF8\uB807\uB2E4. \uB9DB\uC788\uB294 \uC74C\uC2DD \uBA39\uC744 \uB54C \uACBD\uCE58 \uC88B\uC740 \uACF3 \uAC19\uC744 \uB54C \uAC00\uC871\uB4E4\uC774 \uC0DD\uAC01\uB09C\uB2E4\\"\uB77C\uACE0 \uB9D0\uD588\uB2E4.\xa0\uC2E0\uC131\uC6B0\uB294 \\"\uB18D\uB2F4 \uC0BC\uC544 \uADF8\uB7F0 \uC598\uAE38 \uD55C\uB2E4. \uD639\uC5EC \uBB34\uC2A8 \uC77C\uC774 \uC0DD\uACA8\uC11C \uB0B4\uAC00 \uBD80\uC81C\uD558\uB294 \uACBD\uC6B0\uAC00 \uC788\uC73C\uBA74 \uD639\uC5EC\uB77C\uB3C4 \uBAA8\uB974\uB2C8 \uC774\uB807\uAC8C \uD558\uB77C\uACE0 \uC774\uC57C\uAE30\uD55C\uB2E4. \uB124\uAC00 \uACE0\uC0DD\uD558\uC9C0 \uC54A\uAC8C\uB054 \uC0DD\uD65C\uBE44\uAC00 \uC5B4\uB5BB\uAC8C \uC900\uBE44\uB3FC \uC788\uB2E4 \uC774\uB7F0 \uC598\uAE38 \uD55C\uB2E4\\"\uB77C\uBA70 \uAF3C\uAF3C\uD55C \uACC4\uD68D\uC131\uC744 \uB4DC\uB7EC\uB0B4 \uB208\uAE38\uC744 \uB04C\uC5C8\uB2E4.\xa0/hoisoly@osen.co.kr[\uC0AC\uC9C4] TV\uC870\uC120 \'\uD5C8\uC601\uB9CC\uC758 \uBC31\uBC18\uAE30\uD589\' \uBC29\uC1A1 \uCEA1\uCC98","copyright":"OSEN"}]}');

},{}],"97s4C":[function(require,module,exports) {
const toDoForm = document.getElementById("comment-form");
const toDoList = document.getElementById("comment-list");
const toDoInput = document.querySelector("#comment-form input");
const TODOS_KEY = "todos";
let toComment = [];
function savedToComment() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toComment));
}
function deleteToComment(event) {
    const li = event.target.parentElement;
    li.remove();
    const li_ID = li.id;
    toComment = toComment.filter((toDo)=>toDo.id !== parseInt(li_ID));
    savedToComment();
}
function paintToComment(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    li.classList.add("comment_li");
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    span.classList.add("comment_span");
    const div = document.createElement("div");
    div.classList.add("comment-list_button");
    const button = document.createElement("button");
    button.classList.add("commentlist_delete_button");
    button.addEventListener("click", deleteToComment);
    button.innerText = "\u274C";
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}
function handleToCommentSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    };
    toComment.push(newTodoObj);
    paintToComment(newTodoObj);
    savedToComment();
}
toDoForm.addEventListener("submit", handleToCommentSubmit);
const savedToCommentss = localStorage.getItem(TODOS_KEY);
if (savedToCommentss !== null) {
    const parseToComments = JSON.parse(savedToCommentss); // localStorage에 받은것들을 배열로 저장
    toComment = parseToComments;
    parseToComments.forEach(paintToComment);
}

},{}]},["gTyiG","1SICI"], "1SICI", "parcelRequire4eb9")

//# sourceMappingURL=index.18dbc454.js.map
