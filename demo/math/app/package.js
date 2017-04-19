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
System.register("src/math/toolsAngle", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
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
            exports_2("toolsAngle", toolsAngle);
        }
    };
});
System.register("src/math/toolsNumber", [], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
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
            exports_3("toolsNumber", toolsNumber);
        }
    };
});
System.register("src/math/toolsVector", ["src/math/vector", "src/math/point", "src/math/toolsAngle", "src/math/toolsNumber"], function (exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
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
                    if (vP.vx == 0 && vP.vy == 0 && vP.vz == 0) {
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
            exports_4("toolsVector", toolsVector);
        }
    };
});
System.register("src/math/vector", ["src/math/toolsPoint", "src/math/toolsVector"], function (exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    function vector(vx, vy, vz) {
        this.vx = vx ? vx : 0;
        this.vy = vy ? vy : 0;
        this.vz = vz ? vz : 0;
    }
    exports_5("vector", vector);
    var toolsPoint_1, toolsVector_1;
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
        }
    };
});
System.register("src/math/toolsPoint", ["src/math/point", "src/math/vector", "src/math/toolsAngle"], function (exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
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
            exports_6("toolsPoint", toolsPoint);
            ;
        }
    };
});
System.register("src/math/point", ["src/math/toolsPoint", "src/math/vector"], function (exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    function point(x, y, z) {
        this.x = parseFloat(x);
        this.y = parseFloat(y);
        this.z = z | 0;
    }
    exports_7("point", point);
    var toolsPoint_2, vector_3;
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
            ;
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
        }
    };
});
System.register("demo/math/boot", ["src/tools/test", "src/math/point", "src/math/vector", "src/math/toolsVector", "src/math/toolsPoint"], function (exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    var test_1, point_3, vector_4, toolsVector_2, toolsPoint_3, mocha;
    return {
        setters: [
            function (test_1_1) {
                test_1 = test_1_1;
            },
            function (point_3_1) {
                point_3 = point_3_1;
            },
            function (vector_4_1) {
                vector_4 = vector_4_1;
            },
            function (toolsVector_2_1) {
                toolsVector_2 = toolsVector_2_1;
            },
            function (toolsPoint_3_1) {
                toolsPoint_3 = toolsPoint_3_1;
            }
        ],
        execute: function () {
            mocha = (function () {
                function mocha() {
                    this.test = new test_1.testU("MATH.JS");
                    this.v0 = new point_3.point(0, 0);
                    this.v1 = new point_3.point(1, 1);
                    this.v2 = new point_3.point(0, 2);
                    this.v3 = new point_3.point(0, 2);
                    this.v4 = { x: 2 };
                    this.V0 = new point_3.point(0, 0, 0);
                    this.V1 = new point_3.point(0, 0, 1);
                    this.V2 = new point_3.point(0, 1, 1);
                    this.pointBelong();
                    this.distance2D();
                    this.distance3D();
                    this.rotation3D();
                    this.rotation2D();
                    this.cross();
                    this.normalize();
                    this.zTriangle();
                }
                mocha.prototype.pointBelong = function () {
                    this.test.log("<br/>POINT BELONG");
                    var graph = this.test.graph();
                    var p0 = new point_3.point(0, 0, 0);
                    var p1 = new point_3.point(2, 0, 0);
                    var p3 = new point_3.point(1, 0, 0);
                    var p4 = new point_3.point(3, 0, 0);
                    var p5 = new point_3.point(1, 2, 0);
                    var p6 = new point_3.point(0, 0, 1);
                    graph.point2D(p3);
                    graph.point2D(p4);
                    graph.point2D(p5);
                    graph.point2D(p6);
                    var v = new vector_4.vector();
                    v.setPoint(p0, p1);
                    graph.vector2D(v);
                    this.test.log("0, 0, 0 : " + toolsVector_2.toolsVector.pointBelong(v, p0));
                    this.test.log("1, 0, 0 : " + toolsVector_2.toolsVector.pointBelong(v, p3));
                    this.test.log("3, 0, 0 : " + toolsVector_2.toolsVector.pointBelong(v, p4));
                    this.test.log("1, 2, 0 : " + toolsVector_2.toolsVector.pointBelong(v, p5));
                    this.test.log("0, 0, 1 : " + toolsVector_2.toolsVector.pointBelong(v, p6));
                };
                mocha.prototype.distance2D = function () {
                    this.test.log("<br/>DISTANCE");
                    var graph = this.test.graph();
                    graph.ligne2D(this.v1, this.v2);
                    graph.point2D(this.v1);
                    graph.point2D(this.v2);
                    this.test.log("distance Self: " + this.v1.distance(this.v2));
                    this.test.log("distance Math: " + toolsPoint_3.toolsPoint.distance(this.v1, this.v2));
                    var graph = this.test.graph();
                    graph.point2D(this.v1);
                    graph.point2D(this.v3);
                    graph.ligne2D(this.v1, this.v3);
                    this.test.log("distance Self: " + this.v1.distance(this.v3));
                    this.test.log("distance Math: " + toolsPoint_3.toolsPoint.distance(this.v1, this.v3));
                    try {
                        this.test.log(this.v1.distance());
                    }
                    catch (e) {
                        this.test.log(e.toString());
                    }
                    try {
                        this.test.log(this.v1.distance(this.v4));
                    }
                    catch (e) {
                        this.test.log(e.toString());
                    }
                };
                mocha.prototype.distance3D = function () {
                    this.test.log("<br/>DISTANCE 3D");
                    this.test.log(this.V0);
                    this.test.log(this.V1);
                    this.test.log("distance Self: " + this.V1.distance(this.v0));
                    this.test.log("distance Math: " + toolsPoint_3.toolsPoint.distance(this.V1, this.V2));
                };
                mocha.prototype.rotation3D = function () {
                    this.test.log("<br/>ROTATION 3D");
                    this.v0 = new point_3.point(0, 0, 0);
                    this.v1 = new point_3.point(0, 1, 0);
                    try {
                        toolsPoint_3.toolsPoint.rotation(this.v1, this.v0, 90, "xz");
                    }
                    catch (e) {
                        this.test.log(e.toString());
                    }
                };
                mocha.prototype.rotation2D = function () {
                    this.test.log("<br/>ROTATION");
                    this.test.log("rotation 90");
                    var graph = this.test.graph();
                    graph.point2D(this.v0);
                    graph.point2D(this.v1, "#990099");
                    graph.point2D(toolsPoint_3.toolsPoint.rotation(this.v1, this.v0, 90), "#1F001F");
                    var v4 = new point_3.point(1, 0);
                    this.test.log("<br/>");
                    this.test.log("rotation -180");
                    var graph = this.test.graph();
                    graph.point2D(v4);
                    graph.point2D(this.v0, "#990099");
                    graph.point2D(toolsPoint_3.toolsPoint.rotation(this.v0, v4, -180), "#1F001F");
                    this.test.log("<br/>");
                    this.test.log("rotation self 45 deg");
                    var graph = this.test.graph();
                    graph.point2D(this.v2);
                    graph.point2D(this.v1, "#990099");
                    this.v1.rotation(this.v2, "45 deg");
                    graph.point2D(this.v1, "#1F001F");
                    this.test.log("<br/>");
                    this.test.log("rotation Math.PI/4 SELF");
                    var graph = this.test.graph();
                    graph.point2D(this.v2);
                    graph.point2D(this.v0, "#990099");
                    this.v0.rotation(this.v2, (Math.PI / 4) + "rad");
                    graph.point2D(this.v0, "#1F001F");
                    this.test.log("<br/>");
                    this.test.log("rotation Math.PI/4 string SELF");
                    var graph = this.test.graph();
                    graph.point2D(this.v1);
                    graph.point2D(this.v2, "#990099");
                    this.v2.rotation(this.v1, "PI/4 rad");
                    graph.point2D(this.v2, "#1F001F");
                };
                mocha.prototype.cross = function () {
                    this.test.log("<br/>CROSS");
                    var graph = this.test.graph();
                    this.v1 = new point_3.point(1, 1, 0);
                    this.v2 = new point_3.point(0, 1, 0);
                    this.v0 = new point_3.point(1, 2, 0);
                    this.v3 = new point_3.point(2, 0, 0);
                    var vector1 = (toolsPoint_3.toolsPoint.vectorBetween(this.v0, this.v3));
                    graph.vector2D(vector1);
                    var vector2 = new vector_4.vector();
                    vector2.setPoint(this.v1, this.v2);
                    graph.vector2D(vector2);
                    var vCross = (vector2.cross(vector1));
                    this.test.log(vCross);
                    graph.point2D(vCross);
                };
                mocha.prototype.normalize = function () {
                    this.v0 = new point_3.point(0, 0, 0);
                    this.v1 = new point_3.point(2, 0, 0);
                    this.v2 = new point_3.point(1, 0, 0);
                    this.v3 = new point_3.point(0, 2, 0);
                    var vector1 = (toolsPoint_3.toolsPoint.vectorBetween(this.v0, this.v1));
                    var vector2 = (toolsPoint_3.toolsPoint.vectorBetween(this.v2, this.v3));
                    this.test.log("<br/>NORMALIZE");
                    this.test.log(vector1);
                    this.test.log(toolsVector_2.toolsVector.normalize(vector1));
                    var vector3 = new vector_4.vector();
                    vector3 = vector1.normalize();
                    var vector4 = new vector_4.vector();
                    vector4 = vector2.normalize();
                    var graph = this.test.graph();
                    graph.vector2D(vector3);
                    graph.vector2D(vector4);
                    this.test.log(vector2.scalarProduct(vector4));
                    var graph = this.test.graph();
                    graph.vector2D(vector1);
                    graph.vector2D(vector2);
                    this.test.log(toolsVector_2.toolsVector.angleBetweenVector(vector1, vector2));
                };
                mocha.prototype.zTriangle = function () {
                    this.test.log("<br/>Z IN A PLAN TRIANGLE");
                    var p0, p1, p2, p3;
                    p0 = new point_3.point(0, 0, 0);
                    p1 = new point_3.point(2, 0, 1);
                    p2 = new point_3.point(0, 3, 1);
                    p3 = new point_3.point(0.5, 0.5, 0);
                    this.test.log(p0);
                    this.test.log(p1);
                    this.test.log(p2);
                    this.test.log("point in a PLAN Triangle");
                    this.test.log(p3);
                    var graph = this.test.graph();
                    graph.ligne2D(p0, p1);
                    graph.ligne2D(p0, p2);
                    graph.ligne2D(p1, p2);
                    graph.point2D(p3, "1F001F");
                    this.test.log(p3.zTriangle(p0, p1, p2));
                };
                return mocha;
            }());
            new mocha();
        }
    };
});
