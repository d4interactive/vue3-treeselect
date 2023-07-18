import { defineComponent as se, h as r, openBlock as $, createElementBlock as ie, createElementVNode as Ne, createApp as Ke, resolveComponent as z, normalizeClass as qe, createVNode as ae, createBlock as le } from "vue";
var F = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ye(e, t) {
  var n = t.length, s = e.length;
  if (s > n)
    return !1;
  if (s === n)
    return e === t;
  e:
    for (var i = 0, o = 0; i < s; i++) {
      for (var a = e.charCodeAt(i); o < n; )
        if (t.charCodeAt(o++) === a)
          continue e;
      return !1;
    }
  return !0;
}
var Xe = Ye;
function Ge() {
}
var Je = Ge;
const E = process.env.NODE_ENV === "production" ? Je : function(t, n) {
  if (!t()) {
    const s = ["[Vue-Treeselect Warning]"].concat(n());
    console.error(...s);
  }
};
function L(e) {
  return function(n, ...s) {
    n.type === "mousedown" && n.button === 0 && e.call(this, n, ...s);
  };
}
function Ze(e, t) {
  const n = e.getBoundingClientRect(), s = t.getBoundingClientRect(), i = t.offsetHeight / 3;
  s.bottom + i > n.bottom ? e.scrollTop = Math.min(
    t.offsetTop + t.clientHeight - e.offsetHeight + i,
    e.scrollHeight
  ) : s.top - i < n.top && (e.scrollTop = Math.max(t.offsetTop - i, 0));
}
function et(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var we = et, tt = typeof F == "object" && F && F.Object === Object && F, nt = tt, st = nt, it = typeof self == "object" && self && self.Object === Object && self, rt = st || it || Function("return this")(), Ce = rt, ot = Ce, at = function() {
  return ot.Date.now();
}, lt = at, ct = /\s/;
function ut(e) {
  for (var t = e.length; t-- && ct.test(e.charAt(t)); )
    ;
  return t;
}
var ht = ut, dt = ht, ft = /^\s+/;
function pt(e) {
  return e && e.slice(0, dt(e) + 1).replace(ft, "");
}
var mt = pt, gt = Ce, vt = gt.Symbol, Le = vt, ce = Le, Me = Object.prototype, St = Me.hasOwnProperty, Ot = Me.toString, D = ce ? ce.toStringTag : void 0;
function bt(e) {
  var t = St.call(e, D), n = e[D];
  try {
    e[D] = void 0;
    var s = !0;
  } catch {
  }
  var i = Ot.call(e);
  return s && (t ? e[D] = n : delete e[D]), i;
}
var yt = bt, _t = Object.prototype, Et = _t.toString;
function Nt(e) {
  return Et.call(e);
}
var wt = Nt, ue = Le, Ct = yt, Lt = wt, Mt = "[object Null]", Tt = "[object Undefined]", he = ue ? ue.toStringTag : void 0;
function It(e) {
  return e == null ? e === void 0 ? Tt : Mt : he && he in Object(e) ? Ct(e) : Lt(e);
}
var Dt = It;
function xt(e) {
  return e != null && typeof e == "object";
}
var Rt = xt, At = Dt, $t = Rt, Bt = "[object Symbol]";
function Vt(e) {
  return typeof e == "symbol" || $t(e) && At(e) == Bt;
}
var kt = Vt, zt = mt, de = we, Ft = kt, fe = 0 / 0, Ht = /^[-+]0x[0-9a-f]+$/i, Wt = /^0b[01]+$/i, Pt = /^0o[0-7]+$/i, jt = parseInt;
function Qt(e) {
  if (typeof e == "number")
    return e;
  if (Ft(e))
    return fe;
  if (de(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = de(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = zt(e);
  var n = Wt.test(e);
  return n || Pt.test(e) ? jt(e.slice(2), n ? 2 : 8) : Ht.test(e) ? fe : +e;
}
var Te = Qt, Ut = we, P = lt, pe = Te, Kt = "Expected a function", qt = Math.max, Yt = Math.min;
function Xt(e, t, n) {
  var s, i, o, a, c, h, u = 0, g = !1, d = !1, v = !0;
  if (typeof e != "function")
    throw new TypeError(Kt);
  t = pe(t) || 0, Ut(n) && (g = !!n.leading, d = "maxWait" in n, o = d ? qt(pe(n.maxWait) || 0, t) : o, v = "trailing" in n ? !!n.trailing : v);
  function w(p) {
    var _ = s, I = i;
    return s = i = void 0, u = p, a = e.apply(I, _), a;
  }
  function T(p) {
    return u = p, c = setTimeout(b, t), g ? w(p) : a;
  }
  function B(p) {
    var _ = p - h, I = p - u, oe = t - _;
    return d ? Yt(oe, o - I) : oe;
  }
  function V(p) {
    var _ = p - h, I = p - u;
    return h === void 0 || _ >= t || _ < 0 || d && I >= o;
  }
  function b() {
    var p = P();
    if (V(p))
      return k(p);
    c = setTimeout(b, B(p));
  }
  function k(p) {
    return c = void 0, v && s ? w(p) : (s = i = void 0, a);
  }
  function l() {
    c !== void 0 && clearTimeout(c), u = 0, s = h = i = c = void 0;
  }
  function f() {
    return c === void 0 ? a : k(P());
  }
  function y() {
    var p = P(), _ = V(p);
    if (s = arguments, i = this, h = p, _) {
      if (c === void 0)
        return T(h);
      if (d)
        return clearTimeout(c), c = setTimeout(b, t), w(h);
    }
    return c === void 0 && (c = setTimeout(b, t)), a;
  }
  return y.cancel = l, y.flush = f, y;
}
var Gt = Xt, Jt = function(e, t) {
  var n = document.createElement("_"), s = n.appendChild(document.createElement("_")), i = n.appendChild(document.createElement("_")), o = s.appendChild(document.createElement("_")), a = void 0, c = void 0;
  return s.style.cssText = n.style.cssText = "height:100%;left:0;opacity:0;overflow:hidden;pointer-events:none;position:absolute;top:0;transition:0s;width:100%;z-index:-1", o.style.cssText = i.style.cssText = "display:block;height:100%;transition:0s;width:100%", o.style.width = o.style.height = "200%", e.appendChild(n), h(), g;
  function h() {
    u();
    var d = e.offsetWidth, v = e.offsetHeight;
    (d !== a || v !== c) && (a = d, c = v, i.style.width = d * 2 + "px", i.style.height = v * 2 + "px", n.scrollLeft = n.scrollWidth, n.scrollTop = n.scrollHeight, s.scrollLeft = s.scrollWidth, s.scrollTop = s.scrollHeight, t({ width: d, height: v })), s.addEventListener("scroll", h), n.addEventListener("scroll", h);
  }
  function u() {
    s.removeEventListener("scroll", h), n.removeEventListener("scroll", h);
  }
  function g() {
    u(), e.removeChild(n);
  }
};
function Ie(e, t) {
  const n = e.indexOf(t);
  n !== -1 && e.splice(n, 1);
}
let ee;
const W = [], Zt = 100;
function en() {
  ee = setInterval(() => {
    W.forEach(De);
  }, Zt);
}
function tn() {
  clearInterval(ee), ee = null;
}
function De(e) {
  const { $el: t, listener: n, lastWidth: s, lastHeight: i } = e, o = t.offsetWidth, a = t.offsetHeight;
  (s !== o || i !== a) && (e.lastWidth = o, e.lastHeight = a, n({ width: o, height: a }));
}
function nn(e, t) {
  const n = {
    $el: e,
    listener: t,
    lastWidth: null,
    lastHeight: null
  }, s = () => {
    Ie(W, n), W.length || tn();
  };
  return W.push(n), De(n), en(), s;
}
function xe(e, t) {
  const n = document.documentMode === 9;
  let s = !0;
  const a = (n ? nn : Jt)(e, (...c) => s || t(...c));
  return s = !1, a;
}
function sn(e) {
  const t = [];
  let n = e.parentNode;
  for (; n && n.nodeName !== "BODY" && n.nodeType === document.ELEMENT_NODE; )
    rn(n) && t.push(n), n = n.parentNode;
  return t.push(window), t;
}
function rn(e) {
  const { overflow: t, overflowX: n, overflowY: s } = getComputedStyle(e);
  return /(auto|scroll|overlay)/.test(t + s + n);
}
function Re(e, t) {
  const n = sn(e);
  return window.addEventListener("resize", t, { passive: !0 }), n.forEach((s) => {
    s.addEventListener("scroll", t, { passive: !0 });
  }), function() {
    window.removeEventListener("resize", t, { passive: !0 }), n.forEach((i) => {
      i.removeEventListener("scroll", t, { passive: !0 });
    });
  };
}
function Ae(e) {
  return e !== e;
}
function $e(e) {
  return !!e && (typeof e == "object" || typeof e == "function") && typeof e.then == "function";
}
var on = Te, me = 1 / 0, an = 17976931348623157e292;
function ln(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = on(e), e === me || e === -me) {
    var t = e < 0 ? -1 : 1;
    return t * an;
  }
  return e === e ? e : 0;
}
var cn = ln, un = cn;
function hn(e) {
  var t = un(e), n = t % 1;
  return t === t ? n ? t - n : t : 0;
}
var dn = hn, fn = dn, pn = "Expected a function";
function mn(e, t) {
  var n;
  if (typeof t != "function")
    throw new TypeError(pn);
  return e = fn(e), function() {
    return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = void 0), n;
  };
}
var gn = mn, vn = gn;
function Sn(e) {
  return vn(2, e);
}
var On = Sn;
function bn(e) {
  return e;
}
var yn = bn;
function _n(e) {
  return function() {
    return e;
  };
}
var ge = _n;
const S = () => /* @__PURE__ */ Object.create(null);
function Be(e) {
  return e == null || typeof e != "object" ? !1 : Object.getPrototypeOf(e) === Object.prototype;
}
function En(e, t, n) {
  Be(n) ? (e[t] || (e[t] = {}), te(e[t], n)) : e[t] = n;
}
function te(e, t) {
  if (Be(t)) {
    const n = Object.keys(t);
    for (let s = 0, i = n.length; s < i; s++)
      En(e, n[s], t[n[s]]);
  }
  return e;
}
function Nn(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
var ve = Nn;
function N(e, t) {
  return e.indexOf(t) !== -1;
}
function Ve(e, t, n) {
  for (let s = 0, i = e.length; s < i; s++)
    if (t.call(n, e[s], s, e))
      return e[s];
}
function j(e, t) {
  if (e.length !== t.length)
    return !0;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !0;
  return !1;
}
const C = null, ne = 0, ke = 1, ze = 2, M = "ALL_CHILDREN", x = "ALL_DESCENDANTS", R = "LEAF_CHILDREN", A = "LEAF_DESCENDANTS", wn = "LOAD_ROOT_OPTIONS", Cn = "LOAD_CHILDREN_OPTIONS", Ln = "ASYNC_SEARCH", Q = "ALL", H = "BRANCH_PRIORITY", U = "LEAF_PRIORITY", K = "ALL_WITH_INDETERMINATE", Se = "ORDER_SELECTED", Oe = "LEVEL", be = "INDEX", m = {
  BACKSPACE: 8,
  ENTER: 13,
  ESCAPE: 27,
  END: 35,
  HOME: 36,
  ARROW_LEFT: 37,
  ARROW_UP: 38,
  ARROW_RIGHT: 39,
  ARROW_DOWN: 40,
  DELETE: 46
}, Mn = process.env.NODE_ENV === "testing" ? 10 : 200, ye = 5, _e = 40;
function Fe(e, t) {
  let n = 0;
  do {
    if (e.level < n)
      return -1;
    if (t.level < n)
      return 1;
    if (e.index[n] !== t.index[n])
      return e.index[n] - t.index[n];
    n += 1;
  } while (!0);
}
function Tn(e, t) {
  return e.level === t.level ? Fe(e, t) : e.level - t.level;
}
function q() {
  return {
    isLoaded: !1,
    isLoading: !1,
    loadingError: ""
  };
}
function In(e) {
  return typeof e == "string" ? e : typeof e == "number" && !Ae(e) ? `${e}` : "";
}
function Ee(e, t, n) {
  return e ? Xe(t, n) : N(n, t);
}
function Y(e) {
  return e.message || String(e);
}
let Dn = 0;
const xn = {
  provide() {
    return {
      instance: this
    };
  },
  props: {
    allowClearingDisabled: {
      type: Boolean,
      default: !1
    },
    allowSelectingDisabledDescendants: {
      type: Boolean,
      default: !1
    },
    alwaysOpen: {
      type: Boolean,
      default: !1
    },
    appendToBody: {
      type: Boolean,
      default: !1
    },
    async: {
      type: Boolean,
      default: !1
    },
    autoFocus: {
      type: Boolean,
      default: !1
    },
    autoLoadRootOptions: {
      type: Boolean,
      default: !0
    },
    autoDeselectAncestors: {
      type: Boolean,
      default: !1
    },
    autoDeselectDescendants: {
      type: Boolean,
      default: !1
    },
    autoSelectAncestors: {
      type: Boolean,
      default: !1
    },
    autoSelectDescendants: {
      type: Boolean,
      default: !1
    },
    backspaceRemoves: {
      type: Boolean,
      default: !0
    },
    beforeClearAll: {
      type: Function,
      default: ge(!0)
    },
    branchNodesFirst: {
      type: Boolean,
      default: !1
    },
    cacheOptions: {
      type: Boolean,
      default: !0
    },
    clearable: {
      type: Boolean,
      default: !0
    },
    clearAllText: {
      type: String,
      default: "Clear all"
    },
    clearOnSelect: {
      type: Boolean,
      default: !1
    },
    clearValueText: {
      type: String,
      default: "Clear value"
    },
    closeOnSelect: {
      type: Boolean,
      default: !0
    },
    defaultExpandLevel: {
      type: Number,
      default: 0
    },
    defaultOptions: {
      default: !1
    },
    deleteRemoves: {
      type: Boolean,
      default: !0
    },
    delimiter: {
      type: String,
      default: ","
    },
    flattenSearchResults: {
      type: Boolean,
      default: !1
    },
    disableBranchNodes: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    disableFuzzyMatching: {
      type: Boolean,
      default: !1
    },
    flat: {
      type: Boolean,
      default: !1
    },
    instanceId: {
      default: () => `${Dn++}$$`,
      type: [String, Number]
    },
    joinValues: {
      type: Boolean,
      default: !1
    },
    limit: {
      type: Number,
      default: 1 / 0
    },
    limitText: {
      type: Function,
      default: function(t) {
        return `and ${t} more`;
      }
    },
    loadingText: {
      type: String,
      default: "Loading..."
    },
    loadOptions: {
      type: Function
    },
    matchKeys: {
      type: Array,
      default: ge(["label"])
    },
    maxHeight: {
      type: Number,
      default: 300
    },
    multiple: {
      type: Boolean,
      default: !1
    },
    name: {
      type: String
    },
    noChildrenText: {
      type: String,
      default: "No sub-options."
    },
    noOptionsText: {
      type: String,
      default: "No options available."
    },
    noResultsText: {
      type: String,
      default: "No results found..."
    },
    normalizer: {
      type: Function,
      default: yn
    },
    openDirection: {
      type: String,
      default: "auto",
      validator(e) {
        return N(["auto", "top", "bottom", "above", "below"], e);
      }
    },
    openOnClick: {
      type: Boolean,
      default: !0
    },
    openOnFocus: {
      type: Boolean,
      default: !1
    },
    options: {
      type: Array
    },
    placeholder: {
      type: String,
      default: "Select..."
    },
    required: {
      type: Boolean,
      default: !1
    },
    retryText: {
      type: String,
      default: "Retry?"
    },
    retryTitle: {
      type: String,
      default: "Click to retry"
    },
    searchable: {
      type: Boolean,
      default: !0
    },
    searchNested: {
      type: Boolean,
      default: !1
    },
    searchPromptText: {
      type: String,
      default: "Type to search..."
    },
    showCount: {
      type: Boolean,
      default: !1
    },
    showCountOf: {
      type: String,
      default: M,
      validator(e) {
        return N([M, x, R, A], e);
      }
    },
    showCountOnSearch: null,
    sortValueBy: {
      type: String,
      default: Se,
      validator(e) {
        return N([Se, Oe, be], e);
      }
    },
    tabIndex: {
      type: Number,
      default: 0
    },
    modelValue: null,
    valueConsistsOf: {
      type: String,
      default: H,
      validator(e) {
        return N([Q, H, U, K], e);
      }
    },
    valueFormat: {
      type: String,
      default: "id"
    },
    zIndex: {
      type: [Number, String],
      default: 999
    }
  },
  data() {
    return {
      trigger: {
        isFocused: !1,
        searchQuery: ""
      },
      menu: {
        isOpen: !1,
        current: null,
        lastScrollPosition: 0,
        placement: "bottom"
      },
      forest: {
        normalizedOptions: [],
        nodeMap: S(),
        checkedStateMap: S(),
        selectedNodeIds: this.extractCheckedNodeIdsFromValue(),
        selectedNodeMap: S()
      },
      rootOptionsStates: q(),
      localSearch: {
        active: !1,
        noResults: !0,
        countMap: S()
      },
      remoteSearch: S()
    };
  },
  computed: {
    selectedNodes() {
      return this.forest.selectedNodeIds.map(this.getNode);
    },
    internalValue() {
      let e;
      if (this.single || this.flat || this.disableBranchNodes || this.valueConsistsOf === Q)
        e = this.forest.selectedNodeIds.slice();
      else if (this.valueConsistsOf === H)
        e = this.forest.selectedNodeIds.filter((t) => {
          const n = this.getNode(t);
          return n.isRootNode ? !0 : !this.isSelected(n.parentNode);
        });
      else if (this.valueConsistsOf === U)
        e = this.forest.selectedNodeIds.filter((t) => {
          var s;
          const n = this.getNode(t);
          return n != null && n.isLeaf ? !0 : ((s = n == null ? void 0 : n.children) == null ? void 0 : s.length) === 0;
        });
      else if (this.valueConsistsOf === K) {
        const t = [];
        e = this.forest.selectedNodeIds.slice(), this.selectedNodes.forEach((n) => {
          n.ancestors.forEach((s) => {
            N(t, s.id) || N(e, s.id) || t.push(s.id);
          });
        }), e.push(...t);
      }
      return this.sortValueBy === Oe ? e.sort((t, n) => Tn(this.getNode(t), this.getNode(n))) : this.sortValueBy === be && e.sort((t, n) => Fe(this.getNode(t), this.getNode(n))), e;
    },
    hasValue() {
      return this.internalValue.length > 0;
    },
    single() {
      return !this.multiple;
    },
    visibleOptionIds() {
      const e = [];
      return this.traverseAllNodesByIndex((t) => ((!this.localSearch.active || this.shouldOptionBeIncludedInSearchResult(t)) && e.push(t.id), !(t.isBranch && !this.shouldExpand(t)))), e;
    },
    hasVisibleOptions() {
      return this.visibleOptionIds.length !== 0;
    },
    showCountOnSearchComputed() {
      return typeof this.showCountOnSearch == "boolean" ? this.showCountOnSearch : this.showCount;
    },
    hasBranchNodes() {
      return this.forest.normalizedOptions.some((e) => e.isBranch);
    },
    shouldFlattenOptions() {
      return this.localSearch.active && this.flattenSearchResults;
    },
    getRemoteSearchEntry() {
      const { searchQuery: e } = this.trigger, t = this.remoteSearch[e] || {
        ...q(),
        options: []
      };
      if (this.$watch(
        () => t.options,
        () => {
          this.trigger.searchQuery === e && this.initialize();
        },
        { deep: !0 }
      ), e === "") {
        if (Array.isArray(this.defaultOptions))
          return t.options = this.defaultOptions, t.isLoaded = !0, t;
        if (this.defaultOptions !== !0)
          return t.isLoaded = !0, t;
      }
      return this.remoteSearch[e] || (this.remoteSearch[e] = t), t;
    }
  },
  watch: {
    alwaysOpen(e) {
      e ? this.openMenu() : this.closeMenu();
    },
    branchNodesFirst() {
      this.initialize();
    },
    disabled(e) {
      e && this.menu.isOpen ? this.closeMenu() : !e && !this.menu.isOpen && this.alwaysOpen && this.openMenu();
    },
    flat() {
      this.initialize();
    },
    internalValue(e, t) {
      j(e, t) && this.$emit("update:modelValue", this.getValue(), this.getInstanceId());
    },
    matchKeys() {
      this.initialize();
    },
    multiple(e) {
      e && this.buildForestState();
    },
    options: {
      handler() {
        this.async || (this.initialize(), this.rootOptionsStates.isLoaded = Array.isArray(this.options));
      },
      deep: !0,
      immediate: !0
    },
    "trigger.searchQuery": {
      handler() {
        this.async ? this.handleRemoteSearch() : this.handleLocalSearch(), this.$emit("search-change", this.trigger.searchQuery, this.getInstanceId());
      }
    },
    modelValue() {
      const e = this.extractCheckedNodeIdsFromValue();
      j(e, this.internalValue) && this.fixSelectedNodeIds(e);
    }
  },
  methods: {
    verifyProps() {
      E(
        () => this.async ? this.searchable : !0,
        () => 'For async search mode, the value of "searchable" prop must be true.'
      ), this.options == null && !this.loadOptions && E(
        () => !1,
        () => 'Are you meant to dynamically load options? You need to use "loadOptions" prop.'
      ), this.flat && E(
        () => this.multiple,
        () => 'You are using flat mode. But you forgot to add "multiple=true"?'
      ), this.flat || [
        "autoSelectAncestors",
        "autoSelectDescendants",
        "autoDeselectAncestors",
        "autoDeselectDescendants"
      ].forEach((t) => {
        E(
          () => !this[t],
          () => `"${t}" only applies to flat mode.`
        );
      });
    },
    resetFlags() {
      this._blurOnSelect = !1;
    },
    initialize() {
      var t, n;
      const e = this.async ? this.getRemoteSearchEntry.options : this.options;
      if (Array.isArray(e)) {
        const s = this.forest.nodeMap;
        this.forest.nodeMap = S(), this.keepDataOfSelectedNodes(s), this.forest.normalizedOptions = this.normalize(C, e, s), this.fixSelectedNodeIds(this.internalValue), (n = (t = this.$refs) == null ? void 0 : t.menu) == null || n.$forceUpdate();
      } else
        this.forest.normalizedOptions = [];
    },
    getInstanceId() {
      return this.instanceId == null ? this.id : this.instanceId;
    },
    getValue() {
      if (this.valueFormat === "id")
        return this.multiple ? this.internalValue.slice() : this.internalValue[0];
      const e = this.internalValue.map((t) => this.getNode(t).raw);
      return this.multiple ? e : e[0];
    },
    getNode(e) {
      return E(
        () => e != null,
        () => `Invalid node id: ${e}`
      ), e == null ? null : e in this.forest.nodeMap ? this.forest.nodeMap[e] : this.createFallbackNode(e);
    },
    createFallbackNode(e) {
      const t = this.extractNodeFromValue(e), n = this.enhancedNormalizer(t).label || `${e}`, s = {
        id: e,
        label: n,
        ancestors: [],
        parentNode: C,
        isFallbackNode: !0,
        isRootNode: !0,
        isLeaf: !0,
        isBranch: !1,
        isDisabled: !1,
        isNew: !1,
        index: [-1],
        level: 0,
        raw: t
      };
      return this.forest.nodeMap[e] = s, s;
    },
    extractCheckedNodeIdsFromValue() {
      return this.modelValue == null ? [] : this.valueFormat === "id" ? this.multiple ? this.modelValue.slice() : [this.modelValue] : (this.multiple ? this.modelValue : [this.modelValue]).map((e) => this.enhancedNormalizer(e)).map((e) => e.id);
    },
    extractNodeFromValue(e) {
      const t = { id: e };
      if (this.valueFormat === "id")
        return t;
      const n = this.multiple ? Array.isArray(this.modelValue) ? this.modelValue : [] : this.modelValue ? [this.modelValue] : [];
      return Ve(
        n,
        (i) => i && this.enhancedNormalizer(i).id === e
      ) || t;
    },
    fixSelectedNodeIds(e) {
      let t = [];
      if (this.single || this.flat || this.disableBranchNodes || this.valueConsistsOf === Q)
        t = e;
      else if (this.valueConsistsOf === H)
        e.forEach((s) => {
          t.push(s);
          const i = this.getNode(s);
          i.isBranch && this.traverseDescendantsBFS(i, (o) => {
            t.push(o.id);
          });
        });
      else if (this.valueConsistsOf === U) {
        const s = S(), i = e.slice();
        for (; i.length; ) {
          const o = i.shift(), a = this.getNode(o);
          t.push(o), !a.isRootNode && (a.parentNode.id in s || (s[a.parentNode.id] = a.parentNode.children.length), --s[a.parentNode.id] === 0 && i.push(a.parentNode.id));
        }
      } else if (this.valueConsistsOf === K) {
        const s = S(), i = e.filter((o) => {
          const a = this.getNode(o);
          return a.isLeaf || a.children.length === 0;
        });
        for (; i.length; ) {
          const o = i.shift(), a = this.getNode(o);
          t.push(o), !a.isRootNode && (a.parentNode.id in s || (s[a.parentNode.id] = a.parentNode.children.length), --s[a.parentNode.id] === 0 && i.push(a.parentNode.id));
        }
      }
      j(this.forest.selectedNodeIds, t) && (this.forest.selectedNodeIds = t), this.buildForestState();
    },
    keepDataOfSelectedNodes(e) {
      this.forest.selectedNodeIds.forEach((t) => {
        if (!e[t])
          return;
        const n = {
          ...e[t],
          isFallbackNode: !0
        };
        this.forest.nodeMap[t] = n;
      });
    },
    isSelected(e) {
      return e && this.forest.selectedNodeMap[e.id] === !0;
    },
    traverseDescendantsBFS(e, t) {
      if (!e.isBranch)
        return;
      const n = e.children.slice();
      for (; n.length; ) {
        const s = n[0];
        s.isBranch && n.push(...s.children), t(s), n.shift();
      }
    },
    traverseDescendantsDFS(e, t) {
      !e.isBranch || e.children.forEach((n) => {
        this.traverseDescendantsDFS(n, t), t(n);
      });
    },
    traverseAllNodesDFS(e) {
      this.forest.normalizedOptions.forEach((t) => {
        this.traverseDescendantsDFS(t, e), e(t);
      });
    },
    traverseAllNodesByIndex(e) {
      const t = (n) => {
        n.children.forEach((s) => {
          e(s) !== !1 && s.isBranch && t(s);
        });
      };
      t({ children: this.forest.normalizedOptions });
    },
    toggleClickOutsideEvent(e) {
      e ? document.addEventListener("mousedown", this.handleClickOutside, !1) : document.removeEventListener("mousedown", this.handleClickOutside, !1);
    },
    getValueContainer() {
      return this.$refs.control.$refs["value-container"];
    },
    getInput() {
      return this.getValueContainer().$refs.input;
    },
    focusInput() {
      this.getInput().focus();
    },
    blurInput() {
      this.getInput().blur();
    },
    handleMouseDown: L(function(t) {
      if (t.preventDefault(), t.stopPropagation(), this.disabled)
        return;
      this.getValueContainer().$el.contains(t.target) && !this.menu.isOpen && (this.openOnClick || this.trigger.isFocused) && this.openMenu(), this._blurOnSelect ? this.blurInput() : this.focusInput(), this.resetFlags();
    }),
    handleClickOutside(e) {
      this.$refs.wrapper && !this.$refs.wrapper.contains(e.target) && (this.blurInput(), this.closeMenu());
    },
    handleLocalSearch() {
      const { searchQuery: e } = this.trigger, t = () => this.resetHighlightedOptionWhenNecessary(!0);
      if (!e)
        return this.localSearch.active = !1, t();
      this.localSearch.active = !0, this.localSearch.noResults = !0, this.traverseAllNodesDFS((i) => {
        i.isBranch && (i.isExpandedOnSearch = !1, i.showAllChildrenOnSearch = !1, i.isMatched = !1, i.hasMatchedDescendants = !1, this.localSearch.countMap[i.id] = {
          [M]: 0,
          [x]: 0,
          [R]: 0,
          [A]: 0
        });
      });
      const n = e.trim().toLocaleLowerCase(), s = n.replace(/\s+/g, " ").split(" ");
      return this.traverseAllNodesDFS((i) => {
        this.searchNested && s.length > 1 ? i.isMatched = s.every((o) => Ee(!1, o, i.nestedSearchLabel)) : i.isMatched = this.matchKeys.some((o) => Ee(
          !this.disableFuzzyMatching,
          n,
          i.lowerCased[o]
        )), i.isMatched && (this.localSearch.noResults = !1, i.ancestors.forEach((o) => this.localSearch.countMap[o.id][x]++), i.isLeaf && i.ancestors.forEach((o) => this.localSearch.countMap[o.id][A]++), i.parentNode !== C && (this.localSearch.countMap[i.parentNode.id][M] += 1, i.isLeaf && (this.localSearch.countMap[i.parentNode.id][R] += 1))), (i.isMatched || i.isBranch && i.isExpandedOnSearch) && i.parentNode !== C && (i.parentNode.isExpandedOnSearch = !0, i.parentNode.hasMatchedDescendants = !0);
      }), t(), !0;
    },
    handleRemoteSearch() {
      const { searchQuery: e } = this.trigger, t = this.getRemoteSearchEntry, n = () => {
        this.initialize(), this.resetHighlightedOptionWhenNecessary(!0);
      };
      return (e === "" || this.cacheOptions) && t.isLoaded ? n() : (this.callLoadOptionsProp({
        action: Ln,
        args: { searchQuery: e },
        isPending() {
          return t.isLoading;
        },
        start: () => {
          t.isLoading = !0, t.isLoaded = !1, t.loadingError = "";
        },
        succeed: (s) => {
          t.isLoaded = !0, t.options = s, this.trigger.searchQuery === e && n();
        },
        fail: (s) => {
          t.loadingError = Y(s);
        },
        end: () => {
          t.isLoading = !1;
        }
      }), !0);
    },
    shouldExpand(e) {
      return this.localSearch.active ? e.isExpandedOnSearch : e.isExpanded;
    },
    shouldOptionBeIncludedInSearchResult(e) {
      return !!(e.isMatched || e.isBranch && e.hasMatchedDescendants && !this.flattenSearchResults || !e.isRootNode && e.parentNode.showAllChildrenOnSearch);
    },
    shouldShowOptionInMenu(e) {
      return !(this.localSearch.active && !this.shouldOptionBeIncludedInSearchResult(e));
    },
    getControl() {
      return this.$refs.control.$el;
    },
    getMenu() {
      const e = this.appendToBody ? this.$refs.portal.portalTarget._instance.root.refs.menu.$refs.menu : this.$refs.menu.$refs.menu;
      return e && e.nodeName !== "#comment" ? e : null;
    },
    setCurrentHighlightedOption(e, t = !0) {
      const n = this.menu.current;
      if (n != null && n in this.forest.nodeMap && (this.forest.nodeMap[n].isHighlighted = !1), this.menu.current = e.id, e.isHighlighted = !0, this.menu.isOpen && t) {
        const s = () => {
          const i = this.getMenu(), o = i.querySelector(`.vue-treeselect__option[data-id="${e.id}"]`);
          o && Ze(i, o);
        };
        this.getMenu() ? s() : this.$nextTick(s);
      }
    },
    resetHighlightedOptionWhenNecessary(e = !1) {
      const { current: t } = this.menu;
      (e || t == null || !(t in this.forest.nodeMap) || !this.shouldShowOptionInMenu(this.getNode(t))) && this.highlightFirstOption();
    },
    highlightFirstOption() {
      if (!this.hasVisibleOptions)
        return;
      const e = this.visibleOptionIds[0];
      this.setCurrentHighlightedOption(this.getNode(e));
    },
    highlightPrevOption() {
      if (!this.hasVisibleOptions)
        return;
      const e = this.visibleOptionIds.indexOf(this.menu.current) - 1;
      if (e === -1)
        return this.highlightLastOption();
      this.setCurrentHighlightedOption(this.getNode(this.visibleOptionIds[e]));
    },
    highlightNextOption() {
      if (!this.hasVisibleOptions)
        return;
      const e = this.visibleOptionIds.indexOf(this.menu.current) + 1;
      if (e === this.visibleOptionIds.length)
        return this.highlightFirstOption();
      this.setCurrentHighlightedOption(this.getNode(this.visibleOptionIds[e]));
    },
    highlightLastOption() {
      if (!this.hasVisibleOptions)
        return;
      const e = ve(this.visibleOptionIds);
      this.setCurrentHighlightedOption(this.getNode(e));
    },
    resetSearchQuery() {
      this.trigger.searchQuery = "";
    },
    closeMenu() {
      !this.menu.isOpen || !this.disabled && this.alwaysOpen || (this.saveMenuScrollPosition(), this.menu.isOpen = !1, this.toggleClickOutsideEvent(!1), this.resetSearchQuery(), this.$emit("close", this.getValue(), this.getInstanceId()));
    },
    openMenu() {
      this.disabled || this.menu.isOpen || (this.menu.isOpen = !0, this.$nextTick(this.resetHighlightedOptionWhenNecessary), this.$nextTick(this.restoreMenuScrollPosition), !this.options && !this.async && this.loadRootOptions(), this.toggleClickOutsideEvent(!0), this.$emit("open", this.getInstanceId()));
    },
    toggleMenu() {
      this.menu.isOpen ? this.closeMenu() : this.openMenu();
    },
    toggleExpanded(e) {
      let t;
      this.localSearch.active ? (t = e.isExpandedOnSearch = !e.isExpandedOnSearch, t && (e.showAllChildrenOnSearch = !0)) : t = e.isExpanded = !e.isExpanded, t && !e.childrenStates.isLoaded && this.loadChildrenOptions(e);
    },
    buildForestState() {
      const e = S();
      this.forest.selectedNodeIds.forEach((n) => {
        e[n] = !0;
      }), this.forest.selectedNodeMap = e;
      const t = S();
      this.multiple && (this.traverseAllNodesByIndex((n) => {
        t[n.id] = ne;
      }), this.selectedNodes.forEach((n) => {
        t[n.id] = ze, !this.flat && !this.disableBranchNodes && n.ancestors.forEach((s) => {
          this.isSelected(s) || (t[s.id] = ke);
        });
      })), this.forest.checkedStateMap = t;
    },
    enhancedNormalizer(e) {
      return {
        ...e,
        ...this.normalizer(e, this.getInstanceId())
      };
    },
    normalize(e, t, n) {
      let s = t.map((i) => [this.enhancedNormalizer(i), i]).map(([i, o], a) => {
        this.checkDuplication(i), this.verifyNodeShape(i);
        const {
          id: c,
          label: h,
          children: u,
          isDefaultExpanded: g
        } = i, d = e === C, v = d ? 0 : e.level + 1, w = Array.isArray(u) || u === null, T = !w, B = !!i.isDisabled || !this.flat && !d && e.isDisabled, V = !!i.isNew, b = this.matchKeys.reduce((f, y) => ({
          ...f,
          [y]: In(i[y]).toLocaleLowerCase()
        }), {}), k = d ? b.label : `${e.nestedSearchLabel} ${b.label}`;
        this.forest.nodeMap[c] = S();
        const l = this.forest.nodeMap[c];
        if (l.id = c, l.label = h, l.level = v, l.ancestors = d ? [] : [e].concat(e.ancestors), l.index = (d ? [] : e.index).concat(a), l.parentNode = e, l.lowerCased = b, l.nestedSearchLabel = k, l.isDisabled = B, l.isNew = V, l.isMatched = !1, l.isHighlighted = !1, l.isBranch = w, l.isLeaf = T, l.isRootNode = d, l.raw = o, w) {
          const f = Array.isArray(u);
          l.childrenStates = { ...q(), isLoaded: f }, l.isExpanded = typeof g == "boolean" ? g : v < this.defaultExpandLevel, l.hasMatchedDescendants = !1, l.hasDisabledDescendants = !1, l.isExpandedOnSearch = !1, l.showAllChildrenOnSearch = !1, l.count = {
            [M]: 0,
            [x]: 0,
            [R]: 0,
            [A]: 0
          }, l.children = f ? this.normalize(l, u, n) : [], g === !0 && l.ancestors.forEach((y) => {
            y.isExpanded = !0;
          }), !f && typeof this.loadOptions != "function" ? E(
            () => !1,
            () => 'Unloaded branch node detected. "loadOptions" prop is required to load its children.'
          ) : !f && l.isExpanded && this.loadChildrenOptions(l);
        }
        if (l.ancestors.forEach((f) => f.count[x]++), T && l.ancestors.forEach((f) => f.count[A]++), d || (e.count[M] += 1, T && (e.count[R] += 1), B && (e.hasDisabledDescendants = !0)), n && n[c]) {
          const f = n[c];
          l.isMatched = f.isMatched, l.showAllChildrenOnSearch = f.showAllChildrenOnSearch, l.isHighlighted = f.isHighlighted, f.isBranch && l.isBranch && (l.isExpanded = f.isExpanded, l.isExpandedOnSearch = f.isExpandedOnSearch, f.childrenStates.isLoaded && !l.childrenStates.isLoaded ? l.isExpanded = !1 : l.childrenStates = { ...f.childrenStates });
        }
        return l;
      });
      if (this.branchNodesFirst) {
        const i = s.filter((a) => a.isBranch), o = s.filter((a) => a.isLeaf);
        s = i.concat(o);
      }
      return s;
    },
    loadRootOptions() {
      this.callLoadOptionsProp({
        action: wn,
        isPending: () => this.rootOptionsStates.isLoading,
        start: () => {
          this.rootOptionsStates.isLoading = !0, this.rootOptionsStates.loadingError = "";
        },
        succeed: () => {
          this.rootOptionsStates.isLoaded = !0, this.$nextTick(() => {
            this.resetHighlightedOptionWhenNecessary(!0);
          });
        },
        fail: (e) => {
          this.rootOptionsStates.loadingError = Y(e);
        },
        end: () => {
          this.rootOptionsStates.isLoading = !1;
        }
      });
    },
    loadChildrenOptions(e) {
      const { id: t, raw: n } = e;
      this.callLoadOptionsProp({
        action: Cn,
        args: {
          parentNode: n
        },
        isPending: () => this.getNode(t).childrenStates.isLoading,
        start: () => {
          this.getNode(t).childrenStates.isLoading = !0, this.getNode(t).childrenStates.loadingError = "";
        },
        succeed: () => {
          this.getNode(t).childrenStates.isLoaded = !0;
        },
        fail: (s) => {
          this.getNode(t).childrenStates.loadingError = Y(s);
        },
        end: () => {
          this.getNode(t).childrenStates.isLoading = !1;
        }
      });
    },
    callLoadOptionsProp({
      action: e,
      args: t,
      isPending: n,
      start: s,
      succeed: i,
      fail: o,
      end: a
    }) {
      if (!this.loadOptions || n())
        return;
      s();
      const c = On((u, g) => {
        u ? o(u) : i(g), a();
      }), h = this.loadOptions({
        id: this.getInstanceId(),
        instanceId: this.getInstanceId(),
        action: e,
        ...t,
        callback: c
      });
      $e(h) && h.then(() => {
        c();
      }, (u) => {
        c(u);
      }).catch((u) => {
        console.error(u);
      });
    },
    checkDuplication(e) {
      E(
        () => !(e.id in this.forest.nodeMap && !this.forest.nodeMap[e.id].isFallbackNode),
        () => `Detected duplicate presence of node id ${JSON.stringify(e.id)}. Their labels are "${this.forest.nodeMap[e.id].label}" and "${e.label}" respectively.`
      );
    },
    verifyNodeShape(e) {
      E(
        () => !(e.children === void 0 && e.isBranch === !0),
        () => "Are you meant to declare an unloaded branch node? `isBranch: true` is no longer supported, please use `children: null` instead."
      );
    },
    select(e) {
      if (this.disabled || e.isDisabled)
        return;
      this.single && this.clear();
      const t = this.multiple && !this.flat ? this.forest.checkedStateMap[e.id] === ne : !this.isSelected(e);
      t ? this._selectNode(e) : this._deselectNode(e), this.buildForestState(), t ? this.$emit("select", e.raw, this.getInstanceId()) : this.$emit("deselect", e.raw, this.getInstanceId()), this.localSearch.active && t && (this.single || this.clearOnSelect) && this.resetSearchQuery(), this.single && this.closeOnSelect && (this.closeMenu(), this.searchable && (this._blurOnSelect = !0));
    },
    clear() {
      this.hasValue && (this.single || this.allowClearingDisabled ? this.forest.selectedNodeIds = [] : this.forest.selectedNodeIds = this.forest.selectedNodeIds.filter((e) => this.getNode(e).isDisabled), this.buildForestState());
    },
    _selectNode(e) {
      if (this.single || this.disableBranchNodes)
        return this.addValue(e);
      if (this.flat)
        return this.addValue(e), this.autoSelectAncestors ? e.ancestors.forEach((n) => {
          !this.isSelected(n) && !n.isDisabled && this.addValue(n);
        }) : this.autoSelectDescendants && this.traverseDescendantsBFS(e, (n) => {
          !this.isSelected(n) && !n.isDisabled && this.addValue(n);
        }), !1;
      const t = e.isLeaf || !e.hasDisabledDescendants || this.allowSelectingDisabledDescendants;
      if (t && this.addValue(e), e.isBranch && this.traverseDescendantsBFS(e, (n) => {
        (!n.isDisabled || this.allowSelectingDisabledDescendants) && this.addValue(n);
      }), t) {
        let n = e;
        for (; (n = n.parentNode) !== C && n.children.every(this.isSelected); )
          this.addValue(n);
      }
      return !0;
    },
    _deselectNode(e) {
      if (this.disableBranchNodes)
        return this.removeValue(e);
      if (this.flat)
        return this.removeValue(e), this.autoDeselectAncestors ? e.ancestors.forEach((n) => {
          this.isSelected(n) && !n.isDisabled && this.removeValue(n);
        }) : this.autoDeselectDescendants && this.traverseDescendantsBFS(e, (n) => {
          this.isSelected(n) && !n.isDisabled && this.removeValue(n);
        }), !1;
      let t = !1;
      if (e.isBranch && this.traverseDescendantsDFS(e, (n) => {
        (!n.isDisabled || this.allowSelectingDisabledDescendants) && (this.removeValue(n), t = !0);
      }), e.isLeaf || t || e.children.length === 0) {
        this.removeValue(e);
        let n = e;
        for (; (n = n.parentNode) !== C && this.isSelected(n); )
          this.removeValue(n);
      }
      return !1;
    },
    addValue(e) {
      this.forest.selectedNodeIds.push(e.id), this.forest.selectedNodeMap[e.id] = !0;
    },
    removeValue(e) {
      Ie(this.forest.selectedNodeIds, e.id), delete this.forest.selectedNodeMap[e.id];
    },
    removeLastValue() {
      if (!this.hasValue)
        return;
      this.single && this.clear();
      const e = ve(this.internalValue), t = this.getNode(e);
      this.select(t);
    },
    saveMenuScrollPosition() {
      const e = this.getMenu();
      e && (this.menu.lastScrollPosition = e.scrollTop);
    },
    restoreMenuScrollPosition() {
      const e = this.getMenu();
      e && (e.scrollTop = this.menu.lastScrollPosition);
    }
  },
  created() {
    this.verifyProps(), this.resetFlags();
  },
  mounted() {
    this.autoFocus && this.focusInput(), !this.options && !this.async && this.autoLoadRootOptions && this.loadRootOptions(), this.alwaysOpen && this.openMenu(), this.async && this.defaultOptions && this.handleRemoteSearch();
  },
  unmounted() {
    this.toggleClickOutsideEvent(!1);
  }
};
function Rn(e) {
  return typeof e == "string" ? e : e != null && !Ae(e) ? JSON.stringify(e) : "";
}
const An = se({
  functional: !0,
  inject: ["instance"],
  render(e) {
    const { instance: t } = e;
    if (!t || !t.name || t.disabled || !t.hasValue)
      return null;
    let n = t.internalValue.map(Rn);
    return t.multiple && t.joinValues && (n = [
      n.join(t.delimiter)
    ]), n.map((s, i) => r("input", {
      type: "hidden",
      name: t.name,
      value: s,
      key: `hidden-field-${i}`
    }));
  }
}), $n = [
  m.ENTER,
  m.END,
  m.HOME,
  m.ARROW_LEFT,
  m.ARROW_UP,
  m.ARROW_RIGHT,
  m.ARROW_DOWN
], He = {
  inject: ["instance"],
  data: () => ({
    inputWidth: ye,
    value: ""
  }),
  computed: {
    needAutoSize() {
      const { instance: e } = this;
      return e.searchable && !e.disabled && e.multiple;
    },
    inputStyle() {
      return {
        width: this.needAutoSize ? `${this.inputWidth}px` : null
      };
    }
  },
  watch: {
    "instance.trigger.searchQuery": function(e) {
      this.value = e;
    },
    value() {
      this.needAutoSize && this.$nextTick(this.updateInputWidth);
    }
  },
  created() {
    this.debouncedCallback = Gt(
      this.updateSearchQuery,
      Mn,
      { leading: !0, trailing: !0 }
    );
  },
  methods: {
    clear() {
      this.onInput({
        target: { value: "" }
      });
    },
    focus() {
      const { instance: e } = this;
      return e.disabled ? !0 : this.$refs.input && this.$refs.input.focus();
    },
    blur() {
      return this.$refs.input && this.$refs.input.blur();
    },
    onFocus() {
      const { instance: e } = this;
      e.trigger.isFocused = !0, e.openOnFocus && e.openMenu();
    },
    onBlur() {
      const { instance: e } = this, t = e.getMenu();
      return t && document.activeElement === t ? this.focus() : (e.trigger.isFocused = !1, e.closeMenu(), !0);
    },
    onInput(e) {
      const { value: t } = e.target;
      this.value = t, t ? this.debouncedCallback() : (this.debouncedCallback.cancel(), this.updateSearchQuery());
    },
    onKeyDown(e) {
      const { instance: t } = this, n = "which" in e ? e.which : e.keyCode;
      if (!(e.ctrlKey || e.shiftKey || e.altKey || e.metaKey)) {
        if (!t.menu.isOpen && N($n, n))
          return e.preventDefault(), t.openMenu();
        switch (n) {
          case m.BACKSPACE: {
            t.backspaceRemoves && !this.value.length && t.removeLastValue();
            break;
          }
          case m.ENTER: {
            if (e.preventDefault(), t.menu.current === null)
              return;
            const s = t.getNode(t.menu.current);
            if (s.isBranch && t.disableBranchNodes)
              return;
            t.select(s);
            break;
          }
          case m.ESCAPE: {
            this.value.length ? this.clear() : t.menu.isOpen && t.closeMenu();
            break;
          }
          case m.END: {
            e.preventDefault(), t.highlightLastOption();
            break;
          }
          case m.HOME: {
            e.preventDefault(), t.highlightFirstOption();
            break;
          }
          case m.ARROW_LEFT: {
            const s = t.getNode(t.menu.current);
            s.isBranch && t.shouldExpand(s) ? (e.preventDefault(), t.toggleExpanded(s)) : !s.isRootNode && (s.isLeaf || s.isBranch && !t.shouldExpand(s)) && (e.preventDefault(), t.setCurrentHighlightedOption(s.parentNode));
            break;
          }
          case m.ARROW_UP: {
            e.preventDefault(), t.highlightPrevOption();
            break;
          }
          case m.ARROW_RIGHT: {
            const s = t.getNode(t.menu.current);
            s.isBranch && !t.shouldExpand(s) && (e.preventDefault(), t.toggleExpanded(s));
            break;
          }
          case m.ARROW_DOWN: {
            e.preventDefault(), t.highlightNextOption();
            break;
          }
          case m.DELETE: {
            t.deleteRemoves && !this.value.length && t.removeLastValue();
            break;
          }
          default:
            t.openMenu();
        }
      }
    },
    onMouseDown(e) {
      this.value.length && e.stopPropagation();
    },
    renderInputContainer() {
      const { instance: e } = this, t = {}, n = [];
      return e.searchable && !e.disabled && (n.push(this.renderInput()), this.needAutoSize && n.push(this.renderSizer())), e.searchable || te(t, {
        on: {
          focus: this.onFocus,
          blur: this.onBlur,
          keydown: this.onKeyDown
        },
        ref: "input"
      }), !e.searchable && !e.disabled && te(t, {
        attrs: {
          tabIndex: e.tabIndex
        }
      }), r("div", { class: "vue-treeselect__input-container", ...t }, n);
    },
    renderInput() {
      const { instance: e } = this;
      return r("input", {
        ref: "input",
        class: "vue-treeselect__input",
        type: "text",
        autocomplete: "off",
        tabIndex: e.tabIndex,
        required: e.required && !e.hasValue,
        value: this.value,
        style: this.inputStyle,
        onFocus: this.onFocus,
        onInput: this.onInput,
        onBlur: this.onBlur,
        onKeydown: this.onKeyDown,
        onMousedown: this.onMouseDown
      });
    },
    renderSizer() {
      return r("div", { ref: "sizer", class: "vue-treeselect__sizer" }, [this.value]);
    },
    updateInputWidth() {
      this.inputWidth = Math.max(
        ye,
        this.$refs.sizer.scrollWidth + 15
      );
    },
    updateSearchQuery() {
      const { instance: e } = this;
      e.trigger.searchQuery = this.value;
    }
  },
  render() {
    return this.renderInputContainer();
  }
}, We = {
  inject: ["instance"],
  render() {
    const { instance: e } = this, t = {
      "vue-treeselect__placeholder": !0,
      "vue-treeselect-helper-zoom-effect-off": !0,
      "vue-treeselect-helper-hide": e.hasValue || e.trigger.searchQuery
    };
    return r("div", { class: t }, e.placeholder);
  }
}, Bn = {
  inject: ["instance"],
  methods: {
    renderSingleValueLabel() {
      const { instance: e } = this, t = e.selectedNodes[0], n = e.$slots["value-label"];
      return n ? n({ node: t }) : t.label;
    }
  },
  render() {
    const { instance: e, $parent: { renderValueContainer: t } } = this, n = e.hasValue && !e.trigger.searchQuery;
    return t([
      n && r("div", { class: "vue-treeselect__single-value" }, [this.renderSingleValueLabel()]),
      r(We),
      r(He, { ref: "input" })
    ]);
  }
}, re = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, i] of t)
    n[s] = i;
  return n;
}, Vn = {}, kn = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 348.333 348.333"
}, zn = /* @__PURE__ */ Ne("path", { d: `M336.559 68.611L231.016 174.165l105.543 105.549c15.699
    15.705 15.699 41.145 0 56.85-7.844 7.844-18.128 11.769-28.407
    11.769-10.296 0-20.581-3.919-28.419-11.769L174.167 231.003 68.609
     336.563c-7.843 7.844-18.128 11.769-28.416 11.769-10.285
      0-20.563-3.919-28.413-11.769-15.699-15.698-15.699-41.139 0-56.85l105.54-105.549L11.774
       68.611c-15.699-15.699-15.699-41.145 0-56.844 15.696-15.687 41.127-15.687 56.829 0l105.563
       105.554L279.721 11.767c15.705-15.687 41.139-15.687 56.832 0 15.705 15.699
        15.705 41.145.006 56.844z` }, null, -1), Fn = [
  zn
];
function Hn(e, t) {
  return $(), ie("svg", kn, Fn);
}
const Pe = /* @__PURE__ */ re(Vn, [["render", Hn]]), Wn = {
  inject: ["instance"],
  props: {
    node: {
      type: Object,
      required: !0
    }
  },
  methods: {
    handleMouseDown: L(function() {
      const { instance: t, node: n } = this;
      t.select(n);
    })
  },
  render() {
    const { instance: e, node: t } = this, n = {
      "vue-treeselect__multi-value-item": !0,
      "vue-treeselect__multi-value-item-disabled": t.isDisabled,
      "vue-treeselect__multi-value-item-new": t.isNew
    }, s = e.$slots["value-label"], i = s ? s({ node: t }) : t.label || t.id;
    return r("div", { class: "vue-treeselect__multi-value-item-container" }, [
      r("div", { class: n, onMousedown: this.handleMouseDown }, [
        r(
          "span",
          { class: "vue-treeselect__multi-value-label" },
          i
        ),
        r("span", { class: "vue-treeselect__icon vue-treeselect__value-remove" }, [
          r(Pe)
        ])
      ])
    ]);
  }
}, Pn = {
  inject: ["instance"],
  methods: {
    renderMultiValueItems() {
      const { instance: e } = this;
      return e.internalValue.slice(0, e.limit).map(e.getNode).map((t) => r(Wn, { key: `multi-value-item-${t.id}`, node: t }));
    },
    renderExceedLimitTip() {
      const { instance: e } = this, t = e.internalValue.length - e.limit;
      return t <= 0 ? null : r("div", { class: "vue-treeselect__limit-tip vue-treeselect-helper-zoom-effect-off", key: "exceed-limit-tip" }, [
        r("span", { class: "vue-treeselect__limit-tip-text" }, [e.limitText(t)])
      ]);
    }
  },
  render() {
    const { renderValueContainer: e } = this.$parent;
    return e(
      r("transition-group", {
        class: "vue-treeselect__multi-value",
        tag: "div",
        name: "vue-treeselect__multi-value-item--transition",
        appear: !0
      }, [
        this.renderMultiValueItems(),
        this.renderExceedLimitTip(),
        r(We, { key: "placeholder" }),
        r(He, { ref: "input", key: "input" })
      ])
    );
  }
}, jn = {}, Qn = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 292.362 292.362"
}, Un = /* @__PURE__ */ Ne("path", { d: `M286.935 69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952
     0-9.233 1.807-12.85 5.424C1.807 72.998 0 77.279 0 82.228c0 4.948 1.807 9.229
      5.424 12.847l127.907 127.907c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811
       12.847-5.428L286.935 95.074c3.613-3.617 5.427-7.898 5.427-12.847
        0-4.948-1.814-9.229-5.427-12.85z` }, null, -1), Kn = [
  Un
];
function qn(e, t) {
  return $(), ie("svg", Qn, Kn);
}
const je = /* @__PURE__ */ re(jn, [["render", qn]]), Yn = {
  inject: ["instance"],
  computed: {
    shouldShowX() {
      const { instance: e } = this;
      return e.clearable && !e.disabled && e.hasValue && (this.hasUndisabledValue || e.allowClearingDisabled);
    },
    shouldShowArrow() {
      const { instance: e } = this;
      return e.alwaysOpen ? !e.menu.isOpen : !0;
    },
    hasUndisabledValue() {
      const { instance: e } = this;
      return e.hasValue && e.internalValue.some((t) => !e.getNode(t).isDisabled);
    }
  },
  methods: {
    renderX() {
      const { instance: e } = this, t = e.multiple ? e.clearAllText : e.clearValueText;
      return this.shouldShowX ? r("div", { class: "vue-treeselect__x-container", title: t, onMousedown: this.handleMouseDownOnX }, [
        r(Pe, { class: "vue-treeselect__x" })
      ]) : null;
    },
    renderArrow() {
      const { instance: e } = this, t = {
        "vue-treeselect__control-arrow": !0,
        "vue-treeselect__control-arrow--rotated": e.menu.isOpen
      };
      return this.shouldShowArrow ? r("div", { class: "vue-treeselect__control-arrow-container", onMousedown: this.handleMouseDownOnArrow }, [
        r(je, { class: t })
      ]) : null;
    },
    handleMouseDownOnX: L(function(t) {
      t.stopPropagation(), t.preventDefault();
      const { instance: n } = this, s = n.beforeClearAll(), i = (o) => {
        o && n.clear();
      };
      $e(s) ? s.then(i) : setTimeout(() => i(s), 0);
    }),
    handleMouseDownOnArrow: L(function(t) {
      t.preventDefault(), t.stopPropagation();
      const { instance: n } = this;
      n.focusInput(), n.toggleMenu();
    }),
    renderValueContainer(e) {
      return r("div", { class: "vue-treeselect__value-container" }, [
        e
      ]);
    }
  },
  render() {
    const { instance: e } = this, t = e.single ? Bn : Pn;
    return r("div", { class: "vue-treeselect__control", onMousedown: e.handleMouseDown }, [
      r(t, { ref: "value-container" }),
      this.renderX(),
      this.renderArrow()
    ]);
  }
}, O = se({
  functional: !0,
  props: {
    type: {
      type: String,
      required: !0
    },
    icon: {
      type: String,
      required: !0
    }
  },
  render() {
    const { type: e, icon: t } = this;
    return r("div", {
      class: `vue-treeselect__tip vue-treeselect__${e}-tip`
    }, [
      r("div", {
        class: "vue-treeselect__icon-container"
      }, [
        r("span", { class: `vue-treeselect__icon-${t}` })
      ]),
      r("span", {
        class: `vue-treeselect__tip-text vue-treeselect__${e}-tip-text`
      }, [
        this.$slots.default()
      ])
    ]);
  }
});
let X, G, J;
const Qe = {
  name: "vue-treeselect--option",
  inject: ["instance"],
  props: {
    node: {
      type: Object,
      required: !0
    }
  },
  computed: {
    shouldExpand() {
      const { instance: e, node: t } = this;
      return t.isBranch && e.shouldExpand(t);
    },
    shouldShow() {
      const { instance: e, node: t } = this;
      return e.shouldShowOptionInMenu(t);
    }
  },
  methods: {
    renderOption() {
      const { instance: e, node: t } = this, n = {
        "vue-treeselect__option": !0,
        "vue-treeselect__option--disabled": t.isDisabled,
        "vue-treeselect__option--selected": e.isSelected(t),
        "vue-treeselect__option--highlight": t.isHighlighted,
        "vue-treeselect__option--matched": e.localSearch.active && t.isMatched,
        "vue-treeselect__option--hide": !this.shouldShow
      };
      return r("div", {
        class: n,
        onMouseenter: this.handleMouseEnterOption,
        dataId: t.id
      }, [
        this.renderArrow(),
        this.renderCheckboxContainer([
          this.renderCheckbox()
        ]),
        this.renderLabelContainer([
          this.renderLabel()
        ])
      ]);
    },
    renderSubOptionsList() {
      return this.shouldExpand ? r("div", { class: "vue-treeselect__list" }, [
        ...this.renderSubOptions(),
        this.renderNoChildrenTip(),
        this.renderLoadingChildrenTip(),
        this.renderLoadingChildrenErrorTip()
      ]) : null;
    },
    renderArrow() {
      const { instance: e, node: t } = this;
      if (e.shouldFlattenOptions && this.shouldShow)
        return null;
      if (t.isBranch) {
        const n = {
          "vue-treeselect__option-arrow": !0,
          "vue-treeselect__option-arrow--rotated": this.shouldExpand
        };
        return r(
          "div",
          { class: "vue-treeselect__option-arrow-container", onMousedown: this.handleMouseDownOnArrow },
          [
            r("transition", { name: "vue-treeselect__option-arrow--prepare", appear: !0 }, [
              r(je, { class: n })
            ])
          ]
        );
      }
      return e.hasBranchNodes ? (X || (X = r("div", { class: "vue-treeselect__option-arrow-placeholder" }, [])), X) : null;
    },
    renderLabelContainer(e) {
      return r("div", {
        class: "vue-treeselect__label-container",
        onMousedown: this.handleMouseDownOnLabelContainer
      }, e);
    },
    renderCheckboxContainer(e) {
      const { instance: t, node: n } = this;
      return t.single || t.disableBranchNodes && n.isBranch ? null : r("div", {
        class: "vue-treeselect__checkbox-container",
        onMousedown: this.handleMouseDownOnLabelContainer
      }, e);
    },
    renderCheckbox() {
      const { instance: e, node: t } = this, n = e.forest.checkedStateMap[t.id], s = {
        "vue-treeselect__checkbox": !0,
        "vue-treeselect__checkbox--checked": n === ze,
        "vue-treeselect__checkbox--indeterminate": n === ke,
        "vue-treeselect__checkbox--unchecked": n === ne,
        "vue-treeselect__checkbox--disabled": t.isDisabled
      };
      return G || (G = r("span", { class: "vue-treeselect__check-mark" })), J || (J = r("span", { class: "vue-treeselect__minus-mark" })), r("span", { class: s }, [
        G,
        J
      ]);
    },
    renderLabel() {
      const { instance: e, node: t } = this, n = t.isBranch && (e.localSearch.active ? e.showCountOnSearchComputed : e.showCount), s = n ? e.localSearch.active ? e.localSearch.countMap[t.id][e.showCountOf] : t.count[e.showCountOf] : NaN, i = "vue-treeselect__label", o = "vue-treeselect__count", a = e.$slots["option-label"];
      return a ? a({
        node: t,
        shouldShowCount: n,
        count: s,
        labelClassName: i,
        countClassName: o
      }) : r("label", { class: i }, [
        t.label,
        n && r("span", { class: o }, [s])
      ]);
    },
    renderSubOptions() {
      const { node: e } = this;
      return e.childrenStates.isLoaded ? e.children.map((t) => r(Qe, { node: t, key: t.id })) : null;
    },
    renderNoChildrenTip() {
      const { instance: e, node: t } = this;
      return !t.childrenStates.isLoaded || t.children.length ? null : r(O, { type: "no-children", icon: "warning" }, () => e.noChildrenText);
    },
    renderLoadingChildrenTip() {
      const { instance: e, node: t } = this;
      return t.childrenStates.isLoading ? r(O, { type: "loading", icon: "loader" }, () => [e.noChildrenText]) : null;
    },
    renderLoadingChildrenErrorTip() {
      const { instance: e, node: t } = this;
      return t.childrenStates.loadingError ? r(O, { type: "error", icon: "error" }, () => [
        t.childrenStates.loadingError,
        r("a", { class: "vue-treeselect__retry", title: e.retryTitle, onMousedown: this.handleMouseDownOnRetry }, [
          e.retryText
        ])
      ]) : null;
    },
    handleMouseEnterOption(e) {
      const { instance: t, node: n } = this;
      e.target === e.currentTarget && t.setCurrentHighlightedOption(n, !1);
    },
    handleMouseDownOnArrow: L(function() {
      const { instance: t, node: n } = this;
      t.toggleExpanded(n);
    }),
    handleMouseDownOnLabelContainer: L(function() {
      const { instance: t, node: n } = this;
      n.isBranch && t.disableBranchNodes ? t.toggleExpanded(n) : t.select(n);
    }),
    handleMouseDownOnRetry: L(function() {
      const { instance: t, node: n } = this;
      t.loadChildrenOptions(n);
    })
  },
  render() {
    const { node: e } = this, t = this.instance.shouldFlattenOptions ? 0 : e.level, n = {
      "vue-treeselect__list-item": !0,
      [`vue-treeselect__indent-level-${t}`]: !0
    }, s = [this.renderOption()];
    return e.isBranch && s.push(r("transition", {
      name: "vue-treeselect__list--transition"
    }, [
      this.renderSubOptionsList()
    ])), r(
      "div",
      { class: n },
      s
    );
  }
}, Xn = Qe, Gn = {
  top: "top",
  bottom: "bottom",
  above: "top",
  below: "bottom"
}, Ue = {
  inject: ["instance"],
  computed: {
    menuStyle() {
      const { instance: e } = this;
      return {
        maxHeight: `${e.maxHeight}px`
      };
    },
    menuContainerStyle() {
      const { instance: e } = this;
      return {
        zIndex: e.appendToBody ? null : e.zIndex
      };
    }
  },
  watch: {
    "instance.menu.isOpen": function(e) {
      e ? this.$nextTick(this.onMenuOpen) : this.onMenuClose();
    }
  },
  created() {
    this.menuSizeWatcher = null, this.menuResizeAndScrollEventListeners = null;
  },
  mounted() {
    const { instance: e } = this;
    e.menu.isOpen && this.$nextTick(this.onMenuOpen);
  },
  unmounted() {
    this.onMenuClose();
  },
  methods: {
    renderMenu() {
      const { instance: e } = this;
      return e.menu.isOpen ? r(
        "div",
        {
          ref: "menu",
          class: "vue-treeselect__menu",
          onMousedown: e.handleMouseDown,
          style: this.menuStyle
        },
        [
          this.renderBeforeList(),
          e.async ? this.renderAsyncSearchMenuInner() : e.localSearch.active ? this.renderLocalSearchMenuInner() : this.renderNormalMenuInner(),
          this.renderAfterList()
        ]
      ) : null;
    },
    renderBeforeList() {
      const { instance: e } = this, t = e.$slots["before-list"];
      return t ? t() : null;
    },
    renderAfterList() {
      const { instance: e } = this, t = e.$slots["after-list"];
      return t ? t() : null;
    },
    renderNormalMenuInner() {
      const { instance: e } = this;
      return e.rootOptionsStates.isLoading ? this.renderLoadingOptionsTip() : e.rootOptionsStates.loadingError ? this.renderLoadingRootOptionsErrorTip() : e.rootOptionsStates.isLoaded && e.forest.normalizedOptions.length === 0 ? this.renderNoAvailableOptionsTip() : this.renderOptionList();
    },
    renderLocalSearchMenuInner() {
      const { instance: e } = this;
      return e.rootOptionsStates.isLoading ? this.renderLoadingOptionsTip() : e.rootOptionsStates.loadingError ? this.renderLoadingRootOptionsErrorTip() : e.rootOptionsStates.isLoaded && e.forest.normalizedOptions.length === 0 ? this.renderNoAvailableOptionsTip() : e.localSearch.noResults ? this.renderNoResultsTip() : this.renderOptionList();
    },
    renderAsyncSearchMenuInner() {
      const { instance: e } = this, t = e.getRemoteSearchEntry, n = e.trigger.searchQuery === "" && !e.defaultOptions, s = n ? !1 : t.isLoaded && t.options.length === 0;
      return n ? this.renderSearchPromptTip() : t.isLoading ? this.renderLoadingOptionsTip() : t.loadingError ? this.renderAsyncSearchLoadingErrorTip() : s ? this.renderNoResultsTip() : this.renderOptionList();
    },
    renderOptionList() {
      const { instance: e } = this;
      return r(
        "div",
        { class: "vue-treeselect__list" },
        e.forest.normalizedOptions.map((t) => r(Xn, { node: t, key: t.id }))
      );
    },
    renderSearchPromptTip() {
      const { instance: e } = this;
      return r(O, { type: "search-prompt", icon: "warning" }, () => e.searchPromptText);
    },
    renderLoadingOptionsTip() {
      const { instance: e } = this;
      return r(O, { type: "loading", icon: "loader" }, () => [e.loadingText]);
    },
    renderLoadingRootOptionsErrorTip() {
      const { instance: e } = this;
      return r(O, { type: "error", icon: "error" }, () => [
        e.rootOptionsStates.loadingError,
        r("a", {
          class: "vue-treeselect__retry",
          onClick: e.loadRootOptions,
          title: e.retryTitle
        }, [e.retryText])
      ]);
    },
    renderAsyncSearchLoadingErrorTip() {
      const { instance: e } = this;
      return e.getRemoteSearchEntry, r(O, { type: "error", icon: "error" }, () => [
        e.rootOptionsStates.loadingError,
        r("a", {
          class: "vue-treeselect__retry",
          onClick: e.handleRemoteSearch,
          title: e.retryTitle
        }, [e.retryText])
      ]);
    },
    renderNoAvailableOptionsTip() {
      const { instance: e } = this;
      return r(O, { type: "no-options", icon: "warning" }, () => [e.searchPromptText]);
    },
    renderNoResultsTip() {
      const { instance: e } = this;
      return r(O, { type: "no-results", icon: "warning" }, () => [e.noResultsText]);
    },
    onMenuOpen() {
      this.adjustMenuOpenDirection(), this.setupMenuSizeWatcher(), this.setupMenuResizeAndScrollEventListeners();
    },
    onMenuClose() {
      this.removeMenuSizeWatcher(), this.removeMenuResizeAndScrollEventListeners();
    },
    adjustMenuOpenDirection() {
      const { instance: e } = this;
      if (!e.menu.isOpen)
        return;
      const t = e.getMenu(), n = e.getControl(), s = t.getBoundingClientRect(), i = n.getBoundingClientRect(), o = s.height, a = window.innerHeight, c = i.top, h = window.innerHeight - i.bottom, u = i.top >= 0 && i.top <= a || i.top < 0 && i.bottom > 0, g = h > o + _e, d = c > o + _e;
      u ? e.openDirection !== "auto" ? e.menu.placement = Gn[e.openDirection] : g || !d ? e.menu.placement = "bottom" : e.menu.placement = "top" : e.closeMenu();
    },
    setupMenuSizeWatcher() {
      const { instance: e } = this, t = e.getMenu();
      this.menuSizeWatcher || (this.menuSizeWatcher = {
        remove: xe(t, this.adjustMenuOpenDirection)
      });
    },
    setupMenuResizeAndScrollEventListeners() {
      const { instance: e } = this, t = e.getControl();
      this.menuResizeAndScrollEventListeners || (this.menuResizeAndScrollEventListeners = {
        remove: Re(t, this.adjustMenuOpenDirection)
      });
    },
    removeMenuSizeWatcher() {
      !this.menuSizeWatcher || (this.menuSizeWatcher.remove(), this.menuSizeWatcher = null);
    },
    removeMenuResizeAndScrollEventListeners() {
      !this.menuResizeAndScrollEventListeners || (this.menuResizeAndScrollEventListeners.remove(), this.menuResizeAndScrollEventListeners = null);
    }
  },
  render() {
    return r("div", { ref: "menu-container", class: "vue-treeselect__menu-container", style: this.menuContainerStyle }, [
      r("transition", { name: "vue-treeselect__menu--transition" }, this.renderMenu())
    ]);
  }
}, Jn = {
  name: "vue-treeselect--portal-target",
  inject: ["instance"],
  watch: {
    "instance.menu.isOpen": {
      handler(e) {
        e ? this.setupHandlers() : this.removeHandlers();
      }
    },
    "instance.menu.placement": {
      handler(e) {
        this.updateMenuContainerOffset();
      }
    }
  },
  created() {
    this.controlResizeAndScrollEventListeners = null, this.controlSizeWatcher = null;
  },
  mounted() {
    const { instance: e } = this;
    e.menu.isOpen && this.setupHandlers();
  },
  methods: {
    setupHandlers() {
      this.updateWidth(), this.updateMenuContainerOffset(), this.setupControlResizeAndScrollEventListeners(), this.setupControlSizeWatcher();
    },
    removeHandlers() {
      this.removeControlResizeAndScrollEventListeners(), this.removeControlSizeWatcher();
    },
    setupControlResizeAndScrollEventListeners() {
      const { instance: e } = this, t = e.getControl();
      this.controlResizeAndScrollEventListeners || (this.controlResizeAndScrollEventListeners = {
        remove: Re(t, this.updateMenuContainerOffset)
      });
    },
    setupControlSizeWatcher() {
      const { instance: e } = this, t = e.getControl();
      this.controlSizeWatcher || (this.controlSizeWatcher = {
        remove: xe(t, () => {
          this.updateWidth(), this.updateMenuContainerOffset();
        })
      });
    },
    removeControlResizeAndScrollEventListeners() {
      !this.controlResizeAndScrollEventListeners || (this.controlResizeAndScrollEventListeners.remove(), this.controlResizeAndScrollEventListeners = null);
    },
    removeControlSizeWatcher() {
      !this.controlSizeWatcher || (this.controlSizeWatcher.remove(), this.controlSizeWatcher = null);
    },
    updateWidth() {
      const { instance: e } = this, t = this.$el, s = e.getControl().getBoundingClientRect();
      t.style.width = `${s.width}px`;
    },
    updateMenuContainerOffset() {
      const { instance: e } = this, t = e.getControl(), n = this.$el, s = t.getBoundingClientRect(), i = n.getBoundingClientRect(), o = e.menu.placement === "bottom" ? s.height : 0, a = `${Math.round(s.left - i.left)}px`, c = `${Math.round(s.top - i.top + o)}px`, h = this.$refs.menu.$refs["menu-container"].style, g = Ve(["transform", "webkitTransform", "MozTransform", "msTransform"], (d) => d in document.body.style);
      h[g] = `translate(${a}, ${c})`;
    }
  },
  render() {
    const { instance: e } = this, t = ["vue-treeselect__portal-target", e.wrapperClass], n = { zIndex: e.zIndex };
    return r("div", {
      class: t,
      style: n,
      "data-instance-id": e.getInstanceId()
    }, [
      r(Ue, { ref: "menu" })
    ]);
  },
  unmounted() {
    this.removeHandlers();
  }
};
let Z;
const Zn = {
  inject: ["instance"],
  created() {
    this.portalTarget = null;
  },
  mounted() {
    this.setup();
  },
  unmounted() {
    this.teardown();
  },
  methods: {
    setup() {
      const e = document.createElement("div");
      document.body.appendChild(e), this.portalTarget = Ke({
        parent: this,
        ...Jn
      }), this.portalTarget.provide("instance", this.instance), this.portalTarget.mount(e);
    },
    teardown() {
      document.body.removeChild(this.portalTarget._instance.vnode.el.parentElement), this.portalTarget._instance.vnode.el.parentElement.innerHTML = "", this.portalTarget = null;
    }
  },
  render() {
    return Z || (Z = r("div", { class: "vue-treeselect__menu-placeholder" })), Z;
  }
}, es = se({
  name: "VueTreeselect",
  components: {
    HiddenFields: An,
    Control: Yn,
    Menu: Ue,
    MenuPortal: Zn
  },
  mixins: [xn],
  computed: {
    wrapperClass() {
      return {
        "vue-treeselect": !0,
        "vue-treeselect--single": this.single,
        "vue-treeselect--multi": this.multiple,
        "vue-treeselect--searchable": this.searchable,
        "vue-treeselect--disabled": this.disabled,
        "vue-treeselect--focused": this.trigger.isFocused,
        "vue-treeselect--has-value": this.hasValue,
        "vue-treeselect--open": this.menu.isOpen,
        "vue-treeselect--open-above": this.menu.placement === "top",
        "vue-treeselect--open-below": this.menu.placement === "bottom",
        "vue-treeselect--branch-nodes-disabled": this.disableBranchNodes,
        "vue-treeselect--append-to-body": this.appendToBody
      };
    }
  }
});
function ts(e, t, n, s, i, o) {
  const a = z("HiddenFields"), c = z("Control"), h = z("MenuPortal"), u = z("Menu");
  return $(), ie("div", {
    ref: "wrapper",
    class: qe(e.wrapperClass)
  }, [
    ae(a),
    ae(c, { ref: "control" }, null, 512),
    e.appendToBody ? ($(), le(h, {
      key: 0,
      ref: "portal"
    }, null, 512)) : ($(), le(u, {
      key: 1,
      ref: "menu"
    }, null, 512))
  ], 2);
}
const ss = /* @__PURE__ */ re(es, [["render", ts]]);
export {
  Ln as ASYNC_SEARCH,
  Cn as LOAD_CHILDREN_OPTIONS,
  wn as LOAD_ROOT_OPTIONS,
  ss as TreeSelect,
  ss as default,
  xn as treeselectMixin
};
