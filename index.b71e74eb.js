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
})({"gmPuC":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5c1b77e3b71e74eb";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
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
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
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
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
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
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
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
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
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
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
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
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"h7u1C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _fs = require("fs");
var _serverboy = require("serverboy");
var _serverboyDefault = parcelHelpers.interopDefault(_serverboy);
var _ws = require("ws");
var Buffer = require("c4205b559d02a15e").Buffer;
const wss = new (0, _ws.WebSocketServer)({
    port: 6969
});
const buttons = {
    "A": (0, _serverboyDefault.default).KEYMAP.A,
    "B": (0, _serverboyDefault.default).KEYMAP.B,
    "R": (0, _serverboyDefault.default).KEYMAP.RIGHT,
    "L": (0, _serverboyDefault.default).KEYMAP.LEFT,
    "U": (0, _serverboyDefault.default).KEYMAP.DOWN,
    "D": (0, _serverboyDefault.default).KEYMAP.UP,
    "SL": (0, _serverboyDefault.default).KEYMAP.SELECT,
    "ST": (0, _serverboyDefault.default).KEYMAP.START
};
const roms = [
    "pokemon_emerald.gba",
    "pokemon_crystal.gbc",
    "doom_2.gba"
];
function loadGame(gb, game, sav) {
    game = game < 0 ? 0 : game >= roms.length ? roms.length - 1 : game;
    var file_path = `./roms/${roms[game]}`;
    const rom = _fs.readFileSync(file_path);
    if (sav) gb.loadRom(rom, sav);
    else gb.loadRom(rom);
}
wss.on("connection", async function connection(ws) {
    var ready = false;
    const gb = new (0, _serverboyDefault.default)();
    var interval_id2 = setInterval(()=>{
        if (!ready) return;
        gb.doFrame();
    }, 1000 / 120);
    var interval_id1 = setInterval(()=>{
        if (!ready) return;
        var pix = gb.getScreen();
        var str = "scrn" + Buffer.from(pix, "ascii");
        ws.send(str);
    }, 1000 / 30);
    ws.on("message", (data)=>{
        var dat = data.toString();
        if (dat.length < 4) gb.pressKey(buttons[dat]);
        else switch(dat.substring(0, 3)){
            case "save":
                var str = "save" + gb.getSaveData();
                ws.send(str);
                break;
            case "load":
                var strs = dat.split("|");
                loadGame(gb, Number.parseInt(strs[1]), strs[2]);
                ready = true;
                break;
        }
    });
    ws.on("close", async function disconnect() {
        clearInterval(interval_id1);
        clearInterval(interval_id2);
    });
});

},{"c4205b559d02a15e":"fCgem","fs":"jhUEF","serverboy":"62rIr","ws":"4OuWD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fCgem":[function(require,module,exports) {
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ /* eslint-disable no-proto */ "use strict";
const base64 = require("9c62938f1dccc73c");
const ieee754 = require("aceacb6a4531a9d2");
const customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" // eslint-disable-line dot-notation
 ? Symbol["for"]("nodejs.util.inspect.custom") // eslint-disable-line dot-notation
 : null;
exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;
const K_MAX_LENGTH = 0x7fffffff;
exports.kMaxLength = K_MAX_LENGTH;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */ Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
function typedArraySupport() {
    // Can typed array instances can be augmented?
    try {
        const arr = new Uint8Array(1);
        const proto = {
            foo: function() {
                return 42;
            }
        };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
    } catch (e) {
        return false;
    }
}
Object.defineProperty(Buffer.prototype, "parent", {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.buffer;
    }
});
Object.defineProperty(Buffer.prototype, "offset", {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.byteOffset;
    }
});
function createBuffer(length) {
    if (length > K_MAX_LENGTH) throw new RangeError('The value "' + length + '" is invalid for option "size"');
    // Return an augmented `Uint8Array` instance
    const buf = new Uint8Array(length);
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */ function Buffer(arg, encodingOrOffset, length) {
    // Common case.
    if (typeof arg === "number") {
        if (typeof encodingOrOffset === "string") throw new TypeError('The "string" argument must be of type string. Received type number');
        return allocUnsafe(arg);
    }
    return from(arg, encodingOrOffset, length);
}
Buffer.poolSize = 8192 // not used by this implementation
;
function from(value, encodingOrOffset, length) {
    if (typeof value === "string") return fromString(value, encodingOrOffset);
    if (ArrayBuffer.isView(value)) return fromArrayView(value);
    if (value == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
    if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof value === "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
    const valueOf = value.valueOf && value.valueOf();
    if (valueOf != null && valueOf !== value) return Buffer.from(valueOf, encodingOrOffset, length);
    const b = fromObject(value);
    if (b) return b;
    if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") return Buffer.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/ Buffer.from = function(value, encodingOrOffset, length) {
    return from(value, encodingOrOffset, length);
};
// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
Object.setPrototypeOf(Buffer, Uint8Array);
function assertSize(size) {
    if (typeof size !== "number") throw new TypeError('"size" argument must be of type number');
    else if (size < 0) throw new RangeError('The value "' + size + '" is invalid for option "size"');
}
function alloc(size, fill, encoding) {
    assertSize(size);
    if (size <= 0) return createBuffer(size);
    if (fill !== undefined) // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
    return createBuffer(size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/ Buffer.alloc = function(size, fill, encoding) {
    return alloc(size, fill, encoding);
};
function allocUnsafe(size) {
    assertSize(size);
    return createBuffer(size < 0 ? 0 : checked(size) | 0);
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */ Buffer.allocUnsafe = function(size) {
    return allocUnsafe(size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */ Buffer.allocUnsafeSlow = function(size) {
    return allocUnsafe(size);
};
function fromString(string, encoding) {
    if (typeof encoding !== "string" || encoding === "") encoding = "utf8";
    if (!Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
    const length = byteLength(string, encoding) | 0;
    let buf = createBuffer(length);
    const actual = buf.write(string, encoding);
    if (actual !== length) // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual);
    return buf;
}
function fromArrayLike(array) {
    const length = array.length < 0 ? 0 : checked(array.length) | 0;
    const buf = createBuffer(length);
    for(let i = 0; i < length; i += 1)buf[i] = array[i] & 255;
    return buf;
}
function fromArrayView(arrayView) {
    if (isInstance(arrayView, Uint8Array)) {
        const copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
    }
    return fromArrayLike(arrayView);
}
function fromArrayBuffer(array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError('"offset" is outside of buffer bounds');
    if (array.byteLength < byteOffset + (length || 0)) throw new RangeError('"length" is outside of buffer bounds');
    let buf;
    if (byteOffset === undefined && length === undefined) buf = new Uint8Array(array);
    else if (length === undefined) buf = new Uint8Array(array, byteOffset);
    else buf = new Uint8Array(array, byteOffset, length);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
function fromObject(obj) {
    if (Buffer.isBuffer(obj)) {
        const len = checked(obj.length) | 0;
        const buf = createBuffer(len);
        if (buf.length === 0) return buf;
        obj.copy(buf, 0, 0, len);
        return buf;
    }
    if (obj.length !== undefined) {
        if (typeof obj.length !== "number" || numberIsNaN(obj.length)) return createBuffer(0);
        return fromArrayLike(obj);
    }
    if (obj.type === "Buffer" && Array.isArray(obj.data)) return fromArrayLike(obj.data);
}
function checked(length) {
    // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= K_MAX_LENGTH) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
    return length | 0;
}
function SlowBuffer(length) {
    if (+length != length) length = 0;
    return Buffer.alloc(+length);
}
Buffer.isBuffer = function isBuffer(b) {
    return b != null && b._isBuffer === true && b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
    ;
};
Buffer.compare = function compare(a, b) {
    if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
    if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (a === b) return 0;
    let x = a.length;
    let y = b.length;
    for(let i = 0, len = Math.min(x, y); i < len; ++i)if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
Buffer.isEncoding = function isEncoding(encoding) {
    switch(String(encoding).toLowerCase()){
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return true;
        default:
            return false;
    }
};
Buffer.concat = function concat(list, length) {
    if (!Array.isArray(list)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (list.length === 0) return Buffer.alloc(0);
    let i;
    if (length === undefined) {
        length = 0;
        for(i = 0; i < list.length; ++i)length += list[i].length;
    }
    const buffer = Buffer.allocUnsafe(length);
    let pos = 0;
    for(i = 0; i < list.length; ++i){
        let buf = list[i];
        if (isInstance(buf, Uint8Array)) {
            if (pos + buf.length > buffer.length) {
                if (!Buffer.isBuffer(buf)) buf = Buffer.from(buf);
                buf.copy(buffer, pos);
            } else Uint8Array.prototype.set.call(buffer, buf, pos);
        } else if (!Buffer.isBuffer(buf)) throw new TypeError('"list" argument must be an Array of Buffers');
        else buf.copy(buffer, pos);
        pos += buf.length;
    }
    return buffer;
};
function byteLength(string, encoding) {
    if (Buffer.isBuffer(string)) return string.length;
    if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) return string.byteLength;
    if (typeof string !== "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string);
    const len = string.length;
    const mustMatch = arguments.length > 2 && arguments[2] === true;
    if (!mustMatch && len === 0) return 0;
    // Use a for loop to avoid recursion
    let loweredCase = false;
    for(;;)switch(encoding){
        case "ascii":
        case "latin1":
        case "binary":
            return len;
        case "utf8":
        case "utf-8":
            return utf8ToBytes(string).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return len * 2;
        case "hex":
            return len >>> 1;
        case "base64":
            return base64ToBytes(string).length;
        default:
            if (loweredCase) return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
            ;
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
    }
}
Buffer.byteLength = byteLength;
function slowToString(encoding, start, end) {
    let loweredCase = false;
    // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
    // property of a typed array.
    // This behaves neither like String nor Uint8Array in that we set start/end
    // to their upper/lower bounds if the value passed is out of range.
    // undefined is handled specially as per ECMA-262 6th Edition,
    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
    if (start === undefined || start < 0) start = 0;
    // Return early if start > this.length. Done here to prevent potential uint32
    // coercion fail below.
    if (start > this.length) return "";
    if (end === undefined || end > this.length) end = this.length;
    if (end <= 0) return "";
    // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
    end >>>= 0;
    start >>>= 0;
    if (end <= start) return "";
    if (!encoding) encoding = "utf8";
    while(true)switch(encoding){
        case "hex":
            return hexSlice(this, start, end);
        case "utf8":
        case "utf-8":
            return utf8Slice(this, start, end);
        case "ascii":
            return asciiSlice(this, start, end);
        case "latin1":
        case "binary":
            return latin1Slice(this, start, end);
        case "base64":
            return base64Slice(this, start, end);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return utf16leSlice(this, start, end);
        default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = (encoding + "").toLowerCase();
            loweredCase = true;
    }
}
// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true;
function swap(b, n, m) {
    const i = b[n];
    b[n] = b[m];
    b[m] = i;
}
Buffer.prototype.swap16 = function swap16() {
    const len = this.length;
    if (len % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
    for(let i = 0; i < len; i += 2)swap(this, i, i + 1);
    return this;
};
Buffer.prototype.swap32 = function swap32() {
    const len = this.length;
    if (len % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
    for(let i = 0; i < len; i += 4){
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
    }
    return this;
};
Buffer.prototype.swap64 = function swap64() {
    const len = this.length;
    if (len % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
    for(let i = 0; i < len; i += 8){
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
    }
    return this;
};
Buffer.prototype.toString = function toString() {
    const length = this.length;
    if (length === 0) return "";
    if (arguments.length === 0) return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
};
Buffer.prototype.toLocaleString = Buffer.prototype.toString;
Buffer.prototype.equals = function equals(b) {
    if (!Buffer.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
    if (this === b) return true;
    return Buffer.compare(this, b) === 0;
};
Buffer.prototype.inspect = function inspect() {
    let str = "";
    const max = exports.INSPECT_MAX_BYTES;
    str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
    if (this.length > max) str += " ... ";
    return "<Buffer " + str + ">";
};
if (customInspectSymbol) Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
    if (isInstance(target, Uint8Array)) target = Buffer.from(target, target.offset, target.byteLength);
    if (!Buffer.isBuffer(target)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target);
    if (start === undefined) start = 0;
    if (end === undefined) end = target ? target.length : 0;
    if (thisStart === undefined) thisStart = 0;
    if (thisEnd === undefined) thisEnd = this.length;
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError("out of range index");
    if (thisStart >= thisEnd && start >= end) return 0;
    if (thisStart >= thisEnd) return -1;
    if (start >= end) return 1;
    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;
    if (this === target) return 0;
    let x = thisEnd - thisStart;
    let y = end - start;
    const len = Math.min(x, y);
    const thisCopy = this.slice(thisStart, thisEnd);
    const targetCopy = target.slice(start, end);
    for(let i = 0; i < len; ++i)if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i];
        y = targetCopy[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
    // Empty buffer means no match
    if (buffer.length === 0) return -1;
    // Normalize byteOffset
    if (typeof byteOffset === "string") {
        encoding = byteOffset;
        byteOffset = 0;
    } else if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff;
    else if (byteOffset < -2147483648) byteOffset = -2147483648;
    byteOffset = +byteOffset // Coerce to Number.
    ;
    if (numberIsNaN(byteOffset)) // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
    // Normalize byteOffset: negative offsets start from the end of the buffer
    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
    if (byteOffset >= buffer.length) {
        if (dir) return -1;
        else byteOffset = buffer.length - 1;
    } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
    }
    // Normalize val
    if (typeof val === "string") val = Buffer.from(val, encoding);
    // Finally, search either indexOf (if dir is true) or lastIndexOf
    if (Buffer.isBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) return -1;
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
    } else if (typeof val === "number") {
        val = val & 0xFF // Search for a byte value [0-255]
        ;
        if (typeof Uint8Array.prototype.indexOf === "function") {
            if (dir) return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            else return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
        }
        return arrayIndexOf(buffer, [
            val
        ], byteOffset, encoding, dir);
    }
    throw new TypeError("val must be string, number or Buffer");
}
function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    let indexSize = 1;
    let arrLength = arr.length;
    let valLength = val.length;
    if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase();
        if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
            if (arr.length < 2 || val.length < 2) return -1;
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
        }
    }
    function read(buf, i) {
        if (indexSize === 1) return buf[i];
        else return buf.readUInt16BE(i * indexSize);
    }
    let i;
    if (dir) {
        let foundIndex = -1;
        for(i = byteOffset; i < arrLength; i++)if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1) foundIndex = i;
            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
        } else {
            if (foundIndex !== -1) i -= i - foundIndex;
            foundIndex = -1;
        }
    } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for(i = byteOffset; i >= 0; i--){
            let found = true;
            for(let j = 0; j < valLength; j++)if (read(arr, i + j) !== read(val, j)) {
                found = false;
                break;
            }
            if (found) return i;
        }
    }
    return -1;
}
Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
};
Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};
Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};
function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    const remaining = buf.length - offset;
    if (!length) length = remaining;
    else {
        length = Number(length);
        if (length > remaining) length = remaining;
    }
    const strLen = string.length;
    if (length > strLen / 2) length = strLen / 2;
    let i;
    for(i = 0; i < length; ++i){
        const parsed = parseInt(string.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed)) return i;
        buf[offset + i] = parsed;
    }
    return i;
}
function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
}
function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
}
function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}
Buffer.prototype.write = function write(string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
        encoding = "utf8";
        length = this.length;
        offset = 0;
    // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === "string") {
        encoding = offset;
        length = this.length;
        offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
    } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
            length = length >>> 0;
            if (encoding === undefined) encoding = "utf8";
        } else {
            encoding = length;
            length = undefined;
        }
    } else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    const remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;
    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError("Attempt to write outside buffer bounds");
    if (!encoding) encoding = "utf8";
    let loweredCase = false;
    for(;;)switch(encoding){
        case "hex":
            return hexWrite(this, string, offset, length);
        case "utf8":
        case "utf-8":
            return utf8Write(this, string, offset, length);
        case "ascii":
        case "latin1":
        case "binary":
            return asciiWrite(this, string, offset, length);
        case "base64":
            // Warning: maxLength not taken into account in base64Write
            return base64Write(this, string, offset, length);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return ucs2Write(this, string, offset, length);
        default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
    }
};
Buffer.prototype.toJSON = function toJSON() {
    return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
    };
};
function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) return base64.fromByteArray(buf);
    else return base64.fromByteArray(buf.slice(start, end));
}
function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    const res = [];
    let i = start;
    while(i < end){
        const firstByte = buf[i];
        let codePoint = null;
        let bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;
        if (i + bytesPerSequence <= end) {
            let secondByte, thirdByte, fourthByte, tempCodePoint;
            switch(bytesPerSequence){
                case 1:
                    if (firstByte < 0x80) codePoint = firstByte;
                    break;
                case 2:
                    secondByte = buf[i + 1];
                    if ((secondByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
                        if (tempCodePoint > 0x7F) codePoint = tempCodePoint;
                    }
                    break;
                case 3:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
                        if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) codePoint = tempCodePoint;
                    }
                    break;
                case 4:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    fourthByte = buf[i + 3];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
                        if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) codePoint = tempCodePoint;
                    }
            }
        }
        if (codePoint === null) {
            // we did not generate a valid codePoint so insert a
            // replacement char (U+FFFD) and advance only 1 byte
            codePoint = 0xFFFD;
            bytesPerSequence = 1;
        } else if (codePoint > 0xFFFF) {
            // encode to utf16 (surrogate pair dance)
            codePoint -= 0x10000;
            res.push(codePoint >>> 10 & 0x3FF | 0xD800);
            codePoint = 0xDC00 | codePoint & 0x3FF;
        }
        res.push(codePoint);
        i += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
}
// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
const MAX_ARGUMENTS_LENGTH = 0x1000;
function decodeCodePointsArray(codePoints) {
    const len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
    ;
    // Decode in chunks to avoid "call stack size exceeded".
    let res = "";
    let i = 0;
    while(i < len)res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
    return res;
}
function asciiSlice(buf, start, end) {
    let ret = "";
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i)ret += String.fromCharCode(buf[i] & 0x7F);
    return ret;
}
function latin1Slice(buf, start, end) {
    let ret = "";
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i)ret += String.fromCharCode(buf[i]);
    return ret;
}
function hexSlice(buf, start, end) {
    const len = buf.length;
    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;
    let out = "";
    for(let i = start; i < end; ++i)out += hexSliceLookupTable[buf[i]];
    return out;
}
function utf16leSlice(buf, start, end) {
    const bytes = buf.slice(start, end);
    let res = "";
    // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
    for(let i = 0; i < bytes.length - 1; i += 2)res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    return res;
}
Buffer.prototype.slice = function slice(start, end) {
    const len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;
    if (start < 0) {
        start += len;
        if (start < 0) start = 0;
    } else if (start > len) start = len;
    if (end < 0) {
        end += len;
        if (end < 0) end = 0;
    } else if (end > len) end = len;
    if (end < start) end = start;
    const newBuf = this.subarray(start, end);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(newBuf, Buffer.prototype);
    return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */ function checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
    if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
}
Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength && (mul *= 0x100))val += this[offset + i] * mul;
    return val;
};
Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset + --byteLength];
    let mul = 1;
    while(byteLength > 0 && (mul *= 0x100))val += this[offset + --byteLength] * mul;
    return val;
};
Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    return this[offset];
};
Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
};
Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
};
Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};
Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};
Buffer.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const lo = first + this[++offset] * 256 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
    const hi = this[++offset] + this[++offset] * 256 + this[++offset] * 2 ** 16 + last * 2 ** 24;
    return BigInt(lo) + (BigInt(hi) << BigInt(32));
});
Buffer.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + this[++offset];
    const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + last;
    return (BigInt(hi) << BigInt(32)) + BigInt(lo);
});
Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength && (mul *= 0x100))val += this[offset + i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let i = byteLength;
    let mul = 1;
    let val = this[offset + --i];
    while(i > 0 && (mul *= 0x100))val += this[offset + --i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    if (!(this[offset] & 0x80)) return this[offset];
    return (0xff - this[offset] + 1) * -1;
};
Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset] | this[offset + 1] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset + 1] | this[offset] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};
Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};
Buffer.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const val = this[offset + 4] + this[offset + 5] * 256 + this[offset + 6] * 2 ** 16 + (last << 24 // Overflow
    );
    return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 256 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
});
Buffer.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const val = (first << 24) + // Overflow
    this[++offset] * 2 ** 16 + this[++offset] * 256 + this[++offset];
    return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + last);
});
Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, true, 23, 4);
};
Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, false, 23, 4);
};
Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, true, 52, 8);
};
Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, false, 52, 8);
};
function checkInt(buf, value, offset, ext, max, min) {
    if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length) throw new RangeError("Index out of range");
}
Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    let mul = 1;
    let i = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength;
};
Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    let i = byteLength - 1;
    let mul = 1;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength;
};
Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
function wrtBigUInt64LE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(0xffffffff));
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    return offset;
}
function wrtBigUInt64BE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(0xffffffff));
    buf[offset + 7] = lo;
    lo = lo >> 8;
    buf[offset + 6] = lo;
    lo = lo >> 8;
    buf[offset + 5] = lo;
    lo = lo >> 8;
    buf[offset + 4] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
    buf[offset + 3] = hi;
    hi = hi >> 8;
    buf[offset + 2] = hi;
    hi = hi >> 8;
    buf[offset + 1] = hi;
    hi = hi >> 8;
    buf[offset] = hi;
    return offset + 8;
}
Buffer.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
});
Buffer.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
});
Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    let i = 0;
    let mul = 1;
    let sub = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    let i = byteLength - 1;
    let mul = 1;
    let sub = 0;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -128);
    if (value < 0) value = 0xff + value + 1;
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
    return offset + 4;
};
Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    if (value < 0) value = 0xffffffff + value + 1;
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
});
Buffer.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
});
function checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError("Index out of range");
    if (offset < 0) throw new RangeError("Index out of range");
}
function writeFloat(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -340282346638528860000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
}
Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
};
Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
};
function writeDouble(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
}
Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert);
};
Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert);
};
// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!Buffer.isBuffer(target)) throw new TypeError("argument should be a Buffer");
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;
    // Copy 0 bytes; we're done
    if (end === start) return 0;
    if (target.length === 0 || this.length === 0) return 0;
    // Fatal error conditions
    if (targetStart < 0) throw new RangeError("targetStart out of bounds");
    if (start < 0 || start >= this.length) throw new RangeError("Index out of range");
    if (end < 0) throw new RangeError("sourceEnd out of bounds");
    // Are we oob?
    if (end > this.length) end = this.length;
    if (target.length - targetStart < end - start) end = target.length - targetStart + start;
    const len = end - start;
    if (this === target && typeof Uint8Array.prototype.copyWithin === "function") // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end);
    else Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
    return len;
};
// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill(val, start, end, encoding) {
    // Handle string cases:
    if (typeof val === "string") {
        if (typeof start === "string") {
            encoding = start;
            start = 0;
            end = this.length;
        } else if (typeof end === "string") {
            encoding = end;
            end = this.length;
        }
        if (encoding !== undefined && typeof encoding !== "string") throw new TypeError("encoding must be a string");
        if (typeof encoding === "string" && !Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
        if (val.length === 1) {
            const code = val.charCodeAt(0);
            if (encoding === "utf8" && code < 128 || encoding === "latin1") // Fast path: If `val` fits into a single byte, use that numeric value.
            val = code;
        }
    } else if (typeof val === "number") val = val & 255;
    else if (typeof val === "boolean") val = Number(val);
    // Invalid ranges are not set to a default, so can range check early.
    if (start < 0 || this.length < start || this.length < end) throw new RangeError("Out of range index");
    if (end <= start) return this;
    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;
    if (!val) val = 0;
    let i;
    if (typeof val === "number") for(i = start; i < end; ++i)this[i] = val;
    else {
        const bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
        const len = bytes.length;
        if (len === 0) throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        for(i = 0; i < end - start; ++i)this[i + start] = bytes[i % len];
    }
    return this;
};
// CUSTOM ERRORS
// =============
// Simplified versions from Node, changed for Buffer-only usage
const errors = {};
function E(sym, getMessage, Base) {
    errors[sym] = class NodeError extends Base {
        constructor(){
            super();
            Object.defineProperty(this, "message", {
                value: getMessage.apply(this, arguments),
                writable: true,
                configurable: true
            });
            // Add the error code to the name to include it in the stack trace.
            this.name = `${this.name} [${sym}]`;
            // Access the stack to generate the error message including the error code
            // from the name.
            this.stack // eslint-disable-line no-unused-expressions
            ;
            // Reset the name to the actual name.
            delete this.name;
        }
        get code() {
            return sym;
        }
        set code(value) {
            Object.defineProperty(this, "code", {
                configurable: true,
                enumerable: true,
                value,
                writable: true
            });
        }
        toString() {
            return `${this.name} [${sym}]: ${this.message}`;
        }
    };
}
E("ERR_BUFFER_OUT_OF_BOUNDS", function(name) {
    if (name) return `${name} is outside of buffer bounds`;
    return "Attempt to access memory outside buffer bounds";
}, RangeError);
E("ERR_INVALID_ARG_TYPE", function(name, actual) {
    return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
}, TypeError);
E("ERR_OUT_OF_RANGE", function(str, range, input) {
    let msg = `The value of "${str}" is out of range.`;
    let received = input;
    if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) received = addNumericalSeparator(String(input));
    else if (typeof input === "bigint") {
        received = String(input);
        if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) received = addNumericalSeparator(received);
        received += "n";
    }
    msg += ` It must be ${range}. Received ${received}`;
    return msg;
}, RangeError);
function addNumericalSeparator(val) {
    let res = "";
    let i = val.length;
    const start = val[0] === "-" ? 1 : 0;
    for(; i >= start + 4; i -= 3)res = `_${val.slice(i - 3, i)}${res}`;
    return `${val.slice(0, i)}${res}`;
}
// CHECK FUNCTIONS
// ===============
function checkBounds(buf, offset, byteLength) {
    validateNumber(offset, "offset");
    if (buf[offset] === undefined || buf[offset + byteLength] === undefined) boundsError(offset, buf.length - (byteLength + 1));
}
function checkIntBI(value, min, max, buf, offset, byteLength) {
    if (value > max || value < min) {
        const n = typeof min === "bigint" ? "n" : "";
        let range;
        if (byteLength > 3) {
            if (min === 0 || min === BigInt(0)) range = `>= 0${n} and < 2${n} ** ${(byteLength + 1) * 8}${n}`;
            else range = `>= -(2${n} ** ${(byteLength + 1) * 8 - 1}${n}) and < 2 ** ` + `${(byteLength + 1) * 8 - 1}${n}`;
        } else range = `>= ${min}${n} and <= ${max}${n}`;
        throw new errors.ERR_OUT_OF_RANGE("value", range, value);
    }
    checkBounds(buf, offset, byteLength);
}
function validateNumber(value, name) {
    if (typeof value !== "number") throw new errors.ERR_INVALID_ARG_TYPE(name, "number", value);
}
function boundsError(value, length, type) {
    if (Math.floor(value) !== value) {
        validateNumber(value, type);
        throw new errors.ERR_OUT_OF_RANGE(type || "offset", "an integer", value);
    }
    if (length < 0) throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
    throw new errors.ERR_OUT_OF_RANGE(type || "offset", `>= ${type ? 1 : 0} and <= ${length}`, value);
}
// HELPER FUNCTIONS
// ================
const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
function base64clean(str) {
    // Node takes equal signs as end of the Base64 encoding
    str = str.split("=")[0];
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = str.trim().replace(INVALID_BASE64_RE, "");
    // Node converts strings with length < 2 to ''
    if (str.length < 2) return "";
    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
    while(str.length % 4 !== 0)str = str + "=";
    return str;
}
function utf8ToBytes(string, units) {
    units = units || Infinity;
    let codePoint;
    const length = string.length;
    let leadSurrogate = null;
    const bytes = [];
    for(let i = 0; i < length; ++i){
        codePoint = string.charCodeAt(i);
        // is surrogate component
        if (codePoint > 0xD7FF && codePoint < 0xE000) {
            // last char was a lead
            if (!leadSurrogate) {
                // no lead yet
                if (codePoint > 0xDBFF) {
                    // unexpected trail
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                } else if (i + 1 === length) {
                    // unpaired lead
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                }
                // valid lead
                leadSurrogate = codePoint;
                continue;
            }
            // 2 leads in a row
            if (codePoint < 0xDC00) {
                if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                leadSurrogate = codePoint;
                continue;
            }
            // valid surrogate pair
            codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
        } else if (leadSurrogate) // valid bmp char, but last char was a lead
        {
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        }
        leadSurrogate = null;
        // encode utf8
        if (codePoint < 0x80) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
        } else if (codePoint < 0x800) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x10000) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x110000) {
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else throw new Error("Invalid code point");
    }
    return bytes;
}
function asciiToBytes(str) {
    const byteArray = [];
    for(let i = 0; i < str.length; ++i)// Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
    return byteArray;
}
function utf16leToBytes(str, units) {
    let c, hi, lo;
    const byteArray = [];
    for(let i = 0; i < str.length; ++i){
        if ((units -= 2) < 0) break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
    }
    return byteArray;
}
function base64ToBytes(str) {
    return base64.toByteArray(base64clean(str));
}
function blitBuffer(src, dst, offset, length) {
    let i;
    for(i = 0; i < length; ++i){
        if (i + offset >= dst.length || i >= src.length) break;
        dst[i + offset] = src[i];
    }
    return i;
}
// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance(obj, type) {
    return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
}
function numberIsNaN(obj) {
    // For IE11 support
    return obj !== obj // eslint-disable-line no-self-compare
    ;
}
// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
const hexSliceLookupTable = function() {
    const alphabet = "0123456789abcdef";
    const table = new Array(256);
    for(let i = 0; i < 16; ++i){
        const i16 = i * 16;
        for(let j = 0; j < 16; ++j)table[i16 + j] = alphabet[i] + alphabet[j];
    }
    return table;
}();
// Return not function with Error if BigInt not supported
function defineBigIntMethod(fn) {
    return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn;
}
function BufferBigIntNotDefined() {
    throw new Error("BigInt not supported");
}

},{"9c62938f1dccc73c":"eIiSV","aceacb6a4531a9d2":"cO95r"}],"eIiSV":[function(require,module,exports) {
"use strict";
exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for(var i = 0, len = code.length; i < len; ++i){
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
}
// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup["-".charCodeAt(0)] = 62;
revLookup["_".charCodeAt(0)] = 63;
function getLens(b64) {
    var len = b64.length;
    if (len % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
    // Trim off extra bytes after placeholder bytes are found
    // See: https://github.com/beatgammit/base64-js/issues/42
    var validLen = b64.indexOf("=");
    if (validLen === -1) validLen = len;
    var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
    return [
        validLen,
        placeHoldersLen
    ];
}
// base64 is 4/3 + up to two characters of the original data
function byteLength(b64) {
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function _byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function toByteArray(b64) {
    var tmp;
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    // if there are placeholders, only get up to the last complete 4 chars
    var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i;
    for(i = 0; i < len; i += 4){
        tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
        arr[curByte++] = tmp >> 16 & 0xFF;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    return arr;
}
function tripletToBase64(num) {
    return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}
function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for(var i = start; i < end; i += 3){
        tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
        output.push(tripletToBase64(tmp));
    }
    return output.join("");
}
function fromByteArray(uint8) {
    var tmp;
    var len = uint8.length;
    var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
    ;
    var parts = [];
    var maxChunkLength = 16383 // must be multiple of 3
    ;
    // go through the array every three bytes, we'll deal with trailing stuff later
    for(var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength)parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
        tmp = uint8[len - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + "==");
    } else if (extraBytes === 2) {
        tmp = (uint8[len - 2] << 8) + uint8[len - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + "=");
    }
    return parts.join("");
}

},{}],"cO95r":[function(require,module,exports) {
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ exports.read = function(buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for(; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for(; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);
    if (e === 0) e = 1 - eBias;
    else if (e === eMax) return m ? NaN : (s ? -1 : 1) * Infinity;
    else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};
exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
    } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
        }
        if (e + eBias >= 1) value += rt / c;
        else value += rt * Math.pow(2, 1 - eBias);
        if (value * c >= 2) {
            e++;
            c /= 2;
        }
        if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
        } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
        } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
        }
    }
    for(; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8);
    e = e << mLen | m;
    eLen += mLen;
    for(; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8);
    buffer[offset + i - d] |= s * 128;
};

},{}],"jhUEF":[function(require,module,exports) {
"use strict";

},{}],"62rIr":[function(require,module,exports) {
var process = require("eb1f204e41ff3cf0");
"use-strict";
var GameBoyCore = require("99baefdfde21bd96");
const KEYMAP = {
    RIGHT: 0,
    LEFT: 1,
    UP: 2,
    DOWN: 3,
    A: 4,
    B: 5,
    SELECT: 6,
    START: 7
};
const PRIVATE = "_" + process.hrtime().join(".");
function Interface() {
    let _that = this[PRIVATE] = {
        __proto__: Interface._prototype,
        gameboy: null,
        frames: 0,
        pressed: new Array(Object.keys(KEYMAP).length)
    };
    _that[PRIVATE] = _that;
}
Interface._prototype = {
    //Check to make sure the gameboy object has been created.
    initialized: function() {
        let _that = this[PRIVATE];
        return typeof _that.gameboy === "object" && _that.gameboy != null;
    },
    /*
     *Make sure that the emulator is "running" (note that this is different than play/pause)
     *Think of it like turning the key in your ignition before you start driving your car
     *TODO: does `true` mean it's running or does `true` mean it's stopped?
     */ running: function() {
        let _that = this[PRIVATE];
        return (_that.gameboy.stopEmulator & 2) == 0;
    },
    /*
     * Presses or releases a key
     * - note that in the gameboy core, a key will stay pressed until it has been explicitly released.
     * - will do nothing if the emulator is running
     *
     * @param keycode 1-8 number of the key to press (see Interface.KEYCODES)
     * @param `true` to press key, `false` to release
     */ sendKey: function(keycode, down) {
        let _that = this[PRIVATE];
        if (_that.initialized() && _that.running()) _that.gameboy.JoyPadEvent(keycode, down);
    },
    //Stop emulator, reset relevant variables
    shutdownEmulation: function() {
        let _that = this[PRIVATE];
        if (_that.initialized() && _that.running()) {
            _that.gameboy.stopEmulator |= 2;
            _that.frames = 0; //Reset internal variables
        }
    }
};
Interface.prototype = {
    constructor: Interface,
    /*
     * Load a ROM - like popping in a new cartridge
     * - Won't do anything if the emulator hasn't been initialized.
     *
     * TODO: better documentation on what ROMs are and how they should be formatted.
     */ loadRom: function(ROM, saveData) {
        let that = this;
        let _that = this[PRIVATE];
        // if (!_that.initialized()) {
        //     return false;
        // }
        //TODO: autosave last state?
        _that.shutdownEmulation(); //Will shut down emulator if it's still running.
        _that.gameboy = new GameBoyCore(ROM);
        _that.gameboy.openMBC = function(title) {
            /* TODO: you can load in from a specific title? Kind of cool, I guess. */ return saveData || [];
        };
        //Start emulator (some logic in here that needs to be documented)
        _that.gameboy.start();
        _that.gameboy.stopEmulator &= 1;
        _that.gameboy.iterations = 0;
        return true;
    },
    /*
     * Emulates a single frame
     *
     * TODO: add documentation for imageData
     * @param partial - DEPRECATED - whether or not to render the entire screen or just the changed bits
     * @returns Array - image data for that frame, which can later be converted into a canvas writeable format
     */ doFrame: function(partial) {
        let _that = this[PRIVATE];
        //Press required keys
        for(let i = _that.pressed.length - 1; i >= 0; i--)if (_that.pressed[i]) _that.sendKey(i, true);
        _that.gameboy.frameDone = false;
        while(!_that.gameboy.frameDone)_that.gameboy.run(); //Run internal logic until the entire frame as finished.
        //Release all keys
        for(let i = _that.pressed.length - 1; i >= 0; i--){
            _that.pressed[i] = false;
            _that.sendKey(i, false);
        }
        ++_that.frames;
        return partial ? _that.gameboy.partialScreen : _that.gameboy.currentScreen;
    },
    /*
     * Pass in an array of keys you want pressed
     * - this array should be propogated with values from ``Interface.KEYMAP``
     * - you can not undo a press. Once a key is pressed it stays pressed until the end of the frame.
     */ pressKeys: function(keys) {
        keys = keys || [];
        let that = this;
        for(let i = keys.length - 1; i >= 0; i--)that.pressKey(keys[i]);
    },
    /*
     * Presses a key corresponding with ``Interface.KEYMAP``
     * - you can not undo a press. Once a key is pressed it stays pressed until the end of the frame.
     */ pressKey: function(key) {
        let _that = this[PRIVATE];
        if (typeof key === "string") key = KEYMAP[key.toUpperCase()];
        if (key < _that.pressed.length && key != null) _that.pressed[key] = true;
    },
    /*
     * Returns an array of all currently pressed keys
     * - built using the enum ``Interface.KEYMAP``
     */ getKeys: function() {
        let _that = this[PRIVATE];
        return _that.pressed.slice(0);
    },
    getScreen: function() {
        var _that = this[PRIVATE];
        return _that.gameboy.currentScreen;
    },
    /*
     * Gets a block of memory, you can specify a start and an end if you want
     * - this is an expensive operation and should be called sparingly
     *
     * TODO perf test ``slice`` vs a ``for`` loop
     */ getMemory: function(start, end) {
        let _that = this[PRIVATE];
        start = start || 0;
        end = end || _that.gameboy.memory.length - 1;
        start = Math.max(start, 0);
        end = Math.min(end, _that.gameboy.memory.length - 1);
        if (start === 0 && end === _that.gameboy.memory.length - 1) return _that.gameboy.memory;
        return _that.gameboy.memory.slice(start, end); //Why are you doing this functionally instead of just returning the entire object?
    //Is it for speed?
    },
    getAudio: function() {
        let _that = this[PRIVATE];
        return _that.gameboy.audioBuffer;
    },
    getSaveData: function() {
        let _that = this[PRIVATE];
        return _that.gameboy.saveSRAMState();
    },
    setMemory: function(start, data) {
        let _that = this[PRIVATE];
        start = Math.max(start, 0);
        for(let i = 0; i < start.length; i++)_that.gameboy.memory[start + i] = data[i];
    }
};
Interface.KEYMAP = KEYMAP;
module.exports = Interface;

},{"eb1f204e41ff3cf0":"d5jf4","99baefdfde21bd96":"48RGu"}],"d5jf4":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
}
(function() {
    try {
        if (typeof setTimeout === "function") cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === "function") cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = "browser";
process.browser = true;
process.env = {};
process.argv = [];
process.version = ""; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error("process.binding is not supported");
};
process.cwd = function() {
    return "/";
};
process.chdir = function(dir) {
    throw new Error("process.chdir is not supported");
};
process.umask = function() {
    return 0;
};

},{}],"48RGu":[function(require,module,exports) {
"use strict";
/*
 * JavaScript GameBoy Color Emulator
 * Copyright (C) 2010 - 2012 Grant Galitz
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * version 2 as published by the Free Software Foundation.
 * The full license is available at http://www.gnu.org/licenses/gpl.html
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 */ var Instance = require("f1eb7863cf8d479a");
var settings = require("26fbb729a3869922");
var saving = require("29bab87933ef3c07");
//I need to mock a whole bunch of stuff on top of this.
//var XAudioServer = require('./audio/XAudioServer.js');
//TODO: Fix and reimplement missing function.
function cout() {}
function pause() {}
function GameBoyCore(ROMImage) {
    Instance.call(this, ROMImage);
    this.ROMImageIsString = "string" == typeof ROMImage;
}
GameBoyCore.prototype = {
    constructor: GameBoyCore,
    //-----------------ARCHITECTURE-------------------------
    GBBOOTROM: [],
    GBCBOOTROM: [],
    ffxxDump: require("2f35cabb1a9dd5c0"),
    OPCODE: require("5ecdc9876ae6a172"),
    CBOPCODE: require("d8ecbed08da203a8"),
    TICKTable: require("2e5fc13e957575d3"),
    SecondaryTICKTable: require("18b16725eeaea82a"),
    //-------------------------------------------------------
    //------------SAVE/LOAD----------------------------------
    saveState: saving.saveState,
    saving: saving.returnFromState,
    saveSRAMState: function() {
        if (!this.cBATT || this.MBCRam.length == 0) return []; //No bettery backup...
        return this.fromTypedArray(this.MBCRam);
    },
    saveRTCState: function() {
        if (!this.cTIMER) return []; //No battery backup
        //Return the MBC RAM for backup...
        return [
            this.lastIteration,
            this.RTCisLatched,
            this.latchedSeconds,
            this.latchedMinutes,
            this.latchedHours,
            this.latchedLDays,
            this.latchedHDays,
            this.RTCSeconds,
            this.RTCMinutes,
            this.RTCHours,
            this.RTCDays,
            this.RTCDayOverFlow,
            this.RTCHALT
        ];
    }
};
GameBoyCore.prototype.returnFromRTCState = function() {
    if (typeof this.openRTC == "function" && this.cTIMER) {
        var rtcData = this.openRTC(this.name);
        var index = 0;
        this.lastIteration = rtcData[index++];
        this.RTCisLatched = rtcData[index++];
        this.latchedSeconds = rtcData[index++];
        this.latchedMinutes = rtcData[index++];
        this.latchedHours = rtcData[index++];
        this.latchedLDays = rtcData[index++];
        this.latchedHDays = rtcData[index++];
        this.RTCSeconds = rtcData[index++];
        this.RTCMinutes = rtcData[index++];
        this.RTCHours = rtcData[index++];
        this.RTCDays = rtcData[index++];
        this.RTCDayOverFlow = rtcData[index++];
        this.RTCHALT = rtcData[index];
    }
};
GameBoyCore.prototype.start = function() {
    this.initMemory(); //Write the startup memory.
    this.ROMLoad(); //Load the ROM into memory and get cartridge information from it.
    this.initLCD(); //Initialize the graphics.
    this.initSound(); //Sound object initialization. Optional.
    this.run(); //Start the emulation.
};
GameBoyCore.prototype.initMemory = function() {
    //Initialize the RAM:
    this.memory = this.getTypedArray(0x10000, 0, "uint8");
    this.frameBuffer = this.getTypedArray(23040, 0xF8F8F8, "int32");
    this.BGCHRBank1 = this.getTypedArray(0x800, 0, "uint8");
    this.TICKTable = this.toTypedArray(this.TICKTable, "uint8");
    this.SecondaryTICKTable = this.toTypedArray(this.SecondaryTICKTable, "uint8");
    this.channel3PCM = this.getTypedArray(0x20, 0, "int8");
};
GameBoyCore.prototype.generateCacheArray = function(tileAmount) {
    var tileArray = [];
    var tileNumber = 0;
    while(tileNumber < tileAmount)tileArray[tileNumber++] = this.getTypedArray(64, 0, "uint8");
    return tileArray;
};
GameBoyCore.prototype.initSkipBootstrap = function() {
    //Fill in the boot ROM set register values
    //Default values to the GB boot ROM values, then fill in the GBC boot ROM values after ROM loading
    var index = 0xFF;
    while(index >= 0){
        if (index >= 0x30 && index < 0x40) this.memoryWrite(0xFF00 | index, this.ffxxDump[index]);
        else switch(index){
            case 0x00:
            case 0x01:
            case 0x02:
            case 0x05:
            case 0x07:
            case 0x0F:
            case 0xFF:
                this.memoryWrite(0xFF00 | index, this.ffxxDump[index]);
                break;
            default:
                this.memory[0xFF00 | index] = this.ffxxDump[index];
        }
        --index;
    }
    if (this.cGBC) {
        this.memory[0xFF6C] = 0xFE;
        this.memory[0xFF74] = 0xFE;
    } else {
        this.memory[0xFF48] = 0xFF;
        this.memory[0xFF49] = 0xFF;
        this.memory[0xFF6C] = 0xFF;
        this.memory[0xFF74] = 0xFF;
    }
    //Start as an unset device:
    cout("Starting without the GBC boot ROM.", 0);
    this.registerA = this.cGBC ? 0x11 : 0x1;
    this.registerB = 0;
    this.registerC = 0x13;
    this.registerD = 0;
    this.registerE = 0xD8;
    this.FZero = true;
    this.FSubtract = false;
    this.FHalfCarry = true;
    this.FCarry = true;
    this.registersHL = 0x014D;
    this.LCDCONTROL = this.LINECONTROL;
    this.IME = false;
    this.IRQLineMatched = 0;
    this.interruptsRequested = 225;
    this.interruptsEnabled = 0;
    this.hdmaRunning = false;
    this.CPUTicks = 12;
    this.STATTracker = 0;
    this.modeSTAT = 1;
    this.spriteCount = 252;
    this.LYCMatchTriggerSTAT = false;
    this.mode2TriggerSTAT = false;
    this.mode1TriggerSTAT = false;
    this.mode0TriggerSTAT = false;
    this.LCDisOn = true;
    this.channel1FrequencyTracker = 0x2000;
    this.channel1DutyTracker = 0;
    this.channel1CachedDuty = this.dutyLookup[2];
    this.channel1totalLength = 0;
    this.channel1envelopeVolume = 0;
    this.channel1envelopeType = false;
    this.channel1envelopeSweeps = 0;
    this.channel1envelopeSweepsLast = 0;
    this.channel1consecutive = true;
    this.channel1frequency = 1985;
    this.channel1SweepFault = true;
    this.channel1ShadowFrequency = 1985;
    this.channel1timeSweep = 1;
    this.channel1lastTimeSweep = 0;
    this.channel1Swept = false;
    this.channel1frequencySweepDivider = 0;
    this.channel1decreaseSweep = false;
    this.channel2FrequencyTracker = 0x2000;
    this.channel2DutyTracker = 0;
    this.channel2CachedDuty = this.dutyLookup[2];
    this.channel2totalLength = 0;
    this.channel2envelopeVolume = 0;
    this.channel2envelopeType = false;
    this.channel2envelopeSweeps = 0;
    this.channel2envelopeSweepsLast = 0;
    this.channel2consecutive = true;
    this.channel2frequency = 0;
    this.channel3canPlay = false;
    this.channel3totalLength = 0;
    this.channel3patternType = 4;
    this.channel3frequency = 0;
    this.channel3consecutive = true;
    this.channel3Counter = 0x418;
    this.channel4FrequencyPeriod = 8;
    this.channel4totalLength = 0;
    this.channel4envelopeVolume = 0;
    this.channel4currentVolume = 0;
    this.channel4envelopeType = false;
    this.channel4envelopeSweeps = 0;
    this.channel4envelopeSweepsLast = 0;
    this.channel4consecutive = true;
    this.channel4BitRange = 0x7FFF;
    this.channel4VolumeShifter = 15;
    this.channel1FrequencyCounter = 0x200;
    this.channel2FrequencyCounter = 0x200;
    this.channel3Counter = 0x800;
    this.channel3FrequencyPeriod = 0x800;
    this.channel3lastSampleLookup = 0;
    this.channel4lastSampleLookup = 0;
    this.VinLeftChannelMasterVolume = 8;
    this.VinRightChannelMasterVolume = 8;
    this.soundMasterEnabled = true;
    this.leftChannel1 = true;
    this.leftChannel2 = true;
    this.leftChannel3 = true;
    this.leftChannel4 = true;
    this.rightChannel1 = true;
    this.rightChannel2 = true;
    this.rightChannel3 = false;
    this.rightChannel4 = false;
    this.DIVTicks = 27044;
    this.LCDTicks = 160;
    this.timerTicks = 0;
    this.TIMAEnabled = false;
    this.TACClocker = 1024;
    this.serialTimer = 0;
    this.serialShiftTimer = 0;
    this.serialShiftTimerAllocated = 0;
    this.IRQEnableDelay = 0;
    this.actualScanLine = 144;
    this.lastUnrenderedLine = 0;
    this.gfxWindowDisplay = false;
    this.gfxSpriteShow = false;
    this.gfxSpriteNormalHeight = true;
    this.bgEnabled = true;
    this.BGPriorityEnabled = true;
    this.gfxWindowCHRBankPosition = 0;
    this.gfxBackgroundCHRBankPosition = 0;
    this.gfxBackgroundBankOffset = 0;
    this.windowY = 0;
    this.windowX = 0;
    this.drewBlank = 0;
    this.midScanlineOffset = -1;
    this.currentX = 0;
};
GameBoyCore.prototype.initBootstrap = function() {
    //Start as an unset device:
    cout("Starting the selected boot ROM.", 0);
    this.programCounter = 0;
    this.stackPointer = 0;
    this.IME = false;
    this.LCDTicks = 0;
    this.DIVTicks = 0;
    this.registerA = 0;
    this.registerB = 0;
    this.registerC = 0;
    this.registerD = 0;
    this.registerE = 0;
    this.FZero = this.FSubtract = this.FHalfCarry = this.FCarry = false;
    this.registersHL = 0;
    this.leftChannel1 = false;
    this.leftChannel2 = false;
    this.leftChannel3 = false;
    this.leftChannel4 = false;
    this.rightChannel1 = false;
    this.rightChannel2 = false;
    this.rightChannel3 = false;
    this.rightChannel4 = false;
    this.channel2frequency = this.channel1frequency = 0;
    this.channel4consecutive = this.channel2consecutive = this.channel1consecutive = false;
    this.VinLeftChannelMasterVolume = 8;
    this.VinRightChannelMasterVolume = 8;
    this.memory[0xFF00] = 0xF; //Set the joypad state.
};
GameBoyCore.prototype.ROMLoad = function() {
    //Load the first two ROM banks (0x0000 - 0x7FFF) into regular gameboy memory:
    this.ROM = [];
    this.usedBootROM = settings[1] && (!settings[11] && this.GBCBOOTROM.length == 0x800 || settings[11] && this.GBBOOTROM.length == 0x100);
    var maxLength = this.ROMImage.length;
    if (maxLength < 0x4000) throw new Error("ROM image size too small.");
    this.ROM = this.getTypedArray(maxLength, 0, "uint8");
    var romIndex = 0;
    if (this.usedBootROM) {
        if (!settings[11]) {
            //Patch in the GBC boot ROM into the memory map:
            if (this.ROMImageIsString) {
                for(; romIndex < 0x100; ++romIndex){
                    this.memory[romIndex] = this.GBCBOOTROM[romIndex]; //Load in the GameBoy Color BOOT ROM.
                    this.ROM[romIndex] = this.ROMImage.charCodeAt(romIndex) & 0xFF; //Decode the ROM binary for the switch out.
                }
                for(; romIndex < 0x200; ++romIndex)this.memory[romIndex] = this.ROM[romIndex] = this.ROMImage.charCodeAt(romIndex) & 0xFF; //Load in the game ROM.
                for(; romIndex < 0x900; ++romIndex){
                    this.memory[romIndex] = this.GBCBOOTROM[romIndex - 0x100]; //Load in the GameBoy Color BOOT ROM.
                    this.ROM[romIndex] = this.ROMImage.charCodeAt(romIndex) & 0xFF; //Decode the ROM binary for the switch out.
                }
            } else {
                for(; romIndex < 0x100; ++romIndex){
                    this.memory[romIndex] = this.GBCBOOTROM[romIndex]; //Load in the GameBoy Color BOOT ROM.
                    this.ROM[romIndex] = this.ROMImage[romIndex]; //Decode the ROM binary for the switch out.
                }
                for(; romIndex < 0x200; ++romIndex)this.memory[romIndex] = this.ROM[romIndex] = this.ROMImage[romIndex]; //Load in the game ROM.
                for(; romIndex < 0x900; ++romIndex){
                    this.memory[romIndex] = this.GBCBOOTROM[romIndex - 0x100]; //Load in the GameBoy Color BOOT ROM.
                    this.ROM[romIndex] = this.ROMImage[romIndex]; //Decode the ROM binary for the switch out.
                }
            }
            this.usedGBCBootROM = true;
        } else {
            if (this.ROMImageIsString) //Patch in the GBC boot ROM into the memory map:
            for(; romIndex < 0x100; ++romIndex){
                this.memory[romIndex] = this.GBBOOTROM[romIndex]; //Load in the GameBoy Color BOOT ROM.
                this.ROM[romIndex] = this.ROMImage.charCodeAt(romIndex) & 0xFF; //Decode the ROM binary for the switch out.
            }
            else //Patch in the GBC boot ROM into the memory map:
            for(; romIndex < 0x100; ++romIndex){
                this.memory[romIndex] = this.GBBOOTROM[romIndex]; //Load in the GameBoy Color BOOT ROM.
                this.ROM[romIndex] = this.ROMImage.romIndex; //Decode the ROM binary for the switch out.
            }
        }
        if (this.ROMImageIsString) for(; romIndex < 0x4000; ++romIndex)this.memory[romIndex] = this.ROM[romIndex] = this.ROMImage.charCodeAt(romIndex) & 0xFF; //Load in the game ROM.
        else for(; romIndex < 0x4000; ++romIndex)this.memory[romIndex] = this.ROM[romIndex] = this.ROMImage[romIndex]; //Load in the game ROM.
    } else {
        if (this.ROMImageIsString) //Don't load in the boot ROM:
        for(; romIndex < 0x4000; ++romIndex)this.memory[romIndex] = this.ROM[romIndex] = this.ROMImage.charCodeAt(romIndex) & 0xFF; //Load in the game ROM.
        else //Don't load in the boot ROM:
        for(; romIndex < 0x4000; ++romIndex)this.memory[romIndex] = this.ROM[romIndex] = this.ROMImage[romIndex]; //Load in the game ROM.
    }
    //Finish the decoding of the ROM binary:
    if (this.ROMImageIsString) for(; romIndex < maxLength; ++romIndex)this.ROM[romIndex] = this.ROMImage.charCodeAt(romIndex) & 0xFF;
    else for(; romIndex < maxLength; ++romIndex)this.ROM[romIndex] = this.ROMImage[romIndex];
    this.ROMBankEdge = Math.floor(this.ROM.length / 0x4000);
    //Set up the emulator for the cartidge specifics:
    this.interpretCartridge();
    //Check for IRQ matching upon initialization:
    this.checkIRQMatching();
};
GameBoyCore.prototype.getROMImage = function() {
    //Return the binary version of the ROM image currently running:
    if (this.ROMImage.length > 0) return this.ROMImage.length;
    var length = this.ROM.length;
    for(var index = 0; index < length; index++)this.ROMImage += String.fromCharCode(this.ROM[index]);
    return this.ROMImage;
};
GameBoyCore.prototype.interpretCartridge = function() {
    var extra;
    if (this.ROMImageIsString) {
        // ROM name
        for(var index = 0x134; index < 0x13F; index++)if (this.ROMImage[index] > 0) this.name += this.ROMImage[index];
        // ROM game code (for newer games)
        for(var index = 0x13F; index < 0x143; index++)if (this.ROMImage[index] > 0) this.gameCode += this.ROMImage[index];
        extra = this.ROMImage[0x143];
    } else {
        // ROM name
        for(var index = 0x134; index < 0x13F; index++)if (this.ROMImage[index] > 0) this.name += String.fromCharCode(this.ROMImage[index]);
        // ROM game code (for newer games)
        for(var index = 0x13F; index < 0x143; index++)if (this.ROMImage[index] > 0) this.gameCode += String.fromCharCode(this.ROMImage[index]);
        extra = String.fromCharCode(this.ROMImage[0x143]);
    }
    // You don't want extra output, do you?
    // console.log("Game Title: " + this.name + "[" + this.gameCode + "][" + this.ROMImage[0x143] + "]");
    // Cartridge type
    this.cartridgeType = this.ROM[0x147];
    //console.log("Cartridge type #" + this.cartridgeType);
    //Map out ROM cartridge sub-types.
    var MBCType = "";
    switch(this.cartridgeType){
        case 0x00:
            //ROM w/o bank switching
            if (!settings[9]) {
                MBCType = "ROM";
                break;
            }
        case 0x01:
            this.cMBC1 = true;
            MBCType = "MBC1";
            break;
        case 0x02:
            this.cMBC1 = true;
            this.cSRAM = true;
            MBCType = "MBC1 + SRAM";
            break;
        case 0x03:
            this.cMBC1 = true;
            this.cSRAM = true;
            this.cBATT = true;
            MBCType = "MBC1 + SRAM + BATT";
            break;
        case 0x05:
            this.cMBC2 = true;
            MBCType = "MBC2";
            break;
        case 0x06:
            this.cMBC2 = true;
            this.cBATT = true;
            MBCType = "MBC2 + BATT";
            break;
        case 0x08:
            this.cSRAM = true;
            MBCType = "ROM + SRAM";
            break;
        case 0x09:
            this.cSRAM = true;
            this.cBATT = true;
            MBCType = "ROM + SRAM + BATT";
            break;
        case 0x0B:
            this.cMMMO1 = true;
            MBCType = "MMMO1";
            break;
        case 0x0C:
            this.cMMMO1 = true;
            this.cSRAM = true;
            MBCType = "MMMO1 + SRAM";
            break;
        case 0x0D:
            this.cMMMO1 = true;
            this.cSRAM = true;
            this.cBATT = true;
            MBCType = "MMMO1 + SRAM + BATT";
            break;
        case 0x0F:
            this.cMBC3 = true;
            this.cTIMER = true;
            this.cBATT = true;
            MBCType = "MBC3 + TIMER + BATT";
            break;
        case 0x10:
            this.cMBC3 = true;
            this.cTIMER = true;
            this.cBATT = true;
            this.cSRAM = true;
            MBCType = "MBC3 + TIMER + BATT + SRAM";
            break;
        case 0x11:
            this.cMBC3 = true;
            MBCType = "MBC3";
            break;
        case 0x12:
            this.cMBC3 = true;
            this.cSRAM = true;
            MBCType = "MBC3 + SRAM";
            break;
        case 0x13:
            this.cMBC3 = true;
            this.cSRAM = true;
            this.cBATT = true;
            MBCType = "MBC3 + SRAM + BATT";
            break;
        case 0x19:
            this.cMBC5 = true;
            MBCType = "MBC5";
            break;
        case 0x1A:
            this.cMBC5 = true;
            this.cSRAM = true;
            MBCType = "MBC5 + SRAM";
            break;
        case 0x1B:
            this.cMBC5 = true;
            this.cSRAM = true;
            this.cBATT = true;
            MBCType = "MBC5 + SRAM + BATT";
            break;
        case 0x1C:
            this.cRUMBLE = true;
            MBCType = "RUMBLE";
            break;
        case 0x1D:
            this.cRUMBLE = true;
            this.cSRAM = true;
            MBCType = "RUMBLE + SRAM";
            break;
        case 0x1E:
            this.cRUMBLE = true;
            this.cSRAM = true;
            this.cBATT = true;
            MBCType = "RUMBLE + SRAM + BATT";
            break;
        case 0x1F:
            this.cCamera = true;
            MBCType = "GameBoy Camera";
            break;
        case 0x22:
            this.cMBC7 = true;
            this.cSRAM = true;
            this.cBATT = true;
            MBCType = "MBC7 + SRAM + BATT";
            break;
        case 0xFD:
            this.cTAMA5 = true;
            MBCType = "TAMA5";
            break;
        case 0xFE:
            this.cHuC3 = true;
            MBCType = "HuC3";
            break;
        case 0xFF:
            this.cHuC1 = true;
            MBCType = "HuC1";
            break;
        default:
            MBCType = "Unknown";
            console.log("Cartridge type is unknown.");
            pause();
    }
    cout("Cartridge Type: " + MBCType + ".", 0);
    // ROM and RAM banks
    this.numROMBanks = this.ROMBanks[this.ROM[0x148]];
    cout(this.numROMBanks + " ROM banks.", 0);
    switch(this.RAMBanks[this.ROM[0x149]]){
        case 0:
            cout("No RAM banking requested for allocation or MBC is of type 2.", 0);
            break;
        case 2:
            cout("1 RAM bank requested for allocation.", 0);
            break;
        case 3:
            cout("4 RAM banks requested for allocation.", 0);
            break;
        case 4:
            cout("16 RAM banks requested for allocation.", 0);
            break;
        default:
            cout("RAM bank amount requested is unknown, will use maximum allowed by specified MBC type.", 0);
    }
    //Check the GB/GBC mode byte:
    if (!this.usedBootROM) {
        switch(this.ROM[0x143]){
            case 0x00:
                this.cGBC = false;
                cout("Only GB mode detected.", 0);
                break;
            case 0x32:
                if (!settings[2] && this.name + this.gameCode + this.ROM[0x143] == "Game and Watch 50") {
                    this.cGBC = true;
                    cout("Created a boot exception for Game and Watch Gallery 2 (GBC ID byte is wrong on the cartridge).", 1);
                } else this.cGBC = false;
                break;
            case 0x80:
                this.cGBC = !settings[2];
                cout("GB and GBC mode detected.", 0);
                break;
            case 0xC0:
                this.cGBC = true;
                cout("Only GBC mode detected.", 0);
                break;
            default:
                this.cGBC = false;
                cout("Unknown GameBoy game type code #" + this.ROM[0x143] + ", defaulting to GB mode (Old games don't have a type code).", 1);
        }
        this.inBootstrap = false;
        this.setupRAM(); //CPU/(V)RAM initialization.
        this.initSkipBootstrap();
    } else {
        this.cGBC = this.usedGBCBootROM; //Allow the GBC boot ROM to run in GBC mode...
        this.setupRAM(); //CPU/(V)RAM initialization.
        this.initBootstrap();
    }
    this.initializeModeSpecificArrays();
    //License Code Lookup:
    var cOldLicense = this.ROM[0x14B];
    var cNewLicense = this.ROM[0x144] & 0xFF00 | this.ROM[0x145] & 0xFF;
    if (cOldLicense != 0x33) //Old Style License Header
    cout("Old style license code: " + cOldLicense, 0);
    else //New Style License Header
    cout("New style license code: " + cNewLicense, 0);
    this.ROMImage = ""; //Memory consumption reduction.
};
GameBoyCore.prototype.disableBootROM = function() {
    //Remove any traces of the boot ROM from ROM memory.
    for(var index = 0; index < 0x100; ++index)this.memory[index] = this.ROM[index]; //Replace the GameBoy or GameBoy Color boot ROM with the game ROM.
    if (this.usedGBCBootROM) {
        //Remove any traces of the boot ROM from ROM memory.
        for(index = 0x200; index < 0x900; ++index)this.memory[index] = this.ROM[index]; //Replace the GameBoy Color boot ROM with the game ROM.
        if (!this.cGBC) //Clean up the post-boot (GB mode only) state:
        this.GBCtoGBModeAdjust();
        else this.recompileBootIOWriteHandling();
    } else this.recompileBootIOWriteHandling();
};
GameBoyCore.prototype.initializeTiming = function() {
    //Emulator Timing:
    this.clocksPerSecond = this.emulatorSpeed * 0x400000;
    this.baseCPUCyclesPerIteration = this.clocksPerSecond / 1000 * settings[6];
    this.CPUCyclesTotalRoundoff = this.baseCPUCyclesPerIteration % 4;
    this.CPUCyclesTotalBase = this.CPUCyclesTotal = this.baseCPUCyclesPerIteration - this.CPUCyclesTotalRoundoff | 0;
    this.CPUCyclesTotalCurrent = 0;
};
GameBoyCore.prototype.setSpeed = function(speed) {
    this.emulatorSpeed = speed;
    this.initializeTiming();
    if (this.audioHandle) this.initSound();
};
GameBoyCore.prototype.setupRAM = function() {
    //Setup the auxilliary/switchable RAM:
    if (this.cMBC2) this.numRAMBanks = 1 / 16;
    else if (this.cMBC1 || this.cRUMBLE || this.cMBC3 || this.cHuC3) this.numRAMBanks = 4;
    else if (this.cMBC5) this.numRAMBanks = 16;
    else if (this.cSRAM) this.numRAMBanks = 1;
    if (this.numRAMBanks > 0) {
        if (!this.MBCRAMUtilized()) //For ROM and unknown MBC cartridges using the external RAM:
        this.MBCRAMBanksEnabled = true;
        //Switched RAM Used
        var MBCRam = typeof this.openMBC == "function" ? this.openMBC(this.name) : [];
        if (MBCRam.length > 0) //Flash the SRAM into memory:
        this.MBCRam = this.toTypedArray(MBCRam, "uint8");
        else this.MBCRam = this.getTypedArray(this.numRAMBanks * 0x2000, 0, "uint8");
    }
    cout("Actual bytes of MBC RAM allocated: " + this.numRAMBanks * 0x2000, 0);
    this.returnFromRTCState();
    //Setup the RAM for GBC mode.
    if (this.cGBC) {
        this.VRAM = this.getTypedArray(0x2000, 0, "uint8");
        this.GBCMemory = this.getTypedArray(0x7000, 0, "uint8");
    }
    this.memoryReadJumpCompile();
    this.memoryWriteJumpCompile();
};
GameBoyCore.prototype.MBCRAMUtilized = function() {
    return this.cMBC1 || this.cMBC2 || this.cMBC3 || this.cMBC5 || this.cMBC7 || this.cRUMBLE;
};
GameBoyCore.prototype.recomputeDimension = function() {
    //Cache some dimension info:
    this.onscreenWidth = 160;
    this.onscreenHeight = 144;
    this.offscreenWidth = 160;
    this.offscreenHeight = 144;
    this.offscreenRGBCount = this.offscreenWidth * this.offscreenHeight * 4;
};
GameBoyCore.prototype.initLCD = function() {
    this.recomputeDimension();
    if (this.offscreenRGBCount != 92160) //Only create the resizer handle if we need it:
    this.compileResizeFrameBufferFunction();
    else //Resizer not needed:
    this.resizer = null;
    try {
        this.canvasBuffer = {
            "data": new Uint8ClampedArray(92160),
            "height": 144,
            "width": 160
        };
    //Taking canvas out of the picture.
    //this.canvasBuffer = this.drawContextOffScreen.createImageData(144, 160);
    //this.canvasBuffer.prototype = ImageData;
    //new ImageData(160, 144);//{'width':160, 'height':144, 'data':new Array(160*144*4)};//this.drawContextOffscreen.createImageData(this.offscreenWidth, this.offscreenHeight);
    } catch (error) {
        console.log("hack failed: " + error.message + ": falling back to getImageData initialization");
    //cout("Falling back to the getImageData initialization (Error \"" + error.message + "\").", 1);
    //this.canvasBuffer = this.drawContextOffscreen.getImageData(0, 0, this.offscreenWidth, this.offscreenHeight);
    }
    var index = this.offscreenRGBCount;
    while(index > 0){
        this.canvasBuffer.data[index -= 4] = 0xF8;
        this.canvasBuffer.data[index + 1] = 0xF8;
        this.canvasBuffer.data[index + 2] = 0xF8;
        this.canvasBuffer.data[index + 3] = 0xFF;
    }
    //this.graphicsBlit();
    if (this.swizzledFrame == null) this.swizzledFrame = this.getTypedArray(69120, 0xFF, "uint8");
    //Test the draw system and browser vblank latching:
    this.drewFrame = true; //Copy the latest graphics to buffer.
    this.requestDraw();
};
//I think I'm just copying out framebuffer.  So maybe I dont' need to do anything?
GameBoyCore.prototype.graphicsBlit = function() {
    if (!this.currentScreenFixed) this.currentScreenFixed = [];
    this.lastScreen = this.currentScreenFixed;
    this.currentScreen = []; //new Uint8Array(this.canvasBuffer.data.length);
    this.partialScreen = [];
    for(var i = 0; i < this.canvasBuffer.data.length; i++){
        //Build partial frame.
        if (this.lastScreen[i] != this.canvasBuffer.data[i]) {
            this.partialScreen.push(i);
            this.partialScreen.push(this.canvasBuffer.data[i]);
        }
        //Build full frame.
        this.currentScreenFixed[i] = this.canvasBuffer.data[i];
        //this.currentScreen.push(i);
        this.currentScreen.push(this.canvasBuffer.data[i]);
    }
};
GameBoyCore.prototype.JoyPadEvent = function(key, down) {
    if (down) {
        this.JoyPad &= 0xFF ^ 1 << key;
        if (!this.cGBC && (!this.usedBootROM || !this.usedGBCBootROM)) {
            this.interruptsRequested |= 0x10; //A real GBC doesn't set this!
            this.remainingClocks = 0;
            this.checkIRQMatching();
        }
    } else this.JoyPad |= 1 << key;
    this.memory[0xFF00] = (this.memory[0xFF00] & 0x30) + (((this.memory[0xFF00] & 0x20) == 0 ? this.JoyPad >> 4 : 0xF) & ((this.memory[0xFF00] & 0x10) == 0 ? this.JoyPad & 0xF : 0xF));
    this.CPUStopped = false;
};
GameBoyCore.prototype.GyroEvent = function(x, y) {
    x *= -100;
    x += 2047;
    this.highX = x >> 8;
    this.lowX = x & 0xFF;
    y *= -100;
    y += 2047;
    this.highY = y >> 8;
    this.lowY = y & 0xFF;
};
GameBoyCore.prototype.initSound = function() {
    this.audioResamplerFirstPassFactor = Math.max(Math.min(Math.floor(this.clocksPerSecond / 44100), Math.floor(136.53125)), 1);
    this.downSampleInputDivider = 1 / (this.audioResamplerFirstPassFactor * 0xF0);
    if (settings[0]) // this.audioHandle = new XAudioServer(
    //     2,
    //     this.clocksPerSecond / this.audioResamplerFirstPassFactor,
    //     0,
    //     Math.max(this.baseCPUCyclesPerIteration * settings[8] / this.audioResamplerFirstPassFactor, 8192) << 1,
    //     null,
    //     settings[3],
    //     function () {
    //         settings[0] = false;
    //     });
    // console.log('Initializing Audio Buffer:');
    // console.log(`Sample Rate: ${ this.clocksPerSecond / this.audioResamplerFirstPassFactor }`);
    // console.log(`Max Buffer Size: ${ Math.max(this.baseCPUCyclesPerIteration * settings[8] / this.audioResamplerFirstPassFactor, 8192) << 1 }`);
    this.initAudioBuffer();
    else if (this.audioHandle) //Mute the audio output, as it has an immediate silencing effect:
    this.audioHandle.changeVolume(0);
};
GameBoyCore.prototype.changeVolume = function() {
    if (settings[0] && this.audioHandle) this.audioHandle.changeVolume(settings[3]);
};
GameBoyCore.prototype.initAudioBuffer = function() {
    this.audioIndex = 0;
    this.audioDestinationPosition = 0;
    this.downsampleInput = 0;
    this.bufferContainAmount = Math.max(this.baseCPUCyclesPerIteration * settings[7] / this.audioResamplerFirstPassFactor, 4096) << 1;
    this.numSamplesTotal = this.baseCPUCyclesPerIteration / this.audioResamplerFirstPassFactor << 1;
    this.audioBuffer = this.getTypedArray(this.numSamplesTotal, 0, "float32");
};
GameBoyCore.prototype.intializeWhiteNoise = function() {
    //Noise Sample Tables:
    var randomFactor = 1;
    //15-bit LSFR Cache Generation:
    this.LSFR15Table = this.getTypedArray(0x80000, 0, "int8");
    var LSFR = 0x7FFF; //Seed value has all its bits set.
    var LSFRShifted = 0x3FFF;
    for(var index = 0; index < 0x8000; ++index){
        //Normalize the last LSFR value for usage:
        randomFactor = 1 - (LSFR & 1); //Docs say it's the inverse.
        //Cache the different volume level results:
        this.LSFR15Table[0x08000 | index] = randomFactor;
        this.LSFR15Table[0x10000 | index] = randomFactor * 0x2;
        this.LSFR15Table[0x18000 | index] = randomFactor * 0x3;
        this.LSFR15Table[0x20000 | index] = randomFactor * 0x4;
        this.LSFR15Table[0x28000 | index] = randomFactor * 0x5;
        this.LSFR15Table[0x30000 | index] = randomFactor * 0x6;
        this.LSFR15Table[0x38000 | index] = randomFactor * 0x7;
        this.LSFR15Table[0x40000 | index] = randomFactor * 0x8;
        this.LSFR15Table[0x48000 | index] = randomFactor * 0x9;
        this.LSFR15Table[0x50000 | index] = randomFactor * 0xA;
        this.LSFR15Table[0x58000 | index] = randomFactor * 0xB;
        this.LSFR15Table[0x60000 | index] = randomFactor * 0xC;
        this.LSFR15Table[0x68000 | index] = randomFactor * 0xD;
        this.LSFR15Table[0x70000 | index] = randomFactor * 0xE;
        this.LSFR15Table[0x78000 | index] = randomFactor * 0xF;
        //Recompute the LSFR algorithm:
        LSFRShifted = LSFR >> 1;
        LSFR = LSFRShifted | ((LSFRShifted ^ LSFR) & 0x1) << 14;
    }
    //7-bit LSFR Cache Generation:
    this.LSFR7Table = this.getTypedArray(0x800, 0, "int8");
    LSFR = 0x7F; //Seed value has all its bits set.
    for(index = 0; index < 0x80; ++index){
        //Normalize the last LSFR value for usage:
        randomFactor = 1 - (LSFR & 1); //Docs say it's the inverse.
        //Cache the different volume level results:
        this.LSFR7Table[0x080 | index] = randomFactor;
        this.LSFR7Table[0x100 | index] = randomFactor * 0x2;
        this.LSFR7Table[0x180 | index] = randomFactor * 0x3;
        this.LSFR7Table[0x200 | index] = randomFactor * 0x4;
        this.LSFR7Table[0x280 | index] = randomFactor * 0x5;
        this.LSFR7Table[0x300 | index] = randomFactor * 0x6;
        this.LSFR7Table[0x380 | index] = randomFactor * 0x7;
        this.LSFR7Table[0x400 | index] = randomFactor * 0x8;
        this.LSFR7Table[0x480 | index] = randomFactor * 0x9;
        this.LSFR7Table[0x500 | index] = randomFactor * 0xA;
        this.LSFR7Table[0x580 | index] = randomFactor * 0xB;
        this.LSFR7Table[0x600 | index] = randomFactor * 0xC;
        this.LSFR7Table[0x680 | index] = randomFactor * 0xD;
        this.LSFR7Table[0x700 | index] = randomFactor * 0xE;
        this.LSFR7Table[0x780 | index] = randomFactor * 0xF;
        //Recompute the LSFR algorithm:
        LSFRShifted = LSFR >> 1;
        LSFR = LSFRShifted | ((LSFRShifted ^ LSFR) & 0x1) << 6;
    }
    //Set the default noise table:
    this.noiseSampleTable = this.LSFR15Table;
};
GameBoyCore.prototype.audioUnderrunAdjustment = function() {
    if (settings[0]) {
        //var underrunAmount = this.audioHandle.remainingBuffer();
        var underrunAmount = null; //I don't know what this is or why it matters.
        //From what I can tell, this is basically just "how much space do I have left in this buffer."
        //I'm gonna need to care about that.
        //But I'm not sure how *much* I'm going to need to care about it.
        //If I'm working with the raw buffer, then maybe... maybe I can just change the size to fit?
        //For now I'm going to ignore it and see what happens.
        //I need to know what the output format of the audio is.
        if (typeof underrunAmount == "number") {
            underrunAmount = this.bufferContainAmount - Math.max(underrunAmount, 0);
            if (underrunAmount > 0) this.recalculateIterationClockLimitForAudio((underrunAmount >> 1) * this.audioResamplerFirstPassFactor);
        }
    }
};
GameBoyCore.prototype.initializeAudioStartState = function() {
    this.channel1FrequencyTracker = 0x2000;
    this.channel1DutyTracker = 0;
    this.channel1CachedDuty = this.dutyLookup[2];
    this.channel1totalLength = 0;
    this.channel1envelopeVolume = 0;
    this.channel1envelopeType = false;
    this.channel1envelopeSweeps = 0;
    this.channel1envelopeSweepsLast = 0;
    this.channel1consecutive = true;
    this.channel1frequency = 0;
    this.channel1SweepFault = false;
    this.channel1ShadowFrequency = 0;
    this.channel1timeSweep = 1;
    this.channel1lastTimeSweep = 0;
    this.channel1Swept = false;
    this.channel1frequencySweepDivider = 0;
    this.channel1decreaseSweep = false;
    this.channel2FrequencyTracker = 0x2000;
    this.channel2DutyTracker = 0;
    this.channel2CachedDuty = this.dutyLookup[2];
    this.channel2totalLength = 0;
    this.channel2envelopeVolume = 0;
    this.channel2envelopeType = false;
    this.channel2envelopeSweeps = 0;
    this.channel2envelopeSweepsLast = 0;
    this.channel2consecutive = true;
    this.channel2frequency = 0;
    this.channel3canPlay = false;
    this.channel3totalLength = 0;
    this.channel3patternType = 4;
    this.channel3frequency = 0;
    this.channel3consecutive = true;
    this.channel3Counter = 0x800;
    this.channel4FrequencyPeriod = 8;
    this.channel4totalLength = 0;
    this.channel4envelopeVolume = 0;
    this.channel4currentVolume = 0;
    this.channel4envelopeType = false;
    this.channel4envelopeSweeps = 0;
    this.channel4envelopeSweepsLast = 0;
    this.channel4consecutive = true;
    this.channel4BitRange = 0x7FFF;
    this.noiseSampleTable = this.LSFR15Table;
    this.channel4VolumeShifter = 15;
    this.channel1FrequencyCounter = 0x2000;
    this.channel2FrequencyCounter = 0x2000;
    this.channel3Counter = 0x800;
    this.channel3FrequencyPeriod = 0x800;
    this.channel3lastSampleLookup = 0;
    this.channel4lastSampleLookup = 0;
    this.VinLeftChannelMasterVolume = 8;
    this.VinRightChannelMasterVolume = 8;
    this.mixerOutputCache = 0;
    this.sequencerClocks = 0x2000;
    this.sequencePosition = 0;
    this.channel4FrequencyPeriod = 8;
    this.channel4Counter = 8;
    this.cachedChannel3Sample = 0;
    this.cachedChannel4Sample = 0;
    this.channel1Enabled = false;
    this.channel2Enabled = false;
    this.channel3Enabled = false;
    this.channel4Enabled = false;
    this.channel1canPlay = false;
    this.channel2canPlay = false;
    this.channel4canPlay = false;
    this.audioClocksUntilNextEvent = 1;
    this.audioClocksUntilNextEventCounter = 1;
    this.channel1OutputLevelCache();
    this.channel2OutputLevelCache();
    this.channel3OutputLevelCache();
    this.channel4OutputLevelCache();
    this.noiseSampleTable = this.LSFR15Table;
};
GameBoyCore.prototype.outputAudio = function() {
    this.audioBuffer[this.audioDestinationPosition++] = (this.downsampleInput >>> 16) * this.downSampleInputDivider - 1;
    this.audioBuffer[this.audioDestinationPosition++] = (this.downsampleInput & 0xFFFF) * this.downSampleInputDivider - 1;
    if (this.audioDestinationPosition == this.numSamplesTotal) //this.audioHandle.writeAudioNoCallback(this.audioBuffer);
    this.audioDestinationPosition = 0;
    this.downsampleInput = 0;
};
//Below are the audio generation functions timed against the CPU:
GameBoyCore.prototype.generateAudio = function(numSamples) {
    var multiplier = 0;
    if (this.soundMasterEnabled && !this.CPUStopped) for(var clockUpTo = 0; numSamples > 0;){
        clockUpTo = Math.min(this.audioClocksUntilNextEventCounter, this.sequencerClocks, numSamples);
        this.audioClocksUntilNextEventCounter -= clockUpTo;
        this.sequencerClocks -= clockUpTo;
        numSamples -= clockUpTo;
        while(clockUpTo > 0){
            multiplier = Math.min(clockUpTo, this.audioResamplerFirstPassFactor - this.audioIndex);
            clockUpTo -= multiplier;
            this.audioIndex += multiplier;
            this.downsampleInput += this.mixerOutputCache * multiplier;
            if (this.audioIndex == this.audioResamplerFirstPassFactor) {
                this.audioIndex = 0;
                this.outputAudio();
            }
        }
        if (this.sequencerClocks == 0) {
            this.audioComputeSequencer();
            this.sequencerClocks = 0x2000;
        }
        if (this.audioClocksUntilNextEventCounter == 0) this.computeAudioChannels();
    }
    else //SILENT OUTPUT:
    while(numSamples > 0){
        multiplier = Math.min(numSamples, this.audioResamplerFirstPassFactor - this.audioIndex);
        numSamples -= multiplier;
        this.audioIndex += multiplier;
        if (this.audioIndex == this.audioResamplerFirstPassFactor) {
            this.audioIndex = 0;
            this.outputAudio();
        }
    }
};
//Generate audio, but don't actually output it (Used for when sound is disabled by user/browser):
GameBoyCore.prototype.generateAudioFake = function(numSamples) {
    if (this.soundMasterEnabled && !this.CPUStopped) for(var clockUpTo = 0; numSamples > 0;){
        clockUpTo = Math.min(this.audioClocksUntilNextEventCounter, this.sequencerClocks, numSamples);
        this.audioClocksUntilNextEventCounter -= clockUpTo;
        this.sequencerClocks -= clockUpTo;
        numSamples -= clockUpTo;
        if (this.sequencerClocks == 0) {
            this.audioComputeSequencer();
            this.sequencerClocks = 0x2000;
        }
        if (this.audioClocksUntilNextEventCounter == 0) this.computeAudioChannels();
    }
};
GameBoyCore.prototype.audioJIT = function() {
    //Audio Sample Generation Timing:
    if (settings[0]) this.generateAudio(this.audioTicks);
    else this.generateAudioFake(this.audioTicks);
    this.audioTicks = 0;
};
GameBoyCore.prototype.audioComputeSequencer = function() {
    switch(this.sequencePosition++){
        case 0:
            this.clockAudioLength();
            break;
        case 2:
            this.clockAudioLength();
            this.clockAudioSweep();
            break;
        case 4:
            this.clockAudioLength();
            break;
        case 6:
            this.clockAudioLength();
            this.clockAudioSweep();
            break;
        case 7:
            this.clockAudioEnvelope();
            this.sequencePosition = 0;
    }
};
GameBoyCore.prototype.clockAudioLength = function() {
    //Channel 1:
    if (this.channel1totalLength > 1) --this.channel1totalLength;
    else if (this.channel1totalLength == 1) {
        this.channel1totalLength = 0;
        this.channel1EnableCheck();
        this.memory[0xFF26] &= 0xFE; //Channel #1 On Flag Off
    }
    //Channel 2:
    if (this.channel2totalLength > 1) --this.channel2totalLength;
    else if (this.channel2totalLength == 1) {
        this.channel2totalLength = 0;
        this.channel2EnableCheck();
        this.memory[0xFF26] &= 0xFD; //Channel #2 On Flag Off
    }
    //Channel 3:
    if (this.channel3totalLength > 1) --this.channel3totalLength;
    else if (this.channel3totalLength == 1) {
        this.channel3totalLength = 0;
        this.channel3EnableCheck();
        this.memory[0xFF26] &= 0xFB; //Channel #3 On Flag Off
    }
    //Channel 4:
    if (this.channel4totalLength > 1) --this.channel4totalLength;
    else if (this.channel4totalLength == 1) {
        this.channel4totalLength = 0;
        this.channel4EnableCheck();
        this.memory[0xFF26] &= 0xF7; //Channel #4 On Flag Off
    }
};
GameBoyCore.prototype.clockAudioSweep = function() {
    //Channel 1:
    if (!this.channel1SweepFault && this.channel1timeSweep > 0) {
        if (--this.channel1timeSweep == 0) this.runAudioSweep();
    }
};
GameBoyCore.prototype.runAudioSweep = function() {
    //Channel 1:
    if (this.channel1lastTimeSweep > 0) {
        if (this.channel1frequencySweepDivider > 0) {
            this.channel1Swept = true;
            if (this.channel1decreaseSweep) {
                this.channel1ShadowFrequency -= this.channel1ShadowFrequency >> this.channel1frequencySweepDivider;
                this.channel1frequency = this.channel1ShadowFrequency & 0x7FF;
                this.channel1FrequencyTracker = 0x800 - this.channel1frequency << 2;
            } else {
                this.channel1ShadowFrequency += this.channel1ShadowFrequency >> this.channel1frequencySweepDivider;
                this.channel1frequency = this.channel1ShadowFrequency;
                if (this.channel1ShadowFrequency <= 0x7FF) {
                    this.channel1FrequencyTracker = 0x800 - this.channel1frequency << 2;
                    //Run overflow check twice:
                    if (this.channel1ShadowFrequency + (this.channel1ShadowFrequency >> this.channel1frequencySweepDivider) > 0x7FF) {
                        this.channel1SweepFault = true;
                        this.channel1EnableCheck();
                        this.memory[0xFF26] &= 0xFE; //Channel #1 On Flag Off
                    }
                } else {
                    this.channel1frequency &= 0x7FF;
                    this.channel1SweepFault = true;
                    this.channel1EnableCheck();
                    this.memory[0xFF26] &= 0xFE; //Channel #1 On Flag Off
                }
            }
            this.channel1timeSweep = this.channel1lastTimeSweep;
        } else {
            //Channel has sweep disabled and timer becomes a length counter:
            this.channel1SweepFault = true;
            this.channel1EnableCheck();
        }
    }
};
GameBoyCore.prototype.channel1AudioSweepPerformDummy = function() {
    //Channel 1:
    if (this.channel1frequencySweepDivider > 0) {
        if (!this.channel1decreaseSweep) {
            var channel1ShadowFrequency = this.channel1ShadowFrequency + (this.channel1ShadowFrequency >> this.channel1frequencySweepDivider);
            if (channel1ShadowFrequency <= 0x7FF) //Run overflow check twice:
            {
                if (channel1ShadowFrequency + (channel1ShadowFrequency >> this.channel1frequencySweepDivider) > 0x7FF) {
                    this.channel1SweepFault = true;
                    this.channel1EnableCheck();
                    this.memory[0xFF26] &= 0xFE; //Channel #1 On Flag Off
                }
            } else {
                this.channel1SweepFault = true;
                this.channel1EnableCheck();
                this.memory[0xFF26] &= 0xFE; //Channel #1 On Flag Off
            }
        }
    }
};
GameBoyCore.prototype.clockAudioEnvelope = function() {
    //Channel 1:
    if (this.channel1envelopeSweepsLast > -1) {
        if (this.channel1envelopeSweeps > 0) --this.channel1envelopeSweeps;
        else {
            if (!this.channel1envelopeType) {
                if (this.channel1envelopeVolume > 0) {
                    --this.channel1envelopeVolume;
                    this.channel1envelopeSweeps = this.channel1envelopeSweepsLast;
                    this.channel1OutputLevelCache();
                } else this.channel1envelopeSweepsLast = -1;
            } else if (this.channel1envelopeVolume < 0xF) {
                ++this.channel1envelopeVolume;
                this.channel1envelopeSweeps = this.channel1envelopeSweepsLast;
                this.channel1OutputLevelCache();
            } else this.channel1envelopeSweepsLast = -1;
        }
    }
    //Channel 2:
    if (this.channel2envelopeSweepsLast > -1) {
        if (this.channel2envelopeSweeps > 0) --this.channel2envelopeSweeps;
        else {
            if (!this.channel2envelopeType) {
                if (this.channel2envelopeVolume > 0) {
                    --this.channel2envelopeVolume;
                    this.channel2envelopeSweeps = this.channel2envelopeSweepsLast;
                    this.channel2OutputLevelCache();
                } else this.channel2envelopeSweepsLast = -1;
            } else if (this.channel2envelopeVolume < 0xF) {
                ++this.channel2envelopeVolume;
                this.channel2envelopeSweeps = this.channel2envelopeSweepsLast;
                this.channel2OutputLevelCache();
            } else this.channel2envelopeSweepsLast = -1;
        }
    }
    //Channel 4:
    if (this.channel4envelopeSweepsLast > -1) {
        if (this.channel4envelopeSweeps > 0) --this.channel4envelopeSweeps;
        else {
            if (!this.channel4envelopeType) {
                if (this.channel4envelopeVolume > 0) {
                    this.channel4currentVolume = --this.channel4envelopeVolume << this.channel4VolumeShifter;
                    this.channel4envelopeSweeps = this.channel4envelopeSweepsLast;
                    this.channel4UpdateCache();
                } else this.channel4envelopeSweepsLast = -1;
            } else if (this.channel4envelopeVolume < 0xF) {
                this.channel4currentVolume = ++this.channel4envelopeVolume << this.channel4VolumeShifter;
                this.channel4envelopeSweeps = this.channel4envelopeSweepsLast;
                this.channel4UpdateCache();
            } else this.channel4envelopeSweepsLast = -1;
        }
    }
};
GameBoyCore.prototype.computeAudioChannels = function() {
    //Clock down the four audio channels to the next closest audio event:
    this.channel1FrequencyCounter -= this.audioClocksUntilNextEvent;
    this.channel2FrequencyCounter -= this.audioClocksUntilNextEvent;
    this.channel3Counter -= this.audioClocksUntilNextEvent;
    this.channel4Counter -= this.audioClocksUntilNextEvent;
    //Channel 1 counter:
    if (this.channel1FrequencyCounter == 0) {
        this.channel1FrequencyCounter = this.channel1FrequencyTracker;
        this.channel1DutyTracker = this.channel1DutyTracker + 1 & 0x7;
        this.channel1OutputLevelTrimaryCache();
    }
    //Channel 2 counter:
    if (this.channel2FrequencyCounter == 0) {
        this.channel2FrequencyCounter = this.channel2FrequencyTracker;
        this.channel2DutyTracker = this.channel2DutyTracker + 1 & 0x7;
        this.channel2OutputLevelTrimaryCache();
    }
    //Channel 3 counter:
    if (this.channel3Counter == 0) {
        if (this.channel3canPlay) this.channel3lastSampleLookup = this.channel3lastSampleLookup + 1 & 0x1F;
        this.channel3Counter = this.channel3FrequencyPeriod;
        this.channel3UpdateCache();
    }
    //Channel 4 counter:
    if (this.channel4Counter == 0) {
        this.channel4lastSampleLookup = this.channel4lastSampleLookup + 1 & this.channel4BitRange;
        this.channel4Counter = this.channel4FrequencyPeriod;
        this.channel4UpdateCache();
    }
    //Find the number of clocks to next closest counter event:
    this.audioClocksUntilNextEventCounter = this.audioClocksUntilNextEvent = Math.min(this.channel1FrequencyCounter, this.channel2FrequencyCounter, this.channel3Counter, this.channel4Counter);
};
GameBoyCore.prototype.channel1EnableCheck = function() {
    this.channel1Enabled = (this.channel1consecutive || this.channel1totalLength > 0) && !this.channel1SweepFault && this.channel1canPlay;
    this.channel1OutputLevelSecondaryCache();
};
GameBoyCore.prototype.channel1VolumeEnableCheck = function() {
    this.channel1canPlay = this.memory[0xFF12] > 7;
    this.channel1EnableCheck();
    this.channel1OutputLevelSecondaryCache();
};
GameBoyCore.prototype.channel1OutputLevelCache = function() {
    this.channel1currentSampleLeft = this.leftChannel1 ? this.channel1envelopeVolume : 0;
    this.channel1currentSampleRight = this.rightChannel1 ? this.channel1envelopeVolume : 0;
    this.channel1OutputLevelSecondaryCache();
};
GameBoyCore.prototype.channel1OutputLevelSecondaryCache = function() {
    if (this.channel1Enabled) {
        this.channel1currentSampleLeftSecondary = this.channel1currentSampleLeft;
        this.channel1currentSampleRightSecondary = this.channel1currentSampleRight;
    } else {
        this.channel1currentSampleLeftSecondary = 0;
        this.channel1currentSampleRightSecondary = 0;
    }
    this.channel1OutputLevelTrimaryCache();
};
GameBoyCore.prototype.channel1OutputLevelTrimaryCache = function() {
    if (this.channel1CachedDuty[this.channel1DutyTracker] && settings[14][0]) {
        this.channel1currentSampleLeftTrimary = this.channel1currentSampleLeftSecondary;
        this.channel1currentSampleRightTrimary = this.channel1currentSampleRightSecondary;
    } else {
        this.channel1currentSampleLeftTrimary = 0;
        this.channel1currentSampleRightTrimary = 0;
    }
    this.mixerOutputLevelCache();
};
GameBoyCore.prototype.channel2EnableCheck = function() {
    this.channel2Enabled = (this.channel2consecutive || this.channel2totalLength > 0) && this.channel2canPlay;
    this.channel2OutputLevelSecondaryCache();
};
GameBoyCore.prototype.channel2VolumeEnableCheck = function() {
    this.channel2canPlay = this.memory[0xFF17] > 7;
    this.channel2EnableCheck();
    this.channel2OutputLevelSecondaryCache();
};
GameBoyCore.prototype.channel2OutputLevelCache = function() {
    this.channel2currentSampleLeft = this.leftChannel2 ? this.channel2envelopeVolume : 0;
    this.channel2currentSampleRight = this.rightChannel2 ? this.channel2envelopeVolume : 0;
    this.channel2OutputLevelSecondaryCache();
};
GameBoyCore.prototype.channel2OutputLevelSecondaryCache = function() {
    if (this.channel2Enabled) {
        this.channel2currentSampleLeftSecondary = this.channel2currentSampleLeft;
        this.channel2currentSampleRightSecondary = this.channel2currentSampleRight;
    } else {
        this.channel2currentSampleLeftSecondary = 0;
        this.channel2currentSampleRightSecondary = 0;
    }
    this.channel2OutputLevelTrimaryCache();
};
GameBoyCore.prototype.channel2OutputLevelTrimaryCache = function() {
    if (this.channel2CachedDuty[this.channel2DutyTracker] && settings[14][1]) {
        this.channel2currentSampleLeftTrimary = this.channel2currentSampleLeftSecondary;
        this.channel2currentSampleRightTrimary = this.channel2currentSampleRightSecondary;
    } else {
        this.channel2currentSampleLeftTrimary = 0;
        this.channel2currentSampleRightTrimary = 0;
    }
    this.mixerOutputLevelCache();
};
GameBoyCore.prototype.channel3EnableCheck = function() {
    this.channel3Enabled = /*this.channel3canPlay && */ this.channel3consecutive || this.channel3totalLength > 0;
    this.channel3OutputLevelSecondaryCache();
};
GameBoyCore.prototype.channel3OutputLevelCache = function() {
    this.channel3currentSampleLeft = this.leftChannel3 ? this.cachedChannel3Sample : 0;
    this.channel3currentSampleRight = this.rightChannel3 ? this.cachedChannel3Sample : 0;
    this.channel3OutputLevelSecondaryCache();
};
GameBoyCore.prototype.channel3OutputLevelSecondaryCache = function() {
    if (this.channel3Enabled && settings[14][2]) {
        this.channel3currentSampleLeftSecondary = this.channel3currentSampleLeft;
        this.channel3currentSampleRightSecondary = this.channel3currentSampleRight;
    } else {
        this.channel3currentSampleLeftSecondary = 0;
        this.channel3currentSampleRightSecondary = 0;
    }
    this.mixerOutputLevelCache();
};
GameBoyCore.prototype.channel4EnableCheck = function() {
    this.channel4Enabled = (this.channel4consecutive || this.channel4totalLength > 0) && this.channel4canPlay;
    this.channel4OutputLevelSecondaryCache();
};
GameBoyCore.prototype.channel4VolumeEnableCheck = function() {
    this.channel4canPlay = this.memory[0xFF21] > 7;
    this.channel4EnableCheck();
    this.channel4OutputLevelSecondaryCache();
};
GameBoyCore.prototype.channel4OutputLevelCache = function() {
    this.channel4currentSampleLeft = this.leftChannel4 ? this.cachedChannel4Sample : 0;
    this.channel4currentSampleRight = this.rightChannel4 ? this.cachedChannel4Sample : 0;
    this.channel4OutputLevelSecondaryCache();
};
GameBoyCore.prototype.channel4OutputLevelSecondaryCache = function() {
    if (this.channel4Enabled && settings[14][3]) {
        this.channel4currentSampleLeftSecondary = this.channel4currentSampleLeft;
        this.channel4currentSampleRightSecondary = this.channel4currentSampleRight;
    } else {
        this.channel4currentSampleLeftSecondary = 0;
        this.channel4currentSampleRightSecondary = 0;
    }
    this.mixerOutputLevelCache();
};
GameBoyCore.prototype.mixerOutputLevelCache = function() {
    this.mixerOutputCache = (this.channel1currentSampleLeftTrimary + this.channel2currentSampleLeftTrimary + this.channel3currentSampleLeftSecondary + this.channel4currentSampleLeftSecondary) * this.VinLeftChannelMasterVolume << 16 | (this.channel1currentSampleRightTrimary + this.channel2currentSampleRightTrimary + this.channel3currentSampleRightSecondary + this.channel4currentSampleRightSecondary) * this.VinRightChannelMasterVolume;
};
GameBoyCore.prototype.channel3UpdateCache = function() {
    this.cachedChannel3Sample = this.channel3PCM[this.channel3lastSampleLookup] >> this.channel3patternType;
    this.channel3OutputLevelCache();
};
GameBoyCore.prototype.channel3WriteRAM = function(address, data) {
    if (this.channel3canPlay) this.audioJIT();
    this.memory[0xFF30 | address] = data;
    address <<= 1;
    this.channel3PCM[address] = data >> 4;
    this.channel3PCM[address | 1] = data & 0xF;
};
GameBoyCore.prototype.channel4UpdateCache = function() {
    this.cachedChannel4Sample = this.noiseSampleTable[this.channel4currentVolume | this.channel4lastSampleLookup];
    this.channel4OutputLevelCache();
};
GameBoyCore.prototype.run = function() {
    //The preprocessing before the actual iteration loop:
    if ((this.stopEmulator & 2) == 0) {
        if ((this.stopEmulator & 1) == 1) {
            if (!this.CPUStopped) {
                this.stopEmulator = 0;
                this.audioUnderrunAdjustment();
                this.clockUpdate(); //RTC clocking.
                if (!this.halt) this.executeIteration();
                else {
                    this.CPUTicks = 0;
                    this.calculateHALTPeriod();
                    if (this.halt) {
                        this.updateCore();
                        this.iterationEndRoutine();
                    } else this.executeIteration();
                }
                //Request the graphics target to be updated:
                this.requestDraw();
                this.frameDone = true;
            } else {
                this.audioUnderrunAdjustment();
                this.audioTicks += this.CPUCyclesTotal;
                this.audioJIT();
                this.stopEmulator |= 1; //End current loop.
            }
        } else {
            console.log("Iterator restarted a faulted core.");
            pause();
        }
    }
};
GameBoyCore.prototype.executeIteration = function() {
    //Iterate the interpreter loop:
    var opcodeToExecute = 0;
    var timedTicks = 0;
    while(this.stopEmulator == 0){
        //Interrupt Arming:
        switch(this.IRQEnableDelay){
            case 1:
                this.IME = true;
                this.checkIRQMatching();
            case 2:
                --this.IRQEnableDelay;
        }
        //Is an IRQ set to fire?:
        if (this.IRQLineMatched > 0) //IME is true and and interrupt was matched:
        this.launchIRQ();
        //Fetch the current opcode:
        opcodeToExecute = this.memoryReader[this.programCounter](this, this.programCounter);
        //Increment the program counter to the next instruction:
        this.programCounter = this.programCounter + 1 & 0xFFFF;
        //Check for the program counter quirk:
        if (this.skipPCIncrement) {
            this.programCounter = this.programCounter - 1 & 0xFFFF;
            this.skipPCIncrement = false;
        }
        //Get how many CPU cycles the current instruction counts for:
        this.CPUTicks = this.TICKTable[opcodeToExecute];
        //Execute the current instruction:
        this.OPCODE[opcodeToExecute](this);
        //Update the state (Inlined updateCoreFull manually here):
        //Update the clocking for the LCD emulation:
        this.LCDTicks += this.CPUTicks >> this.doubleSpeedShifter; //LCD Timing
        this.LCDCONTROL[this.actualScanLine](this); //Scan Line and STAT Mode Control
        //Single-speed relative timing for A/V emulation:
        timedTicks = this.CPUTicks >> this.doubleSpeedShifter; //CPU clocking can be updated from the LCD handling.
        this.audioTicks += timedTicks; //Audio Timing
        this.emulatorTicks += timedTicks; //Emulator Timing
        //CPU Timers:
        this.DIVTicks += this.CPUTicks; //DIV Timing
        if (this.TIMAEnabled) {
            this.timerTicks += this.CPUTicks;
            while(this.timerTicks >= this.TACClocker){
                this.timerTicks -= this.TACClocker;
                if (++this.memory[0xFF05] == 0x100) {
                    this.memory[0xFF05] = this.memory[0xFF06];
                    this.interruptsRequested |= 0x4;
                    this.checkIRQMatching();
                }
            }
        }
        if (this.serialTimer > 0) {
            //IRQ Counter:
            this.serialTimer -= this.CPUTicks;
            if (this.serialTimer <= 0) {
                this.interruptsRequested |= 0x8;
                this.checkIRQMatching();
            }
            //Bit Shit Counter:
            this.serialShiftTimer -= this.CPUTicks;
            if (this.serialShiftTimer <= 0) {
                this.serialShiftTimer = this.serialShiftTimerAllocated;
                this.memory[0xFF01] = this.memory[0xFF01] << 1 & 0xFE | 0x01; //We could shift in actual link data here if we were to implement such!!!
            }
        }
        //End of iteration routine:
        if (this.emulatorTicks >= this.CPUCyclesTotal) this.iterationEndRoutine();
    }
};
GameBoyCore.prototype.iterationEndRoutine = function() {
    if ((this.stopEmulator & 0x1) == 0) {
        this.audioJIT(); //Make sure we at least output once per iteration.
        //Update DIV Alignment (Integer overflow safety):
        this.memory[0xFF04] = this.memory[0xFF04] + (this.DIVTicks >> 8) & 0xFF;
        this.DIVTicks &= 0xFF;
        //Update emulator flags:
        this.stopEmulator |= 1; //End current loop.
        this.emulatorTicks -= this.CPUCyclesTotal;
        this.CPUCyclesTotalCurrent += this.CPUCyclesTotalRoundoff;
        this.recalculateIterationClockLimit();
    }
};
GameBoyCore.prototype.handleSTOP = function() {
    this.CPUStopped = true; //Stop CPU until joypad input changes.
    this.iterationEndRoutine();
    if (this.emulatorTicks < 0) {
        this.audioTicks -= this.emulatorTicks;
        this.audioJIT();
    }
};
GameBoyCore.prototype.recalculateIterationClockLimit = function() {
    var endModulus = this.CPUCyclesTotalCurrent % 4;
    this.CPUCyclesTotal = this.CPUCyclesTotalBase + this.CPUCyclesTotalCurrent - endModulus;
    this.CPUCyclesTotalCurrent = endModulus;
};
GameBoyCore.prototype.recalculateIterationClockLimitForAudio = function(audioClocking) {
    this.CPUCyclesTotal += Math.min(audioClocking >> 2 << 2, this.CPUCyclesTotalBase << 1);
};
GameBoyCore.prototype.scanLineMode2 = function() {
    if (this.STATTracker != 1) {
        if (this.mode2TriggerSTAT) {
            this.interruptsRequested |= 0x2;
            this.checkIRQMatching();
        }
        this.STATTracker = 1;
        this.modeSTAT = 2;
    }
};
GameBoyCore.prototype.scanLineMode3 = function() {
    if (this.modeSTAT != 3) {
        if (this.STATTracker == 0 && this.mode2TriggerSTAT) {
            this.interruptsRequested |= 0x2;
            this.checkIRQMatching();
        }
        this.STATTracker = 1;
        this.modeSTAT = 3;
    }
};
GameBoyCore.prototype.scanLineMode0 = function() {
    if (this.modeSTAT != 0) {
        if (this.STATTracker != 2) {
            if (this.STATTracker == 0) {
                if (this.mode2TriggerSTAT) {
                    this.interruptsRequested |= 0x2;
                    this.checkIRQMatching();
                }
                this.modeSTAT = 3;
            }
            this.incrementScanLineQueue();
            this.updateSpriteCount(this.actualScanLine);
            this.STATTracker = 2;
        }
        if (this.LCDTicks >= this.spriteCount) {
            if (this.hdmaRunning) this.executeHDMA();
            if (this.mode0TriggerSTAT) {
                this.interruptsRequested |= 0x2;
                this.checkIRQMatching();
            }
            this.STATTracker = 3;
            this.modeSTAT = 0;
        }
    }
};
GameBoyCore.prototype.clocksUntilLYCMatch = function() {
    if (this.memory[0xFF45] != 0) {
        if (this.memory[0xFF45] > this.actualScanLine) return 456 * (this.memory[0xFF45] - this.actualScanLine);
        return 456 * (154 - this.actualScanLine + this.memory[0xFF45]);
    }
    return 456 * (this.actualScanLine == 153 && this.memory[0xFF44] == 0 ? 154 : 153 - this.actualScanLine) + 8;
};
GameBoyCore.prototype.clocksUntilMode0 = function() {
    switch(this.modeSTAT){
        case 0:
            if (this.actualScanLine == 143) {
                this.updateSpriteCount(0);
                return this.spriteCount + 5016;
            }
            this.updateSpriteCount(this.actualScanLine + 1);
            return this.spriteCount + 456;
        case 2:
        case 3:
            this.updateSpriteCount(this.actualScanLine);
            return this.spriteCount;
        case 1:
            this.updateSpriteCount(0);
            return this.spriteCount + 456 * (154 - this.actualScanLine);
    }
};
GameBoyCore.prototype.updateSpriteCount = function(line) {
    this.spriteCount = 252;
    if (this.cGBC && this.gfxSpriteShow) {
        var lineAdjusted = line + 0x10;
        var yoffset = 0;
        var yCap = this.gfxSpriteNormalHeight ? 0x8 : 0x10;
        for(var OAMAddress = 0xFE00; OAMAddress < 0xFEA0 && this.spriteCount < 312; OAMAddress += 4){
            yoffset = lineAdjusted - this.memory[OAMAddress];
            if (yoffset > -1 && yoffset < yCap) this.spriteCount += 6;
        }
    }
};
GameBoyCore.prototype.matchLYC = function() {
    if (this.memory[0xFF44] == this.memory[0xFF45]) {
        this.memory[0xFF41] |= 0x04;
        if (this.LYCMatchTriggerSTAT) {
            this.interruptsRequested |= 0x2;
            this.checkIRQMatching();
        }
    } else this.memory[0xFF41] &= 0x7B;
};
GameBoyCore.prototype.updateCore = function() {
    //Update the clocking for the LCD emulation:
    this.LCDTicks += this.CPUTicks >> this.doubleSpeedShifter; //LCD Timing
    this.LCDCONTROL[this.actualScanLine](this); //Scan Line and STAT Mode Control
    //Single-speed relative timing for A/V emulation:
    var timedTicks = this.CPUTicks >> this.doubleSpeedShifter; //CPU clocking can be updated from the LCD handling.
    this.audioTicks += timedTicks; //Audio Timing
    this.emulatorTicks += timedTicks; //Emulator Timing
    //CPU Timers:
    this.DIVTicks += this.CPUTicks; //DIV Timing
    if (this.TIMAEnabled) {
        this.timerTicks += this.CPUTicks;
        while(this.timerTicks >= this.TACClocker){
            this.timerTicks -= this.TACClocker;
            if (++this.memory[0xFF05] == 0x100) {
                this.memory[0xFF05] = this.memory[0xFF06];
                this.interruptsRequested |= 0x4;
                this.checkIRQMatching();
            }
        }
    }
    if (this.serialTimer > 0) {
        //IRQ Counter:
        this.serialTimer -= this.CPUTicks;
        if (this.serialTimer <= 0) {
            this.interruptsRequested |= 0x8;
            this.checkIRQMatching();
        }
        //Bit Shit Counter:
        this.serialShiftTimer -= this.CPUTicks;
        if (this.serialShiftTimer <= 0) {
            this.serialShiftTimer = this.serialShiftTimerAllocated;
            this.memory[0xFF01] = this.memory[0xFF01] << 1 & 0xFE | 0x01; //We could shift in actual link data here if we were to implement such!!!
        }
    }
};
GameBoyCore.prototype.updateCoreFull = function() {
    //Update the state machine:
    this.updateCore();
    //End of iteration routine:
    if (this.emulatorTicks >= this.CPUCyclesTotal) this.iterationEndRoutine();
};
GameBoyCore.prototype.initializeLCDController = function() {
    //Display on hanlding:
    var line = 0;
    while(line < 154){
        if (line < 143) //We're on a normal scan line:
        this.LINECONTROL[line] = function(parentObj) {
            if (parentObj.LCDTicks < 80) parentObj.scanLineMode2();
            else if (parentObj.LCDTicks < 252) parentObj.scanLineMode3();
            else if (parentObj.LCDTicks < 456) parentObj.scanLineMode0();
            else {
                //We're on a new scan line:
                parentObj.LCDTicks -= 456;
                if (parentObj.STATTracker != 3) {
                    //Make sure the mode 0 handler was run at least once per scan line:
                    if (parentObj.STATTracker != 2) {
                        if (parentObj.STATTracker == 0 && parentObj.mode2TriggerSTAT) parentObj.interruptsRequested |= 0x2;
                        parentObj.incrementScanLineQueue();
                    }
                    if (parentObj.hdmaRunning) parentObj.executeHDMA();
                    if (parentObj.mode0TriggerSTAT) parentObj.interruptsRequested |= 0x2;
                }
                //Update the scanline registers and assert the LYC counter:
                parentObj.actualScanLine = ++parentObj.memory[0xFF44];
                //Perform a LYC counter assert:
                if (parentObj.actualScanLine == parentObj.memory[0xFF45]) {
                    parentObj.memory[0xFF41] |= 0x04;
                    if (parentObj.LYCMatchTriggerSTAT) parentObj.interruptsRequested |= 0x2;
                } else parentObj.memory[0xFF41] &= 0x7B;
                parentObj.checkIRQMatching();
                //Reset our mode contingency variables:
                parentObj.STATTracker = 0;
                parentObj.modeSTAT = 2;
                parentObj.LINECONTROL[parentObj.actualScanLine](parentObj); //Scan Line and STAT Mode Control.
            }
        };
        else if (line == 143) //We're on the last visible scan line of the LCD screen:
        this.LINECONTROL[143] = function(parentObj) {
            if (parentObj.LCDTicks < 80) parentObj.scanLineMode2();
            else if (parentObj.LCDTicks < 252) parentObj.scanLineMode3();
            else if (parentObj.LCDTicks < 456) parentObj.scanLineMode0();
            else {
                //Starting V-Blank:
                //Just finished the last visible scan line:
                parentObj.LCDTicks -= 456;
                if (parentObj.STATTracker != 3) {
                    //Make sure the mode 0 handler was run at least once per scan line:
                    if (parentObj.STATTracker != 2) {
                        if (parentObj.STATTracker == 0 && parentObj.mode2TriggerSTAT) parentObj.interruptsRequested |= 0x2;
                        parentObj.incrementScanLineQueue();
                    }
                    if (parentObj.hdmaRunning) parentObj.executeHDMA();
                    if (parentObj.mode0TriggerSTAT) parentObj.interruptsRequested |= 0x2;
                }
                //Update the scanline registers and assert the LYC counter:
                parentObj.actualScanLine = parentObj.memory[0xFF44] = 144;
                //Perform a LYC counter assert:
                if (parentObj.memory[0xFF45] == 144) {
                    parentObj.memory[0xFF41] |= 0x04;
                    if (parentObj.LYCMatchTriggerSTAT) parentObj.interruptsRequested |= 0x2;
                } else parentObj.memory[0xFF41] &= 0x7B;
                //Reset our mode contingency variables:
                parentObj.STATTracker = 0;
                //Update our state for v-blank:
                parentObj.modeSTAT = 1;
                parentObj.interruptsRequested |= parentObj.mode1TriggerSTAT ? 0x3 : 0x1;
                parentObj.checkIRQMatching();
                //Attempt to blit out to our canvas:
                if (parentObj.drewBlank == 0) //Ensure JIT framing alignment:
                {
                    if (parentObj.totalLinesPassed < 144 || parentObj.totalLinesPassed == 144 && parentObj.midScanlineOffset > -1) {
                        //Make sure our gfx are up-to-date:
                        parentObj.graphicsJITVBlank();
                        //Draw the frame:
                        parentObj.prepareFrame();
                    }
                } else //LCD off takes at least 2 frames:
                --parentObj.drewBlank;
                parentObj.LINECONTROL[144](parentObj); //Scan Line and STAT Mode Control.
            }
        };
        else if (line < 153) //In VBlank
        this.LINECONTROL[line] = function(parentObj) {
            if (parentObj.LCDTicks >= 456) {
                //We're on a new scan line:
                parentObj.LCDTicks -= 456;
                parentObj.actualScanLine = ++parentObj.memory[0xFF44];
                //Perform a LYC counter assert:
                if (parentObj.actualScanLine == parentObj.memory[0xFF45]) {
                    parentObj.memory[0xFF41] |= 0x04;
                    if (parentObj.LYCMatchTriggerSTAT) {
                        parentObj.interruptsRequested |= 0x2;
                        parentObj.checkIRQMatching();
                    }
                } else parentObj.memory[0xFF41] &= 0x7B;
                parentObj.LINECONTROL[parentObj.actualScanLine](parentObj); //Scan Line and STAT Mode Control.
            }
        };
        else //VBlank Ending (We're on the last actual scan line)
        this.LINECONTROL[153] = function(parentObj) {
            if (parentObj.LCDTicks >= 8) {
                if (parentObj.STATTracker != 4 && parentObj.memory[0xFF44] == 153) {
                    parentObj.memory[0xFF44] = 0; //LY register resets to 0 early.
                    //Perform a LYC counter assert:
                    if (parentObj.memory[0xFF45] == 0) {
                        parentObj.memory[0xFF41] |= 0x04;
                        if (parentObj.LYCMatchTriggerSTAT) {
                            parentObj.interruptsRequested |= 0x2;
                            parentObj.checkIRQMatching();
                        }
                    } else parentObj.memory[0xFF41] &= 0x7B;
                    parentObj.STATTracker = 4;
                }
                if (parentObj.LCDTicks >= 456) {
                    //We reset back to the beginning:
                    parentObj.LCDTicks -= 456;
                    parentObj.STATTracker = parentObj.actualScanLine = 0;
                    parentObj.LINECONTROL[0](parentObj); //Scan Line and STAT Mode Control.
                }
            }
        };
        ++line;
    }
};
GameBoyCore.prototype.DisplayShowOff = function() {
    if (this.drewBlank == 0) {
        //Output a blank screen to the output framebuffer:
        this.clearFrameBuffer();
        this.drewFrame = true;
    }
    this.drewBlank = 2;
};
GameBoyCore.prototype.executeHDMA = function() {
    this.DMAWrite(1);
    if (this.halt) {
        if (this.LCDTicks - this.spriteCount < (4 >> this.doubleSpeedShifter | 0x20)) {
            //HALT clocking correction:
            this.CPUTicks = 4 + (0x20 + this.spriteCount << this.doubleSpeedShifter);
            this.LCDTicks = this.spriteCount + (4 >> this.doubleSpeedShifter | 0x20);
        }
    } else this.LCDTicks += 4 >> this.doubleSpeedShifter | 0x20; //LCD Timing Update For HDMA.
    if (this.memory[0xFF55] == 0) {
        this.hdmaRunning = false;
        this.memory[0xFF55] = 0xFF; //Transfer completed ("Hidden last step," since some ROMs don't imply this, but most do).
    } else --this.memory[0xFF55];
};
GameBoyCore.prototype.clockUpdate = function() {
    if (this.cTIMER) {
        var dateObj = new Date();
        var newTime = dateObj.getTime();
        var timeElapsed = newTime - this.lastIteration; //Get the numnber of milliseconds since this last executed.
        this.lastIteration = newTime;
        if (this.cTIMER && !this.RTCHALT) {
            //Update the MBC3 RTC:
            this.RTCSeconds += timeElapsed / 1000;
            while(this.RTCSeconds >= 60){
                this.RTCSeconds -= 60;
                ++this.RTCMinutes;
                if (this.RTCMinutes >= 60) {
                    this.RTCMinutes -= 60;
                    ++this.RTCHours;
                    if (this.RTCHours >= 24) {
                        this.RTCHours -= 24;
                        ++this.RTCDays;
                        if (this.RTCDays >= 512) {
                            this.RTCDays -= 512;
                            this.RTCDayOverFlow = true;
                        }
                    }
                }
            }
        }
    }
};
GameBoyCore.prototype.prepareFrame = function() {
    //Copy the internal frame buffer to the output buffer:
    this.swizzleFrameBuffer();
    this.drewFrame = true;
};
GameBoyCore.prototype.requestDraw = function() {
    if (this.drewFrame) this.dispatchDraw();
};
GameBoyCore.prototype.dispatchDraw = function() {
    if (this.offscreenRGBCount > 0) {
        //We actually updated the graphics internally, so copy out:
        if (this.offscreenRGBCount == 92160) this.processDraw(this.swizzledFrame);
        else this.resizeFrameBuffer();
    }
};
//ToDo: Remove this method, I don't think it's necessary.
//Converts rgb canvas into rgba.
GameBoyCore.prototype.processDraw = function(frameBuffer) {
    var canvasRGBALength = this.offscreenRGBCount;
    var canvasData = this.canvasBuffer.data;
    var bufferIndex = 0;
    for(var canvasIndex = 0; canvasIndex < canvasRGBALength; ++canvasIndex){
        canvasData[canvasIndex++] = frameBuffer[bufferIndex++];
        canvasData[canvasIndex++] = frameBuffer[bufferIndex++];
        canvasData[canvasIndex++] = frameBuffer[bufferIndex++];
    }
    this.graphicsBlit();
    this.drewFrame = false;
};
//Which means I want to grab the swizzledFrame, not the normal frameBuffer(?)
//ToDo: I believe (but am not sure) that I can remove this too.
GameBoyCore.prototype.swizzleFrameBuffer = function() {
    //Convert our dirty 24-bit (24-bit, with internal render flags above it) framebuffer to an 8-bit buffer with separate indices for the RGB channels:
    var frameBuffer = this.frameBuffer;
    var swizzledFrame = this.swizzledFrame;
    var bufferIndex = 0;
    for(var canvasIndex = 0; canvasIndex < 69120;){
        swizzledFrame[canvasIndex++] = frameBuffer[bufferIndex] >> 16 & 0xFF; //Red
        swizzledFrame[canvasIndex++] = frameBuffer[bufferIndex] >> 8 & 0xFF; //Green
        swizzledFrame[canvasIndex++] = frameBuffer[bufferIndex++] & 0xFF; //Blue
    }
};
GameBoyCore.prototype.clearFrameBuffer = function() {
    var bufferIndex = 0;
    var frameBuffer = this.swizzledFrame;
    if (this.cGBC || this.colorizedGBPalettes) while(bufferIndex < 69120)frameBuffer[bufferIndex++] = 248;
    else while(bufferIndex < 69120){
        frameBuffer[bufferIndex++] = 239;
        frameBuffer[bufferIndex++] = 255;
        frameBuffer[bufferIndex++] = 222;
    }
};
GameBoyCore.prototype.resizeFrameBuffer = function() {
    //Resize in javascript with resize.js:
    if (this.resizePathClear) {
        this.resizePathClear = false;
        this.resizer.resize(this.swizzledFrame);
    }
};
GameBoyCore.prototype.compileResizeFrameBufferFunction = function() {
    if (this.offscreenRGBCount > 0) {
        var parentObj = this;
        this.resizer = new Resize(160, 144, this.offscreenWidth, this.offscreenHeight, false, settings[13], false, function(buffer) {
            if (buffer.length / 3 * 4 == parentObj.offscreenRGBCount) parentObj.processDraw(buffer);
            parentObj.resizePathClear = true;
        });
    }
};
GameBoyCore.prototype.renderScanLine = function(scanlineToRender) {
    this.pixelStart = scanlineToRender * 160;
    if (this.bgEnabled) {
        this.pixelEnd = 160;
        this.BGLayerRender(scanlineToRender);
        this.WindowLayerRender(scanlineToRender);
    } else {
        var pixelLine = (scanlineToRender + 1) * 160;
        var defaultColor = this.cGBC || this.colorizedGBPalettes ? 0xF8F8F8 : 0xEFFFDE;
        for(var pixelPosition = scanlineToRender * 160 + this.currentX; pixelPosition < pixelLine; pixelPosition++)this.frameBuffer[pixelPosition] = defaultColor;
    }
    this.SpriteLayerRender(scanlineToRender);
    this.currentX = 0;
    this.midScanlineOffset = -1;
};
GameBoyCore.prototype.renderMidScanLine = function() {
    if (this.actualScanLine < 144 && this.modeSTAT == 3) {
        //TODO: Get this accurate:
        if (this.midScanlineOffset == -1) this.midScanlineOffset = this.backgroundX & 0x7;
        if (this.LCDTicks >= 82) {
            this.pixelEnd = this.LCDTicks - 74;
            this.pixelEnd = Math.min(this.pixelEnd - this.midScanlineOffset - this.pixelEnd % 0x8, 160);
            if (this.bgEnabled) {
                this.pixelStart = this.lastUnrenderedLine * 160;
                this.BGLayerRender(this.lastUnrenderedLine);
                this.WindowLayerRender(this.lastUnrenderedLine);
            //TODO: Do midscanline JIT for sprites...
            } else {
                var pixelLine = this.lastUnrenderedLine * 160 + this.pixelEnd;
                var defaultColor = this.cGBC || this.colorizedGBPalettes ? 0xF8F8F8 : 0xEFFFDE;
                for(var pixelPosition = this.lastUnrenderedLine * 160 + this.currentX; pixelPosition < pixelLine; pixelPosition++)this.frameBuffer[pixelPosition] = defaultColor;
            }
            this.currentX = this.pixelEnd;
        }
    }
};
GameBoyCore.prototype.initializeModeSpecificArrays = function() {
    this.LCDCONTROL = this.LCDisOn ? this.LINECONTROL : this.DISPLAYOFFCONTROL;
    if (this.cGBC) {
        this.gbcOBJRawPalette = this.getTypedArray(0x40, 0, "uint8");
        this.gbcBGRawPalette = this.getTypedArray(0x40, 0, "uint8");
        this.gbcOBJPalette = this.getTypedArray(0x20, 0x1000000, "int32");
        this.gbcBGPalette = this.getTypedArray(0x40, 0, "int32");
        this.BGCHRBank2 = this.getTypedArray(0x800, 0, "uint8");
        this.BGCHRCurrentBank = this.currVRAMBank > 0 ? this.BGCHRBank2 : this.BGCHRBank1;
        this.tileCache = this.generateCacheArray(0xF80);
    } else {
        this.gbOBJPalette = this.getTypedArray(8, 0, "int32");
        this.gbBGPalette = this.getTypedArray(4, 0, "int32");
        this.BGPalette = this.gbBGPalette;
        this.OBJPalette = this.gbOBJPalette;
        this.tileCache = this.generateCacheArray(0x700);
        this.sortBuffer = this.getTypedArray(0x100, 0, "uint8");
        this.OAMAddressCache = this.getTypedArray(10, 0, "int32");
    }
    this.renderPathBuild();
};
GameBoyCore.prototype.GBCtoGBModeAdjust = function() {
    cout("Stepping down from GBC mode.", 0);
    this.VRAM = this.GBCMemory = this.BGCHRCurrentBank = this.BGCHRBank2 = null;
    this.tileCache.length = 0x700;
    if (settings[4]) {
        this.gbBGColorizedPalette = this.getTypedArray(4, 0, "int32");
        this.gbOBJColorizedPalette = this.getTypedArray(8, 0, "int32");
        this.cachedBGPaletteConversion = this.getTypedArray(4, 0, "int32");
        this.cachedOBJPaletteConversion = this.getTypedArray(8, 0, "int32");
        this.BGPalette = this.gbBGColorizedPalette;
        this.OBJPalette = this.gbOBJColorizedPalette;
        this.gbOBJPalette = this.gbBGPalette = null;
        this.getGBCColor();
    } else {
        this.gbOBJPalette = this.getTypedArray(8, 0, "int32");
        this.gbBGPalette = this.getTypedArray(4, 0, "int32");
        this.BGPalette = this.gbBGPalette;
        this.OBJPalette = this.gbOBJPalette;
    }
    this.sortBuffer = this.getTypedArray(0x100, 0, "uint8");
    this.OAMAddressCache = this.getTypedArray(10, 0, "int32");
    this.renderPathBuild();
    this.memoryReadJumpCompile();
    this.memoryWriteJumpCompile();
};
GameBoyCore.prototype.renderPathBuild = function() {
    if (!this.cGBC) {
        this.BGLayerRender = this.BGGBLayerRender;
        this.WindowLayerRender = this.WindowGBLayerRender;
        this.SpriteLayerRender = this.SpriteGBLayerRender;
    } else {
        this.priorityFlaggingPathRebuild();
        this.SpriteLayerRender = this.SpriteGBCLayerRender;
    }
};
GameBoyCore.prototype.priorityFlaggingPathRebuild = function() {
    if (this.BGPriorityEnabled) {
        this.BGLayerRender = this.BGGBCLayerRender;
        this.WindowLayerRender = this.WindowGBCLayerRender;
    } else {
        this.BGLayerRender = this.BGGBCLayerRenderNoPriorityFlagging;
        this.WindowLayerRender = this.WindowGBCLayerRenderNoPriorityFlagging;
    }
};
GameBoyCore.prototype.initializeReferencesFromSaveState = function() {
    this.LCDCONTROL = this.LCDisOn ? this.LINECONTROL : this.DISPLAYOFFCONTROL;
    var tileIndex = 0;
    if (!this.cGBC) {
        if (this.colorizedGBPalettes) {
            this.BGPalette = this.gbBGColorizedPalette;
            this.OBJPalette = this.gbOBJColorizedPalette;
            this.updateGBBGPalette = this.updateGBColorizedBGPalette;
            this.updateGBOBJPalette = this.updateGBColorizedOBJPalette;
        } else {
            this.BGPalette = this.gbBGPalette;
            this.OBJPalette = this.gbOBJPalette;
        }
        this.tileCache = this.generateCacheArray(0x700);
        for(tileIndex = 0x8000; tileIndex < 0x9000; tileIndex += 2)this.generateGBOAMTileLine(tileIndex);
        for(tileIndex = 0x9000; tileIndex < 0x9800; tileIndex += 2)this.generateGBTileLine(tileIndex);
        this.sortBuffer = this.getTypedArray(0x100, 0, "uint8");
        this.OAMAddressCache = this.getTypedArray(10, 0, "int32");
    } else {
        this.BGCHRCurrentBank = this.currVRAMBank > 0 ? this.BGCHRBank2 : this.BGCHRBank1;
        this.tileCache = this.generateCacheArray(0xF80);
        for(; tileIndex < 0x1800; tileIndex += 0x10){
            this.generateGBCTileBank1(tileIndex);
            this.generateGBCTileBank2(tileIndex);
        }
    }
    this.renderPathBuild();
};
GameBoyCore.prototype.RGBTint = function(value) {
    //Adjustment for the GBC's tinting (According to Gambatte):
    var r = value & 0x1F;
    var g = value >> 5 & 0x1F;
    var b = value >> 10 & 0x1F;
    return r * 13 + g * 2 + b >> 1 << 16 | g * 3 + b << 9 | r * 3 + g * 2 + b * 11 >> 1;
};
GameBoyCore.prototype.getGBCColor = function() {
    //GBC Colorization of DMG ROMs:
    //BG
    for(var counter = 0; counter < 4; counter++){
        var adjustedIndex = counter << 1;
        //BG
        this.cachedBGPaletteConversion[counter] = this.RGBTint(this.gbcBGRawPalette[adjustedIndex | 1] << 8 | this.gbcBGRawPalette[adjustedIndex]);
        //OBJ 1
        this.cachedOBJPaletteConversion[counter] = this.RGBTint(this.gbcOBJRawPalette[adjustedIndex | 1] << 8 | this.gbcOBJRawPalette[adjustedIndex]);
    }
    //OBJ 2
    for(counter = 4; counter < 8; counter++){
        adjustedIndex = counter << 1;
        this.cachedOBJPaletteConversion[counter] = this.RGBTint(this.gbcOBJRawPalette[adjustedIndex | 1] << 8 | this.gbcOBJRawPalette[adjustedIndex]);
    }
    //Update the palette entries:
    this.updateGBBGPalette = this.updateGBColorizedBGPalette;
    this.updateGBOBJPalette = this.updateGBColorizedOBJPalette;
    this.updateGBBGPalette(this.memory[0xFF47]);
    this.updateGBOBJPalette(0, this.memory[0xFF48]);
    this.updateGBOBJPalette(1, this.memory[0xFF49]);
    this.colorizedGBPalettes = true;
};
GameBoyCore.prototype.updateGBRegularBGPalette = function(data) {
    this.gbBGPalette[0] = this.colors[data & 0x03] | 0x2000000;
    this.gbBGPalette[1] = this.colors[data >> 2 & 0x03];
    this.gbBGPalette[2] = this.colors[data >> 4 & 0x03];
    this.gbBGPalette[3] = this.colors[data >> 6];
};
GameBoyCore.prototype.updateGBColorizedBGPalette = function(data) {
    //GB colorization:
    this.gbBGColorizedPalette[0] = this.cachedBGPaletteConversion[data & 0x03] | 0x2000000;
    this.gbBGColorizedPalette[1] = this.cachedBGPaletteConversion[data >> 2 & 0x03];
    this.gbBGColorizedPalette[2] = this.cachedBGPaletteConversion[data >> 4 & 0x03];
    this.gbBGColorizedPalette[3] = this.cachedBGPaletteConversion[data >> 6];
};
GameBoyCore.prototype.updateGBRegularOBJPalette = function(index, data) {
    this.gbOBJPalette[index | 1] = this.colors[data >> 2 & 0x03];
    this.gbOBJPalette[index | 2] = this.colors[data >> 4 & 0x03];
    this.gbOBJPalette[index | 3] = this.colors[data >> 6];
};
GameBoyCore.prototype.updateGBColorizedOBJPalette = function(index, data) {
    //GB colorization:
    this.gbOBJColorizedPalette[index | 1] = this.cachedOBJPaletteConversion[index | data >> 2 & 0x03];
    this.gbOBJColorizedPalette[index | 2] = this.cachedOBJPaletteConversion[index | data >> 4 & 0x03];
    this.gbOBJColorizedPalette[index | 3] = this.cachedOBJPaletteConversion[index | data >> 6];
};
GameBoyCore.prototype.updateGBCBGPalette = function(index, data) {
    if (this.gbcBGRawPalette[index] != data) {
        this.midScanLineJIT();
        //Update the color palette for BG tiles since it changed:
        this.gbcBGRawPalette[index] = data;
        if ((index & 0x06) == 0) {
            //Palette 0 (Special tile Priority stuff)
            data = 0x2000000 | this.RGBTint(this.gbcBGRawPalette[index | 1] << 8 | this.gbcBGRawPalette[index & 0x3E]);
            index >>= 1;
            this.gbcBGPalette[index] = data;
            this.gbcBGPalette[0x20 | index] = 0x1000000 | data;
        } else {
            //Regular Palettes (No special crap)
            data = this.RGBTint(this.gbcBGRawPalette[index | 1] << 8 | this.gbcBGRawPalette[index & 0x3E]);
            index >>= 1;
            this.gbcBGPalette[index] = data;
            this.gbcBGPalette[0x20 | index] = 0x1000000 | data;
        }
    }
};
GameBoyCore.prototype.updateGBCOBJPalette = function(index, data) {
    if (this.gbcOBJRawPalette[index] != data) {
        //Update the color palette for OBJ tiles since it changed:
        this.gbcOBJRawPalette[index] = data;
        if ((index & 0x06) > 0) {
            //Regular Palettes (No special crap)
            this.midScanLineJIT();
            this.gbcOBJPalette[index >> 1] = 0x1000000 | this.RGBTint(this.gbcOBJRawPalette[index | 1] << 8 | this.gbcOBJRawPalette[index & 0x3E]);
        }
    }
};
GameBoyCore.prototype.BGGBLayerRender = function(scanlineToRender) {
    var scrollYAdjusted = this.backgroundY + scanlineToRender & 0xFF; //The line of the BG we're at.
    var tileYLine = (scrollYAdjusted & 7) << 3;
    var tileYDown = this.gfxBackgroundCHRBankPosition | (scrollYAdjusted & 0xF8) << 2; //The row of cached tiles we're fetching from.
    var scrollXAdjusted = this.backgroundX + this.currentX & 0xFF; //The scroll amount of the BG.
    var pixelPosition = this.pixelStart + this.currentX; //Current pixel we're working on.
    var pixelPositionEnd = this.pixelStart + (this.gfxWindowDisplay && scanlineToRender - this.windowY >= 0 ? Math.min(Math.max(this.windowX, 0) + this.currentX, this.pixelEnd) : this.pixelEnd); //Make sure we do at most 160 pixels a scanline.
    var tileNumber = tileYDown + (scrollXAdjusted >> 3);
    var chrCode = this.BGCHRBank1[tileNumber];
    if (chrCode < this.gfxBackgroundBankOffset) chrCode |= 0x100;
    var tile = this.tileCache[chrCode];
    for(var texel = scrollXAdjusted & 0x7; texel < 8 && pixelPosition < pixelPositionEnd && scrollXAdjusted < 0x100; ++scrollXAdjusted)this.frameBuffer[pixelPosition++] = this.BGPalette[tile[tileYLine | texel++]];
    var scrollXAdjustedAligned = Math.min(pixelPositionEnd - pixelPosition, 0x100 - scrollXAdjusted) >> 3;
    scrollXAdjusted += scrollXAdjustedAligned << 3;
    scrollXAdjustedAligned += tileNumber;
    while(tileNumber < scrollXAdjustedAligned){
        chrCode = this.BGCHRBank1[++tileNumber];
        if (chrCode < this.gfxBackgroundBankOffset) chrCode |= 0x100;
        tile = this.tileCache[chrCode];
        texel = tileYLine;
        this.frameBuffer[pixelPosition++] = this.BGPalette[tile[texel++]];
        this.frameBuffer[pixelPosition++] = this.BGPalette[tile[texel++]];
        this.frameBuffer[pixelPosition++] = this.BGPalette[tile[texel++]];
        this.frameBuffer[pixelPosition++] = this.BGPalette[tile[texel++]];
        this.frameBuffer[pixelPosition++] = this.BGPalette[tile[texel++]];
        this.frameBuffer[pixelPosition++] = this.BGPalette[tile[texel++]];
        this.frameBuffer[pixelPosition++] = this.BGPalette[tile[texel++]];
        this.frameBuffer[pixelPosition++] = this.BGPalette[tile[texel]];
    }
    if (pixelPosition < pixelPositionEnd) {
        if (scrollXAdjusted < 0x100) {
            chrCode = this.BGCHRBank1[++tileNumber];
            if (chrCode < this.gfxBackgroundBankOffset) chrCode |= 0x100;
            tile = this.tileCache[chrCode];
            for(texel = tileYLine - 1; pixelPosition < pixelPositionEnd && scrollXAdjusted < 0x100; ++scrollXAdjusted)this.frameBuffer[pixelPosition++] = this.BGPalette[tile[++texel]];
        }
        scrollXAdjustedAligned = (pixelPositionEnd - pixelPosition >> 3) + tileYDown;
        while(tileYDown < scrollXAdjustedAligned){
            chrCode = this.BGCHRBank1[tileYDown++];
            if (chrCode < this.gfxBackgroundBankOffset) chrCode |= 0x100;
            tile = this.tileCache[chrCode];
            texel = tileYLine;
            this.frameBuffer[pixelPosition++] = this.BGPalette[tile[texel++]];
            this.frameBuffer[pixelPosition++] = this.BGPalette[tile[texel++]];
            this.frameBuffer[pixelPosition++] = this.BGPalette[tile[texel++]];
            this.frameBuffer[pixelPosition++] = this.BGPalette[tile[texel++]];
            this.frameBuffer[pixelPosition++] = this.BGPalette[tile[texel++]];
            this.frameBuffer[pixelPosition++] = this.BGPalette[tile[texel++]];
            this.frameBuffer[pixelPosition++] = this.BGPalette[tile[texel++]];
            this.frameBuffer[pixelPosition++] = this.BGPalette[tile[texel]];
        }
        if (pixelPosition < pixelPositionEnd) {
            chrCode = this.BGCHRBank1[tileYDown];
            if (chrCode < this.gfxBackgroundBankOffset) chrCode |= 0x100;
            tile = this.tileCache[chrCode];
            switch(pixelPositionEnd - pixelPosition){
                case 7:
                    this.frameBuffer[pixelPosition + 6] = this.BGPalette[tile[tileYLine | 6]];
                case 6:
                    this.frameBuffer[pixelPosition + 5] = this.BGPalette[tile[tileYLine | 5]];
                case 5:
                    this.frameBuffer[pixelPosition + 4] = this.BGPalette[tile[tileYLine | 4]];
                case 4:
                    this.frameBuffer[pixelPosition + 3] = this.BGPalette[tile[tileYLine | 3]];
                case 3:
                    this.frameBuffer[pixelPosition + 2] = this.BGPalette[tile[tileYLine | 2]];
                case 2:
                    this.frameBuffer[pixelPosition + 1] = this.BGPalette[tile[tileYLine | 1]];
                case 1:
                    this.frameBuffer[pixelPosition] = this.BGPalette[tile[tileYLine]];
            }
        }
    }
};
GameBoyCore.prototype.BGGBCLayerRender = function(scanlineToRender) {
    var scrollYAdjusted = this.backgroundY + scanlineToRender & 0xFF; //The line of the BG we're at.
    var tileYLine = (scrollYAdjusted & 7) << 3;
    var tileYDown = this.gfxBackgroundCHRBankPosition | (scrollYAdjusted & 0xF8) << 2; //The row of cached tiles we're fetching from.
    var scrollXAdjusted = this.backgroundX + this.currentX & 0xFF; //The scroll amount of the BG.
    var pixelPosition = this.pixelStart + this.currentX; //Current pixel we're working on.
    var pixelPositionEnd = this.pixelStart + (this.gfxWindowDisplay && scanlineToRender - this.windowY >= 0 ? Math.min(Math.max(this.windowX, 0) + this.currentX, this.pixelEnd) : this.pixelEnd); //Make sure we do at most 160 pixels a scanline.
    var tileNumber = tileYDown + (scrollXAdjusted >> 3);
    var chrCode = this.BGCHRBank1[tileNumber];
    if (chrCode < this.gfxBackgroundBankOffset) chrCode |= 0x100;
    var attrCode = this.BGCHRBank2[tileNumber];
    var tile = this.tileCache[(attrCode & 0x08) << 8 | (attrCode & 0x60) << 4 | chrCode];
    var palette = (attrCode & 0x7) << 2 | (attrCode & 0x80) >> 2;
    for(var texel = scrollXAdjusted & 0x7; texel < 8 && pixelPosition < pixelPositionEnd && scrollXAdjusted < 0x100; ++scrollXAdjusted)this.frameBuffer[pixelPosition++] = this.gbcBGPalette[palette | tile[tileYLine | texel++]];
    var scrollXAdjustedAligned = Math.min(pixelPositionEnd - pixelPosition, 0x100 - scrollXAdjusted) >> 3;
    scrollXAdjusted += scrollXAdjustedAligned << 3;
    scrollXAdjustedAligned += tileNumber;
    while(tileNumber < scrollXAdjustedAligned){
        chrCode = this.BGCHRBank1[++tileNumber];
        if (chrCode < this.gfxBackgroundBankOffset) chrCode |= 0x100;
        attrCode = this.BGCHRBank2[tileNumber];
        tile = this.tileCache[(attrCode & 0x08) << 8 | (attrCode & 0x60) << 4 | chrCode];
        palette = (attrCode & 0x7) << 2 | (attrCode & 0x80) >> 2;
        texel = tileYLine;
        this.frameBuffer[pixelPosition++] = this.gbcBGPalette[palette | tile[texel++]];
        this.frameBuffer[pixelPosition++] = this.gbcBGPalette[palette | tile[texel++]];
        this.frameBuffer[pixelPosition++] = this.gbcBGPalette[palette | tile[texel++]];
        this.frameBuffer[pixelPosition++] = this.gbcBGPalette[palette | tile[texel++]];
        this.frameBuffer[pixelPosition++] = this.gbcBGPalette[palette | tile[texel++]];
        this.frameBuffer[pixelPosition++] = this.gbcBGPalette[palette | tile[texel++]];
        this.frameBuffer[pixelPosition++] = this.gbcBGPalette[palette | tile[texel++]];
        this.frameBuffer[pixelPosition++] = this.gbcBGPalette[palette | tile[texel]];
    }
    if (pixelPosition < pixelPositionEnd) {
        if (scrollXAdjusted < 0x100) {
            chrCode = this.BGCHRBank1[++tileNumber];
            if (chrCode < this.gfxBackgroundBankOffset) chrCode |= 0x100;
            attrCode = this.BGCHRBank2[tileNumber];
            tile = this.tileCache[(attrCode & 0x08) << 8 | (attrCode & 0x60) << 4 | chrCode];
            palette = (attrCode & 0x7) << 2 | (attrCode & 0x80) >> 2;
            for(texel = tileYLine - 1; pixelPosition < pixelPositionEnd && scrollXAdjusted < 0x100; ++scrollXAdjusted)this.frameBuffer[pixelPosition++] = this.gbcBGPalette[palette | tile[++texel]];
        }
        scrollXAdjustedAligned = (pixelPositionEnd - pixelPosition >> 3) + tileYDown;
        while(tileYDown < scrollXAdjustedAligned){
            chrCode = this.BGCHRBank1[tileYDown];
            if (chrCode < this.gfxBackgroundBankOffset) chrCode |= 0x100;
            attrCode = this.BGCHRBank2[tileYDown++];
            tile = this.tileCache[(attrCode & 0x08) << 8 | (attrCode & 0x60) << 4 | chrCode];
            palette = (attrCode & 0x7) << 2 | (attrCode & 0x80) >> 2;
            texel = tileYLine;
            this.frameBuffer[pixelPosition++] = this.gbcBGPalette[palette | tile[texel++]];
            this.frameBuffer[pixelPosition++] = this.gbcBGPalette[palette | tile[texel++]];
            this.frameBuffer[pixelPosition++] = this.gbcBGPalette[palette | tile[texel++]];
            this.frameBuffer[pixelPosition++] = this.gbcBGPalette[palette | tile[texel++]];
            this.frameBuffer[pixelPosition++] = this.gbcBGPalette[palette | tile[texel++]];
            this.frameBuffer[pixelPosition++] = this.gbcBGPalette[palette | tile[texel++]];
            this.frameBuffer[pixelPosition++] = this.gbcBGPalette[palette | tile[texel++]];
            this.frameBuffer[pixelPosition++] = this.gbcBGPalette[palette | tile[texel]];
        }
        if (pixelPosition < pixelPositionEnd) {
            chrCode = this.BGCHRBank1[tileYDown];
            if (chrCode < this.gfxBackgroundBankOffset) chrCode |= 0x100;
            attrCode = this.BGCHRBank2[tileYDown];
            tile = this.tileCache[(attrCode & 0x08) << 8 | (attrCode & 0x60) << 4 | chrCode];
            palette = (attrCode & 0x7) << 2 | (attrCode & 0x80) >> 2;
            switch(pixelPositionEnd - pixelPosition){
                case 7:
                    this.frameBuffer[pixelPosition + 6] = this.gbcBGPalette[palette | tile[tileYLine | 6]];
                case 6:
                    this.frameBuffer[pixelPosition + 5] = this.gbcBGPalette[palette | tile[tileYLine | 5]];
                case 5:
                    this.frameBuffer[pixelPosition + 4] = this.gbcBGPalette[palette | tile[tileYLine | 4]];
                case 4:
                    this.frameBuffer[pixelPosition + 3] = this.gbcBGPalette[palette | tile[tileYLine | 3]];
                case 3:
                    this.frameBuffer[pixelPosition + 2] = this.gbcBGPalette[palette | tile[tileYLine | 2]];
                case 2:
                    this.frameBuffer[pixelPosition + 1] = this.gbcBGPalette[palette | tile[tileYLine | 1]];
                case 1:
                    this.frameBuffer[pixelPosition] = this.gbcBGPalette[palette | tile[tileYLine]];
            }
        }
    }
};
GameBoyCore.prototype.BGGBCLayerRenderNoPriorityFlagging = function(scanlineToRender) {
    var scrollYAdjusted = this.backgroundY + scanlineToRender & 0xFF; //The line of the BG we're at.
    var tileYLine = (scrollYAdjusted & 7) << 3;
    var tileYDown = this.gfxBackgroundCHRBankPosition | (scrollYAdjusted & 0xF8) << 2; //The row of cached tiles we're fetching from.
    var scrollXAdjusted = this.backgroundX + this.currentX & 0xFF; //The scroll amount of the BG.
    var pixelPosition = this.pixelStart + this.currentX; //Current pixel we're working on.
    var pixelPositionEnd = this.pixelStart + (this.gfxWindowDisplay && scanlineToRender - this.windowY >= 0 ? Math.min(Math.max(this.windowX, 0) + this.currentX, this.pixelEnd) : this.pixelEnd); //Make sure we do at most 160 pixels a scanline.
    var tileNumber = tileYDown + (scrollXAdjusted >> 3);
    var chrCode = this.BGCHRBank1[tileNumber];
    if (chrCode < this.gfxBackgroundBankOffset) chrCode |= 0x100;
    var attrCode = this.BGCHRBank2[tileNumber];
    var tile = this.tileCache[(attrCode & 0x08) << 8 | (attrCode & 0x60) << 4 | chrCode];
    var palette = (attrCode & 0x7) << 2;
    for(var texel = scrollXAdjusted & 0x7; texel < 8 && pixelPosition < pixelPositionEnd && scrollXAdjusted < 0x100; ++scrollXAdjusted)this.frameBuffer[pixelPosition++] = this.gbcBGPalette[palette | tile[tileYLine | texel++]];
    var scrollXAdjustedAligned = Math.min(pixelPositionEnd - pixelPosition, 0x100 - scrollXAdjusted) >> 3;
    scrollXAdjusted += scrollXAdjustedAligned << 3;
    scrollXAdjustedAligned += tileNumber;
    while(tileNumber < scrollXAdjustedAligned){
        chrCode = this.BGCHRBank1[++tileNumber];
        if (chrCode < this.gfxBackgroundBankOffset) chrCode |= 0x100;
        attrCode = this.BGCHRBank2[tileNumber];
        tile = this.tileCache[(attrCode & 0x08) << 8 | (attrCode & 0x60) << 4 | chrCode];
        palette = (attrCode & 0x7) << 2;
        texel = tileYLine;
        this.frameBuffer[pixelPosition++] = this.gbcBGPalette[palette | tile[texel++]];
        this.frameBuffer[pixelPosition++] = this.gbcBGPalette[palette | tile[texel++]];
        this.frameBuffer[pixelPosition++] = this.gbcBGPalette[palette | tile[texel++]];
        this.frameBuffer[pixelPosition++] = this.gbcBGPalette[palette | tile[texel++]];
        this.frameBuffer[pixelPosition++] = this.gbcBGPalette[palette | tile[texel++]];
        this.frameBuffer[pixelPosition++] = this.gbcBGPalette[palette | tile[texel++]];
        this.frameBuffer[pixelPosition++] = this.gbcBGPalette[palette | tile[texel++]];
        this.frameBuffer[pixelPosition++] = this.gbcBGPalette[palette | tile[texel]];
    }
    if (pixelPosition < pixelPositionEnd) {
        if (scrollXAdjusted < 0x100) {
            chrCode = this.BGCHRBank1[++tileNumber];
            if (chrCode < this.gfxBackgroundBankOffset) chrCode |= 0x100;
            attrCode = this.BGCHRBank2[tileNumber];
            tile = this.tileCache[(attrCode & 0x08) << 8 | (attrCode & 0x60) << 4 | chrCode];
            palette = (attrCode & 0x7) << 2;
            for(texel = tileYLine - 1; pixelPosition < pixelPositionEnd && scrollXAdjusted < 0x100; ++scrollXAdjusted)this.frameBuffer[pixelPosition++] = this.gbcBGPalette[palette | tile[++texel]];
        }
        scrollXAdjustedAligned = (pixelPositionEnd - pixelPosition >> 3) + tileYDown;
        while(tileYDown < scrollXAdjustedAligned){
            chrCode = this.BGCHRBank1[tileYDown];
            if (chrCode < this.gfxBackgroundBankOffset) chrCode |= 0x100;
            attrCode = this.BGCHRBank2[tileYDown++];
            tile = this.tileCache[(attrCode & 0x08) << 8 | (attrCode & 0x60) << 4 | chrCode];
            palette = (attrCode & 0x7) << 2;
            texel = tileYLine;
            this.frameBuffer[pixelPosition++] = this.gbcBGPalette[palette | tile[texel++]];
            this.frameBuffer[pixelPosition++] = this.gbcBGPalette[palette | tile[texel++]];
            this.frameBuffer[pixelPosition++] = this.gbcBGPalette[palette | tile[texel++]];
            this.frameBuffer[pixelPosition++] = this.gbcBGPalette[palette | tile[texel++]];
            this.frameBuffer[pixelPosition++] = this.gbcBGPalette[palette | tile[texel++]];
            this.frameBuffer[pixelPosition++] = this.gbcBGPalette[palette | tile[texel++]];
            this.frameBuffer[pixelPosition++] = this.gbcBGPalette[palette | tile[texel++]];
            this.frameBuffer[pixelPosition++] = this.gbcBGPalette[palette | tile[texel]];
        }
        if (pixelPosition < pixelPositionEnd) {
            chrCode = this.BGCHRBank1[tileYDown];
            if (chrCode < this.gfxBackgroundBankOffset) chrCode |= 0x100;
            attrCode = this.BGCHRBank2[tileYDown];
            tile = this.tileCache[(attrCode & 0x08) << 8 | (attrCode & 0x60) << 4 | chrCode];
            palette = (attrCode & 0x7) << 2;
            switch(pixelPositionEnd - pixelPosition){
                case 7:
                    this.frameBuffer[pixelPosition + 6] = this.gbcBGPalette[palette | tile[tileYLine | 6]];
                case 6:
                    this.frameBuffer[pixelPosition + 5] = this.gbcBGPalette[palette | tile[tileYLine | 5]];
                case 5:
                    this.frameBuffer[pixelPosition + 4] = this.gbcBGPalette[palette | tile[tileYLine | 4]];
                case 4:
                    this.frameBuffer[pixelPosition + 3] = this.gbcBGPalette[palette | tile[tileYLine | 3]];
                case 3:
                    this.frameBuffer[pixelPosition + 2] = this.gbcBGPalette[palette | tile[tileYLine | 2]];
                case 2:
                    this.frameBuffer[pixelPosition + 1] = this.gbcBGPalette[palette | tile[tileYLine | 1]];
                case 1:
                    this.frameBuffer[pixelPosition] = this.gbcBGPalette[palette | tile[tileYLine]];
            }
        }
    }
};
GameBoyCore.prototype.WindowGBLayerRender = function(scanlineToRender) {
    if (this.gfxWindowDisplay) {
        var scrollYAdjusted = scanlineToRender - this.windowY; //The line of the BG we're at.
        if (scrollYAdjusted >= 0) {
            var scrollXRangeAdjusted = this.windowX > 0 ? this.windowX + this.currentX : this.currentX;
            var pixelPosition = this.pixelStart + scrollXRangeAdjusted;
            var pixelPositionEnd = this.pixelStart + this.pixelEnd;
            if (pixelPosition < pixelPositionEnd) {
                var tileYLine = (scrollYAdjusted & 0x7) << 3;
                var tileNumber = (this.gfxWindowCHRBankPosition | (scrollYAdjusted & 0xF8) << 2) + (this.currentX >> 3);
                var chrCode = this.BGCHRBank1[tileNumber];
                if (chrCode < this.gfxBackgroundBankOffset) chrCode |= 0x100;
                var tile = this.tileCache[chrCode];
                var texel = scrollXRangeAdjusted - this.windowX & 0x7;
                scrollXRangeAdjusted = Math.min(8, texel + pixelPositionEnd - pixelPosition);
                while(texel < scrollXRangeAdjusted)this.frameBuffer[pixelPosition++] = this.BGPalette[tile[tileYLine | texel++]];
                scrollXRangeAdjusted = tileNumber + (pixelPositionEnd - pixelPosition >> 3);
                while(tileNumber < scrollXRangeAdjusted){
                    chrCode = this.BGCHRBank1[++tileNumber];
                    if (chrCode < this.gfxBackgroundBankOffset) chrCode |= 0x100;
                    tile = this.tileCache[chrCode];
                    texel = tileYLine;
                    this.frameBuffer[pixelPosition++] = this.BGPalette[tile[texel++]];
                    this.frameBuffer[pixelPosition++] = this.BGPalette[tile[texel++]];
                    this.frameBuffer[pixelPosition++] = this.BGPalette[tile[texel++]];
                    this.frameBuffer[pixelPosition++] = this.BGPalette[tile[texel++]];
                    this.frameBuffer[pixelPosition++] = this.BGPalette[tile[texel++]];
                    this.frameBuffer[pixelPosition++] = this.BGPalette[tile[texel++]];
                    this.frameBuffer[pixelPosition++] = this.BGPalette[tile[texel++]];
                    this.frameBuffer[pixelPosition++] = this.BGPalette[tile[texel]];
                }
                if (pixelPosition < pixelPositionEnd) {
                    chrCode = this.BGCHRBank1[++tileNumber];
                    if (chrCode < this.gfxBackgroundBankOffset) chrCode |= 0x100;
                    tile = this.tileCache[chrCode];
                    switch(pixelPositionEnd - pixelPosition){
                        case 7:
                            this.frameBuffer[pixelPosition + 6] = this.BGPalette[tile[tileYLine | 6]];
                        case 6:
                            this.frameBuffer[pixelPosition + 5] = this.BGPalette[tile[tileYLine | 5]];
                        case 5:
                            this.frameBuffer[pixelPosition + 4] = this.BGPalette[tile[tileYLine | 4]];
                        case 4:
                            this.frameBuffer[pixelPosition + 3] = this.BGPalette[tile[tileYLine | 3]];
                        case 3:
                            this.frameBuffer[pixelPosition + 2] = this.BGPalette[tile[tileYLine | 2]];
                        case 2:
                            this.frameBuffer[pixelPosition + 1] = this.BGPalette[tile[tileYLine | 1]];
                        case 1:
                            this.frameBuffer[pixelPosition] = this.BGPalette[tile[tileYLine]];
                    }
                }
            }
        }
    }
};
GameBoyCore.prototype.WindowGBCLayerRender = function(scanlineToRender) {
    if (this.gfxWindowDisplay) {
        var scrollYAdjusted = scanlineToRender - this.windowY; //The line of the BG we're at.
        if (scrollYAdjusted >= 0) {
            var scrollXRangeAdjusted = this.windowX > 0 ? this.windowX + this.currentX : this.currentX;
            var pixelPosition = this.pixelStart + scrollXRangeAdjusted;
            var pixelPositionEnd = this.pixelStart + this.pixelEnd;
            if (pixelPosition < pixelPositionEnd) {
                var tileYLine = (scrollYAdjusted & 0x7) << 3;
                var tileNumber = (this.gfxWindowCHRBankPosition | (scrollYAdjusted & 0xF8) << 2) + (this.currentX >> 3);
                var chrCode = this.BGCHRBank1[tileNumber];
                if (chrCode < this.gfxBackgroundBankOffset) chrCode |= 0x100;
                var attrCode = this.BGCHRBank2[tileNumber];
                var tile = this.tileCache[(attrCode & 0x08) << 8 | (attrCode & 0x60) << 4 | chrCode];
                var palette = (attrCode & 0x7) << 2 | (attrCode & 0x80) >> 2;
                var texel = scrollXRangeAdjusted - this.windowX & 0x7;
                scrollXRangeAdjusted = Math.min(8, texel + pixelPositionEnd - pixelPosition);
                while(texel < scrollXRangeAdjusted)this.frameBuffer[pixelPosition++] = this.gbcBGPalette[palette | tile[tileYLine | texel++]];
                scrollXRangeAdjusted = tileNumber + (pixelPositionEnd - pixelPosition >> 3);
                while(tileNumber < scrollXRangeAdjusted){
                    chrCode = this.BGCHRBank1[++tileNumber];
                    if (chrCode < this.gfxBackgroundBankOffset) chrCode |= 0x100;
                    attrCode = this.BGCHRBank2[tileNumber];
                    tile = this.tileCache[(attrCode & 0x08) << 8 | (attrCode & 0x60) << 4 | chrCode];
                    palette = (attrCode & 0x7) << 2 | (attrCode & 0x80) >> 2;
                    texel = tileYLine;
                    this.frameBuffer[pixelPosition++] = this.gbcBGPalette[palette | tile[texel++]];
                    this.frameBuffer[pixelPosition++] = this.gbcBGPalette[palette | tile[texel++]];
                    this.frameBuffer[pixelPosition++] = this.gbcBGPalette[palette | tile[texel++]];
                    this.frameBuffer[pixelPosition++] = this.gbcBGPalette[palette | tile[texel++]];
                    this.frameBuffer[pixelPosition++] = this.gbcBGPalette[palette | tile[texel++]];
                    this.frameBuffer[pixelPosition++] = this.gbcBGPalette[palette | tile[texel++]];
                    this.frameBuffer[pixelPosition++] = this.gbcBGPalette[palette | tile[texel++]];
                    this.frameBuffer[pixelPosition++] = this.gbcBGPalette[palette | tile[texel]];
                }
                if (pixelPosition < pixelPositionEnd) {
                    chrCode = this.BGCHRBank1[++tileNumber];
                    if (chrCode < this.gfxBackgroundBankOffset) chrCode |= 0x100;
                    attrCode = this.BGCHRBank2[tileNumber];
                    tile = this.tileCache[(attrCode & 0x08) << 8 | (attrCode & 0x60) << 4 | chrCode];
                    palette = (attrCode & 0x7) << 2 | (attrCode & 0x80) >> 2;
                    switch(pixelPositionEnd - pixelPosition){
                        case 7:
                            this.frameBuffer[pixelPosition + 6] = this.gbcBGPalette[palette | tile[tileYLine | 6]];
                        case 6:
                            this.frameBuffer[pixelPosition + 5] = this.gbcBGPalette[palette | tile[tileYLine | 5]];
                        case 5:
                            this.frameBuffer[pixelPosition + 4] = this.gbcBGPalette[palette | tile[tileYLine | 4]];
                        case 4:
                            this.frameBuffer[pixelPosition + 3] = this.gbcBGPalette[palette | tile[tileYLine | 3]];
                        case 3:
                            this.frameBuffer[pixelPosition + 2] = this.gbcBGPalette[palette | tile[tileYLine | 2]];
                        case 2:
                            this.frameBuffer[pixelPosition + 1] = this.gbcBGPalette[palette | tile[tileYLine | 1]];
                        case 1:
                            this.frameBuffer[pixelPosition] = this.gbcBGPalette[palette | tile[tileYLine]];
                    }
                }
            }
        }
    }
};
GameBoyCore.prototype.WindowGBCLayerRenderNoPriorityFlagging = function(scanlineToRender) {
    if (this.gfxWindowDisplay) {
        var scrollYAdjusted = scanlineToRender - this.windowY; //The line of the BG we're at.
        if (scrollYAdjusted >= 0) {
            var scrollXRangeAdjusted = this.windowX > 0 ? this.windowX + this.currentX : this.currentX;
            var pixelPosition = this.pixelStart + scrollXRangeAdjusted;
            var pixelPositionEnd = this.pixelStart + this.pixelEnd;
            if (pixelPosition < pixelPositionEnd) {
                var tileYLine = (scrollYAdjusted & 0x7) << 3;
                var tileNumber = (this.gfxWindowCHRBankPosition | (scrollYAdjusted & 0xF8) << 2) + (this.currentX >> 3);
                var chrCode = this.BGCHRBank1[tileNumber];
                if (chrCode < this.gfxBackgroundBankOffset) chrCode |= 0x100;
                var attrCode = this.BGCHRBank2[tileNumber];
                var tile = this.tileCache[(attrCode & 0x08) << 8 | (attrCode & 0x60) << 4 | chrCode];
                var palette = (attrCode & 0x7) << 2;
                var texel = scrollXRangeAdjusted - this.windowX & 0x7;
                scrollXRangeAdjusted = Math.min(8, texel + pixelPositionEnd - pixelPosition);
                while(texel < scrollXRangeAdjusted)this.frameBuffer[pixelPosition++] = this.gbcBGPalette[palette | tile[tileYLine | texel++]];
                scrollXRangeAdjusted = tileNumber + (pixelPositionEnd - pixelPosition >> 3);
                while(tileNumber < scrollXRangeAdjusted){
                    chrCode = this.BGCHRBank1[++tileNumber];
                    if (chrCode < this.gfxBackgroundBankOffset) chrCode |= 0x100;
                    attrCode = this.BGCHRBank2[tileNumber];
                    tile = this.tileCache[(attrCode & 0x08) << 8 | (attrCode & 0x60) << 4 | chrCode];
                    palette = (attrCode & 0x7) << 2;
                    texel = tileYLine;
                    this.frameBuffer[pixelPosition++] = this.gbcBGPalette[palette | tile[texel++]];
                    this.frameBuffer[pixelPosition++] = this.gbcBGPalette[palette | tile[texel++]];
                    this.frameBuffer[pixelPosition++] = this.gbcBGPalette[palette | tile[texel++]];
                    this.frameBuffer[pixelPosition++] = this.gbcBGPalette[palette | tile[texel++]];
                    this.frameBuffer[pixelPosition++] = this.gbcBGPalette[palette | tile[texel++]];
                    this.frameBuffer[pixelPosition++] = this.gbcBGPalette[palette | tile[texel++]];
                    this.frameBuffer[pixelPosition++] = this.gbcBGPalette[palette | tile[texel++]];
                    this.frameBuffer[pixelPosition++] = this.gbcBGPalette[palette | tile[texel]];
                }
                if (pixelPosition < pixelPositionEnd) {
                    chrCode = this.BGCHRBank1[++tileNumber];
                    if (chrCode < this.gfxBackgroundBankOffset) chrCode |= 0x100;
                    attrCode = this.BGCHRBank2[tileNumber];
                    tile = this.tileCache[(attrCode & 0x08) << 8 | (attrCode & 0x60) << 4 | chrCode];
                    palette = (attrCode & 0x7) << 2;
                    switch(pixelPositionEnd - pixelPosition){
                        case 7:
                            this.frameBuffer[pixelPosition + 6] = this.gbcBGPalette[palette | tile[tileYLine | 6]];
                        case 6:
                            this.frameBuffer[pixelPosition + 5] = this.gbcBGPalette[palette | tile[tileYLine | 5]];
                        case 5:
                            this.frameBuffer[pixelPosition + 4] = this.gbcBGPalette[palette | tile[tileYLine | 4]];
                        case 4:
                            this.frameBuffer[pixelPosition + 3] = this.gbcBGPalette[palette | tile[tileYLine | 3]];
                        case 3:
                            this.frameBuffer[pixelPosition + 2] = this.gbcBGPalette[palette | tile[tileYLine | 2]];
                        case 2:
                            this.frameBuffer[pixelPosition + 1] = this.gbcBGPalette[palette | tile[tileYLine | 1]];
                        case 1:
                            this.frameBuffer[pixelPosition] = this.gbcBGPalette[palette | tile[tileYLine]];
                    }
                }
            }
        }
    }
};
GameBoyCore.prototype.SpriteGBLayerRender = function(scanlineToRender) {
    if (this.gfxSpriteShow) {
        var lineAdjusted = scanlineToRender + 0x10;
        var OAMAddress = 0xFE00;
        var yoffset = 0;
        var xcoord = 1;
        var xCoordStart = 0;
        var xCoordEnd = 0;
        var attrCode = 0;
        var palette = 0;
        var tile = null;
        var data = 0;
        var spriteCount = 0;
        var length = 0;
        var currentPixel = 0;
        var linePixel = 0;
        //Clear our x-coord sort buffer:
        while(xcoord < 168)this.sortBuffer[xcoord++] = 0xFF;
        if (this.gfxSpriteNormalHeight) //Draw the visible sprites:
        for(var length = this.findLowestSpriteDrawable(lineAdjusted, 0x7); spriteCount < length; ++spriteCount){
            OAMAddress = this.OAMAddressCache[spriteCount];
            yoffset = lineAdjusted - this.memory[OAMAddress] << 3;
            attrCode = this.memory[OAMAddress | 3];
            palette = (attrCode & 0x10) >> 2;
            tile = this.tileCache[(attrCode & 0x60) << 4 | this.memory[OAMAddress | 0x2]];
            linePixel = xCoordStart = this.memory[OAMAddress | 1];
            xCoordEnd = Math.min(168 - linePixel, 8);
            xcoord = linePixel > 7 ? 0 : 8 - linePixel;
            for(currentPixel = this.pixelStart + (linePixel > 8 ? linePixel - 8 : 0); xcoord < xCoordEnd; ++xcoord, ++currentPixel, ++linePixel)if (this.sortBuffer[linePixel] > xCoordStart) {
                if (this.frameBuffer[currentPixel] >= 0x2000000) {
                    data = tile[yoffset | xcoord];
                    if (data > 0) {
                        this.frameBuffer[currentPixel] = this.OBJPalette[palette | data];
                        this.sortBuffer[linePixel] = xCoordStart;
                    }
                } else if (this.frameBuffer[currentPixel] < 0x1000000) {
                    data = tile[yoffset | xcoord];
                    if (data > 0 && attrCode < 0x80) {
                        this.frameBuffer[currentPixel] = this.OBJPalette[palette | data];
                        this.sortBuffer[linePixel] = xCoordStart;
                    }
                }
            }
        }
        else //Draw the visible sprites:
        for(var length = this.findLowestSpriteDrawable(lineAdjusted, 0xF); spriteCount < length; ++spriteCount){
            OAMAddress = this.OAMAddressCache[spriteCount];
            yoffset = lineAdjusted - this.memory[OAMAddress] << 3;
            attrCode = this.memory[OAMAddress | 3];
            palette = (attrCode & 0x10) >> 2;
            if ((attrCode & 0x40) == (0x40 & yoffset)) tile = this.tileCache[(attrCode & 0x60) << 4 | this.memory[OAMAddress | 0x2] & 0xFE];
            else tile = this.tileCache[(attrCode & 0x60) << 4 | this.memory[OAMAddress | 0x2] | 1];
            yoffset &= 0x3F;
            linePixel = xCoordStart = this.memory[OAMAddress | 1];
            xCoordEnd = Math.min(168 - linePixel, 8);
            xcoord = linePixel > 7 ? 0 : 8 - linePixel;
            for(currentPixel = this.pixelStart + (linePixel > 8 ? linePixel - 8 : 0); xcoord < xCoordEnd; ++xcoord, ++currentPixel, ++linePixel)if (this.sortBuffer[linePixel] > xCoordStart) {
                if (this.frameBuffer[currentPixel] >= 0x2000000) {
                    data = tile[yoffset | xcoord];
                    if (data > 0) {
                        this.frameBuffer[currentPixel] = this.OBJPalette[palette | data];
                        this.sortBuffer[linePixel] = xCoordStart;
                    }
                } else if (this.frameBuffer[currentPixel] < 0x1000000) {
                    data = tile[yoffset | xcoord];
                    if (data > 0 && attrCode < 0x80) {
                        this.frameBuffer[currentPixel] = this.OBJPalette[palette | data];
                        this.sortBuffer[linePixel] = xCoordStart;
                    }
                }
            }
        }
    }
};
GameBoyCore.prototype.findLowestSpriteDrawable = function(scanlineToRender, drawableRange) {
    var address = 0xFE00;
    var spriteCount = 0;
    var diff = 0;
    while(address < 0xFEA0 && spriteCount < 10){
        diff = scanlineToRender - this.memory[address];
        if ((diff & drawableRange) == diff) this.OAMAddressCache[spriteCount++] = address;
        address += 4;
    }
    return spriteCount;
};
GameBoyCore.prototype.SpriteGBCLayerRender = function(scanlineToRender) {
    if (this.gfxSpriteShow) {
        var OAMAddress = 0xFE00;
        var lineAdjusted = scanlineToRender + 0x10;
        var yoffset = 0;
        var xcoord = 0;
        var endX = 0;
        var xCounter = 0;
        var attrCode = 0;
        var palette = 0;
        var tile = null;
        var data = 0;
        var currentPixel = 0;
        var spriteCount = 0;
        if (this.gfxSpriteNormalHeight) for(; OAMAddress < 0xFEA0 && spriteCount < 10; OAMAddress += 4){
            yoffset = lineAdjusted - this.memory[OAMAddress];
            if ((yoffset & 0x7) == yoffset) {
                xcoord = this.memory[OAMAddress | 1] - 8;
                endX = Math.min(160, xcoord + 8);
                attrCode = this.memory[OAMAddress | 3];
                palette = (attrCode & 7) << 2;
                tile = this.tileCache[(attrCode & 0x08) << 8 | (attrCode & 0x60) << 4 | this.memory[OAMAddress | 2]];
                xCounter = xcoord > 0 ? xcoord : 0;
                xcoord -= yoffset << 3;
                for(currentPixel = this.pixelStart + xCounter; xCounter < endX; ++xCounter, ++currentPixel){
                    if (this.frameBuffer[currentPixel] >= 0x2000000) {
                        data = tile[xCounter - xcoord];
                        if (data > 0) this.frameBuffer[currentPixel] = this.gbcOBJPalette[palette | data];
                    } else if (this.frameBuffer[currentPixel] < 0x1000000) {
                        data = tile[xCounter - xcoord];
                        if (data > 0 && attrCode < 0x80) this.frameBuffer[currentPixel] = this.gbcOBJPalette[palette | data];
                    }
                }
                ++spriteCount;
            }
        }
        else for(; OAMAddress < 0xFEA0 && spriteCount < 10; OAMAddress += 4){
            yoffset = lineAdjusted - this.memory[OAMAddress];
            if ((yoffset & 0xF) == yoffset) {
                xcoord = this.memory[OAMAddress | 1] - 8;
                endX = Math.min(160, xcoord + 8);
                attrCode = this.memory[OAMAddress | 3];
                palette = (attrCode & 7) << 2;
                if ((attrCode & 0x40) == (0x40 & yoffset << 3)) tile = this.tileCache[(attrCode & 0x08) << 8 | (attrCode & 0x60) << 4 | this.memory[OAMAddress | 0x2] & 0xFE];
                else tile = this.tileCache[(attrCode & 0x08) << 8 | (attrCode & 0x60) << 4 | this.memory[OAMAddress | 0x2] | 1];
                xCounter = xcoord > 0 ? xcoord : 0;
                xcoord -= (yoffset & 0x7) << 3;
                for(currentPixel = this.pixelStart + xCounter; xCounter < endX; ++xCounter, ++currentPixel){
                    if (this.frameBuffer[currentPixel] >= 0x2000000) {
                        data = tile[xCounter - xcoord];
                        if (data > 0) this.frameBuffer[currentPixel] = this.gbcOBJPalette[palette | data];
                    } else if (this.frameBuffer[currentPixel] < 0x1000000) {
                        data = tile[xCounter - xcoord];
                        if (data > 0 && attrCode < 0x80) this.frameBuffer[currentPixel] = this.gbcOBJPalette[palette | data];
                    }
                }
                ++spriteCount;
            }
        }
    }
};
//Generate only a single tile line for the GB tile cache mode:
GameBoyCore.prototype.generateGBTileLine = function(address) {
    var lineCopy = this.memory[0x1 | address] << 8 | this.memory[0x9FFE & address];
    var tileBlock = this.tileCache[(address & 0x1FF0) >> 4];
    address = (address & 0xE) << 2;
    tileBlock[address | 7] = (lineCopy & 0x100) >> 7 | lineCopy & 0x1;
    tileBlock[address | 6] = (lineCopy & 0x200) >> 8 | (lineCopy & 0x2) >> 1;
    tileBlock[address | 5] = (lineCopy & 0x400) >> 9 | (lineCopy & 0x4) >> 2;
    tileBlock[address | 4] = (lineCopy & 0x800) >> 10 | (lineCopy & 0x8) >> 3;
    tileBlock[address | 3] = (lineCopy & 0x1000) >> 11 | (lineCopy & 0x10) >> 4;
    tileBlock[address | 2] = (lineCopy & 0x2000) >> 12 | (lineCopy & 0x20) >> 5;
    tileBlock[address | 1] = (lineCopy & 0x4000) >> 13 | (lineCopy & 0x40) >> 6;
    tileBlock[address] = (lineCopy & 0x8000) >> 14 | (lineCopy & 0x80) >> 7;
};
//Generate only a single tile line for the GBC tile cache mode (Bank 1):
GameBoyCore.prototype.generateGBCTileLineBank1 = function(address) {
    var lineCopy = this.memory[0x1 | address] << 8 | this.memory[0x9FFE & address];
    address &= 0x1FFE;
    var tileBlock1 = this.tileCache[address >> 4];
    var tileBlock2 = this.tileCache[0x200 | address >> 4];
    var tileBlock3 = this.tileCache[0x400 | address >> 4];
    var tileBlock4 = this.tileCache[0x600 | address >> 4];
    address = (address & 0xE) << 2;
    var addressFlipped = 0x38 - address;
    tileBlock4[addressFlipped] = tileBlock2[address] = tileBlock3[addressFlipped | 7] = tileBlock1[address | 7] = (lineCopy & 0x100) >> 7 | lineCopy & 0x1;
    tileBlock4[addressFlipped | 1] = tileBlock2[address | 1] = tileBlock3[addressFlipped | 6] = tileBlock1[address | 6] = (lineCopy & 0x200) >> 8 | (lineCopy & 0x2) >> 1;
    tileBlock4[addressFlipped | 2] = tileBlock2[address | 2] = tileBlock3[addressFlipped | 5] = tileBlock1[address | 5] = (lineCopy & 0x400) >> 9 | (lineCopy & 0x4) >> 2;
    tileBlock4[addressFlipped | 3] = tileBlock2[address | 3] = tileBlock3[addressFlipped | 4] = tileBlock1[address | 4] = (lineCopy & 0x800) >> 10 | (lineCopy & 0x8) >> 3;
    tileBlock4[addressFlipped | 4] = tileBlock2[address | 4] = tileBlock3[addressFlipped | 3] = tileBlock1[address | 3] = (lineCopy & 0x1000) >> 11 | (lineCopy & 0x10) >> 4;
    tileBlock4[addressFlipped | 5] = tileBlock2[address | 5] = tileBlock3[addressFlipped | 2] = tileBlock1[address | 2] = (lineCopy & 0x2000) >> 12 | (lineCopy & 0x20) >> 5;
    tileBlock4[addressFlipped | 6] = tileBlock2[address | 6] = tileBlock3[addressFlipped | 1] = tileBlock1[address | 1] = (lineCopy & 0x4000) >> 13 | (lineCopy & 0x40) >> 6;
    tileBlock4[addressFlipped | 7] = tileBlock2[address | 7] = tileBlock3[addressFlipped] = tileBlock1[address] = (lineCopy & 0x8000) >> 14 | (lineCopy & 0x80) >> 7;
};
//Generate all the flip combinations for a full GBC VRAM bank 1 tile:
GameBoyCore.prototype.generateGBCTileBank1 = function(vramAddress) {
    var address = vramAddress >> 4;
    var tileBlock1 = this.tileCache[address];
    var tileBlock2 = this.tileCache[0x200 | address];
    var tileBlock3 = this.tileCache[0x400 | address];
    var tileBlock4 = this.tileCache[0x600 | address];
    var lineCopy = 0;
    vramAddress |= 0x8000;
    address = 0;
    var addressFlipped = 56;
    do {
        lineCopy = this.memory[0x1 | vramAddress] << 8 | this.memory[vramAddress];
        tileBlock4[addressFlipped] = tileBlock2[address] = tileBlock3[addressFlipped | 7] = tileBlock1[address | 7] = (lineCopy & 0x100) >> 7 | lineCopy & 0x1;
        tileBlock4[addressFlipped | 1] = tileBlock2[address | 1] = tileBlock3[addressFlipped | 6] = tileBlock1[address | 6] = (lineCopy & 0x200) >> 8 | (lineCopy & 0x2) >> 1;
        tileBlock4[addressFlipped | 2] = tileBlock2[address | 2] = tileBlock3[addressFlipped | 5] = tileBlock1[address | 5] = (lineCopy & 0x400) >> 9 | (lineCopy & 0x4) >> 2;
        tileBlock4[addressFlipped | 3] = tileBlock2[address | 3] = tileBlock3[addressFlipped | 4] = tileBlock1[address | 4] = (lineCopy & 0x800) >> 10 | (lineCopy & 0x8) >> 3;
        tileBlock4[addressFlipped | 4] = tileBlock2[address | 4] = tileBlock3[addressFlipped | 3] = tileBlock1[address | 3] = (lineCopy & 0x1000) >> 11 | (lineCopy & 0x10) >> 4;
        tileBlock4[addressFlipped | 5] = tileBlock2[address | 5] = tileBlock3[addressFlipped | 2] = tileBlock1[address | 2] = (lineCopy & 0x2000) >> 12 | (lineCopy & 0x20) >> 5;
        tileBlock4[addressFlipped | 6] = tileBlock2[address | 6] = tileBlock3[addressFlipped | 1] = tileBlock1[address | 1] = (lineCopy & 0x4000) >> 13 | (lineCopy & 0x40) >> 6;
        tileBlock4[addressFlipped | 7] = tileBlock2[address | 7] = tileBlock3[addressFlipped] = tileBlock1[address] = (lineCopy & 0x8000) >> 14 | (lineCopy & 0x80) >> 7;
        address += 8;
        addressFlipped -= 8;
        vramAddress += 2;
    }while (addressFlipped > -1);
};
//Generate only a single tile line for the GBC tile cache mode (Bank 2):
GameBoyCore.prototype.generateGBCTileLineBank2 = function(address) {
    var lineCopy = this.VRAM[0x1 | address] << 8 | this.VRAM[0x1FFE & address];
    var tileBlock1 = this.tileCache[0x800 | address >> 4];
    var tileBlock2 = this.tileCache[0xA00 | address >> 4];
    var tileBlock3 = this.tileCache[0xC00 | address >> 4];
    var tileBlock4 = this.tileCache[0xE00 | address >> 4];
    address = (address & 0xE) << 2;
    var addressFlipped = 0x38 - address;
    tileBlock4[addressFlipped] = tileBlock2[address] = tileBlock3[addressFlipped | 7] = tileBlock1[address | 7] = (lineCopy & 0x100) >> 7 | lineCopy & 0x1;
    tileBlock4[addressFlipped | 1] = tileBlock2[address | 1] = tileBlock3[addressFlipped | 6] = tileBlock1[address | 6] = (lineCopy & 0x200) >> 8 | (lineCopy & 0x2) >> 1;
    tileBlock4[addressFlipped | 2] = tileBlock2[address | 2] = tileBlock3[addressFlipped | 5] = tileBlock1[address | 5] = (lineCopy & 0x400) >> 9 | (lineCopy & 0x4) >> 2;
    tileBlock4[addressFlipped | 3] = tileBlock2[address | 3] = tileBlock3[addressFlipped | 4] = tileBlock1[address | 4] = (lineCopy & 0x800) >> 10 | (lineCopy & 0x8) >> 3;
    tileBlock4[addressFlipped | 4] = tileBlock2[address | 4] = tileBlock3[addressFlipped | 3] = tileBlock1[address | 3] = (lineCopy & 0x1000) >> 11 | (lineCopy & 0x10) >> 4;
    tileBlock4[addressFlipped | 5] = tileBlock2[address | 5] = tileBlock3[addressFlipped | 2] = tileBlock1[address | 2] = (lineCopy & 0x2000) >> 12 | (lineCopy & 0x20) >> 5;
    tileBlock4[addressFlipped | 6] = tileBlock2[address | 6] = tileBlock3[addressFlipped | 1] = tileBlock1[address | 1] = (lineCopy & 0x4000) >> 13 | (lineCopy & 0x40) >> 6;
    tileBlock4[addressFlipped | 7] = tileBlock2[address | 7] = tileBlock3[addressFlipped] = tileBlock1[address] = (lineCopy & 0x8000) >> 14 | (lineCopy & 0x80) >> 7;
};
//Generate all the flip combinations for a full GBC VRAM bank 2 tile:
GameBoyCore.prototype.generateGBCTileBank2 = function(vramAddress) {
    var address = vramAddress >> 4;
    var tileBlock1 = this.tileCache[0x800 | address];
    var tileBlock2 = this.tileCache[0xA00 | address];
    var tileBlock3 = this.tileCache[0xC00 | address];
    var tileBlock4 = this.tileCache[0xE00 | address];
    var lineCopy = 0;
    address = 0;
    var addressFlipped = 56;
    do {
        lineCopy = this.VRAM[0x1 | vramAddress] << 8 | this.VRAM[vramAddress];
        tileBlock4[addressFlipped] = tileBlock2[address] = tileBlock3[addressFlipped | 7] = tileBlock1[address | 7] = (lineCopy & 0x100) >> 7 | lineCopy & 0x1;
        tileBlock4[addressFlipped | 1] = tileBlock2[address | 1] = tileBlock3[addressFlipped | 6] = tileBlock1[address | 6] = (lineCopy & 0x200) >> 8 | (lineCopy & 0x2) >> 1;
        tileBlock4[addressFlipped | 2] = tileBlock2[address | 2] = tileBlock3[addressFlipped | 5] = tileBlock1[address | 5] = (lineCopy & 0x400) >> 9 | (lineCopy & 0x4) >> 2;
        tileBlock4[addressFlipped | 3] = tileBlock2[address | 3] = tileBlock3[addressFlipped | 4] = tileBlock1[address | 4] = (lineCopy & 0x800) >> 10 | (lineCopy & 0x8) >> 3;
        tileBlock4[addressFlipped | 4] = tileBlock2[address | 4] = tileBlock3[addressFlipped | 3] = tileBlock1[address | 3] = (lineCopy & 0x1000) >> 11 | (lineCopy & 0x10) >> 4;
        tileBlock4[addressFlipped | 5] = tileBlock2[address | 5] = tileBlock3[addressFlipped | 2] = tileBlock1[address | 2] = (lineCopy & 0x2000) >> 12 | (lineCopy & 0x20) >> 5;
        tileBlock4[addressFlipped | 6] = tileBlock2[address | 6] = tileBlock3[addressFlipped | 1] = tileBlock1[address | 1] = (lineCopy & 0x4000) >> 13 | (lineCopy & 0x40) >> 6;
        tileBlock4[addressFlipped | 7] = tileBlock2[address | 7] = tileBlock3[addressFlipped] = tileBlock1[address] = (lineCopy & 0x8000) >> 14 | (lineCopy & 0x80) >> 7;
        address += 8;
        addressFlipped -= 8;
        vramAddress += 2;
    }while (addressFlipped > -1);
};
//Generate only a single tile line for the GB tile cache mode (OAM accessible range):
GameBoyCore.prototype.generateGBOAMTileLine = function(address) {
    var lineCopy = this.memory[0x1 | address] << 8 | this.memory[0x9FFE & address];
    address &= 0x1FFE;
    var tileBlock1 = this.tileCache[address >> 4];
    var tileBlock2 = this.tileCache[0x200 | address >> 4];
    var tileBlock3 = this.tileCache[0x400 | address >> 4];
    var tileBlock4 = this.tileCache[0x600 | address >> 4];
    address = (address & 0xE) << 2;
    var addressFlipped = 0x38 - address;
    tileBlock4[addressFlipped] = tileBlock2[address] = tileBlock3[addressFlipped | 7] = tileBlock1[address | 7] = (lineCopy & 0x100) >> 7 | lineCopy & 0x1;
    tileBlock4[addressFlipped | 1] = tileBlock2[address | 1] = tileBlock3[addressFlipped | 6] = tileBlock1[address | 6] = (lineCopy & 0x200) >> 8 | (lineCopy & 0x2) >> 1;
    tileBlock4[addressFlipped | 2] = tileBlock2[address | 2] = tileBlock3[addressFlipped | 5] = tileBlock1[address | 5] = (lineCopy & 0x400) >> 9 | (lineCopy & 0x4) >> 2;
    tileBlock4[addressFlipped | 3] = tileBlock2[address | 3] = tileBlock3[addressFlipped | 4] = tileBlock1[address | 4] = (lineCopy & 0x800) >> 10 | (lineCopy & 0x8) >> 3;
    tileBlock4[addressFlipped | 4] = tileBlock2[address | 4] = tileBlock3[addressFlipped | 3] = tileBlock1[address | 3] = (lineCopy & 0x1000) >> 11 | (lineCopy & 0x10) >> 4;
    tileBlock4[addressFlipped | 5] = tileBlock2[address | 5] = tileBlock3[addressFlipped | 2] = tileBlock1[address | 2] = (lineCopy & 0x2000) >> 12 | (lineCopy & 0x20) >> 5;
    tileBlock4[addressFlipped | 6] = tileBlock2[address | 6] = tileBlock3[addressFlipped | 1] = tileBlock1[address | 1] = (lineCopy & 0x4000) >> 13 | (lineCopy & 0x40) >> 6;
    tileBlock4[addressFlipped | 7] = tileBlock2[address | 7] = tileBlock3[addressFlipped] = tileBlock1[address] = (lineCopy & 0x8000) >> 14 | (lineCopy & 0x80) >> 7;
};
GameBoyCore.prototype.graphicsJIT = function() {
    if (this.LCDisOn) {
        this.totalLinesPassed = 0; //Mark frame for ensuring a JIT pass for the next framebuffer output.
        this.graphicsJITScanlineGroup();
    }
};
GameBoyCore.prototype.graphicsJITVBlank = function() {
    //JIT the graphics to v-blank framing:
    this.totalLinesPassed += this.queuedScanLines;
    this.graphicsJITScanlineGroup();
};
GameBoyCore.prototype.graphicsJITScanlineGroup = function() {
    //Normal rendering JIT, where we try to do groups of scanlines at once:
    while(this.queuedScanLines > 0){
        this.renderScanLine(this.lastUnrenderedLine);
        if (this.lastUnrenderedLine < 143) ++this.lastUnrenderedLine;
        else this.lastUnrenderedLine = 0;
        --this.queuedScanLines;
    }
};
GameBoyCore.prototype.incrementScanLineQueue = function() {
    if (this.queuedScanLines < 144) ++this.queuedScanLines;
    else {
        this.currentX = 0;
        this.midScanlineOffset = -1;
        if (this.lastUnrenderedLine < 143) ++this.lastUnrenderedLine;
        else this.lastUnrenderedLine = 0;
    }
};
GameBoyCore.prototype.midScanLineJIT = function() {
    this.graphicsJIT();
    this.renderMidScanLine();
};
//Check for the highest priority IRQ to fire:
GameBoyCore.prototype.launchIRQ = function() {
    var bitShift = 0;
    var testbit = 1;
    do {
        //Check to see if an interrupt is enabled AND requested.
        if ((testbit & this.IRQLineMatched) == testbit) {
            this.IME = false; //Reset the interrupt enabling.
            this.interruptsRequested -= testbit; //Reset the interrupt request.
            this.IRQLineMatched = 0; //Reset the IRQ assertion.
            //Interrupts have a certain clock cycle length:
            this.CPUTicks = 20;
            //Set the stack pointer to the current program counter value:
            this.stackPointer = this.stackPointer - 1 & 0xFFFF;
            this.memoryWriter[this.stackPointer](this, this.stackPointer, this.programCounter >> 8);
            this.stackPointer = this.stackPointer - 1 & 0xFFFF;
            this.memoryWriter[this.stackPointer](this, this.stackPointer, this.programCounter & 0xFF);
            //Set the program counter to the interrupt's address:
            this.programCounter = 0x40 | bitShift << 3;
            //Clock the core for mid-instruction updates:
            this.updateCore();
            return; //We only want the highest priority interrupt.
        }
        testbit = 1 << ++bitShift;
    }while (bitShift < 5);
};
/*
    Check for IRQs to be fired while not in HALT:
*/ GameBoyCore.prototype.checkIRQMatching = function() {
    if (this.IME) this.IRQLineMatched = this.interruptsEnabled & this.interruptsRequested & 0x1F;
};
/*
    Handle the HALT opcode by predicting all IRQ cases correctly,
    then selecting the next closest IRQ firing from the prediction to
    clock up to. This prevents hacky looping that doesn't predict, but
    instead just clocks through the core update procedure by one which
    is very slow. Not many emulators do this because they have to cover
    all the IRQ prediction cases and they usually get them wrong.
*/ GameBoyCore.prototype.calculateHALTPeriod = function() {
    //Initialize our variables and start our prediction:
    if (!this.halt) {
        this.halt = true;
        var currentClocks = -1;
        var temp_var = 0;
        if (this.LCDisOn) {
            //If the LCD is enabled, then predict the LCD IRQs enabled:
            if ((this.interruptsEnabled & 0x1) == 0x1) currentClocks = 456 * ((this.modeSTAT == 1 ? 298 : 144) - this.actualScanLine) - this.LCDTicks << this.doubleSpeedShifter;
            if ((this.interruptsEnabled & 0x2) == 0x2) {
                if (this.mode0TriggerSTAT) {
                    temp_var = this.clocksUntilMode0() - this.LCDTicks << this.doubleSpeedShifter;
                    if (temp_var <= currentClocks || currentClocks == -1) currentClocks = temp_var;
                }
                if (this.mode1TriggerSTAT && (this.interruptsEnabled & 0x1) == 0) {
                    temp_var = 456 * ((this.modeSTAT == 1 ? 298 : 144) - this.actualScanLine) - this.LCDTicks << this.doubleSpeedShifter;
                    if (temp_var <= currentClocks || currentClocks == -1) currentClocks = temp_var;
                }
                if (this.mode2TriggerSTAT) {
                    temp_var = (this.actualScanLine >= 143 ? 456 * (154 - this.actualScanLine) : 456) - this.LCDTicks << this.doubleSpeedShifter;
                    if (temp_var <= currentClocks || currentClocks == -1) currentClocks = temp_var;
                }
                if (this.LYCMatchTriggerSTAT && this.memory[0xFF45] <= 153) {
                    temp_var = this.clocksUntilLYCMatch() - this.LCDTicks << this.doubleSpeedShifter;
                    if (temp_var <= currentClocks || currentClocks == -1) currentClocks = temp_var;
                }
            }
        }
        if (this.TIMAEnabled && (this.interruptsEnabled & 0x4) == 0x4) {
            //CPU timer IRQ prediction:
            temp_var = (0x100 - this.memory[0xFF05]) * this.TACClocker - this.timerTicks;
            if (temp_var <= currentClocks || currentClocks == -1) currentClocks = temp_var;
        }
        if (this.serialTimer > 0 && (this.interruptsEnabled & 0x8) == 0x8) //Serial IRQ prediction:
        {
            if (this.serialTimer <= currentClocks || currentClocks == -1) currentClocks = this.serialTimer;
        }
    } else var currentClocks = this.remainingClocks;
    var maxClocks = this.CPUCyclesTotal - this.emulatorTicks << this.doubleSpeedShifter;
    if (currentClocks >= 0) {
        if (currentClocks <= maxClocks) {
            //Exit out of HALT normally:
            this.CPUTicks = Math.max(currentClocks, this.CPUTicks);
            this.updateCoreFull();
            this.halt = false;
            this.CPUTicks = 0;
        } else {
            //Still in HALT, clock only up to the clocks specified per iteration:
            this.CPUTicks = Math.max(maxClocks, this.CPUTicks);
            this.remainingClocks = currentClocks - this.CPUTicks;
        }
    } else //Still in HALT, clock only up to the clocks specified per iteration:
    //Will stay in HALT forever (Stuck in HALT forever), but the APU and LCD are still clocked, so don't pause:
    this.CPUTicks += maxClocks;
};
//Memory Reading:
GameBoyCore.prototype.memoryRead = function(address) {
    //Act as a wrapper for reading the returns from the compiled jumps to memory.
    return this.memoryReader[address](this, address); //This seems to be faster than the usual if/else.
};
GameBoyCore.prototype.memoryHighRead = function(address) {
    //Act as a wrapper for reading the returns from the compiled jumps to memory.
    return this.memoryHighReader[address](this, address); //This seems to be faster than the usual if/else.
};
GameBoyCore.prototype.memoryReadJumpCompile = function() {
    //Faster in some browsers, since we are doing less conditionals overall by implementing them in advance.
    for(var index = 0x0000; index <= 0xFFFF; index++){
        if (index < 0x4000) this.memoryReader[index] = this.memoryReadNormal;
        else if (index < 0x8000) this.memoryReader[index] = this.memoryReadROM;
        else if (index < 0x9800) this.memoryReader[index] = this.cGBC ? this.VRAMDATAReadCGBCPU : this.VRAMDATAReadDMGCPU;
        else if (index < 0xA000) this.memoryReader[index] = this.cGBC ? this.VRAMCHRReadCGBCPU : this.VRAMCHRReadDMGCPU;
        else if (index >= 0xA000 && index < 0xC000) {
            if (this.numRAMBanks == 1 / 16 && index < 0xA200 || this.numRAMBanks >= 1) {
                if (this.cMBC7) this.memoryReader[index] = this.memoryReadMBC7;
                else if (!this.cMBC3) this.memoryReader[index] = this.memoryReadMBC;
                else //MBC3 RTC + RAM:
                this.memoryReader[index] = this.memoryReadMBC3;
            } else this.memoryReader[index] = this.memoryReadBAD;
        } else if (index >= 0xC000 && index < 0xE000) {
            if (!this.cGBC || index < 0xD000) this.memoryReader[index] = this.memoryReadNormal;
            else this.memoryReader[index] = this.memoryReadGBCMemory;
        } else if (index >= 0xE000 && index < 0xFE00) {
            if (!this.cGBC || index < 0xF000) this.memoryReader[index] = this.memoryReadECHONormal;
            else this.memoryReader[index] = this.memoryReadECHOGBCMemory;
        } else if (index < 0xFEA0) this.memoryReader[index] = this.memoryReadOAM;
        else if (this.cGBC && index >= 0xFEA0 && index < 0xFF00) this.memoryReader[index] = this.memoryReadNormal;
        else if (index >= 0xFF00) switch(index){
            case 0xFF00:
                //JOYPAD:
                this.memoryHighReader[0] = this.memoryReader[0xFF00] = function(parentObj, address) {
                    return 0xC0 | parentObj.memory[0xFF00]; //Top nibble returns as set.
                };
                break;
            case 0xFF01:
                //SB
                this.memoryHighReader[0x01] = this.memoryReader[0xFF01] = function(parentObj, address) {
                    return parentObj.memory[0xFF02] < 0x80 ? parentObj.memory[0xFF01] : 0xFF;
                };
                break;
            case 0xFF02:
                //SC
                if (this.cGBC) this.memoryHighReader[0x02] = this.memoryReader[0xFF02] = function(parentObj, address) {
                    return (parentObj.serialTimer <= 0 ? 0x7C : 0xFC) | parentObj.memory[0xFF02];
                };
                else this.memoryHighReader[0x02] = this.memoryReader[0xFF02] = function(parentObj, address) {
                    return (parentObj.serialTimer <= 0 ? 0x7E : 0xFE) | parentObj.memory[0xFF02];
                };
                break;
            case 0xFF03:
                this.memoryHighReader[0x03] = this.memoryReader[0xFF03] = this.memoryReadBAD;
                break;
            case 0xFF04:
                //DIV
                this.memoryHighReader[0x04] = this.memoryReader[0xFF04] = function(parentObj, address) {
                    parentObj.memory[0xFF04] = parentObj.memory[0xFF04] + (parentObj.DIVTicks >> 8) & 0xFF;
                    parentObj.DIVTicks &= 0xFF;
                    return parentObj.memory[0xFF04];
                };
                break;
            case 0xFF05:
            case 0xFF06:
                this.memoryHighReader[index & 0xFF] = this.memoryHighReadNormal;
                this.memoryReader[index] = this.memoryReadNormal;
                break;
            case 0xFF07:
                this.memoryHighReader[0x07] = this.memoryReader[0xFF07] = function(parentObj, address) {
                    return 0xF8 | parentObj.memory[0xFF07];
                };
                break;
            case 0xFF08:
            case 0xFF09:
            case 0xFF0A:
            case 0xFF0B:
            case 0xFF0C:
            case 0xFF0D:
            case 0xFF0E:
                this.memoryHighReader[index & 0xFF] = this.memoryReader[index] = this.memoryReadBAD;
                break;
            case 0xFF0F:
                //IF
                this.memoryHighReader[0x0F] = this.memoryReader[0xFF0F] = function(parentObj, address) {
                    return 0xE0 | parentObj.interruptsRequested;
                };
                break;
            case 0xFF10:
                this.memoryHighReader[0x10] = this.memoryReader[0xFF10] = function(parentObj, address) {
                    return 0x80 | parentObj.memory[0xFF10];
                };
                break;
            case 0xFF11:
                this.memoryHighReader[0x11] = this.memoryReader[0xFF11] = function(parentObj, address) {
                    return 0x3F | parentObj.memory[0xFF11];
                };
                break;
            case 0xFF12:
                this.memoryHighReader[0x12] = this.memoryHighReadNormal;
                this.memoryReader[0xFF12] = this.memoryReadNormal;
                break;
            case 0xFF13:
                this.memoryHighReader[0x13] = this.memoryReader[0xFF13] = this.memoryReadBAD;
                break;
            case 0xFF14:
                this.memoryHighReader[0x14] = this.memoryReader[0xFF14] = function(parentObj, address) {
                    return 0xBF | parentObj.memory[0xFF14];
                };
                break;
            case 0xFF15:
                this.memoryHighReader[0x15] = this.memoryReadBAD;
                this.memoryReader[0xFF15] = this.memoryReadBAD;
                break;
            case 0xFF16:
                this.memoryHighReader[0x16] = this.memoryReader[0xFF16] = function(parentObj, address) {
                    return 0x3F | parentObj.memory[0xFF16];
                };
                break;
            case 0xFF17:
                this.memoryHighReader[0x17] = this.memoryHighReadNormal;
                this.memoryReader[0xFF17] = this.memoryReadNormal;
                break;
            case 0xFF18:
                this.memoryHighReader[0x18] = this.memoryReader[0xFF18] = this.memoryReadBAD;
                break;
            case 0xFF19:
                this.memoryHighReader[0x19] = this.memoryReader[0xFF19] = function(parentObj, address) {
                    return 0xBF | parentObj.memory[0xFF19];
                };
                break;
            case 0xFF1A:
                this.memoryHighReader[0x1A] = this.memoryReader[0xFF1A] = function(parentObj, address) {
                    return 0x7F | parentObj.memory[0xFF1A];
                };
                break;
            case 0xFF1B:
                this.memoryHighReader[0x1B] = this.memoryReader[0xFF1B] = this.memoryReadBAD;
                break;
            case 0xFF1C:
                this.memoryHighReader[0x1C] = this.memoryReader[0xFF1C] = function(parentObj, address) {
                    return 0x9F | parentObj.memory[0xFF1C];
                };
                break;
            case 0xFF1D:
                this.memoryHighReader[0x1D] = this.memoryReader[0xFF1D] = this.memoryReadBAD;
                break;
            case 0xFF1E:
                this.memoryHighReader[0x1E] = this.memoryReader[0xFF1E] = function(parentObj, address) {
                    return 0xBF | parentObj.memory[0xFF1E];
                };
                break;
            case 0xFF1F:
            case 0xFF20:
                this.memoryHighReader[index & 0xFF] = this.memoryReader[index] = this.memoryReadBAD;
                break;
            case 0xFF21:
            case 0xFF22:
                this.memoryHighReader[index & 0xFF] = this.memoryHighReadNormal;
                this.memoryReader[index] = this.memoryReadNormal;
                break;
            case 0xFF23:
                this.memoryHighReader[0x23] = this.memoryReader[0xFF23] = function(parentObj, address) {
                    return 0xBF | parentObj.memory[0xFF23];
                };
                break;
            case 0xFF24:
            case 0xFF25:
                this.memoryHighReader[index & 0xFF] = this.memoryHighReadNormal;
                this.memoryReader[index] = this.memoryReadNormal;
                break;
            case 0xFF26:
                this.memoryHighReader[0x26] = this.memoryReader[0xFF26] = function(parentObj, address) {
                    parentObj.audioJIT();
                    return 0x70 | parentObj.memory[0xFF26];
                };
                break;
            case 0xFF27:
            case 0xFF28:
            case 0xFF29:
            case 0xFF2A:
            case 0xFF2B:
            case 0xFF2C:
            case 0xFF2D:
            case 0xFF2E:
            case 0xFF2F:
                this.memoryHighReader[index & 0xFF] = this.memoryReader[index] = this.memoryReadBAD;
                break;
            case 0xFF30:
            case 0xFF31:
            case 0xFF32:
            case 0xFF33:
            case 0xFF34:
            case 0xFF35:
            case 0xFF36:
            case 0xFF37:
            case 0xFF38:
            case 0xFF39:
            case 0xFF3A:
            case 0xFF3B:
            case 0xFF3C:
            case 0xFF3D:
            case 0xFF3E:
            case 0xFF3F:
                this.memoryReader[index] = function(parentObj, address) {
                    return parentObj.channel3canPlay ? parentObj.memory[0xFF00 | parentObj.channel3lastSampleLookup >> 1] : parentObj.memory[address];
                };
                this.memoryHighReader[index & 0xFF] = function(parentObj, address) {
                    return parentObj.channel3canPlay ? parentObj.memory[0xFF00 | parentObj.channel3lastSampleLookup >> 1] : parentObj.memory[0xFF00 | address];
                };
                break;
            case 0xFF40:
                this.memoryHighReader[0x40] = this.memoryHighReadNormal;
                this.memoryReader[0xFF40] = this.memoryReadNormal;
                break;
            case 0xFF41:
                this.memoryHighReader[0x41] = this.memoryReader[0xFF41] = function(parentObj, address) {
                    return 0x80 | parentObj.memory[0xFF41] | parentObj.modeSTAT;
                };
                break;
            case 0xFF42:
                this.memoryHighReader[0x42] = this.memoryReader[0xFF42] = function(parentObj, address) {
                    return parentObj.backgroundY;
                };
                break;
            case 0xFF43:
                this.memoryHighReader[0x43] = this.memoryReader[0xFF43] = function(parentObj, address) {
                    return parentObj.backgroundX;
                };
                break;
            case 0xFF44:
                this.memoryHighReader[0x44] = this.memoryReader[0xFF44] = function(parentObj, address) {
                    return parentObj.LCDisOn ? parentObj.memory[0xFF44] : 0;
                };
                break;
            case 0xFF45:
            case 0xFF46:
            case 0xFF47:
            case 0xFF48:
            case 0xFF49:
                this.memoryHighReader[index & 0xFF] = this.memoryHighReadNormal;
                this.memoryReader[index] = this.memoryReadNormal;
                break;
            case 0xFF4A:
                //WY
                this.memoryHighReader[0x4A] = this.memoryReader[0xFF4A] = function(parentObj, address) {
                    return parentObj.windowY;
                };
                break;
            case 0xFF4B:
                this.memoryHighReader[0x4B] = this.memoryHighReadNormal;
                this.memoryReader[0xFF4B] = this.memoryReadNormal;
                break;
            case 0xFF4C:
                this.memoryHighReader[0x4C] = this.memoryReader[0xFF4C] = this.memoryReadBAD;
                break;
            case 0xFF4D:
                this.memoryHighReader[0x4D] = this.memoryHighReadNormal;
                this.memoryReader[0xFF4D] = this.memoryReadNormal;
                break;
            case 0xFF4E:
                this.memoryHighReader[0x4E] = this.memoryReader[0xFF4E] = this.memoryReadBAD;
                break;
            case 0xFF4F:
                this.memoryHighReader[0x4F] = this.memoryReader[0xFF4F] = function(parentObj, address) {
                    return parentObj.currVRAMBank;
                };
                break;
            case 0xFF50:
            case 0xFF51:
            case 0xFF52:
            case 0xFF53:
            case 0xFF54:
                this.memoryHighReader[index & 0xFF] = this.memoryHighReadNormal;
                this.memoryReader[index] = this.memoryReadNormal;
                break;
            case 0xFF55:
                if (this.cGBC) this.memoryHighReader[0x55] = this.memoryReader[0xFF55] = function(parentObj, address) {
                    if (!parentObj.LCDisOn && parentObj.hdmaRunning) {
                        //DMA
                        parentObj.DMAWrite((parentObj.memory[0xFF55] & 0x7F) + 1);
                        parentObj.memory[0xFF55] = 0xFF; //Transfer completed.
                        parentObj.hdmaRunning = false;
                    }
                    return parentObj.memory[0xFF55];
                };
                else {
                    this.memoryReader[0xFF55] = this.memoryReadNormal;
                    this.memoryHighReader[0x55] = this.memoryHighReadNormal;
                }
                break;
            case 0xFF56:
                if (this.cGBC) this.memoryHighReader[0x56] = this.memoryReader[0xFF56] = function(parentObj, address) {
                    //Return IR "not connected" status:
                    return 0x3C | (parentObj.memory[0xFF56] >= 0xC0 ? 0x2 | parentObj.memory[0xFF56] & 0xC1 : parentObj.memory[0xFF56] & 0xC3);
                };
                else {
                    this.memoryReader[0xFF56] = this.memoryReadNormal;
                    this.memoryHighReader[0x56] = this.memoryHighReadNormal;
                }
                break;
            case 0xFF57:
            case 0xFF58:
            case 0xFF59:
            case 0xFF5A:
            case 0xFF5B:
            case 0xFF5C:
            case 0xFF5D:
            case 0xFF5E:
            case 0xFF5F:
            case 0xFF60:
            case 0xFF61:
            case 0xFF62:
            case 0xFF63:
            case 0xFF64:
            case 0xFF65:
            case 0xFF66:
            case 0xFF67:
                this.memoryHighReader[index & 0xFF] = this.memoryReader[index] = this.memoryReadBAD;
                break;
            case 0xFF68:
            case 0xFF69:
            case 0xFF6A:
            case 0xFF6B:
                this.memoryHighReader[index & 0xFF] = this.memoryHighReadNormal;
                this.memoryReader[index] = this.memoryReadNormal;
                break;
            case 0xFF6C:
                if (this.cGBC) this.memoryHighReader[0x6C] = this.memoryReader[0xFF6C] = function(parentObj, address) {
                    return 0xFE | parentObj.memory[0xFF6C];
                };
                else this.memoryHighReader[0x6C] = this.memoryReader[0xFF6C] = this.memoryReadBAD;
                break;
            case 0xFF6D:
            case 0xFF6E:
            case 0xFF6F:
                this.memoryHighReader[index & 0xFF] = this.memoryReader[index] = this.memoryReadBAD;
                break;
            case 0xFF70:
                if (this.cGBC) //SVBK
                this.memoryHighReader[0x70] = this.memoryReader[0xFF70] = function(parentObj, address) {
                    return 0x40 | parentObj.memory[0xFF70];
                };
                else this.memoryHighReader[0x70] = this.memoryReader[0xFF70] = this.memoryReadBAD;
                break;
            case 0xFF71:
                this.memoryHighReader[0x71] = this.memoryReader[0xFF71] = this.memoryReadBAD;
                break;
            case 0xFF72:
            case 0xFF73:
                this.memoryHighReader[index & 0xFF] = this.memoryReader[index] = this.memoryReadNormal;
                break;
            case 0xFF74:
                if (this.cGBC) this.memoryHighReader[0x74] = this.memoryReader[0xFF74] = this.memoryReadNormal;
                else this.memoryHighReader[0x74] = this.memoryReader[0xFF74] = this.memoryReadBAD;
                break;
            case 0xFF75:
                this.memoryHighReader[0x75] = this.memoryReader[0xFF75] = function(parentObj, address) {
                    return 0x8F | parentObj.memory[0xFF75];
                };
                break;
            case 0xFF76:
            case 0xFF77:
                this.memoryHighReader[index & 0xFF] = this.memoryReader[index] = function(parentObj, address) {
                    return 0;
                };
                break;
            case 0xFF78:
            case 0xFF79:
            case 0xFF7A:
            case 0xFF7B:
            case 0xFF7C:
            case 0xFF7D:
            case 0xFF7E:
            case 0xFF7F:
                this.memoryHighReader[index & 0xFF] = this.memoryReader[index] = this.memoryReadBAD;
                break;
            case 0xFFFF:
                //IE
                this.memoryHighReader[0xFF] = this.memoryReader[0xFFFF] = function(parentObj, address) {
                    return parentObj.interruptsEnabled;
                };
                break;
            default:
                this.memoryReader[index] = this.memoryReadNormal;
                this.memoryHighReader[index & 0xFF] = this.memoryHighReadNormal;
        }
        else this.memoryReader[index] = this.memoryReadBAD;
    }
};
GameBoyCore.prototype.memoryReadNormal = function(parentObj, address) {
    return parentObj.memory[address];
};
GameBoyCore.prototype.memoryHighReadNormal = function(parentObj, address) {
    return parentObj.memory[0xFF00 | address];
};
GameBoyCore.prototype.memoryReadROM = function(parentObj, address) {
    return parentObj.ROM[parentObj.currentROMBank + address];
};
GameBoyCore.prototype.memoryReadMBC = function(parentObj, address) {
    //Switchable RAM
    if (parentObj.MBCRAMBanksEnabled || settings[10]) return parentObj.MBCRam[address + parentObj.currMBCRAMBankPosition];
    //cout("Reading from disabled RAM.", 1);
    return 0xFF;
};
GameBoyCore.prototype.memoryReadMBC7 = function(parentObj, address) {
    //Switchable RAM
    if (parentObj.MBCRAMBanksEnabled || settings[10]) switch(address){
        case 0xA000:
        case 0xA060:
        case 0xA070:
            return 0;
        case 0xA080:
            //TODO: Gyro Control Register
            return 0;
        case 0xA050:
            //Y High Byte
            return parentObj.highY;
        case 0xA040:
            //Y Low Byte
            return parentObj.lowY;
        case 0xA030:
            //X High Byte
            return parentObj.highX;
        case 0xA020:
            //X Low Byte:
            return parentObj.lowX;
        default:
            return parentObj.MBCRam[address + parentObj.currMBCRAMBankPosition];
    }
    //cout("Reading from disabled RAM.", 1);
    return 0xFF;
};
GameBoyCore.prototype.memoryReadMBC3 = function(parentObj, address) {
    //Switchable RAM
    if (parentObj.MBCRAMBanksEnabled || settings[10]) switch(parentObj.currMBCRAMBank){
        case 0x00:
        case 0x01:
        case 0x02:
        case 0x03:
            return parentObj.MBCRam[address + parentObj.currMBCRAMBankPosition];
        case 0x08:
            return parentObj.latchedSeconds;
        case 0x09:
            return parentObj.latchedMinutes;
        case 0x0A:
            return parentObj.latchedHours;
        case 0x0B:
            return parentObj.latchedLDays;
        case 0x0C:
            return (parentObj.RTCDayOverFlow ? 0x80 : 0) + (parentObj.RTCHALT ? 0x40 : 0) + parentObj.latchedHDays;
    }
    //cout("Reading from invalid or disabled RAM.", 1);
    return 0xFF;
};
GameBoyCore.prototype.memoryReadGBCMemory = function(parentObj, address) {
    return parentObj.GBCMemory[address + parentObj.gbcRamBankPosition];
};
GameBoyCore.prototype.memoryReadOAM = function(parentObj, address) {
    return parentObj.modeSTAT > 1 ? 0xFF : parentObj.memory[address];
};
GameBoyCore.prototype.memoryReadECHOGBCMemory = function(parentObj, address) {
    return parentObj.GBCMemory[address + parentObj.gbcRamBankPositionECHO];
};
GameBoyCore.prototype.memoryReadECHONormal = function(parentObj, address) {
    return parentObj.memory[address - 0x2000];
};
GameBoyCore.prototype.memoryReadBAD = function(parentObj, address) {
    return 0xFF;
};
GameBoyCore.prototype.VRAMDATAReadCGBCPU = function(parentObj, address) {
    //CPU Side Reading The VRAM (Optimized for GameBoy Color)
    return parentObj.modeSTAT > 2 ? 0xFF : parentObj.currVRAMBank == 0 ? parentObj.memory[address] : parentObj.VRAM[address & 0x1FFF];
};
GameBoyCore.prototype.VRAMDATAReadDMGCPU = function(parentObj, address) {
    //CPU Side Reading The VRAM (Optimized for classic GameBoy)
    return parentObj.modeSTAT > 2 ? 0xFF : parentObj.memory[address];
};
GameBoyCore.prototype.VRAMCHRReadCGBCPU = function(parentObj, address) {
    //CPU Side Reading the Character Data Map:
    return parentObj.modeSTAT > 2 ? 0xFF : parentObj.BGCHRCurrentBank[address & 0x7FF];
};
GameBoyCore.prototype.VRAMCHRReadDMGCPU = function(parentObj, address) {
    //CPU Side Reading the Character Data Map:
    return parentObj.modeSTAT > 2 ? 0xFF : parentObj.BGCHRBank1[address & 0x7FF];
};
GameBoyCore.prototype.setCurrentMBC1ROMBank = function() {
    //Read the cartridge ROM data from RAM memory:
    switch(this.ROMBank1offs){
        case 0x00:
        case 0x20:
        case 0x40:
        case 0x60:
            //Bank calls for 0x00, 0x20, 0x40, and 0x60 are really for 0x01, 0x21, 0x41, and 0x61.
            this.currentROMBank = this.ROMBank1offs % this.ROMBankEdge << 14;
            break;
        default:
            this.currentROMBank = this.ROMBank1offs % this.ROMBankEdge - 1 << 14;
    }
};
GameBoyCore.prototype.setCurrentMBC2AND3ROMBank = function() {
    //Read the cartridge ROM data from RAM memory:
    //Only map bank 0 to bank 1 here (MBC2 is like MBC1, but can only do 16 banks, so only the bank 0 quirk appears for MBC2):
    this.currentROMBank = Math.max(this.ROMBank1offs % this.ROMBankEdge - 1, 0) << 14;
};
GameBoyCore.prototype.setCurrentMBC5ROMBank = function() {
    //Read the cartridge ROM data from RAM memory:
    this.currentROMBank = this.ROMBank1offs % this.ROMBankEdge - 1 << 14;
};
//Memory Writing:
GameBoyCore.prototype.memoryWrite = function(address, data) {
    //Act as a wrapper for writing by compiled jumps to specific memory writing functions.
    this.memoryWriter[address](this, address, data);
};
//0xFFXX fast path:
GameBoyCore.prototype.memoryHighWrite = function(address, data) {
    //Act as a wrapper for writing by compiled jumps to specific memory writing functions.
    this.memoryHighWriter[address](this, address, data);
};
GameBoyCore.prototype.memoryWriteJumpCompile = function() {
    //Faster in some browsers, since we are doing less conditionals overall by implementing them in advance.
    for(var index = 0x0000; index <= 0xFFFF; index++){
        if (index < 0x8000) {
            if (this.cMBC1) {
                if (index < 0x2000) this.memoryWriter[index] = this.MBCWriteEnable;
                else if (index < 0x4000) this.memoryWriter[index] = this.MBC1WriteROMBank;
                else if (index < 0x6000) this.memoryWriter[index] = this.MBC1WriteRAMBank;
                else this.memoryWriter[index] = this.MBC1WriteType;
            } else if (this.cMBC2) {
                if (index < 0x1000) this.memoryWriter[index] = this.MBCWriteEnable;
                else if (index >= 0x2100 && index < 0x2200) this.memoryWriter[index] = this.MBC2WriteROMBank;
                else this.memoryWriter[index] = this.cartIgnoreWrite;
            } else if (this.cMBC3) {
                if (index < 0x2000) this.memoryWriter[index] = this.MBCWriteEnable;
                else if (index < 0x4000) this.memoryWriter[index] = this.MBC3WriteROMBank;
                else if (index < 0x6000) this.memoryWriter[index] = this.MBC3WriteRAMBank;
                else this.memoryWriter[index] = this.MBC3WriteRTCLatch;
            } else if (this.cMBC5 || this.cRUMBLE || this.cMBC7) {
                if (index < 0x2000) this.memoryWriter[index] = this.MBCWriteEnable;
                else if (index < 0x3000) this.memoryWriter[index] = this.MBC5WriteROMBankLow;
                else if (index < 0x4000) this.memoryWriter[index] = this.MBC5WriteROMBankHigh;
                else if (index < 0x6000) this.memoryWriter[index] = this.cRUMBLE ? this.RUMBLEWriteRAMBank : this.MBC5WriteRAMBank;
                else this.memoryWriter[index] = this.cartIgnoreWrite;
            } else if (this.cHuC3) {
                if (index < 0x2000) this.memoryWriter[index] = this.MBCWriteEnable;
                else if (index < 0x4000) this.memoryWriter[index] = this.MBC3WriteROMBank;
                else if (index < 0x6000) this.memoryWriter[index] = this.HuC3WriteRAMBank;
                else this.memoryWriter[index] = this.cartIgnoreWrite;
            } else this.memoryWriter[index] = this.cartIgnoreWrite;
        } else if (index < 0x9000) this.memoryWriter[index] = this.cGBC ? this.VRAMGBCDATAWrite : this.VRAMGBDATAWrite;
        else if (index < 0x9800) this.memoryWriter[index] = this.cGBC ? this.VRAMGBCDATAWrite : this.VRAMGBDATAUpperWrite;
        else if (index < 0xA000) this.memoryWriter[index] = this.cGBC ? this.VRAMGBCCHRMAPWrite : this.VRAMGBCHRMAPWrite;
        else if (index < 0xC000) {
            if (this.numRAMBanks == 1 / 16 && index < 0xA200 || this.numRAMBanks >= 1) {
                if (!this.cMBC3) this.memoryWriter[index] = this.memoryWriteMBCRAM;
                else //MBC3 RTC + RAM:
                this.memoryWriter[index] = this.memoryWriteMBC3RAM;
            } else this.memoryWriter[index] = this.cartIgnoreWrite;
        } else if (index < 0xE000) {
            if (this.cGBC && index >= 0xD000) this.memoryWriter[index] = this.memoryWriteGBCRAM;
            else this.memoryWriter[index] = this.memoryWriteNormal;
        } else if (index < 0xFE00) {
            if (this.cGBC && index >= 0xF000) this.memoryWriter[index] = this.memoryWriteECHOGBCRAM;
            else this.memoryWriter[index] = this.memoryWriteECHONormal;
        } else if (index <= 0xFEA0) this.memoryWriter[index] = this.memoryWriteOAMRAM;
        else if (index < 0xFF00) {
            if (this.cGBC) this.memoryWriter[index] = this.memoryWriteNormal;
            else this.memoryWriter[index] = this.cartIgnoreWrite;
        } else {
            //Start the I/O initialization by filling in the slots as normal memory:
            this.memoryWriter[index] = this.memoryWriteNormal;
            this.memoryHighWriter[index & 0xFF] = this.memoryHighWriteNormal;
        }
    }
    this.registerWriteJumpCompile(); //Compile the I/O write functions separately...
};
GameBoyCore.prototype.MBCWriteEnable = function(parentObj, address, data) {
    //MBC RAM Bank Enable/Disable:
    parentObj.MBCRAMBanksEnabled = (data & 0x0F) == 0x0A; //If lower nibble is 0x0A, then enable, otherwise disable.
};
GameBoyCore.prototype.MBC1WriteROMBank = function(parentObj, address, data) {
    //MBC1 ROM bank switching:
    parentObj.ROMBank1offs = parentObj.ROMBank1offs & 0x60 | data & 0x1F;
    parentObj.setCurrentMBC1ROMBank();
};
GameBoyCore.prototype.MBC1WriteRAMBank = function(parentObj, address, data) {
    //MBC1 RAM bank switching
    if (parentObj.MBC1Mode) {
        //4/32 Mode
        parentObj.currMBCRAMBank = data & 0x03;
        parentObj.currMBCRAMBankPosition = (parentObj.currMBCRAMBank << 13) - 0xA000;
    } else {
        //16/8 Mode
        parentObj.ROMBank1offs = (data & 0x03) << 5 | parentObj.ROMBank1offs & 0x1F;
        parentObj.setCurrentMBC1ROMBank();
    }
};
GameBoyCore.prototype.MBC1WriteType = function(parentObj, address, data) {
    //MBC1 mode setting:
    parentObj.MBC1Mode = (data & 0x1) == 0x1;
    if (parentObj.MBC1Mode) {
        parentObj.ROMBank1offs &= 0x1F;
        parentObj.setCurrentMBC1ROMBank();
    } else {
        parentObj.currMBCRAMBank = 0;
        parentObj.currMBCRAMBankPosition = -40960;
    }
};
GameBoyCore.prototype.MBC2WriteROMBank = function(parentObj, address, data) {
    //MBC2 ROM bank switching:
    parentObj.ROMBank1offs = data & 0x0F;
    parentObj.setCurrentMBC2AND3ROMBank();
};
GameBoyCore.prototype.MBC3WriteROMBank = function(parentObj, address, data) {
    //MBC3 ROM bank switching:
    parentObj.ROMBank1offs = data & 0x7F;
    parentObj.setCurrentMBC2AND3ROMBank();
};
GameBoyCore.prototype.MBC3WriteRAMBank = function(parentObj, address, data) {
    parentObj.currMBCRAMBank = data;
    if (data < 4) //MBC3 RAM bank switching
    parentObj.currMBCRAMBankPosition = (parentObj.currMBCRAMBank << 13) - 0xA000;
};
GameBoyCore.prototype.MBC3WriteRTCLatch = function(parentObj, address, data) {
    if (data == 0) parentObj.RTCisLatched = false;
    else if (!parentObj.RTCisLatched) {
        //Copy over the current RTC time for reading.
        parentObj.RTCisLatched = true;
        parentObj.latchedSeconds = parentObj.RTCSeconds | 0;
        parentObj.latchedMinutes = parentObj.RTCMinutes;
        parentObj.latchedHours = parentObj.RTCHours;
        parentObj.latchedLDays = parentObj.RTCDays & 0xFF;
        parentObj.latchedHDays = parentObj.RTCDays >> 8;
    }
};
GameBoyCore.prototype.MBC5WriteROMBankLow = function(parentObj, address, data) {
    //MBC5 ROM bank switching:
    parentObj.ROMBank1offs = parentObj.ROMBank1offs & 0x100 | data;
    parentObj.setCurrentMBC5ROMBank();
};
GameBoyCore.prototype.MBC5WriteROMBankHigh = function(parentObj, address, data) {
    //MBC5 ROM bank switching (by least significant bit):
    parentObj.ROMBank1offs = (data & 0x01) << 8 | parentObj.ROMBank1offs & 0xFF;
    parentObj.setCurrentMBC5ROMBank();
};
GameBoyCore.prototype.MBC5WriteRAMBank = function(parentObj, address, data) {
    //MBC5 RAM bank switching
    parentObj.currMBCRAMBank = data & 0xF;
    parentObj.currMBCRAMBankPosition = (parentObj.currMBCRAMBank << 13) - 0xA000;
};
GameBoyCore.prototype.RUMBLEWriteRAMBank = function(parentObj, address, data) {
    //MBC5 RAM bank switching
    //Like MBC5, but bit 3 of the lower nibble is used for rumbling and bit 2 is ignored.
    parentObj.currMBCRAMBank = data & 0x03;
    parentObj.currMBCRAMBankPosition = (parentObj.currMBCRAMBank << 13) - 0xA000;
};
GameBoyCore.prototype.HuC3WriteRAMBank = function(parentObj, address, data) {
    //HuC3 RAM bank switching
    parentObj.currMBCRAMBank = data & 0x03;
    parentObj.currMBCRAMBankPosition = (parentObj.currMBCRAMBank << 13) - 0xA000;
};
GameBoyCore.prototype.cartIgnoreWrite = function(parentObj, address, data) {
//We might have encountered illegal RAM writing or such, so just do nothing...
};
GameBoyCore.prototype.memoryWriteNormal = function(parentObj, address, data) {
    parentObj.memory[address] = data;
};
GameBoyCore.prototype.memoryHighWriteNormal = function(parentObj, address, data) {
    parentObj.memory[0xFF00 | address] = data;
};
GameBoyCore.prototype.memoryWriteMBCRAM = function(parentObj, address, data) {
    if (parentObj.MBCRAMBanksEnabled || settings[10]) parentObj.MBCRam[address + parentObj.currMBCRAMBankPosition] = data;
};
GameBoyCore.prototype.memoryWriteMBC3RAM = function(parentObj, address, data) {
    if (parentObj.MBCRAMBanksEnabled || settings[10]) switch(parentObj.currMBCRAMBank){
        case 0x00:
        case 0x01:
        case 0x02:
        case 0x03:
            parentObj.MBCRam[address + parentObj.currMBCRAMBankPosition] = data;
            break;
        case 0x08:
            if (data < 60) parentObj.RTCSeconds = data;
            else cout("(Bank #" + parentObj.currMBCRAMBank + ") RTC write out of range: " + data, 1);
            break;
        case 0x09:
            if (data < 60) parentObj.RTCMinutes = data;
            else cout("(Bank #" + parentObj.currMBCRAMBank + ") RTC write out of range: " + data, 1);
            break;
        case 0x0A:
            if (data < 24) parentObj.RTCHours = data;
            else cout("(Bank #" + parentObj.currMBCRAMBank + ") RTC write out of range: " + data, 1);
            break;
        case 0x0B:
            parentObj.RTCDays = data & 0xFF | parentObj.RTCDays & 0x100;
            break;
        case 0x0C:
            parentObj.RTCDayOverFlow = data > 0x7F;
            parentObj.RTCHalt = (data & 0x40) == 0x40;
            parentObj.RTCDays = (data & 0x1) << 8 | parentObj.RTCDays & 0xFF;
            break;
        default:
            cout("Invalid MBC3 bank address selected: " + parentObj.currMBCRAMBank, 0);
    }
};
GameBoyCore.prototype.memoryWriteGBCRAM = function(parentObj, address, data) {
    parentObj.GBCMemory[address + parentObj.gbcRamBankPosition] = data;
};
GameBoyCore.prototype.memoryWriteOAMRAM = function(parentObj, address, data) {
    if (parentObj.modeSTAT < 2) {
        if (parentObj.memory[address] != data) {
            parentObj.graphicsJIT();
            parentObj.memory[address] = data;
        }
    }
};
GameBoyCore.prototype.memoryWriteECHOGBCRAM = function(parentObj, address, data) {
    parentObj.GBCMemory[address + parentObj.gbcRamBankPositionECHO] = data;
};
GameBoyCore.prototype.memoryWriteECHONormal = function(parentObj, address, data) {
    parentObj.memory[address - 0x2000] = data;
};
GameBoyCore.prototype.VRAMGBDATAWrite = function(parentObj, address, data) {
    if (parentObj.modeSTAT < 3) {
        if (parentObj.memory[address] != data) {
            //JIT the graphics render queue:
            parentObj.graphicsJIT();
            parentObj.memory[address] = data;
            parentObj.generateGBOAMTileLine(address);
        }
    }
};
GameBoyCore.prototype.VRAMGBDATAUpperWrite = function(parentObj, address, data) {
    if (parentObj.modeSTAT < 3) {
        if (parentObj.memory[address] != data) {
            //JIT the graphics render queue:
            parentObj.graphicsJIT();
            parentObj.memory[address] = data;
            parentObj.generateGBTileLine(address);
        }
    }
};
GameBoyCore.prototype.VRAMGBCDATAWrite = function(parentObj, address, data) {
    if (parentObj.modeSTAT < 3) {
        if (parentObj.currVRAMBank == 0) {
            if (parentObj.memory[address] != data) {
                //JIT the graphics render queue:
                parentObj.graphicsJIT();
                parentObj.memory[address] = data;
                parentObj.generateGBCTileLineBank1(address);
            }
        } else {
            address &= 0x1FFF;
            if (parentObj.VRAM[address] != data) {
                //JIT the graphics render queue:
                parentObj.graphicsJIT();
                parentObj.VRAM[address] = data;
                parentObj.generateGBCTileLineBank2(address);
            }
        }
    }
};
GameBoyCore.prototype.VRAMGBCHRMAPWrite = function(parentObj, address, data) {
    if (parentObj.modeSTAT < 3) {
        address &= 0x7FF;
        if (parentObj.BGCHRBank1[address] != data) {
            //JIT the graphics render queue:
            parentObj.graphicsJIT();
            parentObj.BGCHRBank1[address] = data;
        }
    }
};
GameBoyCore.prototype.VRAMGBCCHRMAPWrite = function(parentObj, address, data) {
    if (parentObj.modeSTAT < 3) {
        address &= 0x7FF;
        if (parentObj.BGCHRCurrentBank[address] != data) {
            //JIT the graphics render queue:
            parentObj.graphicsJIT();
            parentObj.BGCHRCurrentBank[address] = data;
        }
    }
};
GameBoyCore.prototype.DMAWrite = function(tilesToTransfer) {
    if (!this.halt) //Clock the CPU for the DMA transfer (CPU is halted during the transfer):
    this.CPUTicks += 4 | tilesToTransfer << 5 << this.doubleSpeedShifter;
    //Source address of the transfer:
    var source = this.memory[0xFF51] << 8 | this.memory[0xFF52];
    //Destination address in the VRAM memory range:
    var destination = this.memory[0xFF53] << 8 | this.memory[0xFF54];
    //Creating some references:
    var memoryReader = this.memoryReader;
    //JIT the graphics render queue:
    this.graphicsJIT();
    var memory = this.memory;
    //Determining which bank we're working on so we can optimize:
    if (this.currVRAMBank == 0) //DMA transfer for VRAM bank 0:
    do {
        if (destination < 0x1800) {
            memory[0x8000 | destination] = memoryReader[source](this, source++);
            memory[0x8001 | destination] = memoryReader[source](this, source++);
            memory[0x8002 | destination] = memoryReader[source](this, source++);
            memory[0x8003 | destination] = memoryReader[source](this, source++);
            memory[0x8004 | destination] = memoryReader[source](this, source++);
            memory[0x8005 | destination] = memoryReader[source](this, source++);
            memory[0x8006 | destination] = memoryReader[source](this, source++);
            memory[0x8007 | destination] = memoryReader[source](this, source++);
            memory[0x8008 | destination] = memoryReader[source](this, source++);
            memory[0x8009 | destination] = memoryReader[source](this, source++);
            memory[0x800A | destination] = memoryReader[source](this, source++);
            memory[0x800B | destination] = memoryReader[source](this, source++);
            memory[0x800C | destination] = memoryReader[source](this, source++);
            memory[0x800D | destination] = memoryReader[source](this, source++);
            memory[0x800E | destination] = memoryReader[source](this, source++);
            memory[0x800F | destination] = memoryReader[source](this, source++);
            this.generateGBCTileBank1(destination);
            destination += 0x10;
        } else {
            destination &= 0x7F0;
            this.BGCHRBank1[destination++] = memoryReader[source](this, source++);
            this.BGCHRBank1[destination++] = memoryReader[source](this, source++);
            this.BGCHRBank1[destination++] = memoryReader[source](this, source++);
            this.BGCHRBank1[destination++] = memoryReader[source](this, source++);
            this.BGCHRBank1[destination++] = memoryReader[source](this, source++);
            this.BGCHRBank1[destination++] = memoryReader[source](this, source++);
            this.BGCHRBank1[destination++] = memoryReader[source](this, source++);
            this.BGCHRBank1[destination++] = memoryReader[source](this, source++);
            this.BGCHRBank1[destination++] = memoryReader[source](this, source++);
            this.BGCHRBank1[destination++] = memoryReader[source](this, source++);
            this.BGCHRBank1[destination++] = memoryReader[source](this, source++);
            this.BGCHRBank1[destination++] = memoryReader[source](this, source++);
            this.BGCHRBank1[destination++] = memoryReader[source](this, source++);
            this.BGCHRBank1[destination++] = memoryReader[source](this, source++);
            this.BGCHRBank1[destination++] = memoryReader[source](this, source++);
            this.BGCHRBank1[destination++] = memoryReader[source](this, source++);
            destination = destination + 0x1800 & 0x1FF0;
        }
        source &= 0xFFF0;
        --tilesToTransfer;
    }while (tilesToTransfer > 0);
    else {
        var VRAM = this.VRAM;
        //DMA transfer for VRAM bank 1:
        do {
            if (destination < 0x1800) {
                VRAM[destination] = memoryReader[source](this, source++);
                VRAM[destination | 0x1] = memoryReader[source](this, source++);
                VRAM[destination | 0x2] = memoryReader[source](this, source++);
                VRAM[destination | 0x3] = memoryReader[source](this, source++);
                VRAM[destination | 0x4] = memoryReader[source](this, source++);
                VRAM[destination | 0x5] = memoryReader[source](this, source++);
                VRAM[destination | 0x6] = memoryReader[source](this, source++);
                VRAM[destination | 0x7] = memoryReader[source](this, source++);
                VRAM[destination | 0x8] = memoryReader[source](this, source++);
                VRAM[destination | 0x9] = memoryReader[source](this, source++);
                VRAM[destination | 0xA] = memoryReader[source](this, source++);
                VRAM[destination | 0xB] = memoryReader[source](this, source++);
                VRAM[destination | 0xC] = memoryReader[source](this, source++);
                VRAM[destination | 0xD] = memoryReader[source](this, source++);
                VRAM[destination | 0xE] = memoryReader[source](this, source++);
                VRAM[destination | 0xF] = memoryReader[source](this, source++);
                this.generateGBCTileBank2(destination);
                destination += 0x10;
            } else {
                destination &= 0x7F0;
                this.BGCHRBank2[destination++] = memoryReader[source](this, source++);
                this.BGCHRBank2[destination++] = memoryReader[source](this, source++);
                this.BGCHRBank2[destination++] = memoryReader[source](this, source++);
                this.BGCHRBank2[destination++] = memoryReader[source](this, source++);
                this.BGCHRBank2[destination++] = memoryReader[source](this, source++);
                this.BGCHRBank2[destination++] = memoryReader[source](this, source++);
                this.BGCHRBank2[destination++] = memoryReader[source](this, source++);
                this.BGCHRBank2[destination++] = memoryReader[source](this, source++);
                this.BGCHRBank2[destination++] = memoryReader[source](this, source++);
                this.BGCHRBank2[destination++] = memoryReader[source](this, source++);
                this.BGCHRBank2[destination++] = memoryReader[source](this, source++);
                this.BGCHRBank2[destination++] = memoryReader[source](this, source++);
                this.BGCHRBank2[destination++] = memoryReader[source](this, source++);
                this.BGCHRBank2[destination++] = memoryReader[source](this, source++);
                this.BGCHRBank2[destination++] = memoryReader[source](this, source++);
                this.BGCHRBank2[destination++] = memoryReader[source](this, source++);
                destination = destination + 0x1800 & 0x1FF0;
            }
            source &= 0xFFF0;
            --tilesToTransfer;
        }while (tilesToTransfer > 0);
    }
    //Update the HDMA registers to their next addresses:
    memory[0xFF51] = source >> 8;
    memory[0xFF52] = source & 0xF0;
    memory[0xFF53] = destination >> 8;
    memory[0xFF54] = destination & 0xF0;
};
GameBoyCore.prototype.registerWriteJumpCompile = function() {
    //I/O Registers (GB + GBC):
    //JoyPad
    this.memoryHighWriter[0] = this.memoryWriter[0xFF00] = function(parentObj, address, data) {
        parentObj.memory[0xFF00] = data & 0x30 | ((data & 0x20) == 0 ? parentObj.JoyPad >> 4 : 0xF) & ((data & 0x10) == 0 ? parentObj.JoyPad & 0xF : 0xF);
    };
    //SB (Serial Transfer Data)
    this.memoryHighWriter[0x1] = this.memoryWriter[0xFF01] = function(parentObj, address, data) {
        if (parentObj.memory[0xFF02] < 0x80) parentObj.memory[0xFF01] = data;
    };
    //SC (Serial Transfer Control):
    this.memoryHighWriter[0x2] = this.memoryHighWriteNormal;
    this.memoryWriter[0xFF02] = this.memoryWriteNormal;
    //Unmapped I/O:
    this.memoryHighWriter[0x3] = this.memoryWriter[0xFF03] = this.cartIgnoreWrite;
    //DIV
    this.memoryHighWriter[0x4] = this.memoryWriter[0xFF04] = function(parentObj, address, data) {
        parentObj.DIVTicks &= 0xFF; //Update DIV for realignment.
        parentObj.memory[0xFF04] = 0;
    };
    //TIMA
    this.memoryHighWriter[0x5] = this.memoryWriter[0xFF05] = function(parentObj, address, data) {
        parentObj.memory[0xFF05] = data;
    };
    //TMA
    this.memoryHighWriter[0x6] = this.memoryWriter[0xFF06] = function(parentObj, address, data) {
        parentObj.memory[0xFF06] = data;
    };
    //TAC
    this.memoryHighWriter[0x7] = this.memoryWriter[0xFF07] = function(parentObj, address, data) {
        parentObj.memory[0xFF07] = data & 0x07;
        parentObj.TIMAEnabled = (data & 0x04) == 0x04;
        parentObj.TACClocker = Math.pow(4, (data & 0x3) != 0 ? data & 0x3 : 4) << 2; //TODO: Find a way to not make a conditional in here...
    };
    //Unmapped I/O:
    this.memoryHighWriter[0x8] = this.memoryWriter[0xFF08] = this.cartIgnoreWrite;
    this.memoryHighWriter[0x9] = this.memoryWriter[0xFF09] = this.cartIgnoreWrite;
    this.memoryHighWriter[0xA] = this.memoryWriter[0xFF0A] = this.cartIgnoreWrite;
    this.memoryHighWriter[0xB] = this.memoryWriter[0xFF0B] = this.cartIgnoreWrite;
    this.memoryHighWriter[0xC] = this.memoryWriter[0xFF0C] = this.cartIgnoreWrite;
    this.memoryHighWriter[0xD] = this.memoryWriter[0xFF0D] = this.cartIgnoreWrite;
    this.memoryHighWriter[0xE] = this.memoryWriter[0xFF0E] = this.cartIgnoreWrite;
    //IF (Interrupt Request)
    this.memoryHighWriter[0xF] = this.memoryWriter[0xFF0F] = function(parentObj, address, data) {
        parentObj.interruptsRequested = data;
        parentObj.checkIRQMatching();
    };
    //NR10:
    this.memoryHighWriter[0x10] = this.memoryWriter[0xFF10] = function(parentObj, address, data) {
        if (parentObj.soundMasterEnabled) {
            parentObj.audioJIT();
            if (parentObj.channel1decreaseSweep && (data & 0x08) == 0) {
                if (parentObj.channel1Swept) parentObj.channel1SweepFault = true;
            }
            parentObj.channel1lastTimeSweep = (data & 0x70) >> 4;
            parentObj.channel1frequencySweepDivider = data & 0x07;
            parentObj.channel1decreaseSweep = (data & 0x08) == 0x08;
            parentObj.memory[0xFF10] = data;
            parentObj.channel1EnableCheck();
        }
    };
    //NR11:
    this.memoryHighWriter[0x11] = this.memoryWriter[0xFF11] = function(parentObj, address, data) {
        if (parentObj.soundMasterEnabled || !parentObj.cGBC) {
            if (parentObj.soundMasterEnabled) parentObj.audioJIT();
            else data &= 0x3F;
            parentObj.channel1CachedDuty = parentObj.dutyLookup[data >> 6];
            parentObj.channel1totalLength = 0x40 - (data & 0x3F);
            parentObj.memory[0xFF11] = data;
            parentObj.channel1EnableCheck();
        }
    };
    //NR12:
    this.memoryHighWriter[0x12] = this.memoryWriter[0xFF12] = function(parentObj, address, data) {
        if (parentObj.soundMasterEnabled) {
            parentObj.audioJIT();
            if (parentObj.channel1Enabled && parentObj.channel1envelopeSweeps == 0) {
                //Zombie Volume PAPU Bug:
                if (((parentObj.memory[0xFF12] ^ data) & 0x8) == 0x8) {
                    if ((parentObj.memory[0xFF12] & 0x8) == 0) {
                        if ((parentObj.memory[0xFF12] & 0x7) == 0x7) parentObj.channel1envelopeVolume += 2;
                        else ++parentObj.channel1envelopeVolume;
                    }
                    parentObj.channel1envelopeVolume = 16 - parentObj.channel1envelopeVolume & 0xF;
                } else if ((parentObj.memory[0xFF12] & 0xF) == 0x8) parentObj.channel1envelopeVolume = 1 + parentObj.channel1envelopeVolume & 0xF;
                parentObj.channel1OutputLevelCache();
            }
            parentObj.channel1envelopeType = (data & 0x08) == 0x08;
            parentObj.memory[0xFF12] = data;
            parentObj.channel1VolumeEnableCheck();
        }
    };
    //NR13:
    this.memoryHighWriter[0x13] = this.memoryWriter[0xFF13] = function(parentObj, address, data) {
        if (parentObj.soundMasterEnabled) {
            parentObj.audioJIT();
            parentObj.channel1frequency = parentObj.channel1frequency & 0x700 | data;
            parentObj.channel1FrequencyTracker = 0x800 - parentObj.channel1frequency << 2;
        }
    };
    //NR14:
    this.memoryHighWriter[0x14] = this.memoryWriter[0xFF14] = function(parentObj, address, data) {
        if (parentObj.soundMasterEnabled) {
            parentObj.audioJIT();
            parentObj.channel1consecutive = (data & 0x40) == 0x0;
            parentObj.channel1frequency = (data & 0x7) << 8 | parentObj.channel1frequency & 0xFF;
            parentObj.channel1FrequencyTracker = 0x800 - parentObj.channel1frequency << 2;
            if (data > 0x7F) {
                //Reload 0xFF10:
                parentObj.channel1timeSweep = parentObj.channel1lastTimeSweep;
                parentObj.channel1Swept = false;
                //Reload 0xFF12:
                var nr12 = parentObj.memory[0xFF12];
                parentObj.channel1envelopeVolume = nr12 >> 4;
                parentObj.channel1OutputLevelCache();
                parentObj.channel1envelopeSweepsLast = (nr12 & 0x7) - 1;
                if (parentObj.channel1totalLength == 0) parentObj.channel1totalLength = 0x40;
                if (parentObj.channel1lastTimeSweep > 0 || parentObj.channel1frequencySweepDivider > 0) parentObj.memory[0xFF26] |= 0x1;
                else parentObj.memory[0xFF26] &= 0xFE;
                if ((data & 0x40) == 0x40) parentObj.memory[0xFF26] |= 0x1;
                parentObj.channel1ShadowFrequency = parentObj.channel1frequency;
                //Reset frequency overflow check + frequency sweep type check:
                parentObj.channel1SweepFault = false;
                //Supposed to run immediately:
                parentObj.channel1AudioSweepPerformDummy();
            }
            parentObj.channel1EnableCheck();
            parentObj.memory[0xFF14] = data;
        }
    };
    //NR20 (Unused I/O):
    this.memoryHighWriter[0x15] = this.memoryWriter[0xFF15] = this.cartIgnoreWrite;
    //NR21:
    this.memoryHighWriter[0x16] = this.memoryWriter[0xFF16] = function(parentObj, address, data) {
        if (parentObj.soundMasterEnabled || !parentObj.cGBC) {
            if (parentObj.soundMasterEnabled) parentObj.audioJIT();
            else data &= 0x3F;
            parentObj.channel2CachedDuty = parentObj.dutyLookup[data >> 6];
            parentObj.channel2totalLength = 0x40 - (data & 0x3F);
            parentObj.memory[0xFF16] = data;
            parentObj.channel2EnableCheck();
        }
    };
    //NR22:
    this.memoryHighWriter[0x17] = this.memoryWriter[0xFF17] = function(parentObj, address, data) {
        if (parentObj.soundMasterEnabled) {
            parentObj.audioJIT();
            if (parentObj.channel2Enabled && parentObj.channel2envelopeSweeps == 0) {
                //Zombie Volume PAPU Bug:
                if (((parentObj.memory[0xFF17] ^ data) & 0x8) == 0x8) {
                    if ((parentObj.memory[0xFF17] & 0x8) == 0) {
                        if ((parentObj.memory[0xFF17] & 0x7) == 0x7) parentObj.channel2envelopeVolume += 2;
                        else ++parentObj.channel2envelopeVolume;
                    }
                    parentObj.channel2envelopeVolume = 16 - parentObj.channel2envelopeVolume & 0xF;
                } else if ((parentObj.memory[0xFF17] & 0xF) == 0x8) parentObj.channel2envelopeVolume = 1 + parentObj.channel2envelopeVolume & 0xF;
                parentObj.channel2OutputLevelCache();
            }
            parentObj.channel2envelopeType = (data & 0x08) == 0x08;
            parentObj.memory[0xFF17] = data;
            parentObj.channel2VolumeEnableCheck();
        }
    };
    //NR23:
    this.memoryHighWriter[0x18] = this.memoryWriter[0xFF18] = function(parentObj, address, data) {
        if (parentObj.soundMasterEnabled) {
            parentObj.audioJIT();
            parentObj.channel2frequency = parentObj.channel2frequency & 0x700 | data;
            parentObj.channel2FrequencyTracker = 0x800 - parentObj.channel2frequency << 2;
        }
    };
    //NR24:
    this.memoryHighWriter[0x19] = this.memoryWriter[0xFF19] = function(parentObj, address, data) {
        if (parentObj.soundMasterEnabled) {
            parentObj.audioJIT();
            if (data > 0x7F) {
                //Reload 0xFF17:
                var nr22 = parentObj.memory[0xFF17];
                parentObj.channel2envelopeVolume = nr22 >> 4;
                parentObj.channel2OutputLevelCache();
                parentObj.channel2envelopeSweepsLast = (nr22 & 0x7) - 1;
                if (parentObj.channel2totalLength == 0) parentObj.channel2totalLength = 0x40;
                if ((data & 0x40) == 0x40) parentObj.memory[0xFF26] |= 0x2;
            }
            parentObj.channel2consecutive = (data & 0x40) == 0x0;
            parentObj.channel2frequency = (data & 0x7) << 8 | parentObj.channel2frequency & 0xFF;
            parentObj.channel2FrequencyTracker = 0x800 - parentObj.channel2frequency << 2;
            parentObj.memory[0xFF19] = data;
            parentObj.channel2EnableCheck();
        }
    };
    //NR30:
    this.memoryHighWriter[0x1A] = this.memoryWriter[0xFF1A] = function(parentObj, address, data) {
        if (parentObj.soundMasterEnabled) {
            parentObj.audioJIT();
            if (!parentObj.channel3canPlay && data >= 0x80) {
                parentObj.channel3lastSampleLookup = 0;
                parentObj.channel3UpdateCache();
            }
            parentObj.channel3canPlay = data > 0x7F;
            if (parentObj.channel3canPlay && parentObj.memory[0xFF1A] > 0x7F && !parentObj.channel3consecutive) parentObj.memory[0xFF26] |= 0x4;
            parentObj.memory[0xFF1A] = data;
        //parentObj.channel3EnableCheck();
        }
    };
    //NR31:
    this.memoryHighWriter[0x1B] = this.memoryWriter[0xFF1B] = function(parentObj, address, data) {
        if (parentObj.soundMasterEnabled || !parentObj.cGBC) {
            if (parentObj.soundMasterEnabled) parentObj.audioJIT();
            parentObj.channel3totalLength = 0x100 - data;
            parentObj.channel3EnableCheck();
        }
    };
    //NR32:
    this.memoryHighWriter[0x1C] = this.memoryWriter[0xFF1C] = function(parentObj, address, data) {
        if (parentObj.soundMasterEnabled) {
            parentObj.audioJIT();
            data &= 0x60;
            parentObj.memory[0xFF1C] = data;
            parentObj.channel3patternType = data == 0 ? 4 : (data >> 5) - 1;
        }
    };
    //NR33:
    this.memoryHighWriter[0x1D] = this.memoryWriter[0xFF1D] = function(parentObj, address, data) {
        if (parentObj.soundMasterEnabled) {
            parentObj.audioJIT();
            parentObj.channel3frequency = parentObj.channel3frequency & 0x700 | data;
            parentObj.channel3FrequencyPeriod = 0x800 - parentObj.channel3frequency << 1;
        }
    };
    //NR34:
    this.memoryHighWriter[0x1E] = this.memoryWriter[0xFF1E] = function(parentObj, address, data) {
        if (parentObj.soundMasterEnabled) {
            parentObj.audioJIT();
            if (data > 0x7F) {
                if (parentObj.channel3totalLength == 0) parentObj.channel3totalLength = 0x100;
                parentObj.channel3lastSampleLookup = 0;
                if ((data & 0x40) == 0x40) parentObj.memory[0xFF26] |= 0x4;
            }
            parentObj.channel3consecutive = (data & 0x40) == 0x0;
            parentObj.channel3frequency = (data & 0x7) << 8 | parentObj.channel3frequency & 0xFF;
            parentObj.channel3FrequencyPeriod = 0x800 - parentObj.channel3frequency << 1;
            parentObj.memory[0xFF1E] = data;
            parentObj.channel3EnableCheck();
        }
    };
    //NR40 (Unused I/O):
    this.memoryHighWriter[0x1F] = this.memoryWriter[0xFF1F] = this.cartIgnoreWrite;
    //NR41:
    this.memoryHighWriter[0x20] = this.memoryWriter[0xFF20] = function(parentObj, address, data) {
        if (parentObj.soundMasterEnabled || !parentObj.cGBC) {
            if (parentObj.soundMasterEnabled) parentObj.audioJIT();
            parentObj.channel4totalLength = 0x40 - (data & 0x3F);
            parentObj.channel4EnableCheck();
        }
    };
    //NR42:
    this.memoryHighWriter[0x21] = this.memoryWriter[0xFF21] = function(parentObj, address, data) {
        if (parentObj.soundMasterEnabled) {
            parentObj.audioJIT();
            if (parentObj.channel4Enabled && parentObj.channel4envelopeSweeps == 0) {
                //Zombie Volume PAPU Bug:
                if (((parentObj.memory[0xFF21] ^ data) & 0x8) == 0x8) {
                    if ((parentObj.memory[0xFF21] & 0x8) == 0) {
                        if ((parentObj.memory[0xFF21] & 0x7) == 0x7) parentObj.channel4envelopeVolume += 2;
                        else ++parentObj.channel4envelopeVolume;
                    }
                    parentObj.channel4envelopeVolume = 16 - parentObj.channel4envelopeVolume & 0xF;
                } else if ((parentObj.memory[0xFF21] & 0xF) == 0x8) parentObj.channel4envelopeVolume = 1 + parentObj.channel4envelopeVolume & 0xF;
                parentObj.channel4currentVolume = parentObj.channel4envelopeVolume << parentObj.channel4VolumeShifter;
            }
            parentObj.channel4envelopeType = (data & 0x08) == 0x08;
            parentObj.memory[0xFF21] = data;
            parentObj.channel4UpdateCache();
            parentObj.channel4VolumeEnableCheck();
        }
    };
    //NR43:
    this.memoryHighWriter[0x22] = this.memoryWriter[0xFF22] = function(parentObj, address, data) {
        if (parentObj.soundMasterEnabled) {
            parentObj.audioJIT();
            parentObj.channel4FrequencyPeriod = Math.max((data & 0x7) << 4, 8) << (data >> 4);
            var bitWidth = data & 0x8;
            if (bitWidth == 0x8 && parentObj.channel4BitRange == 0x7FFF || bitWidth == 0 && parentObj.channel4BitRange == 0x7F) {
                parentObj.channel4lastSampleLookup = 0;
                parentObj.channel4BitRange = bitWidth == 0x8 ? 0x7F : 0x7FFF;
                parentObj.channel4VolumeShifter = bitWidth == 0x8 ? 7 : 15;
                parentObj.channel4currentVolume = parentObj.channel4envelopeVolume << parentObj.channel4VolumeShifter;
                parentObj.noiseSampleTable = bitWidth == 0x8 ? parentObj.LSFR7Table : parentObj.LSFR15Table;
            }
            parentObj.memory[0xFF22] = data;
            parentObj.channel4UpdateCache();
        }
    };
    //NR44:
    this.memoryHighWriter[0x23] = this.memoryWriter[0xFF23] = function(parentObj, address, data) {
        if (parentObj.soundMasterEnabled) {
            parentObj.audioJIT();
            parentObj.memory[0xFF23] = data;
            parentObj.channel4consecutive = (data & 0x40) == 0x0;
            if (data > 0x7F) {
                var nr42 = parentObj.memory[0xFF21];
                parentObj.channel4envelopeVolume = nr42 >> 4;
                parentObj.channel4currentVolume = parentObj.channel4envelopeVolume << parentObj.channel4VolumeShifter;
                parentObj.channel4envelopeSweepsLast = (nr42 & 0x7) - 1;
                if (parentObj.channel4totalLength == 0) parentObj.channel4totalLength = 0x40;
                if ((data & 0x40) == 0x40) parentObj.memory[0xFF26] |= 0x8;
            }
            parentObj.channel4EnableCheck();
        }
    };
    //NR50:
    this.memoryHighWriter[0x24] = this.memoryWriter[0xFF24] = function(parentObj, address, data) {
        if (parentObj.soundMasterEnabled && parentObj.memory[0xFF24] != data) {
            parentObj.audioJIT();
            parentObj.memory[0xFF24] = data;
            parentObj.VinLeftChannelMasterVolume = (data >> 4 & 0x07) + 1;
            parentObj.VinRightChannelMasterVolume = (data & 0x07) + 1;
            parentObj.mixerOutputLevelCache();
        }
    };
    //NR51:
    this.memoryHighWriter[0x25] = this.memoryWriter[0xFF25] = function(parentObj, address, data) {
        if (parentObj.soundMasterEnabled && parentObj.memory[0xFF25] != data) {
            parentObj.audioJIT();
            parentObj.memory[0xFF25] = data;
            parentObj.rightChannel1 = (data & 0x01) == 0x01;
            parentObj.rightChannel2 = (data & 0x02) == 0x02;
            parentObj.rightChannel3 = (data & 0x04) == 0x04;
            parentObj.rightChannel4 = (data & 0x08) == 0x08;
            parentObj.leftChannel1 = (data & 0x10) == 0x10;
            parentObj.leftChannel2 = (data & 0x20) == 0x20;
            parentObj.leftChannel3 = (data & 0x40) == 0x40;
            parentObj.leftChannel4 = data > 0x7F;
            parentObj.channel1OutputLevelCache();
            parentObj.channel2OutputLevelCache();
            parentObj.channel3OutputLevelCache();
            parentObj.channel4OutputLevelCache();
        }
    };
    //NR52:
    this.memoryHighWriter[0x26] = this.memoryWriter[0xFF26] = function(parentObj, address, data) {
        parentObj.audioJIT();
        if (!parentObj.soundMasterEnabled && data > 0x7F) {
            parentObj.memory[0xFF26] = 0x80;
            parentObj.soundMasterEnabled = true;
            parentObj.initializeAudioStartState();
        } else if (parentObj.soundMasterEnabled && data < 0x80) {
            parentObj.memory[0xFF26] = 0;
            parentObj.soundMasterEnabled = false;
            //GBDev wiki says the registers are written with zeros on power off:
            for(var index = 0xFF10; index < 0xFF26; index++)parentObj.memoryWriter[index](parentObj, index, 0);
        }
    };
    //0xFF27 to 0xFF2F don't do anything...
    this.memoryHighWriter[0x27] = this.memoryWriter[0xFF27] = this.cartIgnoreWrite;
    this.memoryHighWriter[0x28] = this.memoryWriter[0xFF28] = this.cartIgnoreWrite;
    this.memoryHighWriter[0x29] = this.memoryWriter[0xFF29] = this.cartIgnoreWrite;
    this.memoryHighWriter[0x2A] = this.memoryWriter[0xFF2A] = this.cartIgnoreWrite;
    this.memoryHighWriter[0x2B] = this.memoryWriter[0xFF2B] = this.cartIgnoreWrite;
    this.memoryHighWriter[0x2C] = this.memoryWriter[0xFF2C] = this.cartIgnoreWrite;
    this.memoryHighWriter[0x2D] = this.memoryWriter[0xFF2D] = this.cartIgnoreWrite;
    this.memoryHighWriter[0x2E] = this.memoryWriter[0xFF2E] = this.cartIgnoreWrite;
    this.memoryHighWriter[0x2F] = this.memoryWriter[0xFF2F] = this.cartIgnoreWrite;
    //WAVE PCM RAM:
    this.memoryHighWriter[0x30] = this.memoryWriter[0xFF30] = function(parentObj, address, data) {
        parentObj.channel3WriteRAM(0, data);
    };
    this.memoryHighWriter[0x31] = this.memoryWriter[0xFF31] = function(parentObj, address, data) {
        parentObj.channel3WriteRAM(0x1, data);
    };
    this.memoryHighWriter[0x32] = this.memoryWriter[0xFF32] = function(parentObj, address, data) {
        parentObj.channel3WriteRAM(0x2, data);
    };
    this.memoryHighWriter[0x33] = this.memoryWriter[0xFF33] = function(parentObj, address, data) {
        parentObj.channel3WriteRAM(0x3, data);
    };
    this.memoryHighWriter[0x34] = this.memoryWriter[0xFF34] = function(parentObj, address, data) {
        parentObj.channel3WriteRAM(0x4, data);
    };
    this.memoryHighWriter[0x35] = this.memoryWriter[0xFF35] = function(parentObj, address, data) {
        parentObj.channel3WriteRAM(0x5, data);
    };
    this.memoryHighWriter[0x36] = this.memoryWriter[0xFF36] = function(parentObj, address, data) {
        parentObj.channel3WriteRAM(0x6, data);
    };
    this.memoryHighWriter[0x37] = this.memoryWriter[0xFF37] = function(parentObj, address, data) {
        parentObj.channel3WriteRAM(0x7, data);
    };
    this.memoryHighWriter[0x38] = this.memoryWriter[0xFF38] = function(parentObj, address, data) {
        parentObj.channel3WriteRAM(0x8, data);
    };
    this.memoryHighWriter[0x39] = this.memoryWriter[0xFF39] = function(parentObj, address, data) {
        parentObj.channel3WriteRAM(0x9, data);
    };
    this.memoryHighWriter[0x3A] = this.memoryWriter[0xFF3A] = function(parentObj, address, data) {
        parentObj.channel3WriteRAM(0xA, data);
    };
    this.memoryHighWriter[0x3B] = this.memoryWriter[0xFF3B] = function(parentObj, address, data) {
        parentObj.channel3WriteRAM(0xB, data);
    };
    this.memoryHighWriter[0x3C] = this.memoryWriter[0xFF3C] = function(parentObj, address, data) {
        parentObj.channel3WriteRAM(0xC, data);
    };
    this.memoryHighWriter[0x3D] = this.memoryWriter[0xFF3D] = function(parentObj, address, data) {
        parentObj.channel3WriteRAM(0xD, data);
    };
    this.memoryHighWriter[0x3E] = this.memoryWriter[0xFF3E] = function(parentObj, address, data) {
        parentObj.channel3WriteRAM(0xE, data);
    };
    this.memoryHighWriter[0x3F] = this.memoryWriter[0xFF3F] = function(parentObj, address, data) {
        parentObj.channel3WriteRAM(0xF, data);
    };
    //SCY
    this.memoryHighWriter[0x42] = this.memoryWriter[0xFF42] = function(parentObj, address, data) {
        if (parentObj.backgroundY != data) {
            parentObj.midScanLineJIT();
            parentObj.backgroundY = data;
        }
    };
    //SCX
    this.memoryHighWriter[0x43] = this.memoryWriter[0xFF43] = function(parentObj, address, data) {
        if (parentObj.backgroundX != data) {
            parentObj.midScanLineJIT();
            parentObj.backgroundX = data;
        }
    };
    //LY
    this.memoryHighWriter[0x44] = this.memoryWriter[0xFF44] = function(parentObj, address, data) {
        //Read Only:
        if (parentObj.LCDisOn) {
            //Gambatte says to do this:
            parentObj.modeSTAT = 2;
            parentObj.midScanlineOffset = -1;
            parentObj.totalLinesPassed = parentObj.currentX = parentObj.queuedScanLines = parentObj.lastUnrenderedLine = parentObj.LCDTicks = parentObj.STATTracker = parentObj.actualScanLine = parentObj.memory[0xFF44] = 0;
        }
    };
    //LYC
    this.memoryHighWriter[0x45] = this.memoryWriter[0xFF45] = function(parentObj, address, data) {
        if (parentObj.memory[0xFF45] != data) {
            parentObj.memory[0xFF45] = data;
            if (parentObj.LCDisOn) parentObj.matchLYC(); //Get the compare of the first scan line.
        }
    };
    //WY
    this.memoryHighWriter[0x4A] = this.memoryWriter[0xFF4A] = function(parentObj, address, data) {
        if (parentObj.windowY != data) {
            parentObj.midScanLineJIT();
            parentObj.windowY = data;
        }
    };
    //WX
    this.memoryHighWriter[0x4B] = this.memoryWriter[0xFF4B] = function(parentObj, address, data) {
        if (parentObj.memory[0xFF4B] != data) {
            parentObj.midScanLineJIT();
            parentObj.memory[0xFF4B] = data;
            parentObj.windowX = data - 7;
        }
    };
    this.memoryHighWriter[0x72] = this.memoryWriter[0xFF72] = function(parentObj, address, data) {
        parentObj.memory[0xFF72] = data;
    };
    this.memoryHighWriter[0x73] = this.memoryWriter[0xFF73] = function(parentObj, address, data) {
        parentObj.memory[0xFF73] = data;
    };
    this.memoryHighWriter[0x75] = this.memoryWriter[0xFF75] = function(parentObj, address, data) {
        parentObj.memory[0xFF75] = data;
    };
    this.memoryHighWriter[0x76] = this.memoryWriter[0xFF76] = this.cartIgnoreWrite;
    this.memoryHighWriter[0x77] = this.memoryWriter[0xFF77] = this.cartIgnoreWrite;
    //IE (Interrupt Enable)
    this.memoryHighWriter[0xFF] = this.memoryWriter[0xFFFF] = function(parentObj, address, data) {
        parentObj.interruptsEnabled = data;
        parentObj.checkIRQMatching();
    };
    this.recompileModelSpecificIOWriteHandling();
    this.recompileBootIOWriteHandling();
};
GameBoyCore.prototype.recompileModelSpecificIOWriteHandling = function() {
    if (this.cGBC) {
        //GameBoy Color Specific I/O:
        //SC (Serial Transfer Control Register)
        this.memoryHighWriter[0x2] = this.memoryWriter[0xFF02] = function(parentObj, address, data) {
            if ((data & 0x1) == 0x1) {
                //Internal clock:
                parentObj.memory[0xFF02] = data & 0x7F;
                parentObj.serialTimer = (data & 0x2) == 0 ? 4096 : 128; //Set the Serial IRQ counter.
                parentObj.serialShiftTimer = parentObj.serialShiftTimerAllocated = (data & 0x2) == 0 ? 512 : 16; //Set the transfer data shift counter.
            } else {
                //External clock:
                parentObj.memory[0xFF02] = data;
                parentObj.serialShiftTimer = parentObj.serialShiftTimerAllocated = parentObj.serialTimer = 0; //Zero the timers, since we're emulating as if nothing is connected.
            }
        };
        this.memoryHighWriter[0x40] = this.memoryWriter[0xFF40] = function(parentObj, address, data) {
            if (parentObj.memory[0xFF40] != data) {
                parentObj.midScanLineJIT();
                var temp_var = data > 0x7F;
                if (temp_var != parentObj.LCDisOn) {
                    //When the display mode changes...
                    parentObj.LCDisOn = temp_var;
                    parentObj.memory[0xFF41] &= 0x78;
                    parentObj.midScanlineOffset = -1;
                    parentObj.totalLinesPassed = parentObj.currentX = parentObj.queuedScanLines = parentObj.lastUnrenderedLine = parentObj.STATTracker = parentObj.LCDTicks = parentObj.actualScanLine = parentObj.memory[0xFF44] = 0;
                    if (parentObj.LCDisOn) {
                        parentObj.modeSTAT = 2;
                        parentObj.matchLYC(); //Get the compare of the first scan line.
                        parentObj.LCDCONTROL = parentObj.LINECONTROL;
                    } else {
                        parentObj.modeSTAT = 0;
                        parentObj.LCDCONTROL = parentObj.DISPLAYOFFCONTROL;
                        parentObj.DisplayShowOff();
                    }
                    parentObj.interruptsRequested &= 0xFD;
                }
                parentObj.gfxWindowCHRBankPosition = (data & 0x40) == 0x40 ? 0x400 : 0;
                parentObj.gfxWindowDisplay = (data & 0x20) == 0x20;
                parentObj.gfxBackgroundBankOffset = (data & 0x10) == 0x10 ? 0 : 0x80;
                parentObj.gfxBackgroundCHRBankPosition = (data & 0x08) == 0x08 ? 0x400 : 0;
                parentObj.gfxSpriteNormalHeight = (data & 0x04) == 0;
                parentObj.gfxSpriteShow = (data & 0x02) == 0x02;
                parentObj.BGPriorityEnabled = (data & 0x01) == 0x01;
                parentObj.priorityFlaggingPathRebuild(); //Special case the priority flagging as an optimization.
                parentObj.memory[0xFF40] = data;
            }
        };
        this.memoryHighWriter[0x41] = this.memoryWriter[0xFF41] = function(parentObj, address, data) {
            parentObj.LYCMatchTriggerSTAT = (data & 0x40) == 0x40;
            parentObj.mode2TriggerSTAT = (data & 0x20) == 0x20;
            parentObj.mode1TriggerSTAT = (data & 0x10) == 0x10;
            parentObj.mode0TriggerSTAT = (data & 0x08) == 0x08;
            parentObj.memory[0xFF41] = data & 0x78;
        };
        this.memoryHighWriter[0x46] = this.memoryWriter[0xFF46] = function(parentObj, address, data) {
            parentObj.memory[0xFF46] = data;
            if (data < 0xE0) {
                data <<= 8;
                address = 0xFE00;
                var stat = parentObj.modeSTAT;
                parentObj.modeSTAT = 0;
                var newData = 0;
                do {
                    newData = parentObj.memoryReader[data](parentObj, data++);
                    if (newData != parentObj.memory[address]) {
                        //JIT the graphics render queue:
                        parentObj.modeSTAT = stat;
                        parentObj.graphicsJIT();
                        parentObj.modeSTAT = 0;
                        parentObj.memory[address++] = newData;
                        break;
                    }
                }while (++address < 0xFEA0);
                if (address < 0xFEA0) do {
                    parentObj.memory[address++] = parentObj.memoryReader[data](parentObj, data++);
                    parentObj.memory[address++] = parentObj.memoryReader[data](parentObj, data++);
                    parentObj.memory[address++] = parentObj.memoryReader[data](parentObj, data++);
                    parentObj.memory[address++] = parentObj.memoryReader[data](parentObj, data++);
                }while (address < 0xFEA0);
                parentObj.modeSTAT = stat;
            }
        };
        //KEY1
        this.memoryHighWriter[0x4D] = this.memoryWriter[0xFF4D] = function(parentObj, address, data) {
            parentObj.memory[0xFF4D] = data & 0x7F | parentObj.memory[0xFF4D] & 0x80;
        };
        this.memoryHighWriter[0x4F] = this.memoryWriter[0xFF4F] = function(parentObj, address, data) {
            parentObj.currVRAMBank = data & 0x01;
            if (parentObj.currVRAMBank > 0) parentObj.BGCHRCurrentBank = parentObj.BGCHRBank2;
            else parentObj.BGCHRCurrentBank = parentObj.BGCHRBank1;
        //Only writable by GBC.
        };
        this.memoryHighWriter[0x51] = this.memoryWriter[0xFF51] = function(parentObj, address, data) {
            if (!parentObj.hdmaRunning) parentObj.memory[0xFF51] = data;
        };
        this.memoryHighWriter[0x52] = this.memoryWriter[0xFF52] = function(parentObj, address, data) {
            if (!parentObj.hdmaRunning) parentObj.memory[0xFF52] = data & 0xF0;
        };
        this.memoryHighWriter[0x53] = this.memoryWriter[0xFF53] = function(parentObj, address, data) {
            if (!parentObj.hdmaRunning) parentObj.memory[0xFF53] = data & 0x1F;
        };
        this.memoryHighWriter[0x54] = this.memoryWriter[0xFF54] = function(parentObj, address, data) {
            if (!parentObj.hdmaRunning) parentObj.memory[0xFF54] = data & 0xF0;
        };
        this.memoryHighWriter[0x55] = this.memoryWriter[0xFF55] = function(parentObj, address, data) {
            if (!parentObj.hdmaRunning) {
                if ((data & 0x80) == 0) {
                    //DMA
                    parentObj.DMAWrite((data & 0x7F) + 1);
                    parentObj.memory[0xFF55] = 0xFF; //Transfer completed.
                } else {
                    //H-Blank DMA
                    parentObj.hdmaRunning = true;
                    parentObj.memory[0xFF55] = data & 0x7F;
                }
            } else if ((data & 0x80) == 0) {
                //Stop H-Blank DMA
                parentObj.hdmaRunning = false;
                parentObj.memory[0xFF55] |= 0x80;
            } else parentObj.memory[0xFF55] = data & 0x7F;
        };
        this.memoryHighWriter[0x68] = this.memoryWriter[0xFF68] = function(parentObj, address, data) {
            parentObj.memory[0xFF69] = parentObj.gbcBGRawPalette[data & 0x3F];
            parentObj.memory[0xFF68] = data;
        };
        this.memoryHighWriter[0x69] = this.memoryWriter[0xFF69] = function(parentObj, address, data) {
            parentObj.updateGBCBGPalette(parentObj.memory[0xFF68] & 0x3F, data);
            if (parentObj.memory[0xFF68] > 0x7F) {
                var next = parentObj.memory[0xFF68] + 1 & 0x3F;
                parentObj.memory[0xFF68] = next | 0x80;
                parentObj.memory[0xFF69] = parentObj.gbcBGRawPalette[next];
            } else parentObj.memory[0xFF69] = data;
        };
        this.memoryHighWriter[0x6A] = this.memoryWriter[0xFF6A] = function(parentObj, address, data) {
            parentObj.memory[0xFF6B] = parentObj.gbcOBJRawPalette[data & 0x3F];
            parentObj.memory[0xFF6A] = data;
        };
        this.memoryHighWriter[0x6B] = this.memoryWriter[0xFF6B] = function(parentObj, address, data) {
            parentObj.updateGBCOBJPalette(parentObj.memory[0xFF6A] & 0x3F, data);
            if (parentObj.memory[0xFF6A] > 0x7F) {
                var next = parentObj.memory[0xFF6A] + 1 & 0x3F;
                parentObj.memory[0xFF6A] = next | 0x80;
                parentObj.memory[0xFF6B] = parentObj.gbcOBJRawPalette[next];
            } else parentObj.memory[0xFF6B] = data;
        };
        //SVBK
        this.memoryHighWriter[0x70] = this.memoryWriter[0xFF70] = function(parentObj, address, data) {
            var addressCheck = parentObj.memory[0xFF51] << 8 | parentObj.memory[0xFF52]; //Cannot change the RAM bank while WRAM is the source of a running HDMA.
            if (!parentObj.hdmaRunning || addressCheck < 0xD000 || addressCheck >= 0xE000) {
                parentObj.gbcRamBank = Math.max(data & 0x07, 1); //Bank range is from 1-7
                parentObj.gbcRamBankPosition = (parentObj.gbcRamBank - 1 << 12) - 0xD000;
                parentObj.gbcRamBankPositionECHO = parentObj.gbcRamBankPosition - 0x2000;
            }
            parentObj.memory[0xFF70] = data; //Bit 6 cannot be written to.
        };
        this.memoryHighWriter[0x74] = this.memoryWriter[0xFF74] = function(parentObj, address, data) {
            parentObj.memory[0xFF74] = data;
        };
    } else {
        //Fill in the GameBoy Color I/O registers as normal RAM for GameBoy compatibility:
        //SC (Serial Transfer Control Register)
        this.memoryHighWriter[0x2] = this.memoryWriter[0xFF02] = function(parentObj, address, data) {
            if ((data & 0x1) == 0x1) {
                //Internal clock:
                parentObj.memory[0xFF02] = data & 0x7F;
                parentObj.serialTimer = 4096; //Set the Serial IRQ counter.
                parentObj.serialShiftTimer = parentObj.serialShiftTimerAllocated = 512; //Set the transfer data shift counter.
            } else {
                //External clock:
                parentObj.memory[0xFF02] = data;
                parentObj.serialShiftTimer = parentObj.serialShiftTimerAllocated = parentObj.serialTimer = 0; //Zero the timers, since we're emulating as if nothing is connected.
            }
        };
        this.memoryHighWriter[0x40] = this.memoryWriter[0xFF40] = function(parentObj, address, data) {
            if (parentObj.memory[0xFF40] != data) {
                parentObj.midScanLineJIT();
                var temp_var = data > 0x7F;
                if (temp_var != parentObj.LCDisOn) {
                    //When the display mode changes...
                    parentObj.LCDisOn = temp_var;
                    parentObj.memory[0xFF41] &= 0x78;
                    parentObj.midScanlineOffset = -1;
                    parentObj.totalLinesPassed = parentObj.currentX = parentObj.queuedScanLines = parentObj.lastUnrenderedLine = parentObj.STATTracker = parentObj.LCDTicks = parentObj.actualScanLine = parentObj.memory[0xFF44] = 0;
                    if (parentObj.LCDisOn) {
                        parentObj.modeSTAT = 2;
                        parentObj.matchLYC(); //Get the compare of the first scan line.
                        parentObj.LCDCONTROL = parentObj.LINECONTROL;
                    } else {
                        parentObj.modeSTAT = 0;
                        parentObj.LCDCONTROL = parentObj.DISPLAYOFFCONTROL;
                        parentObj.DisplayShowOff();
                    }
                    parentObj.interruptsRequested &= 0xFD;
                }
                parentObj.gfxWindowCHRBankPosition = (data & 0x40) == 0x40 ? 0x400 : 0;
                parentObj.gfxWindowDisplay = (data & 0x20) == 0x20;
                parentObj.gfxBackgroundBankOffset = (data & 0x10) == 0x10 ? 0 : 0x80;
                parentObj.gfxBackgroundCHRBankPosition = (data & 0x08) == 0x08 ? 0x400 : 0;
                parentObj.gfxSpriteNormalHeight = (data & 0x04) == 0;
                parentObj.gfxSpriteShow = (data & 0x02) == 0x02;
                parentObj.bgEnabled = (data & 0x01) == 0x01;
                parentObj.memory[0xFF40] = data;
            }
        };
        this.memoryHighWriter[0x41] = this.memoryWriter[0xFF41] = function(parentObj, address, data) {
            parentObj.LYCMatchTriggerSTAT = (data & 0x40) == 0x40;
            parentObj.mode2TriggerSTAT = (data & 0x20) == 0x20;
            parentObj.mode1TriggerSTAT = (data & 0x10) == 0x10;
            parentObj.mode0TriggerSTAT = (data & 0x08) == 0x08;
            parentObj.memory[0xFF41] = data & 0x78;
            if ((!parentObj.usedBootROM || !parentObj.usedGBCBootROM) && parentObj.LCDisOn && parentObj.modeSTAT < 2) {
                parentObj.interruptsRequested |= 0x2;
                parentObj.checkIRQMatching();
            }
        };
        this.memoryHighWriter[0x46] = this.memoryWriter[0xFF46] = function(parentObj, address, data) {
            parentObj.memory[0xFF46] = data;
            if (data > 0x7F && data < 0xE0) {
                data <<= 8;
                address = 0xFE00;
                var stat = parentObj.modeSTAT;
                parentObj.modeSTAT = 0;
                var newData = 0;
                do {
                    newData = parentObj.memoryReader[data](parentObj, data++);
                    if (newData != parentObj.memory[address]) {
                        //JIT the graphics render queue:
                        parentObj.modeSTAT = stat;
                        parentObj.graphicsJIT();
                        parentObj.modeSTAT = 0;
                        parentObj.memory[address++] = newData;
                        break;
                    }
                }while (++address < 0xFEA0);
                if (address < 0xFEA0) do {
                    parentObj.memory[address++] = parentObj.memoryReader[data](parentObj, data++);
                    parentObj.memory[address++] = parentObj.memoryReader[data](parentObj, data++);
                    parentObj.memory[address++] = parentObj.memoryReader[data](parentObj, data++);
                    parentObj.memory[address++] = parentObj.memoryReader[data](parentObj, data++);
                }while (address < 0xFEA0);
                parentObj.modeSTAT = stat;
            }
        };
        this.memoryHighWriter[0x47] = this.memoryWriter[0xFF47] = function(parentObj, address, data) {
            if (parentObj.memory[0xFF47] != data) {
                parentObj.midScanLineJIT();
                parentObj.updateGBBGPalette(data);
                parentObj.memory[0xFF47] = data;
            }
        };
        this.memoryHighWriter[0x48] = this.memoryWriter[0xFF48] = function(parentObj, address, data) {
            if (parentObj.memory[0xFF48] != data) {
                parentObj.midScanLineJIT();
                parentObj.updateGBOBJPalette(0, data);
                parentObj.memory[0xFF48] = data;
            }
        };
        this.memoryHighWriter[0x49] = this.memoryWriter[0xFF49] = function(parentObj, address, data) {
            if (parentObj.memory[0xFF49] != data) {
                parentObj.midScanLineJIT();
                parentObj.updateGBOBJPalette(4, data);
                parentObj.memory[0xFF49] = data;
            }
        };
        this.memoryHighWriter[0x4D] = this.memoryWriter[0xFF4D] = function(parentObj, address, data) {
            parentObj.memory[0xFF4D] = data;
        };
        this.memoryHighWriter[0x4F] = this.memoryWriter[0xFF4F] = this.cartIgnoreWrite; //Not writable in DMG mode.
        this.memoryHighWriter[0x55] = this.memoryWriter[0xFF55] = this.cartIgnoreWrite;
        this.memoryHighWriter[0x68] = this.memoryWriter[0xFF68] = this.cartIgnoreWrite;
        this.memoryHighWriter[0x69] = this.memoryWriter[0xFF69] = this.cartIgnoreWrite;
        this.memoryHighWriter[0x6A] = this.memoryWriter[0xFF6A] = this.cartIgnoreWrite;
        this.memoryHighWriter[0x6B] = this.memoryWriter[0xFF6B] = this.cartIgnoreWrite;
        this.memoryHighWriter[0x6C] = this.memoryWriter[0xFF6C] = this.cartIgnoreWrite;
        this.memoryHighWriter[0x70] = this.memoryWriter[0xFF70] = this.cartIgnoreWrite;
        this.memoryHighWriter[0x74] = this.memoryWriter[0xFF74] = this.cartIgnoreWrite;
    }
};
GameBoyCore.prototype.recompileBootIOWriteHandling = function() {
    //Boot I/O Registers:
    if (this.inBootstrap) {
        this.memoryHighWriter[0x50] = this.memoryWriter[0xFF50] = function(parentObj, address, data) {
            cout("Boot ROM reads blocked: Bootstrap process has ended.", 0);
            parentObj.inBootstrap = false;
            parentObj.disableBootROM(); //Fill in the boot ROM ranges with ROM  bank 0 ROM ranges
            parentObj.memory[0xFF50] = data; //Bits are sustained in memory?
        };
        if (this.cGBC) this.memoryHighWriter[0x6C] = this.memoryWriter[0xFF6C] = function(parentObj, address, data) {
            if (parentObj.inBootstrap) {
                parentObj.cGBC = (data & 0x1) == 0;
                //Exception to the GBC identifying code:
                if (parentObj.name + parentObj.gameCode + parentObj.ROM[0x143] == "Game and Watch 50") {
                    parentObj.cGBC = true;
                    cout("Created a boot exception for Game and Watch Gallery 2 (GBC ID byte is wrong on the cartridge).", 1);
                }
                cout("Booted to GBC Mode: " + parentObj.cGBC, 0);
            }
            parentObj.memory[0xFF6C] = data;
        };
    } else //Lockout the ROMs from accessing the BOOT ROM control register:
    this.memoryHighWriter[0x50] = this.memoryWriter[0xFF50] = this.cartIgnoreWrite;
};
//Helper Functions
GameBoyCore.prototype.toTypedArray = function(baseArray, memtype) {
    try {
        if (settings[5]) return baseArray;
        if (!baseArray || !baseArray.length) return [];
        var length = baseArray.length;
        switch(memtype){
            case "uint8":
                var typedArrayTemp = new Uint8Array(length);
                break;
            case "int8":
                var typedArrayTemp = new Int8Array(length);
                break;
            case "int32":
                var typedArrayTemp = new Int32Array(length);
                break;
            case "float32":
                var typedArrayTemp = new Float32Array(length);
        }
        for(var index = 0; index < length; index++)typedArrayTemp[index] = baseArray[index];
        return typedArrayTemp;
    } catch (error) {
        cout("Could not convert an array to a typed array: " + error.message, 1);
        return baseArray;
    }
};
GameBoyCore.prototype.fromTypedArray = function(baseArray) {
    try {
        if (!baseArray || !baseArray.length) return [];
        var arrayTemp = [];
        for(var index = 0; index < baseArray.length; ++index)arrayTemp[index] = baseArray[index];
        return arrayTemp;
    } catch (error) {
        cout("Conversion from a typed array failed: " + error.message, 1);
        return baseArray;
    }
};
GameBoyCore.prototype.getTypedArray = function(length, defaultValue, numberType) {
    try {
        if (settings[5]) throw new Error("Settings forced typed arrays to be disabled.");
        switch(numberType){
            case "int8":
                var arrayHandle = new Int8Array(length);
                break;
            case "uint8":
                var arrayHandle = new Uint8Array(length);
                break;
            case "int32":
                var arrayHandle = new Int32Array(length);
                break;
            case "float32":
                var arrayHandle = new Float32Array(length);
        }
        if (defaultValue != 0) {
            var index = 0;
            while(index < length)arrayHandle[index++] = defaultValue;
        }
    } catch (error) {
        cout("Could not convert an array to a typed array: " + error.message, 1);
        var arrayHandle = [];
        var index = 0;
        while(index < length)arrayHandle[index++] = defaultValue;
    }
    return arrayHandle;
};
module.exports = GameBoyCore; //  LocalWords:  saveSRAMState

},{"f1eb7863cf8d479a":"9UmGq","26fbb729a3869922":"6eBRf","29bab87933ef3c07":"dESyW","2f35cabb1a9dd5c0":"6ddap","5ecdc9876ae6a172":"bNXaq","d8ecbed08da203a8":"gHdsj","2e5fc13e957575d3":"jSkaI","18b16725eeaea82a":"60aH7"}],"9UmGq":[function(require,module,exports) {
function Instance(ROMImage) {
    //My added variables--------------
    this.frameDone = false;
    this.currentScreen = []; //this.currentScreenContents;
    this.lastScreen = []; //A copy of the last frame's screen.
    this.partialScreen = {}; //An object with the differences from the last screen.
    //Params, etc...
    this.currentFrame = []; //Array of the most recent frame.
    this.drawContext = null; // LCD Context
    this.ROMImage = ROMImage; //The game's ROM. 
    //CPU Registers and Flags:
    this.registerA = 0x01; //Register A (Accumulator)
    this.FZero = true; //Register F  - Result was zero
    this.FSubtract = false; //Register F  - Subtraction was executed
    this.FHalfCarry = true; //Register F  - Half carry or half borrow
    this.FCarry = true; //Register F  - Carry or borrow
    this.registerB = 0x00; //Register B
    this.registerC = 0x13; //Register C
    this.registerD = 0x00; //Register D
    this.registerE = 0xD8; //Register E
    this.registersHL = 0x014D; //Registers H and L combined
    this.stackPointer = 0xFFFE; //Stack Pointer
    this.programCounter = 0x0100; //Program Counter
    //Some CPU Emulation State Variables:
    this.CPUCyclesTotal = 0; //Relative CPU clocking to speed set, rounded appropriately.
    this.CPUCyclesTotalBase = 0; //Relative CPU clocking to speed set base.
    this.CPUCyclesTotalCurrent = 0; //Relative CPU clocking to speed set, the directly used value.
    this.CPUCyclesTotalRoundoff = 0; //Clocking per iteration rounding catch.
    this.baseCPUCyclesPerIteration = 0; //CPU clocks per iteration at 1x speed.
    this.remainingClocks = 0; //HALT clocking overrun carry over.
    this.inBootstrap = true; //Whether we're in the GBC boot ROM.
    this.usedBootROM = false; //Updated upon ROM loading...
    this.usedGBCBootROM = false; //Did we boot to the GBC boot ROM?
    this.halt = false; //Has the CPU been suspended until the next interrupt?
    this.skipPCIncrement = false; //Did we trip the DMG Halt bug?
    this.stopEmulator = 3; //Has the emulation been paused or a frame has ended?
    this.IME = true; //Are interrupts enabled?
    this.IRQLineMatched = 0; //CPU IRQ assertion.
    this.interruptsRequested = 0; //IF Register
    this.interruptsEnabled = 0; //IE Register
    this.hdmaRunning = false; //HDMA Transfer Flag - GBC only
    this.CPUTicks = 0; //The number of clock cycles emulated.
    this.doubleSpeedShifter = 0; //GBC double speed clocking shifter.
    this.JoyPad = 0xFF; //Joypad State (two four-bit states actually)
    this.CPUStopped = false; //CPU STOP status.
    //Main RAM, MBC RAM, GBC Main RAM, VRAM, etc.
    this.memoryReader = []; //Array of functions mapped to read back memory
    this.memoryWriter = []; //Array of functions mapped to write to memory
    this.memoryHighReader = []; //Array of functions mapped to read back 0xFFXX memory
    this.memoryHighWriter = []; //Array of functions mapped to write to 0xFFXX memory
    this.ROM = []; //The full ROM file dumped to an array.
    this.memory = []; //Main Core Memory
    this.MBCRam = []; //Switchable RAM (Used by games for more RAM) for the main memory range 0xA000 - 0xC000.
    this.VRAM = []; //Extra VRAM bank for GBC.
    this.GBCMemory = []; //GBC main RAM Banks
    this.MBC1Mode = false; //MBC1 Type (4/32, 16/8)
    this.MBCRAMBanksEnabled = false; //MBC RAM Access Control.
    this.currMBCRAMBank = 0; //MBC Currently Indexed RAM Bank
    this.currMBCRAMBankPosition = -40960; //MBC Position Adder;
    this.cGBC = false; //GameBoy Color detection.
    this.gbcRamBank = 1; //Currently Switched GameBoy Color ram bank
    this.gbcRamBankPosition = -53248; //GBC RAM offset from address start.
    this.gbcRamBankPositionECHO = -61440; //GBC RAM (ECHO mirroring) offset from address start.
    this.RAMBanks = [
        0,
        1,
        2,
        4,
        16
    ]; //Used to map the RAM banks to maximum size the MBC used can do.
    this.ROMBank1offs = 0; //Offset of the ROM bank switching.
    this.currentROMBank = 0; //The parsed current ROM bank selection.
    this.cartridgeType = 0; //Cartridge Type
    this.name = ""; //Name of the game
    this.gameCode = ""; //Game code (Suffix for older games)
    this.fromSaveState = false; //A boolean to see if this was loaded in as a save state.
    this.savedStateFileName = ""; //When loaded in as a save state, this will not be empty.
    this.STATTracker = 0; //Tracker for STAT triggering.
    this.modeSTAT = 0; //The scan line mode (for lines 1-144 it's 2-3-0, for 145-154 it's 1)
    this.spriteCount = 252; //Mode 3 extra clocking counter (Depends on how many sprites are on the current line.).
    this.LYCMatchTriggerSTAT = false; //Should we trigger an interrupt if LY==LYC?
    this.mode2TriggerSTAT = false; //Should we trigger an interrupt if in mode 2?
    this.mode1TriggerSTAT = false; //Should we trigger an interrupt if in mode 1?
    this.mode0TriggerSTAT = false; //Should we trigger an interrupt if in mode 0?
    this.LCDisOn = false; //Is the emulated LCD controller on?
    this.LINECONTROL = []; //Array of functions to handle each scan line we do (onscreen + offscreen)
    this.DISPLAYOFFCONTROL = [
        function(parentObj) {
        //Array of line 0 function to handle the LCD controller when it's off (Do nothing!).
        }
    ];
    this.LCDCONTROL = null; //Pointer to either LINECONTROL or DISPLAYOFFCONTROL.
    this.initializeLCDController(); //Compile the LCD controller functions.
    //RTC (Real Time Clock for MBC3):
    this.RTCisLatched = false;
    this.latchedSeconds = 0; //RTC latched seconds.
    this.latchedMinutes = 0; //RTC latched minutes.
    this.latchedHours = 0; //RTC latched hours.
    this.latchedLDays = 0; //RTC latched lower 8-bits of the day counter.
    this.latchedHDays = 0; //RTC latched high-bit of the day counter.
    this.RTCSeconds = 0; //RTC seconds counter.
    this.RTCMinutes = 0; //RTC minutes counter.
    this.RTCHours = 0; //RTC hours counter.
    this.RTCDays = 0; //RTC days counter.
    this.RTCDayOverFlow = false; //Did the RTC overflow and wrap the day counter?
    this.RTCHALT = false; //Is the RTC allowed to clock up?
    //Gyro:
    this.highX = 127;
    this.lowX = 127;
    this.highY = 127;
    this.lowY = 127;
    //Sound variables:
    this.audioHandle = null; //XAudioJS handle
    this.numSamplesTotal = 0; //Length of the sound buffers.
    this.dutyLookup = [
        [
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            true
        ],
        [
            true,
            false,
            false,
            false,
            false,
            false,
            false,
            true
        ],
        [
            true,
            false,
            false,
            false,
            false,
            true,
            true,
            true
        ],
        [
            false,
            true,
            true,
            true,
            true,
            true,
            true,
            false
        ]
    ];
    this.bufferContainAmount = 0; //Buffer maintenance metric.
    this.LSFR15Table = null;
    this.LSFR7Table = null;
    this.noiseSampleTable = null;
    this.initializeAudioStartState();
    this.soundMasterEnabled = false; //As its name implies
    this.channel3PCM = null; //Channel 3 adjusted sample buffer.
    //Vin Shit:
    this.VinLeftChannelMasterVolume = 8; //Computed post-mixing volume.
    this.VinRightChannelMasterVolume = 8; //Computed post-mixing volume.
    //Channel paths enabled:
    this.leftChannel1 = false;
    this.leftChannel2 = false;
    this.leftChannel3 = false;
    this.leftChannel4 = false;
    this.rightChannel1 = false;
    this.rightChannel2 = false;
    this.rightChannel3 = false;
    this.rightChannel4 = false;
    this.audioClocksUntilNextEvent = 1;
    this.audioClocksUntilNextEventCounter = 1;
    //Channel output level caches:
    this.channel1currentSampleLeft = 0;
    this.channel1currentSampleRight = 0;
    this.channel2currentSampleLeft = 0;
    this.channel2currentSampleRight = 0;
    this.channel3currentSampleLeft = 0;
    this.channel3currentSampleRight = 0;
    this.channel4currentSampleLeft = 0;
    this.channel4currentSampleRight = 0;
    this.channel1currentSampleLeftSecondary = 0;
    this.channel1currentSampleRightSecondary = 0;
    this.channel2currentSampleLeftSecondary = 0;
    this.channel2currentSampleRightSecondary = 0;
    this.channel3currentSampleLeftSecondary = 0;
    this.channel3currentSampleRightSecondary = 0;
    this.channel4currentSampleLeftSecondary = 0;
    this.channel4currentSampleRightSecondary = 0;
    this.channel1currentSampleLeftTrimary = 0;
    this.channel1currentSampleRightTrimary = 0;
    this.channel2currentSampleLeftTrimary = 0;
    this.channel2currentSampleRightTrimary = 0;
    this.mixerOutputCache = 0;
    //Pre-multipliers to cache some calculations:
    this.emulatorSpeed = 1;
    this.initializeTiming();
    //Audio generation counters:
    this.audioTicks = 0; //Used to sample the audio system every x CPU instructions.
    this.audioIndex = 0; //Used to keep alignment on audio generation.
    this.downsampleInput = 0;
    this.audioDestinationPosition = 0; //Used to keep alignment on audio generation.
    this.rollover = 0; //Used to keep alignment on the number of samples to output (Realign from counter alias).
    //Timing Variables
    this.emulatorTicks = 0; //Times for how many instructions to execute before ending the loop.
    this.DIVTicks = 56; //DIV Ticks Counter (Invisible lower 8-bit)
    this.LCDTicks = 60; //Counter for how many instructions have been executed on a scanline so far.
    this.timerTicks = 0; //Counter for the TIMA timer.
    this.TIMAEnabled = false; //Is TIMA enabled?
    this.TACClocker = 1024; //Timer Max Ticks
    this.serialTimer = 0; //Serial IRQ Timer
    this.serialShiftTimer = 0; //Serial Transfer Shift Timer
    this.serialShiftTimerAllocated = 0; //Serial Transfer Shift Timer Refill
    this.IRQEnableDelay = 0; //Are the interrupts on queue to be enabled?
    var dateVar = new Date();
    this.lastIteration = dateVar.getTime(); //The last time we iterated the main loop.
    dateVar = new Date();
    this.firstIteration = dateVar.getTime();
    this.iterations = 0;
    this.actualScanLine = 0; //Actual scan line...
    this.lastUnrenderedLine = 0; //Last rendered scan line...
    this.queuedScanLines = 0;
    this.totalLinesPassed = 0;
    this.haltPostClocks = 0; //Post-Halt clocking.
    //ROM Cartridge Components:
    this.cMBC1 = false; //Does the cartridge use MBC1?
    this.cMBC2 = false; //Does the cartridge use MBC2?
    this.cMBC3 = false; //Does the cartridge use MBC3?
    this.cMBC5 = false; //Does the cartridge use MBC5?
    this.cMBC7 = false; //Does the cartridge use MBC7?
    this.cSRAM = false; //Does the cartridge use save RAM?
    this.cMMMO1 = false; //...
    this.cRUMBLE = false; //Does the cartridge use the RUMBLE addressing (modified MBC5)?
    this.cCamera = false; //Is the cartridge actually a GameBoy Camera?
    this.cTAMA5 = false; //Does the cartridge use TAMA5? (Tamagotchi Cartridge)
    this.cHuC3 = false; //Does the cartridge use HuC3 (Hudson Soft / modified MBC3)?
    this.cHuC1 = false; //Does the cartridge use HuC1 (Hudson Soft / modified MBC1)?
    this.cTIMER = false; //Does the cartridge have an RTC?
    this.ROMBanks = [
        2,
        4,
        8,
        16,
        32,
        64,
        128,
        256,
        512
    ];
    this.ROMBanks[0x52] = 72;
    this.ROMBanks[0x53] = 80;
    this.ROMBanks[0x54] = 96;
    this.numRAMBanks = 0; //How many RAM banks were actually allocated?
    ////Graphics Variables
    this.currVRAMBank = 0; //Current VRAM bank for GBC.
    this.backgroundX = 0; //Register SCX (X-Scroll)
    this.backgroundY = 0; //Register SCY (Y-Scroll)
    this.gfxWindowDisplay = false; //Is the windows enabled?
    this.gfxSpriteShow = false; //Are sprites enabled?
    this.gfxSpriteNormalHeight = true; //Are we doing 8x8 or 8x16 sprites?
    this.bgEnabled = true; //Is the BG enabled?
    this.BGPriorityEnabled = true; //Can we flag the BG for priority over sprites?
    this.gfxWindowCHRBankPosition = 0; //The current bank of the character map the window uses.
    this.gfxBackgroundCHRBankPosition = 0; //The current bank of the character map the BG uses.
    this.gfxBackgroundBankOffset = 0x80; //Fast mapping of the tile numbering/
    this.windowY = 0; //Current Y offset of the window.
    this.windowX = 0; //Current X offset of the window.
    this.drewBlank = 0; //To prevent the repeating of drawing a blank screen.
    this.drewFrame = false; //Throttle how many draws we can do to once per iteration.
    this.midScanlineOffset = -1; //mid-scanline rendering offset.
    this.pixelEnd = 0; //track the x-coord limit for line rendering (mid-scanline usage).
    this.currentX = 0; //The x-coord we left off at for mid-scanline rendering.
    //BG Tile Pointer Caches:
    this.BGCHRBank1 = null;
    this.BGCHRBank2 = null;
    this.BGCHRCurrentBank = null;
    //Tile Data Cache:
    this.tileCache = null;
    //Palettes:
    this.colors = [
        0xEFFFDE,
        0xADD794,
        0x529273,
        0x183442
    ]; //"Classic" GameBoy palette colors.
    this.OBJPalette = null;
    this.BGPalette = null;
    this.gbcOBJRawPalette = null;
    this.gbcBGRawPalette = null;
    this.gbOBJPalette = null;
    this.gbBGPalette = null;
    this.gbcOBJPalette = null;
    this.gbcBGPalette = null;
    this.gbBGColorizedPalette = null;
    this.gbOBJColorizedPalette = null;
    this.cachedBGPaletteConversion = null;
    this.cachedOBJPaletteConversion = null;
    this.updateGBBGPalette = this.updateGBRegularBGPalette;
    this.updateGBOBJPalette = this.updateGBRegularOBJPalette;
    this.colorizedGBPalettes = false;
    this.BGLayerRender = null; //Reference to the BG rendering function.
    this.WindowLayerRender = null; //Reference to the window rendering function.
    this.SpriteLayerRender = null; //Reference to the OAM rendering function.
    this.frameBuffer = []; //The internal frame-buffer.
    this.swizzledFrame = null; //The secondary gfx buffer that holds the converted RGBA values.
    this.canvasBuffer = null; //imageData handle
    this.pixelStart = 0; //Temp variable for holding the current working framebuffer offset.
    //Variables used for scaling in JS:
    this.onscreenWidth = this.offscreenWidth = 160;
    this.onscreenHeight = this.offScreenheight = 144;
    this.offscreenRGBCount = this.onscreenWidth * this.onscreenHeight * 4;
    this.resizePathClear = true;
    //Initialize the white noise cache tables ahead of time:
    this.intializeWhiteNoise();
}
module.exports = Instance;

},{}],"6eBRf":[function(require,module,exports) {
var settings = [
    true,
    true,
    false,
    1,
    true,
    false,
    8,
    10,
    20,
    false,
    false,
    false,
    false,
    true,
    [
        true,
        true,
        true,
        true
    ] //User controlled channel enables.
];
module.exports = settings;

},{}],"dESyW":[function(require,module,exports) {
var saveState = function() {
    return [
        this.fromTypedArray(this.ROM),
        this.inBootstrap,
        this.registerA,
        this.FZero,
        this.FSubtract,
        this.FHalfCarry,
        this.FCarry,
        this.registerB,
        this.registerC,
        this.registerD,
        this.registerE,
        this.registersHL,
        this.stackPointer,
        this.programCounter,
        this.halt,
        this.IME,
        this.hdmaRunning,
        this.CPUTicks,
        this.doubleSpeedShifter,
        this.fromTypedArray(this.memory),
        this.fromTypedArray(this.MBCRam),
        this.fromTypedArray(this.VRAM),
        this.currVRAMBank,
        this.fromTypedArray(this.GBCMemory),
        this.MBC1Mode,
        this.MBCRAMBanksEnabled,
        this.currMBCRAMBank,
        this.currMBCRAMBankPosition,
        this.cGBC,
        this.gbcRamBank,
        this.gbcRamBankPosition,
        this.ROMBank1offs,
        this.currentROMBank,
        this.cartridgeType,
        this.name,
        this.gameCode,
        this.modeSTAT,
        this.LYCMatchTriggerSTAT,
        this.mode2TriggerSTAT,
        this.mode1TriggerSTAT,
        this.mode0TriggerSTAT,
        this.LCDisOn,
        this.gfxWindowCHRBankPosition,
        this.gfxWindowDisplay,
        this.gfxSpriteShow,
        this.gfxSpriteNormalHeight,
        this.gfxBackgroundCHRBankPosition,
        this.gfxBackgroundBankOffset,
        this.TIMAEnabled,
        this.DIVTicks,
        this.LCDTicks,
        this.timerTicks,
        this.TACClocker,
        this.serialTimer,
        this.serialShiftTimer,
        this.serialShiftTimerAllocated,
        this.IRQEnableDelay,
        this.lastIteration,
        this.cMBC1,
        this.cMBC2,
        this.cMBC3,
        this.cMBC5,
        this.cMBC7,
        this.cSRAM,
        this.cMMMO1,
        this.cRUMBLE,
        this.cCamera,
        this.cTAMA5,
        this.cHuC3,
        this.cHuC1,
        this.drewBlank,
        this.fromTypedArray(this.frameBuffer),
        this.bgEnabled,
        this.BGPriorityEnabled,
        this.channel1FrequencyTracker,
        this.channel1FrequencyCounter,
        this.channel1totalLength,
        this.channel1envelopeVolume,
        this.channel1envelopeType,
        this.channel1envelopeSweeps,
        this.channel1envelopeSweepsLast,
        this.channel1consecutive,
        this.channel1frequency,
        this.channel1SweepFault,
        this.channel1ShadowFrequency,
        this.channel1timeSweep,
        this.channel1lastTimeSweep,
        this.channel1Swept,
        this.channel1frequencySweepDivider,
        this.channel1decreaseSweep,
        this.channel2FrequencyTracker,
        this.channel2FrequencyCounter,
        this.channel2totalLength,
        this.channel2envelopeVolume,
        this.channel2envelopeType,
        this.channel2envelopeSweeps,
        this.channel2envelopeSweepsLast,
        this.channel2consecutive,
        this.channel2frequency,
        this.channel3canPlay,
        this.channel3totalLength,
        this.channel3patternType,
        this.channel3frequency,
        this.channel3consecutive,
        this.fromTypedArray(this.channel3PCM),
        this.channel4FrequencyPeriod,
        this.channel4lastSampleLookup,
        this.channel4totalLength,
        this.channel4envelopeVolume,
        this.channel4currentVolume,
        this.channel4envelopeType,
        this.channel4envelopeSweeps,
        this.channel4envelopeSweepsLast,
        this.channel4consecutive,
        this.channel4BitRange,
        this.soundMasterEnabled,
        this.VinLeftChannelMasterVolume,
        this.VinRightChannelMasterVolume,
        this.leftChannel1,
        this.leftChannel2,
        this.leftChannel3,
        this.leftChannel4,
        this.rightChannel1,
        this.rightChannel2,
        this.rightChannel3,
        this.rightChannel4,
        this.channel1currentSampleLeft,
        this.channel1currentSampleRight,
        this.channel2currentSampleLeft,
        this.channel2currentSampleRight,
        this.channel3currentSampleLeft,
        this.channel3currentSampleRight,
        this.channel4currentSampleLeft,
        this.channel4currentSampleRight,
        this.channel1currentSampleLeftSecondary,
        this.channel1currentSampleRightSecondary,
        this.channel2currentSampleLeftSecondary,
        this.channel2currentSampleRightSecondary,
        this.channel3currentSampleLeftSecondary,
        this.channel3currentSampleRightSecondary,
        this.channel4currentSampleLeftSecondary,
        this.channel4currentSampleRightSecondary,
        this.channel1currentSampleLeftTrimary,
        this.channel1currentSampleRightTrimary,
        this.channel2currentSampleLeftTrimary,
        this.channel2currentSampleRightTrimary,
        this.mixerOutputCache,
        this.channel1DutyTracker,
        this.channel1CachedDuty,
        this.channel2DutyTracker,
        this.channel2CachedDuty,
        this.channel1Enabled,
        this.channel2Enabled,
        this.channel3Enabled,
        this.channel4Enabled,
        this.sequencerClocks,
        this.sequencePosition,
        this.channel3Counter,
        this.channel4Counter,
        this.cachedChannel3Sample,
        this.cachedChannel4Sample,
        this.channel3FrequencyPeriod,
        this.channel3lastSampleLookup,
        this.actualScanLine,
        this.lastUnrenderedLine,
        this.queuedScanLines,
        this.RTCisLatched,
        this.latchedSeconds,
        this.latchedMinutes,
        this.latchedHours,
        this.latchedLDays,
        this.latchedHDays,
        this.RTCSeconds,
        this.RTCMinutes,
        this.RTCHours,
        this.RTCDays,
        this.RTCDayOverFlow,
        this.RTCHALT,
        this.usedBootROM,
        this.skipPCIncrement,
        this.STATTracker,
        this.gbcRamBankPositionECHO,
        this.numRAMBanks,
        this.windowY,
        this.windowX,
        this.fromTypedArray(this.gbcOBJRawPalette),
        this.fromTypedArray(this.gbcBGRawPalette),
        this.fromTypedArray(this.gbOBJPalette),
        this.fromTypedArray(this.gbBGPalette),
        this.fromTypedArray(this.gbcOBJPalette),
        this.fromTypedArray(this.gbcBGPalette),
        this.fromTypedArray(this.gbBGColorizedPalette),
        this.fromTypedArray(this.gbOBJColorizedPalette),
        this.fromTypedArray(this.cachedBGPaletteConversion),
        this.fromTypedArray(this.cachedOBJPaletteConversion),
        this.fromTypedArray(this.BGCHRBank1),
        this.fromTypedArray(this.BGCHRBank2),
        this.haltPostClocks,
        this.interruptsRequested,
        this.interruptsEnabled,
        this.remainingClocks,
        this.colorizedGBPalettes,
        this.backgroundY,
        this.backgroundX,
        this.CPUStopped,
        this.audioClocksUntilNextEvent,
        this.audioClocksUntilNextEventCounter
    ];
};
var returnFromState = function(returnedFrom) {
    var index = 0;
    var state = returnedFrom.slice(0);
    this.ROM = this.toTypedArray(state[index++], "uint8");
    this.ROMBankEdge = Math.floor(this.ROM.length / 0x4000);
    this.inBootstrap = state[index++];
    this.registerA = state[index++];
    this.FZero = state[index++];
    this.FSubtract = state[index++];
    this.FHalfCarry = state[index++];
    this.FCarry = state[index++];
    this.registerB = state[index++];
    this.registerC = state[index++];
    this.registerD = state[index++];
    this.registerE = state[index++];
    this.registersHL = state[index++];
    this.stackPointer = state[index++];
    this.programCounter = state[index++];
    this.halt = state[index++];
    this.IME = state[index++];
    this.hdmaRunning = state[index++];
    this.CPUTicks = state[index++];
    this.doubleSpeedShifter = state[index++];
    this.memory = this.toTypedArray(state[index++], "uint8");
    this.MBCRam = this.toTypedArray(state[index++], "uint8");
    this.VRAM = this.toTypedArray(state[index++], "uint8");
    this.currVRAMBank = state[index++];
    this.GBCMemory = this.toTypedArray(state[index++], "uint8");
    this.MBC1Mode = state[index++];
    this.MBCRAMBanksEnabled = state[index++];
    this.currMBCRAMBank = state[index++];
    this.currMBCRAMBankPosition = state[index++];
    this.cGBC = state[index++];
    this.gbcRamBank = state[index++];
    this.gbcRamBankPosition = state[index++];
    this.ROMBank1offs = state[index++];
    this.currentROMBank = state[index++];
    this.cartridgeType = state[index++];
    this.name = state[index++];
    this.gameCode = state[index++];
    this.modeSTAT = state[index++];
    this.LYCMatchTriggerSTAT = state[index++];
    this.mode2TriggerSTAT = state[index++];
    this.mode1TriggerSTAT = state[index++];
    this.mode0TriggerSTAT = state[index++];
    this.LCDisOn = state[index++];
    this.gfxWindowCHRBankPosition = state[index++];
    this.gfxWindowDisplay = state[index++];
    this.gfxSpriteShow = state[index++];
    this.gfxSpriteNormalHeight = state[index++];
    this.gfxBackgroundCHRBankPosition = state[index++];
    this.gfxBackgroundBankOffset = state[index++];
    this.TIMAEnabled = state[index++];
    this.DIVTicks = state[index++];
    this.LCDTicks = state[index++];
    this.timerTicks = state[index++];
    this.TACClocker = state[index++];
    this.serialTimer = state[index++];
    this.serialShiftTimer = state[index++];
    this.serialShiftTimerAllocated = state[index++];
    this.IRQEnableDelay = state[index++];
    this.lastIteration = state[index++];
    this.cMBC1 = state[index++];
    this.cMBC2 = state[index++];
    this.cMBC3 = state[index++];
    this.cMBC5 = state[index++];
    this.cMBC7 = state[index++];
    this.cSRAM = state[index++];
    this.cMMMO1 = state[index++];
    this.cRUMBLE = state[index++];
    this.cCamera = state[index++];
    this.cTAMA5 = state[index++];
    this.cHuC3 = state[index++];
    this.cHuC1 = state[index++];
    this.drewBlank = state[index++];
    this.frameBuffer = this.toTypedArray(state[index++], "int32");
    this.bgEnabled = state[index++];
    this.BGPriorityEnabled = state[index++];
    this.channel1FrequencyTracker = state[index++];
    this.channel1FrequencyCounter = state[index++];
    this.channel1totalLength = state[index++];
    this.channel1envelopeVolume = state[index++];
    this.channel1envelopeType = state[index++];
    this.channel1envelopeSweeps = state[index++];
    this.channel1envelopeSweepsLast = state[index++];
    this.channel1consecutive = state[index++];
    this.channel1frequency = state[index++];
    this.channel1SweepFault = state[index++];
    this.channel1ShadowFrequency = state[index++];
    this.channel1timeSweep = state[index++];
    this.channel1lastTimeSweep = state[index++];
    this.channel1Swept = state[index++];
    this.channel1frequencySweepDivider = state[index++];
    this.channel1decreaseSweep = state[index++];
    this.channel2FrequencyTracker = state[index++];
    this.channel2FrequencyCounter = state[index++];
    this.channel2totalLength = state[index++];
    this.channel2envelopeVolume = state[index++];
    this.channel2envelopeType = state[index++];
    this.channel2envelopeSweeps = state[index++];
    this.channel2envelopeSweepsLast = state[index++];
    this.channel2consecutive = state[index++];
    this.channel2frequency = state[index++];
    this.channel3canPlay = state[index++];
    this.channel3totalLength = state[index++];
    this.channel3patternType = state[index++];
    this.channel3frequency = state[index++];
    this.channel3consecutive = state[index++];
    this.channel3PCM = this.toTypedArray(state[index++], "int8");
    this.channel4FrequencyPeriod = state[index++];
    this.channel4lastSampleLookup = state[index++];
    this.channel4totalLength = state[index++];
    this.channel4envelopeVolume = state[index++];
    this.channel4currentVolume = state[index++];
    this.channel4envelopeType = state[index++];
    this.channel4envelopeSweeps = state[index++];
    this.channel4envelopeSweepsLast = state[index++];
    this.channel4consecutive = state[index++];
    this.channel4BitRange = state[index++];
    this.soundMasterEnabled = state[index++];
    this.VinLeftChannelMasterVolume = state[index++];
    this.VinRightChannelMasterVolume = state[index++];
    this.leftChannel1 = state[index++];
    this.leftChannel2 = state[index++];
    this.leftChannel3 = state[index++];
    this.leftChannel4 = state[index++];
    this.rightChannel1 = state[index++];
    this.rightChannel2 = state[index++];
    this.rightChannel3 = state[index++];
    this.rightChannel4 = state[index++];
    this.channel1currentSampleLeft = state[index++];
    this.channel1currentSampleRight = state[index++];
    this.channel2currentSampleLeft = state[index++];
    this.channel2currentSampleRight = state[index++];
    this.channel3currentSampleLeft = state[index++];
    this.channel3currentSampleRight = state[index++];
    this.channel4currentSampleLeft = state[index++];
    this.channel4currentSampleRight = state[index++];
    this.channel1currentSampleLeftSecondary = state[index++];
    this.channel1currentSampleRightSecondary = state[index++];
    this.channel2currentSampleLeftSecondary = state[index++];
    this.channel2currentSampleRightSecondary = state[index++];
    this.channel3currentSampleLeftSecondary = state[index++];
    this.channel3currentSampleRightSecondary = state[index++];
    this.channel4currentSampleLeftSecondary = state[index++];
    this.channel4currentSampleRightSecondary = state[index++];
    this.channel1currentSampleLeftTrimary = state[index++];
    this.channel1currentSampleRightTrimary = state[index++];
    this.channel2currentSampleLeftTrimary = state[index++];
    this.channel2currentSampleRightTrimary = state[index++];
    this.mixerOutputCache = state[index++];
    this.channel1DutyTracker = state[index++];
    this.channel1CachedDuty = state[index++];
    this.channel2DutyTracker = state[index++];
    this.channel2CachedDuty = state[index++];
    this.channel1Enabled = state[index++];
    this.channel2Enabled = state[index++];
    this.channel3Enabled = state[index++];
    this.channel4Enabled = state[index++];
    this.sequencerClocks = state[index++];
    this.sequencePosition = state[index++];
    this.channel3Counter = state[index++];
    this.channel4Counter = state[index++];
    this.cachedChannel3Sample = state[index++];
    this.cachedChannel4Sample = state[index++];
    this.channel3FrequencyPeriod = state[index++];
    this.channel3lastSampleLookup = state[index++];
    this.actualScanLine = state[index++];
    this.lastUnrenderedLine = state[index++];
    this.queuedScanLines = state[index++];
    this.RTCisLatched = state[index++];
    this.latchedSeconds = state[index++];
    this.latchedMinutes = state[index++];
    this.latchedHours = state[index++];
    this.latchedLDays = state[index++];
    this.latchedHDays = state[index++];
    this.RTCSeconds = state[index++];
    this.RTCMinutes = state[index++];
    this.RTCHours = state[index++];
    this.RTCDays = state[index++];
    this.RTCDayOverFlow = state[index++];
    this.RTCHALT = state[index++];
    this.usedBootROM = state[index++];
    this.skipPCIncrement = state[index++];
    this.STATTracker = state[index++];
    this.gbcRamBankPositionECHO = state[index++];
    this.numRAMBanks = state[index++];
    this.windowY = state[index++];
    this.windowX = state[index++];
    this.gbcOBJRawPalette = this.toTypedArray(state[index++], "uint8");
    this.gbcBGRawPalette = this.toTypedArray(state[index++], "uint8");
    this.gbOBJPalette = this.toTypedArray(state[index++], "int32");
    this.gbBGPalette = this.toTypedArray(state[index++], "int32");
    this.gbcOBJPalette = this.toTypedArray(state[index++], "int32");
    this.gbcBGPalette = this.toTypedArray(state[index++], "int32");
    this.gbBGColorizedPalette = this.toTypedArray(state[index++], "int32");
    this.gbOBJColorizedPalette = this.toTypedArray(state[index++], "int32");
    this.cachedBGPaletteConversion = this.toTypedArray(state[index++], "int32");
    this.cachedOBJPaletteConversion = this.toTypedArray(state[index++], "int32");
    this.BGCHRBank1 = this.toTypedArray(state[index++], "uint8");
    this.BGCHRBank2 = this.toTypedArray(state[index++], "uint8");
    this.haltPostClocks = state[index++];
    this.interruptsRequested = state[index++];
    this.interruptsEnabled = state[index++];
    this.checkIRQMatching();
    this.remainingClocks = state[index++];
    this.colorizedGBPalettes = state[index++];
    this.backgroundY = state[index++];
    this.backgroundX = state[index++];
    this.CPUStopped = state[index++];
    this.audioClocksUntilNextEvent = state[index++];
    this.audioClocksUntilNextEventCounter = state[index];
    this.fromSaveState = true;
    this.TICKTable = this.toTypedArray(this.TICKTable, "uint8");
    this.SecondaryTICKTable = this.toTypedArray(this.SecondaryTICKTable, "uint8");
    this.initializeReferencesFromSaveState();
    this.memoryReadJumpCompile();
    this.memoryWriteJumpCompile();
    this.initLCD();
    this.initSound();
    this.noiseSampleTable = this.channel4BitRange == 0x7FFF ? this.LSFR15Table : this.LSFR7Table;
    this.channel4VolumeShifter = this.channel4BitRange == 0x7FFF ? 15 : 7;
};
module.exports.saveState = saveState;
module.exports.returnFromState = returnFromState;

},{}],"6ddap":[function(require,module,exports) {
//Dump of the post-BOOT I/O register state (From gambatte):
module.exports = [
    0x0F,
    0x00,
    0x7C,
    0xFF,
    0x00,
    0x00,
    0x00,
    0xF8,
    0xFF,
    0xFF,
    0xFF,
    0xFF,
    0xFF,
    0xFF,
    0xFF,
    0x01,
    0x80,
    0xBF,
    0xF3,
    0xFF,
    0xBF,
    0xFF,
    0x3F,
    0x00,
    0xFF,
    0xBF,
    0x7F,
    0xFF,
    0x9F,
    0xFF,
    0xBF,
    0xFF,
    0xFF,
    0x00,
    0x00,
    0xBF,
    0x77,
    0xF3,
    0xF1,
    0xFF,
    0xFF,
    0xFF,
    0xFF,
    0xFF,
    0xFF,
    0xFF,
    0xFF,
    0xFF,
    0x00,
    0xFF,
    0x00,
    0xFF,
    0x00,
    0xFF,
    0x00,
    0xFF,
    0x00,
    0xFF,
    0x00,
    0xFF,
    0x00,
    0xFF,
    0x00,
    0xFF,
    0x91,
    0x80,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0xFC,
    0x00,
    0x00,
    0x00,
    0x00,
    0xFF,
    0x7E,
    0xFF,
    0xFE,
    0xFF,
    0xFF,
    0xFF,
    0xFF,
    0xFF,
    0xFF,
    0x3E,
    0xFF,
    0xFF,
    0xFF,
    0xFF,
    0xFF,
    0xFF,
    0xFF,
    0xFF,
    0xFF,
    0xFF,
    0xFF,
    0xFF,
    0xFF,
    0xFF,
    0xFF,
    0xFF,
    0xFF,
    0xC0,
    0xFF,
    0xC1,
    0x00,
    0xFE,
    0xFF,
    0xFF,
    0xFF,
    0xF8,
    0xFF,
    0x00,
    0x00,
    0x00,
    0x8F,
    0x00,
    0x00,
    0xFF,
    0xFF,
    0xFF,
    0xFF,
    0xFF,
    0xFF,
    0xFF,
    0xFF,
    0xCE,
    0xED,
    0x66,
    0x66,
    0xCC,
    0x0D,
    0x00,
    0x0B,
    0x03,
    0x73,
    0x00,
    0x83,
    0x00,
    0x0C,
    0x00,
    0x0D,
    0x00,
    0x08,
    0x11,
    0x1F,
    0x88,
    0x89,
    0x00,
    0x0E,
    0xDC,
    0xCC,
    0x6E,
    0xE6,
    0xDD,
    0xDD,
    0xD9,
    0x99,
    0xBB,
    0xBB,
    0x67,
    0x63,
    0x6E,
    0x0E,
    0xEC,
    0xCC,
    0xDD,
    0xDC,
    0x99,
    0x9F,
    0xBB,
    0xB9,
    0x33,
    0x3E,
    0x45,
    0xEC,
    0x52,
    0xFA,
    0x08,
    0xB7,
    0x07,
    0x5D,
    0x01,
    0xFD,
    0xC0,
    0xFF,
    0x08,
    0xFC,
    0x00,
    0xE5,
    0x0B,
    0xF8,
    0xC2,
    0xCE,
    0xF4,
    0xF9,
    0x0F,
    0x7F,
    0x45,
    0x6D,
    0x3D,
    0xFE,
    0x46,
    0x97,
    0x33,
    0x5E,
    0x08,
    0xEF,
    0xF1,
    0xFF,
    0x86,
    0x83,
    0x24,
    0x74,
    0x12,
    0xFC,
    0x00,
    0x9F,
    0xB4,
    0xB7,
    0x06,
    0xD5,
    0xD0,
    0x7A,
    0x00,
    0x9E,
    0x04,
    0x5F,
    0x41,
    0x2F,
    0x1D,
    0x77,
    0x36,
    0x75,
    0x81,
    0xAA,
    0x70,
    0x3A,
    0x98,
    0xD1,
    0x71,
    0x02,
    0x4D,
    0x01,
    0xC1,
    0xFF,
    0x0D,
    0x00,
    0xD3,
    0x05,
    0xF9,
    0x00,
    0x0B,
    0x00
];

},{}],"bNXaq":[function(require,module,exports) {
var OPCODE = [
    //NOP
    //#0x00:
    function(parentObj) {
    //Do Nothing...
    },
    //LD BC, nn
    //#0x01:
    function(parentObj) {
        parentObj.registerC = parentObj.memoryReader[parentObj.programCounter](parentObj, parentObj.programCounter);
        parentObj.registerB = parentObj.memoryRead(parentObj.programCounter + 1 & 0xFFFF);
        parentObj.programCounter = parentObj.programCounter + 2 & 0xFFFF;
    },
    //LD (BC), A
    //#0x02:
    function(parentObj) {
        parentObj.memoryWrite(parentObj.registerB << 8 | parentObj.registerC, parentObj.registerA);
    },
    //INC BC
    //#0x03:
    function(parentObj) {
        var temp_var = (parentObj.registerB << 8 | parentObj.registerC) + 1;
        parentObj.registerB = temp_var >> 8 & 0xFF;
        parentObj.registerC = temp_var & 0xFF;
    },
    //INC B
    //#0x04:
    function(parentObj) {
        parentObj.registerB = parentObj.registerB + 1 & 0xFF;
        parentObj.FZero = parentObj.registerB == 0;
        parentObj.FHalfCarry = (parentObj.registerB & 0xF) == 0;
        parentObj.FSubtract = false;
    },
    //DEC B
    //#0x05:
    function(parentObj) {
        parentObj.registerB = parentObj.registerB - 1 & 0xFF;
        parentObj.FZero = parentObj.registerB == 0;
        parentObj.FHalfCarry = (parentObj.registerB & 0xF) == 0xF;
        parentObj.FSubtract = true;
    },
    //LD B, n
    //#0x06:
    function(parentObj) {
        parentObj.registerB = parentObj.memoryReader[parentObj.programCounter](parentObj, parentObj.programCounter);
        parentObj.programCounter = parentObj.programCounter + 1 & 0xFFFF;
    },
    //RLCA
    //#0x07:
    function(parentObj) {
        parentObj.FCarry = parentObj.registerA > 0x7F;
        parentObj.registerA = parentObj.registerA << 1 & 0xFF | parentObj.registerA >> 7;
        parentObj.FZero = parentObj.FSubtract = parentObj.FHalfCarry = false;
    },
    //LD (nn), SP
    //#0x08:
    function(parentObj) {
        var temp_var = parentObj.memoryRead(parentObj.programCounter + 1 & 0xFFFF) << 8 | parentObj.memoryReader[parentObj.programCounter](parentObj, parentObj.programCounter);
        parentObj.programCounter = parentObj.programCounter + 2 & 0xFFFF;
        parentObj.memoryWrite(temp_var, parentObj.stackPointer & 0xFF);
        parentObj.memoryWrite(temp_var + 1 & 0xFFFF, parentObj.stackPointer >> 8);
    },
    //ADD HL, BC
    //#0x09:
    function(parentObj) {
        var dirtySum = parentObj.registersHL + (parentObj.registerB << 8 | parentObj.registerC);
        parentObj.FHalfCarry = (parentObj.registersHL & 0xFFF) > (dirtySum & 0xFFF);
        parentObj.FCarry = dirtySum > 0xFFFF;
        parentObj.registersHL = dirtySum & 0xFFFF;
        parentObj.FSubtract = false;
    },
    //LD A, (BC)
    //#0x0A:
    function(parentObj) {
        parentObj.registerA = parentObj.memoryRead(parentObj.registerB << 8 | parentObj.registerC);
    },
    //DEC BC
    //#0x0B:
    function(parentObj) {
        var temp_var = (parentObj.registerB << 8 | parentObj.registerC) - 1 & 0xFFFF;
        parentObj.registerB = temp_var >> 8;
        parentObj.registerC = temp_var & 0xFF;
    },
    //INC C
    //#0x0C:
    function(parentObj) {
        parentObj.registerC = parentObj.registerC + 1 & 0xFF;
        parentObj.FZero = parentObj.registerC == 0;
        parentObj.FHalfCarry = (parentObj.registerC & 0xF) == 0;
        parentObj.FSubtract = false;
    },
    //DEC C
    //#0x0D:
    function(parentObj) {
        parentObj.registerC = parentObj.registerC - 1 & 0xFF;
        parentObj.FZero = parentObj.registerC == 0;
        parentObj.FHalfCarry = (parentObj.registerC & 0xF) == 0xF;
        parentObj.FSubtract = true;
    },
    //LD C, n
    //#0x0E:
    function(parentObj) {
        parentObj.registerC = parentObj.memoryReader[parentObj.programCounter](parentObj, parentObj.programCounter);
        parentObj.programCounter = parentObj.programCounter + 1 & 0xFFFF;
    },
    //RRCA
    //#0x0F:
    function(parentObj) {
        parentObj.registerA = parentObj.registerA >> 1 | (parentObj.registerA & 1) << 7;
        parentObj.FCarry = parentObj.registerA > 0x7F;
        parentObj.FZero = parentObj.FSubtract = parentObj.FHalfCarry = false;
    },
    //STOP
    //#0x10:
    function(parentObj) {
        if (parentObj.cGBC) {
            if ((parentObj.memory[0xFF4D] & 0x01) == 0x01) {
                if (parentObj.memory[0xFF4D] > 0x7F) {
                    // console.log("Going into single clock speed mode.", 0);
                    parentObj.doubleSpeedShifter = 0;
                    parentObj.memory[0xFF4D] &= 0x7F; //Clear the double speed mode flag.
                } else {
                    // console.log("Going into double clock speed mode.", 0);
                    parentObj.doubleSpeedShifter = 1;
                    parentObj.memory[0xFF4D] |= 0x80; //Set the double speed mode flag.
                }
                parentObj.memory[0xFF4D] &= 0xFE; //Reset the request bit.
            } else parentObj.handleSTOP();
        } else parentObj.handleSTOP();
    },
    //LD DE, nn
    //#0x11:
    function(parentObj) {
        parentObj.registerE = parentObj.memoryReader[parentObj.programCounter](parentObj, parentObj.programCounter);
        parentObj.registerD = parentObj.memoryRead(parentObj.programCounter + 1 & 0xFFFF);
        parentObj.programCounter = parentObj.programCounter + 2 & 0xFFFF;
    },
    //LD (DE), A
    //#0x12:
    function(parentObj) {
        parentObj.memoryWrite(parentObj.registerD << 8 | parentObj.registerE, parentObj.registerA);
    },
    //INC DE
    //#0x13:
    function(parentObj) {
        var temp_var = (parentObj.registerD << 8 | parentObj.registerE) + 1;
        parentObj.registerD = temp_var >> 8 & 0xFF;
        parentObj.registerE = temp_var & 0xFF;
    },
    //INC D
    //#0x14:
    function(parentObj) {
        parentObj.registerD = parentObj.registerD + 1 & 0xFF;
        parentObj.FZero = parentObj.registerD == 0;
        parentObj.FHalfCarry = (parentObj.registerD & 0xF) == 0;
        parentObj.FSubtract = false;
    },
    //DEC D
    //#0x15:
    function(parentObj) {
        parentObj.registerD = parentObj.registerD - 1 & 0xFF;
        parentObj.FZero = parentObj.registerD == 0;
        parentObj.FHalfCarry = (parentObj.registerD & 0xF) == 0xF;
        parentObj.FSubtract = true;
    },
    //LD D, n
    //#0x16:
    function(parentObj) {
        parentObj.registerD = parentObj.memoryReader[parentObj.programCounter](parentObj, parentObj.programCounter);
        parentObj.programCounter = parentObj.programCounter + 1 & 0xFFFF;
    },
    //RLA
    //#0x17:
    function(parentObj) {
        var carry_flag = parentObj.FCarry ? 1 : 0;
        parentObj.FCarry = parentObj.registerA > 0x7F;
        parentObj.registerA = parentObj.registerA << 1 & 0xFF | carry_flag;
        parentObj.FZero = parentObj.FSubtract = parentObj.FHalfCarry = false;
    },
    //JR n
    //#0x18:
    function(parentObj) {
        parentObj.programCounter = parentObj.programCounter + (parentObj.memoryReader[parentObj.programCounter](parentObj, parentObj.programCounter) << 24 >> 24) + 1 & 0xFFFF;
    },
    //ADD HL, DE
    //#0x19:
    function(parentObj) {
        var dirtySum = parentObj.registersHL + (parentObj.registerD << 8 | parentObj.registerE);
        parentObj.FHalfCarry = (parentObj.registersHL & 0xFFF) > (dirtySum & 0xFFF);
        parentObj.FCarry = dirtySum > 0xFFFF;
        parentObj.registersHL = dirtySum & 0xFFFF;
        parentObj.FSubtract = false;
    },
    //LD A, (DE)
    //#0x1A:
    function(parentObj) {
        parentObj.registerA = parentObj.memoryRead(parentObj.registerD << 8 | parentObj.registerE);
    },
    //DEC DE
    //#0x1B:
    function(parentObj) {
        var temp_var = (parentObj.registerD << 8 | parentObj.registerE) - 1 & 0xFFFF;
        parentObj.registerD = temp_var >> 8;
        parentObj.registerE = temp_var & 0xFF;
    },
    //INC E
    //#0x1C:
    function(parentObj) {
        parentObj.registerE = parentObj.registerE + 1 & 0xFF;
        parentObj.FZero = parentObj.registerE == 0;
        parentObj.FHalfCarry = (parentObj.registerE & 0xF) == 0;
        parentObj.FSubtract = false;
    },
    //DEC E
    //#0x1D:
    function(parentObj) {
        parentObj.registerE = parentObj.registerE - 1 & 0xFF;
        parentObj.FZero = parentObj.registerE == 0;
        parentObj.FHalfCarry = (parentObj.registerE & 0xF) == 0xF;
        parentObj.FSubtract = true;
    },
    //LD E, n
    //#0x1E:
    function(parentObj) {
        parentObj.registerE = parentObj.memoryReader[parentObj.programCounter](parentObj, parentObj.programCounter);
        parentObj.programCounter = parentObj.programCounter + 1 & 0xFFFF;
    },
    //RRA
    //#0x1F:
    function(parentObj) {
        var carry_flag = parentObj.FCarry ? 0x80 : 0;
        parentObj.FCarry = (parentObj.registerA & 1) == 1;
        parentObj.registerA = parentObj.registerA >> 1 | carry_flag;
        parentObj.FZero = parentObj.FSubtract = parentObj.FHalfCarry = false;
    },
    //JR NZ, n
    //#0x20:
    function(parentObj) {
        if (!parentObj.FZero) {
            parentObj.programCounter = parentObj.programCounter + (parentObj.memoryReader[parentObj.programCounter](parentObj, parentObj.programCounter) << 24 >> 24) + 1 & 0xFFFF;
            parentObj.CPUTicks += 4;
        } else parentObj.programCounter = parentObj.programCounter + 1 & 0xFFFF;
    },
    //LD HL, nn
    //#0x21:
    function(parentObj) {
        parentObj.registersHL = parentObj.memoryRead(parentObj.programCounter + 1 & 0xFFFF) << 8 | parentObj.memoryReader[parentObj.programCounter](parentObj, parentObj.programCounter);
        parentObj.programCounter = parentObj.programCounter + 2 & 0xFFFF;
    },
    //LDI (HL), A
    //#0x22:
    function(parentObj) {
        parentObj.memoryWriter[parentObj.registersHL](parentObj, parentObj.registersHL, parentObj.registerA);
        parentObj.registersHL = parentObj.registersHL + 1 & 0xFFFF;
    },
    //INC HL
    //#0x23:
    function(parentObj) {
        parentObj.registersHL = parentObj.registersHL + 1 & 0xFFFF;
    },
    //INC H
    //#0x24:
    function(parentObj) {
        var H = (parentObj.registersHL >> 8) + 1 & 0xFF;
        parentObj.FZero = H == 0;
        parentObj.FHalfCarry = (H & 0xF) == 0;
        parentObj.FSubtract = false;
        parentObj.registersHL = H << 8 | parentObj.registersHL & 0xFF;
    },
    //DEC H
    //#0x25:
    function(parentObj) {
        var H = (parentObj.registersHL >> 8) - 1 & 0xFF;
        parentObj.FZero = H == 0;
        parentObj.FHalfCarry = (H & 0xF) == 0xF;
        parentObj.FSubtract = true;
        parentObj.registersHL = H << 8 | parentObj.registersHL & 0xFF;
    },
    //LD H, n
    //#0x26:
    function(parentObj) {
        parentObj.registersHL = parentObj.memoryReader[parentObj.programCounter](parentObj, parentObj.programCounter) << 8 | parentObj.registersHL & 0xFF;
        parentObj.programCounter = parentObj.programCounter + 1 & 0xFFFF;
    },
    //DAA
    //#0x27:
    function(parentObj) {
        if (!parentObj.FSubtract) {
            if (parentObj.FCarry || parentObj.registerA > 0x99) {
                parentObj.registerA = parentObj.registerA + 0x60 & 0xFF;
                parentObj.FCarry = true;
            }
            if (parentObj.FHalfCarry || (parentObj.registerA & 0xF) > 0x9) {
                parentObj.registerA = parentObj.registerA + 0x06 & 0xFF;
                parentObj.FHalfCarry = false;
            }
        } else if (parentObj.FCarry && parentObj.FHalfCarry) {
            parentObj.registerA = parentObj.registerA + 0x9A & 0xFF;
            parentObj.FHalfCarry = false;
        } else if (parentObj.FCarry) parentObj.registerA = parentObj.registerA + 0xA0 & 0xFF;
        else if (parentObj.FHalfCarry) {
            parentObj.registerA = parentObj.registerA + 0xFA & 0xFF;
            parentObj.FHalfCarry = false;
        }
        parentObj.FZero = parentObj.registerA == 0;
    },
    //JR Z, n
    //#0x28:
    function(parentObj) {
        if (parentObj.FZero) {
            parentObj.programCounter = parentObj.programCounter + (parentObj.memoryReader[parentObj.programCounter](parentObj, parentObj.programCounter) << 24 >> 24) + 1 & 0xFFFF;
            parentObj.CPUTicks += 4;
        } else parentObj.programCounter = parentObj.programCounter + 1 & 0xFFFF;
    },
    //ADD HL, HL
    //#0x29:
    function(parentObj) {
        parentObj.FHalfCarry = (parentObj.registersHL & 0xFFF) > 0x7FF;
        parentObj.FCarry = parentObj.registersHL > 0x7FFF;
        parentObj.registersHL = parentObj.registersHL << 1 & 0xFFFF;
        parentObj.FSubtract = false;
    },
    //LDI A, (HL)
    //#0x2A:
    function(parentObj) {
        parentObj.registerA = parentObj.memoryReader[parentObj.registersHL](parentObj, parentObj.registersHL);
        parentObj.registersHL = parentObj.registersHL + 1 & 0xFFFF;
    },
    //DEC HL
    //#0x2B:
    function(parentObj) {
        parentObj.registersHL = parentObj.registersHL - 1 & 0xFFFF;
    },
    //INC L
    //#0x2C:
    function(parentObj) {
        var L = parentObj.registersHL + 1 & 0xFF;
        parentObj.FZero = L == 0;
        parentObj.FHalfCarry = (L & 0xF) == 0;
        parentObj.FSubtract = false;
        parentObj.registersHL = parentObj.registersHL & 0xFF00 | L;
    },
    //DEC L
    //#0x2D:
    function(parentObj) {
        var L = parentObj.registersHL - 1 & 0xFF;
        parentObj.FZero = L == 0;
        parentObj.FHalfCarry = (L & 0xF) == 0xF;
        parentObj.FSubtract = true;
        parentObj.registersHL = parentObj.registersHL & 0xFF00 | L;
    },
    //LD L, n
    //#0x2E:
    function(parentObj) {
        parentObj.registersHL = parentObj.registersHL & 0xFF00 | parentObj.memoryReader[parentObj.programCounter](parentObj, parentObj.programCounter);
        parentObj.programCounter = parentObj.programCounter + 1 & 0xFFFF;
    },
    //CPL
    //#0x2F:
    function(parentObj) {
        parentObj.registerA ^= 0xFF;
        parentObj.FSubtract = parentObj.FHalfCarry = true;
    },
    //JR NC, n
    //#0x30:
    function(parentObj) {
        if (!parentObj.FCarry) {
            parentObj.programCounter = parentObj.programCounter + (parentObj.memoryReader[parentObj.programCounter](parentObj, parentObj.programCounter) << 24 >> 24) + 1 & 0xFFFF;
            parentObj.CPUTicks += 4;
        } else parentObj.programCounter = parentObj.programCounter + 1 & 0xFFFF;
    },
    //LD SP, nn
    //#0x31:
    function(parentObj) {
        parentObj.stackPointer = parentObj.memoryRead(parentObj.programCounter + 1 & 0xFFFF) << 8 | parentObj.memoryReader[parentObj.programCounter](parentObj, parentObj.programCounter);
        parentObj.programCounter = parentObj.programCounter + 2 & 0xFFFF;
    },
    //LDD (HL), A
    //#0x32:
    function(parentObj) {
        parentObj.memoryWriter[parentObj.registersHL](parentObj, parentObj.registersHL, parentObj.registerA);
        parentObj.registersHL = parentObj.registersHL - 1 & 0xFFFF;
    },
    //INC SP
    //#0x33:
    function(parentObj) {
        parentObj.stackPointer = parentObj.stackPointer + 1 & 0xFFFF;
    },
    //INC (HL)
    //#0x34:
    function(parentObj) {
        var temp_var = parentObj.memoryReader[parentObj.registersHL](parentObj, parentObj.registersHL) + 1 & 0xFF;
        parentObj.FZero = temp_var == 0;
        parentObj.FHalfCarry = (temp_var & 0xF) == 0;
        parentObj.FSubtract = false;
        parentObj.memoryWriter[parentObj.registersHL](parentObj, parentObj.registersHL, temp_var);
    },
    //DEC (HL)
    //#0x35:
    function(parentObj) {
        var temp_var = parentObj.memoryReader[parentObj.registersHL](parentObj, parentObj.registersHL) - 1 & 0xFF;
        parentObj.FZero = temp_var == 0;
        parentObj.FHalfCarry = (temp_var & 0xF) == 0xF;
        parentObj.FSubtract = true;
        parentObj.memoryWriter[parentObj.registersHL](parentObj, parentObj.registersHL, temp_var);
    },
    //LD (HL), n
    //#0x36:
    function(parentObj) {
        parentObj.memoryWriter[parentObj.registersHL](parentObj, parentObj.registersHL, parentObj.memoryReader[parentObj.programCounter](parentObj, parentObj.programCounter));
        parentObj.programCounter = parentObj.programCounter + 1 & 0xFFFF;
    },
    //SCF
    //#0x37:
    function(parentObj) {
        parentObj.FCarry = true;
        parentObj.FSubtract = parentObj.FHalfCarry = false;
    },
    //JR C, n
    //#0x38:
    function(parentObj) {
        if (parentObj.FCarry) {
            parentObj.programCounter = parentObj.programCounter + (parentObj.memoryReader[parentObj.programCounter](parentObj, parentObj.programCounter) << 24 >> 24) + 1 & 0xFFFF;
            parentObj.CPUTicks += 4;
        } else parentObj.programCounter = parentObj.programCounter + 1 & 0xFFFF;
    },
    //ADD HL, SP
    //#0x39:
    function(parentObj) {
        var dirtySum = parentObj.registersHL + parentObj.stackPointer;
        parentObj.FHalfCarry = (parentObj.registersHL & 0xFFF) > (dirtySum & 0xFFF);
        parentObj.FCarry = dirtySum > 0xFFFF;
        parentObj.registersHL = dirtySum & 0xFFFF;
        parentObj.FSubtract = false;
    },
    //LDD A, (HL)
    //#0x3A:
    function(parentObj) {
        parentObj.registerA = parentObj.memoryReader[parentObj.registersHL](parentObj, parentObj.registersHL);
        parentObj.registersHL = parentObj.registersHL - 1 & 0xFFFF;
    },
    //DEC SP
    //#0x3B:
    function(parentObj) {
        parentObj.stackPointer = parentObj.stackPointer - 1 & 0xFFFF;
    },
    //INC A
    //#0x3C:
    function(parentObj) {
        parentObj.registerA = parentObj.registerA + 1 & 0xFF;
        parentObj.FZero = parentObj.registerA == 0;
        parentObj.FHalfCarry = (parentObj.registerA & 0xF) == 0;
        parentObj.FSubtract = false;
    },
    //DEC A
    //#0x3D:
    function(parentObj) {
        parentObj.registerA = parentObj.registerA - 1 & 0xFF;
        parentObj.FZero = parentObj.registerA == 0;
        parentObj.FHalfCarry = (parentObj.registerA & 0xF) == 0xF;
        parentObj.FSubtract = true;
    },
    //LD A, n
    //#0x3E:
    function(parentObj) {
        parentObj.registerA = parentObj.memoryReader[parentObj.programCounter](parentObj, parentObj.programCounter);
        parentObj.programCounter = parentObj.programCounter + 1 & 0xFFFF;
    },
    //CCF
    //#0x3F:
    function(parentObj) {
        parentObj.FCarry = !parentObj.FCarry;
        parentObj.FSubtract = parentObj.FHalfCarry = false;
    },
    //LD B, B
    //#0x40:
    function(parentObj) {
    //Do nothing...
    },
    //LD B, C
    //#0x41:
    function(parentObj) {
        parentObj.registerB = parentObj.registerC;
    },
    //LD B, D
    //#0x42:
    function(parentObj) {
        parentObj.registerB = parentObj.registerD;
    },
    //LD B, E
    //#0x43:
    function(parentObj) {
        parentObj.registerB = parentObj.registerE;
    },
    //LD B, H
    //#0x44:
    function(parentObj) {
        parentObj.registerB = parentObj.registersHL >> 8;
    },
    //LD B, L
    //#0x45:
    function(parentObj) {
        parentObj.registerB = parentObj.registersHL & 0xFF;
    },
    //LD B, (HL)
    //#0x46:
    function(parentObj) {
        parentObj.registerB = parentObj.memoryReader[parentObj.registersHL](parentObj, parentObj.registersHL);
    },
    //LD B, A
    //#0x47:
    function(parentObj) {
        parentObj.registerB = parentObj.registerA;
    },
    //LD C, B
    //#0x48:
    function(parentObj) {
        parentObj.registerC = parentObj.registerB;
    },
    //LD C, C
    //#0x49:
    function(parentObj) {
    //Do nothing...
    },
    //LD C, D
    //#0x4A:
    function(parentObj) {
        parentObj.registerC = parentObj.registerD;
    },
    //LD C, E
    //#0x4B:
    function(parentObj) {
        parentObj.registerC = parentObj.registerE;
    },
    //LD C, H
    //#0x4C:
    function(parentObj) {
        parentObj.registerC = parentObj.registersHL >> 8;
    },
    //LD C, L
    //#0x4D:
    function(parentObj) {
        parentObj.registerC = parentObj.registersHL & 0xFF;
    },
    //LD C, (HL)
    //#0x4E:
    function(parentObj) {
        parentObj.registerC = parentObj.memoryReader[parentObj.registersHL](parentObj, parentObj.registersHL);
    },
    //LD C, A
    //#0x4F:
    function(parentObj) {
        parentObj.registerC = parentObj.registerA;
    },
    //LD D, B
    //#0x50:
    function(parentObj) {
        parentObj.registerD = parentObj.registerB;
    },
    //LD D, C
    //#0x51:
    function(parentObj) {
        parentObj.registerD = parentObj.registerC;
    },
    //LD D, D
    //#0x52:
    function(parentObj) {
    //Do nothing...
    },
    //LD D, E
    //#0x53:
    function(parentObj) {
        parentObj.registerD = parentObj.registerE;
    },
    //LD D, H
    //#0x54:
    function(parentObj) {
        parentObj.registerD = parentObj.registersHL >> 8;
    },
    //LD D, L
    //#0x55:
    function(parentObj) {
        parentObj.registerD = parentObj.registersHL & 0xFF;
    },
    //LD D, (HL)
    //#0x56:
    function(parentObj) {
        parentObj.registerD = parentObj.memoryReader[parentObj.registersHL](parentObj, parentObj.registersHL);
    },
    //LD D, A
    //#0x57:
    function(parentObj) {
        parentObj.registerD = parentObj.registerA;
    },
    //LD E, B
    //#0x58:
    function(parentObj) {
        parentObj.registerE = parentObj.registerB;
    },
    //LD E, C
    //#0x59:
    function(parentObj) {
        parentObj.registerE = parentObj.registerC;
    },
    //LD E, D
    //#0x5A:
    function(parentObj) {
        parentObj.registerE = parentObj.registerD;
    },
    //LD E, E
    //#0x5B:
    function(parentObj) {
    //Do nothing...
    },
    //LD E, H
    //#0x5C:
    function(parentObj) {
        parentObj.registerE = parentObj.registersHL >> 8;
    },
    //LD E, L
    //#0x5D:
    function(parentObj) {
        parentObj.registerE = parentObj.registersHL & 0xFF;
    },
    //LD E, (HL)
    //#0x5E:
    function(parentObj) {
        parentObj.registerE = parentObj.memoryReader[parentObj.registersHL](parentObj, parentObj.registersHL);
    },
    //LD E, A
    //#0x5F:
    function(parentObj) {
        parentObj.registerE = parentObj.registerA;
    },
    //LD H, B
    //#0x60:
    function(parentObj) {
        parentObj.registersHL = parentObj.registerB << 8 | parentObj.registersHL & 0xFF;
    },
    //LD H, C
    //#0x61:
    function(parentObj) {
        parentObj.registersHL = parentObj.registerC << 8 | parentObj.registersHL & 0xFF;
    },
    //LD H, D
    //#0x62:
    function(parentObj) {
        parentObj.registersHL = parentObj.registerD << 8 | parentObj.registersHL & 0xFF;
    },
    //LD H, E
    //#0x63:
    function(parentObj) {
        parentObj.registersHL = parentObj.registerE << 8 | parentObj.registersHL & 0xFF;
    },
    //LD H, H
    //#0x64:
    function(parentObj) {
    //Do nothing...
    },
    //LD H, L
    //#0x65:
    function(parentObj) {
        parentObj.registersHL = (parentObj.registersHL & 0xFF) * 0x101;
    },
    //LD H, (HL)
    //#0x66:
    function(parentObj) {
        parentObj.registersHL = parentObj.memoryReader[parentObj.registersHL](parentObj, parentObj.registersHL) << 8 | parentObj.registersHL & 0xFF;
    },
    //LD H, A
    //#0x67:
    function(parentObj) {
        parentObj.registersHL = parentObj.registerA << 8 | parentObj.registersHL & 0xFF;
    },
    //LD L, B
    //#0x68:
    function(parentObj) {
        parentObj.registersHL = parentObj.registersHL & 0xFF00 | parentObj.registerB;
    },
    //LD L, C
    //#0x69:
    function(parentObj) {
        parentObj.registersHL = parentObj.registersHL & 0xFF00 | parentObj.registerC;
    },
    //LD L, D
    //#0x6A:
    function(parentObj) {
        parentObj.registersHL = parentObj.registersHL & 0xFF00 | parentObj.registerD;
    },
    //LD L, E
    //#0x6B:
    function(parentObj) {
        parentObj.registersHL = parentObj.registersHL & 0xFF00 | parentObj.registerE;
    },
    //LD L, H
    //#0x6C:
    function(parentObj) {
        parentObj.registersHL = parentObj.registersHL & 0xFF00 | parentObj.registersHL >> 8;
    },
    //LD L, L
    //#0x6D:
    function(parentObj) {
    //Do nothing...
    },
    //LD L, (HL)
    //#0x6E:
    function(parentObj) {
        parentObj.registersHL = parentObj.registersHL & 0xFF00 | parentObj.memoryReader[parentObj.registersHL](parentObj, parentObj.registersHL);
    },
    //LD L, A
    //#0x6F:
    function(parentObj) {
        parentObj.registersHL = parentObj.registersHL & 0xFF00 | parentObj.registerA;
    },
    //LD (HL), B
    //#0x70:
    function(parentObj) {
        parentObj.memoryWriter[parentObj.registersHL](parentObj, parentObj.registersHL, parentObj.registerB);
    },
    //LD (HL), C
    //#0x71:
    function(parentObj) {
        parentObj.memoryWriter[parentObj.registersHL](parentObj, parentObj.registersHL, parentObj.registerC);
    },
    //LD (HL), D
    //#0x72:
    function(parentObj) {
        parentObj.memoryWriter[parentObj.registersHL](parentObj, parentObj.registersHL, parentObj.registerD);
    },
    //LD (HL), E
    //#0x73:
    function(parentObj) {
        parentObj.memoryWriter[parentObj.registersHL](parentObj, parentObj.registersHL, parentObj.registerE);
    },
    //LD (HL), H
    //#0x74:
    function(parentObj) {
        parentObj.memoryWriter[parentObj.registersHL](parentObj, parentObj.registersHL, parentObj.registersHL >> 8);
    },
    //LD (HL), L
    //#0x75:
    function(parentObj) {
        parentObj.memoryWriter[parentObj.registersHL](parentObj, parentObj.registersHL, parentObj.registersHL & 0xFF);
    },
    //HALT
    //#0x76:
    function(parentObj) {
        //See if there's already an IRQ match:
        if ((parentObj.interruptsEnabled & parentObj.interruptsRequested & 0x1F) > 0) {
            if (!parentObj.cGBC && !parentObj.usedBootROM) //HALT bug in the DMG CPU model (Program Counter fails to increment for one instruction after HALT):
            parentObj.skipPCIncrement = true;
            else //CGB gets around the HALT PC bug by doubling the hidden NOP.
            parentObj.CPUTicks += 4;
        } else //CPU is stalled until the next IRQ match:
        parentObj.calculateHALTPeriod();
    },
    //LD (HL), A
    //#0x77:
    function(parentObj) {
        parentObj.memoryWriter[parentObj.registersHL](parentObj, parentObj.registersHL, parentObj.registerA);
    },
    //LD A, B
    //#0x78:
    function(parentObj) {
        parentObj.registerA = parentObj.registerB;
    },
    //LD A, C
    //#0x79:
    function(parentObj) {
        parentObj.registerA = parentObj.registerC;
    },
    //LD A, D
    //#0x7A:
    function(parentObj) {
        parentObj.registerA = parentObj.registerD;
    },
    //LD A, E
    //#0x7B:
    function(parentObj) {
        parentObj.registerA = parentObj.registerE;
    },
    //LD A, H
    //#0x7C:
    function(parentObj) {
        parentObj.registerA = parentObj.registersHL >> 8;
    },
    //LD A, L
    //#0x7D:
    function(parentObj) {
        parentObj.registerA = parentObj.registersHL & 0xFF;
    },
    //LD, A, (HL)
    //#0x7E:
    function(parentObj) {
        parentObj.registerA = parentObj.memoryReader[parentObj.registersHL](parentObj, parentObj.registersHL);
    },
    //LD A, A
    //#0x7F:
    function(parentObj) {
    //Do Nothing...
    },
    //ADD A, B
    //#0x80:
    function(parentObj) {
        var dirtySum = parentObj.registerA + parentObj.registerB;
        parentObj.FHalfCarry = (dirtySum & 0xF) < (parentObj.registerA & 0xF);
        parentObj.FCarry = dirtySum > 0xFF;
        parentObj.registerA = dirtySum & 0xFF;
        parentObj.FZero = parentObj.registerA == 0;
        parentObj.FSubtract = false;
    },
    //ADD A, C
    //#0x81:
    function(parentObj) {
        var dirtySum = parentObj.registerA + parentObj.registerC;
        parentObj.FHalfCarry = (dirtySum & 0xF) < (parentObj.registerA & 0xF);
        parentObj.FCarry = dirtySum > 0xFF;
        parentObj.registerA = dirtySum & 0xFF;
        parentObj.FZero = parentObj.registerA == 0;
        parentObj.FSubtract = false;
    },
    //ADD A, D
    //#0x82:
    function(parentObj) {
        var dirtySum = parentObj.registerA + parentObj.registerD;
        parentObj.FHalfCarry = (dirtySum & 0xF) < (parentObj.registerA & 0xF);
        parentObj.FCarry = dirtySum > 0xFF;
        parentObj.registerA = dirtySum & 0xFF;
        parentObj.FZero = parentObj.registerA == 0;
        parentObj.FSubtract = false;
    },
    //ADD A, E
    //#0x83:
    function(parentObj) {
        var dirtySum = parentObj.registerA + parentObj.registerE;
        parentObj.FHalfCarry = (dirtySum & 0xF) < (parentObj.registerA & 0xF);
        parentObj.FCarry = dirtySum > 0xFF;
        parentObj.registerA = dirtySum & 0xFF;
        parentObj.FZero = parentObj.registerA == 0;
        parentObj.FSubtract = false;
    },
    //ADD A, H
    //#0x84:
    function(parentObj) {
        var dirtySum = parentObj.registerA + (parentObj.registersHL >> 8);
        parentObj.FHalfCarry = (dirtySum & 0xF) < (parentObj.registerA & 0xF);
        parentObj.FCarry = dirtySum > 0xFF;
        parentObj.registerA = dirtySum & 0xFF;
        parentObj.FZero = parentObj.registerA == 0;
        parentObj.FSubtract = false;
    },
    //ADD A, L
    //#0x85:
    function(parentObj) {
        var dirtySum = parentObj.registerA + (parentObj.registersHL & 0xFF);
        parentObj.FHalfCarry = (dirtySum & 0xF) < (parentObj.registerA & 0xF);
        parentObj.FCarry = dirtySum > 0xFF;
        parentObj.registerA = dirtySum & 0xFF;
        parentObj.FZero = parentObj.registerA == 0;
        parentObj.FSubtract = false;
    },
    //ADD A, (HL)
    //#0x86:
    function(parentObj) {
        var dirtySum = parentObj.registerA + parentObj.memoryReader[parentObj.registersHL](parentObj, parentObj.registersHL);
        parentObj.FHalfCarry = (dirtySum & 0xF) < (parentObj.registerA & 0xF);
        parentObj.FCarry = dirtySum > 0xFF;
        parentObj.registerA = dirtySum & 0xFF;
        parentObj.FZero = parentObj.registerA == 0;
        parentObj.FSubtract = false;
    },
    //ADD A, A
    //#0x87:
    function(parentObj) {
        parentObj.FHalfCarry = (parentObj.registerA & 0x8) == 0x8;
        parentObj.FCarry = parentObj.registerA > 0x7F;
        parentObj.registerA = parentObj.registerA << 1 & 0xFF;
        parentObj.FZero = parentObj.registerA == 0;
        parentObj.FSubtract = false;
    },
    //ADC A, B
    //#0x88:
    function(parentObj) {
        var dirtySum = parentObj.registerA + parentObj.registerB + (parentObj.FCarry ? 1 : 0);
        parentObj.FHalfCarry = (parentObj.registerA & 0xF) + (parentObj.registerB & 0xF) + (parentObj.FCarry ? 1 : 0) > 0xF;
        parentObj.FCarry = dirtySum > 0xFF;
        parentObj.registerA = dirtySum & 0xFF;
        parentObj.FZero = parentObj.registerA == 0;
        parentObj.FSubtract = false;
    },
    //ADC A, C
    //#0x89:
    function(parentObj) {
        var dirtySum = parentObj.registerA + parentObj.registerC + (parentObj.FCarry ? 1 : 0);
        parentObj.FHalfCarry = (parentObj.registerA & 0xF) + (parentObj.registerC & 0xF) + (parentObj.FCarry ? 1 : 0) > 0xF;
        parentObj.FCarry = dirtySum > 0xFF;
        parentObj.registerA = dirtySum & 0xFF;
        parentObj.FZero = parentObj.registerA == 0;
        parentObj.FSubtract = false;
    },
    //ADC A, D
    //#0x8A:
    function(parentObj) {
        var dirtySum = parentObj.registerA + parentObj.registerD + (parentObj.FCarry ? 1 : 0);
        parentObj.FHalfCarry = (parentObj.registerA & 0xF) + (parentObj.registerD & 0xF) + (parentObj.FCarry ? 1 : 0) > 0xF;
        parentObj.FCarry = dirtySum > 0xFF;
        parentObj.registerA = dirtySum & 0xFF;
        parentObj.FZero = parentObj.registerA == 0;
        parentObj.FSubtract = false;
    },
    //ADC A, E
    //#0x8B:
    function(parentObj) {
        var dirtySum = parentObj.registerA + parentObj.registerE + (parentObj.FCarry ? 1 : 0);
        parentObj.FHalfCarry = (parentObj.registerA & 0xF) + (parentObj.registerE & 0xF) + (parentObj.FCarry ? 1 : 0) > 0xF;
        parentObj.FCarry = dirtySum > 0xFF;
        parentObj.registerA = dirtySum & 0xFF;
        parentObj.FZero = parentObj.registerA == 0;
        parentObj.FSubtract = false;
    },
    //ADC A, H
    //#0x8C:
    function(parentObj) {
        var tempValue = parentObj.registersHL >> 8;
        var dirtySum = parentObj.registerA + tempValue + (parentObj.FCarry ? 1 : 0);
        parentObj.FHalfCarry = (parentObj.registerA & 0xF) + (tempValue & 0xF) + (parentObj.FCarry ? 1 : 0) > 0xF;
        parentObj.FCarry = dirtySum > 0xFF;
        parentObj.registerA = dirtySum & 0xFF;
        parentObj.FZero = parentObj.registerA == 0;
        parentObj.FSubtract = false;
    },
    //ADC A, L
    //#0x8D:
    function(parentObj) {
        var tempValue = parentObj.registersHL & 0xFF;
        var dirtySum = parentObj.registerA + tempValue + (parentObj.FCarry ? 1 : 0);
        parentObj.FHalfCarry = (parentObj.registerA & 0xF) + (tempValue & 0xF) + (parentObj.FCarry ? 1 : 0) > 0xF;
        parentObj.FCarry = dirtySum > 0xFF;
        parentObj.registerA = dirtySum & 0xFF;
        parentObj.FZero = parentObj.registerA == 0;
        parentObj.FSubtract = false;
    },
    //ADC A, (HL)
    //#0x8E:
    function(parentObj) {
        var tempValue = parentObj.memoryReader[parentObj.registersHL](parentObj, parentObj.registersHL);
        var dirtySum = parentObj.registerA + tempValue + (parentObj.FCarry ? 1 : 0);
        parentObj.FHalfCarry = (parentObj.registerA & 0xF) + (tempValue & 0xF) + (parentObj.FCarry ? 1 : 0) > 0xF;
        parentObj.FCarry = dirtySum > 0xFF;
        parentObj.registerA = dirtySum & 0xFF;
        parentObj.FZero = parentObj.registerA == 0;
        parentObj.FSubtract = false;
    },
    //ADC A, A
    //#0x8F:
    function(parentObj) {
        //shift left register A one bit for some ops here as an optimization:
        var dirtySum = parentObj.registerA << 1 | (parentObj.FCarry ? 1 : 0);
        parentObj.FHalfCarry = (parentObj.registerA << 1 & 0x1E | (parentObj.FCarry ? 1 : 0)) > 0xF;
        parentObj.FCarry = dirtySum > 0xFF;
        parentObj.registerA = dirtySum & 0xFF;
        parentObj.FZero = parentObj.registerA == 0;
        parentObj.FSubtract = false;
    },
    //SUB A, B
    //#0x90:
    function(parentObj) {
        var dirtySum = parentObj.registerA - parentObj.registerB;
        parentObj.FHalfCarry = (parentObj.registerA & 0xF) < (dirtySum & 0xF);
        parentObj.FCarry = dirtySum < 0;
        parentObj.registerA = dirtySum & 0xFF;
        parentObj.FZero = dirtySum == 0;
        parentObj.FSubtract = true;
    },
    //SUB A, C
    //#0x91:
    function(parentObj) {
        var dirtySum = parentObj.registerA - parentObj.registerC;
        parentObj.FHalfCarry = (parentObj.registerA & 0xF) < (dirtySum & 0xF);
        parentObj.FCarry = dirtySum < 0;
        parentObj.registerA = dirtySum & 0xFF;
        parentObj.FZero = dirtySum == 0;
        parentObj.FSubtract = true;
    },
    //SUB A, D
    //#0x92:
    function(parentObj) {
        var dirtySum = parentObj.registerA - parentObj.registerD;
        parentObj.FHalfCarry = (parentObj.registerA & 0xF) < (dirtySum & 0xF);
        parentObj.FCarry = dirtySum < 0;
        parentObj.registerA = dirtySum & 0xFF;
        parentObj.FZero = dirtySum == 0;
        parentObj.FSubtract = true;
    },
    //SUB A, E
    //#0x93:
    function(parentObj) {
        var dirtySum = parentObj.registerA - parentObj.registerE;
        parentObj.FHalfCarry = (parentObj.registerA & 0xF) < (dirtySum & 0xF);
        parentObj.FCarry = dirtySum < 0;
        parentObj.registerA = dirtySum & 0xFF;
        parentObj.FZero = dirtySum == 0;
        parentObj.FSubtract = true;
    },
    //SUB A, H
    //#0x94:
    function(parentObj) {
        var dirtySum = parentObj.registerA - (parentObj.registersHL >> 8);
        parentObj.FHalfCarry = (parentObj.registerA & 0xF) < (dirtySum & 0xF);
        parentObj.FCarry = dirtySum < 0;
        parentObj.registerA = dirtySum & 0xFF;
        parentObj.FZero = dirtySum == 0;
        parentObj.FSubtract = true;
    },
    //SUB A, L
    //#0x95:
    function(parentObj) {
        var dirtySum = parentObj.registerA - (parentObj.registersHL & 0xFF);
        parentObj.FHalfCarry = (parentObj.registerA & 0xF) < (dirtySum & 0xF);
        parentObj.FCarry = dirtySum < 0;
        parentObj.registerA = dirtySum & 0xFF;
        parentObj.FZero = dirtySum == 0;
        parentObj.FSubtract = true;
    },
    //SUB A, (HL)
    //#0x96:
    function(parentObj) {
        var dirtySum = parentObj.registerA - parentObj.memoryReader[parentObj.registersHL](parentObj, parentObj.registersHL);
        parentObj.FHalfCarry = (parentObj.registerA & 0xF) < (dirtySum & 0xF);
        parentObj.FCarry = dirtySum < 0;
        parentObj.registerA = dirtySum & 0xFF;
        parentObj.FZero = dirtySum == 0;
        parentObj.FSubtract = true;
    },
    //SUB A, A
    //#0x97:
    function(parentObj) {
        //number - same number == 0
        parentObj.registerA = 0;
        parentObj.FHalfCarry = parentObj.FCarry = false;
        parentObj.FZero = parentObj.FSubtract = true;
    },
    //SBC A, B
    //#0x98:
    function(parentObj) {
        var dirtySum = parentObj.registerA - parentObj.registerB - (parentObj.FCarry ? 1 : 0);
        parentObj.FHalfCarry = (parentObj.registerA & 0xF) - (parentObj.registerB & 0xF) - (parentObj.FCarry ? 1 : 0) < 0;
        parentObj.FCarry = dirtySum < 0;
        parentObj.registerA = dirtySum & 0xFF;
        parentObj.FZero = parentObj.registerA == 0;
        parentObj.FSubtract = true;
    },
    //SBC A, C
    //#0x99:
    function(parentObj) {
        var dirtySum = parentObj.registerA - parentObj.registerC - (parentObj.FCarry ? 1 : 0);
        parentObj.FHalfCarry = (parentObj.registerA & 0xF) - (parentObj.registerC & 0xF) - (parentObj.FCarry ? 1 : 0) < 0;
        parentObj.FCarry = dirtySum < 0;
        parentObj.registerA = dirtySum & 0xFF;
        parentObj.FZero = parentObj.registerA == 0;
        parentObj.FSubtract = true;
    },
    //SBC A, D
    //#0x9A:
    function(parentObj) {
        var dirtySum = parentObj.registerA - parentObj.registerD - (parentObj.FCarry ? 1 : 0);
        parentObj.FHalfCarry = (parentObj.registerA & 0xF) - (parentObj.registerD & 0xF) - (parentObj.FCarry ? 1 : 0) < 0;
        parentObj.FCarry = dirtySum < 0;
        parentObj.registerA = dirtySum & 0xFF;
        parentObj.FZero = parentObj.registerA == 0;
        parentObj.FSubtract = true;
    },
    //SBC A, E
    //#0x9B:
    function(parentObj) {
        var dirtySum = parentObj.registerA - parentObj.registerE - (parentObj.FCarry ? 1 : 0);
        parentObj.FHalfCarry = (parentObj.registerA & 0xF) - (parentObj.registerE & 0xF) - (parentObj.FCarry ? 1 : 0) < 0;
        parentObj.FCarry = dirtySum < 0;
        parentObj.registerA = dirtySum & 0xFF;
        parentObj.FZero = parentObj.registerA == 0;
        parentObj.FSubtract = true;
    },
    //SBC A, H
    //#0x9C:
    function(parentObj) {
        var temp_var = parentObj.registersHL >> 8;
        var dirtySum = parentObj.registerA - temp_var - (parentObj.FCarry ? 1 : 0);
        parentObj.FHalfCarry = (parentObj.registerA & 0xF) - (temp_var & 0xF) - (parentObj.FCarry ? 1 : 0) < 0;
        parentObj.FCarry = dirtySum < 0;
        parentObj.registerA = dirtySum & 0xFF;
        parentObj.FZero = parentObj.registerA == 0;
        parentObj.FSubtract = true;
    },
    //SBC A, L
    //#0x9D:
    function(parentObj) {
        var dirtySum = parentObj.registerA - (parentObj.registersHL & 0xFF) - (parentObj.FCarry ? 1 : 0);
        parentObj.FHalfCarry = (parentObj.registerA & 0xF) - (parentObj.registersHL & 0xF) - (parentObj.FCarry ? 1 : 0) < 0;
        parentObj.FCarry = dirtySum < 0;
        parentObj.registerA = dirtySum & 0xFF;
        parentObj.FZero = parentObj.registerA == 0;
        parentObj.FSubtract = true;
    },
    //SBC A, (HL)
    //#0x9E:
    function(parentObj) {
        var temp_var = parentObj.memoryReader[parentObj.registersHL](parentObj, parentObj.registersHL);
        var dirtySum = parentObj.registerA - temp_var - (parentObj.FCarry ? 1 : 0);
        parentObj.FHalfCarry = (parentObj.registerA & 0xF) - (temp_var & 0xF) - (parentObj.FCarry ? 1 : 0) < 0;
        parentObj.FCarry = dirtySum < 0;
        parentObj.registerA = dirtySum & 0xFF;
        parentObj.FZero = parentObj.registerA == 0;
        parentObj.FSubtract = true;
    },
    //SBC A, A
    //#0x9F:
    function(parentObj) {
        //Optimized SBC A:
        if (parentObj.FCarry) {
            parentObj.FZero = false;
            parentObj.FSubtract = parentObj.FHalfCarry = parentObj.FCarry = true;
            parentObj.registerA = 0xFF;
        } else {
            parentObj.FHalfCarry = parentObj.FCarry = false;
            parentObj.FSubtract = parentObj.FZero = true;
            parentObj.registerA = 0;
        }
    },
    //AND B
    //#0xA0:
    function(parentObj) {
        parentObj.registerA &= parentObj.registerB;
        parentObj.FZero = parentObj.registerA == 0;
        parentObj.FHalfCarry = true;
        parentObj.FSubtract = parentObj.FCarry = false;
    },
    //AND C
    //#0xA1:
    function(parentObj) {
        parentObj.registerA &= parentObj.registerC;
        parentObj.FZero = parentObj.registerA == 0;
        parentObj.FHalfCarry = true;
        parentObj.FSubtract = parentObj.FCarry = false;
    },
    //AND D
    //#0xA2:
    function(parentObj) {
        parentObj.registerA &= parentObj.registerD;
        parentObj.FZero = parentObj.registerA == 0;
        parentObj.FHalfCarry = true;
        parentObj.FSubtract = parentObj.FCarry = false;
    },
    //AND E
    //#0xA3:
    function(parentObj) {
        parentObj.registerA &= parentObj.registerE;
        parentObj.FZero = parentObj.registerA == 0;
        parentObj.FHalfCarry = true;
        parentObj.FSubtract = parentObj.FCarry = false;
    },
    //AND H
    //#0xA4:
    function(parentObj) {
        parentObj.registerA &= parentObj.registersHL >> 8;
        parentObj.FZero = parentObj.registerA == 0;
        parentObj.FHalfCarry = true;
        parentObj.FSubtract = parentObj.FCarry = false;
    },
    //AND L
    //#0xA5:
    function(parentObj) {
        parentObj.registerA &= parentObj.registersHL;
        parentObj.FZero = parentObj.registerA == 0;
        parentObj.FHalfCarry = true;
        parentObj.FSubtract = parentObj.FCarry = false;
    },
    //AND (HL)
    //#0xA6:
    function(parentObj) {
        parentObj.registerA &= parentObj.memoryReader[parentObj.registersHL](parentObj, parentObj.registersHL);
        parentObj.FZero = parentObj.registerA == 0;
        parentObj.FHalfCarry = true;
        parentObj.FSubtract = parentObj.FCarry = false;
    },
    //AND A
    //#0xA7:
    function(parentObj) {
        //number & same number = same number
        parentObj.FZero = parentObj.registerA == 0;
        parentObj.FHalfCarry = true;
        parentObj.FSubtract = parentObj.FCarry = false;
    },
    //XOR B
    //#0xA8:
    function(parentObj) {
        parentObj.registerA ^= parentObj.registerB;
        parentObj.FZero = parentObj.registerA == 0;
        parentObj.FSubtract = parentObj.FHalfCarry = parentObj.FCarry = false;
    },
    //XOR C
    //#0xA9:
    function(parentObj) {
        parentObj.registerA ^= parentObj.registerC;
        parentObj.FZero = parentObj.registerA == 0;
        parentObj.FSubtract = parentObj.FHalfCarry = parentObj.FCarry = false;
    },
    //XOR D
    //#0xAA:
    function(parentObj) {
        parentObj.registerA ^= parentObj.registerD;
        parentObj.FZero = parentObj.registerA == 0;
        parentObj.FSubtract = parentObj.FHalfCarry = parentObj.FCarry = false;
    },
    //XOR E
    //#0xAB:
    function(parentObj) {
        parentObj.registerA ^= parentObj.registerE;
        parentObj.FZero = parentObj.registerA == 0;
        parentObj.FSubtract = parentObj.FHalfCarry = parentObj.FCarry = false;
    },
    //XOR H
    //#0xAC:
    function(parentObj) {
        parentObj.registerA ^= parentObj.registersHL >> 8;
        parentObj.FZero = parentObj.registerA == 0;
        parentObj.FSubtract = parentObj.FHalfCarry = parentObj.FCarry = false;
    },
    //XOR L
    //#0xAD:
    function(parentObj) {
        parentObj.registerA ^= parentObj.registersHL & 0xFF;
        parentObj.FZero = parentObj.registerA == 0;
        parentObj.FSubtract = parentObj.FHalfCarry = parentObj.FCarry = false;
    },
    //XOR (HL)
    //#0xAE:
    function(parentObj) {
        parentObj.registerA ^= parentObj.memoryReader[parentObj.registersHL](parentObj, parentObj.registersHL);
        parentObj.FZero = parentObj.registerA == 0;
        parentObj.FSubtract = parentObj.FHalfCarry = parentObj.FCarry = false;
    },
    //XOR A
    //#0xAF:
    function(parentObj) {
        //number ^ same number == 0
        parentObj.registerA = 0;
        parentObj.FZero = true;
        parentObj.FSubtract = parentObj.FHalfCarry = parentObj.FCarry = false;
    },
    //OR B
    //#0xB0:
    function(parentObj) {
        parentObj.registerA |= parentObj.registerB;
        parentObj.FZero = parentObj.registerA == 0;
        parentObj.FSubtract = parentObj.FCarry = parentObj.FHalfCarry = false;
    },
    //OR C
    //#0xB1:
    function(parentObj) {
        parentObj.registerA |= parentObj.registerC;
        parentObj.FZero = parentObj.registerA == 0;
        parentObj.FSubtract = parentObj.FCarry = parentObj.FHalfCarry = false;
    },
    //OR D
    //#0xB2:
    function(parentObj) {
        parentObj.registerA |= parentObj.registerD;
        parentObj.FZero = parentObj.registerA == 0;
        parentObj.FSubtract = parentObj.FCarry = parentObj.FHalfCarry = false;
    },
    //OR E
    //#0xB3:
    function(parentObj) {
        parentObj.registerA |= parentObj.registerE;
        parentObj.FZero = parentObj.registerA == 0;
        parentObj.FSubtract = parentObj.FCarry = parentObj.FHalfCarry = false;
    },
    //OR H
    //#0xB4:
    function(parentObj) {
        parentObj.registerA |= parentObj.registersHL >> 8;
        parentObj.FZero = parentObj.registerA == 0;
        parentObj.FSubtract = parentObj.FCarry = parentObj.FHalfCarry = false;
    },
    //OR L
    //#0xB5:
    function(parentObj) {
        parentObj.registerA |= parentObj.registersHL & 0xFF;
        parentObj.FZero = parentObj.registerA == 0;
        parentObj.FSubtract = parentObj.FCarry = parentObj.FHalfCarry = false;
    },
    //OR (HL)
    //#0xB6:
    function(parentObj) {
        parentObj.registerA |= parentObj.memoryReader[parentObj.registersHL](parentObj, parentObj.registersHL);
        parentObj.FZero = parentObj.registerA == 0;
        parentObj.FSubtract = parentObj.FCarry = parentObj.FHalfCarry = false;
    },
    //OR A
    //#0xB7:
    function(parentObj) {
        //number | same number == same number
        parentObj.FZero = parentObj.registerA == 0;
        parentObj.FSubtract = parentObj.FCarry = parentObj.FHalfCarry = false;
    },
    //CP B
    //#0xB8:
    function(parentObj) {
        var dirtySum = parentObj.registerA - parentObj.registerB;
        parentObj.FHalfCarry = (dirtySum & 0xF) > (parentObj.registerA & 0xF);
        parentObj.FCarry = dirtySum < 0;
        parentObj.FZero = dirtySum == 0;
        parentObj.FSubtract = true;
    },
    //CP C
    //#0xB9:
    function(parentObj) {
        var dirtySum = parentObj.registerA - parentObj.registerC;
        parentObj.FHalfCarry = (dirtySum & 0xF) > (parentObj.registerA & 0xF);
        parentObj.FCarry = dirtySum < 0;
        parentObj.FZero = dirtySum == 0;
        parentObj.FSubtract = true;
    },
    //CP D
    //#0xBA:
    function(parentObj) {
        var dirtySum = parentObj.registerA - parentObj.registerD;
        parentObj.FHalfCarry = (dirtySum & 0xF) > (parentObj.registerA & 0xF);
        parentObj.FCarry = dirtySum < 0;
        parentObj.FZero = dirtySum == 0;
        parentObj.FSubtract = true;
    },
    //CP E
    //#0xBB:
    function(parentObj) {
        var dirtySum = parentObj.registerA - parentObj.registerE;
        parentObj.FHalfCarry = (dirtySum & 0xF) > (parentObj.registerA & 0xF);
        parentObj.FCarry = dirtySum < 0;
        parentObj.FZero = dirtySum == 0;
        parentObj.FSubtract = true;
    },
    //CP H
    //#0xBC:
    function(parentObj) {
        var dirtySum = parentObj.registerA - (parentObj.registersHL >> 8);
        parentObj.FHalfCarry = (dirtySum & 0xF) > (parentObj.registerA & 0xF);
        parentObj.FCarry = dirtySum < 0;
        parentObj.FZero = dirtySum == 0;
        parentObj.FSubtract = true;
    },
    //CP L
    //#0xBD:
    function(parentObj) {
        var dirtySum = parentObj.registerA - (parentObj.registersHL & 0xFF);
        parentObj.FHalfCarry = (dirtySum & 0xF) > (parentObj.registerA & 0xF);
        parentObj.FCarry = dirtySum < 0;
        parentObj.FZero = dirtySum == 0;
        parentObj.FSubtract = true;
    },
    //CP (HL)
    //#0xBE:
    function(parentObj) {
        var dirtySum = parentObj.registerA - parentObj.memoryReader[parentObj.registersHL](parentObj, parentObj.registersHL);
        parentObj.FHalfCarry = (dirtySum & 0xF) > (parentObj.registerA & 0xF);
        parentObj.FCarry = dirtySum < 0;
        parentObj.FZero = dirtySum == 0;
        parentObj.FSubtract = true;
    },
    //CP A
    //#0xBF:
    function(parentObj) {
        parentObj.FHalfCarry = parentObj.FCarry = false;
        parentObj.FZero = parentObj.FSubtract = true;
    },
    //RET !FZ
    //#0xC0:
    function(parentObj) {
        if (!parentObj.FZero) {
            parentObj.programCounter = parentObj.memoryRead(parentObj.stackPointer + 1 & 0xFFFF) << 8 | parentObj.memoryReader[parentObj.stackPointer](parentObj, parentObj.stackPointer);
            parentObj.stackPointer = parentObj.stackPointer + 2 & 0xFFFF;
            parentObj.CPUTicks += 12;
        }
    },
    //POP BC
    //#0xC1:
    function(parentObj) {
        parentObj.registerC = parentObj.memoryReader[parentObj.stackPointer](parentObj, parentObj.stackPointer);
        parentObj.registerB = parentObj.memoryRead(parentObj.stackPointer + 1 & 0xFFFF);
        parentObj.stackPointer = parentObj.stackPointer + 2 & 0xFFFF;
    },
    //JP !FZ, nn
    //#0xC2:
    function(parentObj) {
        if (!parentObj.FZero) {
            parentObj.programCounter = parentObj.memoryRead(parentObj.programCounter + 1 & 0xFFFF) << 8 | parentObj.memoryReader[parentObj.programCounter](parentObj, parentObj.programCounter);
            parentObj.CPUTicks += 4;
        } else parentObj.programCounter = parentObj.programCounter + 2 & 0xFFFF;
    },
    //JP nn
    //#0xC3:
    function(parentObj) {
        parentObj.programCounter = parentObj.memoryRead(parentObj.programCounter + 1 & 0xFFFF) << 8 | parentObj.memoryReader[parentObj.programCounter](parentObj, parentObj.programCounter);
    },
    //CALL !FZ, nn
    //#0xC4:
    function(parentObj) {
        if (!parentObj.FZero) {
            var temp_pc = parentObj.memoryRead(parentObj.programCounter + 1 & 0xFFFF) << 8 | parentObj.memoryReader[parentObj.programCounter](parentObj, parentObj.programCounter);
            parentObj.programCounter = parentObj.programCounter + 2 & 0xFFFF;
            parentObj.stackPointer = parentObj.stackPointer - 1 & 0xFFFF;
            parentObj.memoryWriter[parentObj.stackPointer](parentObj, parentObj.stackPointer, parentObj.programCounter >> 8);
            parentObj.stackPointer = parentObj.stackPointer - 1 & 0xFFFF;
            parentObj.memoryWriter[parentObj.stackPointer](parentObj, parentObj.stackPointer, parentObj.programCounter & 0xFF);
            parentObj.programCounter = temp_pc;
            parentObj.CPUTicks += 12;
        } else parentObj.programCounter = parentObj.programCounter + 2 & 0xFFFF;
    },
    //PUSH BC
    //#0xC5:
    function(parentObj) {
        parentObj.stackPointer = parentObj.stackPointer - 1 & 0xFFFF;
        parentObj.memoryWriter[parentObj.stackPointer](parentObj, parentObj.stackPointer, parentObj.registerB);
        parentObj.stackPointer = parentObj.stackPointer - 1 & 0xFFFF;
        parentObj.memoryWriter[parentObj.stackPointer](parentObj, parentObj.stackPointer, parentObj.registerC);
    },
    //ADD, n
    //#0xC6:
    function(parentObj) {
        var dirtySum = parentObj.registerA + parentObj.memoryReader[parentObj.programCounter](parentObj, parentObj.programCounter);
        parentObj.programCounter = parentObj.programCounter + 1 & 0xFFFF;
        parentObj.FHalfCarry = (dirtySum & 0xF) < (parentObj.registerA & 0xF);
        parentObj.FCarry = dirtySum > 0xFF;
        parentObj.registerA = dirtySum & 0xFF;
        parentObj.FZero = parentObj.registerA == 0;
        parentObj.FSubtract = false;
    },
    //RST 0
    //#0xC7:
    function(parentObj) {
        parentObj.stackPointer = parentObj.stackPointer - 1 & 0xFFFF;
        parentObj.memoryWriter[parentObj.stackPointer](parentObj, parentObj.stackPointer, parentObj.programCounter >> 8);
        parentObj.stackPointer = parentObj.stackPointer - 1 & 0xFFFF;
        parentObj.memoryWriter[parentObj.stackPointer](parentObj, parentObj.stackPointer, parentObj.programCounter & 0xFF);
        parentObj.programCounter = 0;
    },
    //RET FZ
    //#0xC8:
    function(parentObj) {
        if (parentObj.FZero) {
            parentObj.programCounter = parentObj.memoryRead(parentObj.stackPointer + 1 & 0xFFFF) << 8 | parentObj.memoryReader[parentObj.stackPointer](parentObj, parentObj.stackPointer);
            parentObj.stackPointer = parentObj.stackPointer + 2 & 0xFFFF;
            parentObj.CPUTicks += 12;
        }
    },
    //RET
    //#0xC9:
    function(parentObj) {
        parentObj.programCounter = parentObj.memoryRead(parentObj.stackPointer + 1 & 0xFFFF) << 8 | parentObj.memoryReader[parentObj.stackPointer](parentObj, parentObj.stackPointer);
        parentObj.stackPointer = parentObj.stackPointer + 2 & 0xFFFF;
    },
    //JP FZ, nn
    //#0xCA:
    function(parentObj) {
        if (parentObj.FZero) {
            parentObj.programCounter = parentObj.memoryRead(parentObj.programCounter + 1 & 0xFFFF) << 8 | parentObj.memoryReader[parentObj.programCounter](parentObj, parentObj.programCounter);
            parentObj.CPUTicks += 4;
        } else parentObj.programCounter = parentObj.programCounter + 2 & 0xFFFF;
    },
    //Secondary OP Code Set:
    //#0xCB:
    function(parentObj) {
        var opcode = parentObj.memoryReader[parentObj.programCounter](parentObj, parentObj.programCounter);
        //Increment the program counter to the next instruction:
        parentObj.programCounter = parentObj.programCounter + 1 & 0xFFFF;
        //Get how many CPU cycles the current 0xCBXX op code counts for:
        parentObj.CPUTicks += parentObj.SecondaryTICKTable[opcode];
        //Execute secondary OP codes for the 0xCB OP code call.
        parentObj.CBOPCODE[opcode](parentObj);
    },
    //CALL FZ, nn
    //#0xCC:
    function(parentObj) {
        if (parentObj.FZero) {
            var temp_pc = parentObj.memoryRead(parentObj.programCounter + 1 & 0xFFFF) << 8 | parentObj.memoryReader[parentObj.programCounter](parentObj, parentObj.programCounter);
            parentObj.programCounter = parentObj.programCounter + 2 & 0xFFFF;
            parentObj.stackPointer = parentObj.stackPointer - 1 & 0xFFFF;
            parentObj.memoryWriter[parentObj.stackPointer](parentObj, parentObj.stackPointer, parentObj.programCounter >> 8);
            parentObj.stackPointer = parentObj.stackPointer - 1 & 0xFFFF;
            parentObj.memoryWriter[parentObj.stackPointer](parentObj, parentObj.stackPointer, parentObj.programCounter & 0xFF);
            parentObj.programCounter = temp_pc;
            parentObj.CPUTicks += 12;
        } else parentObj.programCounter = parentObj.programCounter + 2 & 0xFFFF;
    },
    //CALL nn
    //#0xCD:
    function(parentObj) {
        var temp_pc = parentObj.memoryRead(parentObj.programCounter + 1 & 0xFFFF) << 8 | parentObj.memoryReader[parentObj.programCounter](parentObj, parentObj.programCounter);
        parentObj.programCounter = parentObj.programCounter + 2 & 0xFFFF;
        parentObj.stackPointer = parentObj.stackPointer - 1 & 0xFFFF;
        parentObj.memoryWriter[parentObj.stackPointer](parentObj, parentObj.stackPointer, parentObj.programCounter >> 8);
        parentObj.stackPointer = parentObj.stackPointer - 1 & 0xFFFF;
        parentObj.memoryWriter[parentObj.stackPointer](parentObj, parentObj.stackPointer, parentObj.programCounter & 0xFF);
        parentObj.programCounter = temp_pc;
    },
    //ADC A, n
    //#0xCE:
    function(parentObj) {
        var tempValue = parentObj.memoryReader[parentObj.programCounter](parentObj, parentObj.programCounter);
        parentObj.programCounter = parentObj.programCounter + 1 & 0xFFFF;
        var dirtySum = parentObj.registerA + tempValue + (parentObj.FCarry ? 1 : 0);
        parentObj.FHalfCarry = (parentObj.registerA & 0xF) + (tempValue & 0xF) + (parentObj.FCarry ? 1 : 0) > 0xF;
        parentObj.FCarry = dirtySum > 0xFF;
        parentObj.registerA = dirtySum & 0xFF;
        parentObj.FZero = parentObj.registerA == 0;
        parentObj.FSubtract = false;
    },
    //RST 0x8
    //#0xCF:
    function(parentObj) {
        parentObj.stackPointer = parentObj.stackPointer - 1 & 0xFFFF;
        parentObj.memoryWriter[parentObj.stackPointer](parentObj, parentObj.stackPointer, parentObj.programCounter >> 8);
        parentObj.stackPointer = parentObj.stackPointer - 1 & 0xFFFF;
        parentObj.memoryWriter[parentObj.stackPointer](parentObj, parentObj.stackPointer, parentObj.programCounter & 0xFF);
        parentObj.programCounter = 0x8;
    },
    //RET !FC
    //#0xD0:
    function(parentObj) {
        if (!parentObj.FCarry) {
            parentObj.programCounter = parentObj.memoryRead(parentObj.stackPointer + 1 & 0xFFFF) << 8 | parentObj.memoryReader[parentObj.stackPointer](parentObj, parentObj.stackPointer);
            parentObj.stackPointer = parentObj.stackPointer + 2 & 0xFFFF;
            parentObj.CPUTicks += 12;
        }
    },
    //POP DE
    //#0xD1:
    function(parentObj) {
        parentObj.registerE = parentObj.memoryReader[parentObj.stackPointer](parentObj, parentObj.stackPointer);
        parentObj.registerD = parentObj.memoryRead(parentObj.stackPointer + 1 & 0xFFFF);
        parentObj.stackPointer = parentObj.stackPointer + 2 & 0xFFFF;
    },
    //JP !FC, nn
    //#0xD2:
    function(parentObj) {
        if (!parentObj.FCarry) {
            parentObj.programCounter = parentObj.memoryRead(parentObj.programCounter + 1 & 0xFFFF) << 8 | parentObj.memoryReader[parentObj.programCounter](parentObj, parentObj.programCounter);
            parentObj.CPUTicks += 4;
        } else parentObj.programCounter = parentObj.programCounter + 2 & 0xFFFF;
    },
    //0xD3 - Illegal
    //#0xD3:
    function(parentObj) {
        console.log("Illegal op code 0xD3 called, pausing emulation.");
    //pause();
    },
    //CALL !FC, nn
    //#0xD4:
    function(parentObj) {
        if (!parentObj.FCarry) {
            var temp_pc = parentObj.memoryRead(parentObj.programCounter + 1 & 0xFFFF) << 8 | parentObj.memoryReader[parentObj.programCounter](parentObj, parentObj.programCounter);
            parentObj.programCounter = parentObj.programCounter + 2 & 0xFFFF;
            parentObj.stackPointer = parentObj.stackPointer - 1 & 0xFFFF;
            parentObj.memoryWriter[parentObj.stackPointer](parentObj, parentObj.stackPointer, parentObj.programCounter >> 8);
            parentObj.stackPointer = parentObj.stackPointer - 1 & 0xFFFF;
            parentObj.memoryWriter[parentObj.stackPointer](parentObj, parentObj.stackPointer, parentObj.programCounter & 0xFF);
            parentObj.programCounter = temp_pc;
            parentObj.CPUTicks += 12;
        } else parentObj.programCounter = parentObj.programCounter + 2 & 0xFFFF;
    },
    //PUSH DE
    //#0xD5:
    function(parentObj) {
        parentObj.stackPointer = parentObj.stackPointer - 1 & 0xFFFF;
        parentObj.memoryWriter[parentObj.stackPointer](parentObj, parentObj.stackPointer, parentObj.registerD);
        parentObj.stackPointer = parentObj.stackPointer - 1 & 0xFFFF;
        parentObj.memoryWriter[parentObj.stackPointer](parentObj, parentObj.stackPointer, parentObj.registerE);
    },
    //SUB A, n
    //#0xD6:
    function(parentObj) {
        var dirtySum = parentObj.registerA - parentObj.memoryReader[parentObj.programCounter](parentObj, parentObj.programCounter);
        parentObj.programCounter = parentObj.programCounter + 1 & 0xFFFF;
        parentObj.FHalfCarry = (parentObj.registerA & 0xF) < (dirtySum & 0xF);
        parentObj.FCarry = dirtySum < 0;
        parentObj.registerA = dirtySum & 0xFF;
        parentObj.FZero = dirtySum == 0;
        parentObj.FSubtract = true;
    },
    //RST 0x10
    //#0xD7:
    function(parentObj) {
        parentObj.stackPointer = parentObj.stackPointer - 1 & 0xFFFF;
        parentObj.memoryWriter[parentObj.stackPointer](parentObj, parentObj.stackPointer, parentObj.programCounter >> 8);
        parentObj.stackPointer = parentObj.stackPointer - 1 & 0xFFFF;
        parentObj.memoryWriter[parentObj.stackPointer](parentObj, parentObj.stackPointer, parentObj.programCounter & 0xFF);
        parentObj.programCounter = 0x10;
    },
    //RET FC
    //#0xD8:
    function(parentObj) {
        if (parentObj.FCarry) {
            parentObj.programCounter = parentObj.memoryRead(parentObj.stackPointer + 1 & 0xFFFF) << 8 | parentObj.memoryReader[parentObj.stackPointer](parentObj, parentObj.stackPointer);
            parentObj.stackPointer = parentObj.stackPointer + 2 & 0xFFFF;
            parentObj.CPUTicks += 12;
        }
    },
    //RETI
    //#0xD9:
    function(parentObj) {
        parentObj.programCounter = parentObj.memoryRead(parentObj.stackPointer + 1 & 0xFFFF) << 8 | parentObj.memoryReader[parentObj.stackPointer](parentObj, parentObj.stackPointer);
        parentObj.stackPointer = parentObj.stackPointer + 2 & 0xFFFF;
        //Immediate for HALT:
        parentObj.IRQEnableDelay = parentObj.IRQEnableDelay == 2 || parentObj.memoryReader[parentObj.programCounter](parentObj, parentObj.programCounter) == 0x76 ? 1 : 2;
    },
    //JP FC, nn
    //#0xDA:
    function(parentObj) {
        if (parentObj.FCarry) {
            parentObj.programCounter = parentObj.memoryRead(parentObj.programCounter + 1 & 0xFFFF) << 8 | parentObj.memoryReader[parentObj.programCounter](parentObj, parentObj.programCounter);
            parentObj.CPUTicks += 4;
        } else parentObj.programCounter = parentObj.programCounter + 2 & 0xFFFF;
    },
    //0xDB - Illegal
    //#0xDB:
    function(parentObj) {
        console.log("Illegal op code 0xDB called, pausing emulation.");
    //pause();
    },
    //CALL FC, nn
    //#0xDC:
    function(parentObj) {
        if (parentObj.FCarry) {
            var temp_pc = parentObj.memoryRead(parentObj.programCounter + 1 & 0xFFFF) << 8 | parentObj.memoryReader[parentObj.programCounter](parentObj, parentObj.programCounter);
            parentObj.programCounter = parentObj.programCounter + 2 & 0xFFFF;
            parentObj.stackPointer = parentObj.stackPointer - 1 & 0xFFFF;
            parentObj.memoryWriter[parentObj.stackPointer](parentObj, parentObj.stackPointer, parentObj.programCounter >> 8);
            parentObj.stackPointer = parentObj.stackPointer - 1 & 0xFFFF;
            parentObj.memoryWriter[parentObj.stackPointer](parentObj, parentObj.stackPointer, parentObj.programCounter & 0xFF);
            parentObj.programCounter = temp_pc;
            parentObj.CPUTicks += 12;
        } else parentObj.programCounter = parentObj.programCounter + 2 & 0xFFFF;
    },
    //0xDD - Illegal
    //#0xDD:
    function(parentObj) {
        console.log("Illegal op code 0xDD called, pausing emulation.");
    //pause();
    },
    //SBC A, n
    //#0xDE:
    function(parentObj) {
        var temp_var = parentObj.memoryReader[parentObj.programCounter](parentObj, parentObj.programCounter);
        parentObj.programCounter = parentObj.programCounter + 1 & 0xFFFF;
        var dirtySum = parentObj.registerA - temp_var - (parentObj.FCarry ? 1 : 0);
        parentObj.FHalfCarry = (parentObj.registerA & 0xF) - (temp_var & 0xF) - (parentObj.FCarry ? 1 : 0) < 0;
        parentObj.FCarry = dirtySum < 0;
        parentObj.registerA = dirtySum & 0xFF;
        parentObj.FZero = parentObj.registerA == 0;
        parentObj.FSubtract = true;
    },
    //RST 0x18
    //#0xDF:
    function(parentObj) {
        parentObj.stackPointer = parentObj.stackPointer - 1 & 0xFFFF;
        parentObj.memoryWriter[parentObj.stackPointer](parentObj, parentObj.stackPointer, parentObj.programCounter >> 8);
        parentObj.stackPointer = parentObj.stackPointer - 1 & 0xFFFF;
        parentObj.memoryWriter[parentObj.stackPointer](parentObj, parentObj.stackPointer, parentObj.programCounter & 0xFF);
        parentObj.programCounter = 0x18;
    },
    //LDH (n), A
    //#0xE0:
    function(parentObj) {
        parentObj.memoryHighWrite(parentObj.memoryReader[parentObj.programCounter](parentObj, parentObj.programCounter), parentObj.registerA);
        parentObj.programCounter = parentObj.programCounter + 1 & 0xFFFF;
    },
    //POP HL
    //#0xE1:
    function(parentObj) {
        parentObj.registersHL = parentObj.memoryRead(parentObj.stackPointer + 1 & 0xFFFF) << 8 | parentObj.memoryReader[parentObj.stackPointer](parentObj, parentObj.stackPointer);
        parentObj.stackPointer = parentObj.stackPointer + 2 & 0xFFFF;
    },
    //LD (0xFF00 + C), A
    //#0xE2:
    function(parentObj) {
        parentObj.memoryHighWriter[parentObj.registerC](parentObj, parentObj.registerC, parentObj.registerA);
    },
    //0xE3 - Illegal
    //#0xE3:
    function(parentObj) {
        console.log("Illegal op code 0xE3 called, pausing emulation.", 2);
    //pause();
    },
    //0xE4 - Illegal
    //#0xE4:
    function(parentObj) {
        console.log("Illegal op code 0xE4 called, pausing emulation.", 2);
    //pause();
    },
    //PUSH HL
    //#0xE5:
    function(parentObj) {
        parentObj.stackPointer = parentObj.stackPointer - 1 & 0xFFFF;
        parentObj.memoryWriter[parentObj.stackPointer](parentObj, parentObj.stackPointer, parentObj.registersHL >> 8);
        parentObj.stackPointer = parentObj.stackPointer - 1 & 0xFFFF;
        parentObj.memoryWriter[parentObj.stackPointer](parentObj, parentObj.stackPointer, parentObj.registersHL & 0xFF);
    },
    //AND n
    //#0xE6:
    function(parentObj) {
        parentObj.registerA &= parentObj.memoryReader[parentObj.programCounter](parentObj, parentObj.programCounter);
        parentObj.programCounter = parentObj.programCounter + 1 & 0xFFFF;
        parentObj.FZero = parentObj.registerA == 0;
        parentObj.FHalfCarry = true;
        parentObj.FSubtract = parentObj.FCarry = false;
    },
    //RST 0x20
    //#0xE7:
    function(parentObj) {
        parentObj.stackPointer = parentObj.stackPointer - 1 & 0xFFFF;
        parentObj.memoryWriter[parentObj.stackPointer](parentObj, parentObj.stackPointer, parentObj.programCounter >> 8);
        parentObj.stackPointer = parentObj.stackPointer - 1 & 0xFFFF;
        parentObj.memoryWriter[parentObj.stackPointer](parentObj, parentObj.stackPointer, parentObj.programCounter & 0xFF);
        parentObj.programCounter = 0x20;
    },
    //ADD SP, n
    //#0xE8:
    function(parentObj) {
        var temp_value2 = parentObj.memoryReader[parentObj.programCounter](parentObj, parentObj.programCounter) << 24 >> 24;
        parentObj.programCounter = parentObj.programCounter + 1 & 0xFFFF;
        var temp_value = parentObj.stackPointer + temp_value2 & 0xFFFF;
        temp_value2 = parentObj.stackPointer ^ temp_value2 ^ temp_value;
        parentObj.stackPointer = temp_value;
        parentObj.FCarry = (temp_value2 & 0x100) == 0x100;
        parentObj.FHalfCarry = (temp_value2 & 0x10) == 0x10;
        parentObj.FZero = parentObj.FSubtract = false;
    },
    //JP, (HL)
    //#0xE9:
    function(parentObj) {
        parentObj.programCounter = parentObj.registersHL;
    },
    //LD n, A
    //#0xEA:
    function(parentObj) {
        parentObj.memoryWrite(parentObj.memoryRead(parentObj.programCounter + 1 & 0xFFFF) << 8 | parentObj.memoryReader[parentObj.programCounter](parentObj, parentObj.programCounter), parentObj.registerA);
        parentObj.programCounter = parentObj.programCounter + 2 & 0xFFFF;
    },
    //0xEB - Illegal
    //#0xEB:
    function(parentObj) {
        console.log("Illegal op code 0xEB called, pausing emulation.", 2);
    //pause();
    },
    //0xEC - Illegal
    //#0xEC:
    function(parentObj) {
        console.log("Illegal op code 0xEC called, pausing emulation.", 2);
    //pause();
    },
    //0xED - Illegal
    //#0xED:
    function(parentObj) {
        console.log("Illegal op code 0xED called, pausing emulation.", 2);
    //pause();
    },
    //XOR n
    //#0xEE:
    function(parentObj) {
        parentObj.registerA ^= parentObj.memoryReader[parentObj.programCounter](parentObj, parentObj.programCounter);
        parentObj.programCounter = parentObj.programCounter + 1 & 0xFFFF;
        parentObj.FZero = parentObj.registerA == 0;
        parentObj.FSubtract = parentObj.FHalfCarry = parentObj.FCarry = false;
    },
    //RST 0x28
    //#0xEF:
    function(parentObj) {
        parentObj.stackPointer = parentObj.stackPointer - 1 & 0xFFFF;
        parentObj.memoryWriter[parentObj.stackPointer](parentObj, parentObj.stackPointer, parentObj.programCounter >> 8);
        parentObj.stackPointer = parentObj.stackPointer - 1 & 0xFFFF;
        parentObj.memoryWriter[parentObj.stackPointer](parentObj, parentObj.stackPointer, parentObj.programCounter & 0xFF);
        parentObj.programCounter = 0x28;
    },
    //LDH A, (n)
    //#0xF0:
    function(parentObj) {
        parentObj.registerA = parentObj.memoryHighRead(parentObj.memoryReader[parentObj.programCounter](parentObj, parentObj.programCounter));
        parentObj.programCounter = parentObj.programCounter + 1 & 0xFFFF;
    },
    //POP AF
    //#0xF1:
    function(parentObj) {
        var temp_var = parentObj.memoryReader[parentObj.stackPointer](parentObj, parentObj.stackPointer);
        parentObj.FZero = temp_var > 0x7F;
        parentObj.FSubtract = (temp_var & 0x40) == 0x40;
        parentObj.FHalfCarry = (temp_var & 0x20) == 0x20;
        parentObj.FCarry = (temp_var & 0x10) == 0x10;
        parentObj.registerA = parentObj.memoryRead(parentObj.stackPointer + 1 & 0xFFFF);
        parentObj.stackPointer = parentObj.stackPointer + 2 & 0xFFFF;
    },
    //LD A, (0xFF00 + C)
    //#0xF2:
    function(parentObj) {
        parentObj.registerA = parentObj.memoryHighReader[parentObj.registerC](parentObj, parentObj.registerC);
    },
    //DI
    //#0xF3:
    function(parentObj) {
        parentObj.IME = false;
        parentObj.IRQEnableDelay = 0;
    },
    //0xF4 - Illegal
    //#0xF4:
    function(parentObj) {
        console.log("Illegal op code 0xF4 called, pausing emulation.", 2);
    //pause();
    },
    //PUSH AF
    //#0xF5:
    function(parentObj) {
        parentObj.stackPointer = parentObj.stackPointer - 1 & 0xFFFF;
        parentObj.memoryWriter[parentObj.stackPointer](parentObj, parentObj.stackPointer, parentObj.registerA);
        parentObj.stackPointer = parentObj.stackPointer - 1 & 0xFFFF;
        parentObj.memoryWriter[parentObj.stackPointer](parentObj, parentObj.stackPointer, (parentObj.FZero ? 0x80 : 0) | (parentObj.FSubtract ? 0x40 : 0) | (parentObj.FHalfCarry ? 0x20 : 0) | (parentObj.FCarry ? 0x10 : 0));
    },
    //OR n
    //#0xF6:
    function(parentObj) {
        parentObj.registerA |= parentObj.memoryReader[parentObj.programCounter](parentObj, parentObj.programCounter);
        parentObj.FZero = parentObj.registerA == 0;
        parentObj.programCounter = parentObj.programCounter + 1 & 0xFFFF;
        parentObj.FSubtract = parentObj.FCarry = parentObj.FHalfCarry = false;
    },
    //RST 0x30
    //#0xF7:
    function(parentObj) {
        parentObj.stackPointer = parentObj.stackPointer - 1 & 0xFFFF;
        parentObj.memoryWriter[parentObj.stackPointer](parentObj, parentObj.stackPointer, parentObj.programCounter >> 8);
        parentObj.stackPointer = parentObj.stackPointer - 1 & 0xFFFF;
        parentObj.memoryWriter[parentObj.stackPointer](parentObj, parentObj.stackPointer, parentObj.programCounter & 0xFF);
        parentObj.programCounter = 0x30;
    },
    //LDHL SP, n
    //#0xF8:
    function(parentObj) {
        var temp_var = parentObj.memoryReader[parentObj.programCounter](parentObj, parentObj.programCounter) << 24 >> 24;
        parentObj.programCounter = parentObj.programCounter + 1 & 0xFFFF;
        parentObj.registersHL = parentObj.stackPointer + temp_var & 0xFFFF;
        temp_var = parentObj.stackPointer ^ temp_var ^ parentObj.registersHL;
        parentObj.FCarry = (temp_var & 0x100) == 0x100;
        parentObj.FHalfCarry = (temp_var & 0x10) == 0x10;
        parentObj.FZero = parentObj.FSubtract = false;
    },
    //LD SP, HL
    //#0xF9:
    function(parentObj) {
        parentObj.stackPointer = parentObj.registersHL;
    },
    //LD A, (nn)
    //#0xFA:
    function(parentObj) {
        parentObj.registerA = parentObj.memoryRead(parentObj.memoryRead(parentObj.programCounter + 1 & 0xFFFF) << 8 | parentObj.memoryReader[parentObj.programCounter](parentObj, parentObj.programCounter));
        parentObj.programCounter = parentObj.programCounter + 2 & 0xFFFF;
    },
    //EI
    //#0xFB:
    function(parentObj) {
        //Immediate for HALT:
        parentObj.IRQEnableDelay = parentObj.IRQEnableDelay == 2 || parentObj.memoryReader[parentObj.programCounter](parentObj, parentObj.programCounter) == 0x76 ? 1 : 2;
    },
    //0xFC - Illegal
    //#0xFC:
    function(parentObj) {
        console.log("Illegal op code 0xFC called, pausing emulation.", 2);
    //pause();
    },
    //0xFD - Illegal
    //#0xFD:
    function(parentObj) {
        console.log("Illegal op code 0xFD called, pausing emulation.", 2);
    //pause();
    },
    //CP n
    //#0xFE:
    function(parentObj) {
        var dirtySum = parentObj.registerA - parentObj.memoryReader[parentObj.programCounter](parentObj, parentObj.programCounter);
        parentObj.programCounter = parentObj.programCounter + 1 & 0xFFFF;
        parentObj.FHalfCarry = (dirtySum & 0xF) > (parentObj.registerA & 0xF);
        parentObj.FCarry = dirtySum < 0;
        parentObj.FZero = dirtySum == 0;
        parentObj.FSubtract = true;
    },
    //RST 0x38
    //#0xFF:
    function(parentObj) {
        parentObj.stackPointer = parentObj.stackPointer - 1 & 0xFFFF;
        parentObj.memoryWriter[parentObj.stackPointer](parentObj, parentObj.stackPointer, parentObj.programCounter >> 8);
        parentObj.stackPointer = parentObj.stackPointer - 1 & 0xFFFF;
        parentObj.memoryWriter[parentObj.stackPointer](parentObj, parentObj.stackPointer, parentObj.programCounter & 0xFF);
        parentObj.programCounter = 0x38;
    }
];
module.exports = OPCODE;

},{}],"gHdsj":[function(require,module,exports) {
var CBOPCODE = [
    //RLC B
    //#0x00:
    function(parentObj) {
        parentObj.FCarry = parentObj.registerB > 0x7F;
        parentObj.registerB = parentObj.registerB << 1 & 0xFF | (parentObj.FCarry ? 1 : 0);
        parentObj.FHalfCarry = parentObj.FSubtract = false;
        parentObj.FZero = parentObj.registerB == 0;
    },
    function(parentObj) {
        parentObj.FCarry = parentObj.registerC > 0x7F;
        parentObj.registerC = parentObj.registerC << 1 & 0xFF | (parentObj.FCarry ? 1 : 0);
        parentObj.FHalfCarry = parentObj.FSubtract = false;
        parentObj.FZero = parentObj.registerC == 0;
    },
    function(parentObj) {
        parentObj.FCarry = parentObj.registerD > 0x7F;
        parentObj.registerD = parentObj.registerD << 1 & 0xFF | (parentObj.FCarry ? 1 : 0);
        parentObj.FHalfCarry = parentObj.FSubtract = false;
        parentObj.FZero = parentObj.registerD == 0;
    },
    function(parentObj) {
        parentObj.FCarry = parentObj.registerE > 0x7F;
        parentObj.registerE = parentObj.registerE << 1 & 0xFF | (parentObj.FCarry ? 1 : 0);
        parentObj.FHalfCarry = parentObj.FSubtract = false;
        parentObj.FZero = parentObj.registerE == 0;
    },
    function(parentObj) {
        parentObj.FCarry = parentObj.registersHL > 0x7FFF;
        parentObj.registersHL = parentObj.registersHL << 1 & 0xFE00 | (parentObj.FCarry ? 0x100 : 0) | parentObj.registersHL & 0xFF;
        parentObj.FHalfCarry = parentObj.FSubtract = false;
        parentObj.FZero = parentObj.registersHL < 0x100;
    },
    function(parentObj) {
        parentObj.FCarry = (parentObj.registersHL & 0x80) == 0x80;
        parentObj.registersHL = parentObj.registersHL & 0xFF00 | parentObj.registersHL << 1 & 0xFF | (parentObj.FCarry ? 1 : 0);
        parentObj.FHalfCarry = parentObj.FSubtract = false;
        parentObj.FZero = (parentObj.registersHL & 0xFF) == 0;
    },
    function(parentObj) {
        var temp_var = parentObj.memoryReader[parentObj.registersHL](parentObj, parentObj.registersHL);
        parentObj.FCarry = temp_var > 0x7F;
        temp_var = temp_var << 1 & 0xFF | (parentObj.FCarry ? 1 : 0);
        parentObj.memoryWriter[parentObj.registersHL](parentObj, parentObj.registersHL, temp_var);
        parentObj.FHalfCarry = parentObj.FSubtract = false;
        parentObj.FZero = temp_var == 0;
    },
    function(parentObj) {
        parentObj.FCarry = parentObj.registerA > 0x7F;
        parentObj.registerA = parentObj.registerA << 1 & 0xFF | (parentObj.FCarry ? 1 : 0);
        parentObj.FHalfCarry = parentObj.FSubtract = false;
        parentObj.FZero = parentObj.registerA == 0;
    },
    function(parentObj) {
        parentObj.FCarry = (parentObj.registerB & 0x01) == 0x01;
        parentObj.registerB = (parentObj.FCarry ? 0x80 : 0) | parentObj.registerB >> 1;
        parentObj.FHalfCarry = parentObj.FSubtract = false;
        parentObj.FZero = parentObj.registerB == 0;
    },
    function(parentObj) {
        parentObj.FCarry = (parentObj.registerC & 0x01) == 0x01;
        parentObj.registerC = (parentObj.FCarry ? 0x80 : 0) | parentObj.registerC >> 1;
        parentObj.FHalfCarry = parentObj.FSubtract = false;
        parentObj.FZero = parentObj.registerC == 0;
    },
    function(parentObj) {
        parentObj.FCarry = (parentObj.registerD & 0x01) == 0x01;
        parentObj.registerD = (parentObj.FCarry ? 0x80 : 0) | parentObj.registerD >> 1;
        parentObj.FHalfCarry = parentObj.FSubtract = false;
        parentObj.FZero = parentObj.registerD == 0;
    },
    function(parentObj) {
        parentObj.FCarry = (parentObj.registerE & 0x01) == 0x01;
        parentObj.registerE = (parentObj.FCarry ? 0x80 : 0) | parentObj.registerE >> 1;
        parentObj.FHalfCarry = parentObj.FSubtract = false;
        parentObj.FZero = parentObj.registerE == 0;
    },
    function(parentObj) {
        parentObj.FCarry = (parentObj.registersHL & 0x0100) == 0x0100;
        parentObj.registersHL = (parentObj.FCarry ? 0x8000 : 0) | parentObj.registersHL >> 1 & 0xFF00 | parentObj.registersHL & 0xFF;
        parentObj.FHalfCarry = parentObj.FSubtract = false;
        parentObj.FZero = parentObj.registersHL < 0x100;
    },
    function(parentObj) {
        parentObj.FCarry = (parentObj.registersHL & 0x01) == 0x01;
        parentObj.registersHL = parentObj.registersHL & 0xFF00 | (parentObj.FCarry ? 0x80 : 0) | (parentObj.registersHL & 0xFF) >> 1;
        parentObj.FHalfCarry = parentObj.FSubtract = false;
        parentObj.FZero = (parentObj.registersHL & 0xFF) == 0;
    },
    function(parentObj) {
        var temp_var = parentObj.memoryReader[parentObj.registersHL](parentObj, parentObj.registersHL);
        parentObj.FCarry = (temp_var & 0x01) == 0x01;
        temp_var = (parentObj.FCarry ? 0x80 : 0) | temp_var >> 1;
        parentObj.memoryWriter[parentObj.registersHL](parentObj, parentObj.registersHL, temp_var);
        parentObj.FHalfCarry = parentObj.FSubtract = false;
        parentObj.FZero = temp_var == 0;
    },
    function(parentObj) {
        parentObj.FCarry = (parentObj.registerA & 0x01) == 0x01;
        parentObj.registerA = (parentObj.FCarry ? 0x80 : 0) | parentObj.registerA >> 1;
        parentObj.FHalfCarry = parentObj.FSubtract = false;
        parentObj.FZero = parentObj.registerA == 0;
    },
    function(parentObj) {
        var newFCarry = parentObj.registerB > 0x7F;
        parentObj.registerB = parentObj.registerB << 1 & 0xFF | (parentObj.FCarry ? 1 : 0);
        parentObj.FCarry = newFCarry;
        parentObj.FHalfCarry = parentObj.FSubtract = false;
        parentObj.FZero = parentObj.registerB == 0;
    },
    function(parentObj) {
        var newFCarry = parentObj.registerC > 0x7F;
        parentObj.registerC = parentObj.registerC << 1 & 0xFF | (parentObj.FCarry ? 1 : 0);
        parentObj.FCarry = newFCarry;
        parentObj.FHalfCarry = parentObj.FSubtract = false;
        parentObj.FZero = parentObj.registerC == 0;
    },
    function(parentObj) {
        var newFCarry = parentObj.registerD > 0x7F;
        parentObj.registerD = parentObj.registerD << 1 & 0xFF | (parentObj.FCarry ? 1 : 0);
        parentObj.FCarry = newFCarry;
        parentObj.FHalfCarry = parentObj.FSubtract = false;
        parentObj.FZero = parentObj.registerD == 0;
    },
    function(parentObj) {
        var newFCarry = parentObj.registerE > 0x7F;
        parentObj.registerE = parentObj.registerE << 1 & 0xFF | (parentObj.FCarry ? 1 : 0);
        parentObj.FCarry = newFCarry;
        parentObj.FHalfCarry = parentObj.FSubtract = false;
        parentObj.FZero = parentObj.registerE == 0;
    },
    function(parentObj) {
        var newFCarry = parentObj.registersHL > 0x7FFF;
        parentObj.registersHL = parentObj.registersHL << 1 & 0xFE00 | (parentObj.FCarry ? 0x100 : 0) | parentObj.registersHL & 0xFF;
        parentObj.FCarry = newFCarry;
        parentObj.FHalfCarry = parentObj.FSubtract = false;
        parentObj.FZero = parentObj.registersHL < 0x100;
    },
    function(parentObj) {
        var newFCarry = (parentObj.registersHL & 0x80) == 0x80;
        parentObj.registersHL = parentObj.registersHL & 0xFF00 | parentObj.registersHL << 1 & 0xFF | (parentObj.FCarry ? 1 : 0);
        parentObj.FCarry = newFCarry;
        parentObj.FHalfCarry = parentObj.FSubtract = false;
        parentObj.FZero = (parentObj.registersHL & 0xFF) == 0;
    },
    function(parentObj) {
        var temp_var = parentObj.memoryReader[parentObj.registersHL](parentObj, parentObj.registersHL);
        var newFCarry = temp_var > 0x7F;
        temp_var = temp_var << 1 & 0xFF | (parentObj.FCarry ? 1 : 0);
        parentObj.FCarry = newFCarry;
        parentObj.memoryWriter[parentObj.registersHL](parentObj, parentObj.registersHL, temp_var);
        parentObj.FHalfCarry = parentObj.FSubtract = false;
        parentObj.FZero = temp_var == 0;
    },
    function(parentObj) {
        var newFCarry = parentObj.registerA > 0x7F;
        parentObj.registerA = parentObj.registerA << 1 & 0xFF | (parentObj.FCarry ? 1 : 0);
        parentObj.FCarry = newFCarry;
        parentObj.FHalfCarry = parentObj.FSubtract = false;
        parentObj.FZero = parentObj.registerA == 0;
    },
    function(parentObj) {
        var newFCarry = (parentObj.registerB & 0x01) == 0x01;
        parentObj.registerB = (parentObj.FCarry ? 0x80 : 0) | parentObj.registerB >> 1;
        parentObj.FCarry = newFCarry;
        parentObj.FHalfCarry = parentObj.FSubtract = false;
        parentObj.FZero = parentObj.registerB == 0;
    },
    function(parentObj) {
        var newFCarry = (parentObj.registerC & 0x01) == 0x01;
        parentObj.registerC = (parentObj.FCarry ? 0x80 : 0) | parentObj.registerC >> 1;
        parentObj.FCarry = newFCarry;
        parentObj.FHalfCarry = parentObj.FSubtract = false;
        parentObj.FZero = parentObj.registerC == 0;
    },
    function(parentObj) {
        var newFCarry = (parentObj.registerD & 0x01) == 0x01;
        parentObj.registerD = (parentObj.FCarry ? 0x80 : 0) | parentObj.registerD >> 1;
        parentObj.FCarry = newFCarry;
        parentObj.FHalfCarry = parentObj.FSubtract = false;
        parentObj.FZero = parentObj.registerD == 0;
    },
    function(parentObj) {
        var newFCarry = (parentObj.registerE & 0x01) == 0x01;
        parentObj.registerE = (parentObj.FCarry ? 0x80 : 0) | parentObj.registerE >> 1;
        parentObj.FCarry = newFCarry;
        parentObj.FHalfCarry = parentObj.FSubtract = false;
        parentObj.FZero = parentObj.registerE == 0;
    },
    function(parentObj) {
        var newFCarry = (parentObj.registersHL & 0x0100) == 0x0100;
        parentObj.registersHL = (parentObj.FCarry ? 0x8000 : 0) | parentObj.registersHL >> 1 & 0xFF00 | parentObj.registersHL & 0xFF;
        parentObj.FCarry = newFCarry;
        parentObj.FHalfCarry = parentObj.FSubtract = false;
        parentObj.FZero = parentObj.registersHL < 0x100;
    },
    function(parentObj) {
        var newFCarry = (parentObj.registersHL & 0x01) == 0x01;
        parentObj.registersHL = parentObj.registersHL & 0xFF00 | (parentObj.FCarry ? 0x80 : 0) | (parentObj.registersHL & 0xFF) >> 1;
        parentObj.FCarry = newFCarry;
        parentObj.FHalfCarry = parentObj.FSubtract = false;
        parentObj.FZero = (parentObj.registersHL & 0xFF) == 0;
    },
    function(parentObj) {
        var temp_var = parentObj.memoryReader[parentObj.registersHL](parentObj, parentObj.registersHL);
        var newFCarry = (temp_var & 0x01) == 0x01;
        temp_var = (parentObj.FCarry ? 0x80 : 0) | temp_var >> 1;
        parentObj.FCarry = newFCarry;
        parentObj.memoryWriter[parentObj.registersHL](parentObj, parentObj.registersHL, temp_var);
        parentObj.FHalfCarry = parentObj.FSubtract = false;
        parentObj.FZero = temp_var == 0;
    },
    function(parentObj) {
        var newFCarry = (parentObj.registerA & 0x01) == 0x01;
        parentObj.registerA = (parentObj.FCarry ? 0x80 : 0) | parentObj.registerA >> 1;
        parentObj.FCarry = newFCarry;
        parentObj.FHalfCarry = parentObj.FSubtract = false;
        parentObj.FZero = parentObj.registerA == 0;
    },
    function(parentObj) {
        parentObj.FCarry = parentObj.registerB > 0x7F;
        parentObj.registerB = parentObj.registerB << 1 & 0xFF;
        parentObj.FHalfCarry = parentObj.FSubtract = false;
        parentObj.FZero = parentObj.registerB == 0;
    },
    function(parentObj) {
        parentObj.FCarry = parentObj.registerC > 0x7F;
        parentObj.registerC = parentObj.registerC << 1 & 0xFF;
        parentObj.FHalfCarry = parentObj.FSubtract = false;
        parentObj.FZero = parentObj.registerC == 0;
    },
    function(parentObj) {
        parentObj.FCarry = parentObj.registerD > 0x7F;
        parentObj.registerD = parentObj.registerD << 1 & 0xFF;
        parentObj.FHalfCarry = parentObj.FSubtract = false;
        parentObj.FZero = parentObj.registerD == 0;
    },
    function(parentObj) {
        parentObj.FCarry = parentObj.registerE > 0x7F;
        parentObj.registerE = parentObj.registerE << 1 & 0xFF;
        parentObj.FHalfCarry = parentObj.FSubtract = false;
        parentObj.FZero = parentObj.registerE == 0;
    },
    function(parentObj) {
        parentObj.FCarry = parentObj.registersHL > 0x7FFF;
        parentObj.registersHL = parentObj.registersHL << 1 & 0xFE00 | parentObj.registersHL & 0xFF;
        parentObj.FHalfCarry = parentObj.FSubtract = false;
        parentObj.FZero = parentObj.registersHL < 0x100;
    },
    function(parentObj) {
        parentObj.FCarry = (parentObj.registersHL & 0x0080) == 0x0080;
        parentObj.registersHL = parentObj.registersHL & 0xFF00 | parentObj.registersHL << 1 & 0xFF;
        parentObj.FHalfCarry = parentObj.FSubtract = false;
        parentObj.FZero = (parentObj.registersHL & 0xFF) == 0;
    },
    function(parentObj) {
        var temp_var = parentObj.memoryReader[parentObj.registersHL](parentObj, parentObj.registersHL);
        parentObj.FCarry = temp_var > 0x7F;
        temp_var = temp_var << 1 & 0xFF;
        parentObj.memoryWriter[parentObj.registersHL](parentObj, parentObj.registersHL, temp_var);
        parentObj.FHalfCarry = parentObj.FSubtract = false;
        parentObj.FZero = temp_var == 0;
    },
    function(parentObj) {
        parentObj.FCarry = parentObj.registerA > 0x7F;
        parentObj.registerA = parentObj.registerA << 1 & 0xFF;
        parentObj.FHalfCarry = parentObj.FSubtract = false;
        parentObj.FZero = parentObj.registerA == 0;
    },
    function(parentObj) {
        parentObj.FCarry = (parentObj.registerB & 0x01) == 0x01;
        parentObj.registerB = parentObj.registerB & 0x80 | parentObj.registerB >> 1;
        parentObj.FHalfCarry = parentObj.FSubtract = false;
        parentObj.FZero = parentObj.registerB == 0;
    },
    function(parentObj) {
        parentObj.FCarry = (parentObj.registerC & 0x01) == 0x01;
        parentObj.registerC = parentObj.registerC & 0x80 | parentObj.registerC >> 1;
        parentObj.FHalfCarry = parentObj.FSubtract = false;
        parentObj.FZero = parentObj.registerC == 0;
    },
    function(parentObj) {
        parentObj.FCarry = (parentObj.registerD & 0x01) == 0x01;
        parentObj.registerD = parentObj.registerD & 0x80 | parentObj.registerD >> 1;
        parentObj.FHalfCarry = parentObj.FSubtract = false;
        parentObj.FZero = parentObj.registerD == 0;
    },
    function(parentObj) {
        parentObj.FCarry = (parentObj.registerE & 0x01) == 0x01;
        parentObj.registerE = parentObj.registerE & 0x80 | parentObj.registerE >> 1;
        parentObj.FHalfCarry = parentObj.FSubtract = false;
        parentObj.FZero = parentObj.registerE == 0;
    },
    function(parentObj) {
        parentObj.FCarry = (parentObj.registersHL & 0x0100) == 0x0100;
        parentObj.registersHL = parentObj.registersHL >> 1 & 0xFF00 | parentObj.registersHL & 0x80FF;
        parentObj.FHalfCarry = parentObj.FSubtract = false;
        parentObj.FZero = parentObj.registersHL < 0x100;
    },
    function(parentObj) {
        parentObj.FCarry = (parentObj.registersHL & 0x0001) == 0x0001;
        parentObj.registersHL = parentObj.registersHL & 0xFF80 | (parentObj.registersHL & 0xFF) >> 1;
        parentObj.FHalfCarry = parentObj.FSubtract = false;
        parentObj.FZero = (parentObj.registersHL & 0xFF) == 0;
    },
    function(parentObj) {
        var temp_var = parentObj.memoryReader[parentObj.registersHL](parentObj, parentObj.registersHL);
        parentObj.FCarry = (temp_var & 0x01) == 0x01;
        temp_var = temp_var & 0x80 | temp_var >> 1;
        parentObj.memoryWriter[parentObj.registersHL](parentObj, parentObj.registersHL, temp_var);
        parentObj.FHalfCarry = parentObj.FSubtract = false;
        parentObj.FZero = temp_var == 0;
    },
    function(parentObj) {
        parentObj.FCarry = (parentObj.registerA & 0x01) == 0x01;
        parentObj.registerA = parentObj.registerA & 0x80 | parentObj.registerA >> 1;
        parentObj.FHalfCarry = parentObj.FSubtract = false;
        parentObj.FZero = parentObj.registerA == 0;
    },
    function(parentObj) {
        parentObj.registerB = (parentObj.registerB & 0xF) << 4 | parentObj.registerB >> 4;
        parentObj.FZero = parentObj.registerB == 0;
        parentObj.FCarry = parentObj.FHalfCarry = parentObj.FSubtract = false;
    },
    function(parentObj) {
        parentObj.registerC = (parentObj.registerC & 0xF) << 4 | parentObj.registerC >> 4;
        parentObj.FZero = parentObj.registerC == 0;
        parentObj.FCarry = parentObj.FHalfCarry = parentObj.FSubtract = false;
    },
    function(parentObj) {
        parentObj.registerD = (parentObj.registerD & 0xF) << 4 | parentObj.registerD >> 4;
        parentObj.FZero = parentObj.registerD == 0;
        parentObj.FCarry = parentObj.FHalfCarry = parentObj.FSubtract = false;
    },
    function(parentObj) {
        parentObj.registerE = (parentObj.registerE & 0xF) << 4 | parentObj.registerE >> 4;
        parentObj.FZero = parentObj.registerE == 0;
        parentObj.FCarry = parentObj.FHalfCarry = parentObj.FSubtract = false;
    },
    function(parentObj) {
        parentObj.registersHL = (parentObj.registersHL & 0xF00) << 4 | (parentObj.registersHL & 0xF000) >> 4 | parentObj.registersHL & 0xFF;
        parentObj.FZero = parentObj.registersHL < 0x100;
        parentObj.FCarry = parentObj.FHalfCarry = parentObj.FSubtract = false;
    },
    function(parentObj) {
        parentObj.registersHL = parentObj.registersHL & 0xFF00 | (parentObj.registersHL & 0xF) << 4 | (parentObj.registersHL & 0xF0) >> 4;
        parentObj.FZero = (parentObj.registersHL & 0xFF) == 0;
        parentObj.FCarry = parentObj.FHalfCarry = parentObj.FSubtract = false;
    },
    function(parentObj) {
        var temp_var = parentObj.memoryReader[parentObj.registersHL](parentObj, parentObj.registersHL);
        temp_var = (temp_var & 0xF) << 4 | temp_var >> 4;
        parentObj.memoryWriter[parentObj.registersHL](parentObj, parentObj.registersHL, temp_var);
        parentObj.FZero = temp_var == 0;
        parentObj.FCarry = parentObj.FHalfCarry = parentObj.FSubtract = false;
    },
    function(parentObj) {
        parentObj.registerA = (parentObj.registerA & 0xF) << 4 | parentObj.registerA >> 4;
        parentObj.FZero = parentObj.registerA == 0;
        parentObj.FCarry = parentObj.FHalfCarry = parentObj.FSubtract = false;
    },
    function(parentObj) {
        parentObj.FCarry = (parentObj.registerB & 0x01) == 0x01;
        parentObj.registerB >>= 1;
        parentObj.FHalfCarry = parentObj.FSubtract = false;
        parentObj.FZero = parentObj.registerB == 0;
    },
    function(parentObj) {
        parentObj.FCarry = (parentObj.registerC & 0x01) == 0x01;
        parentObj.registerC >>= 1;
        parentObj.FHalfCarry = parentObj.FSubtract = false;
        parentObj.FZero = parentObj.registerC == 0;
    },
    function(parentObj) {
        parentObj.FCarry = (parentObj.registerD & 0x01) == 0x01;
        parentObj.registerD >>= 1;
        parentObj.FHalfCarry = parentObj.FSubtract = false;
        parentObj.FZero = parentObj.registerD == 0;
    },
    function(parentObj) {
        parentObj.FCarry = (parentObj.registerE & 0x01) == 0x01;
        parentObj.registerE >>= 1;
        parentObj.FHalfCarry = parentObj.FSubtract = false;
        parentObj.FZero = parentObj.registerE == 0;
    },
    function(parentObj) {
        parentObj.FCarry = (parentObj.registersHL & 0x0100) == 0x0100;
        parentObj.registersHL = parentObj.registersHL >> 1 & 0xFF00 | parentObj.registersHL & 0xFF;
        parentObj.FHalfCarry = parentObj.FSubtract = false;
        parentObj.FZero = parentObj.registersHL < 0x100;
    },
    function(parentObj) {
        parentObj.FCarry = (parentObj.registersHL & 0x0001) == 0x0001;
        parentObj.registersHL = parentObj.registersHL & 0xFF00 | (parentObj.registersHL & 0xFF) >> 1;
        parentObj.FHalfCarry = parentObj.FSubtract = false;
        parentObj.FZero = (parentObj.registersHL & 0xFF) == 0;
    },
    function(parentObj) {
        var temp_var = parentObj.memoryReader[parentObj.registersHL](parentObj, parentObj.registersHL);
        parentObj.FCarry = (temp_var & 0x01) == 0x01;
        parentObj.memoryWriter[parentObj.registersHL](parentObj, parentObj.registersHL, temp_var >> 1);
        parentObj.FHalfCarry = parentObj.FSubtract = false;
        parentObj.FZero = temp_var < 2;
    },
    function(parentObj) {
        parentObj.FCarry = (parentObj.registerA & 0x01) == 0x01;
        parentObj.registerA >>= 1;
        parentObj.FHalfCarry = parentObj.FSubtract = false;
        parentObj.FZero = parentObj.registerA == 0;
    },
    function(parentObj) {
        parentObj.FHalfCarry = true;
        parentObj.FSubtract = false;
        parentObj.FZero = (parentObj.registerB & 0x01) == 0;
    },
    function(parentObj) {
        parentObj.FHalfCarry = true;
        parentObj.FSubtract = false;
        parentObj.FZero = (parentObj.registerC & 0x01) == 0;
    },
    function(parentObj) {
        parentObj.FHalfCarry = true;
        parentObj.FSubtract = false;
        parentObj.FZero = (parentObj.registerD & 0x01) == 0;
    },
    function(parentObj) {
        parentObj.FHalfCarry = true;
        parentObj.FSubtract = false;
        parentObj.FZero = (parentObj.registerE & 0x01) == 0;
    },
    function(parentObj) {
        parentObj.FHalfCarry = true;
        parentObj.FSubtract = false;
        parentObj.FZero = (parentObj.registersHL & 0x0100) == 0;
    },
    function(parentObj) {
        parentObj.FHalfCarry = true;
        parentObj.FSubtract = false;
        parentObj.FZero = (parentObj.registersHL & 0x0001) == 0;
    },
    function(parentObj) {
        parentObj.FHalfCarry = true;
        parentObj.FSubtract = false;
        parentObj.FZero = (parentObj.memoryReader[parentObj.registersHL](parentObj, parentObj.registersHL) & 0x01) == 0;
    },
    function(parentObj) {
        parentObj.FHalfCarry = true;
        parentObj.FSubtract = false;
        parentObj.FZero = (parentObj.registerA & 0x01) == 0;
    },
    function(parentObj) {
        parentObj.FHalfCarry = true;
        parentObj.FSubtract = false;
        parentObj.FZero = (parentObj.registerB & 0x02) == 0;
    },
    function(parentObj) {
        parentObj.FHalfCarry = true;
        parentObj.FSubtract = false;
        parentObj.FZero = (parentObj.registerC & 0x02) == 0;
    },
    function(parentObj) {
        parentObj.FHalfCarry = true;
        parentObj.FSubtract = false;
        parentObj.FZero = (parentObj.registerD & 0x02) == 0;
    },
    function(parentObj) {
        parentObj.FHalfCarry = true;
        parentObj.FSubtract = false;
        parentObj.FZero = (parentObj.registerE & 0x02) == 0;
    },
    function(parentObj) {
        parentObj.FHalfCarry = true;
        parentObj.FSubtract = false;
        parentObj.FZero = (parentObj.registersHL & 0x0200) == 0;
    },
    function(parentObj) {
        parentObj.FHalfCarry = true;
        parentObj.FSubtract = false;
        parentObj.FZero = (parentObj.registersHL & 0x0002) == 0;
    },
    function(parentObj) {
        parentObj.FHalfCarry = true;
        parentObj.FSubtract = false;
        parentObj.FZero = (parentObj.memoryReader[parentObj.registersHL](parentObj, parentObj.registersHL) & 0x02) == 0;
    },
    function(parentObj) {
        parentObj.FHalfCarry = true;
        parentObj.FSubtract = false;
        parentObj.FZero = (parentObj.registerA & 0x02) == 0;
    },
    function(parentObj) {
        parentObj.FHalfCarry = true;
        parentObj.FSubtract = false;
        parentObj.FZero = (parentObj.registerB & 0x04) == 0;
    },
    function(parentObj) {
        parentObj.FHalfCarry = true;
        parentObj.FSubtract = false;
        parentObj.FZero = (parentObj.registerC & 0x04) == 0;
    },
    function(parentObj) {
        parentObj.FHalfCarry = true;
        parentObj.FSubtract = false;
        parentObj.FZero = (parentObj.registerD & 0x04) == 0;
    },
    function(parentObj) {
        parentObj.FHalfCarry = true;
        parentObj.FSubtract = false;
        parentObj.FZero = (parentObj.registerE & 0x04) == 0;
    },
    function(parentObj) {
        parentObj.FHalfCarry = true;
        parentObj.FSubtract = false;
        parentObj.FZero = (parentObj.registersHL & 0x0400) == 0;
    },
    function(parentObj) {
        parentObj.FHalfCarry = true;
        parentObj.FSubtract = false;
        parentObj.FZero = (parentObj.registersHL & 0x0004) == 0;
    },
    function(parentObj) {
        parentObj.FHalfCarry = true;
        parentObj.FSubtract = false;
        parentObj.FZero = (parentObj.memoryReader[parentObj.registersHL](parentObj, parentObj.registersHL) & 0x04) == 0;
    },
    function(parentObj) {
        parentObj.FHalfCarry = true;
        parentObj.FSubtract = false;
        parentObj.FZero = (parentObj.registerA & 0x04) == 0;
    },
    function(parentObj) {
        parentObj.FHalfCarry = true;
        parentObj.FSubtract = false;
        parentObj.FZero = (parentObj.registerB & 0x08) == 0;
    },
    function(parentObj) {
        parentObj.FHalfCarry = true;
        parentObj.FSubtract = false;
        parentObj.FZero = (parentObj.registerC & 0x08) == 0;
    },
    function(parentObj) {
        parentObj.FHalfCarry = true;
        parentObj.FSubtract = false;
        parentObj.FZero = (parentObj.registerD & 0x08) == 0;
    },
    function(parentObj) {
        parentObj.FHalfCarry = true;
        parentObj.FSubtract = false;
        parentObj.FZero = (parentObj.registerE & 0x08) == 0;
    },
    function(parentObj) {
        parentObj.FHalfCarry = true;
        parentObj.FSubtract = false;
        parentObj.FZero = (parentObj.registersHL & 0x0800) == 0;
    },
    function(parentObj) {
        parentObj.FHalfCarry = true;
        parentObj.FSubtract = false;
        parentObj.FZero = (parentObj.registersHL & 0x0008) == 0;
    },
    function(parentObj) {
        parentObj.FHalfCarry = true;
        parentObj.FSubtract = false;
        parentObj.FZero = (parentObj.memoryReader[parentObj.registersHL](parentObj, parentObj.registersHL) & 0x08) == 0;
    },
    function(parentObj) {
        parentObj.FHalfCarry = true;
        parentObj.FSubtract = false;
        parentObj.FZero = (parentObj.registerA & 0x08) == 0;
    },
    function(parentObj) {
        parentObj.FHalfCarry = true;
        parentObj.FSubtract = false;
        parentObj.FZero = (parentObj.registerB & 0x10) == 0;
    },
    function(parentObj) {
        parentObj.FHalfCarry = true;
        parentObj.FSubtract = false;
        parentObj.FZero = (parentObj.registerC & 0x10) == 0;
    },
    function(parentObj) {
        parentObj.FHalfCarry = true;
        parentObj.FSubtract = false;
        parentObj.FZero = (parentObj.registerD & 0x10) == 0;
    },
    function(parentObj) {
        parentObj.FHalfCarry = true;
        parentObj.FSubtract = false;
        parentObj.FZero = (parentObj.registerE & 0x10) == 0;
    },
    function(parentObj) {
        parentObj.FHalfCarry = true;
        parentObj.FSubtract = false;
        parentObj.FZero = (parentObj.registersHL & 0x1000) == 0;
    },
    function(parentObj) {
        parentObj.FHalfCarry = true;
        parentObj.FSubtract = false;
        parentObj.FZero = (parentObj.registersHL & 0x0010) == 0;
    },
    function(parentObj) {
        parentObj.FHalfCarry = true;
        parentObj.FSubtract = false;
        parentObj.FZero = (parentObj.memoryReader[parentObj.registersHL](parentObj, parentObj.registersHL) & 0x10) == 0;
    },
    function(parentObj) {
        parentObj.FHalfCarry = true;
        parentObj.FSubtract = false;
        parentObj.FZero = (parentObj.registerA & 0x10) == 0;
    },
    function(parentObj) {
        parentObj.FHalfCarry = true;
        parentObj.FSubtract = false;
        parentObj.FZero = (parentObj.registerB & 0x20) == 0;
    },
    function(parentObj) {
        parentObj.FHalfCarry = true;
        parentObj.FSubtract = false;
        parentObj.FZero = (parentObj.registerC & 0x20) == 0;
    },
    function(parentObj) {
        parentObj.FHalfCarry = true;
        parentObj.FSubtract = false;
        parentObj.FZero = (parentObj.registerD & 0x20) == 0;
    },
    function(parentObj) {
        parentObj.FHalfCarry = true;
        parentObj.FSubtract = false;
        parentObj.FZero = (parentObj.registerE & 0x20) == 0;
    },
    function(parentObj) {
        parentObj.FHalfCarry = true;
        parentObj.FSubtract = false;
        parentObj.FZero = (parentObj.registersHL & 0x2000) == 0;
    },
    function(parentObj) {
        parentObj.FHalfCarry = true;
        parentObj.FSubtract = false;
        parentObj.FZero = (parentObj.registersHL & 0x0020) == 0;
    },
    function(parentObj) {
        parentObj.FHalfCarry = true;
        parentObj.FSubtract = false;
        parentObj.FZero = (parentObj.memoryReader[parentObj.registersHL](parentObj, parentObj.registersHL) & 0x20) == 0;
    },
    function(parentObj) {
        parentObj.FHalfCarry = true;
        parentObj.FSubtract = false;
        parentObj.FZero = (parentObj.registerA & 0x20) == 0;
    },
    function(parentObj) {
        parentObj.FHalfCarry = true;
        parentObj.FSubtract = false;
        parentObj.FZero = (parentObj.registerB & 0x40) == 0;
    },
    function(parentObj) {
        parentObj.FHalfCarry = true;
        parentObj.FSubtract = false;
        parentObj.FZero = (parentObj.registerC & 0x40) == 0;
    },
    function(parentObj) {
        parentObj.FHalfCarry = true;
        parentObj.FSubtract = false;
        parentObj.FZero = (parentObj.registerD & 0x40) == 0;
    },
    function(parentObj) {
        parentObj.FHalfCarry = true;
        parentObj.FSubtract = false;
        parentObj.FZero = (parentObj.registerE & 0x40) == 0;
    },
    function(parentObj) {
        parentObj.FHalfCarry = true;
        parentObj.FSubtract = false;
        parentObj.FZero = (parentObj.registersHL & 0x4000) == 0;
    },
    function(parentObj) {
        parentObj.FHalfCarry = true;
        parentObj.FSubtract = false;
        parentObj.FZero = (parentObj.registersHL & 0x0040) == 0;
    },
    function(parentObj) {
        parentObj.FHalfCarry = true;
        parentObj.FSubtract = false;
        parentObj.FZero = (parentObj.memoryReader[parentObj.registersHL](parentObj, parentObj.registersHL) & 0x40) == 0;
    },
    function(parentObj) {
        parentObj.FHalfCarry = true;
        parentObj.FSubtract = false;
        parentObj.FZero = (parentObj.registerA & 0x40) == 0;
    },
    function(parentObj) {
        parentObj.FHalfCarry = true;
        parentObj.FSubtract = false;
        parentObj.FZero = (parentObj.registerB & 0x80) == 0;
    },
    function(parentObj) {
        parentObj.FHalfCarry = true;
        parentObj.FSubtract = false;
        parentObj.FZero = (parentObj.registerC & 0x80) == 0;
    },
    function(parentObj) {
        parentObj.FHalfCarry = true;
        parentObj.FSubtract = false;
        parentObj.FZero = (parentObj.registerD & 0x80) == 0;
    },
    function(parentObj) {
        parentObj.FHalfCarry = true;
        parentObj.FSubtract = false;
        parentObj.FZero = (parentObj.registerE & 0x80) == 0;
    },
    function(parentObj) {
        parentObj.FHalfCarry = true;
        parentObj.FSubtract = false;
        parentObj.FZero = (parentObj.registersHL & 0x8000) == 0;
    },
    function(parentObj) {
        parentObj.FHalfCarry = true;
        parentObj.FSubtract = false;
        parentObj.FZero = (parentObj.registersHL & 0x0080) == 0;
    },
    function(parentObj) {
        parentObj.FHalfCarry = true;
        parentObj.FSubtract = false;
        parentObj.FZero = (parentObj.memoryReader[parentObj.registersHL](parentObj, parentObj.registersHL) & 0x80) == 0;
    },
    function(parentObj) {
        parentObj.FHalfCarry = true;
        parentObj.FSubtract = false;
        parentObj.FZero = (parentObj.registerA & 0x80) == 0;
    },
    function(parentObj) {
        parentObj.registerB &= 0xFE;
    },
    function(parentObj) {
        parentObj.registerC &= 0xFE;
    },
    function(parentObj) {
        parentObj.registerD &= 0xFE;
    },
    function(parentObj) {
        parentObj.registerE &= 0xFE;
    },
    function(parentObj) {
        parentObj.registersHL &= 0xFEFF;
    },
    function(parentObj) {
        parentObj.registersHL &= 0xFFFE;
    },
    function(parentObj) {
        parentObj.memoryWriter[parentObj.registersHL](parentObj, parentObj.registersHL, parentObj.memoryReader[parentObj.registersHL](parentObj, parentObj.registersHL) & 0xFE);
    },
    function(parentObj) {
        parentObj.registerA &= 0xFE;
    },
    function(parentObj) {
        parentObj.registerB &= 0xFD;
    },
    function(parentObj) {
        parentObj.registerC &= 0xFD;
    },
    function(parentObj) {
        parentObj.registerD &= 0xFD;
    },
    function(parentObj) {
        parentObj.registerE &= 0xFD;
    },
    function(parentObj) {
        parentObj.registersHL &= 0xFDFF;
    },
    function(parentObj) {
        parentObj.registersHL &= 0xFFFD;
    },
    function(parentObj) {
        parentObj.memoryWriter[parentObj.registersHL](parentObj, parentObj.registersHL, parentObj.memoryReader[parentObj.registersHL](parentObj, parentObj.registersHL) & 0xFD);
    },
    function(parentObj) {
        parentObj.registerA &= 0xFD;
    },
    function(parentObj) {
        parentObj.registerB &= 0xFB;
    },
    function(parentObj) {
        parentObj.registerC &= 0xFB;
    },
    function(parentObj) {
        parentObj.registerD &= 0xFB;
    },
    function(parentObj) {
        parentObj.registerE &= 0xFB;
    },
    function(parentObj) {
        parentObj.registersHL &= 0xFBFF;
    },
    function(parentObj) {
        parentObj.registersHL &= 0xFFFB;
    },
    function(parentObj) {
        parentObj.memoryWriter[parentObj.registersHL](parentObj, parentObj.registersHL, parentObj.memoryReader[parentObj.registersHL](parentObj, parentObj.registersHL) & 0xFB);
    },
    function(parentObj) {
        parentObj.registerA &= 0xFB;
    },
    function(parentObj) {
        parentObj.registerB &= 0xF7;
    },
    function(parentObj) {
        parentObj.registerC &= 0xF7;
    },
    function(parentObj) {
        parentObj.registerD &= 0xF7;
    },
    function(parentObj) {
        parentObj.registerE &= 0xF7;
    },
    function(parentObj) {
        parentObj.registersHL &= 0xF7FF;
    },
    function(parentObj) {
        parentObj.registersHL &= 0xFFF7;
    },
    function(parentObj) {
        parentObj.memoryWriter[parentObj.registersHL](parentObj, parentObj.registersHL, parentObj.memoryReader[parentObj.registersHL](parentObj, parentObj.registersHL) & 0xF7);
    },
    function(parentObj) {
        parentObj.registerA &= 0xF7;
    },
    function(parentObj) {
        parentObj.registerB &= 0xEF;
    },
    function(parentObj) {
        parentObj.registerC &= 0xEF;
    },
    function(parentObj) {
        parentObj.registerD &= 0xEF;
    },
    function(parentObj) {
        parentObj.registerE &= 0xEF;
    },
    function(parentObj) {
        parentObj.registersHL &= 0xEFFF;
    },
    function(parentObj) {
        parentObj.registersHL &= 0xFFEF;
    },
    function(parentObj) {
        parentObj.memoryWriter[parentObj.registersHL](parentObj, parentObj.registersHL, parentObj.memoryReader[parentObj.registersHL](parentObj, parentObj.registersHL) & 0xEF);
    },
    function(parentObj) {
        parentObj.registerA &= 0xEF;
    },
    function(parentObj) {
        parentObj.registerB &= 0xDF;
    },
    function(parentObj) {
        parentObj.registerC &= 0xDF;
    },
    function(parentObj) {
        parentObj.registerD &= 0xDF;
    },
    function(parentObj) {
        parentObj.registerE &= 0xDF;
    },
    function(parentObj) {
        parentObj.registersHL &= 0xDFFF;
    },
    function(parentObj) {
        parentObj.registersHL &= 0xFFDF;
    },
    function(parentObj) {
        parentObj.memoryWriter[parentObj.registersHL](parentObj, parentObj.registersHL, parentObj.memoryReader[parentObj.registersHL](parentObj, parentObj.registersHL) & 0xDF);
    },
    function(parentObj) {
        parentObj.registerA &= 0xDF;
    },
    function(parentObj) {
        parentObj.registerB &= 0xBF;
    },
    function(parentObj) {
        parentObj.registerC &= 0xBF;
    },
    function(parentObj) {
        parentObj.registerD &= 0xBF;
    },
    function(parentObj) {
        parentObj.registerE &= 0xBF;
    },
    function(parentObj) {
        parentObj.registersHL &= 0xBFFF;
    },
    function(parentObj) {
        parentObj.registersHL &= 0xFFBF;
    },
    function(parentObj) {
        parentObj.memoryWriter[parentObj.registersHL](parentObj, parentObj.registersHL, parentObj.memoryReader[parentObj.registersHL](parentObj, parentObj.registersHL) & 0xBF);
    },
    function(parentObj) {
        parentObj.registerA &= 0xBF;
    },
    function(parentObj) {
        parentObj.registerB &= 0x7F;
    },
    function(parentObj) {
        parentObj.registerC &= 0x7F;
    },
    function(parentObj) {
        parentObj.registerD &= 0x7F;
    },
    function(parentObj) {
        parentObj.registerE &= 0x7F;
    },
    function(parentObj) {
        parentObj.registersHL &= 0x7FFF;
    },
    function(parentObj) {
        parentObj.registersHL &= 0xFF7F;
    },
    function(parentObj) {
        parentObj.memoryWriter[parentObj.registersHL](parentObj, parentObj.registersHL, parentObj.memoryReader[parentObj.registersHL](parentObj, parentObj.registersHL) & 0x7F);
    },
    function(parentObj) {
        parentObj.registerA &= 0x7F;
    },
    function(parentObj) {
        parentObj.registerB |= 0x01;
    },
    function(parentObj) {
        parentObj.registerC |= 0x01;
    },
    function(parentObj) {
        parentObj.registerD |= 0x01;
    },
    function(parentObj) {
        parentObj.registerE |= 0x01;
    },
    function(parentObj) {
        parentObj.registersHL |= 0x0100;
    },
    function(parentObj) {
        parentObj.registersHL |= 0x01;
    },
    function(parentObj) {
        parentObj.memoryWriter[parentObj.registersHL](parentObj, parentObj.registersHL, parentObj.memoryReader[parentObj.registersHL](parentObj, parentObj.registersHL) | 0x01);
    },
    function(parentObj) {
        parentObj.registerA |= 0x01;
    },
    function(parentObj) {
        parentObj.registerB |= 0x02;
    },
    function(parentObj) {
        parentObj.registerC |= 0x02;
    },
    function(parentObj) {
        parentObj.registerD |= 0x02;
    },
    function(parentObj) {
        parentObj.registerE |= 0x02;
    },
    function(parentObj) {
        parentObj.registersHL |= 0x0200;
    },
    function(parentObj) {
        parentObj.registersHL |= 0x02;
    },
    function(parentObj) {
        parentObj.memoryWriter[parentObj.registersHL](parentObj, parentObj.registersHL, parentObj.memoryReader[parentObj.registersHL](parentObj, parentObj.registersHL) | 0x02);
    },
    function(parentObj) {
        parentObj.registerA |= 0x02;
    },
    function(parentObj) {
        parentObj.registerB |= 0x04;
    },
    function(parentObj) {
        parentObj.registerC |= 0x04;
    },
    function(parentObj) {
        parentObj.registerD |= 0x04;
    },
    function(parentObj) {
        parentObj.registerE |= 0x04;
    },
    function(parentObj) {
        parentObj.registersHL |= 0x0400;
    },
    function(parentObj) {
        parentObj.registersHL |= 0x04;
    },
    function(parentObj) {
        parentObj.memoryWriter[parentObj.registersHL](parentObj, parentObj.registersHL, parentObj.memoryReader[parentObj.registersHL](parentObj, parentObj.registersHL) | 0x04);
    },
    function(parentObj) {
        parentObj.registerA |= 0x04;
    },
    function(parentObj) {
        parentObj.registerB |= 0x08;
    },
    function(parentObj) {
        parentObj.registerC |= 0x08;
    },
    function(parentObj) {
        parentObj.registerD |= 0x08;
    },
    function(parentObj) {
        parentObj.registerE |= 0x08;
    },
    function(parentObj) {
        parentObj.registersHL |= 0x0800;
    },
    function(parentObj) {
        parentObj.registersHL |= 0x08;
    },
    function(parentObj) {
        parentObj.memoryWriter[parentObj.registersHL](parentObj, parentObj.registersHL, parentObj.memoryReader[parentObj.registersHL](parentObj, parentObj.registersHL) | 0x08);
    },
    function(parentObj) {
        parentObj.registerA |= 0x08;
    },
    function(parentObj) {
        parentObj.registerB |= 0x10;
    },
    function(parentObj) {
        parentObj.registerC |= 0x10;
    },
    function(parentObj) {
        parentObj.registerD |= 0x10;
    },
    function(parentObj) {
        parentObj.registerE |= 0x10;
    },
    function(parentObj) {
        parentObj.registersHL |= 0x1000;
    },
    function(parentObj) {
        parentObj.registersHL |= 0x10;
    },
    function(parentObj) {
        parentObj.memoryWriter[parentObj.registersHL](parentObj, parentObj.registersHL, parentObj.memoryReader[parentObj.registersHL](parentObj, parentObj.registersHL) | 0x10);
    },
    function(parentObj) {
        parentObj.registerA |= 0x10;
    },
    function(parentObj) {
        parentObj.registerB |= 0x20;
    },
    function(parentObj) {
        parentObj.registerC |= 0x20;
    },
    function(parentObj) {
        parentObj.registerD |= 0x20;
    },
    function(parentObj) {
        parentObj.registerE |= 0x20;
    },
    function(parentObj) {
        parentObj.registersHL |= 0x2000;
    },
    function(parentObj) {
        parentObj.registersHL |= 0x20;
    },
    function(parentObj) {
        parentObj.memoryWriter[parentObj.registersHL](parentObj, parentObj.registersHL, parentObj.memoryReader[parentObj.registersHL](parentObj, parentObj.registersHL) | 0x20);
    },
    function(parentObj) {
        parentObj.registerA |= 0x20;
    },
    function(parentObj) {
        parentObj.registerB |= 0x40;
    },
    function(parentObj) {
        parentObj.registerC |= 0x40;
    },
    function(parentObj) {
        parentObj.registerD |= 0x40;
    },
    function(parentObj) {
        parentObj.registerE |= 0x40;
    },
    function(parentObj) {
        parentObj.registersHL |= 0x4000;
    },
    function(parentObj) {
        parentObj.registersHL |= 0x40;
    },
    function(parentObj) {
        parentObj.memoryWriter[parentObj.registersHL](parentObj, parentObj.registersHL, parentObj.memoryReader[parentObj.registersHL](parentObj, parentObj.registersHL) | 0x40);
    },
    function(parentObj) {
        parentObj.registerA |= 0x40;
    },
    function(parentObj) {
        parentObj.registerB |= 0x80;
    },
    function(parentObj) {
        parentObj.registerC |= 0x80;
    },
    function(parentObj) {
        parentObj.registerD |= 0x80;
    },
    function(parentObj) {
        parentObj.registerE |= 0x80;
    },
    function(parentObj) {
        parentObj.registersHL |= 0x8000;
    },
    function(parentObj) {
        parentObj.registersHL |= 0x80;
    },
    function(parentObj) {
        parentObj.memoryWriter[parentObj.registersHL](parentObj, parentObj.registersHL, parentObj.memoryReader[parentObj.registersHL](parentObj, parentObj.registersHL) | 0x80);
    },
    function(parentObj) {
        parentObj.registerA |= 0x80;
    }
];
module.exports = CBOPCODE;

},{}],"jSkaI":[function(require,module,exports) {
//Number of machine cycles for each instruction:
module.exports = [
    /*   0,  1,  2,  3,  4,  5,  6,  7,      8,  9,  A, B,  C,  D, E,  F*/ 4,
    12,
    8,
    8,
    4,
    4,
    8,
    4,
    20,
    8,
    8,
    8,
    4,
    4,
    8,
    4,
    4,
    12,
    8,
    8,
    4,
    4,
    8,
    4,
    12,
    8,
    8,
    8,
    4,
    4,
    8,
    4,
    8,
    12,
    8,
    8,
    4,
    4,
    8,
    4,
    8,
    8,
    8,
    8,
    4,
    4,
    8,
    4,
    8,
    12,
    8,
    8,
    12,
    12,
    12,
    4,
    8,
    8,
    8,
    8,
    4,
    4,
    8,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    8,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    8,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    8,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    8,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    8,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    8,
    4,
    8,
    8,
    8,
    8,
    8,
    8,
    4,
    8,
    4,
    4,
    4,
    4,
    4,
    4,
    8,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    8,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    8,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    8,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    8,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    8,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    8,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    8,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    8,
    4,
    8,
    12,
    12,
    16,
    12,
    16,
    8,
    16,
    8,
    16,
    12,
    0,
    12,
    24,
    8,
    16,
    8,
    12,
    12,
    4,
    12,
    16,
    8,
    16,
    8,
    16,
    12,
    4,
    12,
    4,
    8,
    16,
    12,
    12,
    8,
    4,
    4,
    16,
    8,
    16,
    16,
    4,
    16,
    4,
    4,
    4,
    8,
    16,
    12,
    12,
    8,
    4,
    4,
    16,
    8,
    16,
    12,
    8,
    16,
    4,
    0,
    4,
    8,
    16 //F
];

},{}],"60aH7":[function(require,module,exports) {
//Number of machine cycles for each 0xCBXX instruction:
module.exports = [
    /*  0, 1, 2, 3, 4, 5,  6, 7,        8, 9, A, B, C, D,  E, F*/ 8,
    8,
    8,
    8,
    8,
    8,
    16,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    16,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    16,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    16,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    16,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    16,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    16,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    16,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    12,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    12,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    12,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    12,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    12,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    12,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    12,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    12,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    16,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    16,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    16,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    16,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    16,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    16,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    16,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    16,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    16,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    16,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    16,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    16,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    16,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    16,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    16,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    16,
    8 //F
];

},{}],"4OuWD":[function(require,module,exports) {
"use strict";
module.exports = function() {
    throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object");
};

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["gmPuC","h7u1C"], "h7u1C", "parcelRequire8f79")

//# sourceMappingURL=index.b71e74eb.js.map
