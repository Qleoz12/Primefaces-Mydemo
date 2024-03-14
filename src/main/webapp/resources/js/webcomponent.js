function tn(r, e) {
  for (var t = 0; t < e.length; t++) {
    const i = e[t];
    if (typeof i != "string" && !Array.isArray(i)) {
      for (const n in i)
        if (n !== "default" && !(n in r)) {
          const a = Object.getOwnPropertyDescriptor(i, n);
          a && Object.defineProperty(r, n, a.get ? a : {
            enumerable: !0,
            get: () => i[n]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }));
}
function D() {
}
function rt(r) {
  return r();
}
function ft() {
  return /* @__PURE__ */ Object.create(null);
}
function Ae(r) {
  r.forEach(rt);
}
function $e(r) {
  return typeof r == "function";
}
function it(r, e) {
  return r != r ? e == e : r !== e || r && typeof r == "object" || typeof r == "function";
}
function nn(r) {
  return Object.keys(r).length === 0;
}
function Bt(r, ...e) {
  if (r == null)
    return D;
  const t = r.subscribe(...e);
  return t.unsubscribe ? () => t.unsubscribe() : t;
}
function rn(r) {
  let e;
  return Bt(r, (t) => e = t)(), e;
}
function an(r, e, t) {
  r.$$.on_destroy.push(Bt(e, t));
}
function on(r) {
  return r && $e(r.destroy) ? r.destroy : D;
}
function P(r, e) {
  r.appendChild(e);
}
function he(r, e, t) {
  r.insertBefore(e, t || null);
}
function Oe(r) {
  r.parentNode && r.parentNode.removeChild(r);
}
function Mt(r, e) {
  for (let t = 0; t < r.length; t += 1)
    r[t] && r[t].d(e);
}
function N(r) {
  return document.createElement(r);
}
function ne(r) {
  return document.createElementNS("http://www.w3.org/2000/svg", r);
}
function oe(r) {
  return document.createTextNode(r);
}
function de() {
  return oe(" ");
}
function sn() {
  return oe("");
}
function O(r, e, t) {
  t == null ? r.removeAttribute(e) : r.getAttribute(e) !== t && r.setAttribute(e, t);
}
function un(r) {
  return Array.from(r.childNodes);
}
function pe(r, e) {
  e = "" + e, r.wholeText !== e && (r.data = e);
}
function Ht(r) {
  const e = {};
  for (const t of r)
    e[t.name] = t.value;
  return e;
}
let Ee;
function _e(r) {
  Ee = r;
}
function fn() {
  if (!Ee)
    throw new Error("Function called outside component initialization");
  return Ee;
}
function We(r) {
  fn().$$.on_mount.push(r);
}
const we = [], lt = [], De = [], ct = [], ln = Promise.resolve();
let Qe = !1;
function cn() {
  Qe || (Qe = !0, ln.then(Le));
}
function Ze(r) {
  De.push(r);
}
const Je = /* @__PURE__ */ new Set();
let me = 0;
function Le() {
  if (me !== 0)
    return;
  const r = Ee;
  do {
    try {
      for (; me < we.length; ) {
        const e = we[me];
        me++, _e(e), dn(e.$$);
      }
    } catch (e) {
      throw we.length = 0, me = 0, e;
    }
    for (_e(null), we.length = 0, me = 0; lt.length; )
      lt.pop()();
    for (let e = 0; e < De.length; e += 1) {
      const t = De[e];
      Je.has(t) || (Je.add(t), t());
    }
    De.length = 0;
  } while (we.length);
  for (; ct.length; )
    ct.pop()();
  Qe = !1, Je.clear(), _e(r);
}
function dn(r) {
  if (r.fragment !== null) {
    r.update(), Ae(r.before_update);
    const e = r.dirty;
    r.dirty = [-1], r.fragment && r.fragment.p(r.ctx, e), r.after_update.forEach(Ze);
  }
}
const hn = /* @__PURE__ */ new Set();
function gn(r, e) {
  r && r.i && (hn.delete(r), r.i(e));
}
function pn(r, e, t, i) {
  const { fragment: n, after_update: a } = r.$$;
  n && n.m(e, t), i || Ze(() => {
    const o = r.$$.on_mount.map(rt).filter($e);
    r.$$.on_destroy ? r.$$.on_destroy.push(...o) : Ae(o), r.$$.on_mount = [];
  }), a.forEach(Ze);
}
function mn(r, e) {
  const t = r.$$;
  t.fragment !== null && (Ae(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function vn(r, e) {
  r.$$.dirty[0] === -1 && (we.push(r), cn(), r.$$.dirty.fill(0)), r.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function zt(r, e, t, i, n, a, o, s = [-1]) {
  const u = Ee;
  _e(r);
  const l = r.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: a,
    update: D,
    not_equal: n,
    bound: ft(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (u ? u.$$.context : [])),
    // everything else
    callbacks: ft(),
    dirty: s,
    skip_bound: !1,
    root: e.target || u.$$.root
  };
  o && o(l.root);
  let d = !1;
  if (l.ctx = t ? t(r, e.props || {}, (f, g, ...h) => {
    const m = h.length ? h[0] : g;
    return l.ctx && n(l.ctx[f], l.ctx[f] = m) && (!l.skip_bound && l.bound[f] && l.bound[f](m), d && vn(r, f)), g;
  }) : [], l.update(), d = !0, Ae(l.before_update), l.fragment = i ? i(l.ctx) : !1, e.target) {
    if (e.hydrate) {
      const f = un(e.target);
      l.fragment && l.fragment.l(f), f.forEach(Oe);
    } else
      l.fragment && l.fragment.c();
    e.intro && gn(r.$$.fragment), pn(r, e.target, e.anchor, e.customElement), Le();
  }
  _e(u);
}
let at;
typeof HTMLElement == "function" && (at = class extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const { on_mount: r } = this.$$;
    this.$$.on_disconnect = r.map(rt).filter($e);
    for (const e in this.$$.slotted)
      this.appendChild(this.$$.slotted[e]);
  }
  attributeChangedCallback(r, e, t) {
    this[r] = t;
  }
  disconnectedCallback() {
    Ae(this.$$.on_disconnect);
  }
  $destroy() {
    mn(this, 1), this.$destroy = D;
  }
  $on(r, e) {
    if (!$e(e))
      return D;
    const t = this.$$.callbacks[r] || (this.$$.callbacks[r] = []);
    return t.push(e), () => {
      const i = t.indexOf(e);
      i !== -1 && t.splice(i, 1);
    };
  }
  $set(r) {
    this.$$set && !nn(r) && (this.$$.skip_bound = !0, this.$$set(r), this.$$.skip_bound = !1);
  }
});
function yn(r, e, t) {
  const i = r.slice();
  return i[4] = e[t], i;
}
function bn(r, e, t) {
  const i = r.slice();
  return i[7] = e[t], i;
}
function wn(r) {
  let e;
  return {
    c() {
      e = ne("line"), O(e, "class", "minor"), O(e, "y1", "42"), O(e, "y2", "45"), O(e, "transform", "rotate(" + 6 * /*minute*/
      (r[4] + /*offset*/
      r[7]) + ")");
    },
    m(t, i) {
      he(t, e, i);
    },
    p: D,
    d(t) {
      t && Oe(e);
    }
  };
}
function On(r) {
  let e, t, i = [1, 2, 3, 4], n = [];
  for (let a = 0; a < 4; a += 1)
    n[a] = wn(bn(r, i, a));
  return {
    c() {
      e = ne("line");
      for (let a = 0; a < 4; a += 1)
        n[a].c();
      t = sn(), O(e, "class", "major"), O(e, "y1", "35"), O(e, "y2", "45"), O(e, "transform", "rotate(" + 30 * /*minute*/
      r[4] + ")");
    },
    m(a, o) {
      he(a, e, o);
      for (let s = 0; s < 4; s += 1)
        n[s].m(a, o);
      he(a, t, o);
    },
    p: D,
    d(a) {
      a && Oe(e), Mt(n, a), a && Oe(t);
    }
  };
}
function Sn(r) {
  let e, t, i, n, a, o, s, u, l, d, f = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55], g = [];
  for (let h = 0; h < 12; h += 1)
    g[h] = On(yn(r, f, h));
  return {
    c() {
      e = ne("svg"), t = ne("circle");
      for (let h = 0; h < 12; h += 1)
        g[h].c();
      i = ne("line"), a = ne("line"), s = ne("g"), u = ne("line"), l = ne("line"), this.c = D, O(t, "class", "clock-face"), O(t, "r", "48"), O(i, "class", "hour"), O(i, "y1", "2"), O(i, "y2", "-20"), O(i, "transform", n = "rotate(" + (30 * /*hours*/
      r[2] + /*minutes*/
      r[1] / 2) + ")"), O(a, "class", "minute"), O(a, "y1", "4"), O(a, "y2", "-30"), O(a, "transform", o = "rotate(" + (6 * /*minutes*/
      r[1] + /*seconds*/
      r[0] / 10) + ")"), O(u, "class", "second"), O(u, "y1", "10"), O(u, "y2", "-38"), O(l, "class", "second-counterweight"), O(l, "y1", "10"), O(l, "y2", "2"), O(s, "transform", d = "rotate(" + 6 * /*seconds*/
      r[0] + ")"), O(e, "viewBox", "-50 -50 100 100");
    },
    m(h, m) {
      he(h, e, m), P(e, t);
      for (let w = 0; w < 12; w += 1)
        g[w].m(e, null);
      P(e, i), P(e, a), P(e, s), P(s, u), P(s, l);
    },
    p(h, [m]) {
      m & /*hours, minutes*/
      6 && n !== (n = "rotate(" + (30 * /*hours*/
      h[2] + /*minutes*/
      h[1] / 2) + ")") && O(i, "transform", n), m & /*minutes, seconds*/
      3 && o !== (o = "rotate(" + (6 * /*minutes*/
      h[1] + /*seconds*/
      h[0] / 10) + ")") && O(a, "transform", o), m & /*seconds*/
      1 && d !== (d = "rotate(" + 6 * /*seconds*/
      h[0] + ")") && O(s, "transform", d);
    },
    i: D,
    o: D,
    d(h) {
      h && Oe(e), Mt(g, h);
    }
  };
}
function kn(r, e, t) {
  let i, n, a, o = new Date();
  return We(() => {
    const s = setInterval(
      () => {
        t(3, o = new Date());
      },
      1e3
    );
    return () => {
      clearInterval(s);
    };
  }), r.$$.update = () => {
    r.$$.dirty & /*time*/
    8 && t(2, i = o.getHours()), r.$$.dirty & /*time*/
    8 && t(1, n = o.getMinutes()), r.$$.dirty & /*time*/
    8 && t(0, a = o.getSeconds());
  }, [a, n, i, o];
}
class xn extends at {
  constructor(e) {
    super(), this.shadowRoot.innerHTML = "<style>svg{width:100%;height:100%}.clock-face{stroke:#333;fill:white}.minor{stroke:#999;stroke-width:0.5}.major{stroke:#333;stroke-width:1}.hour{stroke:#333}.minute{stroke:#666}.second,.second-counterweight{stroke:rgb(180,0,0)}.second-counterweight{stroke-width:3}</style>", zt(
      this,
      {
        target: this.shadowRoot,
        props: Ht(this.attributes),
        customElement: !0
      },
      kn,
      Sn,
      it,
      {},
      null
    ), e && e.target && he(e.target, this, e.anchor);
  }
}
customElements.define("my-component", xn);
const ve = [];
function Ue(r, e = D) {
  let t;
  const i = /* @__PURE__ */ new Set();
  function n(s) {
    if (it(r, s) && (r = s, t)) {
      const u = !ve.length;
      for (const l of i)
        l[1](), ve.push(l, r);
      if (u) {
        for (let l = 0; l < ve.length; l += 2)
          ve[l][0](ve[l + 1]);
        ve.length = 0;
      }
    }
  }
  function a(s) {
    n(s(r));
  }
  function o(s, u = D) {
    const l = [s, u];
    return i.add(l), i.size === 1 && (t = e(n) || D), s(r), () => {
      i.delete(l), i.size === 0 && (t(), t = null);
    };
  }
  return { set: n, update: a, subscribe: o };
}
function K(r) {
  return K = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, K(r);
}
function V(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Pn(r, e) {
  if (K(r) != "object" || !r)
    return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var i = t.call(r, e || "default");
    if (K(i) != "object")
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(r);
}
function qt(r) {
  var e = Pn(r, "string");
  return K(e) == "symbol" ? e : String(e);
}
function dt(r, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, qt(i.key), i);
  }
}
function J(r, e, t) {
  return e && dt(r.prototype, e), t && dt(r, t), Object.defineProperty(r, "prototype", {
    writable: !1
  }), r;
}
function se(r) {
  if (r === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r;
}
function Ye(r, e) {
  return Ye = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(i, n) {
    return i.__proto__ = n, i;
  }, Ye(r, e);
}
function qe(r, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  r.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: r,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(r, "prototype", {
    writable: !1
  }), e && Ye(r, e);
}
function Ne(r, e) {
  if (e && (K(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return se(r);
}
function Z(r) {
  return Z = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Z(r);
}
function fe(r, e, t) {
  return e = qt(e), e in r ? Object.defineProperty(r, e, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : r[e] = t, r;
}
function _n(r) {
  if (Array.isArray(r))
    return r;
}
function Ln(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null)
    return Array.from(r);
}
function ht(r, e) {
  (e == null || e > r.length) && (e = r.length);
  for (var t = 0, i = new Array(e); t < e; t++)
    i[t] = r[t];
  return i;
}
function Rn(r, e) {
  if (r) {
    if (typeof r == "string")
      return ht(r, e);
    var t = Object.prototype.toString.call(r).slice(8, -1);
    if (t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set")
      return Array.from(r);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return ht(r, e);
  }
}
function En() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function jn(r) {
  return _n(r) || Ln(r) || Rn(r) || En();
}
function gt(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(r);
    e && (i = i.filter(function(n) {
      return Object.getOwnPropertyDescriptor(r, n).enumerable;
    })), t.push.apply(t, i);
  }
  return t;
}
function pt(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? gt(Object(t), !0).forEach(function(i) {
      fe(r, i, t[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : gt(Object(t)).forEach(function(i) {
      Object.defineProperty(r, i, Object.getOwnPropertyDescriptor(t, i));
    });
  }
  return r;
}
var Cn = {
  type: "logger",
  log: function(e) {
    this.output("log", e);
  },
  warn: function(e) {
    this.output("warn", e);
  },
  error: function(e) {
    this.output("error", e);
  },
  output: function(e, t) {
    console && console[e] && console[e].apply(console, t);
  }
}, An = function() {
  function r(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    V(this, r), this.init(e, t);
  }
  return J(r, [{
    key: "init",
    value: function(t) {
      var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      this.prefix = i.prefix || "i18next:", this.logger = t || Cn, this.options = i, this.debug = i.debug;
    }
  }, {
    key: "setDebug",
    value: function(t) {
      this.debug = t;
    }
  }, {
    key: "log",
    value: function() {
      for (var t = arguments.length, i = new Array(t), n = 0; n < t; n++)
        i[n] = arguments[n];
      return this.forward(i, "log", "", !0);
    }
  }, {
    key: "warn",
    value: function() {
      for (var t = arguments.length, i = new Array(t), n = 0; n < t; n++)
        i[n] = arguments[n];
      return this.forward(i, "warn", "", !0);
    }
  }, {
    key: "error",
    value: function() {
      for (var t = arguments.length, i = new Array(t), n = 0; n < t; n++)
        i[n] = arguments[n];
      return this.forward(i, "error", "");
    }
  }, {
    key: "deprecate",
    value: function() {
      for (var t = arguments.length, i = new Array(t), n = 0; n < t; n++)
        i[n] = arguments[n];
      return this.forward(i, "warn", "WARNING DEPRECATED: ", !0);
    }
  }, {
    key: "forward",
    value: function(t, i, n, a) {
      return a && !this.debug ? null : (typeof t[0] == "string" && (t[0] = "".concat(n).concat(this.prefix, " ").concat(t[0])), this.logger[i](t));
    }
  }, {
    key: "create",
    value: function(t) {
      return new r(this.logger, pt(pt({}, {
        prefix: "".concat(this.prefix, ":").concat(t, ":")
      }), this.options));
    }
  }, {
    key: "clone",
    value: function(t) {
      return t = t || this.options, t.prefix = t.prefix || this.prefix, new r(this.logger, t);
    }
  }]), r;
}(), Q = new An(), ue = function() {
  function r() {
    V(this, r), this.observers = {};
  }
  return J(r, [{
    key: "on",
    value: function(t, i) {
      var n = this;
      return t.split(" ").forEach(function(a) {
        n.observers[a] = n.observers[a] || [], n.observers[a].push(i);
      }), this;
    }
  }, {
    key: "off",
    value: function(t, i) {
      if (this.observers[t]) {
        if (!i) {
          delete this.observers[t];
          return;
        }
        this.observers[t] = this.observers[t].filter(function(n) {
          return n !== i;
        });
      }
    }
  }, {
    key: "emit",
    value: function(t) {
      for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++)
        n[a - 1] = arguments[a];
      if (this.observers[t]) {
        var o = [].concat(this.observers[t]);
        o.forEach(function(u) {
          u.apply(void 0, n);
        });
      }
      if (this.observers["*"]) {
        var s = [].concat(this.observers["*"]);
        s.forEach(function(u) {
          u.apply(u, [t].concat(n));
        });
      }
    }
  }]), r;
}();
function ke() {
  var r, e, t = new Promise(function(i, n) {
    r = i, e = n;
  });
  return t.resolve = r, t.reject = e, t;
}
function mt(r) {
  return r == null ? "" : "" + r;
}
function Nn(r, e, t) {
  r.forEach(function(i) {
    e[i] && (t[i] = e[i]);
  });
}
function ot(r, e, t) {
  function i(s) {
    return s && s.indexOf("###") > -1 ? s.replace(/###/g, ".") : s;
  }
  function n() {
    return !r || typeof r == "string";
  }
  for (var a = typeof e != "string" ? [].concat(e) : e.split("."); a.length > 1; ) {
    if (n())
      return {};
    var o = i(a.shift());
    !r[o] && t && (r[o] = new t()), Object.prototype.hasOwnProperty.call(r, o) ? r = r[o] : r = {};
  }
  return n() ? {} : {
    obj: r,
    k: i(a.shift())
  };
}
function vt(r, e, t) {
  var i = ot(r, e, Object), n = i.obj, a = i.k;
  n[a] = t;
}
function Tn(r, e, t, i) {
  var n = ot(r, e, Object), a = n.obj, o = n.k;
  a[o] = a[o] || [], i && (a[o] = a[o].concat(t)), i || a[o].push(t);
}
function Be(r, e) {
  var t = ot(r, e), i = t.obj, n = t.k;
  if (i)
    return i[n];
}
function yt(r, e, t) {
  var i = Be(r, t);
  return i !== void 0 ? i : Be(e, t);
}
function Kt(r, e, t) {
  for (var i in e)
    i !== "__proto__" && i !== "constructor" && (i in r ? typeof r[i] == "string" || r[i] instanceof String || typeof e[i] == "string" || e[i] instanceof String ? t && (r[i] = e[i]) : Kt(r[i], e[i], t) : r[i] = e[i]);
  return r;
}
function ye(r) {
  return r.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
var In = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
function Dn(r) {
  return typeof r == "string" ? r.replace(/[&<>"'\/]/g, function(e) {
    return In[e];
  }) : r;
}
var Ke = typeof window < "u" && window.navigator && typeof window.navigator.userAgentData > "u" && window.navigator.userAgent && window.navigator.userAgent.indexOf("MSIE") > -1, Fn = [" ", ",", "?", "!", ";"];
function $n(r, e, t) {
  e = e || "", t = t || "";
  var i = Fn.filter(function(s) {
    return e.indexOf(s) < 0 && t.indexOf(s) < 0;
  });
  if (i.length === 0)
    return !0;
  var n = new RegExp("(".concat(i.map(function(s) {
    return s === "?" ? "\\?" : s;
  }).join("|"), ")")), a = !n.test(r);
  if (!a) {
    var o = r.indexOf(t);
    o > 0 && !n.test(r.substring(0, o)) && (a = !0);
  }
  return a;
}
function bt(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(r);
    e && (i = i.filter(function(n) {
      return Object.getOwnPropertyDescriptor(r, n).enumerable;
    })), t.push.apply(t, i);
  }
  return t;
}
function Te(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? bt(Object(t), !0).forEach(function(i) {
      fe(r, i, t[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : bt(Object(t)).forEach(function(i) {
      Object.defineProperty(r, i, Object.getOwnPropertyDescriptor(t, i));
    });
  }
  return r;
}
function Un(r) {
  var e = Bn();
  return function() {
    var i = Z(r), n;
    if (e) {
      var a = Z(this).constructor;
      n = Reflect.construct(i, arguments, a);
    } else
      n = i.apply(this, arguments);
    return Ne(this, n);
  };
}
function Bn() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Vt(r, e) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (r) {
    if (r[e])
      return r[e];
    for (var i = e.split(t), n = r, a = 0; a < i.length; ++a) {
      if (!n || typeof n[i[a]] == "string" && a + 1 < i.length)
        return;
      if (n[i[a]] === void 0) {
        for (var o = 2, s = i.slice(a, a + o).join(t), u = n[s]; u === void 0 && i.length > a + o; )
          o++, s = i.slice(a, a + o).join(t), u = n[s];
        if (u === void 0)
          return;
        if (u === null)
          return null;
        if (e.endsWith(s)) {
          if (typeof u == "string")
            return u;
          if (s && typeof u[s] == "string")
            return u[s];
        }
        var l = i.slice(a + o).join(t);
        return l ? Vt(u, l, t) : void 0;
      }
      n = n[i[a]];
    }
    return n;
  }
}
var Mn = function(r) {
  qe(t, r);
  var e = Un(t);
  function t(i) {
    var n, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      ns: ["translation"],
      defaultNS: "translation"
    };
    return V(this, t), n = e.call(this), Ke && ue.call(se(n)), n.data = i || {}, n.options = a, n.options.keySeparator === void 0 && (n.options.keySeparator = "."), n.options.ignoreJSONStructure === void 0 && (n.options.ignoreJSONStructure = !0), n;
  }
  return J(t, [{
    key: "addNamespaces",
    value: function(n) {
      this.options.ns.indexOf(n) < 0 && this.options.ns.push(n);
    }
  }, {
    key: "removeNamespaces",
    value: function(n) {
      var a = this.options.ns.indexOf(n);
      a > -1 && this.options.ns.splice(a, 1);
    }
  }, {
    key: "getResource",
    value: function(n, a, o) {
      var s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, u = s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator, l = s.ignoreJSONStructure !== void 0 ? s.ignoreJSONStructure : this.options.ignoreJSONStructure, d = [n, a];
      o && typeof o != "string" && (d = d.concat(o)), o && typeof o == "string" && (d = d.concat(u ? o.split(u) : o)), n.indexOf(".") > -1 && (d = n.split("."));
      var f = Be(this.data, d);
      return f || !l || typeof o != "string" ? f : Vt(this.data && this.data[n] && this.data[n][a], o, u);
    }
  }, {
    key: "addResource",
    value: function(n, a, o, s) {
      var u = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
        silent: !1
      }, l = this.options.keySeparator;
      l === void 0 && (l = ".");
      var d = [n, a];
      o && (d = d.concat(l ? o.split(l) : o)), n.indexOf(".") > -1 && (d = n.split("."), s = a, a = d[1]), this.addNamespaces(a), vt(this.data, d, s), u.silent || this.emit("added", n, a, o, s);
    }
  }, {
    key: "addResources",
    value: function(n, a, o) {
      var s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
        silent: !1
      };
      for (var u in o)
        (typeof o[u] == "string" || Object.prototype.toString.apply(o[u]) === "[object Array]") && this.addResource(n, a, u, o[u], {
          silent: !0
        });
      s.silent || this.emit("added", n, a, o);
    }
  }, {
    key: "addResourceBundle",
    value: function(n, a, o, s, u) {
      var l = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
        silent: !1
      }, d = [n, a];
      n.indexOf(".") > -1 && (d = n.split("."), s = o, o = a, a = d[1]), this.addNamespaces(a);
      var f = Be(this.data, d) || {};
      s ? Kt(f, o, u) : f = Te(Te({}, f), o), vt(this.data, d, f), l.silent || this.emit("added", n, a, o);
    }
  }, {
    key: "removeResourceBundle",
    value: function(n, a) {
      this.hasResourceBundle(n, a) && delete this.data[n][a], this.removeNamespaces(a), this.emit("removed", n, a);
    }
  }, {
    key: "hasResourceBundle",
    value: function(n, a) {
      return this.getResource(n, a) !== void 0;
    }
  }, {
    key: "getResourceBundle",
    value: function(n, a) {
      return a || (a = this.options.defaultNS), this.options.compatibilityAPI === "v1" ? Te(Te({}, {}), this.getResource(n, a)) : this.getResource(n, a);
    }
  }, {
    key: "getDataByLanguage",
    value: function(n) {
      return this.data[n];
    }
  }, {
    key: "hasLanguageSomeTranslations",
    value: function(n) {
      var a = this.getDataByLanguage(n), o = a && Object.keys(a) || [];
      return !!o.find(function(s) {
        return a[s] && Object.keys(a[s]).length > 0;
      });
    }
  }, {
    key: "toJSON",
    value: function() {
      return this.data;
    }
  }]), t;
}(ue), Jt = {
  processors: {},
  addPostProcessor: function(e) {
    this.processors[e.name] = e;
  },
  handle: function(e, t, i, n, a) {
    var o = this;
    return e.forEach(function(s) {
      o.processors[s] && (t = o.processors[s].process(t, i, n, a));
    }), t;
  }
};
function wt(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(r);
    e && (i = i.filter(function(n) {
      return Object.getOwnPropertyDescriptor(r, n).enumerable;
    })), t.push.apply(t, i);
  }
  return t;
}
function U(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? wt(Object(t), !0).forEach(function(i) {
      fe(r, i, t[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : wt(Object(t)).forEach(function(i) {
      Object.defineProperty(r, i, Object.getOwnPropertyDescriptor(t, i));
    });
  }
  return r;
}
function Hn(r) {
  var e = zn();
  return function() {
    var i = Z(r), n;
    if (e) {
      var a = Z(this).constructor;
      n = Reflect.construct(i, arguments, a);
    } else
      n = i.apply(this, arguments);
    return Ne(this, n);
  };
}
function zn() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
var Ot = {}, St = function(r) {
  qe(t, r);
  var e = Hn(t);
  function t(i) {
    var n, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return V(this, t), n = e.call(this), Ke && ue.call(se(n)), Nn(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], i, se(n)), n.options = a, n.options.keySeparator === void 0 && (n.options.keySeparator = "."), n.logger = Q.create("translator"), n;
  }
  return J(t, [{
    key: "changeLanguage",
    value: function(n) {
      n && (this.language = n);
    }
  }, {
    key: "exists",
    value: function(n) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        interpolation: {}
      };
      if (n == null)
        return !1;
      var o = this.resolve(n, a);
      return o && o.res !== void 0;
    }
  }, {
    key: "extractFromKey",
    value: function(n, a) {
      var o = a.nsSeparator !== void 0 ? a.nsSeparator : this.options.nsSeparator;
      o === void 0 && (o = ":");
      var s = a.keySeparator !== void 0 ? a.keySeparator : this.options.keySeparator, u = a.ns || this.options.defaultNS || [], l = o && n.indexOf(o) > -1, d = !this.options.userDefinedKeySeparator && !a.keySeparator && !this.options.userDefinedNsSeparator && !a.nsSeparator && !$n(n, o, s);
      if (l && !d) {
        var f = n.match(this.interpolator.nestingRegexp);
        if (f && f.length > 0)
          return {
            key: n,
            namespaces: u
          };
        var g = n.split(o);
        (o !== s || o === s && this.options.ns.indexOf(g[0]) > -1) && (u = g.shift()), n = g.join(s);
      }
      return typeof u == "string" && (u = [u]), {
        key: n,
        namespaces: u
      };
    }
  }, {
    key: "translate",
    value: function(n, a, o) {
      var s = this;
      if (K(a) !== "object" && this.options.overloadTranslationOptionHandler && (a = this.options.overloadTranslationOptionHandler(arguments)), a || (a = {}), n == null)
        return "";
      Array.isArray(n) || (n = [String(n)]);
      var u = a.returnDetails !== void 0 ? a.returnDetails : this.options.returnDetails, l = a.keySeparator !== void 0 ? a.keySeparator : this.options.keySeparator, d = this.extractFromKey(n[n.length - 1], a), f = d.key, g = d.namespaces, h = g[g.length - 1], m = a.lng || this.language, w = a.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
      if (m && m.toLowerCase() === "cimode") {
        if (w) {
          var b = a.nsSeparator || this.options.nsSeparator;
          return u ? (y.res = "".concat(h).concat(b).concat(f), y) : "".concat(h).concat(b).concat(f);
        }
        return u ? (y.res = f, y) : f;
      }
      var y = this.resolve(n, a), v = y && y.res, _ = y && y.usedKey || f, k = y && y.exactUsedKey || f, j = Object.prototype.toString.apply(v), F = ["[object Number]", "[object Function]", "[object RegExp]"], B = a.joinArrays !== void 0 ? a.joinArrays : this.options.joinArrays, I = !this.i18nFormat || this.i18nFormat.handleAsObject, H = typeof v != "string" && typeof v != "boolean" && typeof v != "number";
      if (I && v && H && F.indexOf(j) < 0 && !(typeof B == "string" && j === "[object Array]")) {
        if (!a.returnObjects && !this.options.returnObjects) {
          this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
          var M = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(_, v, U(U({}, a), {}, {
            ns: g
          })) : "key '".concat(f, " (").concat(this.language, ")' returned an object instead of string.");
          return u ? (y.res = M, y) : M;
        }
        if (l) {
          var A = j === "[object Array]", X = A ? [] : {}, G = A ? k : _;
          for (var c in v)
            if (Object.prototype.hasOwnProperty.call(v, c)) {
              var p = "".concat(G).concat(l).concat(c);
              X[c] = this.translate(p, U(U({}, a), {
                joinArrays: !1,
                ns: g
              })), X[c] === p && (X[c] = v[c]);
            }
          v = X;
        }
      } else if (I && typeof B == "string" && j === "[object Array]")
        v = v.join(B), v && (v = this.extendTranslation(v, n, a, o));
      else {
        var S = !1, L = !1, R = a.count !== void 0 && typeof a.count != "string", x = t.hasDefaultValue(a), Y = R ? this.pluralResolver.getSuffix(m, a.count, a) : "", $ = a["defaultValue".concat(Y)] || a.defaultValue;
        !this.isValidLookup(v) && x && (S = !0, v = $), this.isValidLookup(v) || (L = !0, v = f);
        var z = a.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey, ge = z && L ? void 0 : v, ee = x && $ !== v && this.options.updateMissing;
        if (L || S || ee) {
          if (this.logger.log(ee ? "updateKey" : "missingKey", m, h, f, ee ? $ : v), l) {
            var le = this.resolve(f, U(U({}, a), {}, {
              keySeparator: !1
            }));
            le && le.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
          }
          var ie = [], te = this.languageUtils.getFallbackCodes(this.options.fallbackLng, a.lng || this.language);
          if (this.options.saveMissingTo === "fallback" && te && te[0])
            for (var ce = 0; ce < te.length; ce++)
              ie.push(te[ce]);
          else
            this.options.saveMissingTo === "all" ? ie = this.languageUtils.toResolveHierarchy(a.lng || this.language) : ie.push(a.lng || this.language);
          var Se = function(C, Ve, st) {
            var ut = x && st !== v ? st : ge;
            s.options.missingKeyHandler ? s.options.missingKeyHandler(C, h, Ve, ut, ee, a) : s.backendConnector && s.backendConnector.saveMissing && s.backendConnector.saveMissing(C, h, Ve, ut, ee, a), s.emit("missingKey", C, h, Ve, v);
          };
          this.options.saveMissing && (this.options.saveMissingPlurals && R ? ie.forEach(function(E) {
            s.pluralResolver.getSuffixes(E, a).forEach(function(C) {
              Se([E], f + C, a["defaultValue".concat(C)] || $);
            });
          }) : Se(ie, f, $));
        }
        v = this.extendTranslation(v, n, a, y, o), L && v === f && this.options.appendNamespaceToMissingKey && (v = "".concat(h, ":").concat(f)), (L || S) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? v = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? "".concat(h, ":").concat(f) : f, S ? v : void 0) : v = this.options.parseMissingKeyHandler(v));
      }
      return u ? (y.res = v, y) : v;
    }
  }, {
    key: "extendTranslation",
    value: function(n, a, o, s, u) {
      var l = this;
      if (this.i18nFormat && this.i18nFormat.parse)
        n = this.i18nFormat.parse(n, U(U({}, this.options.interpolation.defaultVariables), o), s.usedLng, s.usedNS, s.usedKey, {
          resolved: s
        });
      else if (!o.skipInterpolation) {
        o.interpolation && this.interpolator.init(U(U({}, o), {
          interpolation: U(U({}, this.options.interpolation), o.interpolation)
        }));
        var d = typeof n == "string" && (o && o.interpolation && o.interpolation.skipOnVariables !== void 0 ? o.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables), f;
        if (d) {
          var g = n.match(this.interpolator.nestingRegexp);
          f = g && g.length;
        }
        var h = o.replace && typeof o.replace != "string" ? o.replace : o;
        if (this.options.interpolation.defaultVariables && (h = U(U({}, this.options.interpolation.defaultVariables), h)), n = this.interpolator.interpolate(n, h, o.lng || this.language, o), d) {
          var m = n.match(this.interpolator.nestingRegexp), w = m && m.length;
          f < w && (o.nest = !1);
        }
        o.nest !== !1 && (n = this.interpolator.nest(n, function() {
          for (var v = arguments.length, _ = new Array(v), k = 0; k < v; k++)
            _[k] = arguments[k];
          return u && u[0] === _[0] && !o.context ? (l.logger.warn("It seems you are nesting recursively key: ".concat(_[0], " in key: ").concat(a[0])), null) : l.translate.apply(l, _.concat([a]));
        }, o)), o.interpolation && this.interpolator.reset();
      }
      var b = o.postProcess || this.options.postProcess, y = typeof b == "string" ? [b] : b;
      return n != null && y && y.length && o.applyPostProcessor !== !1 && (n = Jt.handle(y, n, a, this.options && this.options.postProcessPassResolved ? U({
        i18nResolved: s
      }, o) : o, this)), n;
    }
  }, {
    key: "resolve",
    value: function(n) {
      var a = this, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s, u, l, d, f;
      return typeof n == "string" && (n = [n]), n.forEach(function(g) {
        if (!a.isValidLookup(s)) {
          var h = a.extractFromKey(g, o), m = h.key;
          u = m;
          var w = h.namespaces;
          a.options.fallbackNS && (w = w.concat(a.options.fallbackNS));
          var b = o.count !== void 0 && typeof o.count != "string", y = b && !o.ordinal && o.count === 0 && a.pluralResolver.shouldUseIntlApi(), v = o.context !== void 0 && (typeof o.context == "string" || typeof o.context == "number") && o.context !== "", _ = o.lngs ? o.lngs : a.languageUtils.toResolveHierarchy(o.lng || a.language, o.fallbackLng);
          w.forEach(function(k) {
            a.isValidLookup(s) || (f = k, !Ot["".concat(_[0], "-").concat(k)] && a.utils && a.utils.hasLoadedNamespace && !a.utils.hasLoadedNamespace(f) && (Ot["".concat(_[0], "-").concat(k)] = !0, a.logger.warn('key "'.concat(u, '" for languages "').concat(_.join(", "), `" won't get resolved as namespace "`).concat(f, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), _.forEach(function(j) {
              if (!a.isValidLookup(s)) {
                d = j;
                var F = [m];
                if (a.i18nFormat && a.i18nFormat.addLookupKeys)
                  a.i18nFormat.addLookupKeys(F, m, j, k, o);
                else {
                  var B;
                  b && (B = a.pluralResolver.getSuffix(j, o.count, o));
                  var I = "".concat(a.options.pluralSeparator, "zero");
                  if (b && (F.push(m + B), y && F.push(m + I)), v) {
                    var H = "".concat(m).concat(a.options.contextSeparator).concat(o.context);
                    F.push(H), b && (F.push(H + B), y && F.push(H + I));
                  }
                }
                for (var M; M = F.pop(); )
                  a.isValidLookup(s) || (l = M, s = a.getResource(j, k, M, o));
              }
            }));
          });
        }
      }), {
        res: s,
        usedKey: u,
        exactUsedKey: l,
        usedLng: d,
        usedNS: f
      };
    }
  }, {
    key: "isValidLookup",
    value: function(n) {
      return n !== void 0 && !(!this.options.returnNull && n === null) && !(!this.options.returnEmptyString && n === "");
    }
  }, {
    key: "getResource",
    value: function(n, a, o) {
      var s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
      return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(n, a, o, s) : this.resourceStore.getResource(n, a, o, s);
    }
  }], [{
    key: "hasDefaultValue",
    value: function(n) {
      var a = "defaultValue";
      for (var o in n)
        if (Object.prototype.hasOwnProperty.call(n, o) && a === o.substring(0, a.length) && n[o] !== void 0)
          return !0;
      return !1;
    }
  }]), t;
}(ue);
function Xe(r) {
  return r.charAt(0).toUpperCase() + r.slice(1);
}
var qn = function() {
  function r(e) {
    V(this, r), this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = Q.create("languageUtils");
  }
  return J(r, [{
    key: "getScriptPartFromCode",
    value: function(t) {
      if (!t || t.indexOf("-") < 0)
        return null;
      var i = t.split("-");
      return i.length === 2 || (i.pop(), i[i.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(i.join("-"));
    }
  }, {
    key: "getLanguagePartFromCode",
    value: function(t) {
      if (!t || t.indexOf("-") < 0)
        return t;
      var i = t.split("-");
      return this.formatLanguageCode(i[0]);
    }
  }, {
    key: "formatLanguageCode",
    value: function(t) {
      if (typeof t == "string" && t.indexOf("-") > -1) {
        var i = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"], n = t.split("-");
        return this.options.lowerCaseLng ? n = n.map(function(a) {
          return a.toLowerCase();
        }) : n.length === 2 ? (n[0] = n[0].toLowerCase(), n[1] = n[1].toUpperCase(), i.indexOf(n[1].toLowerCase()) > -1 && (n[1] = Xe(n[1].toLowerCase()))) : n.length === 3 && (n[0] = n[0].toLowerCase(), n[1].length === 2 && (n[1] = n[1].toUpperCase()), n[0] !== "sgn" && n[2].length === 2 && (n[2] = n[2].toUpperCase()), i.indexOf(n[1].toLowerCase()) > -1 && (n[1] = Xe(n[1].toLowerCase())), i.indexOf(n[2].toLowerCase()) > -1 && (n[2] = Xe(n[2].toLowerCase()))), n.join("-");
      }
      return this.options.cleanCode || this.options.lowerCaseLng ? t.toLowerCase() : t;
    }
  }, {
    key: "isSupportedCode",
    value: function(t) {
      return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (t = this.getLanguagePartFromCode(t)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(t) > -1;
    }
  }, {
    key: "getBestMatchFromCodes",
    value: function(t) {
      var i = this;
      if (!t)
        return null;
      var n;
      return t.forEach(function(a) {
        if (!n) {
          var o = i.formatLanguageCode(a);
          (!i.options.supportedLngs || i.isSupportedCode(o)) && (n = o);
        }
      }), !n && this.options.supportedLngs && t.forEach(function(a) {
        if (!n) {
          var o = i.getLanguagePartFromCode(a);
          if (i.isSupportedCode(o))
            return n = o;
          n = i.options.supportedLngs.find(function(s) {
            if (s.indexOf(o) === 0)
              return s;
          });
        }
      }), n || (n = this.getFallbackCodes(this.options.fallbackLng)[0]), n;
    }
  }, {
    key: "getFallbackCodes",
    value: function(t, i) {
      if (!t)
        return [];
      if (typeof t == "function" && (t = t(i)), typeof t == "string" && (t = [t]), Object.prototype.toString.apply(t) === "[object Array]")
        return t;
      if (!i)
        return t.default || [];
      var n = t[i];
      return n || (n = t[this.getScriptPartFromCode(i)]), n || (n = t[this.formatLanguageCode(i)]), n || (n = t[this.getLanguagePartFromCode(i)]), n || (n = t.default), n || [];
    }
  }, {
    key: "toResolveHierarchy",
    value: function(t, i) {
      var n = this, a = this.getFallbackCodes(i || this.options.fallbackLng || [], t), o = [], s = function(l) {
        l && (n.isSupportedCode(l) ? o.push(l) : n.logger.warn("rejecting language code not found in supportedLngs: ".concat(l)));
      };
      return typeof t == "string" && t.indexOf("-") > -1 ? (this.options.load !== "languageOnly" && s(this.formatLanguageCode(t)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && s(this.getScriptPartFromCode(t)), this.options.load !== "currentOnly" && s(this.getLanguagePartFromCode(t))) : typeof t == "string" && s(this.formatLanguageCode(t)), a.forEach(function(u) {
        o.indexOf(u) < 0 && s(n.formatLanguageCode(u));
      }), o;
    }
  }]), r;
}(), Kn = [{
  lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
  nr: [1, 2],
  fc: 1
}, {
  lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
  nr: [1, 2],
  fc: 2
}, {
  lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
  nr: [1],
  fc: 3
}, {
  lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
  nr: [1, 2, 5],
  fc: 4
}, {
  lngs: ["ar"],
  nr: [0, 1, 2, 3, 11, 100],
  fc: 5
}, {
  lngs: ["cs", "sk"],
  nr: [1, 2, 5],
  fc: 6
}, {
  lngs: ["csb", "pl"],
  nr: [1, 2, 5],
  fc: 7
}, {
  lngs: ["cy"],
  nr: [1, 2, 3, 8],
  fc: 8
}, {
  lngs: ["fr"],
  nr: [1, 2],
  fc: 9
}, {
  lngs: ["ga"],
  nr: [1, 2, 3, 7, 11],
  fc: 10
}, {
  lngs: ["gd"],
  nr: [1, 2, 3, 20],
  fc: 11
}, {
  lngs: ["is"],
  nr: [1, 2],
  fc: 12
}, {
  lngs: ["jv"],
  nr: [0, 1],
  fc: 13
}, {
  lngs: ["kw"],
  nr: [1, 2, 3, 4],
  fc: 14
}, {
  lngs: ["lt"],
  nr: [1, 2, 10],
  fc: 15
}, {
  lngs: ["lv"],
  nr: [1, 2, 0],
  fc: 16
}, {
  lngs: ["mk"],
  nr: [1, 2],
  fc: 17
}, {
  lngs: ["mnk"],
  nr: [0, 1, 2],
  fc: 18
}, {
  lngs: ["mt"],
  nr: [1, 2, 11, 20],
  fc: 19
}, {
  lngs: ["or"],
  nr: [2, 1],
  fc: 2
}, {
  lngs: ["ro"],
  nr: [1, 2, 20],
  fc: 20
}, {
  lngs: ["sl"],
  nr: [5, 1, 2, 3],
  fc: 21
}, {
  lngs: ["he", "iw"],
  nr: [1, 2, 20, 21],
  fc: 22
}], Vn = {
  1: function(e) {
    return Number(e > 1);
  },
  2: function(e) {
    return Number(e != 1);
  },
  3: function(e) {
    return 0;
  },
  4: function(e) {
    return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2);
  },
  5: function(e) {
    return Number(e == 0 ? 0 : e == 1 ? 1 : e == 2 ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5);
  },
  6: function(e) {
    return Number(e == 1 ? 0 : e >= 2 && e <= 4 ? 1 : 2);
  },
  7: function(e) {
    return Number(e == 1 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2);
  },
  8: function(e) {
    return Number(e == 1 ? 0 : e == 2 ? 1 : e != 8 && e != 11 ? 2 : 3);
  },
  9: function(e) {
    return Number(e >= 2);
  },
  10: function(e) {
    return Number(e == 1 ? 0 : e == 2 ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4);
  },
  11: function(e) {
    return Number(e == 1 || e == 11 ? 0 : e == 2 || e == 12 ? 1 : e > 2 && e < 20 ? 2 : 3);
  },
  12: function(e) {
    return Number(e % 10 != 1 || e % 100 == 11);
  },
  13: function(e) {
    return Number(e !== 0);
  },
  14: function(e) {
    return Number(e == 1 ? 0 : e == 2 ? 1 : e == 3 ? 2 : 3);
  },
  15: function(e) {
    return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2);
  },
  16: function(e) {
    return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e !== 0 ? 1 : 2);
  },
  17: function(e) {
    return Number(e == 1 || e % 10 == 1 && e % 100 != 11 ? 0 : 1);
  },
  18: function(e) {
    return Number(e == 0 ? 0 : e == 1 ? 1 : 2);
  },
  19: function(e) {
    return Number(e == 1 ? 0 : e == 0 || e % 100 > 1 && e % 100 < 11 ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3);
  },
  20: function(e) {
    return Number(e == 1 ? 0 : e == 0 || e % 100 > 0 && e % 100 < 20 ? 1 : 2);
  },
  21: function(e) {
    return Number(e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0);
  },
  22: function(e) {
    return Number(e == 1 ? 0 : e == 2 ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3);
  }
}, Jn = ["v1", "v2", "v3"], kt = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
function Xn() {
  var r = {};
  return Kn.forEach(function(e) {
    e.lngs.forEach(function(t) {
      r[t] = {
        numbers: e.nr,
        plurals: Vn[e.fc]
      };
    });
  }), r;
}
var Gn = function() {
  function r(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    V(this, r), this.languageUtils = e, this.options = t, this.logger = Q.create("pluralResolver"), (!this.options.compatibilityJSON || this.options.compatibilityJSON === "v4") && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = Xn();
  }
  return J(r, [{
    key: "addRule",
    value: function(t, i) {
      this.rules[t] = i;
    }
  }, {
    key: "getRule",
    value: function(t) {
      var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (this.shouldUseIntlApi())
        try {
          return new Intl.PluralRules(t, {
            type: i.ordinal ? "ordinal" : "cardinal"
          });
        } catch {
          return;
        }
      return this.rules[t] || this.rules[this.languageUtils.getLanguagePartFromCode(t)];
    }
  }, {
    key: "needsPlural",
    value: function(t) {
      var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = this.getRule(t, i);
      return this.shouldUseIntlApi() ? n && n.resolvedOptions().pluralCategories.length > 1 : n && n.numbers.length > 1;
    }
  }, {
    key: "getPluralFormsOfKey",
    value: function(t, i) {
      var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return this.getSuffixes(t, n).map(function(a) {
        return "".concat(i).concat(a);
      });
    }
  }, {
    key: "getSuffixes",
    value: function(t) {
      var i = this, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = this.getRule(t, n);
      return a ? this.shouldUseIntlApi() ? a.resolvedOptions().pluralCategories.sort(function(o, s) {
        return kt[o] - kt[s];
      }).map(function(o) {
        return "".concat(i.options.prepend).concat(o);
      }) : a.numbers.map(function(o) {
        return i.getSuffix(t, o, n);
      }) : [];
    }
  }, {
    key: "getSuffix",
    value: function(t, i) {
      var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = this.getRule(t, n);
      return a ? this.shouldUseIntlApi() ? "".concat(this.options.prepend).concat(a.select(i)) : this.getSuffixRetroCompatible(a, i) : (this.logger.warn("no plural rule found for: ".concat(t)), "");
    }
  }, {
    key: "getSuffixRetroCompatible",
    value: function(t, i) {
      var n = this, a = t.noAbs ? t.plurals(i) : t.plurals(Math.abs(i)), o = t.numbers[a];
      this.options.simplifyPluralSuffix && t.numbers.length === 2 && t.numbers[0] === 1 && (o === 2 ? o = "plural" : o === 1 && (o = ""));
      var s = function() {
        return n.options.prepend && o.toString() ? n.options.prepend + o.toString() : o.toString();
      };
      return this.options.compatibilityJSON === "v1" ? o === 1 ? "" : typeof o == "number" ? "_plural_".concat(o.toString()) : s() : this.options.compatibilityJSON === "v2" || this.options.simplifyPluralSuffix && t.numbers.length === 2 && t.numbers[0] === 1 ? s() : this.options.prepend && a.toString() ? this.options.prepend + a.toString() : a.toString();
    }
  }, {
    key: "shouldUseIntlApi",
    value: function() {
      return !Jn.includes(this.options.compatibilityJSON);
    }
  }]), r;
}();
function xt(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(r);
    e && (i = i.filter(function(n) {
      return Object.getOwnPropertyDescriptor(r, n).enumerable;
    })), t.push.apply(t, i);
  }
  return t;
}
function q(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? xt(Object(t), !0).forEach(function(i) {
      fe(r, i, t[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : xt(Object(t)).forEach(function(i) {
      Object.defineProperty(r, i, Object.getOwnPropertyDescriptor(t, i));
    });
  }
  return r;
}
var Wn = function() {
  function r() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    V(this, r), this.logger = Q.create("interpolator"), this.options = e, this.format = e.interpolation && e.interpolation.format || function(t) {
      return t;
    }, this.init(e);
  }
  return J(r, [{
    key: "init",
    value: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      t.interpolation || (t.interpolation = {
        escapeValue: !0
      });
      var i = t.interpolation;
      this.escape = i.escape !== void 0 ? i.escape : Dn, this.escapeValue = i.escapeValue !== void 0 ? i.escapeValue : !0, this.useRawValueToEscape = i.useRawValueToEscape !== void 0 ? i.useRawValueToEscape : !1, this.prefix = i.prefix ? ye(i.prefix) : i.prefixEscaped || "{{", this.suffix = i.suffix ? ye(i.suffix) : i.suffixEscaped || "}}", this.formatSeparator = i.formatSeparator ? i.formatSeparator : i.formatSeparator || ",", this.unescapePrefix = i.unescapeSuffix ? "" : i.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : i.unescapeSuffix || "", this.nestingPrefix = i.nestingPrefix ? ye(i.nestingPrefix) : i.nestingPrefixEscaped || ye("$t("), this.nestingSuffix = i.nestingSuffix ? ye(i.nestingSuffix) : i.nestingSuffixEscaped || ye(")"), this.nestingOptionsSeparator = i.nestingOptionsSeparator ? i.nestingOptionsSeparator : i.nestingOptionsSeparator || ",", this.maxReplaces = i.maxReplaces ? i.maxReplaces : 1e3, this.alwaysFormat = i.alwaysFormat !== void 0 ? i.alwaysFormat : !1, this.resetRegExp();
    }
  }, {
    key: "reset",
    value: function() {
      this.options && this.init(this.options);
    }
  }, {
    key: "resetRegExp",
    value: function() {
      var t = "".concat(this.prefix, "(.+?)").concat(this.suffix);
      this.regexp = new RegExp(t, "g");
      var i = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix);
      this.regexpUnescape = new RegExp(i, "g");
      var n = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
      this.nestingRegexp = new RegExp(n, "g");
    }
  }, {
    key: "interpolate",
    value: function(t, i, n, a) {
      var o = this, s, u, l, d = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
      function f(b) {
        return b.replace(/\$/g, "$$$$");
      }
      var g = function(y) {
        if (y.indexOf(o.formatSeparator) < 0) {
          var v = yt(i, d, y);
          return o.alwaysFormat ? o.format(v, void 0, n, q(q(q({}, a), i), {}, {
            interpolationkey: y
          })) : v;
        }
        var _ = y.split(o.formatSeparator), k = _.shift().trim(), j = _.join(o.formatSeparator).trim();
        return o.format(yt(i, d, k), j, n, q(q(q({}, a), i), {}, {
          interpolationkey: k
        }));
      };
      this.resetRegExp();
      var h = a && a.missingInterpolationHandler || this.options.missingInterpolationHandler, m = a && a.interpolation && a.interpolation.skipOnVariables !== void 0 ? a.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables, w = [{
        regex: this.regexpUnescape,
        safeValue: function(y) {
          return f(y);
        }
      }, {
        regex: this.regexp,
        safeValue: function(y) {
          return o.escapeValue ? f(o.escape(y)) : f(y);
        }
      }];
      return w.forEach(function(b) {
        for (l = 0; s = b.regex.exec(t); ) {
          var y = s[1].trim();
          if (u = g(y), u === void 0)
            if (typeof h == "function") {
              var v = h(t, s, a);
              u = typeof v == "string" ? v : "";
            } else if (a && a.hasOwnProperty(y))
              u = "";
            else if (m) {
              u = s[0];
              continue;
            } else
              o.logger.warn("missed to pass in variable ".concat(y, " for interpolating ").concat(t)), u = "";
          else
            typeof u != "string" && !o.useRawValueToEscape && (u = mt(u));
          var _ = b.safeValue(u);
          if (t = t.replace(s[0], _), m ? (b.regex.lastIndex += u.length, b.regex.lastIndex -= s[0].length) : b.regex.lastIndex = 0, l++, l >= o.maxReplaces)
            break;
        }
      }), t;
    }
  }, {
    key: "nest",
    value: function(t, i) {
      var n = this, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o, s, u = q({}, a);
      u.applyPostProcessor = !1, delete u.defaultValue;
      function l(h, m) {
        var w = this.nestingOptionsSeparator;
        if (h.indexOf(w) < 0)
          return h;
        var b = h.split(new RegExp("".concat(w, "[ ]*{"))), y = "{".concat(b[1]);
        h = b[0], y = this.interpolate(y, u);
        var v = y.match(/'/g), _ = y.match(/"/g);
        (v && v.length % 2 === 0 && !_ || _.length % 2 !== 0) && (y = y.replace(/'/g, '"'));
        try {
          u = JSON.parse(y), m && (u = q(q({}, m), u));
        } catch (k) {
          return this.logger.warn("failed parsing options string in nesting for key ".concat(h), k), "".concat(h).concat(w).concat(y);
        }
        return delete u.defaultValue, h;
      }
      for (; o = this.nestingRegexp.exec(t); ) {
        var d = [], f = !1;
        if (o[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(o[1])) {
          var g = o[1].split(this.formatSeparator).map(function(h) {
            return h.trim();
          });
          o[1] = g.shift(), d = g, f = !0;
        }
        if (s = i(l.call(this, o[1].trim(), u), u), s && o[0] === t && typeof s != "string")
          return s;
        typeof s != "string" && (s = mt(s)), s || (this.logger.warn("missed to resolve ".concat(o[1], " for nesting ").concat(t)), s = ""), f && (s = d.reduce(function(h, m) {
          return n.format(h, m, a.lng, q(q({}, a), {}, {
            interpolationkey: o[1].trim()
          }));
        }, s.trim())), t = t.replace(o[0], s), this.regexp.lastIndex = 0;
      }
      return t;
    }
  }]), r;
}();
function Pt(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(r);
    e && (i = i.filter(function(n) {
      return Object.getOwnPropertyDescriptor(r, n).enumerable;
    })), t.push.apply(t, i);
  }
  return t;
}
function ae(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Pt(Object(t), !0).forEach(function(i) {
      fe(r, i, t[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : Pt(Object(t)).forEach(function(i) {
      Object.defineProperty(r, i, Object.getOwnPropertyDescriptor(t, i));
    });
  }
  return r;
}
function Qn(r) {
  var e = r.toLowerCase().trim(), t = {};
  if (r.indexOf("(") > -1) {
    var i = r.split("(");
    e = i[0].toLowerCase().trim();
    var n = i[1].substring(0, i[1].length - 1);
    if (e === "currency" && n.indexOf(":") < 0)
      t.currency || (t.currency = n.trim());
    else if (e === "relativetime" && n.indexOf(":") < 0)
      t.range || (t.range = n.trim());
    else {
      var a = n.split(";");
      a.forEach(function(o) {
        if (o) {
          var s = o.split(":"), u = jn(s), l = u[0], d = u.slice(1), f = d.join(":").trim().replace(/^'+|'+$/g, "");
          t[l.trim()] || (t[l.trim()] = f), f === "false" && (t[l.trim()] = !1), f === "true" && (t[l.trim()] = !0), isNaN(f) || (t[l.trim()] = parseInt(f, 10));
        }
      });
    }
  }
  return {
    formatName: e,
    formatOptions: t
  };
}
function be(r) {
  var e = {};
  return function(i, n, a) {
    var o = n + JSON.stringify(a), s = e[o];
    return s || (s = r(n, a), e[o] = s), s(i);
  };
}
var Zn = function() {
  function r() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    V(this, r), this.logger = Q.create("formatter"), this.options = e, this.formats = {
      number: be(function(t, i) {
        var n = new Intl.NumberFormat(t, i);
        return function(a) {
          return n.format(a);
        };
      }),
      currency: be(function(t, i) {
        var n = new Intl.NumberFormat(t, ae(ae({}, i), {}, {
          style: "currency"
        }));
        return function(a) {
          return n.format(a);
        };
      }),
      datetime: be(function(t, i) {
        var n = new Intl.DateTimeFormat(t, ae({}, i));
        return function(a) {
          return n.format(a);
        };
      }),
      relativetime: be(function(t, i) {
        var n = new Intl.RelativeTimeFormat(t, ae({}, i));
        return function(a) {
          return n.format(a, i.range || "day");
        };
      }),
      list: be(function(t, i) {
        var n = new Intl.ListFormat(t, ae({}, i));
        return function(a) {
          return n.format(a);
        };
      })
    }, this.init(e);
  }
  return J(r, [{
    key: "init",
    value: function(t) {
      var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        interpolation: {}
      }, n = i.interpolation;
      this.formatSeparator = n.formatSeparator ? n.formatSeparator : n.formatSeparator || ",";
    }
  }, {
    key: "add",
    value: function(t, i) {
      this.formats[t.toLowerCase().trim()] = i;
    }
  }, {
    key: "addCached",
    value: function(t, i) {
      this.formats[t.toLowerCase().trim()] = be(i);
    }
  }, {
    key: "format",
    value: function(t, i, n, a) {
      var o = this, s = i.split(this.formatSeparator), u = s.reduce(function(l, d) {
        var f = Qn(d), g = f.formatName, h = f.formatOptions;
        if (o.formats[g]) {
          var m = l;
          try {
            var w = a && a.formatParams && a.formatParams[a.interpolationkey] || {}, b = w.locale || w.lng || a.locale || a.lng || n;
            m = o.formats[g](l, b, ae(ae(ae({}, h), a), w));
          } catch (y) {
            o.logger.warn(y);
          }
          return m;
        } else
          o.logger.warn("there was no format function for ".concat(g));
        return l;
      }, t);
      return u;
    }
  }]), r;
}();
function _t(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(r);
    e && (i = i.filter(function(n) {
      return Object.getOwnPropertyDescriptor(r, n).enumerable;
    })), t.push.apply(t, i);
  }
  return t;
}
function Lt(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? _t(Object(t), !0).forEach(function(i) {
      fe(r, i, t[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : _t(Object(t)).forEach(function(i) {
      Object.defineProperty(r, i, Object.getOwnPropertyDescriptor(t, i));
    });
  }
  return r;
}
function Yn(r) {
  var e = er();
  return function() {
    var i = Z(r), n;
    if (e) {
      var a = Z(this).constructor;
      n = Reflect.construct(i, arguments, a);
    } else
      n = i.apply(this, arguments);
    return Ne(this, n);
  };
}
function er() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function tr(r, e) {
  r.pending[e] !== void 0 && (delete r.pending[e], r.pendingCount--);
}
var nr = function(r) {
  qe(t, r);
  var e = Yn(t);
  function t(i, n, a) {
    var o, s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return V(this, t), o = e.call(this), Ke && ue.call(se(o)), o.backend = i, o.store = n, o.services = a, o.languageUtils = a.languageUtils, o.options = s, o.logger = Q.create("backendConnector"), o.waitingReads = [], o.maxParallelReads = s.maxParallelReads || 10, o.readingCalls = 0, o.maxRetries = s.maxRetries >= 0 ? s.maxRetries : 5, o.retryTimeout = s.retryTimeout >= 1 ? s.retryTimeout : 350, o.state = {}, o.queue = [], o.backend && o.backend.init && o.backend.init(a, s.backend, s), o;
  }
  return J(t, [{
    key: "queueLoad",
    value: function(n, a, o, s) {
      var u = this, l = {}, d = {}, f = {}, g = {};
      return n.forEach(function(h) {
        var m = !0;
        a.forEach(function(w) {
          var b = "".concat(h, "|").concat(w);
          !o.reload && u.store.hasResourceBundle(h, w) ? u.state[b] = 2 : u.state[b] < 0 || (u.state[b] === 1 ? d[b] === void 0 && (d[b] = !0) : (u.state[b] = 1, m = !1, d[b] === void 0 && (d[b] = !0), l[b] === void 0 && (l[b] = !0), g[w] === void 0 && (g[w] = !0)));
        }), m || (f[h] = !0);
      }), (Object.keys(l).length || Object.keys(d).length) && this.queue.push({
        pending: d,
        pendingCount: Object.keys(d).length,
        loaded: {},
        errors: [],
        callback: s
      }), {
        toLoad: Object.keys(l),
        pending: Object.keys(d),
        toLoadLanguages: Object.keys(f),
        toLoadNamespaces: Object.keys(g)
      };
    }
  }, {
    key: "loaded",
    value: function(n, a, o) {
      var s = n.split("|"), u = s[0], l = s[1];
      a && this.emit("failedLoading", u, l, a), o && this.store.addResourceBundle(u, l, o), this.state[n] = a ? -1 : 2;
      var d = {};
      this.queue.forEach(function(f) {
        Tn(f.loaded, [u], l), tr(f, n), a && f.errors.push(a), f.pendingCount === 0 && !f.done && (Object.keys(f.loaded).forEach(function(g) {
          d[g] || (d[g] = {});
          var h = f.loaded[g];
          h.length && h.forEach(function(m) {
            d[g][m] === void 0 && (d[g][m] = !0);
          });
        }), f.done = !0, f.errors.length ? f.callback(f.errors) : f.callback());
      }), this.emit("loaded", d), this.queue = this.queue.filter(function(f) {
        return !f.done;
      });
    }
  }, {
    key: "read",
    value: function(n, a, o) {
      var s = this, u = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout, d = arguments.length > 5 ? arguments[5] : void 0;
      if (!n.length)
        return d(null, {});
      if (this.readingCalls >= this.maxParallelReads) {
        this.waitingReads.push({
          lng: n,
          ns: a,
          fcName: o,
          tried: u,
          wait: l,
          callback: d
        });
        return;
      }
      return this.readingCalls++, this.backend[o](n, a, function(f, g) {
        if (s.readingCalls--, s.waitingReads.length > 0) {
          var h = s.waitingReads.shift();
          s.read(h.lng, h.ns, h.fcName, h.tried, h.wait, h.callback);
        }
        if (f && g && u < s.maxRetries) {
          setTimeout(function() {
            s.read.call(s, n, a, o, u + 1, l * 2, d);
          }, l);
          return;
        }
        d(f, g);
      });
    }
  }, {
    key: "prepareLoading",
    value: function(n, a) {
      var o = this, s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, u = arguments.length > 3 ? arguments[3] : void 0;
      if (!this.backend)
        return this.logger.warn("No backend was added via i18next.use. Will not load resources."), u && u();
      typeof n == "string" && (n = this.languageUtils.toResolveHierarchy(n)), typeof a == "string" && (a = [a]);
      var l = this.queueLoad(n, a, s, u);
      if (!l.toLoad.length)
        return l.pending.length || u(), null;
      l.toLoad.forEach(function(d) {
        o.loadOne(d);
      });
    }
  }, {
    key: "load",
    value: function(n, a, o) {
      this.prepareLoading(n, a, {}, o);
    }
  }, {
    key: "reload",
    value: function(n, a, o) {
      this.prepareLoading(n, a, {
        reload: !0
      }, o);
    }
  }, {
    key: "loadOne",
    value: function(n) {
      var a = this, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", s = n.split("|"), u = s[0], l = s[1];
      this.read(u, l, "read", void 0, void 0, function(d, f) {
        d && a.logger.warn("".concat(o, "loading namespace ").concat(l, " for language ").concat(u, " failed"), d), !d && f && a.logger.log("".concat(o, "loaded namespace ").concat(l, " for language ").concat(u), f), a.loaded(n, d, f);
      });
    }
  }, {
    key: "saveMissing",
    value: function(n, a, o, s, u) {
      var l = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {};
      if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(a)) {
        this.logger.warn('did not save key "'.concat(o, '" as the namespace "').concat(a, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
        return;
      }
      o == null || o === "" || (this.backend && this.backend.create && this.backend.create(n, a, o, s, null, Lt(Lt({}, l), {}, {
        isUpdate: u
      })), !(!n || !n[0]) && this.store.addResource(n[0], a, o, s));
    }
  }]), t;
}(ue);
function rr() {
  return {
    debug: !1,
    initImmediate: !0,
    ns: ["translation"],
    defaultNS: ["translation"],
    fallbackLng: ["dev"],
    fallbackNS: !1,
    supportedLngs: !1,
    nonExplicitSupportedLngs: !1,
    load: "all",
    preload: !1,
    simplifyPluralSuffix: !0,
    keySeparator: ".",
    nsSeparator: ":",
    pluralSeparator: "_",
    contextSeparator: "_",
    partialBundledLanguages: !1,
    saveMissing: !1,
    updateMissing: !1,
    saveMissingTo: "fallback",
    saveMissingPlurals: !0,
    missingKeyHandler: !1,
    missingInterpolationHandler: !1,
    postProcess: !1,
    postProcessPassResolved: !1,
    returnNull: !0,
    returnEmptyString: !0,
    returnObjects: !1,
    joinArrays: !1,
    returnedObjectHandler: !1,
    parseMissingKeyHandler: !1,
    appendNamespaceToMissingKey: !1,
    appendNamespaceToCIMode: !1,
    overloadTranslationOptionHandler: function(e) {
      var t = {};
      if (K(e[1]) === "object" && (t = e[1]), typeof e[1] == "string" && (t.defaultValue = e[1]), typeof e[2] == "string" && (t.tDescription = e[2]), K(e[2]) === "object" || K(e[3]) === "object") {
        var i = e[3] || e[2];
        Object.keys(i).forEach(function(n) {
          t[n] = i[n];
        });
      }
      return t;
    },
    interpolation: {
      escapeValue: !0,
      format: function(e, t, i, n) {
        return e;
      },
      prefix: "{{",
      suffix: "}}",
      formatSeparator: ",",
      unescapePrefix: "-",
      nestingPrefix: "$t(",
      nestingSuffix: ")",
      nestingOptionsSeparator: ",",
      maxReplaces: 1e3,
      skipOnVariables: !0
    }
  };
}
function Rt(r) {
  return typeof r.ns == "string" && (r.ns = [r.ns]), typeof r.fallbackLng == "string" && (r.fallbackLng = [r.fallbackLng]), typeof r.fallbackNS == "string" && (r.fallbackNS = [r.fallbackNS]), r.supportedLngs && r.supportedLngs.indexOf("cimode") < 0 && (r.supportedLngs = r.supportedLngs.concat(["cimode"])), r;
}
function Et(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(r);
    e && (i = i.filter(function(n) {
      return Object.getOwnPropertyDescriptor(r, n).enumerable;
    })), t.push.apply(t, i);
  }
  return t;
}
function W(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Et(Object(t), !0).forEach(function(i) {
      fe(r, i, t[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : Et(Object(t)).forEach(function(i) {
      Object.defineProperty(r, i, Object.getOwnPropertyDescriptor(t, i));
    });
  }
  return r;
}
function ir(r) {
  var e = ar();
  return function() {
    var i = Z(r), n;
    if (e) {
      var a = Z(this).constructor;
      n = Reflect.construct(i, arguments, a);
    } else
      n = i.apply(this, arguments);
    return Ne(this, n);
  };
}
function ar() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Ie() {
}
function or(r) {
  var e = Object.getOwnPropertyNames(Object.getPrototypeOf(r));
  e.forEach(function(t) {
    typeof r[t] == "function" && (r[t] = r[t].bind(r));
  });
}
var Me = function(r) {
  qe(t, r);
  var e = ir(t);
  function t() {
    var i, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = arguments.length > 1 ? arguments[1] : void 0;
    if (V(this, t), i = e.call(this), Ke && ue.call(se(i)), i.options = Rt(n), i.services = {}, i.logger = Q, i.modules = {
      external: []
    }, or(se(i)), a && !i.isInitialized && !n.isClone) {
      if (!i.options.initImmediate)
        return i.init(n, a), Ne(i, se(i));
      setTimeout(function() {
        i.init(n, a);
      }, 0);
    }
    return i;
  }
  return J(t, [{
    key: "init",
    value: function() {
      var n = this, a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 ? arguments[1] : void 0;
      typeof a == "function" && (o = a, a = {}), !a.defaultNS && a.defaultNS !== !1 && a.ns && (typeof a.ns == "string" ? a.defaultNS = a.ns : a.ns.indexOf("translation") < 0 && (a.defaultNS = a.ns[0]));
      var s = rr();
      this.options = W(W(W({}, s), this.options), Rt(a)), this.options.compatibilityAPI !== "v1" && (this.options.interpolation = W(W({}, s.interpolation), this.options.interpolation)), a.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = a.keySeparator), a.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = a.nsSeparator);
      function u(y) {
        return y ? typeof y == "function" ? new y() : y : null;
      }
      if (!this.options.isClone) {
        this.modules.logger ? Q.init(u(this.modules.logger), this.options) : Q.init(null, this.options);
        var l;
        this.modules.formatter ? l = this.modules.formatter : typeof Intl < "u" && (l = Zn);
        var d = new qn(this.options);
        this.store = new Mn(this.options.resources, this.options);
        var f = this.services;
        f.logger = Q, f.resourceStore = this.store, f.languageUtils = d, f.pluralResolver = new Gn(d, {
          prepend: this.options.pluralSeparator,
          compatibilityJSON: this.options.compatibilityJSON,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix
        }), l && (!this.options.interpolation.format || this.options.interpolation.format === s.interpolation.format) && (f.formatter = u(l), f.formatter.init(f, this.options), this.options.interpolation.format = f.formatter.format.bind(f.formatter)), f.interpolator = new Wn(this.options), f.utils = {
          hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
        }, f.backendConnector = new nr(u(this.modules.backend), f.resourceStore, f, this.options), f.backendConnector.on("*", function(y) {
          for (var v = arguments.length, _ = new Array(v > 1 ? v - 1 : 0), k = 1; k < v; k++)
            _[k - 1] = arguments[k];
          n.emit.apply(n, [y].concat(_));
        }), this.modules.languageDetector && (f.languageDetector = u(this.modules.languageDetector), f.languageDetector.init(f, this.options.detection, this.options)), this.modules.i18nFormat && (f.i18nFormat = u(this.modules.i18nFormat), f.i18nFormat.init && f.i18nFormat.init(this)), this.translator = new St(this.services, this.options), this.translator.on("*", function(y) {
          for (var v = arguments.length, _ = new Array(v > 1 ? v - 1 : 0), k = 1; k < v; k++)
            _[k - 1] = arguments[k];
          n.emit.apply(n, [y].concat(_));
        }), this.modules.external.forEach(function(y) {
          y.init && y.init(n);
        });
      }
      if (this.format = this.options.interpolation.format, o || (o = Ie), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
        var g = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
        g.length > 0 && g[0] !== "dev" && (this.options.lng = g[0]);
      }
      !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined");
      var h = ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"];
      h.forEach(function(y) {
        n[y] = function() {
          var v;
          return (v = n.store)[y].apply(v, arguments);
        };
      });
      var m = ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"];
      m.forEach(function(y) {
        n[y] = function() {
          var v;
          return (v = n.store)[y].apply(v, arguments), n;
        };
      });
      var w = ke(), b = function() {
        var v = function(k, j) {
          n.isInitialized && !n.initializedStoreOnce && n.logger.warn("init: i18next is already initialized. You should call init just once!"), n.isInitialized = !0, n.options.isClone || n.logger.log("initialized", n.options), n.emit("initialized", n.options), w.resolve(j), o(k, j);
        };
        if (n.languages && n.options.compatibilityAPI !== "v1" && !n.isInitialized)
          return v(null, n.t.bind(n));
        n.changeLanguage(n.options.lng, v);
      };
      return this.options.resources || !this.options.initImmediate ? b() : setTimeout(b, 0), w;
    }
  }, {
    key: "loadResources",
    value: function(n) {
      var a = this, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ie, s = o, u = typeof n == "string" ? n : this.language;
      if (typeof n == "function" && (s = n), !this.options.resources || this.options.partialBundledLanguages) {
        if (u && u.toLowerCase() === "cimode")
          return s();
        var l = [], d = function(h) {
          if (h) {
            var m = a.services.languageUtils.toResolveHierarchy(h);
            m.forEach(function(w) {
              l.indexOf(w) < 0 && l.push(w);
            });
          }
        };
        if (u)
          d(u);
        else {
          var f = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
          f.forEach(function(g) {
            return d(g);
          });
        }
        this.options.preload && this.options.preload.forEach(function(g) {
          return d(g);
        }), this.services.backendConnector.load(l, this.options.ns, function(g) {
          !g && !a.resolvedLanguage && a.language && a.setResolvedLanguage(a.language), s(g);
        });
      } else
        s(null);
    }
  }, {
    key: "reloadResources",
    value: function(n, a, o) {
      var s = ke();
      return n || (n = this.languages), a || (a = this.options.ns), o || (o = Ie), this.services.backendConnector.reload(n, a, function(u) {
        s.resolve(), o(u);
      }), s;
    }
  }, {
    key: "use",
    value: function(n) {
      if (!n)
        throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
      if (!n.type)
        throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
      return n.type === "backend" && (this.modules.backend = n), (n.type === "logger" || n.log && n.warn && n.error) && (this.modules.logger = n), n.type === "languageDetector" && (this.modules.languageDetector = n), n.type === "i18nFormat" && (this.modules.i18nFormat = n), n.type === "postProcessor" && Jt.addPostProcessor(n), n.type === "formatter" && (this.modules.formatter = n), n.type === "3rdParty" && this.modules.external.push(n), this;
    }
  }, {
    key: "setResolvedLanguage",
    value: function(n) {
      if (!(!n || !this.languages) && !(["cimode", "dev"].indexOf(n) > -1))
        for (var a = 0; a < this.languages.length; a++) {
          var o = this.languages[a];
          if (!(["cimode", "dev"].indexOf(o) > -1) && this.store.hasLanguageSomeTranslations(o)) {
            this.resolvedLanguage = o;
            break;
          }
        }
    }
  }, {
    key: "changeLanguage",
    value: function(n, a) {
      var o = this;
      this.isLanguageChangingTo = n;
      var s = ke();
      this.emit("languageChanging", n);
      var u = function(g) {
        o.language = g, o.languages = o.services.languageUtils.toResolveHierarchy(g), o.resolvedLanguage = void 0, o.setResolvedLanguage(g);
      }, l = function(g, h) {
        h ? (u(h), o.translator.changeLanguage(h), o.isLanguageChangingTo = void 0, o.emit("languageChanged", h), o.logger.log("languageChanged", h)) : o.isLanguageChangingTo = void 0, s.resolve(function() {
          return o.t.apply(o, arguments);
        }), a && a(g, function() {
          return o.t.apply(o, arguments);
        });
      }, d = function(g) {
        !n && !g && o.services.languageDetector && (g = []);
        var h = typeof g == "string" ? g : o.services.languageUtils.getBestMatchFromCodes(g);
        h && (o.language || u(h), o.translator.language || o.translator.changeLanguage(h), o.services.languageDetector && o.services.languageDetector.cacheUserLanguage(h)), o.loadResources(h, function(m) {
          l(m, h);
        });
      };
      return !n && this.services.languageDetector && !this.services.languageDetector.async ? d(this.services.languageDetector.detect()) : !n && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect(d) : d(n), s;
    }
  }, {
    key: "getFixedT",
    value: function(n, a, o) {
      var s = this, u = function l(d, f) {
        var g;
        if (K(f) !== "object") {
          for (var h = arguments.length, m = new Array(h > 2 ? h - 2 : 0), w = 2; w < h; w++)
            m[w - 2] = arguments[w];
          g = s.options.overloadTranslationOptionHandler([d, f].concat(m));
        } else
          g = W({}, f);
        g.lng = g.lng || l.lng, g.lngs = g.lngs || l.lngs, g.ns = g.ns || l.ns, g.keyPrefix = g.keyPrefix || o || l.keyPrefix;
        var b = s.options.keySeparator || ".", y = g.keyPrefix ? "".concat(g.keyPrefix).concat(b).concat(d) : d;
        return s.t(y, g);
      };
      return typeof n == "string" ? u.lng = n : u.lngs = n, u.ns = a, u.keyPrefix = o, u;
    }
  }, {
    key: "t",
    value: function() {
      var n;
      return this.translator && (n = this.translator).translate.apply(n, arguments);
    }
  }, {
    key: "exists",
    value: function() {
      var n;
      return this.translator && (n = this.translator).exists.apply(n, arguments);
    }
  }, {
    key: "setDefaultNamespace",
    value: function(n) {
      this.options.defaultNS = n;
    }
  }, {
    key: "hasLoadedNamespace",
    value: function(n) {
      var a = this, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (!this.isInitialized)
        return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
      if (!this.languages || !this.languages.length)
        return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
      var s = this.resolvedLanguage || this.languages[0], u = this.options ? this.options.fallbackLng : !1, l = this.languages[this.languages.length - 1];
      if (s.toLowerCase() === "cimode")
        return !0;
      var d = function(h, m) {
        var w = a.services.backendConnector.state["".concat(h, "|").concat(m)];
        return w === -1 || w === 2;
      };
      if (o.precheck) {
        var f = o.precheck(this, d);
        if (f !== void 0)
          return f;
      }
      return !!(this.hasResourceBundle(s, n) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || d(s, n) && (!u || d(l, n)));
    }
  }, {
    key: "loadNamespaces",
    value: function(n, a) {
      var o = this, s = ke();
      return this.options.ns ? (typeof n == "string" && (n = [n]), n.forEach(function(u) {
        o.options.ns.indexOf(u) < 0 && o.options.ns.push(u);
      }), this.loadResources(function(u) {
        s.resolve(), a && a(u);
      }), s) : (a && a(), Promise.resolve());
    }
  }, {
    key: "loadLanguages",
    value: function(n, a) {
      var o = ke();
      typeof n == "string" && (n = [n]);
      var s = this.options.preload || [], u = n.filter(function(l) {
        return s.indexOf(l) < 0;
      });
      return u.length ? (this.options.preload = s.concat(u), this.loadResources(function(l) {
        o.resolve(), a && a(l);
      }), o) : (a && a(), Promise.resolve());
    }
  }, {
    key: "dir",
    value: function(n) {
      if (n || (n = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !n)
        return "rtl";
      var a = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"];
      return a.indexOf(this.services.languageUtils.getLanguagePartFromCode(n)) > -1 || n.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
    }
  }, {
    key: "cloneInstance",
    value: function() {
      var n = this, a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ie, s = W(W(W({}, this.options), a), {
        isClone: !0
      }), u = new t(s);
      (a.debug !== void 0 || a.prefix !== void 0) && (u.logger = u.logger.clone(a));
      var l = ["store", "services", "language"];
      return l.forEach(function(d) {
        u[d] = n[d];
      }), u.services = W({}, this.services), u.services.utils = {
        hasLoadedNamespace: u.hasLoadedNamespace.bind(u)
      }, u.translator = new St(u.services, u.options), u.translator.on("*", function(d) {
        for (var f = arguments.length, g = new Array(f > 1 ? f - 1 : 0), h = 1; h < f; h++)
          g[h - 1] = arguments[h];
        u.emit.apply(u, [d].concat(g));
      }), u.init(s, o), u.translator.options = u.options, u.translator.backendConnector.services.utils = {
        hasLoadedNamespace: u.hasLoadedNamespace.bind(u)
      }, u;
    }
  }, {
    key: "toJSON",
    value: function() {
      return {
        options: this.options,
        store: this.store,
        language: this.language,
        languages: this.languages,
        resolvedLanguage: this.resolvedLanguage
      };
    }
  }]), t;
}(ue);
fe(Me, "createInstance", function() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = arguments.length > 1 ? arguments[1] : void 0;
  return new Me(r, e);
});
var T = Me.createInstance();
T.createInstance = Me.createInstance;
T.createInstance;
T.init;
T.loadResources;
T.reloadResources;
T.use;
T.changeLanguage;
T.getFixedT;
T.t;
T.exists;
T.setDefaultNamespace;
T.hasLoadedNamespace;
T.loadNamespaces;
T.loadLanguages;
var Xt = [], sr = Xt.forEach, ur = Xt.slice;
function fr(r) {
  return sr.call(ur.call(arguments, 1), function(e) {
    if (e)
      for (var t in e)
        r[t] === void 0 && (r[t] = e[t]);
  }), r;
}
var jt = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/, lr = function(e, t, i) {
  var n = i || {};
  n.path = n.path || "/";
  var a = encodeURIComponent(t), o = "".concat(e, "=").concat(a);
  if (n.maxAge > 0) {
    var s = n.maxAge - 0;
    if (Number.isNaN(s))
      throw new Error("maxAge should be a Number");
    o += "; Max-Age=".concat(Math.floor(s));
  }
  if (n.domain) {
    if (!jt.test(n.domain))
      throw new TypeError("option domain is invalid");
    o += "; Domain=".concat(n.domain);
  }
  if (n.path) {
    if (!jt.test(n.path))
      throw new TypeError("option path is invalid");
    o += "; Path=".concat(n.path);
  }
  if (n.expires) {
    if (typeof n.expires.toUTCString != "function")
      throw new TypeError("option expires is invalid");
    o += "; Expires=".concat(n.expires.toUTCString());
  }
  if (n.httpOnly && (o += "; HttpOnly"), n.secure && (o += "; Secure"), n.sameSite) {
    var u = typeof n.sameSite == "string" ? n.sameSite.toLowerCase() : n.sameSite;
    switch (u) {
      case !0:
        o += "; SameSite=Strict";
        break;
      case "lax":
        o += "; SameSite=Lax";
        break;
      case "strict":
        o += "; SameSite=Strict";
        break;
      case "none":
        o += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  }
  return o;
}, Ct = {
  create: function(e, t, i, n) {
    var a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      path: "/",
      sameSite: "strict"
    };
    i && (a.expires = new Date(), a.expires.setTime(a.expires.getTime() + i * 60 * 1e3)), n && (a.domain = n), document.cookie = lr(e, encodeURIComponent(t), a);
  },
  read: function(e) {
    for (var t = "".concat(e, "="), i = document.cookie.split(";"), n = 0; n < i.length; n++) {
      for (var a = i[n]; a.charAt(0) === " "; )
        a = a.substring(1, a.length);
      if (a.indexOf(t) === 0)
        return a.substring(t.length, a.length);
    }
    return null;
  },
  remove: function(e) {
    this.create(e, "", -1);
  }
}, cr = {
  name: "cookie",
  lookup: function(e) {
    var t;
    if (e.lookupCookie && typeof document < "u") {
      var i = Ct.read(e.lookupCookie);
      i && (t = i);
    }
    return t;
  },
  cacheUserLanguage: function(e, t) {
    t.lookupCookie && typeof document < "u" && Ct.create(t.lookupCookie, e, t.cookieMinutes, t.cookieDomain, t.cookieOptions);
  }
}, dr = {
  name: "querystring",
  lookup: function(e) {
    var t;
    if (typeof window < "u") {
      var i = window.location.search;
      !window.location.search && window.location.hash && window.location.hash.indexOf("?") > -1 && (i = window.location.hash.substring(window.location.hash.indexOf("?")));
      for (var n = i.substring(1), a = n.split("&"), o = 0; o < a.length; o++) {
        var s = a[o].indexOf("=");
        if (s > 0) {
          var u = a[o].substring(0, s);
          u === e.lookupQuerystring && (t = a[o].substring(s + 1));
        }
      }
    }
    return t;
  }
}, xe = null, At = function() {
  if (xe !== null)
    return xe;
  try {
    xe = window !== "undefined" && window.localStorage !== null;
    var e = "i18next.translate.boo";
    window.localStorage.setItem(e, "foo"), window.localStorage.removeItem(e);
  } catch {
    xe = !1;
  }
  return xe;
}, hr = {
  name: "localStorage",
  lookup: function(e) {
    var t;
    if (e.lookupLocalStorage && At()) {
      var i = window.localStorage.getItem(e.lookupLocalStorage);
      i && (t = i);
    }
    return t;
  },
  cacheUserLanguage: function(e, t) {
    t.lookupLocalStorage && At() && window.localStorage.setItem(t.lookupLocalStorage, e);
  }
}, Pe = null, Nt = function() {
  if (Pe !== null)
    return Pe;
  try {
    Pe = window !== "undefined" && window.sessionStorage !== null;
    var e = "i18next.translate.boo";
    window.sessionStorage.setItem(e, "foo"), window.sessionStorage.removeItem(e);
  } catch {
    Pe = !1;
  }
  return Pe;
}, gr = {
  name: "sessionStorage",
  lookup: function(e) {
    var t;
    if (e.lookupSessionStorage && Nt()) {
      var i = window.sessionStorage.getItem(e.lookupSessionStorage);
      i && (t = i);
    }
    return t;
  },
  cacheUserLanguage: function(e, t) {
    t.lookupSessionStorage && Nt() && window.sessionStorage.setItem(t.lookupSessionStorage, e);
  }
}, pr = {
  name: "navigator",
  lookup: function(e) {
    var t = [];
    if (typeof navigator < "u") {
      if (navigator.languages)
        for (var i = 0; i < navigator.languages.length; i++)
          t.push(navigator.languages[i]);
      navigator.userLanguage && t.push(navigator.userLanguage), navigator.language && t.push(navigator.language);
    }
    return t.length > 0 ? t : void 0;
  }
}, mr = {
  name: "htmlTag",
  lookup: function(e) {
    var t, i = e.htmlTag || (typeof document < "u" ? document.documentElement : null);
    return i && typeof i.getAttribute == "function" && (t = i.getAttribute("lang")), t;
  }
}, vr = {
  name: "path",
  lookup: function(e) {
    var t;
    if (typeof window < "u") {
      var i = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
      if (i instanceof Array)
        if (typeof e.lookupFromPathIndex == "number") {
          if (typeof i[e.lookupFromPathIndex] != "string")
            return;
          t = i[e.lookupFromPathIndex].replace("/", "");
        } else
          t = i[0].replace("/", "");
    }
    return t;
  }
}, yr = {
  name: "subdomain",
  lookup: function(e) {
    var t = typeof e.lookupFromSubdomainIndex == "number" ? e.lookupFromSubdomainIndex + 1 : 1, i = typeof window < "u" && window.location && window.location.hostname && window.location.hostname.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);
    if (i)
      return i[t];
  }
};
function br() {
  return {
    order: ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"],
    lookupQuerystring: "lng",
    lookupCookie: "i18next",
    lookupLocalStorage: "i18nextLng",
    lookupSessionStorage: "i18nextLng",
    // cache user language
    caches: ["localStorage"],
    excludeCacheFor: ["cimode"]
    // cookieMinutes: 10,
    // cookieDomain: 'myDomain'
  };
}
var Gt = /* @__PURE__ */ function() {
  function r(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    V(this, r), this.type = "languageDetector", this.detectors = {}, this.init(e, t);
  }
  return J(r, [{
    key: "init",
    value: function(t) {
      var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      this.services = t, this.options = fr(i, this.options || {}, br()), this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex), this.i18nOptions = n, this.addDetector(cr), this.addDetector(dr), this.addDetector(hr), this.addDetector(gr), this.addDetector(pr), this.addDetector(mr), this.addDetector(vr), this.addDetector(yr);
    }
  }, {
    key: "addDetector",
    value: function(t) {
      this.detectors[t.name] = t;
    }
  }, {
    key: "detect",
    value: function(t) {
      var i = this;
      t || (t = this.options.order);
      var n = [];
      return t.forEach(function(a) {
        if (i.detectors[a]) {
          var o = i.detectors[a].lookup(i.options);
          o && typeof o == "string" && (o = [o]), o && (n = n.concat(o));
        }
      }), this.services.languageUtils.getBestMatchFromCodes ? n : n.length > 0 ? n[0] : null;
    }
  }, {
    key: "cacheUserLanguage",
    value: function(t, i) {
      var n = this;
      i || (i = this.options.caches), i && (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(t) > -1 || i.forEach(function(a) {
        n.detectors[a] && n.detectors[a].cacheUserLanguage(t, n.options);
      }));
    }
  }]), r;
}();
Gt.type = "languageDetector";
function et(r) {
  return et = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, et(r);
}
var Wt = [], wr = Wt.forEach, Or = Wt.slice;
function tt(r) {
  return wr.call(Or.call(arguments, 1), function(e) {
    if (e)
      for (var t in e)
        r[t] === void 0 && (r[t] = e[t]);
  }), r;
}
function Qt() {
  return typeof XMLHttpRequest == "function" || (typeof XMLHttpRequest > "u" ? "undefined" : et(XMLHttpRequest)) === "object";
}
function Sr(r) {
  return !!r && typeof r.then == "function";
}
function kr(r) {
  return Sr(r) ? r : Promise.resolve(r);
}
var Fe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function xr(r) {
  throw new Error('Could not dynamically require "' + r + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var je = {}, Pr = {
  get exports() {
    return je;
  },
  set exports(r) {
    je = r;
  }
}, Re = {}, _r = {
  get exports() {
    return Re;
  },
  set exports(r) {
    Re = r;
  }
}, Tt;
function Lr() {
  return Tt || (Tt = 1, function(r, e) {
    var t = typeof self < "u" ? self : Fe, i = function() {
      function a() {
        this.fetch = !1, this.DOMException = t.DOMException;
      }
      return a.prototype = t, new a();
    }();
    (function(a) {
      (function(o) {
        var s = {
          searchParams: "URLSearchParams" in a,
          iterable: "Symbol" in a && "iterator" in Symbol,
          blob: "FileReader" in a && "Blob" in a && function() {
            try {
              return new Blob(), !0;
            } catch {
              return !1;
            }
          }(),
          formData: "FormData" in a,
          arrayBuffer: "ArrayBuffer" in a
        };
        function u(c) {
          return c && DataView.prototype.isPrototypeOf(c);
        }
        if (s.arrayBuffer)
          var l = [
            "[object Int8Array]",
            "[object Uint8Array]",
            "[object Uint8ClampedArray]",
            "[object Int16Array]",
            "[object Uint16Array]",
            "[object Int32Array]",
            "[object Uint32Array]",
            "[object Float32Array]",
            "[object Float64Array]"
          ], d = ArrayBuffer.isView || function(c) {
            return c && l.indexOf(Object.prototype.toString.call(c)) > -1;
          };
        function f(c) {
          if (typeof c != "string" && (c = String(c)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(c))
            throw new TypeError("Invalid character in header field name");
          return c.toLowerCase();
        }
        function g(c) {
          return typeof c != "string" && (c = String(c)), c;
        }
        function h(c) {
          var p = {
            next: function() {
              var S = c.shift();
              return { done: S === void 0, value: S };
            }
          };
          return s.iterable && (p[Symbol.iterator] = function() {
            return p;
          }), p;
        }
        function m(c) {
          this.map = {}, c instanceof m ? c.forEach(function(p, S) {
            this.append(S, p);
          }, this) : Array.isArray(c) ? c.forEach(function(p) {
            this.append(p[0], p[1]);
          }, this) : c && Object.getOwnPropertyNames(c).forEach(function(p) {
            this.append(p, c[p]);
          }, this);
        }
        m.prototype.append = function(c, p) {
          c = f(c), p = g(p);
          var S = this.map[c];
          this.map[c] = S ? S + ", " + p : p;
        }, m.prototype.delete = function(c) {
          delete this.map[f(c)];
        }, m.prototype.get = function(c) {
          return c = f(c), this.has(c) ? this.map[c] : null;
        }, m.prototype.has = function(c) {
          return this.map.hasOwnProperty(f(c));
        }, m.prototype.set = function(c, p) {
          this.map[f(c)] = g(p);
        }, m.prototype.forEach = function(c, p) {
          for (var S in this.map)
            this.map.hasOwnProperty(S) && c.call(p, this.map[S], S, this);
        }, m.prototype.keys = function() {
          var c = [];
          return this.forEach(function(p, S) {
            c.push(S);
          }), h(c);
        }, m.prototype.values = function() {
          var c = [];
          return this.forEach(function(p) {
            c.push(p);
          }), h(c);
        }, m.prototype.entries = function() {
          var c = [];
          return this.forEach(function(p, S) {
            c.push([S, p]);
          }), h(c);
        }, s.iterable && (m.prototype[Symbol.iterator] = m.prototype.entries);
        function w(c) {
          if (c.bodyUsed)
            return Promise.reject(new TypeError("Already read"));
          c.bodyUsed = !0;
        }
        function b(c) {
          return new Promise(function(p, S) {
            c.onload = function() {
              p(c.result);
            }, c.onerror = function() {
              S(c.error);
            };
          });
        }
        function y(c) {
          var p = new FileReader(), S = b(p);
          return p.readAsArrayBuffer(c), S;
        }
        function v(c) {
          var p = new FileReader(), S = b(p);
          return p.readAsText(c), S;
        }
        function _(c) {
          for (var p = new Uint8Array(c), S = new Array(p.length), L = 0; L < p.length; L++)
            S[L] = String.fromCharCode(p[L]);
          return S.join("");
        }
        function k(c) {
          if (c.slice)
            return c.slice(0);
          var p = new Uint8Array(c.byteLength);
          return p.set(new Uint8Array(c)), p.buffer;
        }
        function j() {
          return this.bodyUsed = !1, this._initBody = function(c) {
            this._bodyInit = c, c ? typeof c == "string" ? this._bodyText = c : s.blob && Blob.prototype.isPrototypeOf(c) ? this._bodyBlob = c : s.formData && FormData.prototype.isPrototypeOf(c) ? this._bodyFormData = c : s.searchParams && URLSearchParams.prototype.isPrototypeOf(c) ? this._bodyText = c.toString() : s.arrayBuffer && s.blob && u(c) ? (this._bodyArrayBuffer = k(c.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : s.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(c) || d(c)) ? this._bodyArrayBuffer = k(c) : this._bodyText = c = Object.prototype.toString.call(c) : this._bodyText = "", this.headers.get("content-type") || (typeof c == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : s.searchParams && URLSearchParams.prototype.isPrototypeOf(c) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
          }, s.blob && (this.blob = function() {
            var c = w(this);
            if (c)
              return c;
            if (this._bodyBlob)
              return Promise.resolve(this._bodyBlob);
            if (this._bodyArrayBuffer)
              return Promise.resolve(new Blob([this._bodyArrayBuffer]));
            if (this._bodyFormData)
              throw new Error("could not read FormData body as blob");
            return Promise.resolve(new Blob([this._bodyText]));
          }, this.arrayBuffer = function() {
            return this._bodyArrayBuffer ? w(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(y);
          }), this.text = function() {
            var c = w(this);
            if (c)
              return c;
            if (this._bodyBlob)
              return v(this._bodyBlob);
            if (this._bodyArrayBuffer)
              return Promise.resolve(_(this._bodyArrayBuffer));
            if (this._bodyFormData)
              throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText);
          }, s.formData && (this.formData = function() {
            return this.text().then(H);
          }), this.json = function() {
            return this.text().then(JSON.parse);
          }, this;
        }
        var F = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
        function B(c) {
          var p = c.toUpperCase();
          return F.indexOf(p) > -1 ? p : c;
        }
        function I(c, p) {
          p = p || {};
          var S = p.body;
          if (c instanceof I) {
            if (c.bodyUsed)
              throw new TypeError("Already read");
            this.url = c.url, this.credentials = c.credentials, p.headers || (this.headers = new m(c.headers)), this.method = c.method, this.mode = c.mode, this.signal = c.signal, !S && c._bodyInit != null && (S = c._bodyInit, c.bodyUsed = !0);
          } else
            this.url = String(c);
          if (this.credentials = p.credentials || this.credentials || "same-origin", (p.headers || !this.headers) && (this.headers = new m(p.headers)), this.method = B(p.method || this.method || "GET"), this.mode = p.mode || this.mode || null, this.signal = p.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && S)
            throw new TypeError("Body not allowed for GET or HEAD requests");
          this._initBody(S);
        }
        I.prototype.clone = function() {
          return new I(this, { body: this._bodyInit });
        };
        function H(c) {
          var p = new FormData();
          return c.trim().split("&").forEach(function(S) {
            if (S) {
              var L = S.split("="), R = L.shift().replace(/\+/g, " "), x = L.join("=").replace(/\+/g, " ");
              p.append(decodeURIComponent(R), decodeURIComponent(x));
            }
          }), p;
        }
        function M(c) {
          var p = new m(), S = c.replace(/\r?\n[\t ]+/g, " ");
          return S.split(/\r?\n/).forEach(function(L) {
            var R = L.split(":"), x = R.shift().trim();
            if (x) {
              var Y = R.join(":").trim();
              p.append(x, Y);
            }
          }), p;
        }
        j.call(I.prototype);
        function A(c, p) {
          p || (p = {}), this.type = "default", this.status = p.status === void 0 ? 200 : p.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in p ? p.statusText : "OK", this.headers = new m(p.headers), this.url = p.url || "", this._initBody(c);
        }
        j.call(A.prototype), A.prototype.clone = function() {
          return new A(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new m(this.headers),
            url: this.url
          });
        }, A.error = function() {
          var c = new A(null, { status: 0, statusText: "" });
          return c.type = "error", c;
        };
        var X = [301, 302, 303, 307, 308];
        A.redirect = function(c, p) {
          if (X.indexOf(p) === -1)
            throw new RangeError("Invalid status code");
          return new A(null, { status: p, headers: { location: c } });
        }, o.DOMException = a.DOMException;
        try {
          new o.DOMException();
        } catch {
          o.DOMException = function(p, S) {
            this.message = p, this.name = S;
            var L = Error(p);
            this.stack = L.stack;
          }, o.DOMException.prototype = Object.create(Error.prototype), o.DOMException.prototype.constructor = o.DOMException;
        }
        function G(c, p) {
          return new Promise(function(S, L) {
            var R = new I(c, p);
            if (R.signal && R.signal.aborted)
              return L(new o.DOMException("Aborted", "AbortError"));
            var x = new XMLHttpRequest();
            function Y() {
              x.abort();
            }
            x.onload = function() {
              var $ = {
                status: x.status,
                statusText: x.statusText,
                headers: M(x.getAllResponseHeaders() || "")
              };
              $.url = "responseURL" in x ? x.responseURL : $.headers.get("X-Request-URL");
              var z = "response" in x ? x.response : x.responseText;
              S(new A(z, $));
            }, x.onerror = function() {
              L(new TypeError("Network request failed"));
            }, x.ontimeout = function() {
              L(new TypeError("Network request failed"));
            }, x.onabort = function() {
              L(new o.DOMException("Aborted", "AbortError"));
            }, x.open(R.method, R.url, !0), R.credentials === "include" ? x.withCredentials = !0 : R.credentials === "omit" && (x.withCredentials = !1), "responseType" in x && s.blob && (x.responseType = "blob"), R.headers.forEach(function($, z) {
              x.setRequestHeader(z, $);
            }), R.signal && (R.signal.addEventListener("abort", Y), x.onreadystatechange = function() {
              x.readyState === 4 && R.signal.removeEventListener("abort", Y);
            }), x.send(typeof R._bodyInit > "u" ? null : R._bodyInit);
          });
        }
        return G.polyfill = !0, a.fetch || (a.fetch = G, a.Headers = m, a.Request = I, a.Response = A), o.Headers = m, o.Request = I, o.Response = A, o.fetch = G, Object.defineProperty(o, "__esModule", { value: !0 }), o;
      })({});
    })(i), i.fetch.ponyfill = !0, delete i.fetch.polyfill;
    var n = i;
    e = n.fetch, e.default = n.fetch, e.fetch = n.fetch, e.Headers = n.Headers, e.Request = n.Request, e.Response = n.Response, r.exports = e;
  }(_r, Re)), Re;
}
(function(r, e) {
  var t;
  if (typeof fetch == "function" && (typeof Fe < "u" && Fe.fetch ? t = Fe.fetch : typeof window < "u" && window.fetch ? t = window.fetch : t = fetch), typeof xr < "u" && (typeof window > "u" || typeof window.document > "u")) {
    var i = t || Lr();
    i.default && (i = i.default), e.default = i, r.exports = e.default;
  }
})(Pr, je);
const Zt = je, It = /* @__PURE__ */ tn({
  __proto__: null,
  default: Zt
}, [je]);
function He(r) {
  return He = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, He(r);
}
var re;
typeof fetch == "function" && (typeof global < "u" && global.fetch ? re = global.fetch : typeof window < "u" && window.fetch ? re = window.fetch : re = fetch);
var Ce;
Qt() && (typeof global < "u" && global.XMLHttpRequest ? Ce = global.XMLHttpRequest : typeof window < "u" && window.XMLHttpRequest && (Ce = window.XMLHttpRequest));
var ze;
typeof ActiveXObject == "function" && (typeof global < "u" && global.ActiveXObject ? ze = global.ActiveXObject : typeof window < "u" && window.ActiveXObject && (ze = window.ActiveXObject));
!re && It && !Ce && !ze && (re = Zt || It);
typeof re != "function" && (re = void 0);
var nt = function(e, t) {
  if (t && He(t) === "object") {
    var i = "";
    for (var n in t)
      i += "&" + encodeURIComponent(n) + "=" + encodeURIComponent(t[n]);
    if (!i)
      return e;
    e = e + (e.indexOf("?") !== -1 ? "&" : "?") + i.slice(1);
  }
  return e;
}, Dt = function(e, t, i) {
  re(e, t).then(function(n) {
    if (!n.ok)
      return i(n.statusText || "Error", {
        status: n.status
      });
    n.text().then(function(a) {
      i(null, {
        status: n.status,
        data: a
      });
    }).catch(i);
  }).catch(i);
}, Ft = !1, Rr = function(e, t, i, n) {
  e.queryStringParams && (t = nt(t, e.queryStringParams));
  var a = tt({}, typeof e.customHeaders == "function" ? e.customHeaders() : e.customHeaders);
  i && (a["Content-Type"] = "application/json");
  var o = typeof e.requestOptions == "function" ? e.requestOptions(i) : e.requestOptions, s = tt({
    method: i ? "POST" : "GET",
    body: i ? e.stringify(i) : void 0,
    headers: a
  }, Ft ? {} : o);
  try {
    Dt(t, s, n);
  } catch (u) {
    if (!o || Object.keys(o).length === 0 || !u.message || u.message.indexOf("not implemented") < 0)
      return n(u);
    try {
      Object.keys(o).forEach(function(l) {
        delete s[l];
      }), Dt(t, s, n), Ft = !0;
    } catch (l) {
      n(l);
    }
  }
}, Er = function(e, t, i, n) {
  i && He(i) === "object" && (i = nt("", i).slice(1)), e.queryStringParams && (t = nt(t, e.queryStringParams));
  try {
    var a;
    Ce ? a = new Ce() : a = new ze("MSXML2.XMLHTTP.3.0"), a.open(i ? "POST" : "GET", t, 1), e.crossDomain || a.setRequestHeader("X-Requested-With", "XMLHttpRequest"), a.withCredentials = !!e.withCredentials, i && a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), a.overrideMimeType && a.overrideMimeType("application/json");
    var o = e.customHeaders;
    if (o = typeof o == "function" ? o() : o, o)
      for (var s in o)
        a.setRequestHeader(s, o[s]);
    a.onreadystatechange = function() {
      a.readyState > 3 && n(a.status >= 400 ? a.statusText : null, {
        status: a.status,
        data: a.responseText
      });
    }, a.send(i);
  } catch (u) {
    console && console.log(u);
  }
}, jr = function(e, t, i, n) {
  if (typeof i == "function" && (n = i, i = void 0), n = n || function() {
  }, re)
    return Rr(e, t, i, n);
  if (Qt() || typeof ActiveXObject == "function")
    return Er(e, t, i, n);
  n(new Error("No fetch and no xhr implementation found!"));
};
function Cr(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function $t(r, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, i.key, i);
  }
}
function Ar(r, e, t) {
  return e && $t(r.prototype, e), t && $t(r, t), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function Nr(r, e, t) {
  return e in r ? Object.defineProperty(r, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = t, r;
}
var Tr = function() {
  return {
    loadPath: "/locales/{{lng}}/{{ns}}.json",
    addPath: "/locales/add/{{lng}}/{{ns}}",
    allowMultiLoading: !1,
    parse: function(t) {
      return JSON.parse(t);
    },
    stringify: JSON.stringify,
    parsePayload: function(t, i, n) {
      return Nr({}, i, n || "");
    },
    request: jr,
    reloadInterval: typeof window < "u" ? !1 : 60 * 60 * 1e3,
    customHeaders: {},
    queryStringParams: {},
    crossDomain: !1,
    withCredentials: !1,
    overrideMimeType: !1,
    requestOptions: {
      mode: "cors",
      credentials: "same-origin",
      cache: "default"
    }
  };
}, Yt = function() {
  function r(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    Cr(this, r), this.services = e, this.options = t, this.allOptions = i, this.type = "backend", this.init(e, t, i);
  }
  return Ar(r, [{
    key: "init",
    value: function(t) {
      var i = this, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      this.services = t, this.options = tt(n, this.options || {}, Tr()), this.allOptions = a, this.services && this.options.reloadInterval && setInterval(function() {
        return i.reload();
      }, this.options.reloadInterval);
    }
  }, {
    key: "readMulti",
    value: function(t, i, n) {
      this._readAny(t, t, i, i, n);
    }
  }, {
    key: "read",
    value: function(t, i, n) {
      this._readAny([t], t, [i], i, n);
    }
  }, {
    key: "_readAny",
    value: function(t, i, n, a, o) {
      var s = this, u = this.options.loadPath;
      typeof this.options.loadPath == "function" && (u = this.options.loadPath(t, n)), u = kr(u), u.then(function(l) {
        if (!l)
          return o(null, {});
        var d = s.services.interpolator.interpolate(l, {
          lng: t.join("+"),
          ns: n.join("+")
        });
        s.loadUrl(d, o, i, a);
      });
    }
  }, {
    key: "loadUrl",
    value: function(t, i, n, a) {
      var o = this;
      this.options.request(this.options, t, void 0, function(s, u) {
        if (u && (u.status >= 500 && u.status < 600 || !u.status))
          return i("failed loading " + t + "; status code: " + u.status, !0);
        if (u && u.status >= 400 && u.status < 500)
          return i("failed loading " + t + "; status code: " + u.status, !1);
        if (!u && s && s.message && s.message.indexOf("Failed to fetch") > -1)
          return i("failed loading " + t + ": " + s.message, !0);
        if (s)
          return i(s, !1);
        var l, d;
        try {
          typeof u.data == "string" ? l = o.options.parse(u.data, n, a) : l = u.data;
        } catch {
          d = "failed parsing " + t + " to json";
        }
        if (d)
          return i(d, !1);
        i(null, l);
      });
    }
  }, {
    key: "create",
    value: function(t, i, n, a, o) {
      var s = this;
      if (this.options.addPath) {
        typeof t == "string" && (t = [t]);
        var u = this.options.parsePayload(i, n, a), l = 0, d = [], f = [];
        t.forEach(function(g) {
          var h = s.options.addPath;
          typeof s.options.addPath == "function" && (h = s.options.addPath(g, i));
          var m = s.services.interpolator.interpolate(h, {
            lng: g,
            ns: i
          });
          s.options.request(s.options, m, u, function(w, b) {
            l += 1, d.push(w), f.push(b), l === t.length && o && o(d, f);
          });
        });
      }
    }
  }, {
    key: "reload",
    value: function() {
      var t = this, i = this.services, n = i.backendConnector, a = i.languageUtils, o = i.logger, s = n.language;
      if (!(s && s.toLowerCase() === "cimode")) {
        var u = [], l = function(f) {
          var g = a.toResolveHierarchy(f);
          g.forEach(function(h) {
            u.indexOf(h) < 0 && u.push(h);
          });
        };
        l(s), this.allOptions.preload && this.allOptions.preload.forEach(function(d) {
          return l(d);
        }), u.forEach(function(d) {
          t.allOptions.ns.forEach(function(f) {
            n.read(d, f, "read", null, null, function(g, h) {
              g && o.warn("loading namespace ".concat(f, " for language ").concat(d, " failed"), g), !g && h && o.log("loaded namespace ".concat(f, " for language ").concat(d), h), n.loaded("".concat(d, "|").concat(f), g, h);
            });
          });
        });
      }
    }
  }]), r;
}();
Yt.type = "backend";
const Ge = Ue(!0);
class Ir {
  constructor(e) {
    this.i18n = this.createInstance(e), this.isLoading = this.createLoadingInstance(e);
  }
  createInstance(e) {
    const t = Ue(e);
    return e.on("initialized", () => {
      t.set(e);
    }), e.on("loaded", () => {
      t.set(e);
    }), e.on("added", () => t.set(e)), e.on("languageChanged", () => {
      t.set(e);
    }), t;
  }
  createLoadingInstance(e) {
    return e.on("loaded", (t) => {
      Object.keys(t).length !== 0 && Ge.set(!1);
    }), e.on("failedLoading", () => {
      Ge.set(!0);
    }), Ge;
  }
}
const Dr = (r) => new Ir(r).i18n, Fr = {
  chat: {
    title: "(Abre una nueva ventana)",
    url: "https://www.bizkaia.eus/home2/join.asp?Idioma=CA",
    texto: "Acceso remoto"
  },
  "diputacion-foral": "Diputación Foral de Bizkaia - Diputación Foral de Bizkaia",
  opcion: {
    "mapa-web": {
      url: "https://{{dominio}}/es/mapa-web",
      texto: "Mapa web"
    },
    "aviso-legal": {
      url: "https://{{dominio}}/es/lege-oharrak",
      texto: "Avisos legales"
    },
    accesibilidad: {
      url: "https://{{dominio}}/es/accesibilidad",
      texto: "Accesibilidad"
    },
    cookie: {
      url: "https://{{dominio}}/es/cookies",
      texto: "Cookies"
    }
  }
}, $r = {
  pie: Fr
}, Ur = {
  abandonarSesión: "Egoitza elektronikoko saioa utziko duzu",
  acceso: "Sarbidea",
  aceptar: "Onartu",
  areaPersonal: "Eremu pertsonala",
  areaProfesional: "Eremu profesionala",
  bizkaiaEus: "Bizkaia.eus",
  cancelar: "Ezeztatu",
  cerrarSesion: "Saioa itxi",
  ciudadania: "HIRITARGOA",
  contacto: "Harremana",
  enNombreDe: "{{empresa}}-(r)en izenean",
  estaSeguro: "Ziur al zaude irten nahi duzula?",
  idiomaPropio: "Euskera",
  idiomaActual: "EU",
  idiomaOtro: "ES",
  menuCiudadania: "EGOITZA ELEKTRONIKOA HIRITARGOA",
  menuProfesional: "ZERGA-ARLOKO EGOITZA ELEKTRONIKO PROFESIONALA",
  misDatos: "Nire datuak",
  misDatosProfesionales: "Nire datu profesionalak",
  profesionalTributario: "ZERGETAKO PROFESIONALA AZKEN",
  seguroSalir: "Ziur al zaude irten nahi duzula?",
  textoPortal: "Joan atari honetara",
  textoLogo: "Bizkaiko Foru Aldundiaren Egoitza elektronikoa. Joan atariko orrialde nagusira",
  ultimaConexion: "Azken konexioa",
  vaAAbandonar: "Egoitza elektronikoko saioa utziko duzu",
  idioma: {
    es: "Español",
    eu: "Euskara"
  },
  urls: {
    "area-personal": "https://{{dominio}}/eu/eremu-pertsonala",
    "area-profesional": "https://{{dominio}}/eu/eremu-profesionala",
    error: "https://{{dominio}}/eu/errorea?pr=1",
    "mis-datos": "https://{{dominio}}/eu/nire-profila",
    "mis-datos-profesionales": "https://{{dominio}}/eu/nireDatuProfesionalak",
    contacto: "https://{{dominio}}/eu/harremana",
    "mis-avisos": "http://{dominio}/EWAV001M/obtenerAvisosUsuario",
    "inicio-personal": "https://{{dominio}}/eu/hasiera",
    "inicio-profesional": "https://{{dominio}}/eu/profesionala"
  }
}, Br = {
  chat: {
    title: "(Leiho berria ireki)",
    url: "https://www.bizkaia.eus/home2/join.asp?Idioma=EU",
    texto: "Urrutiko sarbidea"
  },
  "diputacion-foral": "Bizkaiko Foru Aldundia - Diputación Foral de Bizkaia",
  opcion: {
    "mapa-web": {
      url: "https://{{dominio}}/eu/mapa-web",
      texto: "Gunearen mapa"
    },
    "aviso-legal": {
      url: "https://{{dominio}}/eu/lege-oharrak",
      texto: "Lege oharrak"
    },
    accesibilidad: {
      url: "https://{{dominio}}/eu/erabilerraztasuna",
      texto: "Erabilerraztasuna"
    },
    cookie: {
      url: "https://{{dominio}}/eu/cookieak",
      texto: "Cookieak"
    }
  }
}, Mr = {
  cabecera: Ur,
  pie: Br
}, Hr = {
  es: { translation: $r },
  eu: { translation: Mr }
}, zr = {
  name: "ulrContextLanguageDetector",
  cacheUserLanguage(r, e) {
    return console.log(r, e), r;
  },
  lookup: (r) => {
    console.log(r);
    const t = new URL(window.location.href).pathname.split("/").find((i) => i === "es" || i === "eu");
    return t || "eu";
  }
}, en = new Gt();
en.addDetector(zr);
T.use(Yt).use(en).init({
  // lng: localStorage.getItem('language') || 'eu', 
  resources: Hr,
  fallbackLng: ["eu", "es"],
  debug: !0,
  detection: {
    order: [
      "ulrContextLanguageDetector",
      "querystring",
      "path",
      "cookie",
      "localStorage",
      "sessionStorage",
      "navigator",
      "htmlTag",
      "subdomain"
    ],
    caches: ["localStorage"],
    lookupQuerystring: "lng",
    lookupLocalStorage: "locale"
  },
  interpolation: {
    escapeValue: !1
  }
});
const Ut = Dr(T), qr = T.changeLanguage;
window.addEventListener("storage", (r) => {
  r.key === "locale" && T.changeLanguage(r.newValue);
});
function Kr(r) {
  let e, t, i, n, a, o, s, u = (
    /*$i18n*/
    r[0].t("pie.chat.texto") + ""
  ), l, d, f, g, h, m, w = (
    /*$i18n*/
    r[0].t("pie.diputacion-foral") + ""
  ), b, y, v, _, k, j = (
    /*$i18n*/
    r[0].t("pie.opcion.mapa-web.texto") + ""
  ), F, B, I, H, M, A = (
    /*$i18n*/
    r[0].t("pie.opcion.aviso-legal.texto") + ""
  ), X, G, c, p, S, L = (
    /*$i18n*/
    r[0].t("pie.opcion.accesibilidad.texto") + ""
  ), R, x, Y, $, z, ge = (
    /*$i18n*/
    r[0].t("pie.opcion.cookie.texto") + ""
  ), ee, le, ie, te, ce, Se;
  return {
    c() {
      e = N("div"), t = N("footer"), i = N("slot"), n = de(), a = N("div"), o = N("a"), s = N("span"), l = oe(u), g = de(), h = N("div"), m = N("p"), b = oe(w), y = de(), v = N("ul"), _ = N("li"), k = N("a"), F = oe(j), I = de(), H = N("li"), M = N("a"), X = oe(A), c = de(), p = N("li"), S = N("a"), R = oe(L), Y = de(), $ = N("li"), z = N("a"), ee = oe(ge), ie = de(), te = N("div"), te.innerHTML = '<ul class="sedeLogosPie"></ul>', this.c = D, O(i, "name", "enlaces"), O(s, "class", "sr-only"), O(o, "href", d = /*$i18n*/
      r[0].t("pie.chat.url")), O(o, "class", "sede-chatweb-button"), O(o, "target", "_blank"), O(o, "rel", "noopener noreferrer"), O(o, "title", f = /*$i18n*/
      r[0].t("pie.chat.title")), O(a, "id", "sede-chatweb"), O(m, "class", "sedeCopy"), O(k, "href", B = /*$i18n*/
      r[0].t("pie.opcion.mapa-web.url", { dominio: (
        /*VITE_APP_LIFERAY*/
        r[1]
      ) })), O(M, "href", G = /*$i18n*/
      r[0].t("pie.opcion.aviso-legal.url", { dominio: (
        /*VITE_APP_LIFERAY*/
        r[1]
      ) })), O(S, "href", x = /*$i18n*/
      r[0].t("pie.opcion.accesibilidad.url", { dominio: (
        /*VITE_APP_LIFERAY*/
        r[1]
      ) })), O(z, "href", le = /*$i18n*/
      r[0].t("pie.opcion.cookie.url", { dominio: (
        /*VITE_APP_LIFERAY*/
        r[1]
      ) })), O(v, "class", "sedeOpcionesPie"), O(te, "class", "sedeConformidadesPie"), O(h, "class", "sedeMenuOpcionesPie"), O(e, "class", "sedeBodyGeneral");
    },
    m(E, C) {
      he(E, e, C), P(e, t), P(t, i), P(t, n), P(t, a), P(a, o), P(o, s), P(s, l), P(t, g), P(t, h), P(h, m), P(m, b), P(h, y), P(h, v), P(v, _), P(_, k), P(k, F), P(v, I), P(v, H), P(H, M), P(M, X), P(v, c), P(v, p), P(p, S), P(S, R), P(v, Y), P(v, $), P($, z), P(z, ee), P(h, ie), P(h, te), ce || (Se = on(
        /*addStyle*/
        r[2].call(null, t)
      ), ce = !0);
    },
    p(E, [C]) {
      C & /*$i18n*/
      1 && u !== (u = /*$i18n*/
      E[0].t("pie.chat.texto") + "") && pe(l, u), C & /*$i18n*/
      1 && d !== (d = /*$i18n*/
      E[0].t("pie.chat.url")) && O(o, "href", d), C & /*$i18n*/
      1 && f !== (f = /*$i18n*/
      E[0].t("pie.chat.title")) && O(o, "title", f), C & /*$i18n*/
      1 && w !== (w = /*$i18n*/
      E[0].t("pie.diputacion-foral") + "") && pe(b, w), C & /*$i18n*/
      1 && j !== (j = /*$i18n*/
      E[0].t("pie.opcion.mapa-web.texto") + "") && pe(F, j), C & /*$i18n*/
      1 && B !== (B = /*$i18n*/
      E[0].t("pie.opcion.mapa-web.url", { dominio: (
        /*VITE_APP_LIFERAY*/
        E[1]
      ) })) && O(k, "href", B), C & /*$i18n*/
      1 && A !== (A = /*$i18n*/
      E[0].t("pie.opcion.aviso-legal.texto") + "") && pe(X, A), C & /*$i18n*/
      1 && G !== (G = /*$i18n*/
      E[0].t("pie.opcion.aviso-legal.url", { dominio: (
        /*VITE_APP_LIFERAY*/
        E[1]
      ) })) && O(M, "href", G), C & /*$i18n*/
      1 && L !== (L = /*$i18n*/
      E[0].t("pie.opcion.accesibilidad.texto") + "") && pe(R, L), C & /*$i18n*/
      1 && x !== (x = /*$i18n*/
      E[0].t("pie.opcion.accesibilidad.url", { dominio: (
        /*VITE_APP_LIFERAY*/
        E[1]
      ) })) && O(S, "href", x), C & /*$i18n*/
      1 && ge !== (ge = /*$i18n*/
      E[0].t("pie.opcion.cookie.texto") + "") && pe(ee, ge), C & /*$i18n*/
      1 && le !== (le = /*$i18n*/
      E[0].t("pie.opcion.cookie.url", { dominio: (
        /*VITE_APP_LIFERAY*/
        E[1]
      ) })) && O(z, "href", le);
    },
    i: D,
    o: D,
    d(E) {
      E && Oe(e), ce = !1, Se();
    }
  };
}
function Vr(r, e, t) {
  let i;
  an(r, Ut, (d) => t(0, i = d));
  let { menus: n = [] } = e, { language: a } = e, o;
  const s = Ue(a);
  let u = "";
  window.addEventListener("storage", (d) => {
    console.log(d), console.log(JSON.parse(window.localStorage.getItem("locale")));
  }), window.onstorage = (d) => {
    console.log(d), console.log(JSON.parse(window.localStorage.getItem("locale")));
  }, We(() => {
    window.addEventListener("storage", (h) => {
      console.log(h), console.log(JSON.parse(window.localStorage.getItem("locale")));
    }), window.onstorage = (h) => {
      console.log(h), console.log(JSON.parse(window.localStorage.getItem("locale")));
    };
    function d(h, m) {
      const w = localStorage.getItem(h);
      let b;
      try {
        b = w ? JSON.parse(w) : m;
      } catch (v) {
        console.error("Error parsing storedValue:", v), b = m;
      }
      const y = Ue(b);
      return y.subscribe((v) => {
        console.log("cambios"), localStorage.setItem(h, JSON.stringify(v));
      }), y;
    }
    const f = d("locale", {});
    function g(h) {
      h.subscribe((m) => {
        console.log(m);
      });
    }
    g(f);
  });
  function l(d) {
    return We(async () => {
      try {
        u = await (await fetch("https://raw.githubusercontent.com/Qleoz12/react-projects/main/ENETUM/main.scss")).text();
        const g = document.createElement("style");
        g.textContent = u, d.appendChild(g);
      } catch (f) {
        console.error("Failed to fetch CSS:", f);
      }
    }), {
      destroy() {
      }
      // Cleanup if necessary
      // Cleanup if necessary
    };
  }
  return r.$$set = (d) => {
    "menus" in d && t(3, n = d.menus), "language" in d && t(4, a = d.language);
  }, r.$$.update = () => {
    r.$$.dirty & /*$i18n, language*/
    17 && (console.log(a), s.set(a), qr(a), console.log(rn(Ut).language));
  }, [i, o, l, n, a];
}
class Jr extends at {
  constructor(e) {
    super(), zt(
      this,
      {
        target: this.shadowRoot,
        props: Ht(this.attributes),
        customElement: !0
      },
      Vr,
      Kr,
      it,
      { menus: 3, language: 4 },
      null
    ), e && (e.target && he(e.target, this, e.anchor), e.props && (this.$set(e.props), Le()));
  }
  static get observedAttributes() {
    return ["menus", "language"];
  }
  get menus() {
    return this.$$.ctx[3];
  }
  set menus(e) {
    this.$$set({ menus: e }), Le();
  }
  get language() {
    return this.$$.ctx[4];
  }
  set language(e) {
    this.$$set({ language: e }), Le();
  }
}
customElements.define("my-footer", Jr);
//export {
//  xn as MyComponent,
//  Jr as MyFooter
//};
