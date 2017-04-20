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
System.register("src/tools/test", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function testU(name) {
        var vm = this;
        var msgDom = document.createElement("div");
        msgDom.className = "test";
        var title = document.createElement("h1");
        var txt = document.createTextNode(name);
        title.appendChild(txt);
        msgDom.appendChild(title);
        document.body.appendChild(msgDom);
        vm.dom = msgDom;
    }
    exports_1("testU", testU);
    var graph;
    return {
        setters: [],
        execute: function () {
            graph = function (dom) {
                var vm = this;
                var canvas = document.createElement("canvas");
                canvas.width = 100;
                canvas.height = 100;
                dom.appendChild(canvas);
                this.ctx = canvas.getContext('2d');
                this.scale = canvas.width / 6;
                this.X = canvas.width;
                this.Y = canvas.height;
                var p1 = { x: this.X / 2, y: 0 };
                var p2 = { x: this.X / 2, y: this.Y };
                var p3 = { x: 0, y: this.Y / 2 };
                var p4 = { x: this.X, y: this.Y / 2 };
                for (var i = 0; i < (this.X / this.scale); i++) {
                    var pT1 = { x: i * this.scale, y: this.Y / 2 - 2 };
                    var pT2 = { x: i * this.scale, y: this.Y / 2 + 2 };
                    this.drawligne(pT1, pT2);
                }
                for (var i = 0; i < (this.Y / this.scale); i++) {
                    var pT1 = { y: i * this.scale, x: this.X / 2 - 2 };
                    var pT2 = { y: i * this.scale, x: this.X / 2 + 2 };
                    this.drawligne(pT1, pT2);
                }
                this.drawligne(p1, p2);
                this.drawligne(p3, p4);
                vm.dom = canvas;
            };
            graph.prototype.drawpoint = function (p1, color) {
                if (!color)
                    color = '#FF5050';
                this.ctx.strokeStyle = color;
                this.ctx.beginPath();
                this.ctx.arc(p1.x, p1.y, 2, 0, 2 * Math.PI, true);
                this.ctx.stroke();
                this.ctx.closePath();
            };
            graph.prototype.drawligne = function (p1, p2, color) {
                if (!color)
                    color = '#8B5E3C';
                this.ctx.strokeStyle = color;
                this.ctx.beginPath();
                this.ctx.moveTo(p1.x, p1.y);
                this.ctx.lineTo(p2.x, p2.y);
                this.ctx.stroke();
                this.ctx.closePath();
            };
            graph.prototype.vector2D = function (v) {
                this.point2D(v.p1);
                this.point2D(v.p2, "#990099");
                this.ligne2D(v.p1, v.p2);
            };
            graph.prototype.scalePoint = function (p1) {
                var pS = { x: 0, y: 0 };
                pS.x = this.scale * p1.x;
                pS.x = pS.x + (this.X / 2);
                pS.y = this.scale * p1.y;
                pS.y = pS.y + (this.Y / 2);
                return pS;
            };
            graph.prototype.point2D = function (p1, color) {
                var pS1 = this.scalePoint(p1);
                this.drawpoint(pS1, color);
            };
            graph.prototype.ligne2D = function (p1, p2, color) {
                var pS1 = this.scalePoint(p1);
                var pS2 = this.scalePoint(p2);
                this.drawligne(pS1, pS2, color);
            };
            ;
            testU.prototype.graph = function () {
                return new graph(this.dom);
            };
            testU.prototype.log = function (message) {
                switch (typeof (message)) {
                    case "number":
                        message = message.toString();
                    case "string":
                        this.dom.insertAdjacentHTML('beforeend', "<p>" + message + "</p>");
                        break;
                    case "object":
                        this.dom.insertAdjacentHTML('beforeend', "<p>" + JSON.stringify(message) + "</p>");
                        break;
                    default:
                        this.dom.insertAdjacentHTML('beforeend', "<p>" + typeof (message) + "</p>");
                        break;
                }
            };
            testU.prototype.logMethode = function (obj) {
                for (var i in obj) {
                    this.log("prototype : " + i);
                }
            };
        }
    };
});
System.register("src/dom/domClass", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    function removeClass(n) {
        if (typeof n === "string") {
            n = n.trim().toLowerCase();
            var $i, $a, $b;
            $b = n.split(" ");
            $a = this.className.split(" ");
            for (var i = 0; i < $b.length; i++) {
                var nE = $b[i];
                $i = ($a).indexOf(nE);
                if (($i) !== -1)
                    $a.splice($i, 1);
            }
            this.className = $a.join(" ");
            return true;
        }
        else
            return false;
    }
    function addClass(n) {
        if (typeof n === "string") {
            n = n.trim().toLowerCase();
            var $a, $b;
            if (this.className) {
                $a = this.className.split(" ");
            }
            else
                $a = [];
            $b = n.split(" ");
            for (var i = 0; i < $b.length; i++) {
                var nE = $b[i];
                if (($a).indexOf(nE) === -1) {
                    $a.push(nE);
                }
            }
            this.className = $a.join(" ");
            return true;
        }
        else
            return false;
    }
    function domClass(e) {
        var e = e[0] ? e[0] : e;
        e.removeClass = removeClass;
        e.addClass = addClass;
        return e;
    }
    exports_2("domClass", domClass);
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("src/dom/domInsert", [], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    function append(d) {
        if (typeof d === "string") {
            this.insertAdjacentHTML('beforeend', d);
            return true;
        }
        else {
            if (typeof d === "object") {
                if (d.toString(d) === "[object Object]" || d.toString(d) === "[object Array]") {
                    d = JSON.stringify(d);
                    this.insertAdjacentHTML('beforeend', d);
                }
                try {
                    this.appendChild(d);
                }
                catch (e) {
                    return false;
                }
                return true;
            }
        }
        return false;
    }
    function prepend(d) {
        if (typeof d === "string") {
            this.insertAdjacentHTML('afterbegin', d);
            return true;
        }
        else {
            if (d.toString(d) === "[object Object]" || d.toString(d) === "[object Array]") {
                d = JSON.stringify(d);
                this.insertAdjacentHTML('afterbegin', d);
            }
            try {
                this.insertBefore(d, this.firstChild);
            }
            catch (e) {
                return false;
            }
            return true;
        }
        return false;
    }
    function after(d) {
        var parent = this.parentNode;
        if (typeof d === "string") {
            this.insertAdjacentHTML('afterend', d);
            return true;
        }
        else {
            if (Object.prototype.toString.call(d) === "[object Object]" || Object.prototype.toString.call(d) === "[object Array]") {
                d = JSON.stringify(d);
                this.insertAdjacentHTML('afterend', d);
            }
            try {
                parent.insertBefore(d, this.nextSibling);
            }
            catch (e) {
                return false;
            }
        }
        return false;
    }
    function before(d) {
        var parent = this.parentNode;
        if (typeof d === "string") {
            this.insertAdjacentHTML('beforebegin', d);
            return true;
        }
        else {
            if (Object.prototype.toString.call(d) === "[object Object]" || Object.prototype.toString.call(d) === "[object Array]") {
                d = JSON.stringify(d);
                this.insertAdjacentHTML('beforebegin', d);
            }
            try {
                parent.insertBefore(d, this);
            }
            catch (e) {
                return false;
            }
            ;
        }
    }
    function domInsert(e) {
        var e = e[0] ? e[0] : e;
        e.before = before;
        e.after = after;
        e.prepend = prepend;
        e.append = append;
        return e;
    }
    exports_3("domInsert", domInsert);
    return {
        setters: [],
        execute: function () {
            ;
            ;
            ;
        }
    };
});
System.register("src/dom/domCss", [], function (exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    function width() {
        return this.offsetWidth;
    }
    function height() {
        return this.offsetHeight;
    }
    function css(p, v) {
        if (typeof p === "string") {
            p = p.trim().toLowerCase();
            if (typeof (v) === "string") {
                var t = typeof (v);
                switch (t) {
                    case "string":
                        v = v.trim().toLowerCase();
                        if (toolsCss.cssIsInteger(p)) {
                            if (!this.style[p])
                                this.style[p] = 0 + "px";
                            var O = toolsCss.parseCss(this.style[p]);
                            var N = toolsCss.parseCss(v);
                            if (N.process != false)
                                var v = toolsCss.processInteger(O.value, N.value, N.process);
                            else
                                var v = N.value;
                            N.type = N.type == "" ? O.type == "" ? "px" : O.type : N.type;
                            v += N.type;
                        }
                        this.style[p] = v;
                        break;
                }
            }
            return this;
        }
        else
            return false;
    }
    function domCss(e) {
        var e = e[0] ? e[0] : e;
        e.css = css;
        e.height = height;
        e.width = width;
        return e;
    }
    exports_4("domCss", domCss);
    var toolsCss;
    return {
        setters: [],
        execute: function () {
            toolsCss = function () {
                var toolsCss = {
                    cssIsInteger: cssIsInteger,
                    processInteger: processInteger,
                    parseCss: parseCss
                };
                return toolsCss;
                function cssIsInteger(p) {
                    return (p === "height" || p === "width" ||
                        p === "left" || p === "right" || p === "top" || p === "bottom" ||
                        p === "padding-left" || p === "padding-right" || p === "padding-top" || p === "padding-bottom" ||
                        p === "margin-left" || p === "margin-right" || p === "margin-top" || p === "margin-bottom") ? true : false;
                }
                function processInteger(sO, sN, process) {
                    var intO = parseFloat(sO);
                    var intN = parseFloat(sN);
                    var v;
                    switch (process) {
                        case "+=":
                            v = intO + intN;
                            break;
                        case "-=":
                            v = intO - intN;
                            break;
                        case "/=":
                            v = intO / intN;
                            break;
                        case "*=":
                            v = intO * intN;
                            break;
                    }
                    return v;
                }
                function parseCss(str) {
                    var css = {};
                    css.full = str;
                    var s = str.substring(0, 2);
                    if (s === "+=" || s === "-=" || s === "/=" || s === "*=") {
                        css.process = s;
                        str = str.substring(2, str.length);
                    }
                    else {
                        css.process = false;
                    }
                    if (isPx(str)) {
                        css.value = (str.substring(0, str.length - 2));
                        css.type = "px";
                        return css;
                    }
                    if (isPourcent(str)) {
                        css.value = (str.substring(0, str.length - 1));
                        css.type = "%";
                        return css;
                    }
                    if (isEm(str)) {
                        css.value = (str.substring(0, str.length - 1));
                        css.type = "en";
                        return css;
                    }
                    css.value = (str);
                    css.type = "";
                    return css;
                    function isPourcent(str) {
                        return str.substring(str.length - 1, str.length) == "%" ? true : false;
                    }
                    function isPx(str) {
                        return str.substring(str.length - 2, str.length) == "px" ? true : false;
                    }
                    function isEm(str) {
                        return str.substring(str.length - 2, str.length) == "em" ? true : false;
                    }
                }
            }();
        }
    };
});
System.register("src/dom/domAnimate", [], function (exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    function cloneAnimate(vm) {
        var clone = function () {
            this.style = vm.style;
        };
        for (var fn in vm) {
            (function () {
                var func = vm[fn];
                if (typeof func == "function") {
                    if (fn === "animate") {
                        clone.prototype[fn] = animate;
                    }
                    else if (fn === "delay") {
                        clone.prototype[fn] = delay;
                    }
                    else {
                        clone.prototype[fn] = function () {
                            var param = [];
                            for (var i = 0; i < arguments.length; i++) {
                                param.push(arguments[i]);
                            }
                            vm.pushAnimate(func, param);
                            return new clone;
                        };
                    }
                }
            })();
        }
        return new clone;
    }
    function pushAnimate(func, param) {
        var lenght = func === "delay" || func === "animate" ? Math.round(param[0] / 1000 * fps) : 0;
        var keyframe = 0;
        if (this.$animate.list[this.$animate.list.length - 1])
            keyframe = this.$animate.list[this.$animate.list.length - 1].keyEnd;
        var anim = {
            func: func,
            param: param,
            keyEnd: keyframe + lenght,
            keyStart: keyframe
        };
        this.$animate.list.push(anim);
    }
    function play() {
        var vm = this;
        if (this.$animate.state !== 1) {
            var idAnim = getIdAnim.call(this);
            this.$animate.state = 1;
            this.$animate.interval = setInterval(function () {
                nextFrame.call(vm);
            }, 1000 / fps);
        }
        function getIdAnim() {
            for (var i = 0; i < this.$animate.list.length; i++) {
                if (this.$animate.keyframe >= this.$animate.list[i].keyStart && this.$animate.keyframe <= this.$animate.list[i].keyEnd)
                    return i;
            }
            return false;
        }
        function exe(anim) {
            switch (anim.func) {
                case "delay":
                    if (this.$animate.keyframe >= anim.keyEnd) {
                        nextIsAnimate.call(this);
                    }
                    ;
                    return true;
                    break;
                case "animate":
                    var keyRemaining = anim.keyEnd - this.$animate.keyframe;
                    if (keyRemaining <= 0) {
                        nextIsAnimate.call(this);
                    }
                    else {
                        for (var i in anim.param[1]) {
                            var diff = (parseInt(anim.param[1][i]) - parseInt(this.style[i]));
                            this.css(i, "+=" + diff / keyRemaining);
                        }
                    }
                    return true;
                    break;
                default:
                    nextIsAnimate.call(this);
                    anim.func.apply(this, anim.param);
                    return true;
                    break;
            }
            function nextIsAnimate() {
                idAnim++;
                var anim = this.$animate.list[idAnim];
                if (anim) {
                    if (typeof anim.func != "String")
                        exe.call(this, anim);
                }
            }
            function exeCSS(anim) {
            }
        }
        function nextFrame() {
            var anim = this.$animate.list[idAnim];
            if (anim) {
                this.$animate.keyframe++;
                exe.call(this, anim);
            }
            else {
                this.clearAnimate();
                console.log("animate end");
            }
        }
    }
    function clearAnimate() {
        clearInterval(this.$animate.interval);
        this.$animate.state = 0;
        this.$animate.list = new Array();
        this.$animate.keyframe = 0;
    }
    function delay(time) {
        this.pushAnimate("delay", [time]);
        this.play();
        return cloneAnimate(this);
    }
    function animate(json, time) {
        this.pushAnimate("animate", [time, json]);
        this.play();
        return cloneAnimate(this);
    }
    function domAnimate(e) {
        var e = e[0] ? e[0] : e;
        e.$animate = {};
        e.$animate.list = new Array();
        e.$animate.keyframe = 0;
        e.$animate.state = 0;
        e.animate = animate;
        e.delay = delay;
        e.clearAnimate = clearAnimate;
        e.pushAnimate = pushAnimate;
        e.play = play;
        return e;
    }
    exports_5("domAnimate", domAnimate);
    var fps;
    return {
        setters: [],
        execute: function () {
            fps = 30;
            ;
        }
    };
});
System.register("demo/dom/dom", ["src/tools/test", "src/dom/domClass", "src/dom/domInsert", "src/dom/domCss", "src/dom/domAnimate"], function (exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    function animate(domDiv) {
        domDiv = domCss_1.domCss(domDiv);
        domDiv = domAnimate_1.domAnimate(domDiv);
        domDiv.css("position", "absolute").css("top", "0").animate({ left: "200" }, 1000).css("color", "blue").delay(2000).animate({ top: "200" }, 1000);
    }
    function classManipulateTest(domP) {
        domP = domClass_1.domClass(domP);
        domP.addClass("myClass yourClass");
        domP.addClass("test2");
        domP.addClass(re);
        test.log(domP.className);
        domP.removeClass("myClass");
        domP.removeClass("yourClass test2");
        domP.addClass("  %test   ");
        test.log(domP.className);
    }
    function domInsertTest(domP) {
        domP = domInsert_1.domInsert(domP);
        domP.append("</br>append BJ <div> append OK</div>");
        var domP3 = document.createElement("div");
        var domP2 = document.createElement("p");
        domP2.append("append salut");
        domP.append(domP2);
        domP.append(domP3);
        domP.append(re);
        var txt2 = document.createTextNode("prepend Hello 2");
        domP.prepend("<div>prepend</div>");
        domP.prepend(txt2);
        domDiv.before("<div>before 1</div>");
        var txt3 = document.createTextNode("before Hello 2");
        domDiv.before(txt3);
        domDiv.before("<div>before 3</div>");
        var txt4 = document.createTextNode("after Hello 2");
        domDiv.after("<div>after 1</div>");
        domDiv.after(txt4);
        domDiv.after("<div>after 3</div>");
    }
    function cssTest(domDiv) {
        domDiv = domCss_1.domCss(domDiv);
        domDiv.css("  background-color ", " red ");
        var bgColor = domDiv.css("background-color");
        test.log("bgColor: " + bgColor);
        bgColor = "blue";
        domDiv.css("height", "+=200");
        domDiv.css("height", "20%");
        domDiv.css("width", "500");
        domDiv.css("width", "-=200px");
        domDiv.css("width", "+=500");
        domDiv.css("width", "*=2");
        domDiv.css("width", "/=3");
        domDiv.css("width", function () {
            alert("test");
        });
        domDiv.css("height", "+=AA");
        domDiv.css("height", "+=5");
        test.log("height: " + domDiv.css("height"));
        test.log("width: " + domDiv.width());
        test.log("height: " + domDiv.height());
    }
    var test_1, domClass_1, domInsert_1, domCss_1, domAnimate_1, test, re, domDiv, domP, txt;
    return {
        setters: [
            function (test_1_1) {
                test_1 = test_1_1;
            },
            function (domClass_1_1) {
                domClass_1 = domClass_1_1;
            },
            function (domInsert_1_1) {
                domInsert_1 = domInsert_1_1;
            },
            function (domCss_1_1) {
                domCss_1 = domCss_1_1;
            },
            function (domAnimate_1_1) {
                domAnimate_1 = domAnimate_1_1;
            }
        ],
        execute: function () {
            test = new test_1.testU("HTMELEMENT.JS");
            re = {
                er: "tst",
                r: "dsfl"
            };
            domDiv = document.createElement("div");
            domP = document.createElement("p");
            txt = document.createTextNode("Texte Base");
            domP.appendChild(txt);
            domDiv.appendChild(domP);
            test.dom.appendChild(domDiv);
            cssTest(domDiv);
            classManipulateTest(domP);
            domInsertTest(domP);
            animate(domDiv);
        }
    };
});
System.register("src/natif/natifStorage", [], function (exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    var toolsObject, natifStorage;
    return {
        setters: [],
        execute: function () {
            toolsObject = function () {
                var toolsObject = {
                    parseObject: parseObject
                };
                return toolsObject;
                function parseObject(srt) {
                    try {
                        var obj = JSON.parse(srt);
                        if (obj === "" || !obj)
                            return false;
                    }
                    catch (e) {
                        return false;
                    }
                    ;
                    return obj;
                }
            }();
            natifStorage = (function () {
                function natifStorage() {
                }
                natifStorage.setObject = function (key, obj, type) {
                    if (typeof key === "number")
                        key = key.toString();
                    switch (typeof obj) {
                        case "number":
                            obj = obj.toString();
                        case "string":
                            try {
                                var obj = JSON.parse(obj);
                            }
                            catch (e) {
                                return false;
                            }
                            ;
                            break;
                        case "object":
                            break;
                        default:
                            return false;
                            break;
                    }
                    if (typeof key === "string") {
                        switch (type) {
                            case "[]":
                                obj = Object.prototype.toString.call(obj) === "[object Array]" ? obj : [];
                                break;
                            case "{}":
                                obj = Object.prototype.toString.call(obj) === "[object Object]" || obj ? obj : {};
                                break;
                            default:
                                break;
                        }
                        try {
                            localStorage.setItem(key, JSON.stringify(obj));
                            return true;
                        }
                        catch (e) {
                            return false;
                        }
                    }
                    else
                        return false;
                };
                natifStorage.getObject = function (key, type) {
                    if (typeof key === "number")
                        key = key.toString();
                    if (typeof key === "string") {
                        var obj;
                        var item = localStorage.getItem(key);
                        obj = toolsObject.parseObject(item);
                        if (obj === false) {
                            switch (Object.prototype.toString.call(item)) {
                                case "[object Array]":
                                    obj = [];
                                    break;
                                default:
                                    obj = {};
                                    break;
                            }
                        }
                        switch (type) {
                            case "[]":
                                obj = Object.prototype.toString.call(obj) === "[object Array]" ? obj : [];
                                break;
                            case "{}":
                                obj = Object.prototype.toString.call(obj) === "[object Object]" ? obj : {};
                                break;
                            default:
                                break;
                        }
                        return obj;
                    }
                    else
                        return false;
                };
                return natifStorage;
            }());
            exports_7("natifStorage", natifStorage);
        }
    };
});
System.register("src/natif/natifArray", [], function (exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    var natifArray;
    return {
        setters: [],
        execute: function () {
            natifArray = (function () {
                function natifArray() {
                }
                natifArray.shuffle = function (array) {
                    for (var i = this.length - 1; i > 0; i--) {
                        var j = Math.floor(Math.random() * (i + 1));
                        var t = this[i];
                        this[i] = this[j];
                        this[j] = t;
                    }
                    return this;
                };
                natifArray.limit = function (array, n, shift) {
                    if (typeof (shift) === "undefined")
                        shift = false;
                    if (this.length > n) {
                        shift ? this.splice(n, this.length - n) : this.splice(0, this.length - n);
                        return true;
                    }
                    return false;
                };
                return natifArray;
            }());
            exports_8("natifArray", natifArray);
        }
    };
});
System.register("src/natif/natifString", [], function (exports_9, context_9) {
    "use strict";
    var __moduleName = context_9 && context_9.id;
    function natifString(e) {
        return new Super(e);
    }
    exports_9("natifString", natifString);
    var Super;
    return {
        setters: [],
        execute: function () {
            Super = function (e) {
                this.str = e;
            };
            Super.prototype.apply = function (array) {
                var format = this.str;
                for (var i in array)
                    format = format.replace("{{ " + i + " }}", array[i]);
                return format;
            };
            Super.prototype.replaceAll = function (search, replacement) {
                var target = this.str;
                return target.replace(new RegExp(search, 'g'), replacement);
            };
            Super.prototype.template = function (params) {
                var names = [], vals = [];
                for (var i in params) {
                    names.push(i);
                    vals.push(params[i]);
                }
                return new Function(names, 'return \`' + this.str + ' \`;').apply([], vals);
            };
        }
    };
});
System.register("demo/dom/storage", ["src/tools/test", "src/natif/natifStorage", "src/natif/natifArray", "src/natif/natifString"], function (exports_10, context_10) {
    "use strict";
    var __moduleName = context_10 && context_10.id;
    var test_2, natifStorage_1, natifArray_1, natifString_1, test, keyStorage, keyObject, ch, i, ch, i, i, i;
    return {
        setters: [
            function (test_2_1) {
                test_2 = test_2_1;
            },
            function (natifStorage_1_1) {
                natifStorage_1 = natifStorage_1_1;
            },
            function (natifArray_1_1) {
                natifArray_1 = natifArray_1_1;
            },
            function (natifString_1_1) {
                natifString_1 = natifString_1_1;
            }
        ],
        execute: function () {
            test = new test_2.testU("STORAGE.JS");
            test.log(natifString_1.natifString("a c a").replaceAll("a", "b"));
            test.log(natifString_1.natifString("translate {{ a }}").apply({ a: "b" }));
            test.log(natifString_1.natifString("${a} ${scope}").template({ a: "b", scope: "double scope" }));
            keyStorage = "usBDe2r";
            keyObject = 25;
            ch = [];
            for (i = 0; i < 5; i++) {
                ch = natifStorage_1.natifStorage.getObject(keyStorage, "[]");
                ch.push(Math.floor(Math.random() * 10));
                natifArray_1.natifArray.limit(ch, 15);
                natifStorage_1.natifStorage.setObject(keyStorage, ch, "[]");
            }
            test.log(natifStorage_1.natifStorage.getObject(keyStorage));
            ch = {};
            for (i = 0; i < 5; i++) {
                if (i % 2 === 0) {
                    ch = natifStorage_1.natifStorage.getObject(keyObject, "{}");
                }
                else {
                    ch = natifStorage_1.natifStorage.getObject(keyObject);
                }
                ch[i] = Math.floor(Math.random() * 10);
                natifStorage_1.natifStorage.setObject(keyObject, ch, "{}");
            }
            test.log(natifStorage_1.natifStorage.getObject(keyObject));
            keyObject = Math.random() * 500;
            natifStorage_1.natifStorage.setObject(keyObject, []);
            natifStorage_1.natifStorage.setObject(keyObject, "[]");
            for (i = 0; i < 5; i++) {
                ch = natifStorage_1.natifStorage.getObject(keyObject);
                ch[i] = "error" + Math.floor(Math.random() * 10);
                natifStorage_1.natifStorage.setObject(keyObject, ch, "[]");
            }
            test.log(natifStorage_1.natifStorage.getObject(keyObject));
            keyObject = Math.random() * 500;
            for (i = 0; i < 5; i++) {
                ch = natifStorage_1.natifStorage.getObject(keyObject, "[]");
                ch[i] = "error" + Math.floor(Math.random() * 10);
                natifStorage_1.natifStorage.setObject(keyObject, ch, "[]");
            }
            test.log(natifStorage_1.natifStorage.getObject(keyObject));
        }
    };
});
