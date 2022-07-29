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
module.exports = JSON.parse('{"articles":[{"tytle":"\u5C39 \uB300\uD1B5\uB839 \uB0B4\uBD80 \uCD1D\uC9C8\uC774\uB098 \uD558\uB358 \uB2F9 \uB300\uD45C \uBC14\uB00C\uB2C8 \uB2EC\uB77C\uC838","reporter":"\uB178\uAE30\uC12D \uAE30\uC790","content":"\uC724\uC11D\uC5F4 \uB300\uD1B5\uB839\uC774 \uC774\uC900\uC11D \uAD6D\uBBFC\uC758\uD798 \uB300\uD45C\uC5D0 \uB300\uD574 \u201C\uB0B4\uBD80 \uCD1D\uC9C8\uC774\uB098 \uD558\uB358 \uB2F9 \uB300\uD45C\u201D\uB77C\uB294 \uD45C\uD604\uC744 \uD734\uB300\uC804\uD654 \uBA54\uC2DC\uC9C0\uC5D0 \uC4F4 \uC7A5\uBA74\uC774 \uD3EC\uCC29\uB410\uB2E4.\uAD6D\uD68C \uC0AC\uC9C4\uAE30\uC790\uB2E8\uC740 26\uC77C \uC624\uD6C4 4\uC2DC\uCBE4 \uAD6D\uD68C \uBCF8\uD68C\uC758\uC7A5\uC5D0\uC11C \uAC1C\uCD5C\uB41C \uB300\uC815\uBD80\uC9C8\uBB38\uC744 \uC9C0\uCF1C\uBCF4\uB358 \uAD8C\uC131\uB3D9 \uAD6D\uBBFC\uC758\uD798 \uB2F9 \uB300\uD45C \uC9C1\uBB34\uB300\uD589 \uACB8 \uC6D0\uB0B4\uB300\uD45C\uC758 \uD734\uB300\uC804\uD654\uC5D0\uC11C \uC724 \uB300\uD1B5\uB839 \uCD94\uC815 \uC778\uBB3C\uC774 \uAD8C \uC9C1\uBB34\uB300\uD589\uACFC \uD154\uB808\uADF8\uB7A8 \uBA54\uC2DC\uC9C0\uB97C \uC8FC\uACE0\uBC1B\uC740 \uC7A5\uBA74\uC744 \uCD2C\uC601\uD588\uB2E4. \u2018\uB300\uD1B5\uB839 \uC724\uC11D\uC5F4\u2019\uB85C \uD45C\uC2DC\uB41C \uBC1C\uC2E0\uC790\uB294 \uAD8C \uC9C1\uBB34\uB300\uD589\uC5D0\uAC8C \u201C\uC6B0\uB9AC\uB2F9\uB3C4 \uC798\uD558\uB124\uC694. \uACC4\uC18D \uC774\uB807\uAC8C \uD574\uC57C\u201D\xb7\u201C\uB0B4\uBD80 \uCD1D\uC9C8\uC774\uB098 \uD558\uB358 \uB2F9\uB300\uD45C\uAC00 \uBC14\uB00C\uB2C8 \uB2EC\uB77C\uC84C\uC2B5\uB2C8\uB2E4\u201D\uB77C\uACE0 \uBA54\uC2DC\uC9C0\uB97C \uBCF4\uB0C8\uB2E4.\uC774\uC5D0 \uAD8C \uC6D0\uB0B4\uB300\uD45C\uB294 \u201C\uB300\uD1B5\uB839\uB2D8\uC758 \uB73B\uC744 \uC798 \uBC1B\uB4E4\uC5B4 \uB2F9\uC815\uC774 \uD558\uB098\uB418\uB294 \uBAA8\uC2B5\uC744 \uBCF4\uC774\uACA0\uC2B5\uB2C8\uB2E4\u201D\uB77C\uACE0 \uB2F5\uD588\uB2E4. \uB9CC\uC57D \u2018\uB300\uD1B5\uB839 \uC724\uC11D\uC5F4\u2019\uB85C \uD45C\uC2DC\uB41C \uBC1C\uC2E0\uC790\uAC00 \uC724 \uB300\uD1B5\uB839\uC73C\uB85C \uD655\uC778\uB420 \uACBD\uC6B0, \uADF8\uB3D9\uC548 \uACF5\uAC1C\uC801\uC73C\uB85C \uC774 \uB300\uD45C\uC5D0 \uB300\uD55C \uD3C9\uAC00\uB97C \uB0B4\uB193\uC9C0 \uC54A\uC558\uB358 \uC724 \uB300\uD1B5\uB839\uC758 \uBCF8\uC2EC\uC774 \uADF8\uB300\uB85C \uB4DC\uB7EC\uB09C \uAC83\uC774\uC5B4\uC11C \uD070 \uB17C\uB780\uC774 \uC77C \uAC83\uC73C\uB85C \uBCF4\uC778\uB2E4.","source":"https://n.news.naver.com/article/021/0002523796?cds=news_media_pc&type=editn"},{"tytle":"\uAD6D\uB0B4 RE100 \uAE30\uC5C5 21\uACF3\uC73C\uB85C \uC138\uACC4 4\uBC88\uC9F8\u2026\\"\uC778\uC13C\uD2F0\uBE0C \uC801\uADF9 \uAC80\uD1A0\\"","reporter":"\uBC15\uC0C1\uB3C8 \uAE30\uC790","content":"(\uC11C\uC6B8=\uC5F0\uD569\uB274\uC2A4) \uBC15\uC0C1\uB3C8 \uAE30\uC790 = \uC0B0\uC5C5\uD1B5\uC0C1\uC790\uC6D0\uBD80\uB294 27\uC77C \uC911\uAD6C \uB300\uD55C\uC0C1\uACF5\uD68C\uC758\uC18C\uC5D0\uC11C \uAD6D\uB0B4 RE100(2050\uB144\uAE4C\uC9C0 \uC0AC\uC6A9\uC804\uB825\uC744 100% \uC7AC\uC0DD\uC5D0\uB108\uC9C0\uB85C \uC804\uD658\uD558\uB294 \uAC83\uC744 \uBAA9\uD45C\uB85C \uD558\uB294 \uCEA0\uD398\uC778) \uCC38\uC5EC \uAE30\uC5C5\uB4E4\uACFC \uAC04\uB2F4\uD68C\uB97C \uC5F4\uACE0 RE100 \uC815\uCC45 \uBC29\uD5A5\uC744 \uB17C\uC758\uD588\uB2E4\uACE0 \uBC1D\uD614\uB2E4. \uAE00\uB85C\uBC8C \uAE30\uC5C5\uC758 \uD658\uACBD\xb7\uC0AC\uD68C\xb7\uC9C0\uBC30\uAD6C\uC870(ESG) \uACBD\uC601 \uAC15\uD654\uB85C \uC804 \uC138\uACC4 RE100 \uAC00\uC785 \uAE30\uC5C5\uC740 2014\uB144 13\uACF3\uC5D0\uC11C \uCD5C\uADFC 376\uACF3\uC73C\uB85C \uB298\uC5C8\uB2E4.","source":"https://n.news.naver.com/article/021/0002523796?cds=news_media_pc&type=editn"},{"tytle":"\'\uBB3C\uAC00 \uC815\uC810 \uC544\uC9C1 \uBA40\uC5C8\uB2E4\'\u20267\uC6D4 \uAE30\uB300\uC778\uD50C\uB808 4.7%, \uC0AC\uC0C1 \uCD5C\uACE0","reporter":"\uC774\uC8FC\uD658 \uAE30\uC790","content":"\uC18C\uBE44\uC790\uB4E4\uC758 \uAE30\uB300\uC778\uD50C\uB808\uC774\uC158\uC728(\uD5A5\uD6C4 1\uB144\uC758 \uC608\uC0C1 \uC18C\uBE44\uC790\uBB3C\uAC00 \uC0C1\uC2B9\uB960)\uC774 \uD55C \uB2EC \uB9CC\uC5D0 0.8%\uD3EC\uC778\uD2B8(P) \uC624\uB974\uBA70 4%\uB300 \uD6C4\uBC18\uAE4C\uC9C0 \uC62C\uB790\uB2E4.","source":"https://n.news.naver.com/article/021/0002523796?cds=news_media_pc&type=editn"}]}');

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
