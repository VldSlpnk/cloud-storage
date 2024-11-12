function S1(t, e) {
  for (var n = 0; n < e.length; n++) {
    const r = e[n]
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const i in r)
        if (i !== 'default' && !(i in t)) {
          const s = Object.getOwnPropertyDescriptor(r, i)
          s &&
            Object.defineProperty(
              t,
              i,
              s.get ? s : { enumerable: !0, get: () => r[i] }
            )
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' })
  )
}
;(function () {
  const e = document.createElement('link').relList
  if (e && e.supports && e.supports('modulepreload')) return
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i)
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === 'childList')
        for (const o of s.addedNodes)
          o.tagName === 'LINK' && o.rel === 'modulepreload' && r(o)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(i) {
    const s = {}
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === 'use-credentials'
        ? (s.credentials = 'include')
        : i.crossOrigin === 'anonymous'
        ? (s.credentials = 'omit')
        : (s.credentials = 'same-origin'),
      s
    )
  }
  function r(i) {
    if (i.ep) return
    i.ep = !0
    const s = n(i)
    fetch(i.href, s)
  }
})()
function C1(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, 'default')
    ? t.default
    : t
}
var o0 = { exports: {} },
  Fl = {},
  a0 = { exports: {} },
  Z = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Io = Symbol.for('react.element'),
  A1 = Symbol.for('react.portal'),
  R1 = Symbol.for('react.fragment'),
  P1 = Symbol.for('react.strict_mode'),
  k1 = Symbol.for('react.profiler'),
  x1 = Symbol.for('react.provider'),
  N1 = Symbol.for('react.context'),
  D1 = Symbol.for('react.forward_ref'),
  O1 = Symbol.for('react.suspense'),
  L1 = Symbol.for('react.memo'),
  V1 = Symbol.for('react.lazy'),
  Pp = Symbol.iterator
function M1(t) {
  return t === null || typeof t != 'object'
    ? null
    : ((t = (Pp && t[Pp]) || t['@@iterator']),
      typeof t == 'function' ? t : null)
}
var l0 = {
    isMounted: function () {
      return !1
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  u0 = Object.assign,
  c0 = {}
function Bi(t, e, n) {
  ;(this.props = t),
    (this.context = e),
    (this.refs = c0),
    (this.updater = n || l0)
}
Bi.prototype.isReactComponent = {}
Bi.prototype.setState = function (t, e) {
  if (typeof t != 'object' && typeof t != 'function' && t != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    )
  this.updater.enqueueSetState(this, t, e, 'setState')
}
Bi.prototype.forceUpdate = function (t) {
  this.updater.enqueueForceUpdate(this, t, 'forceUpdate')
}
function h0() {}
h0.prototype = Bi.prototype
function Uh(t, e, n) {
  ;(this.props = t),
    (this.context = e),
    (this.refs = c0),
    (this.updater = n || l0)
}
var Bh = (Uh.prototype = new h0())
Bh.constructor = Uh
u0(Bh, Bi.prototype)
Bh.isPureReactComponent = !0
var kp = Array.isArray,
  d0 = Object.prototype.hasOwnProperty,
  zh = { current: null },
  f0 = { key: !0, ref: !0, __self: !0, __source: !0 }
function p0(t, e, n) {
  var r,
    i = {},
    s = null,
    o = null
  if (e != null)
    for (r in (e.ref !== void 0 && (o = e.ref),
    e.key !== void 0 && (s = '' + e.key),
    e))
      d0.call(e, r) && !f0.hasOwnProperty(r) && (i[r] = e[r])
  var l = arguments.length - 2
  if (l === 1) i.children = n
  else if (1 < l) {
    for (var u = Array(l), h = 0; h < l; h++) u[h] = arguments[h + 2]
    i.children = u
  }
  if (t && t.defaultProps)
    for (r in ((l = t.defaultProps), l)) i[r] === void 0 && (i[r] = l[r])
  return { $$typeof: Io, type: t, key: s, ref: o, props: i, _owner: zh.current }
}
function b1(t, e) {
  return {
    $$typeof: Io,
    type: t.type,
    key: e,
    ref: t.ref,
    props: t.props,
    _owner: t._owner,
  }
}
function $h(t) {
  return typeof t == 'object' && t !== null && t.$$typeof === Io
}
function F1(t) {
  var e = { '=': '=0', ':': '=2' }
  return (
    '$' +
    t.replace(/[=:]/g, function (n) {
      return e[n]
    })
  )
}
var xp = /\/+/g
function Uu(t, e) {
  return typeof t == 'object' && t !== null && t.key != null
    ? F1('' + t.key)
    : e.toString(36)
}
function Pa(t, e, n, r, i) {
  var s = typeof t
  ;(s === 'undefined' || s === 'boolean') && (t = null)
  var o = !1
  if (t === null) o = !0
  else
    switch (s) {
      case 'string':
      case 'number':
        o = !0
        break
      case 'object':
        switch (t.$$typeof) {
          case Io:
          case A1:
            o = !0
        }
    }
  if (o)
    return (
      (o = t),
      (i = i(o)),
      (t = r === '' ? '.' + Uu(o, 0) : r),
      kp(i)
        ? ((n = ''),
          t != null && (n = t.replace(xp, '$&/') + '/'),
          Pa(i, e, n, '', function (h) {
            return h
          }))
        : i != null &&
          ($h(i) &&
            (i = b1(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ''
                  : ('' + i.key).replace(xp, '$&/') + '/') +
                t
            )),
          e.push(i)),
      1
    )
  if (((o = 0), (r = r === '' ? '.' : r + ':'), kp(t)))
    for (var l = 0; l < t.length; l++) {
      s = t[l]
      var u = r + Uu(s, l)
      o += Pa(s, e, n, u, i)
    }
  else if (((u = M1(t)), typeof u == 'function'))
    for (t = u.call(t), l = 0; !(s = t.next()).done; )
      (s = s.value), (u = r + Uu(s, l++)), (o += Pa(s, e, n, u, i))
  else if (s === 'object')
    throw (
      ((e = String(t)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (e === '[object Object]'
            ? 'object with keys {' + Object.keys(t).join(', ') + '}'
            : e) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    )
  return o
}
function ia(t, e, n) {
  if (t == null) return t
  var r = [],
    i = 0
  return (
    Pa(t, r, '', '', function (s) {
      return e.call(n, s, i++)
    }),
    r
  )
}
function j1(t) {
  if (t._status === -1) {
    var e = t._result
    ;(e = e()),
      e.then(
        function (n) {
          ;(t._status === 0 || t._status === -1) &&
            ((t._status = 1), (t._result = n))
        },
        function (n) {
          ;(t._status === 0 || t._status === -1) &&
            ((t._status = 2), (t._result = n))
        }
      ),
      t._status === -1 && ((t._status = 0), (t._result = e))
  }
  if (t._status === 1) return t._result.default
  throw t._result
}
var at = { current: null },
  ka = { transition: null },
  U1 = {
    ReactCurrentDispatcher: at,
    ReactCurrentBatchConfig: ka,
    ReactCurrentOwner: zh,
  }
function m0() {
  throw Error('act(...) is not supported in production builds of React.')
}
Z.Children = {
  map: ia,
  forEach: function (t, e, n) {
    ia(
      t,
      function () {
        e.apply(this, arguments)
      },
      n
    )
  },
  count: function (t) {
    var e = 0
    return (
      ia(t, function () {
        e++
      }),
      e
    )
  },
  toArray: function (t) {
    return (
      ia(t, function (e) {
        return e
      }) || []
    )
  },
  only: function (t) {
    if (!$h(t))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      )
    return t
  },
}
Z.Component = Bi
Z.Fragment = R1
Z.Profiler = k1
Z.PureComponent = Uh
Z.StrictMode = P1
Z.Suspense = O1
Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = U1
Z.act = m0
Z.cloneElement = function (t, e, n) {
  if (t == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        t +
        '.'
    )
  var r = u0({}, t.props),
    i = t.key,
    s = t.ref,
    o = t._owner
  if (e != null) {
    if (
      (e.ref !== void 0 && ((s = e.ref), (o = zh.current)),
      e.key !== void 0 && (i = '' + e.key),
      t.type && t.type.defaultProps)
    )
      var l = t.type.defaultProps
    for (u in e)
      d0.call(e, u) &&
        !f0.hasOwnProperty(u) &&
        (r[u] = e[u] === void 0 && l !== void 0 ? l[u] : e[u])
  }
  var u = arguments.length - 2
  if (u === 1) r.children = n
  else if (1 < u) {
    l = Array(u)
    for (var h = 0; h < u; h++) l[h] = arguments[h + 2]
    r.children = l
  }
  return { $$typeof: Io, type: t.type, key: i, ref: s, props: r, _owner: o }
}
Z.createContext = function (t) {
  return (
    (t = {
      $$typeof: N1,
      _currentValue: t,
      _currentValue2: t,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (t.Provider = { $$typeof: x1, _context: t }),
    (t.Consumer = t)
  )
}
Z.createElement = p0
Z.createFactory = function (t) {
  var e = p0.bind(null, t)
  return (e.type = t), e
}
Z.createRef = function () {
  return { current: null }
}
Z.forwardRef = function (t) {
  return { $$typeof: D1, render: t }
}
Z.isValidElement = $h
Z.lazy = function (t) {
  return { $$typeof: V1, _payload: { _status: -1, _result: t }, _init: j1 }
}
Z.memo = function (t, e) {
  return { $$typeof: L1, type: t, compare: e === void 0 ? null : e }
}
Z.startTransition = function (t) {
  var e = ka.transition
  ka.transition = {}
  try {
    t()
  } finally {
    ka.transition = e
  }
}
Z.unstable_act = m0
Z.useCallback = function (t, e) {
  return at.current.useCallback(t, e)
}
Z.useContext = function (t) {
  return at.current.useContext(t)
}
Z.useDebugValue = function () {}
Z.useDeferredValue = function (t) {
  return at.current.useDeferredValue(t)
}
Z.useEffect = function (t, e) {
  return at.current.useEffect(t, e)
}
Z.useId = function () {
  return at.current.useId()
}
Z.useImperativeHandle = function (t, e, n) {
  return at.current.useImperativeHandle(t, e, n)
}
Z.useInsertionEffect = function (t, e) {
  return at.current.useInsertionEffect(t, e)
}
Z.useLayoutEffect = function (t, e) {
  return at.current.useLayoutEffect(t, e)
}
Z.useMemo = function (t, e) {
  return at.current.useMemo(t, e)
}
Z.useReducer = function (t, e, n) {
  return at.current.useReducer(t, e, n)
}
Z.useRef = function (t) {
  return at.current.useRef(t)
}
Z.useState = function (t) {
  return at.current.useState(t)
}
Z.useSyncExternalStore = function (t, e, n) {
  return at.current.useSyncExternalStore(t, e, n)
}
Z.useTransition = function () {
  return at.current.useTransition()
}
Z.version = '18.3.1'
a0.exports = Z
var V = a0.exports
const B1 = C1(V),
  z1 = S1({ __proto__: null, default: B1 }, [V])
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $1 = V,
  H1 = Symbol.for('react.element'),
  W1 = Symbol.for('react.fragment'),
  K1 = Object.prototype.hasOwnProperty,
  q1 = $1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  G1 = { key: !0, ref: !0, __self: !0, __source: !0 }
function g0(t, e, n) {
  var r,
    i = {},
    s = null,
    o = null
  n !== void 0 && (s = '' + n),
    e.key !== void 0 && (s = '' + e.key),
    e.ref !== void 0 && (o = e.ref)
  for (r in e) K1.call(e, r) && !G1.hasOwnProperty(r) && (i[r] = e[r])
  if (t && t.defaultProps)
    for (r in ((e = t.defaultProps), e)) i[r] === void 0 && (i[r] = e[r])
  return { $$typeof: H1, type: t, key: s, ref: o, props: i, _owner: q1.current }
}
Fl.Fragment = W1
Fl.jsx = g0
Fl.jsxs = g0
o0.exports = Fl
var g = o0.exports,
  y0 = { exports: {} },
  wt = {},
  v0 = { exports: {} },
  _0 = {}
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ ;(function (t) {
  function e(z, G) {
    var J = z.length
    z.push(G)
    e: for (; 0 < J; ) {
      var me = (J - 1) >>> 1,
        ae = z[me]
      if (0 < i(ae, G)) (z[me] = G), (z[J] = ae), (J = me)
      else break e
    }
  }
  function n(z) {
    return z.length === 0 ? null : z[0]
  }
  function r(z) {
    if (z.length === 0) return null
    var G = z[0],
      J = z.pop()
    if (J !== G) {
      z[0] = J
      e: for (var me = 0, ae = z.length, Ie = ae >>> 1; me < Ie; ) {
        var rn = 2 * (me + 1) - 1,
          sn = z[rn],
          on = rn + 1,
          an = z[on]
        if (0 > i(sn, J))
          on < ae && 0 > i(an, sn)
            ? ((z[me] = an), (z[on] = J), (me = on))
            : ((z[me] = sn), (z[rn] = J), (me = rn))
        else if (on < ae && 0 > i(an, J)) (z[me] = an), (z[on] = J), (me = on)
        else break e
      }
    }
    return G
  }
  function i(z, G) {
    var J = z.sortIndex - G.sortIndex
    return J !== 0 ? J : z.id - G.id
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var s = performance
    t.unstable_now = function () {
      return s.now()
    }
  } else {
    var o = Date,
      l = o.now()
    t.unstable_now = function () {
      return o.now() - l
    }
  }
  var u = [],
    h = [],
    f = 1,
    p = null,
    v = 3,
    A = !1,
    P = !1,
    N = !1,
    D = typeof setTimeout == 'function' ? setTimeout : null,
    C = typeof clearTimeout == 'function' ? clearTimeout : null,
    _ = typeof setImmediate < 'u' ? setImmediate : null
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling)
  function S(z) {
    for (var G = n(h); G !== null; ) {
      if (G.callback === null) r(h)
      else if (G.startTime <= z) r(h), (G.sortIndex = G.expirationTime), e(u, G)
      else break
      G = n(h)
    }
  }
  function L(z) {
    if (((N = !1), S(z), !P))
      if (n(u) !== null) (P = !0), Zi(U)
      else {
        var G = n(h)
        G !== null && nn(L, G.startTime - z)
      }
  }
  function U(z, G) {
    ;(P = !1), N && ((N = !1), C(y), (y = -1)), (A = !0)
    var J = v
    try {
      for (
        S(G), p = n(u);
        p !== null && (!(p.expirationTime > G) || (z && !R()));

      ) {
        var me = p.callback
        if (typeof me == 'function') {
          ;(p.callback = null), (v = p.priorityLevel)
          var ae = me(p.expirationTime <= G)
          ;(G = t.unstable_now()),
            typeof ae == 'function' ? (p.callback = ae) : p === n(u) && r(u),
            S(G)
        } else r(u)
        p = n(u)
      }
      if (p !== null) var Ie = !0
      else {
        var rn = n(h)
        rn !== null && nn(L, rn.startTime - G), (Ie = !1)
      }
      return Ie
    } finally {
      ;(p = null), (v = J), (A = !1)
    }
  }
  var j = !1,
    w = null,
    y = -1,
    E = 5,
    T = -1
  function R() {
    return !(t.unstable_now() - T < E)
  }
  function k() {
    if (w !== null) {
      var z = t.unstable_now()
      T = z
      var G = !0
      try {
        G = w(!0, z)
      } finally {
        G ? I() : ((j = !1), (w = null))
      }
    } else j = !1
  }
  var I
  if (typeof _ == 'function')
    I = function () {
      _(k)
    }
  else if (typeof MessageChannel < 'u') {
    var ut = new MessageChannel(),
      tn = ut.port2
    ;(ut.port1.onmessage = k),
      (I = function () {
        tn.postMessage(null)
      })
  } else
    I = function () {
      D(k, 0)
    }
  function Zi(z) {
    ;(w = z), j || ((j = !0), I())
  }
  function nn(z, G) {
    y = D(function () {
      z(t.unstable_now())
    }, G)
  }
  ;(t.unstable_IdlePriority = 5),
    (t.unstable_ImmediatePriority = 1),
    (t.unstable_LowPriority = 4),
    (t.unstable_NormalPriority = 3),
    (t.unstable_Profiling = null),
    (t.unstable_UserBlockingPriority = 2),
    (t.unstable_cancelCallback = function (z) {
      z.callback = null
    }),
    (t.unstable_continueExecution = function () {
      P || A || ((P = !0), Zi(U))
    }),
    (t.unstable_forceFrameRate = function (z) {
      0 > z || 125 < z
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (E = 0 < z ? Math.floor(1e3 / z) : 5)
    }),
    (t.unstable_getCurrentPriorityLevel = function () {
      return v
    }),
    (t.unstable_getFirstCallbackNode = function () {
      return n(u)
    }),
    (t.unstable_next = function (z) {
      switch (v) {
        case 1:
        case 2:
        case 3:
          var G = 3
          break
        default:
          G = v
      }
      var J = v
      v = G
      try {
        return z()
      } finally {
        v = J
      }
    }),
    (t.unstable_pauseExecution = function () {}),
    (t.unstable_requestPaint = function () {}),
    (t.unstable_runWithPriority = function (z, G) {
      switch (z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break
        default:
          z = 3
      }
      var J = v
      v = z
      try {
        return G()
      } finally {
        v = J
      }
    }),
    (t.unstable_scheduleCallback = function (z, G, J) {
      var me = t.unstable_now()
      switch (
        (typeof J == 'object' && J !== null
          ? ((J = J.delay), (J = typeof J == 'number' && 0 < J ? me + J : me))
          : (J = me),
        z)
      ) {
        case 1:
          var ae = -1
          break
        case 2:
          ae = 250
          break
        case 5:
          ae = 1073741823
          break
        case 4:
          ae = 1e4
          break
        default:
          ae = 5e3
      }
      return (
        (ae = J + ae),
        (z = {
          id: f++,
          callback: G,
          priorityLevel: z,
          startTime: J,
          expirationTime: ae,
          sortIndex: -1,
        }),
        J > me
          ? ((z.sortIndex = J),
            e(h, z),
            n(u) === null &&
              z === n(h) &&
              (N ? (C(y), (y = -1)) : (N = !0), nn(L, J - me)))
          : ((z.sortIndex = ae), e(u, z), P || A || ((P = !0), Zi(U))),
        z
      )
    }),
    (t.unstable_shouldYield = R),
    (t.unstable_wrapCallback = function (z) {
      var G = v
      return function () {
        var J = v
        v = G
        try {
          return z.apply(this, arguments)
        } finally {
          v = J
        }
      }
    })
})(_0)
v0.exports = _0
var Q1 = v0.exports
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Y1 = V,
  Et = Q1
function F(t) {
  for (
    var e = 'https://reactjs.org/docs/error-decoder.html?invariant=' + t, n = 1;
    n < arguments.length;
    n++
  )
    e += '&args[]=' + encodeURIComponent(arguments[n])
  return (
    'Minified React error #' +
    t +
    '; visit ' +
    e +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  )
}
var E0 = new Set(),
  Ks = {}
function Hr(t, e) {
  Ai(t, e), Ai(t + 'Capture', e)
}
function Ai(t, e) {
  for (Ks[t] = e, t = 0; t < e.length; t++) E0.add(e[t])
}
var _n = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  Cc = Object.prototype.hasOwnProperty,
  X1 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Np = {},
  Dp = {}
function J1(t) {
  return Cc.call(Dp, t)
    ? !0
    : Cc.call(Np, t)
    ? !1
    : X1.test(t)
    ? (Dp[t] = !0)
    : ((Np[t] = !0), !1)
}
function Z1(t, e, n, r) {
  if (n !== null && n.type === 0) return !1
  switch (typeof e) {
    case 'function':
    case 'symbol':
      return !0
    case 'boolean':
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((t = t.toLowerCase().slice(0, 5)), t !== 'data-' && t !== 'aria-')
    default:
      return !1
  }
}
function eE(t, e, n, r) {
  if (e === null || typeof e > 'u' || Z1(t, e, n, r)) return !0
  if (r) return !1
  if (n !== null)
    switch (n.type) {
      case 3:
        return !e
      case 4:
        return e === !1
      case 5:
        return isNaN(e)
      case 6:
        return isNaN(e) || 1 > e
    }
  return !1
}
function lt(t, e, n, r, i, s, o) {
  ;(this.acceptsBooleans = e === 2 || e === 3 || e === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = t),
    (this.type = e),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o)
}
var $e = {}
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (t) {
    $e[t] = new lt(t, 0, !1, t, null, !1, !1)
  })
;[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (t) {
  var e = t[0]
  $e[e] = new lt(e, 1, !1, t[1], null, !1, !1)
})
;['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (t) {
  $e[t] = new lt(t, 2, !1, t.toLowerCase(), null, !1, !1)
})
;[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (t) {
  $e[t] = new lt(t, 2, !1, t, null, !1, !1)
})
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (t) {
    $e[t] = new lt(t, 3, !1, t.toLowerCase(), null, !1, !1)
  })
;['checked', 'multiple', 'muted', 'selected'].forEach(function (t) {
  $e[t] = new lt(t, 3, !0, t, null, !1, !1)
})
;['capture', 'download'].forEach(function (t) {
  $e[t] = new lt(t, 4, !1, t, null, !1, !1)
})
;['cols', 'rows', 'size', 'span'].forEach(function (t) {
  $e[t] = new lt(t, 6, !1, t, null, !1, !1)
})
;['rowSpan', 'start'].forEach(function (t) {
  $e[t] = new lt(t, 5, !1, t.toLowerCase(), null, !1, !1)
})
var Hh = /[\-:]([a-z])/g
function Wh(t) {
  return t[1].toUpperCase()
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (t) {
    var e = t.replace(Hh, Wh)
    $e[e] = new lt(e, 1, !1, t, null, !1, !1)
  })
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (t) {
    var e = t.replace(Hh, Wh)
    $e[e] = new lt(e, 1, !1, t, 'http://www.w3.org/1999/xlink', !1, !1)
  })
;['xml:base', 'xml:lang', 'xml:space'].forEach(function (t) {
  var e = t.replace(Hh, Wh)
  $e[e] = new lt(e, 1, !1, t, 'http://www.w3.org/XML/1998/namespace', !1, !1)
})
;['tabIndex', 'crossOrigin'].forEach(function (t) {
  $e[t] = new lt(t, 1, !1, t.toLowerCase(), null, !1, !1)
})
$e.xlinkHref = new lt(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
)
;['src', 'href', 'action', 'formAction'].forEach(function (t) {
  $e[t] = new lt(t, 1, !1, t.toLowerCase(), null, !0, !0)
})
function Kh(t, e, n, r) {
  var i = $e.hasOwnProperty(e) ? $e[e] : null
  ;(i !== null
    ? i.type !== 0
    : r ||
      !(2 < e.length) ||
      (e[0] !== 'o' && e[0] !== 'O') ||
      (e[1] !== 'n' && e[1] !== 'N')) &&
    (eE(e, n, i, r) && (n = null),
    r || i === null
      ? J1(e) && (n === null ? t.removeAttribute(e) : t.setAttribute(e, '' + n))
      : i.mustUseProperty
      ? (t[i.propertyName] = n === null ? (i.type === 3 ? !1 : '') : n)
      : ((e = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? t.removeAttribute(e)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? '' : '' + n),
            r ? t.setAttributeNS(r, e, n) : t.setAttribute(e, n))))
}
var Rn = Y1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  sa = Symbol.for('react.element'),
  ri = Symbol.for('react.portal'),
  ii = Symbol.for('react.fragment'),
  qh = Symbol.for('react.strict_mode'),
  Ac = Symbol.for('react.profiler'),
  w0 = Symbol.for('react.provider'),
  T0 = Symbol.for('react.context'),
  Gh = Symbol.for('react.forward_ref'),
  Rc = Symbol.for('react.suspense'),
  Pc = Symbol.for('react.suspense_list'),
  Qh = Symbol.for('react.memo'),
  bn = Symbol.for('react.lazy'),
  I0 = Symbol.for('react.offscreen'),
  Op = Symbol.iterator
function ps(t) {
  return t === null || typeof t != 'object'
    ? null
    : ((t = (Op && t[Op]) || t['@@iterator']),
      typeof t == 'function' ? t : null)
}
var ve = Object.assign,
  Bu
function Is(t) {
  if (Bu === void 0)
    try {
      throw Error()
    } catch (n) {
      var e = n.stack.trim().match(/\n( *(at )?)/)
      Bu = (e && e[1]) || ''
    }
  return (
    `
` +
    Bu +
    t
  )
}
var zu = !1
function $u(t, e) {
  if (!t || zu) return ''
  zu = !0
  var n = Error.prepareStackTrace
  Error.prepareStackTrace = void 0
  try {
    if (e)
      if (
        ((e = function () {
          throw Error()
        }),
        Object.defineProperty(e.prototype, 'props', {
          set: function () {
            throw Error()
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(e, [])
        } catch (h) {
          var r = h
        }
        Reflect.construct(t, [], e)
      } else {
        try {
          e.call()
        } catch (h) {
          r = h
        }
        t.call(e.prototype)
      }
    else {
      try {
        throw Error()
      } catch (h) {
        r = h
      }
      t()
    }
  } catch (h) {
    if (h && r && typeof h.stack == 'string') {
      for (
        var i = h.stack.split(`
`),
          s = r.stack.split(`
`),
          o = i.length - 1,
          l = s.length - 1;
        1 <= o && 0 <= l && i[o] !== s[l];

      )
        l--
      for (; 1 <= o && 0 <= l; o--, l--)
        if (i[o] !== s[l]) {
          if (o !== 1 || l !== 1)
            do
              if ((o--, l--, 0 > l || i[o] !== s[l])) {
                var u =
                  `
` + i[o].replace(' at new ', ' at ')
                return (
                  t.displayName &&
                    u.includes('<anonymous>') &&
                    (u = u.replace('<anonymous>', t.displayName)),
                  u
                )
              }
            while (1 <= o && 0 <= l)
          break
        }
    }
  } finally {
    ;(zu = !1), (Error.prepareStackTrace = n)
  }
  return (t = t ? t.displayName || t.name : '') ? Is(t) : ''
}
function tE(t) {
  switch (t.tag) {
    case 5:
      return Is(t.type)
    case 16:
      return Is('Lazy')
    case 13:
      return Is('Suspense')
    case 19:
      return Is('SuspenseList')
    case 0:
    case 2:
    case 15:
      return (t = $u(t.type, !1)), t
    case 11:
      return (t = $u(t.type.render, !1)), t
    case 1:
      return (t = $u(t.type, !0)), t
    default:
      return ''
  }
}
function kc(t) {
  if (t == null) return null
  if (typeof t == 'function') return t.displayName || t.name || null
  if (typeof t == 'string') return t
  switch (t) {
    case ii:
      return 'Fragment'
    case ri:
      return 'Portal'
    case Ac:
      return 'Profiler'
    case qh:
      return 'StrictMode'
    case Rc:
      return 'Suspense'
    case Pc:
      return 'SuspenseList'
  }
  if (typeof t == 'object')
    switch (t.$$typeof) {
      case T0:
        return (t.displayName || 'Context') + '.Consumer'
      case w0:
        return (t._context.displayName || 'Context') + '.Provider'
      case Gh:
        var e = t.render
        return (
          (t = t.displayName),
          t ||
            ((t = e.displayName || e.name || ''),
            (t = t !== '' ? 'ForwardRef(' + t + ')' : 'ForwardRef')),
          t
        )
      case Qh:
        return (
          (e = t.displayName || null), e !== null ? e : kc(t.type) || 'Memo'
        )
      case bn:
        ;(e = t._payload), (t = t._init)
        try {
          return kc(t(e))
        } catch {}
    }
  return null
}
function nE(t) {
  var e = t.type
  switch (t.tag) {
    case 24:
      return 'Cache'
    case 9:
      return (e.displayName || 'Context') + '.Consumer'
    case 10:
      return (e._context.displayName || 'Context') + '.Provider'
    case 18:
      return 'DehydratedFragment'
    case 11:
      return (
        (t = e.render),
        (t = t.displayName || t.name || ''),
        e.displayName || (t !== '' ? 'ForwardRef(' + t + ')' : 'ForwardRef')
      )
    case 7:
      return 'Fragment'
    case 5:
      return e
    case 4:
      return 'Portal'
    case 3:
      return 'Root'
    case 6:
      return 'Text'
    case 16:
      return kc(e)
    case 8:
      return e === qh ? 'StrictMode' : 'Mode'
    case 22:
      return 'Offscreen'
    case 12:
      return 'Profiler'
    case 21:
      return 'Scope'
    case 13:
      return 'Suspense'
    case 19:
      return 'SuspenseList'
    case 25:
      return 'TracingMarker'
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof e == 'function') return e.displayName || e.name || null
      if (typeof e == 'string') return e
  }
  return null
}
function lr(t) {
  switch (typeof t) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return t
    case 'object':
      return t
    default:
      return ''
  }
}
function S0(t) {
  var e = t.type
  return (
    (t = t.nodeName) &&
    t.toLowerCase() === 'input' &&
    (e === 'checkbox' || e === 'radio')
  )
}
function rE(t) {
  var e = S0(t) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
    r = '' + t[e]
  if (
    !t.hasOwnProperty(e) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var i = n.get,
      s = n.set
    return (
      Object.defineProperty(t, e, {
        configurable: !0,
        get: function () {
          return i.call(this)
        },
        set: function (o) {
          ;(r = '' + o), s.call(this, o)
        },
      }),
      Object.defineProperty(t, e, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r
        },
        setValue: function (o) {
          r = '' + o
        },
        stopTracking: function () {
          ;(t._valueTracker = null), delete t[e]
        },
      }
    )
  }
}
function oa(t) {
  t._valueTracker || (t._valueTracker = rE(t))
}
function C0(t) {
  if (!t) return !1
  var e = t._valueTracker
  if (!e) return !0
  var n = e.getValue(),
    r = ''
  return (
    t && (r = S0(t) ? (t.checked ? 'true' : 'false') : t.value),
    (t = r),
    t !== n ? (e.setValue(t), !0) : !1
  )
}
function Ga(t) {
  if (((t = t || (typeof document < 'u' ? document : void 0)), typeof t > 'u'))
    return null
  try {
    return t.activeElement || t.body
  } catch {
    return t.body
  }
}
function xc(t, e) {
  var n = e.checked
  return ve({}, e, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? t._wrapperState.initialChecked,
  })
}
function Lp(t, e) {
  var n = e.defaultValue == null ? '' : e.defaultValue,
    r = e.checked != null ? e.checked : e.defaultChecked
  ;(n = lr(e.value != null ? e.value : n)),
    (t._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        e.type === 'checkbox' || e.type === 'radio'
          ? e.checked != null
          : e.value != null,
    })
}
function A0(t, e) {
  ;(e = e.checked), e != null && Kh(t, 'checked', e, !1)
}
function Nc(t, e) {
  A0(t, e)
  var n = lr(e.value),
    r = e.type
  if (n != null)
    r === 'number'
      ? ((n === 0 && t.value === '') || t.value != n) && (t.value = '' + n)
      : t.value !== '' + n && (t.value = '' + n)
  else if (r === 'submit' || r === 'reset') {
    t.removeAttribute('value')
    return
  }
  e.hasOwnProperty('value')
    ? Dc(t, e.type, n)
    : e.hasOwnProperty('defaultValue') && Dc(t, e.type, lr(e.defaultValue)),
    e.checked == null &&
      e.defaultChecked != null &&
      (t.defaultChecked = !!e.defaultChecked)
}
function Vp(t, e, n) {
  if (e.hasOwnProperty('value') || e.hasOwnProperty('defaultValue')) {
    var r = e.type
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (e.value !== void 0 && e.value !== null)
      )
    )
      return
    ;(e = '' + t._wrapperState.initialValue),
      n || e === t.value || (t.value = e),
      (t.defaultValue = e)
  }
  ;(n = t.name),
    n !== '' && (t.name = ''),
    (t.defaultChecked = !!t._wrapperState.initialChecked),
    n !== '' && (t.name = n)
}
function Dc(t, e, n) {
  ;(e !== 'number' || Ga(t.ownerDocument) !== t) &&
    (n == null
      ? (t.defaultValue = '' + t._wrapperState.initialValue)
      : t.defaultValue !== '' + n && (t.defaultValue = '' + n))
}
var Ss = Array.isArray
function gi(t, e, n, r) {
  if (((t = t.options), e)) {
    e = {}
    for (var i = 0; i < n.length; i++) e['$' + n[i]] = !0
    for (n = 0; n < t.length; n++)
      (i = e.hasOwnProperty('$' + t[n].value)),
        t[n].selected !== i && (t[n].selected = i),
        i && r && (t[n].defaultSelected = !0)
  } else {
    for (n = '' + lr(n), e = null, i = 0; i < t.length; i++) {
      if (t[i].value === n) {
        ;(t[i].selected = !0), r && (t[i].defaultSelected = !0)
        return
      }
      e !== null || t[i].disabled || (e = t[i])
    }
    e !== null && (e.selected = !0)
  }
}
function Oc(t, e) {
  if (e.dangerouslySetInnerHTML != null) throw Error(F(91))
  return ve({}, e, {
    value: void 0,
    defaultValue: void 0,
    children: '' + t._wrapperState.initialValue,
  })
}
function Mp(t, e) {
  var n = e.value
  if (n == null) {
    if (((n = e.children), (e = e.defaultValue), n != null)) {
      if (e != null) throw Error(F(92))
      if (Ss(n)) {
        if (1 < n.length) throw Error(F(93))
        n = n[0]
      }
      e = n
    }
    e == null && (e = ''), (n = e)
  }
  t._wrapperState = { initialValue: lr(n) }
}
function R0(t, e) {
  var n = lr(e.value),
    r = lr(e.defaultValue)
  n != null &&
    ((n = '' + n),
    n !== t.value && (t.value = n),
    e.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)),
    r != null && (t.defaultValue = '' + r)
}
function bp(t) {
  var e = t.textContent
  e === t._wrapperState.initialValue && e !== '' && e !== null && (t.value = e)
}
function P0(t) {
  switch (t) {
    case 'svg':
      return 'http://www.w3.org/2000/svg'
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML'
    default:
      return 'http://www.w3.org/1999/xhtml'
  }
}
function Lc(t, e) {
  return t == null || t === 'http://www.w3.org/1999/xhtml'
    ? P0(e)
    : t === 'http://www.w3.org/2000/svg' && e === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : t
}
var aa,
  k0 = (function (t) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (e, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return t(e, n, r, i)
          })
        }
      : t
  })(function (t, e) {
    if (t.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in t)
      t.innerHTML = e
    else {
      for (
        aa = aa || document.createElement('div'),
          aa.innerHTML = '<svg>' + e.valueOf().toString() + '</svg>',
          e = aa.firstChild;
        t.firstChild;

      )
        t.removeChild(t.firstChild)
      for (; e.firstChild; ) t.appendChild(e.firstChild)
    }
  })
function qs(t, e) {
  if (e) {
    var n = t.firstChild
    if (n && n === t.lastChild && n.nodeType === 3) {
      n.nodeValue = e
      return
    }
  }
  t.textContent = e
}
var Ds = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  iE = ['Webkit', 'ms', 'Moz', 'O']
Object.keys(Ds).forEach(function (t) {
  iE.forEach(function (e) {
    ;(e = e + t.charAt(0).toUpperCase() + t.substring(1)), (Ds[e] = Ds[t])
  })
})
function x0(t, e, n) {
  return e == null || typeof e == 'boolean' || e === ''
    ? ''
    : n || typeof e != 'number' || e === 0 || (Ds.hasOwnProperty(t) && Ds[t])
    ? ('' + e).trim()
    : e + 'px'
}
function N0(t, e) {
  t = t.style
  for (var n in e)
    if (e.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        i = x0(n, e[n], r)
      n === 'float' && (n = 'cssFloat'), r ? t.setProperty(n, i) : (t[n] = i)
    }
}
var sE = ve(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
)
function Vc(t, e) {
  if (e) {
    if (sE[t] && (e.children != null || e.dangerouslySetInnerHTML != null))
      throw Error(F(137, t))
    if (e.dangerouslySetInnerHTML != null) {
      if (e.children != null) throw Error(F(60))
      if (
        typeof e.dangerouslySetInnerHTML != 'object' ||
        !('__html' in e.dangerouslySetInnerHTML)
      )
        throw Error(F(61))
    }
    if (e.style != null && typeof e.style != 'object') throw Error(F(62))
  }
}
function Mc(t, e) {
  if (t.indexOf('-') === -1) return typeof e.is == 'string'
  switch (t) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1
    default:
      return !0
  }
}
var bc = null
function Yh(t) {
  return (
    (t = t.target || t.srcElement || window),
    t.correspondingUseElement && (t = t.correspondingUseElement),
    t.nodeType === 3 ? t.parentNode : t
  )
}
var Fc = null,
  yi = null,
  vi = null
function Fp(t) {
  if ((t = Ao(t))) {
    if (typeof Fc != 'function') throw Error(F(280))
    var e = t.stateNode
    e && ((e = $l(e)), Fc(t.stateNode, t.type, e))
  }
}
function D0(t) {
  yi ? (vi ? vi.push(t) : (vi = [t])) : (yi = t)
}
function O0() {
  if (yi) {
    var t = yi,
      e = vi
    if (((vi = yi = null), Fp(t), e)) for (t = 0; t < e.length; t++) Fp(e[t])
  }
}
function L0(t, e) {
  return t(e)
}
function V0() {}
var Hu = !1
function M0(t, e, n) {
  if (Hu) return t(e, n)
  Hu = !0
  try {
    return L0(t, e, n)
  } finally {
    ;(Hu = !1), (yi !== null || vi !== null) && (V0(), O0())
  }
}
function Gs(t, e) {
  var n = t.stateNode
  if (n === null) return null
  var r = $l(n)
  if (r === null) return null
  n = r[e]
  e: switch (e) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      ;(r = !r.disabled) ||
        ((t = t.type),
        (r = !(
          t === 'button' ||
          t === 'input' ||
          t === 'select' ||
          t === 'textarea'
        ))),
        (t = !r)
      break e
    default:
      t = !1
  }
  if (t) return null
  if (n && typeof n != 'function') throw Error(F(231, e, typeof n))
  return n
}
var jc = !1
if (_n)
  try {
    var ms = {}
    Object.defineProperty(ms, 'passive', {
      get: function () {
        jc = !0
      },
    }),
      window.addEventListener('test', ms, ms),
      window.removeEventListener('test', ms, ms)
  } catch {
    jc = !1
  }
function oE(t, e, n, r, i, s, o, l, u) {
  var h = Array.prototype.slice.call(arguments, 3)
  try {
    e.apply(n, h)
  } catch (f) {
    this.onError(f)
  }
}
var Os = !1,
  Qa = null,
  Ya = !1,
  Uc = null,
  aE = {
    onError: function (t) {
      ;(Os = !0), (Qa = t)
    },
  }
function lE(t, e, n, r, i, s, o, l, u) {
  ;(Os = !1), (Qa = null), oE.apply(aE, arguments)
}
function uE(t, e, n, r, i, s, o, l, u) {
  if ((lE.apply(this, arguments), Os)) {
    if (Os) {
      var h = Qa
      ;(Os = !1), (Qa = null)
    } else throw Error(F(198))
    Ya || ((Ya = !0), (Uc = h))
  }
}
function Wr(t) {
  var e = t,
    n = t
  if (t.alternate) for (; e.return; ) e = e.return
  else {
    t = e
    do (e = t), e.flags & 4098 && (n = e.return), (t = e.return)
    while (t)
  }
  return e.tag === 3 ? n : null
}
function b0(t) {
  if (t.tag === 13) {
    var e = t.memoizedState
    if (
      (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
      e !== null)
    )
      return e.dehydrated
  }
  return null
}
function jp(t) {
  if (Wr(t) !== t) throw Error(F(188))
}
function cE(t) {
  var e = t.alternate
  if (!e) {
    if (((e = Wr(t)), e === null)) throw Error(F(188))
    return e !== t ? null : t
  }
  for (var n = t, r = e; ; ) {
    var i = n.return
    if (i === null) break
    var s = i.alternate
    if (s === null) {
      if (((r = i.return), r !== null)) {
        n = r
        continue
      }
      break
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n) return jp(i), t
        if (s === r) return jp(i), e
        s = s.sibling
      }
      throw Error(F(188))
    }
    if (n.return !== r.return) (n = i), (r = s)
    else {
      for (var o = !1, l = i.child; l; ) {
        if (l === n) {
          ;(o = !0), (n = i), (r = s)
          break
        }
        if (l === r) {
          ;(o = !0), (r = i), (n = s)
          break
        }
        l = l.sibling
      }
      if (!o) {
        for (l = s.child; l; ) {
          if (l === n) {
            ;(o = !0), (n = s), (r = i)
            break
          }
          if (l === r) {
            ;(o = !0), (r = s), (n = i)
            break
          }
          l = l.sibling
        }
        if (!o) throw Error(F(189))
      }
    }
    if (n.alternate !== r) throw Error(F(190))
  }
  if (n.tag !== 3) throw Error(F(188))
  return n.stateNode.current === n ? t : e
}
function F0(t) {
  return (t = cE(t)), t !== null ? j0(t) : null
}
function j0(t) {
  if (t.tag === 5 || t.tag === 6) return t
  for (t = t.child; t !== null; ) {
    var e = j0(t)
    if (e !== null) return e
    t = t.sibling
  }
  return null
}
var U0 = Et.unstable_scheduleCallback,
  Up = Et.unstable_cancelCallback,
  hE = Et.unstable_shouldYield,
  dE = Et.unstable_requestPaint,
  Ce = Et.unstable_now,
  fE = Et.unstable_getCurrentPriorityLevel,
  Xh = Et.unstable_ImmediatePriority,
  B0 = Et.unstable_UserBlockingPriority,
  Xa = Et.unstable_NormalPriority,
  pE = Et.unstable_LowPriority,
  z0 = Et.unstable_IdlePriority,
  jl = null,
  Kt = null
function mE(t) {
  if (Kt && typeof Kt.onCommitFiberRoot == 'function')
    try {
      Kt.onCommitFiberRoot(jl, t, void 0, (t.current.flags & 128) === 128)
    } catch {}
}
var jt = Math.clz32 ? Math.clz32 : vE,
  gE = Math.log,
  yE = Math.LN2
function vE(t) {
  return (t >>>= 0), t === 0 ? 32 : (31 - ((gE(t) / yE) | 0)) | 0
}
var la = 64,
  ua = 4194304
function Cs(t) {
  switch (t & -t) {
    case 1:
      return 1
    case 2:
      return 2
    case 4:
      return 4
    case 8:
      return 8
    case 16:
      return 16
    case 32:
      return 32
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t & 4194240
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return t & 130023424
    case 134217728:
      return 134217728
    case 268435456:
      return 268435456
    case 536870912:
      return 536870912
    case 1073741824:
      return 1073741824
    default:
      return t
  }
}
function Ja(t, e) {
  var n = t.pendingLanes
  if (n === 0) return 0
  var r = 0,
    i = t.suspendedLanes,
    s = t.pingedLanes,
    o = n & 268435455
  if (o !== 0) {
    var l = o & ~i
    l !== 0 ? (r = Cs(l)) : ((s &= o), s !== 0 && (r = Cs(s)))
  } else (o = n & ~i), o !== 0 ? (r = Cs(o)) : s !== 0 && (r = Cs(s))
  if (r === 0) return 0
  if (
    e !== 0 &&
    e !== r &&
    !(e & i) &&
    ((i = r & -r), (s = e & -e), i >= s || (i === 16 && (s & 4194240) !== 0))
  )
    return e
  if ((r & 4 && (r |= n & 16), (e = t.entangledLanes), e !== 0))
    for (t = t.entanglements, e &= r; 0 < e; )
      (n = 31 - jt(e)), (i = 1 << n), (r |= t[n]), (e &= ~i)
  return r
}
function _E(t, e) {
  switch (t) {
    case 1:
    case 2:
    case 4:
      return e + 250
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e + 5e3
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1
    default:
      return -1
  }
}
function EE(t, e) {
  for (
    var n = t.suspendedLanes,
      r = t.pingedLanes,
      i = t.expirationTimes,
      s = t.pendingLanes;
    0 < s;

  ) {
    var o = 31 - jt(s),
      l = 1 << o,
      u = i[o]
    u === -1
      ? (!(l & n) || l & r) && (i[o] = _E(l, e))
      : u <= e && (t.expiredLanes |= l),
      (s &= ~l)
  }
}
function Bc(t) {
  return (
    (t = t.pendingLanes & -1073741825),
    t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
  )
}
function $0() {
  var t = la
  return (la <<= 1), !(la & 4194240) && (la = 64), t
}
function Wu(t) {
  for (var e = [], n = 0; 31 > n; n++) e.push(t)
  return e
}
function So(t, e, n) {
  ;(t.pendingLanes |= e),
    e !== 536870912 && ((t.suspendedLanes = 0), (t.pingedLanes = 0)),
    (t = t.eventTimes),
    (e = 31 - jt(e)),
    (t[e] = n)
}
function wE(t, e) {
  var n = t.pendingLanes & ~e
  ;(t.pendingLanes = e),
    (t.suspendedLanes = 0),
    (t.pingedLanes = 0),
    (t.expiredLanes &= e),
    (t.mutableReadLanes &= e),
    (t.entangledLanes &= e),
    (e = t.entanglements)
  var r = t.eventTimes
  for (t = t.expirationTimes; 0 < n; ) {
    var i = 31 - jt(n),
      s = 1 << i
    ;(e[i] = 0), (r[i] = -1), (t[i] = -1), (n &= ~s)
  }
}
function Jh(t, e) {
  var n = (t.entangledLanes |= e)
  for (t = t.entanglements; n; ) {
    var r = 31 - jt(n),
      i = 1 << r
    ;(i & e) | (t[r] & e) && (t[r] |= e), (n &= ~i)
  }
}
var oe = 0
function H0(t) {
  return (t &= -t), 1 < t ? (4 < t ? (t & 268435455 ? 16 : 536870912) : 4) : 1
}
var W0,
  Zh,
  K0,
  q0,
  G0,
  zc = !1,
  ca = [],
  Qn = null,
  Yn = null,
  Xn = null,
  Qs = new Map(),
  Ys = new Map(),
  jn = [],
  TE =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    )
function Bp(t, e) {
  switch (t) {
    case 'focusin':
    case 'focusout':
      Qn = null
      break
    case 'dragenter':
    case 'dragleave':
      Yn = null
      break
    case 'mouseover':
    case 'mouseout':
      Xn = null
      break
    case 'pointerover':
    case 'pointerout':
      Qs.delete(e.pointerId)
      break
    case 'gotpointercapture':
    case 'lostpointercapture':
      Ys.delete(e.pointerId)
  }
}
function gs(t, e, n, r, i, s) {
  return t === null || t.nativeEvent !== s
    ? ((t = {
        blockedOn: e,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i],
      }),
      e !== null && ((e = Ao(e)), e !== null && Zh(e)),
      t)
    : ((t.eventSystemFlags |= r),
      (e = t.targetContainers),
      i !== null && e.indexOf(i) === -1 && e.push(i),
      t)
}
function IE(t, e, n, r, i) {
  switch (e) {
    case 'focusin':
      return (Qn = gs(Qn, t, e, n, r, i)), !0
    case 'dragenter':
      return (Yn = gs(Yn, t, e, n, r, i)), !0
    case 'mouseover':
      return (Xn = gs(Xn, t, e, n, r, i)), !0
    case 'pointerover':
      var s = i.pointerId
      return Qs.set(s, gs(Qs.get(s) || null, t, e, n, r, i)), !0
    case 'gotpointercapture':
      return (
        (s = i.pointerId), Ys.set(s, gs(Ys.get(s) || null, t, e, n, r, i)), !0
      )
  }
  return !1
}
function Q0(t) {
  var e = Ar(t.target)
  if (e !== null) {
    var n = Wr(e)
    if (n !== null) {
      if (((e = n.tag), e === 13)) {
        if (((e = b0(n)), e !== null)) {
          ;(t.blockedOn = e),
            G0(t.priority, function () {
              K0(n)
            })
          return
        }
      } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null
        return
      }
    }
  }
  t.blockedOn = null
}
function xa(t) {
  if (t.blockedOn !== null) return !1
  for (var e = t.targetContainers; 0 < e.length; ) {
    var n = $c(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent)
    if (n === null) {
      n = t.nativeEvent
      var r = new n.constructor(n.type, n)
      ;(bc = r), n.target.dispatchEvent(r), (bc = null)
    } else return (e = Ao(n)), e !== null && Zh(e), (t.blockedOn = n), !1
    e.shift()
  }
  return !0
}
function zp(t, e, n) {
  xa(t) && n.delete(e)
}
function SE() {
  ;(zc = !1),
    Qn !== null && xa(Qn) && (Qn = null),
    Yn !== null && xa(Yn) && (Yn = null),
    Xn !== null && xa(Xn) && (Xn = null),
    Qs.forEach(zp),
    Ys.forEach(zp)
}
function ys(t, e) {
  t.blockedOn === e &&
    ((t.blockedOn = null),
    zc ||
      ((zc = !0), Et.unstable_scheduleCallback(Et.unstable_NormalPriority, SE)))
}
function Xs(t) {
  function e(i) {
    return ys(i, t)
  }
  if (0 < ca.length) {
    ys(ca[0], t)
    for (var n = 1; n < ca.length; n++) {
      var r = ca[n]
      r.blockedOn === t && (r.blockedOn = null)
    }
  }
  for (
    Qn !== null && ys(Qn, t),
      Yn !== null && ys(Yn, t),
      Xn !== null && ys(Xn, t),
      Qs.forEach(e),
      Ys.forEach(e),
      n = 0;
    n < jn.length;
    n++
  )
    (r = jn[n]), r.blockedOn === t && (r.blockedOn = null)
  for (; 0 < jn.length && ((n = jn[0]), n.blockedOn === null); )
    Q0(n), n.blockedOn === null && jn.shift()
}
var _i = Rn.ReactCurrentBatchConfig,
  Za = !0
function CE(t, e, n, r) {
  var i = oe,
    s = _i.transition
  _i.transition = null
  try {
    ;(oe = 1), ed(t, e, n, r)
  } finally {
    ;(oe = i), (_i.transition = s)
  }
}
function AE(t, e, n, r) {
  var i = oe,
    s = _i.transition
  _i.transition = null
  try {
    ;(oe = 4), ed(t, e, n, r)
  } finally {
    ;(oe = i), (_i.transition = s)
  }
}
function ed(t, e, n, r) {
  if (Za) {
    var i = $c(t, e, n, r)
    if (i === null) tc(t, e, r, el, n), Bp(t, r)
    else if (IE(i, t, e, n, r)) r.stopPropagation()
    else if ((Bp(t, r), e & 4 && -1 < TE.indexOf(t))) {
      for (; i !== null; ) {
        var s = Ao(i)
        if (
          (s !== null && W0(s),
          (s = $c(t, e, n, r)),
          s === null && tc(t, e, r, el, n),
          s === i)
        )
          break
        i = s
      }
      i !== null && r.stopPropagation()
    } else tc(t, e, r, null, n)
  }
}
var el = null
function $c(t, e, n, r) {
  if (((el = null), (t = Yh(r)), (t = Ar(t)), t !== null))
    if (((e = Wr(t)), e === null)) t = null
    else if (((n = e.tag), n === 13)) {
      if (((t = b0(e)), t !== null)) return t
      t = null
    } else if (n === 3) {
      if (e.stateNode.current.memoizedState.isDehydrated)
        return e.tag === 3 ? e.stateNode.containerInfo : null
      t = null
    } else e !== t && (t = null)
  return (el = t), null
}
function Y0(t) {
  switch (t) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4
    case 'message':
      switch (fE()) {
        case Xh:
          return 1
        case B0:
          return 4
        case Xa:
        case pE:
          return 16
        case z0:
          return 536870912
        default:
          return 16
      }
    default:
      return 16
  }
}
var Wn = null,
  td = null,
  Na = null
function X0() {
  if (Na) return Na
  var t,
    e = td,
    n = e.length,
    r,
    i = 'value' in Wn ? Wn.value : Wn.textContent,
    s = i.length
  for (t = 0; t < n && e[t] === i[t]; t++);
  var o = n - t
  for (r = 1; r <= o && e[n - r] === i[s - r]; r++);
  return (Na = i.slice(t, 1 < r ? 1 - r : void 0))
}
function Da(t) {
  var e = t.keyCode
  return (
    'charCode' in t
      ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
      : (t = e),
    t === 10 && (t = 13),
    32 <= t || t === 13 ? t : 0
  )
}
function ha() {
  return !0
}
function $p() {
  return !1
}
function Tt(t) {
  function e(n, r, i, s, o) {
    ;(this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null)
    for (var l in t)
      t.hasOwnProperty(l) && ((n = t[l]), (this[l] = n ? n(s) : s[l]))
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? ha
        : $p),
      (this.isPropagationStopped = $p),
      this
    )
  }
  return (
    ve(e.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0
        var n = this.nativeEvent
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = ha))
      },
      stopPropagation: function () {
        var n = this.nativeEvent
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = ha))
      },
      persist: function () {},
      isPersistent: ha,
    }),
    e
  )
}
var zi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (t) {
      return t.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  nd = Tt(zi),
  Co = ve({}, zi, { view: 0, detail: 0 }),
  RE = Tt(Co),
  Ku,
  qu,
  vs,
  Ul = ve({}, Co, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: rd,
    button: 0,
    buttons: 0,
    relatedTarget: function (t) {
      return t.relatedTarget === void 0
        ? t.fromElement === t.srcElement
          ? t.toElement
          : t.fromElement
        : t.relatedTarget
    },
    movementX: function (t) {
      return 'movementX' in t
        ? t.movementX
        : (t !== vs &&
            (vs && t.type === 'mousemove'
              ? ((Ku = t.screenX - vs.screenX), (qu = t.screenY - vs.screenY))
              : (qu = Ku = 0),
            (vs = t)),
          Ku)
    },
    movementY: function (t) {
      return 'movementY' in t ? t.movementY : qu
    },
  }),
  Hp = Tt(Ul),
  PE = ve({}, Ul, { dataTransfer: 0 }),
  kE = Tt(PE),
  xE = ve({}, Co, { relatedTarget: 0 }),
  Gu = Tt(xE),
  NE = ve({}, zi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  DE = Tt(NE),
  OE = ve({}, zi, {
    clipboardData: function (t) {
      return 'clipboardData' in t ? t.clipboardData : window.clipboardData
    },
  }),
  LE = Tt(OE),
  VE = ve({}, zi, { data: 0 }),
  Wp = Tt(VE),
  ME = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  bE = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  FE = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
function jE(t) {
  var e = this.nativeEvent
  return e.getModifierState ? e.getModifierState(t) : (t = FE[t]) ? !!e[t] : !1
}
function rd() {
  return jE
}
var UE = ve({}, Co, {
    key: function (t) {
      if (t.key) {
        var e = ME[t.key] || t.key
        if (e !== 'Unidentified') return e
      }
      return t.type === 'keypress'
        ? ((t = Da(t)), t === 13 ? 'Enter' : String.fromCharCode(t))
        : t.type === 'keydown' || t.type === 'keyup'
        ? bE[t.keyCode] || 'Unidentified'
        : ''
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: rd,
    charCode: function (t) {
      return t.type === 'keypress' ? Da(t) : 0
    },
    keyCode: function (t) {
      return t.type === 'keydown' || t.type === 'keyup' ? t.keyCode : 0
    },
    which: function (t) {
      return t.type === 'keypress'
        ? Da(t)
        : t.type === 'keydown' || t.type === 'keyup'
        ? t.keyCode
        : 0
    },
  }),
  BE = Tt(UE),
  zE = ve({}, Ul, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Kp = Tt(zE),
  $E = ve({}, Co, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: rd,
  }),
  HE = Tt($E),
  WE = ve({}, zi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  KE = Tt(WE),
  qE = ve({}, Ul, {
    deltaX: function (t) {
      return 'deltaX' in t ? t.deltaX : 'wheelDeltaX' in t ? -t.wheelDeltaX : 0
    },
    deltaY: function (t) {
      return 'deltaY' in t
        ? t.deltaY
        : 'wheelDeltaY' in t
        ? -t.wheelDeltaY
        : 'wheelDelta' in t
        ? -t.wheelDelta
        : 0
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  GE = Tt(qE),
  QE = [9, 13, 27, 32],
  id = _n && 'CompositionEvent' in window,
  Ls = null
_n && 'documentMode' in document && (Ls = document.documentMode)
var YE = _n && 'TextEvent' in window && !Ls,
  J0 = _n && (!id || (Ls && 8 < Ls && 11 >= Ls)),
  qp = ' ',
  Gp = !1
function Z0(t, e) {
  switch (t) {
    case 'keyup':
      return QE.indexOf(e.keyCode) !== -1
    case 'keydown':
      return e.keyCode !== 229
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0
    default:
      return !1
  }
}
function ey(t) {
  return (t = t.detail), typeof t == 'object' && 'data' in t ? t.data : null
}
var si = !1
function XE(t, e) {
  switch (t) {
    case 'compositionend':
      return ey(e)
    case 'keypress':
      return e.which !== 32 ? null : ((Gp = !0), qp)
    case 'textInput':
      return (t = e.data), t === qp && Gp ? null : t
    default:
      return null
  }
}
function JE(t, e) {
  if (si)
    return t === 'compositionend' || (!id && Z0(t, e))
      ? ((t = X0()), (Na = td = Wn = null), (si = !1), t)
      : null
  switch (t) {
    case 'paste':
      return null
    case 'keypress':
      if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
        if (e.char && 1 < e.char.length) return e.char
        if (e.which) return String.fromCharCode(e.which)
      }
      return null
    case 'compositionend':
      return J0 && e.locale !== 'ko' ? null : e.data
    default:
      return null
  }
}
var ZE = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
}
function Qp(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase()
  return e === 'input' ? !!ZE[t.type] : e === 'textarea'
}
function ty(t, e, n, r) {
  D0(r),
    (e = tl(e, 'onChange')),
    0 < e.length &&
      ((n = new nd('onChange', 'change', null, n, r)),
      t.push({ event: n, listeners: e }))
}
var Vs = null,
  Js = null
function ew(t) {
  dy(t, 0)
}
function Bl(t) {
  var e = li(t)
  if (C0(e)) return t
}
function tw(t, e) {
  if (t === 'change') return e
}
var ny = !1
if (_n) {
  var Qu
  if (_n) {
    var Yu = 'oninput' in document
    if (!Yu) {
      var Yp = document.createElement('div')
      Yp.setAttribute('oninput', 'return;'),
        (Yu = typeof Yp.oninput == 'function')
    }
    Qu = Yu
  } else Qu = !1
  ny = Qu && (!document.documentMode || 9 < document.documentMode)
}
function Xp() {
  Vs && (Vs.detachEvent('onpropertychange', ry), (Js = Vs = null))
}
function ry(t) {
  if (t.propertyName === 'value' && Bl(Js)) {
    var e = []
    ty(e, Js, t, Yh(t)), M0(ew, e)
  }
}
function nw(t, e, n) {
  t === 'focusin'
    ? (Xp(), (Vs = e), (Js = n), Vs.attachEvent('onpropertychange', ry))
    : t === 'focusout' && Xp()
}
function rw(t) {
  if (t === 'selectionchange' || t === 'keyup' || t === 'keydown') return Bl(Js)
}
function iw(t, e) {
  if (t === 'click') return Bl(e)
}
function sw(t, e) {
  if (t === 'input' || t === 'change') return Bl(e)
}
function ow(t, e) {
  return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e)
}
var Bt = typeof Object.is == 'function' ? Object.is : ow
function Zs(t, e) {
  if (Bt(t, e)) return !0
  if (typeof t != 'object' || t === null || typeof e != 'object' || e === null)
    return !1
  var n = Object.keys(t),
    r = Object.keys(e)
  if (n.length !== r.length) return !1
  for (r = 0; r < n.length; r++) {
    var i = n[r]
    if (!Cc.call(e, i) || !Bt(t[i], e[i])) return !1
  }
  return !0
}
function Jp(t) {
  for (; t && t.firstChild; ) t = t.firstChild
  return t
}
function Zp(t, e) {
  var n = Jp(t)
  t = 0
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = t + n.textContent.length), t <= e && r >= e))
        return { node: n, offset: e - t }
      t = r
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling
          break e
        }
        n = n.parentNode
      }
      n = void 0
    }
    n = Jp(n)
  }
}
function iy(t, e) {
  return t && e
    ? t === e
      ? !0
      : t && t.nodeType === 3
      ? !1
      : e && e.nodeType === 3
      ? iy(t, e.parentNode)
      : 'contains' in t
      ? t.contains(e)
      : t.compareDocumentPosition
      ? !!(t.compareDocumentPosition(e) & 16)
      : !1
    : !1
}
function sy() {
  for (var t = window, e = Ga(); e instanceof t.HTMLIFrameElement; ) {
    try {
      var n = typeof e.contentWindow.location.href == 'string'
    } catch {
      n = !1
    }
    if (n) t = e.contentWindow
    else break
    e = Ga(t.document)
  }
  return e
}
function sd(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase()
  return (
    e &&
    ((e === 'input' &&
      (t.type === 'text' ||
        t.type === 'search' ||
        t.type === 'tel' ||
        t.type === 'url' ||
        t.type === 'password')) ||
      e === 'textarea' ||
      t.contentEditable === 'true')
  )
}
function aw(t) {
  var e = sy(),
    n = t.focusedElem,
    r = t.selectionRange
  if (
    e !== n &&
    n &&
    n.ownerDocument &&
    iy(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && sd(n)) {
      if (
        ((e = r.start),
        (t = r.end),
        t === void 0 && (t = e),
        'selectionStart' in n)
      )
        (n.selectionStart = e), (n.selectionEnd = Math.min(t, n.value.length))
      else if (
        ((t = ((e = n.ownerDocument || document) && e.defaultView) || window),
        t.getSelection)
      ) {
        t = t.getSelection()
        var i = n.textContent.length,
          s = Math.min(r.start, i)
        ;(r = r.end === void 0 ? s : Math.min(r.end, i)),
          !t.extend && s > r && ((i = r), (r = s), (s = i)),
          (i = Zp(n, s))
        var o = Zp(n, r)
        i &&
          o &&
          (t.rangeCount !== 1 ||
            t.anchorNode !== i.node ||
            t.anchorOffset !== i.offset ||
            t.focusNode !== o.node ||
            t.focusOffset !== o.offset) &&
          ((e = e.createRange()),
          e.setStart(i.node, i.offset),
          t.removeAllRanges(),
          s > r
            ? (t.addRange(e), t.extend(o.node, o.offset))
            : (e.setEnd(o.node, o.offset), t.addRange(e)))
      }
    }
    for (e = [], t = n; (t = t.parentNode); )
      t.nodeType === 1 &&
        e.push({ element: t, left: t.scrollLeft, top: t.scrollTop })
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < e.length; n++)
      (t = e[n]), (t.element.scrollLeft = t.left), (t.element.scrollTop = t.top)
  }
}
var lw = _n && 'documentMode' in document && 11 >= document.documentMode,
  oi = null,
  Hc = null,
  Ms = null,
  Wc = !1
function em(t, e, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
  Wc ||
    oi == null ||
    oi !== Ga(r) ||
    ((r = oi),
    'selectionStart' in r && sd(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Ms && Zs(Ms, r)) ||
      ((Ms = r),
      (r = tl(Hc, 'onSelect')),
      0 < r.length &&
        ((e = new nd('onSelect', 'select', null, e, n)),
        t.push({ event: e, listeners: r }),
        (e.target = oi))))
}
function da(t, e) {
  var n = {}
  return (
    (n[t.toLowerCase()] = e.toLowerCase()),
    (n['Webkit' + t] = 'webkit' + e),
    (n['Moz' + t] = 'moz' + e),
    n
  )
}
var ai = {
    animationend: da('Animation', 'AnimationEnd'),
    animationiteration: da('Animation', 'AnimationIteration'),
    animationstart: da('Animation', 'AnimationStart'),
    transitionend: da('Transition', 'TransitionEnd'),
  },
  Xu = {},
  oy = {}
_n &&
  ((oy = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete ai.animationend.animation,
    delete ai.animationiteration.animation,
    delete ai.animationstart.animation),
  'TransitionEvent' in window || delete ai.transitionend.transition)
function zl(t) {
  if (Xu[t]) return Xu[t]
  if (!ai[t]) return t
  var e = ai[t],
    n
  for (n in e) if (e.hasOwnProperty(n) && n in oy) return (Xu[t] = e[n])
  return t
}
var ay = zl('animationend'),
  ly = zl('animationiteration'),
  uy = zl('animationstart'),
  cy = zl('transitionend'),
  hy = new Map(),
  tm =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    )
function pr(t, e) {
  hy.set(t, e), Hr(e, [t])
}
for (var Ju = 0; Ju < tm.length; Ju++) {
  var Zu = tm[Ju],
    uw = Zu.toLowerCase(),
    cw = Zu[0].toUpperCase() + Zu.slice(1)
  pr(uw, 'on' + cw)
}
pr(ay, 'onAnimationEnd')
pr(ly, 'onAnimationIteration')
pr(uy, 'onAnimationStart')
pr('dblclick', 'onDoubleClick')
pr('focusin', 'onFocus')
pr('focusout', 'onBlur')
pr(cy, 'onTransitionEnd')
Ai('onMouseEnter', ['mouseout', 'mouseover'])
Ai('onMouseLeave', ['mouseout', 'mouseover'])
Ai('onPointerEnter', ['pointerout', 'pointerover'])
Ai('onPointerLeave', ['pointerout', 'pointerover'])
Hr(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
)
Hr(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
)
Hr('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste'])
Hr(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
)
Hr(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
)
Hr(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
)
var As =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  hw = new Set('cancel close invalid load scroll toggle'.split(' ').concat(As))
function nm(t, e, n) {
  var r = t.type || 'unknown-event'
  ;(t.currentTarget = n), uE(r, e, void 0, t), (t.currentTarget = null)
}
function dy(t, e) {
  e = (e & 4) !== 0
  for (var n = 0; n < t.length; n++) {
    var r = t[n],
      i = r.event
    r = r.listeners
    e: {
      var s = void 0
      if (e)
        for (var o = r.length - 1; 0 <= o; o--) {
          var l = r[o],
            u = l.instance,
            h = l.currentTarget
          if (((l = l.listener), u !== s && i.isPropagationStopped())) break e
          nm(i, l, h), (s = u)
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((l = r[o]),
            (u = l.instance),
            (h = l.currentTarget),
            (l = l.listener),
            u !== s && i.isPropagationStopped())
          )
            break e
          nm(i, l, h), (s = u)
        }
    }
  }
  if (Ya) throw ((t = Uc), (Ya = !1), (Uc = null), t)
}
function de(t, e) {
  var n = e[Yc]
  n === void 0 && (n = e[Yc] = new Set())
  var r = t + '__bubble'
  n.has(r) || (fy(e, t, 2, !1), n.add(r))
}
function ec(t, e, n) {
  var r = 0
  e && (r |= 4), fy(n, t, r, e)
}
var fa = '_reactListening' + Math.random().toString(36).slice(2)
function eo(t) {
  if (!t[fa]) {
    ;(t[fa] = !0),
      E0.forEach(function (n) {
        n !== 'selectionchange' && (hw.has(n) || ec(n, !1, t), ec(n, !0, t))
      })
    var e = t.nodeType === 9 ? t : t.ownerDocument
    e === null || e[fa] || ((e[fa] = !0), ec('selectionchange', !1, e))
  }
}
function fy(t, e, n, r) {
  switch (Y0(e)) {
    case 1:
      var i = CE
      break
    case 4:
      i = AE
      break
    default:
      i = ed
  }
  ;(n = i.bind(null, e, n, t)),
    (i = void 0),
    !jc ||
      (e !== 'touchstart' && e !== 'touchmove' && e !== 'wheel') ||
      (i = !0),
    r
      ? i !== void 0
        ? t.addEventListener(e, n, { capture: !0, passive: i })
        : t.addEventListener(e, n, !0)
      : i !== void 0
      ? t.addEventListener(e, n, { passive: i })
      : t.addEventListener(e, n, !1)
}
function tc(t, e, n, r, i) {
  var s = r
  if (!(e & 1) && !(e & 2) && r !== null)
    e: for (;;) {
      if (r === null) return
      var o = r.tag
      if (o === 3 || o === 4) {
        var l = r.stateNode.containerInfo
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var u = o.tag
            if (
              (u === 3 || u === 4) &&
              ((u = o.stateNode.containerInfo),
              u === i || (u.nodeType === 8 && u.parentNode === i))
            )
              return
            o = o.return
          }
        for (; l !== null; ) {
          if (((o = Ar(l)), o === null)) return
          if (((u = o.tag), u === 5 || u === 6)) {
            r = s = o
            continue e
          }
          l = l.parentNode
        }
      }
      r = r.return
    }
  M0(function () {
    var h = s,
      f = Yh(n),
      p = []
    e: {
      var v = hy.get(t)
      if (v !== void 0) {
        var A = nd,
          P = t
        switch (t) {
          case 'keypress':
            if (Da(n) === 0) break e
          case 'keydown':
          case 'keyup':
            A = BE
            break
          case 'focusin':
            ;(P = 'focus'), (A = Gu)
            break
          case 'focusout':
            ;(P = 'blur'), (A = Gu)
            break
          case 'beforeblur':
          case 'afterblur':
            A = Gu
            break
          case 'click':
            if (n.button === 2) break e
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            A = Hp
            break
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            A = kE
            break
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            A = HE
            break
          case ay:
          case ly:
          case uy:
            A = DE
            break
          case cy:
            A = KE
            break
          case 'scroll':
            A = RE
            break
          case 'wheel':
            A = GE
            break
          case 'copy':
          case 'cut':
          case 'paste':
            A = LE
            break
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            A = Kp
        }
        var N = (e & 4) !== 0,
          D = !N && t === 'scroll',
          C = N ? (v !== null ? v + 'Capture' : null) : v
        N = []
        for (var _ = h, S; _ !== null; ) {
          S = _
          var L = S.stateNode
          if (
            (S.tag === 5 &&
              L !== null &&
              ((S = L),
              C !== null && ((L = Gs(_, C)), L != null && N.push(to(_, L, S)))),
            D)
          )
            break
          _ = _.return
        }
        0 < N.length &&
          ((v = new A(v, P, null, n, f)), p.push({ event: v, listeners: N }))
      }
    }
    if (!(e & 7)) {
      e: {
        if (
          ((v = t === 'mouseover' || t === 'pointerover'),
          (A = t === 'mouseout' || t === 'pointerout'),
          v &&
            n !== bc &&
            (P = n.relatedTarget || n.fromElement) &&
            (Ar(P) || P[En]))
        )
          break e
        if (
          (A || v) &&
          ((v =
            f.window === f
              ? f
              : (v = f.ownerDocument)
              ? v.defaultView || v.parentWindow
              : window),
          A
            ? ((P = n.relatedTarget || n.toElement),
              (A = h),
              (P = P ? Ar(P) : null),
              P !== null &&
                ((D = Wr(P)), P !== D || (P.tag !== 5 && P.tag !== 6)) &&
                (P = null))
            : ((A = null), (P = h)),
          A !== P)
        ) {
          if (
            ((N = Hp),
            (L = 'onMouseLeave'),
            (C = 'onMouseEnter'),
            (_ = 'mouse'),
            (t === 'pointerout' || t === 'pointerover') &&
              ((N = Kp),
              (L = 'onPointerLeave'),
              (C = 'onPointerEnter'),
              (_ = 'pointer')),
            (D = A == null ? v : li(A)),
            (S = P == null ? v : li(P)),
            (v = new N(L, _ + 'leave', A, n, f)),
            (v.target = D),
            (v.relatedTarget = S),
            (L = null),
            Ar(f) === h &&
              ((N = new N(C, _ + 'enter', P, n, f)),
              (N.target = S),
              (N.relatedTarget = D),
              (L = N)),
            (D = L),
            A && P)
          )
            t: {
              for (N = A, C = P, _ = 0, S = N; S; S = Zr(S)) _++
              for (S = 0, L = C; L; L = Zr(L)) S++
              for (; 0 < _ - S; ) (N = Zr(N)), _--
              for (; 0 < S - _; ) (C = Zr(C)), S--
              for (; _--; ) {
                if (N === C || (C !== null && N === C.alternate)) break t
                ;(N = Zr(N)), (C = Zr(C))
              }
              N = null
            }
          else N = null
          A !== null && rm(p, v, A, N, !1),
            P !== null && D !== null && rm(p, D, P, N, !0)
        }
      }
      e: {
        if (
          ((v = h ? li(h) : window),
          (A = v.nodeName && v.nodeName.toLowerCase()),
          A === 'select' || (A === 'input' && v.type === 'file'))
        )
          var U = tw
        else if (Qp(v))
          if (ny) U = sw
          else {
            U = rw
            var j = nw
          }
        else
          (A = v.nodeName) &&
            A.toLowerCase() === 'input' &&
            (v.type === 'checkbox' || v.type === 'radio') &&
            (U = iw)
        if (U && (U = U(t, h))) {
          ty(p, U, n, f)
          break e
        }
        j && j(t, v, h),
          t === 'focusout' &&
            (j = v._wrapperState) &&
            j.controlled &&
            v.type === 'number' &&
            Dc(v, 'number', v.value)
      }
      switch (((j = h ? li(h) : window), t)) {
        case 'focusin':
          ;(Qp(j) || j.contentEditable === 'true') &&
            ((oi = j), (Hc = h), (Ms = null))
          break
        case 'focusout':
          Ms = Hc = oi = null
          break
        case 'mousedown':
          Wc = !0
          break
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          ;(Wc = !1), em(p, n, f)
          break
        case 'selectionchange':
          if (lw) break
        case 'keydown':
        case 'keyup':
          em(p, n, f)
      }
      var w
      if (id)
        e: {
          switch (t) {
            case 'compositionstart':
              var y = 'onCompositionStart'
              break e
            case 'compositionend':
              y = 'onCompositionEnd'
              break e
            case 'compositionupdate':
              y = 'onCompositionUpdate'
              break e
          }
          y = void 0
        }
      else
        si
          ? Z0(t, n) && (y = 'onCompositionEnd')
          : t === 'keydown' && n.keyCode === 229 && (y = 'onCompositionStart')
      y &&
        (J0 &&
          n.locale !== 'ko' &&
          (si || y !== 'onCompositionStart'
            ? y === 'onCompositionEnd' && si && (w = X0())
            : ((Wn = f),
              (td = 'value' in Wn ? Wn.value : Wn.textContent),
              (si = !0))),
        (j = tl(h, y)),
        0 < j.length &&
          ((y = new Wp(y, t, null, n, f)),
          p.push({ event: y, listeners: j }),
          w ? (y.data = w) : ((w = ey(n)), w !== null && (y.data = w)))),
        (w = YE ? XE(t, n) : JE(t, n)) &&
          ((h = tl(h, 'onBeforeInput')),
          0 < h.length &&
            ((f = new Wp('onBeforeInput', 'beforeinput', null, n, f)),
            p.push({ event: f, listeners: h }),
            (f.data = w)))
    }
    dy(p, e)
  })
}
function to(t, e, n) {
  return { instance: t, listener: e, currentTarget: n }
}
function tl(t, e) {
  for (var n = e + 'Capture', r = []; t !== null; ) {
    var i = t,
      s = i.stateNode
    i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = Gs(t, n)),
      s != null && r.unshift(to(t, s, i)),
      (s = Gs(t, e)),
      s != null && r.push(to(t, s, i))),
      (t = t.return)
  }
  return r
}
function Zr(t) {
  if (t === null) return null
  do t = t.return
  while (t && t.tag !== 5)
  return t || null
}
function rm(t, e, n, r, i) {
  for (var s = e._reactName, o = []; n !== null && n !== r; ) {
    var l = n,
      u = l.alternate,
      h = l.stateNode
    if (u !== null && u === r) break
    l.tag === 5 &&
      h !== null &&
      ((l = h),
      i
        ? ((u = Gs(n, s)), u != null && o.unshift(to(n, u, l)))
        : i || ((u = Gs(n, s)), u != null && o.push(to(n, u, l)))),
      (n = n.return)
  }
  o.length !== 0 && t.push({ event: e, listeners: o })
}
var dw = /\r\n?/g,
  fw = /\u0000|\uFFFD/g
function im(t) {
  return (typeof t == 'string' ? t : '' + t)
    .replace(
      dw,
      `
`
    )
    .replace(fw, '')
}
function pa(t, e, n) {
  if (((e = im(e)), im(t) !== e && n)) throw Error(F(425))
}
function nl() {}
var Kc = null,
  qc = null
function Gc(t, e) {
  return (
    t === 'textarea' ||
    t === 'noscript' ||
    typeof e.children == 'string' ||
    typeof e.children == 'number' ||
    (typeof e.dangerouslySetInnerHTML == 'object' &&
      e.dangerouslySetInnerHTML !== null &&
      e.dangerouslySetInnerHTML.__html != null)
  )
}
var Qc = typeof setTimeout == 'function' ? setTimeout : void 0,
  pw = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  sm = typeof Promise == 'function' ? Promise : void 0,
  mw =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof sm < 'u'
      ? function (t) {
          return sm.resolve(null).then(t).catch(gw)
        }
      : Qc
function gw(t) {
  setTimeout(function () {
    throw t
  })
}
function nc(t, e) {
  var n = e,
    r = 0
  do {
    var i = n.nextSibling
    if ((t.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === '/$')) {
        if (r === 0) {
          t.removeChild(i), Xs(e)
          return
        }
        r--
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++
    n = i
  } while (n)
  Xs(e)
}
function Jn(t) {
  for (; t != null; t = t.nextSibling) {
    var e = t.nodeType
    if (e === 1 || e === 3) break
    if (e === 8) {
      if (((e = t.data), e === '$' || e === '$!' || e === '$?')) break
      if (e === '/$') return null
    }
  }
  return t
}
function om(t) {
  t = t.previousSibling
  for (var e = 0; t; ) {
    if (t.nodeType === 8) {
      var n = t.data
      if (n === '$' || n === '$!' || n === '$?') {
        if (e === 0) return t
        e--
      } else n === '/$' && e++
    }
    t = t.previousSibling
  }
  return null
}
var $i = Math.random().toString(36).slice(2),
  Wt = '__reactFiber$' + $i,
  no = '__reactProps$' + $i,
  En = '__reactContainer$' + $i,
  Yc = '__reactEvents$' + $i,
  yw = '__reactListeners$' + $i,
  vw = '__reactHandles$' + $i
function Ar(t) {
  var e = t[Wt]
  if (e) return e
  for (var n = t.parentNode; n; ) {
    if ((e = n[En] || n[Wt])) {
      if (
        ((n = e.alternate),
        e.child !== null || (n !== null && n.child !== null))
      )
        for (t = om(t); t !== null; ) {
          if ((n = t[Wt])) return n
          t = om(t)
        }
      return e
    }
    ;(t = n), (n = t.parentNode)
  }
  return null
}
function Ao(t) {
  return (
    (t = t[Wt] || t[En]),
    !t || (t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3) ? null : t
  )
}
function li(t) {
  if (t.tag === 5 || t.tag === 6) return t.stateNode
  throw Error(F(33))
}
function $l(t) {
  return t[no] || null
}
var Xc = [],
  ui = -1
function mr(t) {
  return { current: t }
}
function fe(t) {
  0 > ui || ((t.current = Xc[ui]), (Xc[ui] = null), ui--)
}
function ce(t, e) {
  ui++, (Xc[ui] = t.current), (t.current = e)
}
var ur = {},
  et = mr(ur),
  dt = mr(!1),
  Or = ur
function Ri(t, e) {
  var n = t.type.contextTypes
  if (!n) return ur
  var r = t.stateNode
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === e)
    return r.__reactInternalMemoizedMaskedChildContext
  var i = {},
    s
  for (s in n) i[s] = e[s]
  return (
    r &&
      ((t = t.stateNode),
      (t.__reactInternalMemoizedUnmaskedChildContext = e),
      (t.__reactInternalMemoizedMaskedChildContext = i)),
    i
  )
}
function ft(t) {
  return (t = t.childContextTypes), t != null
}
function rl() {
  fe(dt), fe(et)
}
function am(t, e, n) {
  if (et.current !== ur) throw Error(F(168))
  ce(et, e), ce(dt, n)
}
function py(t, e, n) {
  var r = t.stateNode
  if (((e = e.childContextTypes), typeof r.getChildContext != 'function'))
    return n
  r = r.getChildContext()
  for (var i in r) if (!(i in e)) throw Error(F(108, nE(t) || 'Unknown', i))
  return ve({}, n, r)
}
function il(t) {
  return (
    (t =
      ((t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext) || ur),
    (Or = et.current),
    ce(et, t),
    ce(dt, dt.current),
    !0
  )
}
function lm(t, e, n) {
  var r = t.stateNode
  if (!r) throw Error(F(169))
  n
    ? ((t = py(t, e, Or)),
      (r.__reactInternalMemoizedMergedChildContext = t),
      fe(dt),
      fe(et),
      ce(et, t))
    : fe(dt),
    ce(dt, n)
}
var hn = null,
  Hl = !1,
  rc = !1
function my(t) {
  hn === null ? (hn = [t]) : hn.push(t)
}
function _w(t) {
  ;(Hl = !0), my(t)
}
function gr() {
  if (!rc && hn !== null) {
    rc = !0
    var t = 0,
      e = oe
    try {
      var n = hn
      for (oe = 1; t < n.length; t++) {
        var r = n[t]
        do r = r(!0)
        while (r !== null)
      }
      ;(hn = null), (Hl = !1)
    } catch (i) {
      throw (hn !== null && (hn = hn.slice(t + 1)), U0(Xh, gr), i)
    } finally {
      ;(oe = e), (rc = !1)
    }
  }
  return null
}
var ci = [],
  hi = 0,
  sl = null,
  ol = 0,
  It = [],
  St = 0,
  Lr = null,
  dn = 1,
  fn = ''
function Ir(t, e) {
  ;(ci[hi++] = ol), (ci[hi++] = sl), (sl = t), (ol = e)
}
function gy(t, e, n) {
  ;(It[St++] = dn), (It[St++] = fn), (It[St++] = Lr), (Lr = t)
  var r = dn
  t = fn
  var i = 32 - jt(r) - 1
  ;(r &= ~(1 << i)), (n += 1)
  var s = 32 - jt(e) + i
  if (30 < s) {
    var o = i - (i % 5)
    ;(s = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (dn = (1 << (32 - jt(e) + i)) | (n << i) | r),
      (fn = s + t)
  } else (dn = (1 << s) | (n << i) | r), (fn = t)
}
function od(t) {
  t.return !== null && (Ir(t, 1), gy(t, 1, 0))
}
function ad(t) {
  for (; t === sl; )
    (sl = ci[--hi]), (ci[hi] = null), (ol = ci[--hi]), (ci[hi] = null)
  for (; t === Lr; )
    (Lr = It[--St]),
      (It[St] = null),
      (fn = It[--St]),
      (It[St] = null),
      (dn = It[--St]),
      (It[St] = null)
}
var _t = null,
  vt = null,
  pe = !1,
  Mt = null
function yy(t, e) {
  var n = At(5, null, null, 0)
  ;(n.elementType = 'DELETED'),
    (n.stateNode = e),
    (n.return = t),
    (e = t.deletions),
    e === null ? ((t.deletions = [n]), (t.flags |= 16)) : e.push(n)
}
function um(t, e) {
  switch (t.tag) {
    case 5:
      var n = t.type
      return (
        (e =
          e.nodeType !== 1 || n.toLowerCase() !== e.nodeName.toLowerCase()
            ? null
            : e),
        e !== null
          ? ((t.stateNode = e), (_t = t), (vt = Jn(e.firstChild)), !0)
          : !1
      )
    case 6:
      return (
        (e = t.pendingProps === '' || e.nodeType !== 3 ? null : e),
        e !== null ? ((t.stateNode = e), (_t = t), (vt = null), !0) : !1
      )
    case 13:
      return (
        (e = e.nodeType !== 8 ? null : e),
        e !== null
          ? ((n = Lr !== null ? { id: dn, overflow: fn } : null),
            (t.memoizedState = {
              dehydrated: e,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = At(18, null, null, 0)),
            (n.stateNode = e),
            (n.return = t),
            (t.child = n),
            (_t = t),
            (vt = null),
            !0)
          : !1
      )
    default:
      return !1
  }
}
function Jc(t) {
  return (t.mode & 1) !== 0 && (t.flags & 128) === 0
}
function Zc(t) {
  if (pe) {
    var e = vt
    if (e) {
      var n = e
      if (!um(t, e)) {
        if (Jc(t)) throw Error(F(418))
        e = Jn(n.nextSibling)
        var r = _t
        e && um(t, e)
          ? yy(r, n)
          : ((t.flags = (t.flags & -4097) | 2), (pe = !1), (_t = t))
      }
    } else {
      if (Jc(t)) throw Error(F(418))
      ;(t.flags = (t.flags & -4097) | 2), (pe = !1), (_t = t)
    }
  }
}
function cm(t) {
  for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; )
    t = t.return
  _t = t
}
function ma(t) {
  if (t !== _t) return !1
  if (!pe) return cm(t), (pe = !0), !1
  var e
  if (
    ((e = t.tag !== 3) &&
      !(e = t.tag !== 5) &&
      ((e = t.type),
      (e = e !== 'head' && e !== 'body' && !Gc(t.type, t.memoizedProps))),
    e && (e = vt))
  ) {
    if (Jc(t)) throw (vy(), Error(F(418)))
    for (; e; ) yy(t, e), (e = Jn(e.nextSibling))
  }
  if ((cm(t), t.tag === 13)) {
    if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
      throw Error(F(317))
    e: {
      for (t = t.nextSibling, e = 0; t; ) {
        if (t.nodeType === 8) {
          var n = t.data
          if (n === '/$') {
            if (e === 0) {
              vt = Jn(t.nextSibling)
              break e
            }
            e--
          } else (n !== '$' && n !== '$!' && n !== '$?') || e++
        }
        t = t.nextSibling
      }
      vt = null
    }
  } else vt = _t ? Jn(t.stateNode.nextSibling) : null
  return !0
}
function vy() {
  for (var t = vt; t; ) t = Jn(t.nextSibling)
}
function Pi() {
  ;(vt = _t = null), (pe = !1)
}
function ld(t) {
  Mt === null ? (Mt = [t]) : Mt.push(t)
}
var Ew = Rn.ReactCurrentBatchConfig
function _s(t, e, n) {
  if (
    ((t = n.ref), t !== null && typeof t != 'function' && typeof t != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(F(309))
        var r = n.stateNode
      }
      if (!r) throw Error(F(147, t))
      var i = r,
        s = '' + t
      return e !== null &&
        e.ref !== null &&
        typeof e.ref == 'function' &&
        e.ref._stringRef === s
        ? e.ref
        : ((e = function (o) {
            var l = i.refs
            o === null ? delete l[s] : (l[s] = o)
          }),
          (e._stringRef = s),
          e)
    }
    if (typeof t != 'string') throw Error(F(284))
    if (!n._owner) throw Error(F(290, t))
  }
  return t
}
function ga(t, e) {
  throw (
    ((t = Object.prototype.toString.call(e)),
    Error(
      F(
        31,
        t === '[object Object]'
          ? 'object with keys {' + Object.keys(e).join(', ') + '}'
          : t
      )
    ))
  )
}
function hm(t) {
  var e = t._init
  return e(t._payload)
}
function _y(t) {
  function e(C, _) {
    if (t) {
      var S = C.deletions
      S === null ? ((C.deletions = [_]), (C.flags |= 16)) : S.push(_)
    }
  }
  function n(C, _) {
    if (!t) return null
    for (; _ !== null; ) e(C, _), (_ = _.sibling)
    return null
  }
  function r(C, _) {
    for (C = new Map(); _ !== null; )
      _.key !== null ? C.set(_.key, _) : C.set(_.index, _), (_ = _.sibling)
    return C
  }
  function i(C, _) {
    return (C = nr(C, _)), (C.index = 0), (C.sibling = null), C
  }
  function s(C, _, S) {
    return (
      (C.index = S),
      t
        ? ((S = C.alternate),
          S !== null
            ? ((S = S.index), S < _ ? ((C.flags |= 2), _) : S)
            : ((C.flags |= 2), _))
        : ((C.flags |= 1048576), _)
    )
  }
  function o(C) {
    return t && C.alternate === null && (C.flags |= 2), C
  }
  function l(C, _, S, L) {
    return _ === null || _.tag !== 6
      ? ((_ = cc(S, C.mode, L)), (_.return = C), _)
      : ((_ = i(_, S)), (_.return = C), _)
  }
  function u(C, _, S, L) {
    var U = S.type
    return U === ii
      ? f(C, _, S.props.children, L, S.key)
      : _ !== null &&
        (_.elementType === U ||
          (typeof U == 'object' &&
            U !== null &&
            U.$$typeof === bn &&
            hm(U) === _.type))
      ? ((L = i(_, S.props)), (L.ref = _s(C, _, S)), (L.return = C), L)
      : ((L = ja(S.type, S.key, S.props, null, C.mode, L)),
        (L.ref = _s(C, _, S)),
        (L.return = C),
        L)
  }
  function h(C, _, S, L) {
    return _ === null ||
      _.tag !== 4 ||
      _.stateNode.containerInfo !== S.containerInfo ||
      _.stateNode.implementation !== S.implementation
      ? ((_ = hc(S, C.mode, L)), (_.return = C), _)
      : ((_ = i(_, S.children || [])), (_.return = C), _)
  }
  function f(C, _, S, L, U) {
    return _ === null || _.tag !== 7
      ? ((_ = Nr(S, C.mode, L, U)), (_.return = C), _)
      : ((_ = i(_, S)), (_.return = C), _)
  }
  function p(C, _, S) {
    if ((typeof _ == 'string' && _ !== '') || typeof _ == 'number')
      return (_ = cc('' + _, C.mode, S)), (_.return = C), _
    if (typeof _ == 'object' && _ !== null) {
      switch (_.$$typeof) {
        case sa:
          return (
            (S = ja(_.type, _.key, _.props, null, C.mode, S)),
            (S.ref = _s(C, null, _)),
            (S.return = C),
            S
          )
        case ri:
          return (_ = hc(_, C.mode, S)), (_.return = C), _
        case bn:
          var L = _._init
          return p(C, L(_._payload), S)
      }
      if (Ss(_) || ps(_)) return (_ = Nr(_, C.mode, S, null)), (_.return = C), _
      ga(C, _)
    }
    return null
  }
  function v(C, _, S, L) {
    var U = _ !== null ? _.key : null
    if ((typeof S == 'string' && S !== '') || typeof S == 'number')
      return U !== null ? null : l(C, _, '' + S, L)
    if (typeof S == 'object' && S !== null) {
      switch (S.$$typeof) {
        case sa:
          return S.key === U ? u(C, _, S, L) : null
        case ri:
          return S.key === U ? h(C, _, S, L) : null
        case bn:
          return (U = S._init), v(C, _, U(S._payload), L)
      }
      if (Ss(S) || ps(S)) return U !== null ? null : f(C, _, S, L, null)
      ga(C, S)
    }
    return null
  }
  function A(C, _, S, L, U) {
    if ((typeof L == 'string' && L !== '') || typeof L == 'number')
      return (C = C.get(S) || null), l(_, C, '' + L, U)
    if (typeof L == 'object' && L !== null) {
      switch (L.$$typeof) {
        case sa:
          return (C = C.get(L.key === null ? S : L.key) || null), u(_, C, L, U)
        case ri:
          return (C = C.get(L.key === null ? S : L.key) || null), h(_, C, L, U)
        case bn:
          var j = L._init
          return A(C, _, S, j(L._payload), U)
      }
      if (Ss(L) || ps(L)) return (C = C.get(S) || null), f(_, C, L, U, null)
      ga(_, L)
    }
    return null
  }
  function P(C, _, S, L) {
    for (
      var U = null, j = null, w = _, y = (_ = 0), E = null;
      w !== null && y < S.length;
      y++
    ) {
      w.index > y ? ((E = w), (w = null)) : (E = w.sibling)
      var T = v(C, w, S[y], L)
      if (T === null) {
        w === null && (w = E)
        break
      }
      t && w && T.alternate === null && e(C, w),
        (_ = s(T, _, y)),
        j === null ? (U = T) : (j.sibling = T),
        (j = T),
        (w = E)
    }
    if (y === S.length) return n(C, w), pe && Ir(C, y), U
    if (w === null) {
      for (; y < S.length; y++)
        (w = p(C, S[y], L)),
          w !== null &&
            ((_ = s(w, _, y)), j === null ? (U = w) : (j.sibling = w), (j = w))
      return pe && Ir(C, y), U
    }
    for (w = r(C, w); y < S.length; y++)
      (E = A(w, C, y, S[y], L)),
        E !== null &&
          (t && E.alternate !== null && w.delete(E.key === null ? y : E.key),
          (_ = s(E, _, y)),
          j === null ? (U = E) : (j.sibling = E),
          (j = E))
    return (
      t &&
        w.forEach(function (R) {
          return e(C, R)
        }),
      pe && Ir(C, y),
      U
    )
  }
  function N(C, _, S, L) {
    var U = ps(S)
    if (typeof U != 'function') throw Error(F(150))
    if (((S = U.call(S)), S == null)) throw Error(F(151))
    for (
      var j = (U = null), w = _, y = (_ = 0), E = null, T = S.next();
      w !== null && !T.done;
      y++, T = S.next()
    ) {
      w.index > y ? ((E = w), (w = null)) : (E = w.sibling)
      var R = v(C, w, T.value, L)
      if (R === null) {
        w === null && (w = E)
        break
      }
      t && w && R.alternate === null && e(C, w),
        (_ = s(R, _, y)),
        j === null ? (U = R) : (j.sibling = R),
        (j = R),
        (w = E)
    }
    if (T.done) return n(C, w), pe && Ir(C, y), U
    if (w === null) {
      for (; !T.done; y++, T = S.next())
        (T = p(C, T.value, L)),
          T !== null &&
            ((_ = s(T, _, y)), j === null ? (U = T) : (j.sibling = T), (j = T))
      return pe && Ir(C, y), U
    }
    for (w = r(C, w); !T.done; y++, T = S.next())
      (T = A(w, C, y, T.value, L)),
        T !== null &&
          (t && T.alternate !== null && w.delete(T.key === null ? y : T.key),
          (_ = s(T, _, y)),
          j === null ? (U = T) : (j.sibling = T),
          (j = T))
    return (
      t &&
        w.forEach(function (k) {
          return e(C, k)
        }),
      pe && Ir(C, y),
      U
    )
  }
  function D(C, _, S, L) {
    if (
      (typeof S == 'object' &&
        S !== null &&
        S.type === ii &&
        S.key === null &&
        (S = S.props.children),
      typeof S == 'object' && S !== null)
    ) {
      switch (S.$$typeof) {
        case sa:
          e: {
            for (var U = S.key, j = _; j !== null; ) {
              if (j.key === U) {
                if (((U = S.type), U === ii)) {
                  if (j.tag === 7) {
                    n(C, j.sibling),
                      (_ = i(j, S.props.children)),
                      (_.return = C),
                      (C = _)
                    break e
                  }
                } else if (
                  j.elementType === U ||
                  (typeof U == 'object' &&
                    U !== null &&
                    U.$$typeof === bn &&
                    hm(U) === j.type)
                ) {
                  n(C, j.sibling),
                    (_ = i(j, S.props)),
                    (_.ref = _s(C, j, S)),
                    (_.return = C),
                    (C = _)
                  break e
                }
                n(C, j)
                break
              } else e(C, j)
              j = j.sibling
            }
            S.type === ii
              ? ((_ = Nr(S.props.children, C.mode, L, S.key)),
                (_.return = C),
                (C = _))
              : ((L = ja(S.type, S.key, S.props, null, C.mode, L)),
                (L.ref = _s(C, _, S)),
                (L.return = C),
                (C = L))
          }
          return o(C)
        case ri:
          e: {
            for (j = S.key; _ !== null; ) {
              if (_.key === j)
                if (
                  _.tag === 4 &&
                  _.stateNode.containerInfo === S.containerInfo &&
                  _.stateNode.implementation === S.implementation
                ) {
                  n(C, _.sibling),
                    (_ = i(_, S.children || [])),
                    (_.return = C),
                    (C = _)
                  break e
                } else {
                  n(C, _)
                  break
                }
              else e(C, _)
              _ = _.sibling
            }
            ;(_ = hc(S, C.mode, L)), (_.return = C), (C = _)
          }
          return o(C)
        case bn:
          return (j = S._init), D(C, _, j(S._payload), L)
      }
      if (Ss(S)) return P(C, _, S, L)
      if (ps(S)) return N(C, _, S, L)
      ga(C, S)
    }
    return (typeof S == 'string' && S !== '') || typeof S == 'number'
      ? ((S = '' + S),
        _ !== null && _.tag === 6
          ? (n(C, _.sibling), (_ = i(_, S)), (_.return = C), (C = _))
          : (n(C, _), (_ = cc(S, C.mode, L)), (_.return = C), (C = _)),
        o(C))
      : n(C, _)
  }
  return D
}
var ki = _y(!0),
  Ey = _y(!1),
  al = mr(null),
  ll = null,
  di = null,
  ud = null
function cd() {
  ud = di = ll = null
}
function hd(t) {
  var e = al.current
  fe(al), (t._currentValue = e)
}
function eh(t, e, n) {
  for (; t !== null; ) {
    var r = t.alternate
    if (
      ((t.childLanes & e) !== e
        ? ((t.childLanes |= e), r !== null && (r.childLanes |= e))
        : r !== null && (r.childLanes & e) !== e && (r.childLanes |= e),
      t === n)
    )
      break
    t = t.return
  }
}
function Ei(t, e) {
  ;(ll = t),
    (ud = di = null),
    (t = t.dependencies),
    t !== null &&
      t.firstContext !== null &&
      (t.lanes & e && (ht = !0), (t.firstContext = null))
}
function kt(t) {
  var e = t._currentValue
  if (ud !== t)
    if (((t = { context: t, memoizedValue: e, next: null }), di === null)) {
      if (ll === null) throw Error(F(308))
      ;(di = t), (ll.dependencies = { lanes: 0, firstContext: t })
    } else di = di.next = t
  return e
}
var Rr = null
function dd(t) {
  Rr === null ? (Rr = [t]) : Rr.push(t)
}
function wy(t, e, n, r) {
  var i = e.interleaved
  return (
    i === null ? ((n.next = n), dd(e)) : ((n.next = i.next), (i.next = n)),
    (e.interleaved = n),
    wn(t, r)
  )
}
function wn(t, e) {
  t.lanes |= e
  var n = t.alternate
  for (n !== null && (n.lanes |= e), n = t, t = t.return; t !== null; )
    (t.childLanes |= e),
      (n = t.alternate),
      n !== null && (n.childLanes |= e),
      (n = t),
      (t = t.return)
  return n.tag === 3 ? n.stateNode : null
}
var Fn = !1
function fd(t) {
  t.updateQueue = {
    baseState: t.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  }
}
function Ty(t, e) {
  ;(t = t.updateQueue),
    e.updateQueue === t &&
      (e.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        effects: t.effects,
      })
}
function yn(t, e) {
  return {
    eventTime: t,
    lane: e,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  }
}
function Zn(t, e, n) {
  var r = t.updateQueue
  if (r === null) return null
  if (((r = r.shared), re & 2)) {
    var i = r.pending
    return (
      i === null ? (e.next = e) : ((e.next = i.next), (i.next = e)),
      (r.pending = e),
      wn(t, n)
    )
  }
  return (
    (i = r.interleaved),
    i === null ? ((e.next = e), dd(r)) : ((e.next = i.next), (i.next = e)),
    (r.interleaved = e),
    wn(t, n)
  )
}
function Oa(t, e, n) {
  if (
    ((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194240) !== 0))
  ) {
    var r = e.lanes
    ;(r &= t.pendingLanes), (n |= r), (e.lanes = n), Jh(t, n)
  }
}
function dm(t, e) {
  var n = t.updateQueue,
    r = t.alternate
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      s = null
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        }
        s === null ? (i = s = o) : (s = s.next = o), (n = n.next)
      } while (n !== null)
      s === null ? (i = s = e) : (s = s.next = e)
    } else i = s = e
    ;(n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (t.updateQueue = n)
    return
  }
  ;(t = n.lastBaseUpdate),
    t === null ? (n.firstBaseUpdate = e) : (t.next = e),
    (n.lastBaseUpdate = e)
}
function ul(t, e, n, r) {
  var i = t.updateQueue
  Fn = !1
  var s = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    l = i.shared.pending
  if (l !== null) {
    i.shared.pending = null
    var u = l,
      h = u.next
    ;(u.next = null), o === null ? (s = h) : (o.next = h), (o = u)
    var f = t.alternate
    f !== null &&
      ((f = f.updateQueue),
      (l = f.lastBaseUpdate),
      l !== o &&
        (l === null ? (f.firstBaseUpdate = h) : (l.next = h),
        (f.lastBaseUpdate = u)))
  }
  if (s !== null) {
    var p = i.baseState
    ;(o = 0), (f = h = u = null), (l = s)
    do {
      var v = l.lane,
        A = l.eventTime
      if ((r & v) === v) {
        f !== null &&
          (f = f.next =
            {
              eventTime: A,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            })
        e: {
          var P = t,
            N = l
          switch (((v = e), (A = n), N.tag)) {
            case 1:
              if (((P = N.payload), typeof P == 'function')) {
                p = P.call(A, p, v)
                break e
              }
              p = P
              break e
            case 3:
              P.flags = (P.flags & -65537) | 128
            case 0:
              if (
                ((P = N.payload),
                (v = typeof P == 'function' ? P.call(A, p, v) : P),
                v == null)
              )
                break e
              p = ve({}, p, v)
              break e
            case 2:
              Fn = !0
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((t.flags |= 64),
          (v = i.effects),
          v === null ? (i.effects = [l]) : v.push(l))
      } else
        (A = {
          eventTime: A,
          lane: v,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          f === null ? ((h = f = A), (u = p)) : (f = f.next = A),
          (o |= v)
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break
        ;(v = l),
          (l = v.next),
          (v.next = null),
          (i.lastBaseUpdate = v),
          (i.shared.pending = null)
      }
    } while (!0)
    if (
      (f === null && (u = p),
      (i.baseState = u),
      (i.firstBaseUpdate = h),
      (i.lastBaseUpdate = f),
      (e = i.shared.interleaved),
      e !== null)
    ) {
      i = e
      do (o |= i.lane), (i = i.next)
      while (i !== e)
    } else s === null && (i.shared.lanes = 0)
    ;(Mr |= o), (t.lanes = o), (t.memoizedState = p)
  }
}
function fm(t, e, n) {
  if (((t = e.effects), (e.effects = null), t !== null))
    for (e = 0; e < t.length; e++) {
      var r = t[e],
        i = r.callback
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != 'function'))
          throw Error(F(191, i))
        i.call(r)
      }
    }
}
var Ro = {},
  qt = mr(Ro),
  ro = mr(Ro),
  io = mr(Ro)
function Pr(t) {
  if (t === Ro) throw Error(F(174))
  return t
}
function pd(t, e) {
  switch ((ce(io, e), ce(ro, t), ce(qt, Ro), (t = e.nodeType), t)) {
    case 9:
    case 11:
      e = (e = e.documentElement) ? e.namespaceURI : Lc(null, '')
      break
    default:
      ;(t = t === 8 ? e.parentNode : e),
        (e = t.namespaceURI || null),
        (t = t.tagName),
        (e = Lc(e, t))
  }
  fe(qt), ce(qt, e)
}
function xi() {
  fe(qt), fe(ro), fe(io)
}
function Iy(t) {
  Pr(io.current)
  var e = Pr(qt.current),
    n = Lc(e, t.type)
  e !== n && (ce(ro, t), ce(qt, n))
}
function md(t) {
  ro.current === t && (fe(qt), fe(ro))
}
var ge = mr(0)
function cl(t) {
  for (var e = t; e !== null; ) {
    if (e.tag === 13) {
      var n = e.memoizedState
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return e
    } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
      if (e.flags & 128) return e
    } else if (e.child !== null) {
      ;(e.child.return = e), (e = e.child)
      continue
    }
    if (e === t) break
    for (; e.sibling === null; ) {
      if (e.return === null || e.return === t) return null
      e = e.return
    }
    ;(e.sibling.return = e.return), (e = e.sibling)
  }
  return null
}
var ic = []
function gd() {
  for (var t = 0; t < ic.length; t++) ic[t]._workInProgressVersionPrimary = null
  ic.length = 0
}
var La = Rn.ReactCurrentDispatcher,
  sc = Rn.ReactCurrentBatchConfig,
  Vr = 0,
  ye = null,
  xe = null,
  Ve = null,
  hl = !1,
  bs = !1,
  so = 0,
  ww = 0
function Ge() {
  throw Error(F(321))
}
function yd(t, e) {
  if (e === null) return !1
  for (var n = 0; n < e.length && n < t.length; n++)
    if (!Bt(t[n], e[n])) return !1
  return !0
}
function vd(t, e, n, r, i, s) {
  if (
    ((Vr = s),
    (ye = e),
    (e.memoizedState = null),
    (e.updateQueue = null),
    (e.lanes = 0),
    (La.current = t === null || t.memoizedState === null ? Cw : Aw),
    (t = n(r, i)),
    bs)
  ) {
    s = 0
    do {
      if (((bs = !1), (so = 0), 25 <= s)) throw Error(F(301))
      ;(s += 1),
        (Ve = xe = null),
        (e.updateQueue = null),
        (La.current = Rw),
        (t = n(r, i))
    } while (bs)
  }
  if (
    ((La.current = dl),
    (e = xe !== null && xe.next !== null),
    (Vr = 0),
    (Ve = xe = ye = null),
    (hl = !1),
    e)
  )
    throw Error(F(300))
  return t
}
function _d() {
  var t = so !== 0
  return (so = 0), t
}
function Ht() {
  var t = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  }
  return Ve === null ? (ye.memoizedState = Ve = t) : (Ve = Ve.next = t), Ve
}
function xt() {
  if (xe === null) {
    var t = ye.alternate
    t = t !== null ? t.memoizedState : null
  } else t = xe.next
  var e = Ve === null ? ye.memoizedState : Ve.next
  if (e !== null) (Ve = e), (xe = t)
  else {
    if (t === null) throw Error(F(310))
    ;(xe = t),
      (t = {
        memoizedState: xe.memoizedState,
        baseState: xe.baseState,
        baseQueue: xe.baseQueue,
        queue: xe.queue,
        next: null,
      }),
      Ve === null ? (ye.memoizedState = Ve = t) : (Ve = Ve.next = t)
  }
  return Ve
}
function oo(t, e) {
  return typeof e == 'function' ? e(t) : e
}
function oc(t) {
  var e = xt(),
    n = e.queue
  if (n === null) throw Error(F(311))
  n.lastRenderedReducer = t
  var r = xe,
    i = r.baseQueue,
    s = n.pending
  if (s !== null) {
    if (i !== null) {
      var o = i.next
      ;(i.next = s.next), (s.next = o)
    }
    ;(r.baseQueue = i = s), (n.pending = null)
  }
  if (i !== null) {
    ;(s = i.next), (r = r.baseState)
    var l = (o = null),
      u = null,
      h = s
    do {
      var f = h.lane
      if ((Vr & f) === f)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: h.action,
              hasEagerState: h.hasEagerState,
              eagerState: h.eagerState,
              next: null,
            }),
          (r = h.hasEagerState ? h.eagerState : t(r, h.action))
      else {
        var p = {
          lane: f,
          action: h.action,
          hasEagerState: h.hasEagerState,
          eagerState: h.eagerState,
          next: null,
        }
        u === null ? ((l = u = p), (o = r)) : (u = u.next = p),
          (ye.lanes |= f),
          (Mr |= f)
      }
      h = h.next
    } while (h !== null && h !== s)
    u === null ? (o = r) : (u.next = l),
      Bt(r, e.memoizedState) || (ht = !0),
      (e.memoizedState = r),
      (e.baseState = o),
      (e.baseQueue = u),
      (n.lastRenderedState = r)
  }
  if (((t = n.interleaved), t !== null)) {
    i = t
    do (s = i.lane), (ye.lanes |= s), (Mr |= s), (i = i.next)
    while (i !== t)
  } else i === null && (n.lanes = 0)
  return [e.memoizedState, n.dispatch]
}
function ac(t) {
  var e = xt(),
    n = e.queue
  if (n === null) throw Error(F(311))
  n.lastRenderedReducer = t
  var r = n.dispatch,
    i = n.pending,
    s = e.memoizedState
  if (i !== null) {
    n.pending = null
    var o = (i = i.next)
    do (s = t(s, o.action)), (o = o.next)
    while (o !== i)
    Bt(s, e.memoizedState) || (ht = !0),
      (e.memoizedState = s),
      e.baseQueue === null && (e.baseState = s),
      (n.lastRenderedState = s)
  }
  return [s, r]
}
function Sy() {}
function Cy(t, e) {
  var n = ye,
    r = xt(),
    i = e(),
    s = !Bt(r.memoizedState, i)
  if (
    (s && ((r.memoizedState = i), (ht = !0)),
    (r = r.queue),
    Ed(Py.bind(null, n, r, t), [t]),
    r.getSnapshot !== e || s || (Ve !== null && Ve.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ao(9, Ry.bind(null, n, r, i, e), void 0, null),
      Me === null)
    )
      throw Error(F(349))
    Vr & 30 || Ay(n, e, i)
  }
  return i
}
function Ay(t, e, n) {
  ;(t.flags |= 16384),
    (t = { getSnapshot: e, value: n }),
    (e = ye.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (ye.updateQueue = e),
        (e.stores = [t]))
      : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t))
}
function Ry(t, e, n, r) {
  ;(e.value = n), (e.getSnapshot = r), ky(e) && xy(t)
}
function Py(t, e, n) {
  return n(function () {
    ky(e) && xy(t)
  })
}
function ky(t) {
  var e = t.getSnapshot
  t = t.value
  try {
    var n = e()
    return !Bt(t, n)
  } catch {
    return !0
  }
}
function xy(t) {
  var e = wn(t, 1)
  e !== null && Ut(e, t, 1, -1)
}
function pm(t) {
  var e = Ht()
  return (
    typeof t == 'function' && (t = t()),
    (e.memoizedState = e.baseState = t),
    (t = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: oo,
      lastRenderedState: t,
    }),
    (e.queue = t),
    (t = t.dispatch = Sw.bind(null, ye, t)),
    [e.memoizedState, t]
  )
}
function ao(t, e, n, r) {
  return (
    (t = { tag: t, create: e, destroy: n, deps: r, next: null }),
    (e = ye.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (ye.updateQueue = e),
        (e.lastEffect = t.next = t))
      : ((n = e.lastEffect),
        n === null
          ? (e.lastEffect = t.next = t)
          : ((r = n.next), (n.next = t), (t.next = r), (e.lastEffect = t))),
    t
  )
}
function Ny() {
  return xt().memoizedState
}
function Va(t, e, n, r) {
  var i = Ht()
  ;(ye.flags |= t),
    (i.memoizedState = ao(1 | e, n, void 0, r === void 0 ? null : r))
}
function Wl(t, e, n, r) {
  var i = xt()
  r = r === void 0 ? null : r
  var s = void 0
  if (xe !== null) {
    var o = xe.memoizedState
    if (((s = o.destroy), r !== null && yd(r, o.deps))) {
      i.memoizedState = ao(e, n, s, r)
      return
    }
  }
  ;(ye.flags |= t), (i.memoizedState = ao(1 | e, n, s, r))
}
function mm(t, e) {
  return Va(8390656, 8, t, e)
}
function Ed(t, e) {
  return Wl(2048, 8, t, e)
}
function Dy(t, e) {
  return Wl(4, 2, t, e)
}
function Oy(t, e) {
  return Wl(4, 4, t, e)
}
function Ly(t, e) {
  if (typeof e == 'function')
    return (
      (t = t()),
      e(t),
      function () {
        e(null)
      }
    )
  if (e != null)
    return (
      (t = t()),
      (e.current = t),
      function () {
        e.current = null
      }
    )
}
function Vy(t, e, n) {
  return (
    (n = n != null ? n.concat([t]) : null), Wl(4, 4, Ly.bind(null, e, t), n)
  )
}
function wd() {}
function My(t, e) {
  var n = xt()
  e = e === void 0 ? null : e
  var r = n.memoizedState
  return r !== null && e !== null && yd(e, r[1])
    ? r[0]
    : ((n.memoizedState = [t, e]), t)
}
function by(t, e) {
  var n = xt()
  e = e === void 0 ? null : e
  var r = n.memoizedState
  return r !== null && e !== null && yd(e, r[1])
    ? r[0]
    : ((t = t()), (n.memoizedState = [t, e]), t)
}
function Fy(t, e, n) {
  return Vr & 21
    ? (Bt(n, e) || ((n = $0()), (ye.lanes |= n), (Mr |= n), (t.baseState = !0)),
      e)
    : (t.baseState && ((t.baseState = !1), (ht = !0)), (t.memoizedState = n))
}
function Tw(t, e) {
  var n = oe
  ;(oe = n !== 0 && 4 > n ? n : 4), t(!0)
  var r = sc.transition
  sc.transition = {}
  try {
    t(!1), e()
  } finally {
    ;(oe = n), (sc.transition = r)
  }
}
function jy() {
  return xt().memoizedState
}
function Iw(t, e, n) {
  var r = tr(t)
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Uy(t))
  )
    By(e, n)
  else if (((n = wy(t, e, n, r)), n !== null)) {
    var i = ot()
    Ut(n, t, r, i), zy(n, e, r)
  }
}
function Sw(t, e, n) {
  var r = tr(t),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }
  if (Uy(t)) By(e, i)
  else {
    var s = t.alternate
    if (
      t.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = e.lastRenderedReducer), s !== null)
    )
      try {
        var o = e.lastRenderedState,
          l = s(o, n)
        if (((i.hasEagerState = !0), (i.eagerState = l), Bt(l, o))) {
          var u = e.interleaved
          u === null
            ? ((i.next = i), dd(e))
            : ((i.next = u.next), (u.next = i)),
            (e.interleaved = i)
          return
        }
      } catch {
      } finally {
      }
    ;(n = wy(t, e, i, r)),
      n !== null && ((i = ot()), Ut(n, t, r, i), zy(n, e, r))
  }
}
function Uy(t) {
  var e = t.alternate
  return t === ye || (e !== null && e === ye)
}
function By(t, e) {
  bs = hl = !0
  var n = t.pending
  n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)), (t.pending = e)
}
function zy(t, e, n) {
  if (n & 4194240) {
    var r = e.lanes
    ;(r &= t.pendingLanes), (n |= r), (e.lanes = n), Jh(t, n)
  }
}
var dl = {
    readContext: kt,
    useCallback: Ge,
    useContext: Ge,
    useEffect: Ge,
    useImperativeHandle: Ge,
    useInsertionEffect: Ge,
    useLayoutEffect: Ge,
    useMemo: Ge,
    useReducer: Ge,
    useRef: Ge,
    useState: Ge,
    useDebugValue: Ge,
    useDeferredValue: Ge,
    useTransition: Ge,
    useMutableSource: Ge,
    useSyncExternalStore: Ge,
    useId: Ge,
    unstable_isNewReconciler: !1,
  },
  Cw = {
    readContext: kt,
    useCallback: function (t, e) {
      return (Ht().memoizedState = [t, e === void 0 ? null : e]), t
    },
    useContext: kt,
    useEffect: mm,
    useImperativeHandle: function (t, e, n) {
      return (
        (n = n != null ? n.concat([t]) : null),
        Va(4194308, 4, Ly.bind(null, e, t), n)
      )
    },
    useLayoutEffect: function (t, e) {
      return Va(4194308, 4, t, e)
    },
    useInsertionEffect: function (t, e) {
      return Va(4, 2, t, e)
    },
    useMemo: function (t, e) {
      var n = Ht()
      return (
        (e = e === void 0 ? null : e), (t = t()), (n.memoizedState = [t, e]), t
      )
    },
    useReducer: function (t, e, n) {
      var r = Ht()
      return (
        (e = n !== void 0 ? n(e) : e),
        (r.memoizedState = r.baseState = e),
        (t = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: t,
          lastRenderedState: e,
        }),
        (r.queue = t),
        (t = t.dispatch = Iw.bind(null, ye, t)),
        [r.memoizedState, t]
      )
    },
    useRef: function (t) {
      var e = Ht()
      return (t = { current: t }), (e.memoizedState = t)
    },
    useState: pm,
    useDebugValue: wd,
    useDeferredValue: function (t) {
      return (Ht().memoizedState = t)
    },
    useTransition: function () {
      var t = pm(!1),
        e = t[0]
      return (t = Tw.bind(null, t[1])), (Ht().memoizedState = t), [e, t]
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (t, e, n) {
      var r = ye,
        i = Ht()
      if (pe) {
        if (n === void 0) throw Error(F(407))
        n = n()
      } else {
        if (((n = e()), Me === null)) throw Error(F(349))
        Vr & 30 || Ay(r, e, n)
      }
      i.memoizedState = n
      var s = { value: n, getSnapshot: e }
      return (
        (i.queue = s),
        mm(Py.bind(null, r, s, t), [t]),
        (r.flags |= 2048),
        ao(9, Ry.bind(null, r, s, n, e), void 0, null),
        n
      )
    },
    useId: function () {
      var t = Ht(),
        e = Me.identifierPrefix
      if (pe) {
        var n = fn,
          r = dn
        ;(n = (r & ~(1 << (32 - jt(r) - 1))).toString(32) + n),
          (e = ':' + e + 'R' + n),
          (n = so++),
          0 < n && (e += 'H' + n.toString(32)),
          (e += ':')
      } else (n = ww++), (e = ':' + e + 'r' + n.toString(32) + ':')
      return (t.memoizedState = e)
    },
    unstable_isNewReconciler: !1,
  },
  Aw = {
    readContext: kt,
    useCallback: My,
    useContext: kt,
    useEffect: Ed,
    useImperativeHandle: Vy,
    useInsertionEffect: Dy,
    useLayoutEffect: Oy,
    useMemo: by,
    useReducer: oc,
    useRef: Ny,
    useState: function () {
      return oc(oo)
    },
    useDebugValue: wd,
    useDeferredValue: function (t) {
      var e = xt()
      return Fy(e, xe.memoizedState, t)
    },
    useTransition: function () {
      var t = oc(oo)[0],
        e = xt().memoizedState
      return [t, e]
    },
    useMutableSource: Sy,
    useSyncExternalStore: Cy,
    useId: jy,
    unstable_isNewReconciler: !1,
  },
  Rw = {
    readContext: kt,
    useCallback: My,
    useContext: kt,
    useEffect: Ed,
    useImperativeHandle: Vy,
    useInsertionEffect: Dy,
    useLayoutEffect: Oy,
    useMemo: by,
    useReducer: ac,
    useRef: Ny,
    useState: function () {
      return ac(oo)
    },
    useDebugValue: wd,
    useDeferredValue: function (t) {
      var e = xt()
      return xe === null ? (e.memoizedState = t) : Fy(e, xe.memoizedState, t)
    },
    useTransition: function () {
      var t = ac(oo)[0],
        e = xt().memoizedState
      return [t, e]
    },
    useMutableSource: Sy,
    useSyncExternalStore: Cy,
    useId: jy,
    unstable_isNewReconciler: !1,
  }
function Lt(t, e) {
  if (t && t.defaultProps) {
    ;(e = ve({}, e)), (t = t.defaultProps)
    for (var n in t) e[n] === void 0 && (e[n] = t[n])
    return e
  }
  return e
}
function th(t, e, n, r) {
  ;(e = t.memoizedState),
    (n = n(r, e)),
    (n = n == null ? e : ve({}, e, n)),
    (t.memoizedState = n),
    t.lanes === 0 && (t.updateQueue.baseState = n)
}
var Kl = {
  isMounted: function (t) {
    return (t = t._reactInternals) ? Wr(t) === t : !1
  },
  enqueueSetState: function (t, e, n) {
    t = t._reactInternals
    var r = ot(),
      i = tr(t),
      s = yn(r, i)
    ;(s.payload = e),
      n != null && (s.callback = n),
      (e = Zn(t, s, i)),
      e !== null && (Ut(e, t, i, r), Oa(e, t, i))
  },
  enqueueReplaceState: function (t, e, n) {
    t = t._reactInternals
    var r = ot(),
      i = tr(t),
      s = yn(r, i)
    ;(s.tag = 1),
      (s.payload = e),
      n != null && (s.callback = n),
      (e = Zn(t, s, i)),
      e !== null && (Ut(e, t, i, r), Oa(e, t, i))
  },
  enqueueForceUpdate: function (t, e) {
    t = t._reactInternals
    var n = ot(),
      r = tr(t),
      i = yn(n, r)
    ;(i.tag = 2),
      e != null && (i.callback = e),
      (e = Zn(t, i, r)),
      e !== null && (Ut(e, t, r, n), Oa(e, t, r))
  },
}
function gm(t, e, n, r, i, s, o) {
  return (
    (t = t.stateNode),
    typeof t.shouldComponentUpdate == 'function'
      ? t.shouldComponentUpdate(r, s, o)
      : e.prototype && e.prototype.isPureReactComponent
      ? !Zs(n, r) || !Zs(i, s)
      : !0
  )
}
function $y(t, e, n) {
  var r = !1,
    i = ur,
    s = e.contextType
  return (
    typeof s == 'object' && s !== null
      ? (s = kt(s))
      : ((i = ft(e) ? Or : et.current),
        (r = e.contextTypes),
        (s = (r = r != null) ? Ri(t, i) : ur)),
    (e = new e(n, s)),
    (t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null),
    (e.updater = Kl),
    (t.stateNode = e),
    (e._reactInternals = t),
    r &&
      ((t = t.stateNode),
      (t.__reactInternalMemoizedUnmaskedChildContext = i),
      (t.__reactInternalMemoizedMaskedChildContext = s)),
    e
  )
}
function ym(t, e, n, r) {
  ;(t = e.state),
    typeof e.componentWillReceiveProps == 'function' &&
      e.componentWillReceiveProps(n, r),
    typeof e.UNSAFE_componentWillReceiveProps == 'function' &&
      e.UNSAFE_componentWillReceiveProps(n, r),
    e.state !== t && Kl.enqueueReplaceState(e, e.state, null)
}
function nh(t, e, n, r) {
  var i = t.stateNode
  ;(i.props = n), (i.state = t.memoizedState), (i.refs = {}), fd(t)
  var s = e.contextType
  typeof s == 'object' && s !== null
    ? (i.context = kt(s))
    : ((s = ft(e) ? Or : et.current), (i.context = Ri(t, s))),
    (i.state = t.memoizedState),
    (s = e.getDerivedStateFromProps),
    typeof s == 'function' && (th(t, e, s, n), (i.state = t.memoizedState)),
    typeof e.getDerivedStateFromProps == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function' ||
      (typeof i.UNSAFE_componentWillMount != 'function' &&
        typeof i.componentWillMount != 'function') ||
      ((e = i.state),
      typeof i.componentWillMount == 'function' && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == 'function' &&
        i.UNSAFE_componentWillMount(),
      e !== i.state && Kl.enqueueReplaceState(i, i.state, null),
      ul(t, n, i, r),
      (i.state = t.memoizedState)),
    typeof i.componentDidMount == 'function' && (t.flags |= 4194308)
}
function Ni(t, e) {
  try {
    var n = '',
      r = e
    do (n += tE(r)), (r = r.return)
    while (r)
    var i = n
  } catch (s) {
    i =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack
  }
  return { value: t, source: e, stack: i, digest: null }
}
function lc(t, e, n) {
  return { value: t, source: null, stack: n ?? null, digest: e ?? null }
}
function rh(t, e) {
  try {
    console.error(e.value)
  } catch (n) {
    setTimeout(function () {
      throw n
    })
  }
}
var Pw = typeof WeakMap == 'function' ? WeakMap : Map
function Hy(t, e, n) {
  ;(n = yn(-1, n)), (n.tag = 3), (n.payload = { element: null })
  var r = e.value
  return (
    (n.callback = function () {
      pl || ((pl = !0), (fh = r)), rh(t, e)
    }),
    n
  )
}
function Wy(t, e, n) {
  ;(n = yn(-1, n)), (n.tag = 3)
  var r = t.type.getDerivedStateFromError
  if (typeof r == 'function') {
    var i = e.value
    ;(n.payload = function () {
      return r(i)
    }),
      (n.callback = function () {
        rh(t, e)
      })
  }
  var s = t.stateNode
  return (
    s !== null &&
      typeof s.componentDidCatch == 'function' &&
      (n.callback = function () {
        rh(t, e),
          typeof r != 'function' &&
            (er === null ? (er = new Set([this])) : er.add(this))
        var o = e.stack
        this.componentDidCatch(e.value, { componentStack: o !== null ? o : '' })
      }),
    n
  )
}
function vm(t, e, n) {
  var r = t.pingCache
  if (r === null) {
    r = t.pingCache = new Pw()
    var i = new Set()
    r.set(e, i)
  } else (i = r.get(e)), i === void 0 && ((i = new Set()), r.set(e, i))
  i.has(n) || (i.add(n), (t = zw.bind(null, t, e, n)), e.then(t, t))
}
function _m(t) {
  do {
    var e
    if (
      ((e = t.tag === 13) &&
        ((e = t.memoizedState), (e = e !== null ? e.dehydrated !== null : !0)),
      e)
    )
      return t
    t = t.return
  } while (t !== null)
  return null
}
function Em(t, e, n, r, i) {
  return t.mode & 1
    ? ((t.flags |= 65536), (t.lanes = i), t)
    : (t === e
        ? (t.flags |= 65536)
        : ((t.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((e = yn(-1, 1)), (e.tag = 2), Zn(n, e, 1))),
          (n.lanes |= 1)),
      t)
}
var kw = Rn.ReactCurrentOwner,
  ht = !1
function it(t, e, n, r) {
  e.child = t === null ? Ey(e, null, n, r) : ki(e, t.child, n, r)
}
function wm(t, e, n, r, i) {
  n = n.render
  var s = e.ref
  return (
    Ei(e, i),
    (r = vd(t, e, n, r, s, i)),
    (n = _d()),
    t !== null && !ht
      ? ((e.updateQueue = t.updateQueue),
        (e.flags &= -2053),
        (t.lanes &= ~i),
        Tn(t, e, i))
      : (pe && n && od(e), (e.flags |= 1), it(t, e, r, i), e.child)
  )
}
function Tm(t, e, n, r, i) {
  if (t === null) {
    var s = n.type
    return typeof s == 'function' &&
      !kd(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((e.tag = 15), (e.type = s), Ky(t, e, s, r, i))
      : ((t = ja(n.type, null, r, e, e.mode, i)),
        (t.ref = e.ref),
        (t.return = e),
        (e.child = t))
  }
  if (((s = t.child), !(t.lanes & i))) {
    var o = s.memoizedProps
    if (
      ((n = n.compare), (n = n !== null ? n : Zs), n(o, r) && t.ref === e.ref)
    )
      return Tn(t, e, i)
  }
  return (
    (e.flags |= 1),
    (t = nr(s, r)),
    (t.ref = e.ref),
    (t.return = e),
    (e.child = t)
  )
}
function Ky(t, e, n, r, i) {
  if (t !== null) {
    var s = t.memoizedProps
    if (Zs(s, r) && t.ref === e.ref)
      if (((ht = !1), (e.pendingProps = r = s), (t.lanes & i) !== 0))
        t.flags & 131072 && (ht = !0)
      else return (e.lanes = t.lanes), Tn(t, e, i)
  }
  return ih(t, e, n, r, i)
}
function qy(t, e, n) {
  var r = e.pendingProps,
    i = r.children,
    s = t !== null ? t.memoizedState : null
  if (r.mode === 'hidden')
    if (!(e.mode & 1))
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ce(pi, yt),
        (yt |= n)
    else {
      if (!(n & 1073741824))
        return (
          (t = s !== null ? s.baseLanes | n : n),
          (e.lanes = e.childLanes = 1073741824),
          (e.memoizedState = {
            baseLanes: t,
            cachePool: null,
            transitions: null,
          }),
          (e.updateQueue = null),
          ce(pi, yt),
          (yt |= t),
          null
        )
      ;(e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        ce(pi, yt),
        (yt |= r)
    }
  else
    s !== null ? ((r = s.baseLanes | n), (e.memoizedState = null)) : (r = n),
      ce(pi, yt),
      (yt |= r)
  return it(t, e, i, n), e.child
}
function Gy(t, e) {
  var n = e.ref
  ;((t === null && n !== null) || (t !== null && t.ref !== n)) &&
    ((e.flags |= 512), (e.flags |= 2097152))
}
function ih(t, e, n, r, i) {
  var s = ft(n) ? Or : et.current
  return (
    (s = Ri(e, s)),
    Ei(e, i),
    (n = vd(t, e, n, r, s, i)),
    (r = _d()),
    t !== null && !ht
      ? ((e.updateQueue = t.updateQueue),
        (e.flags &= -2053),
        (t.lanes &= ~i),
        Tn(t, e, i))
      : (pe && r && od(e), (e.flags |= 1), it(t, e, n, i), e.child)
  )
}
function Im(t, e, n, r, i) {
  if (ft(n)) {
    var s = !0
    il(e)
  } else s = !1
  if ((Ei(e, i), e.stateNode === null))
    Ma(t, e), $y(e, n, r), nh(e, n, r, i), (r = !0)
  else if (t === null) {
    var o = e.stateNode,
      l = e.memoizedProps
    o.props = l
    var u = o.context,
      h = n.contextType
    typeof h == 'object' && h !== null
      ? (h = kt(h))
      : ((h = ft(n) ? Or : et.current), (h = Ri(e, h)))
    var f = n.getDerivedStateFromProps,
      p =
        typeof f == 'function' || typeof o.getSnapshotBeforeUpdate == 'function'
    p ||
      (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof o.componentWillReceiveProps != 'function') ||
      ((l !== r || u !== h) && ym(e, o, r, h)),
      (Fn = !1)
    var v = e.memoizedState
    ;(o.state = v),
      ul(e, r, o, i),
      (u = e.memoizedState),
      l !== r || v !== u || dt.current || Fn
        ? (typeof f == 'function' && (th(e, n, f, r), (u = e.memoizedState)),
          (l = Fn || gm(e, n, l, r, v, u, h))
            ? (p ||
                (typeof o.UNSAFE_componentWillMount != 'function' &&
                  typeof o.componentWillMount != 'function') ||
                (typeof o.componentWillMount == 'function' &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == 'function' &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == 'function' && (e.flags |= 4194308))
            : (typeof o.componentDidMount == 'function' && (e.flags |= 4194308),
              (e.memoizedProps = r),
              (e.memoizedState = u)),
          (o.props = r),
          (o.state = u),
          (o.context = h),
          (r = l))
        : (typeof o.componentDidMount == 'function' && (e.flags |= 4194308),
          (r = !1))
  } else {
    ;(o = e.stateNode),
      Ty(t, e),
      (l = e.memoizedProps),
      (h = e.type === e.elementType ? l : Lt(e.type, l)),
      (o.props = h),
      (p = e.pendingProps),
      (v = o.context),
      (u = n.contextType),
      typeof u == 'object' && u !== null
        ? (u = kt(u))
        : ((u = ft(n) ? Or : et.current), (u = Ri(e, u)))
    var A = n.getDerivedStateFromProps
    ;(f =
      typeof A == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function') ||
      (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof o.componentWillReceiveProps != 'function') ||
      ((l !== p || v !== u) && ym(e, o, r, u)),
      (Fn = !1),
      (v = e.memoizedState),
      (o.state = v),
      ul(e, r, o, i)
    var P = e.memoizedState
    l !== p || v !== P || dt.current || Fn
      ? (typeof A == 'function' && (th(e, n, A, r), (P = e.memoizedState)),
        (h = Fn || gm(e, n, h, r, v, P, u) || !1)
          ? (f ||
              (typeof o.UNSAFE_componentWillUpdate != 'function' &&
                typeof o.componentWillUpdate != 'function') ||
              (typeof o.componentWillUpdate == 'function' &&
                o.componentWillUpdate(r, P, u),
              typeof o.UNSAFE_componentWillUpdate == 'function' &&
                o.UNSAFE_componentWillUpdate(r, P, u)),
            typeof o.componentDidUpdate == 'function' && (e.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == 'function' && (e.flags |= 1024))
          : (typeof o.componentDidUpdate != 'function' ||
              (l === t.memoizedProps && v === t.memoizedState) ||
              (e.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != 'function' ||
              (l === t.memoizedProps && v === t.memoizedState) ||
              (e.flags |= 1024),
            (e.memoizedProps = r),
            (e.memoizedState = P)),
        (o.props = r),
        (o.state = P),
        (o.context = u),
        (r = h))
      : (typeof o.componentDidUpdate != 'function' ||
          (l === t.memoizedProps && v === t.memoizedState) ||
          (e.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != 'function' ||
          (l === t.memoizedProps && v === t.memoizedState) ||
          (e.flags |= 1024),
        (r = !1))
  }
  return sh(t, e, n, r, s, i)
}
function sh(t, e, n, r, i, s) {
  Gy(t, e)
  var o = (e.flags & 128) !== 0
  if (!r && !o) return i && lm(e, n, !1), Tn(t, e, s)
  ;(r = e.stateNode), (kw.current = e)
  var l =
    o && typeof n.getDerivedStateFromError != 'function' ? null : r.render()
  return (
    (e.flags |= 1),
    t !== null && o
      ? ((e.child = ki(e, t.child, null, s)), (e.child = ki(e, null, l, s)))
      : it(t, e, l, s),
    (e.memoizedState = r.state),
    i && lm(e, n, !0),
    e.child
  )
}
function Qy(t) {
  var e = t.stateNode
  e.pendingContext
    ? am(t, e.pendingContext, e.pendingContext !== e.context)
    : e.context && am(t, e.context, !1),
    pd(t, e.containerInfo)
}
function Sm(t, e, n, r, i) {
  return Pi(), ld(i), (e.flags |= 256), it(t, e, n, r), e.child
}
var oh = { dehydrated: null, treeContext: null, retryLane: 0 }
function ah(t) {
  return { baseLanes: t, cachePool: null, transitions: null }
}
function Yy(t, e, n) {
  var r = e.pendingProps,
    i = ge.current,
    s = !1,
    o = (e.flags & 128) !== 0,
    l
  if (
    ((l = o) ||
      (l = t !== null && t.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((s = !0), (e.flags &= -129))
      : (t === null || t.memoizedState !== null) && (i |= 1),
    ce(ge, i & 1),
    t === null)
  )
    return (
      Zc(e),
      (t = e.memoizedState),
      t !== null && ((t = t.dehydrated), t !== null)
        ? (e.mode & 1
            ? t.data === '$!'
              ? (e.lanes = 8)
              : (e.lanes = 1073741824)
            : (e.lanes = 1),
          null)
        : ((o = r.children),
          (t = r.fallback),
          s
            ? ((r = e.mode),
              (s = e.child),
              (o = { mode: 'hidden', children: o }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = o))
                : (s = Ql(o, r, 0, null)),
              (t = Nr(t, r, n, null)),
              (s.return = e),
              (t.return = e),
              (s.sibling = t),
              (e.child = s),
              (e.child.memoizedState = ah(n)),
              (e.memoizedState = oh),
              t)
            : Td(e, o))
    )
  if (((i = t.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return xw(t, e, o, r, l, i, n)
  if (s) {
    ;(s = r.fallback), (o = e.mode), (i = t.child), (l = i.sibling)
    var u = { mode: 'hidden', children: r.children }
    return (
      !(o & 1) && e.child !== i
        ? ((r = e.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (e.deletions = null))
        : ((r = nr(i, u)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (s = nr(l, s)) : ((s = Nr(s, o, n, null)), (s.flags |= 2)),
      (s.return = e),
      (r.return = e),
      (r.sibling = s),
      (e.child = r),
      (r = s),
      (s = e.child),
      (o = t.child.memoizedState),
      (o =
        o === null
          ? ah(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (s.memoizedState = o),
      (s.childLanes = t.childLanes & ~n),
      (e.memoizedState = oh),
      r
    )
  }
  return (
    (s = t.child),
    (t = s.sibling),
    (r = nr(s, { mode: 'visible', children: r.children })),
    !(e.mode & 1) && (r.lanes = n),
    (r.return = e),
    (r.sibling = null),
    t !== null &&
      ((n = e.deletions),
      n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t)),
    (e.child = r),
    (e.memoizedState = null),
    r
  )
}
function Td(t, e) {
  return (
    (e = Ql({ mode: 'visible', children: e }, t.mode, 0, null)),
    (e.return = t),
    (t.child = e)
  )
}
function ya(t, e, n, r) {
  return (
    r !== null && ld(r),
    ki(e, t.child, null, n),
    (t = Td(e, e.pendingProps.children)),
    (t.flags |= 2),
    (e.memoizedState = null),
    t
  )
}
function xw(t, e, n, r, i, s, o) {
  if (n)
    return e.flags & 256
      ? ((e.flags &= -257), (r = lc(Error(F(422)))), ya(t, e, o, r))
      : e.memoizedState !== null
      ? ((e.child = t.child), (e.flags |= 128), null)
      : ((s = r.fallback),
        (i = e.mode),
        (r = Ql({ mode: 'visible', children: r.children }, i, 0, null)),
        (s = Nr(s, i, o, null)),
        (s.flags |= 2),
        (r.return = e),
        (s.return = e),
        (r.sibling = s),
        (e.child = r),
        e.mode & 1 && ki(e, t.child, null, o),
        (e.child.memoizedState = ah(o)),
        (e.memoizedState = oh),
        s)
  if (!(e.mode & 1)) return ya(t, e, o, null)
  if (i.data === '$!') {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst
    return (r = l), (s = Error(F(419))), (r = lc(s, r, void 0)), ya(t, e, o, r)
  }
  if (((l = (o & t.childLanes) !== 0), ht || l)) {
    if (((r = Me), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2
          break
        case 16:
          i = 8
          break
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32
          break
        case 536870912:
          i = 268435456
          break
        default:
          i = 0
      }
      ;(i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 &&
          i !== s.retryLane &&
          ((s.retryLane = i), wn(t, i), Ut(r, t, i, -1))
    }
    return Pd(), (r = lc(Error(F(421)))), ya(t, e, o, r)
  }
  return i.data === '$?'
    ? ((e.flags |= 128),
      (e.child = t.child),
      (e = $w.bind(null, t)),
      (i._reactRetry = e),
      null)
    : ((t = s.treeContext),
      (vt = Jn(i.nextSibling)),
      (_t = e),
      (pe = !0),
      (Mt = null),
      t !== null &&
        ((It[St++] = dn),
        (It[St++] = fn),
        (It[St++] = Lr),
        (dn = t.id),
        (fn = t.overflow),
        (Lr = e)),
      (e = Td(e, r.children)),
      (e.flags |= 4096),
      e)
}
function Cm(t, e, n) {
  t.lanes |= e
  var r = t.alternate
  r !== null && (r.lanes |= e), eh(t.return, e, n)
}
function uc(t, e, n, r, i) {
  var s = t.memoizedState
  s === null
    ? (t.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((s.isBackwards = e),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = i))
}
function Xy(t, e, n) {
  var r = e.pendingProps,
    i = r.revealOrder,
    s = r.tail
  if ((it(t, e, r.children, n), (r = ge.current), r & 2))
    (r = (r & 1) | 2), (e.flags |= 128)
  else {
    if (t !== null && t.flags & 128)
      e: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && Cm(t, n, e)
        else if (t.tag === 19) Cm(t, n, e)
        else if (t.child !== null) {
          ;(t.child.return = t), (t = t.child)
          continue
        }
        if (t === e) break e
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) break e
          t = t.return
        }
        ;(t.sibling.return = t.return), (t = t.sibling)
      }
    r &= 1
  }
  if ((ce(ge, r), !(e.mode & 1))) e.memoizedState = null
  else
    switch (i) {
      case 'forwards':
        for (n = e.child, i = null; n !== null; )
          (t = n.alternate),
            t !== null && cl(t) === null && (i = n),
            (n = n.sibling)
        ;(n = i),
          n === null
            ? ((i = e.child), (e.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          uc(e, !1, i, n, s)
        break
      case 'backwards':
        for (n = null, i = e.child, e.child = null; i !== null; ) {
          if (((t = i.alternate), t !== null && cl(t) === null)) {
            e.child = i
            break
          }
          ;(t = i.sibling), (i.sibling = n), (n = i), (i = t)
        }
        uc(e, !0, n, null, s)
        break
      case 'together':
        uc(e, !1, null, null, void 0)
        break
      default:
        e.memoizedState = null
    }
  return e.child
}
function Ma(t, e) {
  !(e.mode & 1) &&
    t !== null &&
    ((t.alternate = null), (e.alternate = null), (e.flags |= 2))
}
function Tn(t, e, n) {
  if (
    (t !== null && (e.dependencies = t.dependencies),
    (Mr |= e.lanes),
    !(n & e.childLanes))
  )
    return null
  if (t !== null && e.child !== t.child) throw Error(F(153))
  if (e.child !== null) {
    for (
      t = e.child, n = nr(t, t.pendingProps), e.child = n, n.return = e;
      t.sibling !== null;

    )
      (t = t.sibling), (n = n.sibling = nr(t, t.pendingProps)), (n.return = e)
    n.sibling = null
  }
  return e.child
}
function Nw(t, e, n) {
  switch (e.tag) {
    case 3:
      Qy(e), Pi()
      break
    case 5:
      Iy(e)
      break
    case 1:
      ft(e.type) && il(e)
      break
    case 4:
      pd(e, e.stateNode.containerInfo)
      break
    case 10:
      var r = e.type._context,
        i = e.memoizedProps.value
      ce(al, r._currentValue), (r._currentValue = i)
      break
    case 13:
      if (((r = e.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ce(ge, ge.current & 1), (e.flags |= 128), null)
          : n & e.child.childLanes
          ? Yy(t, e, n)
          : (ce(ge, ge.current & 1),
            (t = Tn(t, e, n)),
            t !== null ? t.sibling : null)
      ce(ge, ge.current & 1)
      break
    case 19:
      if (((r = (n & e.childLanes) !== 0), t.flags & 128)) {
        if (r) return Xy(t, e, n)
        e.flags |= 128
      }
      if (
        ((i = e.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        ce(ge, ge.current),
        r)
      )
        break
      return null
    case 22:
    case 23:
      return (e.lanes = 0), qy(t, e, n)
  }
  return Tn(t, e, n)
}
var Jy, lh, Zy, ev
Jy = function (t, e) {
  for (var n = e.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) t.appendChild(n.stateNode)
    else if (n.tag !== 4 && n.child !== null) {
      ;(n.child.return = n), (n = n.child)
      continue
    }
    if (n === e) break
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) return
      n = n.return
    }
    ;(n.sibling.return = n.return), (n = n.sibling)
  }
}
lh = function () {}
Zy = function (t, e, n, r) {
  var i = t.memoizedProps
  if (i !== r) {
    ;(t = e.stateNode), Pr(qt.current)
    var s = null
    switch (n) {
      case 'input':
        ;(i = xc(t, i)), (r = xc(t, r)), (s = [])
        break
      case 'select':
        ;(i = ve({}, i, { value: void 0 })),
          (r = ve({}, r, { value: void 0 })),
          (s = [])
        break
      case 'textarea':
        ;(i = Oc(t, i)), (r = Oc(t, r)), (s = [])
        break
      default:
        typeof i.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (t.onclick = nl)
    }
    Vc(n, r)
    var o
    n = null
    for (h in i)
      if (!r.hasOwnProperty(h) && i.hasOwnProperty(h) && i[h] != null)
        if (h === 'style') {
          var l = i[h]
          for (o in l) l.hasOwnProperty(o) && (n || (n = {}), (n[o] = ''))
        } else
          h !== 'dangerouslySetInnerHTML' &&
            h !== 'children' &&
            h !== 'suppressContentEditableWarning' &&
            h !== 'suppressHydrationWarning' &&
            h !== 'autoFocus' &&
            (Ks.hasOwnProperty(h) ? s || (s = []) : (s = s || []).push(h, null))
    for (h in r) {
      var u = r[h]
      if (
        ((l = i != null ? i[h] : void 0),
        r.hasOwnProperty(h) && u !== l && (u != null || l != null))
      )
        if (h === 'style')
          if (l) {
            for (o in l)
              !l.hasOwnProperty(o) ||
                (u && u.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ''))
            for (o in u)
              u.hasOwnProperty(o) &&
                l[o] !== u[o] &&
                (n || (n = {}), (n[o] = u[o]))
          } else n || (s || (s = []), s.push(h, n)), (n = u)
        else
          h === 'dangerouslySetInnerHTML'
            ? ((u = u ? u.__html : void 0),
              (l = l ? l.__html : void 0),
              u != null && l !== u && (s = s || []).push(h, u))
            : h === 'children'
            ? (typeof u != 'string' && typeof u != 'number') ||
              (s = s || []).push(h, '' + u)
            : h !== 'suppressContentEditableWarning' &&
              h !== 'suppressHydrationWarning' &&
              (Ks.hasOwnProperty(h)
                ? (u != null && h === 'onScroll' && de('scroll', t),
                  s || l === u || (s = []))
                : (s = s || []).push(h, u))
    }
    n && (s = s || []).push('style', n)
    var h = s
    ;(e.updateQueue = h) && (e.flags |= 4)
  }
}
ev = function (t, e, n, r) {
  n !== r && (e.flags |= 4)
}
function Es(t, e) {
  if (!pe)
    switch (t.tailMode) {
      case 'hidden':
        e = t.tail
        for (var n = null; e !== null; )
          e.alternate !== null && (n = e), (e = e.sibling)
        n === null ? (t.tail = null) : (n.sibling = null)
        break
      case 'collapsed':
        n = t.tail
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling)
        r === null
          ? e || t.tail === null
            ? (t.tail = null)
            : (t.tail.sibling = null)
          : (r.sibling = null)
    }
}
function Qe(t) {
  var e = t.alternate !== null && t.alternate.child === t.child,
    n = 0,
    r = 0
  if (e)
    for (var i = t.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = t),
        (i = i.sibling)
  else
    for (i = t.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = t),
        (i = i.sibling)
  return (t.subtreeFlags |= r), (t.childLanes = n), e
}
function Dw(t, e, n) {
  var r = e.pendingProps
  switch ((ad(e), e.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Qe(e), null
    case 1:
      return ft(e.type) && rl(), Qe(e), null
    case 3:
      return (
        (r = e.stateNode),
        xi(),
        fe(dt),
        fe(et),
        gd(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (t === null || t.child === null) &&
          (ma(e)
            ? (e.flags |= 4)
            : t === null ||
              (t.memoizedState.isDehydrated && !(e.flags & 256)) ||
              ((e.flags |= 1024), Mt !== null && (gh(Mt), (Mt = null)))),
        lh(t, e),
        Qe(e),
        null
      )
    case 5:
      md(e)
      var i = Pr(io.current)
      if (((n = e.type), t !== null && e.stateNode != null))
        Zy(t, e, n, r, i),
          t.ref !== e.ref && ((e.flags |= 512), (e.flags |= 2097152))
      else {
        if (!r) {
          if (e.stateNode === null) throw Error(F(166))
          return Qe(e), null
        }
        if (((t = Pr(qt.current)), ma(e))) {
          ;(r = e.stateNode), (n = e.type)
          var s = e.memoizedProps
          switch (((r[Wt] = e), (r[no] = s), (t = (e.mode & 1) !== 0), n)) {
            case 'dialog':
              de('cancel', r), de('close', r)
              break
            case 'iframe':
            case 'object':
            case 'embed':
              de('load', r)
              break
            case 'video':
            case 'audio':
              for (i = 0; i < As.length; i++) de(As[i], r)
              break
            case 'source':
              de('error', r)
              break
            case 'img':
            case 'image':
            case 'link':
              de('error', r), de('load', r)
              break
            case 'details':
              de('toggle', r)
              break
            case 'input':
              Lp(r, s), de('invalid', r)
              break
            case 'select':
              ;(r._wrapperState = { wasMultiple: !!s.multiple }),
                de('invalid', r)
              break
            case 'textarea':
              Mp(r, s), de('invalid', r)
          }
          Vc(n, s), (i = null)
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var l = s[o]
              o === 'children'
                ? typeof l == 'string'
                  ? r.textContent !== l &&
                    (s.suppressHydrationWarning !== !0 &&
                      pa(r.textContent, l, t),
                    (i = ['children', l]))
                  : typeof l == 'number' &&
                    r.textContent !== '' + l &&
                    (s.suppressHydrationWarning !== !0 &&
                      pa(r.textContent, l, t),
                    (i = ['children', '' + l]))
                : Ks.hasOwnProperty(o) &&
                  l != null &&
                  o === 'onScroll' &&
                  de('scroll', r)
            }
          switch (n) {
            case 'input':
              oa(r), Vp(r, s, !0)
              break
            case 'textarea':
              oa(r), bp(r)
              break
            case 'select':
            case 'option':
              break
            default:
              typeof s.onClick == 'function' && (r.onclick = nl)
          }
          ;(r = i), (e.updateQueue = r), r !== null && (e.flags |= 4)
        } else {
          ;(o = i.nodeType === 9 ? i : i.ownerDocument),
            t === 'http://www.w3.org/1999/xhtml' && (t = P0(n)),
            t === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((t = o.createElement('div')),
                  (t.innerHTML = '<script></script>'),
                  (t = t.removeChild(t.firstChild)))
                : typeof r.is == 'string'
                ? (t = o.createElement(n, { is: r.is }))
                : ((t = o.createElement(n)),
                  n === 'select' &&
                    ((o = t),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (t = o.createElementNS(t, n)),
            (t[Wt] = e),
            (t[no] = r),
            Jy(t, e, !1, !1),
            (e.stateNode = t)
          e: {
            switch (((o = Mc(n, r)), n)) {
              case 'dialog':
                de('cancel', t), de('close', t), (i = r)
                break
              case 'iframe':
              case 'object':
              case 'embed':
                de('load', t), (i = r)
                break
              case 'video':
              case 'audio':
                for (i = 0; i < As.length; i++) de(As[i], t)
                i = r
                break
              case 'source':
                de('error', t), (i = r)
                break
              case 'img':
              case 'image':
              case 'link':
                de('error', t), de('load', t), (i = r)
                break
              case 'details':
                de('toggle', t), (i = r)
                break
              case 'input':
                Lp(t, r), (i = xc(t, r)), de('invalid', t)
                break
              case 'option':
                i = r
                break
              case 'select':
                ;(t._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = ve({}, r, { value: void 0 })),
                  de('invalid', t)
                break
              case 'textarea':
                Mp(t, r), (i = Oc(t, r)), de('invalid', t)
                break
              default:
                i = r
            }
            Vc(n, i), (l = i)
            for (s in l)
              if (l.hasOwnProperty(s)) {
                var u = l[s]
                s === 'style'
                  ? N0(t, u)
                  : s === 'dangerouslySetInnerHTML'
                  ? ((u = u ? u.__html : void 0), u != null && k0(t, u))
                  : s === 'children'
                  ? typeof u == 'string'
                    ? (n !== 'textarea' || u !== '') && qs(t, u)
                    : typeof u == 'number' && qs(t, '' + u)
                  : s !== 'suppressContentEditableWarning' &&
                    s !== 'suppressHydrationWarning' &&
                    s !== 'autoFocus' &&
                    (Ks.hasOwnProperty(s)
                      ? u != null && s === 'onScroll' && de('scroll', t)
                      : u != null && Kh(t, s, u, o))
              }
            switch (n) {
              case 'input':
                oa(t), Vp(t, r, !1)
                break
              case 'textarea':
                oa(t), bp(t)
                break
              case 'option':
                r.value != null && t.setAttribute('value', '' + lr(r.value))
                break
              case 'select':
                ;(t.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? gi(t, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      gi(t, !!r.multiple, r.defaultValue, !0)
                break
              default:
                typeof i.onClick == 'function' && (t.onclick = nl)
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus
                break e
              case 'img':
                r = !0
                break e
              default:
                r = !1
            }
          }
          r && (e.flags |= 4)
        }
        e.ref !== null && ((e.flags |= 512), (e.flags |= 2097152))
      }
      return Qe(e), null
    case 6:
      if (t && e.stateNode != null) ev(t, e, t.memoizedProps, r)
      else {
        if (typeof r != 'string' && e.stateNode === null) throw Error(F(166))
        if (((n = Pr(io.current)), Pr(qt.current), ma(e))) {
          if (
            ((r = e.stateNode),
            (n = e.memoizedProps),
            (r[Wt] = e),
            (s = r.nodeValue !== n) && ((t = _t), t !== null))
          )
            switch (t.tag) {
              case 3:
                pa(r.nodeValue, n, (t.mode & 1) !== 0)
                break
              case 5:
                t.memoizedProps.suppressHydrationWarning !== !0 &&
                  pa(r.nodeValue, n, (t.mode & 1) !== 0)
            }
          s && (e.flags |= 4)
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Wt] = e),
            (e.stateNode = r)
      }
      return Qe(e), null
    case 13:
      if (
        (fe(ge),
        (r = e.memoizedState),
        t === null ||
          (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
      ) {
        if (pe && vt !== null && e.mode & 1 && !(e.flags & 128))
          vy(), Pi(), (e.flags |= 98560), (s = !1)
        else if (((s = ma(e)), r !== null && r.dehydrated !== null)) {
          if (t === null) {
            if (!s) throw Error(F(318))
            if (
              ((s = e.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(F(317))
            s[Wt] = e
          } else
            Pi(), !(e.flags & 128) && (e.memoizedState = null), (e.flags |= 4)
          Qe(e), (s = !1)
        } else Mt !== null && (gh(Mt), (Mt = null)), (s = !0)
        if (!s) return e.flags & 65536 ? e : null
      }
      return e.flags & 128
        ? ((e.lanes = n), e)
        : ((r = r !== null),
          r !== (t !== null && t.memoizedState !== null) &&
            r &&
            ((e.child.flags |= 8192),
            e.mode & 1 &&
              (t === null || ge.current & 1 ? De === 0 && (De = 3) : Pd())),
          e.updateQueue !== null && (e.flags |= 4),
          Qe(e),
          null)
    case 4:
      return (
        xi(), lh(t, e), t === null && eo(e.stateNode.containerInfo), Qe(e), null
      )
    case 10:
      return hd(e.type._context), Qe(e), null
    case 17:
      return ft(e.type) && rl(), Qe(e), null
    case 19:
      if ((fe(ge), (s = e.memoizedState), s === null)) return Qe(e), null
      if (((r = (e.flags & 128) !== 0), (o = s.rendering), o === null))
        if (r) Es(s, !1)
        else {
          if (De !== 0 || (t !== null && t.flags & 128))
            for (t = e.child; t !== null; ) {
              if (((o = cl(t)), o !== null)) {
                for (
                  e.flags |= 128,
                    Es(s, !1),
                    r = o.updateQueue,
                    r !== null && ((e.updateQueue = r), (e.flags |= 4)),
                    e.subtreeFlags = 0,
                    r = n,
                    n = e.child;
                  n !== null;

                )
                  (s = n),
                    (t = r),
                    (s.flags &= 14680066),
                    (o = s.alternate),
                    o === null
                      ? ((s.childLanes = 0),
                        (s.lanes = t),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = o.childLanes),
                        (s.lanes = o.lanes),
                        (s.child = o.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = o.memoizedProps),
                        (s.memoizedState = o.memoizedState),
                        (s.updateQueue = o.updateQueue),
                        (s.type = o.type),
                        (t = o.dependencies),
                        (s.dependencies =
                          t === null
                            ? null
                            : {
                                lanes: t.lanes,
                                firstContext: t.firstContext,
                              })),
                    (n = n.sibling)
                return ce(ge, (ge.current & 1) | 2), e.child
              }
              t = t.sibling
            }
          s.tail !== null &&
            Ce() > Di &&
            ((e.flags |= 128), (r = !0), Es(s, !1), (e.lanes = 4194304))
        }
      else {
        if (!r)
          if (((t = cl(o)), t !== null)) {
            if (
              ((e.flags |= 128),
              (r = !0),
              (n = t.updateQueue),
              n !== null && ((e.updateQueue = n), (e.flags |= 4)),
              Es(s, !0),
              s.tail === null && s.tailMode === 'hidden' && !o.alternate && !pe)
            )
              return Qe(e), null
          } else
            2 * Ce() - s.renderingStartTime > Di &&
              n !== 1073741824 &&
              ((e.flags |= 128), (r = !0), Es(s, !1), (e.lanes = 4194304))
        s.isBackwards
          ? ((o.sibling = e.child), (e.child = o))
          : ((n = s.last),
            n !== null ? (n.sibling = o) : (e.child = o),
            (s.last = o))
      }
      return s.tail !== null
        ? ((e = s.tail),
          (s.rendering = e),
          (s.tail = e.sibling),
          (s.renderingStartTime = Ce()),
          (e.sibling = null),
          (n = ge.current),
          ce(ge, r ? (n & 1) | 2 : n & 1),
          e)
        : (Qe(e), null)
    case 22:
    case 23:
      return (
        Rd(),
        (r = e.memoizedState !== null),
        t !== null && (t.memoizedState !== null) !== r && (e.flags |= 8192),
        r && e.mode & 1
          ? yt & 1073741824 && (Qe(e), e.subtreeFlags & 6 && (e.flags |= 8192))
          : Qe(e),
        null
      )
    case 24:
      return null
    case 25:
      return null
  }
  throw Error(F(156, e.tag))
}
function Ow(t, e) {
  switch ((ad(e), e.tag)) {
    case 1:
      return (
        ft(e.type) && rl(),
        (t = e.flags),
        t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
      )
    case 3:
      return (
        xi(),
        fe(dt),
        fe(et),
        gd(),
        (t = e.flags),
        t & 65536 && !(t & 128) ? ((e.flags = (t & -65537) | 128), e) : null
      )
    case 5:
      return md(e), null
    case 13:
      if (
        (fe(ge), (t = e.memoizedState), t !== null && t.dehydrated !== null)
      ) {
        if (e.alternate === null) throw Error(F(340))
        Pi()
      }
      return (
        (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
      )
    case 19:
      return fe(ge), null
    case 4:
      return xi(), null
    case 10:
      return hd(e.type._context), null
    case 22:
    case 23:
      return Rd(), null
    case 24:
      return null
    default:
      return null
  }
}
var va = !1,
  Je = !1,
  Lw = typeof WeakSet == 'function' ? WeakSet : Set,
  $ = null
function fi(t, e) {
  var n = t.ref
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null)
      } catch (r) {
        we(t, e, r)
      }
    else n.current = null
}
function uh(t, e, n) {
  try {
    n()
  } catch (r) {
    we(t, e, r)
  }
}
var Am = !1
function Vw(t, e) {
  if (((Kc = Za), (t = sy()), sd(t))) {
    if ('selectionStart' in t)
      var n = { start: t.selectionStart, end: t.selectionEnd }
    else
      e: {
        n = ((n = t.ownerDocument) && n.defaultView) || window
        var r = n.getSelection && n.getSelection()
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode
          var i = r.anchorOffset,
            s = r.focusNode
          r = r.focusOffset
          try {
            n.nodeType, s.nodeType
          } catch {
            n = null
            break e
          }
          var o = 0,
            l = -1,
            u = -1,
            h = 0,
            f = 0,
            p = t,
            v = null
          t: for (;;) {
            for (
              var A;
              p !== n || (i !== 0 && p.nodeType !== 3) || (l = o + i),
                p !== s || (r !== 0 && p.nodeType !== 3) || (u = o + r),
                p.nodeType === 3 && (o += p.nodeValue.length),
                (A = p.firstChild) !== null;

            )
              (v = p), (p = A)
            for (;;) {
              if (p === t) break t
              if (
                (v === n && ++h === i && (l = o),
                v === s && ++f === r && (u = o),
                (A = p.nextSibling) !== null)
              )
                break
              ;(p = v), (v = p.parentNode)
            }
            p = A
          }
          n = l === -1 || u === -1 ? null : { start: l, end: u }
        } else n = null
      }
    n = n || { start: 0, end: 0 }
  } else n = null
  for (qc = { focusedElem: t, selectionRange: n }, Za = !1, $ = e; $ !== null; )
    if (((e = $), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null))
      (t.return = e), ($ = t)
    else
      for (; $ !== null; ) {
        e = $
        try {
          var P = e.alternate
          if (e.flags & 1024)
            switch (e.tag) {
              case 0:
              case 11:
              case 15:
                break
              case 1:
                if (P !== null) {
                  var N = P.memoizedProps,
                    D = P.memoizedState,
                    C = e.stateNode,
                    _ = C.getSnapshotBeforeUpdate(
                      e.elementType === e.type ? N : Lt(e.type, N),
                      D
                    )
                  C.__reactInternalSnapshotBeforeUpdate = _
                }
                break
              case 3:
                var S = e.stateNode.containerInfo
                S.nodeType === 1
                  ? (S.textContent = '')
                  : S.nodeType === 9 &&
                    S.documentElement &&
                    S.removeChild(S.documentElement)
                break
              case 5:
              case 6:
              case 4:
              case 17:
                break
              default:
                throw Error(F(163))
            }
        } catch (L) {
          we(e, e.return, L)
        }
        if (((t = e.sibling), t !== null)) {
          ;(t.return = e.return), ($ = t)
          break
        }
        $ = e.return
      }
  return (P = Am), (Am = !1), P
}
function Fs(t, e, n) {
  var r = e.updateQueue
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next)
    do {
      if ((i.tag & t) === t) {
        var s = i.destroy
        ;(i.destroy = void 0), s !== void 0 && uh(e, n, s)
      }
      i = i.next
    } while (i !== r)
  }
}
function ql(t, e) {
  if (
    ((e = e.updateQueue), (e = e !== null ? e.lastEffect : null), e !== null)
  ) {
    var n = (e = e.next)
    do {
      if ((n.tag & t) === t) {
        var r = n.create
        n.destroy = r()
      }
      n = n.next
    } while (n !== e)
  }
}
function ch(t) {
  var e = t.ref
  if (e !== null) {
    var n = t.stateNode
    switch (t.tag) {
      case 5:
        t = n
        break
      default:
        t = n
    }
    typeof e == 'function' ? e(t) : (e.current = t)
  }
}
function tv(t) {
  var e = t.alternate
  e !== null && ((t.alternate = null), tv(e)),
    (t.child = null),
    (t.deletions = null),
    (t.sibling = null),
    t.tag === 5 &&
      ((e = t.stateNode),
      e !== null &&
        (delete e[Wt], delete e[no], delete e[Yc], delete e[yw], delete e[vw])),
    (t.stateNode = null),
    (t.return = null),
    (t.dependencies = null),
    (t.memoizedProps = null),
    (t.memoizedState = null),
    (t.pendingProps = null),
    (t.stateNode = null),
    (t.updateQueue = null)
}
function nv(t) {
  return t.tag === 5 || t.tag === 3 || t.tag === 4
}
function Rm(t) {
  e: for (;;) {
    for (; t.sibling === null; ) {
      if (t.return === null || nv(t.return)) return null
      t = t.return
    }
    for (
      t.sibling.return = t.return, t = t.sibling;
      t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

    ) {
      if (t.flags & 2 || t.child === null || t.tag === 4) continue e
      ;(t.child.return = t), (t = t.child)
    }
    if (!(t.flags & 2)) return t.stateNode
  }
}
function hh(t, e, n) {
  var r = t.tag
  if (r === 5 || r === 6)
    (t = t.stateNode),
      e
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(t, e)
          : n.insertBefore(t, e)
        : (n.nodeType === 8
            ? ((e = n.parentNode), e.insertBefore(t, n))
            : ((e = n), e.appendChild(t)),
          (n = n._reactRootContainer),
          n != null || e.onclick !== null || (e.onclick = nl))
  else if (r !== 4 && ((t = t.child), t !== null))
    for (hh(t, e, n), t = t.sibling; t !== null; ) hh(t, e, n), (t = t.sibling)
}
function dh(t, e, n) {
  var r = t.tag
  if (r === 5 || r === 6)
    (t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t)
  else if (r !== 4 && ((t = t.child), t !== null))
    for (dh(t, e, n), t = t.sibling; t !== null; ) dh(t, e, n), (t = t.sibling)
}
var Fe = null,
  Vt = !1
function Vn(t, e, n) {
  for (n = n.child; n !== null; ) rv(t, e, n), (n = n.sibling)
}
function rv(t, e, n) {
  if (Kt && typeof Kt.onCommitFiberUnmount == 'function')
    try {
      Kt.onCommitFiberUnmount(jl, n)
    } catch {}
  switch (n.tag) {
    case 5:
      Je || fi(n, e)
    case 6:
      var r = Fe,
        i = Vt
      ;(Fe = null),
        Vn(t, e, n),
        (Fe = r),
        (Vt = i),
        Fe !== null &&
          (Vt
            ? ((t = Fe),
              (n = n.stateNode),
              t.nodeType === 8 ? t.parentNode.removeChild(n) : t.removeChild(n))
            : Fe.removeChild(n.stateNode))
      break
    case 18:
      Fe !== null &&
        (Vt
          ? ((t = Fe),
            (n = n.stateNode),
            t.nodeType === 8
              ? nc(t.parentNode, n)
              : t.nodeType === 1 && nc(t, n),
            Xs(t))
          : nc(Fe, n.stateNode))
      break
    case 4:
      ;(r = Fe),
        (i = Vt),
        (Fe = n.stateNode.containerInfo),
        (Vt = !0),
        Vn(t, e, n),
        (Fe = r),
        (Vt = i)
      break
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Je &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next
        do {
          var s = i,
            o = s.destroy
          ;(s = s.tag),
            o !== void 0 && (s & 2 || s & 4) && uh(n, e, o),
            (i = i.next)
        } while (i !== r)
      }
      Vn(t, e, n)
      break
    case 1:
      if (
        !Je &&
        (fi(n, e),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          ;(r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount()
        } catch (l) {
          we(n, e, l)
        }
      Vn(t, e, n)
      break
    case 21:
      Vn(t, e, n)
      break
    case 22:
      n.mode & 1
        ? ((Je = (r = Je) || n.memoizedState !== null), Vn(t, e, n), (Je = r))
        : Vn(t, e, n)
      break
    default:
      Vn(t, e, n)
  }
}
function Pm(t) {
  var e = t.updateQueue
  if (e !== null) {
    t.updateQueue = null
    var n = t.stateNode
    n === null && (n = t.stateNode = new Lw()),
      e.forEach(function (r) {
        var i = Hw.bind(null, t, r)
        n.has(r) || (n.add(r), r.then(i, i))
      })
  }
}
function Dt(t, e) {
  var n = e.deletions
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r]
      try {
        var s = t,
          o = e,
          l = o
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              ;(Fe = l.stateNode), (Vt = !1)
              break e
            case 3:
              ;(Fe = l.stateNode.containerInfo), (Vt = !0)
              break e
            case 4:
              ;(Fe = l.stateNode.containerInfo), (Vt = !0)
              break e
          }
          l = l.return
        }
        if (Fe === null) throw Error(F(160))
        rv(s, o, i), (Fe = null), (Vt = !1)
        var u = i.alternate
        u !== null && (u.return = null), (i.return = null)
      } catch (h) {
        we(i, e, h)
      }
    }
  if (e.subtreeFlags & 12854)
    for (e = e.child; e !== null; ) iv(e, t), (e = e.sibling)
}
function iv(t, e) {
  var n = t.alternate,
    r = t.flags
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Dt(e, t), $t(t), r & 4)) {
        try {
          Fs(3, t, t.return), ql(3, t)
        } catch (N) {
          we(t, t.return, N)
        }
        try {
          Fs(5, t, t.return)
        } catch (N) {
          we(t, t.return, N)
        }
      }
      break
    case 1:
      Dt(e, t), $t(t), r & 512 && n !== null && fi(n, n.return)
      break
    case 5:
      if (
        (Dt(e, t),
        $t(t),
        r & 512 && n !== null && fi(n, n.return),
        t.flags & 32)
      ) {
        var i = t.stateNode
        try {
          qs(i, '')
        } catch (N) {
          we(t, t.return, N)
        }
      }
      if (r & 4 && ((i = t.stateNode), i != null)) {
        var s = t.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          l = t.type,
          u = t.updateQueue
        if (((t.updateQueue = null), u !== null))
          try {
            l === 'input' && s.type === 'radio' && s.name != null && A0(i, s),
              Mc(l, o)
            var h = Mc(l, s)
            for (o = 0; o < u.length; o += 2) {
              var f = u[o],
                p = u[o + 1]
              f === 'style'
                ? N0(i, p)
                : f === 'dangerouslySetInnerHTML'
                ? k0(i, p)
                : f === 'children'
                ? qs(i, p)
                : Kh(i, f, p, h)
            }
            switch (l) {
              case 'input':
                Nc(i, s)
                break
              case 'textarea':
                R0(i, s)
                break
              case 'select':
                var v = i._wrapperState.wasMultiple
                i._wrapperState.wasMultiple = !!s.multiple
                var A = s.value
                A != null
                  ? gi(i, !!s.multiple, A, !1)
                  : v !== !!s.multiple &&
                    (s.defaultValue != null
                      ? gi(i, !!s.multiple, s.defaultValue, !0)
                      : gi(i, !!s.multiple, s.multiple ? [] : '', !1))
            }
            i[no] = s
          } catch (N) {
            we(t, t.return, N)
          }
      }
      break
    case 6:
      if ((Dt(e, t), $t(t), r & 4)) {
        if (t.stateNode === null) throw Error(F(162))
        ;(i = t.stateNode), (s = t.memoizedProps)
        try {
          i.nodeValue = s
        } catch (N) {
          we(t, t.return, N)
        }
      }
      break
    case 3:
      if (
        (Dt(e, t), $t(t), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Xs(e.containerInfo)
        } catch (N) {
          we(t, t.return, N)
        }
      break
    case 4:
      Dt(e, t), $t(t)
      break
    case 13:
      Dt(e, t),
        $t(t),
        (i = t.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Cd = Ce())),
        r & 4 && Pm(t)
      break
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null),
        t.mode & 1 ? ((Je = (h = Je) || f), Dt(e, t), (Je = h)) : Dt(e, t),
        $t(t),
        r & 8192)
      ) {
        if (
          ((h = t.memoizedState !== null),
          (t.stateNode.isHidden = h) && !f && t.mode & 1)
        )
          for ($ = t, f = t.child; f !== null; ) {
            for (p = $ = f; $ !== null; ) {
              switch (((v = $), (A = v.child), v.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Fs(4, v, v.return)
                  break
                case 1:
                  fi(v, v.return)
                  var P = v.stateNode
                  if (typeof P.componentWillUnmount == 'function') {
                    ;(r = v), (n = v.return)
                    try {
                      ;(e = r),
                        (P.props = e.memoizedProps),
                        (P.state = e.memoizedState),
                        P.componentWillUnmount()
                    } catch (N) {
                      we(r, n, N)
                    }
                  }
                  break
                case 5:
                  fi(v, v.return)
                  break
                case 22:
                  if (v.memoizedState !== null) {
                    xm(p)
                    continue
                  }
              }
              A !== null ? ((A.return = v), ($ = A)) : xm(p)
            }
            f = f.sibling
          }
        e: for (f = null, p = t; ; ) {
          if (p.tag === 5) {
            if (f === null) {
              f = p
              try {
                ;(i = p.stateNode),
                  h
                    ? ((s = i.style),
                      typeof s.setProperty == 'function'
                        ? s.setProperty('display', 'none', 'important')
                        : (s.display = 'none'))
                    : ((l = p.stateNode),
                      (u = p.memoizedProps.style),
                      (o =
                        u != null && u.hasOwnProperty('display')
                          ? u.display
                          : null),
                      (l.style.display = x0('display', o)))
              } catch (N) {
                we(t, t.return, N)
              }
            }
          } else if (p.tag === 6) {
            if (f === null)
              try {
                p.stateNode.nodeValue = h ? '' : p.memoizedProps
              } catch (N) {
                we(t, t.return, N)
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === t) &&
            p.child !== null
          ) {
            ;(p.child.return = p), (p = p.child)
            continue
          }
          if (p === t) break e
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === t) break e
            f === p && (f = null), (p = p.return)
          }
          f === p && (f = null), (p.sibling.return = p.return), (p = p.sibling)
        }
      }
      break
    case 19:
      Dt(e, t), $t(t), r & 4 && Pm(t)
      break
    case 21:
      break
    default:
      Dt(e, t), $t(t)
  }
}
function $t(t) {
  var e = t.flags
  if (e & 2) {
    try {
      e: {
        for (var n = t.return; n !== null; ) {
          if (nv(n)) {
            var r = n
            break e
          }
          n = n.return
        }
        throw Error(F(160))
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode
          r.flags & 32 && (qs(i, ''), (r.flags &= -33))
          var s = Rm(t)
          dh(t, s, i)
          break
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            l = Rm(t)
          hh(t, l, o)
          break
        default:
          throw Error(F(161))
      }
    } catch (u) {
      we(t, t.return, u)
    }
    t.flags &= -3
  }
  e & 4096 && (t.flags &= -4097)
}
function Mw(t, e, n) {
  ;($ = t), sv(t)
}
function sv(t, e, n) {
  for (var r = (t.mode & 1) !== 0; $ !== null; ) {
    var i = $,
      s = i.child
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || va
      if (!o) {
        var l = i.alternate,
          u = (l !== null && l.memoizedState !== null) || Je
        l = va
        var h = Je
        if (((va = o), (Je = u) && !h))
          for ($ = i; $ !== null; )
            (o = $),
              (u = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Nm(i)
                : u !== null
                ? ((u.return = o), ($ = u))
                : Nm(i)
        for (; s !== null; ) ($ = s), sv(s), (s = s.sibling)
        ;($ = i), (va = l), (Je = h)
      }
      km(t)
    } else
      i.subtreeFlags & 8772 && s !== null ? ((s.return = i), ($ = s)) : km(t)
  }
}
function km(t) {
  for (; $ !== null; ) {
    var e = $
    if (e.flags & 8772) {
      var n = e.alternate
      try {
        if (e.flags & 8772)
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              Je || ql(5, e)
              break
            case 1:
              var r = e.stateNode
              if (e.flags & 4 && !Je)
                if (n === null) r.componentDidMount()
                else {
                  var i =
                    e.elementType === e.type
                      ? n.memoizedProps
                      : Lt(e.type, n.memoizedProps)
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  )
                }
              var s = e.updateQueue
              s !== null && fm(e, s, r)
              break
            case 3:
              var o = e.updateQueue
              if (o !== null) {
                if (((n = null), e.child !== null))
                  switch (e.child.tag) {
                    case 5:
                      n = e.child.stateNode
                      break
                    case 1:
                      n = e.child.stateNode
                  }
                fm(e, o, n)
              }
              break
            case 5:
              var l = e.stateNode
              if (n === null && e.flags & 4) {
                n = l
                var u = e.memoizedProps
                switch (e.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    u.autoFocus && n.focus()
                    break
                  case 'img':
                    u.src && (n.src = u.src)
                }
              }
              break
            case 6:
              break
            case 4:
              break
            case 12:
              break
            case 13:
              if (e.memoizedState === null) {
                var h = e.alternate
                if (h !== null) {
                  var f = h.memoizedState
                  if (f !== null) {
                    var p = f.dehydrated
                    p !== null && Xs(p)
                  }
                }
              }
              break
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break
            default:
              throw Error(F(163))
          }
        Je || (e.flags & 512 && ch(e))
      } catch (v) {
        we(e, e.return, v)
      }
    }
    if (e === t) {
      $ = null
      break
    }
    if (((n = e.sibling), n !== null)) {
      ;(n.return = e.return), ($ = n)
      break
    }
    $ = e.return
  }
}
function xm(t) {
  for (; $ !== null; ) {
    var e = $
    if (e === t) {
      $ = null
      break
    }
    var n = e.sibling
    if (n !== null) {
      ;(n.return = e.return), ($ = n)
      break
    }
    $ = e.return
  }
}
function Nm(t) {
  for (; $ !== null; ) {
    var e = $
    try {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          var n = e.return
          try {
            ql(4, e)
          } catch (u) {
            we(e, n, u)
          }
          break
        case 1:
          var r = e.stateNode
          if (typeof r.componentDidMount == 'function') {
            var i = e.return
            try {
              r.componentDidMount()
            } catch (u) {
              we(e, i, u)
            }
          }
          var s = e.return
          try {
            ch(e)
          } catch (u) {
            we(e, s, u)
          }
          break
        case 5:
          var o = e.return
          try {
            ch(e)
          } catch (u) {
            we(e, o, u)
          }
      }
    } catch (u) {
      we(e, e.return, u)
    }
    if (e === t) {
      $ = null
      break
    }
    var l = e.sibling
    if (l !== null) {
      ;(l.return = e.return), ($ = l)
      break
    }
    $ = e.return
  }
}
var bw = Math.ceil,
  fl = Rn.ReactCurrentDispatcher,
  Id = Rn.ReactCurrentOwner,
  Rt = Rn.ReactCurrentBatchConfig,
  re = 0,
  Me = null,
  ke = null,
  Be = 0,
  yt = 0,
  pi = mr(0),
  De = 0,
  lo = null,
  Mr = 0,
  Gl = 0,
  Sd = 0,
  js = null,
  ct = null,
  Cd = 0,
  Di = 1 / 0,
  cn = null,
  pl = !1,
  fh = null,
  er = null,
  _a = !1,
  Kn = null,
  ml = 0,
  Us = 0,
  ph = null,
  ba = -1,
  Fa = 0
function ot() {
  return re & 6 ? Ce() : ba !== -1 ? ba : (ba = Ce())
}
function tr(t) {
  return t.mode & 1
    ? re & 2 && Be !== 0
      ? Be & -Be
      : Ew.transition !== null
      ? (Fa === 0 && (Fa = $0()), Fa)
      : ((t = oe),
        t !== 0 || ((t = window.event), (t = t === void 0 ? 16 : Y0(t.type))),
        t)
    : 1
}
function Ut(t, e, n, r) {
  if (50 < Us) throw ((Us = 0), (ph = null), Error(F(185)))
  So(t, n, r),
    (!(re & 2) || t !== Me) &&
      (t === Me && (!(re & 2) && (Gl |= n), De === 4 && Un(t, Be)),
      pt(t, r),
      n === 1 && re === 0 && !(e.mode & 1) && ((Di = Ce() + 500), Hl && gr()))
}
function pt(t, e) {
  var n = t.callbackNode
  EE(t, e)
  var r = Ja(t, t === Me ? Be : 0)
  if (r === 0)
    n !== null && Up(n), (t.callbackNode = null), (t.callbackPriority = 0)
  else if (((e = r & -r), t.callbackPriority !== e)) {
    if ((n != null && Up(n), e === 1))
      t.tag === 0 ? _w(Dm.bind(null, t)) : my(Dm.bind(null, t)),
        mw(function () {
          !(re & 6) && gr()
        }),
        (n = null)
    else {
      switch (H0(r)) {
        case 1:
          n = Xh
          break
        case 4:
          n = B0
          break
        case 16:
          n = Xa
          break
        case 536870912:
          n = z0
          break
        default:
          n = Xa
      }
      n = fv(n, ov.bind(null, t))
    }
    ;(t.callbackPriority = e), (t.callbackNode = n)
  }
}
function ov(t, e) {
  if (((ba = -1), (Fa = 0), re & 6)) throw Error(F(327))
  var n = t.callbackNode
  if (wi() && t.callbackNode !== n) return null
  var r = Ja(t, t === Me ? Be : 0)
  if (r === 0) return null
  if (r & 30 || r & t.expiredLanes || e) e = gl(t, r)
  else {
    e = r
    var i = re
    re |= 2
    var s = lv()
    ;(Me !== t || Be !== e) && ((cn = null), (Di = Ce() + 500), xr(t, e))
    do
      try {
        Uw()
        break
      } catch (l) {
        av(t, l)
      }
    while (!0)
    cd(),
      (fl.current = s),
      (re = i),
      ke !== null ? (e = 0) : ((Me = null), (Be = 0), (e = De))
  }
  if (e !== 0) {
    if (
      (e === 2 && ((i = Bc(t)), i !== 0 && ((r = i), (e = mh(t, i)))), e === 1)
    )
      throw ((n = lo), xr(t, 0), Un(t, r), pt(t, Ce()), n)
    if (e === 6) Un(t, r)
    else {
      if (
        ((i = t.current.alternate),
        !(r & 30) &&
          !Fw(i) &&
          ((e = gl(t, r)),
          e === 2 && ((s = Bc(t)), s !== 0 && ((r = s), (e = mh(t, s)))),
          e === 1))
      )
        throw ((n = lo), xr(t, 0), Un(t, r), pt(t, Ce()), n)
      switch (((t.finishedWork = i), (t.finishedLanes = r), e)) {
        case 0:
        case 1:
          throw Error(F(345))
        case 2:
          Sr(t, ct, cn)
          break
        case 3:
          if (
            (Un(t, r), (r & 130023424) === r && ((e = Cd + 500 - Ce()), 10 < e))
          ) {
            if (Ja(t, 0) !== 0) break
            if (((i = t.suspendedLanes), (i & r) !== r)) {
              ot(), (t.pingedLanes |= t.suspendedLanes & i)
              break
            }
            t.timeoutHandle = Qc(Sr.bind(null, t, ct, cn), e)
            break
          }
          Sr(t, ct, cn)
          break
        case 4:
          if ((Un(t, r), (r & 4194240) === r)) break
          for (e = t.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - jt(r)
            ;(s = 1 << o), (o = e[o]), o > i && (i = o), (r &= ~s)
          }
          if (
            ((r = i),
            (r = Ce() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * bw(r / 1960)) - r),
            10 < r)
          ) {
            t.timeoutHandle = Qc(Sr.bind(null, t, ct, cn), r)
            break
          }
          Sr(t, ct, cn)
          break
        case 5:
          Sr(t, ct, cn)
          break
        default:
          throw Error(F(329))
      }
    }
  }
  return pt(t, Ce()), t.callbackNode === n ? ov.bind(null, t) : null
}
function mh(t, e) {
  var n = js
  return (
    t.current.memoizedState.isDehydrated && (xr(t, e).flags |= 256),
    (t = gl(t, e)),
    t !== 2 && ((e = ct), (ct = n), e !== null && gh(e)),
    t
  )
}
function gh(t) {
  ct === null ? (ct = t) : ct.push.apply(ct, t)
}
function Fw(t) {
  for (var e = t; ; ) {
    if (e.flags & 16384) {
      var n = e.updateQueue
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            s = i.getSnapshot
          i = i.value
          try {
            if (!Bt(s(), i)) return !1
          } catch {
            return !1
          }
        }
    }
    if (((n = e.child), e.subtreeFlags & 16384 && n !== null))
      (n.return = e), (e = n)
    else {
      if (e === t) break
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return !0
        e = e.return
      }
      ;(e.sibling.return = e.return), (e = e.sibling)
    }
  }
  return !0
}
function Un(t, e) {
  for (
    e &= ~Sd,
      e &= ~Gl,
      t.suspendedLanes |= e,
      t.pingedLanes &= ~e,
      t = t.expirationTimes;
    0 < e;

  ) {
    var n = 31 - jt(e),
      r = 1 << n
    ;(t[n] = -1), (e &= ~r)
  }
}
function Dm(t) {
  if (re & 6) throw Error(F(327))
  wi()
  var e = Ja(t, 0)
  if (!(e & 1)) return pt(t, Ce()), null
  var n = gl(t, e)
  if (t.tag !== 0 && n === 2) {
    var r = Bc(t)
    r !== 0 && ((e = r), (n = mh(t, r)))
  }
  if (n === 1) throw ((n = lo), xr(t, 0), Un(t, e), pt(t, Ce()), n)
  if (n === 6) throw Error(F(345))
  return (
    (t.finishedWork = t.current.alternate),
    (t.finishedLanes = e),
    Sr(t, ct, cn),
    pt(t, Ce()),
    null
  )
}
function Ad(t, e) {
  var n = re
  re |= 1
  try {
    return t(e)
  } finally {
    ;(re = n), re === 0 && ((Di = Ce() + 500), Hl && gr())
  }
}
function br(t) {
  Kn !== null && Kn.tag === 0 && !(re & 6) && wi()
  var e = re
  re |= 1
  var n = Rt.transition,
    r = oe
  try {
    if (((Rt.transition = null), (oe = 1), t)) return t()
  } finally {
    ;(oe = r), (Rt.transition = n), (re = e), !(re & 6) && gr()
  }
}
function Rd() {
  ;(yt = pi.current), fe(pi)
}
function xr(t, e) {
  ;(t.finishedWork = null), (t.finishedLanes = 0)
  var n = t.timeoutHandle
  if ((n !== -1 && ((t.timeoutHandle = -1), pw(n)), ke !== null))
    for (n = ke.return; n !== null; ) {
      var r = n
      switch ((ad(r), r.tag)) {
        case 1:
          ;(r = r.type.childContextTypes), r != null && rl()
          break
        case 3:
          xi(), fe(dt), fe(et), gd()
          break
        case 5:
          md(r)
          break
        case 4:
          xi()
          break
        case 13:
          fe(ge)
          break
        case 19:
          fe(ge)
          break
        case 10:
          hd(r.type._context)
          break
        case 22:
        case 23:
          Rd()
      }
      n = n.return
    }
  if (
    ((Me = t),
    (ke = t = nr(t.current, null)),
    (Be = yt = e),
    (De = 0),
    (lo = null),
    (Sd = Gl = Mr = 0),
    (ct = js = null),
    Rr !== null)
  ) {
    for (e = 0; e < Rr.length; e++)
      if (((n = Rr[e]), (r = n.interleaved), r !== null)) {
        n.interleaved = null
        var i = r.next,
          s = n.pending
        if (s !== null) {
          var o = s.next
          ;(s.next = i), (r.next = o)
        }
        n.pending = r
      }
    Rr = null
  }
  return t
}
function av(t, e) {
  do {
    var n = ke
    try {
      if ((cd(), (La.current = dl), hl)) {
        for (var r = ye.memoizedState; r !== null; ) {
          var i = r.queue
          i !== null && (i.pending = null), (r = r.next)
        }
        hl = !1
      }
      if (
        ((Vr = 0),
        (Ve = xe = ye = null),
        (bs = !1),
        (so = 0),
        (Id.current = null),
        n === null || n.return === null)
      ) {
        ;(De = 1), (lo = e), (ke = null)
        break
      }
      e: {
        var s = t,
          o = n.return,
          l = n,
          u = e
        if (
          ((e = Be),
          (l.flags |= 32768),
          u !== null && typeof u == 'object' && typeof u.then == 'function')
        ) {
          var h = u,
            f = l,
            p = f.tag
          if (!(f.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var v = f.alternate
            v
              ? ((f.updateQueue = v.updateQueue),
                (f.memoizedState = v.memoizedState),
                (f.lanes = v.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null))
          }
          var A = _m(o)
          if (A !== null) {
            ;(A.flags &= -257),
              Em(A, o, l, s, e),
              A.mode & 1 && vm(s, h, e),
              (e = A),
              (u = h)
            var P = e.updateQueue
            if (P === null) {
              var N = new Set()
              N.add(u), (e.updateQueue = N)
            } else P.add(u)
            break e
          } else {
            if (!(e & 1)) {
              vm(s, h, e), Pd()
              break e
            }
            u = Error(F(426))
          }
        } else if (pe && l.mode & 1) {
          var D = _m(o)
          if (D !== null) {
            !(D.flags & 65536) && (D.flags |= 256),
              Em(D, o, l, s, e),
              ld(Ni(u, l))
            break e
          }
        }
        ;(s = u = Ni(u, l)),
          De !== 4 && (De = 2),
          js === null ? (js = [s]) : js.push(s),
          (s = o)
        do {
          switch (s.tag) {
            case 3:
              ;(s.flags |= 65536), (e &= -e), (s.lanes |= e)
              var C = Hy(s, u, e)
              dm(s, C)
              break e
            case 1:
              l = u
              var _ = s.type,
                S = s.stateNode
              if (
                !(s.flags & 128) &&
                (typeof _.getDerivedStateFromError == 'function' ||
                  (S !== null &&
                    typeof S.componentDidCatch == 'function' &&
                    (er === null || !er.has(S))))
              ) {
                ;(s.flags |= 65536), (e &= -e), (s.lanes |= e)
                var L = Wy(s, l, e)
                dm(s, L)
                break e
              }
          }
          s = s.return
        } while (s !== null)
      }
      cv(n)
    } catch (U) {
      ;(e = U), ke === n && n !== null && (ke = n = n.return)
      continue
    }
    break
  } while (!0)
}
function lv() {
  var t = fl.current
  return (fl.current = dl), t === null ? dl : t
}
function Pd() {
  ;(De === 0 || De === 3 || De === 2) && (De = 4),
    Me === null || (!(Mr & 268435455) && !(Gl & 268435455)) || Un(Me, Be)
}
function gl(t, e) {
  var n = re
  re |= 2
  var r = lv()
  ;(Me !== t || Be !== e) && ((cn = null), xr(t, e))
  do
    try {
      jw()
      break
    } catch (i) {
      av(t, i)
    }
  while (!0)
  if ((cd(), (re = n), (fl.current = r), ke !== null)) throw Error(F(261))
  return (Me = null), (Be = 0), De
}
function jw() {
  for (; ke !== null; ) uv(ke)
}
function Uw() {
  for (; ke !== null && !hE(); ) uv(ke)
}
function uv(t) {
  var e = dv(t.alternate, t, yt)
  ;(t.memoizedProps = t.pendingProps),
    e === null ? cv(t) : (ke = e),
    (Id.current = null)
}
function cv(t) {
  var e = t
  do {
    var n = e.alternate
    if (((t = e.return), e.flags & 32768)) {
      if (((n = Ow(n, e)), n !== null)) {
        ;(n.flags &= 32767), (ke = n)
        return
      }
      if (t !== null)
        (t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null)
      else {
        ;(De = 6), (ke = null)
        return
      }
    } else if (((n = Dw(n, e, yt)), n !== null)) {
      ke = n
      return
    }
    if (((e = e.sibling), e !== null)) {
      ke = e
      return
    }
    ke = e = t
  } while (e !== null)
  De === 0 && (De = 5)
}
function Sr(t, e, n) {
  var r = oe,
    i = Rt.transition
  try {
    ;(Rt.transition = null), (oe = 1), Bw(t, e, n, r)
  } finally {
    ;(Rt.transition = i), (oe = r)
  }
  return null
}
function Bw(t, e, n, r) {
  do wi()
  while (Kn !== null)
  if (re & 6) throw Error(F(327))
  n = t.finishedWork
  var i = t.finishedLanes
  if (n === null) return null
  if (((t.finishedWork = null), (t.finishedLanes = 0), n === t.current))
    throw Error(F(177))
  ;(t.callbackNode = null), (t.callbackPriority = 0)
  var s = n.lanes | n.childLanes
  if (
    (wE(t, s),
    t === Me && ((ke = Me = null), (Be = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      _a ||
      ((_a = !0),
      fv(Xa, function () {
        return wi(), null
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    ;(s = Rt.transition), (Rt.transition = null)
    var o = oe
    oe = 1
    var l = re
    ;(re |= 4),
      (Id.current = null),
      Vw(t, n),
      iv(n, t),
      aw(qc),
      (Za = !!Kc),
      (qc = Kc = null),
      (t.current = n),
      Mw(n),
      dE(),
      (re = l),
      (oe = o),
      (Rt.transition = s)
  } else t.current = n
  if (
    (_a && ((_a = !1), (Kn = t), (ml = i)),
    (s = t.pendingLanes),
    s === 0 && (er = null),
    mE(n.stateNode),
    pt(t, Ce()),
    e !== null)
  )
    for (r = t.onRecoverableError, n = 0; n < e.length; n++)
      (i = e[n]), r(i.value, { componentStack: i.stack, digest: i.digest })
  if (pl) throw ((pl = !1), (t = fh), (fh = null), t)
  return (
    ml & 1 && t.tag !== 0 && wi(),
    (s = t.pendingLanes),
    s & 1 ? (t === ph ? Us++ : ((Us = 0), (ph = t))) : (Us = 0),
    gr(),
    null
  )
}
function wi() {
  if (Kn !== null) {
    var t = H0(ml),
      e = Rt.transition,
      n = oe
    try {
      if (((Rt.transition = null), (oe = 16 > t ? 16 : t), Kn === null))
        var r = !1
      else {
        if (((t = Kn), (Kn = null), (ml = 0), re & 6)) throw Error(F(331))
        var i = re
        for (re |= 4, $ = t.current; $ !== null; ) {
          var s = $,
            o = s.child
          if ($.flags & 16) {
            var l = s.deletions
            if (l !== null) {
              for (var u = 0; u < l.length; u++) {
                var h = l[u]
                for ($ = h; $ !== null; ) {
                  var f = $
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Fs(8, f, s)
                  }
                  var p = f.child
                  if (p !== null) (p.return = f), ($ = p)
                  else
                    for (; $ !== null; ) {
                      f = $
                      var v = f.sibling,
                        A = f.return
                      if ((tv(f), f === h)) {
                        $ = null
                        break
                      }
                      if (v !== null) {
                        ;(v.return = A), ($ = v)
                        break
                      }
                      $ = A
                    }
                }
              }
              var P = s.alternate
              if (P !== null) {
                var N = P.child
                if (N !== null) {
                  P.child = null
                  do {
                    var D = N.sibling
                    ;(N.sibling = null), (N = D)
                  } while (N !== null)
                }
              }
              $ = s
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) (o.return = s), ($ = o)
          else
            e: for (; $ !== null; ) {
              if (((s = $), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Fs(9, s, s.return)
                }
              var C = s.sibling
              if (C !== null) {
                ;(C.return = s.return), ($ = C)
                break e
              }
              $ = s.return
            }
        }
        var _ = t.current
        for ($ = _; $ !== null; ) {
          o = $
          var S = o.child
          if (o.subtreeFlags & 2064 && S !== null) (S.return = o), ($ = S)
          else
            e: for (o = _; $ !== null; ) {
              if (((l = $), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ql(9, l)
                  }
                } catch (U) {
                  we(l, l.return, U)
                }
              if (l === o) {
                $ = null
                break e
              }
              var L = l.sibling
              if (L !== null) {
                ;(L.return = l.return), ($ = L)
                break e
              }
              $ = l.return
            }
        }
        if (
          ((re = i), gr(), Kt && typeof Kt.onPostCommitFiberRoot == 'function')
        )
          try {
            Kt.onPostCommitFiberRoot(jl, t)
          } catch {}
        r = !0
      }
      return r
    } finally {
      ;(oe = n), (Rt.transition = e)
    }
  }
  return !1
}
function Om(t, e, n) {
  ;(e = Ni(n, e)),
    (e = Hy(t, e, 1)),
    (t = Zn(t, e, 1)),
    (e = ot()),
    t !== null && (So(t, 1, e), pt(t, e))
}
function we(t, e, n) {
  if (t.tag === 3) Om(t, t, n)
  else
    for (; e !== null; ) {
      if (e.tag === 3) {
        Om(e, t, n)
        break
      } else if (e.tag === 1) {
        var r = e.stateNode
        if (
          typeof e.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (er === null || !er.has(r)))
        ) {
          ;(t = Ni(n, t)),
            (t = Wy(e, t, 1)),
            (e = Zn(e, t, 1)),
            (t = ot()),
            e !== null && (So(e, 1, t), pt(e, t))
          break
        }
      }
      e = e.return
    }
}
function zw(t, e, n) {
  var r = t.pingCache
  r !== null && r.delete(e),
    (e = ot()),
    (t.pingedLanes |= t.suspendedLanes & n),
    Me === t &&
      (Be & n) === n &&
      (De === 4 || (De === 3 && (Be & 130023424) === Be && 500 > Ce() - Cd)
        ? xr(t, 0)
        : (Sd |= n)),
    pt(t, e)
}
function hv(t, e) {
  e === 0 &&
    (t.mode & 1
      ? ((e = ua), (ua <<= 1), !(ua & 130023424) && (ua = 4194304))
      : (e = 1))
  var n = ot()
  ;(t = wn(t, e)), t !== null && (So(t, e, n), pt(t, n))
}
function $w(t) {
  var e = t.memoizedState,
    n = 0
  e !== null && (n = e.retryLane), hv(t, n)
}
function Hw(t, e) {
  var n = 0
  switch (t.tag) {
    case 13:
      var r = t.stateNode,
        i = t.memoizedState
      i !== null && (n = i.retryLane)
      break
    case 19:
      r = t.stateNode
      break
    default:
      throw Error(F(314))
  }
  r !== null && r.delete(e), hv(t, n)
}
var dv
dv = function (t, e, n) {
  if (t !== null)
    if (t.memoizedProps !== e.pendingProps || dt.current) ht = !0
    else {
      if (!(t.lanes & n) && !(e.flags & 128)) return (ht = !1), Nw(t, e, n)
      ht = !!(t.flags & 131072)
    }
  else (ht = !1), pe && e.flags & 1048576 && gy(e, ol, e.index)
  switch (((e.lanes = 0), e.tag)) {
    case 2:
      var r = e.type
      Ma(t, e), (t = e.pendingProps)
      var i = Ri(e, et.current)
      Ei(e, n), (i = vd(null, e, r, t, i, n))
      var s = _d()
      return (
        (e.flags |= 1),
        typeof i == 'object' &&
        i !== null &&
        typeof i.render == 'function' &&
        i.$$typeof === void 0
          ? ((e.tag = 1),
            (e.memoizedState = null),
            (e.updateQueue = null),
            ft(r) ? ((s = !0), il(e)) : (s = !1),
            (e.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            fd(e),
            (i.updater = Kl),
            (e.stateNode = i),
            (i._reactInternals = e),
            nh(e, r, t, n),
            (e = sh(null, e, r, !0, s, n)))
          : ((e.tag = 0), pe && s && od(e), it(null, e, i, n), (e = e.child)),
        e
      )
    case 16:
      r = e.elementType
      e: {
        switch (
          (Ma(t, e),
          (t = e.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (e.type = r),
          (i = e.tag = Kw(r)),
          (t = Lt(r, t)),
          i)
        ) {
          case 0:
            e = ih(null, e, r, t, n)
            break e
          case 1:
            e = Im(null, e, r, t, n)
            break e
          case 11:
            e = wm(null, e, r, t, n)
            break e
          case 14:
            e = Tm(null, e, r, Lt(r.type, t), n)
            break e
        }
        throw Error(F(306, r, ''))
      }
      return e
    case 0:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : Lt(r, i)),
        ih(t, e, r, i, n)
      )
    case 1:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : Lt(r, i)),
        Im(t, e, r, i, n)
      )
    case 3:
      e: {
        if ((Qy(e), t === null)) throw Error(F(387))
        ;(r = e.pendingProps),
          (s = e.memoizedState),
          (i = s.element),
          Ty(t, e),
          ul(e, r, null, n)
        var o = e.memoizedState
        if (((r = o.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (e.updateQueue.baseState = s),
            (e.memoizedState = s),
            e.flags & 256)
          ) {
            ;(i = Ni(Error(F(423)), e)), (e = Sm(t, e, r, n, i))
            break e
          } else if (r !== i) {
            ;(i = Ni(Error(F(424)), e)), (e = Sm(t, e, r, n, i))
            break e
          } else
            for (
              vt = Jn(e.stateNode.containerInfo.firstChild),
                _t = e,
                pe = !0,
                Mt = null,
                n = Ey(e, null, r, n),
                e.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling)
        else {
          if ((Pi(), r === i)) {
            e = Tn(t, e, n)
            break e
          }
          it(t, e, r, n)
        }
        e = e.child
      }
      return e
    case 5:
      return (
        Iy(e),
        t === null && Zc(e),
        (r = e.type),
        (i = e.pendingProps),
        (s = t !== null ? t.memoizedProps : null),
        (o = i.children),
        Gc(r, i) ? (o = null) : s !== null && Gc(r, s) && (e.flags |= 32),
        Gy(t, e),
        it(t, e, o, n),
        e.child
      )
    case 6:
      return t === null && Zc(e), null
    case 13:
      return Yy(t, e, n)
    case 4:
      return (
        pd(e, e.stateNode.containerInfo),
        (r = e.pendingProps),
        t === null ? (e.child = ki(e, null, r, n)) : it(t, e, r, n),
        e.child
      )
    case 11:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : Lt(r, i)),
        wm(t, e, r, i, n)
      )
    case 7:
      return it(t, e, e.pendingProps, n), e.child
    case 8:
      return it(t, e, e.pendingProps.children, n), e.child
    case 12:
      return it(t, e, e.pendingProps.children, n), e.child
    case 10:
      e: {
        if (
          ((r = e.type._context),
          (i = e.pendingProps),
          (s = e.memoizedProps),
          (o = i.value),
          ce(al, r._currentValue),
          (r._currentValue = o),
          s !== null)
        )
          if (Bt(s.value, o)) {
            if (s.children === i.children && !dt.current) {
              e = Tn(t, e, n)
              break e
            }
          } else
            for (s = e.child, s !== null && (s.return = e); s !== null; ) {
              var l = s.dependencies
              if (l !== null) {
                o = s.child
                for (var u = l.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (s.tag === 1) {
                      ;(u = yn(-1, n & -n)), (u.tag = 2)
                      var h = s.updateQueue
                      if (h !== null) {
                        h = h.shared
                        var f = h.pending
                        f === null
                          ? (u.next = u)
                          : ((u.next = f.next), (f.next = u)),
                          (h.pending = u)
                      }
                    }
                    ;(s.lanes |= n),
                      (u = s.alternate),
                      u !== null && (u.lanes |= n),
                      eh(s.return, n, e),
                      (l.lanes |= n)
                    break
                  }
                  u = u.next
                }
              } else if (s.tag === 10) o = s.type === e.type ? null : s.child
              else if (s.tag === 18) {
                if (((o = s.return), o === null)) throw Error(F(341))
                ;(o.lanes |= n),
                  (l = o.alternate),
                  l !== null && (l.lanes |= n),
                  eh(o, n, e),
                  (o = s.sibling)
              } else o = s.child
              if (o !== null) o.return = s
              else
                for (o = s; o !== null; ) {
                  if (o === e) {
                    o = null
                    break
                  }
                  if (((s = o.sibling), s !== null)) {
                    ;(s.return = o.return), (o = s)
                    break
                  }
                  o = o.return
                }
              s = o
            }
        it(t, e, i.children, n), (e = e.child)
      }
      return e
    case 9:
      return (
        (i = e.type),
        (r = e.pendingProps.children),
        Ei(e, n),
        (i = kt(i)),
        (r = r(i)),
        (e.flags |= 1),
        it(t, e, r, n),
        e.child
      )
    case 14:
      return (
        (r = e.type),
        (i = Lt(r, e.pendingProps)),
        (i = Lt(r.type, i)),
        Tm(t, e, r, i, n)
      )
    case 15:
      return Ky(t, e, e.type, e.pendingProps, n)
    case 17:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : Lt(r, i)),
        Ma(t, e),
        (e.tag = 1),
        ft(r) ? ((t = !0), il(e)) : (t = !1),
        Ei(e, n),
        $y(e, r, i),
        nh(e, r, i, n),
        sh(null, e, r, !0, t, n)
      )
    case 19:
      return Xy(t, e, n)
    case 22:
      return qy(t, e, n)
  }
  throw Error(F(156, e.tag))
}
function fv(t, e) {
  return U0(t, e)
}
function Ww(t, e, n, r) {
  ;(this.tag = t),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = e),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null)
}
function At(t, e, n, r) {
  return new Ww(t, e, n, r)
}
function kd(t) {
  return (t = t.prototype), !(!t || !t.isReactComponent)
}
function Kw(t) {
  if (typeof t == 'function') return kd(t) ? 1 : 0
  if (t != null) {
    if (((t = t.$$typeof), t === Gh)) return 11
    if (t === Qh) return 14
  }
  return 2
}
function nr(t, e) {
  var n = t.alternate
  return (
    n === null
      ? ((n = At(t.tag, e, t.key, t.mode)),
        (n.elementType = t.elementType),
        (n.type = t.type),
        (n.stateNode = t.stateNode),
        (n.alternate = t),
        (t.alternate = n))
      : ((n.pendingProps = e),
        (n.type = t.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = t.flags & 14680064),
    (n.childLanes = t.childLanes),
    (n.lanes = t.lanes),
    (n.child = t.child),
    (n.memoizedProps = t.memoizedProps),
    (n.memoizedState = t.memoizedState),
    (n.updateQueue = t.updateQueue),
    (e = t.dependencies),
    (n.dependencies =
      e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
    (n.sibling = t.sibling),
    (n.index = t.index),
    (n.ref = t.ref),
    n
  )
}
function ja(t, e, n, r, i, s) {
  var o = 2
  if (((r = t), typeof t == 'function')) kd(t) && (o = 1)
  else if (typeof t == 'string') o = 5
  else
    e: switch (t) {
      case ii:
        return Nr(n.children, i, s, e)
      case qh:
        ;(o = 8), (i |= 8)
        break
      case Ac:
        return (t = At(12, n, e, i | 2)), (t.elementType = Ac), (t.lanes = s), t
      case Rc:
        return (t = At(13, n, e, i)), (t.elementType = Rc), (t.lanes = s), t
      case Pc:
        return (t = At(19, n, e, i)), (t.elementType = Pc), (t.lanes = s), t
      case I0:
        return Ql(n, i, s, e)
      default:
        if (typeof t == 'object' && t !== null)
          switch (t.$$typeof) {
            case w0:
              o = 10
              break e
            case T0:
              o = 9
              break e
            case Gh:
              o = 11
              break e
            case Qh:
              o = 14
              break e
            case bn:
              ;(o = 16), (r = null)
              break e
          }
        throw Error(F(130, t == null ? t : typeof t, ''))
    }
  return (
    (e = At(o, n, e, i)), (e.elementType = t), (e.type = r), (e.lanes = s), e
  )
}
function Nr(t, e, n, r) {
  return (t = At(7, t, r, e)), (t.lanes = n), t
}
function Ql(t, e, n, r) {
  return (
    (t = At(22, t, r, e)),
    (t.elementType = I0),
    (t.lanes = n),
    (t.stateNode = { isHidden: !1 }),
    t
  )
}
function cc(t, e, n) {
  return (t = At(6, t, null, e)), (t.lanes = n), t
}
function hc(t, e, n) {
  return (
    (e = At(4, t.children !== null ? t.children : [], t.key, e)),
    (e.lanes = n),
    (e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation,
    }),
    e
  )
}
function qw(t, e, n, r, i) {
  ;(this.tag = e),
    (this.containerInfo = t),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Wu(0)),
    (this.expirationTimes = Wu(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Wu(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null)
}
function xd(t, e, n, r, i, s, o, l, u) {
  return (
    (t = new qw(t, e, n, l, u)),
    e === 1 ? ((e = 1), s === !0 && (e |= 8)) : (e = 0),
    (s = At(3, null, null, e)),
    (t.current = s),
    (s.stateNode = t),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    fd(s),
    t
  )
}
function Gw(t, e, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
  return {
    $$typeof: ri,
    key: r == null ? null : '' + r,
    children: t,
    containerInfo: e,
    implementation: n,
  }
}
function pv(t) {
  if (!t) return ur
  t = t._reactInternals
  e: {
    if (Wr(t) !== t || t.tag !== 1) throw Error(F(170))
    var e = t
    do {
      switch (e.tag) {
        case 3:
          e = e.stateNode.context
          break e
        case 1:
          if (ft(e.type)) {
            e = e.stateNode.__reactInternalMemoizedMergedChildContext
            break e
          }
      }
      e = e.return
    } while (e !== null)
    throw Error(F(171))
  }
  if (t.tag === 1) {
    var n = t.type
    if (ft(n)) return py(t, n, e)
  }
  return e
}
function mv(t, e, n, r, i, s, o, l, u) {
  return (
    (t = xd(n, r, !0, t, i, s, o, l, u)),
    (t.context = pv(null)),
    (n = t.current),
    (r = ot()),
    (i = tr(n)),
    (s = yn(r, i)),
    (s.callback = e ?? null),
    Zn(n, s, i),
    (t.current.lanes = i),
    So(t, i, r),
    pt(t, r),
    t
  )
}
function Yl(t, e, n, r) {
  var i = e.current,
    s = ot(),
    o = tr(i)
  return (
    (n = pv(n)),
    e.context === null ? (e.context = n) : (e.pendingContext = n),
    (e = yn(s, o)),
    (e.payload = { element: t }),
    (r = r === void 0 ? null : r),
    r !== null && (e.callback = r),
    (t = Zn(i, e, o)),
    t !== null && (Ut(t, i, o, s), Oa(t, i, o)),
    o
  )
}
function yl(t) {
  if (((t = t.current), !t.child)) return null
  switch (t.child.tag) {
    case 5:
      return t.child.stateNode
    default:
      return t.child.stateNode
  }
}
function Lm(t, e) {
  if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
    var n = t.retryLane
    t.retryLane = n !== 0 && n < e ? n : e
  }
}
function Nd(t, e) {
  Lm(t, e), (t = t.alternate) && Lm(t, e)
}
function Qw() {
  return null
}
var gv =
  typeof reportError == 'function'
    ? reportError
    : function (t) {
        console.error(t)
      }
function Dd(t) {
  this._internalRoot = t
}
Xl.prototype.render = Dd.prototype.render = function (t) {
  var e = this._internalRoot
  if (e === null) throw Error(F(409))
  Yl(t, e, null, null)
}
Xl.prototype.unmount = Dd.prototype.unmount = function () {
  var t = this._internalRoot
  if (t !== null) {
    this._internalRoot = null
    var e = t.containerInfo
    br(function () {
      Yl(null, t, null, null)
    }),
      (e[En] = null)
  }
}
function Xl(t) {
  this._internalRoot = t
}
Xl.prototype.unstable_scheduleHydration = function (t) {
  if (t) {
    var e = q0()
    t = { blockedOn: null, target: t, priority: e }
    for (var n = 0; n < jn.length && e !== 0 && e < jn[n].priority; n++);
    jn.splice(n, 0, t), n === 0 && Q0(t)
  }
}
function Od(t) {
  return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11))
}
function Jl(t) {
  return !(
    !t ||
    (t.nodeType !== 1 &&
      t.nodeType !== 9 &&
      t.nodeType !== 11 &&
      (t.nodeType !== 8 || t.nodeValue !== ' react-mount-point-unstable '))
  )
}
function Vm() {}
function Yw(t, e, n, r, i) {
  if (i) {
    if (typeof r == 'function') {
      var s = r
      r = function () {
        var h = yl(o)
        s.call(h)
      }
    }
    var o = mv(e, r, t, 0, null, !1, !1, '', Vm)
    return (
      (t._reactRootContainer = o),
      (t[En] = o.current),
      eo(t.nodeType === 8 ? t.parentNode : t),
      br(),
      o
    )
  }
  for (; (i = t.lastChild); ) t.removeChild(i)
  if (typeof r == 'function') {
    var l = r
    r = function () {
      var h = yl(u)
      l.call(h)
    }
  }
  var u = xd(t, 0, !1, null, null, !1, !1, '', Vm)
  return (
    (t._reactRootContainer = u),
    (t[En] = u.current),
    eo(t.nodeType === 8 ? t.parentNode : t),
    br(function () {
      Yl(e, u, n, r)
    }),
    u
  )
}
function Zl(t, e, n, r, i) {
  var s = n._reactRootContainer
  if (s) {
    var o = s
    if (typeof i == 'function') {
      var l = i
      i = function () {
        var u = yl(o)
        l.call(u)
      }
    }
    Yl(e, o, t, i)
  } else o = Yw(n, e, t, i, r)
  return yl(o)
}
W0 = function (t) {
  switch (t.tag) {
    case 3:
      var e = t.stateNode
      if (e.current.memoizedState.isDehydrated) {
        var n = Cs(e.pendingLanes)
        n !== 0 &&
          (Jh(e, n | 1), pt(e, Ce()), !(re & 6) && ((Di = Ce() + 500), gr()))
      }
      break
    case 13:
      br(function () {
        var r = wn(t, 1)
        if (r !== null) {
          var i = ot()
          Ut(r, t, 1, i)
        }
      }),
        Nd(t, 1)
  }
}
Zh = function (t) {
  if (t.tag === 13) {
    var e = wn(t, 134217728)
    if (e !== null) {
      var n = ot()
      Ut(e, t, 134217728, n)
    }
    Nd(t, 134217728)
  }
}
K0 = function (t) {
  if (t.tag === 13) {
    var e = tr(t),
      n = wn(t, e)
    if (n !== null) {
      var r = ot()
      Ut(n, t, e, r)
    }
    Nd(t, e)
  }
}
q0 = function () {
  return oe
}
G0 = function (t, e) {
  var n = oe
  try {
    return (oe = t), e()
  } finally {
    oe = n
  }
}
Fc = function (t, e, n) {
  switch (e) {
    case 'input':
      if ((Nc(t, n), (e = n.name), n.type === 'radio' && e != null)) {
        for (n = t; n.parentNode; ) n = n.parentNode
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + e) + '][type="radio"]'
          ),
            e = 0;
          e < n.length;
          e++
        ) {
          var r = n[e]
          if (r !== t && r.form === t.form) {
            var i = $l(r)
            if (!i) throw Error(F(90))
            C0(r), Nc(r, i)
          }
        }
      }
      break
    case 'textarea':
      R0(t, n)
      break
    case 'select':
      ;(e = n.value), e != null && gi(t, !!n.multiple, e, !1)
  }
}
L0 = Ad
V0 = br
var Xw = { usingClientEntryPoint: !1, Events: [Ao, li, $l, D0, O0, Ad] },
  ws = {
    findFiberByHostInstance: Ar,
    bundleType: 0,
    version: '18.3.1',
    rendererPackageName: 'react-dom',
  },
  Jw = {
    bundleType: ws.bundleType,
    version: ws.version,
    rendererPackageName: ws.rendererPackageName,
    rendererConfig: ws.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Rn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (t) {
      return (t = F0(t)), t === null ? null : t.stateNode
    },
    findFiberByHostInstance: ws.findFiberByHostInstance || Qw,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
  }
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var Ea = __REACT_DEVTOOLS_GLOBAL_HOOK__
  if (!Ea.isDisabled && Ea.supportsFiber)
    try {
      ;(jl = Ea.inject(Jw)), (Kt = Ea)
    } catch {}
}
wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xw
wt.createPortal = function (t, e) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
  if (!Od(e)) throw Error(F(200))
  return Gw(t, e, null, n)
}
wt.createRoot = function (t, e) {
  if (!Od(t)) throw Error(F(299))
  var n = !1,
    r = '',
    i = gv
  return (
    e != null &&
      (e.unstable_strictMode === !0 && (n = !0),
      e.identifierPrefix !== void 0 && (r = e.identifierPrefix),
      e.onRecoverableError !== void 0 && (i = e.onRecoverableError)),
    (e = xd(t, 1, !1, null, null, n, !1, r, i)),
    (t[En] = e.current),
    eo(t.nodeType === 8 ? t.parentNode : t),
    new Dd(e)
  )
}
wt.findDOMNode = function (t) {
  if (t == null) return null
  if (t.nodeType === 1) return t
  var e = t._reactInternals
  if (e === void 0)
    throw typeof t.render == 'function'
      ? Error(F(188))
      : ((t = Object.keys(t).join(',')), Error(F(268, t)))
  return (t = F0(e)), (t = t === null ? null : t.stateNode), t
}
wt.flushSync = function (t) {
  return br(t)
}
wt.hydrate = function (t, e, n) {
  if (!Jl(e)) throw Error(F(200))
  return Zl(null, t, e, !0, n)
}
wt.hydrateRoot = function (t, e, n) {
  if (!Od(t)) throw Error(F(405))
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    s = '',
    o = gv
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (e = mv(e, null, t, 1, n ?? null, i, !1, s, o)),
    (t[En] = e.current),
    eo(t),
    r)
  )
    for (t = 0; t < r.length; t++)
      (n = r[t]),
        (i = n._getVersion),
        (i = i(n._source)),
        e.mutableSourceEagerHydrationData == null
          ? (e.mutableSourceEagerHydrationData = [n, i])
          : e.mutableSourceEagerHydrationData.push(n, i)
  return new Xl(e)
}
wt.render = function (t, e, n) {
  if (!Jl(e)) throw Error(F(200))
  return Zl(null, t, e, !1, n)
}
wt.unmountComponentAtNode = function (t) {
  if (!Jl(t)) throw Error(F(40))
  return t._reactRootContainer
    ? (br(function () {
        Zl(null, null, t, !1, function () {
          ;(t._reactRootContainer = null), (t[En] = null)
        })
      }),
      !0)
    : !1
}
wt.unstable_batchedUpdates = Ad
wt.unstable_renderSubtreeIntoContainer = function (t, e, n, r) {
  if (!Jl(n)) throw Error(F(200))
  if (t == null || t._reactInternals === void 0) throw Error(F(38))
  return Zl(t, e, n, !1, r)
}
wt.version = '18.3.1-next-f1338f8080-20240426'
function yv() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(yv)
    } catch (t) {
      console.error(t)
    }
}
yv(), (y0.exports = wt)
var Zw = y0.exports,
  vv,
  Mm = Zw
;(vv = Mm.createRoot), Mm.hydrateRoot
/**
 * @remix-run/router v1.19.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function uo() {
  return (
    (uo = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
          }
          return t
        }),
    uo.apply(this, arguments)
  )
}
var qn
;(function (t) {
  ;(t.Pop = 'POP'), (t.Push = 'PUSH'), (t.Replace = 'REPLACE')
})(qn || (qn = {}))
const bm = 'popstate'
function eT(t) {
  t === void 0 && (t = {})
  function e(r, i) {
    let { pathname: s, search: o, hash: l } = r.location
    return yh(
      '',
      { pathname: s, search: o, hash: l },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || 'default'
    )
  }
  function n(r, i) {
    return typeof i == 'string' ? i : vl(i)
  }
  return nT(e, n, null, t)
}
function Ae(t, e) {
  if (t === !1 || t === null || typeof t > 'u') throw new Error(e)
}
function _v(t, e) {
  if (!t) {
    typeof console < 'u' && console.warn(e)
    try {
      throw new Error(e)
    } catch {}
  }
}
function tT() {
  return Math.random().toString(36).substr(2, 8)
}
function Fm(t, e) {
  return { usr: t.state, key: t.key, idx: e }
}
function yh(t, e, n, r) {
  return (
    n === void 0 && (n = null),
    uo(
      { pathname: typeof t == 'string' ? t : t.pathname, search: '', hash: '' },
      typeof e == 'string' ? Hi(e) : e,
      { state: n, key: (e && e.key) || r || tT() }
    )
  )
}
function vl(t) {
  let { pathname: e = '/', search: n = '', hash: r = '' } = t
  return (
    n && n !== '?' && (e += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (e += r.charAt(0) === '#' ? r : '#' + r),
    e
  )
}
function Hi(t) {
  let e = {}
  if (t) {
    let n = t.indexOf('#')
    n >= 0 && ((e.hash = t.substr(n)), (t = t.substr(0, n)))
    let r = t.indexOf('?')
    r >= 0 && ((e.search = t.substr(r)), (t = t.substr(0, r))),
      t && (e.pathname = t)
  }
  return e
}
function nT(t, e, n, r) {
  r === void 0 && (r = {})
  let { window: i = document.defaultView, v5Compat: s = !1 } = r,
    o = i.history,
    l = qn.Pop,
    u = null,
    h = f()
  h == null && ((h = 0), o.replaceState(uo({}, o.state, { idx: h }), ''))
  function f() {
    return (o.state || { idx: null }).idx
  }
  function p() {
    l = qn.Pop
    let D = f(),
      C = D == null ? null : D - h
    ;(h = D), u && u({ action: l, location: N.location, delta: C })
  }
  function v(D, C) {
    l = qn.Push
    let _ = yh(N.location, D, C)
    h = f() + 1
    let S = Fm(_, h),
      L = N.createHref(_)
    try {
      o.pushState(S, '', L)
    } catch (U) {
      if (U instanceof DOMException && U.name === 'DataCloneError') throw U
      i.location.assign(L)
    }
    s && u && u({ action: l, location: N.location, delta: 1 })
  }
  function A(D, C) {
    l = qn.Replace
    let _ = yh(N.location, D, C)
    h = f()
    let S = Fm(_, h),
      L = N.createHref(_)
    o.replaceState(S, '', L),
      s && u && u({ action: l, location: N.location, delta: 0 })
  }
  function P(D) {
    let C = i.location.origin !== 'null' ? i.location.origin : i.location.href,
      _ = typeof D == 'string' ? D : vl(D)
    return (
      (_ = _.replace(/ $/, '%20')),
      Ae(
        C,
        'No window.location.(origin|href) available to create URL for href: ' +
          _
      ),
      new URL(_, C)
    )
  }
  let N = {
    get action() {
      return l
    },
    get location() {
      return t(i, o)
    },
    listen(D) {
      if (u) throw new Error('A history only accepts one active listener')
      return (
        i.addEventListener(bm, p),
        (u = D),
        () => {
          i.removeEventListener(bm, p), (u = null)
        }
      )
    },
    createHref(D) {
      return e(i, D)
    },
    createURL: P,
    encodeLocation(D) {
      let C = P(D)
      return { pathname: C.pathname, search: C.search, hash: C.hash }
    },
    push: v,
    replace: A,
    go(D) {
      return o.go(D)
    },
  }
  return N
}
var jm
;(function (t) {
  ;(t.data = 'data'),
    (t.deferred = 'deferred'),
    (t.redirect = 'redirect'),
    (t.error = 'error')
})(jm || (jm = {}))
function rT(t, e, n) {
  return n === void 0 && (n = '/'), iT(t, e, n, !1)
}
function iT(t, e, n, r) {
  let i = typeof e == 'string' ? Hi(e) : e,
    s = Ld(i.pathname || '/', n)
  if (s == null) return null
  let o = Ev(t)
  sT(o)
  let l = null
  for (let u = 0; l == null && u < o.length; ++u) {
    let h = gT(s)
    l = pT(o[u], h, r)
  }
  return l
}
function Ev(t, e, n, r) {
  e === void 0 && (e = []), n === void 0 && (n = []), r === void 0 && (r = '')
  let i = (s, o, l) => {
    let u = {
      relativePath: l === void 0 ? s.path || '' : l,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: o,
      route: s,
    }
    u.relativePath.startsWith('/') &&
      (Ae(
        u.relativePath.startsWith(r),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.'
      ),
      (u.relativePath = u.relativePath.slice(r.length)))
    let h = rr([r, u.relativePath]),
      f = n.concat(u)
    s.children &&
      s.children.length > 0 &&
      (Ae(
        s.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + h + '".')
      ),
      Ev(s.children, e, f, h)),
      !(s.path == null && !s.index) &&
        e.push({ path: h, score: dT(h, s.index), routesMeta: f })
  }
  return (
    t.forEach((s, o) => {
      var l
      if (s.path === '' || !((l = s.path) != null && l.includes('?'))) i(s, o)
      else for (let u of wv(s.path)) i(s, o, u)
    }),
    e
  )
}
function wv(t) {
  let e = t.split('/')
  if (e.length === 0) return []
  let [n, ...r] = e,
    i = n.endsWith('?'),
    s = n.replace(/\?$/, '')
  if (r.length === 0) return i ? [s, ''] : [s]
  let o = wv(r.join('/')),
    l = []
  return (
    l.push(...o.map((u) => (u === '' ? s : [s, u].join('/')))),
    i && l.push(...o),
    l.map((u) => (t.startsWith('/') && u === '' ? '/' : u))
  )
}
function sT(t) {
  t.sort((e, n) =>
    e.score !== n.score
      ? n.score - e.score
      : fT(
          e.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  )
}
const oT = /^:[\w-]+$/,
  aT = 3,
  lT = 2,
  uT = 1,
  cT = 10,
  hT = -2,
  Um = (t) => t === '*'
function dT(t, e) {
  let n = t.split('/'),
    r = n.length
  return (
    n.some(Um) && (r += hT),
    e && (r += lT),
    n
      .filter((i) => !Um(i))
      .reduce((i, s) => i + (oT.test(s) ? aT : s === '' ? uT : cT), r)
  )
}
function fT(t, e) {
  return t.length === e.length && t.slice(0, -1).every((r, i) => r === e[i])
    ? t[t.length - 1] - e[e.length - 1]
    : 0
}
function pT(t, e, n) {
  let { routesMeta: r } = t,
    i = {},
    s = '/',
    o = []
  for (let l = 0; l < r.length; ++l) {
    let u = r[l],
      h = l === r.length - 1,
      f = s === '/' ? e : e.slice(s.length) || '/',
      p = Bm(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: h },
        f
      ),
      v = u.route
    if (
      (!p &&
        h &&
        n &&
        !r[r.length - 1].route.index &&
        (p = Bm(
          { path: u.relativePath, caseSensitive: u.caseSensitive, end: !1 },
          f
        )),
      !p)
    )
      return null
    Object.assign(i, p.params),
      o.push({
        params: i,
        pathname: rr([s, p.pathname]),
        pathnameBase: ET(rr([s, p.pathnameBase])),
        route: v,
      }),
      p.pathnameBase !== '/' && (s = rr([s, p.pathnameBase]))
  }
  return o
}
function Bm(t, e) {
  typeof t == 'string' && (t = { path: t, caseSensitive: !1, end: !0 })
  let [n, r] = mT(t.path, t.caseSensitive, t.end),
    i = e.match(n)
  if (!i) return null
  let s = i[0],
    o = s.replace(/(.)\/+$/, '$1'),
    l = i.slice(1)
  return {
    params: r.reduce((h, f, p) => {
      let { paramName: v, isOptional: A } = f
      if (v === '*') {
        let N = l[p] || ''
        o = s.slice(0, s.length - N.length).replace(/(.)\/+$/, '$1')
      }
      const P = l[p]
      return (
        A && !P ? (h[v] = void 0) : (h[v] = (P || '').replace(/%2F/g, '/')), h
      )
    }, {}),
    pathname: s,
    pathnameBase: o,
    pattern: t,
  }
}
function mT(t, e, n) {
  e === void 0 && (e = !1),
    n === void 0 && (n = !0),
    _v(
      t === '*' || !t.endsWith('*') || t.endsWith('/*'),
      'Route path "' +
        t +
        '" will be treated as if it were ' +
        ('"' + t.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + t.replace(/\*$/, '/*') + '".')
    )
  let r = [],
    i =
      '^' +
      t
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (o, l, u) => (
            r.push({ paramName: l, isOptional: u != null }),
            u ? '/?([^\\/]+)?' : '/([^\\/]+)'
          )
        )
  return (
    t.endsWith('*')
      ? (r.push({ paramName: '*' }),
        (i += t === '*' || t === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : n
      ? (i += '\\/*$')
      : t !== '' && t !== '/' && (i += '(?:(?=\\/|$))'),
    [new RegExp(i, e ? void 0 : 'i'), r]
  )
}
function gT(t) {
  try {
    return t
      .split('/')
      .map((e) => decodeURIComponent(e).replace(/\//g, '%2F'))
      .join('/')
  } catch (e) {
    return (
      _v(
        !1,
        'The URL path "' +
          t +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + e + ').')
      ),
      t
    )
  }
}
function Ld(t, e) {
  if (e === '/') return t
  if (!t.toLowerCase().startsWith(e.toLowerCase())) return null
  let n = e.endsWith('/') ? e.length - 1 : e.length,
    r = t.charAt(n)
  return r && r !== '/' ? null : t.slice(n) || '/'
}
function yT(t, e) {
  e === void 0 && (e = '/')
  let {
    pathname: n,
    search: r = '',
    hash: i = '',
  } = typeof t == 'string' ? Hi(t) : t
  return {
    pathname: n ? (n.startsWith('/') ? n : vT(n, e)) : e,
    search: wT(r),
    hash: TT(i),
  }
}
function vT(t, e) {
  let n = e.replace(/\/+$/, '').split('/')
  return (
    t.split('/').forEach((i) => {
      i === '..' ? n.length > 1 && n.pop() : i !== '.' && n.push(i)
    }),
    n.length > 1 ? n.join('/') : '/'
  )
}
function dc(t, e, n, r) {
  return (
    "Cannot include a '" +
    t +
    "' character in a manually specified " +
    ('`to.' +
      e +
      '` field [' +
      JSON.stringify(r) +
      '].  Please separate it out to the ') +
    ('`to.' + n + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  )
}
function _T(t) {
  return t.filter(
    (e, n) => n === 0 || (e.route.path && e.route.path.length > 0)
  )
}
function Vd(t, e) {
  let n = _T(t)
  return e
    ? n.map((r, i) => (i === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase)
}
function Md(t, e, n, r) {
  r === void 0 && (r = !1)
  let i
  typeof t == 'string'
    ? (i = Hi(t))
    : ((i = uo({}, t)),
      Ae(
        !i.pathname || !i.pathname.includes('?'),
        dc('?', 'pathname', 'search', i)
      ),
      Ae(
        !i.pathname || !i.pathname.includes('#'),
        dc('#', 'pathname', 'hash', i)
      ),
      Ae(!i.search || !i.search.includes('#'), dc('#', 'search', 'hash', i)))
  let s = t === '' || i.pathname === '',
    o = s ? '/' : i.pathname,
    l
  if (o == null) l = n
  else {
    let p = e.length - 1
    if (!r && o.startsWith('..')) {
      let v = o.split('/')
      for (; v[0] === '..'; ) v.shift(), (p -= 1)
      i.pathname = v.join('/')
    }
    l = p >= 0 ? e[p] : '/'
  }
  let u = yT(i, l),
    h = o && o !== '/' && o.endsWith('/'),
    f = (s || o === '.') && n.endsWith('/')
  return !u.pathname.endsWith('/') && (h || f) && (u.pathname += '/'), u
}
const rr = (t) => t.join('/').replace(/\/\/+/g, '/'),
  ET = (t) => t.replace(/\/+$/, '').replace(/^\/*/, '/'),
  wT = (t) => (!t || t === '?' ? '' : t.startsWith('?') ? t : '?' + t),
  TT = (t) => (!t || t === '#' ? '' : t.startsWith('#') ? t : '#' + t)
function IT(t) {
  return (
    t != null &&
    typeof t.status == 'number' &&
    typeof t.statusText == 'string' &&
    typeof t.internal == 'boolean' &&
    'data' in t
  )
}
const Tv = ['post', 'put', 'patch', 'delete']
new Set(Tv)
const ST = ['get', ...Tv]
new Set(ST)
/**
 * React Router v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function co() {
  return (
    (co = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
          }
          return t
        }),
    co.apply(this, arguments)
  )
}
const bd = V.createContext(null),
  CT = V.createContext(null),
  yr = V.createContext(null),
  eu = V.createContext(null),
  Pn = V.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Iv = V.createContext(null)
function AT(t, e) {
  let { relative: n } = e === void 0 ? {} : e
  Wi() || Ae(!1)
  let { basename: r, navigator: i } = V.useContext(yr),
    { hash: s, pathname: o, search: l } = Cv(t, { relative: n }),
    u = o
  return (
    r !== '/' && (u = o === '/' ? r : rr([r, o])),
    i.createHref({ pathname: u, search: l, hash: s })
  )
}
function Wi() {
  return V.useContext(eu) != null
}
function Ki() {
  return Wi() || Ae(!1), V.useContext(eu).location
}
function Sv(t) {
  V.useContext(yr).static || V.useLayoutEffect(t)
}
function tu() {
  let { isDataRoute: t } = V.useContext(Pn)
  return t ? BT() : RT()
}
function RT() {
  Wi() || Ae(!1)
  let t = V.useContext(bd),
    { basename: e, future: n, navigator: r } = V.useContext(yr),
    { matches: i } = V.useContext(Pn),
    { pathname: s } = Ki(),
    o = JSON.stringify(Vd(i, n.v7_relativeSplatPath)),
    l = V.useRef(!1)
  return (
    Sv(() => {
      l.current = !0
    }),
    V.useCallback(
      function (h, f) {
        if ((f === void 0 && (f = {}), !l.current)) return
        if (typeof h == 'number') {
          r.go(h)
          return
        }
        let p = Md(h, JSON.parse(o), s, f.relative === 'path')
        t == null &&
          e !== '/' &&
          (p.pathname = p.pathname === '/' ? e : rr([e, p.pathname])),
          (f.replace ? r.replace : r.push)(p, f.state, f)
      },
      [e, r, o, s, t]
    )
  )
}
const PT = V.createContext(null)
function kT(t) {
  let e = V.useContext(Pn).outlet
  return e && V.createElement(PT.Provider, { value: t }, e)
}
function Cv(t, e) {
  let { relative: n } = e === void 0 ? {} : e,
    { future: r } = V.useContext(yr),
    { matches: i } = V.useContext(Pn),
    { pathname: s } = Ki(),
    o = JSON.stringify(Vd(i, r.v7_relativeSplatPath))
  return V.useMemo(() => Md(t, JSON.parse(o), s, n === 'path'), [t, o, s, n])
}
function xT(t, e) {
  return NT(t, e)
}
function NT(t, e, n, r) {
  Wi() || Ae(!1)
  let { navigator: i } = V.useContext(yr),
    { matches: s } = V.useContext(Pn),
    o = s[s.length - 1],
    l = o ? o.params : {}
  o && o.pathname
  let u = o ? o.pathnameBase : '/'
  o && o.route
  let h = Ki(),
    f
  if (e) {
    var p
    let D = typeof e == 'string' ? Hi(e) : e
    u === '/' || ((p = D.pathname) != null && p.startsWith(u)) || Ae(!1),
      (f = D)
  } else f = h
  let v = f.pathname || '/',
    A = v
  if (u !== '/') {
    let D = u.replace(/^\//, '').split('/')
    A = '/' + v.replace(/^\//, '').split('/').slice(D.length).join('/')
  }
  let P = rT(t, { pathname: A }),
    N = MT(
      P &&
        P.map((D) =>
          Object.assign({}, D, {
            params: Object.assign({}, l, D.params),
            pathname: rr([
              u,
              i.encodeLocation
                ? i.encodeLocation(D.pathname).pathname
                : D.pathname,
            ]),
            pathnameBase:
              D.pathnameBase === '/'
                ? u
                : rr([
                    u,
                    i.encodeLocation
                      ? i.encodeLocation(D.pathnameBase).pathname
                      : D.pathnameBase,
                  ]),
          })
        ),
      s,
      n,
      r
    )
  return e && N
    ? V.createElement(
        eu.Provider,
        {
          value: {
            location: co(
              {
                pathname: '/',
                search: '',
                hash: '',
                state: null,
                key: 'default',
              },
              f
            ),
            navigationType: qn.Pop,
          },
        },
        N
      )
    : N
}
function DT() {
  let t = UT(),
    e = IT(t)
      ? t.status + ' ' + t.statusText
      : t instanceof Error
      ? t.message
      : JSON.stringify(t),
    n = t instanceof Error ? t.stack : null,
    i = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' }
  return V.createElement(
    V.Fragment,
    null,
    V.createElement('h2', null, 'Unexpected Application Error!'),
    V.createElement('h3', { style: { fontStyle: 'italic' } }, e),
    n ? V.createElement('pre', { style: i }, n) : null,
    null
  )
}
const OT = V.createElement(DT, null)
class LT extends V.Component {
  constructor(e) {
    super(e),
      (this.state = {
        location: e.location,
        revalidation: e.revalidation,
        error: e.error,
      })
  }
  static getDerivedStateFromError(e) {
    return { error: e }
  }
  static getDerivedStateFromProps(e, n) {
    return n.location !== e.location ||
      (n.revalidation !== 'idle' && e.revalidation === 'idle')
      ? { error: e.error, location: e.location, revalidation: e.revalidation }
      : {
          error: e.error !== void 0 ? e.error : n.error,
          location: n.location,
          revalidation: e.revalidation || n.revalidation,
        }
  }
  componentDidCatch(e, n) {
    console.error('React Router caught the following error during render', e, n)
  }
  render() {
    return this.state.error !== void 0
      ? V.createElement(
          Pn.Provider,
          { value: this.props.routeContext },
          V.createElement(Iv.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children
  }
}
function VT(t) {
  let { routeContext: e, match: n, children: r } = t,
    i = V.useContext(bd)
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    V.createElement(Pn.Provider, { value: e }, r)
  )
}
function MT(t, e, n, r) {
  var i
  if (
    (e === void 0 && (e = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    t == null)
  ) {
    var s
    if (!n) return null
    if (n.errors) t = n.matches
    else if (
      (s = r) != null &&
      s.v7_partialHydration &&
      e.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      t = n.matches
    else return null
  }
  let o = t,
    l = (i = n) == null ? void 0 : i.errors
  if (l != null) {
    let f = o.findIndex(
      (p) => p.route.id && (l == null ? void 0 : l[p.route.id]) !== void 0
    )
    f >= 0 || Ae(!1), (o = o.slice(0, Math.min(o.length, f + 1)))
  }
  let u = !1,
    h = -1
  if (n && r && r.v7_partialHydration)
    for (let f = 0; f < o.length; f++) {
      let p = o[f]
      if (
        ((p.route.HydrateFallback || p.route.hydrateFallbackElement) && (h = f),
        p.route.id)
      ) {
        let { loaderData: v, errors: A } = n,
          P =
            p.route.loader &&
            v[p.route.id] === void 0 &&
            (!A || A[p.route.id] === void 0)
        if (p.route.lazy || P) {
          ;(u = !0), h >= 0 ? (o = o.slice(0, h + 1)) : (o = [o[0]])
          break
        }
      }
    }
  return o.reduceRight((f, p, v) => {
    let A,
      P = !1,
      N = null,
      D = null
    n &&
      ((A = l && p.route.id ? l[p.route.id] : void 0),
      (N = p.route.errorElement || OT),
      u &&
        (h < 0 && v === 0
          ? ((P = !0), (D = null))
          : h === v &&
            ((P = !0), (D = p.route.hydrateFallbackElement || null))))
    let C = e.concat(o.slice(0, v + 1)),
      _ = () => {
        let S
        return (
          A
            ? (S = N)
            : P
            ? (S = D)
            : p.route.Component
            ? (S = V.createElement(p.route.Component, null))
            : p.route.element
            ? (S = p.route.element)
            : (S = f),
          V.createElement(VT, {
            match: p,
            routeContext: { outlet: f, matches: C, isDataRoute: n != null },
            children: S,
          })
        )
      }
    return n && (p.route.ErrorBoundary || p.route.errorElement || v === 0)
      ? V.createElement(LT, {
          location: n.location,
          revalidation: n.revalidation,
          component: N,
          error: A,
          children: _(),
          routeContext: { outlet: null, matches: C, isDataRoute: !0 },
        })
      : _()
  }, null)
}
var Av = (function (t) {
    return (
      (t.UseBlocker = 'useBlocker'),
      (t.UseRevalidator = 'useRevalidator'),
      (t.UseNavigateStable = 'useNavigate'),
      t
    )
  })(Av || {}),
  _l = (function (t) {
    return (
      (t.UseBlocker = 'useBlocker'),
      (t.UseLoaderData = 'useLoaderData'),
      (t.UseActionData = 'useActionData'),
      (t.UseRouteError = 'useRouteError'),
      (t.UseNavigation = 'useNavigation'),
      (t.UseRouteLoaderData = 'useRouteLoaderData'),
      (t.UseMatches = 'useMatches'),
      (t.UseRevalidator = 'useRevalidator'),
      (t.UseNavigateStable = 'useNavigate'),
      (t.UseRouteId = 'useRouteId'),
      t
    )
  })(_l || {})
function bT(t) {
  let e = V.useContext(bd)
  return e || Ae(!1), e
}
function FT(t) {
  let e = V.useContext(CT)
  return e || Ae(!1), e
}
function jT(t) {
  let e = V.useContext(Pn)
  return e || Ae(!1), e
}
function Rv(t) {
  let e = jT(),
    n = e.matches[e.matches.length - 1]
  return n.route.id || Ae(!1), n.route.id
}
function UT() {
  var t
  let e = V.useContext(Iv),
    n = FT(_l.UseRouteError),
    r = Rv(_l.UseRouteError)
  return e !== void 0 ? e : (t = n.errors) == null ? void 0 : t[r]
}
function BT() {
  let { router: t } = bT(Av.UseNavigateStable),
    e = Rv(_l.UseNavigateStable),
    n = V.useRef(!1)
  return (
    Sv(() => {
      n.current = !0
    }),
    V.useCallback(
      function (i, s) {
        s === void 0 && (s = {}),
          n.current &&
            (typeof i == 'number'
              ? t.navigate(i)
              : t.navigate(i, co({ fromRouteId: e }, s)))
      },
      [t, e]
    )
  )
}
function Pv(t) {
  let { to: e, replace: n, state: r, relative: i } = t
  Wi() || Ae(!1)
  let { future: s, static: o } = V.useContext(yr),
    { matches: l } = V.useContext(Pn),
    { pathname: u } = Ki(),
    h = tu(),
    f = Md(e, Vd(l, s.v7_relativeSplatPath), u, i === 'path'),
    p = JSON.stringify(f)
  return (
    V.useEffect(
      () => h(JSON.parse(p), { replace: n, state: r, relative: i }),
      [h, p, i, n, r]
    ),
    null
  )
}
function kv(t) {
  return kT(t.context)
}
function Ot(t) {
  Ae(!1)
}
function zT(t) {
  let {
    basename: e = '/',
    children: n = null,
    location: r,
    navigationType: i = qn.Pop,
    navigator: s,
    static: o = !1,
    future: l,
  } = t
  Wi() && Ae(!1)
  let u = e.replace(/^\/*/, '/'),
    h = V.useMemo(
      () => ({
        basename: u,
        navigator: s,
        static: o,
        future: co({ v7_relativeSplatPath: !1 }, l),
      }),
      [u, l, s, o]
    )
  typeof r == 'string' && (r = Hi(r))
  let {
      pathname: f = '/',
      search: p = '',
      hash: v = '',
      state: A = null,
      key: P = 'default',
    } = r,
    N = V.useMemo(() => {
      let D = Ld(f, u)
      return D == null
        ? null
        : {
            location: { pathname: D, search: p, hash: v, state: A, key: P },
            navigationType: i,
          }
    }, [u, f, p, v, A, P, i])
  return N == null
    ? null
    : V.createElement(
        yr.Provider,
        { value: h },
        V.createElement(eu.Provider, { children: n, value: N })
      )
}
function $T(t) {
  let { children: e, location: n } = t
  return xT(vh(e), n)
}
new Promise(() => {})
function vh(t, e) {
  e === void 0 && (e = [])
  let n = []
  return (
    V.Children.forEach(t, (r, i) => {
      if (!V.isValidElement(r)) return
      let s = [...e, i]
      if (r.type === V.Fragment) {
        n.push.apply(n, vh(r.props.children, s))
        return
      }
      r.type !== Ot && Ae(!1), !r.props.index || !r.props.children || Ae(!1)
      let o = {
        id: r.props.id || s.join('-'),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      }
      r.props.children && (o.children = vh(r.props.children, s)), n.push(o)
    }),
    n
  )
}
/**
 * React Router DOM v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function _h() {
  return (
    (_h = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
          }
          return t
        }),
    _h.apply(this, arguments)
  )
}
function HT(t, e) {
  if (t == null) return {}
  var n = {},
    r = Object.keys(t),
    i,
    s
  for (s = 0; s < r.length; s++)
    (i = r[s]), !(e.indexOf(i) >= 0) && (n[i] = t[i])
  return n
}
function WT(t) {
  return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey)
}
function KT(t, e) {
  return t.button === 0 && (!e || e === '_self') && !WT(t)
}
const qT = [
    'onClick',
    'relative',
    'reloadDocument',
    'replace',
    'state',
    'target',
    'to',
    'preventScrollReset',
    'unstable_viewTransition',
  ],
  GT = '6'
try {
  window.__reactRouterVersion = GT
} catch {}
const QT = 'startTransition',
  zm = z1[QT]
function YT(t) {
  let { basename: e, children: n, future: r, window: i } = t,
    s = V.useRef()
  s.current == null && (s.current = eT({ window: i, v5Compat: !0 }))
  let o = s.current,
    [l, u] = V.useState({ action: o.action, location: o.location }),
    { v7_startTransition: h } = r || {},
    f = V.useCallback(
      (p) => {
        h && zm ? zm(() => u(p)) : u(p)
      },
      [u, h]
    )
  return (
    V.useLayoutEffect(() => o.listen(f), [o, f]),
    V.createElement(zT, {
      basename: e,
      children: n,
      location: l.location,
      navigationType: l.action,
      navigator: o,
      future: r,
    })
  )
}
const XT =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  JT = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  st = V.forwardRef(function (e, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: s,
        replace: o,
        state: l,
        target: u,
        to: h,
        preventScrollReset: f,
        unstable_viewTransition: p,
      } = e,
      v = HT(e, qT),
      { basename: A } = V.useContext(yr),
      P,
      N = !1
    if (typeof h == 'string' && JT.test(h) && ((P = h), XT))
      try {
        let S = new URL(window.location.href),
          L = h.startsWith('//') ? new URL(S.protocol + h) : new URL(h),
          U = Ld(L.pathname, A)
        L.origin === S.origin && U != null
          ? (h = U + L.search + L.hash)
          : (N = !0)
      } catch {}
    let D = AT(h, { relative: i }),
      C = ZT(h, {
        replace: o,
        state: l,
        target: u,
        preventScrollReset: f,
        relative: i,
        unstable_viewTransition: p,
      })
    function _(S) {
      r && r(S), S.defaultPrevented || C(S)
    }
    return V.createElement(
      'a',
      _h({}, v, { href: P || D, onClick: N || s ? r : _, ref: n, target: u })
    )
  })
var $m
;(function (t) {
  ;(t.UseScrollRestoration = 'useScrollRestoration'),
    (t.UseSubmit = 'useSubmit'),
    (t.UseSubmitFetcher = 'useSubmitFetcher'),
    (t.UseFetcher = 'useFetcher'),
    (t.useViewTransitionState = 'useViewTransitionState')
})($m || ($m = {}))
var Hm
;(function (t) {
  ;(t.UseFetcher = 'useFetcher'),
    (t.UseFetchers = 'useFetchers'),
    (t.UseScrollRestoration = 'useScrollRestoration')
})(Hm || (Hm = {}))
function ZT(t, e) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: s,
      relative: o,
      unstable_viewTransition: l,
    } = e === void 0 ? {} : e,
    u = tu(),
    h = Ki(),
    f = Cv(t, { relative: o })
  return V.useCallback(
    (p) => {
      if (KT(p, n)) {
        p.preventDefault()
        let v = r !== void 0 ? r : vl(h) === vl(f)
        u(t, {
          replace: v,
          state: i,
          preventScrollReset: s,
          relative: o,
          unstable_viewTransition: l,
        })
      }
    },
    [h, u, f, r, i, n, t, s, o, l]
  )
}
var Wm = {}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const xv = function (t) {
    const e = []
    let n = 0
    for (let r = 0; r < t.length; r++) {
      let i = t.charCodeAt(r)
      i < 128
        ? (e[n++] = i)
        : i < 2048
        ? ((e[n++] = (i >> 6) | 192), (e[n++] = (i & 63) | 128))
        : (i & 64512) === 55296 &&
          r + 1 < t.length &&
          (t.charCodeAt(r + 1) & 64512) === 56320
        ? ((i = 65536 + ((i & 1023) << 10) + (t.charCodeAt(++r) & 1023)),
          (e[n++] = (i >> 18) | 240),
          (e[n++] = ((i >> 12) & 63) | 128),
          (e[n++] = ((i >> 6) & 63) | 128),
          (e[n++] = (i & 63) | 128))
        : ((e[n++] = (i >> 12) | 224),
          (e[n++] = ((i >> 6) & 63) | 128),
          (e[n++] = (i & 63) | 128))
    }
    return e
  },
  eI = function (t) {
    const e = []
    let n = 0,
      r = 0
    for (; n < t.length; ) {
      const i = t[n++]
      if (i < 128) e[r++] = String.fromCharCode(i)
      else if (i > 191 && i < 224) {
        const s = t[n++]
        e[r++] = String.fromCharCode(((i & 31) << 6) | (s & 63))
      } else if (i > 239 && i < 365) {
        const s = t[n++],
          o = t[n++],
          l = t[n++],
          u =
            (((i & 7) << 18) | ((s & 63) << 12) | ((o & 63) << 6) | (l & 63)) -
            65536
        ;(e[r++] = String.fromCharCode(55296 + (u >> 10))),
          (e[r++] = String.fromCharCode(56320 + (u & 1023)))
      } else {
        const s = t[n++],
          o = t[n++]
        e[r++] = String.fromCharCode(
          ((i & 15) << 12) | ((s & 63) << 6) | (o & 63)
        )
      }
    }
    return e.join('')
  },
  Nv = {
    byteToCharMap_: null,
    charToByteMap_: null,
    byteToCharMapWebSafe_: null,
    charToByteMapWebSafe_: null,
    ENCODED_VALS_BASE:
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
    get ENCODED_VALS() {
      return this.ENCODED_VALS_BASE + '+/='
    },
    get ENCODED_VALS_WEBSAFE() {
      return this.ENCODED_VALS_BASE + '-_.'
    },
    HAS_NATIVE_SUPPORT: typeof atob == 'function',
    encodeByteArray(t, e) {
      if (!Array.isArray(t))
        throw Error('encodeByteArray takes an array as a parameter')
      this.init_()
      const n = e ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
        r = []
      for (let i = 0; i < t.length; i += 3) {
        const s = t[i],
          o = i + 1 < t.length,
          l = o ? t[i + 1] : 0,
          u = i + 2 < t.length,
          h = u ? t[i + 2] : 0,
          f = s >> 2,
          p = ((s & 3) << 4) | (l >> 4)
        let v = ((l & 15) << 2) | (h >> 6),
          A = h & 63
        u || ((A = 64), o || (v = 64)), r.push(n[f], n[p], n[v], n[A])
      }
      return r.join('')
    },
    encodeString(t, e) {
      return this.HAS_NATIVE_SUPPORT && !e
        ? btoa(t)
        : this.encodeByteArray(xv(t), e)
    },
    decodeString(t, e) {
      return this.HAS_NATIVE_SUPPORT && !e
        ? atob(t)
        : eI(this.decodeStringToByteArray(t, e))
    },
    decodeStringToByteArray(t, e) {
      this.init_()
      const n = e ? this.charToByteMapWebSafe_ : this.charToByteMap_,
        r = []
      for (let i = 0; i < t.length; ) {
        const s = n[t.charAt(i++)],
          l = i < t.length ? n[t.charAt(i)] : 0
        ++i
        const h = i < t.length ? n[t.charAt(i)] : 64
        ++i
        const p = i < t.length ? n[t.charAt(i)] : 64
        if ((++i, s == null || l == null || h == null || p == null))
          throw new tI()
        const v = (s << 2) | (l >> 4)
        if ((r.push(v), h !== 64)) {
          const A = ((l << 4) & 240) | (h >> 2)
          if ((r.push(A), p !== 64)) {
            const P = ((h << 6) & 192) | p
            r.push(P)
          }
        }
      }
      return r
    },
    init_() {
      if (!this.byteToCharMap_) {
        ;(this.byteToCharMap_ = {}),
          (this.charToByteMap_ = {}),
          (this.byteToCharMapWebSafe_ = {}),
          (this.charToByteMapWebSafe_ = {})
        for (let t = 0; t < this.ENCODED_VALS.length; t++)
          (this.byteToCharMap_[t] = this.ENCODED_VALS.charAt(t)),
            (this.charToByteMap_[this.byteToCharMap_[t]] = t),
            (this.byteToCharMapWebSafe_[t] =
              this.ENCODED_VALS_WEBSAFE.charAt(t)),
            (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]] = t),
            t >= this.ENCODED_VALS_BASE.length &&
              ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)] = t),
              (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)] = t))
      }
    },
  }
class tI extends Error {
  constructor() {
    super(...arguments), (this.name = 'DecodeBase64StringError')
  }
}
const nI = function (t) {
    const e = xv(t)
    return Nv.encodeByteArray(e, !0)
  },
  El = function (t) {
    return nI(t).replace(/\./g, '')
  },
  Dv = function (t) {
    try {
      return Nv.decodeString(t, !0)
    } catch (e) {
      console.error('base64Decode failed: ', e)
    }
    return null
  }
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function rI() {
  if (typeof self < 'u') return self
  if (typeof window < 'u') return window
  if (typeof global < 'u') return global
  throw new Error('Unable to locate global object.')
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const iI = () => rI().__FIREBASE_DEFAULTS__,
  sI = () => {
    if (typeof process > 'u' || typeof Wm > 'u') return
    const t = Wm.__FIREBASE_DEFAULTS__
    if (t) return JSON.parse(t)
  },
  oI = () => {
    if (typeof document > 'u') return
    let t
    try {
      t = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)
    } catch {
      return
    }
    const e = t && Dv(t[1])
    return e && JSON.parse(e)
  },
  nu = () => {
    try {
      return iI() || sI() || oI()
    } catch (t) {
      console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)
      return
    }
  },
  Ov = (t) => {
    var e, n
    return (n =
      (e = nu()) === null || e === void 0 ? void 0 : e.emulatorHosts) ===
      null || n === void 0
      ? void 0
      : n[t]
  },
  aI = (t) => {
    const e = Ov(t)
    if (!e) return
    const n = e.lastIndexOf(':')
    if (n <= 0 || n + 1 === e.length)
      throw new Error(`Invalid host ${e} with no separate hostname and port!`)
    const r = parseInt(e.substring(n + 1), 10)
    return e[0] === '[' ? [e.substring(1, n - 1), r] : [e.substring(0, n), r]
  },
  Lv = () => {
    var t
    return (t = nu()) === null || t === void 0 ? void 0 : t.config
  },
  Vv = (t) => {
    var e
    return (e = nu()) === null || e === void 0 ? void 0 : e[`_${t}`]
  }
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class lI {
  constructor() {
    ;(this.reject = () => {}),
      (this.resolve = () => {}),
      (this.promise = new Promise((e, n) => {
        ;(this.resolve = e), (this.reject = n)
      }))
  }
  wrapCallback(e) {
    return (n, r) => {
      n ? this.reject(n) : this.resolve(r),
        typeof e == 'function' &&
          (this.promise.catch(() => {}), e.length === 1 ? e(n) : e(n, r))
    }
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function uI(t, e) {
  if (t.uid)
    throw new Error(
      'The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.'
    )
  const n = { alg: 'none', type: 'JWT' },
    r = e || 'demo-project',
    i = t.iat || 0,
    s = t.sub || t.user_id
  if (!s)
    throw new Error("mockUserToken must contain 'sub' or 'user_id' field!")
  const o = Object.assign(
    {
      iss: `https://securetoken.google.com/${r}`,
      aud: r,
      iat: i,
      exp: i + 3600,
      auth_time: i,
      sub: s,
      user_id: s,
      firebase: { sign_in_provider: 'custom', identities: {} },
    },
    t
  )
  return [El(JSON.stringify(n)), El(JSON.stringify(o)), ''].join('.')
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function tt() {
  return typeof navigator < 'u' && typeof navigator.userAgent == 'string'
    ? navigator.userAgent
    : ''
}
function cI() {
  return (
    typeof window < 'u' &&
    !!(window.cordova || window.phonegap || window.PhoneGap) &&
    /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(tt())
  )
}
function hI() {
  var t
  const e = (t = nu()) === null || t === void 0 ? void 0 : t.forceEnvironment
  if (e === 'node') return !0
  if (e === 'browser') return !1
  try {
    return Object.prototype.toString.call(global.process) === '[object process]'
  } catch {
    return !1
  }
}
function dI() {
  const t =
    typeof chrome == 'object'
      ? chrome.runtime
      : typeof browser == 'object'
      ? browser.runtime
      : void 0
  return typeof t == 'object' && t.id !== void 0
}
function fI() {
  return typeof navigator == 'object' && navigator.product === 'ReactNative'
}
function pI() {
  const t = tt()
  return t.indexOf('MSIE ') >= 0 || t.indexOf('Trident/') >= 0
}
function mI() {
  return (
    !hI() &&
    !!navigator.userAgent &&
    navigator.userAgent.includes('Safari') &&
    !navigator.userAgent.includes('Chrome')
  )
}
function gI() {
  try {
    return typeof indexedDB == 'object'
  } catch {
    return !1
  }
}
function yI() {
  return new Promise((t, e) => {
    try {
      let n = !0
      const r = 'validate-browser-context-for-indexeddb-analytics-module',
        i = self.indexedDB.open(r)
      ;(i.onsuccess = () => {
        i.result.close(), n || self.indexedDB.deleteDatabase(r), t(!0)
      }),
        (i.onupgradeneeded = () => {
          n = !1
        }),
        (i.onerror = () => {
          var s
          e(((s = i.error) === null || s === void 0 ? void 0 : s.message) || '')
        })
    } catch (n) {
      e(n)
    }
  })
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const vI = 'FirebaseError'
class kn extends Error {
  constructor(e, n, r) {
    super(n),
      (this.code = e),
      (this.customData = r),
      (this.name = vI),
      Object.setPrototypeOf(this, kn.prototype),
      Error.captureStackTrace &&
        Error.captureStackTrace(this, Po.prototype.create)
  }
}
class Po {
  constructor(e, n, r) {
    ;(this.service = e), (this.serviceName = n), (this.errors = r)
  }
  create(e, ...n) {
    const r = n[0] || {},
      i = `${this.service}/${e}`,
      s = this.errors[e],
      o = s ? _I(s, r) : 'Error',
      l = `${this.serviceName}: ${o} (${i}).`
    return new kn(i, l, r)
  }
}
function _I(t, e) {
  return t.replace(EI, (n, r) => {
    const i = e[r]
    return i != null ? String(i) : `<${r}?>`
  })
}
const EI = /\{\$([^}]+)}/g
function wI(t) {
  for (const e in t) if (Object.prototype.hasOwnProperty.call(t, e)) return !1
  return !0
}
function wl(t, e) {
  if (t === e) return !0
  const n = Object.keys(t),
    r = Object.keys(e)
  for (const i of n) {
    if (!r.includes(i)) return !1
    const s = t[i],
      o = e[i]
    if (Km(s) && Km(o)) {
      if (!wl(s, o)) return !1
    } else if (s !== o) return !1
  }
  for (const i of r) if (!n.includes(i)) return !1
  return !0
}
function Km(t) {
  return t !== null && typeof t == 'object'
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ko(t) {
  const e = []
  for (const [n, r] of Object.entries(t))
    Array.isArray(r)
      ? r.forEach((i) => {
          e.push(encodeURIComponent(n) + '=' + encodeURIComponent(i))
        })
      : e.push(encodeURIComponent(n) + '=' + encodeURIComponent(r))
  return e.length ? '&' + e.join('&') : ''
}
function Rs(t) {
  const e = {}
  return (
    t
      .replace(/^\?/, '')
      .split('&')
      .forEach((r) => {
        if (r) {
          const [i, s] = r.split('=')
          e[decodeURIComponent(i)] = decodeURIComponent(s)
        }
      }),
    e
  )
}
function Ps(t) {
  const e = t.indexOf('?')
  if (!e) return ''
  const n = t.indexOf('#', e)
  return t.substring(e, n > 0 ? n : void 0)
}
function TI(t, e) {
  const n = new II(t, e)
  return n.subscribe.bind(n)
}
class II {
  constructor(e, n) {
    ;(this.observers = []),
      (this.unsubscribes = []),
      (this.observerCount = 0),
      (this.task = Promise.resolve()),
      (this.finalized = !1),
      (this.onNoObservers = n),
      this.task
        .then(() => {
          e(this)
        })
        .catch((r) => {
          this.error(r)
        })
  }
  next(e) {
    this.forEachObserver((n) => {
      n.next(e)
    })
  }
  error(e) {
    this.forEachObserver((n) => {
      n.error(e)
    }),
      this.close(e)
  }
  complete() {
    this.forEachObserver((e) => {
      e.complete()
    }),
      this.close()
  }
  subscribe(e, n, r) {
    let i
    if (e === void 0 && n === void 0 && r === void 0)
      throw new Error('Missing Observer.')
    SI(e, ['next', 'error', 'complete'])
      ? (i = e)
      : (i = { next: e, error: n, complete: r }),
      i.next === void 0 && (i.next = fc),
      i.error === void 0 && (i.error = fc),
      i.complete === void 0 && (i.complete = fc)
    const s = this.unsubscribeOne.bind(this, this.observers.length)
    return (
      this.finalized &&
        this.task.then(() => {
          try {
            this.finalError ? i.error(this.finalError) : i.complete()
          } catch {}
        }),
      this.observers.push(i),
      s
    )
  }
  unsubscribeOne(e) {
    this.observers === void 0 ||
      this.observers[e] === void 0 ||
      (delete this.observers[e],
      (this.observerCount -= 1),
      this.observerCount === 0 &&
        this.onNoObservers !== void 0 &&
        this.onNoObservers(this))
  }
  forEachObserver(e) {
    if (!this.finalized)
      for (let n = 0; n < this.observers.length; n++) this.sendOne(n, e)
  }
  sendOne(e, n) {
    this.task.then(() => {
      if (this.observers !== void 0 && this.observers[e] !== void 0)
        try {
          n(this.observers[e])
        } catch (r) {
          typeof console < 'u' && console.error && console.error(r)
        }
    })
  }
  close(e) {
    this.finalized ||
      ((this.finalized = !0),
      e !== void 0 && (this.finalError = e),
      this.task.then(() => {
        ;(this.observers = void 0), (this.onNoObservers = void 0)
      }))
  }
}
function SI(t, e) {
  if (typeof t != 'object' || t === null) return !1
  for (const n of e) if (n in t && typeof t[n] == 'function') return !0
  return !1
}
function fc() {}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function mt(t) {
  return t && t._delegate ? t._delegate : t
}
class Fr {
  constructor(e, n, r) {
    ;(this.name = e),
      (this.instanceFactory = n),
      (this.type = r),
      (this.multipleInstances = !1),
      (this.serviceProps = {}),
      (this.instantiationMode = 'LAZY'),
      (this.onInstanceCreated = null)
  }
  setInstantiationMode(e) {
    return (this.instantiationMode = e), this
  }
  setMultipleInstances(e) {
    return (this.multipleInstances = e), this
  }
  setServiceProps(e) {
    return (this.serviceProps = e), this
  }
  setInstanceCreatedCallback(e) {
    return (this.onInstanceCreated = e), this
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Cr = '[DEFAULT]'
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class CI {
  constructor(e, n) {
    ;(this.name = e),
      (this.container = n),
      (this.component = null),
      (this.instances = new Map()),
      (this.instancesDeferred = new Map()),
      (this.instancesOptions = new Map()),
      (this.onInitCallbacks = new Map())
  }
  get(e) {
    const n = this.normalizeInstanceIdentifier(e)
    if (!this.instancesDeferred.has(n)) {
      const r = new lI()
      if (
        (this.instancesDeferred.set(n, r),
        this.isInitialized(n) || this.shouldAutoInitialize())
      )
        try {
          const i = this.getOrInitializeService({ instanceIdentifier: n })
          i && r.resolve(i)
        } catch {}
    }
    return this.instancesDeferred.get(n).promise
  }
  getImmediate(e) {
    var n
    const r = this.normalizeInstanceIdentifier(
        e == null ? void 0 : e.identifier
      ),
      i =
        (n = e == null ? void 0 : e.optional) !== null && n !== void 0 ? n : !1
    if (this.isInitialized(r) || this.shouldAutoInitialize())
      try {
        return this.getOrInitializeService({ instanceIdentifier: r })
      } catch (s) {
        if (i) return null
        throw s
      }
    else {
      if (i) return null
      throw Error(`Service ${this.name} is not available`)
    }
  }
  getComponent() {
    return this.component
  }
  setComponent(e) {
    if (e.name !== this.name)
      throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`)
    if (this.component)
      throw Error(`Component for ${this.name} has already been provided`)
    if (((this.component = e), !!this.shouldAutoInitialize())) {
      if (RI(e))
        try {
          this.getOrInitializeService({ instanceIdentifier: Cr })
        } catch {}
      for (const [n, r] of this.instancesDeferred.entries()) {
        const i = this.normalizeInstanceIdentifier(n)
        try {
          const s = this.getOrInitializeService({ instanceIdentifier: i })
          r.resolve(s)
        } catch {}
      }
    }
  }
  clearInstance(e = Cr) {
    this.instancesDeferred.delete(e),
      this.instancesOptions.delete(e),
      this.instances.delete(e)
  }
  async delete() {
    const e = Array.from(this.instances.values())
    await Promise.all([
      ...e.filter((n) => 'INTERNAL' in n).map((n) => n.INTERNAL.delete()),
      ...e.filter((n) => '_delete' in n).map((n) => n._delete()),
    ])
  }
  isComponentSet() {
    return this.component != null
  }
  isInitialized(e = Cr) {
    return this.instances.has(e)
  }
  getOptions(e = Cr) {
    return this.instancesOptions.get(e) || {}
  }
  initialize(e = {}) {
    const { options: n = {} } = e,
      r = this.normalizeInstanceIdentifier(e.instanceIdentifier)
    if (this.isInitialized(r))
      throw Error(`${this.name}(${r}) has already been initialized`)
    if (!this.isComponentSet())
      throw Error(`Component ${this.name} has not been registered yet`)
    const i = this.getOrInitializeService({ instanceIdentifier: r, options: n })
    for (const [s, o] of this.instancesDeferred.entries()) {
      const l = this.normalizeInstanceIdentifier(s)
      r === l && o.resolve(i)
    }
    return i
  }
  onInit(e, n) {
    var r
    const i = this.normalizeInstanceIdentifier(n),
      s =
        (r = this.onInitCallbacks.get(i)) !== null && r !== void 0
          ? r
          : new Set()
    s.add(e), this.onInitCallbacks.set(i, s)
    const o = this.instances.get(i)
    return (
      o && e(o, i),
      () => {
        s.delete(e)
      }
    )
  }
  invokeOnInitCallbacks(e, n) {
    const r = this.onInitCallbacks.get(n)
    if (r)
      for (const i of r)
        try {
          i(e, n)
        } catch {}
  }
  getOrInitializeService({ instanceIdentifier: e, options: n = {} }) {
    let r = this.instances.get(e)
    if (
      !r &&
      this.component &&
      ((r = this.component.instanceFactory(this.container, {
        instanceIdentifier: AI(e),
        options: n,
      })),
      this.instances.set(e, r),
      this.instancesOptions.set(e, n),
      this.invokeOnInitCallbacks(r, e),
      this.component.onInstanceCreated)
    )
      try {
        this.component.onInstanceCreated(this.container, e, r)
      } catch {}
    return r || null
  }
  normalizeInstanceIdentifier(e = Cr) {
    return this.component ? (this.component.multipleInstances ? e : Cr) : e
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== 'EXPLICIT'
  }
}
function AI(t) {
  return t === Cr ? void 0 : t
}
function RI(t) {
  return t.instantiationMode === 'EAGER'
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class PI {
  constructor(e) {
    ;(this.name = e), (this.providers = new Map())
  }
  addComponent(e) {
    const n = this.getProvider(e.name)
    if (n.isComponentSet())
      throw new Error(
        `Component ${e.name} has already been registered with ${this.name}`
      )
    n.setComponent(e)
  }
  addOrOverwriteComponent(e) {
    this.getProvider(e.name).isComponentSet() && this.providers.delete(e.name),
      this.addComponent(e)
  }
  getProvider(e) {
    if (this.providers.has(e)) return this.providers.get(e)
    const n = new CI(e, this)
    return this.providers.set(e, n), n
  }
  getProviders() {
    return Array.from(this.providers.values())
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var te
;(function (t) {
  ;(t[(t.DEBUG = 0)] = 'DEBUG'),
    (t[(t.VERBOSE = 1)] = 'VERBOSE'),
    (t[(t.INFO = 2)] = 'INFO'),
    (t[(t.WARN = 3)] = 'WARN'),
    (t[(t.ERROR = 4)] = 'ERROR'),
    (t[(t.SILENT = 5)] = 'SILENT')
})(te || (te = {}))
const kI = {
    debug: te.DEBUG,
    verbose: te.VERBOSE,
    info: te.INFO,
    warn: te.WARN,
    error: te.ERROR,
    silent: te.SILENT,
  },
  xI = te.INFO,
  NI = {
    [te.DEBUG]: 'log',
    [te.VERBOSE]: 'log',
    [te.INFO]: 'info',
    [te.WARN]: 'warn',
    [te.ERROR]: 'error',
  },
  DI = (t, e, ...n) => {
    if (e < t.logLevel) return
    const r = new Date().toISOString(),
      i = NI[e]
    if (i) console[i](`[${r}]  ${t.name}:`, ...n)
    else
      throw new Error(
        `Attempted to log a message with an invalid logType (value: ${e})`
      )
  }
class Fd {
  constructor(e) {
    ;(this.name = e),
      (this._logLevel = xI),
      (this._logHandler = DI),
      (this._userLogHandler = null)
  }
  get logLevel() {
    return this._logLevel
  }
  set logLevel(e) {
    if (!(e in te))
      throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``)
    this._logLevel = e
  }
  setLogLevel(e) {
    this._logLevel = typeof e == 'string' ? kI[e] : e
  }
  get logHandler() {
    return this._logHandler
  }
  set logHandler(e) {
    if (typeof e != 'function')
      throw new TypeError('Value assigned to `logHandler` must be a function')
    this._logHandler = e
  }
  get userLogHandler() {
    return this._userLogHandler
  }
  set userLogHandler(e) {
    this._userLogHandler = e
  }
  debug(...e) {
    this._userLogHandler && this._userLogHandler(this, te.DEBUG, ...e),
      this._logHandler(this, te.DEBUG, ...e)
  }
  log(...e) {
    this._userLogHandler && this._userLogHandler(this, te.VERBOSE, ...e),
      this._logHandler(this, te.VERBOSE, ...e)
  }
  info(...e) {
    this._userLogHandler && this._userLogHandler(this, te.INFO, ...e),
      this._logHandler(this, te.INFO, ...e)
  }
  warn(...e) {
    this._userLogHandler && this._userLogHandler(this, te.WARN, ...e),
      this._logHandler(this, te.WARN, ...e)
  }
  error(...e) {
    this._userLogHandler && this._userLogHandler(this, te.ERROR, ...e),
      this._logHandler(this, te.ERROR, ...e)
  }
}
const OI = (t, e) => e.some((n) => t instanceof n)
let qm, Gm
function LI() {
  return (
    qm ||
    (qm = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
  )
}
function VI() {
  return (
    Gm ||
    (Gm = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey,
    ])
  )
}
const Mv = new WeakMap(),
  Eh = new WeakMap(),
  bv = new WeakMap(),
  pc = new WeakMap(),
  jd = new WeakMap()
function MI(t) {
  const e = new Promise((n, r) => {
    const i = () => {
        t.removeEventListener('success', s), t.removeEventListener('error', o)
      },
      s = () => {
        n(ir(t.result)), i()
      },
      o = () => {
        r(t.error), i()
      }
    t.addEventListener('success', s), t.addEventListener('error', o)
  })
  return (
    e
      .then((n) => {
        n instanceof IDBCursor && Mv.set(n, t)
      })
      .catch(() => {}),
    jd.set(e, t),
    e
  )
}
function bI(t) {
  if (Eh.has(t)) return
  const e = new Promise((n, r) => {
    const i = () => {
        t.removeEventListener('complete', s),
          t.removeEventListener('error', o),
          t.removeEventListener('abort', o)
      },
      s = () => {
        n(), i()
      },
      o = () => {
        r(t.error || new DOMException('AbortError', 'AbortError')), i()
      }
    t.addEventListener('complete', s),
      t.addEventListener('error', o),
      t.addEventListener('abort', o)
  })
  Eh.set(t, e)
}
let wh = {
  get(t, e, n) {
    if (t instanceof IDBTransaction) {
      if (e === 'done') return Eh.get(t)
      if (e === 'objectStoreNames') return t.objectStoreNames || bv.get(t)
      if (e === 'store')
        return n.objectStoreNames[1]
          ? void 0
          : n.objectStore(n.objectStoreNames[0])
    }
    return ir(t[e])
  },
  set(t, e, n) {
    return (t[e] = n), !0
  },
  has(t, e) {
    return t instanceof IDBTransaction && (e === 'done' || e === 'store')
      ? !0
      : e in t
  },
}
function FI(t) {
  wh = t(wh)
}
function jI(t) {
  return t === IDBDatabase.prototype.transaction &&
    !('objectStoreNames' in IDBTransaction.prototype)
    ? function (e, ...n) {
        const r = t.call(mc(this), e, ...n)
        return bv.set(r, e.sort ? e.sort() : [e]), ir(r)
      }
    : VI().includes(t)
    ? function (...e) {
        return t.apply(mc(this), e), ir(Mv.get(this))
      }
    : function (...e) {
        return ir(t.apply(mc(this), e))
      }
}
function UI(t) {
  return typeof t == 'function'
    ? jI(t)
    : (t instanceof IDBTransaction && bI(t), OI(t, LI()) ? new Proxy(t, wh) : t)
}
function ir(t) {
  if (t instanceof IDBRequest) return MI(t)
  if (pc.has(t)) return pc.get(t)
  const e = UI(t)
  return e !== t && (pc.set(t, e), jd.set(e, t)), e
}
const mc = (t) => jd.get(t)
function BI(t, e, { blocked: n, upgrade: r, blocking: i, terminated: s } = {}) {
  const o = indexedDB.open(t, e),
    l = ir(o)
  return (
    r &&
      o.addEventListener('upgradeneeded', (u) => {
        r(ir(o.result), u.oldVersion, u.newVersion, ir(o.transaction), u)
      }),
    n && o.addEventListener('blocked', (u) => n(u.oldVersion, u.newVersion, u)),
    l
      .then((u) => {
        s && u.addEventListener('close', () => s()),
          i &&
            u.addEventListener('versionchange', (h) =>
              i(h.oldVersion, h.newVersion, h)
            )
      })
      .catch(() => {}),
    l
  )
}
const zI = ['get', 'getKey', 'getAll', 'getAllKeys', 'count'],
  $I = ['put', 'add', 'delete', 'clear'],
  gc = new Map()
function Qm(t, e) {
  if (!(t instanceof IDBDatabase && !(e in t) && typeof e == 'string')) return
  if (gc.get(e)) return gc.get(e)
  const n = e.replace(/FromIndex$/, ''),
    r = e !== n,
    i = $I.includes(n)
  if (
    !(n in (r ? IDBIndex : IDBObjectStore).prototype) ||
    !(i || zI.includes(n))
  )
    return
  const s = async function (o, ...l) {
    const u = this.transaction(o, i ? 'readwrite' : 'readonly')
    let h = u.store
    return (
      r && (h = h.index(l.shift())),
      (await Promise.all([h[n](...l), i && u.done]))[0]
    )
  }
  return gc.set(e, s), s
}
FI((t) => ({
  ...t,
  get: (e, n, r) => Qm(e, n) || t.get(e, n, r),
  has: (e, n) => !!Qm(e, n) || t.has(e, n),
}))
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class HI {
  constructor(e) {
    this.container = e
  }
  getPlatformInfoString() {
    return this.container
      .getProviders()
      .map((n) => {
        if (WI(n)) {
          const r = n.getImmediate()
          return `${r.library}/${r.version}`
        } else return null
      })
      .filter((n) => n)
      .join(' ')
  }
}
function WI(t) {
  const e = t.getComponent()
  return (e == null ? void 0 : e.type) === 'VERSION'
}
const Th = '@firebase/app',
  Ym = '0.10.10'
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const In = new Fd('@firebase/app'),
  KI = '@firebase/app-compat',
  qI = '@firebase/analytics-compat',
  GI = '@firebase/analytics',
  QI = '@firebase/app-check-compat',
  YI = '@firebase/app-check',
  XI = '@firebase/auth',
  JI = '@firebase/auth-compat',
  ZI = '@firebase/database',
  eS = '@firebase/database-compat',
  tS = '@firebase/functions',
  nS = '@firebase/functions-compat',
  rS = '@firebase/installations',
  iS = '@firebase/installations-compat',
  sS = '@firebase/messaging',
  oS = '@firebase/messaging-compat',
  aS = '@firebase/performance',
  lS = '@firebase/performance-compat',
  uS = '@firebase/remote-config',
  cS = '@firebase/remote-config-compat',
  hS = '@firebase/storage',
  dS = '@firebase/storage-compat',
  fS = '@firebase/firestore',
  pS = '@firebase/vertexai-preview',
  mS = '@firebase/firestore-compat',
  gS = 'firebase',
  yS = '10.13.1'
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Ih = '[DEFAULT]',
  vS = {
    [Th]: 'fire-core',
    [KI]: 'fire-core-compat',
    [GI]: 'fire-analytics',
    [qI]: 'fire-analytics-compat',
    [YI]: 'fire-app-check',
    [QI]: 'fire-app-check-compat',
    [XI]: 'fire-auth',
    [JI]: 'fire-auth-compat',
    [ZI]: 'fire-rtdb',
    [eS]: 'fire-rtdb-compat',
    [tS]: 'fire-fn',
    [nS]: 'fire-fn-compat',
    [rS]: 'fire-iid',
    [iS]: 'fire-iid-compat',
    [sS]: 'fire-fcm',
    [oS]: 'fire-fcm-compat',
    [aS]: 'fire-perf',
    [lS]: 'fire-perf-compat',
    [uS]: 'fire-rc',
    [cS]: 'fire-rc-compat',
    [hS]: 'fire-gcs',
    [dS]: 'fire-gcs-compat',
    [fS]: 'fire-fst',
    [mS]: 'fire-fst-compat',
    [pS]: 'fire-vertex',
    'fire-js': 'fire-js',
    [gS]: 'fire-js-all',
  }
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Tl = new Map(),
  _S = new Map(),
  Sh = new Map()
function Xm(t, e) {
  try {
    t.container.addComponent(e)
  } catch (n) {
    In.debug(
      `Component ${e.name} failed to register with FirebaseApp ${t.name}`,
      n
    )
  }
}
function Oi(t) {
  const e = t.name
  if (Sh.has(e))
    return (
      In.debug(`There were multiple attempts to register component ${e}.`), !1
    )
  Sh.set(e, t)
  for (const n of Tl.values()) Xm(n, t)
  for (const n of _S.values()) Xm(n, t)
  return !0
}
function Ud(t, e) {
  const n = t.container.getProvider('heartbeat').getImmediate({ optional: !0 })
  return n && n.triggerHeartbeat(), t.container.getProvider(e)
}
function bt(t) {
  return t.settings !== void 0
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ES = {
    'no-app':
      "No Firebase App '{$appName}' has been created - call initializeApp() first",
    'bad-app-name': "Illegal App name: '{$appName}'",
    'duplicate-app':
      "Firebase App named '{$appName}' already exists with different options or config",
    'app-deleted': "Firebase App named '{$appName}' already deleted",
    'server-app-deleted': 'Firebase Server App has been deleted',
    'no-options':
      'Need to provide options, when not being deployed to hosting via source.',
    'invalid-app-argument':
      'firebase.{$appName}() takes either no argument or a Firebase App instance.',
    'invalid-log-argument':
      'First argument to `onLog` must be null or a function.',
    'idb-open':
      'Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.',
    'idb-get':
      'Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.',
    'idb-set':
      'Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.',
    'idb-delete':
      'Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.',
    'finalization-registry-not-supported':
      'FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.',
    'invalid-server-app-environment':
      'FirebaseServerApp is not for use in browser environments.',
  },
  sr = new Po('app', 'Firebase', ES)
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class wS {
  constructor(e, n, r) {
    ;(this._isDeleted = !1),
      (this._options = Object.assign({}, e)),
      (this._config = Object.assign({}, n)),
      (this._name = n.name),
      (this._automaticDataCollectionEnabled = n.automaticDataCollectionEnabled),
      (this._container = r),
      this.container.addComponent(new Fr('app', () => this, 'PUBLIC'))
  }
  get automaticDataCollectionEnabled() {
    return this.checkDestroyed(), this._automaticDataCollectionEnabled
  }
  set automaticDataCollectionEnabled(e) {
    this.checkDestroyed(), (this._automaticDataCollectionEnabled = e)
  }
  get name() {
    return this.checkDestroyed(), this._name
  }
  get options() {
    return this.checkDestroyed(), this._options
  }
  get config() {
    return this.checkDestroyed(), this._config
  }
  get container() {
    return this._container
  }
  get isDeleted() {
    return this._isDeleted
  }
  set isDeleted(e) {
    this._isDeleted = e
  }
  checkDestroyed() {
    if (this.isDeleted) throw sr.create('app-deleted', { appName: this._name })
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const qi = yS
function Fv(t, e = {}) {
  let n = t
  typeof e != 'object' && (e = { name: e })
  const r = Object.assign({ name: Ih, automaticDataCollectionEnabled: !1 }, e),
    i = r.name
  if (typeof i != 'string' || !i)
    throw sr.create('bad-app-name', { appName: String(i) })
  if ((n || (n = Lv()), !n)) throw sr.create('no-options')
  const s = Tl.get(i)
  if (s) {
    if (wl(n, s.options) && wl(r, s.config)) return s
    throw sr.create('duplicate-app', { appName: i })
  }
  const o = new PI(i)
  for (const u of Sh.values()) o.addComponent(u)
  const l = new wS(n, r, o)
  return Tl.set(i, l), l
}
function jv(t = Ih) {
  const e = Tl.get(t)
  if (!e && t === Ih && Lv()) return Fv()
  if (!e) throw sr.create('no-app', { appName: t })
  return e
}
function or(t, e, n) {
  var r
  let i = (r = vS[t]) !== null && r !== void 0 ? r : t
  n && (i += `-${n}`)
  const s = i.match(/\s|\//),
    o = e.match(/\s|\//)
  if (s || o) {
    const l = [`Unable to register library "${i}" with version "${e}":`]
    s &&
      l.push(
        `library name "${i}" contains illegal characters (whitespace or "/")`
      ),
      s && o && l.push('and'),
      o &&
        l.push(
          `version name "${e}" contains illegal characters (whitespace or "/")`
        ),
      In.warn(l.join(' '))
    return
  }
  Oi(new Fr(`${i}-version`, () => ({ library: i, version: e }), 'VERSION'))
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const TS = 'firebase-heartbeat-database',
  IS = 1,
  ho = 'firebase-heartbeat-store'
let yc = null
function Uv() {
  return (
    yc ||
      (yc = BI(TS, IS, {
        upgrade: (t, e) => {
          switch (e) {
            case 0:
              try {
                t.createObjectStore(ho)
              } catch (n) {
                console.warn(n)
              }
          }
        },
      }).catch((t) => {
        throw sr.create('idb-open', { originalErrorMessage: t.message })
      })),
    yc
  )
}
async function SS(t) {
  try {
    const n = (await Uv()).transaction(ho),
      r = await n.objectStore(ho).get(Bv(t))
    return await n.done, r
  } catch (e) {
    if (e instanceof kn) In.warn(e.message)
    else {
      const n = sr.create('idb-get', {
        originalErrorMessage: e == null ? void 0 : e.message,
      })
      In.warn(n.message)
    }
  }
}
async function Jm(t, e) {
  try {
    const r = (await Uv()).transaction(ho, 'readwrite')
    await r.objectStore(ho).put(e, Bv(t)), await r.done
  } catch (n) {
    if (n instanceof kn) In.warn(n.message)
    else {
      const r = sr.create('idb-set', {
        originalErrorMessage: n == null ? void 0 : n.message,
      })
      In.warn(r.message)
    }
  }
}
function Bv(t) {
  return `${t.name}!${t.options.appId}`
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const CS = 1024,
  AS = 30 * 24 * 60 * 60 * 1e3
class RS {
  constructor(e) {
    ;(this.container = e), (this._heartbeatsCache = null)
    const n = this.container.getProvider('app').getImmediate()
    ;(this._storage = new kS(n)),
      (this._heartbeatsCachePromise = this._storage
        .read()
        .then((r) => ((this._heartbeatsCache = r), r)))
  }
  async triggerHeartbeat() {
    var e, n
    try {
      const i = this.container
          .getProvider('platform-logger')
          .getImmediate()
          .getPlatformInfoString(),
        s = Zm()
      return (((e = this._heartbeatsCache) === null || e === void 0
        ? void 0
        : e.heartbeats) == null &&
        ((this._heartbeatsCache = await this._heartbeatsCachePromise),
        ((n = this._heartbeatsCache) === null || n === void 0
          ? void 0
          : n.heartbeats) == null)) ||
        this._heartbeatsCache.lastSentHeartbeatDate === s ||
        this._heartbeatsCache.heartbeats.some((o) => o.date === s)
        ? void 0
        : (this._heartbeatsCache.heartbeats.push({ date: s, agent: i }),
          (this._heartbeatsCache.heartbeats =
            this._heartbeatsCache.heartbeats.filter((o) => {
              const l = new Date(o.date).valueOf()
              return Date.now() - l <= AS
            })),
          this._storage.overwrite(this._heartbeatsCache))
    } catch (r) {
      In.warn(r)
    }
  }
  async getHeartbeatsHeader() {
    var e
    try {
      if (
        (this._heartbeatsCache === null && (await this._heartbeatsCachePromise),
        ((e = this._heartbeatsCache) === null || e === void 0
          ? void 0
          : e.heartbeats) == null ||
          this._heartbeatsCache.heartbeats.length === 0)
      )
        return ''
      const n = Zm(),
        { heartbeatsToSend: r, unsentEntries: i } = PS(
          this._heartbeatsCache.heartbeats
        ),
        s = El(JSON.stringify({ version: 2, heartbeats: r }))
      return (
        (this._heartbeatsCache.lastSentHeartbeatDate = n),
        i.length > 0
          ? ((this._heartbeatsCache.heartbeats = i),
            await this._storage.overwrite(this._heartbeatsCache))
          : ((this._heartbeatsCache.heartbeats = []),
            this._storage.overwrite(this._heartbeatsCache)),
        s
      )
    } catch (n) {
      return In.warn(n), ''
    }
  }
}
function Zm() {
  return new Date().toISOString().substring(0, 10)
}
function PS(t, e = CS) {
  const n = []
  let r = t.slice()
  for (const i of t) {
    const s = n.find((o) => o.agent === i.agent)
    if (s) {
      if ((s.dates.push(i.date), eg(n) > e)) {
        s.dates.pop()
        break
      }
    } else if ((n.push({ agent: i.agent, dates: [i.date] }), eg(n) > e)) {
      n.pop()
      break
    }
    r = r.slice(1)
  }
  return { heartbeatsToSend: n, unsentEntries: r }
}
class kS {
  constructor(e) {
    ;(this.app = e),
      (this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck())
  }
  async runIndexedDBEnvironmentCheck() {
    return gI()
      ? yI()
          .then(() => !0)
          .catch(() => !1)
      : !1
  }
  async read() {
    if (await this._canUseIndexedDBPromise) {
      const n = await SS(this.app)
      return n != null && n.heartbeats ? n : { heartbeats: [] }
    } else return { heartbeats: [] }
  }
  async overwrite(e) {
    var n
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read()
      return Jm(this.app, {
        lastSentHeartbeatDate:
          (n = e.lastSentHeartbeatDate) !== null && n !== void 0
            ? n
            : i.lastSentHeartbeatDate,
        heartbeats: e.heartbeats,
      })
    } else return
  }
  async add(e) {
    var n
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read()
      return Jm(this.app, {
        lastSentHeartbeatDate:
          (n = e.lastSentHeartbeatDate) !== null && n !== void 0
            ? n
            : i.lastSentHeartbeatDate,
        heartbeats: [...i.heartbeats, ...e.heartbeats],
      })
    } else return
  }
}
function eg(t) {
  return El(JSON.stringify({ version: 2, heartbeats: t })).length
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function xS(t) {
  Oi(new Fr('platform-logger', (e) => new HI(e), 'PRIVATE')),
    Oi(new Fr('heartbeat', (e) => new RS(e), 'PRIVATE')),
    or(Th, Ym, t),
    or(Th, Ym, 'esm2017'),
    or('fire-js', '')
}
xS('')
function Bd(t, e) {
  var n = {}
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) &&
      e.indexOf(r) < 0 &&
      (n[r] = t[r])
  if (t != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++)
      e.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
        (n[r[i]] = t[r[i]])
  return n
}
function zv() {
  return {
    'dependent-sdk-initialized-before-auth':
      'Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.',
  }
}
const NS = zv,
  $v = new Po('auth', 'Firebase', zv())
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Il = new Fd('@firebase/auth')
function DS(t, ...e) {
  Il.logLevel <= te.WARN && Il.warn(`Auth (${qi}): ${t}`, ...e)
}
function Ua(t, ...e) {
  Il.logLevel <= te.ERROR && Il.error(`Auth (${qi}): ${t}`, ...e)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function zt(t, ...e) {
  throw zd(t, ...e)
}
function Gt(t, ...e) {
  return zd(t, ...e)
}
function Hv(t, e, n) {
  const r = Object.assign(Object.assign({}, NS()), { [e]: n })
  return new Po('auth', 'Firebase', r).create(e, { appName: t.name })
}
function Qt(t) {
  return Hv(
    t,
    'operation-not-supported-in-this-environment',
    'Operations that alter the current user are not supported in conjunction with FirebaseServerApp'
  )
}
function zd(t, ...e) {
  if (typeof t != 'string') {
    const n = e[0],
      r = [...e.slice(1)]
    return r[0] && (r[0].appName = t.name), t._errorFactory.create(n, ...r)
  }
  return $v.create(t, ...e)
}
function W(t, e, ...n) {
  if (!t) throw zd(e, ...n)
}
function pn(t) {
  const e = 'INTERNAL ASSERTION FAILED: ' + t
  throw (Ua(e), new Error(e))
}
function Sn(t, e) {
  t || pn(e)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Sl() {
  var t
  return (
    (typeof self < 'u' &&
      ((t = self.location) === null || t === void 0 ? void 0 : t.href)) ||
    ''
  )
}
function OS() {
  return tg() === 'http:' || tg() === 'https:'
}
function tg() {
  var t
  return (
    (typeof self < 'u' &&
      ((t = self.location) === null || t === void 0 ? void 0 : t.protocol)) ||
    null
  )
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function LS() {
  return typeof navigator < 'u' &&
    navigator &&
    'onLine' in navigator &&
    typeof navigator.onLine == 'boolean' &&
    (OS() || dI() || 'connection' in navigator)
    ? navigator.onLine
    : !0
}
function VS() {
  if (typeof navigator > 'u') return null
  const t = navigator
  return (t.languages && t.languages[0]) || t.language || null
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class xo {
  constructor(e, n) {
    ;(this.shortDelay = e),
      (this.longDelay = n),
      Sn(n > e, 'Short delay should be less than long delay!'),
      (this.isMobile = cI() || fI())
  }
  get() {
    return LS()
      ? this.isMobile
        ? this.longDelay
        : this.shortDelay
      : Math.min(5e3, this.shortDelay)
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function $d(t, e) {
  Sn(t.emulator, 'Emulator should always be set here')
  const { url: n } = t.emulator
  return e ? `${n}${e.startsWith('/') ? e.slice(1) : e}` : n
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Wv {
  static initialize(e, n, r) {
    ;(this.fetchImpl = e),
      n && (this.headersImpl = n),
      r && (this.responseImpl = r)
  }
  static fetch() {
    if (this.fetchImpl) return this.fetchImpl
    if (typeof self < 'u' && 'fetch' in self) return self.fetch
    if (typeof globalThis < 'u' && globalThis.fetch) return globalThis.fetch
    if (typeof fetch < 'u') return fetch
    pn(
      'Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill'
    )
  }
  static headers() {
    if (this.headersImpl) return this.headersImpl
    if (typeof self < 'u' && 'Headers' in self) return self.Headers
    if (typeof globalThis < 'u' && globalThis.Headers) return globalThis.Headers
    if (typeof Headers < 'u') return Headers
    pn(
      'Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill'
    )
  }
  static response() {
    if (this.responseImpl) return this.responseImpl
    if (typeof self < 'u' && 'Response' in self) return self.Response
    if (typeof globalThis < 'u' && globalThis.Response)
      return globalThis.Response
    if (typeof Response < 'u') return Response
    pn(
      'Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill'
    )
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const MS = {
  CREDENTIAL_MISMATCH: 'custom-token-mismatch',
  MISSING_CUSTOM_TOKEN: 'internal-error',
  INVALID_IDENTIFIER: 'invalid-email',
  MISSING_CONTINUE_URI: 'internal-error',
  INVALID_PASSWORD: 'wrong-password',
  MISSING_PASSWORD: 'missing-password',
  INVALID_LOGIN_CREDENTIALS: 'invalid-credential',
  EMAIL_EXISTS: 'email-already-in-use',
  PASSWORD_LOGIN_DISABLED: 'operation-not-allowed',
  INVALID_IDP_RESPONSE: 'invalid-credential',
  INVALID_PENDING_TOKEN: 'invalid-credential',
  FEDERATED_USER_ID_ALREADY_LINKED: 'credential-already-in-use',
  MISSING_REQ_TYPE: 'internal-error',
  EMAIL_NOT_FOUND: 'user-not-found',
  RESET_PASSWORD_EXCEED_LIMIT: 'too-many-requests',
  EXPIRED_OOB_CODE: 'expired-action-code',
  INVALID_OOB_CODE: 'invalid-action-code',
  MISSING_OOB_CODE: 'internal-error',
  CREDENTIAL_TOO_OLD_LOGIN_AGAIN: 'requires-recent-login',
  INVALID_ID_TOKEN: 'invalid-user-token',
  TOKEN_EXPIRED: 'user-token-expired',
  USER_NOT_FOUND: 'user-token-expired',
  TOO_MANY_ATTEMPTS_TRY_LATER: 'too-many-requests',
  PASSWORD_DOES_NOT_MEET_REQUIREMENTS: 'password-does-not-meet-requirements',
  INVALID_CODE: 'invalid-verification-code',
  INVALID_SESSION_INFO: 'invalid-verification-id',
  INVALID_TEMPORARY_PROOF: 'invalid-credential',
  MISSING_SESSION_INFO: 'missing-verification-id',
  SESSION_EXPIRED: 'code-expired',
  MISSING_ANDROID_PACKAGE_NAME: 'missing-android-pkg-name',
  UNAUTHORIZED_DOMAIN: 'unauthorized-continue-uri',
  INVALID_OAUTH_CLIENT_ID: 'invalid-oauth-client-id',
  ADMIN_ONLY_OPERATION: 'admin-restricted-operation',
  INVALID_MFA_PENDING_CREDENTIAL: 'invalid-multi-factor-session',
  MFA_ENROLLMENT_NOT_FOUND: 'multi-factor-info-not-found',
  MISSING_MFA_ENROLLMENT_ID: 'missing-multi-factor-info',
  MISSING_MFA_PENDING_CREDENTIAL: 'missing-multi-factor-session',
  SECOND_FACTOR_EXISTS: 'second-factor-already-in-use',
  SECOND_FACTOR_LIMIT_EXCEEDED: 'maximum-second-factor-count-exceeded',
  BLOCKING_FUNCTION_ERROR_RESPONSE: 'internal-error',
  RECAPTCHA_NOT_ENABLED: 'recaptcha-not-enabled',
  MISSING_RECAPTCHA_TOKEN: 'missing-recaptcha-token',
  INVALID_RECAPTCHA_TOKEN: 'invalid-recaptcha-token',
  INVALID_RECAPTCHA_ACTION: 'invalid-recaptcha-action',
  MISSING_CLIENT_TYPE: 'missing-client-type',
  MISSING_RECAPTCHA_VERSION: 'missing-recaptcha-version',
  INVALID_RECAPTCHA_VERSION: 'invalid-recaptcha-version',
  INVALID_REQ_TYPE: 'invalid-req-type',
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const bS = new xo(3e4, 6e4)
function xn(t, e) {
  return t.tenantId && !e.tenantId
    ? Object.assign(Object.assign({}, e), { tenantId: t.tenantId })
    : e
}
async function Nn(t, e, n, r, i = {}) {
  return Kv(t, i, async () => {
    let s = {},
      o = {}
    r && (e === 'GET' ? (o = r) : (s = { body: JSON.stringify(r) }))
    const l = ko(Object.assign({ key: t.config.apiKey }, o)).slice(1),
      u = await t._getAdditionalHeaders()
    return (
      (u['Content-Type'] = 'application/json'),
      t.languageCode && (u['X-Firebase-Locale'] = t.languageCode),
      Wv.fetch()(
        qv(t, t.config.apiHost, n, l),
        Object.assign(
          { method: e, headers: u, referrerPolicy: 'no-referrer' },
          s
        )
      )
    )
  })
}
async function Kv(t, e, n) {
  t._canInitEmulator = !1
  const r = Object.assign(Object.assign({}, MS), e)
  try {
    const i = new jS(t),
      s = await Promise.race([n(), i.promise])
    i.clearNetworkTimeout()
    const o = await s.json()
    if ('needConfirmation' in o)
      throw wa(t, 'account-exists-with-different-credential', o)
    if (s.ok && !('errorMessage' in o)) return o
    {
      const l = s.ok ? o.errorMessage : o.error.message,
        [u, h] = l.split(' : ')
      if (u === 'FEDERATED_USER_ID_ALREADY_LINKED')
        throw wa(t, 'credential-already-in-use', o)
      if (u === 'EMAIL_EXISTS') throw wa(t, 'email-already-in-use', o)
      if (u === 'USER_DISABLED') throw wa(t, 'user-disabled', o)
      const f = r[u] || u.toLowerCase().replace(/[_\s]+/g, '-')
      if (h) throw Hv(t, f, h)
      zt(t, f)
    }
  } catch (i) {
    if (i instanceof kn) throw i
    zt(t, 'network-request-failed', { message: String(i) })
  }
}
async function No(t, e, n, r, i = {}) {
  const s = await Nn(t, e, n, r, i)
  return (
    'mfaPendingCredential' in s &&
      zt(t, 'multi-factor-auth-required', { _serverResponse: s }),
    s
  )
}
function qv(t, e, n, r) {
  const i = `${e}${n}?${r}`
  return t.config.emulator ? $d(t.config, i) : `${t.config.apiScheme}://${i}`
}
function FS(t) {
  switch (t) {
    case 'ENFORCE':
      return 'ENFORCE'
    case 'AUDIT':
      return 'AUDIT'
    case 'OFF':
      return 'OFF'
    default:
      return 'ENFORCEMENT_STATE_UNSPECIFIED'
  }
}
class jS {
  constructor(e) {
    ;(this.auth = e),
      (this.timer = null),
      (this.promise = new Promise((n, r) => {
        this.timer = setTimeout(
          () => r(Gt(this.auth, 'network-request-failed')),
          bS.get()
        )
      }))
  }
  clearNetworkTimeout() {
    clearTimeout(this.timer)
  }
}
function wa(t, e, n) {
  const r = { appName: t.name }
  n.email && (r.email = n.email),
    n.phoneNumber && (r.phoneNumber = n.phoneNumber)
  const i = Gt(t, e, r)
  return (i.customData._tokenResponse = n), i
}
function ng(t) {
  return t !== void 0 && t.enterprise !== void 0
}
class US {
  constructor(e) {
    if (
      ((this.siteKey = ''),
      (this.recaptchaEnforcementState = []),
      e.recaptchaKey === void 0)
    )
      throw new Error('recaptchaKey undefined')
    ;(this.siteKey = e.recaptchaKey.split('/')[3]),
      (this.recaptchaEnforcementState = e.recaptchaEnforcementState)
  }
  getProviderEnforcementState(e) {
    if (
      !this.recaptchaEnforcementState ||
      this.recaptchaEnforcementState.length === 0
    )
      return null
    for (const n of this.recaptchaEnforcementState)
      if (n.provider && n.provider === e) return FS(n.enforcementState)
    return null
  }
  isProviderEnabled(e) {
    return (
      this.getProviderEnforcementState(e) === 'ENFORCE' ||
      this.getProviderEnforcementState(e) === 'AUDIT'
    )
  }
}
async function BS(t, e) {
  return Nn(t, 'GET', '/v2/recaptchaConfig', xn(t, e))
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function zS(t, e) {
  return Nn(t, 'POST', '/v1/accounts:delete', e)
}
async function Gv(t, e) {
  return Nn(t, 'POST', '/v1/accounts:lookup', e)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Bs(t) {
  if (t)
    try {
      const e = new Date(Number(t))
      if (!isNaN(e.getTime())) return e.toUTCString()
    } catch {}
}
async function $S(t, e = !1) {
  const n = mt(t),
    r = await n.getIdToken(e),
    i = Hd(r)
  W(i && i.exp && i.auth_time && i.iat, n.auth, 'internal-error')
  const s = typeof i.firebase == 'object' ? i.firebase : void 0,
    o = s == null ? void 0 : s.sign_in_provider
  return {
    claims: i,
    token: r,
    authTime: Bs(vc(i.auth_time)),
    issuedAtTime: Bs(vc(i.iat)),
    expirationTime: Bs(vc(i.exp)),
    signInProvider: o || null,
    signInSecondFactor: (s == null ? void 0 : s.sign_in_second_factor) || null,
  }
}
function vc(t) {
  return Number(t) * 1e3
}
function Hd(t) {
  const [e, n, r] = t.split('.')
  if (e === void 0 || n === void 0 || r === void 0)
    return Ua('JWT malformed, contained fewer than 3 sections'), null
  try {
    const i = Dv(n)
    return i ? JSON.parse(i) : (Ua('Failed to decode base64 JWT payload'), null)
  } catch (i) {
    return (
      Ua(
        'Caught error parsing JWT payload as JSON',
        i == null ? void 0 : i.toString()
      ),
      null
    )
  }
}
function rg(t) {
  const e = Hd(t)
  return (
    W(e, 'internal-error'),
    W(typeof e.exp < 'u', 'internal-error'),
    W(typeof e.iat < 'u', 'internal-error'),
    Number(e.exp) - Number(e.iat)
  )
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function fo(t, e, n = !1) {
  if (n) return e
  try {
    return await e
  } catch (r) {
    throw (
      (r instanceof kn &&
        HS(r) &&
        t.auth.currentUser === t &&
        (await t.auth.signOut()),
      r)
    )
  }
}
function HS({ code: t }) {
  return t === 'auth/user-disabled' || t === 'auth/user-token-expired'
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class WS {
  constructor(e) {
    ;(this.user = e),
      (this.isRunning = !1),
      (this.timerId = null),
      (this.errorBackoff = 3e4)
  }
  _start() {
    this.isRunning || ((this.isRunning = !0), this.schedule())
  }
  _stop() {
    this.isRunning &&
      ((this.isRunning = !1),
      this.timerId !== null && clearTimeout(this.timerId))
  }
  getInterval(e) {
    var n
    if (e) {
      const r = this.errorBackoff
      return (this.errorBackoff = Math.min(this.errorBackoff * 2, 96e4)), r
    } else {
      this.errorBackoff = 3e4
      const i =
        ((n = this.user.stsTokenManager.expirationTime) !== null && n !== void 0
          ? n
          : 0) -
        Date.now() -
        3e5
      return Math.max(0, i)
    }
  }
  schedule(e = !1) {
    if (!this.isRunning) return
    const n = this.getInterval(e)
    this.timerId = setTimeout(async () => {
      await this.iteration()
    }, n)
  }
  async iteration() {
    try {
      await this.user.getIdToken(!0)
    } catch (e) {
      ;(e == null ? void 0 : e.code) === 'auth/network-request-failed' &&
        this.schedule(!0)
      return
    }
    this.schedule()
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ch {
  constructor(e, n) {
    ;(this.createdAt = e), (this.lastLoginAt = n), this._initializeTime()
  }
  _initializeTime() {
    ;(this.lastSignInTime = Bs(this.lastLoginAt)),
      (this.creationTime = Bs(this.createdAt))
  }
  _copy(e) {
    ;(this.createdAt = e.createdAt),
      (this.lastLoginAt = e.lastLoginAt),
      this._initializeTime()
  }
  toJSON() {
    return { createdAt: this.createdAt, lastLoginAt: this.lastLoginAt }
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Cl(t) {
  var e
  const n = t.auth,
    r = await t.getIdToken(),
    i = await fo(t, Gv(n, { idToken: r }))
  W(i == null ? void 0 : i.users.length, n, 'internal-error')
  const s = i.users[0]
  t._notifyReloadListener(s)
  const o =
      !((e = s.providerUserInfo) === null || e === void 0) && e.length
        ? Qv(s.providerUserInfo)
        : [],
    l = qS(t.providerData, o),
    u = t.isAnonymous,
    h = !(t.email && s.passwordHash) && !(l != null && l.length),
    f = u ? h : !1,
    p = {
      uid: s.localId,
      displayName: s.displayName || null,
      photoURL: s.photoUrl || null,
      email: s.email || null,
      emailVerified: s.emailVerified || !1,
      phoneNumber: s.phoneNumber || null,
      tenantId: s.tenantId || null,
      providerData: l,
      metadata: new Ch(s.createdAt, s.lastLoginAt),
      isAnonymous: f,
    }
  Object.assign(t, p)
}
async function KS(t) {
  const e = mt(t)
  await Cl(e),
    await e.auth._persistUserIfCurrent(e),
    e.auth._notifyListenersIfCurrent(e)
}
function qS(t, e) {
  return [
    ...t.filter((r) => !e.some((i) => i.providerId === r.providerId)),
    ...e,
  ]
}
function Qv(t) {
  return t.map((e) => {
    var { providerId: n } = e,
      r = Bd(e, ['providerId'])
    return {
      providerId: n,
      uid: r.rawId || '',
      displayName: r.displayName || null,
      email: r.email || null,
      phoneNumber: r.phoneNumber || null,
      photoURL: r.photoUrl || null,
    }
  })
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function GS(t, e) {
  const n = await Kv(t, {}, async () => {
    const r = ko({ grant_type: 'refresh_token', refresh_token: e }).slice(1),
      { tokenApiHost: i, apiKey: s } = t.config,
      o = qv(t, i, '/v1/token', `key=${s}`),
      l = await t._getAdditionalHeaders()
    return (
      (l['Content-Type'] = 'application/x-www-form-urlencoded'),
      Wv.fetch()(o, { method: 'POST', headers: l, body: r })
    )
  })
  return {
    accessToken: n.access_token,
    expiresIn: n.expires_in,
    refreshToken: n.refresh_token,
  }
}
async function QS(t, e) {
  return Nn(t, 'POST', '/v2/accounts:revokeToken', xn(t, e))
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ti {
  constructor() {
    ;(this.refreshToken = null),
      (this.accessToken = null),
      (this.expirationTime = null)
  }
  get isExpired() {
    return !this.expirationTime || Date.now() > this.expirationTime - 3e4
  }
  updateFromServerResponse(e) {
    W(e.idToken, 'internal-error'),
      W(typeof e.idToken < 'u', 'internal-error'),
      W(typeof e.refreshToken < 'u', 'internal-error')
    const n =
      'expiresIn' in e && typeof e.expiresIn < 'u'
        ? Number(e.expiresIn)
        : rg(e.idToken)
    this.updateTokensAndExpiration(e.idToken, e.refreshToken, n)
  }
  updateFromIdToken(e) {
    W(e.length !== 0, 'internal-error')
    const n = rg(e)
    this.updateTokensAndExpiration(e, null, n)
  }
  async getToken(e, n = !1) {
    return !n && this.accessToken && !this.isExpired
      ? this.accessToken
      : (W(this.refreshToken, e, 'user-token-expired'),
        this.refreshToken
          ? (await this.refresh(e, this.refreshToken), this.accessToken)
          : null)
  }
  clearRefreshToken() {
    this.refreshToken = null
  }
  async refresh(e, n) {
    const { accessToken: r, refreshToken: i, expiresIn: s } = await GS(e, n)
    this.updateTokensAndExpiration(r, i, Number(s))
  }
  updateTokensAndExpiration(e, n, r) {
    ;(this.refreshToken = n || null),
      (this.accessToken = e || null),
      (this.expirationTime = Date.now() + r * 1e3)
  }
  static fromJSON(e, n) {
    const { refreshToken: r, accessToken: i, expirationTime: s } = n,
      o = new Ti()
    return (
      r &&
        (W(typeof r == 'string', 'internal-error', { appName: e }),
        (o.refreshToken = r)),
      i &&
        (W(typeof i == 'string', 'internal-error', { appName: e }),
        (o.accessToken = i)),
      s &&
        (W(typeof s == 'number', 'internal-error', { appName: e }),
        (o.expirationTime = s)),
      o
    )
  }
  toJSON() {
    return {
      refreshToken: this.refreshToken,
      accessToken: this.accessToken,
      expirationTime: this.expirationTime,
    }
  }
  _assign(e) {
    ;(this.accessToken = e.accessToken),
      (this.refreshToken = e.refreshToken),
      (this.expirationTime = e.expirationTime)
  }
  _clone() {
    return Object.assign(new Ti(), this.toJSON())
  }
  _performRefresh() {
    return pn('not implemented')
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Mn(t, e) {
  W(typeof t == 'string' || typeof t > 'u', 'internal-error', { appName: e })
}
class mn {
  constructor(e) {
    var { uid: n, auth: r, stsTokenManager: i } = e,
      s = Bd(e, ['uid', 'auth', 'stsTokenManager'])
    ;(this.providerId = 'firebase'),
      (this.proactiveRefresh = new WS(this)),
      (this.reloadUserInfo = null),
      (this.reloadListener = null),
      (this.uid = n),
      (this.auth = r),
      (this.stsTokenManager = i),
      (this.accessToken = i.accessToken),
      (this.displayName = s.displayName || null),
      (this.email = s.email || null),
      (this.emailVerified = s.emailVerified || !1),
      (this.phoneNumber = s.phoneNumber || null),
      (this.photoURL = s.photoURL || null),
      (this.isAnonymous = s.isAnonymous || !1),
      (this.tenantId = s.tenantId || null),
      (this.providerData = s.providerData ? [...s.providerData] : []),
      (this.metadata = new Ch(s.createdAt || void 0, s.lastLoginAt || void 0))
  }
  async getIdToken(e) {
    const n = await fo(this, this.stsTokenManager.getToken(this.auth, e))
    return (
      W(n, this.auth, 'internal-error'),
      this.accessToken !== n &&
        ((this.accessToken = n),
        await this.auth._persistUserIfCurrent(this),
        this.auth._notifyListenersIfCurrent(this)),
      n
    )
  }
  getIdTokenResult(e) {
    return $S(this, e)
  }
  reload() {
    return KS(this)
  }
  _assign(e) {
    this !== e &&
      (W(this.uid === e.uid, this.auth, 'internal-error'),
      (this.displayName = e.displayName),
      (this.photoURL = e.photoURL),
      (this.email = e.email),
      (this.emailVerified = e.emailVerified),
      (this.phoneNumber = e.phoneNumber),
      (this.isAnonymous = e.isAnonymous),
      (this.tenantId = e.tenantId),
      (this.providerData = e.providerData.map((n) => Object.assign({}, n))),
      this.metadata._copy(e.metadata),
      this.stsTokenManager._assign(e.stsTokenManager))
  }
  _clone(e) {
    const n = new mn(
      Object.assign(Object.assign({}, this), {
        auth: e,
        stsTokenManager: this.stsTokenManager._clone(),
      })
    )
    return n.metadata._copy(this.metadata), n
  }
  _onReload(e) {
    W(!this.reloadListener, this.auth, 'internal-error'),
      (this.reloadListener = e),
      this.reloadUserInfo &&
        (this._notifyReloadListener(this.reloadUserInfo),
        (this.reloadUserInfo = null))
  }
  _notifyReloadListener(e) {
    this.reloadListener ? this.reloadListener(e) : (this.reloadUserInfo = e)
  }
  _startProactiveRefresh() {
    this.proactiveRefresh._start()
  }
  _stopProactiveRefresh() {
    this.proactiveRefresh._stop()
  }
  async _updateTokensIfNecessary(e, n = !1) {
    let r = !1
    e.idToken &&
      e.idToken !== this.stsTokenManager.accessToken &&
      (this.stsTokenManager.updateFromServerResponse(e), (r = !0)),
      n && (await Cl(this)),
      await this.auth._persistUserIfCurrent(this),
      r && this.auth._notifyListenersIfCurrent(this)
  }
  async delete() {
    if (bt(this.auth.app)) return Promise.reject(Qt(this.auth))
    const e = await this.getIdToken()
    return (
      await fo(this, zS(this.auth, { idToken: e })),
      this.stsTokenManager.clearRefreshToken(),
      this.auth.signOut()
    )
  }
  toJSON() {
    return Object.assign(
      Object.assign(
        {
          uid: this.uid,
          email: this.email || void 0,
          emailVerified: this.emailVerified,
          displayName: this.displayName || void 0,
          isAnonymous: this.isAnonymous,
          photoURL: this.photoURL || void 0,
          phoneNumber: this.phoneNumber || void 0,
          tenantId: this.tenantId || void 0,
          providerData: this.providerData.map((e) => Object.assign({}, e)),
          stsTokenManager: this.stsTokenManager.toJSON(),
          _redirectEventId: this._redirectEventId,
        },
        this.metadata.toJSON()
      ),
      { apiKey: this.auth.config.apiKey, appName: this.auth.name }
    )
  }
  get refreshToken() {
    return this.stsTokenManager.refreshToken || ''
  }
  static _fromJSON(e, n) {
    var r, i, s, o, l, u, h, f
    const p = (r = n.displayName) !== null && r !== void 0 ? r : void 0,
      v = (i = n.email) !== null && i !== void 0 ? i : void 0,
      A = (s = n.phoneNumber) !== null && s !== void 0 ? s : void 0,
      P = (o = n.photoURL) !== null && o !== void 0 ? o : void 0,
      N = (l = n.tenantId) !== null && l !== void 0 ? l : void 0,
      D = (u = n._redirectEventId) !== null && u !== void 0 ? u : void 0,
      C = (h = n.createdAt) !== null && h !== void 0 ? h : void 0,
      _ = (f = n.lastLoginAt) !== null && f !== void 0 ? f : void 0,
      {
        uid: S,
        emailVerified: L,
        isAnonymous: U,
        providerData: j,
        stsTokenManager: w,
      } = n
    W(S && w, e, 'internal-error')
    const y = Ti.fromJSON(this.name, w)
    W(typeof S == 'string', e, 'internal-error'),
      Mn(p, e.name),
      Mn(v, e.name),
      W(typeof L == 'boolean', e, 'internal-error'),
      W(typeof U == 'boolean', e, 'internal-error'),
      Mn(A, e.name),
      Mn(P, e.name),
      Mn(N, e.name),
      Mn(D, e.name),
      Mn(C, e.name),
      Mn(_, e.name)
    const E = new mn({
      uid: S,
      auth: e,
      email: v,
      emailVerified: L,
      displayName: p,
      isAnonymous: U,
      photoURL: P,
      phoneNumber: A,
      tenantId: N,
      stsTokenManager: y,
      createdAt: C,
      lastLoginAt: _,
    })
    return (
      j &&
        Array.isArray(j) &&
        (E.providerData = j.map((T) => Object.assign({}, T))),
      D && (E._redirectEventId = D),
      E
    )
  }
  static async _fromIdTokenResponse(e, n, r = !1) {
    const i = new Ti()
    i.updateFromServerResponse(n)
    const s = new mn({
      uid: n.localId,
      auth: e,
      stsTokenManager: i,
      isAnonymous: r,
    })
    return await Cl(s), s
  }
  static async _fromGetAccountInfoResponse(e, n, r) {
    const i = n.users[0]
    W(i.localId !== void 0, 'internal-error')
    const s = i.providerUserInfo !== void 0 ? Qv(i.providerUserInfo) : [],
      o = !(i.email && i.passwordHash) && !(s != null && s.length),
      l = new Ti()
    l.updateFromIdToken(r)
    const u = new mn({
        uid: i.localId,
        auth: e,
        stsTokenManager: l,
        isAnonymous: o,
      }),
      h = {
        uid: i.localId,
        displayName: i.displayName || null,
        photoURL: i.photoUrl || null,
        email: i.email || null,
        emailVerified: i.emailVerified || !1,
        phoneNumber: i.phoneNumber || null,
        tenantId: i.tenantId || null,
        providerData: s,
        metadata: new Ch(i.createdAt, i.lastLoginAt),
        isAnonymous: !(i.email && i.passwordHash) && !(s != null && s.length),
      }
    return Object.assign(u, h), u
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ig = new Map()
function gn(t) {
  Sn(t instanceof Function, 'Expected a class definition')
  let e = ig.get(t)
  return e
    ? (Sn(e instanceof t, 'Instance stored in cache mismatched with class'), e)
    : ((e = new t()), ig.set(t, e), e)
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Yv {
  constructor() {
    ;(this.type = 'NONE'), (this.storage = {})
  }
  async _isAvailable() {
    return !0
  }
  async _set(e, n) {
    this.storage[e] = n
  }
  async _get(e) {
    const n = this.storage[e]
    return n === void 0 ? null : n
  }
  async _remove(e) {
    delete this.storage[e]
  }
  _addListener(e, n) {}
  _removeListener(e, n) {}
}
Yv.type = 'NONE'
const sg = Yv
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Ba(t, e, n) {
  return `firebase:${t}:${e}:${n}`
}
class Ii {
  constructor(e, n, r) {
    ;(this.persistence = e), (this.auth = n), (this.userKey = r)
    const { config: i, name: s } = this.auth
    ;(this.fullUserKey = Ba(this.userKey, i.apiKey, s)),
      (this.fullPersistenceKey = Ba('persistence', i.apiKey, s)),
      (this.boundEventHandler = n._onStorageEvent.bind(n)),
      this.persistence._addListener(this.fullUserKey, this.boundEventHandler)
  }
  setCurrentUser(e) {
    return this.persistence._set(this.fullUserKey, e.toJSON())
  }
  async getCurrentUser() {
    const e = await this.persistence._get(this.fullUserKey)
    return e ? mn._fromJSON(this.auth, e) : null
  }
  removeCurrentUser() {
    return this.persistence._remove(this.fullUserKey)
  }
  savePersistenceForRedirect() {
    return this.persistence._set(this.fullPersistenceKey, this.persistence.type)
  }
  async setPersistence(e) {
    if (this.persistence === e) return
    const n = await this.getCurrentUser()
    if ((await this.removeCurrentUser(), (this.persistence = e), n))
      return this.setCurrentUser(n)
  }
  delete() {
    this.persistence._removeListener(this.fullUserKey, this.boundEventHandler)
  }
  static async create(e, n, r = 'authUser') {
    if (!n.length) return new Ii(gn(sg), e, r)
    const i = (
      await Promise.all(
        n.map(async (h) => {
          if (await h._isAvailable()) return h
        })
      )
    ).filter((h) => h)
    let s = i[0] || gn(sg)
    const o = Ba(r, e.config.apiKey, e.name)
    let l = null
    for (const h of n)
      try {
        const f = await h._get(o)
        if (f) {
          const p = mn._fromJSON(e, f)
          h !== s && (l = p), (s = h)
          break
        }
      } catch {}
    const u = i.filter((h) => h._shouldAllowMigration)
    return !s._shouldAllowMigration || !u.length
      ? new Ii(s, e, r)
      : ((s = u[0]),
        l && (await s._set(o, l.toJSON())),
        await Promise.all(
          n.map(async (h) => {
            if (h !== s)
              try {
                await h._remove(o)
              } catch {}
          })
        ),
        new Ii(s, e, r))
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function og(t) {
  const e = t.toLowerCase()
  if (e.includes('opera/') || e.includes('opr/') || e.includes('opios/'))
    return 'Opera'
  if (e_(e)) return 'IEMobile'
  if (e.includes('msie') || e.includes('trident/')) return 'IE'
  if (e.includes('edge/')) return 'Edge'
  if (Xv(e)) return 'Firefox'
  if (e.includes('silk/')) return 'Silk'
  if (n_(e)) return 'Blackberry'
  if (r_(e)) return 'Webos'
  if (Jv(e)) return 'Safari'
  if ((e.includes('chrome/') || Zv(e)) && !e.includes('edge/')) return 'Chrome'
  if (t_(e)) return 'Android'
  {
    const n = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
      r = t.match(n)
    if ((r == null ? void 0 : r.length) === 2) return r[1]
  }
  return 'Other'
}
function Xv(t = tt()) {
  return /firefox\//i.test(t)
}
function Jv(t = tt()) {
  const e = t.toLowerCase()
  return (
    e.includes('safari/') &&
    !e.includes('chrome/') &&
    !e.includes('crios/') &&
    !e.includes('android')
  )
}
function Zv(t = tt()) {
  return /crios\//i.test(t)
}
function e_(t = tt()) {
  return /iemobile/i.test(t)
}
function t_(t = tt()) {
  return /android/i.test(t)
}
function n_(t = tt()) {
  return /blackberry/i.test(t)
}
function r_(t = tt()) {
  return /webos/i.test(t)
}
function Wd(t = tt()) {
  return (
    /iphone|ipad|ipod/i.test(t) || (/macintosh/i.test(t) && /mobile/i.test(t))
  )
}
function YS(t = tt()) {
  var e
  return (
    Wd(t) &&
    !!(!((e = window.navigator) === null || e === void 0) && e.standalone)
  )
}
function XS() {
  return pI() && document.documentMode === 10
}
function i_(t = tt()) {
  return Wd(t) || t_(t) || r_(t) || n_(t) || /windows phone/i.test(t) || e_(t)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function s_(t, e = []) {
  let n
  switch (t) {
    case 'Browser':
      n = og(tt())
      break
    case 'Worker':
      n = `${og(tt())}-${t}`
      break
    default:
      n = t
  }
  const r = e.length ? e.join(',') : 'FirebaseCore-web'
  return `${n}/JsCore/${qi}/${r}`
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class JS {
  constructor(e) {
    ;(this.auth = e), (this.queue = [])
  }
  pushCallback(e, n) {
    const r = (s) =>
      new Promise((o, l) => {
        try {
          const u = e(s)
          o(u)
        } catch (u) {
          l(u)
        }
      })
    ;(r.onAbort = n), this.queue.push(r)
    const i = this.queue.length - 1
    return () => {
      this.queue[i] = () => Promise.resolve()
    }
  }
  async runMiddleware(e) {
    if (this.auth.currentUser === e) return
    const n = []
    try {
      for (const r of this.queue) await r(e), r.onAbort && n.push(r.onAbort)
    } catch (r) {
      n.reverse()
      for (const i of n)
        try {
          i()
        } catch {}
      throw this.auth._errorFactory.create('login-blocked', {
        originalMessage: r == null ? void 0 : r.message,
      })
    }
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function ZS(t, e = {}) {
  return Nn(t, 'GET', '/v2/passwordPolicy', xn(t, e))
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const eC = 6
class tC {
  constructor(e) {
    var n, r, i, s
    const o = e.customStrengthOptions
    ;(this.customStrengthOptions = {}),
      (this.customStrengthOptions.minPasswordLength =
        (n = o.minPasswordLength) !== null && n !== void 0 ? n : eC),
      o.maxPasswordLength &&
        (this.customStrengthOptions.maxPasswordLength = o.maxPasswordLength),
      o.containsLowercaseCharacter !== void 0 &&
        (this.customStrengthOptions.containsLowercaseLetter =
          o.containsLowercaseCharacter),
      o.containsUppercaseCharacter !== void 0 &&
        (this.customStrengthOptions.containsUppercaseLetter =
          o.containsUppercaseCharacter),
      o.containsNumericCharacter !== void 0 &&
        (this.customStrengthOptions.containsNumericCharacter =
          o.containsNumericCharacter),
      o.containsNonAlphanumericCharacter !== void 0 &&
        (this.customStrengthOptions.containsNonAlphanumericCharacter =
          o.containsNonAlphanumericCharacter),
      (this.enforcementState = e.enforcementState),
      this.enforcementState === 'ENFORCEMENT_STATE_UNSPECIFIED' &&
        (this.enforcementState = 'OFF'),
      (this.allowedNonAlphanumericCharacters =
        (i =
          (r = e.allowedNonAlphanumericCharacters) === null || r === void 0
            ? void 0
            : r.join('')) !== null && i !== void 0
          ? i
          : ''),
      (this.forceUpgradeOnSignin =
        (s = e.forceUpgradeOnSignin) !== null && s !== void 0 ? s : !1),
      (this.schemaVersion = e.schemaVersion)
  }
  validatePassword(e) {
    var n, r, i, s, o, l
    const u = { isValid: !0, passwordPolicy: this }
    return (
      this.validatePasswordLengthOptions(e, u),
      this.validatePasswordCharacterOptions(e, u),
      u.isValid &&
        (u.isValid =
          (n = u.meetsMinPasswordLength) !== null && n !== void 0 ? n : !0),
      u.isValid &&
        (u.isValid =
          (r = u.meetsMaxPasswordLength) !== null && r !== void 0 ? r : !0),
      u.isValid &&
        (u.isValid =
          (i = u.containsLowercaseLetter) !== null && i !== void 0 ? i : !0),
      u.isValid &&
        (u.isValid =
          (s = u.containsUppercaseLetter) !== null && s !== void 0 ? s : !0),
      u.isValid &&
        (u.isValid =
          (o = u.containsNumericCharacter) !== null && o !== void 0 ? o : !0),
      u.isValid &&
        (u.isValid =
          (l = u.containsNonAlphanumericCharacter) !== null && l !== void 0
            ? l
            : !0),
      u
    )
  }
  validatePasswordLengthOptions(e, n) {
    const r = this.customStrengthOptions.minPasswordLength,
      i = this.customStrengthOptions.maxPasswordLength
    r && (n.meetsMinPasswordLength = e.length >= r),
      i && (n.meetsMaxPasswordLength = e.length <= i)
  }
  validatePasswordCharacterOptions(e, n) {
    this.updatePasswordCharacterOptionsStatuses(n, !1, !1, !1, !1)
    let r
    for (let i = 0; i < e.length; i++)
      (r = e.charAt(i)),
        this.updatePasswordCharacterOptionsStatuses(
          n,
          r >= 'a' && r <= 'z',
          r >= 'A' && r <= 'Z',
          r >= '0' && r <= '9',
          this.allowedNonAlphanumericCharacters.includes(r)
        )
  }
  updatePasswordCharacterOptionsStatuses(e, n, r, i, s) {
    this.customStrengthOptions.containsLowercaseLetter &&
      (e.containsLowercaseLetter || (e.containsLowercaseLetter = n)),
      this.customStrengthOptions.containsUppercaseLetter &&
        (e.containsUppercaseLetter || (e.containsUppercaseLetter = r)),
      this.customStrengthOptions.containsNumericCharacter &&
        (e.containsNumericCharacter || (e.containsNumericCharacter = i)),
      this.customStrengthOptions.containsNonAlphanumericCharacter &&
        (e.containsNonAlphanumericCharacter ||
          (e.containsNonAlphanumericCharacter = s))
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nC {
  constructor(e, n, r, i) {
    ;(this.app = e),
      (this.heartbeatServiceProvider = n),
      (this.appCheckServiceProvider = r),
      (this.config = i),
      (this.currentUser = null),
      (this.emulatorConfig = null),
      (this.operations = Promise.resolve()),
      (this.authStateSubscription = new ag(this)),
      (this.idTokenSubscription = new ag(this)),
      (this.beforeStateQueue = new JS(this)),
      (this.redirectUser = null),
      (this.isProactiveRefreshEnabled = !1),
      (this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1),
      (this._canInitEmulator = !0),
      (this._isInitialized = !1),
      (this._deleted = !1),
      (this._initializationPromise = null),
      (this._popupRedirectResolver = null),
      (this._errorFactory = $v),
      (this._agentRecaptchaConfig = null),
      (this._tenantRecaptchaConfigs = {}),
      (this._projectPasswordPolicy = null),
      (this._tenantPasswordPolicies = {}),
      (this.lastNotifiedUid = void 0),
      (this.languageCode = null),
      (this.tenantId = null),
      (this.settings = { appVerificationDisabledForTesting: !1 }),
      (this.frameworks = []),
      (this.name = e.name),
      (this.clientVersion = i.sdkClientVersion)
  }
  _initializeWithPersistence(e, n) {
    return (
      n && (this._popupRedirectResolver = gn(n)),
      (this._initializationPromise = this.queue(async () => {
        var r, i
        if (
          !this._deleted &&
          ((this.persistenceManager = await Ii.create(this, e)), !this._deleted)
        ) {
          if (
            !((r = this._popupRedirectResolver) === null || r === void 0) &&
            r._shouldInitProactively
          )
            try {
              await this._popupRedirectResolver._initialize(this)
            } catch {}
          await this.initializeCurrentUser(n),
            (this.lastNotifiedUid =
              ((i = this.currentUser) === null || i === void 0
                ? void 0
                : i.uid) || null),
            !this._deleted && (this._isInitialized = !0)
        }
      })),
      this._initializationPromise
    )
  }
  async _onStorageEvent() {
    if (this._deleted) return
    const e = await this.assertedPersistence.getCurrentUser()
    if (!(!this.currentUser && !e)) {
      if (this.currentUser && e && this.currentUser.uid === e.uid) {
        this._currentUser._assign(e), await this.currentUser.getIdToken()
        return
      }
      await this._updateCurrentUser(e, !0)
    }
  }
  async initializeCurrentUserFromIdToken(e) {
    try {
      const n = await Gv(this, { idToken: e }),
        r = await mn._fromGetAccountInfoResponse(this, n, e)
      await this.directlySetCurrentUser(r)
    } catch (n) {
      console.warn(
        'FirebaseServerApp could not login user with provided authIdToken: ',
        n
      ),
        await this.directlySetCurrentUser(null)
    }
  }
  async initializeCurrentUser(e) {
    var n
    if (bt(this.app)) {
      const o = this.app.settings.authIdToken
      return o
        ? new Promise((l) => {
            setTimeout(() =>
              this.initializeCurrentUserFromIdToken(o).then(l, l)
            )
          })
        : this.directlySetCurrentUser(null)
    }
    const r = await this.assertedPersistence.getCurrentUser()
    let i = r,
      s = !1
    if (e && this.config.authDomain) {
      await this.getOrInitRedirectPersistenceManager()
      const o =
          (n = this.redirectUser) === null || n === void 0
            ? void 0
            : n._redirectEventId,
        l = i == null ? void 0 : i._redirectEventId,
        u = await this.tryRedirectSignIn(e)
      ;(!o || o === l) && u != null && u.user && ((i = u.user), (s = !0))
    }
    if (!i) return this.directlySetCurrentUser(null)
    if (!i._redirectEventId) {
      if (s)
        try {
          await this.beforeStateQueue.runMiddleware(i)
        } catch (o) {
          ;(i = r),
            this._popupRedirectResolver._overrideRedirectResult(this, () =>
              Promise.reject(o)
            )
        }
      return i
        ? this.reloadAndSetCurrentUserOrClear(i)
        : this.directlySetCurrentUser(null)
    }
    return (
      W(this._popupRedirectResolver, this, 'argument-error'),
      await this.getOrInitRedirectPersistenceManager(),
      this.redirectUser &&
      this.redirectUser._redirectEventId === i._redirectEventId
        ? this.directlySetCurrentUser(i)
        : this.reloadAndSetCurrentUserOrClear(i)
    )
  }
  async tryRedirectSignIn(e) {
    let n = null
    try {
      n = await this._popupRedirectResolver._completeRedirectFn(this, e, !0)
    } catch {
      await this._setRedirectUser(null)
    }
    return n
  }
  async reloadAndSetCurrentUserOrClear(e) {
    try {
      await Cl(e)
    } catch (n) {
      if ((n == null ? void 0 : n.code) !== 'auth/network-request-failed')
        return this.directlySetCurrentUser(null)
    }
    return this.directlySetCurrentUser(e)
  }
  useDeviceLanguage() {
    this.languageCode = VS()
  }
  async _delete() {
    this._deleted = !0
  }
  async updateCurrentUser(e) {
    if (bt(this.app)) return Promise.reject(Qt(this))
    const n = e ? mt(e) : null
    return (
      n &&
        W(
          n.auth.config.apiKey === this.config.apiKey,
          this,
          'invalid-user-token'
        ),
      this._updateCurrentUser(n && n._clone(this))
    )
  }
  async _updateCurrentUser(e, n = !1) {
    if (!this._deleted)
      return (
        e && W(this.tenantId === e.tenantId, this, 'tenant-id-mismatch'),
        n || (await this.beforeStateQueue.runMiddleware(e)),
        this.queue(async () => {
          await this.directlySetCurrentUser(e), this.notifyAuthListeners()
        })
      )
  }
  async signOut() {
    return bt(this.app)
      ? Promise.reject(Qt(this))
      : (await this.beforeStateQueue.runMiddleware(null),
        (this.redirectPersistenceManager || this._popupRedirectResolver) &&
          (await this._setRedirectUser(null)),
        this._updateCurrentUser(null, !0))
  }
  setPersistence(e) {
    return bt(this.app)
      ? Promise.reject(Qt(this))
      : this.queue(async () => {
          await this.assertedPersistence.setPersistence(gn(e))
        })
  }
  _getRecaptchaConfig() {
    return this.tenantId == null
      ? this._agentRecaptchaConfig
      : this._tenantRecaptchaConfigs[this.tenantId]
  }
  async validatePassword(e) {
    this._getPasswordPolicyInternal() || (await this._updatePasswordPolicy())
    const n = this._getPasswordPolicyInternal()
    return n.schemaVersion !== this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION
      ? Promise.reject(
          this._errorFactory.create(
            'unsupported-password-policy-schema-version',
            {}
          )
        )
      : n.validatePassword(e)
  }
  _getPasswordPolicyInternal() {
    return this.tenantId === null
      ? this._projectPasswordPolicy
      : this._tenantPasswordPolicies[this.tenantId]
  }
  async _updatePasswordPolicy() {
    const e = await ZS(this),
      n = new tC(e)
    this.tenantId === null
      ? (this._projectPasswordPolicy = n)
      : (this._tenantPasswordPolicies[this.tenantId] = n)
  }
  _getPersistence() {
    return this.assertedPersistence.persistence.type
  }
  _updateErrorMap(e) {
    this._errorFactory = new Po('auth', 'Firebase', e())
  }
  onAuthStateChanged(e, n, r) {
    return this.registerStateListener(this.authStateSubscription, e, n, r)
  }
  beforeAuthStateChanged(e, n) {
    return this.beforeStateQueue.pushCallback(e, n)
  }
  onIdTokenChanged(e, n, r) {
    return this.registerStateListener(this.idTokenSubscription, e, n, r)
  }
  authStateReady() {
    return new Promise((e, n) => {
      if (this.currentUser) e()
      else {
        const r = this.onAuthStateChanged(() => {
          r(), e()
        }, n)
      }
    })
  }
  async revokeAccessToken(e) {
    if (this.currentUser) {
      const n = await this.currentUser.getIdToken(),
        r = {
          providerId: 'apple.com',
          tokenType: 'ACCESS_TOKEN',
          token: e,
          idToken: n,
        }
      this.tenantId != null && (r.tenantId = this.tenantId), await QS(this, r)
    }
  }
  toJSON() {
    var e
    return {
      apiKey: this.config.apiKey,
      authDomain: this.config.authDomain,
      appName: this.name,
      currentUser:
        (e = this._currentUser) === null || e === void 0 ? void 0 : e.toJSON(),
    }
  }
  async _setRedirectUser(e, n) {
    const r = await this.getOrInitRedirectPersistenceManager(n)
    return e === null ? r.removeCurrentUser() : r.setCurrentUser(e)
  }
  async getOrInitRedirectPersistenceManager(e) {
    if (!this.redirectPersistenceManager) {
      const n = (e && gn(e)) || this._popupRedirectResolver
      W(n, this, 'argument-error'),
        (this.redirectPersistenceManager = await Ii.create(
          this,
          [gn(n._redirectPersistence)],
          'redirectUser'
        )),
        (this.redirectUser =
          await this.redirectPersistenceManager.getCurrentUser())
    }
    return this.redirectPersistenceManager
  }
  async _redirectUserForId(e) {
    var n, r
    return (
      this._isInitialized && (await this.queue(async () => {})),
      ((n = this._currentUser) === null || n === void 0
        ? void 0
        : n._redirectEventId) === e
        ? this._currentUser
        : ((r = this.redirectUser) === null || r === void 0
            ? void 0
            : r._redirectEventId) === e
        ? this.redirectUser
        : null
    )
  }
  async _persistUserIfCurrent(e) {
    if (e === this.currentUser)
      return this.queue(async () => this.directlySetCurrentUser(e))
  }
  _notifyListenersIfCurrent(e) {
    e === this.currentUser && this.notifyAuthListeners()
  }
  _key() {
    return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`
  }
  _startProactiveRefresh() {
    ;(this.isProactiveRefreshEnabled = !0),
      this.currentUser && this._currentUser._startProactiveRefresh()
  }
  _stopProactiveRefresh() {
    ;(this.isProactiveRefreshEnabled = !1),
      this.currentUser && this._currentUser._stopProactiveRefresh()
  }
  get _currentUser() {
    return this.currentUser
  }
  notifyAuthListeners() {
    var e, n
    if (!this._isInitialized) return
    this.idTokenSubscription.next(this.currentUser)
    const r =
      (n = (e = this.currentUser) === null || e === void 0 ? void 0 : e.uid) !==
        null && n !== void 0
        ? n
        : null
    this.lastNotifiedUid !== r &&
      ((this.lastNotifiedUid = r),
      this.authStateSubscription.next(this.currentUser))
  }
  registerStateListener(e, n, r, i) {
    if (this._deleted) return () => {}
    const s = typeof n == 'function' ? n : n.next.bind(n)
    let o = !1
    const l = this._isInitialized
      ? Promise.resolve()
      : this._initializationPromise
    if (
      (W(l, this, 'internal-error'),
      l.then(() => {
        o || s(this.currentUser)
      }),
      typeof n == 'function')
    ) {
      const u = e.addObserver(n, r, i)
      return () => {
        ;(o = !0), u()
      }
    } else {
      const u = e.addObserver(n)
      return () => {
        ;(o = !0), u()
      }
    }
  }
  async directlySetCurrentUser(e) {
    this.currentUser &&
      this.currentUser !== e &&
      this._currentUser._stopProactiveRefresh(),
      e && this.isProactiveRefreshEnabled && e._startProactiveRefresh(),
      (this.currentUser = e),
      e
        ? await this.assertedPersistence.setCurrentUser(e)
        : await this.assertedPersistence.removeCurrentUser()
  }
  queue(e) {
    return (this.operations = this.operations.then(e, e)), this.operations
  }
  get assertedPersistence() {
    return (
      W(this.persistenceManager, this, 'internal-error'),
      this.persistenceManager
    )
  }
  _logFramework(e) {
    !e ||
      this.frameworks.includes(e) ||
      (this.frameworks.push(e),
      this.frameworks.sort(),
      (this.clientVersion = s_(
        this.config.clientPlatform,
        this._getFrameworks()
      )))
  }
  _getFrameworks() {
    return this.frameworks
  }
  async _getAdditionalHeaders() {
    var e
    const n = { 'X-Client-Version': this.clientVersion }
    this.app.options.appId && (n['X-Firebase-gmpid'] = this.app.options.appId)
    const r = await ((e = this.heartbeatServiceProvider.getImmediate({
      optional: !0,
    })) === null || e === void 0
      ? void 0
      : e.getHeartbeatsHeader())
    r && (n['X-Firebase-Client'] = r)
    const i = await this._getAppCheckToken()
    return i && (n['X-Firebase-AppCheck'] = i), n
  }
  async _getAppCheckToken() {
    var e
    const n = await ((e = this.appCheckServiceProvider.getImmediate({
      optional: !0,
    })) === null || e === void 0
      ? void 0
      : e.getToken())
    return (
      n != null &&
        n.error &&
        DS(`Error while retrieving App Check token: ${n.error}`),
      n == null ? void 0 : n.token
    )
  }
}
function vr(t) {
  return mt(t)
}
class ag {
  constructor(e) {
    ;(this.auth = e),
      (this.observer = null),
      (this.addObserver = TI((n) => (this.observer = n)))
  }
  get next() {
    return (
      W(this.observer, this.auth, 'internal-error'),
      this.observer.next.bind(this.observer)
    )
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let ru = {
  async loadJS() {
    throw new Error('Unable to load external scripts')
  },
  recaptchaV2Script: '',
  recaptchaEnterpriseScript: '',
  gapiScript: '',
}
function rC(t) {
  ru = t
}
function o_(t) {
  return ru.loadJS(t)
}
function iC() {
  return ru.recaptchaEnterpriseScript
}
function sC() {
  return ru.gapiScript
}
function oC(t) {
  return `__${t}${Math.floor(Math.random() * 1e6)}`
}
const aC = 'recaptcha-enterprise',
  lC = 'NO_RECAPTCHA'
class uC {
  constructor(e) {
    ;(this.type = aC), (this.auth = vr(e))
  }
  async verify(e = 'verify', n = !1) {
    async function r(s) {
      if (!n) {
        if (s.tenantId == null && s._agentRecaptchaConfig != null)
          return s._agentRecaptchaConfig.siteKey
        if (
          s.tenantId != null &&
          s._tenantRecaptchaConfigs[s.tenantId] !== void 0
        )
          return s._tenantRecaptchaConfigs[s.tenantId].siteKey
      }
      return new Promise(async (o, l) => {
        BS(s, {
          clientType: 'CLIENT_TYPE_WEB',
          version: 'RECAPTCHA_ENTERPRISE',
        })
          .then((u) => {
            if (u.recaptchaKey === void 0)
              l(new Error('recaptcha Enterprise site key undefined'))
            else {
              const h = new US(u)
              return (
                s.tenantId == null
                  ? (s._agentRecaptchaConfig = h)
                  : (s._tenantRecaptchaConfigs[s.tenantId] = h),
                o(h.siteKey)
              )
            }
          })
          .catch((u) => {
            l(u)
          })
      })
    }
    function i(s, o, l) {
      const u = window.grecaptcha
      ng(u)
        ? u.enterprise.ready(() => {
            u.enterprise
              .execute(s, { action: e })
              .then((h) => {
                o(h)
              })
              .catch(() => {
                o(lC)
              })
          })
        : l(Error('No reCAPTCHA enterprise script loaded.'))
    }
    return new Promise((s, o) => {
      r(this.auth)
        .then((l) => {
          if (!n && ng(window.grecaptcha)) i(l, s, o)
          else {
            if (typeof window > 'u') {
              o(new Error('RecaptchaVerifier is only supported in browser'))
              return
            }
            let u = iC()
            u.length !== 0 && (u += l),
              o_(u)
                .then(() => {
                  i(l, s, o)
                })
                .catch((h) => {
                  o(h)
                })
          }
        })
        .catch((l) => {
          o(l)
        })
    })
  }
}
async function lg(t, e, n, r = !1) {
  const i = new uC(t)
  let s
  try {
    s = await i.verify(n)
  } catch {
    s = await i.verify(n, !0)
  }
  const o = Object.assign({}, e)
  return (
    r
      ? Object.assign(o, { captchaResp: s })
      : Object.assign(o, { captchaResponse: s }),
    Object.assign(o, { clientType: 'CLIENT_TYPE_WEB' }),
    Object.assign(o, { recaptchaVersion: 'RECAPTCHA_ENTERPRISE' }),
    o
  )
}
async function Al(t, e, n, r) {
  var i
  if (
    !((i = t._getRecaptchaConfig()) === null || i === void 0) &&
    i.isProviderEnabled('EMAIL_PASSWORD_PROVIDER')
  ) {
    const s = await lg(t, e, n, n === 'getOobCode')
    return r(t, s)
  } else
    return r(t, e).catch(async (s) => {
      if (s.code === 'auth/missing-recaptcha-token') {
        console.log(
          `${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`
        )
        const o = await lg(t, e, n, n === 'getOobCode')
        return r(t, o)
      } else return Promise.reject(s)
    })
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function cC(t, e) {
  const n = Ud(t, 'auth')
  if (n.isInitialized()) {
    const i = n.getImmediate(),
      s = n.getOptions()
    if (wl(s, e ?? {})) return i
    zt(i, 'already-initialized')
  }
  return n.initialize({ options: e })
}
function hC(t, e) {
  const n = (e == null ? void 0 : e.persistence) || [],
    r = (Array.isArray(n) ? n : [n]).map(gn)
  e != null && e.errorMap && t._updateErrorMap(e.errorMap),
    t._initializeWithPersistence(
      r,
      e == null ? void 0 : e.popupRedirectResolver
    )
}
function dC(t, e, n) {
  const r = vr(t)
  W(r._canInitEmulator, r, 'emulator-config-failed'),
    W(/^https?:\/\//.test(e), r, 'invalid-emulator-scheme')
  const i = !1,
    s = a_(e),
    { host: o, port: l } = fC(e),
    u = l === null ? '' : `:${l}`
  ;(r.config.emulator = { url: `${s}//${o}${u}/` }),
    (r.settings.appVerificationDisabledForTesting = !0),
    (r.emulatorConfig = Object.freeze({
      host: o,
      port: l,
      protocol: s.replace(':', ''),
      options: Object.freeze({ disableWarnings: i }),
    })),
    pC()
}
function a_(t) {
  const e = t.indexOf(':')
  return e < 0 ? '' : t.substr(0, e + 1)
}
function fC(t) {
  const e = a_(t),
    n = /(\/\/)?([^?#/]+)/.exec(t.substr(e.length))
  if (!n) return { host: '', port: null }
  const r = n[2].split('@').pop() || '',
    i = /^(\[[^\]]+\])(:|$)/.exec(r)
  if (i) {
    const s = i[1]
    return { host: s, port: ug(r.substr(s.length + 1)) }
  } else {
    const [s, o] = r.split(':')
    return { host: s, port: ug(o) }
  }
}
function ug(t) {
  if (!t) return null
  const e = Number(t)
  return isNaN(e) ? null : e
}
function pC() {
  function t() {
    const e = document.createElement('p'),
      n = e.style
    ;(e.innerText =
      'Running in emulator mode. Do not use with production credentials.'),
      (n.position = 'fixed'),
      (n.width = '100%'),
      (n.backgroundColor = '#ffffff'),
      (n.border = '.1em solid #000000'),
      (n.color = '#b50000'),
      (n.bottom = '0px'),
      (n.left = '0px'),
      (n.margin = '0px'),
      (n.zIndex = '10000'),
      (n.textAlign = 'center'),
      e.classList.add('firebase-emulator-warning'),
      document.body.appendChild(e)
  }
  typeof console < 'u' &&
    typeof console.info == 'function' &&
    console.info(
      'WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.'
    ),
    typeof window < 'u' &&
      typeof document < 'u' &&
      (document.readyState === 'loading'
        ? window.addEventListener('DOMContentLoaded', t)
        : t())
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Kd {
  constructor(e, n) {
    ;(this.providerId = e), (this.signInMethod = n)
  }
  toJSON() {
    return pn('not implemented')
  }
  _getIdTokenResponse(e) {
    return pn('not implemented')
  }
  _linkToIdToken(e, n) {
    return pn('not implemented')
  }
  _getReauthenticationResolver(e) {
    return pn('not implemented')
  }
}
async function mC(t, e) {
  return Nn(t, 'POST', '/v1/accounts:signUp', e)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function gC(t, e) {
  return No(t, 'POST', '/v1/accounts:signInWithPassword', xn(t, e))
}
async function yC(t, e) {
  return Nn(t, 'POST', '/v1/accounts:sendOobCode', xn(t, e))
}
async function vC(t, e) {
  return yC(t, e)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function _C(t, e) {
  return No(t, 'POST', '/v1/accounts:signInWithEmailLink', xn(t, e))
}
async function EC(t, e) {
  return No(t, 'POST', '/v1/accounts:signInWithEmailLink', xn(t, e))
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class po extends Kd {
  constructor(e, n, r, i = null) {
    super('password', r),
      (this._email = e),
      (this._password = n),
      (this._tenantId = i)
  }
  static _fromEmailAndPassword(e, n) {
    return new po(e, n, 'password')
  }
  static _fromEmailAndCode(e, n, r = null) {
    return new po(e, n, 'emailLink', r)
  }
  toJSON() {
    return {
      email: this._email,
      password: this._password,
      signInMethod: this.signInMethod,
      tenantId: this._tenantId,
    }
  }
  static fromJSON(e) {
    const n = typeof e == 'string' ? JSON.parse(e) : e
    if (n != null && n.email && n != null && n.password) {
      if (n.signInMethod === 'password')
        return this._fromEmailAndPassword(n.email, n.password)
      if (n.signInMethod === 'emailLink')
        return this._fromEmailAndCode(n.email, n.password, n.tenantId)
    }
    return null
  }
  async _getIdTokenResponse(e) {
    switch (this.signInMethod) {
      case 'password':
        const n = {
          returnSecureToken: !0,
          email: this._email,
          password: this._password,
          clientType: 'CLIENT_TYPE_WEB',
        }
        return Al(e, n, 'signInWithPassword', gC)
      case 'emailLink':
        return _C(e, { email: this._email, oobCode: this._password })
      default:
        zt(e, 'internal-error')
    }
  }
  async _linkToIdToken(e, n) {
    switch (this.signInMethod) {
      case 'password':
        const r = {
          idToken: n,
          returnSecureToken: !0,
          email: this._email,
          password: this._password,
          clientType: 'CLIENT_TYPE_WEB',
        }
        return Al(e, r, 'signUpPassword', mC)
      case 'emailLink':
        return EC(e, {
          idToken: n,
          email: this._email,
          oobCode: this._password,
        })
      default:
        zt(e, 'internal-error')
    }
  }
  _getReauthenticationResolver(e) {
    return this._getIdTokenResponse(e)
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Si(t, e) {
  return No(t, 'POST', '/v1/accounts:signInWithIdp', xn(t, e))
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const wC = 'http://localhost'
class jr extends Kd {
  constructor() {
    super(...arguments), (this.pendingToken = null)
  }
  static _fromParams(e) {
    const n = new jr(e.providerId, e.signInMethod)
    return (
      e.idToken || e.accessToken
        ? (e.idToken && (n.idToken = e.idToken),
          e.accessToken && (n.accessToken = e.accessToken),
          e.nonce && !e.pendingToken && (n.nonce = e.nonce),
          e.pendingToken && (n.pendingToken = e.pendingToken))
        : e.oauthToken && e.oauthTokenSecret
        ? ((n.accessToken = e.oauthToken), (n.secret = e.oauthTokenSecret))
        : zt('argument-error'),
      n
    )
  }
  toJSON() {
    return {
      idToken: this.idToken,
      accessToken: this.accessToken,
      secret: this.secret,
      nonce: this.nonce,
      pendingToken: this.pendingToken,
      providerId: this.providerId,
      signInMethod: this.signInMethod,
    }
  }
  static fromJSON(e) {
    const n = typeof e == 'string' ? JSON.parse(e) : e,
      { providerId: r, signInMethod: i } = n,
      s = Bd(n, ['providerId', 'signInMethod'])
    if (!r || !i) return null
    const o = new jr(r, i)
    return (
      (o.idToken = s.idToken || void 0),
      (o.accessToken = s.accessToken || void 0),
      (o.secret = s.secret),
      (o.nonce = s.nonce),
      (o.pendingToken = s.pendingToken || null),
      o
    )
  }
  _getIdTokenResponse(e) {
    const n = this.buildRequest()
    return Si(e, n)
  }
  _linkToIdToken(e, n) {
    const r = this.buildRequest()
    return (r.idToken = n), Si(e, r)
  }
  _getReauthenticationResolver(e) {
    const n = this.buildRequest()
    return (n.autoCreate = !1), Si(e, n)
  }
  buildRequest() {
    const e = { requestUri: wC, returnSecureToken: !0 }
    if (this.pendingToken) e.pendingToken = this.pendingToken
    else {
      const n = {}
      this.idToken && (n.id_token = this.idToken),
        this.accessToken && (n.access_token = this.accessToken),
        this.secret && (n.oauth_token_secret = this.secret),
        (n.providerId = this.providerId),
        this.nonce && !this.pendingToken && (n.nonce = this.nonce),
        (e.postBody = ko(n))
    }
    return e
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function TC(t) {
  switch (t) {
    case 'recoverEmail':
      return 'RECOVER_EMAIL'
    case 'resetPassword':
      return 'PASSWORD_RESET'
    case 'signIn':
      return 'EMAIL_SIGNIN'
    case 'verifyEmail':
      return 'VERIFY_EMAIL'
    case 'verifyAndChangeEmail':
      return 'VERIFY_AND_CHANGE_EMAIL'
    case 'revertSecondFactorAddition':
      return 'REVERT_SECOND_FACTOR_ADDITION'
    default:
      return null
  }
}
function IC(t) {
  const e = Rs(Ps(t)).link,
    n = e ? Rs(Ps(e)).deep_link_id : null,
    r = Rs(Ps(t)).deep_link_id
  return (r ? Rs(Ps(r)).link : null) || r || n || e || t
}
class iu {
  constructor(e) {
    var n, r, i, s, o, l
    const u = Rs(Ps(e)),
      h = (n = u.apiKey) !== null && n !== void 0 ? n : null,
      f = (r = u.oobCode) !== null && r !== void 0 ? r : null,
      p = TC((i = u.mode) !== null && i !== void 0 ? i : null)
    W(h && f && p, 'argument-error'),
      (this.apiKey = h),
      (this.operation = p),
      (this.code = f),
      (this.continueUrl =
        (s = u.continueUrl) !== null && s !== void 0 ? s : null),
      (this.languageCode =
        (o = u.languageCode) !== null && o !== void 0 ? o : null),
      (this.tenantId = (l = u.tenantId) !== null && l !== void 0 ? l : null)
  }
  static parseLink(e) {
    const n = IC(e)
    try {
      return new iu(n)
    } catch {
      return null
    }
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Kr {
  constructor() {
    this.providerId = Kr.PROVIDER_ID
  }
  static credential(e, n) {
    return po._fromEmailAndPassword(e, n)
  }
  static credentialWithLink(e, n) {
    const r = iu.parseLink(n)
    return W(r, 'argument-error'), po._fromEmailAndCode(e, r.code, r.tenantId)
  }
}
Kr.PROVIDER_ID = 'password'
Kr.EMAIL_PASSWORD_SIGN_IN_METHOD = 'password'
Kr.EMAIL_LINK_SIGN_IN_METHOD = 'emailLink'
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class l_ {
  constructor(e) {
    ;(this.providerId = e),
      (this.defaultLanguageCode = null),
      (this.customParameters = {})
  }
  setDefaultLanguage(e) {
    this.defaultLanguageCode = e
  }
  setCustomParameters(e) {
    return (this.customParameters = e), this
  }
  getCustomParameters() {
    return this.customParameters
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Do extends l_ {
  constructor() {
    super(...arguments), (this.scopes = [])
  }
  addScope(e) {
    return this.scopes.includes(e) || this.scopes.push(e), this
  }
  getScopes() {
    return [...this.scopes]
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Bn extends Do {
  constructor() {
    super('facebook.com')
  }
  static credential(e) {
    return jr._fromParams({
      providerId: Bn.PROVIDER_ID,
      signInMethod: Bn.FACEBOOK_SIGN_IN_METHOD,
      accessToken: e,
    })
  }
  static credentialFromResult(e) {
    return Bn.credentialFromTaggedObject(e)
  }
  static credentialFromError(e) {
    return Bn.credentialFromTaggedObject(e.customData || {})
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e || !('oauthAccessToken' in e) || !e.oauthAccessToken) return null
    try {
      return Bn.credential(e.oauthAccessToken)
    } catch {
      return null
    }
  }
}
Bn.FACEBOOK_SIGN_IN_METHOD = 'facebook.com'
Bn.PROVIDER_ID = 'facebook.com'
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class zn extends Do {
  constructor() {
    super('google.com'), this.addScope('profile')
  }
  static credential(e, n) {
    return jr._fromParams({
      providerId: zn.PROVIDER_ID,
      signInMethod: zn.GOOGLE_SIGN_IN_METHOD,
      idToken: e,
      accessToken: n,
    })
  }
  static credentialFromResult(e) {
    return zn.credentialFromTaggedObject(e)
  }
  static credentialFromError(e) {
    return zn.credentialFromTaggedObject(e.customData || {})
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e) return null
    const { oauthIdToken: n, oauthAccessToken: r } = e
    if (!n && !r) return null
    try {
      return zn.credential(n, r)
    } catch {
      return null
    }
  }
}
zn.GOOGLE_SIGN_IN_METHOD = 'google.com'
zn.PROVIDER_ID = 'google.com'
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class $n extends Do {
  constructor() {
    super('github.com')
  }
  static credential(e) {
    return jr._fromParams({
      providerId: $n.PROVIDER_ID,
      signInMethod: $n.GITHUB_SIGN_IN_METHOD,
      accessToken: e,
    })
  }
  static credentialFromResult(e) {
    return $n.credentialFromTaggedObject(e)
  }
  static credentialFromError(e) {
    return $n.credentialFromTaggedObject(e.customData || {})
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e || !('oauthAccessToken' in e) || !e.oauthAccessToken) return null
    try {
      return $n.credential(e.oauthAccessToken)
    } catch {
      return null
    }
  }
}
$n.GITHUB_SIGN_IN_METHOD = 'github.com'
$n.PROVIDER_ID = 'github.com'
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Hn extends Do {
  constructor() {
    super('twitter.com')
  }
  static credential(e, n) {
    return jr._fromParams({
      providerId: Hn.PROVIDER_ID,
      signInMethod: Hn.TWITTER_SIGN_IN_METHOD,
      oauthToken: e,
      oauthTokenSecret: n,
    })
  }
  static credentialFromResult(e) {
    return Hn.credentialFromTaggedObject(e)
  }
  static credentialFromError(e) {
    return Hn.credentialFromTaggedObject(e.customData || {})
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e) return null
    const { oauthAccessToken: n, oauthTokenSecret: r } = e
    if (!n || !r) return null
    try {
      return Hn.credential(n, r)
    } catch {
      return null
    }
  }
}
Hn.TWITTER_SIGN_IN_METHOD = 'twitter.com'
Hn.PROVIDER_ID = 'twitter.com'
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function SC(t, e) {
  return No(t, 'POST', '/v1/accounts:signUp', xn(t, e))
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ur {
  constructor(e) {
    ;(this.user = e.user),
      (this.providerId = e.providerId),
      (this._tokenResponse = e._tokenResponse),
      (this.operationType = e.operationType)
  }
  static async _fromIdTokenResponse(e, n, r, i = !1) {
    const s = await mn._fromIdTokenResponse(e, r, i),
      o = cg(r)
    return new Ur({
      user: s,
      providerId: o,
      _tokenResponse: r,
      operationType: n,
    })
  }
  static async _forOperation(e, n, r) {
    await e._updateTokensIfNecessary(r, !0)
    const i = cg(r)
    return new Ur({
      user: e,
      providerId: i,
      _tokenResponse: r,
      operationType: n,
    })
  }
}
function cg(t) {
  return t.providerId ? t.providerId : 'phoneNumber' in t ? 'phone' : null
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Rl extends kn {
  constructor(e, n, r, i) {
    var s
    super(n.code, n.message),
      (this.operationType = r),
      (this.user = i),
      Object.setPrototypeOf(this, Rl.prototype),
      (this.customData = {
        appName: e.name,
        tenantId: (s = e.tenantId) !== null && s !== void 0 ? s : void 0,
        _serverResponse: n.customData._serverResponse,
        operationType: r,
      })
  }
  static _fromErrorAndOperation(e, n, r, i) {
    return new Rl(e, n, r, i)
  }
}
function u_(t, e, n, r) {
  return (
    e === 'reauthenticate'
      ? n._getReauthenticationResolver(t)
      : n._getIdTokenResponse(t)
  ).catch((s) => {
    throw s.code === 'auth/multi-factor-auth-required'
      ? Rl._fromErrorAndOperation(t, s, e, r)
      : s
  })
}
async function CC(t, e, n = !1) {
  const r = await fo(t, e._linkToIdToken(t.auth, await t.getIdToken()), n)
  return Ur._forOperation(t, 'link', r)
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function AC(t, e, n = !1) {
  const { auth: r } = t
  if (bt(r.app)) return Promise.reject(Qt(r))
  const i = 'reauthenticate'
  try {
    const s = await fo(t, u_(r, i, e, t), n)
    W(s.idToken, r, 'internal-error')
    const o = Hd(s.idToken)
    W(o, r, 'internal-error')
    const { sub: l } = o
    return W(t.uid === l, r, 'user-mismatch'), Ur._forOperation(t, i, s)
  } catch (s) {
    throw (
      ((s == null ? void 0 : s.code) === 'auth/user-not-found' &&
        zt(r, 'user-mismatch'),
      s)
    )
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function c_(t, e, n = !1) {
  if (bt(t.app)) return Promise.reject(Qt(t))
  const r = 'signIn',
    i = await u_(t, r, e),
    s = await Ur._fromIdTokenResponse(t, r, i)
  return n || (await t._updateCurrentUser(s.user)), s
}
async function h_(t, e) {
  return c_(vr(t), e)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function RC(t, e, n) {
  var r
  W(
    ((r = n.url) === null || r === void 0 ? void 0 : r.length) > 0,
    t,
    'invalid-continue-uri'
  ),
    W(
      typeof n.dynamicLinkDomain > 'u' || n.dynamicLinkDomain.length > 0,
      t,
      'invalid-dynamic-link-domain'
    ),
    (e.continueUrl = n.url),
    (e.dynamicLinkDomain = n.dynamicLinkDomain),
    (e.canHandleCodeInApp = n.handleCodeInApp),
    n.iOS &&
      (W(n.iOS.bundleId.length > 0, t, 'missing-ios-bundle-id'),
      (e.iOSBundleId = n.iOS.bundleId)),
    n.android &&
      (W(n.android.packageName.length > 0, t, 'missing-android-pkg-name'),
      (e.androidInstallApp = n.android.installApp),
      (e.androidMinimumVersionCode = n.android.minimumVersion),
      (e.androidPackageName = n.android.packageName))
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function d_(t) {
  const e = vr(t)
  e._getPasswordPolicyInternal() && (await e._updatePasswordPolicy())
}
async function PC(t, e, n) {
  if (bt(t.app)) return Promise.reject(Qt(t))
  const r = vr(t),
    o = await Al(
      r,
      {
        returnSecureToken: !0,
        email: e,
        password: n,
        clientType: 'CLIENT_TYPE_WEB',
      },
      'signUpPassword',
      SC
    ).catch((u) => {
      throw (u.code === 'auth/password-does-not-meet-requirements' && d_(t), u)
    }),
    l = await Ur._fromIdTokenResponse(r, 'signIn', o)
  return await r._updateCurrentUser(l.user), l
}
function kC(t, e, n) {
  return bt(t.app)
    ? Promise.reject(Qt(t))
    : h_(mt(t), Kr.credential(e, n)).catch(async (r) => {
        throw (
          (r.code === 'auth/password-does-not-meet-requirements' && d_(t), r)
        )
      })
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function xC(t, e, n) {
  const r = vr(t),
    i = { requestType: 'EMAIL_SIGNIN', email: e, clientType: 'CLIENT_TYPE_WEB' }
  function s(o, l) {
    W(l.handleCodeInApp, r, 'argument-error'), l && RC(r, o, l)
  }
  s(i, n), await Al(r, i, 'getOobCode', vC)
}
function NC(t, e) {
  const n = iu.parseLink(e)
  return (n == null ? void 0 : n.operation) === 'EMAIL_SIGNIN'
}
async function DC(t, e, n) {
  if (bt(t.app)) return Promise.reject(Qt(t))
  const r = mt(t),
    i = Kr.credentialWithLink(e, n || Sl())
  return (
    W(i._tenantId === (r.tenantId || null), r, 'tenant-id-mismatch'), h_(r, i)
  )
}
function OC(t, e, n, r) {
  return mt(t).onIdTokenChanged(e, n, r)
}
function LC(t, e, n) {
  return mt(t).beforeAuthStateChanged(e, n)
}
function qd(t, e, n, r) {
  return mt(t).onAuthStateChanged(e, n, r)
}
function VC(t) {
  return mt(t).signOut()
}
const Pl = '__sak'
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class f_ {
  constructor(e, n) {
    ;(this.storageRetriever = e), (this.type = n)
  }
  _isAvailable() {
    try {
      return this.storage
        ? (this.storage.setItem(Pl, '1'),
          this.storage.removeItem(Pl),
          Promise.resolve(!0))
        : Promise.resolve(!1)
    } catch {
      return Promise.resolve(!1)
    }
  }
  _set(e, n) {
    return this.storage.setItem(e, JSON.stringify(n)), Promise.resolve()
  }
  _get(e) {
    const n = this.storage.getItem(e)
    return Promise.resolve(n ? JSON.parse(n) : null)
  }
  _remove(e) {
    return this.storage.removeItem(e), Promise.resolve()
  }
  get storage() {
    return this.storageRetriever()
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const MC = 1e3,
  bC = 10
class p_ extends f_ {
  constructor() {
    super(() => window.localStorage, 'LOCAL'),
      (this.boundEventHandler = (e, n) => this.onStorageEvent(e, n)),
      (this.listeners = {}),
      (this.localCache = {}),
      (this.pollTimer = null),
      (this.fallbackToPolling = i_()),
      (this._shouldAllowMigration = !0)
  }
  forAllChangedKeys(e) {
    for (const n of Object.keys(this.listeners)) {
      const r = this.storage.getItem(n),
        i = this.localCache[n]
      r !== i && e(n, i, r)
    }
  }
  onStorageEvent(e, n = !1) {
    if (!e.key) {
      this.forAllChangedKeys((o, l, u) => {
        this.notifyListeners(o, u)
      })
      return
    }
    const r = e.key
    n ? this.detachListener() : this.stopPolling()
    const i = () => {
        const o = this.storage.getItem(r)
        ;(!n && this.localCache[r] === o) || this.notifyListeners(r, o)
      },
      s = this.storage.getItem(r)
    XS() && s !== e.newValue && e.newValue !== e.oldValue
      ? setTimeout(i, bC)
      : i()
  }
  notifyListeners(e, n) {
    this.localCache[e] = n
    const r = this.listeners[e]
    if (r) for (const i of Array.from(r)) i(n && JSON.parse(n))
  }
  startPolling() {
    this.stopPolling(),
      (this.pollTimer = setInterval(() => {
        this.forAllChangedKeys((e, n, r) => {
          this.onStorageEvent(
            new StorageEvent('storage', { key: e, oldValue: n, newValue: r }),
            !0
          )
        })
      }, MC))
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), (this.pollTimer = null))
  }
  attachListener() {
    window.addEventListener('storage', this.boundEventHandler)
  }
  detachListener() {
    window.removeEventListener('storage', this.boundEventHandler)
  }
  _addListener(e, n) {
    Object.keys(this.listeners).length === 0 &&
      (this.fallbackToPolling ? this.startPolling() : this.attachListener()),
      this.listeners[e] ||
        ((this.listeners[e] = new Set()),
        (this.localCache[e] = this.storage.getItem(e))),
      this.listeners[e].add(n)
  }
  _removeListener(e, n) {
    this.listeners[e] &&
      (this.listeners[e].delete(n),
      this.listeners[e].size === 0 && delete this.listeners[e]),
      Object.keys(this.listeners).length === 0 &&
        (this.detachListener(), this.stopPolling())
  }
  async _set(e, n) {
    await super._set(e, n), (this.localCache[e] = JSON.stringify(n))
  }
  async _get(e) {
    const n = await super._get(e)
    return (this.localCache[e] = JSON.stringify(n)), n
  }
  async _remove(e) {
    await super._remove(e), delete this.localCache[e]
  }
}
p_.type = 'LOCAL'
const FC = p_
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class m_ extends f_ {
  constructor() {
    super(() => window.sessionStorage, 'SESSION')
  }
  _addListener(e, n) {}
  _removeListener(e, n) {}
}
m_.type = 'SESSION'
const g_ = m_
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function jC(t) {
  return Promise.all(
    t.map(async (e) => {
      try {
        return { fulfilled: !0, value: await e }
      } catch (n) {
        return { fulfilled: !1, reason: n }
      }
    })
  )
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class su {
  constructor(e) {
    ;(this.eventTarget = e),
      (this.handlersMap = {}),
      (this.boundEventHandler = this.handleEvent.bind(this))
  }
  static _getInstance(e) {
    const n = this.receivers.find((i) => i.isListeningto(e))
    if (n) return n
    const r = new su(e)
    return this.receivers.push(r), r
  }
  isListeningto(e) {
    return this.eventTarget === e
  }
  async handleEvent(e) {
    const n = e,
      { eventId: r, eventType: i, data: s } = n.data,
      o = this.handlersMap[i]
    if (!(o != null && o.size)) return
    n.ports[0].postMessage({ status: 'ack', eventId: r, eventType: i })
    const l = Array.from(o).map(async (h) => h(n.origin, s)),
      u = await jC(l)
    n.ports[0].postMessage({
      status: 'done',
      eventId: r,
      eventType: i,
      response: u,
    })
  }
  _subscribe(e, n) {
    Object.keys(this.handlersMap).length === 0 &&
      this.eventTarget.addEventListener('message', this.boundEventHandler),
      this.handlersMap[e] || (this.handlersMap[e] = new Set()),
      this.handlersMap[e].add(n)
  }
  _unsubscribe(e, n) {
    this.handlersMap[e] && n && this.handlersMap[e].delete(n),
      (!n || this.handlersMap[e].size === 0) && delete this.handlersMap[e],
      Object.keys(this.handlersMap).length === 0 &&
        this.eventTarget.removeEventListener('message', this.boundEventHandler)
  }
}
su.receivers = []
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Gd(t = '', e = 10) {
  let n = ''
  for (let r = 0; r < e; r++) n += Math.floor(Math.random() * 10)
  return t + n
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class UC {
  constructor(e) {
    ;(this.target = e), (this.handlers = new Set())
  }
  removeMessageHandler(e) {
    e.messageChannel &&
      (e.messageChannel.port1.removeEventListener('message', e.onMessage),
      e.messageChannel.port1.close()),
      this.handlers.delete(e)
  }
  async _send(e, n, r = 50) {
    const i = typeof MessageChannel < 'u' ? new MessageChannel() : null
    if (!i) throw new Error('connection_unavailable')
    let s, o
    return new Promise((l, u) => {
      const h = Gd('', 20)
      i.port1.start()
      const f = setTimeout(() => {
        u(new Error('unsupported_event'))
      }, r)
      ;(o = {
        messageChannel: i,
        onMessage(p) {
          const v = p
          if (v.data.eventId === h)
            switch (v.data.status) {
              case 'ack':
                clearTimeout(f),
                  (s = setTimeout(() => {
                    u(new Error('timeout'))
                  }, 3e3))
                break
              case 'done':
                clearTimeout(s), l(v.data.response)
                break
              default:
                clearTimeout(f),
                  clearTimeout(s),
                  u(new Error('invalid_response'))
                break
            }
        },
      }),
        this.handlers.add(o),
        i.port1.addEventListener('message', o.onMessage),
        this.target.postMessage({ eventType: e, eventId: h, data: n }, [
          i.port2,
        ])
    }).finally(() => {
      o && this.removeMessageHandler(o)
    })
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Yt() {
  return window
}
function BC(t) {
  Yt().location.href = t
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function y_() {
  return (
    typeof Yt().WorkerGlobalScope < 'u' &&
    typeof Yt().importScripts == 'function'
  )
}
async function zC() {
  if (!(navigator != null && navigator.serviceWorker)) return null
  try {
    return (await navigator.serviceWorker.ready).active
  } catch {
    return null
  }
}
function $C() {
  var t
  return (
    ((t = navigator == null ? void 0 : navigator.serviceWorker) === null ||
    t === void 0
      ? void 0
      : t.controller) || null
  )
}
function HC() {
  return y_() ? self : null
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const v_ = 'firebaseLocalStorageDb',
  WC = 1,
  kl = 'firebaseLocalStorage',
  __ = 'fbase_key'
class Oo {
  constructor(e) {
    this.request = e
  }
  toPromise() {
    return new Promise((e, n) => {
      this.request.addEventListener('success', () => {
        e(this.request.result)
      }),
        this.request.addEventListener('error', () => {
          n(this.request.error)
        })
    })
  }
}
function ou(t, e) {
  return t.transaction([kl], e ? 'readwrite' : 'readonly').objectStore(kl)
}
function KC() {
  const t = indexedDB.deleteDatabase(v_)
  return new Oo(t).toPromise()
}
function Ah() {
  const t = indexedDB.open(v_, WC)
  return new Promise((e, n) => {
    t.addEventListener('error', () => {
      n(t.error)
    }),
      t.addEventListener('upgradeneeded', () => {
        const r = t.result
        try {
          r.createObjectStore(kl, { keyPath: __ })
        } catch (i) {
          n(i)
        }
      }),
      t.addEventListener('success', async () => {
        const r = t.result
        r.objectStoreNames.contains(kl)
          ? e(r)
          : (r.close(), await KC(), e(await Ah()))
      })
  })
}
async function hg(t, e, n) {
  const r = ou(t, !0).put({ [__]: e, value: n })
  return new Oo(r).toPromise()
}
async function qC(t, e) {
  const n = ou(t, !1).get(e),
    r = await new Oo(n).toPromise()
  return r === void 0 ? null : r.value
}
function dg(t, e) {
  const n = ou(t, !0).delete(e)
  return new Oo(n).toPromise()
}
const GC = 800,
  QC = 3
class E_ {
  constructor() {
    ;(this.type = 'LOCAL'),
      (this._shouldAllowMigration = !0),
      (this.listeners = {}),
      (this.localCache = {}),
      (this.pollTimer = null),
      (this.pendingWrites = 0),
      (this.receiver = null),
      (this.sender = null),
      (this.serviceWorkerReceiverAvailable = !1),
      (this.activeServiceWorker = null),
      (this._workerInitializationPromise =
        this.initializeServiceWorkerMessaging().then(
          () => {},
          () => {}
        ))
  }
  async _openDb() {
    return this.db ? this.db : ((this.db = await Ah()), this.db)
  }
  async _withRetries(e) {
    let n = 0
    for (;;)
      try {
        const r = await this._openDb()
        return await e(r)
      } catch (r) {
        if (n++ > QC) throw r
        this.db && (this.db.close(), (this.db = void 0))
      }
  }
  async initializeServiceWorkerMessaging() {
    return y_() ? this.initializeReceiver() : this.initializeSender()
  }
  async initializeReceiver() {
    ;(this.receiver = su._getInstance(HC())),
      this.receiver._subscribe('keyChanged', async (e, n) => ({
        keyProcessed: (await this._poll()).includes(n.key),
      })),
      this.receiver._subscribe('ping', async (e, n) => ['keyChanged'])
  }
  async initializeSender() {
    var e, n
    if (((this.activeServiceWorker = await zC()), !this.activeServiceWorker))
      return
    this.sender = new UC(this.activeServiceWorker)
    const r = await this.sender._send('ping', {}, 800)
    r &&
      !((e = r[0]) === null || e === void 0) &&
      e.fulfilled &&
      !((n = r[0]) === null || n === void 0) &&
      n.value.includes('keyChanged') &&
      (this.serviceWorkerReceiverAvailable = !0)
  }
  async notifyServiceWorker(e) {
    if (
      !(
        !this.sender ||
        !this.activeServiceWorker ||
        $C() !== this.activeServiceWorker
      )
    )
      try {
        await this.sender._send(
          'keyChanged',
          { key: e },
          this.serviceWorkerReceiverAvailable ? 800 : 50
        )
      } catch {}
  }
  async _isAvailable() {
    try {
      if (!indexedDB) return !1
      const e = await Ah()
      return await hg(e, Pl, '1'), await dg(e, Pl), !0
    } catch {}
    return !1
  }
  async _withPendingWrite(e) {
    this.pendingWrites++
    try {
      await e()
    } finally {
      this.pendingWrites--
    }
  }
  async _set(e, n) {
    return this._withPendingWrite(
      async () => (
        await this._withRetries((r) => hg(r, e, n)),
        (this.localCache[e] = n),
        this.notifyServiceWorker(e)
      )
    )
  }
  async _get(e) {
    const n = await this._withRetries((r) => qC(r, e))
    return (this.localCache[e] = n), n
  }
  async _remove(e) {
    return this._withPendingWrite(
      async () => (
        await this._withRetries((n) => dg(n, e)),
        delete this.localCache[e],
        this.notifyServiceWorker(e)
      )
    )
  }
  async _poll() {
    const e = await this._withRetries((i) => {
      const s = ou(i, !1).getAll()
      return new Oo(s).toPromise()
    })
    if (!e) return []
    if (this.pendingWrites !== 0) return []
    const n = [],
      r = new Set()
    if (e.length !== 0)
      for (const { fbase_key: i, value: s } of e)
        r.add(i),
          JSON.stringify(this.localCache[i]) !== JSON.stringify(s) &&
            (this.notifyListeners(i, s), n.push(i))
    for (const i of Object.keys(this.localCache))
      this.localCache[i] &&
        !r.has(i) &&
        (this.notifyListeners(i, null), n.push(i))
    return n
  }
  notifyListeners(e, n) {
    this.localCache[e] = n
    const r = this.listeners[e]
    if (r) for (const i of Array.from(r)) i(n)
  }
  startPolling() {
    this.stopPolling(),
      (this.pollTimer = setInterval(async () => this._poll(), GC))
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), (this.pollTimer = null))
  }
  _addListener(e, n) {
    Object.keys(this.listeners).length === 0 && this.startPolling(),
      this.listeners[e] || ((this.listeners[e] = new Set()), this._get(e)),
      this.listeners[e].add(n)
  }
  _removeListener(e, n) {
    this.listeners[e] &&
      (this.listeners[e].delete(n),
      this.listeners[e].size === 0 && delete this.listeners[e]),
      Object.keys(this.listeners).length === 0 && this.stopPolling()
  }
}
E_.type = 'LOCAL'
const YC = E_
new xo(3e4, 6e4)
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function XC(t, e) {
  return e
    ? gn(e)
    : (W(t._popupRedirectResolver, t, 'argument-error'),
      t._popupRedirectResolver)
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Qd extends Kd {
  constructor(e) {
    super('custom', 'custom'), (this.params = e)
  }
  _getIdTokenResponse(e) {
    return Si(e, this._buildIdpRequest())
  }
  _linkToIdToken(e, n) {
    return Si(e, this._buildIdpRequest(n))
  }
  _getReauthenticationResolver(e) {
    return Si(e, this._buildIdpRequest())
  }
  _buildIdpRequest(e) {
    const n = {
      requestUri: this.params.requestUri,
      sessionId: this.params.sessionId,
      postBody: this.params.postBody,
      tenantId: this.params.tenantId,
      pendingToken: this.params.pendingToken,
      returnSecureToken: !0,
      returnIdpCredential: !0,
    }
    return e && (n.idToken = e), n
  }
}
function JC(t) {
  return c_(t.auth, new Qd(t), t.bypassAuthState)
}
function ZC(t) {
  const { auth: e, user: n } = t
  return W(n, e, 'internal-error'), AC(n, new Qd(t), t.bypassAuthState)
}
async function eA(t) {
  const { auth: e, user: n } = t
  return W(n, e, 'internal-error'), CC(n, new Qd(t), t.bypassAuthState)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class w_ {
  constructor(e, n, r, i, s = !1) {
    ;(this.auth = e),
      (this.resolver = r),
      (this.user = i),
      (this.bypassAuthState = s),
      (this.pendingPromise = null),
      (this.eventManager = null),
      (this.filter = Array.isArray(n) ? n : [n])
  }
  execute() {
    return new Promise(async (e, n) => {
      this.pendingPromise = { resolve: e, reject: n }
      try {
        ;(this.eventManager = await this.resolver._initialize(this.auth)),
          await this.onExecution(),
          this.eventManager.registerConsumer(this)
      } catch (r) {
        this.reject(r)
      }
    })
  }
  async onAuthEvent(e) {
    const {
      urlResponse: n,
      sessionId: r,
      postBody: i,
      tenantId: s,
      error: o,
      type: l,
    } = e
    if (o) {
      this.reject(o)
      return
    }
    const u = {
      auth: this.auth,
      requestUri: n,
      sessionId: r,
      tenantId: s || void 0,
      postBody: i || void 0,
      user: this.user,
      bypassAuthState: this.bypassAuthState,
    }
    try {
      this.resolve(await this.getIdpTask(l)(u))
    } catch (h) {
      this.reject(h)
    }
  }
  onError(e) {
    this.reject(e)
  }
  getIdpTask(e) {
    switch (e) {
      case 'signInViaPopup':
      case 'signInViaRedirect':
        return JC
      case 'linkViaPopup':
      case 'linkViaRedirect':
        return eA
      case 'reauthViaPopup':
      case 'reauthViaRedirect':
        return ZC
      default:
        zt(this.auth, 'internal-error')
    }
  }
  resolve(e) {
    Sn(this.pendingPromise, 'Pending promise was never set'),
      this.pendingPromise.resolve(e),
      this.unregisterAndCleanUp()
  }
  reject(e) {
    Sn(this.pendingPromise, 'Pending promise was never set'),
      this.pendingPromise.reject(e),
      this.unregisterAndCleanUp()
  }
  unregisterAndCleanUp() {
    this.eventManager && this.eventManager.unregisterConsumer(this),
      (this.pendingPromise = null),
      this.cleanUp()
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const tA = new xo(2e3, 1e4)
class mi extends w_ {
  constructor(e, n, r, i, s) {
    super(e, n, i, s),
      (this.provider = r),
      (this.authWindow = null),
      (this.pollId = null),
      mi.currentPopupAction && mi.currentPopupAction.cancel(),
      (mi.currentPopupAction = this)
  }
  async executeNotNull() {
    const e = await this.execute()
    return W(e, this.auth, 'internal-error'), e
  }
  async onExecution() {
    Sn(this.filter.length === 1, 'Popup operations only handle one event')
    const e = Gd()
    ;(this.authWindow = await this.resolver._openPopup(
      this.auth,
      this.provider,
      this.filter[0],
      e
    )),
      (this.authWindow.associatedEvent = e),
      this.resolver._originValidation(this.auth).catch((n) => {
        this.reject(n)
      }),
      this.resolver._isIframeWebStorageSupported(this.auth, (n) => {
        n || this.reject(Gt(this.auth, 'web-storage-unsupported'))
      }),
      this.pollUserCancellation()
  }
  get eventId() {
    var e
    return (
      ((e = this.authWindow) === null || e === void 0
        ? void 0
        : e.associatedEvent) || null
    )
  }
  cancel() {
    this.reject(Gt(this.auth, 'cancelled-popup-request'))
  }
  cleanUp() {
    this.authWindow && this.authWindow.close(),
      this.pollId && window.clearTimeout(this.pollId),
      (this.authWindow = null),
      (this.pollId = null),
      (mi.currentPopupAction = null)
  }
  pollUserCancellation() {
    const e = () => {
      var n, r
      if (
        !(
          (r =
            (n = this.authWindow) === null || n === void 0
              ? void 0
              : n.window) === null || r === void 0
        ) &&
        r.closed
      ) {
        this.pollId = window.setTimeout(() => {
          ;(this.pollId = null),
            this.reject(Gt(this.auth, 'popup-closed-by-user'))
        }, 8e3)
        return
      }
      this.pollId = window.setTimeout(e, tA.get())
    }
    e()
  }
}
mi.currentPopupAction = null
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const nA = 'pendingRedirect',
  za = new Map()
class rA extends w_ {
  constructor(e, n, r = !1) {
    super(
      e,
      ['signInViaRedirect', 'linkViaRedirect', 'reauthViaRedirect', 'unknown'],
      n,
      void 0,
      r
    ),
      (this.eventId = null)
  }
  async execute() {
    let e = za.get(this.auth._key())
    if (!e) {
      try {
        const r = (await iA(this.resolver, this.auth))
          ? await super.execute()
          : null
        e = () => Promise.resolve(r)
      } catch (n) {
        e = () => Promise.reject(n)
      }
      za.set(this.auth._key(), e)
    }
    return (
      this.bypassAuthState ||
        za.set(this.auth._key(), () => Promise.resolve(null)),
      e()
    )
  }
  async onAuthEvent(e) {
    if (e.type === 'signInViaRedirect') return super.onAuthEvent(e)
    if (e.type === 'unknown') {
      this.resolve(null)
      return
    }
    if (e.eventId) {
      const n = await this.auth._redirectUserForId(e.eventId)
      if (n) return (this.user = n), super.onAuthEvent(e)
      this.resolve(null)
    }
  }
  async onExecution() {}
  cleanUp() {}
}
async function iA(t, e) {
  const n = aA(e),
    r = oA(t)
  if (!(await r._isAvailable())) return !1
  const i = (await r._get(n)) === 'true'
  return await r._remove(n), i
}
function sA(t, e) {
  za.set(t._key(), e)
}
function oA(t) {
  return gn(t._redirectPersistence)
}
function aA(t) {
  return Ba(nA, t.config.apiKey, t.name)
}
async function lA(t, e, n = !1) {
  if (bt(t.app)) return Promise.reject(Qt(t))
  const r = vr(t),
    i = XC(r, e),
    o = await new rA(r, i, n).execute()
  return (
    o &&
      !n &&
      (delete o.user._redirectEventId,
      await r._persistUserIfCurrent(o.user),
      await r._setRedirectUser(null, e)),
    o
  )
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const uA = 10 * 60 * 1e3
class cA {
  constructor(e) {
    ;(this.auth = e),
      (this.cachedEventUids = new Set()),
      (this.consumers = new Set()),
      (this.queuedRedirectEvent = null),
      (this.hasHandledPotentialRedirect = !1),
      (this.lastProcessedEventTime = Date.now())
  }
  registerConsumer(e) {
    this.consumers.add(e),
      this.queuedRedirectEvent &&
        this.isEventForConsumer(this.queuedRedirectEvent, e) &&
        (this.sendToConsumer(this.queuedRedirectEvent, e),
        this.saveEventToCache(this.queuedRedirectEvent),
        (this.queuedRedirectEvent = null))
  }
  unregisterConsumer(e) {
    this.consumers.delete(e)
  }
  onEvent(e) {
    if (this.hasEventBeenHandled(e)) return !1
    let n = !1
    return (
      this.consumers.forEach((r) => {
        this.isEventForConsumer(e, r) &&
          ((n = !0), this.sendToConsumer(e, r), this.saveEventToCache(e))
      }),
      this.hasHandledPotentialRedirect ||
        !hA(e) ||
        ((this.hasHandledPotentialRedirect = !0),
        n || ((this.queuedRedirectEvent = e), (n = !0))),
      n
    )
  }
  sendToConsumer(e, n) {
    var r
    if (e.error && !T_(e)) {
      const i =
        ((r = e.error.code) === null || r === void 0
          ? void 0
          : r.split('auth/')[1]) || 'internal-error'
      n.onError(Gt(this.auth, i))
    } else n.onAuthEvent(e)
  }
  isEventForConsumer(e, n) {
    const r = n.eventId === null || (!!e.eventId && e.eventId === n.eventId)
    return n.filter.includes(e.type) && r
  }
  hasEventBeenHandled(e) {
    return (
      Date.now() - this.lastProcessedEventTime >= uA &&
        this.cachedEventUids.clear(),
      this.cachedEventUids.has(fg(e))
    )
  }
  saveEventToCache(e) {
    this.cachedEventUids.add(fg(e)), (this.lastProcessedEventTime = Date.now())
  }
}
function fg(t) {
  return [t.type, t.eventId, t.sessionId, t.tenantId].filter((e) => e).join('-')
}
function T_({ type: t, error: e }) {
  return (
    t === 'unknown' && (e == null ? void 0 : e.code) === 'auth/no-auth-event'
  )
}
function hA(t) {
  switch (t.type) {
    case 'signInViaRedirect':
    case 'linkViaRedirect':
    case 'reauthViaRedirect':
      return !0
    case 'unknown':
      return T_(t)
    default:
      return !1
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function dA(t, e = {}) {
  return Nn(t, 'GET', '/v1/projects', e)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const fA = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
  pA = /^https?/
async function mA(t) {
  if (t.config.emulator) return
  const { authorizedDomains: e } = await dA(t)
  for (const n of e)
    try {
      if (gA(n)) return
    } catch {}
  zt(t, 'unauthorized-domain')
}
function gA(t) {
  const e = Sl(),
    { protocol: n, hostname: r } = new URL(e)
  if (t.startsWith('chrome-extension://')) {
    const o = new URL(t)
    return o.hostname === '' && r === ''
      ? n === 'chrome-extension:' &&
          t.replace('chrome-extension://', '') ===
            e.replace('chrome-extension://', '')
      : n === 'chrome-extension:' && o.hostname === r
  }
  if (!pA.test(n)) return !1
  if (fA.test(t)) return r === t
  const i = t.replace(/\./g, '\\.')
  return new RegExp('^(.+\\.' + i + '|' + i + ')$', 'i').test(r)
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const yA = new xo(3e4, 6e4)
function pg() {
  const t = Yt().___jsl
  if (t != null && t.H) {
    for (const e of Object.keys(t.H))
      if (
        ((t.H[e].r = t.H[e].r || []),
        (t.H[e].L = t.H[e].L || []),
        (t.H[e].r = [...t.H[e].L]),
        t.CP)
      )
        for (let n = 0; n < t.CP.length; n++) t.CP[n] = null
  }
}
function vA(t) {
  return new Promise((e, n) => {
    var r, i, s
    function o() {
      pg(),
        gapi.load('gapi.iframes', {
          callback: () => {
            e(gapi.iframes.getContext())
          },
          ontimeout: () => {
            pg(), n(Gt(t, 'network-request-failed'))
          },
          timeout: yA.get(),
        })
    }
    if (
      !(
        (i = (r = Yt().gapi) === null || r === void 0 ? void 0 : r.iframes) ===
          null || i === void 0
      ) &&
      i.Iframe
    )
      e(gapi.iframes.getContext())
    else if (!((s = Yt().gapi) === null || s === void 0) && s.load) o()
    else {
      const l = oC('iframefcb')
      return (
        (Yt()[l] = () => {
          gapi.load ? o() : n(Gt(t, 'network-request-failed'))
        }),
        o_(`${sC()}?onload=${l}`).catch((u) => n(u))
      )
    }
  }).catch((e) => {
    throw (($a = null), e)
  })
}
let $a = null
function _A(t) {
  return ($a = $a || vA(t)), $a
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const EA = new xo(5e3, 15e3),
  wA = '__/auth/iframe',
  TA = 'emulator/auth/iframe',
  IA = {
    style: { position: 'absolute', top: '-100px', width: '1px', height: '1px' },
    'aria-hidden': 'true',
    tabindex: '-1',
  },
  SA = new Map([
    ['identitytoolkit.googleapis.com', 'p'],
    ['staging-identitytoolkit.sandbox.googleapis.com', 's'],
    ['test-identitytoolkit.sandbox.googleapis.com', 't'],
  ])
function CA(t) {
  const e = t.config
  W(e.authDomain, t, 'auth-domain-config-required')
  const n = e.emulator ? $d(e, TA) : `https://${t.config.authDomain}/${wA}`,
    r = { apiKey: e.apiKey, appName: t.name, v: qi },
    i = SA.get(t.config.apiHost)
  i && (r.eid = i)
  const s = t._getFrameworks()
  return s.length && (r.fw = s.join(',')), `${n}?${ko(r).slice(1)}`
}
async function AA(t) {
  const e = await _A(t),
    n = Yt().gapi
  return (
    W(n, t, 'internal-error'),
    e.open(
      {
        where: document.body,
        url: CA(t),
        messageHandlersFilter: n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
        attributes: IA,
        dontclear: !0,
      },
      (r) =>
        new Promise(async (i, s) => {
          await r.restyle({ setHideOnLeave: !1 })
          const o = Gt(t, 'network-request-failed'),
            l = Yt().setTimeout(() => {
              s(o)
            }, EA.get())
          function u() {
            Yt().clearTimeout(l), i(r)
          }
          r.ping(u).then(u, () => {
            s(o)
          })
        })
    )
  )
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const RA = {
    location: 'yes',
    resizable: 'yes',
    statusbar: 'yes',
    toolbar: 'no',
  },
  PA = 500,
  kA = 600,
  xA = '_blank',
  NA = 'http://localhost'
class mg {
  constructor(e) {
    ;(this.window = e), (this.associatedEvent = null)
  }
  close() {
    if (this.window)
      try {
        this.window.close()
      } catch {}
  }
}
function DA(t, e, n, r = PA, i = kA) {
  const s = Math.max((window.screen.availHeight - i) / 2, 0).toString(),
    o = Math.max((window.screen.availWidth - r) / 2, 0).toString()
  let l = ''
  const u = Object.assign(Object.assign({}, RA), {
      width: r.toString(),
      height: i.toString(),
      top: s,
      left: o,
    }),
    h = tt().toLowerCase()
  n && (l = Zv(h) ? xA : n), Xv(h) && ((e = e || NA), (u.scrollbars = 'yes'))
  const f = Object.entries(u).reduce((v, [A, P]) => `${v}${A}=${P},`, '')
  if (YS(h) && l !== '_self') return OA(e || '', l), new mg(null)
  const p = window.open(e || '', l, f)
  W(p, t, 'popup-blocked')
  try {
    p.focus()
  } catch {}
  return new mg(p)
}
function OA(t, e) {
  const n = document.createElement('a')
  ;(n.href = t), (n.target = e)
  const r = document.createEvent('MouseEvent')
  r.initMouseEvent(
    'click',
    !0,
    !0,
    window,
    1,
    0,
    0,
    0,
    0,
    !1,
    !1,
    !1,
    !1,
    1,
    null
  ),
    n.dispatchEvent(r)
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const LA = '__/auth/handler',
  VA = 'emulator/auth/handler',
  MA = encodeURIComponent('fac')
async function gg(t, e, n, r, i, s) {
  W(t.config.authDomain, t, 'auth-domain-config-required'),
    W(t.config.apiKey, t, 'invalid-api-key')
  const o = {
    apiKey: t.config.apiKey,
    appName: t.name,
    authType: n,
    redirectUrl: r,
    v: qi,
    eventId: i,
  }
  if (e instanceof l_) {
    e.setDefaultLanguage(t.languageCode),
      (o.providerId = e.providerId || ''),
      wI(e.getCustomParameters()) ||
        (o.customParameters = JSON.stringify(e.getCustomParameters()))
    for (const [f, p] of Object.entries({})) o[f] = p
  }
  if (e instanceof Do) {
    const f = e.getScopes().filter((p) => p !== '')
    f.length > 0 && (o.scopes = f.join(','))
  }
  t.tenantId && (o.tid = t.tenantId)
  const l = o
  for (const f of Object.keys(l)) l[f] === void 0 && delete l[f]
  const u = await t._getAppCheckToken(),
    h = u ? `#${MA}=${encodeURIComponent(u)}` : ''
  return `${bA(t)}?${ko(l).slice(1)}${h}`
}
function bA({ config: t }) {
  return t.emulator ? $d(t, VA) : `https://${t.authDomain}/${LA}`
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const _c = 'webStorageSupport'
class FA {
  constructor() {
    ;(this.eventManagers = {}),
      (this.iframes = {}),
      (this.originValidationPromises = {}),
      (this._redirectPersistence = g_),
      (this._completeRedirectFn = lA),
      (this._overrideRedirectResult = sA)
  }
  async _openPopup(e, n, r, i) {
    var s
    Sn(
      (s = this.eventManagers[e._key()]) === null || s === void 0
        ? void 0
        : s.manager,
      '_initialize() not called before _openPopup()'
    )
    const o = await gg(e, n, r, Sl(), i)
    return DA(e, o, Gd())
  }
  async _openRedirect(e, n, r, i) {
    await this._originValidation(e)
    const s = await gg(e, n, r, Sl(), i)
    return BC(s), new Promise(() => {})
  }
  _initialize(e) {
    const n = e._key()
    if (this.eventManagers[n]) {
      const { manager: i, promise: s } = this.eventManagers[n]
      return i
        ? Promise.resolve(i)
        : (Sn(s, 'If manager is not set, promise should be'), s)
    }
    const r = this.initAndGetManager(e)
    return (
      (this.eventManagers[n] = { promise: r }),
      r.catch(() => {
        delete this.eventManagers[n]
      }),
      r
    )
  }
  async initAndGetManager(e) {
    const n = await AA(e),
      r = new cA(e)
    return (
      n.register(
        'authEvent',
        (i) => (
          W(i == null ? void 0 : i.authEvent, e, 'invalid-auth-event'),
          { status: r.onEvent(i.authEvent) ? 'ACK' : 'ERROR' }
        ),
        gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
      ),
      (this.eventManagers[e._key()] = { manager: r }),
      (this.iframes[e._key()] = n),
      r
    )
  }
  _isIframeWebStorageSupported(e, n) {
    this.iframes[e._key()].send(
      _c,
      { type: _c },
      (i) => {
        var s
        const o =
          (s = i == null ? void 0 : i[0]) === null || s === void 0
            ? void 0
            : s[_c]
        o !== void 0 && n(!!o), zt(e, 'internal-error')
      },
      gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
    )
  }
  _originValidation(e) {
    const n = e._key()
    return (
      this.originValidationPromises[n] ||
        (this.originValidationPromises[n] = mA(e)),
      this.originValidationPromises[n]
    )
  }
  get _shouldInitProactively() {
    return i_() || Jv() || Wd()
  }
}
const jA = FA
var yg = '@firebase/auth',
  vg = '1.7.8'
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class UA {
  constructor(e) {
    ;(this.auth = e), (this.internalListeners = new Map())
  }
  getUid() {
    var e
    return (
      this.assertAuthConfigured(),
      ((e = this.auth.currentUser) === null || e === void 0 ? void 0 : e.uid) ||
        null
    )
  }
  async getToken(e) {
    return (
      this.assertAuthConfigured(),
      await this.auth._initializationPromise,
      this.auth.currentUser
        ? { accessToken: await this.auth.currentUser.getIdToken(e) }
        : null
    )
  }
  addAuthTokenListener(e) {
    if ((this.assertAuthConfigured(), this.internalListeners.has(e))) return
    const n = this.auth.onIdTokenChanged((r) => {
      e((r == null ? void 0 : r.stsTokenManager.accessToken) || null)
    })
    this.internalListeners.set(e, n), this.updateProactiveRefresh()
  }
  removeAuthTokenListener(e) {
    this.assertAuthConfigured()
    const n = this.internalListeners.get(e)
    n && (this.internalListeners.delete(e), n(), this.updateProactiveRefresh())
  }
  assertAuthConfigured() {
    W(this.auth._initializationPromise, 'dependent-sdk-initialized-before-auth')
  }
  updateProactiveRefresh() {
    this.internalListeners.size > 0
      ? this.auth._startProactiveRefresh()
      : this.auth._stopProactiveRefresh()
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function BA(t) {
  switch (t) {
    case 'Node':
      return 'node'
    case 'ReactNative':
      return 'rn'
    case 'Worker':
      return 'webworker'
    case 'Cordova':
      return 'cordova'
    case 'WebExtension':
      return 'web-extension'
    default:
      return
  }
}
function zA(t) {
  Oi(
    new Fr(
      'auth',
      (e, { options: n }) => {
        const r = e.getProvider('app').getImmediate(),
          i = e.getProvider('heartbeat'),
          s = e.getProvider('app-check-internal'),
          { apiKey: o, authDomain: l } = r.options
        W(o && !o.includes(':'), 'invalid-api-key', { appName: r.name })
        const u = {
            apiKey: o,
            authDomain: l,
            clientPlatform: t,
            apiHost: 'identitytoolkit.googleapis.com',
            tokenApiHost: 'securetoken.googleapis.com',
            apiScheme: 'https',
            sdkClientVersion: s_(t),
          },
          h = new nC(r, i, s, u)
        return hC(h, n), h
      },
      'PUBLIC'
    )
      .setInstantiationMode('EXPLICIT')
      .setInstanceCreatedCallback((e, n, r) => {
        e.getProvider('auth-internal').initialize()
      })
  ),
    Oi(
      new Fr(
        'auth-internal',
        (e) => {
          const n = vr(e.getProvider('auth').getImmediate())
          return ((r) => new UA(r))(n)
        },
        'PRIVATE'
      ).setInstantiationMode('EXPLICIT')
    ),
    or(yg, vg, BA(t)),
    or(yg, vg, 'esm2017')
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const $A = 5 * 60,
  HA = Vv('authIdTokenMaxAge') || $A
let _g = null
const WA = (t) => async (e) => {
  const n = e && (await e.getIdTokenResult()),
    r = n && (new Date().getTime() - Date.parse(n.issuedAtTime)) / 1e3
  if (r && r > HA) return
  const i = n == null ? void 0 : n.token
  _g !== i &&
    ((_g = i),
    await fetch(t, {
      method: i ? 'POST' : 'DELETE',
      headers: i ? { Authorization: `Bearer ${i}` } : {},
    }))
}
function Yd(t = jv()) {
  const e = Ud(t, 'auth')
  if (e.isInitialized()) return e.getImmediate()
  const n = cC(t, { popupRedirectResolver: jA, persistence: [YC, FC, g_] }),
    r = Vv('authTokenSyncURL')
  if (r && typeof isSecureContext == 'boolean' && isSecureContext) {
    const s = new URL(r, location.origin)
    if (location.origin === s.origin) {
      const o = WA(s.toString())
      LC(n, o, () => o(n.currentUser)), OC(n, (l) => o(l))
    }
  }
  const i = Ov('auth')
  return i && dC(n, `http://${i}`), n
}
function KA() {
  var t, e
  return (e =
    (t = document.getElementsByTagName('head')) === null || t === void 0
      ? void 0
      : t[0]) !== null && e !== void 0
    ? e
    : document
}
rC({
  loadJS(t) {
    return new Promise((e, n) => {
      const r = document.createElement('script')
      r.setAttribute('src', t),
        (r.onload = e),
        (r.onerror = (i) => {
          const s = Gt('internal-error')
          ;(s.customData = i), n(s)
        }),
        (r.type = 'text/javascript'),
        (r.charset = 'UTF-8'),
        KA().appendChild(r)
    })
  },
  gapiScript: 'https://apis.google.com/js/api.js',
  recaptchaV2Script: 'https://www.google.com/recaptcha/api.js',
  recaptchaEnterpriseScript:
    'https://www.google.com/recaptcha/enterprise.js?render=',
})
zA('Browser')
var qA = 'firebase',
  GA = '10.13.1'
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ or(qA, GA, 'app')
var Eg =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
    ? window
    : typeof global < 'u'
    ? global
    : typeof self < 'u'
    ? self
    : {}
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/ var Dr, I_
;(function () {
  var t
  /** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/ function e(w, y) {
    function E() {}
    ;(E.prototype = y.prototype),
      (w.D = y.prototype),
      (w.prototype = new E()),
      (w.prototype.constructor = w),
      (w.C = function (T, R, k) {
        for (
          var I = Array(arguments.length - 2), ut = 2;
          ut < arguments.length;
          ut++
        )
          I[ut - 2] = arguments[ut]
        return y.prototype[R].apply(T, I)
      })
  }
  function n() {
    this.blockSize = -1
  }
  function r() {
    ;(this.blockSize = -1),
      (this.blockSize = 64),
      (this.g = Array(4)),
      (this.B = Array(this.blockSize)),
      (this.o = this.h = 0),
      this.s()
  }
  e(r, n),
    (r.prototype.s = function () {
      ;(this.g[0] = 1732584193),
        (this.g[1] = 4023233417),
        (this.g[2] = 2562383102),
        (this.g[3] = 271733878),
        (this.o = this.h = 0)
    })
  function i(w, y, E) {
    E || (E = 0)
    var T = Array(16)
    if (typeof y == 'string')
      for (var R = 0; 16 > R; ++R)
        T[R] =
          y.charCodeAt(E++) |
          (y.charCodeAt(E++) << 8) |
          (y.charCodeAt(E++) << 16) |
          (y.charCodeAt(E++) << 24)
    else
      for (R = 0; 16 > R; ++R)
        T[R] = y[E++] | (y[E++] << 8) | (y[E++] << 16) | (y[E++] << 24)
    ;(y = w.g[0]), (E = w.g[1]), (R = w.g[2])
    var k = w.g[3],
      I = (y + (k ^ (E & (R ^ k))) + T[0] + 3614090360) & 4294967295
    ;(y = E + (((I << 7) & 4294967295) | (I >>> 25))),
      (I = (k + (R ^ (y & (E ^ R))) + T[1] + 3905402710) & 4294967295),
      (k = y + (((I << 12) & 4294967295) | (I >>> 20))),
      (I = (R + (E ^ (k & (y ^ E))) + T[2] + 606105819) & 4294967295),
      (R = k + (((I << 17) & 4294967295) | (I >>> 15))),
      (I = (E + (y ^ (R & (k ^ y))) + T[3] + 3250441966) & 4294967295),
      (E = R + (((I << 22) & 4294967295) | (I >>> 10))),
      (I = (y + (k ^ (E & (R ^ k))) + T[4] + 4118548399) & 4294967295),
      (y = E + (((I << 7) & 4294967295) | (I >>> 25))),
      (I = (k + (R ^ (y & (E ^ R))) + T[5] + 1200080426) & 4294967295),
      (k = y + (((I << 12) & 4294967295) | (I >>> 20))),
      (I = (R + (E ^ (k & (y ^ E))) + T[6] + 2821735955) & 4294967295),
      (R = k + (((I << 17) & 4294967295) | (I >>> 15))),
      (I = (E + (y ^ (R & (k ^ y))) + T[7] + 4249261313) & 4294967295),
      (E = R + (((I << 22) & 4294967295) | (I >>> 10))),
      (I = (y + (k ^ (E & (R ^ k))) + T[8] + 1770035416) & 4294967295),
      (y = E + (((I << 7) & 4294967295) | (I >>> 25))),
      (I = (k + (R ^ (y & (E ^ R))) + T[9] + 2336552879) & 4294967295),
      (k = y + (((I << 12) & 4294967295) | (I >>> 20))),
      (I = (R + (E ^ (k & (y ^ E))) + T[10] + 4294925233) & 4294967295),
      (R = k + (((I << 17) & 4294967295) | (I >>> 15))),
      (I = (E + (y ^ (R & (k ^ y))) + T[11] + 2304563134) & 4294967295),
      (E = R + (((I << 22) & 4294967295) | (I >>> 10))),
      (I = (y + (k ^ (E & (R ^ k))) + T[12] + 1804603682) & 4294967295),
      (y = E + (((I << 7) & 4294967295) | (I >>> 25))),
      (I = (k + (R ^ (y & (E ^ R))) + T[13] + 4254626195) & 4294967295),
      (k = y + (((I << 12) & 4294967295) | (I >>> 20))),
      (I = (R + (E ^ (k & (y ^ E))) + T[14] + 2792965006) & 4294967295),
      (R = k + (((I << 17) & 4294967295) | (I >>> 15))),
      (I = (E + (y ^ (R & (k ^ y))) + T[15] + 1236535329) & 4294967295),
      (E = R + (((I << 22) & 4294967295) | (I >>> 10))),
      (I = (y + (R ^ (k & (E ^ R))) + T[1] + 4129170786) & 4294967295),
      (y = E + (((I << 5) & 4294967295) | (I >>> 27))),
      (I = (k + (E ^ (R & (y ^ E))) + T[6] + 3225465664) & 4294967295),
      (k = y + (((I << 9) & 4294967295) | (I >>> 23))),
      (I = (R + (y ^ (E & (k ^ y))) + T[11] + 643717713) & 4294967295),
      (R = k + (((I << 14) & 4294967295) | (I >>> 18))),
      (I = (E + (k ^ (y & (R ^ k))) + T[0] + 3921069994) & 4294967295),
      (E = R + (((I << 20) & 4294967295) | (I >>> 12))),
      (I = (y + (R ^ (k & (E ^ R))) + T[5] + 3593408605) & 4294967295),
      (y = E + (((I << 5) & 4294967295) | (I >>> 27))),
      (I = (k + (E ^ (R & (y ^ E))) + T[10] + 38016083) & 4294967295),
      (k = y + (((I << 9) & 4294967295) | (I >>> 23))),
      (I = (R + (y ^ (E & (k ^ y))) + T[15] + 3634488961) & 4294967295),
      (R = k + (((I << 14) & 4294967295) | (I >>> 18))),
      (I = (E + (k ^ (y & (R ^ k))) + T[4] + 3889429448) & 4294967295),
      (E = R + (((I << 20) & 4294967295) | (I >>> 12))),
      (I = (y + (R ^ (k & (E ^ R))) + T[9] + 568446438) & 4294967295),
      (y = E + (((I << 5) & 4294967295) | (I >>> 27))),
      (I = (k + (E ^ (R & (y ^ E))) + T[14] + 3275163606) & 4294967295),
      (k = y + (((I << 9) & 4294967295) | (I >>> 23))),
      (I = (R + (y ^ (E & (k ^ y))) + T[3] + 4107603335) & 4294967295),
      (R = k + (((I << 14) & 4294967295) | (I >>> 18))),
      (I = (E + (k ^ (y & (R ^ k))) + T[8] + 1163531501) & 4294967295),
      (E = R + (((I << 20) & 4294967295) | (I >>> 12))),
      (I = (y + (R ^ (k & (E ^ R))) + T[13] + 2850285829) & 4294967295),
      (y = E + (((I << 5) & 4294967295) | (I >>> 27))),
      (I = (k + (E ^ (R & (y ^ E))) + T[2] + 4243563512) & 4294967295),
      (k = y + (((I << 9) & 4294967295) | (I >>> 23))),
      (I = (R + (y ^ (E & (k ^ y))) + T[7] + 1735328473) & 4294967295),
      (R = k + (((I << 14) & 4294967295) | (I >>> 18))),
      (I = (E + (k ^ (y & (R ^ k))) + T[12] + 2368359562) & 4294967295),
      (E = R + (((I << 20) & 4294967295) | (I >>> 12))),
      (I = (y + (E ^ R ^ k) + T[5] + 4294588738) & 4294967295),
      (y = E + (((I << 4) & 4294967295) | (I >>> 28))),
      (I = (k + (y ^ E ^ R) + T[8] + 2272392833) & 4294967295),
      (k = y + (((I << 11) & 4294967295) | (I >>> 21))),
      (I = (R + (k ^ y ^ E) + T[11] + 1839030562) & 4294967295),
      (R = k + (((I << 16) & 4294967295) | (I >>> 16))),
      (I = (E + (R ^ k ^ y) + T[14] + 4259657740) & 4294967295),
      (E = R + (((I << 23) & 4294967295) | (I >>> 9))),
      (I = (y + (E ^ R ^ k) + T[1] + 2763975236) & 4294967295),
      (y = E + (((I << 4) & 4294967295) | (I >>> 28))),
      (I = (k + (y ^ E ^ R) + T[4] + 1272893353) & 4294967295),
      (k = y + (((I << 11) & 4294967295) | (I >>> 21))),
      (I = (R + (k ^ y ^ E) + T[7] + 4139469664) & 4294967295),
      (R = k + (((I << 16) & 4294967295) | (I >>> 16))),
      (I = (E + (R ^ k ^ y) + T[10] + 3200236656) & 4294967295),
      (E = R + (((I << 23) & 4294967295) | (I >>> 9))),
      (I = (y + (E ^ R ^ k) + T[13] + 681279174) & 4294967295),
      (y = E + (((I << 4) & 4294967295) | (I >>> 28))),
      (I = (k + (y ^ E ^ R) + T[0] + 3936430074) & 4294967295),
      (k = y + (((I << 11) & 4294967295) | (I >>> 21))),
      (I = (R + (k ^ y ^ E) + T[3] + 3572445317) & 4294967295),
      (R = k + (((I << 16) & 4294967295) | (I >>> 16))),
      (I = (E + (R ^ k ^ y) + T[6] + 76029189) & 4294967295),
      (E = R + (((I << 23) & 4294967295) | (I >>> 9))),
      (I = (y + (E ^ R ^ k) + T[9] + 3654602809) & 4294967295),
      (y = E + (((I << 4) & 4294967295) | (I >>> 28))),
      (I = (k + (y ^ E ^ R) + T[12] + 3873151461) & 4294967295),
      (k = y + (((I << 11) & 4294967295) | (I >>> 21))),
      (I = (R + (k ^ y ^ E) + T[15] + 530742520) & 4294967295),
      (R = k + (((I << 16) & 4294967295) | (I >>> 16))),
      (I = (E + (R ^ k ^ y) + T[2] + 3299628645) & 4294967295),
      (E = R + (((I << 23) & 4294967295) | (I >>> 9))),
      (I = (y + (R ^ (E | ~k)) + T[0] + 4096336452) & 4294967295),
      (y = E + (((I << 6) & 4294967295) | (I >>> 26))),
      (I = (k + (E ^ (y | ~R)) + T[7] + 1126891415) & 4294967295),
      (k = y + (((I << 10) & 4294967295) | (I >>> 22))),
      (I = (R + (y ^ (k | ~E)) + T[14] + 2878612391) & 4294967295),
      (R = k + (((I << 15) & 4294967295) | (I >>> 17))),
      (I = (E + (k ^ (R | ~y)) + T[5] + 4237533241) & 4294967295),
      (E = R + (((I << 21) & 4294967295) | (I >>> 11))),
      (I = (y + (R ^ (E | ~k)) + T[12] + 1700485571) & 4294967295),
      (y = E + (((I << 6) & 4294967295) | (I >>> 26))),
      (I = (k + (E ^ (y | ~R)) + T[3] + 2399980690) & 4294967295),
      (k = y + (((I << 10) & 4294967295) | (I >>> 22))),
      (I = (R + (y ^ (k | ~E)) + T[10] + 4293915773) & 4294967295),
      (R = k + (((I << 15) & 4294967295) | (I >>> 17))),
      (I = (E + (k ^ (R | ~y)) + T[1] + 2240044497) & 4294967295),
      (E = R + (((I << 21) & 4294967295) | (I >>> 11))),
      (I = (y + (R ^ (E | ~k)) + T[8] + 1873313359) & 4294967295),
      (y = E + (((I << 6) & 4294967295) | (I >>> 26))),
      (I = (k + (E ^ (y | ~R)) + T[15] + 4264355552) & 4294967295),
      (k = y + (((I << 10) & 4294967295) | (I >>> 22))),
      (I = (R + (y ^ (k | ~E)) + T[6] + 2734768916) & 4294967295),
      (R = k + (((I << 15) & 4294967295) | (I >>> 17))),
      (I = (E + (k ^ (R | ~y)) + T[13] + 1309151649) & 4294967295),
      (E = R + (((I << 21) & 4294967295) | (I >>> 11))),
      (I = (y + (R ^ (E | ~k)) + T[4] + 4149444226) & 4294967295),
      (y = E + (((I << 6) & 4294967295) | (I >>> 26))),
      (I = (k + (E ^ (y | ~R)) + T[11] + 3174756917) & 4294967295),
      (k = y + (((I << 10) & 4294967295) | (I >>> 22))),
      (I = (R + (y ^ (k | ~E)) + T[2] + 718787259) & 4294967295),
      (R = k + (((I << 15) & 4294967295) | (I >>> 17))),
      (I = (E + (k ^ (R | ~y)) + T[9] + 3951481745) & 4294967295),
      (w.g[0] = (w.g[0] + y) & 4294967295),
      (w.g[1] =
        (w.g[1] + (R + (((I << 21) & 4294967295) | (I >>> 11)))) & 4294967295),
      (w.g[2] = (w.g[2] + R) & 4294967295),
      (w.g[3] = (w.g[3] + k) & 4294967295)
  }
  ;(r.prototype.u = function (w, y) {
    y === void 0 && (y = w.length)
    for (var E = y - this.blockSize, T = this.B, R = this.h, k = 0; k < y; ) {
      if (R == 0) for (; k <= E; ) i(this, w, k), (k += this.blockSize)
      if (typeof w == 'string') {
        for (; k < y; )
          if (((T[R++] = w.charCodeAt(k++)), R == this.blockSize)) {
            i(this, T), (R = 0)
            break
          }
      } else
        for (; k < y; )
          if (((T[R++] = w[k++]), R == this.blockSize)) {
            i(this, T), (R = 0)
            break
          }
    }
    ;(this.h = R), (this.o += y)
  }),
    (r.prototype.v = function () {
      var w = Array(
        (56 > this.h ? this.blockSize : 2 * this.blockSize) - this.h
      )
      w[0] = 128
      for (var y = 1; y < w.length - 8; ++y) w[y] = 0
      var E = 8 * this.o
      for (y = w.length - 8; y < w.length; ++y) (w[y] = E & 255), (E /= 256)
      for (this.u(w), w = Array(16), y = E = 0; 4 > y; ++y)
        for (var T = 0; 32 > T; T += 8) w[E++] = (this.g[y] >>> T) & 255
      return w
    })
  function s(w, y) {
    var E = l
    return Object.prototype.hasOwnProperty.call(E, w) ? E[w] : (E[w] = y(w))
  }
  function o(w, y) {
    this.h = y
    for (var E = [], T = !0, R = w.length - 1; 0 <= R; R--) {
      var k = w[R] | 0
      ;(T && k == y) || ((E[R] = k), (T = !1))
    }
    this.g = E
  }
  var l = {}
  function u(w) {
    return -128 <= w && 128 > w
      ? s(w, function (y) {
          return new o([y | 0], 0 > y ? -1 : 0)
        })
      : new o([w | 0], 0 > w ? -1 : 0)
  }
  function h(w) {
    if (isNaN(w) || !isFinite(w)) return p
    if (0 > w) return D(h(-w))
    for (var y = [], E = 1, T = 0; w >= E; T++)
      (y[T] = (w / E) | 0), (E *= 4294967296)
    return new o(y, 0)
  }
  function f(w, y) {
    if (w.length == 0) throw Error('number format error: empty string')
    if (((y = y || 10), 2 > y || 36 < y))
      throw Error('radix out of range: ' + y)
    if (w.charAt(0) == '-') return D(f(w.substring(1), y))
    if (0 <= w.indexOf('-'))
      throw Error('number format error: interior "-" character')
    for (var E = h(Math.pow(y, 8)), T = p, R = 0; R < w.length; R += 8) {
      var k = Math.min(8, w.length - R),
        I = parseInt(w.substring(R, R + k), y)
      8 > k
        ? ((k = h(Math.pow(y, k))), (T = T.j(k).add(h(I))))
        : ((T = T.j(E)), (T = T.add(h(I))))
    }
    return T
  }
  var p = u(0),
    v = u(1),
    A = u(16777216)
  ;(t = o.prototype),
    (t.m = function () {
      if (N(this)) return -D(this).m()
      for (var w = 0, y = 1, E = 0; E < this.g.length; E++) {
        var T = this.i(E)
        ;(w += (0 <= T ? T : 4294967296 + T) * y), (y *= 4294967296)
      }
      return w
    }),
    (t.toString = function (w) {
      if (((w = w || 10), 2 > w || 36 < w))
        throw Error('radix out of range: ' + w)
      if (P(this)) return '0'
      if (N(this)) return '-' + D(this).toString(w)
      for (var y = h(Math.pow(w, 6)), E = this, T = ''; ; ) {
        var R = L(E, y).g
        E = C(E, R.j(y))
        var k = ((0 < E.g.length ? E.g[0] : E.h) >>> 0).toString(w)
        if (((E = R), P(E))) return k + T
        for (; 6 > k.length; ) k = '0' + k
        T = k + T
      }
    }),
    (t.i = function (w) {
      return 0 > w ? 0 : w < this.g.length ? this.g[w] : this.h
    })
  function P(w) {
    if (w.h != 0) return !1
    for (var y = 0; y < w.g.length; y++) if (w.g[y] != 0) return !1
    return !0
  }
  function N(w) {
    return w.h == -1
  }
  t.l = function (w) {
    return (w = C(this, w)), N(w) ? -1 : P(w) ? 0 : 1
  }
  function D(w) {
    for (var y = w.g.length, E = [], T = 0; T < y; T++) E[T] = ~w.g[T]
    return new o(E, ~w.h).add(v)
  }
  ;(t.abs = function () {
    return N(this) ? D(this) : this
  }),
    (t.add = function (w) {
      for (
        var y = Math.max(this.g.length, w.g.length), E = [], T = 0, R = 0;
        R <= y;
        R++
      ) {
        var k = T + (this.i(R) & 65535) + (w.i(R) & 65535),
          I = (k >>> 16) + (this.i(R) >>> 16) + (w.i(R) >>> 16)
        ;(T = I >>> 16), (k &= 65535), (I &= 65535), (E[R] = (I << 16) | k)
      }
      return new o(E, E[E.length - 1] & -2147483648 ? -1 : 0)
    })
  function C(w, y) {
    return w.add(D(y))
  }
  t.j = function (w) {
    if (P(this) || P(w)) return p
    if (N(this)) return N(w) ? D(this).j(D(w)) : D(D(this).j(w))
    if (N(w)) return D(this.j(D(w)))
    if (0 > this.l(A) && 0 > w.l(A)) return h(this.m() * w.m())
    for (var y = this.g.length + w.g.length, E = [], T = 0; T < 2 * y; T++)
      E[T] = 0
    for (T = 0; T < this.g.length; T++)
      for (var R = 0; R < w.g.length; R++) {
        var k = this.i(T) >>> 16,
          I = this.i(T) & 65535,
          ut = w.i(R) >>> 16,
          tn = w.i(R) & 65535
        ;(E[2 * T + 2 * R] += I * tn),
          _(E, 2 * T + 2 * R),
          (E[2 * T + 2 * R + 1] += k * tn),
          _(E, 2 * T + 2 * R + 1),
          (E[2 * T + 2 * R + 1] += I * ut),
          _(E, 2 * T + 2 * R + 1),
          (E[2 * T + 2 * R + 2] += k * ut),
          _(E, 2 * T + 2 * R + 2)
      }
    for (T = 0; T < y; T++) E[T] = (E[2 * T + 1] << 16) | E[2 * T]
    for (T = y; T < 2 * y; T++) E[T] = 0
    return new o(E, 0)
  }
  function _(w, y) {
    for (; (w[y] & 65535) != w[y]; )
      (w[y + 1] += w[y] >>> 16), (w[y] &= 65535), y++
  }
  function S(w, y) {
    ;(this.g = w), (this.h = y)
  }
  function L(w, y) {
    if (P(y)) throw Error('division by zero')
    if (P(w)) return new S(p, p)
    if (N(w)) return (y = L(D(w), y)), new S(D(y.g), D(y.h))
    if (N(y)) return (y = L(w, D(y))), new S(D(y.g), y.h)
    if (30 < w.g.length) {
      if (N(w) || N(y))
        throw Error('slowDivide_ only works with positive integers.')
      for (var E = v, T = y; 0 >= T.l(w); ) (E = U(E)), (T = U(T))
      var R = j(E, 1),
        k = j(T, 1)
      for (T = j(T, 2), E = j(E, 2); !P(T); ) {
        var I = k.add(T)
        0 >= I.l(w) && ((R = R.add(E)), (k = I)), (T = j(T, 1)), (E = j(E, 1))
      }
      return (y = C(w, R.j(y))), new S(R, y)
    }
    for (R = p; 0 <= w.l(y); ) {
      for (
        E = Math.max(1, Math.floor(w.m() / y.m())),
          T = Math.ceil(Math.log(E) / Math.LN2),
          T = 48 >= T ? 1 : Math.pow(2, T - 48),
          k = h(E),
          I = k.j(y);
        N(I) || 0 < I.l(w);

      )
        (E -= T), (k = h(E)), (I = k.j(y))
      P(k) && (k = v), (R = R.add(k)), (w = C(w, I))
    }
    return new S(R, w)
  }
  ;(t.A = function (w) {
    return L(this, w).h
  }),
    (t.and = function (w) {
      for (
        var y = Math.max(this.g.length, w.g.length), E = [], T = 0;
        T < y;
        T++
      )
        E[T] = this.i(T) & w.i(T)
      return new o(E, this.h & w.h)
    }),
    (t.or = function (w) {
      for (
        var y = Math.max(this.g.length, w.g.length), E = [], T = 0;
        T < y;
        T++
      )
        E[T] = this.i(T) | w.i(T)
      return new o(E, this.h | w.h)
    }),
    (t.xor = function (w) {
      for (
        var y = Math.max(this.g.length, w.g.length), E = [], T = 0;
        T < y;
        T++
      )
        E[T] = this.i(T) ^ w.i(T)
      return new o(E, this.h ^ w.h)
    })
  function U(w) {
    for (var y = w.g.length + 1, E = [], T = 0; T < y; T++)
      E[T] = (w.i(T) << 1) | (w.i(T - 1) >>> 31)
    return new o(E, w.h)
  }
  function j(w, y) {
    var E = y >> 5
    y %= 32
    for (var T = w.g.length - E, R = [], k = 0; k < T; k++)
      R[k] =
        0 < y ? (w.i(k + E) >>> y) | (w.i(k + E + 1) << (32 - y)) : w.i(k + E)
    return new o(R, w.h)
  }
  ;(r.prototype.digest = r.prototype.v),
    (r.prototype.reset = r.prototype.s),
    (r.prototype.update = r.prototype.u),
    (I_ = r),
    (o.prototype.add = o.prototype.add),
    (o.prototype.multiply = o.prototype.j),
    (o.prototype.modulo = o.prototype.A),
    (o.prototype.compare = o.prototype.l),
    (o.prototype.toNumber = o.prototype.m),
    (o.prototype.toString = o.prototype.toString),
    (o.prototype.getBits = o.prototype.i),
    (o.fromNumber = h),
    (o.fromString = f),
    (Dr = o)
}).apply(
  typeof Eg < 'u'
    ? Eg
    : typeof self < 'u'
    ? self
    : typeof window < 'u'
    ? window
    : {}
)
var Ta =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
    ? window
    : typeof global < 'u'
    ? global
    : typeof self < 'u'
    ? self
    : {}
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/ var S_, C_, ks, A_, Ha, Rh, R_, P_, k_
;(function () {
  var t,
    e =
      typeof Object.defineProperties == 'function'
        ? Object.defineProperty
        : function (a, c, d) {
            return (
              a == Array.prototype || a == Object.prototype || (a[c] = d.value),
              a
            )
          }
  function n(a) {
    a = [
      typeof globalThis == 'object' && globalThis,
      a,
      typeof window == 'object' && window,
      typeof self == 'object' && self,
      typeof Ta == 'object' && Ta,
    ]
    for (var c = 0; c < a.length; ++c) {
      var d = a[c]
      if (d && d.Math == Math) return d
    }
    throw Error('Cannot find global object')
  }
  var r = n(this)
  function i(a, c) {
    if (c)
      e: {
        var d = r
        a = a.split('.')
        for (var m = 0; m < a.length - 1; m++) {
          var x = a[m]
          if (!(x in d)) break e
          d = d[x]
        }
        ;(a = a[a.length - 1]),
          (m = d[a]),
          (c = c(m)),
          c != m &&
            c != null &&
            e(d, a, { configurable: !0, writable: !0, value: c })
      }
  }
  function s(a, c) {
    a instanceof String && (a += '')
    var d = 0,
      m = !1,
      x = {
        next: function () {
          if (!m && d < a.length) {
            var O = d++
            return { value: c(O, a[O]), done: !1 }
          }
          return (m = !0), { done: !0, value: void 0 }
        },
      }
    return (
      (x[Symbol.iterator] = function () {
        return x
      }),
      x
    )
  }
  i('Array.prototype.values', function (a) {
    return (
      a ||
      function () {
        return s(this, function (c, d) {
          return d
        })
      }
    )
  })
  /** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/ var o = o || {},
    l = this || self
  function u(a) {
    var c = typeof a
    return (
      (c = c != 'object' ? c : a ? (Array.isArray(a) ? 'array' : c) : 'null'),
      c == 'array' || (c == 'object' && typeof a.length == 'number')
    )
  }
  function h(a) {
    var c = typeof a
    return (c == 'object' && a != null) || c == 'function'
  }
  function f(a, c, d) {
    return a.call.apply(a.bind, arguments)
  }
  function p(a, c, d) {
    if (!a) throw Error()
    if (2 < arguments.length) {
      var m = Array.prototype.slice.call(arguments, 2)
      return function () {
        var x = Array.prototype.slice.call(arguments)
        return Array.prototype.unshift.apply(x, m), a.apply(c, x)
      }
    }
    return function () {
      return a.apply(c, arguments)
    }
  }
  function v(a, c, d) {
    return (
      (v =
        Function.prototype.bind &&
        Function.prototype.bind.toString().indexOf('native code') != -1
          ? f
          : p),
      v.apply(null, arguments)
    )
  }
  function A(a, c) {
    var d = Array.prototype.slice.call(arguments, 1)
    return function () {
      var m = d.slice()
      return m.push.apply(m, arguments), a.apply(this, m)
    }
  }
  function P(a, c) {
    function d() {}
    ;(d.prototype = c.prototype),
      (a.aa = c.prototype),
      (a.prototype = new d()),
      (a.prototype.constructor = a),
      (a.Qb = function (m, x, O) {
        for (
          var B = Array(arguments.length - 2), le = 2;
          le < arguments.length;
          le++
        )
          B[le - 2] = arguments[le]
        return c.prototype[x].apply(m, B)
      })
  }
  function N(a) {
    const c = a.length
    if (0 < c) {
      const d = Array(c)
      for (let m = 0; m < c; m++) d[m] = a[m]
      return d
    }
    return []
  }
  function D(a, c) {
    for (let d = 1; d < arguments.length; d++) {
      const m = arguments[d]
      if (u(m)) {
        const x = a.length || 0,
          O = m.length || 0
        a.length = x + O
        for (let B = 0; B < O; B++) a[x + B] = m[B]
      } else a.push(m)
    }
  }
  class C {
    constructor(c, d) {
      ;(this.i = c), (this.j = d), (this.h = 0), (this.g = null)
    }
    get() {
      let c
      return (
        0 < this.h
          ? (this.h--, (c = this.g), (this.g = c.next), (c.next = null))
          : (c = this.i()),
        c
      )
    }
  }
  function _(a) {
    return /^[\s\xa0]*$/.test(a)
  }
  function S() {
    var a = l.navigator
    return a && (a = a.userAgent) ? a : ''
  }
  function L(a) {
    return L[' '](a), a
  }
  L[' '] = function () {}
  var U =
    S().indexOf('Gecko') != -1 &&
    !(S().toLowerCase().indexOf('webkit') != -1 && S().indexOf('Edge') == -1) &&
    !(S().indexOf('Trident') != -1 || S().indexOf('MSIE') != -1) &&
    S().indexOf('Edge') == -1
  function j(a, c, d) {
    for (const m in a) c.call(d, a[m], m, a)
  }
  function w(a, c) {
    for (const d in a) c.call(void 0, a[d], d, a)
  }
  function y(a) {
    const c = {}
    for (const d in a) c[d] = a[d]
    return c
  }
  const E =
    'constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf'.split(
      ' '
    )
  function T(a, c) {
    let d, m
    for (let x = 1; x < arguments.length; x++) {
      m = arguments[x]
      for (d in m) a[d] = m[d]
      for (let O = 0; O < E.length; O++)
        (d = E[O]), Object.prototype.hasOwnProperty.call(m, d) && (a[d] = m[d])
    }
  }
  function R(a) {
    var c = 1
    a = a.split(':')
    const d = []
    for (; 0 < c && a.length; ) d.push(a.shift()), c--
    return a.length && d.push(a.join(':')), d
  }
  function k(a) {
    l.setTimeout(() => {
      throw a
    }, 0)
  }
  function I() {
    var a = G
    let c = null
    return (
      a.g &&
        ((c = a.g), (a.g = a.g.next), a.g || (a.h = null), (c.next = null)),
      c
    )
  }
  class ut {
    constructor() {
      this.h = this.g = null
    }
    add(c, d) {
      const m = tn.get()
      m.set(c, d), this.h ? (this.h.next = m) : (this.g = m), (this.h = m)
    }
  }
  var tn = new C(
    () => new Zi(),
    (a) => a.reset()
  )
  class Zi {
    constructor() {
      this.next = this.g = this.h = null
    }
    set(c, d) {
      ;(this.h = c), (this.g = d), (this.next = null)
    }
    reset() {
      this.next = this.g = this.h = null
    }
  }
  let nn,
    z = !1,
    G = new ut(),
    J = () => {
      const a = l.Promise.resolve(void 0)
      nn = () => {
        a.then(me)
      }
    }
  var me = () => {
    for (var a; (a = I()); ) {
      try {
        a.h.call(a.g)
      } catch (d) {
        k(d)
      }
      var c = tn
      c.j(a), 100 > c.h && (c.h++, (a.next = c.g), (c.g = a))
    }
    z = !1
  }
  function ae() {
    ;(this.s = this.s), (this.C = this.C)
  }
  ;(ae.prototype.s = !1),
    (ae.prototype.ma = function () {
      this.s || ((this.s = !0), this.N())
    }),
    (ae.prototype.N = function () {
      if (this.C) for (; this.C.length; ) this.C.shift()()
    })
  function Ie(a, c) {
    ;(this.type = a), (this.g = this.target = c), (this.defaultPrevented = !1)
  }
  Ie.prototype.h = function () {
    this.defaultPrevented = !0
  }
  var rn = (function () {
    if (!l.addEventListener || !Object.defineProperty) return !1
    var a = !1,
      c = Object.defineProperty({}, 'passive', {
        get: function () {
          a = !0
        },
      })
    try {
      const d = () => {}
      l.addEventListener('test', d, c), l.removeEventListener('test', d, c)
    } catch {}
    return a
  })()
  function sn(a, c) {
    if (
      (Ie.call(this, a ? a.type : ''),
      (this.relatedTarget = this.g = this.target = null),
      (this.button =
        this.screenY =
        this.screenX =
        this.clientY =
        this.clientX =
          0),
      (this.key = ''),
      (this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1),
      (this.state = null),
      (this.pointerId = 0),
      (this.pointerType = ''),
      (this.i = null),
      a)
    ) {
      var d = (this.type = a.type),
        m =
          a.changedTouches && a.changedTouches.length
            ? a.changedTouches[0]
            : null
      if (
        ((this.target = a.target || a.srcElement),
        (this.g = c),
        (c = a.relatedTarget))
      ) {
        if (U) {
          e: {
            try {
              L(c.nodeName)
              var x = !0
              break e
            } catch {}
            x = !1
          }
          x || (c = null)
        }
      } else
        d == 'mouseover'
          ? (c = a.fromElement)
          : d == 'mouseout' && (c = a.toElement)
      ;(this.relatedTarget = c),
        m
          ? ((this.clientX = m.clientX !== void 0 ? m.clientX : m.pageX),
            (this.clientY = m.clientY !== void 0 ? m.clientY : m.pageY),
            (this.screenX = m.screenX || 0),
            (this.screenY = m.screenY || 0))
          : ((this.clientX = a.clientX !== void 0 ? a.clientX : a.pageX),
            (this.clientY = a.clientY !== void 0 ? a.clientY : a.pageY),
            (this.screenX = a.screenX || 0),
            (this.screenY = a.screenY || 0)),
        (this.button = a.button),
        (this.key = a.key || ''),
        (this.ctrlKey = a.ctrlKey),
        (this.altKey = a.altKey),
        (this.shiftKey = a.shiftKey),
        (this.metaKey = a.metaKey),
        (this.pointerId = a.pointerId || 0),
        (this.pointerType =
          typeof a.pointerType == 'string'
            ? a.pointerType
            : on[a.pointerType] || ''),
        (this.state = a.state),
        (this.i = a),
        a.defaultPrevented && sn.aa.h.call(this)
    }
  }
  P(sn, Ie)
  var on = { 2: 'touch', 3: 'pen', 4: 'mouse' }
  sn.prototype.h = function () {
    sn.aa.h.call(this)
    var a = this.i
    a.preventDefault ? a.preventDefault() : (a.returnValue = !1)
  }
  var an = 'closure_listenable_' + ((1e6 * Math.random()) | 0),
    q2 = 0
  function G2(a, c, d, m, x) {
    ;(this.listener = a),
      (this.proxy = null),
      (this.src = c),
      (this.type = d),
      (this.capture = !!m),
      (this.ha = x),
      (this.key = ++q2),
      (this.da = this.fa = !1)
  }
  function Bo(a) {
    ;(a.da = !0),
      (a.listener = null),
      (a.proxy = null),
      (a.src = null),
      (a.ha = null)
  }
  function zo(a) {
    ;(this.src = a), (this.g = {}), (this.h = 0)
  }
  zo.prototype.add = function (a, c, d, m, x) {
    var O = a.toString()
    ;(a = this.g[O]), a || ((a = this.g[O] = []), this.h++)
    var B = vu(a, c, m, x)
    return (
      -1 < B
        ? ((c = a[B]), d || (c.fa = !1))
        : ((c = new G2(c, this.src, O, !!m, x)), (c.fa = d), a.push(c)),
      c
    )
  }
  function yu(a, c) {
    var d = c.type
    if (d in a.g) {
      var m = a.g[d],
        x = Array.prototype.indexOf.call(m, c, void 0),
        O
      ;(O = 0 <= x) && Array.prototype.splice.call(m, x, 1),
        O && (Bo(c), a.g[d].length == 0 && (delete a.g[d], a.h--))
    }
  }
  function vu(a, c, d, m) {
    for (var x = 0; x < a.length; ++x) {
      var O = a[x]
      if (!O.da && O.listener == c && O.capture == !!d && O.ha == m) return x
    }
    return -1
  }
  var _u = 'closure_lm_' + ((1e6 * Math.random()) | 0),
    Eu = {}
  function kf(a, c, d, m, x) {
    if (Array.isArray(c)) {
      for (var O = 0; O < c.length; O++) kf(a, c[O], d, m, x)
      return null
    }
    return (
      (d = Df(d)),
      a && a[an]
        ? a.K(c, d, h(m) ? !!m.capture : !!m, x)
        : Q2(a, c, d, !1, m, x)
    )
  }
  function Q2(a, c, d, m, x, O) {
    if (!c) throw Error('Invalid event type')
    var B = h(x) ? !!x.capture : !!x,
      le = Tu(a)
    if ((le || (a[_u] = le = new zo(a)), (d = le.add(c, d, m, B, O)), d.proxy))
      return d
    if (
      ((m = Y2()),
      (d.proxy = m),
      (m.src = a),
      (m.listener = d),
      a.addEventListener)
    )
      rn || (x = B),
        x === void 0 && (x = !1),
        a.addEventListener(c.toString(), m, x)
    else if (a.attachEvent) a.attachEvent(Nf(c.toString()), m)
    else if (a.addListener && a.removeListener) a.addListener(m)
    else throw Error('addEventListener and attachEvent are unavailable.')
    return d
  }
  function Y2() {
    function a(d) {
      return c.call(a.src, a.listener, d)
    }
    const c = X2
    return a
  }
  function xf(a, c, d, m, x) {
    if (Array.isArray(c))
      for (var O = 0; O < c.length; O++) xf(a, c[O], d, m, x)
    else
      (m = h(m) ? !!m.capture : !!m),
        (d = Df(d)),
        a && a[an]
          ? ((a = a.i),
            (c = String(c).toString()),
            c in a.g &&
              ((O = a.g[c]),
              (d = vu(O, d, m, x)),
              -1 < d &&
                (Bo(O[d]),
                Array.prototype.splice.call(O, d, 1),
                O.length == 0 && (delete a.g[c], a.h--))))
          : a &&
            (a = Tu(a)) &&
            ((c = a.g[c.toString()]),
            (a = -1),
            c && (a = vu(c, d, m, x)),
            (d = -1 < a ? c[a] : null) && wu(d))
  }
  function wu(a) {
    if (typeof a != 'number' && a && !a.da) {
      var c = a.src
      if (c && c[an]) yu(c.i, a)
      else {
        var d = a.type,
          m = a.proxy
        c.removeEventListener
          ? c.removeEventListener(d, m, a.capture)
          : c.detachEvent
          ? c.detachEvent(Nf(d), m)
          : c.addListener && c.removeListener && c.removeListener(m),
          (d = Tu(c))
            ? (yu(d, a), d.h == 0 && ((d.src = null), (c[_u] = null)))
            : Bo(a)
      }
    }
  }
  function Nf(a) {
    return a in Eu ? Eu[a] : (Eu[a] = 'on' + a)
  }
  function X2(a, c) {
    if (a.da) a = !0
    else {
      c = new sn(c, this)
      var d = a.listener,
        m = a.ha || a.src
      a.fa && wu(a), (a = d.call(m, c))
    }
    return a
  }
  function Tu(a) {
    return (a = a[_u]), a instanceof zo ? a : null
  }
  var Iu = '__closure_events_fn_' + ((1e9 * Math.random()) >>> 0)
  function Df(a) {
    return typeof a == 'function'
      ? a
      : (a[Iu] ||
          (a[Iu] = function (c) {
            return a.handleEvent(c)
          }),
        a[Iu])
  }
  function We() {
    ae.call(this), (this.i = new zo(this)), (this.M = this), (this.F = null)
  }
  P(We, ae),
    (We.prototype[an] = !0),
    (We.prototype.removeEventListener = function (a, c, d, m) {
      xf(this, a, c, d, m)
    })
  function nt(a, c) {
    var d,
      m = a.F
    if (m) for (d = []; m; m = m.F) d.push(m)
    if (((a = a.M), (m = c.type || c), typeof c == 'string')) c = new Ie(c, a)
    else if (c instanceof Ie) c.target = c.target || a
    else {
      var x = c
      ;(c = new Ie(m, a)), T(c, x)
    }
    if (((x = !0), d))
      for (var O = d.length - 1; 0 <= O; O--) {
        var B = (c.g = d[O])
        x = $o(B, m, !0, c) && x
      }
    if (
      ((B = c.g = a), (x = $o(B, m, !0, c) && x), (x = $o(B, m, !1, c) && x), d)
    )
      for (O = 0; O < d.length; O++)
        (B = c.g = d[O]), (x = $o(B, m, !1, c) && x)
  }
  ;(We.prototype.N = function () {
    if ((We.aa.N.call(this), this.i)) {
      var a = this.i,
        c
      for (c in a.g) {
        for (var d = a.g[c], m = 0; m < d.length; m++) Bo(d[m])
        delete a.g[c], a.h--
      }
    }
    this.F = null
  }),
    (We.prototype.K = function (a, c, d, m) {
      return this.i.add(String(a), c, !1, d, m)
    }),
    (We.prototype.L = function (a, c, d, m) {
      return this.i.add(String(a), c, !0, d, m)
    })
  function $o(a, c, d, m) {
    if (((c = a.i.g[String(c)]), !c)) return !0
    c = c.concat()
    for (var x = !0, O = 0; O < c.length; ++O) {
      var B = c[O]
      if (B && !B.da && B.capture == d) {
        var le = B.listener,
          be = B.ha || B.src
        B.fa && yu(a.i, B), (x = le.call(be, m) !== !1 && x)
      }
    }
    return x && !m.defaultPrevented
  }
  function Of(a, c, d) {
    if (typeof a == 'function') d && (a = v(a, d))
    else if (a && typeof a.handleEvent == 'function') a = v(a.handleEvent, a)
    else throw Error('Invalid listener argument')
    return 2147483647 < Number(c) ? -1 : l.setTimeout(a, c || 0)
  }
  function Lf(a) {
    a.g = Of(() => {
      ;(a.g = null), a.i && ((a.i = !1), Lf(a))
    }, a.l)
    const c = a.h
    ;(a.h = null), a.m.apply(null, c)
  }
  class J2 extends ae {
    constructor(c, d) {
      super(),
        (this.m = c),
        (this.l = d),
        (this.h = null),
        (this.i = !1),
        (this.g = null)
    }
    j(c) {
      ;(this.h = arguments), this.g ? (this.i = !0) : Lf(this)
    }
    N() {
      super.N(),
        this.g &&
          (l.clearTimeout(this.g),
          (this.g = null),
          (this.i = !1),
          (this.h = null))
    }
  }
  function es(a) {
    ae.call(this), (this.h = a), (this.g = {})
  }
  P(es, ae)
  var Vf = []
  function Mf(a) {
    j(
      a.g,
      function (c, d) {
        this.g.hasOwnProperty(d) && wu(c)
      },
      a
    ),
      (a.g = {})
  }
  ;(es.prototype.N = function () {
    es.aa.N.call(this), Mf(this)
  }),
    (es.prototype.handleEvent = function () {
      throw Error('EventHandler.handleEvent not implemented')
    })
  var Su = l.JSON.stringify,
    Z2 = l.JSON.parse,
    e1 = class {
      stringify(a) {
        return l.JSON.stringify(a, void 0)
      }
      parse(a) {
        return l.JSON.parse(a, void 0)
      }
    }
  function Cu() {}
  Cu.prototype.h = null
  function bf(a) {
    return a.h || (a.h = a.i())
  }
  function Ff() {}
  var ts = { OPEN: 'a', kb: 'b', Ja: 'c', wb: 'd' }
  function Au() {
    Ie.call(this, 'd')
  }
  P(Au, Ie)
  function Ru() {
    Ie.call(this, 'c')
  }
  P(Ru, Ie)
  var _r = {},
    jf = null
  function Ho() {
    return (jf = jf || new We())
  }
  _r.La = 'serverreachability'
  function Uf(a) {
    Ie.call(this, _r.La, a)
  }
  P(Uf, Ie)
  function ns(a) {
    const c = Ho()
    nt(c, new Uf(c))
  }
  _r.STAT_EVENT = 'statevent'
  function Bf(a, c) {
    Ie.call(this, _r.STAT_EVENT, a), (this.stat = c)
  }
  P(Bf, Ie)
  function rt(a) {
    const c = Ho()
    nt(c, new Bf(c, a))
  }
  _r.Ma = 'timingevent'
  function zf(a, c) {
    Ie.call(this, _r.Ma, a), (this.size = c)
  }
  P(zf, Ie)
  function rs(a, c) {
    if (typeof a != 'function')
      throw Error('Fn must not be null and must be a function')
    return l.setTimeout(function () {
      a()
    }, c)
  }
  function is() {
    this.g = !0
  }
  is.prototype.xa = function () {
    this.g = !1
  }
  function t1(a, c, d, m, x, O) {
    a.info(function () {
      if (a.g)
        if (O)
          for (var B = '', le = O.split('&'), be = 0; be < le.length; be++) {
            var ie = le[be].split('=')
            if (1 < ie.length) {
              var Ke = ie[0]
              ie = ie[1]
              var qe = Ke.split('_')
              B =
                2 <= qe.length && qe[1] == 'type'
                  ? B + (Ke + '=' + ie + '&')
                  : B + (Ke + '=redacted&')
            }
          }
        else B = null
      else B = O
      return (
        'XMLHTTP REQ (' +
        m +
        ') [attempt ' +
        x +
        ']: ' +
        c +
        `
` +
        d +
        `
` +
        B
      )
    })
  }
  function n1(a, c, d, m, x, O, B) {
    a.info(function () {
      return (
        'XMLHTTP RESP (' +
        m +
        ') [ attempt ' +
        x +
        ']: ' +
        c +
        `
` +
        d +
        `
` +
        O +
        ' ' +
        B
      )
    })
  }
  function Qr(a, c, d, m) {
    a.info(function () {
      return 'XMLHTTP TEXT (' + c + '): ' + i1(a, d) + (m ? ' ' + m : '')
    })
  }
  function r1(a, c) {
    a.info(function () {
      return 'TIMEOUT: ' + c
    })
  }
  is.prototype.info = function () {}
  function i1(a, c) {
    if (!a.g) return c
    if (!c) return null
    try {
      var d = JSON.parse(c)
      if (d) {
        for (a = 0; a < d.length; a++)
          if (Array.isArray(d[a])) {
            var m = d[a]
            if (!(2 > m.length)) {
              var x = m[1]
              if (Array.isArray(x) && !(1 > x.length)) {
                var O = x[0]
                if (O != 'noop' && O != 'stop' && O != 'close')
                  for (var B = 1; B < x.length; B++) x[B] = ''
              }
            }
          }
      }
      return Su(d)
    } catch {
      return c
    }
  }
  var Wo = {
      NO_ERROR: 0,
      gb: 1,
      tb: 2,
      sb: 3,
      nb: 4,
      rb: 5,
      ub: 6,
      Ia: 7,
      TIMEOUT: 8,
      xb: 9,
    },
    $f = {
      lb: 'complete',
      Hb: 'success',
      Ja: 'error',
      Ia: 'abort',
      zb: 'ready',
      Ab: 'readystatechange',
      TIMEOUT: 'timeout',
      vb: 'incrementaldata',
      yb: 'progress',
      ob: 'downloadprogress',
      Pb: 'uploadprogress',
    },
    Pu
  function Ko() {}
  P(Ko, Cu),
    (Ko.prototype.g = function () {
      return new XMLHttpRequest()
    }),
    (Ko.prototype.i = function () {
      return {}
    }),
    (Pu = new Ko())
  function Dn(a, c, d, m) {
    ;(this.j = a),
      (this.i = c),
      (this.l = d),
      (this.R = m || 1),
      (this.U = new es(this)),
      (this.I = 45e3),
      (this.H = null),
      (this.o = !1),
      (this.m = this.A = this.v = this.L = this.F = this.S = this.B = null),
      (this.D = []),
      (this.g = null),
      (this.C = 0),
      (this.s = this.u = null),
      (this.X = -1),
      (this.J = !1),
      (this.O = 0),
      (this.M = null),
      (this.W = this.K = this.T = this.P = !1),
      (this.h = new Hf())
  }
  function Hf() {
    ;(this.i = null), (this.g = ''), (this.h = !1)
  }
  var Wf = {},
    ku = {}
  function xu(a, c, d) {
    ;(a.L = 1), (a.v = Yo(ln(c))), (a.m = d), (a.P = !0), Kf(a, null)
  }
  function Kf(a, c) {
    ;(a.F = Date.now()), qo(a), (a.A = ln(a.v))
    var d = a.A,
      m = a.R
    Array.isArray(m) || (m = [String(m)]),
      op(d.i, 't', m),
      (a.C = 0),
      (d = a.j.J),
      (a.h = new Hf()),
      (a.g = Sp(a.j, d ? c : null, !a.m)),
      0 < a.O && (a.M = new J2(v(a.Y, a, a.g), a.O)),
      (c = a.U),
      (d = a.g),
      (m = a.ca)
    var x = 'readystatechange'
    Array.isArray(x) || (x && (Vf[0] = x.toString()), (x = Vf))
    for (var O = 0; O < x.length; O++) {
      var B = kf(d, x[O], m || c.handleEvent, !1, c.h || c)
      if (!B) break
      c.g[B.key] = B
    }
    ;(c = a.H ? y(a.H) : {}),
      a.m
        ? (a.u || (a.u = 'POST'),
          (c['Content-Type'] = 'application/x-www-form-urlencoded'),
          a.g.ea(a.A, a.u, a.m, c))
        : ((a.u = 'GET'), a.g.ea(a.A, a.u, null, c)),
      ns(),
      t1(a.i, a.u, a.A, a.l, a.R, a.m)
  }
  ;(Dn.prototype.ca = function (a) {
    a = a.target
    const c = this.M
    c && un(a) == 3 ? c.j() : this.Y(a)
  }),
    (Dn.prototype.Y = function (a) {
      try {
        if (a == this.g)
          e: {
            const qe = un(this.g)
            var c = this.g.Ba()
            const Jr = this.g.Z()
            if (
              !(3 > qe) &&
              (qe != 3 || (this.g && (this.h.h || this.g.oa() || fp(this.g))))
            ) {
              this.J ||
                qe != 4 ||
                c == 7 ||
                (c == 8 || 0 >= Jr ? ns(3) : ns(2)),
                Nu(this)
              var d = this.g.Z()
              this.X = d
              t: if (qf(this)) {
                var m = fp(this.g)
                a = ''
                var x = m.length,
                  O = un(this.g) == 4
                if (!this.h.i) {
                  if (typeof TextDecoder > 'u') {
                    Er(this), ss(this)
                    var B = ''
                    break t
                  }
                  this.h.i = new l.TextDecoder()
                }
                for (c = 0; c < x; c++)
                  (this.h.h = !0),
                    (a += this.h.i.decode(m[c], { stream: !(O && c == x - 1) }))
                ;(m.length = 0), (this.h.g += a), (this.C = 0), (B = this.h.g)
              } else B = this.g.oa()
              if (
                ((this.o = d == 200),
                n1(this.i, this.u, this.A, this.l, this.R, qe, d),
                this.o)
              ) {
                if (this.T && !this.K) {
                  t: {
                    if (this.g) {
                      var le,
                        be = this.g
                      if (
                        (le = be.g
                          ? be.g.getResponseHeader('X-HTTP-Initial-Response')
                          : null) &&
                        !_(le)
                      ) {
                        var ie = le
                        break t
                      }
                    }
                    ie = null
                  }
                  if ((d = ie))
                    Qr(
                      this.i,
                      this.l,
                      d,
                      'Initial handshake response via X-HTTP-Initial-Response'
                    ),
                      (this.K = !0),
                      Du(this, d)
                  else {
                    ;(this.o = !1), (this.s = 3), rt(12), Er(this), ss(this)
                    break e
                  }
                }
                if (this.P) {
                  d = !0
                  let Nt
                  for (; !this.J && this.C < B.length; )
                    if (((Nt = s1(this, B)), Nt == ku)) {
                      qe == 4 && ((this.s = 4), rt(14), (d = !1)),
                        Qr(this.i, this.l, null, '[Incomplete Response]')
                      break
                    } else if (Nt == Wf) {
                      ;(this.s = 4),
                        rt(15),
                        Qr(this.i, this.l, B, '[Invalid Chunk]'),
                        (d = !1)
                      break
                    } else Qr(this.i, this.l, Nt, null), Du(this, Nt)
                  if (
                    (qf(this) &&
                      this.C != 0 &&
                      ((this.h.g = this.h.g.slice(this.C)), (this.C = 0)),
                    qe != 4 ||
                      B.length != 0 ||
                      this.h.h ||
                      ((this.s = 1), rt(16), (d = !1)),
                    (this.o = this.o && d),
                    !d)
                  )
                    Qr(this.i, this.l, B, '[Invalid Chunked Response]'),
                      Er(this),
                      ss(this)
                  else if (0 < B.length && !this.W) {
                    this.W = !0
                    var Ke = this.j
                    Ke.g == this &&
                      Ke.ba &&
                      !Ke.M &&
                      (Ke.j.info(
                        'Great, no buffering proxy detected. Bytes received: ' +
                          B.length
                      ),
                      Fu(Ke),
                      (Ke.M = !0),
                      rt(11))
                  }
                } else Qr(this.i, this.l, B, null), Du(this, B)
                qe == 4 && Er(this),
                  this.o &&
                    !this.J &&
                    (qe == 4 ? Ep(this.j, this) : ((this.o = !1), qo(this)))
              } else
                T1(this.g),
                  d == 400 && 0 < B.indexOf('Unknown SID')
                    ? ((this.s = 3), rt(12))
                    : ((this.s = 0), rt(13)),
                  Er(this),
                  ss(this)
            }
          }
      } catch {
      } finally {
      }
    })
  function qf(a) {
    return a.g ? a.u == 'GET' && a.L != 2 && a.j.Ca : !1
  }
  function s1(a, c) {
    var d = a.C,
      m = c.indexOf(
        `
`,
        d
      )
    return m == -1
      ? ku
      : ((d = Number(c.substring(d, m))),
        isNaN(d)
          ? Wf
          : ((m += 1),
            m + d > c.length
              ? ku
              : ((c = c.slice(m, m + d)), (a.C = m + d), c)))
  }
  Dn.prototype.cancel = function () {
    ;(this.J = !0), Er(this)
  }
  function qo(a) {
    ;(a.S = Date.now() + a.I), Gf(a, a.I)
  }
  function Gf(a, c) {
    if (a.B != null) throw Error('WatchDog timer not null')
    a.B = rs(v(a.ba, a), c)
  }
  function Nu(a) {
    a.B && (l.clearTimeout(a.B), (a.B = null))
  }
  Dn.prototype.ba = function () {
    this.B = null
    const a = Date.now()
    0 <= a - this.S
      ? (r1(this.i, this.A),
        this.L != 2 && (ns(), rt(17)),
        Er(this),
        (this.s = 2),
        ss(this))
      : Gf(this, this.S - a)
  }
  function ss(a) {
    a.j.G == 0 || a.J || Ep(a.j, a)
  }
  function Er(a) {
    Nu(a)
    var c = a.M
    c && typeof c.ma == 'function' && c.ma(),
      (a.M = null),
      Mf(a.U),
      a.g && ((c = a.g), (a.g = null), c.abort(), c.ma())
  }
  function Du(a, c) {
    try {
      var d = a.j
      if (d.G != 0 && (d.g == a || Ou(d.h, a))) {
        if (!a.K && Ou(d.h, a) && d.G == 3) {
          try {
            var m = d.Da.g.parse(c)
          } catch {
            m = null
          }
          if (Array.isArray(m) && m.length == 3) {
            var x = m
            if (x[0] == 0) {
              e: if (!d.u) {
                if (d.g)
                  if (d.g.F + 3e3 < a.F) ta(d), Zo(d)
                  else break e
                bu(d), rt(18)
              }
            } else
              (d.za = x[1]),
                0 < d.za - d.T &&
                  37500 > x[2] &&
                  d.F &&
                  d.v == 0 &&
                  !d.C &&
                  (d.C = rs(v(d.Za, d), 6e3))
            if (1 >= Xf(d.h) && d.ca) {
              try {
                d.ca()
              } catch {}
              d.ca = void 0
            }
          } else Tr(d, 11)
        } else if (((a.K || d.g == a) && ta(d), !_(c)))
          for (x = d.Da.g.parse(c), c = 0; c < x.length; c++) {
            let ie = x[c]
            if (((d.T = ie[0]), (ie = ie[1]), d.G == 2))
              if (ie[0] == 'c') {
                ;(d.K = ie[1]), (d.ia = ie[2])
                const Ke = ie[3]
                Ke != null && ((d.la = Ke), d.j.info('VER=' + d.la))
                const qe = ie[4]
                qe != null && ((d.Aa = qe), d.j.info('SVER=' + d.Aa))
                const Jr = ie[5]
                Jr != null &&
                  typeof Jr == 'number' &&
                  0 < Jr &&
                  ((m = 1.5 * Jr),
                  (d.L = m),
                  d.j.info('backChannelRequestTimeoutMs_=' + m)),
                  (m = d)
                const Nt = a.g
                if (Nt) {
                  const ra = Nt.g
                    ? Nt.g.getResponseHeader('X-Client-Wire-Protocol')
                    : null
                  if (ra) {
                    var O = m.h
                    O.g ||
                      (ra.indexOf('spdy') == -1 &&
                        ra.indexOf('quic') == -1 &&
                        ra.indexOf('h2') == -1) ||
                      ((O.j = O.l),
                      (O.g = new Set()),
                      O.h && (Lu(O, O.h), (O.h = null)))
                  }
                  if (m.D) {
                    const ju = Nt.g
                      ? Nt.g.getResponseHeader('X-HTTP-Session-Id')
                      : null
                    ju && ((m.ya = ju), he(m.I, m.D, ju))
                  }
                }
                ;(d.G = 3),
                  d.l && d.l.ua(),
                  d.ba &&
                    ((d.R = Date.now() - a.F),
                    d.j.info('Handshake RTT: ' + d.R + 'ms')),
                  (m = d)
                var B = a
                if (((m.qa = Ip(m, m.J ? m.ia : null, m.W)), B.K)) {
                  Jf(m.h, B)
                  var le = B,
                    be = m.L
                  be && (le.I = be), le.B && (Nu(le), qo(le)), (m.g = B)
                } else vp(m)
                0 < d.i.length && ea(d)
              } else (ie[0] != 'stop' && ie[0] != 'close') || Tr(d, 7)
            else
              d.G == 3 &&
                (ie[0] == 'stop' || ie[0] == 'close'
                  ? ie[0] == 'stop'
                    ? Tr(d, 7)
                    : Mu(d)
                  : ie[0] != 'noop' && d.l && d.l.ta(ie),
                (d.v = 0))
          }
      }
      ns(4)
    } catch {}
  }
  var o1 = class {
    constructor(a, c) {
      ;(this.g = a), (this.map = c)
    }
  }
  function Qf(a) {
    ;(this.l = a || 10),
      l.PerformanceNavigationTiming
        ? ((a = l.performance.getEntriesByType('navigation')),
          (a =
            0 < a.length &&
            (a[0].nextHopProtocol == 'hq' || a[0].nextHopProtocol == 'h2')))
        : (a = !!(
            l.chrome &&
            l.chrome.loadTimes &&
            l.chrome.loadTimes() &&
            l.chrome.loadTimes().wasFetchedViaSpdy
          )),
      (this.j = a ? this.l : 1),
      (this.g = null),
      1 < this.j && (this.g = new Set()),
      (this.h = null),
      (this.i = [])
  }
  function Yf(a) {
    return a.h ? !0 : a.g ? a.g.size >= a.j : !1
  }
  function Xf(a) {
    return a.h ? 1 : a.g ? a.g.size : 0
  }
  function Ou(a, c) {
    return a.h ? a.h == c : a.g ? a.g.has(c) : !1
  }
  function Lu(a, c) {
    a.g ? a.g.add(c) : (a.h = c)
  }
  function Jf(a, c) {
    a.h && a.h == c ? (a.h = null) : a.g && a.g.has(c) && a.g.delete(c)
  }
  Qf.prototype.cancel = function () {
    if (((this.i = Zf(this)), this.h)) this.h.cancel(), (this.h = null)
    else if (this.g && this.g.size !== 0) {
      for (const a of this.g.values()) a.cancel()
      this.g.clear()
    }
  }
  function Zf(a) {
    if (a.h != null) return a.i.concat(a.h.D)
    if (a.g != null && a.g.size !== 0) {
      let c = a.i
      for (const d of a.g.values()) c = c.concat(d.D)
      return c
    }
    return N(a.i)
  }
  function a1(a) {
    if (a.V && typeof a.V == 'function') return a.V()
    if (
      (typeof Map < 'u' && a instanceof Map) ||
      (typeof Set < 'u' && a instanceof Set)
    )
      return Array.from(a.values())
    if (typeof a == 'string') return a.split('')
    if (u(a)) {
      for (var c = [], d = a.length, m = 0; m < d; m++) c.push(a[m])
      return c
    }
    ;(c = []), (d = 0)
    for (m in a) c[d++] = a[m]
    return c
  }
  function l1(a) {
    if (a.na && typeof a.na == 'function') return a.na()
    if (!a.V || typeof a.V != 'function') {
      if (typeof Map < 'u' && a instanceof Map) return Array.from(a.keys())
      if (!(typeof Set < 'u' && a instanceof Set)) {
        if (u(a) || typeof a == 'string') {
          var c = []
          a = a.length
          for (var d = 0; d < a; d++) c.push(d)
          return c
        }
        ;(c = []), (d = 0)
        for (const m in a) c[d++] = m
        return c
      }
    }
  }
  function ep(a, c) {
    if (a.forEach && typeof a.forEach == 'function') a.forEach(c, void 0)
    else if (u(a) || typeof a == 'string')
      Array.prototype.forEach.call(a, c, void 0)
    else
      for (var d = l1(a), m = a1(a), x = m.length, O = 0; O < x; O++)
        c.call(void 0, m[O], d && d[O], a)
  }
  var tp = RegExp(
    '^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$'
  )
  function u1(a, c) {
    if (a) {
      a = a.split('&')
      for (var d = 0; d < a.length; d++) {
        var m = a[d].indexOf('='),
          x = null
        if (0 <= m) {
          var O = a[d].substring(0, m)
          x = a[d].substring(m + 1)
        } else O = a[d]
        c(O, x ? decodeURIComponent(x.replace(/\+/g, ' ')) : '')
      }
    }
  }
  function wr(a) {
    if (
      ((this.g = this.o = this.j = ''),
      (this.s = null),
      (this.m = this.l = ''),
      (this.h = !1),
      a instanceof wr)
    ) {
      ;(this.h = a.h),
        Go(this, a.j),
        (this.o = a.o),
        (this.g = a.g),
        Qo(this, a.s),
        (this.l = a.l)
      var c = a.i,
        d = new ls()
      ;(d.i = c.i),
        c.g && ((d.g = new Map(c.g)), (d.h = c.h)),
        np(this, d),
        (this.m = a.m)
    } else
      a && (c = String(a).match(tp))
        ? ((this.h = !1),
          Go(this, c[1] || '', !0),
          (this.o = os(c[2] || '')),
          (this.g = os(c[3] || '', !0)),
          Qo(this, c[4]),
          (this.l = os(c[5] || '', !0)),
          np(this, c[6] || '', !0),
          (this.m = os(c[7] || '')))
        : ((this.h = !1), (this.i = new ls(null, this.h)))
  }
  wr.prototype.toString = function () {
    var a = [],
      c = this.j
    c && a.push(as(c, rp, !0), ':')
    var d = this.g
    return (
      (d || c == 'file') &&
        (a.push('//'),
        (c = this.o) && a.push(as(c, rp, !0), '@'),
        a.push(
          encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g, '%$1')
        ),
        (d = this.s),
        d != null && a.push(':', String(d))),
      (d = this.l) &&
        (this.g && d.charAt(0) != '/' && a.push('/'),
        a.push(as(d, d.charAt(0) == '/' ? d1 : h1, !0))),
      (d = this.i.toString()) && a.push('?', d),
      (d = this.m) && a.push('#', as(d, p1)),
      a.join('')
    )
  }
  function ln(a) {
    return new wr(a)
  }
  function Go(a, c, d) {
    ;(a.j = d ? os(c, !0) : c), a.j && (a.j = a.j.replace(/:$/, ''))
  }
  function Qo(a, c) {
    if (c) {
      if (((c = Number(c)), isNaN(c) || 0 > c))
        throw Error('Bad port number ' + c)
      a.s = c
    } else a.s = null
  }
  function np(a, c, d) {
    c instanceof ls
      ? ((a.i = c), m1(a.i, a.h))
      : (d || (c = as(c, f1)), (a.i = new ls(c, a.h)))
  }
  function he(a, c, d) {
    a.i.set(c, d)
  }
  function Yo(a) {
    return (
      he(
        a,
        'zx',
        Math.floor(2147483648 * Math.random()).toString(36) +
          Math.abs(
            Math.floor(2147483648 * Math.random()) ^ Date.now()
          ).toString(36)
      ),
      a
    )
  }
  function os(a, c) {
    return a
      ? c
        ? decodeURI(a.replace(/%25/g, '%2525'))
        : decodeURIComponent(a)
      : ''
  }
  function as(a, c, d) {
    return typeof a == 'string'
      ? ((a = encodeURI(a).replace(c, c1)),
        d && (a = a.replace(/%25([0-9a-fA-F]{2})/g, '%$1')),
        a)
      : null
  }
  function c1(a) {
    return (
      (a = a.charCodeAt(0)),
      '%' + ((a >> 4) & 15).toString(16) + (a & 15).toString(16)
    )
  }
  var rp = /[#\/\?@]/g,
    h1 = /[#\?:]/g,
    d1 = /[#\?]/g,
    f1 = /[#\?@]/g,
    p1 = /#/g
  function ls(a, c) {
    ;(this.h = this.g = null), (this.i = a || null), (this.j = !!c)
  }
  function On(a) {
    a.g ||
      ((a.g = new Map()),
      (a.h = 0),
      a.i &&
        u1(a.i, function (c, d) {
          a.add(decodeURIComponent(c.replace(/\+/g, ' ')), d)
        }))
  }
  ;(t = ls.prototype),
    (t.add = function (a, c) {
      On(this), (this.i = null), (a = Yr(this, a))
      var d = this.g.get(a)
      return d || this.g.set(a, (d = [])), d.push(c), (this.h += 1), this
    })
  function ip(a, c) {
    On(a),
      (c = Yr(a, c)),
      a.g.has(c) && ((a.i = null), (a.h -= a.g.get(c).length), a.g.delete(c))
  }
  function sp(a, c) {
    return On(a), (c = Yr(a, c)), a.g.has(c)
  }
  ;(t.forEach = function (a, c) {
    On(this),
      this.g.forEach(function (d, m) {
        d.forEach(function (x) {
          a.call(c, x, m, this)
        }, this)
      }, this)
  }),
    (t.na = function () {
      On(this)
      const a = Array.from(this.g.values()),
        c = Array.from(this.g.keys()),
        d = []
      for (let m = 0; m < c.length; m++) {
        const x = a[m]
        for (let O = 0; O < x.length; O++) d.push(c[m])
      }
      return d
    }),
    (t.V = function (a) {
      On(this)
      let c = []
      if (typeof a == 'string')
        sp(this, a) && (c = c.concat(this.g.get(Yr(this, a))))
      else {
        a = Array.from(this.g.values())
        for (let d = 0; d < a.length; d++) c = c.concat(a[d])
      }
      return c
    }),
    (t.set = function (a, c) {
      return (
        On(this),
        (this.i = null),
        (a = Yr(this, a)),
        sp(this, a) && (this.h -= this.g.get(a).length),
        this.g.set(a, [c]),
        (this.h += 1),
        this
      )
    }),
    (t.get = function (a, c) {
      return a ? ((a = this.V(a)), 0 < a.length ? String(a[0]) : c) : c
    })
  function op(a, c, d) {
    ip(a, c),
      0 < d.length && ((a.i = null), a.g.set(Yr(a, c), N(d)), (a.h += d.length))
  }
  t.toString = function () {
    if (this.i) return this.i
    if (!this.g) return ''
    const a = [],
      c = Array.from(this.g.keys())
    for (var d = 0; d < c.length; d++) {
      var m = c[d]
      const O = encodeURIComponent(String(m)),
        B = this.V(m)
      for (m = 0; m < B.length; m++) {
        var x = O
        B[m] !== '' && (x += '=' + encodeURIComponent(String(B[m]))), a.push(x)
      }
    }
    return (this.i = a.join('&'))
  }
  function Yr(a, c) {
    return (c = String(c)), a.j && (c = c.toLowerCase()), c
  }
  function m1(a, c) {
    c &&
      !a.j &&
      (On(a),
      (a.i = null),
      a.g.forEach(function (d, m) {
        var x = m.toLowerCase()
        m != x && (ip(this, m), op(this, x, d))
      }, a)),
      (a.j = c)
  }
  function g1(a, c) {
    const d = new is()
    if (l.Image) {
      const m = new Image()
      ;(m.onload = A(Ln, d, 'TestLoadImage: loaded', !0, c, m)),
        (m.onerror = A(Ln, d, 'TestLoadImage: error', !1, c, m)),
        (m.onabort = A(Ln, d, 'TestLoadImage: abort', !1, c, m)),
        (m.ontimeout = A(Ln, d, 'TestLoadImage: timeout', !1, c, m)),
        l.setTimeout(function () {
          m.ontimeout && m.ontimeout()
        }, 1e4),
        (m.src = a)
    } else c(!1)
  }
  function y1(a, c) {
    const d = new is(),
      m = new AbortController(),
      x = setTimeout(() => {
        m.abort(), Ln(d, 'TestPingServer: timeout', !1, c)
      }, 1e4)
    fetch(a, { signal: m.signal })
      .then((O) => {
        clearTimeout(x),
          O.ok
            ? Ln(d, 'TestPingServer: ok', !0, c)
            : Ln(d, 'TestPingServer: server error', !1, c)
      })
      .catch(() => {
        clearTimeout(x), Ln(d, 'TestPingServer: error', !1, c)
      })
  }
  function Ln(a, c, d, m, x) {
    try {
      x &&
        ((x.onload = null),
        (x.onerror = null),
        (x.onabort = null),
        (x.ontimeout = null)),
        m(d)
    } catch {}
  }
  function v1() {
    this.g = new e1()
  }
  function _1(a, c, d) {
    const m = d || ''
    try {
      ep(a, function (x, O) {
        let B = x
        h(x) && (B = Su(x)), c.push(m + O + '=' + encodeURIComponent(B))
      })
    } catch (x) {
      throw (c.push(m + 'type=' + encodeURIComponent('_badmap')), x)
    }
  }
  function us(a) {
    ;(this.l = a.Ub || null), (this.j = a.eb || !1)
  }
  P(us, Cu),
    (us.prototype.g = function () {
      return new Xo(this.l, this.j)
    }),
    (us.prototype.i = (function (a) {
      return function () {
        return a
      }
    })({}))
  function Xo(a, c) {
    We.call(this),
      (this.D = a),
      (this.o = c),
      (this.m = void 0),
      (this.status = this.readyState = 0),
      (this.responseType =
        this.responseText =
        this.response =
        this.statusText =
          ''),
      (this.onreadystatechange = null),
      (this.u = new Headers()),
      (this.h = null),
      (this.B = 'GET'),
      (this.A = ''),
      (this.g = !1),
      (this.v = this.j = this.l = null)
  }
  P(Xo, We),
    (t = Xo.prototype),
    (t.open = function (a, c) {
      if (this.readyState != 0)
        throw (this.abort(), Error('Error reopening a connection'))
      ;(this.B = a), (this.A = c), (this.readyState = 1), hs(this)
    }),
    (t.send = function (a) {
      if (this.readyState != 1)
        throw (this.abort(), Error('need to call open() first. '))
      this.g = !0
      const c = {
        headers: this.u,
        method: this.B,
        credentials: this.m,
        cache: void 0,
      }
      a && (c.body = a),
        (this.D || l)
          .fetch(new Request(this.A, c))
          .then(this.Sa.bind(this), this.ga.bind(this))
    }),
    (t.abort = function () {
      ;(this.response = this.responseText = ''),
        (this.u = new Headers()),
        (this.status = 0),
        this.j && this.j.cancel('Request was aborted.').catch(() => {}),
        1 <= this.readyState &&
          this.g &&
          this.readyState != 4 &&
          ((this.g = !1), cs(this)),
        (this.readyState = 0)
    }),
    (t.Sa = function (a) {
      if (
        this.g &&
        ((this.l = a),
        this.h ||
          ((this.status = this.l.status),
          (this.statusText = this.l.statusText),
          (this.h = a.headers),
          (this.readyState = 2),
          hs(this)),
        this.g && ((this.readyState = 3), hs(this), this.g))
      )
        if (this.responseType === 'arraybuffer')
          a.arrayBuffer().then(this.Qa.bind(this), this.ga.bind(this))
        else if (typeof l.ReadableStream < 'u' && 'body' in a) {
          if (((this.j = a.body.getReader()), this.o)) {
            if (this.responseType)
              throw Error(
                'responseType must be empty for "streamBinaryChunks" mode responses.'
              )
            this.response = []
          } else
            (this.response = this.responseText = ''),
              (this.v = new TextDecoder())
          ap(this)
        } else a.text().then(this.Ra.bind(this), this.ga.bind(this))
    })
  function ap(a) {
    a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))
  }
  ;(t.Pa = function (a) {
    if (this.g) {
      if (this.o && a.value) this.response.push(a.value)
      else if (!this.o) {
        var c = a.value ? a.value : new Uint8Array(0)
        ;(c = this.v.decode(c, { stream: !a.done })) &&
          (this.response = this.responseText += c)
      }
      a.done ? cs(this) : hs(this), this.readyState == 3 && ap(this)
    }
  }),
    (t.Ra = function (a) {
      this.g && ((this.response = this.responseText = a), cs(this))
    }),
    (t.Qa = function (a) {
      this.g && ((this.response = a), cs(this))
    }),
    (t.ga = function () {
      this.g && cs(this)
    })
  function cs(a) {
    ;(a.readyState = 4), (a.l = null), (a.j = null), (a.v = null), hs(a)
  }
  ;(t.setRequestHeader = function (a, c) {
    this.u.append(a, c)
  }),
    (t.getResponseHeader = function (a) {
      return (this.h && this.h.get(a.toLowerCase())) || ''
    }),
    (t.getAllResponseHeaders = function () {
      if (!this.h) return ''
      const a = [],
        c = this.h.entries()
      for (var d = c.next(); !d.done; )
        (d = d.value), a.push(d[0] + ': ' + d[1]), (d = c.next())
      return a.join(`\r
`)
    })
  function hs(a) {
    a.onreadystatechange && a.onreadystatechange.call(a)
  }
  Object.defineProperty(Xo.prototype, 'withCredentials', {
    get: function () {
      return this.m === 'include'
    },
    set: function (a) {
      this.m = a ? 'include' : 'same-origin'
    },
  })
  function lp(a) {
    let c = ''
    return (
      j(a, function (d, m) {
        ;(c += m),
          (c += ':'),
          (c += d),
          (c += `\r
`)
      }),
      c
    )
  }
  function Vu(a, c, d) {
    e: {
      for (m in d) {
        var m = !1
        break e
      }
      m = !0
    }
    m ||
      ((d = lp(d)),
      typeof a == 'string'
        ? d != null && encodeURIComponent(String(d))
        : he(a, c, d))
  }
  function Ee(a) {
    We.call(this),
      (this.headers = new Map()),
      (this.o = a || null),
      (this.h = !1),
      (this.v = this.g = null),
      (this.D = ''),
      (this.m = 0),
      (this.l = ''),
      (this.j = this.B = this.u = this.A = !1),
      (this.I = null),
      (this.H = ''),
      (this.J = !1)
  }
  P(Ee, We)
  var E1 = /^https?$/i,
    w1 = ['POST', 'PUT']
  ;(t = Ee.prototype),
    (t.Ha = function (a) {
      this.J = a
    }),
    (t.ea = function (a, c, d, m) {
      if (this.g)
        throw Error(
          '[goog.net.XhrIo] Object is active with another request=' +
            this.D +
            '; newUri=' +
            a
        )
      ;(c = c ? c.toUpperCase() : 'GET'),
        (this.D = a),
        (this.l = ''),
        (this.m = 0),
        (this.A = !1),
        (this.h = !0),
        (this.g = this.o ? this.o.g() : Pu.g()),
        (this.v = this.o ? bf(this.o) : bf(Pu)),
        (this.g.onreadystatechange = v(this.Ea, this))
      try {
        ;(this.B = !0), this.g.open(c, String(a), !0), (this.B = !1)
      } catch (O) {
        up(this, O)
        return
      }
      if (((a = d || ''), (d = new Map(this.headers)), m))
        if (Object.getPrototypeOf(m) === Object.prototype)
          for (var x in m) d.set(x, m[x])
        else if (typeof m.keys == 'function' && typeof m.get == 'function')
          for (const O of m.keys()) d.set(O, m.get(O))
        else throw Error('Unknown input type for opt_headers: ' + String(m))
      ;(m = Array.from(d.keys()).find(
        (O) => O.toLowerCase() == 'content-type'
      )),
        (x = l.FormData && a instanceof l.FormData),
        !(0 <= Array.prototype.indexOf.call(w1, c, void 0)) ||
          m ||
          x ||
          d.set(
            'Content-Type',
            'application/x-www-form-urlencoded;charset=utf-8'
          )
      for (const [O, B] of d) this.g.setRequestHeader(O, B)
      this.H && (this.g.responseType = this.H),
        'withCredentials' in this.g &&
          this.g.withCredentials !== this.J &&
          (this.g.withCredentials = this.J)
      try {
        dp(this), (this.u = !0), this.g.send(a), (this.u = !1)
      } catch (O) {
        up(this, O)
      }
    })
  function up(a, c) {
    ;(a.h = !1),
      a.g && ((a.j = !0), a.g.abort(), (a.j = !1)),
      (a.l = c),
      (a.m = 5),
      cp(a),
      Jo(a)
  }
  function cp(a) {
    a.A || ((a.A = !0), nt(a, 'complete'), nt(a, 'error'))
  }
  ;(t.abort = function (a) {
    this.g &&
      this.h &&
      ((this.h = !1),
      (this.j = !0),
      this.g.abort(),
      (this.j = !1),
      (this.m = a || 7),
      nt(this, 'complete'),
      nt(this, 'abort'),
      Jo(this))
  }),
    (t.N = function () {
      this.g &&
        (this.h &&
          ((this.h = !1), (this.j = !0), this.g.abort(), (this.j = !1)),
        Jo(this, !0)),
        Ee.aa.N.call(this)
    }),
    (t.Ea = function () {
      this.s || (this.B || this.u || this.j ? hp(this) : this.bb())
    }),
    (t.bb = function () {
      hp(this)
    })
  function hp(a) {
    if (a.h && typeof o < 'u' && (!a.v[1] || un(a) != 4 || a.Z() != 2)) {
      if (a.u && un(a) == 4) Of(a.Ea, 0, a)
      else if ((nt(a, 'readystatechange'), un(a) == 4)) {
        a.h = !1
        try {
          const B = a.Z()
          e: switch (B) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
              var c = !0
              break e
            default:
              c = !1
          }
          var d
          if (!(d = c)) {
            var m
            if ((m = B === 0)) {
              var x = String(a.D).match(tp)[1] || null
              !x &&
                l.self &&
                l.self.location &&
                (x = l.self.location.protocol.slice(0, -1)),
                (m = !E1.test(x ? x.toLowerCase() : ''))
            }
            d = m
          }
          if (d) nt(a, 'complete'), nt(a, 'success')
          else {
            a.m = 6
            try {
              var O = 2 < un(a) ? a.g.statusText : ''
            } catch {
              O = ''
            }
            ;(a.l = O + ' [' + a.Z() + ']'), cp(a)
          }
        } finally {
          Jo(a)
        }
      }
    }
  }
  function Jo(a, c) {
    if (a.g) {
      dp(a)
      const d = a.g,
        m = a.v[0] ? () => {} : null
      ;(a.g = null), (a.v = null), c || nt(a, 'ready')
      try {
        d.onreadystatechange = m
      } catch {}
    }
  }
  function dp(a) {
    a.I && (l.clearTimeout(a.I), (a.I = null))
  }
  t.isActive = function () {
    return !!this.g
  }
  function un(a) {
    return a.g ? a.g.readyState : 0
  }
  ;(t.Z = function () {
    try {
      return 2 < un(this) ? this.g.status : -1
    } catch {
      return -1
    }
  }),
    (t.oa = function () {
      try {
        return this.g ? this.g.responseText : ''
      } catch {
        return ''
      }
    }),
    (t.Oa = function (a) {
      if (this.g) {
        var c = this.g.responseText
        return a && c.indexOf(a) == 0 && (c = c.substring(a.length)), Z2(c)
      }
    })
  function fp(a) {
    try {
      if (!a.g) return null
      if ('response' in a.g) return a.g.response
      switch (a.H) {
        case '':
        case 'text':
          return a.g.responseText
        case 'arraybuffer':
          if ('mozResponseArrayBuffer' in a.g) return a.g.mozResponseArrayBuffer
      }
      return null
    } catch {
      return null
    }
  }
  function T1(a) {
    const c = {}
    a = ((a.g && 2 <= un(a) && a.g.getAllResponseHeaders()) || '').split(`\r
`)
    for (let m = 0; m < a.length; m++) {
      if (_(a[m])) continue
      var d = R(a[m])
      const x = d[0]
      if (((d = d[1]), typeof d != 'string')) continue
      d = d.trim()
      const O = c[x] || []
      ;(c[x] = O), O.push(d)
    }
    w(c, function (m) {
      return m.join(', ')
    })
  }
  ;(t.Ba = function () {
    return this.m
  }),
    (t.Ka = function () {
      return typeof this.l == 'string' ? this.l : String(this.l)
    })
  function ds(a, c, d) {
    return (d && d.internalChannelParams && d.internalChannelParams[a]) || c
  }
  function pp(a) {
    ;(this.Aa = 0),
      (this.i = []),
      (this.j = new is()),
      (this.ia =
        this.qa =
        this.I =
        this.W =
        this.g =
        this.ya =
        this.D =
        this.H =
        this.m =
        this.S =
        this.o =
          null),
      (this.Ya = this.U = 0),
      (this.Va = ds('failFast', !1, a)),
      (this.F = this.C = this.u = this.s = this.l = null),
      (this.X = !0),
      (this.za = this.T = -1),
      (this.Y = this.v = this.B = 0),
      (this.Ta = ds('baseRetryDelayMs', 5e3, a)),
      (this.cb = ds('retryDelaySeedMs', 1e4, a)),
      (this.Wa = ds('forwardChannelMaxRetries', 2, a)),
      (this.wa = ds('forwardChannelRequestTimeoutMs', 2e4, a)),
      (this.pa = (a && a.xmlHttpFactory) || void 0),
      (this.Xa = (a && a.Tb) || void 0),
      (this.Ca = (a && a.useFetchStreams) || !1),
      (this.L = void 0),
      (this.J = (a && a.supportsCrossDomainXhr) || !1),
      (this.K = ''),
      (this.h = new Qf(a && a.concurrentRequestLimit)),
      (this.Da = new v1()),
      (this.P = (a && a.fastHandshake) || !1),
      (this.O = (a && a.encodeInitMessageHeaders) || !1),
      this.P && this.O && (this.O = !1),
      (this.Ua = (a && a.Rb) || !1),
      a && a.xa && this.j.xa(),
      a && a.forceLongPolling && (this.X = !1),
      (this.ba = (!this.P && this.X && a && a.detectBufferingProxy) || !1),
      (this.ja = void 0),
      a &&
        a.longPollingTimeout &&
        0 < a.longPollingTimeout &&
        (this.ja = a.longPollingTimeout),
      (this.ca = void 0),
      (this.R = 0),
      (this.M = !1),
      (this.ka = this.A = null)
  }
  ;(t = pp.prototype),
    (t.la = 8),
    (t.G = 1),
    (t.connect = function (a, c, d, m) {
      rt(0),
        (this.W = a),
        (this.H = c || {}),
        d && m !== void 0 && ((this.H.OSID = d), (this.H.OAID = m)),
        (this.F = this.X),
        (this.I = Ip(this, null, this.W)),
        ea(this)
    })
  function Mu(a) {
    if ((mp(a), a.G == 3)) {
      var c = a.U++,
        d = ln(a.I)
      if (
        (he(d, 'SID', a.K),
        he(d, 'RID', c),
        he(d, 'TYPE', 'terminate'),
        fs(a, d),
        (c = new Dn(a, a.j, c)),
        (c.L = 2),
        (c.v = Yo(ln(d))),
        (d = !1),
        l.navigator && l.navigator.sendBeacon)
      )
        try {
          d = l.navigator.sendBeacon(c.v.toString(), '')
        } catch {}
      !d && l.Image && ((new Image().src = c.v), (d = !0)),
        d || ((c.g = Sp(c.j, null)), c.g.ea(c.v)),
        (c.F = Date.now()),
        qo(c)
    }
    Tp(a)
  }
  function Zo(a) {
    a.g && (Fu(a), a.g.cancel(), (a.g = null))
  }
  function mp(a) {
    Zo(a),
      a.u && (l.clearTimeout(a.u), (a.u = null)),
      ta(a),
      a.h.cancel(),
      a.s && (typeof a.s == 'number' && l.clearTimeout(a.s), (a.s = null))
  }
  function ea(a) {
    if (!Yf(a.h) && !a.s) {
      a.s = !0
      var c = a.Ga
      nn || J(), z || (nn(), (z = !0)), G.add(c, a), (a.B = 0)
    }
  }
  function I1(a, c) {
    return Xf(a.h) >= a.h.j - (a.s ? 1 : 0)
      ? !1
      : a.s
      ? ((a.i = c.D.concat(a.i)), !0)
      : a.G == 1 || a.G == 2 || a.B >= (a.Va ? 0 : a.Wa)
      ? !1
      : ((a.s = rs(v(a.Ga, a, c), wp(a, a.B))), a.B++, !0)
  }
  t.Ga = function (a) {
    if (this.s)
      if (((this.s = null), this.G == 1)) {
        if (!a) {
          ;(this.U = Math.floor(1e5 * Math.random())), (a = this.U++)
          const x = new Dn(this, this.j, a)
          let O = this.o
          if (
            (this.S && (O ? ((O = y(O)), T(O, this.S)) : (O = this.S)),
            this.m !== null || this.O || ((x.H = O), (O = null)),
            this.P)
          )
            e: {
              for (var c = 0, d = 0; d < this.i.length; d++) {
                t: {
                  var m = this.i[d]
                  if (
                    '__data__' in m.map &&
                    ((m = m.map.__data__), typeof m == 'string')
                  ) {
                    m = m.length
                    break t
                  }
                  m = void 0
                }
                if (m === void 0) break
                if (((c += m), 4096 < c)) {
                  c = d
                  break e
                }
                if (c === 4096 || d === this.i.length - 1) {
                  c = d + 1
                  break e
                }
              }
              c = 1e3
            }
          else c = 1e3
          ;(c = yp(this, x, c)),
            (d = ln(this.I)),
            he(d, 'RID', a),
            he(d, 'CVER', 22),
            this.D && he(d, 'X-HTTP-Session-Id', this.D),
            fs(this, d),
            O &&
              (this.O
                ? (c = 'headers=' + encodeURIComponent(String(lp(O))) + '&' + c)
                : this.m && Vu(d, this.m, O)),
            Lu(this.h, x),
            this.Ua && he(d, 'TYPE', 'init'),
            this.P
              ? (he(d, '$req', c),
                he(d, 'SID', 'null'),
                (x.T = !0),
                xu(x, d, null))
              : xu(x, d, c),
            (this.G = 2)
        }
      } else
        this.G == 3 &&
          (a ? gp(this, a) : this.i.length == 0 || Yf(this.h) || gp(this))
  }
  function gp(a, c) {
    var d
    c ? (d = c.l) : (d = a.U++)
    const m = ln(a.I)
    he(m, 'SID', a.K),
      he(m, 'RID', d),
      he(m, 'AID', a.T),
      fs(a, m),
      a.m && a.o && Vu(m, a.m, a.o),
      (d = new Dn(a, a.j, d, a.B + 1)),
      a.m === null && (d.H = a.o),
      c && (a.i = c.D.concat(a.i)),
      (c = yp(a, d, 1e3)),
      (d.I = Math.round(0.5 * a.wa) + Math.round(0.5 * a.wa * Math.random())),
      Lu(a.h, d),
      xu(d, m, c)
  }
  function fs(a, c) {
    a.H &&
      j(a.H, function (d, m) {
        he(c, m, d)
      }),
      a.l &&
        ep({}, function (d, m) {
          he(c, m, d)
        })
  }
  function yp(a, c, d) {
    d = Math.min(a.i.length, d)
    var m = a.l ? v(a.l.Na, a.l, a) : null
    e: {
      var x = a.i
      let O = -1
      for (;;) {
        const B = ['count=' + d]
        O == -1
          ? 0 < d
            ? ((O = x[0].g), B.push('ofs=' + O))
            : (O = 0)
          : B.push('ofs=' + O)
        let le = !0
        for (let be = 0; be < d; be++) {
          let ie = x[be].g
          const Ke = x[be].map
          if (((ie -= O), 0 > ie)) (O = Math.max(0, x[be].g - 100)), (le = !1)
          else
            try {
              _1(Ke, B, 'req' + ie + '_')
            } catch {
              m && m(Ke)
            }
        }
        if (le) {
          m = B.join('&')
          break e
        }
      }
    }
    return (a = a.i.splice(0, d)), (c.D = a), m
  }
  function vp(a) {
    if (!a.g && !a.u) {
      a.Y = 1
      var c = a.Fa
      nn || J(), z || (nn(), (z = !0)), G.add(c, a), (a.v = 0)
    }
  }
  function bu(a) {
    return a.g || a.u || 3 <= a.v
      ? !1
      : (a.Y++, (a.u = rs(v(a.Fa, a), wp(a, a.v))), a.v++, !0)
  }
  ;(t.Fa = function () {
    if (
      ((this.u = null),
      _p(this),
      this.ba && !(this.M || this.g == null || 0 >= this.R))
    ) {
      var a = 2 * this.R
      this.j.info('BP detection timer enabled: ' + a),
        (this.A = rs(v(this.ab, this), a))
    }
  }),
    (t.ab = function () {
      this.A &&
        ((this.A = null),
        this.j.info('BP detection timeout reached.'),
        this.j.info('Buffering proxy detected and switch to long-polling!'),
        (this.F = !1),
        (this.M = !0),
        rt(10),
        Zo(this),
        _p(this))
    })
  function Fu(a) {
    a.A != null && (l.clearTimeout(a.A), (a.A = null))
  }
  function _p(a) {
    ;(a.g = new Dn(a, a.j, 'rpc', a.Y)),
      a.m === null && (a.g.H = a.o),
      (a.g.O = 0)
    var c = ln(a.qa)
    he(c, 'RID', 'rpc'),
      he(c, 'SID', a.K),
      he(c, 'AID', a.T),
      he(c, 'CI', a.F ? '0' : '1'),
      !a.F && a.ja && he(c, 'TO', a.ja),
      he(c, 'TYPE', 'xmlhttp'),
      fs(a, c),
      a.m && a.o && Vu(c, a.m, a.o),
      a.L && (a.g.I = a.L)
    var d = a.g
    ;(a = a.ia),
      (d.L = 1),
      (d.v = Yo(ln(c))),
      (d.m = null),
      (d.P = !0),
      Kf(d, a)
  }
  t.Za = function () {
    this.C != null && ((this.C = null), Zo(this), bu(this), rt(19))
  }
  function ta(a) {
    a.C != null && (l.clearTimeout(a.C), (a.C = null))
  }
  function Ep(a, c) {
    var d = null
    if (a.g == c) {
      ta(a), Fu(a), (a.g = null)
      var m = 2
    } else if (Ou(a.h, c)) (d = c.D), Jf(a.h, c), (m = 1)
    else return
    if (a.G != 0) {
      if (c.o)
        if (m == 1) {
          ;(d = c.m ? c.m.length : 0), (c = Date.now() - c.F)
          var x = a.B
          ;(m = Ho()), nt(m, new zf(m, d)), ea(a)
        } else vp(a)
      else if (
        ((x = c.s),
        x == 3 ||
          (x == 0 && 0 < c.X) ||
          !((m == 1 && I1(a, c)) || (m == 2 && bu(a))))
      )
        switch ((d && 0 < d.length && ((c = a.h), (c.i = c.i.concat(d))), x)) {
          case 1:
            Tr(a, 5)
            break
          case 4:
            Tr(a, 10)
            break
          case 3:
            Tr(a, 6)
            break
          default:
            Tr(a, 2)
        }
    }
  }
  function wp(a, c) {
    let d = a.Ta + Math.floor(Math.random() * a.cb)
    return a.isActive() || (d *= 2), d * c
  }
  function Tr(a, c) {
    if ((a.j.info('Error code ' + c), c == 2)) {
      var d = v(a.fb, a),
        m = a.Xa
      const x = !m
      ;(m = new wr(m || '//www.google.com/images/cleardot.gif')),
        (l.location && l.location.protocol == 'http') || Go(m, 'https'),
        Yo(m),
        x ? g1(m.toString(), d) : y1(m.toString(), d)
    } else rt(2)
    ;(a.G = 0), a.l && a.l.sa(c), Tp(a), mp(a)
  }
  t.fb = function (a) {
    a
      ? (this.j.info('Successfully pinged google.com'), rt(2))
      : (this.j.info('Failed to ping google.com'), rt(1))
  }
  function Tp(a) {
    if (((a.G = 0), (a.ka = []), a.l)) {
      const c = Zf(a.h)
      ;(c.length != 0 || a.i.length != 0) &&
        (D(a.ka, c),
        D(a.ka, a.i),
        (a.h.i.length = 0),
        N(a.i),
        (a.i.length = 0)),
        a.l.ra()
    }
  }
  function Ip(a, c, d) {
    var m = d instanceof wr ? ln(d) : new wr(d)
    if (m.g != '') c && (m.g = c + '.' + m.g), Qo(m, m.s)
    else {
      var x = l.location
      ;(m = x.protocol),
        (c = c ? c + '.' + x.hostname : x.hostname),
        (x = +x.port)
      var O = new wr(null)
      m && Go(O, m), c && (O.g = c), x && Qo(O, x), d && (O.l = d), (m = O)
    }
    return (
      (d = a.D),
      (c = a.ya),
      d && c && he(m, d, c),
      he(m, 'VER', a.la),
      fs(a, m),
      m
    )
  }
  function Sp(a, c, d) {
    if (c && !a.J)
      throw Error("Can't create secondary domain capable XhrIo object.")
    return (
      (c = a.Ca && !a.pa ? new Ee(new us({ eb: d })) : new Ee(a.pa)),
      c.Ha(a.J),
      c
    )
  }
  t.isActive = function () {
    return !!this.l && this.l.isActive(this)
  }
  function Cp() {}
  ;(t = Cp.prototype),
    (t.ua = function () {}),
    (t.ta = function () {}),
    (t.sa = function () {}),
    (t.ra = function () {}),
    (t.isActive = function () {
      return !0
    }),
    (t.Na = function () {})
  function na() {}
  na.prototype.g = function (a, c) {
    return new gt(a, c)
  }
  function gt(a, c) {
    We.call(this),
      (this.g = new pp(c)),
      (this.l = a),
      (this.h = (c && c.messageUrlParams) || null),
      (a = (c && c.messageHeaders) || null),
      c &&
        c.clientProtocolHeaderRequired &&
        (a
          ? (a['X-Client-Protocol'] = 'webchannel')
          : (a = { 'X-Client-Protocol': 'webchannel' })),
      (this.g.o = a),
      (a = (c && c.initMessageHeaders) || null),
      c &&
        c.messageContentType &&
        (a
          ? (a['X-WebChannel-Content-Type'] = c.messageContentType)
          : (a = { 'X-WebChannel-Content-Type': c.messageContentType })),
      c &&
        c.va &&
        (a
          ? (a['X-WebChannel-Client-Profile'] = c.va)
          : (a = { 'X-WebChannel-Client-Profile': c.va })),
      (this.g.S = a),
      (a = c && c.Sb) && !_(a) && (this.g.m = a),
      (this.v = (c && c.supportsCrossDomainXhr) || !1),
      (this.u = (c && c.sendRawJson) || !1),
      (c = c && c.httpSessionIdParam) &&
        !_(c) &&
        ((this.g.D = c),
        (a = this.h),
        a !== null && c in a && ((a = this.h), c in a && delete a[c])),
      (this.j = new Xr(this))
  }
  P(gt, We),
    (gt.prototype.m = function () {
      ;(this.g.l = this.j),
        this.v && (this.g.J = !0),
        this.g.connect(this.l, this.h || void 0)
    }),
    (gt.prototype.close = function () {
      Mu(this.g)
    }),
    (gt.prototype.o = function (a) {
      var c = this.g
      if (typeof a == 'string') {
        var d = {}
        ;(d.__data__ = a), (a = d)
      } else this.u && ((d = {}), (d.__data__ = Su(a)), (a = d))
      c.i.push(new o1(c.Ya++, a)), c.G == 3 && ea(c)
    }),
    (gt.prototype.N = function () {
      ;(this.g.l = null),
        delete this.j,
        Mu(this.g),
        delete this.g,
        gt.aa.N.call(this)
    })
  function Ap(a) {
    Au.call(this),
      a.__headers__ &&
        ((this.headers = a.__headers__),
        (this.statusCode = a.__status__),
        delete a.__headers__,
        delete a.__status__)
    var c = a.__sm__
    if (c) {
      e: {
        for (const d in c) {
          a = d
          break e
        }
        a = void 0
      }
      ;(this.i = a) &&
        ((a = this.i), (c = c !== null && a in c ? c[a] : void 0)),
        (this.data = c)
    } else this.data = a
  }
  P(Ap, Au)
  function Rp() {
    Ru.call(this), (this.status = 1)
  }
  P(Rp, Ru)
  function Xr(a) {
    this.g = a
  }
  P(Xr, Cp),
    (Xr.prototype.ua = function () {
      nt(this.g, 'a')
    }),
    (Xr.prototype.ta = function (a) {
      nt(this.g, new Ap(a))
    }),
    (Xr.prototype.sa = function (a) {
      nt(this.g, new Rp())
    }),
    (Xr.prototype.ra = function () {
      nt(this.g, 'b')
    }),
    (na.prototype.createWebChannel = na.prototype.g),
    (gt.prototype.send = gt.prototype.o),
    (gt.prototype.open = gt.prototype.m),
    (gt.prototype.close = gt.prototype.close),
    (k_ = function () {
      return new na()
    }),
    (P_ = function () {
      return Ho()
    }),
    (R_ = _r),
    (Rh = {
      mb: 0,
      pb: 1,
      qb: 2,
      Jb: 3,
      Ob: 4,
      Lb: 5,
      Mb: 6,
      Kb: 7,
      Ib: 8,
      Nb: 9,
      PROXY: 10,
      NOPROXY: 11,
      Gb: 12,
      Cb: 13,
      Db: 14,
      Bb: 15,
      Eb: 16,
      Fb: 17,
      ib: 18,
      hb: 19,
      jb: 20,
    }),
    (Wo.NO_ERROR = 0),
    (Wo.TIMEOUT = 8),
    (Wo.HTTP_ERROR = 6),
    (Ha = Wo),
    ($f.COMPLETE = 'complete'),
    (A_ = $f),
    (Ff.EventType = ts),
    (ts.OPEN = 'a'),
    (ts.CLOSE = 'b'),
    (ts.ERROR = 'c'),
    (ts.MESSAGE = 'd'),
    (We.prototype.listen = We.prototype.K),
    (ks = Ff),
    (C_ = us),
    (Ee.prototype.listenOnce = Ee.prototype.L),
    (Ee.prototype.getLastError = Ee.prototype.Ka),
    (Ee.prototype.getLastErrorCode = Ee.prototype.Ba),
    (Ee.prototype.getStatus = Ee.prototype.Z),
    (Ee.prototype.getResponseJson = Ee.prototype.Oa),
    (Ee.prototype.getResponseText = Ee.prototype.oa),
    (Ee.prototype.send = Ee.prototype.ea),
    (Ee.prototype.setWithCredentials = Ee.prototype.Ha),
    (S_ = Ee)
}).apply(
  typeof Ta < 'u'
    ? Ta
    : typeof self < 'u'
    ? self
    : typeof window < 'u'
    ? window
    : {}
)
const wg = '@firebase/firestore'
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Xe {
  constructor(e) {
    this.uid = e
  }
  isAuthenticated() {
    return this.uid != null
  }
  toKey() {
    return this.isAuthenticated() ? 'uid:' + this.uid : 'anonymous-user'
  }
  isEqual(e) {
    return e.uid === this.uid
  }
}
;(Xe.UNAUTHENTICATED = new Xe(null)),
  (Xe.GOOGLE_CREDENTIALS = new Xe('google-credentials-uid')),
  (Xe.FIRST_PARTY = new Xe('first-party-uid')),
  (Xe.MOCK_USER = new Xe('mock-user'))
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let Gi = '10.13.1'
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Br = new Fd('@firebase/firestore')
function Ts() {
  return Br.logLevel
}
function H(t, ...e) {
  if (Br.logLevel <= te.DEBUG) {
    const n = e.map(Xd)
    Br.debug(`Firestore (${Gi}): ${t}`, ...n)
  }
}
function Cn(t, ...e) {
  if (Br.logLevel <= te.ERROR) {
    const n = e.map(Xd)
    Br.error(`Firestore (${Gi}): ${t}`, ...n)
  }
}
function Li(t, ...e) {
  if (Br.logLevel <= te.WARN) {
    const n = e.map(Xd)
    Br.warn(`Firestore (${Gi}): ${t}`, ...n)
  }
}
function Xd(t) {
  if (typeof t == 'string') return t
  try {
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ return (function (n) {
      return JSON.stringify(n)
    })(t)
  } catch {
    return t
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Q(t = 'Unexpected state') {
  const e = `FIRESTORE (${Gi}) INTERNAL ASSERTION FAILED: ` + t
  throw (Cn(e), new Error(e))
}
function ue(t, e) {
  t || Q()
}
function X(t, e) {
  return t
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const b = {
  OK: 'ok',
  CANCELLED: 'cancelled',
  UNKNOWN: 'unknown',
  INVALID_ARGUMENT: 'invalid-argument',
  DEADLINE_EXCEEDED: 'deadline-exceeded',
  NOT_FOUND: 'not-found',
  ALREADY_EXISTS: 'already-exists',
  PERMISSION_DENIED: 'permission-denied',
  UNAUTHENTICATED: 'unauthenticated',
  RESOURCE_EXHAUSTED: 'resource-exhausted',
  FAILED_PRECONDITION: 'failed-precondition',
  ABORTED: 'aborted',
  OUT_OF_RANGE: 'out-of-range',
  UNIMPLEMENTED: 'unimplemented',
  INTERNAL: 'internal',
  UNAVAILABLE: 'unavailable',
  DATA_LOSS: 'data-loss',
}
class K extends kn {
  constructor(e, n) {
    super(e, n),
      (this.code = e),
      (this.message = n),
      (this.toString = () =>
        `${this.name}: [code=${this.code}]: ${this.message}`)
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ar {
  constructor() {
    this.promise = new Promise((e, n) => {
      ;(this.resolve = e), (this.reject = n)
    })
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class x_ {
  constructor(e, n) {
    ;(this.user = n),
      (this.type = 'OAuth'),
      (this.headers = new Map()),
      this.headers.set('Authorization', `Bearer ${e}`)
  }
}
class QA {
  getToken() {
    return Promise.resolve(null)
  }
  invalidateToken() {}
  start(e, n) {
    e.enqueueRetryable(() => n(Xe.UNAUTHENTICATED))
  }
  shutdown() {}
}
class YA {
  constructor(e) {
    ;(this.token = e), (this.changeListener = null)
  }
  getToken() {
    return Promise.resolve(this.token)
  }
  invalidateToken() {}
  start(e, n) {
    ;(this.changeListener = n), e.enqueueRetryable(() => n(this.token.user))
  }
  shutdown() {
    this.changeListener = null
  }
}
class XA {
  constructor(e) {
    ;(this.t = e),
      (this.currentUser = Xe.UNAUTHENTICATED),
      (this.i = 0),
      (this.forceRefresh = !1),
      (this.auth = null)
  }
  start(e, n) {
    let r = this.i
    const i = (u) => (this.i !== r ? ((r = this.i), n(u)) : Promise.resolve())
    let s = new ar()
    this.o = () => {
      this.i++,
        (this.currentUser = this.u()),
        s.resolve(),
        (s = new ar()),
        e.enqueueRetryable(() => i(this.currentUser))
    }
    const o = () => {
        const u = s
        e.enqueueRetryable(async () => {
          await u.promise, await i(this.currentUser)
        })
      },
      l = (u) => {
        H('FirebaseAuthCredentialsProvider', 'Auth detected'),
          (this.auth = u),
          this.auth.addAuthTokenListener(this.o),
          o()
      }
    this.t.onInit((u) => l(u)),
      setTimeout(() => {
        if (!this.auth) {
          const u = this.t.getImmediate({ optional: !0 })
          u
            ? l(u)
            : (H('FirebaseAuthCredentialsProvider', 'Auth not yet detected'),
              s.resolve(),
              (s = new ar()))
        }
      }, 0),
      o()
  }
  getToken() {
    const e = this.i,
      n = this.forceRefresh
    return (
      (this.forceRefresh = !1),
      this.auth
        ? this.auth
            .getToken(n)
            .then((r) =>
              this.i !== e
                ? (H(
                    'FirebaseAuthCredentialsProvider',
                    'getToken aborted due to token change.'
                  ),
                  this.getToken())
                : r
                ? (ue(typeof r.accessToken == 'string'),
                  new x_(r.accessToken, this.currentUser))
                : null
            )
        : Promise.resolve(null)
    )
  }
  invalidateToken() {
    this.forceRefresh = !0
  }
  shutdown() {
    this.auth && this.auth.removeAuthTokenListener(this.o)
  }
  u() {
    const e = this.auth && this.auth.getUid()
    return ue(e === null || typeof e == 'string'), new Xe(e)
  }
}
class JA {
  constructor(e, n, r) {
    ;(this.l = e),
      (this.h = n),
      (this.P = r),
      (this.type = 'FirstParty'),
      (this.user = Xe.FIRST_PARTY),
      (this.I = new Map())
  }
  T() {
    return this.P ? this.P() : null
  }
  get headers() {
    this.I.set('X-Goog-AuthUser', this.l)
    const e = this.T()
    return (
      e && this.I.set('Authorization', e),
      this.h && this.I.set('X-Goog-Iam-Authorization-Token', this.h),
      this.I
    )
  }
}
class ZA {
  constructor(e, n, r) {
    ;(this.l = e), (this.h = n), (this.P = r)
  }
  getToken() {
    return Promise.resolve(new JA(this.l, this.h, this.P))
  }
  start(e, n) {
    e.enqueueRetryable(() => n(Xe.FIRST_PARTY))
  }
  shutdown() {}
  invalidateToken() {}
}
class eR {
  constructor(e) {
    ;(this.value = e),
      (this.type = 'AppCheck'),
      (this.headers = new Map()),
      e && e.length > 0 && this.headers.set('x-firebase-appcheck', this.value)
  }
}
class tR {
  constructor(e) {
    ;(this.A = e),
      (this.forceRefresh = !1),
      (this.appCheck = null),
      (this.R = null)
  }
  start(e, n) {
    const r = (s) => {
      s.error != null &&
        H(
          'FirebaseAppCheckTokenProvider',
          `Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`
        )
      const o = s.token !== this.R
      return (
        (this.R = s.token),
        H(
          'FirebaseAppCheckTokenProvider',
          `Received ${o ? 'new' : 'existing'} token.`
        ),
        o ? n(s.token) : Promise.resolve()
      )
    }
    this.o = (s) => {
      e.enqueueRetryable(() => r(s))
    }
    const i = (s) => {
      H('FirebaseAppCheckTokenProvider', 'AppCheck detected'),
        (this.appCheck = s),
        this.appCheck.addTokenListener(this.o)
    }
    this.A.onInit((s) => i(s)),
      setTimeout(() => {
        if (!this.appCheck) {
          const s = this.A.getImmediate({ optional: !0 })
          s
            ? i(s)
            : H('FirebaseAppCheckTokenProvider', 'AppCheck not yet detected')
        }
      }, 0)
  }
  getToken() {
    const e = this.forceRefresh
    return (
      (this.forceRefresh = !1),
      this.appCheck
        ? this.appCheck
            .getToken(e)
            .then((n) =>
              n
                ? (ue(typeof n.token == 'string'),
                  (this.R = n.token),
                  new eR(n.token))
                : null
            )
        : Promise.resolve(null)
    )
  }
  invalidateToken() {
    this.forceRefresh = !0
  }
  shutdown() {
    this.appCheck && this.appCheck.removeTokenListener(this.o)
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function nR(t) {
  const e = typeof self < 'u' && (self.crypto || self.msCrypto),
    n = new Uint8Array(t)
  if (e && typeof e.getRandomValues == 'function') e.getRandomValues(n)
  else for (let r = 0; r < t; r++) n[r] = Math.floor(256 * Math.random())
  return n
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class N_ {
  static newId() {
    const e = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
      n = Math.floor(256 / e.length) * e.length
    let r = ''
    for (; r.length < 20; ) {
      const i = nR(40)
      for (let s = 0; s < i.length; ++s)
        r.length < 20 && i[s] < n && (r += e.charAt(i[s] % e.length))
    }
    return r
  }
}
function se(t, e) {
  return t < e ? -1 : t > e ? 1 : 0
}
function Vi(t, e, n) {
  return t.length === e.length && t.every((r, i) => n(r, e[i]))
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Oe {
  constructor(e, n) {
    if (((this.seconds = e), (this.nanoseconds = n), n < 0))
      throw new K(
        b.INVALID_ARGUMENT,
        'Timestamp nanoseconds out of range: ' + n
      )
    if (n >= 1e9)
      throw new K(
        b.INVALID_ARGUMENT,
        'Timestamp nanoseconds out of range: ' + n
      )
    if (e < -62135596800)
      throw new K(b.INVALID_ARGUMENT, 'Timestamp seconds out of range: ' + e)
    if (e >= 253402300800)
      throw new K(b.INVALID_ARGUMENT, 'Timestamp seconds out of range: ' + e)
  }
  static now() {
    return Oe.fromMillis(Date.now())
  }
  static fromDate(e) {
    return Oe.fromMillis(e.getTime())
  }
  static fromMillis(e) {
    const n = Math.floor(e / 1e3),
      r = Math.floor(1e6 * (e - 1e3 * n))
    return new Oe(n, r)
  }
  toDate() {
    return new Date(this.toMillis())
  }
  toMillis() {
    return 1e3 * this.seconds + this.nanoseconds / 1e6
  }
  _compareTo(e) {
    return this.seconds === e.seconds
      ? se(this.nanoseconds, e.nanoseconds)
      : se(this.seconds, e.seconds)
  }
  isEqual(e) {
    return e.seconds === this.seconds && e.nanoseconds === this.nanoseconds
  }
  toString() {
    return (
      'Timestamp(seconds=' +
      this.seconds +
      ', nanoseconds=' +
      this.nanoseconds +
      ')'
    )
  }
  toJSON() {
    return { seconds: this.seconds, nanoseconds: this.nanoseconds }
  }
  valueOf() {
    const e = this.seconds - -62135596800
    return (
      String(e).padStart(12, '0') +
      '.' +
      String(this.nanoseconds).padStart(9, '0')
    )
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Y {
  constructor(e) {
    this.timestamp = e
  }
  static fromTimestamp(e) {
    return new Y(e)
  }
  static min() {
    return new Y(new Oe(0, 0))
  }
  static max() {
    return new Y(new Oe(253402300799, 999999999))
  }
  compareTo(e) {
    return this.timestamp._compareTo(e.timestamp)
  }
  isEqual(e) {
    return this.timestamp.isEqual(e.timestamp)
  }
  toMicroseconds() {
    return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3
  }
  toString() {
    return 'SnapshotVersion(' + this.timestamp.toString() + ')'
  }
  toTimestamp() {
    return this.timestamp
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class mo {
  constructor(e, n, r) {
    n === void 0 ? (n = 0) : n > e.length && Q(),
      r === void 0 ? (r = e.length - n) : r > e.length - n && Q(),
      (this.segments = e),
      (this.offset = n),
      (this.len = r)
  }
  get length() {
    return this.len
  }
  isEqual(e) {
    return mo.comparator(this, e) === 0
  }
  child(e) {
    const n = this.segments.slice(this.offset, this.limit())
    return (
      e instanceof mo
        ? e.forEach((r) => {
            n.push(r)
          })
        : n.push(e),
      this.construct(n)
    )
  }
  limit() {
    return this.offset + this.length
  }
  popFirst(e) {
    return (
      (e = e === void 0 ? 1 : e),
      this.construct(this.segments, this.offset + e, this.length - e)
    )
  }
  popLast() {
    return this.construct(this.segments, this.offset, this.length - 1)
  }
  firstSegment() {
    return this.segments[this.offset]
  }
  lastSegment() {
    return this.get(this.length - 1)
  }
  get(e) {
    return this.segments[this.offset + e]
  }
  isEmpty() {
    return this.length === 0
  }
  isPrefixOf(e) {
    if (e.length < this.length) return !1
    for (let n = 0; n < this.length; n++)
      if (this.get(n) !== e.get(n)) return !1
    return !0
  }
  isImmediateParentOf(e) {
    if (this.length + 1 !== e.length) return !1
    for (let n = 0; n < this.length; n++)
      if (this.get(n) !== e.get(n)) return !1
    return !0
  }
  forEach(e) {
    for (let n = this.offset, r = this.limit(); n < r; n++) e(this.segments[n])
  }
  toArray() {
    return this.segments.slice(this.offset, this.limit())
  }
  static comparator(e, n) {
    const r = Math.min(e.length, n.length)
    for (let i = 0; i < r; i++) {
      const s = e.get(i),
        o = n.get(i)
      if (s < o) return -1
      if (s > o) return 1
    }
    return e.length < n.length ? -1 : e.length > n.length ? 1 : 0
  }
}
class Te extends mo {
  construct(e, n, r) {
    return new Te(e, n, r)
  }
  canonicalString() {
    return this.toArray().join('/')
  }
  toString() {
    return this.canonicalString()
  }
  toUriEncodedString() {
    return this.toArray().map(encodeURIComponent).join('/')
  }
  static fromString(...e) {
    const n = []
    for (const r of e) {
      if (r.indexOf('//') >= 0)
        throw new K(
          b.INVALID_ARGUMENT,
          `Invalid segment (${r}). Paths must not contain // in them.`
        )
      n.push(...r.split('/').filter((i) => i.length > 0))
    }
    return new Te(n)
  }
  static emptyPath() {
    return new Te([])
  }
}
const rR = /^[_a-zA-Z][_a-zA-Z0-9]*$/
class Ue extends mo {
  construct(e, n, r) {
    return new Ue(e, n, r)
  }
  static isValidIdentifier(e) {
    return rR.test(e)
  }
  canonicalString() {
    return this.toArray()
      .map(
        (e) => (
          (e = e.replace(/\\/g, '\\\\').replace(/`/g, '\\`')),
          Ue.isValidIdentifier(e) || (e = '`' + e + '`'),
          e
        )
      )
      .join('.')
  }
  toString() {
    return this.canonicalString()
  }
  isKeyField() {
    return this.length === 1 && this.get(0) === '__name__'
  }
  static keyField() {
    return new Ue(['__name__'])
  }
  static fromServerFormat(e) {
    const n = []
    let r = '',
      i = 0
    const s = () => {
      if (r.length === 0)
        throw new K(
          b.INVALID_ARGUMENT,
          `Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`
        )
      n.push(r), (r = '')
    }
    let o = !1
    for (; i < e.length; ) {
      const l = e[i]
      if (l === '\\') {
        if (i + 1 === e.length)
          throw new K(
            b.INVALID_ARGUMENT,
            'Path has trailing escape character: ' + e
          )
        const u = e[i + 1]
        if (u !== '\\' && u !== '.' && u !== '`')
          throw new K(
            b.INVALID_ARGUMENT,
            'Path has invalid escape sequence: ' + e
          )
        ;(r += u), (i += 2)
      } else
        l === '`'
          ? ((o = !o), i++)
          : l !== '.' || o
          ? ((r += l), i++)
          : (s(), i++)
    }
    if ((s(), o))
      throw new K(b.INVALID_ARGUMENT, 'Unterminated ` in path: ' + e)
    return new Ue(n)
  }
  static emptyPath() {
    return new Ue([])
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class q {
  constructor(e) {
    this.path = e
  }
  static fromPath(e) {
    return new q(Te.fromString(e))
  }
  static fromName(e) {
    return new q(Te.fromString(e).popFirst(5))
  }
  static empty() {
    return new q(Te.emptyPath())
  }
  get collectionGroup() {
    return this.path.popLast().lastSegment()
  }
  hasCollectionId(e) {
    return this.path.length >= 2 && this.path.get(this.path.length - 2) === e
  }
  getCollectionGroup() {
    return this.path.get(this.path.length - 2)
  }
  getCollectionPath() {
    return this.path.popLast()
  }
  isEqual(e) {
    return e !== null && Te.comparator(this.path, e.path) === 0
  }
  toString() {
    return this.path.toString()
  }
  static comparator(e, n) {
    return Te.comparator(e.path, n.path)
  }
  static isDocumentKey(e) {
    return e.length % 2 == 0
  }
  static fromSegments(e) {
    return new q(new Te(e.slice()))
  }
}
function iR(t, e) {
  const n = t.toTimestamp().seconds,
    r = t.toTimestamp().nanoseconds + 1,
    i = Y.fromTimestamp(r === 1e9 ? new Oe(n + 1, 0) : new Oe(n, r))
  return new cr(i, q.empty(), e)
}
function sR(t) {
  return new cr(t.readTime, t.key, -1)
}
class cr {
  constructor(e, n, r) {
    ;(this.readTime = e), (this.documentKey = n), (this.largestBatchId = r)
  }
  static min() {
    return new cr(Y.min(), q.empty(), -1)
  }
  static max() {
    return new cr(Y.max(), q.empty(), -1)
  }
}
function oR(t, e) {
  let n = t.readTime.compareTo(e.readTime)
  return n !== 0
    ? n
    : ((n = q.comparator(t.documentKey, e.documentKey)),
      n !== 0 ? n : se(t.largestBatchId, e.largestBatchId))
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const aR =
  'The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.'
class lR {
  constructor() {
    this.onCommittedListeners = []
  }
  addOnCommittedListener(e) {
    this.onCommittedListeners.push(e)
  }
  raiseOnCommittedEvent() {
    this.onCommittedListeners.forEach((e) => e())
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Lo(t) {
  if (t.code !== b.FAILED_PRECONDITION || t.message !== aR) throw t
  H('LocalStore', 'Unexpectedly lost primary lease')
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class M {
  constructor(e) {
    ;(this.nextCallback = null),
      (this.catchCallback = null),
      (this.result = void 0),
      (this.error = void 0),
      (this.isDone = !1),
      (this.callbackAttached = !1),
      e(
        (n) => {
          ;(this.isDone = !0),
            (this.result = n),
            this.nextCallback && this.nextCallback(n)
        },
        (n) => {
          ;(this.isDone = !0),
            (this.error = n),
            this.catchCallback && this.catchCallback(n)
        }
      )
  }
  catch(e) {
    return this.next(void 0, e)
  }
  next(e, n) {
    return (
      this.callbackAttached && Q(),
      (this.callbackAttached = !0),
      this.isDone
        ? this.error
          ? this.wrapFailure(n, this.error)
          : this.wrapSuccess(e, this.result)
        : new M((r, i) => {
            ;(this.nextCallback = (s) => {
              this.wrapSuccess(e, s).next(r, i)
            }),
              (this.catchCallback = (s) => {
                this.wrapFailure(n, s).next(r, i)
              })
          })
    )
  }
  toPromise() {
    return new Promise((e, n) => {
      this.next(e, n)
    })
  }
  wrapUserFunction(e) {
    try {
      const n = e()
      return n instanceof M ? n : M.resolve(n)
    } catch (n) {
      return M.reject(n)
    }
  }
  wrapSuccess(e, n) {
    return e ? this.wrapUserFunction(() => e(n)) : M.resolve(n)
  }
  wrapFailure(e, n) {
    return e ? this.wrapUserFunction(() => e(n)) : M.reject(n)
  }
  static resolve(e) {
    return new M((n, r) => {
      n(e)
    })
  }
  static reject(e) {
    return new M((n, r) => {
      r(e)
    })
  }
  static waitFor(e) {
    return new M((n, r) => {
      let i = 0,
        s = 0,
        o = !1
      e.forEach((l) => {
        ++i,
          l.next(
            () => {
              ++s, o && s === i && n()
            },
            (u) => r(u)
          )
      }),
        (o = !0),
        s === i && n()
    })
  }
  static or(e) {
    let n = M.resolve(!1)
    for (const r of e) n = n.next((i) => (i ? M.resolve(i) : r()))
    return n
  }
  static forEach(e, n) {
    const r = []
    return (
      e.forEach((i, s) => {
        r.push(n.call(this, i, s))
      }),
      this.waitFor(r)
    )
  }
  static mapArray(e, n) {
    return new M((r, i) => {
      const s = e.length,
        o = new Array(s)
      let l = 0
      for (let u = 0; u < s; u++) {
        const h = u
        n(e[h]).next(
          (f) => {
            ;(o[h] = f), ++l, l === s && r(o)
          },
          (f) => i(f)
        )
      }
    })
  }
  static doWhile(e, n) {
    return new M((r, i) => {
      const s = () => {
        e() === !0
          ? n().next(() => {
              s()
            }, i)
          : r()
      }
      s()
    })
  }
}
function uR(t) {
  const e = t.match(/Android ([\d.]+)/i),
    n = e ? e[1].split('.').slice(0, 2).join('.') : '-1'
  return Number(n)
}
function Vo(t) {
  return t.name === 'IndexedDbTransactionError'
}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Jd {
  constructor(e, n) {
    ;(this.previousValue = e),
      n &&
        ((n.sequenceNumberHandler = (r) => this.ie(r)),
        (this.se = (r) => n.writeSequenceNumber(r)))
  }
  ie(e) {
    return (
      (this.previousValue = Math.max(e, this.previousValue)), this.previousValue
    )
  }
  next() {
    const e = ++this.previousValue
    return this.se && this.se(e), e
  }
}
Jd.oe = -1
function au(t) {
  return t == null
}
function xl(t) {
  return t === 0 && 1 / t == -1 / 0
}
function cR(t) {
  return (
    typeof t == 'number' &&
    Number.isInteger(t) &&
    !xl(t) &&
    t <= Number.MAX_SAFE_INTEGER &&
    t >= Number.MIN_SAFE_INTEGER
  )
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Tg(t) {
  let e = 0
  for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && e++
  return e
}
function Qi(t, e) {
  for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n])
}
function D_(t) {
  for (const e in t) if (Object.prototype.hasOwnProperty.call(t, e)) return !1
  return !0
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class _e {
  constructor(e, n) {
    ;(this.comparator = e), (this.root = n || je.EMPTY)
  }
  insert(e, n) {
    return new _e(
      this.comparator,
      this.root
        .insert(e, n, this.comparator)
        .copy(null, null, je.BLACK, null, null)
    )
  }
  remove(e) {
    return new _e(
      this.comparator,
      this.root
        .remove(e, this.comparator)
        .copy(null, null, je.BLACK, null, null)
    )
  }
  get(e) {
    let n = this.root
    for (; !n.isEmpty(); ) {
      const r = this.comparator(e, n.key)
      if (r === 0) return n.value
      r < 0 ? (n = n.left) : r > 0 && (n = n.right)
    }
    return null
  }
  indexOf(e) {
    let n = 0,
      r = this.root
    for (; !r.isEmpty(); ) {
      const i = this.comparator(e, r.key)
      if (i === 0) return n + r.left.size
      i < 0 ? (r = r.left) : ((n += r.left.size + 1), (r = r.right))
    }
    return -1
  }
  isEmpty() {
    return this.root.isEmpty()
  }
  get size() {
    return this.root.size
  }
  minKey() {
    return this.root.minKey()
  }
  maxKey() {
    return this.root.maxKey()
  }
  inorderTraversal(e) {
    return this.root.inorderTraversal(e)
  }
  forEach(e) {
    this.inorderTraversal((n, r) => (e(n, r), !1))
  }
  toString() {
    const e = []
    return (
      this.inorderTraversal((n, r) => (e.push(`${n}:${r}`), !1)),
      `{${e.join(', ')}}`
    )
  }
  reverseTraversal(e) {
    return this.root.reverseTraversal(e)
  }
  getIterator() {
    return new Ia(this.root, null, this.comparator, !1)
  }
  getIteratorFrom(e) {
    return new Ia(this.root, e, this.comparator, !1)
  }
  getReverseIterator() {
    return new Ia(this.root, null, this.comparator, !0)
  }
  getReverseIteratorFrom(e) {
    return new Ia(this.root, e, this.comparator, !0)
  }
}
class Ia {
  constructor(e, n, r, i) {
    ;(this.isReverse = i), (this.nodeStack = [])
    let s = 1
    for (; !e.isEmpty(); )
      if (((s = n ? r(e.key, n) : 1), n && i && (s *= -1), s < 0))
        e = this.isReverse ? e.left : e.right
      else {
        if (s === 0) {
          this.nodeStack.push(e)
          break
        }
        this.nodeStack.push(e), (e = this.isReverse ? e.right : e.left)
      }
  }
  getNext() {
    let e = this.nodeStack.pop()
    const n = { key: e.key, value: e.value }
    if (this.isReverse)
      for (e = e.left; !e.isEmpty(); ) this.nodeStack.push(e), (e = e.right)
    else for (e = e.right; !e.isEmpty(); ) this.nodeStack.push(e), (e = e.left)
    return n
  }
  hasNext() {
    return this.nodeStack.length > 0
  }
  peek() {
    if (this.nodeStack.length === 0) return null
    const e = this.nodeStack[this.nodeStack.length - 1]
    return { key: e.key, value: e.value }
  }
}
class je {
  constructor(e, n, r, i, s) {
    ;(this.key = e),
      (this.value = n),
      (this.color = r ?? je.RED),
      (this.left = i ?? je.EMPTY),
      (this.right = s ?? je.EMPTY),
      (this.size = this.left.size + 1 + this.right.size)
  }
  copy(e, n, r, i, s) {
    return new je(
      e ?? this.key,
      n ?? this.value,
      r ?? this.color,
      i ?? this.left,
      s ?? this.right
    )
  }
  isEmpty() {
    return !1
  }
  inorderTraversal(e) {
    return (
      this.left.inorderTraversal(e) ||
      e(this.key, this.value) ||
      this.right.inorderTraversal(e)
    )
  }
  reverseTraversal(e) {
    return (
      this.right.reverseTraversal(e) ||
      e(this.key, this.value) ||
      this.left.reverseTraversal(e)
    )
  }
  min() {
    return this.left.isEmpty() ? this : this.left.min()
  }
  minKey() {
    return this.min().key
  }
  maxKey() {
    return this.right.isEmpty() ? this.key : this.right.maxKey()
  }
  insert(e, n, r) {
    let i = this
    const s = r(e, i.key)
    return (
      (i =
        s < 0
          ? i.copy(null, null, null, i.left.insert(e, n, r), null)
          : s === 0
          ? i.copy(null, n, null, null, null)
          : i.copy(null, null, null, null, i.right.insert(e, n, r))),
      i.fixUp()
    )
  }
  removeMin() {
    if (this.left.isEmpty()) return je.EMPTY
    let e = this
    return (
      e.left.isRed() || e.left.left.isRed() || (e = e.moveRedLeft()),
      (e = e.copy(null, null, null, e.left.removeMin(), null)),
      e.fixUp()
    )
  }
  remove(e, n) {
    let r,
      i = this
    if (n(e, i.key) < 0)
      i.left.isEmpty() ||
        i.left.isRed() ||
        i.left.left.isRed() ||
        (i = i.moveRedLeft()),
        (i = i.copy(null, null, null, i.left.remove(e, n), null))
    else {
      if (
        (i.left.isRed() && (i = i.rotateRight()),
        i.right.isEmpty() ||
          i.right.isRed() ||
          i.right.left.isRed() ||
          (i = i.moveRedRight()),
        n(e, i.key) === 0)
      ) {
        if (i.right.isEmpty()) return je.EMPTY
        ;(r = i.right.min()),
          (i = i.copy(r.key, r.value, null, null, i.right.removeMin()))
      }
      i = i.copy(null, null, null, null, i.right.remove(e, n))
    }
    return i.fixUp()
  }
  isRed() {
    return this.color
  }
  fixUp() {
    let e = this
    return (
      e.right.isRed() && !e.left.isRed() && (e = e.rotateLeft()),
      e.left.isRed() && e.left.left.isRed() && (e = e.rotateRight()),
      e.left.isRed() && e.right.isRed() && (e = e.colorFlip()),
      e
    )
  }
  moveRedLeft() {
    let e = this.colorFlip()
    return (
      e.right.left.isRed() &&
        ((e = e.copy(null, null, null, null, e.right.rotateRight())),
        (e = e.rotateLeft()),
        (e = e.colorFlip())),
      e
    )
  }
  moveRedRight() {
    let e = this.colorFlip()
    return (
      e.left.left.isRed() && ((e = e.rotateRight()), (e = e.colorFlip())), e
    )
  }
  rotateLeft() {
    const e = this.copy(null, null, je.RED, null, this.right.left)
    return this.right.copy(null, null, this.color, e, null)
  }
  rotateRight() {
    const e = this.copy(null, null, je.RED, this.left.right, null)
    return this.left.copy(null, null, this.color, null, e)
  }
  colorFlip() {
    const e = this.left.copy(null, null, !this.left.color, null, null),
      n = this.right.copy(null, null, !this.right.color, null, null)
    return this.copy(null, null, !this.color, e, n)
  }
  checkMaxDepth() {
    const e = this.check()
    return Math.pow(2, e) <= this.size + 1
  }
  check() {
    if ((this.isRed() && this.left.isRed()) || this.right.isRed()) throw Q()
    const e = this.left.check()
    if (e !== this.right.check()) throw Q()
    return e + (this.isRed() ? 0 : 1)
  }
}
;(je.EMPTY = null), (je.RED = !0), (je.BLACK = !1)
je.EMPTY = new (class {
  constructor() {
    this.size = 0
  }
  get key() {
    throw Q()
  }
  get value() {
    throw Q()
  }
  get color() {
    throw Q()
  }
  get left() {
    throw Q()
  }
  get right() {
    throw Q()
  }
  copy(e, n, r, i, s) {
    return this
  }
  insert(e, n, r) {
    return new je(e, n)
  }
  remove(e, n) {
    return this
  }
  isEmpty() {
    return !0
  }
  inorderTraversal(e) {
    return !1
  }
  reverseTraversal(e) {
    return !1
  }
  minKey() {
    return null
  }
  maxKey() {
    return null
  }
  isRed() {
    return !1
  }
  checkMaxDepth() {
    return !0
  }
  check() {
    return 0
  }
})()
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ze {
  constructor(e) {
    ;(this.comparator = e), (this.data = new _e(this.comparator))
  }
  has(e) {
    return this.data.get(e) !== null
  }
  first() {
    return this.data.minKey()
  }
  last() {
    return this.data.maxKey()
  }
  get size() {
    return this.data.size
  }
  indexOf(e) {
    return this.data.indexOf(e)
  }
  forEach(e) {
    this.data.inorderTraversal((n, r) => (e(n), !1))
  }
  forEachInRange(e, n) {
    const r = this.data.getIteratorFrom(e[0])
    for (; r.hasNext(); ) {
      const i = r.getNext()
      if (this.comparator(i.key, e[1]) >= 0) return
      n(i.key)
    }
  }
  forEachWhile(e, n) {
    let r
    for (
      r = n !== void 0 ? this.data.getIteratorFrom(n) : this.data.getIterator();
      r.hasNext();

    )
      if (!e(r.getNext().key)) return
  }
  firstAfterOrEqual(e) {
    const n = this.data.getIteratorFrom(e)
    return n.hasNext() ? n.getNext().key : null
  }
  getIterator() {
    return new Ig(this.data.getIterator())
  }
  getIteratorFrom(e) {
    return new Ig(this.data.getIteratorFrom(e))
  }
  add(e) {
    return this.copy(this.data.remove(e).insert(e, !0))
  }
  delete(e) {
    return this.has(e) ? this.copy(this.data.remove(e)) : this
  }
  isEmpty() {
    return this.data.isEmpty()
  }
  unionWith(e) {
    let n = this
    return (
      n.size < e.size && ((n = e), (e = this)),
      e.forEach((r) => {
        n = n.add(r)
      }),
      n
    )
  }
  isEqual(e) {
    if (!(e instanceof ze) || this.size !== e.size) return !1
    const n = this.data.getIterator(),
      r = e.data.getIterator()
    for (; n.hasNext(); ) {
      const i = n.getNext().key,
        s = r.getNext().key
      if (this.comparator(i, s) !== 0) return !1
    }
    return !0
  }
  toArray() {
    const e = []
    return (
      this.forEach((n) => {
        e.push(n)
      }),
      e
    )
  }
  toString() {
    const e = []
    return this.forEach((n) => e.push(n)), 'SortedSet(' + e.toString() + ')'
  }
  copy(e) {
    const n = new ze(this.comparator)
    return (n.data = e), n
  }
}
class Ig {
  constructor(e) {
    this.iter = e
  }
  getNext() {
    return this.iter.getNext().key
  }
  hasNext() {
    return this.iter.hasNext()
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ft {
  constructor(e) {
    ;(this.fields = e), e.sort(Ue.comparator)
  }
  static empty() {
    return new Ft([])
  }
  unionWith(e) {
    let n = new ze(Ue.comparator)
    for (const r of this.fields) n = n.add(r)
    for (const r of e) n = n.add(r)
    return new Ft(n.toArray())
  }
  covers(e) {
    for (const n of this.fields) if (n.isPrefixOf(e)) return !0
    return !1
  }
  isEqual(e) {
    return Vi(this.fields, e.fields, (n, r) => n.isEqual(r))
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class O_ extends Error {
  constructor() {
    super(...arguments), (this.name = 'Base64DecodeError')
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class He {
  constructor(e) {
    this.binaryString = e
  }
  static fromBase64String(e) {
    const n = (function (i) {
      try {
        return atob(i)
      } catch (s) {
        throw typeof DOMException < 'u' && s instanceof DOMException
          ? new O_('Invalid base64 string: ' + s)
          : s
      }
    })(e)
    return new He(n)
  }
  static fromUint8Array(e) {
    const n = (function (i) {
      let s = ''
      for (let o = 0; o < i.length; ++o) s += String.fromCharCode(i[o])
      return s
    })(e)
    return new He(n)
  }
  [Symbol.iterator]() {
    let e = 0
    return {
      next: () =>
        e < this.binaryString.length
          ? { value: this.binaryString.charCodeAt(e++), done: !1 }
          : { value: void 0, done: !0 },
    }
  }
  toBase64() {
    return (function (n) {
      return btoa(n)
    })(this.binaryString)
  }
  toUint8Array() {
    return (function (n) {
      const r = new Uint8Array(n.length)
      for (let i = 0; i < n.length; i++) r[i] = n.charCodeAt(i)
      return r
    })(this.binaryString)
  }
  approximateByteSize() {
    return 2 * this.binaryString.length
  }
  compareTo(e) {
    return se(this.binaryString, e.binaryString)
  }
  isEqual(e) {
    return this.binaryString === e.binaryString
  }
}
He.EMPTY_BYTE_STRING = new He('')
const hR = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/)
function hr(t) {
  if ((ue(!!t), typeof t == 'string')) {
    let e = 0
    const n = hR.exec(t)
    if ((ue(!!n), n[1])) {
      let i = n[1]
      ;(i = (i + '000000000').substr(0, 9)), (e = Number(i))
    }
    const r = new Date(t)
    return { seconds: Math.floor(r.getTime() / 1e3), nanos: e }
  }
  return { seconds: Se(t.seconds), nanos: Se(t.nanos) }
}
function Se(t) {
  return typeof t == 'number' ? t : typeof t == 'string' ? Number(t) : 0
}
function zr(t) {
  return typeof t == 'string' ? He.fromBase64String(t) : He.fromUint8Array(t)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Zd(t) {
  var e, n
  return (
    ((n = (
      ((e = t == null ? void 0 : t.mapValue) === null || e === void 0
        ? void 0
        : e.fields) || {}
    ).__type__) === null || n === void 0
      ? void 0
      : n.stringValue) === 'server_timestamp'
  )
}
function ef(t) {
  const e = t.mapValue.fields.__previous_value__
  return Zd(e) ? ef(e) : e
}
function go(t) {
  const e = hr(t.mapValue.fields.__local_write_time__.timestampValue)
  return new Oe(e.seconds, e.nanos)
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class dR {
  constructor(e, n, r, i, s, o, l, u, h) {
    ;(this.databaseId = e),
      (this.appId = n),
      (this.persistenceKey = r),
      (this.host = i),
      (this.ssl = s),
      (this.forceLongPolling = o),
      (this.autoDetectLongPolling = l),
      (this.longPollingOptions = u),
      (this.useFetchStreams = h)
  }
}
class yo {
  constructor(e, n) {
    ;(this.projectId = e), (this.database = n || '(default)')
  }
  static empty() {
    return new yo('', '')
  }
  get isDefaultDatabase() {
    return this.database === '(default)'
  }
  isEqual(e) {
    return (
      e instanceof yo &&
      e.projectId === this.projectId &&
      e.database === this.database
    )
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Sa = {
  mapValue: { fields: { __type__: { stringValue: '__max__' } } },
}
function $r(t) {
  return 'nullValue' in t
    ? 0
    : 'booleanValue' in t
    ? 1
    : 'integerValue' in t || 'doubleValue' in t
    ? 2
    : 'timestampValue' in t
    ? 3
    : 'stringValue' in t
    ? 5
    : 'bytesValue' in t
    ? 6
    : 'referenceValue' in t
    ? 7
    : 'geoPointValue' in t
    ? 8
    : 'arrayValue' in t
    ? 9
    : 'mapValue' in t
    ? Zd(t)
      ? 4
      : pR(t)
      ? 9007199254740991
      : fR(t)
      ? 10
      : 11
    : Q()
}
function Zt(t, e) {
  if (t === e) return !0
  const n = $r(t)
  if (n !== $r(e)) return !1
  switch (n) {
    case 0:
    case 9007199254740991:
      return !0
    case 1:
      return t.booleanValue === e.booleanValue
    case 4:
      return go(t).isEqual(go(e))
    case 3:
      return (function (i, s) {
        if (
          typeof i.timestampValue == 'string' &&
          typeof s.timestampValue == 'string' &&
          i.timestampValue.length === s.timestampValue.length
        )
          return i.timestampValue === s.timestampValue
        const o = hr(i.timestampValue),
          l = hr(s.timestampValue)
        return o.seconds === l.seconds && o.nanos === l.nanos
      })(t, e)
    case 5:
      return t.stringValue === e.stringValue
    case 6:
      return (function (i, s) {
        return zr(i.bytesValue).isEqual(zr(s.bytesValue))
      })(t, e)
    case 7:
      return t.referenceValue === e.referenceValue
    case 8:
      return (function (i, s) {
        return (
          Se(i.geoPointValue.latitude) === Se(s.geoPointValue.latitude) &&
          Se(i.geoPointValue.longitude) === Se(s.geoPointValue.longitude)
        )
      })(t, e)
    case 2:
      return (function (i, s) {
        if ('integerValue' in i && 'integerValue' in s)
          return Se(i.integerValue) === Se(s.integerValue)
        if ('doubleValue' in i && 'doubleValue' in s) {
          const o = Se(i.doubleValue),
            l = Se(s.doubleValue)
          return o === l ? xl(o) === xl(l) : isNaN(o) && isNaN(l)
        }
        return !1
      })(t, e)
    case 9:
      return Vi(t.arrayValue.values || [], e.arrayValue.values || [], Zt)
    case 10:
    case 11:
      return (function (i, s) {
        const o = i.mapValue.fields || {},
          l = s.mapValue.fields || {}
        if (Tg(o) !== Tg(l)) return !1
        for (const u in o)
          if (o.hasOwnProperty(u) && (l[u] === void 0 || !Zt(o[u], l[u])))
            return !1
        return !0
      })(t, e)
    default:
      return Q()
  }
}
function vo(t, e) {
  return (t.values || []).find((n) => Zt(n, e)) !== void 0
}
function Mi(t, e) {
  if (t === e) return 0
  const n = $r(t),
    r = $r(e)
  if (n !== r) return se(n, r)
  switch (n) {
    case 0:
    case 9007199254740991:
      return 0
    case 1:
      return se(t.booleanValue, e.booleanValue)
    case 2:
      return (function (s, o) {
        const l = Se(s.integerValue || s.doubleValue),
          u = Se(o.integerValue || o.doubleValue)
        return l < u
          ? -1
          : l > u
          ? 1
          : l === u
          ? 0
          : isNaN(l)
          ? isNaN(u)
            ? 0
            : -1
          : 1
      })(t, e)
    case 3:
      return Sg(t.timestampValue, e.timestampValue)
    case 4:
      return Sg(go(t), go(e))
    case 5:
      return se(t.stringValue, e.stringValue)
    case 6:
      return (function (s, o) {
        const l = zr(s),
          u = zr(o)
        return l.compareTo(u)
      })(t.bytesValue, e.bytesValue)
    case 7:
      return (function (s, o) {
        const l = s.split('/'),
          u = o.split('/')
        for (let h = 0; h < l.length && h < u.length; h++) {
          const f = se(l[h], u[h])
          if (f !== 0) return f
        }
        return se(l.length, u.length)
      })(t.referenceValue, e.referenceValue)
    case 8:
      return (function (s, o) {
        const l = se(Se(s.latitude), Se(o.latitude))
        return l !== 0 ? l : se(Se(s.longitude), Se(o.longitude))
      })(t.geoPointValue, e.geoPointValue)
    case 9:
      return Cg(t.arrayValue, e.arrayValue)
    case 10:
      return (function (s, o) {
        var l, u, h, f
        const p = s.fields || {},
          v = o.fields || {},
          A = (l = p.value) === null || l === void 0 ? void 0 : l.arrayValue,
          P = (u = v.value) === null || u === void 0 ? void 0 : u.arrayValue,
          N = se(
            ((h = A == null ? void 0 : A.values) === null || h === void 0
              ? void 0
              : h.length) || 0,
            ((f = P == null ? void 0 : P.values) === null || f === void 0
              ? void 0
              : f.length) || 0
          )
        return N !== 0 ? N : Cg(A, P)
      })(t.mapValue, e.mapValue)
    case 11:
      return (function (s, o) {
        if (s === Sa.mapValue && o === Sa.mapValue) return 0
        if (s === Sa.mapValue) return 1
        if (o === Sa.mapValue) return -1
        const l = s.fields || {},
          u = Object.keys(l),
          h = o.fields || {},
          f = Object.keys(h)
        u.sort(), f.sort()
        for (let p = 0; p < u.length && p < f.length; ++p) {
          const v = se(u[p], f[p])
          if (v !== 0) return v
          const A = Mi(l[u[p]], h[f[p]])
          if (A !== 0) return A
        }
        return se(u.length, f.length)
      })(t.mapValue, e.mapValue)
    default:
      throw Q()
  }
}
function Sg(t, e) {
  if (typeof t == 'string' && typeof e == 'string' && t.length === e.length)
    return se(t, e)
  const n = hr(t),
    r = hr(e),
    i = se(n.seconds, r.seconds)
  return i !== 0 ? i : se(n.nanos, r.nanos)
}
function Cg(t, e) {
  const n = t.values || [],
    r = e.values || []
  for (let i = 0; i < n.length && i < r.length; ++i) {
    const s = Mi(n[i], r[i])
    if (s) return s
  }
  return se(n.length, r.length)
}
function bi(t) {
  return Ph(t)
}
function Ph(t) {
  return 'nullValue' in t
    ? 'null'
    : 'booleanValue' in t
    ? '' + t.booleanValue
    : 'integerValue' in t
    ? '' + t.integerValue
    : 'doubleValue' in t
    ? '' + t.doubleValue
    : 'timestampValue' in t
    ? (function (n) {
        const r = hr(n)
        return `time(${r.seconds},${r.nanos})`
      })(t.timestampValue)
    : 'stringValue' in t
    ? t.stringValue
    : 'bytesValue' in t
    ? (function (n) {
        return zr(n).toBase64()
      })(t.bytesValue)
    : 'referenceValue' in t
    ? (function (n) {
        return q.fromName(n).toString()
      })(t.referenceValue)
    : 'geoPointValue' in t
    ? (function (n) {
        return `geo(${n.latitude},${n.longitude})`
      })(t.geoPointValue)
    : 'arrayValue' in t
    ? (function (n) {
        let r = '[',
          i = !0
        for (const s of n.values || []) i ? (i = !1) : (r += ','), (r += Ph(s))
        return r + ']'
      })(t.arrayValue)
    : 'mapValue' in t
    ? (function (n) {
        const r = Object.keys(n.fields || {}).sort()
        let i = '{',
          s = !0
        for (const o of r)
          s ? (s = !1) : (i += ','), (i += `${o}:${Ph(n.fields[o])}`)
        return i + '}'
      })(t.mapValue)
    : Q()
}
function kh(t) {
  return !!t && 'integerValue' in t
}
function tf(t) {
  return !!t && 'arrayValue' in t
}
function Ag(t) {
  return !!t && 'nullValue' in t
}
function Rg(t) {
  return !!t && 'doubleValue' in t && isNaN(Number(t.doubleValue))
}
function Wa(t) {
  return !!t && 'mapValue' in t
}
function fR(t) {
  var e, n
  return (
    ((n = (
      ((e = t == null ? void 0 : t.mapValue) === null || e === void 0
        ? void 0
        : e.fields) || {}
    ).__type__) === null || n === void 0
      ? void 0
      : n.stringValue) === '__vector__'
  )
}
function zs(t) {
  if (t.geoPointValue)
    return { geoPointValue: Object.assign({}, t.geoPointValue) }
  if (t.timestampValue && typeof t.timestampValue == 'object')
    return { timestampValue: Object.assign({}, t.timestampValue) }
  if (t.mapValue) {
    const e = { mapValue: { fields: {} } }
    return Qi(t.mapValue.fields, (n, r) => (e.mapValue.fields[n] = zs(r))), e
  }
  if (t.arrayValue) {
    const e = { arrayValue: { values: [] } }
    for (let n = 0; n < (t.arrayValue.values || []).length; ++n)
      e.arrayValue.values[n] = zs(t.arrayValue.values[n])
    return e
  }
  return Object.assign({}, t)
}
function pR(t) {
  return (
    (((t.mapValue || {}).fields || {}).__type__ || {}).stringValue === '__max__'
  )
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ct {
  constructor(e) {
    this.value = e
  }
  static empty() {
    return new Ct({ mapValue: {} })
  }
  field(e) {
    if (e.isEmpty()) return this.value
    {
      let n = this.value
      for (let r = 0; r < e.length - 1; ++r)
        if (((n = (n.mapValue.fields || {})[e.get(r)]), !Wa(n))) return null
      return (n = (n.mapValue.fields || {})[e.lastSegment()]), n || null
    }
  }
  set(e, n) {
    this.getFieldsMap(e.popLast())[e.lastSegment()] = zs(n)
  }
  setAll(e) {
    let n = Ue.emptyPath(),
      r = {},
      i = []
    e.forEach((o, l) => {
      if (!n.isImmediateParentOf(l)) {
        const u = this.getFieldsMap(n)
        this.applyChanges(u, r, i), (r = {}), (i = []), (n = l.popLast())
      }
      o ? (r[l.lastSegment()] = zs(o)) : i.push(l.lastSegment())
    })
    const s = this.getFieldsMap(n)
    this.applyChanges(s, r, i)
  }
  delete(e) {
    const n = this.field(e.popLast())
    Wa(n) && n.mapValue.fields && delete n.mapValue.fields[e.lastSegment()]
  }
  isEqual(e) {
    return Zt(this.value, e.value)
  }
  getFieldsMap(e) {
    let n = this.value
    n.mapValue.fields || (n.mapValue = { fields: {} })
    for (let r = 0; r < e.length; ++r) {
      let i = n.mapValue.fields[e.get(r)]
      ;(Wa(i) && i.mapValue.fields) ||
        ((i = { mapValue: { fields: {} } }), (n.mapValue.fields[e.get(r)] = i)),
        (n = i)
    }
    return n.mapValue.fields
  }
  applyChanges(e, n, r) {
    Qi(n, (i, s) => (e[i] = s))
    for (const i of r) delete e[i]
  }
  clone() {
    return new Ct(zs(this.value))
  }
}
function L_(t) {
  const e = []
  return (
    Qi(t.fields, (n, r) => {
      const i = new Ue([n])
      if (Wa(r)) {
        const s = L_(r.mapValue).fields
        if (s.length === 0) e.push(i)
        else for (const o of s) e.push(i.child(o))
      } else e.push(i)
    }),
    new Ft(e)
  )
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ze {
  constructor(e, n, r, i, s, o, l) {
    ;(this.key = e),
      (this.documentType = n),
      (this.version = r),
      (this.readTime = i),
      (this.createTime = s),
      (this.data = o),
      (this.documentState = l)
  }
  static newInvalidDocument(e) {
    return new Ze(e, 0, Y.min(), Y.min(), Y.min(), Ct.empty(), 0)
  }
  static newFoundDocument(e, n, r, i) {
    return new Ze(e, 1, n, Y.min(), r, i, 0)
  }
  static newNoDocument(e, n) {
    return new Ze(e, 2, n, Y.min(), Y.min(), Ct.empty(), 0)
  }
  static newUnknownDocument(e, n) {
    return new Ze(e, 3, n, Y.min(), Y.min(), Ct.empty(), 2)
  }
  convertToFoundDocument(e, n) {
    return (
      !this.createTime.isEqual(Y.min()) ||
        (this.documentType !== 2 && this.documentType !== 0) ||
        (this.createTime = e),
      (this.version = e),
      (this.documentType = 1),
      (this.data = n),
      (this.documentState = 0),
      this
    )
  }
  convertToNoDocument(e) {
    return (
      (this.version = e),
      (this.documentType = 2),
      (this.data = Ct.empty()),
      (this.documentState = 0),
      this
    )
  }
  convertToUnknownDocument(e) {
    return (
      (this.version = e),
      (this.documentType = 3),
      (this.data = Ct.empty()),
      (this.documentState = 2),
      this
    )
  }
  setHasCommittedMutations() {
    return (this.documentState = 2), this
  }
  setHasLocalMutations() {
    return (this.documentState = 1), (this.version = Y.min()), this
  }
  setReadTime(e) {
    return (this.readTime = e), this
  }
  get hasLocalMutations() {
    return this.documentState === 1
  }
  get hasCommittedMutations() {
    return this.documentState === 2
  }
  get hasPendingWrites() {
    return this.hasLocalMutations || this.hasCommittedMutations
  }
  isValidDocument() {
    return this.documentType !== 0
  }
  isFoundDocument() {
    return this.documentType === 1
  }
  isNoDocument() {
    return this.documentType === 2
  }
  isUnknownDocument() {
    return this.documentType === 3
  }
  isEqual(e) {
    return (
      e instanceof Ze &&
      this.key.isEqual(e.key) &&
      this.version.isEqual(e.version) &&
      this.documentType === e.documentType &&
      this.documentState === e.documentState &&
      this.data.isEqual(e.data)
    )
  }
  mutableCopy() {
    return new Ze(
      this.key,
      this.documentType,
      this.version,
      this.readTime,
      this.createTime,
      this.data.clone(),
      this.documentState
    )
  }
  toString() {
    return `Document(${this.key}, ${this.version}, ${JSON.stringify(
      this.data.value
    )}, {createTime: ${this.createTime}}), {documentType: ${
      this.documentType
    }}), {documentState: ${this.documentState}})`
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Nl {
  constructor(e, n) {
    ;(this.position = e), (this.inclusive = n)
  }
}
function Pg(t, e, n) {
  let r = 0
  for (let i = 0; i < t.position.length; i++) {
    const s = e[i],
      o = t.position[i]
    if (
      (s.field.isKeyField()
        ? (r = q.comparator(q.fromName(o.referenceValue), n.key))
        : (r = Mi(o, n.data.field(s.field))),
      s.dir === 'desc' && (r *= -1),
      r !== 0)
    )
      break
  }
  return r
}
function kg(t, e) {
  if (t === null) return e === null
  if (
    e === null ||
    t.inclusive !== e.inclusive ||
    t.position.length !== e.position.length
  )
    return !1
  for (let n = 0; n < t.position.length; n++)
    if (!Zt(t.position[n], e.position[n])) return !1
  return !0
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Dl {
  constructor(e, n = 'asc') {
    ;(this.field = e), (this.dir = n)
  }
}
function mR(t, e) {
  return t.dir === e.dir && t.field.isEqual(e.field)
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class V_ {}
class Ne extends V_ {
  constructor(e, n, r) {
    super(), (this.field = e), (this.op = n), (this.value = r)
  }
  static create(e, n, r) {
    return e.isKeyField()
      ? n === 'in' || n === 'not-in'
        ? this.createKeyFieldInFilter(e, n, r)
        : new yR(e, n, r)
      : n === 'array-contains'
      ? new ER(e, r)
      : n === 'in'
      ? new wR(e, r)
      : n === 'not-in'
      ? new TR(e, r)
      : n === 'array-contains-any'
      ? new IR(e, r)
      : new Ne(e, n, r)
  }
  static createKeyFieldInFilter(e, n, r) {
    return n === 'in' ? new vR(e, r) : new _R(e, r)
  }
  matches(e) {
    const n = e.data.field(this.field)
    return this.op === '!='
      ? n !== null && this.matchesComparison(Mi(n, this.value))
      : n !== null &&
          $r(this.value) === $r(n) &&
          this.matchesComparison(Mi(n, this.value))
  }
  matchesComparison(e) {
    switch (this.op) {
      case '<':
        return e < 0
      case '<=':
        return e <= 0
      case '==':
        return e === 0
      case '!=':
        return e !== 0
      case '>':
        return e > 0
      case '>=':
        return e >= 0
      default:
        return Q()
    }
  }
  isInequality() {
    return ['<', '<=', '>', '>=', '!=', 'not-in'].indexOf(this.op) >= 0
  }
  getFlattenedFilters() {
    return [this]
  }
  getFilters() {
    return [this]
  }
}
class en extends V_ {
  constructor(e, n) {
    super(), (this.filters = e), (this.op = n), (this.ae = null)
  }
  static create(e, n) {
    return new en(e, n)
  }
  matches(e) {
    return M_(this)
      ? this.filters.find((n) => !n.matches(e)) === void 0
      : this.filters.find((n) => n.matches(e)) !== void 0
  }
  getFlattenedFilters() {
    return (
      this.ae !== null ||
        (this.ae = this.filters.reduce(
          (e, n) => e.concat(n.getFlattenedFilters()),
          []
        )),
      this.ae
    )
  }
  getFilters() {
    return Object.assign([], this.filters)
  }
}
function M_(t) {
  return t.op === 'and'
}
function b_(t) {
  return gR(t) && M_(t)
}
function gR(t) {
  for (const e of t.filters) if (e instanceof en) return !1
  return !0
}
function xh(t) {
  if (t instanceof Ne)
    return t.field.canonicalString() + t.op.toString() + bi(t.value)
  if (b_(t)) return t.filters.map((e) => xh(e)).join(',')
  {
    const e = t.filters.map((n) => xh(n)).join(',')
    return `${t.op}(${e})`
  }
}
function F_(t, e) {
  return t instanceof Ne
    ? (function (r, i) {
        return (
          i instanceof Ne &&
          r.op === i.op &&
          r.field.isEqual(i.field) &&
          Zt(r.value, i.value)
        )
      })(t, e)
    : t instanceof en
    ? (function (r, i) {
        return i instanceof en &&
          r.op === i.op &&
          r.filters.length === i.filters.length
          ? r.filters.reduce((s, o, l) => s && F_(o, i.filters[l]), !0)
          : !1
      })(t, e)
    : void Q()
}
function j_(t) {
  return t instanceof Ne
    ? (function (n) {
        return `${n.field.canonicalString()} ${n.op} ${bi(n.value)}`
      })(t)
    : t instanceof en
    ? (function (n) {
        return n.op.toString() + ' {' + n.getFilters().map(j_).join(' ,') + '}'
      })(t)
    : 'Filter'
}
class yR extends Ne {
  constructor(e, n, r) {
    super(e, n, r), (this.key = q.fromName(r.referenceValue))
  }
  matches(e) {
    const n = q.comparator(e.key, this.key)
    return this.matchesComparison(n)
  }
}
class vR extends Ne {
  constructor(e, n) {
    super(e, 'in', n), (this.keys = U_('in', n))
  }
  matches(e) {
    return this.keys.some((n) => n.isEqual(e.key))
  }
}
class _R extends Ne {
  constructor(e, n) {
    super(e, 'not-in', n), (this.keys = U_('not-in', n))
  }
  matches(e) {
    return !this.keys.some((n) => n.isEqual(e.key))
  }
}
function U_(t, e) {
  var n
  return (
    ((n = e.arrayValue) === null || n === void 0 ? void 0 : n.values) || []
  ).map((r) => q.fromName(r.referenceValue))
}
class ER extends Ne {
  constructor(e, n) {
    super(e, 'array-contains', n)
  }
  matches(e) {
    const n = e.data.field(this.field)
    return tf(n) && vo(n.arrayValue, this.value)
  }
}
class wR extends Ne {
  constructor(e, n) {
    super(e, 'in', n)
  }
  matches(e) {
    const n = e.data.field(this.field)
    return n !== null && vo(this.value.arrayValue, n)
  }
}
class TR extends Ne {
  constructor(e, n) {
    super(e, 'not-in', n)
  }
  matches(e) {
    if (vo(this.value.arrayValue, { nullValue: 'NULL_VALUE' })) return !1
    const n = e.data.field(this.field)
    return n !== null && !vo(this.value.arrayValue, n)
  }
}
class IR extends Ne {
  constructor(e, n) {
    super(e, 'array-contains-any', n)
  }
  matches(e) {
    const n = e.data.field(this.field)
    return (
      !(!tf(n) || !n.arrayValue.values) &&
      n.arrayValue.values.some((r) => vo(this.value.arrayValue, r))
    )
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class SR {
  constructor(e, n = null, r = [], i = [], s = null, o = null, l = null) {
    ;(this.path = e),
      (this.collectionGroup = n),
      (this.orderBy = r),
      (this.filters = i),
      (this.limit = s),
      (this.startAt = o),
      (this.endAt = l),
      (this.ue = null)
  }
}
function xg(t, e = null, n = [], r = [], i = null, s = null, o = null) {
  return new SR(t, e, n, r, i, s, o)
}
function nf(t) {
  const e = X(t)
  if (e.ue === null) {
    let n = e.path.canonicalString()
    e.collectionGroup !== null && (n += '|cg:' + e.collectionGroup),
      (n += '|f:'),
      (n += e.filters.map((r) => xh(r)).join(',')),
      (n += '|ob:'),
      (n += e.orderBy
        .map((r) =>
          (function (s) {
            return s.field.canonicalString() + s.dir
          })(r)
        )
        .join(',')),
      au(e.limit) || ((n += '|l:'), (n += e.limit)),
      e.startAt &&
        ((n += '|lb:'),
        (n += e.startAt.inclusive ? 'b:' : 'a:'),
        (n += e.startAt.position.map((r) => bi(r)).join(','))),
      e.endAt &&
        ((n += '|ub:'),
        (n += e.endAt.inclusive ? 'a:' : 'b:'),
        (n += e.endAt.position.map((r) => bi(r)).join(','))),
      (e.ue = n)
  }
  return e.ue
}
function rf(t, e) {
  if (t.limit !== e.limit || t.orderBy.length !== e.orderBy.length) return !1
  for (let n = 0; n < t.orderBy.length; n++)
    if (!mR(t.orderBy[n], e.orderBy[n])) return !1
  if (t.filters.length !== e.filters.length) return !1
  for (let n = 0; n < t.filters.length; n++)
    if (!F_(t.filters[n], e.filters[n])) return !1
  return (
    t.collectionGroup === e.collectionGroup &&
    !!t.path.isEqual(e.path) &&
    !!kg(t.startAt, e.startAt) &&
    kg(t.endAt, e.endAt)
  )
}
function Nh(t) {
  return (
    q.isDocumentKey(t.path) &&
    t.collectionGroup === null &&
    t.filters.length === 0
  )
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class lu {
  constructor(
    e,
    n = null,
    r = [],
    i = [],
    s = null,
    o = 'F',
    l = null,
    u = null
  ) {
    ;(this.path = e),
      (this.collectionGroup = n),
      (this.explicitOrderBy = r),
      (this.filters = i),
      (this.limit = s),
      (this.limitType = o),
      (this.startAt = l),
      (this.endAt = u),
      (this.ce = null),
      (this.le = null),
      (this.he = null),
      this.startAt,
      this.endAt
  }
}
function CR(t, e, n, r, i, s, o, l) {
  return new lu(t, e, n, r, i, s, o, l)
}
function sf(t) {
  return new lu(t)
}
function Ng(t) {
  return (
    t.filters.length === 0 &&
    t.limit === null &&
    t.startAt == null &&
    t.endAt == null &&
    (t.explicitOrderBy.length === 0 ||
      (t.explicitOrderBy.length === 1 &&
        t.explicitOrderBy[0].field.isKeyField()))
  )
}
function AR(t) {
  return t.collectionGroup !== null
}
function $s(t) {
  const e = X(t)
  if (e.ce === null) {
    e.ce = []
    const n = new Set()
    for (const s of e.explicitOrderBy)
      e.ce.push(s), n.add(s.field.canonicalString())
    const r =
      e.explicitOrderBy.length > 0
        ? e.explicitOrderBy[e.explicitOrderBy.length - 1].dir
        : 'asc'
    ;(function (o) {
      let l = new ze(Ue.comparator)
      return (
        o.filters.forEach((u) => {
          u.getFlattenedFilters().forEach((h) => {
            h.isInequality() && (l = l.add(h.field))
          })
        }),
        l
      )
    })(e).forEach((s) => {
      n.has(s.canonicalString()) || s.isKeyField() || e.ce.push(new Dl(s, r))
    }),
      n.has(Ue.keyField().canonicalString()) ||
        e.ce.push(new Dl(Ue.keyField(), r))
  }
  return e.ce
}
function Xt(t) {
  const e = X(t)
  return e.le || (e.le = RR(e, $s(t))), e.le
}
function RR(t, e) {
  if (t.limitType === 'F')
    return xg(
      t.path,
      t.collectionGroup,
      e,
      t.filters,
      t.limit,
      t.startAt,
      t.endAt
    )
  {
    e = e.map((i) => {
      const s = i.dir === 'desc' ? 'asc' : 'desc'
      return new Dl(i.field, s)
    })
    const n = t.endAt ? new Nl(t.endAt.position, t.endAt.inclusive) : null,
      r = t.startAt ? new Nl(t.startAt.position, t.startAt.inclusive) : null
    return xg(t.path, t.collectionGroup, e, t.filters, t.limit, n, r)
  }
}
function Dh(t, e, n) {
  return new lu(
    t.path,
    t.collectionGroup,
    t.explicitOrderBy.slice(),
    t.filters.slice(),
    e,
    n,
    t.startAt,
    t.endAt
  )
}
function uu(t, e) {
  return rf(Xt(t), Xt(e)) && t.limitType === e.limitType
}
function B_(t) {
  return `${nf(Xt(t))}|lt:${t.limitType}`
}
function ei(t) {
  return `Query(target=${(function (n) {
    let r = n.path.canonicalString()
    return (
      n.collectionGroup !== null &&
        (r += ' collectionGroup=' + n.collectionGroup),
      n.filters.length > 0 &&
        (r += `, filters: [${n.filters.map((i) => j_(i)).join(', ')}]`),
      au(n.limit) || (r += ', limit: ' + n.limit),
      n.orderBy.length > 0 &&
        (r += `, orderBy: [${n.orderBy
          .map((i) =>
            (function (o) {
              return `${o.field.canonicalString()} (${o.dir})`
            })(i)
          )
          .join(', ')}]`),
      n.startAt &&
        ((r += ', startAt: '),
        (r += n.startAt.inclusive ? 'b:' : 'a:'),
        (r += n.startAt.position.map((i) => bi(i)).join(','))),
      n.endAt &&
        ((r += ', endAt: '),
        (r += n.endAt.inclusive ? 'a:' : 'b:'),
        (r += n.endAt.position.map((i) => bi(i)).join(','))),
      `Target(${r})`
    )
  })(Xt(t))}; limitType=${t.limitType})`
}
function cu(t, e) {
  return (
    e.isFoundDocument() &&
    (function (r, i) {
      const s = i.key.path
      return r.collectionGroup !== null
        ? i.key.hasCollectionId(r.collectionGroup) && r.path.isPrefixOf(s)
        : q.isDocumentKey(r.path)
        ? r.path.isEqual(s)
        : r.path.isImmediateParentOf(s)
    })(t, e) &&
    (function (r, i) {
      for (const s of $s(r))
        if (!s.field.isKeyField() && i.data.field(s.field) === null) return !1
      return !0
    })(t, e) &&
    (function (r, i) {
      for (const s of r.filters) if (!s.matches(i)) return !1
      return !0
    })(t, e) &&
    (function (r, i) {
      return !(
        (r.startAt &&
          !(function (o, l, u) {
            const h = Pg(o, l, u)
            return o.inclusive ? h <= 0 : h < 0
          })(r.startAt, $s(r), i)) ||
        (r.endAt &&
          !(function (o, l, u) {
            const h = Pg(o, l, u)
            return o.inclusive ? h >= 0 : h > 0
          })(r.endAt, $s(r), i))
      )
    })(t, e)
  )
}
function PR(t) {
  return (
    t.collectionGroup ||
    (t.path.length % 2 == 1
      ? t.path.lastSegment()
      : t.path.get(t.path.length - 2))
  )
}
function z_(t) {
  return (e, n) => {
    let r = !1
    for (const i of $s(t)) {
      const s = kR(i, e, n)
      if (s !== 0) return s
      r = r || i.field.isKeyField()
    }
    return 0
  }
}
function kR(t, e, n) {
  const r = t.field.isKeyField()
    ? q.comparator(e.key, n.key)
    : (function (s, o, l) {
        const u = o.data.field(s),
          h = l.data.field(s)
        return u !== null && h !== null ? Mi(u, h) : Q()
      })(t.field, e, n)
  switch (t.dir) {
    case 'asc':
      return r
    case 'desc':
      return -1 * r
    default:
      return Q()
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Yi {
  constructor(e, n) {
    ;(this.mapKeyFn = e),
      (this.equalsFn = n),
      (this.inner = {}),
      (this.innerSize = 0)
  }
  get(e) {
    const n = this.mapKeyFn(e),
      r = this.inner[n]
    if (r !== void 0) {
      for (const [i, s] of r) if (this.equalsFn(i, e)) return s
    }
  }
  has(e) {
    return this.get(e) !== void 0
  }
  set(e, n) {
    const r = this.mapKeyFn(e),
      i = this.inner[r]
    if (i === void 0) return (this.inner[r] = [[e, n]]), void this.innerSize++
    for (let s = 0; s < i.length; s++)
      if (this.equalsFn(i[s][0], e)) return void (i[s] = [e, n])
    i.push([e, n]), this.innerSize++
  }
  delete(e) {
    const n = this.mapKeyFn(e),
      r = this.inner[n]
    if (r === void 0) return !1
    for (let i = 0; i < r.length; i++)
      if (this.equalsFn(r[i][0], e))
        return (
          r.length === 1 ? delete this.inner[n] : r.splice(i, 1),
          this.innerSize--,
          !0
        )
    return !1
  }
  forEach(e) {
    Qi(this.inner, (n, r) => {
      for (const [i, s] of r) e(i, s)
    })
  }
  isEmpty() {
    return D_(this.inner)
  }
  size() {
    return this.innerSize
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const xR = new _e(q.comparator)
function An() {
  return xR
}
const $_ = new _e(q.comparator)
function xs(...t) {
  let e = $_
  for (const n of t) e = e.insert(n.key, n)
  return e
}
function H_(t) {
  let e = $_
  return t.forEach((n, r) => (e = e.insert(n, r.overlayedDocument))), e
}
function kr() {
  return Hs()
}
function W_() {
  return Hs()
}
function Hs() {
  return new Yi(
    (t) => t.toString(),
    (t, e) => t.isEqual(e)
  )
}
const NR = new _e(q.comparator),
  DR = new ze(q.comparator)
function ee(...t) {
  let e = DR
  for (const n of t) e = e.add(n)
  return e
}
const OR = new ze(se)
function LR() {
  return OR
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function of(t, e) {
  if (t.useProto3Json) {
    if (isNaN(e)) return { doubleValue: 'NaN' }
    if (e === 1 / 0) return { doubleValue: 'Infinity' }
    if (e === -1 / 0) return { doubleValue: '-Infinity' }
  }
  return { doubleValue: xl(e) ? '-0' : e }
}
function K_(t) {
  return { integerValue: '' + t }
}
function VR(t, e) {
  return cR(e) ? K_(e) : of(t, e)
}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class hu {
  constructor() {
    this._ = void 0
  }
}
function MR(t, e, n) {
  return t instanceof Ol
    ? (function (i, s) {
        const o = {
          fields: {
            __type__: { stringValue: 'server_timestamp' },
            __local_write_time__: {
              timestampValue: { seconds: i.seconds, nanos: i.nanoseconds },
            },
          },
        }
        return (
          s && Zd(s) && (s = ef(s)),
          s && (o.fields.__previous_value__ = s),
          { mapValue: o }
        )
      })(n, e)
    : t instanceof _o
    ? G_(t, e)
    : t instanceof Eo
    ? Q_(t, e)
    : (function (i, s) {
        const o = q_(i, s),
          l = Dg(o) + Dg(i.Pe)
        return kh(o) && kh(i.Pe) ? K_(l) : of(i.serializer, l)
      })(t, e)
}
function bR(t, e, n) {
  return t instanceof _o ? G_(t, e) : t instanceof Eo ? Q_(t, e) : n
}
function q_(t, e) {
  return t instanceof Ll
    ? (function (r) {
        return (
          kh(r) ||
          (function (s) {
            return !!s && 'doubleValue' in s
          })(r)
        )
      })(e)
      ? e
      : { integerValue: 0 }
    : null
}
class Ol extends hu {}
class _o extends hu {
  constructor(e) {
    super(), (this.elements = e)
  }
}
function G_(t, e) {
  const n = Y_(e)
  for (const r of t.elements) n.some((i) => Zt(i, r)) || n.push(r)
  return { arrayValue: { values: n } }
}
class Eo extends hu {
  constructor(e) {
    super(), (this.elements = e)
  }
}
function Q_(t, e) {
  let n = Y_(e)
  for (const r of t.elements) n = n.filter((i) => !Zt(i, r))
  return { arrayValue: { values: n } }
}
class Ll extends hu {
  constructor(e, n) {
    super(), (this.serializer = e), (this.Pe = n)
  }
}
function Dg(t) {
  return Se(t.integerValue || t.doubleValue)
}
function Y_(t) {
  return tf(t) && t.arrayValue.values ? t.arrayValue.values.slice() : []
}
function FR(t, e) {
  return (
    t.field.isEqual(e.field) &&
    (function (r, i) {
      return (r instanceof _o && i instanceof _o) ||
        (r instanceof Eo && i instanceof Eo)
        ? Vi(r.elements, i.elements, Zt)
        : r instanceof Ll && i instanceof Ll
        ? Zt(r.Pe, i.Pe)
        : r instanceof Ol && i instanceof Ol
    })(t.transform, e.transform)
  )
}
class jR {
  constructor(e, n) {
    ;(this.version = e), (this.transformResults = n)
  }
}
class vn {
  constructor(e, n) {
    ;(this.updateTime = e), (this.exists = n)
  }
  static none() {
    return new vn()
  }
  static exists(e) {
    return new vn(void 0, e)
  }
  static updateTime(e) {
    return new vn(e)
  }
  get isNone() {
    return this.updateTime === void 0 && this.exists === void 0
  }
  isEqual(e) {
    return (
      this.exists === e.exists &&
      (this.updateTime
        ? !!e.updateTime && this.updateTime.isEqual(e.updateTime)
        : !e.updateTime)
    )
  }
}
function Ka(t, e) {
  return t.updateTime !== void 0
    ? e.isFoundDocument() && e.version.isEqual(t.updateTime)
    : t.exists === void 0 || t.exists === e.isFoundDocument()
}
class du {}
function X_(t, e) {
  if (!t.hasLocalMutations || (e && e.fields.length === 0)) return null
  if (e === null)
    return t.isNoDocument()
      ? new Z_(t.key, vn.none())
      : new Mo(t.key, t.data, vn.none())
  {
    const n = t.data,
      r = Ct.empty()
    let i = new ze(Ue.comparator)
    for (let s of e.fields)
      if (!i.has(s)) {
        let o = n.field(s)
        o === null && s.length > 1 && ((s = s.popLast()), (o = n.field(s))),
          o === null ? r.delete(s) : r.set(s, o),
          (i = i.add(s))
      }
    return new qr(t.key, r, new Ft(i.toArray()), vn.none())
  }
}
function UR(t, e, n) {
  t instanceof Mo
    ? (function (i, s, o) {
        const l = i.value.clone(),
          u = Lg(i.fieldTransforms, s, o.transformResults)
        l.setAll(u),
          s.convertToFoundDocument(o.version, l).setHasCommittedMutations()
      })(t, e, n)
    : t instanceof qr
    ? (function (i, s, o) {
        if (!Ka(i.precondition, s))
          return void s.convertToUnknownDocument(o.version)
        const l = Lg(i.fieldTransforms, s, o.transformResults),
          u = s.data
        u.setAll(J_(i)),
          u.setAll(l),
          s.convertToFoundDocument(o.version, u).setHasCommittedMutations()
      })(t, e, n)
    : (function (i, s, o) {
        s.convertToNoDocument(o.version).setHasCommittedMutations()
      })(0, e, n)
}
function Ws(t, e, n, r) {
  return t instanceof Mo
    ? (function (s, o, l, u) {
        if (!Ka(s.precondition, o)) return l
        const h = s.value.clone(),
          f = Vg(s.fieldTransforms, u, o)
        return (
          h.setAll(f),
          o.convertToFoundDocument(o.version, h).setHasLocalMutations(),
          null
        )
      })(t, e, n, r)
    : t instanceof qr
    ? (function (s, o, l, u) {
        if (!Ka(s.precondition, o)) return l
        const h = Vg(s.fieldTransforms, u, o),
          f = o.data
        return (
          f.setAll(J_(s)),
          f.setAll(h),
          o.convertToFoundDocument(o.version, f).setHasLocalMutations(),
          l === null
            ? null
            : l
                .unionWith(s.fieldMask.fields)
                .unionWith(s.fieldTransforms.map((p) => p.field))
        )
      })(t, e, n, r)
    : (function (s, o, l) {
        return Ka(s.precondition, o)
          ? (o.convertToNoDocument(o.version).setHasLocalMutations(), null)
          : l
      })(t, e, n)
}
function BR(t, e) {
  let n = null
  for (const r of t.fieldTransforms) {
    const i = e.data.field(r.field),
      s = q_(r.transform, i || null)
    s != null && (n === null && (n = Ct.empty()), n.set(r.field, s))
  }
  return n || null
}
function Og(t, e) {
  return (
    t.type === e.type &&
    !!t.key.isEqual(e.key) &&
    !!t.precondition.isEqual(e.precondition) &&
    !!(function (r, i) {
      return (
        (r === void 0 && i === void 0) ||
        (!(!r || !i) && Vi(r, i, (s, o) => FR(s, o)))
      )
    })(t.fieldTransforms, e.fieldTransforms) &&
    (t.type === 0
      ? t.value.isEqual(e.value)
      : t.type !== 1 ||
        (t.data.isEqual(e.data) && t.fieldMask.isEqual(e.fieldMask)))
  )
}
class Mo extends du {
  constructor(e, n, r, i = []) {
    super(),
      (this.key = e),
      (this.value = n),
      (this.precondition = r),
      (this.fieldTransforms = i),
      (this.type = 0)
  }
  getFieldMask() {
    return null
  }
}
class qr extends du {
  constructor(e, n, r, i, s = []) {
    super(),
      (this.key = e),
      (this.data = n),
      (this.fieldMask = r),
      (this.precondition = i),
      (this.fieldTransforms = s),
      (this.type = 1)
  }
  getFieldMask() {
    return this.fieldMask
  }
}
function J_(t) {
  const e = new Map()
  return (
    t.fieldMask.fields.forEach((n) => {
      if (!n.isEmpty()) {
        const r = t.data.field(n)
        e.set(n, r)
      }
    }),
    e
  )
}
function Lg(t, e, n) {
  const r = new Map()
  ue(t.length === n.length)
  for (let i = 0; i < n.length; i++) {
    const s = t[i],
      o = s.transform,
      l = e.data.field(s.field)
    r.set(s.field, bR(o, l, n[i]))
  }
  return r
}
function Vg(t, e, n) {
  const r = new Map()
  for (const i of t) {
    const s = i.transform,
      o = n.data.field(i.field)
    r.set(i.field, MR(s, o, e))
  }
  return r
}
class Z_ extends du {
  constructor(e, n) {
    super(),
      (this.key = e),
      (this.precondition = n),
      (this.type = 2),
      (this.fieldTransforms = [])
  }
  getFieldMask() {
    return null
  }
}
class zR extends du {
  constructor(e, n) {
    super(),
      (this.key = e),
      (this.precondition = n),
      (this.type = 3),
      (this.fieldTransforms = [])
  }
  getFieldMask() {
    return null
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class $R {
  constructor(e, n, r, i) {
    ;(this.batchId = e),
      (this.localWriteTime = n),
      (this.baseMutations = r),
      (this.mutations = i)
  }
  applyToRemoteDocument(e, n) {
    const r = n.mutationResults
    for (let i = 0; i < this.mutations.length; i++) {
      const s = this.mutations[i]
      s.key.isEqual(e.key) && UR(s, e, r[i])
    }
  }
  applyToLocalView(e, n) {
    for (const r of this.baseMutations)
      r.key.isEqual(e.key) && (n = Ws(r, e, n, this.localWriteTime))
    for (const r of this.mutations)
      r.key.isEqual(e.key) && (n = Ws(r, e, n, this.localWriteTime))
    return n
  }
  applyToLocalDocumentSet(e, n) {
    const r = W_()
    return (
      this.mutations.forEach((i) => {
        const s = e.get(i.key),
          o = s.overlayedDocument
        let l = this.applyToLocalView(o, s.mutatedFields)
        l = n.has(i.key) ? null : l
        const u = X_(o, l)
        u !== null && r.set(i.key, u),
          o.isValidDocument() || o.convertToNoDocument(Y.min())
      }),
      r
    )
  }
  keys() {
    return this.mutations.reduce((e, n) => e.add(n.key), ee())
  }
  isEqual(e) {
    return (
      this.batchId === e.batchId &&
      Vi(this.mutations, e.mutations, (n, r) => Og(n, r)) &&
      Vi(this.baseMutations, e.baseMutations, (n, r) => Og(n, r))
    )
  }
}
class af {
  constructor(e, n, r, i) {
    ;(this.batch = e),
      (this.commitVersion = n),
      (this.mutationResults = r),
      (this.docVersions = i)
  }
  static from(e, n, r) {
    ue(e.mutations.length === r.length)
    let i = (function () {
      return NR
    })()
    const s = e.mutations
    for (let o = 0; o < s.length; o++) i = i.insert(s[o].key, r[o].version)
    return new af(e, n, r, i)
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class HR {
  constructor(e, n) {
    ;(this.largestBatchId = e), (this.mutation = n)
  }
  getKey() {
    return this.mutation.key
  }
  isEqual(e) {
    return e !== null && this.mutation === e.mutation
  }
  toString() {
    return `Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class WR {
  constructor(e, n) {
    ;(this.count = e), (this.unchangedNames = n)
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Pe, ne
function KR(t) {
  switch (t) {
    default:
      return Q()
    case b.CANCELLED:
    case b.UNKNOWN:
    case b.DEADLINE_EXCEEDED:
    case b.RESOURCE_EXHAUSTED:
    case b.INTERNAL:
    case b.UNAVAILABLE:
    case b.UNAUTHENTICATED:
      return !1
    case b.INVALID_ARGUMENT:
    case b.NOT_FOUND:
    case b.ALREADY_EXISTS:
    case b.PERMISSION_DENIED:
    case b.FAILED_PRECONDITION:
    case b.ABORTED:
    case b.OUT_OF_RANGE:
    case b.UNIMPLEMENTED:
    case b.DATA_LOSS:
      return !0
  }
}
function e2(t) {
  if (t === void 0) return Cn('GRPC error has no .code'), b.UNKNOWN
  switch (t) {
    case Pe.OK:
      return b.OK
    case Pe.CANCELLED:
      return b.CANCELLED
    case Pe.UNKNOWN:
      return b.UNKNOWN
    case Pe.DEADLINE_EXCEEDED:
      return b.DEADLINE_EXCEEDED
    case Pe.RESOURCE_EXHAUSTED:
      return b.RESOURCE_EXHAUSTED
    case Pe.INTERNAL:
      return b.INTERNAL
    case Pe.UNAVAILABLE:
      return b.UNAVAILABLE
    case Pe.UNAUTHENTICATED:
      return b.UNAUTHENTICATED
    case Pe.INVALID_ARGUMENT:
      return b.INVALID_ARGUMENT
    case Pe.NOT_FOUND:
      return b.NOT_FOUND
    case Pe.ALREADY_EXISTS:
      return b.ALREADY_EXISTS
    case Pe.PERMISSION_DENIED:
      return b.PERMISSION_DENIED
    case Pe.FAILED_PRECONDITION:
      return b.FAILED_PRECONDITION
    case Pe.ABORTED:
      return b.ABORTED
    case Pe.OUT_OF_RANGE:
      return b.OUT_OF_RANGE
    case Pe.UNIMPLEMENTED:
      return b.UNIMPLEMENTED
    case Pe.DATA_LOSS:
      return b.DATA_LOSS
    default:
      return Q()
  }
}
;((ne = Pe || (Pe = {}))[(ne.OK = 0)] = 'OK'),
  (ne[(ne.CANCELLED = 1)] = 'CANCELLED'),
  (ne[(ne.UNKNOWN = 2)] = 'UNKNOWN'),
  (ne[(ne.INVALID_ARGUMENT = 3)] = 'INVALID_ARGUMENT'),
  (ne[(ne.DEADLINE_EXCEEDED = 4)] = 'DEADLINE_EXCEEDED'),
  (ne[(ne.NOT_FOUND = 5)] = 'NOT_FOUND'),
  (ne[(ne.ALREADY_EXISTS = 6)] = 'ALREADY_EXISTS'),
  (ne[(ne.PERMISSION_DENIED = 7)] = 'PERMISSION_DENIED'),
  (ne[(ne.UNAUTHENTICATED = 16)] = 'UNAUTHENTICATED'),
  (ne[(ne.RESOURCE_EXHAUSTED = 8)] = 'RESOURCE_EXHAUSTED'),
  (ne[(ne.FAILED_PRECONDITION = 9)] = 'FAILED_PRECONDITION'),
  (ne[(ne.ABORTED = 10)] = 'ABORTED'),
  (ne[(ne.OUT_OF_RANGE = 11)] = 'OUT_OF_RANGE'),
  (ne[(ne.UNIMPLEMENTED = 12)] = 'UNIMPLEMENTED'),
  (ne[(ne.INTERNAL = 13)] = 'INTERNAL'),
  (ne[(ne.UNAVAILABLE = 14)] = 'UNAVAILABLE'),
  (ne[(ne.DATA_LOSS = 15)] = 'DATA_LOSS')
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function qR() {
  return new TextEncoder()
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const GR = new Dr([4294967295, 4294967295], 0)
function Mg(t) {
  const e = qR().encode(t),
    n = new I_()
  return n.update(e), new Uint8Array(n.digest())
}
function bg(t) {
  const e = new DataView(t.buffer),
    n = e.getUint32(0, !0),
    r = e.getUint32(4, !0),
    i = e.getUint32(8, !0),
    s = e.getUint32(12, !0)
  return [new Dr([n, r], 0), new Dr([i, s], 0)]
}
class lf {
  constructor(e, n, r) {
    if (
      ((this.bitmap = e),
      (this.padding = n),
      (this.hashCount = r),
      n < 0 || n >= 8)
    )
      throw new Ns(`Invalid padding: ${n}`)
    if (r < 0) throw new Ns(`Invalid hash count: ${r}`)
    if (e.length > 0 && this.hashCount === 0)
      throw new Ns(`Invalid hash count: ${r}`)
    if (e.length === 0 && n !== 0)
      throw new Ns(`Invalid padding when bitmap length is 0: ${n}`)
    ;(this.Ie = 8 * e.length - n), (this.Te = Dr.fromNumber(this.Ie))
  }
  Ee(e, n, r) {
    let i = e.add(n.multiply(Dr.fromNumber(r)))
    return (
      i.compare(GR) === 1 && (i = new Dr([i.getBits(0), i.getBits(1)], 0)),
      i.modulo(this.Te).toNumber()
    )
  }
  de(e) {
    return (this.bitmap[Math.floor(e / 8)] & (1 << e % 8)) != 0
  }
  mightContain(e) {
    if (this.Ie === 0) return !1
    const n = Mg(e),
      [r, i] = bg(n)
    for (let s = 0; s < this.hashCount; s++) {
      const o = this.Ee(r, i, s)
      if (!this.de(o)) return !1
    }
    return !0
  }
  static create(e, n, r) {
    const i = e % 8 == 0 ? 0 : 8 - (e % 8),
      s = new Uint8Array(Math.ceil(e / 8)),
      o = new lf(s, i, n)
    return r.forEach((l) => o.insert(l)), o
  }
  insert(e) {
    if (this.Ie === 0) return
    const n = Mg(e),
      [r, i] = bg(n)
    for (let s = 0; s < this.hashCount; s++) {
      const o = this.Ee(r, i, s)
      this.Ae(o)
    }
  }
  Ae(e) {
    const n = Math.floor(e / 8),
      r = e % 8
    this.bitmap[n] |= 1 << r
  }
}
class Ns extends Error {
  constructor() {
    super(...arguments), (this.name = 'BloomFilterError')
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class fu {
  constructor(e, n, r, i, s) {
    ;(this.snapshotVersion = e),
      (this.targetChanges = n),
      (this.targetMismatches = r),
      (this.documentUpdates = i),
      (this.resolvedLimboDocuments = s)
  }
  static createSynthesizedRemoteEventForCurrentChange(e, n, r) {
    const i = new Map()
    return (
      i.set(e, bo.createSynthesizedTargetChangeForCurrentChange(e, n, r)),
      new fu(Y.min(), i, new _e(se), An(), ee())
    )
  }
}
class bo {
  constructor(e, n, r, i, s) {
    ;(this.resumeToken = e),
      (this.current = n),
      (this.addedDocuments = r),
      (this.modifiedDocuments = i),
      (this.removedDocuments = s)
  }
  static createSynthesizedTargetChangeForCurrentChange(e, n, r) {
    return new bo(r, n, ee(), ee(), ee())
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class qa {
  constructor(e, n, r, i) {
    ;(this.Re = e), (this.removedTargetIds = n), (this.key = r), (this.Ve = i)
  }
}
class t2 {
  constructor(e, n) {
    ;(this.targetId = e), (this.me = n)
  }
}
class n2 {
  constructor(e, n, r = He.EMPTY_BYTE_STRING, i = null) {
    ;(this.state = e),
      (this.targetIds = n),
      (this.resumeToken = r),
      (this.cause = i)
  }
}
class Fg {
  constructor() {
    ;(this.fe = 0),
      (this.ge = Ug()),
      (this.pe = He.EMPTY_BYTE_STRING),
      (this.ye = !1),
      (this.we = !0)
  }
  get current() {
    return this.ye
  }
  get resumeToken() {
    return this.pe
  }
  get Se() {
    return this.fe !== 0
  }
  get be() {
    return this.we
  }
  De(e) {
    e.approximateByteSize() > 0 && ((this.we = !0), (this.pe = e))
  }
  ve() {
    let e = ee(),
      n = ee(),
      r = ee()
    return (
      this.ge.forEach((i, s) => {
        switch (s) {
          case 0:
            e = e.add(i)
            break
          case 2:
            n = n.add(i)
            break
          case 1:
            r = r.add(i)
            break
          default:
            Q()
        }
      }),
      new bo(this.pe, this.ye, e, n, r)
    )
  }
  Ce() {
    ;(this.we = !1), (this.ge = Ug())
  }
  Fe(e, n) {
    ;(this.we = !0), (this.ge = this.ge.insert(e, n))
  }
  Me(e) {
    ;(this.we = !0), (this.ge = this.ge.remove(e))
  }
  xe() {
    this.fe += 1
  }
  Oe() {
    ;(this.fe -= 1), ue(this.fe >= 0)
  }
  Ne() {
    ;(this.we = !0), (this.ye = !0)
  }
}
class QR {
  constructor(e) {
    ;(this.Le = e),
      (this.Be = new Map()),
      (this.ke = An()),
      (this.qe = jg()),
      (this.Qe = new _e(se))
  }
  Ke(e) {
    for (const n of e.Re)
      e.Ve && e.Ve.isFoundDocument()
        ? this.$e(n, e.Ve)
        : this.Ue(n, e.key, e.Ve)
    for (const n of e.removedTargetIds) this.Ue(n, e.key, e.Ve)
  }
  We(e) {
    this.forEachTarget(e, (n) => {
      const r = this.Ge(n)
      switch (e.state) {
        case 0:
          this.ze(n) && r.De(e.resumeToken)
          break
        case 1:
          r.Oe(), r.Se || r.Ce(), r.De(e.resumeToken)
          break
        case 2:
          r.Oe(), r.Se || this.removeTarget(n)
          break
        case 3:
          this.ze(n) && (r.Ne(), r.De(e.resumeToken))
          break
        case 4:
          this.ze(n) && (this.je(n), r.De(e.resumeToken))
          break
        default:
          Q()
      }
    })
  }
  forEachTarget(e, n) {
    e.targetIds.length > 0
      ? e.targetIds.forEach(n)
      : this.Be.forEach((r, i) => {
          this.ze(i) && n(i)
        })
  }
  He(e) {
    const n = e.targetId,
      r = e.me.count,
      i = this.Je(n)
    if (i) {
      const s = i.target
      if (Nh(s))
        if (r === 0) {
          const o = new q(s.path)
          this.Ue(n, o, Ze.newNoDocument(o, Y.min()))
        } else ue(r === 1)
      else {
        const o = this.Ye(n)
        if (o !== r) {
          const l = this.Ze(e),
            u = l ? this.Xe(l, e, o) : 1
          if (u !== 0) {
            this.je(n)
            const h =
              u === 2
                ? 'TargetPurposeExistenceFilterMismatchBloom'
                : 'TargetPurposeExistenceFilterMismatch'
            this.Qe = this.Qe.insert(n, h)
          }
        }
      }
    }
  }
  Ze(e) {
    const n = e.me.unchangedNames
    if (!n || !n.bits) return null
    const {
      bits: { bitmap: r = '', padding: i = 0 },
      hashCount: s = 0,
    } = n
    let o, l
    try {
      o = zr(r).toUint8Array()
    } catch (u) {
      if (u instanceof O_)
        return (
          Li(
            'Decoding the base64 bloom filter in existence filter failed (' +
              u.message +
              '); ignoring the bloom filter and falling back to full re-query.'
          ),
          null
        )
      throw u
    }
    try {
      l = new lf(o, i, s)
    } catch (u) {
      return (
        Li(
          u instanceof Ns
            ? 'BloomFilter error: '
            : 'Applying bloom filter failed: ',
          u
        ),
        null
      )
    }
    return l.Ie === 0 ? null : l
  }
  Xe(e, n, r) {
    return n.me.count === r - this.nt(e, n.targetId) ? 0 : 2
  }
  nt(e, n) {
    const r = this.Le.getRemoteKeysForTarget(n)
    let i = 0
    return (
      r.forEach((s) => {
        const o = this.Le.tt(),
          l = `projects/${o.projectId}/databases/${
            o.database
          }/documents/${s.path.canonicalString()}`
        e.mightContain(l) || (this.Ue(n, s, null), i++)
      }),
      i
    )
  }
  rt(e) {
    const n = new Map()
    this.Be.forEach((s, o) => {
      const l = this.Je(o)
      if (l) {
        if (s.current && Nh(l.target)) {
          const u = new q(l.target.path)
          this.ke.get(u) !== null ||
            this.it(o, u) ||
            this.Ue(o, u, Ze.newNoDocument(u, e))
        }
        s.be && (n.set(o, s.ve()), s.Ce())
      }
    })
    let r = ee()
    this.qe.forEach((s, o) => {
      let l = !0
      o.forEachWhile((u) => {
        const h = this.Je(u)
        return (
          !h || h.purpose === 'TargetPurposeLimboResolution' || ((l = !1), !1)
        )
      }),
        l && (r = r.add(s))
    }),
      this.ke.forEach((s, o) => o.setReadTime(e))
    const i = new fu(e, n, this.Qe, this.ke, r)
    return (this.ke = An()), (this.qe = jg()), (this.Qe = new _e(se)), i
  }
  $e(e, n) {
    if (!this.ze(e)) return
    const r = this.it(e, n.key) ? 2 : 0
    this.Ge(e).Fe(n.key, r),
      (this.ke = this.ke.insert(n.key, n)),
      (this.qe = this.qe.insert(n.key, this.st(n.key).add(e)))
  }
  Ue(e, n, r) {
    if (!this.ze(e)) return
    const i = this.Ge(e)
    this.it(e, n) ? i.Fe(n, 1) : i.Me(n),
      (this.qe = this.qe.insert(n, this.st(n).delete(e))),
      r && (this.ke = this.ke.insert(n, r))
  }
  removeTarget(e) {
    this.Be.delete(e)
  }
  Ye(e) {
    const n = this.Ge(e).ve()
    return (
      this.Le.getRemoteKeysForTarget(e).size +
      n.addedDocuments.size -
      n.removedDocuments.size
    )
  }
  xe(e) {
    this.Ge(e).xe()
  }
  Ge(e) {
    let n = this.Be.get(e)
    return n || ((n = new Fg()), this.Be.set(e, n)), n
  }
  st(e) {
    let n = this.qe.get(e)
    return n || ((n = new ze(se)), (this.qe = this.qe.insert(e, n))), n
  }
  ze(e) {
    const n = this.Je(e) !== null
    return n || H('WatchChangeAggregator', 'Detected inactive target', e), n
  }
  Je(e) {
    const n = this.Be.get(e)
    return n && n.Se ? null : this.Le.ot(e)
  }
  je(e) {
    this.Be.set(e, new Fg()),
      this.Le.getRemoteKeysForTarget(e).forEach((n) => {
        this.Ue(e, n, null)
      })
  }
  it(e, n) {
    return this.Le.getRemoteKeysForTarget(e).has(n)
  }
}
function jg() {
  return new _e(q.comparator)
}
function Ug() {
  return new _e(q.comparator)
}
const YR = { asc: 'ASCENDING', desc: 'DESCENDING' },
  XR = {
    '<': 'LESS_THAN',
    '<=': 'LESS_THAN_OR_EQUAL',
    '>': 'GREATER_THAN',
    '>=': 'GREATER_THAN_OR_EQUAL',
    '==': 'EQUAL',
    '!=': 'NOT_EQUAL',
    'array-contains': 'ARRAY_CONTAINS',
    in: 'IN',
    'not-in': 'NOT_IN',
    'array-contains-any': 'ARRAY_CONTAINS_ANY',
  },
  JR = { and: 'AND', or: 'OR' }
class ZR {
  constructor(e, n) {
    ;(this.databaseId = e), (this.useProto3Json = n)
  }
}
function Oh(t, e) {
  return t.useProto3Json || au(e) ? e : { value: e }
}
function Vl(t, e) {
  return t.useProto3Json
    ? `${new Date(1e3 * e.seconds)
        .toISOString()
        .replace(/\.\d*/, '')
        .replace('Z', '')}.${('000000000' + e.nanoseconds).slice(-9)}Z`
    : { seconds: '' + e.seconds, nanos: e.nanoseconds }
}
function r2(t, e) {
  return t.useProto3Json ? e.toBase64() : e.toUint8Array()
}
function eP(t, e) {
  return Vl(t, e.toTimestamp())
}
function Jt(t) {
  return (
    ue(!!t),
    Y.fromTimestamp(
      (function (n) {
        const r = hr(n)
        return new Oe(r.seconds, r.nanos)
      })(t)
    )
  )
}
function uf(t, e) {
  return Lh(t, e).canonicalString()
}
function Lh(t, e) {
  const n = (function (i) {
    return new Te(['projects', i.projectId, 'databases', i.database])
  })(t).child('documents')
  return e === void 0 ? n : n.child(e)
}
function i2(t) {
  const e = Te.fromString(t)
  return ue(u2(e)), e
}
function Vh(t, e) {
  return uf(t.databaseId, e.path)
}
function Ec(t, e) {
  const n = i2(e)
  if (n.get(1) !== t.databaseId.projectId)
    throw new K(
      b.INVALID_ARGUMENT,
      'Tried to deserialize key from different project: ' +
        n.get(1) +
        ' vs ' +
        t.databaseId.projectId
    )
  if (n.get(3) !== t.databaseId.database)
    throw new K(
      b.INVALID_ARGUMENT,
      'Tried to deserialize key from different database: ' +
        n.get(3) +
        ' vs ' +
        t.databaseId.database
    )
  return new q(o2(n))
}
function s2(t, e) {
  return uf(t.databaseId, e)
}
function tP(t) {
  const e = i2(t)
  return e.length === 4 ? Te.emptyPath() : o2(e)
}
function Mh(t) {
  return new Te([
    'projects',
    t.databaseId.projectId,
    'databases',
    t.databaseId.database,
  ]).canonicalString()
}
function o2(t) {
  return ue(t.length > 4 && t.get(4) === 'documents'), t.popFirst(5)
}
function Bg(t, e, n) {
  return { name: Vh(t, e), fields: n.value.mapValue.fields }
}
function nP(t, e) {
  let n
  if ('targetChange' in e) {
    e.targetChange
    const r = (function (h) {
        return h === 'NO_CHANGE'
          ? 0
          : h === 'ADD'
          ? 1
          : h === 'REMOVE'
          ? 2
          : h === 'CURRENT'
          ? 3
          : h === 'RESET'
          ? 4
          : Q()
      })(e.targetChange.targetChangeType || 'NO_CHANGE'),
      i = e.targetChange.targetIds || [],
      s = (function (h, f) {
        return h.useProto3Json
          ? (ue(f === void 0 || typeof f == 'string'),
            He.fromBase64String(f || ''))
          : (ue(f === void 0 || f instanceof Buffer || f instanceof Uint8Array),
            He.fromUint8Array(f || new Uint8Array()))
      })(t, e.targetChange.resumeToken),
      o = e.targetChange.cause,
      l =
        o &&
        (function (h) {
          const f = h.code === void 0 ? b.UNKNOWN : e2(h.code)
          return new K(f, h.message || '')
        })(o)
    n = new n2(r, i, s, l || null)
  } else if ('documentChange' in e) {
    e.documentChange
    const r = e.documentChange
    r.document, r.document.name, r.document.updateTime
    const i = Ec(t, r.document.name),
      s = Jt(r.document.updateTime),
      o = r.document.createTime ? Jt(r.document.createTime) : Y.min(),
      l = new Ct({ mapValue: { fields: r.document.fields } }),
      u = Ze.newFoundDocument(i, s, o, l),
      h = r.targetIds || [],
      f = r.removedTargetIds || []
    n = new qa(h, f, u.key, u)
  } else if ('documentDelete' in e) {
    e.documentDelete
    const r = e.documentDelete
    r.document
    const i = Ec(t, r.document),
      s = r.readTime ? Jt(r.readTime) : Y.min(),
      o = Ze.newNoDocument(i, s),
      l = r.removedTargetIds || []
    n = new qa([], l, o.key, o)
  } else if ('documentRemove' in e) {
    e.documentRemove
    const r = e.documentRemove
    r.document
    const i = Ec(t, r.document),
      s = r.removedTargetIds || []
    n = new qa([], s, i, null)
  } else {
    if (!('filter' in e)) return Q()
    {
      e.filter
      const r = e.filter
      r.targetId
      const { count: i = 0, unchangedNames: s } = r,
        o = new WR(i, s),
        l = r.targetId
      n = new t2(l, o)
    }
  }
  return n
}
function rP(t, e) {
  let n
  if (e instanceof Mo) n = { update: Bg(t, e.key, e.value) }
  else if (e instanceof Z_) n = { delete: Vh(t, e.key) }
  else if (e instanceof qr)
    n = { update: Bg(t, e.key, e.data), updateMask: dP(e.fieldMask) }
  else {
    if (!(e instanceof zR)) return Q()
    n = { verify: Vh(t, e.key) }
  }
  return (
    e.fieldTransforms.length > 0 &&
      (n.updateTransforms = e.fieldTransforms.map((r) =>
        (function (s, o) {
          const l = o.transform
          if (l instanceof Ol)
            return {
              fieldPath: o.field.canonicalString(),
              setToServerValue: 'REQUEST_TIME',
            }
          if (l instanceof _o)
            return {
              fieldPath: o.field.canonicalString(),
              appendMissingElements: { values: l.elements },
            }
          if (l instanceof Eo)
            return {
              fieldPath: o.field.canonicalString(),
              removeAllFromArray: { values: l.elements },
            }
          if (l instanceof Ll)
            return { fieldPath: o.field.canonicalString(), increment: l.Pe }
          throw Q()
        })(0, r)
      )),
    e.precondition.isNone ||
      (n.currentDocument = (function (i, s) {
        return s.updateTime !== void 0
          ? { updateTime: eP(i, s.updateTime) }
          : s.exists !== void 0
          ? { exists: s.exists }
          : Q()
      })(t, e.precondition)),
    n
  )
}
function iP(t, e) {
  return t && t.length > 0
    ? (ue(e !== void 0),
      t.map((n) =>
        (function (i, s) {
          let o = i.updateTime ? Jt(i.updateTime) : Jt(s)
          return (
            o.isEqual(Y.min()) && (o = Jt(s)),
            new jR(o, i.transformResults || [])
          )
        })(n, e)
      ))
    : []
}
function sP(t, e) {
  return { documents: [s2(t, e.path)] }
}
function oP(t, e) {
  const n = { structuredQuery: {} },
    r = e.path
  let i
  e.collectionGroup !== null
    ? ((i = r),
      (n.structuredQuery.from = [
        { collectionId: e.collectionGroup, allDescendants: !0 },
      ]))
    : ((i = r.popLast()),
      (n.structuredQuery.from = [{ collectionId: r.lastSegment() }])),
    (n.parent = s2(t, i))
  const s = (function (h) {
    if (h.length !== 0) return l2(en.create(h, 'and'))
  })(e.filters)
  s && (n.structuredQuery.where = s)
  const o = (function (h) {
    if (h.length !== 0)
      return h.map((f) =>
        (function (v) {
          return { field: ti(v.field), direction: uP(v.dir) }
        })(f)
      )
  })(e.orderBy)
  o && (n.structuredQuery.orderBy = o)
  const l = Oh(t, e.limit)
  return (
    l !== null && (n.structuredQuery.limit = l),
    e.startAt &&
      (n.structuredQuery.startAt = (function (h) {
        return { before: h.inclusive, values: h.position }
      })(e.startAt)),
    e.endAt &&
      (n.structuredQuery.endAt = (function (h) {
        return { before: !h.inclusive, values: h.position }
      })(e.endAt)),
    { _t: n, parent: i }
  )
}
function aP(t) {
  let e = tP(t.parent)
  const n = t.structuredQuery,
    r = n.from ? n.from.length : 0
  let i = null
  if (r > 0) {
    ue(r === 1)
    const f = n.from[0]
    f.allDescendants ? (i = f.collectionId) : (e = e.child(f.collectionId))
  }
  let s = []
  n.where &&
    (s = (function (p) {
      const v = a2(p)
      return v instanceof en && b_(v) ? v.getFilters() : [v]
    })(n.where))
  let o = []
  n.orderBy &&
    (o = (function (p) {
      return p.map((v) =>
        (function (P) {
          return new Dl(
            ni(P.field),
            (function (D) {
              switch (D) {
                case 'ASCENDING':
                  return 'asc'
                case 'DESCENDING':
                  return 'desc'
                default:
                  return
              }
            })(P.direction)
          )
        })(v)
      )
    })(n.orderBy))
  let l = null
  n.limit &&
    (l = (function (p) {
      let v
      return (v = typeof p == 'object' ? p.value : p), au(v) ? null : v
    })(n.limit))
  let u = null
  n.startAt &&
    (u = (function (p) {
      const v = !!p.before,
        A = p.values || []
      return new Nl(A, v)
    })(n.startAt))
  let h = null
  return (
    n.endAt &&
      (h = (function (p) {
        const v = !p.before,
          A = p.values || []
        return new Nl(A, v)
      })(n.endAt)),
    CR(e, i, o, s, l, 'F', u, h)
  )
}
function lP(t, e) {
  const n = (function (i) {
    switch (i) {
      case 'TargetPurposeListen':
        return null
      case 'TargetPurposeExistenceFilterMismatch':
        return 'existence-filter-mismatch'
      case 'TargetPurposeExistenceFilterMismatchBloom':
        return 'existence-filter-mismatch-bloom'
      case 'TargetPurposeLimboResolution':
        return 'limbo-document'
      default:
        return Q()
    }
  })(e.purpose)
  return n == null ? null : { 'goog-listen-tags': n }
}
function a2(t) {
  return t.unaryFilter !== void 0
    ? (function (n) {
        switch (n.unaryFilter.op) {
          case 'IS_NAN':
            const r = ni(n.unaryFilter.field)
            return Ne.create(r, '==', { doubleValue: NaN })
          case 'IS_NULL':
            const i = ni(n.unaryFilter.field)
            return Ne.create(i, '==', { nullValue: 'NULL_VALUE' })
          case 'IS_NOT_NAN':
            const s = ni(n.unaryFilter.field)
            return Ne.create(s, '!=', { doubleValue: NaN })
          case 'IS_NOT_NULL':
            const o = ni(n.unaryFilter.field)
            return Ne.create(o, '!=', { nullValue: 'NULL_VALUE' })
          default:
            return Q()
        }
      })(t)
    : t.fieldFilter !== void 0
    ? (function (n) {
        return Ne.create(
          ni(n.fieldFilter.field),
          (function (i) {
            switch (i) {
              case 'EQUAL':
                return '=='
              case 'NOT_EQUAL':
                return '!='
              case 'GREATER_THAN':
                return '>'
              case 'GREATER_THAN_OR_EQUAL':
                return '>='
              case 'LESS_THAN':
                return '<'
              case 'LESS_THAN_OR_EQUAL':
                return '<='
              case 'ARRAY_CONTAINS':
                return 'array-contains'
              case 'IN':
                return 'in'
              case 'NOT_IN':
                return 'not-in'
              case 'ARRAY_CONTAINS_ANY':
                return 'array-contains-any'
              default:
                return Q()
            }
          })(n.fieldFilter.op),
          n.fieldFilter.value
        )
      })(t)
    : t.compositeFilter !== void 0
    ? (function (n) {
        return en.create(
          n.compositeFilter.filters.map((r) => a2(r)),
          (function (i) {
            switch (i) {
              case 'AND':
                return 'and'
              case 'OR':
                return 'or'
              default:
                return Q()
            }
          })(n.compositeFilter.op)
        )
      })(t)
    : Q()
}
function uP(t) {
  return YR[t]
}
function cP(t) {
  return XR[t]
}
function hP(t) {
  return JR[t]
}
function ti(t) {
  return { fieldPath: t.canonicalString() }
}
function ni(t) {
  return Ue.fromServerFormat(t.fieldPath)
}
function l2(t) {
  return t instanceof Ne
    ? (function (n) {
        if (n.op === '==') {
          if (Rg(n.value))
            return { unaryFilter: { field: ti(n.field), op: 'IS_NAN' } }
          if (Ag(n.value))
            return { unaryFilter: { field: ti(n.field), op: 'IS_NULL' } }
        } else if (n.op === '!=') {
          if (Rg(n.value))
            return { unaryFilter: { field: ti(n.field), op: 'IS_NOT_NAN' } }
          if (Ag(n.value))
            return { unaryFilter: { field: ti(n.field), op: 'IS_NOT_NULL' } }
        }
        return {
          fieldFilter: { field: ti(n.field), op: cP(n.op), value: n.value },
        }
      })(t)
    : t instanceof en
    ? (function (n) {
        const r = n.getFilters().map((i) => l2(i))
        return r.length === 1
          ? r[0]
          : { compositeFilter: { op: hP(n.op), filters: r } }
      })(t)
    : Q()
}
function dP(t) {
  const e = []
  return t.fields.forEach((n) => e.push(n.canonicalString())), { fieldPaths: e }
}
function u2(t) {
  return t.length >= 4 && t.get(0) === 'projects' && t.get(2) === 'databases'
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Gn {
  constructor(
    e,
    n,
    r,
    i,
    s = Y.min(),
    o = Y.min(),
    l = He.EMPTY_BYTE_STRING,
    u = null
  ) {
    ;(this.target = e),
      (this.targetId = n),
      (this.purpose = r),
      (this.sequenceNumber = i),
      (this.snapshotVersion = s),
      (this.lastLimboFreeSnapshotVersion = o),
      (this.resumeToken = l),
      (this.expectedCount = u)
  }
  withSequenceNumber(e) {
    return new Gn(
      this.target,
      this.targetId,
      this.purpose,
      e,
      this.snapshotVersion,
      this.lastLimboFreeSnapshotVersion,
      this.resumeToken,
      this.expectedCount
    )
  }
  withResumeToken(e, n) {
    return new Gn(
      this.target,
      this.targetId,
      this.purpose,
      this.sequenceNumber,
      n,
      this.lastLimboFreeSnapshotVersion,
      e,
      null
    )
  }
  withExpectedCount(e) {
    return new Gn(
      this.target,
      this.targetId,
      this.purpose,
      this.sequenceNumber,
      this.snapshotVersion,
      this.lastLimboFreeSnapshotVersion,
      this.resumeToken,
      e
    )
  }
  withLastLimboFreeSnapshotVersion(e) {
    return new Gn(
      this.target,
      this.targetId,
      this.purpose,
      this.sequenceNumber,
      this.snapshotVersion,
      e,
      this.resumeToken,
      this.expectedCount
    )
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class fP {
  constructor(e) {
    this.ct = e
  }
}
function pP(t) {
  const e = aP({ parent: t.parent, structuredQuery: t.structuredQuery })
  return t.limitType === 'LAST' ? Dh(e, e.limit, 'L') : e
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class mP {
  constructor() {
    this.un = new gP()
  }
  addToCollectionParentIndex(e, n) {
    return this.un.add(n), M.resolve()
  }
  getCollectionParents(e, n) {
    return M.resolve(this.un.getEntries(n))
  }
  addFieldIndex(e, n) {
    return M.resolve()
  }
  deleteFieldIndex(e, n) {
    return M.resolve()
  }
  deleteAllFieldIndexes(e) {
    return M.resolve()
  }
  createTargetIndexes(e, n) {
    return M.resolve()
  }
  getDocumentsMatchingTarget(e, n) {
    return M.resolve(null)
  }
  getIndexType(e, n) {
    return M.resolve(0)
  }
  getFieldIndexes(e, n) {
    return M.resolve([])
  }
  getNextCollectionGroupToUpdate(e) {
    return M.resolve(null)
  }
  getMinOffset(e, n) {
    return M.resolve(cr.min())
  }
  getMinOffsetFromCollectionGroup(e, n) {
    return M.resolve(cr.min())
  }
  updateCollectionGroup(e, n, r) {
    return M.resolve()
  }
  updateIndexEntries(e, n) {
    return M.resolve()
  }
}
class gP {
  constructor() {
    this.index = {}
  }
  add(e) {
    const n = e.lastSegment(),
      r = e.popLast(),
      i = this.index[n] || new ze(Te.comparator),
      s = !i.has(r)
    return (this.index[n] = i.add(r)), s
  }
  has(e) {
    const n = e.lastSegment(),
      r = e.popLast(),
      i = this.index[n]
    return i && i.has(r)
  }
  getEntries(e) {
    return (this.index[e] || new ze(Te.comparator)).toArray()
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Fi {
  constructor(e) {
    this.Ln = e
  }
  next() {
    return (this.Ln += 2), this.Ln
  }
  static Bn() {
    return new Fi(0)
  }
  static kn() {
    return new Fi(-1)
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class yP {
  constructor() {
    ;(this.changes = new Yi(
      (e) => e.toString(),
      (e, n) => e.isEqual(n)
    )),
      (this.changesApplied = !1)
  }
  addEntry(e) {
    this.assertNotApplied(), this.changes.set(e.key, e)
  }
  removeEntry(e, n) {
    this.assertNotApplied(),
      this.changes.set(e, Ze.newInvalidDocument(e).setReadTime(n))
  }
  getEntry(e, n) {
    this.assertNotApplied()
    const r = this.changes.get(n)
    return r !== void 0 ? M.resolve(r) : this.getFromCache(e, n)
  }
  getEntries(e, n) {
    return this.getAllFromCache(e, n)
  }
  apply(e) {
    return (
      this.assertNotApplied(), (this.changesApplied = !0), this.applyChanges(e)
    )
  }
  assertNotApplied() {}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class vP {
  constructor(e, n) {
    ;(this.overlayedDocument = e), (this.mutatedFields = n)
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class _P {
  constructor(e, n, r, i) {
    ;(this.remoteDocumentCache = e),
      (this.mutationQueue = n),
      (this.documentOverlayCache = r),
      (this.indexManager = i)
  }
  getDocument(e, n) {
    let r = null
    return this.documentOverlayCache
      .getOverlay(e, n)
      .next((i) => ((r = i), this.remoteDocumentCache.getEntry(e, n)))
      .next((i) => (r !== null && Ws(r.mutation, i, Ft.empty(), Oe.now()), i))
  }
  getDocuments(e, n) {
    return this.remoteDocumentCache
      .getEntries(e, n)
      .next((r) => this.getLocalViewOfDocuments(e, r, ee()).next(() => r))
  }
  getLocalViewOfDocuments(e, n, r = ee()) {
    const i = kr()
    return this.populateOverlays(e, i, n).next(() =>
      this.computeViews(e, n, i, r).next((s) => {
        let o = xs()
        return (
          s.forEach((l, u) => {
            o = o.insert(l, u.overlayedDocument)
          }),
          o
        )
      })
    )
  }
  getOverlayedDocuments(e, n) {
    const r = kr()
    return this.populateOverlays(e, r, n).next(() =>
      this.computeViews(e, n, r, ee())
    )
  }
  populateOverlays(e, n, r) {
    const i = []
    return (
      r.forEach((s) => {
        n.has(s) || i.push(s)
      }),
      this.documentOverlayCache.getOverlays(e, i).next((s) => {
        s.forEach((o, l) => {
          n.set(o, l)
        })
      })
    )
  }
  computeViews(e, n, r, i) {
    let s = An()
    const o = Hs(),
      l = (function () {
        return Hs()
      })()
    return (
      n.forEach((u, h) => {
        const f = r.get(h.key)
        i.has(h.key) && (f === void 0 || f.mutation instanceof qr)
          ? (s = s.insert(h.key, h))
          : f !== void 0
          ? (o.set(h.key, f.mutation.getFieldMask()),
            Ws(f.mutation, h, f.mutation.getFieldMask(), Oe.now()))
          : o.set(h.key, Ft.empty())
      }),
      this.recalculateAndSaveOverlays(e, s).next(
        (u) => (
          u.forEach((h, f) => o.set(h, f)),
          n.forEach((h, f) => {
            var p
            return l.set(
              h,
              new vP(f, (p = o.get(h)) !== null && p !== void 0 ? p : null)
            )
          }),
          l
        )
      )
    )
  }
  recalculateAndSaveOverlays(e, n) {
    const r = Hs()
    let i = new _e((o, l) => o - l),
      s = ee()
    return this.mutationQueue
      .getAllMutationBatchesAffectingDocumentKeys(e, n)
      .next((o) => {
        for (const l of o)
          l.keys().forEach((u) => {
            const h = n.get(u)
            if (h === null) return
            let f = r.get(u) || Ft.empty()
            ;(f = l.applyToLocalView(h, f)), r.set(u, f)
            const p = (i.get(l.batchId) || ee()).add(u)
            i = i.insert(l.batchId, p)
          })
      })
      .next(() => {
        const o = [],
          l = i.getReverseIterator()
        for (; l.hasNext(); ) {
          const u = l.getNext(),
            h = u.key,
            f = u.value,
            p = W_()
          f.forEach((v) => {
            if (!s.has(v)) {
              const A = X_(n.get(v), r.get(v))
              A !== null && p.set(v, A), (s = s.add(v))
            }
          }),
            o.push(this.documentOverlayCache.saveOverlays(e, h, p))
        }
        return M.waitFor(o)
      })
      .next(() => r)
  }
  recalculateAndSaveOverlaysForDocumentKeys(e, n) {
    return this.remoteDocumentCache
      .getEntries(e, n)
      .next((r) => this.recalculateAndSaveOverlays(e, r))
  }
  getDocumentsMatchingQuery(e, n, r, i) {
    return (function (o) {
      return (
        q.isDocumentKey(o.path) &&
        o.collectionGroup === null &&
        o.filters.length === 0
      )
    })(n)
      ? this.getDocumentsMatchingDocumentQuery(e, n.path)
      : AR(n)
      ? this.getDocumentsMatchingCollectionGroupQuery(e, n, r, i)
      : this.getDocumentsMatchingCollectionQuery(e, n, r, i)
  }
  getNextDocuments(e, n, r, i) {
    return this.remoteDocumentCache
      .getAllFromCollectionGroup(e, n, r, i)
      .next((s) => {
        const o =
          i - s.size > 0
            ? this.documentOverlayCache.getOverlaysForCollectionGroup(
                e,
                n,
                r.largestBatchId,
                i - s.size
              )
            : M.resolve(kr())
        let l = -1,
          u = s
        return o.next((h) =>
          M.forEach(
            h,
            (f, p) => (
              l < p.largestBatchId && (l = p.largestBatchId),
              s.get(f)
                ? M.resolve()
                : this.remoteDocumentCache.getEntry(e, f).next((v) => {
                    u = u.insert(f, v)
                  })
            )
          )
            .next(() => this.populateOverlays(e, h, s))
            .next(() => this.computeViews(e, u, h, ee()))
            .next((f) => ({ batchId: l, changes: H_(f) }))
        )
      })
  }
  getDocumentsMatchingDocumentQuery(e, n) {
    return this.getDocument(e, new q(n)).next((r) => {
      let i = xs()
      return r.isFoundDocument() && (i = i.insert(r.key, r)), i
    })
  }
  getDocumentsMatchingCollectionGroupQuery(e, n, r, i) {
    const s = n.collectionGroup
    let o = xs()
    return this.indexManager.getCollectionParents(e, s).next((l) =>
      M.forEach(l, (u) => {
        const h = (function (p, v) {
          return new lu(
            v,
            null,
            p.explicitOrderBy.slice(),
            p.filters.slice(),
            p.limit,
            p.limitType,
            p.startAt,
            p.endAt
          )
        })(n, u.child(s))
        return this.getDocumentsMatchingCollectionQuery(e, h, r, i).next(
          (f) => {
            f.forEach((p, v) => {
              o = o.insert(p, v)
            })
          }
        )
      }).next(() => o)
    )
  }
  getDocumentsMatchingCollectionQuery(e, n, r, i) {
    let s
    return this.documentOverlayCache
      .getOverlaysForCollection(e, n.path, r.largestBatchId)
      .next(
        (o) => (
          (s = o),
          this.remoteDocumentCache.getDocumentsMatchingQuery(e, n, r, s, i)
        )
      )
      .next((o) => {
        s.forEach((u, h) => {
          const f = h.getKey()
          o.get(f) === null && (o = o.insert(f, Ze.newInvalidDocument(f)))
        })
        let l = xs()
        return (
          o.forEach((u, h) => {
            const f = s.get(u)
            f !== void 0 && Ws(f.mutation, h, Ft.empty(), Oe.now()),
              cu(n, h) && (l = l.insert(u, h))
          }),
          l
        )
      })
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class EP {
  constructor(e) {
    ;(this.serializer = e), (this.hr = new Map()), (this.Pr = new Map())
  }
  getBundleMetadata(e, n) {
    return M.resolve(this.hr.get(n))
  }
  saveBundleMetadata(e, n) {
    return (
      this.hr.set(
        n.id,
        (function (i) {
          return { id: i.id, version: i.version, createTime: Jt(i.createTime) }
        })(n)
      ),
      M.resolve()
    )
  }
  getNamedQuery(e, n) {
    return M.resolve(this.Pr.get(n))
  }
  saveNamedQuery(e, n) {
    return (
      this.Pr.set(
        n.name,
        (function (i) {
          return {
            name: i.name,
            query: pP(i.bundledQuery),
            readTime: Jt(i.readTime),
          }
        })(n)
      ),
      M.resolve()
    )
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class wP {
  constructor() {
    ;(this.overlays = new _e(q.comparator)), (this.Ir = new Map())
  }
  getOverlay(e, n) {
    return M.resolve(this.overlays.get(n))
  }
  getOverlays(e, n) {
    const r = kr()
    return M.forEach(n, (i) =>
      this.getOverlay(e, i).next((s) => {
        s !== null && r.set(i, s)
      })
    ).next(() => r)
  }
  saveOverlays(e, n, r) {
    return (
      r.forEach((i, s) => {
        this.ht(e, n, s)
      }),
      M.resolve()
    )
  }
  removeOverlaysForBatchId(e, n, r) {
    const i = this.Ir.get(r)
    return (
      i !== void 0 &&
        (i.forEach((s) => (this.overlays = this.overlays.remove(s))),
        this.Ir.delete(r)),
      M.resolve()
    )
  }
  getOverlaysForCollection(e, n, r) {
    const i = kr(),
      s = n.length + 1,
      o = new q(n.child('')),
      l = this.overlays.getIteratorFrom(o)
    for (; l.hasNext(); ) {
      const u = l.getNext().value,
        h = u.getKey()
      if (!n.isPrefixOf(h.path)) break
      h.path.length === s && u.largestBatchId > r && i.set(u.getKey(), u)
    }
    return M.resolve(i)
  }
  getOverlaysForCollectionGroup(e, n, r, i) {
    let s = new _e((h, f) => h - f)
    const o = this.overlays.getIterator()
    for (; o.hasNext(); ) {
      const h = o.getNext().value
      if (h.getKey().getCollectionGroup() === n && h.largestBatchId > r) {
        let f = s.get(h.largestBatchId)
        f === null && ((f = kr()), (s = s.insert(h.largestBatchId, f))),
          f.set(h.getKey(), h)
      }
    }
    const l = kr(),
      u = s.getIterator()
    for (
      ;
      u.hasNext() &&
      (u.getNext().value.forEach((h, f) => l.set(h, f)), !(l.size() >= i));

    );
    return M.resolve(l)
  }
  ht(e, n, r) {
    const i = this.overlays.get(r.key)
    if (i !== null) {
      const o = this.Ir.get(i.largestBatchId).delete(r.key)
      this.Ir.set(i.largestBatchId, o)
    }
    this.overlays = this.overlays.insert(r.key, new HR(n, r))
    let s = this.Ir.get(n)
    s === void 0 && ((s = ee()), this.Ir.set(n, s)),
      this.Ir.set(n, s.add(r.key))
  }
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class TP {
  constructor() {
    this.sessionToken = He.EMPTY_BYTE_STRING
  }
  getSessionToken(e) {
    return M.resolve(this.sessionToken)
  }
  setSessionToken(e, n) {
    return (this.sessionToken = n), M.resolve()
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class cf {
  constructor() {
    ;(this.Tr = new ze(Le.Er)), (this.dr = new ze(Le.Ar))
  }
  isEmpty() {
    return this.Tr.isEmpty()
  }
  addReference(e, n) {
    const r = new Le(e, n)
    ;(this.Tr = this.Tr.add(r)), (this.dr = this.dr.add(r))
  }
  Rr(e, n) {
    e.forEach((r) => this.addReference(r, n))
  }
  removeReference(e, n) {
    this.Vr(new Le(e, n))
  }
  mr(e, n) {
    e.forEach((r) => this.removeReference(r, n))
  }
  gr(e) {
    const n = new q(new Te([])),
      r = new Le(n, e),
      i = new Le(n, e + 1),
      s = []
    return (
      this.dr.forEachInRange([r, i], (o) => {
        this.Vr(o), s.push(o.key)
      }),
      s
    )
  }
  pr() {
    this.Tr.forEach((e) => this.Vr(e))
  }
  Vr(e) {
    ;(this.Tr = this.Tr.delete(e)), (this.dr = this.dr.delete(e))
  }
  yr(e) {
    const n = new q(new Te([])),
      r = new Le(n, e),
      i = new Le(n, e + 1)
    let s = ee()
    return (
      this.dr.forEachInRange([r, i], (o) => {
        s = s.add(o.key)
      }),
      s
    )
  }
  containsKey(e) {
    const n = new Le(e, 0),
      r = this.Tr.firstAfterOrEqual(n)
    return r !== null && e.isEqual(r.key)
  }
}
class Le {
  constructor(e, n) {
    ;(this.key = e), (this.wr = n)
  }
  static Er(e, n) {
    return q.comparator(e.key, n.key) || se(e.wr, n.wr)
  }
  static Ar(e, n) {
    return se(e.wr, n.wr) || q.comparator(e.key, n.key)
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class IP {
  constructor(e, n) {
    ;(this.indexManager = e),
      (this.referenceDelegate = n),
      (this.mutationQueue = []),
      (this.Sr = 1),
      (this.br = new ze(Le.Er))
  }
  checkEmpty(e) {
    return M.resolve(this.mutationQueue.length === 0)
  }
  addMutationBatch(e, n, r, i) {
    const s = this.Sr
    this.Sr++,
      this.mutationQueue.length > 0 &&
        this.mutationQueue[this.mutationQueue.length - 1]
    const o = new $R(s, n, r, i)
    this.mutationQueue.push(o)
    for (const l of i)
      (this.br = this.br.add(new Le(l.key, s))),
        this.indexManager.addToCollectionParentIndex(e, l.key.path.popLast())
    return M.resolve(o)
  }
  lookupMutationBatch(e, n) {
    return M.resolve(this.Dr(n))
  }
  getNextMutationBatchAfterBatchId(e, n) {
    const r = n + 1,
      i = this.vr(r),
      s = i < 0 ? 0 : i
    return M.resolve(
      this.mutationQueue.length > s ? this.mutationQueue[s] : null
    )
  }
  getHighestUnacknowledgedBatchId() {
    return M.resolve(this.mutationQueue.length === 0 ? -1 : this.Sr - 1)
  }
  getAllMutationBatches(e) {
    return M.resolve(this.mutationQueue.slice())
  }
  getAllMutationBatchesAffectingDocumentKey(e, n) {
    const r = new Le(n, 0),
      i = new Le(n, Number.POSITIVE_INFINITY),
      s = []
    return (
      this.br.forEachInRange([r, i], (o) => {
        const l = this.Dr(o.wr)
        s.push(l)
      }),
      M.resolve(s)
    )
  }
  getAllMutationBatchesAffectingDocumentKeys(e, n) {
    let r = new ze(se)
    return (
      n.forEach((i) => {
        const s = new Le(i, 0),
          o = new Le(i, Number.POSITIVE_INFINITY)
        this.br.forEachInRange([s, o], (l) => {
          r = r.add(l.wr)
        })
      }),
      M.resolve(this.Cr(r))
    )
  }
  getAllMutationBatchesAffectingQuery(e, n) {
    const r = n.path,
      i = r.length + 1
    let s = r
    q.isDocumentKey(s) || (s = s.child(''))
    const o = new Le(new q(s), 0)
    let l = new ze(se)
    return (
      this.br.forEachWhile((u) => {
        const h = u.key.path
        return !!r.isPrefixOf(h) && (h.length === i && (l = l.add(u.wr)), !0)
      }, o),
      M.resolve(this.Cr(l))
    )
  }
  Cr(e) {
    const n = []
    return (
      e.forEach((r) => {
        const i = this.Dr(r)
        i !== null && n.push(i)
      }),
      n
    )
  }
  removeMutationBatch(e, n) {
    ue(this.Fr(n.batchId, 'removed') === 0), this.mutationQueue.shift()
    let r = this.br
    return M.forEach(n.mutations, (i) => {
      const s = new Le(i.key, n.batchId)
      return (
        (r = r.delete(s)),
        this.referenceDelegate.markPotentiallyOrphaned(e, i.key)
      )
    }).next(() => {
      this.br = r
    })
  }
  On(e) {}
  containsKey(e, n) {
    const r = new Le(n, 0),
      i = this.br.firstAfterOrEqual(r)
    return M.resolve(n.isEqual(i && i.key))
  }
  performConsistencyCheck(e) {
    return this.mutationQueue.length, M.resolve()
  }
  Fr(e, n) {
    return this.vr(e)
  }
  vr(e) {
    return this.mutationQueue.length === 0
      ? 0
      : e - this.mutationQueue[0].batchId
  }
  Dr(e) {
    const n = this.vr(e)
    return n < 0 || n >= this.mutationQueue.length
      ? null
      : this.mutationQueue[n]
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class SP {
  constructor(e) {
    ;(this.Mr = e),
      (this.docs = (function () {
        return new _e(q.comparator)
      })()),
      (this.size = 0)
  }
  setIndexManager(e) {
    this.indexManager = e
  }
  addEntry(e, n) {
    const r = n.key,
      i = this.docs.get(r),
      s = i ? i.size : 0,
      o = this.Mr(n)
    return (
      (this.docs = this.docs.insert(r, { document: n.mutableCopy(), size: o })),
      (this.size += o - s),
      this.indexManager.addToCollectionParentIndex(e, r.path.popLast())
    )
  }
  removeEntry(e) {
    const n = this.docs.get(e)
    n && ((this.docs = this.docs.remove(e)), (this.size -= n.size))
  }
  getEntry(e, n) {
    const r = this.docs.get(n)
    return M.resolve(r ? r.document.mutableCopy() : Ze.newInvalidDocument(n))
  }
  getEntries(e, n) {
    let r = An()
    return (
      n.forEach((i) => {
        const s = this.docs.get(i)
        r = r.insert(i, s ? s.document.mutableCopy() : Ze.newInvalidDocument(i))
      }),
      M.resolve(r)
    )
  }
  getDocumentsMatchingQuery(e, n, r, i) {
    let s = An()
    const o = n.path,
      l = new q(o.child('')),
      u = this.docs.getIteratorFrom(l)
    for (; u.hasNext(); ) {
      const {
        key: h,
        value: { document: f },
      } = u.getNext()
      if (!o.isPrefixOf(h.path)) break
      h.path.length > o.length + 1 ||
        oR(sR(f), r) <= 0 ||
        ((i.has(f.key) || cu(n, f)) && (s = s.insert(f.key, f.mutableCopy())))
    }
    return M.resolve(s)
  }
  getAllFromCollectionGroup(e, n, r, i) {
    Q()
  }
  Or(e, n) {
    return M.forEach(this.docs, (r) => n(r))
  }
  newChangeBuffer(e) {
    return new CP(this)
  }
  getSize(e) {
    return M.resolve(this.size)
  }
}
class CP extends yP {
  constructor(e) {
    super(), (this.cr = e)
  }
  applyChanges(e) {
    const n = []
    return (
      this.changes.forEach((r, i) => {
        i.isValidDocument()
          ? n.push(this.cr.addEntry(e, i))
          : this.cr.removeEntry(r)
      }),
      M.waitFor(n)
    )
  }
  getFromCache(e, n) {
    return this.cr.getEntry(e, n)
  }
  getAllFromCache(e, n) {
    return this.cr.getEntries(e, n)
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class AP {
  constructor(e) {
    ;(this.persistence = e),
      (this.Nr = new Yi((n) => nf(n), rf)),
      (this.lastRemoteSnapshotVersion = Y.min()),
      (this.highestTargetId = 0),
      (this.Lr = 0),
      (this.Br = new cf()),
      (this.targetCount = 0),
      (this.kr = Fi.Bn())
  }
  forEachTarget(e, n) {
    return this.Nr.forEach((r, i) => n(i)), M.resolve()
  }
  getLastRemoteSnapshotVersion(e) {
    return M.resolve(this.lastRemoteSnapshotVersion)
  }
  getHighestSequenceNumber(e) {
    return M.resolve(this.Lr)
  }
  allocateTargetId(e) {
    return (
      (this.highestTargetId = this.kr.next()), M.resolve(this.highestTargetId)
    )
  }
  setTargetsMetadata(e, n, r) {
    return (
      r && (this.lastRemoteSnapshotVersion = r),
      n > this.Lr && (this.Lr = n),
      M.resolve()
    )
  }
  Kn(e) {
    this.Nr.set(e.target, e)
    const n = e.targetId
    n > this.highestTargetId &&
      ((this.kr = new Fi(n)), (this.highestTargetId = n)),
      e.sequenceNumber > this.Lr && (this.Lr = e.sequenceNumber)
  }
  addTargetData(e, n) {
    return this.Kn(n), (this.targetCount += 1), M.resolve()
  }
  updateTargetData(e, n) {
    return this.Kn(n), M.resolve()
  }
  removeTargetData(e, n) {
    return (
      this.Nr.delete(n.target),
      this.Br.gr(n.targetId),
      (this.targetCount -= 1),
      M.resolve()
    )
  }
  removeTargets(e, n, r) {
    let i = 0
    const s = []
    return (
      this.Nr.forEach((o, l) => {
        l.sequenceNumber <= n &&
          r.get(l.targetId) === null &&
          (this.Nr.delete(o),
          s.push(this.removeMatchingKeysForTargetId(e, l.targetId)),
          i++)
      }),
      M.waitFor(s).next(() => i)
    )
  }
  getTargetCount(e) {
    return M.resolve(this.targetCount)
  }
  getTargetData(e, n) {
    const r = this.Nr.get(n) || null
    return M.resolve(r)
  }
  addMatchingKeys(e, n, r) {
    return this.Br.Rr(n, r), M.resolve()
  }
  removeMatchingKeys(e, n, r) {
    this.Br.mr(n, r)
    const i = this.persistence.referenceDelegate,
      s = []
    return (
      i &&
        n.forEach((o) => {
          s.push(i.markPotentiallyOrphaned(e, o))
        }),
      M.waitFor(s)
    )
  }
  removeMatchingKeysForTargetId(e, n) {
    return this.Br.gr(n), M.resolve()
  }
  getMatchingKeysForTargetId(e, n) {
    const r = this.Br.yr(n)
    return M.resolve(r)
  }
  containsKey(e, n) {
    return M.resolve(this.Br.containsKey(n))
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class RP {
  constructor(e, n) {
    ;(this.qr = {}),
      (this.overlays = {}),
      (this.Qr = new Jd(0)),
      (this.Kr = !1),
      (this.Kr = !0),
      (this.$r = new TP()),
      (this.referenceDelegate = e(this)),
      (this.Ur = new AP(this)),
      (this.indexManager = new mP()),
      (this.remoteDocumentCache = (function (i) {
        return new SP(i)
      })((r) => this.referenceDelegate.Wr(r))),
      (this.serializer = new fP(n)),
      (this.Gr = new EP(this.serializer))
  }
  start() {
    return Promise.resolve()
  }
  shutdown() {
    return (this.Kr = !1), Promise.resolve()
  }
  get started() {
    return this.Kr
  }
  setDatabaseDeletedListener() {}
  setNetworkEnabled() {}
  getIndexManager(e) {
    return this.indexManager
  }
  getDocumentOverlayCache(e) {
    let n = this.overlays[e.toKey()]
    return n || ((n = new wP()), (this.overlays[e.toKey()] = n)), n
  }
  getMutationQueue(e, n) {
    let r = this.qr[e.toKey()]
    return (
      r || ((r = new IP(n, this.referenceDelegate)), (this.qr[e.toKey()] = r)),
      r
    )
  }
  getGlobalsCache() {
    return this.$r
  }
  getTargetCache() {
    return this.Ur
  }
  getRemoteDocumentCache() {
    return this.remoteDocumentCache
  }
  getBundleCache() {
    return this.Gr
  }
  runTransaction(e, n, r) {
    H('MemoryPersistence', 'Starting transaction:', e)
    const i = new PP(this.Qr.next())
    return (
      this.referenceDelegate.zr(),
      r(i)
        .next((s) => this.referenceDelegate.jr(i).next(() => s))
        .toPromise()
        .then((s) => (i.raiseOnCommittedEvent(), s))
    )
  }
  Hr(e, n) {
    return M.or(Object.values(this.qr).map((r) => () => r.containsKey(e, n)))
  }
}
class PP extends lR {
  constructor(e) {
    super(), (this.currentSequenceNumber = e)
  }
}
class hf {
  constructor(e) {
    ;(this.persistence = e), (this.Jr = new cf()), (this.Yr = null)
  }
  static Zr(e) {
    return new hf(e)
  }
  get Xr() {
    if (this.Yr) return this.Yr
    throw Q()
  }
  addReference(e, n, r) {
    return this.Jr.addReference(r, n), this.Xr.delete(r.toString()), M.resolve()
  }
  removeReference(e, n, r) {
    return this.Jr.removeReference(r, n), this.Xr.add(r.toString()), M.resolve()
  }
  markPotentiallyOrphaned(e, n) {
    return this.Xr.add(n.toString()), M.resolve()
  }
  removeTarget(e, n) {
    this.Jr.gr(n.targetId).forEach((i) => this.Xr.add(i.toString()))
    const r = this.persistence.getTargetCache()
    return r
      .getMatchingKeysForTargetId(e, n.targetId)
      .next((i) => {
        i.forEach((s) => this.Xr.add(s.toString()))
      })
      .next(() => r.removeTargetData(e, n))
  }
  zr() {
    this.Yr = new Set()
  }
  jr(e) {
    const n = this.persistence.getRemoteDocumentCache().newChangeBuffer()
    return M.forEach(this.Xr, (r) => {
      const i = q.fromPath(r)
      return this.ei(e, i).next((s) => {
        s || n.removeEntry(i, Y.min())
      })
    }).next(() => ((this.Yr = null), n.apply(e)))
  }
  updateLimboDocument(e, n) {
    return this.ei(e, n).next((r) => {
      r ? this.Xr.delete(n.toString()) : this.Xr.add(n.toString())
    })
  }
  Wr(e) {
    return 0
  }
  ei(e, n) {
    return M.or([
      () => M.resolve(this.Jr.containsKey(n)),
      () => this.persistence.getTargetCache().containsKey(e, n),
      () => this.persistence.Hr(e, n),
    ])
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class df {
  constructor(e, n, r, i) {
    ;(this.targetId = e), (this.fromCache = n), (this.$i = r), (this.Ui = i)
  }
  static Wi(e, n) {
    let r = ee(),
      i = ee()
    for (const s of n.docChanges)
      switch (s.type) {
        case 0:
          r = r.add(s.doc.key)
          break
        case 1:
          i = i.add(s.doc.key)
      }
    return new df(e, n.fromCache, r, i)
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class kP {
  constructor() {
    this._documentReadCount = 0
  }
  get documentReadCount() {
    return this._documentReadCount
  }
  incrementDocumentReadCount(e) {
    this._documentReadCount += e
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class xP {
  constructor() {
    ;(this.Gi = !1),
      (this.zi = !1),
      (this.ji = 100),
      (this.Hi = (function () {
        return mI() ? 8 : uR(tt()) > 0 ? 6 : 4
      })())
  }
  initialize(e, n) {
    ;(this.Ji = e), (this.indexManager = n), (this.Gi = !0)
  }
  getDocumentsMatchingQuery(e, n, r, i) {
    const s = { result: null }
    return this.Yi(e, n)
      .next((o) => {
        s.result = o
      })
      .next(() => {
        if (!s.result)
          return this.Zi(e, n, i, r).next((o) => {
            s.result = o
          })
      })
      .next(() => {
        if (s.result) return
        const o = new kP()
        return this.Xi(e, n, o).next((l) => {
          if (((s.result = l), this.zi)) return this.es(e, n, o, l.size)
        })
      })
      .next(() => s.result)
  }
  es(e, n, r, i) {
    return r.documentReadCount < this.ji
      ? (Ts() <= te.DEBUG &&
          H(
            'QueryEngine',
            'SDK will not create cache indexes for query:',
            ei(n),
            'since it only creates cache indexes for collection contains',
            'more than or equal to',
            this.ji,
            'documents'
          ),
        M.resolve())
      : (Ts() <= te.DEBUG &&
          H(
            'QueryEngine',
            'Query:',
            ei(n),
            'scans',
            r.documentReadCount,
            'local documents and returns',
            i,
            'documents as results.'
          ),
        r.documentReadCount > this.Hi * i
          ? (Ts() <= te.DEBUG &&
              H(
                'QueryEngine',
                'The SDK decides to create cache indexes for query:',
                ei(n),
                'as using cache indexes may help improve performance.'
              ),
            this.indexManager.createTargetIndexes(e, Xt(n)))
          : M.resolve())
  }
  Yi(e, n) {
    if (Ng(n)) return M.resolve(null)
    let r = Xt(n)
    return this.indexManager.getIndexType(e, r).next((i) =>
      i === 0
        ? null
        : (n.limit !== null && i === 1 && ((n = Dh(n, null, 'F')), (r = Xt(n))),
          this.indexManager.getDocumentsMatchingTarget(e, r).next((s) => {
            const o = ee(...s)
            return this.Ji.getDocuments(e, o).next((l) =>
              this.indexManager.getMinOffset(e, r).next((u) => {
                const h = this.ts(n, l)
                return this.ns(n, h, o, u.readTime)
                  ? this.Yi(e, Dh(n, null, 'F'))
                  : this.rs(e, h, n, u)
              })
            )
          }))
    )
  }
  Zi(e, n, r, i) {
    return Ng(n) || i.isEqual(Y.min())
      ? M.resolve(null)
      : this.Ji.getDocuments(e, r).next((s) => {
          const o = this.ts(n, s)
          return this.ns(n, o, r, i)
            ? M.resolve(null)
            : (Ts() <= te.DEBUG &&
                H(
                  'QueryEngine',
                  'Re-using previous result from %s to execute query: %s',
                  i.toString(),
                  ei(n)
                ),
              this.rs(e, o, n, iR(i, -1)).next((l) => l))
        })
  }
  ts(e, n) {
    let r = new ze(z_(e))
    return (
      n.forEach((i, s) => {
        cu(e, s) && (r = r.add(s))
      }),
      r
    )
  }
  ns(e, n, r, i) {
    if (e.limit === null) return !1
    if (r.size !== n.size) return !0
    const s = e.limitType === 'F' ? n.last() : n.first()
    return !!s && (s.hasPendingWrites || s.version.compareTo(i) > 0)
  }
  Xi(e, n, r) {
    return (
      Ts() <= te.DEBUG &&
        H('QueryEngine', 'Using full collection scan to execute query:', ei(n)),
      this.Ji.getDocumentsMatchingQuery(e, n, cr.min(), r)
    )
  }
  rs(e, n, r, i) {
    return this.Ji.getDocumentsMatchingQuery(e, r, i).next(
      (s) => (
        n.forEach((o) => {
          s = s.insert(o.key, o)
        }),
        s
      )
    )
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class NP {
  constructor(e, n, r, i) {
    ;(this.persistence = e),
      (this.ss = n),
      (this.serializer = i),
      (this.os = new _e(se)),
      (this._s = new Yi((s) => nf(s), rf)),
      (this.us = new Map()),
      (this.cs = e.getRemoteDocumentCache()),
      (this.Ur = e.getTargetCache()),
      (this.Gr = e.getBundleCache()),
      this.ls(r)
  }
  ls(e) {
    ;(this.documentOverlayCache = this.persistence.getDocumentOverlayCache(e)),
      (this.indexManager = this.persistence.getIndexManager(e)),
      (this.mutationQueue = this.persistence.getMutationQueue(
        e,
        this.indexManager
      )),
      (this.localDocuments = new _P(
        this.cs,
        this.mutationQueue,
        this.documentOverlayCache,
        this.indexManager
      )),
      this.cs.setIndexManager(this.indexManager),
      this.ss.initialize(this.localDocuments, this.indexManager)
  }
  collectGarbage(e) {
    return this.persistence.runTransaction(
      'Collect garbage',
      'readwrite-primary',
      (n) => e.collect(n, this.os)
    )
  }
}
function DP(t, e, n, r) {
  return new NP(t, e, n, r)
}
async function c2(t, e) {
  const n = X(t)
  return await n.persistence.runTransaction(
    'Handle user change',
    'readonly',
    (r) => {
      let i
      return n.mutationQueue
        .getAllMutationBatches(r)
        .next(
          (s) => ((i = s), n.ls(e), n.mutationQueue.getAllMutationBatches(r))
        )
        .next((s) => {
          const o = [],
            l = []
          let u = ee()
          for (const h of i) {
            o.push(h.batchId)
            for (const f of h.mutations) u = u.add(f.key)
          }
          for (const h of s) {
            l.push(h.batchId)
            for (const f of h.mutations) u = u.add(f.key)
          }
          return n.localDocuments
            .getDocuments(r, u)
            .next((h) => ({ hs: h, removedBatchIds: o, addedBatchIds: l }))
        })
    }
  )
}
function OP(t, e) {
  const n = X(t)
  return n.persistence.runTransaction(
    'Acknowledge batch',
    'readwrite-primary',
    (r) => {
      const i = e.batch.keys(),
        s = n.cs.newChangeBuffer({ trackRemovals: !0 })
      return (function (l, u, h, f) {
        const p = h.batch,
          v = p.keys()
        let A = M.resolve()
        return (
          v.forEach((P) => {
            A = A.next(() => f.getEntry(u, P)).next((N) => {
              const D = h.docVersions.get(P)
              ue(D !== null),
                N.version.compareTo(D) < 0 &&
                  (p.applyToRemoteDocument(N, h),
                  N.isValidDocument() &&
                    (N.setReadTime(h.commitVersion), f.addEntry(N)))
            })
          }),
          A.next(() => l.mutationQueue.removeMutationBatch(u, p))
        )
      })(n, r, e, s)
        .next(() => s.apply(r))
        .next(() => n.mutationQueue.performConsistencyCheck(r))
        .next(() =>
          n.documentOverlayCache.removeOverlaysForBatchId(r, i, e.batch.batchId)
        )
        .next(() =>
          n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(
            r,
            (function (l) {
              let u = ee()
              for (let h = 0; h < l.mutationResults.length; ++h)
                l.mutationResults[h].transformResults.length > 0 &&
                  (u = u.add(l.batch.mutations[h].key))
              return u
            })(e)
          )
        )
        .next(() => n.localDocuments.getDocuments(r, i))
    }
  )
}
function h2(t) {
  const e = X(t)
  return e.persistence.runTransaction(
    'Get last remote snapshot version',
    'readonly',
    (n) => e.Ur.getLastRemoteSnapshotVersion(n)
  )
}
function LP(t, e) {
  const n = X(t),
    r = e.snapshotVersion
  let i = n.os
  return n.persistence
    .runTransaction('Apply remote event', 'readwrite-primary', (s) => {
      const o = n.cs.newChangeBuffer({ trackRemovals: !0 })
      i = n.os
      const l = []
      e.targetChanges.forEach((f, p) => {
        const v = i.get(p)
        if (!v) return
        l.push(
          n.Ur.removeMatchingKeys(s, f.removedDocuments, p).next(() =>
            n.Ur.addMatchingKeys(s, f.addedDocuments, p)
          )
        )
        let A = v.withSequenceNumber(s.currentSequenceNumber)
        e.targetMismatches.get(p) !== null
          ? (A = A.withResumeToken(
              He.EMPTY_BYTE_STRING,
              Y.min()
            ).withLastLimboFreeSnapshotVersion(Y.min()))
          : f.resumeToken.approximateByteSize() > 0 &&
            (A = A.withResumeToken(f.resumeToken, r)),
          (i = i.insert(p, A)),
          (function (N, D, C) {
            return N.resumeToken.approximateByteSize() === 0 ||
              D.snapshotVersion.toMicroseconds() -
                N.snapshotVersion.toMicroseconds() >=
                3e8
              ? !0
              : C.addedDocuments.size +
                  C.modifiedDocuments.size +
                  C.removedDocuments.size >
                  0
          })(v, A, f) && l.push(n.Ur.updateTargetData(s, A))
      })
      let u = An(),
        h = ee()
      if (
        (e.documentUpdates.forEach((f) => {
          e.resolvedLimboDocuments.has(f) &&
            l.push(n.persistence.referenceDelegate.updateLimboDocument(s, f))
        }),
        l.push(
          VP(s, o, e.documentUpdates).next((f) => {
            ;(u = f.Ps), (h = f.Is)
          })
        ),
        !r.isEqual(Y.min()))
      ) {
        const f = n.Ur.getLastRemoteSnapshotVersion(s).next((p) =>
          n.Ur.setTargetsMetadata(s, s.currentSequenceNumber, r)
        )
        l.push(f)
      }
      return M.waitFor(l)
        .next(() => o.apply(s))
        .next(() => n.localDocuments.getLocalViewOfDocuments(s, u, h))
        .next(() => u)
    })
    .then((s) => ((n.os = i), s))
}
function VP(t, e, n) {
  let r = ee(),
    i = ee()
  return (
    n.forEach((s) => (r = r.add(s))),
    e.getEntries(t, r).next((s) => {
      let o = An()
      return (
        n.forEach((l, u) => {
          const h = s.get(l)
          u.isFoundDocument() !== h.isFoundDocument() && (i = i.add(l)),
            u.isNoDocument() && u.version.isEqual(Y.min())
              ? (e.removeEntry(l, u.readTime), (o = o.insert(l, u)))
              : !h.isValidDocument() ||
                u.version.compareTo(h.version) > 0 ||
                (u.version.compareTo(h.version) === 0 && h.hasPendingWrites)
              ? (e.addEntry(u), (o = o.insert(l, u)))
              : H(
                  'LocalStore',
                  'Ignoring outdated watch update for ',
                  l,
                  '. Current version:',
                  h.version,
                  ' Watch version:',
                  u.version
                )
        }),
        { Ps: o, Is: i }
      )
    })
  )
}
function MP(t, e) {
  const n = X(t)
  return n.persistence.runTransaction(
    'Get next mutation batch',
    'readonly',
    (r) => (
      e === void 0 && (e = -1),
      n.mutationQueue.getNextMutationBatchAfterBatchId(r, e)
    )
  )
}
function bP(t, e) {
  const n = X(t)
  return n.persistence
    .runTransaction('Allocate target', 'readwrite', (r) => {
      let i
      return n.Ur.getTargetData(r, e).next((s) =>
        s
          ? ((i = s), M.resolve(i))
          : n.Ur.allocateTargetId(r).next(
              (o) => (
                (i = new Gn(
                  e,
                  o,
                  'TargetPurposeListen',
                  r.currentSequenceNumber
                )),
                n.Ur.addTargetData(r, i).next(() => i)
              )
            )
      )
    })
    .then((r) => {
      const i = n.os.get(r.targetId)
      return (
        (i === null || r.snapshotVersion.compareTo(i.snapshotVersion) > 0) &&
          ((n.os = n.os.insert(r.targetId, r)), n._s.set(e, r.targetId)),
        r
      )
    })
}
async function bh(t, e, n) {
  const r = X(t),
    i = r.os.get(e),
    s = n ? 'readwrite' : 'readwrite-primary'
  try {
    n ||
      (await r.persistence.runTransaction('Release target', s, (o) =>
        r.persistence.referenceDelegate.removeTarget(o, i)
      ))
  } catch (o) {
    if (!Vo(o)) throw o
    H('LocalStore', `Failed to update sequence numbers for target ${e}: ${o}`)
  }
  ;(r.os = r.os.remove(e)), r._s.delete(i.target)
}
function zg(t, e, n) {
  const r = X(t)
  let i = Y.min(),
    s = ee()
  return r.persistence.runTransaction('Execute query', 'readwrite', (o) =>
    (function (u, h, f) {
      const p = X(u),
        v = p._s.get(f)
      return v !== void 0 ? M.resolve(p.os.get(v)) : p.Ur.getTargetData(h, f)
    })(r, o, Xt(e))
      .next((l) => {
        if (l)
          return (
            (i = l.lastLimboFreeSnapshotVersion),
            r.Ur.getMatchingKeysForTargetId(o, l.targetId).next((u) => {
              s = u
            })
          )
      })
      .next(() =>
        r.ss.getDocumentsMatchingQuery(o, e, n ? i : Y.min(), n ? s : ee())
      )
      .next((l) => (FP(r, PR(e), l), { documents: l, Ts: s }))
  )
}
function FP(t, e, n) {
  let r = t.us.get(e) || Y.min()
  n.forEach((i, s) => {
    s.readTime.compareTo(r) > 0 && (r = s.readTime)
  }),
    t.us.set(e, r)
}
class $g {
  constructor() {
    this.activeTargetIds = LR()
  }
  fs(e) {
    this.activeTargetIds = this.activeTargetIds.add(e)
  }
  gs(e) {
    this.activeTargetIds = this.activeTargetIds.delete(e)
  }
  Vs() {
    const e = {
      activeTargetIds: this.activeTargetIds.toArray(),
      updateTimeMs: Date.now(),
    }
    return JSON.stringify(e)
  }
}
class jP {
  constructor() {
    ;(this.so = new $g()),
      (this.oo = {}),
      (this.onlineStateHandler = null),
      (this.sequenceNumberHandler = null)
  }
  addPendingMutation(e) {}
  updateMutationState(e, n, r) {}
  addLocalQueryTarget(e) {
    return this.so.fs(e), this.oo[e] || 'not-current'
  }
  updateQueryState(e, n, r) {
    this.oo[e] = n
  }
  removeLocalQueryTarget(e) {
    this.so.gs(e)
  }
  isLocalQueryTarget(e) {
    return this.so.activeTargetIds.has(e)
  }
  clearQueryState(e) {
    delete this.oo[e]
  }
  getAllActiveQueryTargets() {
    return this.so.activeTargetIds
  }
  isActiveQueryTarget(e) {
    return this.so.activeTargetIds.has(e)
  }
  start() {
    return (this.so = new $g()), Promise.resolve()
  }
  handleUserChange(e, n, r) {}
  setOnlineState(e) {}
  shutdown() {}
  writeSequenceNumber(e) {}
  notifyBundleLoaded(e) {}
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class UP {
  _o(e) {}
  shutdown() {}
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Hg {
  constructor() {
    ;(this.ao = () => this.uo()),
      (this.co = () => this.lo()),
      (this.ho = []),
      this.Po()
  }
  _o(e) {
    this.ho.push(e)
  }
  shutdown() {
    window.removeEventListener('online', this.ao),
      window.removeEventListener('offline', this.co)
  }
  Po() {
    window.addEventListener('online', this.ao),
      window.addEventListener('offline', this.co)
  }
  uo() {
    H('ConnectivityMonitor', 'Network connectivity changed: AVAILABLE')
    for (const e of this.ho) e(0)
  }
  lo() {
    H('ConnectivityMonitor', 'Network connectivity changed: UNAVAILABLE')
    for (const e of this.ho) e(1)
  }
  static D() {
    return (
      typeof window < 'u' &&
      window.addEventListener !== void 0 &&
      window.removeEventListener !== void 0
    )
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let Ca = null
function wc() {
  return (
    Ca === null
      ? (Ca = (function () {
          return 268435456 + Math.round(2147483648 * Math.random())
        })())
      : Ca++,
    '0x' + Ca.toString(16)
  )
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const BP = {
  BatchGetDocuments: 'batchGet',
  Commit: 'commit',
  RunQuery: 'runQuery',
  RunAggregationQuery: 'runAggregationQuery',
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class zP {
  constructor(e) {
    ;(this.Io = e.Io), (this.To = e.To)
  }
  Eo(e) {
    this.Ao = e
  }
  Ro(e) {
    this.Vo = e
  }
  mo(e) {
    this.fo = e
  }
  onMessage(e) {
    this.po = e
  }
  close() {
    this.To()
  }
  send(e) {
    this.Io(e)
  }
  yo() {
    this.Ao()
  }
  wo() {
    this.Vo()
  }
  So(e) {
    this.fo(e)
  }
  bo(e) {
    this.po(e)
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Ye = 'WebChannelConnection'
class $P extends class {
  constructor(n) {
    ;(this.databaseInfo = n), (this.databaseId = n.databaseId)
    const r = n.ssl ? 'https' : 'http',
      i = encodeURIComponent(this.databaseId.projectId),
      s = encodeURIComponent(this.databaseId.database)
    ;(this.Do = r + '://' + n.host),
      (this.vo = `projects/${i}/databases/${s}`),
      (this.Co =
        this.databaseId.database === '(default)'
          ? `project_id=${i}`
          : `project_id=${i}&database_id=${s}`)
  }
  get Fo() {
    return !1
  }
  Mo(n, r, i, s, o) {
    const l = wc(),
      u = this.xo(n, r.toUriEncodedString())
    H('RestConnection', `Sending RPC '${n}' ${l}:`, u, i)
    const h = {
      'google-cloud-resource-prefix': this.vo,
      'x-goog-request-params': this.Co,
    }
    return (
      this.Oo(h, s, o),
      this.No(n, u, h, i).then(
        (f) => (H('RestConnection', `Received RPC '${n}' ${l}: `, f), f),
        (f) => {
          throw (
            (Li(
              'RestConnection',
              `RPC '${n}' ${l} failed with error: `,
              f,
              'url: ',
              u,
              'request:',
              i
            ),
            f)
          )
        }
      )
    )
  }
  Lo(n, r, i, s, o, l) {
    return this.Mo(n, r, i, s, o)
  }
  Oo(n, r, i) {
    ;(n['X-Goog-Api-Client'] = (function () {
      return 'gl-js/ fire/' + Gi
    })()),
      (n['Content-Type'] = 'text/plain'),
      this.databaseInfo.appId &&
        (n['X-Firebase-GMPID'] = this.databaseInfo.appId),
      r && r.headers.forEach((s, o) => (n[o] = s)),
      i && i.headers.forEach((s, o) => (n[o] = s))
  }
  xo(n, r) {
    const i = BP[n]
    return `${this.Do}/v1/${r}:${i}`
  }
  terminate() {}
} {
  constructor(e) {
    super(e),
      (this.forceLongPolling = e.forceLongPolling),
      (this.autoDetectLongPolling = e.autoDetectLongPolling),
      (this.useFetchStreams = e.useFetchStreams),
      (this.longPollingOptions = e.longPollingOptions)
  }
  No(e, n, r, i) {
    const s = wc()
    return new Promise((o, l) => {
      const u = new S_()
      u.setWithCredentials(!0),
        u.listenOnce(A_.COMPLETE, () => {
          try {
            switch (u.getLastErrorCode()) {
              case Ha.NO_ERROR:
                const f = u.getResponseJson()
                H(Ye, `XHR for RPC '${e}' ${s} received:`, JSON.stringify(f)),
                  o(f)
                break
              case Ha.TIMEOUT:
                H(Ye, `RPC '${e}' ${s} timed out`),
                  l(new K(b.DEADLINE_EXCEEDED, 'Request time out'))
                break
              case Ha.HTTP_ERROR:
                const p = u.getStatus()
                if (
                  (H(
                    Ye,
                    `RPC '${e}' ${s} failed with status:`,
                    p,
                    'response text:',
                    u.getResponseText()
                  ),
                  p > 0)
                ) {
                  let v = u.getResponseJson()
                  Array.isArray(v) && (v = v[0])
                  const A = v == null ? void 0 : v.error
                  if (A && A.status && A.message) {
                    const P = (function (D) {
                      const C = D.toLowerCase().replace(/_/g, '-')
                      return Object.values(b).indexOf(C) >= 0 ? C : b.UNKNOWN
                    })(A.status)
                    l(new K(P, A.message))
                  } else
                    l(
                      new K(
                        b.UNKNOWN,
                        'Server responded with status ' + u.getStatus()
                      )
                    )
                } else l(new K(b.UNAVAILABLE, 'Connection failed.'))
                break
              default:
                Q()
            }
          } finally {
            H(Ye, `RPC '${e}' ${s} completed.`)
          }
        })
      const h = JSON.stringify(i)
      H(Ye, `RPC '${e}' ${s} sending request:`, i), u.send(n, 'POST', h, r, 15)
    })
  }
  Bo(e, n, r) {
    const i = wc(),
      s = [this.Do, '/', 'google.firestore.v1.Firestore', '/', e, '/channel'],
      o = k_(),
      l = P_(),
      u = {
        httpSessionIdParam: 'gsessionid',
        initMessageHeaders: {},
        messageUrlParams: {
          database: `projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`,
        },
        sendRawJson: !0,
        supportsCrossDomainXhr: !0,
        internalChannelParams: { forwardChannelRequestTimeoutMs: 6e5 },
        forceLongPolling: this.forceLongPolling,
        detectBufferingProxy: this.autoDetectLongPolling,
      },
      h = this.longPollingOptions.timeoutSeconds
    h !== void 0 && (u.longPollingTimeout = Math.round(1e3 * h)),
      this.useFetchStreams && (u.xmlHttpFactory = new C_({})),
      this.Oo(u.initMessageHeaders, n, r),
      (u.encodeInitMessageHeaders = !0)
    const f = s.join('')
    H(Ye, `Creating RPC '${e}' stream ${i}: ${f}`, u)
    const p = o.createWebChannel(f, u)
    let v = !1,
      A = !1
    const P = new zP({
        Io: (D) => {
          A
            ? H(Ye, `Not sending because RPC '${e}' stream ${i} is closed:`, D)
            : (v ||
                (H(Ye, `Opening RPC '${e}' stream ${i} transport.`),
                p.open(),
                (v = !0)),
              H(Ye, `RPC '${e}' stream ${i} sending:`, D),
              p.send(D))
        },
        To: () => p.close(),
      }),
      N = (D, C, _) => {
        D.listen(C, (S) => {
          try {
            _(S)
          } catch (L) {
            setTimeout(() => {
              throw L
            }, 0)
          }
        })
      }
    return (
      N(p, ks.EventType.OPEN, () => {
        A || (H(Ye, `RPC '${e}' stream ${i} transport opened.`), P.yo())
      }),
      N(p, ks.EventType.CLOSE, () => {
        A ||
          ((A = !0), H(Ye, `RPC '${e}' stream ${i} transport closed`), P.So())
      }),
      N(p, ks.EventType.ERROR, (D) => {
        A ||
          ((A = !0),
          Li(Ye, `RPC '${e}' stream ${i} transport errored:`, D),
          P.So(new K(b.UNAVAILABLE, 'The operation could not be completed')))
      }),
      N(p, ks.EventType.MESSAGE, (D) => {
        var C
        if (!A) {
          const _ = D.data[0]
          ue(!!_)
          const S = _,
            L =
              S.error ||
              ((C = S[0]) === null || C === void 0 ? void 0 : C.error)
          if (L) {
            H(Ye, `RPC '${e}' stream ${i} received error:`, L)
            const U = L.status
            let j = (function (E) {
                const T = Pe[E]
                if (T !== void 0) return e2(T)
              })(U),
              w = L.message
            j === void 0 &&
              ((j = b.INTERNAL),
              (w =
                'Unknown error status: ' + U + ' with message ' + L.message)),
              (A = !0),
              P.So(new K(j, w)),
              p.close()
          } else H(Ye, `RPC '${e}' stream ${i} received:`, _), P.bo(_)
        }
      }),
      N(l, R_.STAT_EVENT, (D) => {
        D.stat === Rh.PROXY
          ? H(Ye, `RPC '${e}' stream ${i} detected buffering proxy`)
          : D.stat === Rh.NOPROXY &&
            H(Ye, `RPC '${e}' stream ${i} detected no buffering proxy`)
      }),
      setTimeout(() => {
        P.wo()
      }, 0),
      P
    )
  }
}
function Tc() {
  return typeof document < 'u' ? document : null
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function pu(t) {
  return new ZR(t, !0)
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class d2 {
  constructor(e, n, r = 1e3, i = 1.5, s = 6e4) {
    ;(this.ui = e),
      (this.timerId = n),
      (this.ko = r),
      (this.qo = i),
      (this.Qo = s),
      (this.Ko = 0),
      (this.$o = null),
      (this.Uo = Date.now()),
      this.reset()
  }
  reset() {
    this.Ko = 0
  }
  Wo() {
    this.Ko = this.Qo
  }
  Go(e) {
    this.cancel()
    const n = Math.floor(this.Ko + this.zo()),
      r = Math.max(0, Date.now() - this.Uo),
      i = Math.max(0, n - r)
    i > 0 &&
      H(
        'ExponentialBackoff',
        `Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`
      ),
      (this.$o = this.ui.enqueueAfterDelay(
        this.timerId,
        i,
        () => ((this.Uo = Date.now()), e())
      )),
      (this.Ko *= this.qo),
      this.Ko < this.ko && (this.Ko = this.ko),
      this.Ko > this.Qo && (this.Ko = this.Qo)
  }
  jo() {
    this.$o !== null && (this.$o.skipDelay(), (this.$o = null))
  }
  cancel() {
    this.$o !== null && (this.$o.cancel(), (this.$o = null))
  }
  zo() {
    return (Math.random() - 0.5) * this.Ko
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class f2 {
  constructor(e, n, r, i, s, o, l, u) {
    ;(this.ui = e),
      (this.Ho = r),
      (this.Jo = i),
      (this.connection = s),
      (this.authCredentialsProvider = o),
      (this.appCheckCredentialsProvider = l),
      (this.listener = u),
      (this.state = 0),
      (this.Yo = 0),
      (this.Zo = null),
      (this.Xo = null),
      (this.stream = null),
      (this.e_ = 0),
      (this.t_ = new d2(e, n))
  }
  n_() {
    return this.state === 1 || this.state === 5 || this.r_()
  }
  r_() {
    return this.state === 2 || this.state === 3
  }
  start() {
    ;(this.e_ = 0), this.state !== 4 ? this.auth() : this.i_()
  }
  async stop() {
    this.n_() && (await this.close(0))
  }
  s_() {
    ;(this.state = 0), this.t_.reset()
  }
  o_() {
    this.r_() &&
      this.Zo === null &&
      (this.Zo = this.ui.enqueueAfterDelay(this.Ho, 6e4, () => this.__()))
  }
  a_(e) {
    this.u_(), this.stream.send(e)
  }
  async __() {
    if (this.r_()) return this.close(0)
  }
  u_() {
    this.Zo && (this.Zo.cancel(), (this.Zo = null))
  }
  c_() {
    this.Xo && (this.Xo.cancel(), (this.Xo = null))
  }
  async close(e, n) {
    this.u_(),
      this.c_(),
      this.t_.cancel(),
      this.Yo++,
      e !== 4
        ? this.t_.reset()
        : n && n.code === b.RESOURCE_EXHAUSTED
        ? (Cn(n.toString()),
          Cn('Using maximum backoff delay to prevent overloading the backend.'),
          this.t_.Wo())
        : n &&
          n.code === b.UNAUTHENTICATED &&
          this.state !== 3 &&
          (this.authCredentialsProvider.invalidateToken(),
          this.appCheckCredentialsProvider.invalidateToken()),
      this.stream !== null &&
        (this.l_(), this.stream.close(), (this.stream = null)),
      (this.state = e),
      await this.listener.mo(n)
  }
  l_() {}
  auth() {
    this.state = 1
    const e = this.h_(this.Yo),
      n = this.Yo
    Promise.all([
      this.authCredentialsProvider.getToken(),
      this.appCheckCredentialsProvider.getToken(),
    ]).then(
      ([r, i]) => {
        this.Yo === n && this.P_(r, i)
      },
      (r) => {
        e(() => {
          const i = new K(b.UNKNOWN, 'Fetching auth token failed: ' + r.message)
          return this.I_(i)
        })
      }
    )
  }
  P_(e, n) {
    const r = this.h_(this.Yo)
    ;(this.stream = this.T_(e, n)),
      this.stream.Eo(() => {
        r(() => this.listener.Eo())
      }),
      this.stream.Ro(() => {
        r(
          () => (
            (this.state = 2),
            (this.Xo = this.ui.enqueueAfterDelay(
              this.Jo,
              1e4,
              () => (this.r_() && (this.state = 3), Promise.resolve())
            )),
            this.listener.Ro()
          )
        )
      }),
      this.stream.mo((i) => {
        r(() => this.I_(i))
      }),
      this.stream.onMessage((i) => {
        r(() => (++this.e_ == 1 ? this.E_(i) : this.onNext(i)))
      })
  }
  i_() {
    ;(this.state = 5),
      this.t_.Go(async () => {
        ;(this.state = 0), this.start()
      })
  }
  I_(e) {
    return (
      H('PersistentStream', `close with error: ${e}`),
      (this.stream = null),
      this.close(4, e)
    )
  }
  h_(e) {
    return (n) => {
      this.ui.enqueueAndForget(() =>
        this.Yo === e
          ? n()
          : (H(
              'PersistentStream',
              'stream callback skipped by getCloseGuardedDispatcher.'
            ),
            Promise.resolve())
      )
    }
  }
}
class HP extends f2 {
  constructor(e, n, r, i, s, o) {
    super(
      e,
      'listen_stream_connection_backoff',
      'listen_stream_idle',
      'health_check_timeout',
      n,
      r,
      i,
      o
    ),
      (this.serializer = s)
  }
  T_(e, n) {
    return this.connection.Bo('Listen', e, n)
  }
  E_(e) {
    return this.onNext(e)
  }
  onNext(e) {
    this.t_.reset()
    const n = nP(this.serializer, e),
      r = (function (s) {
        if (!('targetChange' in s)) return Y.min()
        const o = s.targetChange
        return o.targetIds && o.targetIds.length
          ? Y.min()
          : o.readTime
          ? Jt(o.readTime)
          : Y.min()
      })(e)
    return this.listener.d_(n, r)
  }
  A_(e) {
    const n = {}
    ;(n.database = Mh(this.serializer)),
      (n.addTarget = (function (s, o) {
        let l
        const u = o.target
        if (
          ((l = Nh(u) ? { documents: sP(s, u) } : { query: oP(s, u)._t }),
          (l.targetId = o.targetId),
          o.resumeToken.approximateByteSize() > 0)
        ) {
          l.resumeToken = r2(s, o.resumeToken)
          const h = Oh(s, o.expectedCount)
          h !== null && (l.expectedCount = h)
        } else if (o.snapshotVersion.compareTo(Y.min()) > 0) {
          l.readTime = Vl(s, o.snapshotVersion.toTimestamp())
          const h = Oh(s, o.expectedCount)
          h !== null && (l.expectedCount = h)
        }
        return l
      })(this.serializer, e))
    const r = lP(this.serializer, e)
    r && (n.labels = r), this.a_(n)
  }
  R_(e) {
    const n = {}
    ;(n.database = Mh(this.serializer)), (n.removeTarget = e), this.a_(n)
  }
}
class WP extends f2 {
  constructor(e, n, r, i, s, o) {
    super(
      e,
      'write_stream_connection_backoff',
      'write_stream_idle',
      'health_check_timeout',
      n,
      r,
      i,
      o
    ),
      (this.serializer = s)
  }
  get V_() {
    return this.e_ > 0
  }
  start() {
    ;(this.lastStreamToken = void 0), super.start()
  }
  l_() {
    this.V_ && this.m_([])
  }
  T_(e, n) {
    return this.connection.Bo('Write', e, n)
  }
  E_(e) {
    return (
      ue(!!e.streamToken),
      (this.lastStreamToken = e.streamToken),
      ue(!e.writeResults || e.writeResults.length === 0),
      this.listener.f_()
    )
  }
  onNext(e) {
    ue(!!e.streamToken), (this.lastStreamToken = e.streamToken), this.t_.reset()
    const n = iP(e.writeResults, e.commitTime),
      r = Jt(e.commitTime)
    return this.listener.g_(r, n)
  }
  p_() {
    const e = {}
    ;(e.database = Mh(this.serializer)), this.a_(e)
  }
  m_(e) {
    const n = {
      streamToken: this.lastStreamToken,
      writes: e.map((r) => rP(this.serializer, r)),
    }
    this.a_(n)
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class KP extends class {} {
  constructor(e, n, r, i) {
    super(),
      (this.authCredentials = e),
      (this.appCheckCredentials = n),
      (this.connection = r),
      (this.serializer = i),
      (this.y_ = !1)
  }
  w_() {
    if (this.y_)
      throw new K(
        b.FAILED_PRECONDITION,
        'The client has already been terminated.'
      )
  }
  Mo(e, n, r, i) {
    return (
      this.w_(),
      Promise.all([
        this.authCredentials.getToken(),
        this.appCheckCredentials.getToken(),
      ])
        .then(([s, o]) => this.connection.Mo(e, Lh(n, r), i, s, o))
        .catch((s) => {
          throw s.name === 'FirebaseError'
            ? (s.code === b.UNAUTHENTICATED &&
                (this.authCredentials.invalidateToken(),
                this.appCheckCredentials.invalidateToken()),
              s)
            : new K(b.UNKNOWN, s.toString())
        })
    )
  }
  Lo(e, n, r, i, s) {
    return (
      this.w_(),
      Promise.all([
        this.authCredentials.getToken(),
        this.appCheckCredentials.getToken(),
      ])
        .then(([o, l]) => this.connection.Lo(e, Lh(n, r), i, o, l, s))
        .catch((o) => {
          throw o.name === 'FirebaseError'
            ? (o.code === b.UNAUTHENTICATED &&
                (this.authCredentials.invalidateToken(),
                this.appCheckCredentials.invalidateToken()),
              o)
            : new K(b.UNKNOWN, o.toString())
        })
    )
  }
  terminate() {
    ;(this.y_ = !0), this.connection.terminate()
  }
}
class qP {
  constructor(e, n) {
    ;(this.asyncQueue = e),
      (this.onlineStateHandler = n),
      (this.state = 'Unknown'),
      (this.S_ = 0),
      (this.b_ = null),
      (this.D_ = !0)
  }
  v_() {
    this.S_ === 0 &&
      (this.C_('Unknown'),
      (this.b_ = this.asyncQueue.enqueueAfterDelay(
        'online_state_timeout',
        1e4,
        () => (
          (this.b_ = null),
          this.F_("Backend didn't respond within 10 seconds."),
          this.C_('Offline'),
          Promise.resolve()
        )
      )))
  }
  M_(e) {
    this.state === 'Online'
      ? this.C_('Unknown')
      : (this.S_++,
        this.S_ >= 1 &&
          (this.x_(),
          this.F_(
            `Connection failed 1 times. Most recent error: ${e.toString()}`
          ),
          this.C_('Offline')))
  }
  set(e) {
    this.x_(), (this.S_ = 0), e === 'Online' && (this.D_ = !1), this.C_(e)
  }
  C_(e) {
    e !== this.state && ((this.state = e), this.onlineStateHandler(e))
  }
  F_(e) {
    const n = `Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`
    this.D_ ? (Cn(n), (this.D_ = !1)) : H('OnlineStateTracker', n)
  }
  x_() {
    this.b_ !== null && (this.b_.cancel(), (this.b_ = null))
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class GP {
  constructor(e, n, r, i, s) {
    ;(this.localStore = e),
      (this.datastore = n),
      (this.asyncQueue = r),
      (this.remoteSyncer = {}),
      (this.O_ = []),
      (this.N_ = new Map()),
      (this.L_ = new Set()),
      (this.B_ = []),
      (this.k_ = s),
      this.k_._o((o) => {
        r.enqueueAndForget(async () => {
          Gr(this) &&
            (H(
              'RemoteStore',
              'Restarting streams for network reachability change.'
            ),
            await (async function (u) {
              const h = X(u)
              h.L_.add(4),
                await Fo(h),
                h.q_.set('Unknown'),
                h.L_.delete(4),
                await mu(h)
            })(this))
        })
      }),
      (this.q_ = new qP(r, i))
  }
}
async function mu(t) {
  if (Gr(t)) for (const e of t.B_) await e(!0)
}
async function Fo(t) {
  for (const e of t.B_) await e(!1)
}
function p2(t, e) {
  const n = X(t)
  n.N_.has(e.targetId) ||
    (n.N_.set(e.targetId, e), gf(n) ? mf(n) : Xi(n).r_() && pf(n, e))
}
function ff(t, e) {
  const n = X(t),
    r = Xi(n)
  n.N_.delete(e),
    r.r_() && m2(n, e),
    n.N_.size === 0 && (r.r_() ? r.o_() : Gr(n) && n.q_.set('Unknown'))
}
function pf(t, e) {
  if (
    (t.Q_.xe(e.targetId),
    e.resumeToken.approximateByteSize() > 0 ||
      e.snapshotVersion.compareTo(Y.min()) > 0)
  ) {
    const n = t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size
    e = e.withExpectedCount(n)
  }
  Xi(t).A_(e)
}
function m2(t, e) {
  t.Q_.xe(e), Xi(t).R_(e)
}
function mf(t) {
  ;(t.Q_ = new QR({
    getRemoteKeysForTarget: (e) => t.remoteSyncer.getRemoteKeysForTarget(e),
    ot: (e) => t.N_.get(e) || null,
    tt: () => t.datastore.serializer.databaseId,
  })),
    Xi(t).start(),
    t.q_.v_()
}
function gf(t) {
  return Gr(t) && !Xi(t).n_() && t.N_.size > 0
}
function Gr(t) {
  return X(t).L_.size === 0
}
function g2(t) {
  t.Q_ = void 0
}
async function QP(t) {
  t.q_.set('Online')
}
async function YP(t) {
  t.N_.forEach((e, n) => {
    pf(t, e)
  })
}
async function XP(t, e) {
  g2(t), gf(t) ? (t.q_.M_(e), mf(t)) : t.q_.set('Unknown')
}
async function JP(t, e, n) {
  if ((t.q_.set('Online'), e instanceof n2 && e.state === 2 && e.cause))
    try {
      await (async function (i, s) {
        const o = s.cause
        for (const l of s.targetIds)
          i.N_.has(l) &&
            (await i.remoteSyncer.rejectListen(l, o),
            i.N_.delete(l),
            i.Q_.removeTarget(l))
      })(t, e)
    } catch (r) {
      H(
        'RemoteStore',
        'Failed to remove targets %s: %s ',
        e.targetIds.join(','),
        r
      ),
        await Ml(t, r)
    }
  else if (
    (e instanceof qa ? t.Q_.Ke(e) : e instanceof t2 ? t.Q_.He(e) : t.Q_.We(e),
    !n.isEqual(Y.min()))
  )
    try {
      const r = await h2(t.localStore)
      n.compareTo(r) >= 0 &&
        (await (function (s, o) {
          const l = s.Q_.rt(o)
          return (
            l.targetChanges.forEach((u, h) => {
              if (u.resumeToken.approximateByteSize() > 0) {
                const f = s.N_.get(h)
                f && s.N_.set(h, f.withResumeToken(u.resumeToken, o))
              }
            }),
            l.targetMismatches.forEach((u, h) => {
              const f = s.N_.get(u)
              if (!f) return
              s.N_.set(
                u,
                f.withResumeToken(He.EMPTY_BYTE_STRING, f.snapshotVersion)
              ),
                m2(s, u)
              const p = new Gn(f.target, u, h, f.sequenceNumber)
              pf(s, p)
            }),
            s.remoteSyncer.applyRemoteEvent(l)
          )
        })(t, n))
    } catch (r) {
      H('RemoteStore', 'Failed to raise snapshot:', r), await Ml(t, r)
    }
}
async function Ml(t, e, n) {
  if (!Vo(e)) throw e
  t.L_.add(1),
    await Fo(t),
    t.q_.set('Offline'),
    n || (n = () => h2(t.localStore)),
    t.asyncQueue.enqueueRetryable(async () => {
      H('RemoteStore', 'Retrying IndexedDB access'),
        await n(),
        t.L_.delete(1),
        await mu(t)
    })
}
function y2(t, e) {
  return e().catch((n) => Ml(t, n, e))
}
async function gu(t) {
  const e = X(t),
    n = dr(e)
  let r = e.O_.length > 0 ? e.O_[e.O_.length - 1].batchId : -1
  for (; ZP(e); )
    try {
      const i = await MP(e.localStore, r)
      if (i === null) {
        e.O_.length === 0 && n.o_()
        break
      }
      ;(r = i.batchId), e4(e, i)
    } catch (i) {
      await Ml(e, i)
    }
  v2(e) && _2(e)
}
function ZP(t) {
  return Gr(t) && t.O_.length < 10
}
function e4(t, e) {
  t.O_.push(e)
  const n = dr(t)
  n.r_() && n.V_ && n.m_(e.mutations)
}
function v2(t) {
  return Gr(t) && !dr(t).n_() && t.O_.length > 0
}
function _2(t) {
  dr(t).start()
}
async function t4(t) {
  dr(t).p_()
}
async function n4(t) {
  const e = dr(t)
  for (const n of t.O_) e.m_(n.mutations)
}
async function r4(t, e, n) {
  const r = t.O_.shift(),
    i = af.from(r, e, n)
  await y2(t, () => t.remoteSyncer.applySuccessfulWrite(i)), await gu(t)
}
async function i4(t, e) {
  e &&
    dr(t).V_ &&
    (await (async function (r, i) {
      if (
        (function (o) {
          return KR(o) && o !== b.ABORTED
        })(i.code)
      ) {
        const s = r.O_.shift()
        dr(r).s_(),
          await y2(r, () => r.remoteSyncer.rejectFailedWrite(s.batchId, i)),
          await gu(r)
      }
    })(t, e)),
    v2(t) && _2(t)
}
async function Wg(t, e) {
  const n = X(t)
  n.asyncQueue.verifyOperationInProgress(),
    H('RemoteStore', 'RemoteStore received new credentials')
  const r = Gr(n)
  n.L_.add(3),
    await Fo(n),
    r && n.q_.set('Unknown'),
    await n.remoteSyncer.handleCredentialChange(e),
    n.L_.delete(3),
    await mu(n)
}
async function s4(t, e) {
  const n = X(t)
  e
    ? (n.L_.delete(2), await mu(n))
    : e || (n.L_.add(2), await Fo(n), n.q_.set('Unknown'))
}
function Xi(t) {
  return (
    t.K_ ||
      ((t.K_ = (function (n, r, i) {
        const s = X(n)
        return (
          s.w_(),
          new HP(
            r,
            s.connection,
            s.authCredentials,
            s.appCheckCredentials,
            s.serializer,
            i
          )
        )
      })(t.datastore, t.asyncQueue, {
        Eo: QP.bind(null, t),
        Ro: YP.bind(null, t),
        mo: XP.bind(null, t),
        d_: JP.bind(null, t),
      })),
      t.B_.push(async (e) => {
        e
          ? (t.K_.s_(), gf(t) ? mf(t) : t.q_.set('Unknown'))
          : (await t.K_.stop(), g2(t))
      })),
    t.K_
  )
}
function dr(t) {
  return (
    t.U_ ||
      ((t.U_ = (function (n, r, i) {
        const s = X(n)
        return (
          s.w_(),
          new WP(
            r,
            s.connection,
            s.authCredentials,
            s.appCheckCredentials,
            s.serializer,
            i
          )
        )
      })(t.datastore, t.asyncQueue, {
        Eo: () => Promise.resolve(),
        Ro: t4.bind(null, t),
        mo: i4.bind(null, t),
        f_: n4.bind(null, t),
        g_: r4.bind(null, t),
      })),
      t.B_.push(async (e) => {
        e
          ? (t.U_.s_(), await gu(t))
          : (await t.U_.stop(),
            t.O_.length > 0 &&
              (H(
                'RemoteStore',
                `Stopping write stream with ${t.O_.length} pending writes`
              ),
              (t.O_ = [])))
      })),
    t.U_
  )
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class yf {
  constructor(e, n, r, i, s) {
    ;(this.asyncQueue = e),
      (this.timerId = n),
      (this.targetTimeMs = r),
      (this.op = i),
      (this.removalCallback = s),
      (this.deferred = new ar()),
      (this.then = this.deferred.promise.then.bind(this.deferred.promise)),
      this.deferred.promise.catch((o) => {})
  }
  get promise() {
    return this.deferred.promise
  }
  static createAndSchedule(e, n, r, i, s) {
    const o = Date.now() + r,
      l = new yf(e, n, o, i, s)
    return l.start(r), l
  }
  start(e) {
    this.timerHandle = setTimeout(() => this.handleDelayElapsed(), e)
  }
  skipDelay() {
    return this.handleDelayElapsed()
  }
  cancel(e) {
    this.timerHandle !== null &&
      (this.clearTimeout(),
      this.deferred.reject(
        new K(b.CANCELLED, 'Operation cancelled' + (e ? ': ' + e : ''))
      ))
  }
  handleDelayElapsed() {
    this.asyncQueue.enqueueAndForget(() =>
      this.timerHandle !== null
        ? (this.clearTimeout(), this.op().then((e) => this.deferred.resolve(e)))
        : Promise.resolve()
    )
  }
  clearTimeout() {
    this.timerHandle !== null &&
      (this.removalCallback(this),
      clearTimeout(this.timerHandle),
      (this.timerHandle = null))
  }
}
function vf(t, e) {
  if ((Cn('AsyncQueue', `${e}: ${t}`), Vo(t)))
    return new K(b.UNAVAILABLE, `${e}: ${t}`)
  throw t
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ci {
  constructor(e) {
    ;(this.comparator = e
      ? (n, r) => e(n, r) || q.comparator(n.key, r.key)
      : (n, r) => q.comparator(n.key, r.key)),
      (this.keyedMap = xs()),
      (this.sortedSet = new _e(this.comparator))
  }
  static emptySet(e) {
    return new Ci(e.comparator)
  }
  has(e) {
    return this.keyedMap.get(e) != null
  }
  get(e) {
    return this.keyedMap.get(e)
  }
  first() {
    return this.sortedSet.minKey()
  }
  last() {
    return this.sortedSet.maxKey()
  }
  isEmpty() {
    return this.sortedSet.isEmpty()
  }
  indexOf(e) {
    const n = this.keyedMap.get(e)
    return n ? this.sortedSet.indexOf(n) : -1
  }
  get size() {
    return this.sortedSet.size
  }
  forEach(e) {
    this.sortedSet.inorderTraversal((n, r) => (e(n), !1))
  }
  add(e) {
    const n = this.delete(e.key)
    return n.copy(n.keyedMap.insert(e.key, e), n.sortedSet.insert(e, null))
  }
  delete(e) {
    const n = this.get(e)
    return n
      ? this.copy(this.keyedMap.remove(e), this.sortedSet.remove(n))
      : this
  }
  isEqual(e) {
    if (!(e instanceof Ci) || this.size !== e.size) return !1
    const n = this.sortedSet.getIterator(),
      r = e.sortedSet.getIterator()
    for (; n.hasNext(); ) {
      const i = n.getNext().key,
        s = r.getNext().key
      if (!i.isEqual(s)) return !1
    }
    return !0
  }
  toString() {
    const e = []
    return (
      this.forEach((n) => {
        e.push(n.toString())
      }),
      e.length === 0
        ? 'DocumentSet ()'
        : `DocumentSet (
  ` +
          e.join(`  
`) +
          `
)`
    )
  }
  copy(e, n) {
    const r = new Ci()
    return (
      (r.comparator = this.comparator), (r.keyedMap = e), (r.sortedSet = n), r
    )
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Kg {
  constructor() {
    this.W_ = new _e(q.comparator)
  }
  track(e) {
    const n = e.doc.key,
      r = this.W_.get(n)
    r
      ? e.type !== 0 && r.type === 3
        ? (this.W_ = this.W_.insert(n, e))
        : e.type === 3 && r.type !== 1
        ? (this.W_ = this.W_.insert(n, { type: r.type, doc: e.doc }))
        : e.type === 2 && r.type === 2
        ? (this.W_ = this.W_.insert(n, { type: 2, doc: e.doc }))
        : e.type === 2 && r.type === 0
        ? (this.W_ = this.W_.insert(n, { type: 0, doc: e.doc }))
        : e.type === 1 && r.type === 0
        ? (this.W_ = this.W_.remove(n))
        : e.type === 1 && r.type === 2
        ? (this.W_ = this.W_.insert(n, { type: 1, doc: r.doc }))
        : e.type === 0 && r.type === 1
        ? (this.W_ = this.W_.insert(n, { type: 2, doc: e.doc }))
        : Q()
      : (this.W_ = this.W_.insert(n, e))
  }
  G_() {
    const e = []
    return (
      this.W_.inorderTraversal((n, r) => {
        e.push(r)
      }),
      e
    )
  }
}
class ji {
  constructor(e, n, r, i, s, o, l, u, h) {
    ;(this.query = e),
      (this.docs = n),
      (this.oldDocs = r),
      (this.docChanges = i),
      (this.mutatedKeys = s),
      (this.fromCache = o),
      (this.syncStateChanged = l),
      (this.excludesMetadataChanges = u),
      (this.hasCachedResults = h)
  }
  static fromInitialDocuments(e, n, r, i, s) {
    const o = []
    return (
      n.forEach((l) => {
        o.push({ type: 0, doc: l })
      }),
      new ji(e, n, Ci.emptySet(n), o, r, i, !0, !1, s)
    )
  }
  get hasPendingWrites() {
    return !this.mutatedKeys.isEmpty()
  }
  isEqual(e) {
    if (
      !(
        this.fromCache === e.fromCache &&
        this.hasCachedResults === e.hasCachedResults &&
        this.syncStateChanged === e.syncStateChanged &&
        this.mutatedKeys.isEqual(e.mutatedKeys) &&
        uu(this.query, e.query) &&
        this.docs.isEqual(e.docs) &&
        this.oldDocs.isEqual(e.oldDocs)
      )
    )
      return !1
    const n = this.docChanges,
      r = e.docChanges
    if (n.length !== r.length) return !1
    for (let i = 0; i < n.length; i++)
      if (n[i].type !== r[i].type || !n[i].doc.isEqual(r[i].doc)) return !1
    return !0
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class o4 {
  constructor() {
    ;(this.z_ = void 0), (this.j_ = [])
  }
  H_() {
    return this.j_.some((e) => e.J_())
  }
}
class a4 {
  constructor() {
    ;(this.queries = qg()),
      (this.onlineState = 'Unknown'),
      (this.Y_ = new Set())
  }
  terminate() {
    ;(function (n, r) {
      const i = X(n),
        s = i.queries
      ;(i.queries = qg()),
        s.forEach((o, l) => {
          for (const u of l.j_) u.onError(r)
        })
    })(this, new K(b.ABORTED, 'Firestore shutting down'))
  }
}
function qg() {
  return new Yi((t) => B_(t), uu)
}
async function l4(t, e) {
  const n = X(t)
  let r = 3
  const i = e.query
  let s = n.queries.get(i)
  s ? !s.H_() && e.J_() && (r = 2) : ((s = new o4()), (r = e.J_() ? 0 : 1))
  try {
    switch (r) {
      case 0:
        s.z_ = await n.onListen(i, !0)
        break
      case 1:
        s.z_ = await n.onListen(i, !1)
        break
      case 2:
        await n.onFirstRemoteStoreListen(i)
    }
  } catch (o) {
    const l = vf(o, `Initialization of query '${ei(e.query)}' failed`)
    return void e.onError(l)
  }
  n.queries.set(i, s),
    s.j_.push(e),
    e.Z_(n.onlineState),
    s.z_ && e.X_(s.z_) && _f(n)
}
async function u4(t, e) {
  const n = X(t),
    r = e.query
  let i = 3
  const s = n.queries.get(r)
  if (s) {
    const o = s.j_.indexOf(e)
    o >= 0 &&
      (s.j_.splice(o, 1),
      s.j_.length === 0 ? (i = e.J_() ? 0 : 1) : !s.H_() && e.J_() && (i = 2))
  }
  switch (i) {
    case 0:
      return n.queries.delete(r), n.onUnlisten(r, !0)
    case 1:
      return n.queries.delete(r), n.onUnlisten(r, !1)
    case 2:
      return n.onLastRemoteStoreUnlisten(r)
    default:
      return
  }
}
function c4(t, e) {
  const n = X(t)
  let r = !1
  for (const i of e) {
    const s = i.query,
      o = n.queries.get(s)
    if (o) {
      for (const l of o.j_) l.X_(i) && (r = !0)
      o.z_ = i
    }
  }
  r && _f(n)
}
function h4(t, e, n) {
  const r = X(t),
    i = r.queries.get(e)
  if (i) for (const s of i.j_) s.onError(n)
  r.queries.delete(e)
}
function _f(t) {
  t.Y_.forEach((e) => {
    e.next()
  })
}
var Fh, Gg
;((Gg = Fh || (Fh = {})).ea = 'default'), (Gg.Cache = 'cache')
class d4 {
  constructor(e, n, r) {
    ;(this.query = e),
      (this.ta = n),
      (this.na = !1),
      (this.ra = null),
      (this.onlineState = 'Unknown'),
      (this.options = r || {})
  }
  X_(e) {
    if (!this.options.includeMetadataChanges) {
      const r = []
      for (const i of e.docChanges) i.type !== 3 && r.push(i)
      e = new ji(
        e.query,
        e.docs,
        e.oldDocs,
        r,
        e.mutatedKeys,
        e.fromCache,
        e.syncStateChanged,
        !0,
        e.hasCachedResults
      )
    }
    let n = !1
    return (
      this.na
        ? this.ia(e) && (this.ta.next(e), (n = !0))
        : this.sa(e, this.onlineState) && (this.oa(e), (n = !0)),
      (this.ra = e),
      n
    )
  }
  onError(e) {
    this.ta.error(e)
  }
  Z_(e) {
    this.onlineState = e
    let n = !1
    return (
      this.ra &&
        !this.na &&
        this.sa(this.ra, e) &&
        (this.oa(this.ra), (n = !0)),
      n
    )
  }
  sa(e, n) {
    if (!e.fromCache || !this.J_()) return !0
    const r = n !== 'Offline'
    return (
      (!this.options._a || !r) &&
      (!e.docs.isEmpty() || e.hasCachedResults || n === 'Offline')
    )
  }
  ia(e) {
    if (e.docChanges.length > 0) return !0
    const n = this.ra && this.ra.hasPendingWrites !== e.hasPendingWrites
    return (
      !(!e.syncStateChanged && !n) && this.options.includeMetadataChanges === !0
    )
  }
  oa(e) {
    ;(e = ji.fromInitialDocuments(
      e.query,
      e.docs,
      e.mutatedKeys,
      e.fromCache,
      e.hasCachedResults
    )),
      (this.na = !0),
      this.ta.next(e)
  }
  J_() {
    return this.options.source !== Fh.Cache
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class E2 {
  constructor(e) {
    this.key = e
  }
}
class w2 {
  constructor(e) {
    this.key = e
  }
}
class f4 {
  constructor(e, n) {
    ;(this.query = e),
      (this.Ta = n),
      (this.Ea = null),
      (this.hasCachedResults = !1),
      (this.current = !1),
      (this.da = ee()),
      (this.mutatedKeys = ee()),
      (this.Aa = z_(e)),
      (this.Ra = new Ci(this.Aa))
  }
  get Va() {
    return this.Ta
  }
  ma(e, n) {
    const r = n ? n.fa : new Kg(),
      i = n ? n.Ra : this.Ra
    let s = n ? n.mutatedKeys : this.mutatedKeys,
      o = i,
      l = !1
    const u =
        this.query.limitType === 'F' && i.size === this.query.limit
          ? i.last()
          : null,
      h =
        this.query.limitType === 'L' && i.size === this.query.limit
          ? i.first()
          : null
    if (
      (e.inorderTraversal((f, p) => {
        const v = i.get(f),
          A = cu(this.query, p) ? p : null,
          P = !!v && this.mutatedKeys.has(v.key),
          N =
            !!A &&
            (A.hasLocalMutations ||
              (this.mutatedKeys.has(A.key) && A.hasCommittedMutations))
        let D = !1
        v && A
          ? v.data.isEqual(A.data)
            ? P !== N && (r.track({ type: 3, doc: A }), (D = !0))
            : this.ga(v, A) ||
              (r.track({ type: 2, doc: A }),
              (D = !0),
              ((u && this.Aa(A, u) > 0) || (h && this.Aa(A, h) < 0)) &&
                (l = !0))
          : !v && A
          ? (r.track({ type: 0, doc: A }), (D = !0))
          : v &&
            !A &&
            (r.track({ type: 1, doc: v }), (D = !0), (u || h) && (l = !0)),
          D &&
            (A
              ? ((o = o.add(A)), (s = N ? s.add(f) : s.delete(f)))
              : ((o = o.delete(f)), (s = s.delete(f))))
      }),
      this.query.limit !== null)
    )
      for (; o.size > this.query.limit; ) {
        const f = this.query.limitType === 'F' ? o.last() : o.first()
        ;(o = o.delete(f.key)),
          (s = s.delete(f.key)),
          r.track({ type: 1, doc: f })
      }
    return { Ra: o, fa: r, ns: l, mutatedKeys: s }
  }
  ga(e, n) {
    return (
      e.hasLocalMutations && n.hasCommittedMutations && !n.hasLocalMutations
    )
  }
  applyChanges(e, n, r, i) {
    const s = this.Ra
    ;(this.Ra = e.Ra), (this.mutatedKeys = e.mutatedKeys)
    const o = e.fa.G_()
    o.sort(
      (f, p) =>
        (function (A, P) {
          const N = (D) => {
            switch (D) {
              case 0:
                return 1
              case 2:
              case 3:
                return 2
              case 1:
                return 0
              default:
                return Q()
            }
          }
          return N(A) - N(P)
        })(f.type, p.type) || this.Aa(f.doc, p.doc)
    ),
      this.pa(r),
      (i = i != null && i)
    const l = n && !i ? this.ya() : [],
      u = this.da.size === 0 && this.current && !i ? 1 : 0,
      h = u !== this.Ea
    return (
      (this.Ea = u),
      o.length !== 0 || h
        ? {
            snapshot: new ji(
              this.query,
              e.Ra,
              s,
              o,
              e.mutatedKeys,
              u === 0,
              h,
              !1,
              !!r && r.resumeToken.approximateByteSize() > 0
            ),
            wa: l,
          }
        : { wa: l }
    )
  }
  Z_(e) {
    return this.current && e === 'Offline'
      ? ((this.current = !1),
        this.applyChanges(
          { Ra: this.Ra, fa: new Kg(), mutatedKeys: this.mutatedKeys, ns: !1 },
          !1
        ))
      : { wa: [] }
  }
  Sa(e) {
    return (
      !this.Ta.has(e) && !!this.Ra.has(e) && !this.Ra.get(e).hasLocalMutations
    )
  }
  pa(e) {
    e &&
      (e.addedDocuments.forEach((n) => (this.Ta = this.Ta.add(n))),
      e.modifiedDocuments.forEach((n) => {}),
      e.removedDocuments.forEach((n) => (this.Ta = this.Ta.delete(n))),
      (this.current = e.current))
  }
  ya() {
    if (!this.current) return []
    const e = this.da
    ;(this.da = ee()),
      this.Ra.forEach((r) => {
        this.Sa(r.key) && (this.da = this.da.add(r.key))
      })
    const n = []
    return (
      e.forEach((r) => {
        this.da.has(r) || n.push(new w2(r))
      }),
      this.da.forEach((r) => {
        e.has(r) || n.push(new E2(r))
      }),
      n
    )
  }
  ba(e) {
    ;(this.Ta = e.Ts), (this.da = ee())
    const n = this.ma(e.documents)
    return this.applyChanges(n, !0)
  }
  Da() {
    return ji.fromInitialDocuments(
      this.query,
      this.Ra,
      this.mutatedKeys,
      this.Ea === 0,
      this.hasCachedResults
    )
  }
}
class p4 {
  constructor(e, n, r) {
    ;(this.query = e), (this.targetId = n), (this.view = r)
  }
}
class m4 {
  constructor(e) {
    ;(this.key = e), (this.va = !1)
  }
}
class g4 {
  constructor(e, n, r, i, s, o) {
    ;(this.localStore = e),
      (this.remoteStore = n),
      (this.eventManager = r),
      (this.sharedClientState = i),
      (this.currentUser = s),
      (this.maxConcurrentLimboResolutions = o),
      (this.Ca = {}),
      (this.Fa = new Yi((l) => B_(l), uu)),
      (this.Ma = new Map()),
      (this.xa = new Set()),
      (this.Oa = new _e(q.comparator)),
      (this.Na = new Map()),
      (this.La = new cf()),
      (this.Ba = {}),
      (this.ka = new Map()),
      (this.qa = Fi.kn()),
      (this.onlineState = 'Unknown'),
      (this.Qa = void 0)
  }
  get isPrimaryClient() {
    return this.Qa === !0
  }
}
async function y4(t, e, n = !0) {
  const r = R2(t)
  let i
  const s = r.Fa.get(e)
  return (
    s
      ? (r.sharedClientState.addLocalQueryTarget(s.targetId), (i = s.view.Da()))
      : (i = await T2(r, e, n, !0)),
    i
  )
}
async function v4(t, e) {
  const n = R2(t)
  await T2(n, e, !0, !1)
}
async function T2(t, e, n, r) {
  const i = await bP(t.localStore, Xt(e)),
    s = i.targetId,
    o = n ? t.sharedClientState.addLocalQueryTarget(s) : 'not-current'
  let l
  return (
    r && (l = await _4(t, e, s, o === 'current', i.resumeToken)),
    t.isPrimaryClient && n && p2(t.remoteStore, i),
    l
  )
}
async function _4(t, e, n, r, i) {
  t.Ka = (p, v, A) =>
    (async function (N, D, C, _) {
      let S = D.view.ma(C)
      S.ns &&
        (S = await zg(N.localStore, D.query, !1).then(({ documents: w }) =>
          D.view.ma(w, S)
        ))
      const L = _ && _.targetChanges.get(D.targetId),
        U = _ && _.targetMismatches.get(D.targetId) != null,
        j = D.view.applyChanges(S, N.isPrimaryClient, L, U)
      return Yg(N, D.targetId, j.wa), j.snapshot
    })(t, p, v, A)
  const s = await zg(t.localStore, e, !0),
    o = new f4(e, s.Ts),
    l = o.ma(s.documents),
    u = bo.createSynthesizedTargetChangeForCurrentChange(
      n,
      r && t.onlineState !== 'Offline',
      i
    ),
    h = o.applyChanges(l, t.isPrimaryClient, u)
  Yg(t, n, h.wa)
  const f = new p4(e, n, o)
  return (
    t.Fa.set(e, f),
    t.Ma.has(n) ? t.Ma.get(n).push(e) : t.Ma.set(n, [e]),
    h.snapshot
  )
}
async function E4(t, e, n) {
  const r = X(t),
    i = r.Fa.get(e),
    s = r.Ma.get(i.targetId)
  if (s.length > 1)
    return (
      r.Ma.set(
        i.targetId,
        s.filter((o) => !uu(o, e))
      ),
      void r.Fa.delete(e)
    )
  r.isPrimaryClient
    ? (r.sharedClientState.removeLocalQueryTarget(i.targetId),
      r.sharedClientState.isActiveQueryTarget(i.targetId) ||
        (await bh(r.localStore, i.targetId, !1)
          .then(() => {
            r.sharedClientState.clearQueryState(i.targetId),
              n && ff(r.remoteStore, i.targetId),
              jh(r, i.targetId)
          })
          .catch(Lo)))
    : (jh(r, i.targetId), await bh(r.localStore, i.targetId, !0))
}
async function w4(t, e) {
  const n = X(t),
    r = n.Fa.get(e),
    i = n.Ma.get(r.targetId)
  n.isPrimaryClient &&
    i.length === 1 &&
    (n.sharedClientState.removeLocalQueryTarget(r.targetId),
    ff(n.remoteStore, r.targetId))
}
async function T4(t, e, n) {
  const r = k4(t)
  try {
    const i = await (function (o, l) {
      const u = X(o),
        h = Oe.now(),
        f = l.reduce((A, P) => A.add(P.key), ee())
      let p, v
      return u.persistence
        .runTransaction('Locally write mutations', 'readwrite', (A) => {
          let P = An(),
            N = ee()
          return u.cs
            .getEntries(A, f)
            .next((D) => {
              ;(P = D),
                P.forEach((C, _) => {
                  _.isValidDocument() || (N = N.add(C))
                })
            })
            .next(() => u.localDocuments.getOverlayedDocuments(A, P))
            .next((D) => {
              p = D
              const C = []
              for (const _ of l) {
                const S = BR(_, p.get(_.key).overlayedDocument)
                S != null &&
                  C.push(new qr(_.key, S, L_(S.value.mapValue), vn.exists(!0)))
              }
              return u.mutationQueue.addMutationBatch(A, h, C, l)
            })
            .next((D) => {
              v = D
              const C = D.applyToLocalDocumentSet(p, N)
              return u.documentOverlayCache.saveOverlays(A, D.batchId, C)
            })
        })
        .then(() => ({ batchId: v.batchId, changes: H_(p) }))
    })(r.localStore, e)
    r.sharedClientState.addPendingMutation(i.batchId),
      (function (o, l, u) {
        let h = o.Ba[o.currentUser.toKey()]
        h || (h = new _e(se)),
          (h = h.insert(l, u)),
          (o.Ba[o.currentUser.toKey()] = h)
      })(r, i.batchId, n),
      await jo(r, i.changes),
      await gu(r.remoteStore)
  } catch (i) {
    const s = vf(i, 'Failed to persist write')
    n.reject(s)
  }
}
async function I2(t, e) {
  const n = X(t)
  try {
    const r = await LP(n.localStore, e)
    e.targetChanges.forEach((i, s) => {
      const o = n.Na.get(s)
      o &&
        (ue(
          i.addedDocuments.size +
            i.modifiedDocuments.size +
            i.removedDocuments.size <=
            1
        ),
        i.addedDocuments.size > 0
          ? (o.va = !0)
          : i.modifiedDocuments.size > 0
          ? ue(o.va)
          : i.removedDocuments.size > 0 && (ue(o.va), (o.va = !1)))
    }),
      await jo(n, r, e)
  } catch (r) {
    await Lo(r)
  }
}
function Qg(t, e, n) {
  const r = X(t)
  if ((r.isPrimaryClient && n === 0) || (!r.isPrimaryClient && n === 1)) {
    const i = []
    r.Fa.forEach((s, o) => {
      const l = o.view.Z_(e)
      l.snapshot && i.push(l.snapshot)
    }),
      (function (o, l) {
        const u = X(o)
        u.onlineState = l
        let h = !1
        u.queries.forEach((f, p) => {
          for (const v of p.j_) v.Z_(l) && (h = !0)
        }),
          h && _f(u)
      })(r.eventManager, e),
      i.length && r.Ca.d_(i),
      (r.onlineState = e),
      r.isPrimaryClient && r.sharedClientState.setOnlineState(e)
  }
}
async function I4(t, e, n) {
  const r = X(t)
  r.sharedClientState.updateQueryState(e, 'rejected', n)
  const i = r.Na.get(e),
    s = i && i.key
  if (s) {
    let o = new _e(q.comparator)
    o = o.insert(s, Ze.newNoDocument(s, Y.min()))
    const l = ee().add(s),
      u = new fu(Y.min(), new Map(), new _e(se), o, l)
    await I2(r, u), (r.Oa = r.Oa.remove(s)), r.Na.delete(e), Ef(r)
  } else
    await bh(r.localStore, e, !1)
      .then(() => jh(r, e, n))
      .catch(Lo)
}
async function S4(t, e) {
  const n = X(t),
    r = e.batch.batchId
  try {
    const i = await OP(n.localStore, e)
    C2(n, r, null),
      S2(n, r),
      n.sharedClientState.updateMutationState(r, 'acknowledged'),
      await jo(n, i)
  } catch (i) {
    await Lo(i)
  }
}
async function C4(t, e, n) {
  const r = X(t)
  try {
    const i = await (function (o, l) {
      const u = X(o)
      return u.persistence.runTransaction(
        'Reject batch',
        'readwrite-primary',
        (h) => {
          let f
          return u.mutationQueue
            .lookupMutationBatch(h, l)
            .next(
              (p) => (
                ue(p !== null),
                (f = p.keys()),
                u.mutationQueue.removeMutationBatch(h, p)
              )
            )
            .next(() => u.mutationQueue.performConsistencyCheck(h))
            .next(() =>
              u.documentOverlayCache.removeOverlaysForBatchId(h, f, l)
            )
            .next(() =>
              u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h, f)
            )
            .next(() => u.localDocuments.getDocuments(h, f))
        }
      )
    })(r.localStore, e)
    C2(r, e, n),
      S2(r, e),
      r.sharedClientState.updateMutationState(e, 'rejected', n),
      await jo(r, i)
  } catch (i) {
    await Lo(i)
  }
}
function S2(t, e) {
  ;(t.ka.get(e) || []).forEach((n) => {
    n.resolve()
  }),
    t.ka.delete(e)
}
function C2(t, e, n) {
  const r = X(t)
  let i = r.Ba[r.currentUser.toKey()]
  if (i) {
    const s = i.get(e)
    s && (n ? s.reject(n) : s.resolve(), (i = i.remove(e))),
      (r.Ba[r.currentUser.toKey()] = i)
  }
}
function jh(t, e, n = null) {
  t.sharedClientState.removeLocalQueryTarget(e)
  for (const r of t.Ma.get(e)) t.Fa.delete(r), n && t.Ca.$a(r, n)
  t.Ma.delete(e),
    t.isPrimaryClient &&
      t.La.gr(e).forEach((r) => {
        t.La.containsKey(r) || A2(t, r)
      })
}
function A2(t, e) {
  t.xa.delete(e.path.canonicalString())
  const n = t.Oa.get(e)
  n !== null &&
    (ff(t.remoteStore, n), (t.Oa = t.Oa.remove(e)), t.Na.delete(n), Ef(t))
}
function Yg(t, e, n) {
  for (const r of n)
    r instanceof E2
      ? (t.La.addReference(r.key, e), A4(t, r))
      : r instanceof w2
      ? (H('SyncEngine', 'Document no longer in limbo: ' + r.key),
        t.La.removeReference(r.key, e),
        t.La.containsKey(r.key) || A2(t, r.key))
      : Q()
}
function A4(t, e) {
  const n = e.key,
    r = n.path.canonicalString()
  t.Oa.get(n) ||
    t.xa.has(r) ||
    (H('SyncEngine', 'New document in limbo: ' + n), t.xa.add(r), Ef(t))
}
function Ef(t) {
  for (; t.xa.size > 0 && t.Oa.size < t.maxConcurrentLimboResolutions; ) {
    const e = t.xa.values().next().value
    t.xa.delete(e)
    const n = new q(Te.fromString(e)),
      r = t.qa.next()
    t.Na.set(r, new m4(n)),
      (t.Oa = t.Oa.insert(n, r)),
      p2(
        t.remoteStore,
        new Gn(Xt(sf(n.path)), r, 'TargetPurposeLimboResolution', Jd.oe)
      )
  }
}
async function jo(t, e, n) {
  const r = X(t),
    i = [],
    s = [],
    o = []
  r.Fa.isEmpty() ||
    (r.Fa.forEach((l, u) => {
      o.push(
        r.Ka(u, e, n).then((h) => {
          var f
          if ((h || n) && r.isPrimaryClient) {
            const p = h
              ? !h.fromCache
              : (f = n == null ? void 0 : n.targetChanges.get(u.targetId)) ===
                  null || f === void 0
              ? void 0
              : f.current
            r.sharedClientState.updateQueryState(
              u.targetId,
              p ? 'current' : 'not-current'
            )
          }
          if (h) {
            i.push(h)
            const p = df.Wi(u.targetId, h)
            s.push(p)
          }
        })
      )
    }),
    await Promise.all(o),
    r.Ca.d_(i),
    await (async function (u, h) {
      const f = X(u)
      try {
        await f.persistence.runTransaction(
          'notifyLocalViewChanges',
          'readwrite',
          (p) =>
            M.forEach(h, (v) =>
              M.forEach(v.$i, (A) =>
                f.persistence.referenceDelegate.addReference(p, v.targetId, A)
              ).next(() =>
                M.forEach(v.Ui, (A) =>
                  f.persistence.referenceDelegate.removeReference(
                    p,
                    v.targetId,
                    A
                  )
                )
              )
            )
        )
      } catch (p) {
        if (!Vo(p)) throw p
        H('LocalStore', 'Failed to update sequence numbers: ' + p)
      }
      for (const p of h) {
        const v = p.targetId
        if (!p.fromCache) {
          const A = f.os.get(v),
            P = A.snapshotVersion,
            N = A.withLastLimboFreeSnapshotVersion(P)
          f.os = f.os.insert(v, N)
        }
      }
    })(r.localStore, s))
}
async function R4(t, e) {
  const n = X(t)
  if (!n.currentUser.isEqual(e)) {
    H('SyncEngine', 'User change. New user:', e.toKey())
    const r = await c2(n.localStore, e)
    ;(n.currentUser = e),
      (function (s, o) {
        s.ka.forEach((l) => {
          l.forEach((u) => {
            u.reject(new K(b.CANCELLED, o))
          })
        }),
          s.ka.clear()
      })(n, "'waitForPendingWrites' promise is rejected due to a user change."),
      n.sharedClientState.handleUserChange(
        e,
        r.removedBatchIds,
        r.addedBatchIds
      ),
      await jo(n, r.hs)
  }
}
function P4(t, e) {
  const n = X(t),
    r = n.Na.get(e)
  if (r && r.va) return ee().add(r.key)
  {
    let i = ee()
    const s = n.Ma.get(e)
    if (!s) return i
    for (const o of s) {
      const l = n.Fa.get(o)
      i = i.unionWith(l.view.Va)
    }
    return i
  }
}
function R2(t) {
  const e = X(t)
  return (
    (e.remoteStore.remoteSyncer.applyRemoteEvent = I2.bind(null, e)),
    (e.remoteStore.remoteSyncer.getRemoteKeysForTarget = P4.bind(null, e)),
    (e.remoteStore.remoteSyncer.rejectListen = I4.bind(null, e)),
    (e.Ca.d_ = c4.bind(null, e.eventManager)),
    (e.Ca.$a = h4.bind(null, e.eventManager)),
    e
  )
}
function k4(t) {
  const e = X(t)
  return (
    (e.remoteStore.remoteSyncer.applySuccessfulWrite = S4.bind(null, e)),
    (e.remoteStore.remoteSyncer.rejectFailedWrite = C4.bind(null, e)),
    e
  )
}
class Xg {
  constructor() {
    this.synchronizeTabs = !1
  }
  async initialize(e) {
    ;(this.serializer = pu(e.databaseInfo.databaseId)),
      (this.sharedClientState = this.createSharedClientState(e)),
      (this.persistence = this.createPersistence(e)),
      await this.persistence.start(),
      (this.localStore = this.createLocalStore(e)),
      (this.gcScheduler = this.createGarbageCollectionScheduler(
        e,
        this.localStore
      )),
      (this.indexBackfillerScheduler = this.createIndexBackfillerScheduler(
        e,
        this.localStore
      ))
  }
  createGarbageCollectionScheduler(e, n) {
    return null
  }
  createIndexBackfillerScheduler(e, n) {
    return null
  }
  createLocalStore(e) {
    return DP(this.persistence, new xP(), e.initialUser, this.serializer)
  }
  createPersistence(e) {
    return new RP(hf.Zr, this.serializer)
  }
  createSharedClientState(e) {
    return new jP()
  }
  async terminate() {
    var e, n
    ;(e = this.gcScheduler) === null || e === void 0 || e.stop(),
      (n = this.indexBackfillerScheduler) === null || n === void 0 || n.stop(),
      this.sharedClientState.shutdown(),
      await this.persistence.shutdown()
  }
}
class x4 {
  async initialize(e, n) {
    this.localStore ||
      ((this.localStore = e.localStore),
      (this.sharedClientState = e.sharedClientState),
      (this.datastore = this.createDatastore(n)),
      (this.remoteStore = this.createRemoteStore(n)),
      (this.eventManager = this.createEventManager(n)),
      (this.syncEngine = this.createSyncEngine(n, !e.synchronizeTabs)),
      (this.sharedClientState.onlineStateHandler = (r) =>
        Qg(this.syncEngine, r, 1)),
      (this.remoteStore.remoteSyncer.handleCredentialChange = R4.bind(
        null,
        this.syncEngine
      )),
      await s4(this.remoteStore, this.syncEngine.isPrimaryClient))
  }
  createEventManager(e) {
    return (function () {
      return new a4()
    })()
  }
  createDatastore(e) {
    const n = pu(e.databaseInfo.databaseId),
      r = (function (s) {
        return new $P(s)
      })(e.databaseInfo)
    return (function (s, o, l, u) {
      return new KP(s, o, l, u)
    })(e.authCredentials, e.appCheckCredentials, r, n)
  }
  createRemoteStore(e) {
    return (function (r, i, s, o, l) {
      return new GP(r, i, s, o, l)
    })(
      this.localStore,
      this.datastore,
      e.asyncQueue,
      (n) => Qg(this.syncEngine, n, 0),
      (function () {
        return Hg.D() ? new Hg() : new UP()
      })()
    )
  }
  createSyncEngine(e, n) {
    return (function (i, s, o, l, u, h, f) {
      const p = new g4(i, s, o, l, u, h)
      return f && (p.Qa = !0), p
    })(
      this.localStore,
      this.remoteStore,
      this.eventManager,
      this.sharedClientState,
      e.initialUser,
      e.maxConcurrentLimboResolutions,
      n
    )
  }
  async terminate() {
    var e, n
    await (async function (i) {
      const s = X(i)
      H('RemoteStore', 'RemoteStore shutting down.'),
        s.L_.add(5),
        await Fo(s),
        s.k_.shutdown(),
        s.q_.set('Unknown')
    })(this.remoteStore),
      (e = this.datastore) === null || e === void 0 || e.terminate(),
      (n = this.eventManager) === null || n === void 0 || n.terminate()
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class N4 {
  constructor(e) {
    ;(this.observer = e), (this.muted = !1)
  }
  next(e) {
    this.observer.next && this.Ga(this.observer.next, e)
  }
  error(e) {
    this.observer.error
      ? this.Ga(this.observer.error, e)
      : Cn('Uncaught Error in snapshot listener:', e.toString())
  }
  za() {
    this.muted = !0
  }
  Ga(e, n) {
    this.muted ||
      setTimeout(() => {
        this.muted || e(n)
      }, 0)
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class D4 {
  constructor(e, n, r, i) {
    ;(this.authCredentials = e),
      (this.appCheckCredentials = n),
      (this.asyncQueue = r),
      (this.databaseInfo = i),
      (this.user = Xe.UNAUTHENTICATED),
      (this.clientId = N_.newId()),
      (this.authCredentialListener = () => Promise.resolve()),
      (this.appCheckCredentialListener = () => Promise.resolve()),
      this.authCredentials.start(r, async (s) => {
        H('FirestoreClient', 'Received user=', s.uid),
          await this.authCredentialListener(s),
          (this.user = s)
      }),
      this.appCheckCredentials.start(
        r,
        (s) => (
          H('FirestoreClient', 'Received new app check token=', s),
          this.appCheckCredentialListener(s, this.user)
        )
      )
  }
  get configuration() {
    return {
      asyncQueue: this.asyncQueue,
      databaseInfo: this.databaseInfo,
      clientId: this.clientId,
      authCredentials: this.authCredentials,
      appCheckCredentials: this.appCheckCredentials,
      initialUser: this.user,
      maxConcurrentLimboResolutions: 100,
    }
  }
  setCredentialChangeListener(e) {
    this.authCredentialListener = e
  }
  setAppCheckTokenChangeListener(e) {
    this.appCheckCredentialListener = e
  }
  verifyNotTerminated() {
    if (this.asyncQueue.isShuttingDown)
      throw new K(
        b.FAILED_PRECONDITION,
        'The client has already been terminated.'
      )
  }
  terminate() {
    this.asyncQueue.enterRestrictedMode()
    const e = new ar()
    return (
      this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async () => {
        try {
          this._onlineComponents && (await this._onlineComponents.terminate()),
            this._offlineComponents &&
              (await this._offlineComponents.terminate()),
            this.authCredentials.shutdown(),
            this.appCheckCredentials.shutdown(),
            e.resolve()
        } catch (n) {
          const r = vf(n, 'Failed to shutdown persistence')
          e.reject(r)
        }
      }),
      e.promise
    )
  }
}
async function Ic(t, e) {
  t.asyncQueue.verifyOperationInProgress(),
    H('FirestoreClient', 'Initializing OfflineComponentProvider')
  const n = t.configuration
  await e.initialize(n)
  let r = n.initialUser
  t.setCredentialChangeListener(async (i) => {
    r.isEqual(i) || (await c2(e.localStore, i), (r = i))
  }),
    e.persistence.setDatabaseDeletedListener(() => t.terminate()),
    (t._offlineComponents = e)
}
async function Jg(t, e) {
  t.asyncQueue.verifyOperationInProgress()
  const n = await L4(t)
  H('FirestoreClient', 'Initializing OnlineComponentProvider'),
    await e.initialize(n, t.configuration),
    t.setCredentialChangeListener((r) => Wg(e.remoteStore, r)),
    t.setAppCheckTokenChangeListener((r, i) => Wg(e.remoteStore, i)),
    (t._onlineComponents = e)
}
function O4(t) {
  return t.name === 'FirebaseError'
    ? t.code === b.FAILED_PRECONDITION || t.code === b.UNIMPLEMENTED
    : !(typeof DOMException < 'u' && t instanceof DOMException) ||
        t.code === 22 ||
        t.code === 20 ||
        t.code === 11
}
async function L4(t) {
  if (!t._offlineComponents)
    if (t._uninitializedComponentsProvider) {
      H('FirestoreClient', 'Using user provided OfflineComponentProvider')
      try {
        await Ic(t, t._uninitializedComponentsProvider._offline)
      } catch (e) {
        const n = e
        if (!O4(n)) throw n
        Li(
          'Error using user provided cache. Falling back to memory cache: ' + n
        ),
          await Ic(t, new Xg())
      }
    } else
      H('FirestoreClient', 'Using default OfflineComponentProvider'),
        await Ic(t, new Xg())
  return t._offlineComponents
}
async function P2(t) {
  return (
    t._onlineComponents ||
      (t._uninitializedComponentsProvider
        ? (H('FirestoreClient', 'Using user provided OnlineComponentProvider'),
          await Jg(t, t._uninitializedComponentsProvider._online))
        : (H('FirestoreClient', 'Using default OnlineComponentProvider'),
          await Jg(t, new x4()))),
    t._onlineComponents
  )
}
function V4(t) {
  return P2(t).then((e) => e.syncEngine)
}
async function M4(t) {
  const e = await P2(t),
    n = e.eventManager
  return (
    (n.onListen = y4.bind(null, e.syncEngine)),
    (n.onUnlisten = E4.bind(null, e.syncEngine)),
    (n.onFirstRemoteStoreListen = v4.bind(null, e.syncEngine)),
    (n.onLastRemoteStoreUnlisten = w4.bind(null, e.syncEngine)),
    n
  )
}
function b4(t, e, n = {}) {
  const r = new ar()
  return (
    t.asyncQueue.enqueueAndForget(async () =>
      (function (s, o, l, u, h) {
        const f = new N4({
            next: (v) => {
              o.enqueueAndForget(() => u4(s, p))
              const A = v.docs.has(l)
              !A && v.fromCache
                ? h.reject(
                    new K(
                      b.UNAVAILABLE,
                      'Failed to get document because the client is offline.'
                    )
                  )
                : A && v.fromCache && u && u.source === 'server'
                ? h.reject(
                    new K(
                      b.UNAVAILABLE,
                      'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)'
                    )
                  )
                : h.resolve(v)
            },
            error: (v) => h.reject(v),
          }),
          p = new d4(sf(l.path), f, { includeMetadataChanges: !0, _a: !0 })
        return l4(s, p)
      })(await M4(t), t.asyncQueue, e, n, r)
    ),
    r.promise
  )
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function k2(t) {
  const e = {}
  return t.timeoutSeconds !== void 0 && (e.timeoutSeconds = t.timeoutSeconds), e
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Zg = new Map()
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function F4(t, e, n) {
  if (!n)
    throw new K(
      b.INVALID_ARGUMENT,
      `Function ${t}() cannot be called with an empty ${e}.`
    )
}
function j4(t, e, n, r) {
  if (e === !0 && r === !0)
    throw new K(b.INVALID_ARGUMENT, `${t} and ${n} cannot be used together.`)
}
function e0(t) {
  if (!q.isDocumentKey(t))
    throw new K(
      b.INVALID_ARGUMENT,
      `Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`
    )
}
function wf(t) {
  if (t === void 0) return 'undefined'
  if (t === null) return 'null'
  if (typeof t == 'string')
    return t.length > 20 && (t = `${t.substring(0, 20)}...`), JSON.stringify(t)
  if (typeof t == 'number' || typeof t == 'boolean') return '' + t
  if (typeof t == 'object') {
    if (t instanceof Array) return 'an array'
    {
      const e = (function (r) {
        return r.constructor ? r.constructor.name : null
      })(t)
      return e ? `a custom ${e} object` : 'an object'
    }
  }
  return typeof t == 'function' ? 'a function' : Q()
}
function wo(t, e) {
  if (('_delegate' in t && (t = t._delegate), !(t instanceof e))) {
    if (e.name === t.constructor.name)
      throw new K(
        b.INVALID_ARGUMENT,
        'Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?'
      )
    {
      const n = wf(t)
      throw new K(
        b.INVALID_ARGUMENT,
        `Expected type '${e.name}', but it was: ${n}`
      )
    }
  }
  return t
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class t0 {
  constructor(e) {
    var n, r
    if (e.host === void 0) {
      if (e.ssl !== void 0)
        throw new K(
          b.INVALID_ARGUMENT,
          "Can't provide ssl option if host option is not set"
        )
      ;(this.host = 'firestore.googleapis.com'), (this.ssl = !0)
    } else
      (this.host = e.host),
        (this.ssl = (n = e.ssl) === null || n === void 0 || n)
    if (
      ((this.credentials = e.credentials),
      (this.ignoreUndefinedProperties = !!e.ignoreUndefinedProperties),
      (this.localCache = e.localCache),
      e.cacheSizeBytes === void 0)
    )
      this.cacheSizeBytes = 41943040
    else {
      if (e.cacheSizeBytes !== -1 && e.cacheSizeBytes < 1048576)
        throw new K(
          b.INVALID_ARGUMENT,
          'cacheSizeBytes must be at least 1048576'
        )
      this.cacheSizeBytes = e.cacheSizeBytes
    }
    j4(
      'experimentalForceLongPolling',
      e.experimentalForceLongPolling,
      'experimentalAutoDetectLongPolling',
      e.experimentalAutoDetectLongPolling
    ),
      (this.experimentalForceLongPolling = !!e.experimentalForceLongPolling),
      this.experimentalForceLongPolling
        ? (this.experimentalAutoDetectLongPolling = !1)
        : e.experimentalAutoDetectLongPolling === void 0
        ? (this.experimentalAutoDetectLongPolling = !0)
        : (this.experimentalAutoDetectLongPolling =
            !!e.experimentalAutoDetectLongPolling),
      (this.experimentalLongPollingOptions = k2(
        (r = e.experimentalLongPollingOptions) !== null && r !== void 0 ? r : {}
      )),
      (function (s) {
        if (s.timeoutSeconds !== void 0) {
          if (isNaN(s.timeoutSeconds))
            throw new K(
              b.INVALID_ARGUMENT,
              `invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`
            )
          if (s.timeoutSeconds < 5)
            throw new K(
              b.INVALID_ARGUMENT,
              `invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`
            )
          if (s.timeoutSeconds > 30)
            throw new K(
              b.INVALID_ARGUMENT,
              `invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`
            )
        }
      })(this.experimentalLongPollingOptions),
      (this.useFetchStreams = !!e.useFetchStreams)
  }
  isEqual(e) {
    return (
      this.host === e.host &&
      this.ssl === e.ssl &&
      this.credentials === e.credentials &&
      this.cacheSizeBytes === e.cacheSizeBytes &&
      this.experimentalForceLongPolling === e.experimentalForceLongPolling &&
      this.experimentalAutoDetectLongPolling ===
        e.experimentalAutoDetectLongPolling &&
      (function (r, i) {
        return r.timeoutSeconds === i.timeoutSeconds
      })(
        this.experimentalLongPollingOptions,
        e.experimentalLongPollingOptions
      ) &&
      this.ignoreUndefinedProperties === e.ignoreUndefinedProperties &&
      this.useFetchStreams === e.useFetchStreams
    )
  }
}
class Tf {
  constructor(e, n, r, i) {
    ;(this._authCredentials = e),
      (this._appCheckCredentials = n),
      (this._databaseId = r),
      (this._app = i),
      (this.type = 'firestore-lite'),
      (this._persistenceKey = '(lite)'),
      (this._settings = new t0({})),
      (this._settingsFrozen = !1)
  }
  get app() {
    if (!this._app)
      throw new K(
        b.FAILED_PRECONDITION,
        "Firestore was not initialized using the Firebase SDK. 'app' is not available"
      )
    return this._app
  }
  get _initialized() {
    return this._settingsFrozen
  }
  get _terminated() {
    return this._terminateTask !== void 0
  }
  _setSettings(e) {
    if (this._settingsFrozen)
      throw new K(
        b.FAILED_PRECONDITION,
        'Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.'
      )
    ;(this._settings = new t0(e)),
      e.credentials !== void 0 &&
        (this._authCredentials = (function (r) {
          if (!r) return new QA()
          switch (r.type) {
            case 'firstParty':
              return new ZA(
                r.sessionIndex || '0',
                r.iamToken || null,
                r.authTokenFactory || null
              )
            case 'provider':
              return r.client
            default:
              throw new K(
                b.INVALID_ARGUMENT,
                'makeAuthCredentialsProvider failed due to invalid credential type'
              )
          }
        })(e.credentials))
  }
  _getSettings() {
    return this._settings
  }
  _freezeSettings() {
    return (this._settingsFrozen = !0), this._settings
  }
  _delete() {
    return (
      this._terminateTask || (this._terminateTask = this._terminate()),
      this._terminateTask
    )
  }
  toJSON() {
    return {
      app: this._app,
      databaseId: this._databaseId,
      settings: this._settings,
    }
  }
  _terminate() {
    return (
      (function (n) {
        const r = Zg.get(n)
        r &&
          (H('ComponentProvider', 'Removing Datastore'),
          Zg.delete(n),
          r.terminate())
      })(this),
      Promise.resolve()
    )
  }
}
function U4(t, e, n, r = {}) {
  var i
  const s = (t = wo(t, Tf))._getSettings(),
    o = `${e}:${n}`
  if (
    (s.host !== 'firestore.googleapis.com' &&
      s.host !== o &&
      Li(
        'Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.'
      ),
    t._setSettings(Object.assign(Object.assign({}, s), { host: o, ssl: !1 })),
    r.mockUserToken)
  ) {
    let l, u
    if (typeof r.mockUserToken == 'string')
      (l = r.mockUserToken), (u = Xe.MOCK_USER)
    else {
      l = uI(
        r.mockUserToken,
        (i = t._app) === null || i === void 0 ? void 0 : i.options.projectId
      )
      const h = r.mockUserToken.sub || r.mockUserToken.user_id
      if (!h)
        throw new K(
          b.INVALID_ARGUMENT,
          "mockUserToken must contain 'sub' or 'user_id' field!"
        )
      u = new Xe(h)
    }
    t._authCredentials = new YA(new x_(l, u))
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class If {
  constructor(e, n, r) {
    ;(this.converter = n),
      (this._query = r),
      (this.type = 'query'),
      (this.firestore = e)
  }
  withConverter(e) {
    return new If(this.firestore, e, this._query)
  }
}
class Pt {
  constructor(e, n, r) {
    ;(this.converter = n),
      (this._key = r),
      (this.type = 'document'),
      (this.firestore = e)
  }
  get _path() {
    return this._key.path
  }
  get id() {
    return this._key.path.lastSegment()
  }
  get path() {
    return this._key.path.canonicalString()
  }
  get parent() {
    return new To(this.firestore, this.converter, this._key.path.popLast())
  }
  withConverter(e) {
    return new Pt(this.firestore, e, this._key)
  }
}
class To extends If {
  constructor(e, n, r) {
    super(e, n, sf(r)), (this._path = r), (this.type = 'collection')
  }
  get id() {
    return this._query.path.lastSegment()
  }
  get path() {
    return this._query.path.canonicalString()
  }
  get parent() {
    const e = this._path.popLast()
    return e.isEmpty() ? null : new Pt(this.firestore, null, new q(e))
  }
  withConverter(e) {
    return new To(this.firestore, e, this._path)
  }
}
function B4(t, e, ...n) {
  if (
    ((t = mt(t)),
    arguments.length === 1 && (e = N_.newId()),
    F4('doc', 'path', e),
    t instanceof Tf)
  ) {
    const r = Te.fromString(e, ...n)
    return e0(r), new Pt(t, null, new q(r))
  }
  {
    if (!(t instanceof Pt || t instanceof To))
      throw new K(
        b.INVALID_ARGUMENT,
        'Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore'
      )
    const r = t._path.child(Te.fromString(e, ...n))
    return (
      e0(r), new Pt(t.firestore, t instanceof To ? t.converter : null, new q(r))
    )
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class z4 {
  constructor() {
    ;(this.au = Promise.resolve()),
      (this.uu = []),
      (this.cu = !1),
      (this.lu = []),
      (this.hu = null),
      (this.Pu = !1),
      (this.Iu = !1),
      (this.Tu = []),
      (this.t_ = new d2(this, 'async_queue_retry')),
      (this.Eu = () => {
        const n = Tc()
        n &&
          H('AsyncQueue', 'Visibility state changed to ' + n.visibilityState),
          this.t_.jo()
      })
    const e = Tc()
    e &&
      typeof e.addEventListener == 'function' &&
      e.addEventListener('visibilitychange', this.Eu)
  }
  get isShuttingDown() {
    return this.cu
  }
  enqueueAndForget(e) {
    this.enqueue(e)
  }
  enqueueAndForgetEvenWhileRestricted(e) {
    this.du(), this.Au(e)
  }
  enterRestrictedMode(e) {
    if (!this.cu) {
      ;(this.cu = !0), (this.Iu = e || !1)
      const n = Tc()
      n &&
        typeof n.removeEventListener == 'function' &&
        n.removeEventListener('visibilitychange', this.Eu)
    }
  }
  enqueue(e) {
    if ((this.du(), this.cu)) return new Promise(() => {})
    const n = new ar()
    return this.Au(() =>
      this.cu && this.Iu
        ? Promise.resolve()
        : (e().then(n.resolve, n.reject), n.promise)
    ).then(() => n.promise)
  }
  enqueueRetryable(e) {
    this.enqueueAndForget(() => (this.uu.push(e), this.Ru()))
  }
  async Ru() {
    if (this.uu.length !== 0) {
      try {
        await this.uu[0](), this.uu.shift(), this.t_.reset()
      } catch (e) {
        if (!Vo(e)) throw e
        H('AsyncQueue', 'Operation failed with retryable error: ' + e)
      }
      this.uu.length > 0 && this.t_.Go(() => this.Ru())
    }
  }
  Au(e) {
    const n = this.au.then(
      () => (
        (this.Pu = !0),
        e()
          .catch((r) => {
            ;(this.hu = r), (this.Pu = !1)
            const i = (function (o) {
              let l = o.message || ''
              return (
                o.stack &&
                  (l = o.stack.includes(o.message)
                    ? o.stack
                    : o.message +
                      `
` +
                      o.stack),
                l
              )
            })(r)
            throw (Cn('INTERNAL UNHANDLED ERROR: ', i), r)
          })
          .then((r) => ((this.Pu = !1), r))
      )
    )
    return (this.au = n), n
  }
  enqueueAfterDelay(e, n, r) {
    this.du(), this.Tu.indexOf(e) > -1 && (n = 0)
    const i = yf.createAndSchedule(this, e, n, r, (s) => this.Vu(s))
    return this.lu.push(i), i
  }
  du() {
    this.hu && Q()
  }
  verifyOperationInProgress() {}
  async mu() {
    let e
    do (e = this.au), await e
    while (e !== this.au)
  }
  fu(e) {
    for (const n of this.lu) if (n.timerId === e) return !0
    return !1
  }
  gu(e) {
    return this.mu().then(() => {
      this.lu.sort((n, r) => n.targetTimeMs - r.targetTimeMs)
      for (const n of this.lu)
        if ((n.skipDelay(), e !== 'all' && n.timerId === e)) break
      return this.mu()
    })
  }
  pu(e) {
    this.Tu.push(e)
  }
  Vu(e) {
    const n = this.lu.indexOf(e)
    this.lu.splice(n, 1)
  }
}
class Sf extends Tf {
  constructor(e, n, r, i) {
    super(e, n, r, i),
      (this.type = 'firestore'),
      (this._queue = (function () {
        return new z4()
      })()),
      (this._persistenceKey = (i == null ? void 0 : i.name) || '[DEFAULT]')
  }
  _terminate() {
    return this._firestoreClient || N2(this), this._firestoreClient.terminate()
  }
}
function $4(t, e) {
  const n = typeof t == 'object' ? t : jv(),
    r = typeof t == 'string' ? t : '(default)',
    i = Ud(n, 'firestore').getImmediate({ identifier: r })
  if (!i._initialized) {
    const s = aI('firestore')
    s && U4(i, ...s)
  }
  return i
}
function x2(t) {
  return (
    t._firestoreClient || N2(t),
    t._firestoreClient.verifyNotTerminated(),
    t._firestoreClient
  )
}
function N2(t) {
  var e, n, r
  const i = t._freezeSettings(),
    s = (function (l, u, h, f) {
      return new dR(
        l,
        u,
        h,
        f.host,
        f.ssl,
        f.experimentalForceLongPolling,
        f.experimentalAutoDetectLongPolling,
        k2(f.experimentalLongPollingOptions),
        f.useFetchStreams
      )
    })(
      t._databaseId,
      ((e = t._app) === null || e === void 0 ? void 0 : e.options.appId) || '',
      t._persistenceKey,
      i
    )
  ;(t._firestoreClient = new D4(
    t._authCredentials,
    t._appCheckCredentials,
    t._queue,
    s
  )),
    !((n = i.localCache) === null || n === void 0) &&
      n._offlineComponentProvider &&
      !((r = i.localCache) === null || r === void 0) &&
      r._onlineComponentProvider &&
      (t._firestoreClient._uninitializedComponentsProvider = {
        _offlineKind: i.localCache.kind,
        _offline: i.localCache._offlineComponentProvider,
        _online: i.localCache._onlineComponentProvider,
      })
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ui {
  constructor(e) {
    this._byteString = e
  }
  static fromBase64String(e) {
    try {
      return new Ui(He.fromBase64String(e))
    } catch (n) {
      throw new K(
        b.INVALID_ARGUMENT,
        'Failed to construct data from Base64 string: ' + n
      )
    }
  }
  static fromUint8Array(e) {
    return new Ui(He.fromUint8Array(e))
  }
  toBase64() {
    return this._byteString.toBase64()
  }
  toUint8Array() {
    return this._byteString.toUint8Array()
  }
  toString() {
    return 'Bytes(base64: ' + this.toBase64() + ')'
  }
  isEqual(e) {
    return this._byteString.isEqual(e._byteString)
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Cf {
  constructor(...e) {
    for (let n = 0; n < e.length; ++n)
      if (e[n].length === 0)
        throw new K(
          b.INVALID_ARGUMENT,
          'Invalid field name at argument $(i + 1). Field names must not be empty.'
        )
    this._internalPath = new Ue(e)
  }
  isEqual(e) {
    return this._internalPath.isEqual(e._internalPath)
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class D2 {
  constructor(e) {
    this._methodName = e
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Af {
  constructor(e, n) {
    if (!isFinite(e) || e < -90 || e > 90)
      throw new K(
        b.INVALID_ARGUMENT,
        'Latitude must be a number between -90 and 90, but was: ' + e
      )
    if (!isFinite(n) || n < -180 || n > 180)
      throw new K(
        b.INVALID_ARGUMENT,
        'Longitude must be a number between -180 and 180, but was: ' + n
      )
    ;(this._lat = e), (this._long = n)
  }
  get latitude() {
    return this._lat
  }
  get longitude() {
    return this._long
  }
  isEqual(e) {
    return this._lat === e._lat && this._long === e._long
  }
  toJSON() {
    return { latitude: this._lat, longitude: this._long }
  }
  _compareTo(e) {
    return se(this._lat, e._lat) || se(this._long, e._long)
  }
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Rf {
  constructor(e) {
    this._values = (e || []).map((n) => n)
  }
  toArray() {
    return this._values.map((e) => e)
  }
  isEqual(e) {
    return (function (r, i) {
      if (r.length !== i.length) return !1
      for (let s = 0; s < r.length; ++s) if (r[s] !== i[s]) return !1
      return !0
    })(this._values, e._values)
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const H4 = /^__.*__$/
class W4 {
  constructor(e, n, r) {
    ;(this.data = e), (this.fieldMask = n), (this.fieldTransforms = r)
  }
  toMutation(e, n) {
    return this.fieldMask !== null
      ? new qr(e, this.data, this.fieldMask, n, this.fieldTransforms)
      : new Mo(e, this.data, n, this.fieldTransforms)
  }
}
function O2(t) {
  switch (t) {
    case 0:
    case 2:
    case 1:
      return !0
    case 3:
    case 4:
      return !1
    default:
      throw Q()
  }
}
class Pf {
  constructor(e, n, r, i, s, o) {
    ;(this.settings = e),
      (this.databaseId = n),
      (this.serializer = r),
      (this.ignoreUndefinedProperties = i),
      s === void 0 && this.yu(),
      (this.fieldTransforms = s || []),
      (this.fieldMask = o || [])
  }
  get path() {
    return this.settings.path
  }
  get wu() {
    return this.settings.wu
  }
  Su(e) {
    return new Pf(
      Object.assign(Object.assign({}, this.settings), e),
      this.databaseId,
      this.serializer,
      this.ignoreUndefinedProperties,
      this.fieldTransforms,
      this.fieldMask
    )
  }
  bu(e) {
    var n
    const r = (n = this.path) === null || n === void 0 ? void 0 : n.child(e),
      i = this.Su({ path: r, Du: !1 })
    return i.vu(e), i
  }
  Cu(e) {
    var n
    const r = (n = this.path) === null || n === void 0 ? void 0 : n.child(e),
      i = this.Su({ path: r, Du: !1 })
    return i.yu(), i
  }
  Fu(e) {
    return this.Su({ path: void 0, Du: !0 })
  }
  Mu(e) {
    return bl(
      e,
      this.settings.methodName,
      this.settings.xu || !1,
      this.path,
      this.settings.Ou
    )
  }
  contains(e) {
    return (
      this.fieldMask.find((n) => e.isPrefixOf(n)) !== void 0 ||
      this.fieldTransforms.find((n) => e.isPrefixOf(n.field)) !== void 0
    )
  }
  yu() {
    if (this.path)
      for (let e = 0; e < this.path.length; e++) this.vu(this.path.get(e))
  }
  vu(e) {
    if (e.length === 0) throw this.Mu('Document fields must not be empty')
    if (O2(this.wu) && H4.test(e))
      throw this.Mu('Document fields cannot begin and end with "__"')
  }
}
class K4 {
  constructor(e, n, r) {
    ;(this.databaseId = e),
      (this.ignoreUndefinedProperties = n),
      (this.serializer = r || pu(e))
  }
  Nu(e, n, r, i = !1) {
    return new Pf(
      { wu: e, methodName: n, Ou: r, path: Ue.emptyPath(), Du: !1, xu: i },
      this.databaseId,
      this.serializer,
      this.ignoreUndefinedProperties
    )
  }
}
function q4(t) {
  const e = t._freezeSettings(),
    n = pu(t._databaseId)
  return new K4(t._databaseId, !!e.ignoreUndefinedProperties, n)
}
function G4(t, e, n, r, i, s = {}) {
  const o = t.Nu(s.merge || s.mergeFields ? 2 : 0, e, n, i)
  b2('Data must be an object, but it was:', o, r)
  const l = V2(r, o)
  let u, h
  if (s.merge) (u = new Ft(o.fieldMask)), (h = o.fieldTransforms)
  else if (s.mergeFields) {
    const f = []
    for (const p of s.mergeFields) {
      const v = Q4(e, p, n)
      if (!o.contains(v))
        throw new K(
          b.INVALID_ARGUMENT,
          `Field '${v}' is specified in your field mask but missing from your input data.`
        )
      X4(f, v) || f.push(v)
    }
    ;(u = new Ft(f)), (h = o.fieldTransforms.filter((p) => u.covers(p.field)))
  } else (u = null), (h = o.fieldTransforms)
  return new W4(new Ct(l), u, h)
}
function L2(t, e) {
  if (M2((t = mt(t)))) return b2('Unsupported field value:', e, t), V2(t, e)
  if (t instanceof D2)
    return (
      (function (r, i) {
        if (!O2(i.wu))
          throw i.Mu(
            `${r._methodName}() can only be used with update() and set()`
          )
        if (!i.path)
          throw i.Mu(
            `${r._methodName}() is not currently supported inside arrays`
          )
        const s = r._toFieldTransform(i)
        s && i.fieldTransforms.push(s)
      })(t, e),
      null
    )
  if (t === void 0 && e.ignoreUndefinedProperties) return null
  if ((e.path && e.fieldMask.push(e.path), t instanceof Array)) {
    if (e.settings.Du && e.wu !== 4)
      throw e.Mu('Nested arrays are not supported')
    return (function (r, i) {
      const s = []
      let o = 0
      for (const l of r) {
        let u = L2(l, i.Fu(o))
        u == null && (u = { nullValue: 'NULL_VALUE' }), s.push(u), o++
      }
      return { arrayValue: { values: s } }
    })(t, e)
  }
  return (function (r, i) {
    if ((r = mt(r)) === null) return { nullValue: 'NULL_VALUE' }
    if (typeof r == 'number') return VR(i.serializer, r)
    if (typeof r == 'boolean') return { booleanValue: r }
    if (typeof r == 'string') return { stringValue: r }
    if (r instanceof Date) {
      const s = Oe.fromDate(r)
      return { timestampValue: Vl(i.serializer, s) }
    }
    if (r instanceof Oe) {
      const s = new Oe(r.seconds, 1e3 * Math.floor(r.nanoseconds / 1e3))
      return { timestampValue: Vl(i.serializer, s) }
    }
    if (r instanceof Af)
      return { geoPointValue: { latitude: r.latitude, longitude: r.longitude } }
    if (r instanceof Ui) return { bytesValue: r2(i.serializer, r._byteString) }
    if (r instanceof Pt) {
      const s = i.databaseId,
        o = r.firestore._databaseId
      if (!o.isEqual(s))
        throw i.Mu(
          `Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`
        )
      return {
        referenceValue: uf(
          r.firestore._databaseId || i.databaseId,
          r._key.path
        ),
      }
    }
    if (r instanceof Rf)
      return (function (o, l) {
        return {
          mapValue: {
            fields: {
              __type__: { stringValue: '__vector__' },
              value: {
                arrayValue: {
                  values: o.toArray().map((u) => {
                    if (typeof u != 'number')
                      throw l.Mu(
                        'VectorValues must only contain numeric values.'
                      )
                    return of(l.serializer, u)
                  }),
                },
              },
            },
          },
        }
      })(r, i)
    throw i.Mu(`Unsupported field value: ${wf(r)}`)
  })(t, e)
}
function V2(t, e) {
  const n = {}
  return (
    D_(t)
      ? e.path && e.path.length > 0 && e.fieldMask.push(e.path)
      : Qi(t, (r, i) => {
          const s = L2(i, e.bu(r))
          s != null && (n[r] = s)
        }),
    { mapValue: { fields: n } }
  )
}
function M2(t) {
  return !(
    typeof t != 'object' ||
    t === null ||
    t instanceof Array ||
    t instanceof Date ||
    t instanceof Oe ||
    t instanceof Af ||
    t instanceof Ui ||
    t instanceof Pt ||
    t instanceof D2 ||
    t instanceof Rf
  )
}
function b2(t, e, n) {
  if (
    !M2(n) ||
    !(function (i) {
      return (
        typeof i == 'object' &&
        i !== null &&
        (Object.getPrototypeOf(i) === Object.prototype ||
          Object.getPrototypeOf(i) === null)
      )
    })(n)
  ) {
    const r = wf(n)
    throw r === 'an object' ? e.Mu(t + ' a custom object') : e.Mu(t + ' ' + r)
  }
}
function Q4(t, e, n) {
  if ((e = mt(e)) instanceof Cf) return e._internalPath
  if (typeof e == 'string') return F2(t, e)
  throw bl('Field path arguments must be of type string or ', t, !1, void 0, n)
}
const Y4 = new RegExp('[~\\*/\\[\\]]')
function F2(t, e, n) {
  if (e.search(Y4) >= 0)
    throw bl(
      `Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,
      t,
      !1,
      void 0,
      n
    )
  try {
    return new Cf(...e.split('.'))._internalPath
  } catch {
    throw bl(
      `Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,
      t,
      !1,
      void 0,
      n
    )
  }
}
function bl(t, e, n, r, i) {
  const s = r && !r.isEmpty(),
    o = i !== void 0
  let l = `Function ${e}() called with invalid data`
  n && (l += ' (via `toFirestore()`)'), (l += '. ')
  let u = ''
  return (
    (s || o) &&
      ((u += ' (found'),
      s && (u += ` in field ${r}`),
      o && (u += ` in document ${i}`),
      (u += ')')),
    new K(b.INVALID_ARGUMENT, l + t + u)
  )
}
function X4(t, e) {
  return t.some((n) => n.isEqual(e))
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class j2 {
  constructor(e, n, r, i, s) {
    ;(this._firestore = e),
      (this._userDataWriter = n),
      (this._key = r),
      (this._document = i),
      (this._converter = s)
  }
  get id() {
    return this._key.path.lastSegment()
  }
  get ref() {
    return new Pt(this._firestore, this._converter, this._key)
  }
  exists() {
    return this._document !== null
  }
  data() {
    if (this._document) {
      if (this._converter) {
        const e = new J4(
          this._firestore,
          this._userDataWriter,
          this._key,
          this._document,
          null
        )
        return this._converter.fromFirestore(e)
      }
      return this._userDataWriter.convertValue(this._document.data.value)
    }
  }
  get(e) {
    if (this._document) {
      const n = this._document.data.field(U2('DocumentSnapshot.get', e))
      if (n !== null) return this._userDataWriter.convertValue(n)
    }
  }
}
class J4 extends j2 {
  data() {
    return super.data()
  }
}
function U2(t, e) {
  return typeof e == 'string'
    ? F2(t, e)
    : e instanceof Cf
    ? e._internalPath
    : e._delegate._internalPath
}
class Z4 {
  convertValue(e, n = 'none') {
    switch ($r(e)) {
      case 0:
        return null
      case 1:
        return e.booleanValue
      case 2:
        return Se(e.integerValue || e.doubleValue)
      case 3:
        return this.convertTimestamp(e.timestampValue)
      case 4:
        return this.convertServerTimestamp(e, n)
      case 5:
        return e.stringValue
      case 6:
        return this.convertBytes(zr(e.bytesValue))
      case 7:
        return this.convertReference(e.referenceValue)
      case 8:
        return this.convertGeoPoint(e.geoPointValue)
      case 9:
        return this.convertArray(e.arrayValue, n)
      case 11:
        return this.convertObject(e.mapValue, n)
      case 10:
        return this.convertVectorValue(e.mapValue)
      default:
        throw Q()
    }
  }
  convertObject(e, n) {
    return this.convertObjectMap(e.fields, n)
  }
  convertObjectMap(e, n = 'none') {
    const r = {}
    return (
      Qi(e, (i, s) => {
        r[i] = this.convertValue(s, n)
      }),
      r
    )
  }
  convertVectorValue(e) {
    var n, r, i
    const s =
      (i =
        (r =
          (n = e.fields) === null || n === void 0
            ? void 0
            : n.value.arrayValue) === null || r === void 0
          ? void 0
          : r.values) === null || i === void 0
        ? void 0
        : i.map((o) => Se(o.doubleValue))
    return new Rf(s)
  }
  convertGeoPoint(e) {
    return new Af(Se(e.latitude), Se(e.longitude))
  }
  convertArray(e, n) {
    return (e.values || []).map((r) => this.convertValue(r, n))
  }
  convertServerTimestamp(e, n) {
    switch (n) {
      case 'previous':
        const r = ef(e)
        return r == null ? null : this.convertValue(r, n)
      case 'estimate':
        return this.convertTimestamp(go(e))
      default:
        return null
    }
  }
  convertTimestamp(e) {
    const n = hr(e)
    return new Oe(n.seconds, n.nanos)
  }
  convertDocumentKey(e, n) {
    const r = Te.fromString(e)
    ue(u2(r))
    const i = new yo(r.get(1), r.get(3)),
      s = new q(r.popFirst(5))
    return (
      i.isEqual(n) ||
        Cn(
          `Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`
        ),
      s
    )
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ek(t, e, n) {
  let r
  return (
    (r = t
      ? n && (n.merge || n.mergeFields)
        ? t.toFirestore(e, n)
        : t.toFirestore(e)
      : e),
    r
  )
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tk {
  constructor(e, n) {
    ;(this.hasPendingWrites = e), (this.fromCache = n)
  }
  isEqual(e) {
    return (
      this.hasPendingWrites === e.hasPendingWrites &&
      this.fromCache === e.fromCache
    )
  }
}
class B2 extends j2 {
  constructor(e, n, r, i, s, o) {
    super(e, n, r, i, o),
      (this._firestore = e),
      (this._firestoreImpl = e),
      (this.metadata = s)
  }
  exists() {
    return super.exists()
  }
  data(e = {}) {
    if (this._document) {
      if (this._converter) {
        const n = new nk(
          this._firestore,
          this._userDataWriter,
          this._key,
          this._document,
          this.metadata,
          null
        )
        return this._converter.fromFirestore(n, e)
      }
      return this._userDataWriter.convertValue(
        this._document.data.value,
        e.serverTimestamps
      )
    }
  }
  get(e, n = {}) {
    if (this._document) {
      const r = this._document.data.field(U2('DocumentSnapshot.get', e))
      if (r !== null)
        return this._userDataWriter.convertValue(r, n.serverTimestamps)
    }
  }
}
class nk extends B2 {
  data(e = {}) {
    return super.data(e)
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function rk(t) {
  t = wo(t, Pt)
  const e = wo(t.firestore, Sf)
  return b4(x2(e), t._key).then((n) => ak(e, t, n))
}
class ik extends Z4 {
  constructor(e) {
    super(), (this.firestore = e)
  }
  convertBytes(e) {
    return new Ui(e)
  }
  convertReference(e) {
    const n = this.convertDocumentKey(e, this.firestore._databaseId)
    return new Pt(this.firestore, null, n)
  }
}
function sk(t, e, n) {
  t = wo(t, Pt)
  const r = wo(t.firestore, Sf),
    i = ek(t.converter, e, n)
  return ok(r, [
    G4(q4(r), 'setDoc', t._key, i, t.converter !== null, n).toMutation(
      t._key,
      vn.none()
    ),
  ])
}
function ok(t, e) {
  return (function (r, i) {
    const s = new ar()
    return (
      r.asyncQueue.enqueueAndForget(async () => T4(await V4(r), i, s)),
      s.promise
    )
  })(x2(t), e)
}
function ak(t, e, n) {
  const r = n.docs.get(e._key),
    i = new ik(t)
  return new B2(
    t,
    i,
    e._key,
    r,
    new tk(n.hasPendingWrites, n.fromCache),
    e.converter
  )
}
;(function (e, n = !0) {
  ;(function (i) {
    Gi = i
  })(qi),
    Oi(
      new Fr(
        'firestore',
        (r, { instanceIdentifier: i, options: s }) => {
          const o = r.getProvider('app').getImmediate(),
            l = new Sf(
              new XA(r.getProvider('auth-internal')),
              new tR(r.getProvider('app-check-internal')),
              (function (h, f) {
                if (
                  !Object.prototype.hasOwnProperty.apply(h.options, [
                    'projectId',
                  ])
                )
                  throw new K(
                    b.INVALID_ARGUMENT,
                    '"projectId" not provided in firebase.initializeApp.'
                  )
                return new yo(h.options.projectId, f)
              })(o, i),
              o
            )
          return (
            (s = Object.assign({ useFetchStreams: n }, s)), l._setSettings(s), l
          )
        },
        'PUBLIC'
      ).setMultipleInstances(!0)
    ),
    or(wg, '4.7.1', e),
    or(wg, '4.7.1', 'esm2017')
})()
const lk = {
    apiKey: 'import.meta.env.VITE_FIREBASE_API_KEY',
    authDomain: 'cloud-storage-38b29.firebaseapp.com',
    projectId: 'cloud-storage-38b29',
    storageBucket: 'cloud-storage-38b29.appspot.com',
    messagingSenderId: '289356711473',
    appId: '1:289356711473:web:773cc00b94f67f2c64f710',
  },
  z2 = Fv(lk),
  fr = Yd(z2),
  uk = $4(z2),
  ck = () => {
    const [t, e] = V.useState(null)
    V.useEffect(() => {
      const i = qd(fr, (s) => {
        e(s)
      })
      return () => i()
    }, [])
    const n = () => {
        VC(fr)
          .then(() => {
            e(null)
          })
          .catch((i) => {
            console.error('Sign out error', i)
          })
      },
      r = (i) => i.split('@')[0]
    return g.jsx('header', {
      children: g.jsx('div', {
        className: 'container',
        children: g.jsxs('div', {
          className: 'header-sec',
          children: [
            g.jsx('div', {
              className: 'header-logo',
              children: g.jsx('a', {
                href: '/',
                className: 'logo',
                children: 'skybox',
              }),
            }),
            g.jsx('nav', {
              className: 'navbar-menu',
              children: g.jsxs('ul', {
                children: [
                  g.jsx('li', {
                    children: g.jsx(st, {
                      className: 'navbar-link',
                      to: '/',
                      children: 'Home',
                    }),
                  }),
                  g.jsx('li', {
                    children: g.jsx(st, {
                      className: 'navbar-link',
                      to: '/pricing',
                      children: 'Pricing',
                    }),
                  }),
                  g.jsx('li', {
                    children: g.jsx(st, {
                      className: 'navbar-link',
                      to: '/contact',
                      children: 'Contact',
                    }),
                  }),
                ],
              }),
            }),
            g.jsx('div', {
              className: 'header-auto',
              children: t
                ? g.jsxs('div', {
                    className: 'header-user-info',
                    children: [
                      g.jsx('span', {
                        className: 'header-user-email',
                        children: g.jsx(st, {
                          to: '/account',
                          children: r(t.email),
                        }),
                      }),
                      g.jsx('button', {
                        className: 'header-logout',
                        onClick: n,
                        children: 'Sign Out',
                      }),
                    ],
                  })
                : g.jsxs('div', {
                    children: [
                      g.jsx(st, {
                        to: '/login',
                        children: g.jsx('button', {
                          className: 'header-login',
                          children: 'Login',
                        }),
                      }),
                      g.jsx(st, {
                        to: '/registration',
                        children: g.jsx('button', {
                          className: 'header-reg',
                          children: 'Sign Up',
                        }),
                      }),
                    ],
                  }),
            }),
          ],
        }),
      }),
    })
  },
  hk = () =>
    g.jsx('section', {
      className: 'main-banner',
      children: g.jsx('div', {
        className: 'container',
        children: g.jsxs('div', {
          className: 'home-hero-section',
          children: [
            g.jsxs('h1', {
              className: 'home-title',
              children: ['Personal ', g.jsx('br', {}), 'and Business'],
            }),
            g.jsx('span', {
              className: 'home-subtitle',
              children: 'Online storage',
            }),
            g.jsx('hr', {
              style: {
                color: '#D8D8D8',
                backgroundColor: '#3B668D',
                height: 2,
                margin: '30px 0 45px',
                width: '506px',
              },
            }),
            g.jsx('span', {
              className: 'home-store-title',
              children: 'STORE AND MANAGE ALL YOUR Files!',
            }),
            g.jsx('span', {
              className: 'home-store-subtitle',
              children:
                "Upload multiple files at once and keep them forever on this site. If you're using FireFox or Chrome, you can simply drag & drop your files to begin uploading",
            }),
            g.jsx(st, {
              to: '/registration',
              children: g.jsx('button', {
                className: 'home-btn',
                children: g.jsx('span', {
                  className: 'home-btn-text',
                  children: 'Try SkyBox Now',
                }),
              }),
            }),
          ],
        }),
      }),
    }),
  Aa = ({ img: t, title: e, subtitle: n }) =>
    g.jsxs('div', {
      className: 'features-card-container',
      children: [
        g.jsxs('div', {
          className: 'card-text',
          children: [
            g.jsx('span', { className: 'card-text-title', children: e }),
            g.jsx('span', { className: 'card-text-subtitle', children: n }),
          ],
        }),
        g.jsx('div', {
          className: 'card-img',
          children: g.jsx('img', { src: t, alt: t }),
        }),
      ],
    }),
  dk = '/cloud-storage/assets/featuresCard1-C2fLXFfg.svg',
  fk =
    "data:image/svg+xml,%3csvg%20width='93'%20height='91'%20viewBox='0%200%2093%2091'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M18.4934%2025.0876C6.49372%2037.5791%20-0.00623742%2053.072%2013.9933%2066.0688C25.9938%2077.2098%2035.4937%2084.5607%2055.9936%2079.563C76.4935%2074.5653%2084.349%2064.2218%2084.349%2048.5594C84.3489%2033.584%2073.0913%2030.1997%2060.9934%2017.5914C37.4938%20-6.89968%2028.2515%2014.9295%2018.4934%2025.0876Z'%20fill='%2392C4FF'/%3e%3cpath%20d='M78.0001%2033.5001C78.0001%2064.5001%2067.0001%2070%2056.0001%2075.5641C45.0002%2081.1282%2025.5001%2088.4999%2017.5001%2075C9.72013%2061.8713%2018.475%2057.5782%2015.0001%2046.0001C10.5001%2031.0065%2016.6704%2012.2434%2031.5001%2014.5001C54.5001%2018%2078.0001%208.32138%2078.0001%2033.5001Z'%20fill='%23907AFF'/%3e%3cpath%20d='M65.783%2051.3352C65.9147%2050.37%2065.9844%2049.3856%2065.9844%2048.3848C65.9844%2042.3663%2063.5099%2036.8613%2059.4824%2032.9131C59.4568%2032.8854%2059.4304%2032.8594%2059.4023%2032.8351C56.3374%2029.8613%2052.3863%2027.7846%2047.9463%2027.057C47.588%2025.4498%2046.1558%2024.2451%2044.448%2024.2451C42.7384%2024.2451%2041.305%2025.4498%2040.9463%2027.0565C38.5796%2027.443%2036.3103%2028.2206%2034.1904%2029.3754C33.6714%2029.6582%2033.4792%2030.3098%2033.7612%2030.8302C33.9555%2031.1881%2034.323%2031.3912%2034.7028%2031.3912C34.8753%2031.3912%2035.0502%2031.3492%2035.2126%2031.2607C37.0707%2030.2486%2039.0555%2029.5579%2041.1254%2029.2012C41.6609%2030.5146%2042.9483%2031.4428%2044.448%2031.4428C45.946%2031.4428%2047.2317%2030.515%2047.7671%2029.2016C50.7267%2029.7131%2053.4412%2030.8918%2055.7638%2032.5707H51.6754C49.4725%2032.5707%2047.6803%2034.3688%2047.6803%2036.5789C47.6803%2038.7874%2049.4725%2040.5842%2051.6754%2040.5842C52.6968%2040.5842%2053.5272%2041.42%2053.5272%2042.4468C53.5272%2043.4741%2052.6968%2044.3095%2051.6754%2044.3095H51.0565C48.8552%2044.3095%2047.0643%2046.1063%2047.0643%2048.3152C47.0643%2050.5253%2048.8552%2052.3233%2051.0565%2052.3233H63.4449C61.6258%2061.1773%2053.7991%2067.8546%2044.448%2067.8546C40.188%2067.8546%2036.2449%2066.4682%2033.0415%2064.123H37.1412C39.3442%2064.123%2041.1364%2062.3253%2041.1364%2060.1148C41.1364%2057.9063%2039.3442%2056.1096%2037.1412%2056.1096C36.1198%2056.1096%2035.2894%2055.2741%2035.2894%2054.2469C35.2894%2053.2213%2036.1198%2052.3871%2037.1412%2052.3871H37.7572C39.9602%2052.3871%2041.7523%2050.5891%2041.7523%2048.379C41.7523%2046.1684%2039.9602%2044.3704%2037.7572%2044.3704H25.4574C26.0574%2041.4788%2027.3104%2038.7697%2029.1668%2036.3901C29.5306%2035.9235%2029.4483%2035.2491%2028.9826%2034.8841C28.5172%2034.519%2027.8446%2034.6017%2027.4803%2035.0687C24.4893%2038.9036%2022.9082%2043.5085%2022.9082%2048.3848C22.9082%2054.3648%2025.3411%2059.7854%2029.2654%2063.7025C29.3275%2063.7831%2029.4001%2063.8544%2029.4823%2063.9148C33.3604%2067.6796%2038.6388%2070.0001%2044.448%2070.0001C55.2783%2070.0001%2064.2652%2061.9347%2065.7632%2051.474C65.7729%2051.4287%2065.7792%2051.3826%2065.783%2051.3352ZM25.1364%2046.5163H37.7572C38.7798%2046.5163%2039.6119%2047.3517%2039.6119%2048.379C39.6119%2049.4058%2038.7798%2050.2416%2037.7572%2050.2416H37.1412C34.9399%2050.2416%2033.1489%2052.038%2033.1489%2054.2469C33.1489%2056.457%2034.9399%2058.2551%2037.1412%2058.2551C38.1638%2058.2551%2038.9959%2059.0892%2038.9959%2060.1148C38.9959%2061.1416%2038.1638%2061.9775%2037.1412%2061.9775H30.5733C27.1572%2058.4661%2025.0487%2053.6682%2025.0487%2048.3848C25.0487%2047.7562%2025.0789%2047.1331%2025.1364%2046.5163ZM44.448%2029.2969C43.649%2029.2969%2042.9995%2028.6444%2042.9995%2027.8425C42.9995%2027.0419%2043.649%2026.3906%2044.448%2026.3906C45.2448%2026.3906%2045.8931%2027.0419%2045.8931%2027.8425C45.8931%2028.6444%2045.2448%2029.2969%2044.448%2029.2969ZM51.0565%2050.1774C50.0352%2050.1774%2049.2047%2049.342%2049.2047%2048.3148C49.2047%2047.2896%2050.0352%2046.455%2051.0565%2046.455H51.6754C53.8768%2046.455%2055.6677%2044.657%2055.6677%2042.4468C55.6677%2040.2367%2053.8768%2038.4387%2051.6754%2038.4387C50.6528%2038.4387%2049.8207%2037.6045%2049.8207%2036.5789C49.8207%2035.5517%2050.6528%2034.7162%2051.6754%2034.7162H58.2559C61.7248%2038.2515%2063.8439%2043.0981%2063.8439%2048.3848C63.8439%2048.9891%2063.815%2049.587%2063.7608%2050.1774H51.0565Z'%20fill='white'/%3e%3cpath%20d='M31.0312%2033.9365C31.2368%2033.9365%2031.4449%2033.8773%2031.6287%2033.7531L31.6467%2033.7409C32.1369%2033.4099%2032.2661%2032.7431%2031.9354%2032.2517C31.6052%2031.7604%2030.9401%2031.6307%2030.45%2031.9622L30.432%2031.9744C29.9418%2032.3054%2029.8126%2032.9726%2030.1428%2033.4636C30.3497%2033.7707%2030.6871%2033.9365%2031.0312%2033.9365Z'%20fill='white'/%3e%3c/svg%3e",
  pk = '/cloud-storage/assets/featuresCard3-D4PltaI1.svg',
  mk =
    "data:image/svg+xml,%3csvg%20width='93'%20height='91'%20viewBox='0%200%2093%2091'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M18.4934%2025.0876C6.49372%2037.5791%20-0.00623742%2053.072%2013.9933%2066.0688C25.9938%2077.2098%2035.4937%2084.5607%2055.9936%2079.563C76.4935%2074.5653%2084.349%2064.2218%2084.349%2048.5594C84.3489%2033.584%2073.0913%2030.1997%2060.9934%2017.5914C37.4938%20-6.89968%2028.2515%2014.9295%2018.4934%2025.0876Z'%20fill='%2392C4FF'/%3e%3cpath%20d='M78.0001%2033.5001C78.0001%2064.5001%2067.0001%2070%2056.0001%2075.5641C45.0002%2081.1282%2025.5001%2088.4999%2017.5001%2075C9.72013%2061.8713%2018.475%2057.5782%2015.0001%2046.0001C10.5001%2031.0065%2016.6704%2012.2434%2031.5001%2014.5001C54.5001%2018%2078.0001%208.32138%2078.0001%2033.5001Z'%20fill='%23907AFF'/%3e%3cg%20clip-path='url(%23clip0_27_967)'%3e%3cpath%20d='M43.6523%2028.3906C38.4628%2028.6886%2033.5983%2030.7034%2029.7178%2034.1624L35.4723%2039.9166C36.7386%2039.467%2038.101%2039.2214%2039.5195%2039.2214C40.97%2039.2214%2042.3619%2039.4779%2043.6523%2039.9471V28.3906Z'%20fill='white'/%3e%3cpath%20d='M48.884%2043.6504L59.7695%2033.7188C55.9771%2030.5311%2051.3112%2028.6756%2046.3477%2028.3906V41.3316C47.2987%2041.9816%2048.153%2042.7632%2048.884%2043.6504Z'%20fill='white'/%3e%3cpath%20d='M22%2051.3506V52.6982H27.3906V51.3506C27.3906%2047.0939%2029.595%2043.3429%2032.9216%2041.1779L27.8121%2036.0684C24.0552%2040.2829%2022%2045.6585%2022%2051.3506Z'%20fill='white'/%3e%3cpath%20d='M60.853%2052.6983H67.9998V51.3506C67.9998%2049.3909%2067.7552%2047.4691%2067.2828%2045.6189L60.853%2052.6983Z'%20fill='white'/%3e%3cpath%20d='M44.9995%2052.7437C43.5595%2052.7437%2042.2056%2053.3045%2041.1875%2054.3226C39.086%2056.4244%2039.086%2059.8441%2041.1875%2061.946C42.2056%2062.9641%2043.5595%2063.5249%2044.9995%2063.5249C46.4391%2063.5249%2047.7931%2062.9641%2048.8112%2061.946C50.913%2059.8441%2050.913%2056.4244%2048.8112%2054.3226C47.7931%2053.3045%2046.4391%2052.7437%2044.9995%2052.7437Z'%20fill='white'/%3e%3cpath%20d='M62.2668%2035.0889L45.8247%2050.09C47.6725%2050.276%2049.3862%2051.0856%2050.717%2052.4164C52.0801%2053.7795%2052.8525%2055.5125%2053.0371%2057.2954L68%2040.8203V35.0889H62.2668Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_27_967'%3e%3crect%20width='46'%20height='46'%20fill='white'%20transform='translate(22%2023)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
  gk = () =>
    g.jsx('section', {
      className: 'features-banner',
      children: g.jsx('div', {
        className: 'container',
        children: g.jsxs('div', {
          className: 'features-card-sec',
          children: [
            g.jsx(Aa, {
              img: dk,
              title: 'SAFE AND SECURE',
              subtitle:
                'Safely store and backup all your essential files. From family photos & videos to important documents, you can rely on us to store all your media securely and forever.',
            }),
            g.jsx(Aa, {
              img: fk,
              title: 'Access from anywhere',
              subtitle:
                'Easily access your files from anywhere with desktop apps for Windows and Mac, and mobile apps for iPhone, iPad, Android, and the web.',
            }),
            g.jsx(Aa, {
              img: pk,
              title: 'STORE AND MANAGE ALL YOUR FILES!',
              subtitle:
                'Upload multiple files at once and keep them forever on this site. If you`re using FireFox or Chrome, you can simply drag & drop your files to begin uploading.',
            }),
            g.jsx(Aa, {
              img: mk,
              title: 'Any point of the globe',
              subtitle:
                'High speed from any location with internet access! Gigabit networking and high-performance server!',
            }),
          ],
        }),
      }),
    }),
  $2 = ({
    id: t,
    price: e,
    duration: n,
    features: r,
    onClick: i,
    isSelected: s,
  }) =>
    g.jsxs('div', {
      className: `price-card ${s ? 'selected' : ''} price-card-${t}`,
      onClick: () => i(t),
      children: [
        t === 2 &&
          g.jsx('span', {
            className: 'card-popular',
            children: 'Most popular',
          }),
        g.jsx('h2', { className: 'card-duration', children: n }),
        g.jsx('p', { className: 'card-price', children: e }),
        g.jsx('hr', {
          style: {
            color: '#D3D3D3',
            backgroundColor: '#D3D3D3',
            height: 1,
            margin: '80px auto 50px',
            width: '308px',
          },
        }),
        g.jsx('ul', {
          className: 'card-list',
          children: r.map((o, l) => g.jsx('li', { children: o }, l)),
        }),
        s &&
          g.jsxs(g.Fragment, {
            children: [
              g.jsx('button', {
                className: 'card-sign-btn',
                children: g.jsx(st, {
                  to: '/account',
                  className: 'card-sign-btn-text',
                  children: 'Sign Up',
                }),
              }),
              g.jsx('p', {
                className: 'card-money-back',
                children: '14-day money-back guarantee',
              }),
            ],
          }),
      ],
    }),
  H2 = [
    {
      id: 1,
      price: '$20.99',
      duration: '30 days',
      features: [
        '1 Tb Free space',
        '4 Tb Monthly space',
        '100 Mbit Speed',
        '3000 sessions',
      ],
    },
    {
      id: 2,
      price: '$46.99',
      duration: '90 days',
      features: [
        '1 Tb Free space',
        '4 Tb Monthly space',
        '100 Mbit Speed',
        '3000 sessions',
      ],
    },
    {
      id: 3,
      price: '$127.99',
      duration: '365 days',
      features: [
        '1 Tb Free space',
        '4 Tb Monthly space',
        '100 Mbit Speed',
        '3000 sessions',
      ],
    },
  ],
  yk = () => {
    const [t, e] = V.useState(2)
    return g.jsx('section', {
      className: 'price-section',
      children: g.jsxs('div', {
        className: 'container',
        children: [
          g.jsxs('div', {
            className: 'price-text',
            children: [
              g.jsx('span', {
                className: 'price-title',
                children: 'Become a PREMIUM MEMBER',
              }),
              g.jsxs('span', {
                className: 'price-subtitle',
                children: [
                  'Premium Business ',
                  g.jsx('br', {}),
                  '1 TB free space and 4 TB monthly transfer',
                ],
              }),
            ],
          }),
          g.jsx('div', {
            className: 'card-container',
            children: H2.map(({ id: n, price: r, duration: i, features: s }) =>
              g.jsx(
                $2,
                {
                  id: n,
                  price: r,
                  duration: i,
                  features: s,
                  onClick: () => e(n),
                  isSelected: t === n,
                },
                n
              )
            ),
          }),
        ],
      }),
    })
  },
  Uo = () =>
    g.jsx('section', {
      className: 'stat-section',
      children: g.jsx('div', {
        className: 'container',
        children: g.jsxs('div', {
          className: 'stat-container',
          children: [
            g.jsxs('div', {
              className: 'stat-download',
              children: [
                g.jsx('span', {
                  className: 'stat-title',
                  children: '999529 000 000',
                }),
                g.jsx('span', {
                  className: 'stat-subtitle',
                  children: 'Загружено файлов на сервис',
                }),
              ],
            }),
            g.jsxs('div', {
              className: 'stat-customers',
              children: [
                g.jsx('span', {
                  className: 'stat-title',
                  children: '235 764 784',
                }),
                g.jsx('span', {
                  className: 'stat-subtitle',
                  children: 'Зарегистрировано пользователей',
                }),
              ],
            }),
          ],
        }),
      }),
    }),
  vk = () =>
    g.jsxs(g.Fragment, {
      children: [g.jsx(hk, {}), g.jsx(gk, {}), g.jsx(yk, {}), g.jsx(Uo, {})],
    }),
  Ji = ({ textTitle: t, textSubTitle: e }) =>
    g.jsxs('div', {
      className: 'title-container',
      children: [
        g.jsx('h1', { className: 'title-title', children: t }),
        g.jsx('span', { className: 'title-subtitle', children: e }),
      ],
    }),
  _k = () =>
    g.jsxs(g.Fragment, {
      children: [
        g.jsxs('section', {
          className: 'contact-main-banner',
          children: [
            g.jsx(Ji, { textTitle: 'Contact', textSubTitle: 'Online storage' }),
            g.jsxs('div', {
              className: 'contact-map',
              children: [
                g.jsx('iframe', {
                  src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.77824573245!2d2.264634906379706!3d48.85893843461572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2sua!4v1724318719638!5m2!1sen!2sua',
                  width: '100%',
                  height: '830',
                  style: { border: '0' },
                  loading: 'lazy',
                }),
                g.jsx('div', {
                  className: 'contact-second-banner',
                  children: g.jsx('div', {
                    className: 'container',
                    children: g.jsxs('div', {
                      className: 'contact-form-container',
                      children: [
                        g.jsx('span', {
                          className: 'contact-form-title',
                          children: 'Drop us a line',
                        }),
                        g.jsx('span', {
                          className: 'contact-form-subtitle',
                          children: 'We will contact you within 24 hours.',
                        }),
                        g.jsxs('form', {
                          action: 'https://api.web3forms.com/submit',
                          method: 'POST',
                          className: 'contact-form',
                          children: [
                            g.jsx('input', {
                              type: 'hidden',
                              name: 'access_key',
                              value: '8a4bc7a6-5ba9-422d-b677-a0aac2896161',
                            }),
                            g.jsxs('div', {
                              className: 'contact-form-input',
                              children: [
                                g.jsx('span', { children: 'Email' }),
                                g.jsx('input', {
                                  type: 'email',
                                  name: 'email',
                                  placeholder: 'mail@example.com',
                                  className: 'contact-input',
                                  required: !0,
                                }),
                              ],
                            }),
                            g.jsxs('div', {
                              className: 'contact-form-input',
                              children: [
                                g.jsx('span', { children: 'Name' }),
                                g.jsx('input', {
                                  type: 'text',
                                  name: 'name',
                                  placeholder: 'John Doe',
                                  className: 'contact-input',
                                  required: !0,
                                }),
                              ],
                            }),
                            g.jsxs('div', {
                              className: 'contact-text-area',
                              children: [
                                g.jsx('textarea', {
                                  name: 'message',
                                  placeholder: 'Message',
                                  className: 'contact-input',
                                  required: !0,
                                }),
                                g.jsxs('div', {
                                  className: 'contact-btn-container',
                                  children: [
                                    g.jsx('span', {
                                      children:
                                        'We do not share your personal data.',
                                    }),
                                    g.jsx('button', {
                                      type: 'submit',
                                      className: 'contact-submit-btn',
                                      children: g.jsx('span', {
                                        children: 'Subscribe',
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
          ],
        }),
        g.jsx(Uo, {}),
      ],
    }),
  Ek = () => g.jsx('div', { children: g.jsx(_k, {}) }),
  wk = () => {
    const [t, e] = V.useState(2)
    return g.jsxs(g.Fragment, {
      children: [
        g.jsx('section', {
          className: 'price-page-banner',
          children: g.jsxs('div', {
            className: 'container',
            children: [
              g.jsx(Ji, {
                textTitle: 'tariff plans',
                textSubTitle: 'Online storage',
              }),
              g.jsx('div', {
                className: 'price-card-container',
                children: H2.map(
                  ({ id: n, price: r, duration: i, features: s }) =>
                    g.jsx(
                      $2,
                      {
                        id: n,
                        price: r,
                        duration: i,
                        features: s,
                        onClick: () => e(n),
                        isSelected: t === n,
                      },
                      n
                    )
                ),
              }),
            ],
          }),
        }),
        g.jsx(Uo, {}),
      ],
    })
  },
  Tk = () => g.jsx(g.Fragment, { children: g.jsx(wk, {}) }),
  Ik = () =>
    g.jsx('footer', {
      className: 'footer-banner',
      children: g.jsxs('div', {
        className: 'footer-main-container',
        children: [
          g.jsxs('div', {
            className: 'footer-container',
            children: [
              g.jsxs('div', {
                className: 'footer-about',
                children: [
                  g.jsx('h5', {
                    className: 'footer-menu-title',
                    children: 'About us',
                  }),
                  g.jsx('p', {
                    className: 'footer-paragpaph',
                    children:
                      'When using the SKYBOX Services You may transmit, store and or share certain data, information, files, etc. (altogether “Service Data”). For the avoidance of doubt, You retain full ownership of Your Service Data. SKYBOX doea that You or any other uss while using the Service. SKYBOX agrees that these Terms do not grant',
                  }),
                ],
              }),
              g.jsxs('div', {
                className: 'footer-about',
                children: [
                  g.jsx('h5', {
                    className: 'footer-menu-title',
                    children: 'Featured links',
                  }),
                  g.jsxs('ul', {
                    children: [
                      g.jsx('li', {
                        className: 'menu-item footer-paragpaph',
                        children: g.jsx(st, {
                          className: 'footer-link',
                          to: '/pricing',
                          children: 'Pricing',
                        }),
                      }),
                      g.jsx('li', {
                        className: 'menu-item footer-paragpaph',
                        children: g.jsx(st, {
                          className: 'footer-link',
                          to: '/contact',
                          children: 'Contact',
                        }),
                      }),
                      g.jsx('li', {
                        className: 'menu-item footer-paragpaph',
                        children: g.jsx(st, {
                          className: 'footer-link',
                          to: '/',
                          children: 'DMCA',
                        }),
                      }),
                      g.jsx('li', {
                        className: 'menu-item footer-paragpaph',
                        children: g.jsx(st, {
                          className: 'footer-link',
                          to: '/',
                          children: 'Refund Policy',
                        }),
                      }),
                      g.jsx('li', {
                        className: 'menu-item footer-paragpaph',
                        children: g.jsx(st, {
                          className: 'footer-link',
                          to: '/',
                          children: 'Privacy Policy',
                        }),
                      }),
                      g.jsx('li', {
                        className: 'menu-item footer-paragpaph',
                        children: g.jsx(st, {
                          className: 'footer-link',
                          to: '/',
                          children: 'Terms of Service',
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              g.jsxs('div', {
                className: 'footer-about',
                children: [
                  g.jsx('h5', {
                    className: 'footer-menu-title',
                    children: 'Contact us',
                  }),
                  g.jsxs('span', {
                    className: 'footer-paragpaph',
                    children: [
                      'Our office:',
                      g.jsx('br', {}),
                      'Digitalgoals LTD',
                      g.jsx('br', {}),
                      'Lapathou, 6, Strovolos 2027,',
                      g.jsx('br', {}),
                      'Lefkosia, Cyprus',
                      g.jsx('br', {}),
                      'Phone: +37 06 225 29 36',
                      g.jsx('br', {}),
                      'Email: mail@example.com',
                    ],
                  }),
                ],
              }),
            ],
          }),
          g.jsx('hr', {
            style: {
              color: '#FFFFFF',
              backgroundColor: '#FFFFFF',
              height: 1,
              margin: '65px 0 90px',
              width: '1600px',
            },
          }),
          g.jsx('div', {
            className: 'footer-under',
            children: g.jsx('span', {
              children:
                ' Copyright © 2020 - 2025 - 愛 luv - Online File Storage',
            }),
          }),
        ],
      }),
    })
function Sk() {
  const { pathname: t } = Ki()
  return (
    V.useEffect(() => {
      window.scrollTo(0, 0)
    }, [t]),
    null
  )
}
const Ck = () => {
    const [t, e] = V.useState(''),
      [n, r] = V.useState(''),
      [i, s] = V.useState(''),
      [o, l] = V.useState(''),
      [u, h] = V.useState(!1),
      f = tu()
    function p(A) {
      if ((A.preventDefault(), i !== n)) {
        l('Password didn`t match')
        return
      }
      PC(fr, t, n)
        .then((P) => {
          console.log(P), l(''), e(''), r(''), s(''), f('/login')
        })
        .catch((P) => {
          console.log(P)
        })
    }
    const v = () => t !== '' && n !== '' && i !== '' && u
    return g.jsxs(g.Fragment, {
      children: [
        g.jsx('section', {
          className: 'reg-page-banner',
          children: g.jsxs('div', {
            className: 'container',
            children: [
              g.jsx(Ji, {
                textTitle: 'Register',
                textSubTitle: 'Online storage',
              }),
              g.jsx('div', {
                className: 'register-form-container',
                children: g.jsxs('form', {
                  onSubmit: p,
                  className: 'register-form',
                  children: [
                    g.jsxs('div', {
                      className: 'register-form-container-input-solo',
                      children: [
                        g.jsx('label', {
                          className: 'email-label',
                          children: 'Email ',
                        }),
                        g.jsx('input', {
                          className: 'register-form-input',
                          placeholder: 'email',
                          value: t,
                          onChange: (A) => e(A.target.value),
                          type: 'email',
                        }),
                      ],
                    }),
                    g.jsxs('div', {
                      className: 'register-form-container-input-solo',
                      children: [
                        g.jsx('label', {
                          className: 'password-label',
                          children: 'Pass',
                        }),
                        g.jsx('input', {
                          className: 'register-form-input',
                          placeholder: 'password',
                          value: n,
                          onChange: (A) => r(A.target.value),
                          type: 'password',
                        }),
                      ],
                    }),
                    g.jsxs('div', {
                      className: 'register-form-container-input-solo',
                      children: [
                        g.jsx('label', { children: 're-Pass' }),
                        g.jsx('input', {
                          className: 'register-form-input',
                          placeholder: 're-Password',
                          value: i,
                          onChange: (A) => s(A.target.value),
                          type: 'password',
                        }),
                      ],
                    }),
                    g.jsxs('div', {
                      className: 'btn-reg-sec',
                      children: [
                        g.jsxs('label', {
                          className: 'custom-checkbox',
                          children: [
                            g.jsx('input', {
                              type: 'checkbox',
                              onChange: (A) => h(A.target.checked),
                            }),
                            g.jsx('span', { className: 'checkmark' }),
                            g.jsx('span', {
                              className: 'checkmark-text',
                              children: 'I agree with terms',
                            }),
                          ],
                        }),
                        g.jsx('button', {
                          className: 'reg-create-btn',
                          disabled: !v(),
                          style: {
                            cursor: u && v() ? 'pointer' : 'not-allowed',
                          },
                          children: 'Register',
                        }),
                      ],
                    }),
                    o
                      ? g.jsx('p', { style: { color: 'red' }, children: o })
                      : '',
                  ],
                }),
              }),
            ],
          }),
        }),
        g.jsx(Uo, {}),
      ],
    })
  },
  Ak = () => g.jsx(g.Fragment, { children: g.jsx(Ck, {}) }),
  Rk = () => {
    const [t, e] = V.useState(''),
      [n, r] = V.useState(''),
      [i, s] = V.useState(''),
      o = tu()
    function l(u) {
      u.preventDefault(),
        kC(fr, t, n)
          .then((h) => {
            console.log(h), s(''), e(''), r(''), o('/account')
          })
          .catch((h) => {
            console.log(h), s('Sorry, couldn`t find your account!')
          })
    }
    return g.jsxs(g.Fragment, {
      children: [
        g.jsx('section', {
          className: 'login-page-banner',
          children: g.jsxs('div', {
            className: 'container',
            children: [
              g.jsx(Ji, { textTitle: 'Login', textSubTitle: 'Online storage' }),
              g.jsx('div', {
                className: 'login-form-container',
                children: g.jsxs('form', {
                  onSubmit: l,
                  className: 'login-form',
                  children: [
                    g.jsxs('div', {
                      className: 'login-form-container-input-solo',
                      children: [
                        g.jsx('label', {
                          className: 'email-label',
                          children: 'Email ',
                        }),
                        g.jsx('input', {
                          className: 'login-form-input',
                          placeholder: 'email',
                          value: t,
                          onChange: (u) => e(u.target.value),
                          type: 'email',
                        }),
                      ],
                    }),
                    g.jsxs('div', {
                      className: 'login-form-container-input-solo',
                      children: [
                        g.jsx('label', {
                          className: 'password-label',
                          children: 'Pass',
                        }),
                        g.jsx('input', {
                          className: 'login-form-input',
                          placeholder: 'password',
                          value: n,
                          onChange: (u) => r(u.target.value),
                          type: 'password',
                        }),
                      ],
                    }),
                    g.jsx('button', {
                      className: 'login-btn',
                      children: 'Login',
                    }),
                    i
                      ? g.jsx('p', { style: { color: 'red' }, children: i })
                      : '',
                  ],
                }),
              }),
            ],
          }),
        }),
        g.jsx(Uo, {}),
      ],
    })
  },
  Pk = () => g.jsx(g.Fragment, { children: g.jsx(Rk, {}) }),
  n0 =
    "data:image/svg+xml,%3csvg%20width='115'%20height='124'%20viewBox='0%200%20115%20124'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20opacity='0.253397'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M20.3638%2088.6175C20.3638%2088.6175%2020.935%2085.4624%2023.1812%2092.8817C25.4274%20100.301%2050.8263%20116.539%2059.3284%20103.388C67.8304%2090.2376%2079.8505%20104.995%2088.1538%20101.048C96.457%2097.101%2097.7722%2091.8921%2091.5832%2079.3411C85.3942%2066.7901%20100.618%2051.4962%2085.4426%2041.6637C70.2669%2031.8313%2082.0153%2034.2468%2082.0153%2034.2468L81.938%2074.3895L61.6239%2092.8064L20.3638%2088.6175Z'%20fill='url(%23paint0_linear_53_2362)'/%3e%3cpath%20opacity='0.518059'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M80.5934%2049.5454C80.5934%2049.5454%2078.8289%2049.4428%2082.7364%2047.6925C86.6439%2045.9422%2093.8162%2030.7459%2086.049%2026.9215C78.2817%2023.0972%2085.5449%2015.4251%2082.8263%2011.0859C80.1077%206.74669%2077.1695%206.37071%2070.7202%2010.6574C64.2709%2014.944%2051.8289%203.49477%2047.4724%2012.5833C43.1158%2021.6718%2050.5159%2010.6373%2050.5159%2010.6373L68.6612%2016.3456L80.1052%2026.3665L80.5934%2049.5454Z'%20fill='url(%23paint1_linear_53_2362)'/%3e%3ccircle%20cx='44.8541'%20cy='53.824'%20r='39.8541'%20stroke='url(%23paint2_linear_53_2362)'%20stroke-width='10'%20stroke-linecap='round'/%3e%3cpath%20d='M57.5155%2066.2051H56.08H32.7715H31.3359H29.9004V70.0121H58.9511V66.2051H57.5155Z'%20fill='%237A00F4'/%3e%3cpath%20d='M33.2864%2042.572L31.2891%2047.4424L32.5791%2048.0778L33.8702%2048.7133L35.4455%2049.4885L36.6159%2047.8166L37.4428%2046.6356L38.2687%2045.4556L33.2864%2042.572Z'%20fill='%237A00F4'/%3e%3cpath%20d='M55.7138%2042.572L50.6367%2045.5101L51.4636%2046.6901L52.2895%2047.8711L53.4217%2049.4885L55.108%2048.6587L56.398%2048.0233L57.6891%2047.3878L55.7138%2042.572Z'%20fill='%237A00F4'/%3e%3cpath%20d='M64.9518%2042.2315C62.8817%2042.2315%2061.1705%2043.7914%2060.9322%2045.7983C60.9131%2045.9562%2060.9035%2046.117%2060.9035%2046.2797C60.9035%2046.6453%2060.9523%2047.0003%2061.0442%2047.3372C61.1715%2047.809%2061.383%2048.2474%2061.6605%2048.634L58.7818%2050.0514L57.4907%2050.6868L57.33%2050.7663H57.329L56.1997%2051.3213L52.4816%2053.1521L49.7953%2049.3154L49.0727%2048.2828V48.2818L48.9684%2048.1335L48.1425%2046.9534L45.3652%2042.9856C45.8513%2042.8727%2046.305%2042.6717%2046.7069%2042.3999C47.1117%2042.1281%2047.4649%2041.7826%2047.7482%2041.3845C48.219%2040.7232%2048.4966%2039.9145%2048.4966%2039.0426C48.4966%2036.8099%2046.6811%2034.9944%2044.4483%2034.9944C42.2165%2034.9944%2040.4001%2036.8099%2040.4001%2039.0426C40.4001%2039.9059%2040.6719%2040.7069%2041.1341%2041.3644C41.4155%2041.7644%2041.7667%2042.1118%2042.1696%2042.3865C42.5697%2042.6602%2043.0214%2042.8641%2043.5066%2042.9799L40.7628%2046.8989L39.9369%2048.0789L39.7598%2048.3325L39.11%2049.2608L36.3863%2053.1521L32.7773%2051.3759L31.5887%2050.7902L31.4872%2050.7404L30.1962%2050.105L27.0629%2048.5632C27.3835%2048.2052%2027.6419%2047.7899%2027.8199%2047.3353C27.9979%2046.8807%2028.0955%2046.3869%2028.0965%2045.871V45.8634C28.0965%2043.6306%2026.281%2041.8142%2024.0482%2041.8142C21.8164%2041.8142%2020%2043.6306%2020%2045.8634C20%2047.9105%2021.5284%2049.6092%2023.5046%2049.8753C23.6827%2049.8992%2023.8635%2049.9116%2024.0482%2049.9116C24.3755%2049.9116%2024.6933%2049.8724%2024.9986%2049.7987C25.4761%2049.6839%2025.9212%2049.4838%2026.3164%2049.2159L30.8259%2061.8984L31.336%2063.334H57.5309L58.041%2061.8984L62.4616%2049.4685C62.8415%2049.7662%2063.275%2049.9968%2063.7459%2050.1442C64.1268%2050.2638%2064.5316%2050.3279%2064.9518%2050.3279C65.0379%2050.3279%2065.1231%2050.3251%2065.2073%2050.3193C67.3204%2050.1873%2069%2048.4254%2069%2046.2797C69%2044.0469%2067.1836%2042.2315%2064.9518%2042.2315Z'%20fill='%23A078FA'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_53_2362'%20x1='23.4264'%20y1='50.5368'%20x2='142.437'%20y2='94.539'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FD749B'/%3e%3cstop%20offset='1'%20stop-color='%23281AC8'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_53_2362'%20x1='58.7716'%20y1='50.2216'%20x2='75.3656'%20y2='-18.6755'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23BB6DF3'/%3e%3cstop%20offset='1'%20stop-color='%237A00F4'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint2_linear_53_2362'%20x1='106.5'%20y1='-10.0007'%20x2='30.1228'%20y2='107.527'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23907EFF'/%3e%3cstop%20offset='1'%20stop-color='%23BB6DF3'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",
  r0 = '/cloud-storage/assets/calendar-DU35tpHN.svg',
  i0 = '/cloud-storage/assets/storage-bxUPcAUW.svg',
  kk = [
    {
      id: 1,
      accountType: 'VIP 90 days',
      duration: 'left 30 days',
      features: '200 000 GB',
    },
    {
      id: 2,
      accountType: 'Default',
      duration: 'left 90 days',
      features: '20 GB',
    },
    {
      id: 3,
      accountType: 'Medium',
      duration: 'left 365 days',
      features: '20 000 GB',
    },
  ],
  Sc = kk.find((t) => t.id === 1),
  xk = () => {
    const [t, e] = V.useState(''),
      [n, r] = V.useState(''),
      [i, s] = V.useState(!1),
      o = Yd(),
      l = { url: 'http://localhost:5173/verify-email', handleCodeInApp: !0 },
      u = async (h) => {
        h.preventDefault()
        try {
          const f = B4(uk, 'users', t),
            p = await rk(f)
          if (p.exists() && p.data().emailSent) {
            r('Запрос на подтверждение уже был отправлен на этот email.')
            return
          }
          await xC(o, t, l),
            window.localStorage.setItem('emailForSignIn', t),
            await sk(f, { emailSent: !0 }, { merge: !0 }),
            r('Подтверждение отправлено на ваш email. Проверьте почту!')
        } catch (f) {
          r(`Ошибка: ${f.message}`)
        }
      }
    return (
      V.useEffect(() => {
        ;(async () => {
          const f = o.currentUser
          f && (await f.reload(), s(f.emailVerified))
        })()
      }, []),
      g.jsx('section', {
        className: 'user-page-main-banner',
        children: g.jsxs('div', {
          className: 'container',
          children: [
            g.jsx(Ji, { textTitle: 'profile', textSubTitle: 'Online storage' }),
            g.jsxs('div', {
              className: 'account-type',
              children: [
                g.jsxs('div', {
                  className: 'account-status',
                  children: [
                    g.jsx('img', { src: n0, alt: n0 }),
                    g.jsxs('div', {
                      className: 'account-status_text',
                      children: [
                        g.jsx('span', {
                          className: 'account-status_title',
                          children: 'Account type:',
                        }),
                        g.jsx('span', {
                          className: 'account-status_subtitle',
                          children: Sc.accountType,
                        }),
                      ],
                    }),
                  ],
                }),
                g.jsxs('div', {
                  className: 'account-status',
                  children: [
                    g.jsx('img', { src: r0, alt: r0 }),
                    g.jsx('div', {
                      className: 'account-status_text',
                      children: g.jsx('span', {
                        className: 'account-status_subtitle',
                        children: Sc.duration,
                      }),
                    }),
                  ],
                }),
                g.jsxs('div', {
                  className: 'account-status',
                  children: [
                    g.jsx('img', { src: i0, alt: i0 }),
                    g.jsxs('div', {
                      className: 'account-status_text',
                      children: [
                        g.jsx('span', {
                          className: 'account-status_title',
                          children: 'File stored total:',
                        }),
                        g.jsx('span', {
                          className: 'account-status_subtitle',
                          children: Sc.features,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            i
              ? g.jsxs('div', {
                  className: 'verified-message',
                  children: [
                    g.jsx('h2', { children: 'Ваш email успешно подтвержден!' }),
                    g.jsx(st, {
                      className: 'files-link',
                      to: '/user-files',
                      children: 'My files',
                    }),
                  ],
                })
              : g.jsxs('div', {
                  className: 'verify-email-form',
                  children: [
                    g.jsx('h2', {
                      className: 'verify-email-sec',
                      children: 'Введите ваш email для подтверждения',
                    }),
                    g.jsxs('form', {
                      onSubmit: u,
                      className: 'verify-email-form_form',
                      children: [
                        g.jsxs('div', {
                          className: 'input-container',
                          children: [
                            g.jsx('input', {
                              className: 'verify-email-form_input',
                              type: 'email',
                              value: t,
                              onChange: (h) => e(h.target.value),
                              placeholder: 'Введите email',
                              required: !0,
                            }),
                            g.jsx('button', {
                              type: 'submit',
                              className: 'verify-email-form_btn',
                              children: 'Отправить подтверждение',
                            }),
                          ],
                        }),
                        g.jsx('p', {
                          className: 'verify-message-error',
                          children: n,
                        }) &&
                          g.jsx('p', {
                            className: 'verify-message',
                            children: n,
                          }),
                      ],
                    }),
                  ],
                }),
          ],
        }),
      })
    )
  },
  Nk = () => g.jsx(g.Fragment, { children: g.jsx(xk, {}) })
var Dk = {
  cm: !0,
  mm: !0,
  in: !0,
  px: !0,
  pt: !0,
  pc: !0,
  em: !0,
  ex: !0,
  ch: !0,
  rem: !0,
  vw: !0,
  vh: !0,
  vmin: !0,
  vmax: !0,
  '%': !0,
}
function W2(t) {
  if (typeof t == 'number') return { value: t, unit: 'px' }
  var e,
    n = (t.match(/^[0-9.]*/) || '').toString()
  n.includes('.') ? (e = parseFloat(n)) : (e = parseInt(n, 10))
  var r = (t.match(/[^0-9]*$/) || '').toString()
  return Dk[r]
    ? { value: e, unit: r }
    : (console.warn(
        'React Spinners: '
          .concat(t, ' is not a valid css value. Defaulting to ')
          .concat(e, 'px.')
      ),
      { value: e, unit: 'px' })
}
function Ra(t) {
  var e = W2(t)
  return ''.concat(e.value).concat(e.unit)
}
var Ok = function (t, e, n) {
    var r = 'react-spinners-'.concat(t, '-').concat(n)
    if (typeof window > 'u' || !window.document) return r
    var i = document.createElement('style')
    document.head.appendChild(i)
    var s = i.sheet,
      o = `
    @keyframes `
        .concat(
          r,
          ` {
      `
        )
        .concat(
          e,
          `
    }
  `
        )
    return s && s.insertRule(o, 0), r
  },
  Re = function () {
    return (
      (Re =
        Object.assign ||
        function (t) {
          for (var e, n = 1, r = arguments.length; n < r; n++) {
            e = arguments[n]
            for (var i in e)
              Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
          }
          return t
        }),
      Re.apply(this, arguments)
    )
  },
  Lk = function (t, e) {
    var n = {}
    for (var r in t)
      Object.prototype.hasOwnProperty.call(t, r) &&
        e.indexOf(r) < 0 &&
        (n[r] = t[r])
    if (t != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++)
        e.indexOf(r[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
          (n[r[i]] = t[r[i]])
    return n
  },
  Vk = Ok('FadeLoader', '50% {opacity: 0.3} 100% {opacity: 1}', 'fade')
function Mk(t) {
  var e = t.loading,
    n = e === void 0 ? !0 : e,
    r = t.color,
    i = r === void 0 ? '#000000' : r,
    s = t.speedMultiplier,
    o = s === void 0 ? 1 : s,
    l = t.cssOverride,
    u = l === void 0 ? {} : l,
    h = t.height,
    f = h === void 0 ? 15 : h,
    p = t.width,
    v = p === void 0 ? 5 : p,
    A = t.radius,
    P = A === void 0 ? 2 : A,
    N = t.margin,
    D = N === void 0 ? 2 : N,
    C = Lk(t, [
      'loading',
      'color',
      'speedMultiplier',
      'cssOverride',
      'height',
      'width',
      'radius',
      'margin',
    ]),
    _ = W2(D).value,
    S = _ + 18,
    L = S / 2 + S / 5.5,
    U = Re(
      {
        display: 'inherit',
        position: 'relative',
        fontSize: '0',
        top: S,
        left: S,
        width: ''.concat(S * 3, 'px'),
        height: ''.concat(S * 3, 'px'),
      },
      u
    ),
    j = function (tn) {
      return {
        position: 'absolute',
        width: Ra(v),
        height: Ra(f),
        margin: Ra(D),
        backgroundColor: i,
        borderRadius: Ra(P),
        transition: '2s',
        animationFillMode: 'both',
        animation: ''
          .concat(Vk, ' ')
          .concat(1.2 / o, 's ')
          .concat(tn * 0.12, 's infinite ease-in-out'),
      }
    },
    w = Re(Re({}, j(1)), { top: ''.concat(S, 'px'), left: '0' }),
    y = Re(Re({}, j(2)), {
      top: ''.concat(L, 'px'),
      left: ''.concat(L, 'px'),
      transform: 'rotate(-45deg)',
    }),
    E = Re(Re({}, j(3)), {
      top: '0',
      left: ''.concat(S, 'px'),
      transform: 'rotate(90deg)',
    }),
    T = Re(Re({}, j(4)), {
      top: ''.concat(-1 * L, 'px'),
      left: ''.concat(L, 'px'),
      transform: 'rotate(45deg)',
    }),
    R = Re(Re({}, j(5)), { top: ''.concat(-1 * S, 'px'), left: '0' }),
    k = Re(Re({}, j(6)), {
      top: ''.concat(-1 * L, 'px'),
      left: ''.concat(-1 * L, 'px'),
      transform: 'rotate(-45deg)',
    }),
    I = Re(Re({}, j(7)), {
      top: '0',
      left: ''.concat(-1 * S, 'px'),
      transform: 'rotate(90deg)',
    }),
    ut = Re(Re({}, j(8)), {
      top: ''.concat(L, 'px'),
      left: ''.concat(-1 * L, 'px'),
      transform: 'rotate(45deg)',
    })
  return n
    ? V.createElement(
        'span',
        Re({ style: U }, C),
        V.createElement('span', { style: w }),
        V.createElement('span', { style: y }),
        V.createElement('span', { style: E }),
        V.createElement('span', { style: T }),
        V.createElement('span', { style: R }),
        V.createElement('span', { style: k }),
        V.createElement('span', { style: I }),
        V.createElement('span', { style: ut })
      )
    : null
}
const K2 = ({ loading: t }) =>
    g.jsx('div', {
      className: 'loader',
      children: g.jsx(Mk, {
        color: '#6db2f3',
        loading: t,
        size: 250,
        'aria-label': 'Loading Spinner',
        'data-testid': 'loader',
      }),
    }),
  bk = () => {
    const [t, e] = V.useState(null),
      [n, r] = V.useState(!0)
    return (
      V.useEffect(() => {
        const i = qd(fr, (s) => {
          e(s), r(!1)
        })
        return () => i()
      }, []),
      n ? g.jsx(K2, {}) : t ? g.jsx(kv, {}) : g.jsx(Pv, { to: '/login' })
    )
  },
  Fk = () => {
    const [t, e] = V.useState(null),
      [n, r] = V.useState(!0)
    return (
      V.useEffect(() => {
        const i = qd(fr, (s) => {
          e(s), r(!1)
        })
        return () => i()
      }, []),
      n ? g.jsx(K2, {}) : t ? g.jsx(Pv, { to: '/account' }) : g.jsx(kv, {})
    )
  },
  jk = () => {
    const [t, e] = V.useState(''),
      n = Yd()
    return (
      V.useEffect(() => {
        if (NC(n, window.location.href)) {
          let r = window.localStorage.getItem('emailForSignIn')
          r ||
            (r = window.prompt(
              'Введите ваш email для завершения подтверждения:'
            )),
            DC(n, r, window.location.href)
              .then((i) => {
                e('Ваш email успешно подтвержден!'),
                  window.localStorage.removeItem('emailForSignIn')
              })
              .catch((i) => {
                e(`Ошибка: ${i.message}`)
              })
        }
      }, [n]),
      g.jsx('section', {
        className: 'verification-banner',
        children: g.jsxs('div', {
          className: 'container',
          children: [
            g.jsx('h2', {
              className: 'emailverification-verify',
              children: 'Подтверждение email',
            }),
            t
              ? g.jsx('p', {
                  className: 'emailverification-verify-done',
                  children: t,
                })
              : g.jsx('p', { children: 'Загрузка...' }),
          ],
        }),
      })
    )
  },
  Uk = () => g.jsx(g.Fragment, { children: g.jsx(jk, {}) }),
  s0 =
    "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_59_1891)'%3e%3cpath%20d='M16%202L21%207V21.008C20.9997%2021.2712%2020.895%2021.5235%2020.7088%2021.7095C20.5226%2021.8955%2020.2702%2022%2020.007%2022H3.993C3.73038%2021.9982%203.47902%2021.8931%203.29322%2021.7075C3.10742%2021.5219%203.00209%2021.2706%203%2021.008V2.992C3%202.444%203.445%202%203.993%202H16ZM13%2012V8H11V12H8L12%2016L16%2012H13Z'%20fill='%2303053D'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_59_1891'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
  Bk = () => {
    const [t, e] = V.useState([]),
      [n, r] = V.useState(!1)
    V.useEffect(() => {
      i()
    }, [])
    const i = () => {
        const o = fr.currentUser
        o &&
          fetch('http://localhost:5000/files', {
            headers: { 'user-id': o.uid },
          })
            .then((l) => l.json())
            .then((l) => e(l))
            .catch((l) => console.error('Error fetching files:', l))
      },
      s = (o) => {
        const l = Array.from(o.target.files),
          u = new FormData(),
          h = fr.currentUser
        l.forEach((f) => {
          u.append('files', f)
        }),
          r(!0),
          fetch('http://localhost:5000/upload', {
            method: 'POST',
            body: u,
            headers: { 'user-id': h.uid },
          })
            .then((f) => {
              if (f.ok) return i()
              throw new Error('File upload failed')
            })
            .catch((f) => console.error('Error uploading files:', f))
            .finally(() => r(!1))
      }
    return g.jsx('section', {
      className: 'storage-banner',
      children: g.jsxs('div', {
        className: 'container',
        children: [
          g.jsx(Ji, { textTitle: 'My files', textSubTitle: 'Online storage' }),
          g.jsxs('div', {
            className: 'download-area',
            children: [
              g.jsxs('div', {
                className: 'input-file',
                children: [
                  g.jsx('input', {
                    type: 'file',
                    accept: 'image/*,.pdf',
                    id: 'uploadBtn',
                    onChange: s,
                    disabled: n,
                  }),
                  g.jsx('label', {
                    className: 'uploadBtn-label',
                    htmlFor: 'uploadBtn',
                    children: 'Upload File',
                  }),
                ],
              }),
              n && g.jsx('p', { children: 'Uploading...' }),
              g.jsx('div', {
                className: 'filestorage-table',
                children: g.jsxs('table', {
                  children: [
                    g.jsx('thead', {
                      children: g.jsxs('tr', {
                        className: 'bordrad',
                        children: [
                          g.jsx('th', { children: 'File Name' }),
                          g.jsx('th', { children: 'Download' }),
                        ],
                      }),
                    }),
                    g.jsx('tbody', {
                      children:
                        t.length > 0
                          ? t.map((o, l) =>
                              g.jsxs(
                                'tr',
                                {
                                  className: 'bordrad',
                                  children: [
                                    g.jsx('td', {
                                      className: 'uploaded-file',
                                      children: o,
                                    }),
                                    g.jsx('td', {
                                      children: g.jsx('a', {
                                        className: 'download-btn-file',
                                        href: `http://localhost:5000/download/${o}`,
                                        download: !0,
                                        children: g.jsx('img', {
                                          src: s0,
                                          alt: s0,
                                        }),
                                      }),
                                    }),
                                  ],
                                },
                                l
                              )
                            )
                          : g.jsx('tr', {
                              className: 'bordrad',
                              children: g.jsx('td', {
                                colSpan: '2',
                                children: 'No files found',
                              }),
                            }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
    })
  },
  zk = () => g.jsx(g.Fragment, { children: g.jsx(Bk, {}) }),
  $k = () =>
    g.jsxs(YT, {
      children: [
        g.jsx(Sk, {}),
        g.jsx(ck, {}),
        g.jsxs($T, {
          children: [
            g.jsx(Ot, { path: '/', element: g.jsx(vk, {}) }),
            g.jsx(Ot, { path: '/contact', element: g.jsx(Ek, {}) }),
            g.jsx(Ot, { path: '/pricing', element: g.jsx(Tk, {}) }),
            g.jsxs(Ot, {
              element: g.jsx(Fk, {}),
              children: [
                g.jsx(Ot, { path: '/registration', element: g.jsx(Ak, {}) }),
                g.jsx(Ot, { path: '/login', element: g.jsx(Pk, {}) }),
              ],
            }),
            g.jsxs(Ot, {
              element: g.jsx(bk, {}),
              children: [
                g.jsx(Ot, { path: '/account', element: g.jsx(Nk, {}) }),
                g.jsx(Ot, { path: '/verify-email', element: g.jsx(Uk, {}) }),
                g.jsx(Ot, { path: '/user-files', element: g.jsx(zk, {}) }),
              ],
            }),
          ],
        }),
        g.jsx(Ik, {}),
      ],
    })
vv(document.getElementById('root')).render(g.jsx($k, {}))
