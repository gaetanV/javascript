var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!function () {
    "use strict";
    function e(e) { return H ? Symbol() : "@@" + e; }
    function t(e, t) { B || (t = t.replace(J ? /file:\/\/\//g : /file:\/\//g, "")); var r, n = (e.message || e) + "\n  " + t; r = V && e.fileName ? new Error(n, e.fileName, e.lineNumber) : new Error(n); var o = e.originalErr ? e.originalErr.stack : e.stack; return F ? r.stack = n + "\n  " + o : r.stack = o, r.originalErr = e.originalErr || e, r; }
    function r(e, t) { throw new RangeError('Unable to resolve "' + e + '" to ' + t); }
    function n(e, t) { e = e.trim(); var n = t && t.substr(0, t.indexOf(":") + 1), o = e[0], i = e[1]; if ("/" === o && "/" === i)
        return n || r(e, t), n + e; if ("." === o && ("/" === i || "." === i && ("/" === e[2] || 2 === e.length) || 1 === e.length) || "/" === o) {
        var s, a = !n || "/" !== t[n.length];
        if (a ? (void 0 === t && r(e, t), s = t) : "/" === t[n.length + 1] ? "file:" !== n ? (s = t.substr(n.length + 2), s = s.substr(s.indexOf("/") + 1)) : s = t.substr(8) : s = t.substr(n.length + 1), "/" === o) {
            if (!a)
                return t.substr(0, t.length - s.length - 1) + e;
            r(e, t);
        }
        for (var u = s.substr(0, s.lastIndexOf("/") + 1) + e, c = [], l = void 0, d = 0; d < u.length; d++)
            if (void 0 === l)
                if ("." !== u[d])
                    l = d;
                else {
                    if ("." !== u[d + 1] || "/" !== u[d + 2] && d !== u.length - 2) {
                        if ("/" !== u[d + 1] && d !== u.length - 1) {
                            l = d;
                            continue;
                        }
                        d += 1;
                    }
                    else
                        c.pop(), d += 2;
                    a && 0 === c.length && r(e, t), d === u.length && c.push("");
                }
            else
                "/" === u[d] && (c.push(u.substr(l, d - l + 1)), l = void 0);
        return void 0 !== l && c.push(u.substr(l, u.length - l)), t.substr(0, t.length - s.length) + c.join("");
    } var f = e.indexOf(":"); return -1 !== f ? F && ":" === e[1] && "\\" === e[2] && e[0].match(/[a-z]/i) ? "file:///" + e.replace(/\\/g, "/") : e : void 0; }
    function o(e) { if (e.values)
        return e.values(); if ("undefined" == typeof Symbol || !Symbol.iterator)
        throw new Error("Symbol.iterator not supported in this browser"); var t = {}; return t[Symbol.iterator] = function () { var t = Object.keys(e), r = 0; return { next: function () { return r < t.length ? { value: e[t[r++]], done: !1 } : { value: void 0, done: !0 }; } }; }, t; }
    function i() { this.registry = new u; }
    function s(e) { if (!(e instanceof c))
        throw new TypeError("Module instantiation did not return a valid namespace object."); return e; }
    function a(e) { if (void 0 === e)
        throw new RangeError("No resolution found."); return e; }
    function u() { this[ee] = {}, this._registry = ee; }
    function c(e) { Object.defineProperty(this, te, { value: e }), Object.keys(e).forEach(l, this); }
    function l(e) { Object.defineProperty(this, e, { enumerable: !0, get: function () { return this[te][e]; } }); }
    function d() { i.call(this); var e = this.registry.delete; this.registry.delete = function (r) { var n = e.call(this, r); return t.hasOwnProperty(r) && !t[r].linkRecord && delete t[r], n; }; var t = {}; this[re] = { lastRegister: void 0, records: t }, this.trace = !1; }
    function f(e, t, r) { return e.records[t] = { key: t, registration: r, module: void 0, importerSetters: void 0, linkRecord: { instantiatePromise: void 0, dependencies: void 0, execute: void 0, executingRequire: !1, moduleObj: void 0, setters: void 0, depsInstantiatePromise: void 0, dependencyInstantiations: void 0, linked: !1, error: void 0 } }; }
    function p(e, t, r, n, o) { var i = n[t]; if (i)
        return Promise.resolve(i); var s = o.records[t]; return s && !s.module ? v(e, s, s.linkRecord, n, o) : e.resolve(t, r).then(function (t) { if (i = n[t])
        return i; s = o.records[t], (!s || s.module) && (s = f(o, t, s && s.registration)); var r = s.linkRecord; return r ? v(e, s, r, n, o) : s; }); }
    function h(e, t, r) { return function () { var e = r.lastRegister; return e ? (r.lastRegister = void 0, t.registration = e, !0) : !!t.registration; }; }
    function v(e, r, n, o, i) { return n.instantiatePromise || (n.instantiatePromise = (r.registration ? Promise.resolve() : Promise.resolve().then(function () { return i.lastRegister = void 0, e[ne](r.key, e[ne].length > 1 && h(e, r, i)); })).then(function (t) { if (void 0 !== t) {
        if (!(t instanceof c))
            throw new TypeError("Instantiate did not return a valid Module object.");
        return delete i.records[r.key], e.trace && m(e, r, n), o[r.key] = t;
    } var s = r.registration; if (r.registration = void 0, !s)
        throw new TypeError("Module instantiation did not call an anonymous or correctly named System.register."); return n.dependencies = s[0], r.importerSetters = [], n.moduleObj = {}, s[2] ? (n.moduleObj.default = {}, n.moduleObj.__useDefault = !0, n.executingRequire = s[1], n.execute = s[2]) : b(e, r, n, s[1]), n.dependencies.length || (n.linked = !0, e.trace && m(e, r, n)), r; }).catch(function (e) { throw n.error = t(e, "Instantiating " + r.key); })); }
    function y(e, t, r, n, o, i) { return e.resolve(t, r).then(function (r) { i && (i[t] = r); var s = o.records[r], a = n[r]; if (a && (!s || s.module && a !== s.module))
        return a; (!s || !a && s.module) && (s = f(o, r, s && s.registration)); var u = s.linkRecord; return u ? v(e, s, u, n, o) : s; }); }
    function m(e, t, r) { e.loads = e.loads || {}, e.loads[t.key] = { key: t.key, deps: r.dependencies, dynamicDeps: [], depMap: r.depMap || {} }; }
    function g(e, t, r) { e.loads[t].dynamicDeps.push(r); }
    function b(e, t, r, n) { var o = r.moduleObj, i = t.importerSetters, s = !1, a = n.call(G, function (e, t) { if ("object" == typeof e) {
        var r = !1;
        for (var n in e)
            t = e[n], "__useDefault" === n || n in o && o[n] === t || (r = !0, o[n] = t);
        if (r === !1)
            return t;
    }
    else {
        if ((s || e in o) && o[e] === t)
            return t;
        o[e] = t;
    } for (var a = 0; a < i.length; a++)
        i[a](o); return t; }, new O(e, t.key)); r.setters = a.setters, r.execute = a.execute, a.exports && (r.moduleObj = o = a.exports, s = !0); }
    function w(e, r, n, o, i, s) { return (n.depsInstantiatePromise || (n.depsInstantiatePromise = Promise.resolve().then(function () { for (var t = Array(n.dependencies.length), s = 0; s < n.dependencies.length; s++)
        t[s] = y(e, n.dependencies[s], r.key, o, i, e.trace && n.depMap || (n.depMap = {})); return Promise.all(t); }).then(function (e) { if (n.dependencyInstantiations = e, n.setters)
        for (var t = 0; t < e.length; t++) {
            var r = n.setters[t];
            if (r) {
                var o = e[t];
                o instanceof c ? r(o) : (r(o.module || o.linkRecord.moduleObj), o.importerSetters && o.importerSetters.push(r));
            }
        } }))).then(function () { for (var t = [], r = 0; r < n.dependencies.length; r++) {
        var a = n.dependencyInstantiations[r], u = a.linkRecord;
        u && !u.linked && (-1 === s.indexOf(a) ? (s.push(a), t.push(w(e, a, a.linkRecord, o, i, s))) : t.push(u.depsInstantiatePromise));
    } return Promise.all(t); }).then(function () { return n.linked = !0, e.trace && m(e, r, n), r; }).catch(function (e) { throw e = t(e, "Loading " + r.key), n.error = n.error || e, e; }); }
    function k(e, t) { var r = e[re]; r.records[t.key] === t && delete r.records[t.key]; var n = t.linkRecord; n && n.dependencyInstantiations && n.dependencyInstantiations.forEach(function (t, o) { if (t && !(t instanceof c) && t.linkRecord && (t.linkRecord.error && r.records[t.key] === t && k(e, t), n.setters && t.importerSetters)) {
        var i = t.importerSetters.indexOf(n.setters[o]);
        t.importerSetters.splice(i, 1);
    } }); }
    function O(e, t) { this.loader = e, this.key = this.id = t; }
    function R(e, t, r, n, o, i) { if (t.module)
        return t.module; if (r.error)
        throw r.error; if (i && -1 !== i.indexOf(t))
        return t.linkRecord.moduleObj; var s = j(e, t, r, n, o, r.setters ? [] : i || []); if (s)
        throw k(e, t), s; return t.module; }
    function S(e, t, r, n, o, i, s) { return function (a) { for (var u = 0; u < r.length; u++)
        if (r[u] === a) {
            var l, d = n[u];
            return l = d instanceof c ? d : R(e, d, d.linkRecord, o, i, s), l.__useDefault ? l.default : l;
        } throw new Error("Module " + a + " not declared as a System.registerDynamic dependency of " + t); }; }
    function j(e, r, n, o, i, s) { s.push(r); var a; if (n.setters)
        for (var u, l, d = 0; d < n.dependencies.length; d++)
            if (u = n.dependencyInstantiations[d], !(u instanceof c) && (l = u.linkRecord, l && -1 === s.indexOf(u) && (a = l.error ? l.error : j(e, u, l, o, i, l.setters ? s : [])), a))
                return n.error = t(a, "Evaluating " + r.key); if (n.execute)
        if (n.setters)
            a = P(n.execute);
        else {
            var f = { id: r.key }, p = n.moduleObj;
            Object.defineProperty(f, "exports", { configurable: !0, set: function (e) { p.default = e; }, get: function () { return p.default; } });
            var h = S(e, r.key, n.dependencies, n.dependencyInstantiations, o, i, s);
            if (!n.executingRequire)
                for (var d = 0; d < n.dependencies.length; d++)
                    h(n.dependencies[d]);
            a = x(n.execute, h, p.default, f), f.exports !== p.default && (p.default = f.exports);
            var v = p.default;
            if (v && v.__esModule)
                for (var y in p.default)
                    Object.hasOwnProperty.call(p.default, y) && "default" !== y && (p[y] = v[y]);
        } if (a)
        return n.error = t(a, "Evaluating " + r.key); if (o[r.key] = r.module = new c(n.moduleObj), !n.setters) {
        if (r.importerSetters)
            for (var d = 0; d < r.importerSetters.length; d++)
                r.importerSetters[d](r.module);
        r.importerSetters = void 0;
    } r.linkRecord = void 0; }
    function P(e) { try {
        e.call(oe);
    }
    catch (e) {
        return e;
    } }
    function x(e, t, r, n) { try {
        var o = e.call(G, t, r, n);
        void 0 !== o && (n.exports = o);
    }
    catch (e) {
        return e;
    } }
    function E(e) { return void 0 === ie && (ie = "undefined" != typeof Symbol && !!Symbol.toStringTag), e instanceof c || ie && "[object Module]" == Object.prototype.toString.call(e); }
    function L(e, t, r) { var n = new Uint8Array(t); return 0 === n[0] && 97 === n[1] && 115 === n[2] ? WebAssembly.compile(t).then(function (t) { var n = [], o = [], i = {}; return WebAssembly.Module.imports && WebAssembly.Module.imports(t).forEach(function (e) { var t = e.module; o.push(function (e) { i[t] = e; }), -1 === n.indexOf(t) && n.push(t); }), e.register(n, function (e) { return { setters: o, execute: function () { e(new WebAssembly.Instance(t, i).exports); } }; }), r(), !0; }) : Promise.resolve(!1); }
    function I(e, t) { for (var r in t)
        Object.hasOwnProperty.call(t, r) && (e[r] = t[r]); return e; }
    function U(e) { if (!fe && !pe) {
        var t = new Image;
        return void (t.src = e);
    } var r = document.createElement("link"); fe ? (r.rel = "preload", r.as = "script") : r.rel = "prefetch", r.href = e, document.head.appendChild(r), document.head.removeChild(r); }
    function M(e, t, r) { try {
        importScripts(e);
    }
    catch (e) {
        r(e);
    } t(); }
    function C(e, t, r, n, o) { function i() { n(), a(); } function s(t) { a(), o(new Error("Fetching " + e)); } function a() { for (var e = 0; e < he.length; e++)
        if (he[e].err === s) {
            he.splice(e, 1);
            break;
        } u.removeEventListener("load", i, !1), u.removeEventListener("error", s, !1), document.head.removeChild(u); } if (e = e.replace(/#/g, "%23"), de)
        return M(e, n, o); var u = document.createElement("script"); u.type = "text/javascript", u.charset = "utf-8", u.async = !0, t && (u.crossOrigin = t), r && (u.integrity = r), u.addEventListener("load", i, !1), u.addEventListener("error", s, !1), u.src = e, document.head.appendChild(u); }
    function T(e, t, r) { var o = D(t, r); if (o) {
        var i = t[o] + r.substr(o.length), s = n(i, z);
        return void 0 !== s ? s : e + i;
    } return -1 !== r.indexOf(":") ? r : e + r; }
    function _(e) { var t = this.name; if (t.substr(0, e.length) === e && (t.length === e.length || "/" === t[e.length] || "/" === e[e.length - 1] || ":" === e[e.length - 1])) {
        var r = e.split("/").length;
        r > this.len && (this.match = e, this.len = r);
    } }
    function D(e, t) { if (Object.hasOwnProperty.call(e, t))
        return t; var r = { name: t, match: void 0, len: 0 }; return Object.keys(e).forEach(_, r), r.match; }
    function N() { d.call(this), this[ue] = { baseURL: z, paths: {}, map: {}, submap: {}, bundles: {}, depCache: {}, wasm: !1 }, this.registry.set("@empty", ae); }
    function A(e, t) { var r = this[ue]; if (t) {
        var o = D(r.submap, t), i = r.submap[o], s = i && D(i, e);
        if (s) {
            var a = i[s] + e.substr(s.length);
            return n(a, o) || a;
        }
    } var u = r.map, s = D(u, e); if (s) {
        var a = u[s] + e.substr(s.length);
        return n(a, o) || a;
    } }
    function W(e, t) { return new Promise(function (r, n) { return C(e, "anonymous", void 0, function () { t(), r(); }, n); }); }
    function q(e, t) { var r = this[ue], n = r.wasm, o = r.bundles[e]; if (o) {
        var i = this, s = i.resolveSync(o, void 0);
        if (i.registry.has(s))
            return;
        return me[s] || (me[s] = W(s, t).then(function () { i.registry.has(s) || i.registry.set(s, i.newModule({})), delete me[s]; }));
    } var a = r.depCache[e]; if (a)
        for (var u = n ? fetch : U, c = 0; c < a.length; c++)
            this.resolve(a[c], e).then(u); if (n) {
        var i = this;
        return fetch(e).then(function (e) { if (e.ok)
            return e.arrayBuffer(); throw new Error("Fetch error: " + e.status + " " + e.statusText); }).then(function (r) { return L(i, r, t).then(function (n) { if (!n) {
            var o = new TextDecoder("utf-8").decode(new Uint8Array(r));
            (0, eval)(o + "\n//# sourceURL=" + e), t();
        } }); });
    } return W(e, t); }
    var z, B = "undefined" != typeof window && "undefined" != typeof document, F = "undefined" != typeof process && process.versions && process.versions.node, J = "undefined" != typeof process && "string" == typeof process.platform && process.platform.match(/^win/), G = "undefined" != typeof self ? self : global, H = "undefined" != typeof Symbol;
    if ("undefined" != typeof document && document.getElementsByTagName) {
        if (z = document.baseURI, !z) {
            var K = document.getElementsByTagName("base");
            z = K[0] && K[0].href || window.location.href;
        }
    }
    else
        "undefined" != typeof location && (z = location.href);
    if (z) {
        z = z.split("#")[0].split("?")[0];
        var Q = z.lastIndexOf("/");
        -1 !== Q && (z = z.substr(0, Q + 1));
    }
    else {
        if ("undefined" == typeof process || !process.cwd)
            throw new TypeError("No environment baseURI");
        z = "file://" + (J ? "/" : "") + process.cwd(), J && (z = z.replace(/\\/g, "/"));
    }
    "/" !== z[z.length - 1] && (z += "/");
    var V = "_" == new Error(0, "_").fileName, X = Promise.resolve();
    i.prototype.constructor = i, i.prototype.import = function (e, r) { if ("string" != typeof e)
        throw new TypeError("Loader import method must be passed a module key string"); var n = this; return X.then(function () { return n[Z](e, r); }).then(s).catch(function (n) { throw t(n, "Loading " + e + (r ? " from " + r : "")); }); };
    var Y = i.resolve = e("resolve"), Z = i.resolveInstantiate = e("resolveInstantiate");
    i.prototype[Z] = function (e, t) { var r = this; return r.resolve(e, t).then(function (e) { return r.registry.get(e); }); }, i.prototype.resolve = function (e, r) { var n = this; return X.then(function () { return n[Y](e, r); }).then(a).catch(function (n) { throw t(n, "Resolving " + e + (r ? " to " + r : "")); }); };
    var $ = "undefined" != typeof Symbol && Symbol.iterator, ee = e("registry");
    $ && (u.prototype[Symbol.iterator] = function () { return this.entries()[Symbol.iterator](); }, u.prototype.entries = function () { var e = this[ee]; return o(Object.keys(e).map(function (t) { return [t, e[t]]; })); }), u.prototype.keys = function () { return o(Object.keys(this[ee])); }, u.prototype.values = function () { var e = this[ee]; return o(Object.keys(e).map(function (t) { return e[t]; })); }, u.prototype.get = function (e) { return this[ee][e]; }, u.prototype.set = function (e, t) { if (!(t instanceof c))
        throw new Error("Registry must be set with an instance of Module Namespace"); return this[ee][e] = t, this; }, u.prototype.has = function (e) { return Object.hasOwnProperty.call(this[ee], e); }, u.prototype.delete = function (e) { return Object.hasOwnProperty.call(this[ee], e) ? (delete this[ee][e], !0) : !1; };
    var te = e("baseObject");
    c.prototype = Object.create(null), "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(c.prototype, Symbol.toStringTag, { value: "Module" });
    var re = e("register-internal");
    d.prototype = Object.create(i.prototype), d.prototype.constructor = d;
    var ne = d.instantiate = e("instantiate");
    d.prototype[d.resolve = i.resolve] = function (e, t) { return n(e, t || z); }, d.prototype[ne] = function (e, t) { }, d.prototype[i.resolveInstantiate] = function (e, t) { var r = this, n = this[re], o = r.registry[r.registry._registry]; return p(r, e, t, o, n).then(function (e) { return e instanceof c ? e : e.module ? e.module : e.linkRecord.linked ? R(r, e, e.linkRecord, o, n, void 0) : w(r, e, e.linkRecord, o, n, [e]).then(function () { return R(r, e, e.linkRecord, o, n, void 0); }).catch(function (t) { throw k(r, e), t; }); }); }, d.prototype.register = function (e, t, r) { var n = this[re]; if (void 0 === r)
        n.lastRegister = [e, t, void 0];
    else {
        var o = n.records[e] || f(n, e, void 0);
        o.registration = [t, r, void 0];
    } }, d.prototype.registerDynamic = function (e, t, r, n) { var o = this[re]; if ("string" != typeof e)
        o.lastRegister = [e, t, r];
    else {
        var i = o.records[e] || f(o, e, void 0);
        i.registration = [t, r, n];
    } }, O.prototype.import = function (e) { return this.loader.trace && g(this.loader, this.key, e), this.loader.import(e, this.key); };
    var oe = {};
    Object.freeze && Object.freeze(oe);
    var ie, se = Promise.resolve(), ae = new c({}), ue = e("loader-config"), ce = e("plain-resolve"), le = e("plain-resolve-sync"), de = "undefined" == typeof window && "undefined" != typeof self && "undefined" != typeof importScripts, fe = !1, pe = !1;
    if (B && function () { var e = document.createElement("link").relList; if (e && e.supports) {
        pe = !0;
        try {
            fe = e.supports("preload");
        }
        catch (e) { }
    } }(), B) {
        var he = [], ve = window.onerror;
        window.onerror = function (e, t) { for (var r = 0; r < he.length; r++)
            if (he[r].src === t)
                return void he[r].err(e); ve && ve.apply(this, arguments); };
    }
    N.plainResolve = ce, N.plainResolveSync = le;
    var ye = N.prototype = Object.create(d.prototype);
    ye.constructor = N, ye[N.resolve = d.resolve] = function (e, t) { var r = n(e, t || z); if (void 0 !== r)
        return Promise.resolve(r); var o = this; return se.then(function () { return o[ce](e, t); }).then(function (t) { if (t = t || e, o.registry.has(t))
        return t; var r = o[ue]; return T(r.baseURL, r.paths, t); }); }, ye.newModule = function (e) { return new c(e); }, ye.isModule = E, ye.resolveSync = function (e, t) { var r = n(e, t || z); if (void 0 !== r)
        return r; if (r = this[le](e, t) || e, this.registry.has(r))
        return r; var o = this[ue]; return T(o.baseURL, o.paths, r); }, ye.import = function () { return d.prototype.import.apply(this, arguments).then(function (e) { return e.__useDefault ? e.default : e; }); }, ye[ce] = ye[le] = A, ye[N.instantiate = d.instantiate] = q, ye.config = function (e) { var t = this[ue]; if (e.baseURL && (t.baseURL = n(e.baseURL, z) || n("./" + e.baseURL, z), "/" !== t.baseURL[t.baseURL.length - 1] && (t.baseURL += "/")), e.paths && I(t.paths, e.paths), e.map) {
        var r = e.map;
        for (var o in r)
            if (Object.hasOwnProperty.call(r, o)) {
                var i = r[o];
                if ("string" == typeof i)
                    t.map[o] = i;
                else {
                    var s = n(o, z) || T(t.baseURL, t.paths, o);
                    I(t.submap[s] || (t.submap[s] = {}), i);
                }
            }
    } for (var o in e)
        if (Object.hasOwnProperty.call(e, o)) {
            var r = e[o];
            switch (o) {
                case "baseURL":
                case "paths":
                case "map": break;
                case "bundles":
                    for (var o in r)
                        if (Object.hasOwnProperty.call(r, o))
                            for (var i = r[o], a = 0; a < i.length; a++)
                                t.bundles[this.resolveSync(i[a], void 0)] = o;
                    break;
                case "depCache":
                    for (var o in r)
                        if (Object.hasOwnProperty.call(r, o)) {
                            var s = this.resolveSync(o, void 0);
                            t.depCache[s] = (t.depCache[s] || []).concat(r[o]);
                        }
                    break;
                case "wasm":
                    t.wasm = "undefined" != typeof WebAssembly && !!r;
                    break;
                default: throw new TypeError('The SystemJS production build does not support the "' + o + '" configuration option.');
            }
        } }, ye.getConfig = function (e) { var t = this[ue], r = {}; I(r, t.map); for (var n in t.submap)
        Object.hasOwnProperty.call(t.submap, n) && (r[n] = I({}, t.submap[n])); var o = {}; for (var n in t.depCache)
        Object.hasOwnProperty.call(t.depCache, n) && (o[n] = [].concat(t.depCache[n])); var i = {}; for (var n in t.bundles)
        Object.hasOwnProperty.call(t.bundles, n) && (i[n] = [].concat(t.bundles[n])); return { baseURL: t.baseURL, paths: I({}, t.paths), depCache: o, bundles: i, map: r, wasm: t.wasm }; }, ye.register = function (e, t, r) { return "string" == typeof e && (e = this.resolveSync(e, void 0)), d.prototype.register.call(this, e, t, r); }, ye.registerDynamic = function (e, t, r, n) { return "string" == typeof e && (e = this.resolveSync(e, void 0)), d.prototype.registerDynamic.call(this, e, t, r, n); };
    var me = {};
    N.prototype.version = "0.20.12 Production";
    var ge = new N;
    if (B || de)
        if (G.SystemJS = ge, G.System) {
            var be = G.System.register;
            G.System.register = function () { be && be.apply(this, arguments), ge.register.apply(this, arguments); };
        }
        else
            G.System = ge;
    "undefined" != typeof module && module.exports && (module.exports = ge);
}();
System.register("src/math/toolsAngle", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var toolsAngle;
    return {
        setters: [],
        execute: function () {
            toolsAngle = (function () {
                function toolsAngle() {
                }
                toolsAngle.toRad = function (deg) {
                    return Math.PI * (deg) / 180;
                };
                toolsAngle.toDeg = function (rad) {
                    return 180 * (rad) / Math.PI;
                };
                return toolsAngle;
            }());
            exports_1("toolsAngle", toolsAngle);
        }
    };
});
System.register("src/math/toolsNumber", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var toolsNumber;
    return {
        setters: [],
        execute: function () {
            toolsNumber = (function () {
                function toolsNumber() {
                }
                toolsNumber.sign = function (val) {
                    return val > 0 ? 1 : val < 0 ? -1 : 0;
                };
                ;
                return toolsNumber;
            }());
            exports_2("toolsNumber", toolsNumber);
        }
    };
});
System.register("src/math/toolsVector", ["src/math/vector", "src/math/point", "src/math/toolsAngle", "src/math/toolsNumber"], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var vector_1, point_1, toolsAngle_1, toolsNumber_1, toolsVector;
    return {
        setters: [
            function (vector_1_1) {
                vector_1 = vector_1_1;
            },
            function (point_1_1) {
                point_1 = point_1_1;
            },
            function (toolsAngle_1_1) {
                toolsAngle_1 = toolsAngle_1_1;
            },
            function (toolsNumber_1_1) {
                toolsNumber_1 = toolsNumber_1_1;
            }
        ],
        execute: function () {
            toolsVector = (function () {
                function toolsVector() {
                }
                toolsVector.pointBelong = function (v1, p1) {
                    var v2 = new vector_1.vector();
                    v2.setPoint(v1.p1, p1);
                    var vP = v2.vectorProduct(v1);
                    if (vP.vx === 0 && vP.vy === 0 && vP.vz === 0) {
                        var sP1 = v2.scalarProduct(v1);
                        var sP2 = v1.scalarProduct(v1);
                        if (0 <= sP1 && sP1 <= sP2) {
                            return true;
                        }
                        else {
                            return false;
                        }
                    }
                    else {
                        return false;
                    }
                };
                toolsVector.angleBetweenVector = function (v1, v2, type) {
                    var vN1, vN2, vS, angle;
                    vN1 = toolsVector.normalize(v1);
                    vN2 = toolsVector.normalize(v2);
                    vS = toolsVector.scalarProduct(vN1, vN2);
                    if (toolsNumber_1.toolsNumber.sign(vS) === -1) {
                        angle = -Math.acos(vS);
                    }
                    else {
                        angle = Math.acos(vS);
                    }
                    switch (type) {
                        case "rad":
                            return angle;
                            break;
                        case "deg":
                        default:
                            return toolsAngle_1.toolsAngle.toDeg(angle);
                            break;
                    }
                };
                toolsVector.vectorProduct = function (v1, v2) {
                    var vS = v1.toString();
                    var vS2 = v2.toString();
                    if ((vS === "[object vector]" && vS2 === "[object vector]")) {
                        var x = Math.round((v1.vy * (v2.vz) - v2.vy * (v1.vz)) * 100) / 100;
                        var y = Math.round((v1.vz * v2.vx - (v2.vz) * v1.vx) * 100) / 100;
                        var z = Math.round((v1.vx * v2.vy - v2.vx * v1.vy) * 100) / 100;
                        var v = new vector_1.vector(x, y, z);
                        return (v);
                    }
                    else {
                        throw new Error("vectorProduct() The arguments must be a vector");
                    }
                    return false;
                };
                toolsVector.scalarProduct = function (v1, v2) {
                    if (typeof v1 == "object" && typeof v2 == "object") {
                        var vS = v1.toString();
                        var vS2 = v2.toString();
                        if ((vS === "[object vector]" && vS2 === "[object vector]")) {
                            var result = (v1.vx * v2.vx) + (v1.vy * v2.vy) + (v1.vz * v2.vz);
                            return parseFloat(result);
                        }
                        else {
                            throw new Error("scalarProduct() The arguments must be a vector");
                        }
                        throw new Error("scalarProduct() The arguments must be a object");
                    }
                    return false;
                };
                toolsVector.normalize = function (v1) {
                    var norme = Math.sqrt(v1.vx * v1.vx + v1.vy * v1.vy + v1.vz * v1.vz);
                    var v = new vector_1.vector(v1.vx / norme, v1.vy / norme, v1.vz / norme);
                    v.p1 = new point_1.point(0, 0, 0);
                    v.p2 = new point_1.point(v.vx, v.vy, v.vz);
                    return (v);
                };
                toolsVector.cross = function (v1, v2) {
                    if (v1.p1 && v1.p2 && v2.p1 && v2.p2) {
                        var a = v1.vy === 0 ? 0 : (v1.vy) / (v1.vx);
                        var b = v1.p1.y - (a * v1.p1.x);
                        var c = v2.vy === 0 ? 0 : (v2.vy) / (v2.vx);
                        var d = v2.p1.y - (c * v2.p1.x);
                        var x = (d - b) / (a - c);
                        var y = a * x + b;
                        return new point_1.point(x, y);
                    }
                    else {
                        throw new Error("cross() The arguments must be a vector with point");
                    }
                    return false;
                };
                return toolsVector;
            }());
            exports_3("toolsVector", toolsVector);
        }
    };
});
System.register("src/math/vector", ["src/math/toolsPoint", "src/math/toolsVector"], function (exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var toolsPoint_1, toolsVector_1, vector;
    return {
        setters: [
            function (toolsPoint_1_1) {
                toolsPoint_1 = toolsPoint_1_1;
            },
            function (toolsVector_1_1) {
                toolsVector_1 = toolsVector_1_1;
            }
        ],
        execute: function () {
            vector = (function () {
                function vector(vx, vy, vz) {
                    this.vx = vx ? vx : 0;
                    this.vy = vy ? vy : 0;
                    this.vz = vz ? vz : 0;
                }
                vector.prototype.toString = function () {
                    return "[object vector]";
                };
                vector.prototype.setPoint = function (p1, p2) {
                    if (p1.toString() === "[object point]" && p2.toString() === "[object point]") {
                        var V = toolsPoint_1.toolsPoint.vectorBetween(p1, p2);
                        this.vx = V.vx;
                        this.vy = V.vy;
                        this.vz = V.vz;
                        this.p1 = p1;
                        this.p2 = p2;
                        this.distance = p1.distance(p2);
                        this.angle = {
                            x: Math.atan2(this.vy, this.vx) + Math.PI
                        };
                    }
                    else {
                        throw new Error("setPoint() The arguments must be a point");
                    }
                };
                vector.prototype.vectorProduct = function (v2) {
                    return toolsVector_1.toolsVector.vectorProduct(this, v2);
                };
                vector.prototype.scalarProduct = function (v2) {
                    return toolsVector_1.toolsVector.scalarProduct(this, v2);
                };
                vector.prototype.normalize = function () {
                    return toolsVector_1.toolsVector.normalize(this);
                };
                vector.prototype.cross = function (v2) {
                    return toolsVector_1.toolsVector.cross(this, v2);
                };
                vector.prototype.angleBetweenVector = function (v2, type) {
                    return toolsVector_1.toolsVector.angleBetweenVector(this, v2, type);
                };
                vector.prototype.pointBelong = function (p1) {
                    return toolsVector_1.toolsVector.pointBelong(this, p1);
                };
                return vector;
            }());
            exports_4("vector", vector);
        }
    };
});
System.register("src/math/toolsPoint", ["src/math/point", "src/math/vector", "src/math/toolsAngle"], function (exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var point_2, vector_2, toolsAngle_2, toolsPoint;
    return {
        setters: [
            function (point_2_1) {
                point_2 = point_2_1;
            },
            function (vector_2_1) {
                vector_2 = vector_2_1;
            },
            function (toolsAngle_2_1) {
                toolsAngle_2 = toolsAngle_2_1;
            }
        ],
        execute: function () {
            toolsPoint = (function () {
                function toolsPoint() {
                }
                toolsPoint.vectorBetween = function (p1, p2) {
                    var v = new vector_2.vector(p2.x - p1.x, p2.y - p1.y, p2.z - p1.z);
                    v.p1 = p1;
                    v.p2 = p2;
                    return (v);
                };
                toolsPoint.distance = function (p1, p2) {
                    if (p1 && p2) {
                        if (typeof p1.x === "number" && typeof p1.y === "number") {
                            if (typeof p2.x === "number" && typeof p2.y === "number") {
                                if (typeof p1.z === "number" || typeof p2.z === "number") {
                                    p1.z = p1.z ? p1.z : 0;
                                    p2.z = p2.z ? p2.z : 0;
                                    return Math.sqrt(Math.pow((p1.x - p2.x), 2) + Math.pow((p1.y - p2.y), 2) + Math.pow((p1.z - p2.z), 2));
                                }
                                else
                                    return Math.sqrt(Math.pow((p1.x - p2.x), 2) + Math.pow((p1.y - p2.y), 2));
                            }
                            else {
                                throw new Error("distance() x & y from second argument must be a number");
                            }
                        }
                        else {
                            throw new Error("distance() x & y from first argument must be a number");
                        }
                    }
                    else
                        throw new Error("distance() need two arguments ");
                    return false;
                };
                toolsPoint.rotation = function (p, pCenter, angle, plan) {
                    if (typeof plan === "undefined")
                        plan = "xy";
                    if (typeof angle === "string" || typeof angle === "number") {
                        if (typeof angle === "string") {
                            var s = angle.substring(angle.length - 3, angle.length);
                            angle = angle.trim();
                            angle = angle.replace("PI", Math.PI);
                            switch (s) {
                                case "rad":
                                    angle = angle.substring(0, angle.length - 3);
                                    angle = eval(angle);
                                    break;
                                case "deg":
                                    angle = angle.substring(0, angle.length - 3);
                                default:
                                    angle = eval(angle);
                                    angle = toolsAngle_2.toolsAngle.toRad(angle);
                                    break;
                            }
                        }
                        else {
                            angle = toolsAngle_2.toolsAngle.toRad(angle);
                        }
                        switch (plan) {
                            case "xz":
                                throw new Error("rotation(xz) you need to calculate it yet");
                                break;
                            case "xy":
                            default:
                                var diffXT = p.x - pCenter.x;
                                var diffYT = p.y - pCenter.y;
                                var x, y;
                                x = diffXT * Math.cos(angle) - diffYT * Math.sin(angle);
                                y = diffXT * Math.sin(angle) + diffYT * Math.cos(angle);
                                x = Math.round(x * 100) / 100;
                                y = Math.round(y * 100) / 100;
                                var position = new point_2.point((x + pCenter.x), (y + pCenter.y));
                                return position;
                                break;
                        }
                    }
                    else {
                        return false;
                    }
                };
                return toolsPoint;
            }());
            exports_5("toolsPoint", toolsPoint);
            ;
        }
    };
});
System.register("src/math/point", ["src/math/toolsPoint", "src/math/vector"], function (exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var toolsPoint_2, vector_3, point;
    return {
        setters: [
            function (toolsPoint_2_1) {
                toolsPoint_2 = toolsPoint_2_1;
            },
            function (vector_3_1) {
                vector_3 = vector_3_1;
            }
        ],
        execute: function () {
            point = (function () {
                function point(x, y, z) {
                    this.x = parseFloat(x);
                    this.y = parseFloat(y);
                    this.z = z | 0;
                }
                point.prototype.toString = function () {
                    return "[object point]";
                };
                point.prototype.rotation = function (point2, angle, plan) {
                    var V = toolsPoint_2.toolsPoint.rotation(this, point2, angle, plan);
                    this.x = V.x;
                    this.y = V.y;
                    this.z = V.z;
                };
                point.prototype.distance = function (p2) {
                    return toolsPoint_2.toolsPoint.distance(this, p2);
                };
                point.prototype.vector = function (p2) {
                    var v = toolsPoint_2.toolsPoint.vector(this, p2);
                    v.p1 = this;
                    v.p2 = p2;
                    return v;
                };
                point.prototype.zTriangle = function (p1, p2, p3) {
                    var v1 = new vector_3.vector();
                    v1.setPoint(p1, p2);
                    var v2 = new vector_3.vector();
                    v2.setPoint(p1, p3);
                    var N = v1.vectorProduct(v2);
                    this.z = -(N.vx * (this.x - p1.x) + N.vy * (this.y - p1.y)) / N.vz + p1.z;
                    return this;
                };
                return point;
            }());
            exports_6("point", point);
        }
    };
});
System.register("demo/motion/import/animal/animal", ["src/math/point", "src/math/vector"], function (exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    var point_3, vector_4, animal;
    return {
        setters: [
            function (point_3_1) {
                point_3 = point_3_1;
            },
            function (vector_4_1) {
                vector_4 = vector_4_1;
            }
        ],
        execute: function () {
            animal = (function () {
                function animal() {
                    this.class = "animal";
                    this.name = "undefined";
                    this.points = new Array;
                    this.vitesse = {
                        move: 12,
                        jump: 15,
                    };
                    this.spriteID = 0;
                    this.dom;
                }
                animal.prototype.remove = function () {
                    clearInterval(this.animate);
                    if (this.dom)
                        this.dom.remove();
                };
                animal.prototype.setWidth = function (width) {
                    if (this.dom) {
                        this.dom.style.width = width + "px";
                        this.dom.style.height = width * 1.2 + "px";
                        var bgX = this.spriteID * width;
                        var bgY = this.direction === 1 ? (width * 1.2) : 0;
                        this.dom.style.backgroundPosition = "-" + bgX + "px " + bgY + "px";
                        return true;
                    }
                    else
                        return false;
                };
                animal.prototype.appendTo = function (dom) {
                    this.remove();
                    var d = document.createElement(this.name);
                    d.className = this.class;
                    this.dom = d;
                    this.setWidth(150);
                    dom.appendChild(this.dom);
                };
                animal.prototype.getPosition = function () {
                    var x1 = this.dom.style.left ? parseInt(this.dom.style.left) : 0;
                    var y1 = this.dom.style.bottom ? parseInt(this.dom.style.bottom) : 0;
                    return new point_3.point(x1, y1);
                };
                animal.prototype.setPosition = function (p1) {
                    this.dom.style.left = p1.x + "px";
                    this.dom.style.bottom = p1.y + "px";
                };
                animal.prototype.jump = function (p2, height) {
                    var p1 = this.getPosition();
                    p1.y += height;
                    this.moveTo(p1, this.vitesse.jump, callback);
                    var self = this;
                    function callback() {
                        self.dom.style.zIndex = 0;
                        p2.x = parseInt(self.dom.style.left);
                        self.moveTo(p2, self.vitesse.jump * 2);
                    }
                };
                animal.prototype.moveTo = function (p2, vitesse, callback) {
                    if (typeof vitesse === "undefined")
                        vitesse = this.vitesse.move;
                    var v = new vector_4.vector();
                    var p1 = this.getPosition();
                    var _p1 = this.getPosition();
                    v.setPoint(p1, p2);
                    var self = this;
                    clearInterval(this.animate);
                    this.animate = setInterval(function () {
                        move.call(self);
                    }, 1000 / 29);
                    function move() {
                        _p1.x -= Math.cos(v.angle.x) * vitesse;
                        _p1.y -= Math.sin(v.angle.x) * vitesse;
                        if (!v.pointBelong(_p1)) {
                            this.setPosition(p2);
                            clearInterval(this.animate);
                            if (typeof callback === "function") {
                                callback();
                            }
                        }
                        this.setPosition(_p1);
                    }
                };
                return animal;
            }());
            exports_7("animal", animal);
        }
    };
});
System.register("demo/motion/import/animal/collection/elephant", ["demo/motion/import/animal/animal"], function (exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    var animal_1, elephant;
    return {
        setters: [
            function (animal_1_1) {
                animal_1 = animal_1_1;
            }
        ],
        execute: function () {
            elephant = (function (_super) {
                __extends(elephant, _super);
                function elephant(direction) {
                    var _this = _super.call(this) || this;
                    _this.direction = direction;
                    _this.spriteID = 4;
                    _this.name = "elephant";
                    switch (direction) {
                        default:
                        case 1:
                            _this.points = [[1, 12], [1, 4], [2, 2], [4, 1], [6, 2], [7, 4], [6, 6], [4, 7], [2, 6], [1, 4]];
                            break;
                        case -1:
                            _this.points = [[7, 12], [7, 4], [6, 2], [4, 1], [2, 2], [1, 4], [2, 6], [4, 7], [6, 6], [7, 4]];
                            break;
                    }
                    return _this;
                }
                return elephant;
            }(animal_1.animal));
            exports_8("elephant", elephant);
        }
    };
});
System.register("demo/motion/import/animal/collection/giraffe", ["demo/motion/import/animal/animal"], function (exports_9, context_9) {
    "use strict";
    var __moduleName = context_9 && context_9.id;
    var animal_2, giraffe;
    return {
        setters: [
            function (animal_2_1) {
                animal_2 = animal_2_1;
            }
        ],
        execute: function () {
            giraffe = (function (_super) {
                __extends(giraffe, _super);
                function giraffe(direction) {
                    var _this = _super.call(this) || this;
                    _this.direction = direction;
                    _this.spriteID = 1;
                    _this.name = "giraffe";
                    switch (direction) {
                        default:
                        case 1:
                            _this.points = [[7, 1], [7, 12], [6, 10], [4, 9], [2, 10], [1, 12]];
                            break;
                        case -1:
                            _this.points = [[1, 1], [1, 12], [2, 10], [4, 9], [6, 10], [7, 12]];
                            break;
                    }
                    return _this;
                }
                return giraffe;
            }(animal_2.animal));
            exports_9("giraffe", giraffe);
        }
    };
});
System.register("demo/motion/import/animal/collection/lion", ["demo/motion/import/animal/animal"], function (exports_10, context_10) {
    "use strict";
    var __moduleName = context_10 && context_10.id;
    var animal_3, lion;
    return {
        setters: [
            function (animal_3_1) {
                animal_3 = animal_3_1;
            }
        ],
        execute: function () {
            lion = (function (_super) {
                __extends(lion, _super);
                function lion(direction) {
                    var _this = _super.call(this) || this;
                    _this.direction = direction;
                    _this.spriteID = 0;
                    _this.name = "lion";
                    switch (direction) {
                        default:
                        case 1:
                            _this.points = [[4, 4], [6, 5], [7, 7], [6, 9], [4, 10], [2, 9], [1, 7], [2, 5], [4, 4]];
                            break;
                        case -1:
                            _this.points = [[4, 4], [2, 5], [1, 7], [2, 9], [4, 10], [6, 9], [7, 7], [6, 5], [4, 4]];
                            break;
                    }
                    return _this;
                }
                return lion;
            }(animal_3.animal));
            exports_10("lion", lion);
        }
    };
});
System.register("demo/motion/import/animal/collection/monkey", ["demo/motion/import/animal/animal"], function (exports_11, context_11) {
    "use strict";
    var __moduleName = context_11 && context_11.id;
    var animal_4, monkey;
    return {
        setters: [
            function (animal_4_1) {
                animal_4 = animal_4_1;
            }
        ],
        execute: function () {
            monkey = (function (_super) {
                __extends(monkey, _super);
                function monkey(direction) {
                    var _this = _super.call(this) || this;
                    _this.direction = direction;
                    _this.spriteID = 2;
                    _this.name = "monkey";
                    switch (direction) {
                        default:
                        case 1:
                            _this.points = [[1, 12], [2, 8], [3, 3], [5, 3], [6, 8], [7, 12]];
                            break;
                        case -1:
                            _this.points = [[7, 12], [6, 8], [5, 3], [3, 3], [2, 8], [1, 12]];
                            break;
                    }
                    return _this;
                }
                return monkey;
            }(animal_4.animal));
            exports_11("monkey", monkey);
        }
    };
});
System.register("demo/motion/import/animal/collection/snake", ["demo/motion/import/animal/animal"], function (exports_12, context_12) {
    "use strict";
    var __moduleName = context_12 && context_12.id;
    var animal_5, snake;
    return {
        setters: [
            function (animal_5_1) {
                animal_5 = animal_5_1;
            }
        ],
        execute: function () {
            snake = (function (_super) {
                __extends(snake, _super);
                function snake(direction) {
                    var _this = _super.call(this) || this;
                    _this.direction = direction;
                    _this.spriteID = 3;
                    _this.name = "snake";
                    switch (direction) {
                        default:
                        case 1:
                            _this.points = [[7, 4], [6, 2], [4, 1], [2, 2], [1, 4], [2, 6], [4, 7], [6, 8], [7, 10], [6, 12], [4, 13], [2, 12], [1, 10]];
                            break;
                        case -1:
                            _this.points = [[1, 4], [2, 2], [4, 1], [6, 2], [7, 4], [6, 6], [4, 7], [2, 8], [1, 10], [2, 12], [4, 13], [6, 12], [7, 10]];
                            break;
                    }
                    return _this;
                }
                return snake;
            }(animal_5.animal));
            exports_12("snake", snake);
        }
    };
});
System.register("demo/motion/import/animal/animalCollection", ["demo/motion/import/animal/collection/elephant", "demo/motion/import/animal/collection/giraffe", "demo/motion/import/animal/collection/lion", "demo/motion/import/animal/collection/monkey", "demo/motion/import/animal/collection/snake", "src/math/point"], function (exports_13, context_13) {
    "use strict";
    var __moduleName = context_13 && context_13.id;
    var elephant_1, giraffe_1, lion_1, monkey_1, snake_1, point_4, animalCollection;
    return {
        setters: [
            function (elephant_1_1) {
                elephant_1 = elephant_1_1;
            },
            function (giraffe_1_1) {
                giraffe_1 = giraffe_1_1;
            },
            function (lion_1_1) {
                lion_1 = lion_1_1;
            },
            function (monkey_1_1) {
                monkey_1 = monkey_1_1;
            },
            function (snake_1_1) {
                snake_1 = snake_1_1;
            },
            function (point_4_1) {
                point_4 = point_4_1;
            }
        ],
        execute: function () {
            animalCollection = (function () {
                function animalCollection() {
                    this.dom = document.createElement('section');
                    this.dom.id = "animalCollection";
                    document.body.appendChild(this.dom);
                    this.list = new Array;
                    this.animalWidth = 250;
                    this.position = [[750, -600], [750, 85], [1450, 30], [2300, 0]];
                    this.jump = 250;
                    this.maxAnimal = this.position.length;
                    for (var i = 0; i < this.maxAnimal; i++) {
                        this.addAnimal();
                    }
                    ;
                    this.ratio = 1;
                    var ratio;
                }
                animalCollection.prototype.setRatio = function (newValue) {
                    this.ratio = newValue;
                    for (var i = 0; i < this.list.length; i++) {
                        var animal = this.list[i];
                        animal.setWidth(this.animalWidth * newValue);
                        var p = new point_4.point(this.position[i][0], this.position[i][1]);
                        p.x = p.x * this.ratio;
                        p.y = p.y * this.ratio;
                        clearInterval(animal.animate);
                        animal.setPosition(p);
                    }
                    ;
                };
                animalCollection.prototype.move = function () {
                    for (var i = 0; i < this.list.length - 1; i++) {
                        var animal = this.list[i];
                        var pTarget = new point_4.point(this.position[i][0] * this.ratio, this.position[i][1] * this.ratio);
                        if (i === 0) {
                            animal.jump(pTarget, this.jump * this.ratio);
                        }
                        else {
                            animal.moveTo(pTarget);
                        }
                        ;
                    }
                };
                animalCollection.prototype.addAnimal = function () {
                    var animal;
                    var direction = Math.floor(Math.random() * 2) == 1 ? 1 : -1;
                    switch (Math.floor(Math.random() * 5)) {
                        case 0:
                            animal = new snake_1.snake(direction);
                            break;
                        case 1:
                            animal = new monkey_1.monkey(direction);
                            break;
                        case 2:
                            animal = new elephant_1.elephant(direction);
                            break;
                        case 3:
                            animal = new lion_1.lion(direction);
                            break;
                        case 4:
                            animal = new giraffe_1.giraffe(direction);
                            break;
                    }
                    if (this.list.length > this.maxAnimal - 1) {
                        this.list[0].remove();
                        this.list.shift();
                    }
                    animal.appendTo(this.dom);
                    animal.setWidth(this.animalWidth * this.ratio);
                    var p = new point_4.point((this.position[this.list.length][0]) * this.ratio, (this.position[this.list.length][1]) * this.ratio);
                    animal.setPosition(p);
                    this.list.push(animal);
                };
                return animalCollection;
            }());
            exports_13("animalCollection", animalCollection);
        }
    };
});
System.register("demo/motion/import/score/score", [], function (exports_14, context_14) {
    "use strict";
    var __moduleName = context_14 && context_14.id;
    var score;
    return {
        setters: [],
        execute: function () {
            score = (function () {
                function score() {
                    this.addScore = function (value) {
                        if (parseInt(value) < 0) {
                            this.dom.style.color = "red";
                        }
                        else {
                            this.dom.style.color = "white";
                        }
                        this.dom.innerHTML = Math.round(value).toString();
                        this.score += value;
                    };
                    this.dom = document.createElement('score');
                    document.body.appendChild(this.dom);
                    this.score = 0;
                    this.dom.innerHTML = this.score.toString();
                }
                return score;
            }());
            exports_14("score", score);
        }
    };
});
System.register("src/motion/pointer", ["src/math/point"], function (exports_15, context_15) {
    "use strict";
    var __moduleName = context_15 && context_15.id;
    var point_js_1, pointer;
    return {
        setters: [
            function (point_js_1_1) {
                point_js_1 = point_js_1_1;
            }
        ],
        execute: function () {
            pointer = (function () {
                function pointer(dom) {
                    this.size = 50;
                    this.maxsize = (this.size / 2) * 3;
                    this.minsize = this.size / 2;
                    this.active = false;
                    var d = document.createElement('pointer');
                    if (dom) {
                        dom.appendChild(d);
                    }
                    else {
                        document.body.appendChild(d);
                    }
                    this.dom = d;
                    this.dom.addEventListener('mouseover', init);
                    var vm = this;
                    function init(e) {
                        document.removeEventListener('mousemove', init);
                        if (!vm.active) {
                            vm.active = true;
                            vm.dom.addEventListener('mouseover', init);
                        }
                    }
                }
                pointer.prototype.deactivate = function () {
                    this.active = false;
                };
                pointer.prototype.initVector = function (v) {
                    var width;
                    var marginLeft = 0;
                    var marginTop = 0;
                    if (document.body.clientHeight < document.body.clientWidth) {
                        width = document.body.clientHeight;
                        marginLeft = (document.body.clientWidth - document.body.clientHeight) / 2;
                    }
                    else {
                        width = document.body.clientWidth;
                        marginTop = (document.body.clientHeight - document.body.clientWidth) / 2;
                    }
                    var padding = 100;
                    var inner = width - (2 * padding);
                    var step = inner / 11;
                    marginLeft += step * ((11 - 5) / 2);
                    var p = new point_js_1.point(((v.p1.x - 1) * step) + marginLeft + padding, ((v.p1.y - 1) * step) + padding + marginTop);
                    this.deactivate();
                    this.rotate(v);
                    this.setPosition(p);
                };
                pointer.prototype.rotate = function (v) {
                    this.dom.style.transform = "rotate(" + v.angle.x + "rad)";
                };
                pointer.prototype.getPosition = function () {
                    var x1 = this.dom.style.left ? parseInt(this.dom.style.left) : 0;
                    var y1 = this.dom.style.top ? parseInt(this.dom.style.top) : 0;
                    return new point_js_1.point(x1, y1);
                };
                pointer.prototype.setPosition = function (p1) {
                    this.dom.style.left = p1.x + "px";
                    this.dom.style.top = p1.y + "px";
                };
                return pointer;
            }());
            exports_15("pointer", pointer);
        }
    };
});
System.register("src/motion/marker", [], function (exports_16, context_16) {
    "use strict";
    var __moduleName = context_16 && context_16.id;
    var marker;
    return {
        setters: [],
        execute: function () {
            marker = (function () {
                function marker(v, id) {
                    this.id = id;
                    this.vector = v;
                    this.x = this.vector.p1.x;
                    this.y = this.vector.p1.y;
                }
                marker.prototype.move = function (p1) {
                    if (!this.vector.pointBelong(p1))
                        return false;
                    this.x = p1.x;
                    this.y = p1.y;
                    return true;
                };
                return marker;
            }());
            exports_16("marker", marker);
        }
    };
});
System.register("src/motion/motion", ["src/motion/pointer", "src/motion/marker", "src/math/vector", "src/math/point"], function (exports_17, context_17) {
    "use strict";
    var __moduleName = context_17 && context_17.id;
    var pointer_1, marker_1, vector_js_1, point_js_2, posOrtho, motion;
    return {
        setters: [
            function (pointer_1_1) {
                pointer_1 = pointer_1_1;
            },
            function (marker_1_1) {
                marker_1 = marker_1_1;
            },
            function (vector_js_1_1) {
                vector_js_1 = vector_js_1_1;
            },
            function (point_js_2_1) {
                point_js_2 = point_js_2_1;
            }
        ],
        execute: function () {
            posOrtho = { x: 0, y: 1, z: 2 };
            motion = (function () {
                function motion(param) {
                    var section = document.createElement("section");
                    section.id = "motion";
                    document.body.appendChild(section);
                    var canvas = document.createElement("canvas");
                    canvas.style.position = "fixed";
                    canvas.style.zIndex = "500";
                    section.appendChild(canvas);
                    this.style = {
                        width: 130,
                        height: (140 / 6) * 12,
                        bottom: 180,
                        left: 280
                    };
                    this.pointer = new pointer_1.pointer(section);
                    this.ctx = canvas.getContext('2d');
                    this.dom = canvas;
                    this.setRatio(1);
                    this.precisionLevel = param ? param.precisionLevel ? param.precisionLevel : 3 : 3;
                    this.drawnNextMarker = param ? param.drawnNextMarker ? param.drawnNextMarker : false : false;
                    this.sensitivityWeighting = param ? param.sensitivityWeighting ? sensitivityWeighting : 80 : 80;
                    this.shape = new Array;
                    this.userPrecision;
                    this.marker;
                }
                motion.prototype.setRatio = function (ratio) {
                    if (!this.pointer.active) {
                        if (this.marker) {
                            this.pointer.initVector(this.marker.vector);
                        }
                    }
                    ;
                    this.dom.width = this.style.width * ratio;
                    this.dom.height = this.style.height * ratio;
                    this.dom.style.bottom = this.style.bottom * ratio + "px";
                    this.dom.style.left = this.style.left * ratio + "px";
                    this.circleSize = ratio * this.style.width / 20;
                    this.markerSize = ratio * this.style.width / 10;
                    this.step = (this.style.width - (4 * this.circleSize)) / 7 * ratio;
                    if (this.shape && this.marker) {
                        this.draw();
                    }
                    ;
                };
                motion.prototype.analysis = function (arrayPoint, emove) {
                    this.setShape(arrayPoint);
                    for (var i = 0; i < emove.length; i++) {
                        var p = new point_js_2.point(emove[i].x, emove[i].y);
                        this.move(p);
                    }
                    ;
                    return this.userPrecision;
                };
                motion.prototype.mouseFollow = function (arrayPoint, callback, e) {
                    if (e)
                        this.cursorOld = e.pageX, e.pageY;
                    document.addEventListener('mousemove', move);
                    var vm = this;
                    function move(e) {
                        var p = new point_js_2.point(e.pageX, e.pageY);
                        if (!vm.move(p)) {
                            callback(vm);
                            document.removeEventListener('mousemove', move);
                        }
                    }
                    ;
                    this.setShape(arrayPoint);
                };
                motion.prototype.setShape = function (arrayPoint) {
                    this.userPrecision = 0;
                    this.shape = new Array;
                    for (var i = 0; i < arrayPoint.length - 1; i++) {
                        var pV = new vector_js_1.vector();
                        var point1 = new point_js_2.point(arrayPoint[i][posOrtho.x], arrayPoint[i][posOrtho.y]);
                        var point2 = new point_js_2.point(arrayPoint[i + 1][posOrtho.x], arrayPoint[i + 1][posOrtho.y]);
                        pV.setPoint(point1, point2);
                        this.shape.push(pV);
                    }
                    ;
                    this.marker = new marker_1.marker(this.shape[0], 0);
                    this.pointer.initVector(this.shape[0]);
                    this.draw();
                };
                motion.prototype.move = function (point2) {
                    if (this.pointer.active) {
                        this.pointer.setPosition(point2);
                        if (!this.cursorOld)
                            this.cursorOld = point2;
                        var vCursor = new vector_js_1.vector();
                        var point1 = new point_js_2.point(this.cursorOld.x, this.cursorOld.y);
                        vCursor.setPoint(point1, point2);
                        this.cursorOld = point2;
                        var diffAngle = vCursor.angle.x - this.marker.vector.angle.x;
                        if (diffAngle > Math.PI) {
                            diffAngle = this.marker.vector.angle.x - vCursor.angle.x;
                        }
                        diffAngle = Math.abs(diffAngle);
                        if (diffAngle > Math.PI / 2)
                            diffAngle = Math.PI / 2;
                        var invDiffAngle = (Math.PI / 2 - diffAngle);
                        var precision;
                        if (invDiffAngle > 0) {
                            precision = Math.pow((invDiffAngle * 10), this.precisionLevel) * vCursor.distance;
                        }
                        else {
                            precision = Math.pow((4 * 10), this.precisionLevel) * vCursor.distance;
                        }
                        this.userPrecision -= precision;
                        if (invDiffAngle > 0) {
                            var posX = this.marker.x - (Math.pow((invDiffAngle), 2) * vCursor.distance * Math.cos(this.marker.vector.angle.x) / (this.sensitivityWeighting));
                            var posY = this.marker.y - (Math.pow((invDiffAngle), 2) * vCursor.distance * Math.sin(this.marker.vector.angle.x) / (this.sensitivityWeighting));
                            if (this.marker.move(new point_js_2.point(posX, posY))) {
                                this.draw();
                            }
                            else {
                                var id = this.marker.id + 1;
                                if (id >= this.shape.length)
                                    return false;
                                this.marker = new marker_1.marker(this.shape[id], id);
                                this.pointer.rotate(this.shape[id]);
                            }
                            ;
                        }
                    }
                    return true;
                };
                motion.prototype.draw = function () {
                    this.ctx.clearRect(0, 0, this.dom.offsetWidth, this.dom.offsetHeight);
                    this.ctx.strokeStyle = '#8B5E3C';
                    for (var i = 0; i < this.shape.length; i++) {
                        this.ctx.beginPath();
                        this.ctx.moveTo(this.shape[i].p1.x * this.step, this.shape[i].p1.y * this.step);
                        this.ctx.lineTo(this.shape[i].p2.x * this.step, this.shape[i].p2.y * this.step);
                        this.ctx.stroke();
                        this.ctx.closePath();
                    }
                    for (var i = 0; i < this.shape.length; i++) {
                        this.ctx.beginPath();
                        this.ctx.arc(this.shape[i].p1.x * this.step, this.shape[i].p1.y * this.step, this.circleSize, 0, Math.PI * 2, true);
                        if (i > this.marker.id) {
                            if (i === this.marker.id + 1) {
                                this.ctx.fillStyle = "rgba(139, 94, 60, 1)";
                                this.ctx.fill();
                            }
                            else {
                                if (this.drawnNextMarker) {
                                    this.ctx.fillStyle = "rgba(139, 94, 60, 0.2)";
                                    this.ctx.fill();
                                }
                            }
                        }
                        else {
                            this.ctx.fillStyle = "rgba(118, 78, 41, 1)";
                            this.ctx.fill();
                        }
                        this.ctx.closePath();
                    }
                    this.ctx.beginPath();
                    this.ctx.fillStyle = "rgba(118, 78, 41, 0.3)";
                    this.ctx.arc(this.marker.x * this.step, this.marker.y * this.step, this.markerSize, 0, Math.PI * 2, true);
                    this.ctx.closePath();
                    this.ctx.fill();
                };
                return motion;
            }());
            exports_17("motion", motion);
        }
    };
});
System.register("demo/motion/boot", ["demo/motion/import/animal/animalCollection", "demo/motion/import/score/score", "src/motion/motion"], function (exports_18, context_18) {
    "use strict";
    var __moduleName = context_18 && context_18.id;
    function ratio() {
        var bodyWidth = document.body.clientWidth;
        var ratio = bodyWidth / 1920;
        aCollection.setRatio(ratio);
        graphMotion.setRatio(ratio);
    }
    function callback(e) {
        var result = 400 + Math.round(graphMotion.userPrecision / 100000);
        aScore.addScore(result > 0 ? result : -10);
        aCollection.addAnimal();
        aCollection.move();
        graphMotion.mouseFollow(aCollection.list[1].points, callback);
    }
    function move(e) {
        if (pPosition.length === 500) {
            document.removeEventListener('mousemove', move);
        }
        else {
            var position = {
                x: e.pageX,
                y: e.pageY
            };
            pPosition.push(position);
        }
    }
    var animalCollection_js_1, score_js_1, motion_1, aCollection, aScore, graphMotion, pPosition;
    return {
        setters: [
            function (animalCollection_js_1_1) {
                animalCollection_js_1 = animalCollection_js_1_1;
            },
            function (score_js_1_1) {
                score_js_1 = score_js_1_1;
            },
            function (motion_1_1) {
                motion_1 = motion_1_1;
            }
        ],
        execute: function () {
            aCollection = new animalCollection_js_1.animalCollection();
            aScore = new score_js_1.score();
            graphMotion = new motion_1.motion();
            ratio();
            window.onresize = function () {
                ratio();
            };
            graphMotion.mouseFollow(aCollection.list[1].points, callback);
            document.addEventListener('mousemove', move);
            pPosition = new Array();
        }
    };
});
