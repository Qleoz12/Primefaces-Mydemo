function tn(i, e) {
  for (var t = 0; t < e.length; t++) {
    const r = e[t];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const n in r)
        if (n !== "default" && !(n in i)) {
          const a = Object.getOwnPropertyDescriptor(r, n);
          a && Object.defineProperty(i, n, a.get ? a : {
            enumerable: !0,
            get: () => r[n]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }));
}
function B() {
}
function tt(i) {
  return i();
}
function ut() {
  return /* @__PURE__ */ Object.create(null);
}
function Le(i) {
  i.forEach(tt);
}
function Xe(i) {
  return typeof i == "function";
}
function nt(i, e) {
  return i != i ? e == e : i !== e || i && typeof i == "object" || typeof i == "function";
}
function nn(i) {
  return Object.keys(i).length === 0;
}
function Ut(i, ...e) {
  if (i == null)
    return B;
  const t = i.subscribe(...e);
  return t.unsubscribe ? () => t.unsubscribe() : t;
}
function rn(i) {
  let e;
  return Ut(i, (t) => e = t)(), e;
}
function an(i, e, t) {
  i.$$.on_destroy.push(Ut(e, t));
}
function _(i, e) {
  i.appendChild(e);
}
function ue(i, e, t) {
  i.insertBefore(e, t || null);
}
function ve(i) {
  i.parentNode && i.parentNode.removeChild(i);
}
function Bt(i, e) {
  for (let t = 0; t < i.length; t += 1)
    i[t] && i[t].d(e);
}
function I(i) {
  return document.createElement(i);
}
function te(i) {
  return document.createElementNS("http://www.w3.org/2000/svg", i);
}
function ie(i) {
  return document.createTextNode(i);
}
function le() {
  return ie(" ");
}
function on() {
  return ie("");
}
function O(i, e, t) {
  t == null ? i.removeAttribute(e) : i.getAttribute(e) !== t && i.setAttribute(e, t);
}
function sn(i) {
  return Array.from(i.childNodes);
}
function ce(i, e) {
  e = "" + e, i.wholeText !== e && (i.data = e);
}
function Mt(i) {
  const e = {};
  for (const t of i)
    e[t.name] = t.value;
  return e;
}
let xe;
function Oe(i) {
  xe = i;
}
function un() {
  if (!xe)
    throw new Error("Function called outside component initialization");
  return xe;
}
function Ht(i) {
  un().$$.on_mount.push(i);
}
const me = [], ft = [], Ne = [], lt = [], fn = Promise.resolve();
let Ge = !1;
function ln() {
  Ge || (Ge = !0, fn.then(Se));
}
function We(i) {
  Ne.push(i);
}
const Ke = /* @__PURE__ */ new Set();
let de = 0;
function Se() {
  if (de !== 0)
    return;
  const i = xe;
  do {
    try {
      for (; de < me.length; ) {
        const e = me[de];
        de++, Oe(e), cn(e.$$);
      }
    } catch (e) {
      throw me.length = 0, de = 0, e;
    }
    for (Oe(null), me.length = 0, de = 0; ft.length; )
      ft.pop()();
    for (let e = 0; e < Ne.length; e += 1) {
      const t = Ne[e];
      Ke.has(t) || (Ke.add(t), t());
    }
    Ne.length = 0;
  } while (me.length);
  for (; lt.length; )
    lt.pop()();
  Ge = !1, Ke.clear(), Oe(i);
}
function cn(i) {
  if (i.fragment !== null) {
    i.update(), Le(i.before_update);
    const e = i.dirty;
    i.dirty = [-1], i.fragment && i.fragment.p(i.ctx, e), i.after_update.forEach(We);
  }
}
const dn = /* @__PURE__ */ new Set();
function hn(i, e) {
  i && i.i && (dn.delete(i), i.i(e));
}
function gn(i, e, t, r) {
  const { fragment: n, after_update: a } = i.$$;
  n && n.m(e, t), r || We(() => {
    const o = i.$$.on_mount.map(tt).filter(Xe);
    i.$$.on_destroy ? i.$$.on_destroy.push(...o) : Le(o), i.$$.on_mount = [];
  }), a.forEach(We);
}
function pn(i, e) {
  const t = i.$$;
  t.fragment !== null && (Le(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function mn(i, e) {
  i.$$.dirty[0] === -1 && (me.push(i), ln(), i.$$.dirty.fill(0)), i.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function zt(i, e, t, r, n, a, o, s = [-1]) {
  const u = xe;
  Oe(i);
  const l = i.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: a,
    update: B,
    not_equal: n,
    bound: ut(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (u ? u.$$.context : [])),
    // everything else
    callbacks: ut(),
    dirty: s,
    skip_bound: !1,
    root: e.target || u.$$.root
  };
  o && o(l.root);
  let d = !1;
  if (l.ctx = t ? t(i, e.props || {}, (f, g, ...h) => {
    const m = h.length ? h[0] : g;
    return l.ctx && n(l.ctx[f], l.ctx[f] = m) && (!l.skip_bound && l.bound[f] && l.bound[f](m), d && mn(i, f)), g;
  }) : [], l.update(), d = !0, Le(l.before_update), l.fragment = r ? r(l.ctx) : !1, e.target) {
    if (e.hydrate) {
      const f = sn(e.target);
      l.fragment && l.fragment.l(f), f.forEach(ve);
    } else
      l.fragment && l.fragment.c();
    e.intro && hn(i.$$.fragment), gn(i, e.target, e.anchor, e.customElement), Se();
  }
  Oe(u);
}
let rt;
typeof HTMLElement == "function" && (rt = class extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const { on_mount: i } = this.$$;
    this.$$.on_disconnect = i.map(tt).filter(Xe);
    for (const e in this.$$.slotted)
      this.appendChild(this.$$.slotted[e]);
  }
  attributeChangedCallback(i, e, t) {
    this[i] = t;
  }
  disconnectedCallback() {
    Le(this.$$.on_disconnect);
  }
  $destroy() {
    pn(this, 1), this.$destroy = B;
  }
  $on(i, e) {
    if (!Xe(e))
      return B;
    const t = this.$$.callbacks[i] || (this.$$.callbacks[i] = []);
    return t.push(e), () => {
      const r = t.indexOf(e);
      r !== -1 && t.splice(r, 1);
    };
  }
  $set(i) {
    this.$$set && !nn(i) && (this.$$.skip_bound = !0, this.$$set(i), this.$$.skip_bound = !1);
  }
});
function vn(i, e, t) {
  const r = i.slice();
  return r[4] = e[t], r;
}
function yn(i, e, t) {
  const r = i.slice();
  return r[7] = e[t], r;
}
function bn(i) {
  let e;
  return {
    c() {
      e = te("line"), O(e, "class", "minor"), O(e, "y1", "42"), O(e, "y2", "45"), O(e, "transform", "rotate(" + 6 * /*minute*/
      (i[4] + /*offset*/
      i[7]) + ")");
    },
    m(t, r) {
      ue(t, e, r);
    },
    p: B,
    d(t) {
      t && ve(e);
    }
  };
}
function wn(i) {
  let e, t, r = [1, 2, 3, 4], n = [];
  for (let a = 0; a < 4; a += 1)
    n[a] = bn(yn(i, r, a));
  return {
    c() {
      e = te("line");
      for (let a = 0; a < 4; a += 1)
        n[a].c();
      t = on(), O(e, "class", "major"), O(e, "y1", "35"), O(e, "y2", "45"), O(e, "transform", "rotate(" + 30 * /*minute*/
      i[4] + ")");
    },
    m(a, o) {
      ue(a, e, o);
      for (let s = 0; s < 4; s += 1)
        n[s].m(a, o);
      ue(a, t, o);
    },
    p: B,
    d(a) {
      a && ve(e), Bt(n, a), a && ve(t);
    }
  };
}
function On(i) {
  let e, t, r, n, a, o, s, u, l, d, f = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55], g = [];
  for (let h = 0; h < 12; h += 1)
    g[h] = wn(vn(i, f, h));
  return {
    c() {
      e = te("svg"), t = te("circle");
      for (let h = 0; h < 12; h += 1)
        g[h].c();
      r = te("line"), a = te("line"), s = te("g"), u = te("line"), l = te("line"), this.c = B, O(t, "class", "clock-face"), O(t, "r", "48"), O(r, "class", "hour"), O(r, "y1", "2"), O(r, "y2", "-20"), O(r, "transform", n = "rotate(" + (30 * /*hours*/
      i[2] + /*minutes*/
      i[1] / 2) + ")"), O(a, "class", "minute"), O(a, "y1", "4"), O(a, "y2", "-30"), O(a, "transform", o = "rotate(" + (6 * /*minutes*/
      i[1] + /*seconds*/
      i[0] / 10) + ")"), O(u, "class", "second"), O(u, "y1", "10"), O(u, "y2", "-38"), O(l, "class", "second-counterweight"), O(l, "y1", "10"), O(l, "y2", "2"), O(s, "transform", d = "rotate(" + 6 * /*seconds*/
      i[0] + ")"), O(e, "viewBox", "-50 -50 100 100");
    },
    m(h, m) {
      ue(h, e, m), _(e, t);
      for (let b = 0; b < 12; b += 1)
        g[b].m(e, null);
      _(e, r), _(e, a), _(e, s), _(s, u), _(s, l);
    },
    p(h, [m]) {
      m & /*hours, minutes*/
      6 && n !== (n = "rotate(" + (30 * /*hours*/
      h[2] + /*minutes*/
      h[1] / 2) + ")") && O(r, "transform", n), m & /*minutes, seconds*/
      3 && o !== (o = "rotate(" + (6 * /*minutes*/
      h[1] + /*seconds*/
      h[0] / 10) + ")") && O(a, "transform", o), m & /*seconds*/
      1 && d !== (d = "rotate(" + 6 * /*seconds*/
      h[0] + ")") && O(s, "transform", d);
    },
    i: B,
    o: B,
    d(h) {
      h && ve(e), Bt(g, h);
    }
  };
}
function Sn(i, e, t) {
  let r, n, a, o = new Date();
  return Ht(() => {
    const s = setInterval(
      () => {
        t(3, o = new Date());
      },
      1e3
    );
    return () => {
      clearInterval(s);
    };
  }), i.$$.update = () => {
    i.$$.dirty & /*time*/
    8 && t(2, r = o.getHours()), i.$$.dirty & /*time*/
    8 && t(1, n = o.getMinutes()), i.$$.dirty & /*time*/
    8 && t(0, a = o.getSeconds());
  }, [a, n, r, o];
}
class kn extends rt {
  constructor(e) {
    super(), this.shadowRoot.innerHTML = "<style>svg{width:100%;height:100%}.clock-face{stroke:#333;fill:white}.minor{stroke:#999;stroke-width:0.5}.major{stroke:#333;stroke-width:1}.hour{stroke:#333}.minute{stroke:#666}.second,.second-counterweight{stroke:rgb(180,0,0)}.second-counterweight{stroke-width:3}</style>", zt(
      this,
      {
        target: this.shadowRoot,
        props: Mt(this.attributes),
        customElement: !0
      },
      Sn,
      On,
      nt,
      {},
      null
    ), e && e.target && ue(e.target, this, e.anchor);
  }
}
customElements.define("my-component", kn);
const he = [];
function Ie(i, e = B) {
  let t;
  const r = /* @__PURE__ */ new Set();
  function n(s) {
    if (nt(i, s) && (i = s, t)) {
      const u = !he.length;
      for (const l of r)
        l[1](), he.push(l, i);
      if (u) {
        for (let l = 0; l < he.length; l += 2)
          he[l][0](he[l + 1]);
        he.length = 0;
      }
    }
  }
  function a(s) {
    n(s(i));
  }
  function o(s, u = B) {
    const l = [s, u];
    return r.add(l), r.size === 1 && (t = e(n) || B), s(i), () => {
      r.delete(l), r.size === 0 && (t(), t = null);
    };
  }
  return { set: n, update: a, subscribe: o };
}
function V(i) {
  return V = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, V(i);
}
function J(i, e) {
  if (!(i instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function xn(i, e) {
  if (V(i) != "object" || !i)
    return i;
  var t = i[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(i, e || "default");
    if (V(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(i);
}
function qt(i) {
  var e = xn(i, "string");
  return V(e) == "symbol" ? e : String(e);
}
function ct(i, e) {
  for (var t = 0; t < e.length; t++) {
    var r = e[t];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(i, qt(r.key), r);
  }
}
function X(i, e, t) {
  return e && ct(i.prototype, e), t && ct(i, t), Object.defineProperty(i, "prototype", {
    writable: !1
  }), i;
}
function ae(i) {
  if (i === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return i;
}
function Ze(i, e) {
  return Ze = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, Ze(i, e);
}
function Be(i, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  i.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: i,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(i, "prototype", {
    writable: !1
  }), e && Ze(i, e);
}
function Re(i, e) {
  if (e && (V(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return ae(i);
}
function ee(i) {
  return ee = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, ee(i);
}
function se(i, e, t) {
  return e = qt(e), e in i ? Object.defineProperty(i, e, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : i[e] = t, i;
}
function Pn(i) {
  if (Array.isArray(i))
    return i;
}
function _n(i) {
  if (typeof Symbol < "u" && i[Symbol.iterator] != null || i["@@iterator"] != null)
    return Array.from(i);
}
function dt(i, e) {
  (e == null || e > i.length) && (e = i.length);
  for (var t = 0, r = new Array(e); t < e; t++)
    r[t] = i[t];
  return r;
}
function Ln(i, e) {
  if (i) {
    if (typeof i == "string")
      return dt(i, e);
    var t = Object.prototype.toString.call(i).slice(8, -1);
    if (t === "Object" && i.constructor && (t = i.constructor.name), t === "Map" || t === "Set")
      return Array.from(i);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return dt(i, e);
  }
}
function Rn() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function En(i) {
  return Pn(i) || _n(i) || Ln(i) || Rn();
}
function ht(i, e) {
  var t = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(i);
    e && (r = r.filter(function(n) {
      return Object.getOwnPropertyDescriptor(i, n).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function gt(i) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ht(Object(t), !0).forEach(function(r) {
      se(i, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(t)) : ht(Object(t)).forEach(function(r) {
      Object.defineProperty(i, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return i;
}
var jn = {
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
}, Cn = function() {
  function i(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    J(this, i), this.init(e, t);
  }
  return X(i, [{
    key: "init",
    value: function(t) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      this.prefix = r.prefix || "i18next:", this.logger = t || jn, this.options = r, this.debug = r.debug;
    }
  }, {
    key: "setDebug",
    value: function(t) {
      this.debug = t;
    }
  }, {
    key: "log",
    value: function() {
      for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
        r[n] = arguments[n];
      return this.forward(r, "log", "", !0);
    }
  }, {
    key: "warn",
    value: function() {
      for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
        r[n] = arguments[n];
      return this.forward(r, "warn", "", !0);
    }
  }, {
    key: "error",
    value: function() {
      for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
        r[n] = arguments[n];
      return this.forward(r, "error", "");
    }
  }, {
    key: "deprecate",
    value: function() {
      for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
        r[n] = arguments[n];
      return this.forward(r, "warn", "WARNING DEPRECATED: ", !0);
    }
  }, {
    key: "forward",
    value: function(t, r, n, a) {
      return a && !this.debug ? null : (typeof t[0] == "string" && (t[0] = "".concat(n).concat(this.prefix, " ").concat(t[0])), this.logger[r](t));
    }
  }, {
    key: "create",
    value: function(t) {
      return new i(this.logger, gt(gt({}, {
        prefix: "".concat(this.prefix, ":").concat(t, ":")
      }), this.options));
    }
  }, {
    key: "clone",
    value: function(t) {
      return t = t || this.options, t.prefix = t.prefix || this.prefix, new i(this.logger, t);
    }
  }]), i;
}(), Y = new Cn(), oe = function() {
  function i() {
    J(this, i), this.observers = {};
  }
  return X(i, [{
    key: "on",
    value: function(t, r) {
      var n = this;
      return t.split(" ").forEach(function(a) {
        n.observers[a] = n.observers[a] || [], n.observers[a].push(r);
      }), this;
    }
  }, {
    key: "off",
    value: function(t, r) {
      if (this.observers[t]) {
        if (!r) {
          delete this.observers[t];
          return;
        }
        this.observers[t] = this.observers[t].filter(function(n) {
          return n !== r;
        });
      }
    }
  }, {
    key: "emit",
    value: function(t) {
      for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
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
  }]), i;
}();
function ye() {
  var i, e, t = new Promise(function(r, n) {
    i = r, e = n;
  });
  return t.resolve = i, t.reject = e, t;
}
function pt(i) {
  return i == null ? "" : "" + i;
}
function An(i, e, t) {
  i.forEach(function(r) {
    e[r] && (t[r] = e[r]);
  });
}
function it(i, e, t) {
  function r(s) {
    return s && s.indexOf("###") > -1 ? s.replace(/###/g, ".") : s;
  }
  function n() {
    return !i || typeof i == "string";
  }
  for (var a = typeof e != "string" ? [].concat(e) : e.split("."); a.length > 1; ) {
    if (n())
      return {};
    var o = r(a.shift());
    !i[o] && t && (i[o] = new t()), Object.prototype.hasOwnProperty.call(i, o) ? i = i[o] : i = {};
  }
  return n() ? {} : {
    obj: i,
    k: r(a.shift())
  };
}
function mt(i, e, t) {
  var r = it(i, e, Object), n = r.obj, a = r.k;
  n[a] = t;
}
function Nn(i, e, t, r) {
  var n = it(i, e, Object), a = n.obj, o = n.k;
  a[o] = a[o] || [], r && (a[o] = a[o].concat(t)), r || a[o].push(t);
}
function De(i, e) {
  var t = it(i, e), r = t.obj, n = t.k;
  if (r)
    return r[n];
}
function vt(i, e, t) {
  var r = De(i, t);
  return r !== void 0 ? r : De(e, t);
}
function Kt(i, e, t) {
  for (var r in e)
    r !== "__proto__" && r !== "constructor" && (r in i ? typeof i[r] == "string" || i[r] instanceof String || typeof e[r] == "string" || e[r] instanceof String ? t && (i[r] = e[r]) : Kt(i[r], e[r], t) : i[r] = e[r]);
  return i;
}
function ge(i) {
  return i.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
var Tn = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
function In(i) {
  return typeof i == "string" ? i.replace(/[&<>"'\/]/g, function(e) {
    return Tn[e];
  }) : i;
}
var Me = typeof window < "u" && window.navigator && typeof window.navigator.userAgentData > "u" && window.navigator.userAgent && window.navigator.userAgent.indexOf("MSIE") > -1, Dn = [" ", ",", "?", "!", ";"];
function Fn(i, e, t) {
  e = e || "", t = t || "";
  var r = Dn.filter(function(s) {
    return e.indexOf(s) < 0 && t.indexOf(s) < 0;
  });
  if (r.length === 0)
    return !0;
  var n = new RegExp("(".concat(r.map(function(s) {
    return s === "?" ? "\\?" : s;
  }).join("|"), ")")), a = !n.test(i);
  if (!a) {
    var o = i.indexOf(t);
    o > 0 && !n.test(i.substring(0, o)) && (a = !0);
  }
  return a;
}
function yt(i, e) {
  var t = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(i);
    e && (r = r.filter(function(n) {
      return Object.getOwnPropertyDescriptor(i, n).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function Ce(i) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? yt(Object(t), !0).forEach(function(r) {
      se(i, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(t)) : yt(Object(t)).forEach(function(r) {
      Object.defineProperty(i, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return i;
}
function $n(i) {
  var e = Un();
  return function() {
    var r = ee(i), n;
    if (e) {
      var a = ee(this).constructor;
      n = Reflect.construct(r, arguments, a);
    } else
      n = r.apply(this, arguments);
    return Re(this, n);
  };
}
function Un() {
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
function Vt(i, e) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (i) {
    if (i[e])
      return i[e];
    for (var r = e.split(t), n = i, a = 0; a < r.length; ++a) {
      if (!n || typeof n[r[a]] == "string" && a + 1 < r.length)
        return;
      if (n[r[a]] === void 0) {
        for (var o = 2, s = r.slice(a, a + o).join(t), u = n[s]; u === void 0 && r.length > a + o; )
          o++, s = r.slice(a, a + o).join(t), u = n[s];
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
        var l = r.slice(a + o).join(t);
        return l ? Vt(u, l, t) : void 0;
      }
      n = n[r[a]];
    }
    return n;
  }
}
var Bn = function(i) {
  Be(t, i);
  var e = $n(t);
  function t(r) {
    var n, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      ns: ["translation"],
      defaultNS: "translation"
    };
    return J(this, t), n = e.call(this), Me && oe.call(ae(n)), n.data = r || {}, n.options = a, n.options.keySeparator === void 0 && (n.options.keySeparator = "."), n.options.ignoreJSONStructure === void 0 && (n.options.ignoreJSONStructure = !0), n;
  }
  return X(t, [{
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
      var f = De(this.data, d);
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
      o && (d = d.concat(l ? o.split(l) : o)), n.indexOf(".") > -1 && (d = n.split("."), s = a, a = d[1]), this.addNamespaces(a), mt(this.data, d, s), u.silent || this.emit("added", n, a, o, s);
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
      var f = De(this.data, d) || {};
      s ? Kt(f, o, u) : f = Ce(Ce({}, f), o), mt(this.data, d, f), l.silent || this.emit("added", n, a, o);
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
      return a || (a = this.options.defaultNS), this.options.compatibilityAPI === "v1" ? Ce(Ce({}, {}), this.getResource(n, a)) : this.getResource(n, a);
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
}(oe), Jt = {
  processors: {},
  addPostProcessor: function(e) {
    this.processors[e.name] = e;
  },
  handle: function(e, t, r, n, a) {
    var o = this;
    return e.forEach(function(s) {
      o.processors[s] && (t = o.processors[s].process(t, r, n, a));
    }), t;
  }
};
function bt(i, e) {
  var t = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(i);
    e && (r = r.filter(function(n) {
      return Object.getOwnPropertyDescriptor(i, n).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function U(i) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? bt(Object(t), !0).forEach(function(r) {
      se(i, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(t)) : bt(Object(t)).forEach(function(r) {
      Object.defineProperty(i, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return i;
}
function Mn(i) {
  var e = Hn();
  return function() {
    var r = ee(i), n;
    if (e) {
      var a = ee(this).constructor;
      n = Reflect.construct(r, arguments, a);
    } else
      n = r.apply(this, arguments);
    return Re(this, n);
  };
}
function Hn() {
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
var wt = {}, Ot = function(i) {
  Be(t, i);
  var e = Mn(t);
  function t(r) {
    var n, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return J(this, t), n = e.call(this), Me && oe.call(ae(n)), An(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], r, ae(n)), n.options = a, n.options.keySeparator === void 0 && (n.options.keySeparator = "."), n.logger = Y.create("translator"), n;
  }
  return X(t, [{
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
      var s = a.keySeparator !== void 0 ? a.keySeparator : this.options.keySeparator, u = a.ns || this.options.defaultNS || [], l = o && n.indexOf(o) > -1, d = !this.options.userDefinedKeySeparator && !a.keySeparator && !this.options.userDefinedNsSeparator && !a.nsSeparator && !Fn(n, o, s);
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
      if (V(a) !== "object" && this.options.overloadTranslationOptionHandler && (a = this.options.overloadTranslationOptionHandler(arguments)), a || (a = {}), n == null)
        return "";
      Array.isArray(n) || (n = [String(n)]);
      var u = a.returnDetails !== void 0 ? a.returnDetails : this.options.returnDetails, l = a.keySeparator !== void 0 ? a.keySeparator : this.options.keySeparator, d = this.extractFromKey(n[n.length - 1], a), f = d.key, g = d.namespaces, h = g[g.length - 1], m = a.lng || this.language, b = a.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
      if (m && m.toLowerCase() === "cimode") {
        if (b) {
          var w = a.nsSeparator || this.options.nsSeparator;
          return u ? (v.res = "".concat(h).concat(w).concat(f), v) : "".concat(h).concat(w).concat(f);
        }
        return u ? (v.res = f, v) : f;
      }
      var v = this.resolve(n, a), y = v && v.res, P = v && v.usedKey || f, k = v && v.exactUsedKey || f, j = Object.prototype.toString.apply(y), D = ["[object Number]", "[object Function]", "[object RegExp]"], F = a.joinArrays !== void 0 ? a.joinArrays : this.options.joinArrays, A = !this.i18nFormat || this.i18nFormat.handleAsObject, H = typeof y != "string" && typeof y != "boolean" && typeof y != "number";
      if (A && y && H && D.indexOf(j) < 0 && !(typeof F == "string" && j === "[object Array]")) {
        if (!a.returnObjects && !this.options.returnObjects) {
          this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
          var M = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(P, y, U(U({}, a), {}, {
            ns: g
          })) : "key '".concat(f, " (").concat(this.language, ")' returned an object instead of string.");
          return u ? (v.res = M, v) : M;
        }
        if (l) {
          var T = j === "[object Array]", G = T ? [] : {}, z = T ? k : P;
          for (var c in y)
            if (Object.prototype.hasOwnProperty.call(y, c)) {
              var p = "".concat(z).concat(l).concat(c);
              G[c] = this.translate(p, U(U({}, a), {
                joinArrays: !1,
                ns: g
              })), G[c] === p && (G[c] = y[c]);
            }
          y = G;
        }
      } else if (A && typeof F == "string" && j === "[object Array]")
        y = y.join(F), y && (y = this.extendTranslation(y, n, a, o));
      else {
        var S = !1, L = !1, R = a.count !== void 0 && typeof a.count != "string", x = t.hasDefaultValue(a), q = R ? this.pluralResolver.getSuffix(m, a.count, a) : "", $ = a["defaultValue".concat(q)] || a.defaultValue;
        !this.isValidLookup(y) && x && (S = !0, y = $), this.isValidLookup(y) || (L = !0, y = f);
        var W = a.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey, Ee = W && L ? void 0 : y, Z = x && $ !== y && this.options.updateMissing;
        if (L || S || Z) {
          if (this.logger.log(Z ? "updateKey" : "missingKey", m, h, f, Z ? $ : y), l) {
            var E = this.resolve(f, U(U({}, a), {}, {
              keySeparator: !1
            }));
            E && E.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
          }
          var C = [], je = this.languageUtils.getFallbackCodes(this.options.fallbackLng, a.lng || this.language);
          if (this.options.saveMissingTo === "fallback" && je && je[0])
            for (var He = 0; He < je.length; He++)
              C.push(je[He]);
          else
            this.options.saveMissingTo === "all" ? C = this.languageUtils.toResolveHierarchy(a.lng || this.language) : C.push(a.lng || this.language);
          var at = function(fe, qe, ot) {
            var st = x && ot !== y ? ot : Ee;
            s.options.missingKeyHandler ? s.options.missingKeyHandler(fe, h, qe, st, Z, a) : s.backendConnector && s.backendConnector.saveMissing && s.backendConnector.saveMissing(fe, h, qe, st, Z, a), s.emit("missingKey", fe, h, qe, y);
          };
          this.options.saveMissing && (this.options.saveMissingPlurals && R ? C.forEach(function(ze) {
            s.pluralResolver.getSuffixes(ze, a).forEach(function(fe) {
              at([ze], f + fe, a["defaultValue".concat(fe)] || $);
            });
          }) : at(C, f, $));
        }
        y = this.extendTranslation(y, n, a, v, o), L && y === f && this.options.appendNamespaceToMissingKey && (y = "".concat(h, ":").concat(f)), (L || S) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? y = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? "".concat(h, ":").concat(f) : f, S ? y : void 0) : y = this.options.parseMissingKeyHandler(y));
      }
      return u ? (v.res = y, v) : y;
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
          var m = n.match(this.interpolator.nestingRegexp), b = m && m.length;
          f < b && (o.nest = !1);
        }
        o.nest !== !1 && (n = this.interpolator.nest(n, function() {
          for (var y = arguments.length, P = new Array(y), k = 0; k < y; k++)
            P[k] = arguments[k];
          return u && u[0] === P[0] && !o.context ? (l.logger.warn("It seems you are nesting recursively key: ".concat(P[0], " in key: ").concat(a[0])), null) : l.translate.apply(l, P.concat([a]));
        }, o)), o.interpolation && this.interpolator.reset();
      }
      var w = o.postProcess || this.options.postProcess, v = typeof w == "string" ? [w] : w;
      return n != null && v && v.length && o.applyPostProcessor !== !1 && (n = Jt.handle(v, n, a, this.options && this.options.postProcessPassResolved ? U({
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
          var b = h.namespaces;
          a.options.fallbackNS && (b = b.concat(a.options.fallbackNS));
          var w = o.count !== void 0 && typeof o.count != "string", v = w && !o.ordinal && o.count === 0 && a.pluralResolver.shouldUseIntlApi(), y = o.context !== void 0 && (typeof o.context == "string" || typeof o.context == "number") && o.context !== "", P = o.lngs ? o.lngs : a.languageUtils.toResolveHierarchy(o.lng || a.language, o.fallbackLng);
          b.forEach(function(k) {
            a.isValidLookup(s) || (f = k, !wt["".concat(P[0], "-").concat(k)] && a.utils && a.utils.hasLoadedNamespace && !a.utils.hasLoadedNamespace(f) && (wt["".concat(P[0], "-").concat(k)] = !0, a.logger.warn('key "'.concat(u, '" for languages "').concat(P.join(", "), `" won't get resolved as namespace "`).concat(f, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), P.forEach(function(j) {
              if (!a.isValidLookup(s)) {
                d = j;
                var D = [m];
                if (a.i18nFormat && a.i18nFormat.addLookupKeys)
                  a.i18nFormat.addLookupKeys(D, m, j, k, o);
                else {
                  var F;
                  w && (F = a.pluralResolver.getSuffix(j, o.count, o));
                  var A = "".concat(a.options.pluralSeparator, "zero");
                  if (w && (D.push(m + F), v && D.push(m + A)), y) {
                    var H = "".concat(m).concat(a.options.contextSeparator).concat(o.context);
                    D.push(H), w && (D.push(H + F), v && D.push(H + A));
                  }
                }
                for (var M; M = D.pop(); )
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
}(oe);
function Ve(i) {
  return i.charAt(0).toUpperCase() + i.slice(1);
}
var zn = function() {
  function i(e) {
    J(this, i), this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = Y.create("languageUtils");
  }
  return X(i, [{
    key: "getScriptPartFromCode",
    value: function(t) {
      if (!t || t.indexOf("-") < 0)
        return null;
      var r = t.split("-");
      return r.length === 2 || (r.pop(), r[r.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(r.join("-"));
    }
  }, {
    key: "getLanguagePartFromCode",
    value: function(t) {
      if (!t || t.indexOf("-") < 0)
        return t;
      var r = t.split("-");
      return this.formatLanguageCode(r[0]);
    }
  }, {
    key: "formatLanguageCode",
    value: function(t) {
      if (typeof t == "string" && t.indexOf("-") > -1) {
        var r = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"], n = t.split("-");
        return this.options.lowerCaseLng ? n = n.map(function(a) {
          return a.toLowerCase();
        }) : n.length === 2 ? (n[0] = n[0].toLowerCase(), n[1] = n[1].toUpperCase(), r.indexOf(n[1].toLowerCase()) > -1 && (n[1] = Ve(n[1].toLowerCase()))) : n.length === 3 && (n[0] = n[0].toLowerCase(), n[1].length === 2 && (n[1] = n[1].toUpperCase()), n[0] !== "sgn" && n[2].length === 2 && (n[2] = n[2].toUpperCase()), r.indexOf(n[1].toLowerCase()) > -1 && (n[1] = Ve(n[1].toLowerCase())), r.indexOf(n[2].toLowerCase()) > -1 && (n[2] = Ve(n[2].toLowerCase()))), n.join("-");
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
      var r = this;
      if (!t)
        return null;
      var n;
      return t.forEach(function(a) {
        if (!n) {
          var o = r.formatLanguageCode(a);
          (!r.options.supportedLngs || r.isSupportedCode(o)) && (n = o);
        }
      }), !n && this.options.supportedLngs && t.forEach(function(a) {
        if (!n) {
          var o = r.getLanguagePartFromCode(a);
          if (r.isSupportedCode(o))
            return n = o;
          n = r.options.supportedLngs.find(function(s) {
            if (s.indexOf(o) === 0)
              return s;
          });
        }
      }), n || (n = this.getFallbackCodes(this.options.fallbackLng)[0]), n;
    }
  }, {
    key: "getFallbackCodes",
    value: function(t, r) {
      if (!t)
        return [];
      if (typeof t == "function" && (t = t(r)), typeof t == "string" && (t = [t]), Object.prototype.toString.apply(t) === "[object Array]")
        return t;
      if (!r)
        return t.default || [];
      var n = t[r];
      return n || (n = t[this.getScriptPartFromCode(r)]), n || (n = t[this.formatLanguageCode(r)]), n || (n = t[this.getLanguagePartFromCode(r)]), n || (n = t.default), n || [];
    }
  }, {
    key: "toResolveHierarchy",
    value: function(t, r) {
      var n = this, a = this.getFallbackCodes(r || this.options.fallbackLng || [], t), o = [], s = function(l) {
        l && (n.isSupportedCode(l) ? o.push(l) : n.logger.warn("rejecting language code not found in supportedLngs: ".concat(l)));
      };
      return typeof t == "string" && t.indexOf("-") > -1 ? (this.options.load !== "languageOnly" && s(this.formatLanguageCode(t)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && s(this.getScriptPartFromCode(t)), this.options.load !== "currentOnly" && s(this.getLanguagePartFromCode(t))) : typeof t == "string" && s(this.formatLanguageCode(t)), a.forEach(function(u) {
        o.indexOf(u) < 0 && s(n.formatLanguageCode(u));
      }), o;
    }
  }]), i;
}(), qn = [{
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
}], Kn = {
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
}, Vn = ["v1", "v2", "v3"], St = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
function Jn() {
  var i = {};
  return qn.forEach(function(e) {
    e.lngs.forEach(function(t) {
      i[t] = {
        numbers: e.nr,
        plurals: Kn[e.fc]
      };
    });
  }), i;
}
var Xn = function() {
  function i(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    J(this, i), this.languageUtils = e, this.options = t, this.logger = Y.create("pluralResolver"), (!this.options.compatibilityJSON || this.options.compatibilityJSON === "v4") && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = Jn();
  }
  return X(i, [{
    key: "addRule",
    value: function(t, r) {
      this.rules[t] = r;
    }
  }, {
    key: "getRule",
    value: function(t) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (this.shouldUseIntlApi())
        try {
          return new Intl.PluralRules(t, {
            type: r.ordinal ? "ordinal" : "cardinal"
          });
        } catch {
          return;
        }
      return this.rules[t] || this.rules[this.languageUtils.getLanguagePartFromCode(t)];
    }
  }, {
    key: "needsPlural",
    value: function(t) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = this.getRule(t, r);
      return this.shouldUseIntlApi() ? n && n.resolvedOptions().pluralCategories.length > 1 : n && n.numbers.length > 1;
    }
  }, {
    key: "getPluralFormsOfKey",
    value: function(t, r) {
      var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return this.getSuffixes(t, n).map(function(a) {
        return "".concat(r).concat(a);
      });
    }
  }, {
    key: "getSuffixes",
    value: function(t) {
      var r = this, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = this.getRule(t, n);
      return a ? this.shouldUseIntlApi() ? a.resolvedOptions().pluralCategories.sort(function(o, s) {
        return St[o] - St[s];
      }).map(function(o) {
        return "".concat(r.options.prepend).concat(o);
      }) : a.numbers.map(function(o) {
        return r.getSuffix(t, o, n);
      }) : [];
    }
  }, {
    key: "getSuffix",
    value: function(t, r) {
      var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = this.getRule(t, n);
      return a ? this.shouldUseIntlApi() ? "".concat(this.options.prepend).concat(a.select(r)) : this.getSuffixRetroCompatible(a, r) : (this.logger.warn("no plural rule found for: ".concat(t)), "");
    }
  }, {
    key: "getSuffixRetroCompatible",
    value: function(t, r) {
      var n = this, a = t.noAbs ? t.plurals(r) : t.plurals(Math.abs(r)), o = t.numbers[a];
      this.options.simplifyPluralSuffix && t.numbers.length === 2 && t.numbers[0] === 1 && (o === 2 ? o = "plural" : o === 1 && (o = ""));
      var s = function() {
        return n.options.prepend && o.toString() ? n.options.prepend + o.toString() : o.toString();
      };
      return this.options.compatibilityJSON === "v1" ? o === 1 ? "" : typeof o == "number" ? "_plural_".concat(o.toString()) : s() : this.options.compatibilityJSON === "v2" || this.options.simplifyPluralSuffix && t.numbers.length === 2 && t.numbers[0] === 1 ? s() : this.options.prepend && a.toString() ? this.options.prepend + a.toString() : a.toString();
    }
  }, {
    key: "shouldUseIntlApi",
    value: function() {
      return !Vn.includes(this.options.compatibilityJSON);
    }
  }]), i;
}();
function kt(i, e) {
  var t = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(i);
    e && (r = r.filter(function(n) {
      return Object.getOwnPropertyDescriptor(i, n).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function K(i) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? kt(Object(t), !0).forEach(function(r) {
      se(i, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(t)) : kt(Object(t)).forEach(function(r) {
      Object.defineProperty(i, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return i;
}
var Gn = function() {
  function i() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    J(this, i), this.logger = Y.create("interpolator"), this.options = e, this.format = e.interpolation && e.interpolation.format || function(t) {
      return t;
    }, this.init(e);
  }
  return X(i, [{
    key: "init",
    value: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      t.interpolation || (t.interpolation = {
        escapeValue: !0
      });
      var r = t.interpolation;
      this.escape = r.escape !== void 0 ? r.escape : In, this.escapeValue = r.escapeValue !== void 0 ? r.escapeValue : !0, this.useRawValueToEscape = r.useRawValueToEscape !== void 0 ? r.useRawValueToEscape : !1, this.prefix = r.prefix ? ge(r.prefix) : r.prefixEscaped || "{{", this.suffix = r.suffix ? ge(r.suffix) : r.suffixEscaped || "}}", this.formatSeparator = r.formatSeparator ? r.formatSeparator : r.formatSeparator || ",", this.unescapePrefix = r.unescapeSuffix ? "" : r.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : r.unescapeSuffix || "", this.nestingPrefix = r.nestingPrefix ? ge(r.nestingPrefix) : r.nestingPrefixEscaped || ge("$t("), this.nestingSuffix = r.nestingSuffix ? ge(r.nestingSuffix) : r.nestingSuffixEscaped || ge(")"), this.nestingOptionsSeparator = r.nestingOptionsSeparator ? r.nestingOptionsSeparator : r.nestingOptionsSeparator || ",", this.maxReplaces = r.maxReplaces ? r.maxReplaces : 1e3, this.alwaysFormat = r.alwaysFormat !== void 0 ? r.alwaysFormat : !1, this.resetRegExp();
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
      var r = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix);
      this.regexpUnescape = new RegExp(r, "g");
      var n = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
      this.nestingRegexp = new RegExp(n, "g");
    }
  }, {
    key: "interpolate",
    value: function(t, r, n, a) {
      var o = this, s, u, l, d = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
      function f(w) {
        return w.replace(/\$/g, "$$$$");
      }
      var g = function(v) {
        if (v.indexOf(o.formatSeparator) < 0) {
          var y = vt(r, d, v);
          return o.alwaysFormat ? o.format(y, void 0, n, K(K(K({}, a), r), {}, {
            interpolationkey: v
          })) : y;
        }
        var P = v.split(o.formatSeparator), k = P.shift().trim(), j = P.join(o.formatSeparator).trim();
        return o.format(vt(r, d, k), j, n, K(K(K({}, a), r), {}, {
          interpolationkey: k
        }));
      };
      this.resetRegExp();
      var h = a && a.missingInterpolationHandler || this.options.missingInterpolationHandler, m = a && a.interpolation && a.interpolation.skipOnVariables !== void 0 ? a.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables, b = [{
        regex: this.regexpUnescape,
        safeValue: function(v) {
          return f(v);
        }
      }, {
        regex: this.regexp,
        safeValue: function(v) {
          return o.escapeValue ? f(o.escape(v)) : f(v);
        }
      }];
      return b.forEach(function(w) {
        for (l = 0; s = w.regex.exec(t); ) {
          var v = s[1].trim();
          if (u = g(v), u === void 0)
            if (typeof h == "function") {
              var y = h(t, s, a);
              u = typeof y == "string" ? y : "";
            } else if (a && a.hasOwnProperty(v))
              u = "";
            else if (m) {
              u = s[0];
              continue;
            } else
              o.logger.warn("missed to pass in variable ".concat(v, " for interpolating ").concat(t)), u = "";
          else
            typeof u != "string" && !o.useRawValueToEscape && (u = pt(u));
          var P = w.safeValue(u);
          if (t = t.replace(s[0], P), m ? (w.regex.lastIndex += u.length, w.regex.lastIndex -= s[0].length) : w.regex.lastIndex = 0, l++, l >= o.maxReplaces)
            break;
        }
      }), t;
    }
  }, {
    key: "nest",
    value: function(t, r) {
      var n = this, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o, s, u = K({}, a);
      u.applyPostProcessor = !1, delete u.defaultValue;
      function l(h, m) {
        var b = this.nestingOptionsSeparator;
        if (h.indexOf(b) < 0)
          return h;
        var w = h.split(new RegExp("".concat(b, "[ ]*{"))), v = "{".concat(w[1]);
        h = w[0], v = this.interpolate(v, u);
        var y = v.match(/'/g), P = v.match(/"/g);
        (y && y.length % 2 === 0 && !P || P.length % 2 !== 0) && (v = v.replace(/'/g, '"'));
        try {
          u = JSON.parse(v), m && (u = K(K({}, m), u));
        } catch (k) {
          return this.logger.warn("failed parsing options string in nesting for key ".concat(h), k), "".concat(h).concat(b).concat(v);
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
        if (s = r(l.call(this, o[1].trim(), u), u), s && o[0] === t && typeof s != "string")
          return s;
        typeof s != "string" && (s = pt(s)), s || (this.logger.warn("missed to resolve ".concat(o[1], " for nesting ").concat(t)), s = ""), f && (s = d.reduce(function(h, m) {
          return n.format(h, m, a.lng, K(K({}, a), {}, {
            interpolationkey: o[1].trim()
          }));
        }, s.trim())), t = t.replace(o[0], s), this.regexp.lastIndex = 0;
      }
      return t;
    }
  }]), i;
}();
function xt(i, e) {
  var t = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(i);
    e && (r = r.filter(function(n) {
      return Object.getOwnPropertyDescriptor(i, n).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function re(i) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? xt(Object(t), !0).forEach(function(r) {
      se(i, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(t)) : xt(Object(t)).forEach(function(r) {
      Object.defineProperty(i, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return i;
}
function Wn(i) {
  var e = i.toLowerCase().trim(), t = {};
  if (i.indexOf("(") > -1) {
    var r = i.split("(");
    e = r[0].toLowerCase().trim();
    var n = r[1].substring(0, r[1].length - 1);
    if (e === "currency" && n.indexOf(":") < 0)
      t.currency || (t.currency = n.trim());
    else if (e === "relativetime" && n.indexOf(":") < 0)
      t.range || (t.range = n.trim());
    else {
      var a = n.split(";");
      a.forEach(function(o) {
        if (o) {
          var s = o.split(":"), u = En(s), l = u[0], d = u.slice(1), f = d.join(":").trim().replace(/^'+|'+$/g, "");
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
function pe(i) {
  var e = {};
  return function(r, n, a) {
    var o = n + JSON.stringify(a), s = e[o];
    return s || (s = i(n, a), e[o] = s), s(r);
  };
}
var Zn = function() {
  function i() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    J(this, i), this.logger = Y.create("formatter"), this.options = e, this.formats = {
      number: pe(function(t, r) {
        var n = new Intl.NumberFormat(t, r);
        return function(a) {
          return n.format(a);
        };
      }),
      currency: pe(function(t, r) {
        var n = new Intl.NumberFormat(t, re(re({}, r), {}, {
          style: "currency"
        }));
        return function(a) {
          return n.format(a);
        };
      }),
      datetime: pe(function(t, r) {
        var n = new Intl.DateTimeFormat(t, re({}, r));
        return function(a) {
          return n.format(a);
        };
      }),
      relativetime: pe(function(t, r) {
        var n = new Intl.RelativeTimeFormat(t, re({}, r));
        return function(a) {
          return n.format(a, r.range || "day");
        };
      }),
      list: pe(function(t, r) {
        var n = new Intl.ListFormat(t, re({}, r));
        return function(a) {
          return n.format(a);
        };
      })
    }, this.init(e);
  }
  return X(i, [{
    key: "init",
    value: function(t) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        interpolation: {}
      }, n = r.interpolation;
      this.formatSeparator = n.formatSeparator ? n.formatSeparator : n.formatSeparator || ",";
    }
  }, {
    key: "add",
    value: function(t, r) {
      this.formats[t.toLowerCase().trim()] = r;
    }
  }, {
    key: "addCached",
    value: function(t, r) {
      this.formats[t.toLowerCase().trim()] = pe(r);
    }
  }, {
    key: "format",
    value: function(t, r, n, a) {
      var o = this, s = r.split(this.formatSeparator), u = s.reduce(function(l, d) {
        var f = Wn(d), g = f.formatName, h = f.formatOptions;
        if (o.formats[g]) {
          var m = l;
          try {
            var b = a && a.formatParams && a.formatParams[a.interpolationkey] || {}, w = b.locale || b.lng || a.locale || a.lng || n;
            m = o.formats[g](l, w, re(re(re({}, h), a), b));
          } catch (v) {
            o.logger.warn(v);
          }
          return m;
        } else
          o.logger.warn("there was no format function for ".concat(g));
        return l;
      }, t);
      return u;
    }
  }]), i;
}();
function Pt(i, e) {
  var t = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(i);
    e && (r = r.filter(function(n) {
      return Object.getOwnPropertyDescriptor(i, n).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function _t(i) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Pt(Object(t), !0).forEach(function(r) {
      se(i, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(t)) : Pt(Object(t)).forEach(function(r) {
      Object.defineProperty(i, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return i;
}
function Qn(i) {
  var e = Yn();
  return function() {
    var r = ee(i), n;
    if (e) {
      var a = ee(this).constructor;
      n = Reflect.construct(r, arguments, a);
    } else
      n = r.apply(this, arguments);
    return Re(this, n);
  };
}
function Yn() {
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
function er(i, e) {
  i.pending[e] !== void 0 && (delete i.pending[e], i.pendingCount--);
}
var tr = function(i) {
  Be(t, i);
  var e = Qn(t);
  function t(r, n, a) {
    var o, s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return J(this, t), o = e.call(this), Me && oe.call(ae(o)), o.backend = r, o.store = n, o.services = a, o.languageUtils = a.languageUtils, o.options = s, o.logger = Y.create("backendConnector"), o.waitingReads = [], o.maxParallelReads = s.maxParallelReads || 10, o.readingCalls = 0, o.maxRetries = s.maxRetries >= 0 ? s.maxRetries : 5, o.retryTimeout = s.retryTimeout >= 1 ? s.retryTimeout : 350, o.state = {}, o.queue = [], o.backend && o.backend.init && o.backend.init(a, s.backend, s), o;
  }
  return X(t, [{
    key: "queueLoad",
    value: function(n, a, o, s) {
      var u = this, l = {}, d = {}, f = {}, g = {};
      return n.forEach(function(h) {
        var m = !0;
        a.forEach(function(b) {
          var w = "".concat(h, "|").concat(b);
          !o.reload && u.store.hasResourceBundle(h, b) ? u.state[w] = 2 : u.state[w] < 0 || (u.state[w] === 1 ? d[w] === void 0 && (d[w] = !0) : (u.state[w] = 1, m = !1, d[w] === void 0 && (d[w] = !0), l[w] === void 0 && (l[w] = !0), g[b] === void 0 && (g[b] = !0)));
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
        Nn(f.loaded, [u], l), er(f, n), a && f.errors.push(a), f.pendingCount === 0 && !f.done && (Object.keys(f.loaded).forEach(function(g) {
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
      o == null || o === "" || (this.backend && this.backend.create && this.backend.create(n, a, o, s, null, _t(_t({}, l), {}, {
        isUpdate: u
      })), !(!n || !n[0]) && this.store.addResource(n[0], a, o, s));
    }
  }]), t;
}(oe);
function nr() {
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
      if (V(e[1]) === "object" && (t = e[1]), typeof e[1] == "string" && (t.defaultValue = e[1]), typeof e[2] == "string" && (t.tDescription = e[2]), V(e[2]) === "object" || V(e[3]) === "object") {
        var r = e[3] || e[2];
        Object.keys(r).forEach(function(n) {
          t[n] = r[n];
        });
      }
      return t;
    },
    interpolation: {
      escapeValue: !0,
      format: function(e, t, r, n) {
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
function Lt(i) {
  return typeof i.ns == "string" && (i.ns = [i.ns]), typeof i.fallbackLng == "string" && (i.fallbackLng = [i.fallbackLng]), typeof i.fallbackNS == "string" && (i.fallbackNS = [i.fallbackNS]), i.supportedLngs && i.supportedLngs.indexOf("cimode") < 0 && (i.supportedLngs = i.supportedLngs.concat(["cimode"])), i;
}
function Rt(i, e) {
  var t = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(i);
    e && (r = r.filter(function(n) {
      return Object.getOwnPropertyDescriptor(i, n).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function Q(i) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Rt(Object(t), !0).forEach(function(r) {
      se(i, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(t)) : Rt(Object(t)).forEach(function(r) {
      Object.defineProperty(i, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return i;
}
function rr(i) {
  var e = ir();
  return function() {
    var r = ee(i), n;
    if (e) {
      var a = ee(this).constructor;
      n = Reflect.construct(r, arguments, a);
    } else
      n = r.apply(this, arguments);
    return Re(this, n);
  };
}
function ir() {
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
function Ae() {
}
function ar(i) {
  var e = Object.getOwnPropertyNames(Object.getPrototypeOf(i));
  e.forEach(function(t) {
    typeof i[t] == "function" && (i[t] = i[t].bind(i));
  });
}
var Fe = function(i) {
  Be(t, i);
  var e = rr(t);
  function t() {
    var r, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = arguments.length > 1 ? arguments[1] : void 0;
    if (J(this, t), r = e.call(this), Me && oe.call(ae(r)), r.options = Lt(n), r.services = {}, r.logger = Y, r.modules = {
      external: []
    }, ar(ae(r)), a && !r.isInitialized && !n.isClone) {
      if (!r.options.initImmediate)
        return r.init(n, a), Re(r, ae(r));
      setTimeout(function() {
        r.init(n, a);
      }, 0);
    }
    return r;
  }
  return X(t, [{
    key: "init",
    value: function() {
      var n = this, a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 ? arguments[1] : void 0;
      typeof a == "function" && (o = a, a = {}), !a.defaultNS && a.defaultNS !== !1 && a.ns && (typeof a.ns == "string" ? a.defaultNS = a.ns : a.ns.indexOf("translation") < 0 && (a.defaultNS = a.ns[0]));
      var s = nr();
      this.options = Q(Q(Q({}, s), this.options), Lt(a)), this.options.compatibilityAPI !== "v1" && (this.options.interpolation = Q(Q({}, s.interpolation), this.options.interpolation)), a.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = a.keySeparator), a.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = a.nsSeparator);
      function u(v) {
        return v ? typeof v == "function" ? new v() : v : null;
      }
      if (!this.options.isClone) {
        this.modules.logger ? Y.init(u(this.modules.logger), this.options) : Y.init(null, this.options);
        var l;
        this.modules.formatter ? l = this.modules.formatter : typeof Intl < "u" && (l = Zn);
        var d = new zn(this.options);
        this.store = new Bn(this.options.resources, this.options);
        var f = this.services;
        f.logger = Y, f.resourceStore = this.store, f.languageUtils = d, f.pluralResolver = new Xn(d, {
          prepend: this.options.pluralSeparator,
          compatibilityJSON: this.options.compatibilityJSON,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix
        }), l && (!this.options.interpolation.format || this.options.interpolation.format === s.interpolation.format) && (f.formatter = u(l), f.formatter.init(f, this.options), this.options.interpolation.format = f.formatter.format.bind(f.formatter)), f.interpolator = new Gn(this.options), f.utils = {
          hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
        }, f.backendConnector = new tr(u(this.modules.backend), f.resourceStore, f, this.options), f.backendConnector.on("*", function(v) {
          for (var y = arguments.length, P = new Array(y > 1 ? y - 1 : 0), k = 1; k < y; k++)
            P[k - 1] = arguments[k];
          n.emit.apply(n, [v].concat(P));
        }), this.modules.languageDetector && (f.languageDetector = u(this.modules.languageDetector), f.languageDetector.init(f, this.options.detection, this.options)), this.modules.i18nFormat && (f.i18nFormat = u(this.modules.i18nFormat), f.i18nFormat.init && f.i18nFormat.init(this)), this.translator = new Ot(this.services, this.options), this.translator.on("*", function(v) {
          for (var y = arguments.length, P = new Array(y > 1 ? y - 1 : 0), k = 1; k < y; k++)
            P[k - 1] = arguments[k];
          n.emit.apply(n, [v].concat(P));
        }), this.modules.external.forEach(function(v) {
          v.init && v.init(n);
        });
      }
      if (this.format = this.options.interpolation.format, o || (o = Ae), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
        var g = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
        g.length > 0 && g[0] !== "dev" && (this.options.lng = g[0]);
      }
      !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined");
      var h = ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"];
      h.forEach(function(v) {
        n[v] = function() {
          var y;
          return (y = n.store)[v].apply(y, arguments);
        };
      });
      var m = ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"];
      m.forEach(function(v) {
        n[v] = function() {
          var y;
          return (y = n.store)[v].apply(y, arguments), n;
        };
      });
      var b = ye(), w = function() {
        var y = function(k, j) {
          n.isInitialized && !n.initializedStoreOnce && n.logger.warn("init: i18next is already initialized. You should call init just once!"), n.isInitialized = !0, n.options.isClone || n.logger.log("initialized", n.options), n.emit("initialized", n.options), b.resolve(j), o(k, j);
        };
        if (n.languages && n.options.compatibilityAPI !== "v1" && !n.isInitialized)
          return y(null, n.t.bind(n));
        n.changeLanguage(n.options.lng, y);
      };
      return this.options.resources || !this.options.initImmediate ? w() : setTimeout(w, 0), b;
    }
  }, {
    key: "loadResources",
    value: function(n) {
      var a = this, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ae, s = o, u = typeof n == "string" ? n : this.language;
      if (typeof n == "function" && (s = n), !this.options.resources || this.options.partialBundledLanguages) {
        if (u && u.toLowerCase() === "cimode")
          return s();
        var l = [], d = function(h) {
          if (h) {
            var m = a.services.languageUtils.toResolveHierarchy(h);
            m.forEach(function(b) {
              l.indexOf(b) < 0 && l.push(b);
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
      var s = ye();
      return n || (n = this.languages), a || (a = this.options.ns), o || (o = Ae), this.services.backendConnector.reload(n, a, function(u) {
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
      var s = ye();
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
        if (V(f) !== "object") {
          for (var h = arguments.length, m = new Array(h > 2 ? h - 2 : 0), b = 2; b < h; b++)
            m[b - 2] = arguments[b];
          g = s.options.overloadTranslationOptionHandler([d, f].concat(m));
        } else
          g = Q({}, f);
        g.lng = g.lng || l.lng, g.lngs = g.lngs || l.lngs, g.ns = g.ns || l.ns, g.keyPrefix = g.keyPrefix || o || l.keyPrefix;
        var w = s.options.keySeparator || ".", v = g.keyPrefix ? "".concat(g.keyPrefix).concat(w).concat(d) : d;
        return s.t(v, g);
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
        var b = a.services.backendConnector.state["".concat(h, "|").concat(m)];
        return b === -1 || b === 2;
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
      var o = this, s = ye();
      return this.options.ns ? (typeof n == "string" && (n = [n]), n.forEach(function(u) {
        o.options.ns.indexOf(u) < 0 && o.options.ns.push(u);
      }), this.loadResources(function(u) {
        s.resolve(), a && a(u);
      }), s) : (a && a(), Promise.resolve());
    }
  }, {
    key: "loadLanguages",
    value: function(n, a) {
      var o = ye();
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
      var n = this, a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ae, s = Q(Q(Q({}, this.options), a), {
        isClone: !0
      }), u = new t(s);
      (a.debug !== void 0 || a.prefix !== void 0) && (u.logger = u.logger.clone(a));
      var l = ["store", "services", "language"];
      return l.forEach(function(d) {
        u[d] = n[d];
      }), u.services = Q({}, this.services), u.services.utils = {
        hasLoadedNamespace: u.hasLoadedNamespace.bind(u)
      }, u.translator = new Ot(u.services, u.options), u.translator.on("*", function(d) {
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
}(oe);
se(Fe, "createInstance", function() {
  var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = arguments.length > 1 ? arguments[1] : void 0;
  return new Fe(i, e);
});
var N = Fe.createInstance();
N.createInstance = Fe.createInstance;
N.createInstance;
N.init;
N.loadResources;
N.reloadResources;
N.use;
N.changeLanguage;
N.getFixedT;
N.t;
N.exists;
N.setDefaultNamespace;
N.hasLoadedNamespace;
N.loadNamespaces;
N.loadLanguages;
var Xt = [], or = Xt.forEach, sr = Xt.slice;
function ur(i) {
  return or.call(sr.call(arguments, 1), function(e) {
    if (e)
      for (var t in e)
        i[t] === void 0 && (i[t] = e[t]);
  }), i;
}
var Et = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/, fr = function(e, t, r) {
  var n = r || {};
  n.path = n.path || "/";
  var a = encodeURIComponent(t), o = "".concat(e, "=").concat(a);
  if (n.maxAge > 0) {
    var s = n.maxAge - 0;
    if (Number.isNaN(s))
      throw new Error("maxAge should be a Number");
    o += "; Max-Age=".concat(Math.floor(s));
  }
  if (n.domain) {
    if (!Et.test(n.domain))
      throw new TypeError("option domain is invalid");
    o += "; Domain=".concat(n.domain);
  }
  if (n.path) {
    if (!Et.test(n.path))
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
}, jt = {
  create: function(e, t, r, n) {
    var a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      path: "/",
      sameSite: "strict"
    };
    r && (a.expires = new Date(), a.expires.setTime(a.expires.getTime() + r * 60 * 1e3)), n && (a.domain = n), document.cookie = fr(e, encodeURIComponent(t), a);
  },
  read: function(e) {
    for (var t = "".concat(e, "="), r = document.cookie.split(";"), n = 0; n < r.length; n++) {
      for (var a = r[n]; a.charAt(0) === " "; )
        a = a.substring(1, a.length);
      if (a.indexOf(t) === 0)
        return a.substring(t.length, a.length);
    }
    return null;
  },
  remove: function(e) {
    this.create(e, "", -1);
  }
}, lr = {
  name: "cookie",
  lookup: function(e) {
    var t;
    if (e.lookupCookie && typeof document < "u") {
      var r = jt.read(e.lookupCookie);
      r && (t = r);
    }
    return t;
  },
  cacheUserLanguage: function(e, t) {
    t.lookupCookie && typeof document < "u" && jt.create(t.lookupCookie, e, t.cookieMinutes, t.cookieDomain, t.cookieOptions);
  }
}, cr = {
  name: "querystring",
  lookup: function(e) {
    var t;
    if (typeof window < "u") {
      var r = window.location.search;
      !window.location.search && window.location.hash && window.location.hash.indexOf("?") > -1 && (r = window.location.hash.substring(window.location.hash.indexOf("?")));
      for (var n = r.substring(1), a = n.split("&"), o = 0; o < a.length; o++) {
        var s = a[o].indexOf("=");
        if (s > 0) {
          var u = a[o].substring(0, s);
          u === e.lookupQuerystring && (t = a[o].substring(s + 1));
        }
      }
    }
    return t;
  }
}, be = null, Ct = function() {
  if (be !== null)
    return be;
  try {
    be = window !== "undefined" && window.localStorage !== null;
    var e = "i18next.translate.boo";
    window.localStorage.setItem(e, "foo"), window.localStorage.removeItem(e);
  } catch {
    be = !1;
  }
  return be;
}, dr = {
  name: "localStorage",
  lookup: function(e) {
    var t;
    if (e.lookupLocalStorage && Ct()) {
      var r = window.localStorage.getItem(e.lookupLocalStorage);
      r && (t = r);
    }
    return t;
  },
  cacheUserLanguage: function(e, t) {
    t.lookupLocalStorage && Ct() && window.localStorage.setItem(t.lookupLocalStorage, e);
  }
}, we = null, At = function() {
  if (we !== null)
    return we;
  try {
    we = window !== "undefined" && window.sessionStorage !== null;
    var e = "i18next.translate.boo";
    window.sessionStorage.setItem(e, "foo"), window.sessionStorage.removeItem(e);
  } catch {
    we = !1;
  }
  return we;
}, hr = {
  name: "sessionStorage",
  lookup: function(e) {
    var t;
    if (e.lookupSessionStorage && At()) {
      var r = window.sessionStorage.getItem(e.lookupSessionStorage);
      r && (t = r);
    }
    return t;
  },
  cacheUserLanguage: function(e, t) {
    t.lookupSessionStorage && At() && window.sessionStorage.setItem(t.lookupSessionStorage, e);
  }
}, gr = {
  name: "navigator",
  lookup: function(e) {
    var t = [];
    if (typeof navigator < "u") {
      if (navigator.languages)
        for (var r = 0; r < navigator.languages.length; r++)
          t.push(navigator.languages[r]);
      navigator.userLanguage && t.push(navigator.userLanguage), navigator.language && t.push(navigator.language);
    }
    return t.length > 0 ? t : void 0;
  }
}, pr = {
  name: "htmlTag",
  lookup: function(e) {
    var t, r = e.htmlTag || (typeof document < "u" ? document.documentElement : null);
    return r && typeof r.getAttribute == "function" && (t = r.getAttribute("lang")), t;
  }
}, mr = {
  name: "path",
  lookup: function(e) {
    var t;
    if (typeof window < "u") {
      var r = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
      if (r instanceof Array)
        if (typeof e.lookupFromPathIndex == "number") {
          if (typeof r[e.lookupFromPathIndex] != "string")
            return;
          t = r[e.lookupFromPathIndex].replace("/", "");
        } else
          t = r[0].replace("/", "");
    }
    return t;
  }
}, vr = {
  name: "subdomain",
  lookup: function(e) {
    var t = typeof e.lookupFromSubdomainIndex == "number" ? e.lookupFromSubdomainIndex + 1 : 1, r = typeof window < "u" && window.location && window.location.hostname && window.location.hostname.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);
    if (r)
      return r[t];
  }
};
function yr() {
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
  function i(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    J(this, i), this.type = "languageDetector", this.detectors = {}, this.init(e, t);
  }
  return X(i, [{
    key: "init",
    value: function(t) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      this.services = t, this.options = ur(r, this.options || {}, yr()), this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex), this.i18nOptions = n, this.addDetector(lr), this.addDetector(cr), this.addDetector(dr), this.addDetector(hr), this.addDetector(gr), this.addDetector(pr), this.addDetector(mr), this.addDetector(vr);
    }
  }, {
    key: "addDetector",
    value: function(t) {
      this.detectors[t.name] = t;
    }
  }, {
    key: "detect",
    value: function(t) {
      var r = this;
      t || (t = this.options.order);
      var n = [];
      return t.forEach(function(a) {
        if (r.detectors[a]) {
          var o = r.detectors[a].lookup(r.options);
          o && typeof o == "string" && (o = [o]), o && (n = n.concat(o));
        }
      }), this.services.languageUtils.getBestMatchFromCodes ? n : n.length > 0 ? n[0] : null;
    }
  }, {
    key: "cacheUserLanguage",
    value: function(t, r) {
      var n = this;
      r || (r = this.options.caches), r && (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(t) > -1 || r.forEach(function(a) {
        n.detectors[a] && n.detectors[a].cacheUserLanguage(t, n.options);
      }));
    }
  }]), i;
}();
Gt.type = "languageDetector";
function Qe(i) {
  return Qe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Qe(i);
}
var Wt = [], br = Wt.forEach, wr = Wt.slice;
function Ye(i) {
  return br.call(wr.call(arguments, 1), function(e) {
    if (e)
      for (var t in e)
        i[t] === void 0 && (i[t] = e[t]);
  }), i;
}
function Zt() {
  return typeof XMLHttpRequest == "function" || (typeof XMLHttpRequest > "u" ? "undefined" : Qe(XMLHttpRequest)) === "object";
}
function Or(i) {
  return !!i && typeof i.then == "function";
}
function Sr(i) {
  return Or(i) ? i : Promise.resolve(i);
}
var Te = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function kr(i) {
  throw new Error('Could not dynamically require "' + i + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Pe = {}, xr = {
  get exports() {
    return Pe;
  },
  set exports(i) {
    Pe = i;
  }
}, ke = {}, Pr = {
  get exports() {
    return ke;
  },
  set exports(i) {
    ke = i;
  }
}, Nt;
function _r() {
  return Nt || (Nt = 1, function(i, e) {
    var t = typeof self < "u" ? self : Te, r = function() {
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
        function b(c) {
          if (c.bodyUsed)
            return Promise.reject(new TypeError("Already read"));
          c.bodyUsed = !0;
        }
        function w(c) {
          return new Promise(function(p, S) {
            c.onload = function() {
              p(c.result);
            }, c.onerror = function() {
              S(c.error);
            };
          });
        }
        function v(c) {
          var p = new FileReader(), S = w(p);
          return p.readAsArrayBuffer(c), S;
        }
        function y(c) {
          var p = new FileReader(), S = w(p);
          return p.readAsText(c), S;
        }
        function P(c) {
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
            var c = b(this);
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
            return this._bodyArrayBuffer ? b(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(v);
          }), this.text = function() {
            var c = b(this);
            if (c)
              return c;
            if (this._bodyBlob)
              return y(this._bodyBlob);
            if (this._bodyArrayBuffer)
              return Promise.resolve(P(this._bodyArrayBuffer));
            if (this._bodyFormData)
              throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText);
          }, s.formData && (this.formData = function() {
            return this.text().then(H);
          }), this.json = function() {
            return this.text().then(JSON.parse);
          }, this;
        }
        var D = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
        function F(c) {
          var p = c.toUpperCase();
          return D.indexOf(p) > -1 ? p : c;
        }
        function A(c, p) {
          p = p || {};
          var S = p.body;
          if (c instanceof A) {
            if (c.bodyUsed)
              throw new TypeError("Already read");
            this.url = c.url, this.credentials = c.credentials, p.headers || (this.headers = new m(c.headers)), this.method = c.method, this.mode = c.mode, this.signal = c.signal, !S && c._bodyInit != null && (S = c._bodyInit, c.bodyUsed = !0);
          } else
            this.url = String(c);
          if (this.credentials = p.credentials || this.credentials || "same-origin", (p.headers || !this.headers) && (this.headers = new m(p.headers)), this.method = F(p.method || this.method || "GET"), this.mode = p.mode || this.mode || null, this.signal = p.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && S)
            throw new TypeError("Body not allowed for GET or HEAD requests");
          this._initBody(S);
        }
        A.prototype.clone = function() {
          return new A(this, { body: this._bodyInit });
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
              var q = R.join(":").trim();
              p.append(x, q);
            }
          }), p;
        }
        j.call(A.prototype);
        function T(c, p) {
          p || (p = {}), this.type = "default", this.status = p.status === void 0 ? 200 : p.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in p ? p.statusText : "OK", this.headers = new m(p.headers), this.url = p.url || "", this._initBody(c);
        }
        j.call(T.prototype), T.prototype.clone = function() {
          return new T(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new m(this.headers),
            url: this.url
          });
        }, T.error = function() {
          var c = new T(null, { status: 0, statusText: "" });
          return c.type = "error", c;
        };
        var G = [301, 302, 303, 307, 308];
        T.redirect = function(c, p) {
          if (G.indexOf(p) === -1)
            throw new RangeError("Invalid status code");
          return new T(null, { status: p, headers: { location: c } });
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
        function z(c, p) {
          return new Promise(function(S, L) {
            var R = new A(c, p);
            if (R.signal && R.signal.aborted)
              return L(new o.DOMException("Aborted", "AbortError"));
            var x = new XMLHttpRequest();
            function q() {
              x.abort();
            }
            x.onload = function() {
              var $ = {
                status: x.status,
                statusText: x.statusText,
                headers: M(x.getAllResponseHeaders() || "")
              };
              $.url = "responseURL" in x ? x.responseURL : $.headers.get("X-Request-URL");
              var W = "response" in x ? x.response : x.responseText;
              S(new T(W, $));
            }, x.onerror = function() {
              L(new TypeError("Network request failed"));
            }, x.ontimeout = function() {
              L(new TypeError("Network request failed"));
            }, x.onabort = function() {
              L(new o.DOMException("Aborted", "AbortError"));
            }, x.open(R.method, R.url, !0), R.credentials === "include" ? x.withCredentials = !0 : R.credentials === "omit" && (x.withCredentials = !1), "responseType" in x && s.blob && (x.responseType = "blob"), R.headers.forEach(function($, W) {
              x.setRequestHeader(W, $);
            }), R.signal && (R.signal.addEventListener("abort", q), x.onreadystatechange = function() {
              x.readyState === 4 && R.signal.removeEventListener("abort", q);
            }), x.send(typeof R._bodyInit > "u" ? null : R._bodyInit);
          });
        }
        return z.polyfill = !0, a.fetch || (a.fetch = z, a.Headers = m, a.Request = A, a.Response = T), o.Headers = m, o.Request = A, o.Response = T, o.fetch = z, Object.defineProperty(o, "__esModule", { value: !0 }), o;
      })({});
    })(r), r.fetch.ponyfill = !0, delete r.fetch.polyfill;
    var n = r;
    e = n.fetch, e.default = n.fetch, e.fetch = n.fetch, e.Headers = n.Headers, e.Request = n.Request, e.Response = n.Response, i.exports = e;
  }(Pr, ke)), ke;
}
(function(i, e) {
  var t;
  if (typeof fetch == "function" && (typeof Te < "u" && Te.fetch ? t = Te.fetch : typeof window < "u" && window.fetch ? t = window.fetch : t = fetch), typeof kr < "u" && (typeof window > "u" || typeof window.document > "u")) {
    var r = t || _r();
    r.default && (r = r.default), e.default = r, i.exports = e.default;
  }
})(xr, Pe);
const Qt = Pe, Tt = /* @__PURE__ */ tn({
  __proto__: null,
  default: Qt
}, [Pe]);
function $e(i) {
  return $e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, $e(i);
}
var ne;
typeof fetch == "function" && (typeof global < "u" && global.fetch ? ne = global.fetch : typeof window < "u" && window.fetch ? ne = window.fetch : ne = fetch);
var _e;
Zt() && (typeof global < "u" && global.XMLHttpRequest ? _e = global.XMLHttpRequest : typeof window < "u" && window.XMLHttpRequest && (_e = window.XMLHttpRequest));
var Ue;
typeof ActiveXObject == "function" && (typeof global < "u" && global.ActiveXObject ? Ue = global.ActiveXObject : typeof window < "u" && window.ActiveXObject && (Ue = window.ActiveXObject));
!ne && Tt && !_e && !Ue && (ne = Qt || Tt);
typeof ne != "function" && (ne = void 0);
var et = function(e, t) {
  if (t && $e(t) === "object") {
    var r = "";
    for (var n in t)
      r += "&" + encodeURIComponent(n) + "=" + encodeURIComponent(t[n]);
    if (!r)
      return e;
    e = e + (e.indexOf("?") !== -1 ? "&" : "?") + r.slice(1);
  }
  return e;
}, It = function(e, t, r) {
  ne(e, t).then(function(n) {
    if (!n.ok)
      return r(n.statusText || "Error", {
        status: n.status
      });
    n.text().then(function(a) {
      r(null, {
        status: n.status,
        data: a
      });
    }).catch(r);
  }).catch(r);
}, Dt = !1, Lr = function(e, t, r, n) {
  e.queryStringParams && (t = et(t, e.queryStringParams));
  var a = Ye({}, typeof e.customHeaders == "function" ? e.customHeaders() : e.customHeaders);
  r && (a["Content-Type"] = "application/json");
  var o = typeof e.requestOptions == "function" ? e.requestOptions(r) : e.requestOptions, s = Ye({
    method: r ? "POST" : "GET",
    body: r ? e.stringify(r) : void 0,
    headers: a
  }, Dt ? {} : o);
  try {
    It(t, s, n);
  } catch (u) {
    if (!o || Object.keys(o).length === 0 || !u.message || u.message.indexOf("not implemented") < 0)
      return n(u);
    try {
      Object.keys(o).forEach(function(l) {
        delete s[l];
      }), It(t, s, n), Dt = !0;
    } catch (l) {
      n(l);
    }
  }
}, Rr = function(e, t, r, n) {
  r && $e(r) === "object" && (r = et("", r).slice(1)), e.queryStringParams && (t = et(t, e.queryStringParams));
  try {
    var a;
    _e ? a = new _e() : a = new Ue("MSXML2.XMLHTTP.3.0"), a.open(r ? "POST" : "GET", t, 1), e.crossDomain || a.setRequestHeader("X-Requested-With", "XMLHttpRequest"), a.withCredentials = !!e.withCredentials, r && a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), a.overrideMimeType && a.overrideMimeType("application/json");
    var o = e.customHeaders;
    if (o = typeof o == "function" ? o() : o, o)
      for (var s in o)
        a.setRequestHeader(s, o[s]);
    a.onreadystatechange = function() {
      a.readyState > 3 && n(a.status >= 400 ? a.statusText : null, {
        status: a.status,
        data: a.responseText
      });
    }, a.send(r);
  } catch (u) {
    console && console.log(u);
  }
}, Er = function(e, t, r, n) {
  if (typeof r == "function" && (n = r, r = void 0), n = n || function() {
  }, ne)
    return Lr(e, t, r, n);
  if (Zt() || typeof ActiveXObject == "function")
    return Rr(e, t, r, n);
  n(new Error("No fetch and no xhr implementation found!"));
};
function jr(i, e) {
  if (!(i instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Ft(i, e) {
  for (var t = 0; t < e.length; t++) {
    var r = e[t];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(i, r.key, r);
  }
}
function Cr(i, e, t) {
  return e && Ft(i.prototype, e), t && Ft(i, t), Object.defineProperty(i, "prototype", { writable: !1 }), i;
}
function Ar(i, e, t) {
  return e in i ? Object.defineProperty(i, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : i[e] = t, i;
}
var Nr = function() {
  return {
    loadPath: "/locales/{{lng}}/{{ns}}.json",
    addPath: "/locales/add/{{lng}}/{{ns}}",
    allowMultiLoading: !1,
    parse: function(t) {
      return JSON.parse(t);
    },
    stringify: JSON.stringify,
    parsePayload: function(t, r, n) {
      return Ar({}, r, n || "");
    },
    request: Er,
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
  function i(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    jr(this, i), this.services = e, this.options = t, this.allOptions = r, this.type = "backend", this.init(e, t, r);
  }
  return Cr(i, [{
    key: "init",
    value: function(t) {
      var r = this, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      this.services = t, this.options = Ye(n, this.options || {}, Nr()), this.allOptions = a, this.services && this.options.reloadInterval && setInterval(function() {
        return r.reload();
      }, this.options.reloadInterval);
    }
  }, {
    key: "readMulti",
    value: function(t, r, n) {
      this._readAny(t, t, r, r, n);
    }
  }, {
    key: "read",
    value: function(t, r, n) {
      this._readAny([t], t, [r], r, n);
    }
  }, {
    key: "_readAny",
    value: function(t, r, n, a, o) {
      var s = this, u = this.options.loadPath;
      typeof this.options.loadPath == "function" && (u = this.options.loadPath(t, n)), u = Sr(u), u.then(function(l) {
        if (!l)
          return o(null, {});
        var d = s.services.interpolator.interpolate(l, {
          lng: t.join("+"),
          ns: n.join("+")
        });
        s.loadUrl(d, o, r, a);
      });
    }
  }, {
    key: "loadUrl",
    value: function(t, r, n, a) {
      var o = this;
      this.options.request(this.options, t, void 0, function(s, u) {
        if (u && (u.status >= 500 && u.status < 600 || !u.status))
          return r("failed loading " + t + "; status code: " + u.status, !0);
        if (u && u.status >= 400 && u.status < 500)
          return r("failed loading " + t + "; status code: " + u.status, !1);
        if (!u && s && s.message && s.message.indexOf("Failed to fetch") > -1)
          return r("failed loading " + t + ": " + s.message, !0);
        if (s)
          return r(s, !1);
        var l, d;
        try {
          typeof u.data == "string" ? l = o.options.parse(u.data, n, a) : l = u.data;
        } catch {
          d = "failed parsing " + t + " to json";
        }
        if (d)
          return r(d, !1);
        r(null, l);
      });
    }
  }, {
    key: "create",
    value: function(t, r, n, a, o) {
      var s = this;
      if (this.options.addPath) {
        typeof t == "string" && (t = [t]);
        var u = this.options.parsePayload(r, n, a), l = 0, d = [], f = [];
        t.forEach(function(g) {
          var h = s.options.addPath;
          typeof s.options.addPath == "function" && (h = s.options.addPath(g, r));
          var m = s.services.interpolator.interpolate(h, {
            lng: g,
            ns: r
          });
          s.options.request(s.options, m, u, function(b, w) {
            l += 1, d.push(b), f.push(w), l === t.length && o && o(d, f);
          });
        });
      }
    }
  }, {
    key: "reload",
    value: function() {
      var t = this, r = this.services, n = r.backendConnector, a = r.languageUtils, o = r.logger, s = n.language;
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
  }]), i;
}();
Yt.type = "backend";
const Je = Ie(!0);
class Tr {
  constructor(e) {
    this.i18n = this.createInstance(e), this.isLoading = this.createLoadingInstance(e);
  }
  createInstance(e) {
    const t = Ie(e);
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
      Object.keys(t).length !== 0 && Je.set(!1);
    }), e.on("failedLoading", () => {
      Je.set(!0);
    }), Je;
  }
}
const Ir = (i) => new Tr(i).i18n, Dr = {
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
}, Fr = {
  pie: Dr
}, $r = {
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
}, Ur = {
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
}, Br = {
  cabecera: $r,
  pie: Ur
}, Mr = {
  es: { translation: Fr },
  eu: { translation: Br }
}, Hr = {
  name: "ulrContextLanguageDetector",
  cacheUserLanguage(i, e) {
    return console.log(i, e), i;
  },
  lookup: (i) => {
    console.log(i);
    const t = new URL(window.location.href).pathname.split("/").find((r) => r === "es" || r === "eu");
    return t || "eu";
  }
}, en = new Gt();
en.addDetector(Hr);
N.use(Yt).use(en).init({
  // lng: localStorage.getItem('language') || 'eu', 
  resources: Mr,
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
const $t = Ir(N), zr = N.changeLanguage;
window.addEventListener("storage", (i) => {
  i.key === "locale" && N.changeLanguage(i.newValue);
});
function qr(i) {
  let e, t, r, n, a = (
    /*$i18n*/
    i[0].t("pie.chat.texto") + ""
  ), o, s, u, l, d, f, g = (
    /*$i18n*/
    i[0].t("pie.diputacion-foral") + ""
  ), h, m, b, w, v, y = (
    /*$i18n*/
    i[0].t("pie.opcion.mapa-web.texto") + ""
  ), P, k, j, D, F, A = (
    /*$i18n*/
    i[0].t("pie.opcion.aviso-legal.texto") + ""
  ), H, M, T, G, z, c = (
    /*$i18n*/
    i[0].t("pie.opcion.accesibilidad.texto") + ""
  ), p, S, L, R, x, q = (
    /*$i18n*/
    i[0].t("pie.opcion.cookie.texto") + ""
  ), $, W, Ee, Z;
  return {
    c() {
      e = I("footer"), t = I("div"), r = I("a"), n = I("span"), o = ie(a), l = le(), d = I("div"), f = I("p"), h = ie(g), m = le(), b = I("ul"), w = I("li"), v = I("a"), P = ie(y), j = le(), D = I("li"), F = I("a"), H = ie(A), T = le(), G = I("li"), z = I("a"), p = ie(c), L = le(), R = I("li"), x = I("a"), $ = ie(q), Ee = le(), Z = I("div"), Z.innerHTML = '<ul class="sedeLogosPie"></ul>', this.c = B, O(n, "class", "sr-only"), O(r, "href", s = /*$i18n*/
      i[0].t("pie.chat.url")), O(r, "class", "sede-chatweb-button"), O(r, "target", "_blank"), O(r, "rel", "noopener noreferrer"), O(r, "title", u = /*$i18n*/
      i[0].t("pie.chat.title")), O(t, "id", "sede-chatweb"), O(f, "class", "sedeCopy"), O(v, "href", k = /*$i18n*/
      i[0].t("pie.opcion.mapa-web.url", { dominio: (
        /*VITE_APP_LIFERAY*/
        i[1]
      ) })), O(F, "href", M = /*$i18n*/
      i[0].t("pie.opcion.aviso-legal.url", { dominio: (
        /*VITE_APP_LIFERAY*/
        i[1]
      ) })), O(z, "href", S = /*$i18n*/
      i[0].t("pie.opcion.accesibilidad.url", { dominio: (
        /*VITE_APP_LIFERAY*/
        i[1]
      ) })), O(x, "href", W = /*$i18n*/
      i[0].t("pie.opcion.cookie.url", { dominio: (
        /*VITE_APP_LIFERAY*/
        i[1]
      ) })), O(b, "class", "sedeOpcionesPie"), O(Z, "class", "sedeConformidadesPie"), O(d, "class", "sedeMenuOpcionesPie");
    },
    m(E, C) {
      ue(E, e, C), _(e, t), _(t, r), _(r, n), _(n, o), _(e, l), _(e, d), _(d, f), _(f, h), _(d, m), _(d, b), _(b, w), _(w, v), _(v, P), _(b, j), _(b, D), _(D, F), _(F, H), _(b, T), _(b, G), _(G, z), _(z, p), _(b, L), _(b, R), _(R, x), _(x, $), _(d, Ee), _(d, Z);
    },
    p(E, [C]) {
      C & /*$i18n*/
      1 && a !== (a = /*$i18n*/
      E[0].t("pie.chat.texto") + "") && ce(o, a), C & /*$i18n*/
      1 && s !== (s = /*$i18n*/
      E[0].t("pie.chat.url")) && O(r, "href", s), C & /*$i18n*/
      1 && u !== (u = /*$i18n*/
      E[0].t("pie.chat.title")) && O(r, "title", u), C & /*$i18n*/
      1 && g !== (g = /*$i18n*/
      E[0].t("pie.diputacion-foral") + "") && ce(h, g), C & /*$i18n*/
      1 && y !== (y = /*$i18n*/
      E[0].t("pie.opcion.mapa-web.texto") + "") && ce(P, y), C & /*$i18n*/
      1 && k !== (k = /*$i18n*/
      E[0].t("pie.opcion.mapa-web.url", { dominio: (
        /*VITE_APP_LIFERAY*/
        E[1]
      ) })) && O(v, "href", k), C & /*$i18n*/
      1 && A !== (A = /*$i18n*/
      E[0].t("pie.opcion.aviso-legal.texto") + "") && ce(H, A), C & /*$i18n*/
      1 && M !== (M = /*$i18n*/
      E[0].t("pie.opcion.aviso-legal.url", { dominio: (
        /*VITE_APP_LIFERAY*/
        E[1]
      ) })) && O(F, "href", M), C & /*$i18n*/
      1 && c !== (c = /*$i18n*/
      E[0].t("pie.opcion.accesibilidad.texto") + "") && ce(p, c), C & /*$i18n*/
      1 && S !== (S = /*$i18n*/
      E[0].t("pie.opcion.accesibilidad.url", { dominio: (
        /*VITE_APP_LIFERAY*/
        E[1]
      ) })) && O(z, "href", S), C & /*$i18n*/
      1 && q !== (q = /*$i18n*/
      E[0].t("pie.opcion.cookie.texto") + "") && ce($, q), C & /*$i18n*/
      1 && W !== (W = /*$i18n*/
      E[0].t("pie.opcion.cookie.url", { dominio: (
        /*VITE_APP_LIFERAY*/
        E[1]
      ) })) && O(x, "href", W);
    },
    i: B,
    o: B,
    d(E) {
      E && ve(e);
    }
  };
}
function Kr(i, e, t) {
  let r;
  an(i, $t, (u) => t(0, r = u));
  let { menus: n = [] } = e, { language: a } = e, o;
  const s = Ie(a);
  return window.addEventListener("storage", (u) => {
    console.log(u), console.log(JSON.parse(window.localStorage.getItem("locale")));
  }), window.onstorage = (u) => {
    console.log(u), console.log(JSON.parse(window.localStorage.getItem("locale")));
  }, Ht(() => {
    window.addEventListener("storage", (f) => {
      console.log(f), console.log(JSON.parse(window.localStorage.getItem("locale")));
    }), window.onstorage = (f) => {
      console.log(f), console.log(JSON.parse(window.localStorage.getItem("locale")));
    };
    function u(f, g) {
      const h = localStorage.getItem(f), m = h ? JSON.parse(h) : g, b = Ie(m);
      return b.subscribe((w) => {
        console.log("cambios"), localStorage.setItem(f, JSON.stringify(w));
      }), b;
    }
    const l = u("locale", {});
    function d(f) {
      f.subscribe((g) => {
        console.log(g);
      });
    }
    d(l);
  }), i.$$set = (u) => {
    "menus" in u && t(2, n = u.menus), "language" in u && t(3, a = u.language);
  }, i.$$.update = () => {
    i.$$.dirty & /*$i18n, language*/
    9 && (console.log(a), s.set(a), zr(a), console.log(rn($t).language));
  }, [r, o, n, a];
}
class Vr extends rt {
  constructor(e) {
    super(), zt(
      this,
      {
        target: this.shadowRoot,
        props: Mt(this.attributes),
        customElement: !0
      },
      Kr,
      qr,
      nt,
      { menus: 2, language: 3 },
      null
    ), e && (e.target && ue(e.target, this, e.anchor), e.props && (this.$set(e.props), Se()));
  }
  static get observedAttributes() {
    return ["menus", "language"];
  }
  get menus() {
    return this.$$.ctx[2];
  }
  set menus(e) {
    this.$$set({ menus: e }), Se();
  }
  get language() {
    return this.$$.ctx[3];
  }
  set language(e) {
    this.$$set({ language: e }), Se();
  }
}
customElements.define("my-footer", Vr);
//export {
//  kn as MyComponent,
//  Vr as MyFooter
//};
