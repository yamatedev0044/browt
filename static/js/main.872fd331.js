/*! For license information please see main.872fd331.js.LICENSE.txt */
(() => {
  var e = {
      4(e, t, n) {
        "use strict";
        var r = n(853),
          a = n(43),
          i = n(950);
        function o(e) {
          var t = "https://react.dev/errors/" + e;
          if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var n = 2; n < arguments.length; n++)
              t += "&args[]=" + encodeURIComponent(arguments[n]);
          }
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        function s(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function l(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function u(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function c(e) {
          if (31 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function d(e) {
          if (l(e) !== e) throw Error(o(188));
        }
        function f(e) {
          var t = e.tag;
          if (5 === t || 26 === t || 27 === t || 6 === t) return e;
          for (e = e.child; null !== e; ) {
            if (null !== (t = f(e))) return t;
            e = e.sibling;
          }
          return null;
        }
        var h = Object.assign,
          p = Symbol.for("react.element"),
          m = Symbol.for("react.transitional.element"),
          g = Symbol.for("react.portal"),
          v = Symbol.for("react.fragment"),
          y = Symbol.for("react.strict_mode"),
          b = Symbol.for("react.profiler"),
          w = Symbol.for("react.consumer"),
          x = Symbol.for("react.context"),
          S = Symbol.for("react.forward_ref"),
          k = Symbol.for("react.suspense"),
          E = Symbol.for("react.suspense_list"),
          T = Symbol.for("react.memo"),
          C = Symbol.for("react.lazy");
        Symbol.for("react.scope");
        var P = Symbol.for("react.activity");
        Symbol.for("react.legacy_hidden"), Symbol.for("react.tracing_marker");
        var F = Symbol.for("react.memo_cache_sentinel");
        Symbol.for("react.view_transition");
        var A = Symbol.iterator;
        function N(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (A && e[A]) || e["@@iterator"])
            ? e
            : null;
        }
        var D = Symbol.for("react.client.reference");
        function M(e) {
          if (null == e) return null;
          if ("function" === typeof e)
            return e.$$typeof === D ? null : e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case v:
              return "Fragment";
            case b:
              return "Profiler";
            case y:
              return "StrictMode";
            case k:
              return "Suspense";
            case E:
              return "SuspenseList";
            case P:
              return "Activity";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case g:
                return "Portal";
              case x:
                return e.displayName || "Context";
              case w:
                return (e._context.displayName || "Context") + ".Consumer";
              case S:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case T:
                return null !== (t = e.displayName || null)
                  ? t
                  : M(e.type) || "Memo";
              case C:
                (t = e._payload), (e = e._init);
                try {
                  return M(e(t));
                } catch (n) {}
            }
          return null;
        }
        var L = Array.isArray,
          j = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
          z = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
          R = { pending: !1, data: null, method: null, action: null },
          O = [],
          _ = -1;
        function V(e) {
          return { current: e };
        }
        function B(e) {
          0 > _ || ((e.current = O[_]), (O[_] = null), _--);
        }
        function I(e, t) {
          _++, (O[_] = e.current), (e.current = t);
        }
        var U,
          H,
          W = V(null),
          $ = V(null),
          Y = V(null),
          q = V(null);
        function X(e, t) {
          switch ((I(Y, t), I($, e), I(W, null), t.nodeType)) {
            case 9:
            case 11:
              e = (e = t.documentElement) && (e = e.namespaceURI) ? vd(e) : 0;
              break;
            default:
              if (((e = t.tagName), (t = t.namespaceURI)))
                e = yd((t = vd(t)), e);
              else
                switch (e) {
                  case "svg":
                    e = 1;
                    break;
                  case "math":
                    e = 2;
                    break;
                  default:
                    e = 0;
                }
          }
          B(W), I(W, e);
        }
        function K() {
          B(W), B($), B(Y);
        }
        function Q(e) {
          null !== e.memoizedState && I(q, e);
          var t = W.current,
            n = yd(t, e.type);
          t !== n && (I($, e), I(W, n));
        }
        function G(e) {
          $.current === e && (B(W), B($)),
            q.current === e && (B(q), (df._currentValue = R));
        }
        function Z(e) {
          if (void 0 === U)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              (U = (t && t[1]) || ""),
                (H =
                  -1 < n.stack.indexOf("\n    at")
                    ? " (<anonymous>)"
                    : -1 < n.stack.indexOf("@")
                    ? "@unknown:0:0"
                    : "");
            }
          return "\n" + U + e + H;
        }
        var J = !1;
        function ee(e, t) {
          if (!e || J) return "";
          J = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            var r = {
              DetermineComponentFrameRoot: function () {
                try {
                  if (t) {
                    var n = function () {
                      throw Error();
                    };
                    if (
                      (Object.defineProperty(n.prototype, "props", {
                        set: function () {
                          throw Error();
                        },
                      }),
                      "object" === typeof Reflect && Reflect.construct)
                    ) {
                      try {
                        Reflect.construct(n, []);
                      } catch (a) {
                        var r = a;
                      }
                      Reflect.construct(e, [], n);
                    } else {
                      try {
                        n.call();
                      } catch (i) {
                        r = i;
                      }
                      e.call(n.prototype);
                    }
                  } else {
                    try {
                      throw Error();
                    } catch (o) {
                      r = o;
                    }
                    (n = e()) &&
                      "function" === typeof n.catch &&
                      n.catch(function () {});
                  }
                } catch (s) {
                  if (s && r && "string" === typeof s.stack)
                    return [s.stack, r.stack];
                }
                return [null, null];
              },
            };
            r.DetermineComponentFrameRoot.displayName =
              "DetermineComponentFrameRoot";
            var a = Object.getOwnPropertyDescriptor(
              r.DetermineComponentFrameRoot,
              "name"
            );
            a &&
              a.configurable &&
              Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot",
              });
            var i = r.DetermineComponentFrameRoot(),
              o = i[0],
              s = i[1];
            if (o && s) {
              var l = o.split("\n"),
                u = s.split("\n");
              for (
                a = r = 0;
                r < l.length && !l[r].includes("DetermineComponentFrameRoot");

              )
                r++;
              for (
                ;
                a < u.length && !u[a].includes("DetermineComponentFrameRoot");

              )
                a++;
              if (r === l.length || a === u.length)
                for (
                  r = l.length - 1, a = u.length - 1;
                  1 <= r && 0 <= a && l[r] !== u[a];

                )
                  a--;
              for (; 1 <= r && 0 <= a; r--, a--)
                if (l[r] !== u[a]) {
                  if (1 !== r || 1 !== a)
                    do {
                      if ((r--, 0 > --a || l[r] !== u[a])) {
                        var c = "\n" + l[r].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            c.includes("<anonymous>") &&
                            (c = c.replace("<anonymous>", e.displayName)),
                          c
                        );
                      }
                    } while (1 <= r && 0 <= a);
                  break;
                }
            }
          } finally {
            (J = !1), (Error.prepareStackTrace = n);
          }
          return (n = e ? e.displayName || e.name : "") ? Z(n) : "";
        }
        function te(e, t) {
          switch (e.tag) {
            case 26:
            case 27:
            case 5:
              return Z(e.type);
            case 16:
              return Z("Lazy");
            case 13:
              return e.child !== t && null !== t
                ? Z("Suspense Fallback")
                : Z("Suspense");
            case 19:
              return Z("SuspenseList");
            case 0:
            case 15:
              return ee(e.type, !1);
            case 11:
              return ee(e.type.render, !1);
            case 1:
              return ee(e.type, !0);
            case 31:
              return Z("Activity");
            default:
              return "";
          }
        }
        function ne(e) {
          try {
            var t = "",
              n = null;
            do {
              (t += te(e, n)), (n = e), (e = e.return);
            } while (e);
            return t;
          } catch (r) {
            return "\nError generating stack: " + r.message + "\n" + r.stack;
          }
        }
        var re = Object.prototype.hasOwnProperty,
          ae = r.unstable_scheduleCallback,
          ie = r.unstable_cancelCallback,
          oe = r.unstable_shouldYield,
          se = r.unstable_requestPaint,
          le = r.unstable_now,
          ue = r.unstable_getCurrentPriorityLevel,
          ce = r.unstable_ImmediatePriority,
          de = r.unstable_UserBlockingPriority,
          fe = r.unstable_NormalPriority,
          he = r.unstable_LowPriority,
          pe = r.unstable_IdlePriority,
          me = r.log,
          ge = r.unstable_setDisableYieldValue,
          ve = null,
          ye = null;
        function be(e) {
          if (
            ("function" === typeof me && ge(e),
            ye && "function" === typeof ye.setStrictMode)
          )
            try {
              ye.setStrictMode(ve, e);
            } catch (t) {}
        }
        var we = Math.clz32
            ? Math.clz32
            : function (e) {
                return 0 === (e >>>= 0) ? 32 : (31 - ((xe(e) / Se) | 0)) | 0;
              },
          xe = Math.log,
          Se = Math.LN2;
        var ke = 256,
          Ee = 262144,
          Te = 4194304;
        function Ce(e) {
          var t = 42 & e;
          if (0 !== t) return t;
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
              return 64;
            case 128:
              return 128;
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
              return 261888 & e;
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 3932160 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
              return 62914560 & e;
            case 67108864:
              return 67108864;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 0;
            default:
              return e;
          }
        }
        function Pe(e, t, n) {
          var r = e.pendingLanes;
          if (0 === r) return 0;
          var a = 0,
            i = e.suspendedLanes,
            o = e.pingedLanes;
          e = e.warmLanes;
          var s = 134217727 & r;
          return (
            0 !== s
              ? 0 !== (r = s & ~i)
                ? (a = Ce(r))
                : 0 !== (o &= s)
                ? (a = Ce(o))
                : n || (0 !== (n = s & ~e) && (a = Ce(n)))
              : 0 !== (s = r & ~i)
              ? (a = Ce(s))
              : 0 !== o
              ? (a = Ce(o))
              : n || (0 !== (n = r & ~e) && (a = Ce(n))),
            0 === a
              ? 0
              : 0 !== t &&
                t !== a &&
                0 === (t & i) &&
                ((i = a & -a) >= (n = t & -t) ||
                  (32 === i && 0 !== (4194048 & n)))
              ? t
              : a
          );
        }
        function Fe(e, t) {
          return (
            0 === (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t)
          );
        }
        function Ae(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
            case 8:
            case 64:
              return t + 250;
            case 16:
            case 32:
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
              return t + 5e3;
            default:
              return -1;
          }
        }
        function Ne() {
          var e = Te;
          return 0 === (62914560 & (Te <<= 1)) && (Te = 4194304), e;
        }
        function De(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function Me(e, t) {
          (e.pendingLanes |= t),
            268435456 !== t &&
              ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
        }
        function Le(e, t, n) {
          (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
          var r = 31 - we(t);
          (e.entangledLanes |= t),
            (e.entanglements[r] =
              1073741824 | e.entanglements[r] | (261930 & n));
        }
        function je(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - we(n),
              a = 1 << r;
            (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
          }
        }
        function ze(e, t) {
          var n = t & -t;
          return 0 !==
            ((n = 0 !== (42 & n) ? 1 : Re(n)) & (e.suspendedLanes | t))
            ? 0
            : n;
        }
        function Re(e) {
          switch (e) {
            case 2:
              e = 1;
              break;
            case 8:
              e = 4;
              break;
            case 32:
              e = 16;
              break;
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
              e = 128;
              break;
            case 268435456:
              e = 134217728;
              break;
            default:
              e = 0;
          }
          return e;
        }
        function Oe(e) {
          return 2 < (e &= -e)
            ? 8 < e
              ? 0 !== (134217727 & e)
                ? 32
                : 268435456
              : 8
            : 2;
        }
        function _e() {
          var e = z.p;
          return 0 !== e ? e : void 0 === (e = window.event) ? 32 : Pf(e.type);
        }
        function Ve(e, t) {
          var n = z.p;
          try {
            return (z.p = e), t();
          } finally {
            z.p = n;
          }
        }
        var Be = Math.random().toString(36).slice(2),
          Ie = "__reactFiber$" + Be,
          Ue = "__reactProps$" + Be,
          He = "__reactContainer$" + Be,
          We = "__reactEvents$" + Be,
          $e = "__reactListeners$" + Be,
          Ye = "__reactHandles$" + Be,
          qe = "__reactResources$" + Be,
          Xe = "__reactMarker$" + Be;
        function Ke(e) {
          delete e[Ie], delete e[Ue], delete e[We], delete e[$e], delete e[Ye];
        }
        function Qe(e) {
          var t = e[Ie];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[He] || n[Ie])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = Rd(e); null !== e; ) {
                  if ((n = e[Ie])) return n;
                  e = Rd(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function Ge(e) {
          if ((e = e[Ie] || e[He])) {
            var t = e.tag;
            if (
              5 === t ||
              6 === t ||
              13 === t ||
              31 === t ||
              26 === t ||
              27 === t ||
              3 === t
            )
              return e;
          }
          return null;
        }
        function Ze(e) {
          var t = e.tag;
          if (5 === t || 26 === t || 27 === t || 6 === t) return e.stateNode;
          throw Error(o(33));
        }
        function Je(e) {
          var t = e[qe];
          return (
            t ||
              (t = e[qe] =
                { hoistableStyles: new Map(), hoistableScripts: new Map() }),
            t
          );
        }
        function et(e) {
          e[Xe] = !0;
        }
        var tt = new Set(),
          nt = {};
        function rt(e, t) {
          at(e, t), at(e + "Capture", t);
        }
        function at(e, t) {
          for (nt[e] = t, e = 0; e < t.length; e++) tt.add(t[e]);
        }
        var it = RegExp(
            "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
          ),
          ot = {},
          st = {};
        function lt(e, t, n) {
          if (
            ((a = t),
            re.call(st, a) ||
              (!re.call(ot, a) &&
                (it.test(a) ? (st[a] = !0) : ((ot[a] = !0), 0))))
          )
            if (null === n) e.removeAttribute(t);
            else {
              switch (typeof n) {
                case "undefined":
                case "function":
                case "symbol":
                  return void e.removeAttribute(t);
                case "boolean":
                  var r = t.toLowerCase().slice(0, 5);
                  if ("data-" !== r && "aria-" !== r)
                    return void e.removeAttribute(t);
              }
              e.setAttribute(t, "" + n);
            }
          var a;
        }
        function ut(e, t, n) {
          if (null === n) e.removeAttribute(t);
          else {
            switch (typeof n) {
              case "undefined":
              case "function":
              case "symbol":
              case "boolean":
                return void e.removeAttribute(t);
            }
            e.setAttribute(t, "" + n);
          }
        }
        function ct(e, t, n, r) {
          if (null === r) e.removeAttribute(n);
          else {
            switch (typeof r) {
              case "undefined":
              case "function":
              case "symbol":
              case "boolean":
                return void e.removeAttribute(n);
            }
            e.setAttributeNS(t, n, "" + r);
          }
        }
        function dt(e) {
          switch (typeof e) {
            case "bigint":
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function ft(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function ht(e) {
          if (!e._valueTracker) {
            var t = ft(e) ? "checked" : "value";
            e._valueTracker = (function (e, t, n) {
              var r = Object.getOwnPropertyDescriptor(
                e.constructor.prototype,
                t
              );
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof r &&
                "function" === typeof r.get &&
                "function" === typeof r.set
              ) {
                var a = r.get,
                  i = r.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (n = "" + e), i.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: r.enumerable }),
                  {
                    getValue: function () {
                      return n;
                    },
                    setValue: function (e) {
                      n = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e, t, "" + e[t]);
          }
        }
        function pt(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = ft(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function mt(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        var gt = /[\n"\\]/g;
        function vt(e) {
          return e.replace(gt, function (e) {
            return "\\" + e.charCodeAt(0).toString(16) + " ";
          });
        }
        function yt(e, t, n, r, a, i, o, s) {
          (e.name = ""),
            null != o &&
            "function" !== typeof o &&
            "symbol" !== typeof o &&
            "boolean" !== typeof o
              ? (e.type = o)
              : e.removeAttribute("type"),
            null != t
              ? "number" === o
                ? ((0 === t && "" === e.value) || e.value != t) &&
                  (e.value = "" + dt(t))
                : e.value !== "" + dt(t) && (e.value = "" + dt(t))
              : ("submit" !== o && "reset" !== o) || e.removeAttribute("value"),
            null != t
              ? wt(e, o, dt(t))
              : null != n
              ? wt(e, o, dt(n))
              : null != r && e.removeAttribute("value"),
            null == a && null != i && (e.defaultChecked = !!i),
            null != a &&
              (e.checked =
                a && "function" !== typeof a && "symbol" !== typeof a),
            null != s &&
            "function" !== typeof s &&
            "symbol" !== typeof s &&
            "boolean" !== typeof s
              ? (e.name = "" + dt(s))
              : e.removeAttribute("name");
        }
        function bt(e, t, n, r, a, i, o, s) {
          if (
            (null != i &&
              "function" !== typeof i &&
              "symbol" !== typeof i &&
              "boolean" !== typeof i &&
              (e.type = i),
            null != t || null != n)
          ) {
            if (
              !(
                ("submit" !== i && "reset" !== i) ||
                (void 0 !== t && null !== t)
              )
            )
              return void ht(e);
            (n = null != n ? "" + dt(n) : ""),
              (t = null != t ? "" + dt(t) : n),
              s || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          (r =
            "function" !== typeof (r = null != r ? r : a) &&
            "symbol" !== typeof r &&
            !!r),
            (e.checked = s ? e.checked : !!r),
            (e.defaultChecked = !!r),
            null != o &&
              "function" !== typeof o &&
              "symbol" !== typeof o &&
              "boolean" !== typeof o &&
              (e.name = o),
            ht(e);
        }
        function wt(e, t, n) {
          ("number" === t && mt(e.ownerDocument) === e) ||
            e.defaultValue === "" + n ||
            (e.defaultValue = "" + n);
        }
        function xt(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + dt(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (
                  (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
                );
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function St(e, t, n) {
          null == t ||
          ((t = "" + dt(t)) !== e.value && (e.value = t), null != n)
            ? (e.defaultValue = null != n ? "" + dt(n) : "")
            : e.defaultValue !== t && (e.defaultValue = t);
        }
        function kt(e, t, n, r) {
          if (null == t) {
            if (null != r) {
              if (null != n) throw Error(o(92));
              if (L(r)) {
                if (1 < r.length) throw Error(o(93));
                r = r[0];
              }
              n = r;
            }
            null == n && (n = ""), (t = n);
          }
          (n = dt(t)),
            (e.defaultValue = n),
            (r = e.textContent) === n &&
              "" !== r &&
              null !== r &&
              (e.value = r),
            ht(e);
        }
        function Et(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var Tt = new Set(
          "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
            " "
          )
        );
        function Ct(e, t, n) {
          var r = 0 === t.indexOf("--");
          null == n || "boolean" === typeof n || "" === n
            ? r
              ? e.setProperty(t, "")
              : "float" === t
              ? (e.cssFloat = "")
              : (e[t] = "")
            : r
            ? e.setProperty(t, n)
            : "number" !== typeof n || 0 === n || Tt.has(t)
            ? "float" === t
              ? (e.cssFloat = n)
              : (e[t] = ("" + n).trim())
            : (e[t] = n + "px");
        }
        function Pt(e, t, n) {
          if (null != t && "object" !== typeof t) throw Error(o(62));
          if (((e = e.style), null != n)) {
            for (var r in n)
              !n.hasOwnProperty(r) ||
                (null != t && t.hasOwnProperty(r)) ||
                (0 === r.indexOf("--")
                  ? e.setProperty(r, "")
                  : "float" === r
                  ? (e.cssFloat = "")
                  : (e[r] = ""));
            for (var a in t)
              (r = t[a]), t.hasOwnProperty(a) && n[a] !== r && Ct(e, a, r);
          } else for (var i in t) t.hasOwnProperty(i) && Ct(e, i, t[i]);
        }
        function Ft(e) {
          if (-1 === e.indexOf("-")) return !1;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var At = new Map([
            ["acceptCharset", "accept-charset"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
            ["crossOrigin", "crossorigin"],
            ["accentHeight", "accent-height"],
            ["alignmentBaseline", "alignment-baseline"],
            ["arabicForm", "arabic-form"],
            ["baselineShift", "baseline-shift"],
            ["capHeight", "cap-height"],
            ["clipPath", "clip-path"],
            ["clipRule", "clip-rule"],
            ["colorInterpolation", "color-interpolation"],
            ["colorInterpolationFilters", "color-interpolation-filters"],
            ["colorProfile", "color-profile"],
            ["colorRendering", "color-rendering"],
            ["dominantBaseline", "dominant-baseline"],
            ["enableBackground", "enable-background"],
            ["fillOpacity", "fill-opacity"],
            ["fillRule", "fill-rule"],
            ["floodColor", "flood-color"],
            ["floodOpacity", "flood-opacity"],
            ["fontFamily", "font-family"],
            ["fontSize", "font-size"],
            ["fontSizeAdjust", "font-size-adjust"],
            ["fontStretch", "font-stretch"],
            ["fontStyle", "font-style"],
            ["fontVariant", "font-variant"],
            ["fontWeight", "font-weight"],
            ["glyphName", "glyph-name"],
            ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
            ["glyphOrientationVertical", "glyph-orientation-vertical"],
            ["horizAdvX", "horiz-adv-x"],
            ["horizOriginX", "horiz-origin-x"],
            ["imageRendering", "image-rendering"],
            ["letterSpacing", "letter-spacing"],
            ["lightingColor", "lighting-color"],
            ["markerEnd", "marker-end"],
            ["markerMid", "marker-mid"],
            ["markerStart", "marker-start"],
            ["overlinePosition", "overline-position"],
            ["overlineThickness", "overline-thickness"],
            ["paintOrder", "paint-order"],
            ["panose-1", "panose-1"],
            ["pointerEvents", "pointer-events"],
            ["renderingIntent", "rendering-intent"],
            ["shapeRendering", "shape-rendering"],
            ["stopColor", "stop-color"],
            ["stopOpacity", "stop-opacity"],
            ["strikethroughPosition", "strikethrough-position"],
            ["strikethroughThickness", "strikethrough-thickness"],
            ["strokeDasharray", "stroke-dasharray"],
            ["strokeDashoffset", "stroke-dashoffset"],
            ["strokeLinecap", "stroke-linecap"],
            ["strokeLinejoin", "stroke-linejoin"],
            ["strokeMiterlimit", "stroke-miterlimit"],
            ["strokeOpacity", "stroke-opacity"],
            ["strokeWidth", "stroke-width"],
            ["textAnchor", "text-anchor"],
            ["textDecoration", "text-decoration"],
            ["textRendering", "text-rendering"],
            ["transformOrigin", "transform-origin"],
            ["underlinePosition", "underline-position"],
            ["underlineThickness", "underline-thickness"],
            ["unicodeBidi", "unicode-bidi"],
            ["unicodeRange", "unicode-range"],
            ["unitsPerEm", "units-per-em"],
            ["vAlphabetic", "v-alphabetic"],
            ["vHanging", "v-hanging"],
            ["vIdeographic", "v-ideographic"],
            ["vMathematical", "v-mathematical"],
            ["vectorEffect", "vector-effect"],
            ["vertAdvY", "vert-adv-y"],
            ["vertOriginX", "vert-origin-x"],
            ["vertOriginY", "vert-origin-y"],
            ["wordSpacing", "word-spacing"],
            ["writingMode", "writing-mode"],
            ["xmlnsXlink", "xmlns:xlink"],
            ["xHeight", "x-height"],
          ]),
          Nt =
            /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
        function Dt(e) {
          return Nt.test("" + e)
            ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
            : e;
        }
        function Mt() {}
        var Lt = null;
        function jt(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var zt = null,
          Rt = null;
        function Ot(e) {
          var t = Ge(e);
          if (t && (e = t.stateNode)) {
            var n = e[Ue] || null;
            e: switch (((e = t.stateNode), t.type)) {
              case "input":
                if (
                  (yt(
                    e,
                    n.value,
                    n.defaultValue,
                    n.defaultValue,
                    n.checked,
                    n.defaultChecked,
                    n.type,
                    n.name
                  ),
                  (t = n.name),
                  "radio" === n.type && null != t)
                ) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      'input[name="' + vt("" + t) + '"][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = r[Ue] || null;
                      if (!a) throw Error(o(90));
                      yt(
                        r,
                        a.value,
                        a.defaultValue,
                        a.defaultValue,
                        a.checked,
                        a.defaultChecked,
                        a.type,
                        a.name
                      );
                    }
                  }
                  for (t = 0; t < n.length; t++)
                    (r = n[t]).form === e.form && pt(r);
                }
                break e;
              case "textarea":
                St(e, n.value, n.defaultValue);
                break e;
              case "select":
                null != (t = n.value) && xt(e, !!n.multiple, t, !1);
            }
          }
        }
        var _t = !1;
        function Vt(e, t, n) {
          if (_t) return e(t, n);
          _t = !0;
          try {
            return e(t);
          } finally {
            if (
              ((_t = !1),
              (null !== zt || null !== Rt) &&
                (Ju(), zt && ((t = zt), (e = Rt), (Rt = zt = null), Ot(t), e)))
            )
              for (t = 0; t < e.length; t++) Ot(e[t]);
          }
        }
        function Bt(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = n[Ue] || null;
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(o(231, t, typeof n));
          return n;
        }
        var It = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          Ut = !1;
        if (It)
          try {
            var Ht = {};
            Object.defineProperty(Ht, "passive", {
              get: function () {
                Ut = !0;
              },
            }),
              window.addEventListener("test", Ht, Ht),
              window.removeEventListener("test", Ht, Ht);
          } catch (Zf) {
            Ut = !1;
          }
        var Wt = null,
          $t = null,
          Yt = null;
        function qt() {
          if (Yt) return Yt;
          var e,
            t,
            n = $t,
            r = n.length,
            a = "value" in Wt ? Wt.value : Wt.textContent,
            i = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var o = r - e;
          for (t = 1; t <= o && n[r - t] === a[i - t]; t++);
          return (Yt = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function Xt(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function Kt() {
          return !0;
        }
        function Qt() {
          return !1;
        }
        function Gt(e) {
          function t(t, n, r, a, i) {
            for (var o in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = i),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(a) : a[o]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? Kt
                : Qt),
              (this.isPropagationStopped = Qt),
              this
            );
          }
          return (
            h(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = Kt));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = Kt));
              },
              persist: function () {},
              isPersistent: Kt,
            }),
            t
          );
        }
        var Zt,
          Jt,
          en,
          tn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          nn = Gt(tn),
          rn = h({}, tn, { view: 0, detail: 0 }),
          an = Gt(rn),
          on = h({}, rn, {
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
            getModifierState: vn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== en &&
                    (en && "mousemove" === e.type
                      ? ((Zt = e.screenX - en.screenX),
                        (Jt = e.screenY - en.screenY))
                      : (Jt = Zt = 0),
                    (en = e)),
                  Zt);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : Jt;
            },
          }),
          sn = Gt(on),
          ln = Gt(h({}, on, { dataTransfer: 0 })),
          un = Gt(h({}, rn, { relatedTarget: 0 })),
          cn = Gt(
            h({}, tn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          dn = Gt(
            h({}, tn, {
              clipboardData: function (e) {
                return "clipboardData" in e
                  ? e.clipboardData
                  : window.clipboardData;
              },
            })
          ),
          fn = Gt(h({}, tn, { data: 0 })),
          hn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          pn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          mn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function gn(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = mn[e]) && !!t[e];
        }
        function vn() {
          return gn;
        }
        var yn = Gt(
            h({}, rn, {
              key: function (e) {
                if (e.key) {
                  var t = hn[e.key] || e.key;
                  if ("Unidentified" !== t) return t;
                }
                return "keypress" === e.type
                  ? 13 === (e = Xt(e))
                    ? "Enter"
                    : String.fromCharCode(e)
                  : "keydown" === e.type || "keyup" === e.type
                  ? pn[e.keyCode] || "Unidentified"
                  : "";
              },
              code: 0,
              location: 0,
              ctrlKey: 0,
              shiftKey: 0,
              altKey: 0,
              metaKey: 0,
              repeat: 0,
              locale: 0,
              getModifierState: vn,
              charCode: function (e) {
                return "keypress" === e.type ? Xt(e) : 0;
              },
              keyCode: function (e) {
                return "keydown" === e.type || "keyup" === e.type
                  ? e.keyCode
                  : 0;
              },
              which: function (e) {
                return "keypress" === e.type
                  ? Xt(e)
                  : "keydown" === e.type || "keyup" === e.type
                  ? e.keyCode
                  : 0;
              },
            })
          ),
          bn = Gt(
            h({}, on, {
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
            })
          ),
          wn = Gt(
            h({}, rn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: vn,
            })
          ),
          xn = Gt(
            h({}, tn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          Sn = Gt(
            h({}, on, {
              deltaX: function (e) {
                return "deltaX" in e
                  ? e.deltaX
                  : "wheelDeltaX" in e
                  ? -e.wheelDeltaX
                  : 0;
              },
              deltaY: function (e) {
                return "deltaY" in e
                  ? e.deltaY
                  : "wheelDeltaY" in e
                  ? -e.wheelDeltaY
                  : "wheelDelta" in e
                  ? -e.wheelDelta
                  : 0;
              },
              deltaZ: 0,
              deltaMode: 0,
            })
          ),
          kn = Gt(h({}, tn, { newState: 0, oldState: 0 })),
          En = [9, 13, 27, 32],
          Tn = It && "CompositionEvent" in window,
          Cn = null;
        It && "documentMode" in document && (Cn = document.documentMode);
        var Pn = It && "TextEvent" in window && !Cn,
          Fn = It && (!Tn || (Cn && 8 < Cn && 11 >= Cn)),
          An = String.fromCharCode(32),
          Nn = !1;
        function Dn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== En.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Mn(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Ln = !1;
        var jn = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
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
        };
        function zn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!jn[e.type] : "textarea" === t;
        }
        function Rn(e, t, n, r) {
          zt ? (Rt ? Rt.push(r) : (Rt = [r])) : (zt = r),
            0 < (t = rd(t, "onChange")).length &&
              ((n = new nn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var On = null,
          _n = null;
        function Vn(e) {
          Kc(e, 0);
        }
        function Bn(e) {
          if (pt(Ze(e))) return e;
        }
        function In(e, t) {
          if ("change" === e) return t;
        }
        var Un = !1;
        if (It) {
          var Hn;
          if (It) {
            var Wn = "oninput" in document;
            if (!Wn) {
              var $n = document.createElement("div");
              $n.setAttribute("oninput", "return;"),
                (Wn = "function" === typeof $n.oninput);
            }
            Hn = Wn;
          } else Hn = !1;
          Un = Hn && (!document.documentMode || 9 < document.documentMode);
        }
        function Yn() {
          On && (On.detachEvent("onpropertychange", qn), (_n = On = null));
        }
        function qn(e) {
          if ("value" === e.propertyName && Bn(_n)) {
            var t = [];
            Rn(t, _n, e, jt(e)), Vt(Vn, t);
          }
        }
        function Xn(e, t, n) {
          "focusin" === e
            ? (Yn(), (_n = n), (On = t).attachEvent("onpropertychange", qn))
            : "focusout" === e && Yn();
        }
        function Kn(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Bn(_n);
        }
        function Qn(e, t) {
          if ("click" === e) return Bn(t);
        }
        function Gn(e, t) {
          if ("input" === e || "change" === e) return Bn(t);
        }
        var Zn =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function Jn(e, t) {
          if (Zn(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!re.call(t, a) || !Zn(e[a], t[a])) return !1;
          }
          return !0;
        }
        function er(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function tr(e, t) {
          var n,
            r = er(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = er(r);
          }
        }
        function nr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? nr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function rr(e) {
          for (
            var t = mt(
              (e =
                null != e &&
                null != e.ownerDocument &&
                null != e.ownerDocument.defaultView
                  ? e.ownerDocument.defaultView
                  : window).document
            );
            t instanceof e.HTMLIFrameElement;

          ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = mt((e = t.contentWindow).document);
          }
          return t;
        }
        function ar(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        var ir =
            It && "documentMode" in document && 11 >= document.documentMode,
          or = null,
          sr = null,
          lr = null,
          ur = !1;
        function cr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          ur ||
            null == or ||
            or !== mt(r) ||
            ("selectionStart" in (r = or) && ar(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (lr && Jn(lr, r)) ||
              ((lr = r),
              0 < (r = rd(sr, "onSelect")).length &&
                ((t = new nn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = or))));
        }
        function dr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var fr = {
            animationend: dr("Animation", "AnimationEnd"),
            animationiteration: dr("Animation", "AnimationIteration"),
            animationstart: dr("Animation", "AnimationStart"),
            transitionrun: dr("Transition", "TransitionRun"),
            transitionstart: dr("Transition", "TransitionStart"),
            transitioncancel: dr("Transition", "TransitionCancel"),
            transitionend: dr("Transition", "TransitionEnd"),
          },
          hr = {},
          pr = {};
        function mr(e) {
          if (hr[e]) return hr[e];
          if (!fr[e]) return e;
          var t,
            n = fr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in pr) return (hr[e] = n[t]);
          return e;
        }
        It &&
          ((pr = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete fr.animationend.animation,
            delete fr.animationiteration.animation,
            delete fr.animationstart.animation),
          "TransitionEvent" in window || delete fr.transitionend.transition);
        var gr = mr("animationend"),
          vr = mr("animationiteration"),
          yr = mr("animationstart"),
          br = mr("transitionrun"),
          wr = mr("transitionstart"),
          xr = mr("transitioncancel"),
          Sr = mr("transitionend"),
          kr = new Map(),
          Er =
            "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function Tr(e, t) {
          kr.set(e, t), rt(t, [e]);
        }
        Er.push("scrollEnd");
        var Cr =
            "function" === typeof reportError
              ? reportError
              : function (e) {
                  if (
                    "object" === typeof window &&
                    "function" === typeof window.ErrorEvent
                  ) {
                    var t = new window.ErrorEvent("error", {
                      bubbles: !0,
                      cancelable: !0,
                      message:
                        "object" === typeof e &&
                        null !== e &&
                        "string" === typeof e.message
                          ? String(e.message)
                          : String(e),
                      error: e,
                    });
                    if (!window.dispatchEvent(t)) return;
                  } else if (
                    "object" === typeof process &&
                    "function" === typeof process.emit
                  )
                    return void process.emit("uncaughtException", e);
                  console.error(e);
                },
          Pr = [],
          Fr = 0,
          Ar = 0;
        function Nr() {
          for (var e = Fr, t = (Ar = Fr = 0); t < e; ) {
            var n = Pr[t];
            Pr[t++] = null;
            var r = Pr[t];
            Pr[t++] = null;
            var a = Pr[t];
            Pr[t++] = null;
            var i = Pr[t];
            if (((Pr[t++] = null), null !== r && null !== a)) {
              var o = r.pending;
              null === o ? (a.next = a) : ((a.next = o.next), (o.next = a)),
                (r.pending = a);
            }
            0 !== i && jr(n, a, i);
          }
        }
        function Dr(e, t, n, r) {
          (Pr[Fr++] = e),
            (Pr[Fr++] = t),
            (Pr[Fr++] = n),
            (Pr[Fr++] = r),
            (Ar |= r),
            (e.lanes |= r),
            null !== (e = e.alternate) && (e.lanes |= r);
        }
        function Mr(e, t, n, r) {
          return Dr(e, t, n, r), zr(e);
        }
        function Lr(e, t) {
          return Dr(e, null, null, t), zr(e);
        }
        function jr(e, t, n) {
          e.lanes |= n;
          var r = e.alternate;
          null !== r && (r.lanes |= n);
          for (var a = !1, i = e.return; null !== i; )
            (i.childLanes |= n),
              null !== (r = i.alternate) && (r.childLanes |= n),
              22 === i.tag &&
                (null === (e = i.stateNode) || 1 & e._visibility || (a = !0)),
              (e = i),
              (i = i.return);
          return 3 === e.tag
            ? ((i = e.stateNode),
              a &&
                null !== t &&
                ((a = 31 - we(n)),
                null === (r = (e = i.hiddenUpdates)[a])
                  ? (e[a] = [t])
                  : r.push(t),
                (t.lane = 536870912 | n)),
              i)
            : null;
        }
        function zr(e) {
          if (50 < Wu) throw ((Wu = 0), ($u = null), Error(o(185)));
          for (var t = e.return; null !== t; ) t = (e = t).return;
          return 3 === e.tag ? e.stateNode : null;
        }
        var Rr = {};
        function Or(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.refCleanup = this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function _r(e, t, n, r) {
          return new Or(e, t, n, r);
        }
        function Vr(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Br(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = _r(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 65011712 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            (n.refCleanup = e.refCleanup),
            n
          );
        }
        function Ir(e, t) {
          e.flags &= 65011714;
          var n = e.alternate;
          return (
            null === n
              ? ((e.childLanes = 0),
                (e.lanes = t),
                (e.child = null),
                (e.subtreeFlags = 0),
                (e.memoizedProps = null),
                (e.memoizedState = null),
                (e.updateQueue = null),
                (e.dependencies = null),
                (e.stateNode = null))
              : ((e.childLanes = n.childLanes),
                (e.lanes = n.lanes),
                (e.child = n.child),
                (e.subtreeFlags = 0),
                (e.deletions = null),
                (e.memoizedProps = n.memoizedProps),
                (e.memoizedState = n.memoizedState),
                (e.updateQueue = n.updateQueue),
                (e.type = n.type),
                (t = n.dependencies),
                (e.dependencies =
                  null === t
                    ? null
                    : { lanes: t.lanes, firstContext: t.firstContext })),
            e
          );
        }
        function Ur(e, t, n, r, a, i) {
          var s = 0;
          if (((r = e), "function" === typeof e)) Vr(e) && (s = 1);
          else if ("string" === typeof e)
            s = (function (e, t, n) {
              if (1 === n || null != t.itemProp) return !1;
              switch (e) {
                case "meta":
                case "title":
                  return !0;
                case "style":
                  if (
                    "string" !== typeof t.precedence ||
                    "string" !== typeof t.href ||
                    "" === t.href
                  )
                    break;
                  return !0;
                case "link":
                  if (
                    "string" !== typeof t.rel ||
                    "string" !== typeof t.href ||
                    "" === t.href ||
                    t.onLoad ||
                    t.onError
                  )
                    break;
                  return (
                    "stylesheet" !== t.rel ||
                    ((e = t.disabled),
                    "string" === typeof t.precedence && null == e)
                  );
                case "script":
                  if (
                    t.async &&
                    "function" !== typeof t.async &&
                    "symbol" !== typeof t.async &&
                    !t.onLoad &&
                    !t.onError &&
                    t.src &&
                    "string" === typeof t.src
                  )
                    return !0;
              }
              return !1;
            })(e, n, W.current)
              ? 26
              : "html" === e || "head" === e || "body" === e
              ? 27
              : 5;
          else
            e: switch (e) {
              case P:
                return (
                  ((e = _r(31, n, t, a)).elementType = P), (e.lanes = i), e
                );
              case v:
                return Hr(n.children, a, i, t);
              case y:
                (s = 8), (a |= 24);
                break;
              case b:
                return (
                  ((e = _r(12, n, t, 2 | a)).elementType = b), (e.lanes = i), e
                );
              case k:
                return (
                  ((e = _r(13, n, t, a)).elementType = k), (e.lanes = i), e
                );
              case E:
                return (
                  ((e = _r(19, n, t, a)).elementType = E), (e.lanes = i), e
                );
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case x:
                      s = 10;
                      break e;
                    case w:
                      s = 9;
                      break e;
                    case S:
                      s = 11;
                      break e;
                    case T:
                      s = 14;
                      break e;
                    case C:
                      (s = 16), (r = null);
                      break e;
                  }
                (s = 29),
                  (n = Error(o(130, null === e ? "null" : typeof e, ""))),
                  (r = null);
            }
          return (
            ((t = _r(s, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = i),
            t
          );
        }
        function Hr(e, t, n, r) {
          return ((e = _r(7, e, r, t)).lanes = n), e;
        }
        function Wr(e, t, n) {
          return ((e = _r(6, e, null, t)).lanes = n), e;
        }
        function $r(e) {
          var t = _r(18, null, null, 0);
          return (t.stateNode = e), t;
        }
        function Yr(e, t, n) {
          return (
            ((t = _r(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        var qr = new WeakMap();
        function Xr(e, t) {
          if ("object" === typeof e && null !== e) {
            var n = qr.get(e);
            return void 0 !== n
              ? n
              : ((t = { value: e, source: t, stack: ne(t) }), qr.set(e, t), t);
          }
          return { value: e, source: t, stack: ne(t) };
        }
        var Kr = [],
          Qr = 0,
          Gr = null,
          Zr = 0,
          Jr = [],
          ea = 0,
          ta = null,
          na = 1,
          ra = "";
        function aa(e, t) {
          (Kr[Qr++] = Zr), (Kr[Qr++] = Gr), (Gr = e), (Zr = t);
        }
        function ia(e, t, n) {
          (Jr[ea++] = na), (Jr[ea++] = ra), (Jr[ea++] = ta), (ta = e);
          var r = na;
          e = ra;
          var a = 32 - we(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var i = 32 - we(t) + a;
          if (30 < i) {
            var o = a - (a % 5);
            (i = (r & ((1 << o) - 1)).toString(32)),
              (r >>= o),
              (a -= o),
              (na = (1 << (32 - we(t) + a)) | (n << a) | r),
              (ra = i + e);
          } else (na = (1 << i) | (n << a) | r), (ra = e);
        }
        function oa(e) {
          null !== e.return && (aa(e, 1), ia(e, 1, 0));
        }
        function sa(e) {
          for (; e === Gr; )
            (Gr = Kr[--Qr]), (Kr[Qr] = null), (Zr = Kr[--Qr]), (Kr[Qr] = null);
          for (; e === ta; )
            (ta = Jr[--ea]),
              (Jr[ea] = null),
              (ra = Jr[--ea]),
              (Jr[ea] = null),
              (na = Jr[--ea]),
              (Jr[ea] = null);
        }
        function la(e, t) {
          (Jr[ea++] = na),
            (Jr[ea++] = ra),
            (Jr[ea++] = ta),
            (na = t.id),
            (ra = t.overflow),
            (ta = e);
        }
        var ua = null,
          ca = null,
          da = !1,
          fa = null,
          ha = !1,
          pa = Error(o(519));
        function ma(e) {
          throw (
            (xa(
              Xr(
                Error(
                  o(
                    418,
                    1 < arguments.length &&
                      void 0 !== arguments[1] &&
                      arguments[1]
                      ? "text"
                      : "HTML",
                    ""
                  )
                ),
                e
              )
            ),
            pa)
          );
        }
        function ga(e) {
          var t = e.stateNode,
            n = e.type,
            r = e.memoizedProps;
          switch (((t[Ie] = e), (t[Ue] = r), n)) {
            case "dialog":
              Qc("cancel", t), Qc("close", t);
              break;
            case "iframe":
            case "object":
            case "embed":
              Qc("load", t);
              break;
            case "video":
            case "audio":
              for (n = 0; n < qc.length; n++) Qc(qc[n], t);
              break;
            case "source":
              Qc("error", t);
              break;
            case "img":
            case "image":
            case "link":
              Qc("error", t), Qc("load", t);
              break;
            case "details":
              Qc("toggle", t);
              break;
            case "input":
              Qc("invalid", t),
                bt(
                  t,
                  r.value,
                  r.defaultValue,
                  r.checked,
                  r.defaultChecked,
                  r.type,
                  r.name,
                  !0
                );
              break;
            case "select":
              Qc("invalid", t);
              break;
            case "textarea":
              Qc("invalid", t), kt(t, r.value, r.defaultValue, r.children);
          }
          ("string" !== typeof (n = r.children) &&
            "number" !== typeof n &&
            "bigint" !== typeof n) ||
          t.textContent === "" + n ||
          !0 === r.suppressHydrationWarning ||
          ud(t.textContent, n)
            ? (null != r.popover && (Qc("beforetoggle", t), Qc("toggle", t)),
              null != r.onScroll && Qc("scroll", t),
              null != r.onScrollEnd && Qc("scrollend", t),
              null != r.onClick && (t.onclick = Mt),
              (t = !0))
            : (t = !1),
            t || ma(e, !0);
        }
        function va(e) {
          for (ua = e.return; ua; )
            switch (ua.tag) {
              case 5:
              case 31:
              case 13:
                return void (ha = !1);
              case 27:
              case 3:
                return void (ha = !0);
              default:
                ua = ua.return;
            }
        }
        function ya(e) {
          if (e !== ua) return !1;
          if (!da) return va(e), (da = !0), !1;
          var t,
            n = e.tag;
          if (
            ((t = 3 !== n && 27 !== n) &&
              ((t = 5 === n) &&
                (t =
                  !("form" !== (t = e.type) && "button" !== t) ||
                  bd(e.type, e.memoizedProps)),
              (t = !t)),
            t && ca && ma(e),
            va(e),
            13 === n)
          ) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(o(317));
            ca = zd(e);
          } else if (31 === n) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(o(317));
            ca = zd(e);
          } else
            27 === n
              ? ((n = ca),
                Cd(e.type) ? ((e = jd), (jd = null), (ca = e)) : (ca = n))
              : (ca = ua ? Ld(e.stateNode.nextSibling) : null);
          return !0;
        }
        function ba() {
          (ca = ua = null), (da = !1);
        }
        function wa() {
          var e = fa;
          return (
            null !== e &&
              (null === Nu ? (Nu = e) : Nu.push.apply(Nu, e), (fa = null)),
            e
          );
        }
        function xa(e) {
          null === fa ? (fa = [e]) : fa.push(e);
        }
        var Sa = V(null),
          ka = null,
          Ea = null;
        function Ta(e, t, n) {
          I(Sa, t._currentValue), (t._currentValue = n);
        }
        function Ca(e) {
          (e._currentValue = Sa.current), B(Sa);
        }
        function Pa(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function Fa(e, t, n, r) {
          var a = e.child;
          for (null !== a && (a.return = e); null !== a; ) {
            var i = a.dependencies;
            if (null !== i) {
              var s = a.child;
              i = i.firstContext;
              e: for (; null !== i; ) {
                var l = i;
                i = a;
                for (var u = 0; u < t.length; u++)
                  if (l.context === t[u]) {
                    (i.lanes |= n),
                      null !== (l = i.alternate) && (l.lanes |= n),
                      Pa(i.return, n, e),
                      r || (s = null);
                    break e;
                  }
                i = l.next;
              }
            } else if (18 === a.tag) {
              if (null === (s = a.return)) throw Error(o(341));
              (s.lanes |= n),
                null !== (i = s.alternate) && (i.lanes |= n),
                Pa(s, n, e),
                (s = null);
            } else s = a.child;
            if (null !== s) s.return = a;
            else
              for (s = a; null !== s; ) {
                if (s === e) {
                  s = null;
                  break;
                }
                if (null !== (a = s.sibling)) {
                  (a.return = s.return), (s = a);
                  break;
                }
                s = s.return;
              }
            a = s;
          }
        }
        function Aa(e, t, n, r) {
          e = null;
          for (var a = t, i = !1; null !== a; ) {
            if (!i)
              if (0 !== (524288 & a.flags)) i = !0;
              else if (0 !== (262144 & a.flags)) break;
            if (10 === a.tag) {
              var s = a.alternate;
              if (null === s) throw Error(o(387));
              if (null !== (s = s.memoizedProps)) {
                var l = a.type;
                Zn(a.pendingProps.value, s.value) ||
                  (null !== e ? e.push(l) : (e = [l]));
              }
            } else if (a === q.current) {
              if (null === (s = a.alternate)) throw Error(o(387));
              s.memoizedState.memoizedState !== a.memoizedState.memoizedState &&
                (null !== e ? e.push(df) : (e = [df]));
            }
            a = a.return;
          }
          null !== e && Fa(t, e, n, r), (t.flags |= 262144);
        }
        function Na(e) {
          for (e = e.firstContext; null !== e; ) {
            if (!Zn(e.context._currentValue, e.memoizedValue)) return !0;
            e = e.next;
          }
          return !1;
        }
        function Da(e) {
          (ka = e),
            (Ea = null),
            null !== (e = e.dependencies) && (e.firstContext = null);
        }
        function Ma(e) {
          return ja(ka, e);
        }
        function La(e, t) {
          return null === ka && Da(e), ja(e, t);
        }
        function ja(e, t) {
          var n = t._currentValue;
          if (
            ((t = { context: t, memoizedValue: n, next: null }), null === Ea)
          ) {
            if (null === e) throw Error(o(308));
            (Ea = t),
              (e.dependencies = { lanes: 0, firstContext: t }),
              (e.flags |= 524288);
          } else Ea = Ea.next = t;
          return n;
        }
        var za =
            "undefined" !== typeof AbortController
              ? AbortController
              : function () {
                  var e = [],
                    t = (this.signal = {
                      aborted: !1,
                      addEventListener: function (t, n) {
                        e.push(n);
                      },
                    });
                  this.abort = function () {
                    (t.aborted = !0),
                      e.forEach(function (e) {
                        return e();
                      });
                  };
                },
          Ra = r.unstable_scheduleCallback,
          Oa = r.unstable_NormalPriority,
          _a = {
            $$typeof: x,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0,
          };
        function Va() {
          return { controller: new za(), data: new Map(), refCount: 0 };
        }
        function Ba(e) {
          e.refCount--,
            0 === e.refCount &&
              Ra(Oa, function () {
                e.controller.abort();
              });
        }
        var Ia = null,
          Ua = 0,
          Ha = 0,
          Wa = null;
        function $a() {
          if (0 === --Ua && null !== Ia) {
            null !== Wa && (Wa.status = "fulfilled");
            var e = Ia;
            (Ia = null), (Ha = 0), (Wa = null);
            for (var t = 0; t < e.length; t++) (0, e[t])();
          }
        }
        var Ya = j.S;
        j.S = function (e, t) {
          (Lu = le()),
            "object" === typeof t &&
              null !== t &&
              "function" === typeof t.then &&
              (function (e, t) {
                if (null === Ia) {
                  var n = (Ia = []);
                  (Ua = 0),
                    (Ha = Uc()),
                    (Wa = {
                      status: "pending",
                      value: void 0,
                      then: function (e) {
                        n.push(e);
                      },
                    });
                }
                Ua++, t.then($a, $a);
              })(0, t),
            null !== Ya && Ya(e, t);
        };
        var qa = V(null);
        function Xa() {
          var e = qa.current;
          return null !== e ? e : pu.pooledCache;
        }
        function Ka(e, t) {
          I(qa, null === t ? qa.current : t.pool);
        }
        function Qa() {
          var e = Xa();
          return null === e ? null : { parent: _a._currentValue, pool: e };
        }
        var Ga = Error(o(460)),
          Za = Error(o(474)),
          Ja = Error(o(542)),
          ei = { then: function () {} };
        function ti(e) {
          return "fulfilled" === (e = e.status) || "rejected" === e;
        }
        function ni(e, t, n) {
          switch (
            (void 0 === (n = e[n])
              ? e.push(t)
              : n !== t && (t.then(Mt, Mt), (t = n)),
            t.status)
          ) {
            case "fulfilled":
              return t.value;
            case "rejected":
              throw (oi((e = t.reason)), e);
            default:
              if ("string" === typeof t.status) t.then(Mt, Mt);
              else {
                if (null !== (e = pu) && 100 < e.shellSuspendCounter)
                  throw Error(o(482));
                ((e = t).status = "pending"),
                  e.then(
                    function (e) {
                      if ("pending" === t.status) {
                        var n = t;
                        (n.status = "fulfilled"), (n.value = e);
                      }
                    },
                    function (e) {
                      if ("pending" === t.status) {
                        var n = t;
                        (n.status = "rejected"), (n.reason = e);
                      }
                    }
                  );
              }
              switch (t.status) {
                case "fulfilled":
                  return t.value;
                case "rejected":
                  throw (oi((e = t.reason)), e);
              }
              throw ((ai = t), Ga);
          }
        }
        function ri(e) {
          try {
            return (0, e._init)(e._payload);
          } catch (t) {
            if (
              null !== t &&
              "object" === typeof t &&
              "function" === typeof t.then
            )
              throw ((ai = t), Ga);
            throw t;
          }
        }
        var ai = null;
        function ii() {
          if (null === ai) throw Error(o(459));
          var e = ai;
          return (ai = null), e;
        }
        function oi(e) {
          if (e === Ga || e === Ja) throw Error(o(483));
        }
        var si = null,
          li = 0;
        function ui(e) {
          var t = li;
          return (li += 1), null === si && (si = []), ni(si, e, t);
        }
        function ci(e, t) {
          (t = t.props.ref), (e.ref = void 0 !== t ? t : null);
        }
        function di(e, t) {
          if (t.$$typeof === p) throw Error(o(525));
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              o(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function fi(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e) {
            for (var t = new Map(); null !== e; )
              null !== e.key ? t.set(e.key, e) : t.set(e.index, e),
                (e = e.sibling);
            return t;
          }
          function a(e, t) {
            return ((e = Br(e, t)).index = 0), (e.sibling = null), e;
          }
          function i(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 67108866), n)
                    : r
                  : ((t.flags |= 67108866), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function s(t) {
            return e && null === t.alternate && (t.flags |= 67108866), t;
          }
          function l(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Wr(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function u(e, t, n, r) {
            var i = n.type;
            return i === v
              ? d(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === i ||
                  ("object" === typeof i &&
                    null !== i &&
                    i.$$typeof === C &&
                    ri(i) === t.type))
              ? (ci((t = a(t, n.props)), n), (t.return = e), t)
              : (ci((t = Ur(n.type, n.key, n.props, null, e.mode, r)), n),
                (t.return = e),
                t);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Yr(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function d(e, t, n, r, i) {
            return null === t || 7 !== t.tag
              ? (((t = Hr(n, e.mode, r, i)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function f(e, t, n) {
            if (
              ("string" === typeof t && "" !== t) ||
              "number" === typeof t ||
              "bigint" === typeof t
            )
              return ((t = Wr("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case m:
                  return (
                    ci((n = Ur(t.type, t.key, t.props, null, e.mode, n)), t),
                    (n.return = e),
                    n
                  );
                case g:
                  return ((t = Yr(t, e.mode, n)).return = e), t;
                case C:
                  return f(e, (t = ri(t)), n);
              }
              if (L(t) || N(t))
                return ((t = Hr(t, e.mode, n, null)).return = e), t;
              if ("function" === typeof t.then) return f(e, ui(t), n);
              if (t.$$typeof === x) return f(e, La(e, t), n);
              di(e, t);
            }
            return null;
          }
          function h(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (
              ("string" === typeof n && "" !== n) ||
              "number" === typeof n ||
              "bigint" === typeof n
            )
              return null !== a ? null : l(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case m:
                  return n.key === a ? u(e, t, n, r) : null;
                case g:
                  return n.key === a ? c(e, t, n, r) : null;
                case C:
                  return h(e, t, (n = ri(n)), r);
              }
              if (L(n) || N(n)) return null !== a ? null : d(e, t, n, r, null);
              if ("function" === typeof n.then) return h(e, t, ui(n), r);
              if (n.$$typeof === x) return h(e, t, La(e, n), r);
              di(e, n);
            }
            return null;
          }
          function p(e, t, n, r, a) {
            if (
              ("string" === typeof r && "" !== r) ||
              "number" === typeof r ||
              "bigint" === typeof r
            )
              return l(t, (e = e.get(n) || null), "" + r, a);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case m:
                  return u(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case g:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case C:
                  return p(e, t, n, (r = ri(r)), a);
              }
              if (L(r) || N(r)) return d(t, (e = e.get(n) || null), r, a, null);
              if ("function" === typeof r.then) return p(e, t, n, ui(r), a);
              if (r.$$typeof === x) return p(e, t, n, La(t, r), a);
              di(t, r);
            }
            return null;
          }
          function y(l, u, c, d) {
            if (
              ("object" === typeof c &&
                null !== c &&
                c.type === v &&
                null === c.key &&
                (c = c.props.children),
              "object" === typeof c && null !== c)
            ) {
              switch (c.$$typeof) {
                case m:
                  e: {
                    for (var b = c.key; null !== u; ) {
                      if (u.key === b) {
                        if ((b = c.type) === v) {
                          if (7 === u.tag) {
                            n(l, u.sibling),
                              ((d = a(u, c.props.children)).return = l),
                              (l = d);
                            break e;
                          }
                        } else if (
                          u.elementType === b ||
                          ("object" === typeof b &&
                            null !== b &&
                            b.$$typeof === C &&
                            ri(b) === u.type)
                        ) {
                          n(l, u.sibling),
                            ci((d = a(u, c.props)), c),
                            (d.return = l),
                            (l = d);
                          break e;
                        }
                        n(l, u);
                        break;
                      }
                      t(l, u), (u = u.sibling);
                    }
                    c.type === v
                      ? (((d = Hr(c.props.children, l.mode, d, c.key)).return =
                          l),
                        (l = d))
                      : (ci(
                          (d = Ur(c.type, c.key, c.props, null, l.mode, d)),
                          c
                        ),
                        (d.return = l),
                        (l = d));
                  }
                  return s(l);
                case g:
                  e: {
                    for (b = c.key; null !== u; ) {
                      if (u.key === b) {
                        if (
                          4 === u.tag &&
                          u.stateNode.containerInfo === c.containerInfo &&
                          u.stateNode.implementation === c.implementation
                        ) {
                          n(l, u.sibling),
                            ((d = a(u, c.children || [])).return = l),
                            (l = d);
                          break e;
                        }
                        n(l, u);
                        break;
                      }
                      t(l, u), (u = u.sibling);
                    }
                    ((d = Yr(c, l.mode, d)).return = l), (l = d);
                  }
                  return s(l);
                case C:
                  return y(l, u, (c = ri(c)), d);
              }
              if (L(c))
                return (function (a, o, s, l) {
                  for (
                    var u = null, c = null, d = o, m = (o = 0), g = null;
                    null !== d && m < s.length;
                    m++
                  ) {
                    d.index > m ? ((g = d), (d = null)) : (g = d.sibling);
                    var v = h(a, d, s[m], l);
                    if (null === v) {
                      null === d && (d = g);
                      break;
                    }
                    e && d && null === v.alternate && t(a, d),
                      (o = i(v, o, m)),
                      null === c ? (u = v) : (c.sibling = v),
                      (c = v),
                      (d = g);
                  }
                  if (m === s.length) return n(a, d), da && aa(a, m), u;
                  if (null === d) {
                    for (; m < s.length; m++)
                      null !== (d = f(a, s[m], l)) &&
                        ((o = i(d, o, m)),
                        null === c ? (u = d) : (c.sibling = d),
                        (c = d));
                    return da && aa(a, m), u;
                  }
                  for (d = r(d); m < s.length; m++)
                    null !== (g = p(d, a, m, s[m], l)) &&
                      (e &&
                        null !== g.alternate &&
                        d.delete(null === g.key ? m : g.key),
                      (o = i(g, o, m)),
                      null === c ? (u = g) : (c.sibling = g),
                      (c = g));
                  return (
                    e &&
                      d.forEach(function (e) {
                        return t(a, e);
                      }),
                    da && aa(a, m),
                    u
                  );
                })(l, u, c, d);
              if (N(c)) {
                if ("function" !== typeof (b = N(c))) throw Error(o(150));
                return (function (a, s, l, u) {
                  if (null == l) throw Error(o(151));
                  for (
                    var c = null,
                      d = null,
                      m = s,
                      g = (s = 0),
                      v = null,
                      y = l.next();
                    null !== m && !y.done;
                    g++, y = l.next()
                  ) {
                    m.index > g ? ((v = m), (m = null)) : (v = m.sibling);
                    var b = h(a, m, y.value, u);
                    if (null === b) {
                      null === m && (m = v);
                      break;
                    }
                    e && m && null === b.alternate && t(a, m),
                      (s = i(b, s, g)),
                      null === d ? (c = b) : (d.sibling = b),
                      (d = b),
                      (m = v);
                  }
                  if (y.done) return n(a, m), da && aa(a, g), c;
                  if (null === m) {
                    for (; !y.done; g++, y = l.next())
                      null !== (y = f(a, y.value, u)) &&
                        ((s = i(y, s, g)),
                        null === d ? (c = y) : (d.sibling = y),
                        (d = y));
                    return da && aa(a, g), c;
                  }
                  for (m = r(m); !y.done; g++, y = l.next())
                    null !== (y = p(m, a, g, y.value, u)) &&
                      (e &&
                        null !== y.alternate &&
                        m.delete(null === y.key ? g : y.key),
                      (s = i(y, s, g)),
                      null === d ? (c = y) : (d.sibling = y),
                      (d = y));
                  return (
                    e &&
                      m.forEach(function (e) {
                        return t(a, e);
                      }),
                    da && aa(a, g),
                    c
                  );
                })(l, u, (c = b.call(c)), d);
              }
              if ("function" === typeof c.then) return y(l, u, ui(c), d);
              if (c.$$typeof === x) return y(l, u, La(l, c), d);
              di(l, c);
            }
            return ("string" === typeof c && "" !== c) ||
              "number" === typeof c ||
              "bigint" === typeof c
              ? ((c = "" + c),
                null !== u && 6 === u.tag
                  ? (n(l, u.sibling), ((d = a(u, c)).return = l), (l = d))
                  : (n(l, u), ((d = Wr(c, l.mode, d)).return = l), (l = d)),
                s(l))
              : n(l, u);
          }
          return function (e, t, n, r) {
            try {
              li = 0;
              var a = y(e, t, n, r);
              return (si = null), a;
            } catch (o) {
              if (o === Ga || o === Ja) throw o;
              var i = _r(29, o, null, e.mode);
              return (i.lanes = r), (i.return = e), i;
            }
          };
        }
        var hi = fi(!0),
          pi = fi(!1),
          mi = !1;
        function gi(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, lanes: 0, hiddenCallbacks: null },
            callbacks: null,
          };
        }
        function vi(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                callbacks: null,
              });
        }
        function yi(e) {
          return { lane: e, tag: 0, payload: null, callback: null, next: null };
        }
        function bi(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & hu))) {
            var a = r.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              (t = zr(e)),
              jr(e, null, n),
              t
            );
          }
          return Dr(e, r, t, n), zr(e);
        }
        function wi(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194048 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), je(e, n);
          }
        }
        function xi(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              i = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var o = {
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: null,
                  next: null,
                };
                null === i ? (a = i = o) : (i = i.next = o), (n = n.next);
              } while (null !== n);
              null === i ? (a = i = t) : (i = i.next = t);
            } else a = i = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: i,
                shared: r.shared,
                callbacks: r.callbacks,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        var Si = !1;
        function ki() {
          if (Si) {
            if (null !== Wa) throw Wa;
          }
        }
        function Ei(e, t, n, r) {
          Si = !1;
          var a = e.updateQueue;
          mi = !1;
          var i = a.firstBaseUpdate,
            o = a.lastBaseUpdate,
            s = a.shared.pending;
          if (null !== s) {
            a.shared.pending = null;
            var l = s,
              u = l.next;
            (l.next = null), null === o ? (i = u) : (o.next = u), (o = l);
            var c = e.alternate;
            null !== c &&
              (s = (c = c.updateQueue).lastBaseUpdate) !== o &&
              (null === s ? (c.firstBaseUpdate = u) : (s.next = u),
              (c.lastBaseUpdate = l));
          }
          if (null !== i) {
            var d = a.baseState;
            for (o = 0, c = u = l = null, s = i; ; ) {
              var f = -536870913 & s.lane,
                p = f !== s.lane;
              if (p ? (gu & f) === f : (r & f) === f) {
                0 !== f && f === Ha && (Si = !0),
                  null !== c &&
                    (c = c.next =
                      {
                        lane: 0,
                        tag: s.tag,
                        payload: s.payload,
                        callback: null,
                        next: null,
                      });
                e: {
                  var m = e,
                    g = s;
                  f = t;
                  var v = n;
                  switch (g.tag) {
                    case 1:
                      if ("function" === typeof (m = g.payload)) {
                        d = m.call(v, d, f);
                        break e;
                      }
                      d = m;
                      break e;
                    case 3:
                      m.flags = (-65537 & m.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (f =
                            "function" === typeof (m = g.payload)
                              ? m.call(v, d, f)
                              : m) ||
                        void 0 === f
                      )
                        break e;
                      d = h({}, d, f);
                      break e;
                    case 2:
                      mi = !0;
                  }
                }
                null !== (f = s.callback) &&
                  ((e.flags |= 64),
                  p && (e.flags |= 8192),
                  null === (p = a.callbacks) ? (a.callbacks = [f]) : p.push(f));
              } else
                (p = {
                  lane: f,
                  tag: s.tag,
                  payload: s.payload,
                  callback: s.callback,
                  next: null,
                }),
                  null === c ? ((u = c = p), (l = d)) : (c = c.next = p),
                  (o |= f);
              if (null === (s = s.next)) {
                if (null === (s = a.shared.pending)) break;
                (s = (p = s).next),
                  (p.next = null),
                  (a.lastBaseUpdate = p),
                  (a.shared.pending = null);
              }
            }
            null === c && (l = d),
              (a.baseState = l),
              (a.firstBaseUpdate = u),
              (a.lastBaseUpdate = c),
              null === i && (a.shared.lanes = 0),
              (Eu |= o),
              (e.lanes = o),
              (e.memoizedState = d);
          }
        }
        function Ti(e, t) {
          if ("function" !== typeof e) throw Error(o(191, e));
          e.call(t);
        }
        function Ci(e, t) {
          var n = e.callbacks;
          if (null !== n)
            for (e.callbacks = null, e = 0; e < n.length; e++) Ti(n[e], t);
        }
        var Pi = V(null),
          Fi = V(0);
        function Ai(e, t) {
          I(Fi, (e = Su)), I(Pi, t), (Su = e | t.baseLanes);
        }
        function Ni() {
          I(Fi, Su), I(Pi, Pi.current);
        }
        function Di() {
          (Su = Fi.current), B(Pi), B(Fi);
        }
        var Mi = V(null),
          Li = null;
        function ji(e) {
          var t = e.alternate;
          I(Vi, 1 & Vi.current),
            I(Mi, e),
            null === Li &&
              (null === t || null !== Pi.current || null !== t.memoizedState) &&
              (Li = e);
        }
        function zi(e) {
          I(Vi, Vi.current), I(Mi, e), null === Li && (Li = e);
        }
        function Ri(e) {
          22 === e.tag
            ? (I(Vi, Vi.current), I(Mi, e), null === Li && (Li = e))
            : Oi();
        }
        function Oi() {
          I(Vi, Vi.current), I(Mi, Mi.current);
        }
        function _i(e) {
          B(Mi), Li === e && (Li = null), B(Vi);
        }
        var Vi = V(0);
        function Bi(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (null !== n && (null === (n = n.dehydrated) || Dd(n) || Md(n)))
                return t;
            } else if (
              19 !== t.tag ||
              ("forwards" !== t.memoizedProps.revealOrder &&
                "backwards" !== t.memoizedProps.revealOrder &&
                "unstable_legacy-backwards" !== t.memoizedProps.revealOrder &&
                "together" !== t.memoizedProps.revealOrder)
            ) {
              if (null !== t.child) {
                (t.child.return = t), (t = t.child);
                continue;
              }
            } else if (0 !== (128 & t.flags)) return t;
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var Ii = 0,
          Ui = null,
          Hi = null,
          Wi = null,
          $i = !1,
          Yi = !1,
          qi = !1,
          Xi = 0,
          Ki = 0,
          Qi = null,
          Gi = 0;
        function Zi() {
          throw Error(o(321));
        }
        function Ji(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!Zn(e[n], t[n])) return !1;
          return !0;
        }
        function eo(e, t, n, r, a, i) {
          return (
            (Ii = i),
            (Ui = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (j.H = null === e || null === e.memoizedState ? gs : vs),
            (qi = !1),
            (i = n(r, a)),
            (qi = !1),
            Yi && (i = no(t, n, r, a)),
            to(e),
            i
          );
        }
        function to(e) {
          j.H = ms;
          var t = null !== Hi && null !== Hi.next;
          if (
            ((Ii = 0),
            (Wi = Hi = Ui = null),
            ($i = !1),
            (Ki = 0),
            (Qi = null),
            t)
          )
            throw Error(o(300));
          null === e ||
            Ls ||
            (null !== (e = e.dependencies) && Na(e) && (Ls = !0));
        }
        function no(e, t, n, r) {
          Ui = e;
          var a = 0;
          do {
            if ((Yi && (Qi = null), (Ki = 0), (Yi = !1), 25 <= a))
              throw Error(o(301));
            if (((a += 1), (Wi = Hi = null), null != e.updateQueue)) {
              var i = e.updateQueue;
              (i.lastEffect = null),
                (i.events = null),
                (i.stores = null),
                null != i.memoCache && (i.memoCache.index = 0);
            }
            (j.H = ys), (i = t(n, r));
          } while (Yi);
          return i;
        }
        function ro() {
          var e = j.H,
            t = e.useState()[0];
          return (
            (t = "function" === typeof t.then ? uo(t) : t),
            (e = e.useState()[0]),
            (null !== Hi ? Hi.memoizedState : null) !== e && (Ui.flags |= 1024),
            t
          );
        }
        function ao() {
          var e = 0 !== Xi;
          return (Xi = 0), e;
        }
        function io(e, t, n) {
          (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n);
        }
        function oo(e) {
          if ($i) {
            for (e = e.memoizedState; null !== e; ) {
              var t = e.queue;
              null !== t && (t.pending = null), (e = e.next);
            }
            $i = !1;
          }
          (Ii = 0),
            (Wi = Hi = Ui = null),
            (Yi = !1),
            (Ki = Xi = 0),
            (Qi = null);
        }
        function so() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === Wi ? (Ui.memoizedState = Wi = e) : (Wi = Wi.next = e), Wi
          );
        }
        function lo() {
          if (null === Hi) {
            var e = Ui.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = Hi.next;
          var t = null === Wi ? Ui.memoizedState : Wi.next;
          if (null !== t) (Wi = t), (Hi = e);
          else {
            if (null === e) {
              if (null === Ui.alternate) throw Error(o(467));
              throw Error(o(310));
            }
            (e = {
              memoizedState: (Hi = e).memoizedState,
              baseState: Hi.baseState,
              baseQueue: Hi.baseQueue,
              queue: Hi.queue,
              next: null,
            }),
              null === Wi ? (Ui.memoizedState = Wi = e) : (Wi = Wi.next = e);
          }
          return Wi;
        }
        function uo(e) {
          var t = Ki;
          return (
            (Ki += 1),
            null === Qi && (Qi = []),
            (e = ni(Qi, e, t)),
            (t = Ui),
            null === (null === Wi ? t.memoizedState : Wi.next) &&
              ((t = t.alternate),
              (j.H = null === t || null === t.memoizedState ? gs : vs)),
            e
          );
        }
        function co(e) {
          if (null !== e && "object" === typeof e) {
            if ("function" === typeof e.then) return uo(e);
            if (e.$$typeof === x) return Ma(e);
          }
          throw Error(o(438, String(e)));
        }
        function fo(e) {
          var t = null,
            n = Ui.updateQueue;
          if ((null !== n && (t = n.memoCache), null == t)) {
            var r = Ui.alternate;
            null !== r &&
              null !== (r = r.updateQueue) &&
              null != (r = r.memoCache) &&
              (t = {
                data: r.data.map(function (e) {
                  return e.slice();
                }),
                index: 0,
              });
          }
          if (
            (null == t && (t = { data: [], index: 0 }),
            null === n &&
              ((n = {
                lastEffect: null,
                events: null,
                stores: null,
                memoCache: null,
              }),
              (Ui.updateQueue = n)),
            (n.memoCache = t),
            void 0 === (n = t.data[t.index]))
          )
            for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = F;
          return t.index++, n;
        }
        function ho(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function po(e) {
          return mo(lo(), Hi, e);
        }
        function mo(e, t, n) {
          var r = e.queue;
          if (null === r) throw Error(o(311));
          r.lastRenderedReducer = n;
          var a = e.baseQueue,
            i = r.pending;
          if (null !== i) {
            if (null !== a) {
              var s = a.next;
              (a.next = i.next), (i.next = s);
            }
            (t.baseQueue = a = i), (r.pending = null);
          }
          if (((i = e.baseState), null === a)) e.memoizedState = i;
          else {
            var l = (s = null),
              u = null,
              c = (t = a.next),
              d = !1;
            do {
              var f = -536870913 & c.lane;
              if (f !== c.lane ? (gu & f) === f : (Ii & f) === f) {
                var h = c.revertLane;
                if (0 === h)
                  null !== u &&
                    (u = u.next =
                      {
                        lane: 0,
                        revertLane: 0,
                        gesture: null,
                        action: c.action,
                        hasEagerState: c.hasEagerState,
                        eagerState: c.eagerState,
                        next: null,
                      }),
                    f === Ha && (d = !0);
                else {
                  if ((Ii & h) === h) {
                    (c = c.next), h === Ha && (d = !0);
                    continue;
                  }
                  (f = {
                    lane: 0,
                    revertLane: c.revertLane,
                    gesture: null,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null,
                  }),
                    null === u ? ((l = u = f), (s = i)) : (u = u.next = f),
                    (Ui.lanes |= h),
                    (Eu |= h);
                }
                (f = c.action),
                  qi && n(i, f),
                  (i = c.hasEagerState ? c.eagerState : n(i, f));
              } else
                (h = {
                  lane: f,
                  revertLane: c.revertLane,
                  gesture: c.gesture,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                }),
                  null === u ? ((l = u = h), (s = i)) : (u = u.next = h),
                  (Ui.lanes |= f),
                  (Eu |= f);
              c = c.next;
            } while (null !== c && c !== t);
            if (
              (null === u ? (s = i) : (u.next = l),
              !Zn(i, e.memoizedState) && ((Ls = !0), d && null !== (n = Wa)))
            )
              throw n;
            (e.memoizedState = i),
              (e.baseState = s),
              (e.baseQueue = u),
              (r.lastRenderedState = i);
          }
          return null === a && (r.lanes = 0), [e.memoizedState, r.dispatch];
        }
        function go(e) {
          var t = lo(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            i = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var s = (a = a.next);
            do {
              (i = e(i, s.action)), (s = s.next);
            } while (s !== a);
            Zn(i, t.memoizedState) || (Ls = !0),
              (t.memoizedState = i),
              null === t.baseQueue && (t.baseState = i),
              (n.lastRenderedState = i);
          }
          return [i, r];
        }
        function vo(e, t, n) {
          var r = Ui,
            a = lo(),
            i = da;
          if (i) {
            if (void 0 === n) throw Error(o(407));
            n = n();
          } else n = t();
          var s = !Zn((Hi || a).memoizedState, n);
          if (
            (s && ((a.memoizedState = n), (Ls = !0)),
            (a = a.queue),
            Uo(wo.bind(null, r, a, e), [e]),
            a.getSnapshot !== t ||
              s ||
              (null !== Wi && 1 & Wi.memoizedState.tag))
          ) {
            if (
              ((r.flags |= 2048),
              Oo(9, { destroy: void 0 }, bo.bind(null, r, a, n, t), null),
              null === pu)
            )
              throw Error(o(349));
            i || 0 !== (127 & Ii) || yo(r, t, n);
          }
          return n;
        }
        function yo(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = Ui.updateQueue)
              ? ((t = {
                  lastEffect: null,
                  events: null,
                  stores: null,
                  memoCache: null,
                }),
                (Ui.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function bo(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), xo(t) && So(e);
        }
        function wo(e, t, n) {
          return n(function () {
            xo(t) && So(e);
          });
        }
        function xo(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !Zn(e, n);
          } catch (r) {
            return !0;
          }
        }
        function So(e) {
          var t = Lr(e, 2);
          null !== t && Xu(t, e, 2);
        }
        function ko(e) {
          var t = so();
          if ("function" === typeof e) {
            var n = e;
            if (((e = n()), qi)) {
              be(!0);
              try {
                n();
              } finally {
                be(!1);
              }
            }
          }
          return (
            (t.memoizedState = t.baseState = e),
            (t.queue = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: ho,
              lastRenderedState: e,
            }),
            t
          );
        }
        function Eo(e, t, n, r) {
          return (e.baseState = n), mo(e, Hi, "function" === typeof r ? r : ho);
        }
        function To(e, t, n, r, a) {
          if (fs(e)) throw Error(o(485));
          if (null !== (e = t.action)) {
            var i = {
              payload: a,
              action: e,
              next: null,
              isTransition: !0,
              status: "pending",
              value: null,
              reason: null,
              listeners: [],
              then: function (e) {
                i.listeners.push(e);
              },
            };
            null !== j.T ? n(!0) : (i.isTransition = !1),
              r(i),
              null === (n = t.pending)
                ? ((i.next = t.pending = i), Co(t, i))
                : ((i.next = n.next), (t.pending = n.next = i));
          }
        }
        function Co(e, t) {
          var n = t.action,
            r = t.payload,
            a = e.state;
          if (t.isTransition) {
            var i = j.T,
              o = {};
            j.T = o;
            try {
              var s = n(a, r),
                l = j.S;
              null !== l && l(o, s), Po(e, t, s);
            } catch (u) {
              Ao(e, t, u);
            } finally {
              null !== i && null !== o.types && (i.types = o.types), (j.T = i);
            }
          } else
            try {
              Po(e, t, (i = n(a, r)));
            } catch (c) {
              Ao(e, t, c);
            }
        }
        function Po(e, t, n) {
          null !== n && "object" === typeof n && "function" === typeof n.then
            ? n.then(
                function (n) {
                  Fo(e, t, n);
                },
                function (n) {
                  return Ao(e, t, n);
                }
              )
            : Fo(e, t, n);
        }
        function Fo(e, t, n) {
          (t.status = "fulfilled"),
            (t.value = n),
            No(t),
            (e.state = n),
            null !== (t = e.pending) &&
              ((n = t.next) === t
                ? (e.pending = null)
                : ((n = n.next), (t.next = n), Co(e, n)));
        }
        function Ao(e, t, n) {
          var r = e.pending;
          if (((e.pending = null), null !== r)) {
            r = r.next;
            do {
              (t.status = "rejected"), (t.reason = n), No(t), (t = t.next);
            } while (t !== r);
          }
          e.action = null;
        }
        function No(e) {
          e = e.listeners;
          for (var t = 0; t < e.length; t++) (0, e[t])();
        }
        function Do(e, t) {
          return t;
        }
        function Mo(e, t) {
          if (da) {
            var n = pu.formState;
            if (null !== n) {
              e: {
                var r = Ui;
                if (da) {
                  if (ca) {
                    t: {
                      for (var a = ca, i = ha; 8 !== a.nodeType; ) {
                        if (!i) {
                          a = null;
                          break t;
                        }
                        if (null === (a = Ld(a.nextSibling))) {
                          a = null;
                          break t;
                        }
                      }
                      a = "F!" === (i = a.data) || "F" === i ? a : null;
                    }
                    if (a) {
                      (ca = Ld(a.nextSibling)), (r = "F!" === a.data);
                      break e;
                    }
                  }
                  ma(r);
                }
                r = !1;
              }
              r && (t = n[0]);
            }
          }
          return (
            ((n = so()).memoizedState = n.baseState = t),
            (r = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Do,
              lastRenderedState: t,
            }),
            (n.queue = r),
            (n = us.bind(null, Ui, r)),
            (r.dispatch = n),
            (r = ko(!1)),
            (i = ds.bind(null, Ui, !1, r.queue)),
            (a = { state: t, dispatch: null, action: e, pending: null }),
            ((r = so()).queue = a),
            (n = To.bind(null, Ui, a, i, n)),
            (a.dispatch = n),
            (r.memoizedState = e),
            [t, n, !1]
          );
        }
        function Lo(e) {
          return jo(lo(), Hi, e);
        }
        function jo(e, t, n) {
          if (
            ((t = mo(e, t, Do)[0]),
            (e = po(ho)[0]),
            "object" === typeof t && null !== t && "function" === typeof t.then)
          )
            try {
              var r = uo(t);
            } catch (o) {
              if (o === Ga) throw Ja;
              throw o;
            }
          else r = t;
          var a = (t = lo()).queue,
            i = a.dispatch;
          return (
            n !== t.memoizedState &&
              ((Ui.flags |= 2048),
              Oo(9, { destroy: void 0 }, zo.bind(null, a, n), null)),
            [r, i, e]
          );
        }
        function zo(e, t) {
          e.action = t;
        }
        function Ro(e) {
          var t = lo(),
            n = Hi;
          if (null !== n) return jo(t, n, e);
          lo(), (t = t.memoizedState);
          var r = (n = lo()).queue.dispatch;
          return (n.memoizedState = e), [t, r, !1];
        }
        function Oo(e, t, n, r) {
          return (
            (e = { tag: e, create: n, deps: r, inst: t, next: null }),
            null === (t = Ui.updateQueue) &&
              ((t = {
                lastEffect: null,
                events: null,
                stores: null,
                memoCache: null,
              }),
              (Ui.updateQueue = t)),
            null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function _o() {
          return lo().memoizedState;
        }
        function Vo(e, t, n, r) {
          var a = so();
          (Ui.flags |= e),
            (a.memoizedState = Oo(
              1 | t,
              { destroy: void 0 },
              n,
              void 0 === r ? null : r
            ));
        }
        function Bo(e, t, n, r) {
          var a = lo();
          r = void 0 === r ? null : r;
          var i = a.memoizedState.inst;
          null !== Hi && null !== r && Ji(r, Hi.memoizedState.deps)
            ? (a.memoizedState = Oo(t, i, n, r))
            : ((Ui.flags |= e), (a.memoizedState = Oo(1 | t, i, n, r)));
        }
        function Io(e, t) {
          Vo(8390656, 8, e, t);
        }
        function Uo(e, t) {
          Bo(2048, 8, e, t);
        }
        function Ho(e) {
          var t = lo().memoizedState;
          return (
            (function (e) {
              Ui.flags |= 4;
              var t = Ui.updateQueue;
              if (null === t)
                (t = {
                  lastEffect: null,
                  events: null,
                  stores: null,
                  memoCache: null,
                }),
                  (Ui.updateQueue = t),
                  (t.events = [e]);
              else {
                var n = t.events;
                null === n ? (t.events = [e]) : n.push(e);
              }
            })({ ref: t, nextImpl: e }),
            function () {
              if (0 !== (2 & hu)) throw Error(o(440));
              return t.impl.apply(void 0, arguments);
            }
          );
        }
        function Wo(e, t) {
          return Bo(4, 2, e, t);
        }
        function $o(e, t) {
          return Bo(4, 4, e, t);
        }
        function Yo(e, t) {
          if ("function" === typeof t) {
            e = e();
            var n = t(e);
            return function () {
              "function" === typeof n ? n() : t(null);
            };
          }
          if (null !== t && void 0 !== t)
            return (
              (e = e()),
              (t.current = e),
              function () {
                t.current = null;
              }
            );
        }
        function qo(e, t, n) {
          (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Bo(4, 4, Yo.bind(null, t, e), n);
        }
        function Xo() {}
        function Ko(e, t) {
          var n = lo();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== t && Ji(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Qo(e, t) {
          var n = lo();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          if (null !== t && Ji(t, r[1])) return r[0];
          if (((r = e()), qi)) {
            be(!0);
            try {
              e();
            } finally {
              be(!1);
            }
          }
          return (n.memoizedState = [r, t]), r;
        }
        function Go(e, t, n) {
          return void 0 === n ||
            (0 !== (1073741824 & Ii) && 0 === (261930 & gu))
            ? (e.memoizedState = t)
            : ((e.memoizedState = n),
              (e = qu()),
              (Ui.lanes |= e),
              (Eu |= e),
              n);
        }
        function Zo(e, t, n, r) {
          return Zn(n, t)
            ? n
            : null !== Pi.current
            ? ((e = Go(e, n, r)), Zn(e, t) || (Ls = !0), e)
            : 0 === (42 & Ii) ||
              (0 !== (1073741824 & Ii) && 0 === (261930 & gu))
            ? ((Ls = !0), (e.memoizedState = n))
            : ((e = qu()), (Ui.lanes |= e), (Eu |= e), t);
        }
        function Jo(e, t, n, r, a) {
          var i = z.p;
          z.p = 0 !== i && 8 > i ? i : 8;
          var o = j.T,
            s = {};
          (j.T = s), ds(e, !1, t, n);
          try {
            var l = a(),
              u = j.S;
            if (
              (null !== u && u(s, l),
              null !== l &&
                "object" === typeof l &&
                "function" === typeof l.then)
            )
              cs(
                e,
                t,
                (function (e, t) {
                  var n = [],
                    r = {
                      status: "pending",
                      value: null,
                      reason: null,
                      then: function (e) {
                        n.push(e);
                      },
                    };
                  return (
                    e.then(
                      function () {
                        (r.status = "fulfilled"), (r.value = t);
                        for (var e = 0; e < n.length; e++) (0, n[e])(t);
                      },
                      function (e) {
                        for (
                          r.status = "rejected", r.reason = e, e = 0;
                          e < n.length;
                          e++
                        )
                          (0, n[e])(void 0);
                      }
                    ),
                    r
                  );
                })(l, r),
                Yu()
              );
            else cs(e, t, r, Yu());
          } catch (c) {
            cs(
              e,
              t,
              { then: function () {}, status: "rejected", reason: c },
              Yu()
            );
          } finally {
            (z.p = i),
              null !== o && null !== s.types && (o.types = s.types),
              (j.T = o);
          }
        }
        function es() {}
        function ts(e, t, n, r) {
          if (5 !== e.tag) throw Error(o(476));
          var a = ns(e).queue;
          Jo(
            e,
            a,
            t,
            R,
            null === n
              ? es
              : function () {
                  return rs(e), n(r);
                }
          );
        }
        function ns(e) {
          var t = e.memoizedState;
          if (null !== t) return t;
          var n = {};
          return (
            ((t = {
              memoizedState: R,
              baseState: R,
              baseQueue: null,
              queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: ho,
                lastRenderedState: R,
              },
              next: null,
            }).next = {
              memoizedState: n,
              baseState: n,
              baseQueue: null,
              queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: ho,
                lastRenderedState: n,
              },
              next: null,
            }),
            (e.memoizedState = t),
            null !== (e = e.alternate) && (e.memoizedState = t),
            t
          );
        }
        function rs(e) {
          var t = ns(e);
          null === t.next && (t = e.alternate.memoizedState),
            cs(e, t.next.queue, {}, Yu());
        }
        function as() {
          return Ma(df);
        }
        function is() {
          return lo().memoizedState;
        }
        function os() {
          return lo().memoizedState;
        }
        function ss(e) {
          for (var t = e.return; null !== t; ) {
            switch (t.tag) {
              case 24:
              case 3:
                var n = Yu(),
                  r = bi(t, (e = yi(n)), n);
                return (
                  null !== r && (Xu(r, t, n), wi(r, t, n)),
                  (t = { cache: Va() }),
                  void (e.payload = t)
                );
            }
            t = t.return;
          }
        }
        function ls(e, t, n) {
          var r = Yu();
          (n = {
            lane: r,
            revertLane: 0,
            gesture: null,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
          }),
            fs(e)
              ? hs(t, n)
              : null !== (n = Mr(e, t, n, r)) && (Xu(n, e, r), ps(n, t, r));
        }
        function us(e, t, n) {
          cs(e, t, n, Yu());
        }
        function cs(e, t, n, r) {
          var a = {
            lane: r,
            revertLane: 0,
            gesture: null,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
          };
          if (fs(e)) hs(t, a);
          else {
            var i = e.alternate;
            if (
              0 === e.lanes &&
              (null === i || 0 === i.lanes) &&
              null !== (i = t.lastRenderedReducer)
            )
              try {
                var o = t.lastRenderedState,
                  s = i(o, n);
                if (((a.hasEagerState = !0), (a.eagerState = s), Zn(s, o)))
                  return Dr(e, t, a, 0), null === pu && Nr(), !1;
              } catch (l) {}
            if (null !== (n = Mr(e, t, a, r)))
              return Xu(n, e, r), ps(n, t, r), !0;
          }
          return !1;
        }
        function ds(e, t, n, r) {
          if (
            ((r = {
              lane: 2,
              revertLane: Uc(),
              gesture: null,
              action: r,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            fs(e))
          ) {
            if (t) throw Error(o(479));
          } else null !== (t = Mr(e, n, r, 2)) && Xu(t, e, 2);
        }
        function fs(e) {
          var t = e.alternate;
          return e === Ui || (null !== t && t === Ui);
        }
        function hs(e, t) {
          Yi = $i = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function ps(e, t, n) {
          if (0 !== (4194048 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), je(e, n);
          }
        }
        var ms = {
          readContext: Ma,
          use: co,
          useCallback: Zi,
          useContext: Zi,
          useEffect: Zi,
          useImperativeHandle: Zi,
          useLayoutEffect: Zi,
          useInsertionEffect: Zi,
          useMemo: Zi,
          useReducer: Zi,
          useRef: Zi,
          useState: Zi,
          useDebugValue: Zi,
          useDeferredValue: Zi,
          useTransition: Zi,
          useSyncExternalStore: Zi,
          useId: Zi,
          useHostTransitionStatus: Zi,
          useFormState: Zi,
          useActionState: Zi,
          useOptimistic: Zi,
          useMemoCache: Zi,
          useCacheRefresh: Zi,
        };
        ms.useEffectEvent = Zi;
        var gs = {
            readContext: Ma,
            use: co,
            useCallback: function (e, t) {
              return (so().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Ma,
            useEffect: Io,
            useImperativeHandle: function (e, t, n) {
              (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Vo(4194308, 4, Yo.bind(null, t, e), n);
            },
            useLayoutEffect: function (e, t) {
              return Vo(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              Vo(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = so();
              t = void 0 === t ? null : t;
              var r = e();
              if (qi) {
                be(!0);
                try {
                  e();
                } finally {
                  be(!1);
                }
              }
              return (n.memoizedState = [r, t]), r;
            },
            useReducer: function (e, t, n) {
              var r = so();
              if (void 0 !== n) {
                var a = n(t);
                if (qi) {
                  be(!0);
                  try {
                    n(t);
                  } finally {
                    be(!1);
                  }
                }
              } else a = t;
              return (
                (r.memoizedState = r.baseState = a),
                (e = {
                  pending: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: a,
                }),
                (r.queue = e),
                (e = e.dispatch = ls.bind(null, Ui, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (so().memoizedState = e);
            },
            useState: function (e) {
              var t = (e = ko(e)).queue,
                n = us.bind(null, Ui, t);
              return (t.dispatch = n), [e.memoizedState, n];
            },
            useDebugValue: Xo,
            useDeferredValue: function (e, t) {
              return Go(so(), e, t);
            },
            useTransition: function () {
              var e = ko(!1);
              return (
                (e = Jo.bind(null, Ui, e.queue, !0, !1)),
                (so().memoizedState = e),
                [!1, e]
              );
            },
            useSyncExternalStore: function (e, t, n) {
              var r = Ui,
                a = so();
              if (da) {
                if (void 0 === n) throw Error(o(407));
                n = n();
              } else {
                if (((n = t()), null === pu)) throw Error(o(349));
                0 !== (127 & gu) || yo(r, t, n);
              }
              a.memoizedState = n;
              var i = { value: n, getSnapshot: t };
              return (
                (a.queue = i),
                Io(wo.bind(null, r, i, e), [e]),
                (r.flags |= 2048),
                Oo(9, { destroy: void 0 }, bo.bind(null, r, i, n, t), null),
                n
              );
            },
            useId: function () {
              var e = so(),
                t = pu.identifierPrefix;
              if (da) {
                var n = ra;
                (t =
                  "_" +
                  t +
                  "R_" +
                  (n = (na & ~(1 << (32 - we(na) - 1))).toString(32) + n)),
                  0 < (n = Xi++) && (t += "H" + n.toString(32)),
                  (t += "_");
              } else t = "_" + t + "r_" + (n = Gi++).toString(32) + "_";
              return (e.memoizedState = t);
            },
            useHostTransitionStatus: as,
            useFormState: Mo,
            useActionState: Mo,
            useOptimistic: function (e) {
              var t = so();
              t.memoizedState = t.baseState = e;
              var n = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: null,
                lastRenderedState: null,
              };
              return (
                (t.queue = n),
                (t = ds.bind(null, Ui, !0, n)),
                (n.dispatch = t),
                [e, t]
              );
            },
            useMemoCache: fo,
            useCacheRefresh: function () {
              return (so().memoizedState = ss.bind(null, Ui));
            },
            useEffectEvent: function (e) {
              var t = so(),
                n = { impl: e };
              return (
                (t.memoizedState = n),
                function () {
                  if (0 !== (2 & hu)) throw Error(o(440));
                  return n.impl.apply(void 0, arguments);
                }
              );
            },
          },
          vs = {
            readContext: Ma,
            use: co,
            useCallback: Ko,
            useContext: Ma,
            useEffect: Uo,
            useImperativeHandle: qo,
            useInsertionEffect: Wo,
            useLayoutEffect: $o,
            useMemo: Qo,
            useReducer: po,
            useRef: _o,
            useState: function () {
              return po(ho);
            },
            useDebugValue: Xo,
            useDeferredValue: function (e, t) {
              return Zo(lo(), Hi.memoizedState, e, t);
            },
            useTransition: function () {
              var e = po(ho)[0],
                t = lo().memoizedState;
              return ["boolean" === typeof e ? e : uo(e), t];
            },
            useSyncExternalStore: vo,
            useId: is,
            useHostTransitionStatus: as,
            useFormState: Lo,
            useActionState: Lo,
            useOptimistic: function (e, t) {
              return Eo(lo(), 0, e, t);
            },
            useMemoCache: fo,
            useCacheRefresh: os,
          };
        vs.useEffectEvent = Ho;
        var ys = {
          readContext: Ma,
          use: co,
          useCallback: Ko,
          useContext: Ma,
          useEffect: Uo,
          useImperativeHandle: qo,
          useInsertionEffect: Wo,
          useLayoutEffect: $o,
          useMemo: Qo,
          useReducer: go,
          useRef: _o,
          useState: function () {
            return go(ho);
          },
          useDebugValue: Xo,
          useDeferredValue: function (e, t) {
            var n = lo();
            return null === Hi ? Go(n, e, t) : Zo(n, Hi.memoizedState, e, t);
          },
          useTransition: function () {
            var e = go(ho)[0],
              t = lo().memoizedState;
            return ["boolean" === typeof e ? e : uo(e), t];
          },
          useSyncExternalStore: vo,
          useId: is,
          useHostTransitionStatus: as,
          useFormState: Ro,
          useActionState: Ro,
          useOptimistic: function (e, t) {
            var n = lo();
            return null !== Hi
              ? Eo(n, 0, e, t)
              : ((n.baseState = e), [e, n.queue.dispatch]);
          },
          useMemoCache: fo,
          useCacheRefresh: os,
        };
        function bs(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : h({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        ys.useEffectEvent = Ho;
        var ws = {
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = Yu(),
              a = yi(r);
            (a.payload = t),
              void 0 !== n && null !== n && (a.callback = n),
              null !== (t = bi(e, a, r)) && (Xu(t, e, r), wi(t, e, r));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = Yu(),
              a = yi(r);
            (a.tag = 1),
              (a.payload = t),
              void 0 !== n && null !== n && (a.callback = n),
              null !== (t = bi(e, a, r)) && (Xu(t, e, r), wi(t, e, r));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = Yu(),
              r = yi(n);
            (r.tag = 2),
              void 0 !== t && null !== t && (r.callback = t),
              null !== (t = bi(e, r, n)) && (Xu(t, e, n), wi(t, e, n));
          },
        };
        function xs(e, t, n, r, a, i, o) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, i, o)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !Jn(n, r) ||
                !Jn(a, i);
        }
        function Ss(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && ws.enqueueReplaceState(t, t.state, null);
        }
        function ks(e, t) {
          var n = t;
          if ("ref" in t)
            for (var r in ((n = {}), t)) "ref" !== r && (n[r] = t[r]);
          if ((e = e.defaultProps))
            for (var a in (n === t && (n = h({}, n)), e))
              void 0 === n[a] && (n[a] = e[a]);
          return n;
        }
        function Es(e) {
          Cr(e);
        }
        function Ts(e) {
          console.error(e);
        }
        function Cs(e) {
          Cr(e);
        }
        function Ps(e, t) {
          try {
            (0, e.onUncaughtError)(t.value, { componentStack: t.stack });
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        function Fs(e, t, n) {
          try {
            (0, e.onCaughtError)(n.value, {
              componentStack: n.stack,
              errorBoundary: 1 === t.tag ? t.stateNode : null,
            });
          } catch (r) {
            setTimeout(function () {
              throw r;
            });
          }
        }
        function As(e, t, n) {
          return (
            ((n = yi(n)).tag = 3),
            (n.payload = { element: null }),
            (n.callback = function () {
              Ps(e, t);
            }),
            n
          );
        }
        function Ns(e) {
          return ((e = yi(e)).tag = 3), e;
        }
        function Ds(e, t, n, r) {
          var a = n.type.getDerivedStateFromError;
          if ("function" === typeof a) {
            var i = r.value;
            (e.payload = function () {
              return a(i);
            }),
              (e.callback = function () {
                Fs(t, n, r);
              });
          }
          var o = n.stateNode;
          null !== o &&
            "function" === typeof o.componentDidCatch &&
            (e.callback = function () {
              Fs(t, n, r),
                "function" !== typeof a &&
                  (null === Ru ? (Ru = new Set([this])) : Ru.add(this));
              var e = r.stack;
              this.componentDidCatch(r.value, {
                componentStack: null !== e ? e : "",
              });
            });
        }
        var Ms = Error(o(461)),
          Ls = !1;
        function js(e, t, n, r) {
          t.child = null === e ? pi(t, null, n, r) : hi(t, e.child, n, r);
        }
        function zs(e, t, n, r, a) {
          n = n.render;
          var i = t.ref;
          if ("ref" in r) {
            var o = {};
            for (var s in r) "ref" !== s && (o[s] = r[s]);
          } else o = r;
          return (
            Da(t),
            (r = eo(e, t, n, o, i, a)),
            (s = ao()),
            null === e || Ls
              ? (da && s && oa(t), (t.flags |= 1), js(e, t, r, a), t.child)
              : (io(e, t, a), al(e, t, a))
          );
        }
        function Rs(e, t, n, r, a) {
          if (null === e) {
            var i = n.type;
            return "function" !== typeof i ||
              Vr(i) ||
              void 0 !== i.defaultProps ||
              null !== n.compare
              ? (((e = Ur(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = i), Os(e, t, i, r, a));
          }
          if (((i = e.child), !il(e, a))) {
            var o = i.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : Jn)(o, r) &&
              e.ref === t.ref
            )
              return al(e, t, a);
          }
          return (
            (t.flags |= 1),
            ((e = Br(i, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function Os(e, t, n, r, a) {
          if (null !== e) {
            var i = e.memoizedProps;
            if (Jn(i, r) && e.ref === t.ref) {
              if (((Ls = !1), (t.pendingProps = r = i), !il(e, a)))
                return (t.lanes = e.lanes), al(e, t, a);
              0 !== (131072 & e.flags) && (Ls = !0);
            }
          }
          return Ws(e, t, n, r, a);
        }
        function _s(e, t, n, r) {
          var a = r.children,
            i = null !== e ? e.memoizedState : null;
          if (
            (null === e &&
              null === t.stateNode &&
              (t.stateNode = {
                _visibility: 1,
                _pendingMarkers: null,
                _retryCache: null,
                _transitions: null,
              }),
            "hidden" === r.mode)
          ) {
            if (0 !== (128 & t.flags)) {
              if (((i = null !== i ? i.baseLanes | n : n), null !== e)) {
                for (r = t.child = e.child, a = 0; null !== r; )
                  (a = a | r.lanes | r.childLanes), (r = r.sibling);
                r = a & ~i;
              } else (r = 0), (t.child = null);
              return Bs(e, t, i, n, r);
            }
            if (0 === (536870912 & n))
              return (
                (r = t.lanes = 536870912),
                Bs(e, t, null !== i ? i.baseLanes | n : n, n, r)
              );
            (t.memoizedState = { baseLanes: 0, cachePool: null }),
              null !== e && Ka(0, null !== i ? i.cachePool : null),
              null !== i ? Ai(t, i) : Ni(),
              Ri(t);
          } else
            null !== i
              ? (Ka(0, i.cachePool), Ai(t, i), Oi(), (t.memoizedState = null))
              : (null !== e && Ka(0, null), Ni(), Oi());
          return js(e, t, a, n), t.child;
        }
        function Vs(e, t) {
          return (
            (null !== e && 22 === e.tag) ||
              null !== t.stateNode ||
              (t.stateNode = {
                _visibility: 1,
                _pendingMarkers: null,
                _retryCache: null,
                _transitions: null,
              }),
            t.sibling
          );
        }
        function Bs(e, t, n, r, a) {
          var i = Xa();
          return (
            (i = null === i ? null : { parent: _a._currentValue, pool: i }),
            (t.memoizedState = { baseLanes: n, cachePool: i }),
            null !== e && Ka(0, null),
            Ni(),
            Ri(t),
            null !== e && Aa(e, t, r, !0),
            (t.childLanes = a),
            null
          );
        }
        function Is(e, t) {
          return (
            ((t = Js({ mode: t.mode, children: t.children }, e.mode)).ref =
              e.ref),
            (e.child = t),
            (t.return = e),
            t
          );
        }
        function Us(e, t, n) {
          return (
            hi(t, e.child, null, n),
            ((e = Is(t, t.pendingProps)).flags |= 2),
            _i(t),
            (t.memoizedState = null),
            e
          );
        }
        function Hs(e, t) {
          var n = t.ref;
          if (null === n) null !== e && null !== e.ref && (t.flags |= 4194816);
          else {
            if ("function" !== typeof n && "object" !== typeof n)
              throw Error(o(284));
            (null !== e && e.ref === n) || (t.flags |= 4194816);
          }
        }
        function Ws(e, t, n, r, a) {
          return (
            Da(t),
            (n = eo(e, t, n, r, void 0, a)),
            (r = ao()),
            null === e || Ls
              ? (da && r && oa(t), (t.flags |= 1), js(e, t, n, a), t.child)
              : (io(e, t, a), al(e, t, a))
          );
        }
        function $s(e, t, n, r, a, i) {
          return (
            Da(t),
            (t.updateQueue = null),
            (n = no(t, r, n, a)),
            to(e),
            (r = ao()),
            null === e || Ls
              ? (da && r && oa(t), (t.flags |= 1), js(e, t, n, i), t.child)
              : (io(e, t, i), al(e, t, i))
          );
        }
        function Ys(e, t, n, r, a) {
          if ((Da(t), null === t.stateNode)) {
            var i = Rr,
              o = n.contextType;
            "object" === typeof o && null !== o && (i = Ma(o)),
              (i = new n(r, i)),
              (t.memoizedState =
                null !== i.state && void 0 !== i.state ? i.state : null),
              (i.updater = ws),
              (t.stateNode = i),
              (i._reactInternals = t),
              ((i = t.stateNode).props = r),
              (i.state = t.memoizedState),
              (i.refs = {}),
              gi(t),
              (o = n.contextType),
              (i.context = "object" === typeof o && null !== o ? Ma(o) : Rr),
              (i.state = t.memoizedState),
              "function" === typeof (o = n.getDerivedStateFromProps) &&
                (bs(t, n, o, r), (i.state = t.memoizedState)),
              "function" === typeof n.getDerivedStateFromProps ||
                "function" === typeof i.getSnapshotBeforeUpdate ||
                ("function" !== typeof i.UNSAFE_componentWillMount &&
                  "function" !== typeof i.componentWillMount) ||
                ((o = i.state),
                "function" === typeof i.componentWillMount &&
                  i.componentWillMount(),
                "function" === typeof i.UNSAFE_componentWillMount &&
                  i.UNSAFE_componentWillMount(),
                o !== i.state && ws.enqueueReplaceState(i, i.state, null),
                Ei(t, r, i, a),
                ki(),
                (i.state = t.memoizedState)),
              "function" === typeof i.componentDidMount && (t.flags |= 4194308),
              (r = !0);
          } else if (null === e) {
            i = t.stateNode;
            var s = t.memoizedProps,
              l = ks(n, s);
            i.props = l;
            var u = i.context,
              c = n.contextType;
            (o = Rr), "object" === typeof c && null !== c && (o = Ma(c));
            var d = n.getDerivedStateFromProps;
            (c =
              "function" === typeof d ||
              "function" === typeof i.getSnapshotBeforeUpdate),
              (s = t.pendingProps !== s),
              c ||
                ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                  "function" !== typeof i.componentWillReceiveProps) ||
                ((s || u !== o) && Ss(t, i, r, o)),
              (mi = !1);
            var f = t.memoizedState;
            (i.state = f),
              Ei(t, r, i, a),
              ki(),
              (u = t.memoizedState),
              s || f !== u || mi
                ? ("function" === typeof d &&
                    (bs(t, n, d, r), (u = t.memoizedState)),
                  (l = mi || xs(t, n, l, r, f, u, o))
                    ? (c ||
                        ("function" !== typeof i.UNSAFE_componentWillMount &&
                          "function" !== typeof i.componentWillMount) ||
                        ("function" === typeof i.componentWillMount &&
                          i.componentWillMount(),
                        "function" === typeof i.UNSAFE_componentWillMount &&
                          i.UNSAFE_componentWillMount()),
                      "function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = u)),
                  (i.props = r),
                  (i.state = u),
                  (i.context = o),
                  (r = l))
                : ("function" === typeof i.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (i = t.stateNode),
              vi(e, t),
              (c = ks(n, (o = t.memoizedProps))),
              (i.props = c),
              (d = t.pendingProps),
              (f = i.context),
              (u = n.contextType),
              (l = Rr),
              "object" === typeof u && null !== u && (l = Ma(u)),
              (u =
                "function" === typeof (s = n.getDerivedStateFromProps) ||
                "function" === typeof i.getSnapshotBeforeUpdate) ||
                ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                  "function" !== typeof i.componentWillReceiveProps) ||
                ((o !== d || f !== l) && Ss(t, i, r, l)),
              (mi = !1),
              (f = t.memoizedState),
              (i.state = f),
              Ei(t, r, i, a),
              ki();
            var h = t.memoizedState;
            o !== d ||
            f !== h ||
            mi ||
            (null !== e && null !== e.dependencies && Na(e.dependencies))
              ? ("function" === typeof s &&
                  (bs(t, n, s, r), (h = t.memoizedState)),
                (c =
                  mi ||
                  xs(t, n, c, r, f, h, l) ||
                  (null !== e && null !== e.dependencies && Na(e.dependencies)))
                  ? (u ||
                      ("function" !== typeof i.UNSAFE_componentWillUpdate &&
                        "function" !== typeof i.componentWillUpdate) ||
                      ("function" === typeof i.componentWillUpdate &&
                        i.componentWillUpdate(r, h, l),
                      "function" === typeof i.UNSAFE_componentWillUpdate &&
                        i.UNSAFE_componentWillUpdate(r, h, l)),
                    "function" === typeof i.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof i.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof i.componentDidUpdate ||
                      (o === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof i.getSnapshotBeforeUpdate ||
                      (o === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (i.props = r),
                (i.state = h),
                (i.context = l),
                (r = c))
              : ("function" !== typeof i.componentDidUpdate ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof i.getSnapshotBeforeUpdate ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return (
            (i = r),
            Hs(e, t),
            (r = 0 !== (128 & t.flags)),
            i || r
              ? ((i = t.stateNode),
                (n =
                  r && "function" !== typeof n.getDerivedStateFromError
                    ? null
                    : i.render()),
                (t.flags |= 1),
                null !== e && r
                  ? ((t.child = hi(t, e.child, null, a)),
                    (t.child = hi(t, null, n, a)))
                  : js(e, t, n, a),
                (t.memoizedState = i.state),
                (e = t.child))
              : (e = al(e, t, a)),
            e
          );
        }
        function qs(e, t, n, r) {
          return ba(), (t.flags |= 256), js(e, t, n, r), t.child;
        }
        var Xs = {
          dehydrated: null,
          treeContext: null,
          retryLane: 0,
          hydrationErrors: null,
        };
        function Ks(e) {
          return { baseLanes: e, cachePool: Qa() };
        }
        function Qs(e, t, n) {
          return (e = null !== e ? e.childLanes & ~n : 0), t && (e |= Pu), e;
        }
        function Gs(e, t, n) {
          var r,
            a = t.pendingProps,
            i = !1,
            s = 0 !== (128 & t.flags);
          if (
            ((r = s) ||
              (r =
                (null === e || null !== e.memoizedState) &&
                0 !== (2 & Vi.current)),
            r && ((i = !0), (t.flags &= -129)),
            (r = 0 !== (32 & t.flags)),
            (t.flags &= -33),
            null === e)
          ) {
            if (da) {
              if (
                (i ? ji(t) : Oi(),
                (e = ca)
                  ? null !==
                      (e =
                        null !== (e = Nd(e, ha)) && "&" !== e.data
                          ? e
                          : null) &&
                    ((t.memoizedState = {
                      dehydrated: e,
                      treeContext:
                        null !== ta ? { id: na, overflow: ra } : null,
                      retryLane: 536870912,
                      hydrationErrors: null,
                    }),
                    ((n = $r(e)).return = t),
                    (t.child = n),
                    (ua = t),
                    (ca = null))
                  : (e = null),
                null === e)
              )
                throw ma(t);
              return Md(e) ? (t.lanes = 32) : (t.lanes = 536870912), null;
            }
            var l = a.children;
            return (
              (a = a.fallback),
              i
                ? (Oi(),
                  (l = Js({ mode: "hidden", children: l }, (i = t.mode))),
                  (a = Hr(a, i, n, null)),
                  (l.return = t),
                  (a.return = t),
                  (l.sibling = a),
                  (t.child = l),
                  ((a = t.child).memoizedState = Ks(n)),
                  (a.childLanes = Qs(e, r, n)),
                  (t.memoizedState = Xs),
                  Vs(null, a))
                : (ji(t), Zs(t, l))
            );
          }
          var u = e.memoizedState;
          if (null !== u && null !== (l = u.dehydrated)) {
            if (s)
              256 & t.flags
                ? (ji(t), (t.flags &= -257), (t = el(e, t, n)))
                : null !== t.memoizedState
                ? (Oi(), (t.child = e.child), (t.flags |= 128), (t = null))
                : (Oi(),
                  (l = a.fallback),
                  (i = t.mode),
                  (a = Js({ mode: "visible", children: a.children }, i)),
                  ((l = Hr(l, i, n, null)).flags |= 2),
                  (a.return = t),
                  (l.return = t),
                  (a.sibling = l),
                  (t.child = a),
                  hi(t, e.child, null, n),
                  ((a = t.child).memoizedState = Ks(n)),
                  (a.childLanes = Qs(e, r, n)),
                  (t.memoizedState = Xs),
                  (t = Vs(null, a)));
            else if ((ji(t), Md(l))) {
              if ((r = l.nextSibling && l.nextSibling.dataset)) var c = r.dgst;
              (r = c),
                ((a = Error(o(419))).stack = ""),
                (a.digest = r),
                xa({ value: a, source: null, stack: null }),
                (t = el(e, t, n));
            } else if (
              (Ls || Aa(e, t, n, !1), (r = 0 !== (n & e.childLanes)), Ls || r)
            ) {
              if (
                null !== (r = pu) &&
                0 !== (a = ze(r, n)) &&
                a !== u.retryLane
              )
                throw ((u.retryLane = a), Lr(e, a), Xu(r, e, a), Ms);
              Dd(l) || oc(), (t = el(e, t, n));
            } else
              Dd(l)
                ? ((t.flags |= 192), (t.child = e.child), (t = null))
                : ((e = u.treeContext),
                  (ca = Ld(l.nextSibling)),
                  (ua = t),
                  (da = !0),
                  (fa = null),
                  (ha = !1),
                  null !== e && la(t, e),
                  ((t = Zs(t, a.children)).flags |= 4096));
            return t;
          }
          return i
            ? (Oi(),
              (l = a.fallback),
              (i = t.mode),
              (c = (u = e.child).sibling),
              ((a = Br(u, {
                mode: "hidden",
                children: a.children,
              })).subtreeFlags = 65011712 & u.subtreeFlags),
              null !== c
                ? (l = Br(c, l))
                : ((l = Hr(l, i, n, null)).flags |= 2),
              (l.return = t),
              (a.return = t),
              (a.sibling = l),
              (t.child = a),
              Vs(null, a),
              (a = t.child),
              null === (l = e.child.memoizedState)
                ? (l = Ks(n))
                : (null !== (i = l.cachePool)
                    ? ((u = _a._currentValue),
                      (i = i.parent !== u ? { parent: u, pool: u } : i))
                    : (i = Qa()),
                  (l = { baseLanes: l.baseLanes | n, cachePool: i })),
              (a.memoizedState = l),
              (a.childLanes = Qs(e, r, n)),
              (t.memoizedState = Xs),
              Vs(e.child, a))
            : (ji(t),
              (e = (n = e.child).sibling),
              ((n = Br(n, { mode: "visible", children: a.children })).return =
                t),
              (n.sibling = null),
              null !== e &&
                (null === (r = t.deletions)
                  ? ((t.deletions = [e]), (t.flags |= 16))
                  : r.push(e)),
              (t.child = n),
              (t.memoizedState = null),
              n);
        }
        function Zs(e, t) {
          return (
            ((t = Js({ mode: "visible", children: t }, e.mode)).return = e),
            (e.child = t)
          );
        }
        function Js(e, t) {
          return ((e = _r(22, e, null, t)).lanes = 0), e;
        }
        function el(e, t, n) {
          return (
            hi(t, e.child, null, n),
            ((e = Zs(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function tl(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), Pa(e.return, t, n);
        }
        function nl(e, t, n, r, a, i) {
          var o = e.memoizedState;
          null === o
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
                treeForkCount: i,
              })
            : ((o.isBackwards = t),
              (o.rendering = null),
              (o.renderingStartTime = 0),
              (o.last = r),
              (o.tail = n),
              (o.tailMode = a),
              (o.treeForkCount = i));
        }
        function rl(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            i = r.tail;
          r = r.children;
          var o = Vi.current,
            s = 0 !== (2 & o);
          if (
            (s ? ((o = (1 & o) | 2), (t.flags |= 128)) : (o &= 1),
            I(Vi, o),
            js(e, t, r, n),
            (r = da ? Zr : 0),
            !s && null !== e && 0 !== (128 & e.flags))
          )
            e: for (e = t.child; null !== e; ) {
              if (13 === e.tag) null !== e.memoizedState && tl(e, n, t);
              else if (19 === e.tag) tl(e, n, t);
              else if (null !== e.child) {
                (e.child.return = e), (e = e.child);
                continue;
              }
              if (e === t) break e;
              for (; null === e.sibling; ) {
                if (null === e.return || e.return === t) break e;
                e = e.return;
              }
              (e.sibling.return = e.return), (e = e.sibling);
            }
          switch (a) {
            case "forwards":
              for (n = t.child, a = null; null !== n; )
                null !== (e = n.alternate) && null === Bi(e) && (a = n),
                  (n = n.sibling);
              null === (n = a)
                ? ((a = t.child), (t.child = null))
                : ((a = n.sibling), (n.sibling = null)),
                nl(t, !1, a, n, i, r);
              break;
            case "backwards":
            case "unstable_legacy-backwards":
              for (n = null, a = t.child, t.child = null; null !== a; ) {
                if (null !== (e = a.alternate) && null === Bi(e)) {
                  t.child = a;
                  break;
                }
                (e = a.sibling), (a.sibling = n), (n = a), (a = e);
              }
              nl(t, !0, n, null, i, r);
              break;
            case "together":
              nl(t, !1, null, null, void 0, r);
              break;
            default:
              t.memoizedState = null;
          }
          return t.child;
        }
        function al(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Eu |= t.lanes),
            0 === (n & t.childLanes))
          ) {
            if (null === e) return null;
            if ((Aa(e, t, n, !1), 0 === (n & t.childLanes))) return null;
          }
          if (null !== e && t.child !== e.child) throw Error(o(153));
          if (null !== t.child) {
            for (
              n = Br((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Br(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function il(e, t) {
          return (
            0 !== (e.lanes & t) || !(null === (e = e.dependencies) || !Na(e))
          );
        }
        function ol(e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps) Ls = !0;
            else {
              if (!il(e, n) && 0 === (128 & t.flags))
                return (
                  (Ls = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        X(t, t.stateNode.containerInfo),
                          Ta(0, _a, e.memoizedState.cache),
                          ba();
                        break;
                      case 27:
                      case 5:
                        Q(t);
                        break;
                      case 4:
                        X(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        Ta(0, t.type, t.memoizedProps.value);
                        break;
                      case 31:
                        if (null !== t.memoizedState)
                          return (t.flags |= 128), zi(t), null;
                        break;
                      case 13:
                        var r = t.memoizedState;
                        if (null !== r)
                          return null !== r.dehydrated
                            ? (ji(t), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Gs(e, t, n)
                            : (ji(t),
                              null !== (e = al(e, t, n)) ? e.sibling : null);
                        ji(t);
                        break;
                      case 19:
                        var a = 0 !== (128 & e.flags);
                        if (
                          ((r = 0 !== (n & t.childLanes)) ||
                            (Aa(e, t, n, !1), (r = 0 !== (n & t.childLanes))),
                          a)
                        ) {
                          if (r) return rl(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          I(Vi, Vi.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                        return (t.lanes = 0), _s(e, t, n, t.pendingProps);
                      case 24:
                        Ta(0, _a, e.memoizedState.cache);
                    }
                    return al(e, t, n);
                  })(e, t, n)
                );
              Ls = 0 !== (131072 & e.flags);
            }
          else (Ls = !1), da && 0 !== (1048576 & t.flags) && ia(t, Zr, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 16:
              e: {
                var r = t.pendingProps;
                if (
                  ((e = ri(t.elementType)),
                  (t.type = e),
                  "function" !== typeof e)
                ) {
                  if (void 0 !== e && null !== e) {
                    var a = e.$$typeof;
                    if (a === S) {
                      (t.tag = 11), (t = zs(null, t, e, r, n));
                      break e;
                    }
                    if (a === T) {
                      (t.tag = 14), (t = Rs(null, t, e, r, n));
                      break e;
                    }
                  }
                  throw ((t = M(e) || e), Error(o(306, t, "")));
                }
                Vr(e)
                  ? ((r = ks(e, r)), (t.tag = 1), (t = Ys(null, t, e, r, n)))
                  : ((t.tag = 0), (t = Ws(null, t, e, r, n)));
              }
              return t;
            case 0:
              return Ws(e, t, t.type, t.pendingProps, n);
            case 1:
              return Ys(e, t, (r = t.type), (a = ks(r, t.pendingProps)), n);
            case 3:
              e: {
                if ((X(t, t.stateNode.containerInfo), null === e))
                  throw Error(o(387));
                r = t.pendingProps;
                var i = t.memoizedState;
                (a = i.element), vi(e, t), Ei(t, r, null, n);
                var s = t.memoizedState;
                if (
                  ((r = s.cache),
                  Ta(0, _a, r),
                  r !== i.cache && Fa(t, [_a], n, !0),
                  ki(),
                  (r = s.element),
                  i.isDehydrated)
                ) {
                  if (
                    ((i = { element: r, isDehydrated: !1, cache: s.cache }),
                    (t.updateQueue.baseState = i),
                    (t.memoizedState = i),
                    256 & t.flags)
                  ) {
                    t = qs(e, t, r, n);
                    break e;
                  }
                  if (r !== a) {
                    xa((a = Xr(Error(o(424)), t))), (t = qs(e, t, r, n));
                    break e;
                  }
                  if (9 === (e = t.stateNode.containerInfo).nodeType)
                    e = e.body;
                  else e = "HTML" === e.nodeName ? e.ownerDocument.body : e;
                  for (
                    ca = Ld(e.firstChild),
                      ua = t,
                      da = !0,
                      fa = null,
                      ha = !0,
                      n = pi(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((ba(), r === a)) {
                    t = al(e, t, n);
                    break e;
                  }
                  js(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 26:
              return (
                Hs(e, t),
                null === e
                  ? (n = $d(t.type, null, t.pendingProps, null))
                    ? (t.memoizedState = n)
                    : da ||
                      ((n = t.type),
                      (e = t.pendingProps),
                      ((r = gd(Y.current).createElement(n))[Ie] = t),
                      (r[Ue] = e),
                      fd(r, n, e),
                      et(r),
                      (t.stateNode = r))
                  : (t.memoizedState = $d(
                      t.type,
                      e.memoizedProps,
                      t.pendingProps,
                      e.memoizedState
                    )),
                null
              );
            case 27:
              return (
                Q(t),
                null === e &&
                  da &&
                  ((r = t.stateNode = Od(t.type, t.pendingProps, Y.current)),
                  (ua = t),
                  (ha = !0),
                  (a = ca),
                  Cd(t.type) ? ((jd = a), (ca = Ld(r.firstChild))) : (ca = a)),
                js(e, t, t.pendingProps.children, n),
                Hs(e, t),
                null === e && (t.flags |= 4194304),
                t.child
              );
            case 5:
              return (
                null === e &&
                  da &&
                  ((a = r = ca) &&
                    (null !==
                    (r = (function (e, t, n, r) {
                      for (; 1 === e.nodeType; ) {
                        var a = n;
                        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                          if (
                            !r &&
                            ("INPUT" !== e.nodeName || "hidden" !== e.type)
                          )
                            break;
                        } else if (r) {
                          if (!e[Xe])
                            switch (t) {
                              case "meta":
                                if (!e.hasAttribute("itemprop")) break;
                                return e;
                              case "link":
                                if (
                                  "stylesheet" ===
                                    (i = e.getAttribute("rel")) &&
                                  e.hasAttribute("data-precedence")
                                )
                                  break;
                                if (
                                  i !== a.rel ||
                                  e.getAttribute("href") !==
                                    (null == a.href || "" === a.href
                                      ? null
                                      : a.href) ||
                                  e.getAttribute("crossorigin") !==
                                    (null == a.crossOrigin
                                      ? null
                                      : a.crossOrigin) ||
                                  e.getAttribute("title") !==
                                    (null == a.title ? null : a.title)
                                )
                                  break;
                                return e;
                              case "style":
                                if (e.hasAttribute("data-precedence")) break;
                                return e;
                              case "script":
                                if (
                                  ((i = e.getAttribute("src")) !==
                                    (null == a.src ? null : a.src) ||
                                    e.getAttribute("type") !==
                                      (null == a.type ? null : a.type) ||
                                    e.getAttribute("crossorigin") !==
                                      (null == a.crossOrigin
                                        ? null
                                        : a.crossOrigin)) &&
                                  i &&
                                  e.hasAttribute("async") &&
                                  !e.hasAttribute("itemprop")
                                )
                                  break;
                                return e;
                              default:
                                return e;
                            }
                        } else {
                          if ("input" !== t || "hidden" !== e.type) return e;
                          var i = null == a.name ? null : "" + a.name;
                          if (
                            "hidden" === a.type &&
                            e.getAttribute("name") === i
                          )
                            return e;
                        }
                        if (null === (e = Ld(e.nextSibling))) break;
                      }
                      return null;
                    })(r, t.type, t.pendingProps, ha))
                      ? ((t.stateNode = r),
                        (ua = t),
                        (ca = Ld(r.firstChild)),
                        (ha = !1),
                        (a = !0))
                      : (a = !1)),
                  a || ma(t)),
                Q(t),
                (a = t.type),
                (i = t.pendingProps),
                (s = null !== e ? e.memoizedProps : null),
                (r = i.children),
                bd(a, i)
                  ? (r = null)
                  : null !== s && bd(a, s) && (t.flags |= 32),
                null !== t.memoizedState &&
                  ((a = eo(e, t, ro, null, null, n)), (df._currentValue = a)),
                Hs(e, t),
                js(e, t, r, n),
                t.child
              );
            case 6:
              return (
                null === e &&
                  da &&
                  ((e = n = ca) &&
                    (null !==
                    (n = (function (e, t, n) {
                      if ("" === t) return null;
                      for (; 3 !== e.nodeType; ) {
                        if (
                          (1 !== e.nodeType ||
                            "INPUT" !== e.nodeName ||
                            "hidden" !== e.type) &&
                          !n
                        )
                          return null;
                        if (null === (e = Ld(e.nextSibling))) return null;
                      }
                      return e;
                    })(n, t.pendingProps, ha))
                      ? ((t.stateNode = n), (ua = t), (ca = null), (e = !0))
                      : (e = !1)),
                  e || ma(t)),
                null
              );
            case 13:
              return Gs(e, t, n);
            case 4:
              return (
                X(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = hi(t, null, r, n)) : js(e, t, r, n),
                t.child
              );
            case 11:
              return zs(e, t, t.type, t.pendingProps, n);
            case 7:
              return js(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return js(e, t, t.pendingProps.children, n), t.child;
            case 10:
              return (
                (r = t.pendingProps),
                Ta(0, t.type, r.value),
                js(e, t, r.children, n),
                t.child
              );
            case 9:
              return (
                (a = t.type._context),
                (r = t.pendingProps.children),
                Da(t),
                (r = r((a = Ma(a)))),
                (t.flags |= 1),
                js(e, t, r, n),
                t.child
              );
            case 14:
              return Rs(e, t, t.type, t.pendingProps, n);
            case 15:
              return Os(e, t, t.type, t.pendingProps, n);
            case 19:
              return rl(e, t, n);
            case 31:
              return (function (e, t, n) {
                var r = t.pendingProps,
                  a = 0 !== (128 & t.flags);
                if (((t.flags &= -129), null === e)) {
                  if (da) {
                    if ("hidden" === r.mode)
                      return (e = Is(t, r)), (t.lanes = 536870912), Vs(null, e);
                    if (
                      (zi(t),
                      (e = ca)
                        ? null !==
                            (e =
                              null !== (e = Nd(e, ha)) && "&" === e.data
                                ? e
                                : null) &&
                          ((t.memoizedState = {
                            dehydrated: e,
                            treeContext:
                              null !== ta ? { id: na, overflow: ra } : null,
                            retryLane: 536870912,
                            hydrationErrors: null,
                          }),
                          ((n = $r(e)).return = t),
                          (t.child = n),
                          (ua = t),
                          (ca = null))
                        : (e = null),
                      null === e)
                    )
                      throw ma(t);
                    return (t.lanes = 536870912), null;
                  }
                  return Is(t, r);
                }
                var i = e.memoizedState;
                if (null !== i) {
                  var s = i.dehydrated;
                  if ((zi(t), a))
                    if (256 & t.flags) (t.flags &= -257), (t = Us(e, t, n));
                    else {
                      if (null === t.memoizedState) throw Error(o(558));
                      (t.child = e.child), (t.flags |= 128), (t = null);
                    }
                  else if (
                    (Ls || Aa(e, t, n, !1),
                    (a = 0 !== (n & e.childLanes)),
                    Ls || a)
                  ) {
                    if (
                      null !== (r = pu) &&
                      0 !== (s = ze(r, n)) &&
                      s !== i.retryLane
                    )
                      throw ((i.retryLane = s), Lr(e, s), Xu(r, e, s), Ms);
                    oc(), (t = Us(e, t, n));
                  } else
                    (e = i.treeContext),
                      (ca = Ld(s.nextSibling)),
                      (ua = t),
                      (da = !0),
                      (fa = null),
                      (ha = !1),
                      null !== e && la(t, e),
                      ((t = Is(t, r)).flags |= 4096);
                  return t;
                }
                return (
                  ((e = Br(e.child, {
                    mode: r.mode,
                    children: r.children,
                  })).ref = t.ref),
                  (t.child = e),
                  (e.return = t),
                  e
                );
              })(e, t, n);
            case 22:
              return _s(e, t, n, t.pendingProps);
            case 24:
              return (
                Da(t),
                (r = Ma(_a)),
                null === e
                  ? (null === (a = Xa()) &&
                      ((a = pu),
                      (i = Va()),
                      (a.pooledCache = i),
                      i.refCount++,
                      null !== i && (a.pooledCacheLanes |= n),
                      (a = i)),
                    (t.memoizedState = { parent: r, cache: a }),
                    gi(t),
                    Ta(0, _a, a))
                  : (0 !== (e.lanes & n) &&
                      (vi(e, t), Ei(t, null, null, n), ki()),
                    (a = e.memoizedState),
                    (i = t.memoizedState),
                    a.parent !== r
                      ? ((a = { parent: r, cache: r }),
                        (t.memoizedState = a),
                        0 === t.lanes &&
                          (t.memoizedState = t.updateQueue.baseState = a),
                        Ta(0, _a, r))
                      : ((r = i.cache),
                        Ta(0, _a, r),
                        r !== a.cache && Fa(t, [_a], n, !0))),
                js(e, t, t.pendingProps.children, n),
                t.child
              );
            case 29:
              throw t.pendingProps;
          }
          throw Error(o(156, t.tag));
        }
        function sl(e) {
          e.flags |= 4;
        }
        function ll(e, t, n, r, a) {
          if (((t = 0 !== (32 & e.mode)) && (t = !1), t)) {
            if (((e.flags |= 16777216), (335544128 & a) === a))
              if (e.stateNode.complete) e.flags |= 8192;
              else {
                if (!rc()) throw ((ai = ei), Za);
                e.flags |= 8192;
              }
          } else e.flags &= -16777217;
        }
        function ul(e, t) {
          if ("stylesheet" !== t.type || 0 !== (4 & t.state.loading))
            e.flags &= -16777217;
          else if (((e.flags |= 16777216), !af(t))) {
            if (!rc()) throw ((ai = ei), Za);
            e.flags |= 8192;
          }
        }
        function cl(e, t) {
          null !== t && (e.flags |= 4),
            16384 & e.flags &&
              ((t = 22 !== e.tag ? Ne() : 536870912),
              (e.lanes |= t),
              (Fu |= t));
        }
        function dl(e, t) {
          if (!da)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function fl(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= 65011712 & a.subtreeFlags),
                (r |= 65011712 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function hl(e, t, n) {
          var r = t.pendingProps;
          switch ((sa(t), t.tag)) {
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
            case 1:
              return fl(t), null;
            case 3:
              return (
                (n = t.stateNode),
                (r = null),
                null !== e && (r = e.memoizedState.cache),
                t.memoizedState.cache !== r && (t.flags |= 2048),
                Ca(_a),
                K(),
                n.pendingContext &&
                  ((n.context = n.pendingContext), (n.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (ya(t)
                    ? sl(t)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024), wa())),
                fl(t),
                null
              );
            case 26:
              var a = t.type,
                i = t.memoizedState;
              return (
                null === e
                  ? (sl(t),
                    null !== i ? (fl(t), ul(t, i)) : (fl(t), ll(t, a, 0, 0, n)))
                  : i
                  ? i !== e.memoizedState
                    ? (sl(t), fl(t), ul(t, i))
                    : (fl(t), (t.flags &= -16777217))
                  : ((e = e.memoizedProps) !== r && sl(t),
                    fl(t),
                    ll(t, a, 0, 0, n)),
                null
              );
            case 27:
              if (
                (G(t),
                (n = Y.current),
                (a = t.type),
                null !== e && null != t.stateNode)
              )
                e.memoizedProps !== r && sl(t);
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(o(166));
                  return fl(t), null;
                }
                (e = W.current),
                  ya(t) ? ga(t) : ((e = Od(a, r, n)), (t.stateNode = e), sl(t));
              }
              return fl(t), null;
            case 5:
              if ((G(t), (a = t.type), null !== e && null != t.stateNode))
                e.memoizedProps !== r && sl(t);
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(o(166));
                  return fl(t), null;
                }
                if (((i = W.current), ya(t))) ga(t);
                else {
                  var s = gd(Y.current);
                  switch (i) {
                    case 1:
                      i = s.createElementNS("http://www.w3.org/2000/svg", a);
                      break;
                    case 2:
                      i = s.createElementNS(
                        "http://www.w3.org/1998/Math/MathML",
                        a
                      );
                      break;
                    default:
                      switch (a) {
                        case "svg":
                          i = s.createElementNS(
                            "http://www.w3.org/2000/svg",
                            a
                          );
                          break;
                        case "math":
                          i = s.createElementNS(
                            "http://www.w3.org/1998/Math/MathML",
                            a
                          );
                          break;
                        case "script":
                          ((i = s.createElement("div")).innerHTML =
                            "<script></script>"),
                            (i = i.removeChild(i.firstChild));
                          break;
                        case "select":
                          (i =
                            "string" === typeof r.is
                              ? s.createElement("select", { is: r.is })
                              : s.createElement("select")),
                            r.multiple
                              ? (i.multiple = !0)
                              : r.size && (i.size = r.size);
                          break;
                        default:
                          i =
                            "string" === typeof r.is
                              ? s.createElement(a, { is: r.is })
                              : s.createElement(a);
                      }
                  }
                  (i[Ie] = t), (i[Ue] = r);
                  e: for (s = t.child; null !== s; ) {
                    if (5 === s.tag || 6 === s.tag) i.appendChild(s.stateNode);
                    else if (4 !== s.tag && 27 !== s.tag && null !== s.child) {
                      (s.child.return = s), (s = s.child);
                      continue;
                    }
                    if (s === t) break e;
                    for (; null === s.sibling; ) {
                      if (null === s.return || s.return === t) break e;
                      s = s.return;
                    }
                    (s.sibling.return = s.return), (s = s.sibling);
                  }
                  t.stateNode = i;
                  e: switch ((fd(i, a, r), a)) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      r = !!r.autoFocus;
                      break e;
                    case "img":
                      r = !0;
                      break e;
                    default:
                      r = !1;
                  }
                  r && sl(t);
                }
              }
              return (
                fl(t),
                ll(t, t.type, null === e || e.memoizedProps, t.pendingProps, n),
                null
              );
            case 6:
              if (e && null != t.stateNode) e.memoizedProps !== r && sl(t);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(o(166));
                if (((e = Y.current), ya(t))) {
                  if (
                    ((e = t.stateNode),
                    (n = t.memoizedProps),
                    (r = null),
                    null !== (a = ua))
                  )
                    switch (a.tag) {
                      case 27:
                      case 5:
                        r = a.memoizedProps;
                    }
                  (e[Ie] = t),
                    (e = !!(
                      e.nodeValue === n ||
                      (null !== r && !0 === r.suppressHydrationWarning) ||
                      ud(e.nodeValue, n)
                    )) || ma(t, !0);
                } else
                  ((e = gd(e).createTextNode(r))[Ie] = t), (t.stateNode = e);
              }
              return fl(t), null;
            case 31:
              if (
                ((n = t.memoizedState), null === e || null !== e.memoizedState)
              ) {
                if (((r = ya(t)), null !== n)) {
                  if (null === e) {
                    if (!r) throw Error(o(318));
                    if (
                      !(e =
                        null !== (e = t.memoizedState) ? e.dehydrated : null)
                    )
                      throw Error(o(557));
                    e[Ie] = t;
                  } else
                    ba(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  fl(t), (e = !1);
                } else
                  (n = wa()),
                    null !== e &&
                      null !== e.memoizedState &&
                      (e.memoizedState.hydrationErrors = n),
                    (e = !0);
                if (!e) return 256 & t.flags ? (_i(t), t) : (_i(t), null);
                if (0 !== (128 & t.flags)) throw Error(o(558));
              }
              return fl(t), null;
            case 13:
              if (
                ((r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (((a = ya(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!a) throw Error(o(318));
                    if (
                      !(a =
                        null !== (a = t.memoizedState) ? a.dehydrated : null)
                    )
                      throw Error(o(317));
                    a[Ie] = t;
                  } else
                    ba(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  fl(t), (a = !1);
                } else
                  (a = wa()),
                    null !== e &&
                      null !== e.memoizedState &&
                      (e.memoizedState.hydrationErrors = a),
                    (a = !0);
                if (!a) return 256 & t.flags ? (_i(t), t) : (_i(t), null);
              }
              return (
                _i(t),
                0 !== (128 & t.flags)
                  ? ((t.lanes = n), t)
                  : ((n = null !== r),
                    (e = null !== e && null !== e.memoizedState),
                    n &&
                      ((a = null),
                      null !== (r = t.child).alternate &&
                        null !== r.alternate.memoizedState &&
                        null !== r.alternate.memoizedState.cachePool &&
                        (a = r.alternate.memoizedState.cachePool.pool),
                      (i = null),
                      null !== r.memoizedState &&
                        null !== r.memoizedState.cachePool &&
                        (i = r.memoizedState.cachePool.pool),
                      i !== a && (r.flags |= 2048)),
                    n !== e && n && (t.child.flags |= 8192),
                    cl(t, t.updateQueue),
                    fl(t),
                    null)
              );
            case 4:
              return (
                K(), null === e && Jc(t.stateNode.containerInfo), fl(t), null
              );
            case 10:
              return Ca(t.type), fl(t), null;
            case 19:
              if ((B(Vi), null === (r = t.memoizedState))) return fl(t), null;
              if (((a = 0 !== (128 & t.flags)), null === (i = r.rendering)))
                if (a) dl(r, !1);
                else {
                  if (0 !== ku || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (i = Bi(e))) {
                        for (
                          t.flags |= 128,
                            dl(r, !1),
                            e = i.updateQueue,
                            t.updateQueue = e,
                            cl(t, e),
                            t.subtreeFlags = 0,
                            e = n,
                            n = t.child;
                          null !== n;

                        )
                          Ir(n, e), (n = n.sibling);
                        return (
                          I(Vi, (1 & Vi.current) | 2),
                          da && aa(t, r.treeForkCount),
                          t.child
                        );
                      }
                      e = e.sibling;
                    }
                  null !== r.tail &&
                    le() > ju &&
                    ((t.flags |= 128),
                    (a = !0),
                    dl(r, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!a)
                  if (null !== (e = Bi(i))) {
                    if (
                      ((t.flags |= 128),
                      (a = !0),
                      (e = e.updateQueue),
                      (t.updateQueue = e),
                      cl(t, e),
                      dl(r, !0),
                      null === r.tail &&
                        "hidden" === r.tailMode &&
                        !i.alternate &&
                        !da)
                    )
                      return fl(t), null;
                  } else
                    2 * le() - r.renderingStartTime > ju &&
                      536870912 !== n &&
                      ((t.flags |= 128),
                      (a = !0),
                      dl(r, !1),
                      (t.lanes = 4194304));
                r.isBackwards
                  ? ((i.sibling = t.child), (t.child = i))
                  : (null !== (e = r.last) ? (e.sibling = i) : (t.child = i),
                    (r.last = i));
              }
              return null !== r.tail
                ? ((e = r.tail),
                  (r.rendering = e),
                  (r.tail = e.sibling),
                  (r.renderingStartTime = le()),
                  (e.sibling = null),
                  (n = Vi.current),
                  I(Vi, a ? (1 & n) | 2 : 1 & n),
                  da && aa(t, r.treeForkCount),
                  e)
                : (fl(t), null);
            case 22:
            case 23:
              return (
                _i(t),
                Di(),
                (r = null !== t.memoizedState),
                null !== e
                  ? (null !== e.memoizedState) !== r && (t.flags |= 8192)
                  : r && (t.flags |= 8192),
                r
                  ? 0 !== (536870912 & n) &&
                    0 === (128 & t.flags) &&
                    (fl(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : fl(t),
                null !== (n = t.updateQueue) && cl(t, n.retryQueue),
                (n = null),
                null !== e &&
                  null !== e.memoizedState &&
                  null !== e.memoizedState.cachePool &&
                  (n = e.memoizedState.cachePool.pool),
                (r = null),
                null !== t.memoizedState &&
                  null !== t.memoizedState.cachePool &&
                  (r = t.memoizedState.cachePool.pool),
                r !== n && (t.flags |= 2048),
                null !== e && B(qa),
                null
              );
            case 24:
              return (
                (n = null),
                null !== e && (n = e.memoizedState.cache),
                t.memoizedState.cache !== n && (t.flags |= 2048),
                Ca(_a),
                fl(t),
                null
              );
            case 25:
            case 30:
              return null;
          }
          throw Error(o(156, t.tag));
        }
        function pl(e, t) {
          switch ((sa(t), t.tag)) {
            case 1:
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 3:
              return (
                Ca(_a),
                K(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 26:
            case 27:
            case 5:
              return G(t), null;
            case 31:
              if (null !== t.memoizedState) {
                if ((_i(t), null === t.alternate)) throw Error(o(340));
                ba();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 13:
              if (
                (_i(t), null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(o(340));
                ba();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return B(Vi), null;
            case 4:
              return K(), null;
            case 10:
              return Ca(t.type), null;
            case 22:
            case 23:
              return (
                _i(t),
                Di(),
                null !== e && B(qa),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 24:
              return Ca(_a), null;
            default:
              return null;
          }
        }
        function ml(e, t) {
          switch ((sa(t), t.tag)) {
            case 3:
              Ca(_a), K();
              break;
            case 26:
            case 27:
            case 5:
              G(t);
              break;
            case 4:
              K();
              break;
            case 31:
              null !== t.memoizedState && _i(t);
              break;
            case 13:
              _i(t);
              break;
            case 19:
              B(Vi);
              break;
            case 10:
              Ca(t.type);
              break;
            case 22:
            case 23:
              _i(t), Di(), null !== e && B(qa);
              break;
            case 24:
              Ca(_a);
          }
        }
        function gl(e, t) {
          try {
            var n = t.updateQueue,
              r = null !== n ? n.lastEffect : null;
            if (null !== r) {
              var a = r.next;
              n = a;
              do {
                if ((n.tag & e) === e) {
                  r = void 0;
                  var i = n.create,
                    o = n.inst;
                  (r = i()), (o.destroy = r);
                }
                n = n.next;
              } while (n !== a);
            }
          } catch (s) {
            kc(t, t.return, s);
          }
        }
        function vl(e, t, n) {
          try {
            var r = t.updateQueue,
              a = null !== r ? r.lastEffect : null;
            if (null !== a) {
              var i = a.next;
              r = i;
              do {
                if ((r.tag & e) === e) {
                  var o = r.inst,
                    s = o.destroy;
                  if (void 0 !== s) {
                    (o.destroy = void 0), (a = t);
                    var l = n,
                      u = s;
                    try {
                      u();
                    } catch (c) {
                      kc(a, l, c);
                    }
                  }
                }
                r = r.next;
              } while (r !== i);
            }
          } catch (c) {
            kc(t, t.return, c);
          }
        }
        function yl(e) {
          var t = e.updateQueue;
          if (null !== t) {
            var n = e.stateNode;
            try {
              Ci(t, n);
            } catch (r) {
              kc(e, e.return, r);
            }
          }
        }
        function bl(e, t, n) {
          (n.props = ks(e.type, e.memoizedProps)), (n.state = e.memoizedState);
          try {
            n.componentWillUnmount();
          } catch (r) {
            kc(e, t, r);
          }
        }
        function wl(e, t) {
          try {
            var n = e.ref;
            if (null !== n) {
              switch (e.tag) {
                case 26:
                case 27:
                case 5:
                  var r = e.stateNode;
                  break;
                default:
                  r = e.stateNode;
              }
              "function" === typeof n ? (e.refCleanup = n(r)) : (n.current = r);
            }
          } catch (a) {
            kc(e, t, a);
          }
        }
        function xl(e, t) {
          var n = e.ref,
            r = e.refCleanup;
          if (null !== n)
            if ("function" === typeof r)
              try {
                r();
              } catch (a) {
                kc(e, t, a);
              } finally {
                (e.refCleanup = null),
                  null != (e = e.alternate) && (e.refCleanup = null);
              }
            else if ("function" === typeof n)
              try {
                n(null);
              } catch (i) {
                kc(e, t, i);
              }
            else n.current = null;
        }
        function Sl(e) {
          var t = e.type,
            n = e.memoizedProps,
            r = e.stateNode;
          try {
            e: switch (t) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n.autoFocus && r.focus();
                break e;
              case "img":
                n.src ? (r.src = n.src) : n.srcSet && (r.srcset = n.srcSet);
            }
          } catch (a) {
            kc(e, e.return, a);
          }
        }
        function kl(e, t, n) {
          try {
            var r = e.stateNode;
            !(function (e, t, n, r) {
              switch (t) {
                case "div":
                case "span":
                case "svg":
                case "path":
                case "a":
                case "g":
                case "p":
                case "li":
                  break;
                case "input":
                  var a = null,
                    i = null,
                    s = null,
                    l = null,
                    u = null,
                    c = null,
                    d = null;
                  for (p in n) {
                    var f = n[p];
                    if (n.hasOwnProperty(p) && null != f)
                      switch (p) {
                        case "checked":
                        case "value":
                          break;
                        case "defaultValue":
                          u = f;
                        default:
                          r.hasOwnProperty(p) || cd(e, t, p, null, r, f);
                      }
                  }
                  for (var h in r) {
                    var p = r[h];
                    if (
                      ((f = n[h]),
                      r.hasOwnProperty(h) && (null != p || null != f))
                    )
                      switch (h) {
                        case "type":
                          i = p;
                          break;
                        case "name":
                          a = p;
                          break;
                        case "checked":
                          c = p;
                          break;
                        case "defaultChecked":
                          d = p;
                          break;
                        case "value":
                          s = p;
                          break;
                        case "defaultValue":
                          l = p;
                          break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                          if (null != p) throw Error(o(137, t));
                          break;
                        default:
                          p !== f && cd(e, t, h, p, r, f);
                      }
                  }
                  return void yt(e, s, l, u, c, d, i, a);
                case "select":
                  for (i in ((p = s = l = h = null), n))
                    if (((u = n[i]), n.hasOwnProperty(i) && null != u))
                      switch (i) {
                        case "value":
                          break;
                        case "multiple":
                          p = u;
                        default:
                          r.hasOwnProperty(i) || cd(e, t, i, null, r, u);
                      }
                  for (a in r)
                    if (
                      ((i = r[a]),
                      (u = n[a]),
                      r.hasOwnProperty(a) && (null != i || null != u))
                    )
                      switch (a) {
                        case "value":
                          h = i;
                          break;
                        case "defaultValue":
                          l = i;
                          break;
                        case "multiple":
                          s = i;
                        default:
                          i !== u && cd(e, t, a, i, r, u);
                      }
                  return (
                    (t = l),
                    (n = s),
                    (r = p),
                    void (null != h
                      ? xt(e, !!n, h, !1)
                      : !!r !== !!n &&
                        (null != t
                          ? xt(e, !!n, t, !0)
                          : xt(e, !!n, n ? [] : "", !1)))
                  );
                case "textarea":
                  for (l in ((p = h = null), n))
                    if (
                      ((a = n[l]),
                      n.hasOwnProperty(l) && null != a && !r.hasOwnProperty(l))
                    )
                      switch (l) {
                        case "value":
                        case "children":
                          break;
                        default:
                          cd(e, t, l, null, r, a);
                      }
                  for (s in r)
                    if (
                      ((a = r[s]),
                      (i = n[s]),
                      r.hasOwnProperty(s) && (null != a || null != i))
                    )
                      switch (s) {
                        case "value":
                          h = a;
                          break;
                        case "defaultValue":
                          p = a;
                          break;
                        case "children":
                          break;
                        case "dangerouslySetInnerHTML":
                          if (null != a) throw Error(o(91));
                          break;
                        default:
                          a !== i && cd(e, t, s, a, r, i);
                      }
                  return void St(e, h, p);
                case "option":
                  for (var m in n)
                    if (
                      ((h = n[m]),
                      n.hasOwnProperty(m) && null != h && !r.hasOwnProperty(m))
                    )
                      if ("selected" === m) e.selected = !1;
                      else cd(e, t, m, null, r, h);
                  for (u in r)
                    if (
                      ((h = r[u]),
                      (p = n[u]),
                      r.hasOwnProperty(u) &&
                        h !== p &&
                        (null != h || null != p))
                    )
                      if ("selected" === u)
                        e.selected =
                          h && "function" !== typeof h && "symbol" !== typeof h;
                      else cd(e, t, u, h, r, p);
                  return;
                case "img":
                case "link":
                case "area":
                case "base":
                case "br":
                case "col":
                case "embed":
                case "hr":
                case "keygen":
                case "meta":
                case "param":
                case "source":
                case "track":
                case "wbr":
                case "menuitem":
                  for (var g in n)
                    (h = n[g]),
                      n.hasOwnProperty(g) &&
                        null != h &&
                        !r.hasOwnProperty(g) &&
                        cd(e, t, g, null, r, h);
                  for (c in r)
                    if (
                      ((h = r[c]),
                      (p = n[c]),
                      r.hasOwnProperty(c) &&
                        h !== p &&
                        (null != h || null != p))
                    )
                      switch (c) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                          if (null != h) throw Error(o(137, t));
                          break;
                        default:
                          cd(e, t, c, h, r, p);
                      }
                  return;
                default:
                  if (Ft(t)) {
                    for (var v in n)
                      (h = n[v]),
                        n.hasOwnProperty(v) &&
                          void 0 !== h &&
                          !r.hasOwnProperty(v) &&
                          dd(e, t, v, void 0, r, h);
                    for (d in r)
                      (h = r[d]),
                        (p = n[d]),
                        !r.hasOwnProperty(d) ||
                          h === p ||
                          (void 0 === h && void 0 === p) ||
                          dd(e, t, d, h, r, p);
                    return;
                  }
              }
              for (var y in n)
                (h = n[y]),
                  n.hasOwnProperty(y) &&
                    null != h &&
                    !r.hasOwnProperty(y) &&
                    cd(e, t, y, null, r, h);
              for (f in r)
                (h = r[f]),
                  (p = n[f]),
                  !r.hasOwnProperty(f) ||
                    h === p ||
                    (null == h && null == p) ||
                    cd(e, t, f, h, r, p);
            })(r, e.type, n, t),
              (r[Ue] = t);
          } catch (a) {
            kc(e, e.return, a);
          }
        }
        function El(e) {
          return (
            5 === e.tag ||
            3 === e.tag ||
            26 === e.tag ||
            (27 === e.tag && Cd(e.type)) ||
            4 === e.tag
          );
        }
        function Tl(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || El(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (27 === e.tag && Cd(e.type)) continue e;
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function Cl(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? (9 === n.nodeType
                    ? n.body
                    : "HTML" === n.nodeName
                    ? n.ownerDocument.body
                    : n
                  ).insertBefore(e, t)
                : ((t =
                    9 === n.nodeType
                      ? n.body
                      : "HTML" === n.nodeName
                      ? n.ownerDocument.body
                      : n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Mt));
          else if (
            4 !== r &&
            (27 === r && Cd(e.type) && ((n = e.stateNode), (t = null)),
            null !== (e = e.child))
          )
            for (Cl(e, t, n), e = e.sibling; null !== e; )
              Cl(e, t, n), (e = e.sibling);
        }
        function Pl(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (
            4 !== r &&
            (27 === r && Cd(e.type) && (n = e.stateNode),
            null !== (e = e.child))
          )
            for (Pl(e, t, n), e = e.sibling; null !== e; )
              Pl(e, t, n), (e = e.sibling);
        }
        function Fl(e) {
          var t = e.stateNode,
            n = e.memoizedProps;
          try {
            for (var r = e.type, a = t.attributes; a.length; )
              t.removeAttributeNode(a[0]);
            fd(t, r, n), (t[Ie] = e), (t[Ue] = n);
          } catch (i) {
            kc(e, e.return, i);
          }
        }
        var Al = !1,
          Nl = !1,
          Dl = !1,
          Ml = "function" === typeof WeakSet ? WeakSet : Set,
          Ll = null;
        function jl(e, t, n) {
          var r = n.flags;
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
              Xl(e, n), 4 & r && gl(5, n);
              break;
            case 1:
              if ((Xl(e, n), 4 & r))
                if (((e = n.stateNode), null === t))
                  try {
                    e.componentDidMount();
                  } catch (o) {
                    kc(n, n.return, o);
                  }
                else {
                  var a = ks(n.type, t.memoizedProps);
                  t = t.memoizedState;
                  try {
                    e.componentDidUpdate(
                      a,
                      t,
                      e.__reactInternalSnapshotBeforeUpdate
                    );
                  } catch (s) {
                    kc(n, n.return, s);
                  }
                }
              64 & r && yl(n), 512 & r && wl(n, n.return);
              break;
            case 3:
              if ((Xl(e, n), 64 & r && null !== (e = n.updateQueue))) {
                if (((t = null), null !== n.child))
                  switch (n.child.tag) {
                    case 27:
                    case 5:
                    case 1:
                      t = n.child.stateNode;
                  }
                try {
                  Ci(e, t);
                } catch (o) {
                  kc(n, n.return, o);
                }
              }
              break;
            case 27:
              null === t && 4 & r && Fl(n);
            case 26:
            case 5:
              Xl(e, n),
                null === t && 4 & r && Sl(n),
                512 & r && wl(n, n.return);
              break;
            case 12:
              Xl(e, n);
              break;
            case 31:
              Xl(e, n), 4 & r && Bl(e, n);
              break;
            case 13:
              Xl(e, n),
                4 & r && Il(e, n),
                64 & r &&
                  null !== (e = n.memoizedState) &&
                  null !== (e = e.dehydrated) &&
                  (function (e, t) {
                    var n = e.ownerDocument;
                    if ("$~" === e.data) e._reactRetry = t;
                    else if ("$?" !== e.data || "loading" !== n.readyState) t();
                    else {
                      var r = function () {
                        t(), n.removeEventListener("DOMContentLoaded", r);
                      };
                      n.addEventListener("DOMContentLoaded", r),
                        (e._reactRetry = r);
                    }
                  })(e, (n = Pc.bind(null, n)));
              break;
            case 22:
              if (!(r = null !== n.memoizedState || Al)) {
                (t = (null !== t && null !== t.memoizedState) || Nl), (a = Al);
                var i = Nl;
                (Al = r),
                  (Nl = t) && !i
                    ? Ql(e, n, 0 !== (8772 & n.subtreeFlags))
                    : Xl(e, n),
                  (Al = a),
                  (Nl = i);
              }
              break;
            case 30:
              break;
            default:
              Xl(e, n);
          }
        }
        function zl(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), zl(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag && null !== (t = e.stateNode) && Ke(t),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        var Rl = null,
          Ol = !1;
        function _l(e, t, n) {
          for (n = n.child; null !== n; ) Vl(e, t, n), (n = n.sibling);
        }
        function Vl(e, t, n) {
          if (ye && "function" === typeof ye.onCommitFiberUnmount)
            try {
              ye.onCommitFiberUnmount(ve, n);
            } catch (i) {}
          switch (n.tag) {
            case 26:
              Nl || xl(n, t),
                _l(e, t, n),
                n.memoizedState
                  ? n.memoizedState.count--
                  : n.stateNode && (n = n.stateNode).parentNode.removeChild(n);
              break;
            case 27:
              Nl || xl(n, t);
              var r = Rl,
                a = Ol;
              Cd(n.type) && ((Rl = n.stateNode), (Ol = !1)),
                _l(e, t, n),
                _d(n.stateNode),
                (Rl = r),
                (Ol = a);
              break;
            case 5:
              Nl || xl(n, t);
            case 6:
              if (
                ((r = Rl),
                (a = Ol),
                (Rl = null),
                _l(e, t, n),
                (Ol = a),
                null !== (Rl = r))
              )
                if (Ol)
                  try {
                    (9 === Rl.nodeType
                      ? Rl.body
                      : "HTML" === Rl.nodeName
                      ? Rl.ownerDocument.body
                      : Rl
                    ).removeChild(n.stateNode);
                  } catch (o) {
                    kc(n, t, o);
                  }
                else
                  try {
                    Rl.removeChild(n.stateNode);
                  } catch (o) {
                    kc(n, t, o);
                  }
              break;
            case 18:
              null !== Rl &&
                (Ol
                  ? (Pd(
                      9 === (e = Rl).nodeType
                        ? e.body
                        : "HTML" === e.nodeName
                        ? e.ownerDocument.body
                        : e,
                      n.stateNode
                    ),
                    $f(e))
                  : Pd(Rl, n.stateNode));
              break;
            case 4:
              (r = Rl),
                (a = Ol),
                (Rl = n.stateNode.containerInfo),
                (Ol = !0),
                _l(e, t, n),
                (Rl = r),
                (Ol = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              vl(2, n, t), Nl || vl(4, n, t), _l(e, t, n);
              break;
            case 1:
              Nl ||
                (xl(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount &&
                  bl(n, t, r)),
                _l(e, t, n);
              break;
            case 21:
              _l(e, t, n);
              break;
            case 22:
              (Nl = (r = Nl) || null !== n.memoizedState),
                _l(e, t, n),
                (Nl = r);
              break;
            default:
              _l(e, t, n);
          }
        }
        function Bl(e, t) {
          if (
            null === t.memoizedState &&
            null !== (e = t.alternate) &&
            null !== (e = e.memoizedState)
          ) {
            e = e.dehydrated;
            try {
              $f(e);
            } catch (n) {
              kc(t, t.return, n);
            }
          }
        }
        function Il(e, t) {
          if (
            null === t.memoizedState &&
            null !== (e = t.alternate) &&
            null !== (e = e.memoizedState) &&
            null !== (e = e.dehydrated)
          )
            try {
              $f(e);
            } catch (n) {
              kc(t, t.return, n);
            }
        }
        function Ul(e, t) {
          var n = (function (e) {
            switch (e.tag) {
              case 31:
              case 13:
              case 19:
                var t = e.stateNode;
                return null === t && (t = e.stateNode = new Ml()), t;
              case 22:
                return (
                  null === (t = (e = e.stateNode)._retryCache) &&
                    (t = e._retryCache = new Ml()),
                  t
                );
              default:
                throw Error(o(435, e.tag));
            }
          })(e);
          t.forEach(function (t) {
            if (!n.has(t)) {
              n.add(t);
              var r = Fc.bind(null, e, t);
              t.then(r, r);
            }
          });
        }
        function Hl(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r],
                i = e,
                s = t,
                l = s;
              e: for (; null !== l; ) {
                switch (l.tag) {
                  case 27:
                    if (Cd(l.type)) {
                      (Rl = l.stateNode), (Ol = !1);
                      break e;
                    }
                    break;
                  case 5:
                    (Rl = l.stateNode), (Ol = !1);
                    break e;
                  case 3:
                  case 4:
                    (Rl = l.stateNode.containerInfo), (Ol = !0);
                    break e;
                }
                l = l.return;
              }
              if (null === Rl) throw Error(o(160));
              Vl(i, s, a),
                (Rl = null),
                (Ol = !1),
                null !== (i = a.alternate) && (i.return = null),
                (a.return = null);
            }
          if (13886 & t.subtreeFlags)
            for (t = t.child; null !== t; ) $l(t, e), (t = t.sibling);
        }
        var Wl = null;
        function $l(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              Hl(t, e),
                Yl(e),
                4 & r && (vl(3, e, e.return), gl(3, e), vl(5, e, e.return));
              break;
            case 1:
              Hl(t, e),
                Yl(e),
                512 & r && (Nl || null === n || xl(n, n.return)),
                64 & r &&
                  Al &&
                  null !== (e = e.updateQueue) &&
                  null !== (r = e.callbacks) &&
                  ((n = e.shared.hiddenCallbacks),
                  (e.shared.hiddenCallbacks = null === n ? r : n.concat(r)));
              break;
            case 26:
              var a = Wl;
              if (
                (Hl(t, e),
                Yl(e),
                512 & r && (Nl || null === n || xl(n, n.return)),
                4 & r)
              ) {
                var i = null !== n ? n.memoizedState : null;
                if (((r = e.memoizedState), null === n))
                  if (null === r)
                    if (null === e.stateNode) {
                      e: {
                        (r = e.type),
                          (n = e.memoizedProps),
                          (a = a.ownerDocument || a);
                        t: switch (r) {
                          case "title":
                            (!(i = a.getElementsByTagName("title")[0]) ||
                              i[Xe] ||
                              i[Ie] ||
                              "http://www.w3.org/2000/svg" === i.namespaceURI ||
                              i.hasAttribute("itemprop")) &&
                              ((i = a.createElement(r)),
                              a.head.insertBefore(
                                i,
                                a.querySelector("head > title")
                              )),
                              fd(i, r, n),
                              (i[Ie] = e),
                              et(i),
                              (r = i);
                            break e;
                          case "link":
                            var s = nf("link", "href", a).get(
                              r + (n.href || "")
                            );
                            if (s)
                              for (var l = 0; l < s.length; l++)
                                if (
                                  (i = s[l]).getAttribute("href") ===
                                    (null == n.href || "" === n.href
                                      ? null
                                      : n.href) &&
                                  i.getAttribute("rel") ===
                                    (null == n.rel ? null : n.rel) &&
                                  i.getAttribute("title") ===
                                    (null == n.title ? null : n.title) &&
                                  i.getAttribute("crossorigin") ===
                                    (null == n.crossOrigin
                                      ? null
                                      : n.crossOrigin)
                                ) {
                                  s.splice(l, 1);
                                  break t;
                                }
                            fd((i = a.createElement(r)), r, n),
                              a.head.appendChild(i);
                            break;
                          case "meta":
                            if (
                              (s = nf("meta", "content", a).get(
                                r + (n.content || "")
                              ))
                            )
                              for (l = 0; l < s.length; l++)
                                if (
                                  (i = s[l]).getAttribute("content") ===
                                    (null == n.content
                                      ? null
                                      : "" + n.content) &&
                                  i.getAttribute("name") ===
                                    (null == n.name ? null : n.name) &&
                                  i.getAttribute("property") ===
                                    (null == n.property ? null : n.property) &&
                                  i.getAttribute("http-equiv") ===
                                    (null == n.httpEquiv
                                      ? null
                                      : n.httpEquiv) &&
                                  i.getAttribute("charset") ===
                                    (null == n.charSet ? null : n.charSet)
                                ) {
                                  s.splice(l, 1);
                                  break t;
                                }
                            fd((i = a.createElement(r)), r, n),
                              a.head.appendChild(i);
                            break;
                          default:
                            throw Error(o(468, r));
                        }
                        (i[Ie] = e), et(i), (r = i);
                      }
                      e.stateNode = r;
                    } else rf(a, e.type, e.stateNode);
                  else e.stateNode = Gd(a, r, e.memoizedProps);
                else
                  i !== r
                    ? (null === i
                        ? null !== n.stateNode &&
                          (n = n.stateNode).parentNode.removeChild(n)
                        : i.count--,
                      null === r
                        ? rf(a, e.type, e.stateNode)
                        : Gd(a, r, e.memoizedProps))
                    : null === r &&
                      null !== e.stateNode &&
                      kl(e, e.memoizedProps, n.memoizedProps);
              }
              break;
            case 27:
              Hl(t, e),
                Yl(e),
                512 & r && (Nl || null === n || xl(n, n.return)),
                null !== n && 4 & r && kl(e, e.memoizedProps, n.memoizedProps);
              break;
            case 5:
              if (
                (Hl(t, e),
                Yl(e),
                512 & r && (Nl || null === n || xl(n, n.return)),
                32 & e.flags)
              ) {
                a = e.stateNode;
                try {
                  Et(a, "");
                } catch (m) {
                  kc(e, e.return, m);
                }
              }
              4 & r &&
                null != e.stateNode &&
                kl(e, (a = e.memoizedProps), null !== n ? n.memoizedProps : a),
                1024 & r && (Dl = !0);
              break;
            case 6:
              if ((Hl(t, e), Yl(e), 4 & r)) {
                if (null === e.stateNode) throw Error(o(162));
                (r = e.memoizedProps), (n = e.stateNode);
                try {
                  n.nodeValue = r;
                } catch (m) {
                  kc(e, e.return, m);
                }
              }
              break;
            case 3:
              if (
                ((tf = null),
                (a = Wl),
                (Wl = Id(t.containerInfo)),
                Hl(t, e),
                (Wl = a),
                Yl(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  $f(t.containerInfo);
                } catch (m) {
                  kc(e, e.return, m);
                }
              Dl && ((Dl = !1), ql(e));
              break;
            case 4:
              (r = Wl),
                (Wl = Id(e.stateNode.containerInfo)),
                Hl(t, e),
                Yl(e),
                (Wl = r);
              break;
            case 12:
            default:
              Hl(t, e), Yl(e);
              break;
            case 31:
            case 19:
              Hl(t, e),
                Yl(e),
                4 & r &&
                  null !== (r = e.updateQueue) &&
                  ((e.updateQueue = null), Ul(e, r));
              break;
            case 13:
              Hl(t, e),
                Yl(e),
                8192 & e.child.flags &&
                  (null !== e.memoizedState) !==
                    (null !== n && null !== n.memoizedState) &&
                  (Mu = le()),
                4 & r &&
                  null !== (r = e.updateQueue) &&
                  ((e.updateQueue = null), Ul(e, r));
              break;
            case 22:
              a = null !== e.memoizedState;
              var u = null !== n && null !== n.memoizedState,
                c = Al,
                d = Nl;
              if (
                ((Al = c || a),
                (Nl = d || u),
                Hl(t, e),
                (Nl = d),
                (Al = c),
                Yl(e),
                8192 & r)
              )
                e: for (
                  t = e.stateNode,
                    t._visibility = a ? -2 & t._visibility : 1 | t._visibility,
                    a && (null === n || u || Al || Nl || Kl(e)),
                    n = null,
                    t = e;
                  ;

                ) {
                  if (5 === t.tag || 26 === t.tag) {
                    if (null === n) {
                      u = n = t;
                      try {
                        if (((i = u.stateNode), a))
                          "function" === typeof (s = i.style).setProperty
                            ? s.setProperty("display", "none", "important")
                            : (s.display = "none");
                        else {
                          l = u.stateNode;
                          var f = u.memoizedProps.style,
                            h =
                              void 0 !== f &&
                              null !== f &&
                              f.hasOwnProperty("display")
                                ? f.display
                                : null;
                          l.style.display =
                            null == h || "boolean" === typeof h
                              ? ""
                              : ("" + h).trim();
                        }
                      } catch (m) {
                        kc(u, u.return, m);
                      }
                    }
                  } else if (6 === t.tag) {
                    if (null === n) {
                      u = t;
                      try {
                        u.stateNode.nodeValue = a ? "" : u.memoizedProps;
                      } catch (m) {
                        kc(u, u.return, m);
                      }
                    }
                  } else if (18 === t.tag) {
                    if (null === n) {
                      u = t;
                      try {
                        var p = u.stateNode;
                        a ? Fd(p, !0) : Fd(u.stateNode, !1);
                      } catch (m) {
                        kc(u, u.return, m);
                      }
                    }
                  } else if (
                    ((22 !== t.tag && 23 !== t.tag) ||
                      null === t.memoizedState ||
                      t === e) &&
                    null !== t.child
                  ) {
                    (t.child.return = t), (t = t.child);
                    continue;
                  }
                  if (t === e) break e;
                  for (; null === t.sibling; ) {
                    if (null === t.return || t.return === e) break e;
                    n === t && (n = null), (t = t.return);
                  }
                  n === t && (n = null),
                    (t.sibling.return = t.return),
                    (t = t.sibling);
                }
              4 & r &&
                null !== (r = e.updateQueue) &&
                null !== (n = r.retryQueue) &&
                ((r.retryQueue = null), Ul(e, n));
            case 30:
            case 21:
          }
        }
        function Yl(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              for (var n, r = e.return; null !== r; ) {
                if (El(r)) {
                  n = r;
                  break;
                }
                r = r.return;
              }
              if (null == n) throw Error(o(160));
              switch (n.tag) {
                case 27:
                  var a = n.stateNode;
                  Pl(e, Tl(e), a);
                  break;
                case 5:
                  var i = n.stateNode;
                  32 & n.flags && (Et(i, ""), (n.flags &= -33)),
                    Pl(e, Tl(e), i);
                  break;
                case 3:
                case 4:
                  var s = n.stateNode.containerInfo;
                  Cl(e, Tl(e), s);
                  break;
                default:
                  throw Error(o(161));
              }
            } catch (l) {
              kc(e, e.return, l);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function ql(e) {
          if (1024 & e.subtreeFlags)
            for (e = e.child; null !== e; ) {
              var t = e;
              ql(t),
                5 === t.tag && 1024 & t.flags && t.stateNode.reset(),
                (e = e.sibling);
            }
        }
        function Xl(e, t) {
          if (8772 & t.subtreeFlags)
            for (t = t.child; null !== t; )
              jl(e, t.alternate, t), (t = t.sibling);
        }
        function Kl(e) {
          for (e = e.child; null !== e; ) {
            var t = e;
            switch (t.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                vl(4, t, t.return), Kl(t);
                break;
              case 1:
                xl(t, t.return);
                var n = t.stateNode;
                "function" === typeof n.componentWillUnmount &&
                  bl(t, t.return, n),
                  Kl(t);
                break;
              case 27:
                _d(t.stateNode);
              case 26:
              case 5:
                xl(t, t.return), Kl(t);
                break;
              case 22:
                null === t.memoizedState && Kl(t);
                break;
              default:
                Kl(t);
            }
            e = e.sibling;
          }
        }
        function Ql(e, t, n) {
          for (
            n = n && 0 !== (8772 & t.subtreeFlags), t = t.child;
            null !== t;

          ) {
            var r = t.alternate,
              a = e,
              i = t,
              o = i.flags;
            switch (i.tag) {
              case 0:
              case 11:
              case 15:
                Ql(a, i, n), gl(4, i);
                break;
              case 1:
                if (
                  (Ql(a, i, n),
                  "function" ===
                    typeof (a = (r = i).stateNode).componentDidMount)
                )
                  try {
                    a.componentDidMount();
                  } catch (u) {
                    kc(r, r.return, u);
                  }
                if (null !== (a = (r = i).updateQueue)) {
                  var s = r.stateNode;
                  try {
                    var l = a.shared.hiddenCallbacks;
                    if (null !== l)
                      for (
                        a.shared.hiddenCallbacks = null, a = 0;
                        a < l.length;
                        a++
                      )
                        Ti(l[a], s);
                  } catch (u) {
                    kc(r, r.return, u);
                  }
                }
                n && 64 & o && yl(i), wl(i, i.return);
                break;
              case 27:
                Fl(i);
              case 26:
              case 5:
                Ql(a, i, n), n && null === r && 4 & o && Sl(i), wl(i, i.return);
                break;
              case 12:
                Ql(a, i, n);
                break;
              case 31:
                Ql(a, i, n), n && 4 & o && Bl(a, i);
                break;
              case 13:
                Ql(a, i, n), n && 4 & o && Il(a, i);
                break;
              case 22:
                null === i.memoizedState && Ql(a, i, n), wl(i, i.return);
                break;
              case 30:
                break;
              default:
                Ql(a, i, n);
            }
            t = t.sibling;
          }
        }
        function Gl(e, t) {
          var n = null;
          null !== e &&
            null !== e.memoizedState &&
            null !== e.memoizedState.cachePool &&
            (n = e.memoizedState.cachePool.pool),
            (e = null),
            null !== t.memoizedState &&
              null !== t.memoizedState.cachePool &&
              (e = t.memoizedState.cachePool.pool),
            e !== n && (null != e && e.refCount++, null != n && Ba(n));
        }
        function Zl(e, t) {
          (e = null),
            null !== t.alternate && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache) !== e &&
              (t.refCount++, null != e && Ba(e));
        }
        function Jl(e, t, n, r) {
          if (10256 & t.subtreeFlags)
            for (t = t.child; null !== t; ) eu(e, t, n, r), (t = t.sibling);
        }
        function eu(e, t, n, r) {
          var a = t.flags;
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Jl(e, t, n, r), 2048 & a && gl(9, t);
              break;
            case 1:
            case 31:
            case 13:
            default:
              Jl(e, t, n, r);
              break;
            case 3:
              Jl(e, t, n, r),
                2048 & a &&
                  ((e = null),
                  null !== t.alternate && (e = t.alternate.memoizedState.cache),
                  (t = t.memoizedState.cache) !== e &&
                    (t.refCount++, null != e && Ba(e)));
              break;
            case 12:
              if (2048 & a) {
                Jl(e, t, n, r), (e = t.stateNode);
                try {
                  var i = t.memoizedProps,
                    o = i.id,
                    s = i.onPostCommit;
                  "function" === typeof s &&
                    s(
                      o,
                      null === t.alternate ? "mount" : "update",
                      e.passiveEffectDuration,
                      -0
                    );
                } catch (l) {
                  kc(t, t.return, l);
                }
              } else Jl(e, t, n, r);
              break;
            case 23:
              break;
            case 22:
              (i = t.stateNode),
                (o = t.alternate),
                null !== t.memoizedState
                  ? 2 & i._visibility
                    ? Jl(e, t, n, r)
                    : nu(e, t)
                  : 2 & i._visibility
                  ? Jl(e, t, n, r)
                  : ((i._visibility |= 2),
                    tu(e, t, n, r, 0 !== (10256 & t.subtreeFlags) || !1)),
                2048 & a && Gl(o, t);
              break;
            case 24:
              Jl(e, t, n, r), 2048 & a && Zl(t.alternate, t);
          }
        }
        function tu(e, t, n, r, a) {
          for (
            a = a && (0 !== (10256 & t.subtreeFlags) || !1), t = t.child;
            null !== t;

          ) {
            var i = e,
              o = t,
              s = n,
              l = r,
              u = o.flags;
            switch (o.tag) {
              case 0:
              case 11:
              case 15:
                tu(i, o, s, l, a), gl(8, o);
                break;
              case 23:
                break;
              case 22:
                var c = o.stateNode;
                null !== o.memoizedState
                  ? 2 & c._visibility
                    ? tu(i, o, s, l, a)
                    : nu(i, o)
                  : ((c._visibility |= 2), tu(i, o, s, l, a)),
                  a && 2048 & u && Gl(o.alternate, o);
                break;
              case 24:
                tu(i, o, s, l, a), a && 2048 & u && Zl(o.alternate, o);
                break;
              default:
                tu(i, o, s, l, a);
            }
            t = t.sibling;
          }
        }
        function nu(e, t) {
          if (10256 & t.subtreeFlags)
            for (t = t.child; null !== t; ) {
              var n = e,
                r = t,
                a = r.flags;
              switch (r.tag) {
                case 22:
                  nu(n, r), 2048 & a && Gl(r.alternate, r);
                  break;
                case 24:
                  nu(n, r), 2048 & a && Zl(r.alternate, r);
                  break;
                default:
                  nu(n, r);
              }
              t = t.sibling;
            }
        }
        var ru = 8192;
        function au(e, t, n) {
          if (e.subtreeFlags & ru)
            for (e = e.child; null !== e; ) iu(e, t, n), (e = e.sibling);
        }
        function iu(e, t, n) {
          switch (e.tag) {
            case 26:
              au(e, t, n),
                e.flags & ru &&
                  null !== e.memoizedState &&
                  (function (e, t, n, r) {
                    if (
                      "stylesheet" === n.type &&
                      ("string" !== typeof r.media ||
                        !1 !== matchMedia(r.media).matches) &&
                      0 === (4 & n.state.loading)
                    ) {
                      if (null === n.instance) {
                        var a = Yd(r.href),
                          i = t.querySelector(qd(a));
                        if (i)
                          return (
                            null !== (t = i._p) &&
                              "object" === typeof t &&
                              "function" === typeof t.then &&
                              (e.count++, (e = sf.bind(e)), t.then(e, e)),
                            (n.state.loading |= 4),
                            (n.instance = i),
                            void et(i)
                          );
                        (i = t.ownerDocument || t),
                          (r = Xd(r)),
                          (a = Vd.get(a)) && Jd(r, a),
                          et((i = i.createElement("link")));
                        var o = i;
                        (o._p = new Promise(function (e, t) {
                          (o.onload = e), (o.onerror = t);
                        })),
                          fd(i, "link", r),
                          (n.instance = i);
                      }
                      null === e.stylesheets && (e.stylesheets = new Map()),
                        e.stylesheets.set(n, t),
                        (t = n.state.preload) &&
                          0 === (3 & n.state.loading) &&
                          (e.count++,
                          (n = sf.bind(e)),
                          t.addEventListener("load", n),
                          t.addEventListener("error", n));
                    }
                  })(n, Wl, e.memoizedState, e.memoizedProps);
              break;
            case 5:
            default:
              au(e, t, n);
              break;
            case 3:
            case 4:
              var r = Wl;
              (Wl = Id(e.stateNode.containerInfo)), au(e, t, n), (Wl = r);
              break;
            case 22:
              null === e.memoizedState &&
                (null !== (r = e.alternate) && null !== r.memoizedState
                  ? ((r = ru), (ru = 16777216), au(e, t, n), (ru = r))
                  : au(e, t, n));
          }
        }
        function ou(e) {
          var t = e.alternate;
          if (null !== t && null !== (e = t.child)) {
            t.child = null;
            do {
              (t = e.sibling), (e.sibling = null), (e = t);
            } while (null !== e);
          }
        }
        function su(e) {
          var t = e.deletions;
          if (0 !== (16 & e.flags)) {
            if (null !== t)
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (Ll = r), cu(r, e);
              }
            ou(e);
          }
          if (10256 & e.subtreeFlags)
            for (e = e.child; null !== e; ) lu(e), (e = e.sibling);
        }
        function lu(e) {
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              su(e), 2048 & e.flags && vl(9, e, e.return);
              break;
            case 3:
            case 12:
            default:
              su(e);
              break;
            case 22:
              var t = e.stateNode;
              null !== e.memoizedState &&
              2 & t._visibility &&
              (null === e.return || 13 !== e.return.tag)
                ? ((t._visibility &= -3), uu(e))
                : su(e);
          }
        }
        function uu(e) {
          var t = e.deletions;
          if (0 !== (16 & e.flags)) {
            if (null !== t)
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (Ll = r), cu(r, e);
              }
            ou(e);
          }
          for (e = e.child; null !== e; ) {
            switch ((t = e).tag) {
              case 0:
              case 11:
              case 15:
                vl(8, t, t.return), uu(t);
                break;
              case 22:
                2 & (n = t.stateNode)._visibility &&
                  ((n._visibility &= -3), uu(t));
                break;
              default:
                uu(t);
            }
            e = e.sibling;
          }
        }
        function cu(e, t) {
          for (; null !== Ll; ) {
            var n = Ll;
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                vl(8, n, t);
                break;
              case 23:
              case 22:
                if (
                  null !== n.memoizedState &&
                  null !== n.memoizedState.cachePool
                ) {
                  var r = n.memoizedState.cachePool.pool;
                  null != r && r.refCount++;
                }
                break;
              case 24:
                Ba(n.memoizedState.cache);
            }
            if (null !== (r = n.child)) (r.return = n), (Ll = r);
            else
              e: for (n = e; null !== Ll; ) {
                var a = (r = Ll).sibling,
                  i = r.return;
                if ((zl(r), r === n)) {
                  Ll = null;
                  break e;
                }
                if (null !== a) {
                  (a.return = i), (Ll = a);
                  break e;
                }
                Ll = i;
              }
          }
        }
        var du = {
            getCacheForType: function (e) {
              var t = Ma(_a),
                n = t.data.get(e);
              return void 0 === n && ((n = e()), t.data.set(e, n)), n;
            },
            cacheSignal: function () {
              return Ma(_a).controller.signal;
            },
          },
          fu = "function" === typeof WeakMap ? WeakMap : Map,
          hu = 0,
          pu = null,
          mu = null,
          gu = 0,
          vu = 0,
          yu = null,
          bu = !1,
          wu = !1,
          xu = !1,
          Su = 0,
          ku = 0,
          Eu = 0,
          Tu = 0,
          Cu = 0,
          Pu = 0,
          Fu = 0,
          Au = null,
          Nu = null,
          Du = !1,
          Mu = 0,
          Lu = 0,
          ju = 1 / 0,
          zu = null,
          Ru = null,
          Ou = 0,
          _u = null,
          Vu = null,
          Bu = 0,
          Iu = 0,
          Uu = null,
          Hu = null,
          Wu = 0,
          $u = null;
        function Yu() {
          return 0 !== (2 & hu) && 0 !== gu
            ? gu & -gu
            : null !== j.T
            ? Uc()
            : _e();
        }
        function qu() {
          if (0 === Pu)
            if (0 === (536870912 & gu) || da) {
              var e = Ee;
              0 === (3932160 & (Ee <<= 1)) && (Ee = 262144), (Pu = e);
            } else Pu = 536870912;
          return null !== (e = Mi.current) && (e.flags |= 32), Pu;
        }
        function Xu(e, t, n) {
          ((e !== pu || (2 !== vu && 9 !== vu)) &&
            null === e.cancelPendingCommit) ||
            (tc(e, 0), Zu(e, gu, Pu, !1)),
            Me(e, n),
            (0 !== (2 & hu) && e === pu) ||
              (e === pu &&
                (0 === (2 & hu) && (Tu |= n), 4 === ku && Zu(e, gu, Pu, !1)),
              zc(e));
        }
        function Ku(e, t, n) {
          if (0 !== (6 & hu)) throw Error(o(327));
          for (
            var r =
                (!n && 0 === (127 & t) && 0 === (t & e.expiredLanes)) ||
                Fe(e, t),
              a = r
                ? (function (e, t) {
                    var n = hu;
                    hu |= 2;
                    var r = ac(),
                      a = ic();
                    pu !== e || gu !== t
                      ? ((zu = null), (ju = le() + 500), tc(e, t))
                      : (wu = Fe(e, t));
                    e: for (;;)
                      try {
                        if (0 !== vu && null !== mu) {
                          t = mu;
                          var i = yu;
                          t: switch (vu) {
                            case 1:
                              (vu = 0), (yu = null), fc(e, t, i, 1);
                              break;
                            case 2:
                            case 9:
                              if (ti(i)) {
                                (vu = 0), (yu = null), dc(t);
                                break;
                              }
                              (t = function () {
                                (2 !== vu && 9 !== vu) || pu !== e || (vu = 7),
                                  zc(e);
                              }),
                                i.then(t, t);
                              break e;
                            case 3:
                              vu = 7;
                              break e;
                            case 4:
                              vu = 5;
                              break e;
                            case 7:
                              ti(i)
                                ? ((vu = 0), (yu = null), dc(t))
                                : ((vu = 0), (yu = null), fc(e, t, i, 7));
                              break;
                            case 5:
                              var s = null;
                              switch (mu.tag) {
                                case 26:
                                  s = mu.memoizedState;
                                case 5:
                                case 27:
                                  var l = mu;
                                  if (s ? af(s) : l.stateNode.complete) {
                                    (vu = 0), (yu = null);
                                    var u = l.sibling;
                                    if (null !== u) mu = u;
                                    else {
                                      var c = l.return;
                                      null !== c
                                        ? ((mu = c), hc(c))
                                        : (mu = null);
                                    }
                                    break t;
                                  }
                              }
                              (vu = 0), (yu = null), fc(e, t, i, 5);
                              break;
                            case 6:
                              (vu = 0), (yu = null), fc(e, t, i, 6);
                              break;
                            case 8:
                              ec(), (ku = 6);
                              break e;
                            default:
                              throw Error(o(462));
                          }
                        }
                        uc();
                        break;
                      } catch (d) {
                        nc(e, d);
                      }
                    return (
                      (Ea = ka = null),
                      (j.H = r),
                      (j.A = a),
                      (hu = n),
                      null !== mu ? 0 : ((pu = null), (gu = 0), Nr(), ku)
                    );
                  })(e, t)
                : sc(e, t, !0),
              i = r;
            ;

          ) {
            if (0 === a) {
              wu && !r && Zu(e, t, 0, !1);
              break;
            }
            if (((n = e.current.alternate), !i || Gu(n))) {
              if (2 === a) {
                if (((i = t), e.errorRecoveryDisabledLanes & i)) var s = 0;
                else
                  s =
                    0 !== (s = -536870913 & e.pendingLanes)
                      ? s
                      : 536870912 & s
                      ? 536870912
                      : 0;
                if (0 !== s) {
                  t = s;
                  e: {
                    var l = e;
                    a = Au;
                    var u = l.current.memoizedState.isDehydrated;
                    if (
                      (u && (tc(l, s).flags |= 256), 2 !== (s = sc(l, s, !1)))
                    ) {
                      if (xu && !u) {
                        (l.errorRecoveryDisabledLanes |= i), (Tu |= i), (a = 4);
                        break e;
                      }
                      (i = Nu),
                        (Nu = a),
                        null !== i &&
                          (null === Nu ? (Nu = i) : Nu.push.apply(Nu, i));
                    }
                    a = s;
                  }
                  if (((i = !1), 2 !== a)) continue;
                }
              }
              if (1 === a) {
                tc(e, 0), Zu(e, t, 0, !0);
                break;
              }
              e: {
                switch (((r = e), (i = a))) {
                  case 0:
                  case 1:
                    throw Error(o(345));
                  case 4:
                    if ((4194048 & t) !== t) break;
                  case 6:
                    Zu(r, t, Pu, !bu);
                    break e;
                  case 2:
                    Nu = null;
                    break;
                  case 3:
                  case 5:
                    break;
                  default:
                    throw Error(o(329));
                }
                if ((62914560 & t) === t && 10 < (a = Mu + 300 - le())) {
                  if ((Zu(r, t, Pu, !bu), 0 !== Pe(r, 0, !0))) break e;
                  (Bu = t),
                    (r.timeoutHandle = xd(
                      Qu.bind(
                        null,
                        r,
                        n,
                        Nu,
                        zu,
                        Du,
                        t,
                        Pu,
                        Tu,
                        Fu,
                        bu,
                        i,
                        "Throttled",
                        -0,
                        0
                      ),
                      a
                    ));
                } else Qu(r, n, Nu, zu, Du, t, Pu, Tu, Fu, bu, i, null, -0, 0);
              }
              break;
            }
            (a = sc(e, t, !1)), (i = !1);
          }
          zc(e);
        }
        function Qu(e, t, n, r, a, i, o, s, l, u, c, d, f, h) {
          if (
            ((e.timeoutHandle = -1),
            8192 & (d = t.subtreeFlags) || 16785408 === (16785408 & d))
          ) {
            iu(
              t,
              i,
              (d = {
                stylesheets: null,
                count: 0,
                imgCount: 0,
                imgBytes: 0,
                suspenseyImages: [],
                waitingForImages: !0,
                waitingForViewTransition: !1,
                unsuspend: Mt,
              })
            );
            var p =
              (62914560 & i) === i
                ? Mu - le()
                : (4194048 & i) === i
                ? Lu - le()
                : 0;
            if (
              null !==
              (p = (function (e, t) {
                return (
                  e.stylesheets && 0 === e.count && uf(e, e.stylesheets),
                  0 < e.count || 0 < e.imgCount
                    ? function (n) {
                        var r = setTimeout(function () {
                          if (
                            (e.stylesheets && uf(e, e.stylesheets), e.unsuspend)
                          ) {
                            var t = e.unsuspend;
                            (e.unsuspend = null), t();
                          }
                        }, 6e4 + t);
                        0 < e.imgBytes &&
                          0 === of &&
                          (of =
                            62500 *
                            (function () {
                              if (
                                "function" ===
                                typeof performance.getEntriesByType
                              ) {
                                for (
                                  var e = 0,
                                    t = 0,
                                    n =
                                      performance.getEntriesByType("resource"),
                                    r = 0;
                                  r < n.length;
                                  r++
                                ) {
                                  var a = n[r],
                                    i = a.transferSize,
                                    o = a.initiatorType,
                                    s = a.duration;
                                  if (i && s && hd(o)) {
                                    for (
                                      o = 0, s = a.responseEnd, r += 1;
                                      r < n.length;
                                      r++
                                    ) {
                                      var l = n[r],
                                        u = l.startTime;
                                      if (u > s) break;
                                      var c = l.transferSize,
                                        d = l.initiatorType;
                                      c &&
                                        hd(d) &&
                                        (o +=
                                          c *
                                          ((l = l.responseEnd) < s
                                            ? 1
                                            : (s - u) / (l - u)));
                                    }
                                    if (
                                      (--r,
                                      (t += (8 * (i + o)) / (a.duration / 1e3)),
                                      10 < ++e)
                                    )
                                      break;
                                  }
                                }
                                if (0 < e) return t / e / 1e6;
                              }
                              return navigator.connection &&
                                "number" ===
                                  typeof (e = navigator.connection.downlink)
                                ? e
                                : 5;
                            })());
                        var a = setTimeout(function () {
                          if (
                            ((e.waitingForImages = !1),
                            0 === e.count &&
                              (e.stylesheets && uf(e, e.stylesheets),
                              e.unsuspend))
                          ) {
                            var t = e.unsuspend;
                            (e.unsuspend = null), t();
                          }
                        }, (e.imgBytes > of ? 50 : 800) + t);
                        return (
                          (e.unsuspend = n),
                          function () {
                            (e.unsuspend = null),
                              clearTimeout(r),
                              clearTimeout(a);
                          }
                        );
                      }
                    : null
                );
              })(d, p))
            )
              return (
                (Bu = i),
                (e.cancelPendingCommit = p(
                  mc.bind(null, e, t, i, n, r, a, o, s, l, c, d, null, f, h)
                )),
                void Zu(e, i, o, !u)
              );
          }
          mc(e, t, i, n, r, a, o, s, l);
        }
        function Gu(e) {
          for (var t = e; ; ) {
            var n = t.tag;
            if (
              (0 === n || 11 === n || 15 === n) &&
              16384 & t.flags &&
              null !== (n = t.updateQueue) &&
              null !== (n = n.stores)
            )
              for (var r = 0; r < n.length; r++) {
                var a = n[r],
                  i = a.getSnapshot;
                a = a.value;
                try {
                  if (!Zn(i(), a)) return !1;
                } catch (o) {
                  return !1;
                }
              }
            if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
              (n.return = t), (t = n);
            else {
              if (t === e) break;
              for (; null === t.sibling; ) {
                if (null === t.return || t.return === e) return !0;
                t = t.return;
              }
              (t.sibling.return = t.return), (t = t.sibling);
            }
          }
          return !0;
        }
        function Zu(e, t, n, r) {
          (t &= ~Cu),
            (t &= ~Tu),
            (e.suspendedLanes |= t),
            (e.pingedLanes &= ~t),
            r && (e.warmLanes |= t),
            (r = e.expirationTimes);
          for (var a = t; 0 < a; ) {
            var i = 31 - we(a),
              o = 1 << i;
            (r[i] = -1), (a &= ~o);
          }
          0 !== n && Le(e, n, t);
        }
        function Ju() {
          return 0 !== (6 & hu) || (Rc(0, !1), !1);
        }
        function ec() {
          if (null !== mu) {
            if (0 === vu) var e = mu.return;
            else
              (Ea = ka = null), oo((e = mu)), (si = null), (li = 0), (e = mu);
            for (; null !== e; ) ml(e.alternate, e), (e = e.return);
            mu = null;
          }
        }
        function tc(e, t) {
          var n = e.timeoutHandle;
          -1 !== n && ((e.timeoutHandle = -1), Sd(n)),
            null !== (n = e.cancelPendingCommit) &&
              ((e.cancelPendingCommit = null), n()),
            (Bu = 0),
            ec(),
            (pu = e),
            (mu = n = Br(e.current, null)),
            (gu = t),
            (vu = 0),
            (yu = null),
            (bu = !1),
            (wu = Fe(e, t)),
            (xu = !1),
            (Fu = Pu = Cu = Tu = Eu = ku = 0),
            (Nu = Au = null),
            (Du = !1),
            0 !== (8 & t) && (t |= 32 & t);
          var r = e.entangledLanes;
          if (0 !== r)
            for (e = e.entanglements, r &= t; 0 < r; ) {
              var a = 31 - we(r),
                i = 1 << a;
              (t |= e[a]), (r &= ~i);
            }
          return (Su = t), Nr(), n;
        }
        function nc(e, t) {
          (Ui = null),
            (j.H = ms),
            t === Ga || t === Ja
              ? ((t = ii()), (vu = 3))
              : t === Za
              ? ((t = ii()), (vu = 4))
              : (vu =
                  t === Ms
                    ? 8
                    : null !== t &&
                      "object" === typeof t &&
                      "function" === typeof t.then
                    ? 6
                    : 1),
            (yu = t),
            null === mu && ((ku = 1), Ps(e, Xr(t, e.current)));
        }
        function rc() {
          var e = Mi.current;
          return (
            null === e ||
            ((4194048 & gu) === gu
              ? null === Li
              : ((62914560 & gu) === gu || 0 !== (536870912 & gu)) && e === Li)
          );
        }
        function ac() {
          var e = j.H;
          return (j.H = ms), null === e ? ms : e;
        }
        function ic() {
          var e = j.A;
          return (j.A = du), e;
        }
        function oc() {
          (ku = 4),
            bu || ((4194048 & gu) !== gu && null !== Mi.current) || (wu = !0),
            (0 === (134217727 & Eu) && 0 === (134217727 & Tu)) ||
              null === pu ||
              Zu(pu, gu, Pu, !1);
        }
        function sc(e, t, n) {
          var r = hu;
          hu |= 2;
          var a = ac(),
            i = ic();
          (pu === e && gu === t) || ((zu = null), tc(e, t)), (t = !1);
          var o = ku;
          e: for (;;)
            try {
              if (0 !== vu && null !== mu) {
                var s = mu,
                  l = yu;
                switch (vu) {
                  case 8:
                    ec(), (o = 6);
                    break e;
                  case 3:
                  case 2:
                  case 9:
                  case 6:
                    null === Mi.current && (t = !0);
                    var u = vu;
                    if (((vu = 0), (yu = null), fc(e, s, l, u), n && wu)) {
                      o = 0;
                      break e;
                    }
                    break;
                  default:
                    (u = vu), (vu = 0), (yu = null), fc(e, s, l, u);
                }
              }
              lc(), (o = ku);
              break;
            } catch (c) {
              nc(e, c);
            }
          return (
            t && e.shellSuspendCounter++,
            (Ea = ka = null),
            (hu = r),
            (j.H = a),
            (j.A = i),
            null === mu && ((pu = null), (gu = 0), Nr()),
            o
          );
        }
        function lc() {
          for (; null !== mu; ) cc(mu);
        }
        function uc() {
          for (; null !== mu && !oe(); ) cc(mu);
        }
        function cc(e) {
          var t = ol(e.alternate, e, Su);
          (e.memoizedProps = e.pendingProps), null === t ? hc(e) : (mu = t);
        }
        function dc(e) {
          var t = e,
            n = t.alternate;
          switch (t.tag) {
            case 15:
            case 0:
              t = $s(n, t, t.pendingProps, t.type, void 0, gu);
              break;
            case 11:
              t = $s(n, t, t.pendingProps, t.type.render, t.ref, gu);
              break;
            case 5:
              oo(t);
            default:
              ml(n, t), (t = ol(n, (t = mu = Ir(t, Su)), Su));
          }
          (e.memoizedProps = e.pendingProps), null === t ? hc(e) : (mu = t);
        }
        function fc(e, t, n, r) {
          (Ea = ka = null), oo(t), (si = null), (li = 0);
          var a = t.return;
          try {
            if (
              (function (e, t, n, r, a) {
                if (
                  ((n.flags |= 32768),
                  null !== r &&
                    "object" === typeof r &&
                    "function" === typeof r.then)
                ) {
                  if (
                    (null !== (t = n.alternate) && Aa(t, n, a, !0),
                    null !== (n = Mi.current))
                  ) {
                    switch (n.tag) {
                      case 31:
                      case 13:
                        return (
                          null === Li
                            ? oc()
                            : null === n.alternate && 0 === ku && (ku = 3),
                          (n.flags &= -257),
                          (n.flags |= 65536),
                          (n.lanes = a),
                          r === ei
                            ? (n.flags |= 16384)
                            : (null === (t = n.updateQueue)
                                ? (n.updateQueue = new Set([r]))
                                : t.add(r),
                              Ec(e, r, a)),
                          !1
                        );
                      case 22:
                        return (
                          (n.flags |= 65536),
                          r === ei
                            ? (n.flags |= 16384)
                            : (null === (t = n.updateQueue)
                                ? ((t = {
                                    transitions: null,
                                    markerInstances: null,
                                    retryQueue: new Set([r]),
                                  }),
                                  (n.updateQueue = t))
                                : null === (n = t.retryQueue)
                                ? (t.retryQueue = new Set([r]))
                                : n.add(r),
                              Ec(e, r, a)),
                          !1
                        );
                    }
                    throw Error(o(435, n.tag));
                  }
                  return Ec(e, r, a), oc(), !1;
                }
                if (da)
                  return (
                    null !== (t = Mi.current)
                      ? (0 === (65536 & t.flags) && (t.flags |= 256),
                        (t.flags |= 65536),
                        (t.lanes = a),
                        r !== pa &&
                          xa(Xr((e = Error(o(422), { cause: r })), n)))
                      : (r !== pa &&
                          xa(Xr((t = Error(o(423), { cause: r })), n)),
                        ((e = e.current.alternate).flags |= 65536),
                        (a &= -a),
                        (e.lanes |= a),
                        (r = Xr(r, n)),
                        xi(e, (a = As(e.stateNode, r, a))),
                        4 !== ku && (ku = 2)),
                    !1
                  );
                var i = Error(o(520), { cause: r });
                if (
                  ((i = Xr(i, n)),
                  null === Au ? (Au = [i]) : Au.push(i),
                  4 !== ku && (ku = 2),
                  null === t)
                )
                  return !0;
                (r = Xr(r, n)), (n = t);
                do {
                  switch (n.tag) {
                    case 3:
                      return (
                        (n.flags |= 65536),
                        (e = a & -a),
                        (n.lanes |= e),
                        xi(n, (e = As(n.stateNode, r, e))),
                        !1
                      );
                    case 1:
                      if (
                        ((t = n.type),
                        (i = n.stateNode),
                        0 === (128 & n.flags) &&
                          ("function" === typeof t.getDerivedStateFromError ||
                            (null !== i &&
                              "function" === typeof i.componentDidCatch &&
                              (null === Ru || !Ru.has(i)))))
                      )
                        return (
                          (n.flags |= 65536),
                          (a &= -a),
                          (n.lanes |= a),
                          Ds((a = Ns(a)), e, n, r),
                          xi(n, a),
                          !1
                        );
                  }
                  n = n.return;
                } while (null !== n);
                return !1;
              })(e, a, t, n, gu)
            )
              return (ku = 1), Ps(e, Xr(n, e.current)), void (mu = null);
          } catch (i) {
            if (null !== a) throw ((mu = a), i);
            return (ku = 1), Ps(e, Xr(n, e.current)), void (mu = null);
          }
          32768 & t.flags
            ? (da || 1 === r
                ? (e = !0)
                : wu || 0 !== (536870912 & gu)
                ? (e = !1)
                : ((bu = e = !0),
                  (2 === r || 9 === r || 3 === r || 6 === r) &&
                    null !== (r = Mi.current) &&
                    13 === r.tag &&
                    (r.flags |= 16384)),
              pc(t, e))
            : hc(t);
        }
        function hc(e) {
          var t = e;
          do {
            if (0 !== (32768 & t.flags)) return void pc(t, bu);
            e = t.return;
            var n = hl(t.alternate, t, Su);
            if (null !== n) return void (mu = n);
            if (null !== (t = t.sibling)) return void (mu = t);
            mu = t = e;
          } while (null !== t);
          0 === ku && (ku = 5);
        }
        function pc(e, t) {
          do {
            var n = pl(e.alternate, e);
            if (null !== n) return (n.flags &= 32767), void (mu = n);
            if (
              (null !== (n = e.return) &&
                ((n.flags |= 32768),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
              !t && null !== (e = e.sibling))
            )
              return void (mu = e);
            mu = e = n;
          } while (null !== e);
          (ku = 6), (mu = null);
        }
        function mc(e, t, n, r, a, i, s, l, u) {
          e.cancelPendingCommit = null;
          do {
            wc();
          } while (0 !== Ou);
          if (0 !== (6 & hu)) throw Error(o(327));
          if (null !== t) {
            if (t === e.current) throw Error(o(177));
            if (
              ((i = t.lanes | t.childLanes),
              (function (e, t, n, r, a, i) {
                var o = e.pendingLanes;
                (e.pendingLanes = n),
                  (e.suspendedLanes = 0),
                  (e.pingedLanes = 0),
                  (e.warmLanes = 0),
                  (e.expiredLanes &= n),
                  (e.entangledLanes &= n),
                  (e.errorRecoveryDisabledLanes &= n),
                  (e.shellSuspendCounter = 0);
                var s = e.entanglements,
                  l = e.expirationTimes,
                  u = e.hiddenUpdates;
                for (n = o & ~n; 0 < n; ) {
                  var c = 31 - we(n),
                    d = 1 << c;
                  (s[c] = 0), (l[c] = -1);
                  var f = u[c];
                  if (null !== f)
                    for (u[c] = null, c = 0; c < f.length; c++) {
                      var h = f[c];
                      null !== h && (h.lane &= -536870913);
                    }
                  n &= ~d;
                }
                0 !== r && Le(e, r, 0),
                  0 !== i &&
                    0 === a &&
                    0 !== e.tag &&
                    (e.suspendedLanes |= i & ~(o & ~t));
              })(e, n, (i |= Ar), s, l, u),
              e === pu && ((mu = pu = null), (gu = 0)),
              (Vu = t),
              (_u = e),
              (Bu = n),
              (Iu = i),
              (Uu = a),
              (Hu = r),
              0 !== (10256 & t.subtreeFlags) || 0 !== (10256 & t.flags)
                ? ((e.callbackNode = null),
                  (e.callbackPriority = 0),
                  ae(fe, function () {
                    return xc(), null;
                  }))
                : ((e.callbackNode = null), (e.callbackPriority = 0)),
              (r = 0 !== (13878 & t.flags)),
              0 !== (13878 & t.subtreeFlags) || r)
            ) {
              (r = j.T),
                (j.T = null),
                (a = z.p),
                (z.p = 2),
                (s = hu),
                (hu |= 4);
              try {
                !(function (e, t) {
                  if (((e = e.containerInfo), (pd = wf), ar((e = rr(e))))) {
                    if ("selectionStart" in e)
                      var n = { start: e.selectionStart, end: e.selectionEnd };
                    else
                      e: {
                        var r =
                          (n =
                            ((n = e.ownerDocument) && n.defaultView) || window)
                            .getSelection && n.getSelection();
                        if (r && 0 !== r.rangeCount) {
                          n = r.anchorNode;
                          var a = r.anchorOffset,
                            i = r.focusNode;
                          r = r.focusOffset;
                          try {
                            n.nodeType, i.nodeType;
                          } catch (g) {
                            n = null;
                            break e;
                          }
                          var s = 0,
                            l = -1,
                            u = -1,
                            c = 0,
                            d = 0,
                            f = e,
                            h = null;
                          t: for (;;) {
                            for (
                              var p;
                              f !== n ||
                                (0 !== a && 3 !== f.nodeType) ||
                                (l = s + a),
                                f !== i ||
                                  (0 !== r && 3 !== f.nodeType) ||
                                  (u = s + r),
                                3 === f.nodeType && (s += f.nodeValue.length),
                                null !== (p = f.firstChild);

                            )
                              (h = f), (f = p);
                            for (;;) {
                              if (f === e) break t;
                              if (
                                (h === n && ++c === a && (l = s),
                                h === i && ++d === r && (u = s),
                                null !== (p = f.nextSibling))
                              )
                                break;
                              h = (f = h).parentNode;
                            }
                            f = p;
                          }
                          n =
                            -1 === l || -1 === u ? null : { start: l, end: u };
                        } else n = null;
                      }
                    n = n || { start: 0, end: 0 };
                  } else n = null;
                  for (
                    md = { focusedElem: e, selectionRange: n }, wf = !1, Ll = t;
                    null !== Ll;

                  )
                    if (
                      ((e = (t = Ll).child),
                      0 !== (1028 & t.subtreeFlags) && null !== e)
                    )
                      (e.return = t), (Ll = e);
                    else
                      for (; null !== Ll; ) {
                        switch (
                          ((i = (t = Ll).alternate), (e = t.flags), t.tag)
                        ) {
                          case 0:
                            if (
                              0 !== (4 & e) &&
                              null !==
                                (e =
                                  null !== (e = t.updateQueue)
                                    ? e.events
                                    : null)
                            )
                              for (n = 0; n < e.length; n++)
                                (a = e[n]).ref.impl = a.nextImpl;
                            break;
                          case 11:
                          case 15:
                          case 5:
                          case 26:
                          case 27:
                          case 6:
                          case 4:
                          case 17:
                            break;
                          case 1:
                            if (0 !== (1024 & e) && null !== i) {
                              (e = void 0),
                                (n = t),
                                (a = i.memoizedProps),
                                (i = i.memoizedState),
                                (r = n.stateNode);
                              try {
                                var m = ks(n.type, a);
                                (e = r.getSnapshotBeforeUpdate(m, i)),
                                  (r.__reactInternalSnapshotBeforeUpdate = e);
                              } catch (v) {
                                kc(n, n.return, v);
                              }
                            }
                            break;
                          case 3:
                            if (0 !== (1024 & e))
                              if (
                                9 ===
                                (n = (e = t.stateNode.containerInfo).nodeType)
                              )
                                Ad(e);
                              else if (1 === n)
                                switch (e.nodeName) {
                                  case "HEAD":
                                  case "HTML":
                                  case "BODY":
                                    Ad(e);
                                    break;
                                  default:
                                    e.textContent = "";
                                }
                            break;
                          default:
                            if (0 !== (1024 & e)) throw Error(o(163));
                        }
                        if (null !== (e = t.sibling)) {
                          (e.return = t.return), (Ll = e);
                          break;
                        }
                        Ll = t.return;
                      }
                })(e, t);
              } finally {
                (hu = s), (z.p = a), (j.T = r);
              }
            }
            (Ou = 1), gc(), vc(), yc();
          }
        }
        function gc() {
          if (1 === Ou) {
            Ou = 0;
            var e = _u,
              t = Vu,
              n = 0 !== (13878 & t.flags);
            if (0 !== (13878 & t.subtreeFlags) || n) {
              (n = j.T), (j.T = null);
              var r = z.p;
              z.p = 2;
              var a = hu;
              hu |= 4;
              try {
                $l(t, e);
                var i = md,
                  o = rr(e.containerInfo),
                  s = i.focusedElem,
                  l = i.selectionRange;
                if (
                  o !== s &&
                  s &&
                  s.ownerDocument &&
                  nr(s.ownerDocument.documentElement, s)
                ) {
                  if (null !== l && ar(s)) {
                    var u = l.start,
                      c = l.end;
                    if ((void 0 === c && (c = u), "selectionStart" in s))
                      (s.selectionStart = u),
                        (s.selectionEnd = Math.min(c, s.value.length));
                    else {
                      var d = s.ownerDocument || document,
                        f = (d && d.defaultView) || window;
                      if (f.getSelection) {
                        var h = f.getSelection(),
                          p = s.textContent.length,
                          m = Math.min(l.start, p),
                          g = void 0 === l.end ? m : Math.min(l.end, p);
                        !h.extend && m > g && ((o = g), (g = m), (m = o));
                        var v = tr(s, m),
                          y = tr(s, g);
                        if (
                          v &&
                          y &&
                          (1 !== h.rangeCount ||
                            h.anchorNode !== v.node ||
                            h.anchorOffset !== v.offset ||
                            h.focusNode !== y.node ||
                            h.focusOffset !== y.offset)
                        ) {
                          var b = d.createRange();
                          b.setStart(v.node, v.offset),
                            h.removeAllRanges(),
                            m > g
                              ? (h.addRange(b), h.extend(y.node, y.offset))
                              : (b.setEnd(y.node, y.offset), h.addRange(b));
                        }
                      }
                    }
                  }
                  for (d = [], h = s; (h = h.parentNode); )
                    1 === h.nodeType &&
                      d.push({
                        element: h,
                        left: h.scrollLeft,
                        top: h.scrollTop,
                      });
                  for (
                    "function" === typeof s.focus && s.focus(), s = 0;
                    s < d.length;
                    s++
                  ) {
                    var w = d[s];
                    (w.element.scrollLeft = w.left),
                      (w.element.scrollTop = w.top);
                  }
                }
                (wf = !!pd), (md = pd = null);
              } finally {
                (hu = a), (z.p = r), (j.T = n);
              }
            }
            (e.current = t), (Ou = 2);
          }
        }
        function vc() {
          if (2 === Ou) {
            Ou = 0;
            var e = _u,
              t = Vu,
              n = 0 !== (8772 & t.flags);
            if (0 !== (8772 & t.subtreeFlags) || n) {
              (n = j.T), (j.T = null);
              var r = z.p;
              z.p = 2;
              var a = hu;
              hu |= 4;
              try {
                jl(e, t.alternate, t);
              } finally {
                (hu = a), (z.p = r), (j.T = n);
              }
            }
            Ou = 3;
          }
        }
        function yc() {
          if (4 === Ou || 3 === Ou) {
            (Ou = 0), se();
            var e = _u,
              t = Vu,
              n = Bu,
              r = Hu;
            0 !== (10256 & t.subtreeFlags) || 0 !== (10256 & t.flags)
              ? (Ou = 5)
              : ((Ou = 0), (Vu = _u = null), bc(e, e.pendingLanes));
            var a = e.pendingLanes;
            if (
              (0 === a && (Ru = null),
              Oe(n),
              (t = t.stateNode),
              ye && "function" === typeof ye.onCommitFiberRoot)
            )
              try {
                ye.onCommitFiberRoot(
                  ve,
                  t,
                  void 0,
                  128 === (128 & t.current.flags)
                );
              } catch (l) {}
            if (null !== r) {
              (t = j.T), (a = z.p), (z.p = 2), (j.T = null);
              try {
                for (var i = e.onRecoverableError, o = 0; o < r.length; o++) {
                  var s = r[o];
                  i(s.value, { componentStack: s.stack });
                }
              } finally {
                (j.T = t), (z.p = a);
              }
            }
            0 !== (3 & Bu) && wc(),
              zc(e),
              (a = e.pendingLanes),
              0 !== (261930 & n) && 0 !== (42 & a)
                ? e === $u
                  ? Wu++
                  : ((Wu = 0), ($u = e))
                : (Wu = 0),
              Rc(0, !1);
          }
        }
        function bc(e, t) {
          0 === (e.pooledCacheLanes &= t) &&
            null != (t = e.pooledCache) &&
            ((e.pooledCache = null), Ba(t));
        }
        function wc() {
          return gc(), vc(), yc(), xc();
        }
        function xc() {
          if (5 !== Ou) return !1;
          var e = _u,
            t = Iu;
          Iu = 0;
          var n = Oe(Bu),
            r = j.T,
            a = z.p;
          try {
            (z.p = 32 > n ? 32 : n), (j.T = null), (n = Uu), (Uu = null);
            var i = _u,
              s = Bu;
            if (((Ou = 0), (Vu = _u = null), (Bu = 0), 0 !== (6 & hu)))
              throw Error(o(331));
            var l = hu;
            if (
              ((hu |= 4),
              lu(i.current),
              eu(i, i.current, s, n),
              (hu = l),
              Rc(0, !1),
              ye && "function" === typeof ye.onPostCommitFiberRoot)
            )
              try {
                ye.onPostCommitFiberRoot(ve, i);
              } catch (u) {}
            return !0;
          } finally {
            (z.p = a), (j.T = r), bc(e, t);
          }
        }
        function Sc(e, t, n) {
          (t = Xr(n, t)),
            null !== (e = bi(e, (t = As(e.stateNode, t, 2)), 2)) &&
              (Me(e, 2), zc(e));
        }
        function kc(e, t, n) {
          if (3 === e.tag) Sc(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                Sc(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === Ru || !Ru.has(r)))
                ) {
                  (e = Xr(n, e)),
                    null !== (r = bi(t, (n = Ns(2)), 2)) &&
                      (Ds(n, r, t, e), Me(r, 2), zc(r));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Ec(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new fu();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) ||
            ((xu = !0), a.add(n), (e = Tc.bind(null, e, t, n)), t.then(e, e));
        }
        function Tc(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (e.pingedLanes |= e.suspendedLanes & n),
            (e.warmLanes &= ~n),
            pu === e &&
              (gu & n) === n &&
              (4 === ku ||
              (3 === ku && (62914560 & gu) === gu && 300 > le() - Mu)
                ? 0 === (2 & hu) && tc(e, 0)
                : (Cu |= n),
              Fu === gu && (Fu = 0)),
            zc(e);
        }
        function Cc(e, t) {
          0 === t && (t = Ne()), null !== (e = Lr(e, t)) && (Me(e, t), zc(e));
        }
        function Pc(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Cc(e, n);
        }
        function Fc(e, t) {
          var n = 0;
          switch (e.tag) {
            case 31:
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            case 22:
              r = e.stateNode._retryCache;
              break;
            default:
              throw Error(o(314));
          }
          null !== r && r.delete(t), Cc(e, n);
        }
        var Ac = null,
          Nc = null,
          Dc = !1,
          Mc = !1,
          Lc = !1,
          jc = 0;
        function zc(e) {
          e !== Nc &&
            null === e.next &&
            (null === Nc ? (Ac = Nc = e) : (Nc = Nc.next = e)),
            (Mc = !0),
            Dc ||
              ((Dc = !0),
              Ed(function () {
                0 !== (6 & hu) ? ae(ce, Oc) : _c();
              }));
        }
        function Rc(e, t) {
          if (!Lc && Mc) {
            Lc = !0;
            do {
              for (var n = !1, r = Ac; null !== r; ) {
                if (!t)
                  if (0 !== e) {
                    var a = r.pendingLanes;
                    if (0 === a) var i = 0;
                    else {
                      var o = r.suspendedLanes,
                        s = r.pingedLanes;
                      (i = (1 << (31 - we(42 | e) + 1)) - 1),
                        (i =
                          201326741 & (i &= a & ~(o & ~s))
                            ? (201326741 & i) | 1
                            : i
                            ? 2 | i
                            : 0);
                    }
                    0 !== i && ((n = !0), Ic(r, i));
                  } else
                    (i = gu),
                      0 ===
                        (3 &
                          (i = Pe(
                            r,
                            r === pu ? i : 0,
                            null !== r.cancelPendingCommit ||
                              -1 !== r.timeoutHandle
                          ))) ||
                        Fe(r, i) ||
                        ((n = !0), Ic(r, i));
                r = r.next;
              }
            } while (n);
            Lc = !1;
          }
        }
        function Oc() {
          _c();
        }
        function _c() {
          Mc = Dc = !1;
          var e = 0;
          0 !== jc &&
            (function () {
              var e = window.event;
              if (e && "popstate" === e.type) return e !== wd && ((wd = e), !0);
              return (wd = null), !1;
            })() &&
            (e = jc);
          for (var t = le(), n = null, r = Ac; null !== r; ) {
            var a = r.next,
              i = Vc(r, t);
            0 === i
              ? ((r.next = null),
                null === n ? (Ac = a) : (n.next = a),
                null === a && (Nc = n))
              : ((n = r), (0 !== e || 0 !== (3 & i)) && (Mc = !0)),
              (r = a);
          }
          (0 !== Ou && 5 !== Ou) || Rc(e, !1), 0 !== jc && (jc = 0);
        }
        function Vc(e, t) {
          for (
            var n = e.suspendedLanes,
              r = e.pingedLanes,
              a = e.expirationTimes,
              i = -62914561 & e.pendingLanes;
            0 < i;

          ) {
            var o = 31 - we(i),
              s = 1 << o,
              l = a[o];
            -1 === l
              ? (0 !== (s & n) && 0 === (s & r)) || (a[o] = Ae(s, t))
              : l <= t && (e.expiredLanes |= s),
              (i &= ~s);
          }
          if (
            ((n = gu),
            (n = Pe(
              e,
              e === (t = pu) ? n : 0,
              null !== e.cancelPendingCommit || -1 !== e.timeoutHandle
            )),
            (r = e.callbackNode),
            0 === n ||
              (e === t && (2 === vu || 9 === vu)) ||
              null !== e.cancelPendingCommit)
          )
            return (
              null !== r && null !== r && ie(r),
              (e.callbackNode = null),
              (e.callbackPriority = 0)
            );
          if (0 === (3 & n) || Fe(e, n)) {
            if ((t = n & -n) === e.callbackPriority) return t;
            switch ((null !== r && ie(r), Oe(n))) {
              case 2:
              case 8:
                n = de;
                break;
              case 32:
              default:
                n = fe;
                break;
              case 268435456:
                n = pe;
            }
            return (
              (r = Bc.bind(null, e)),
              (n = ae(n, r)),
              (e.callbackPriority = t),
              (e.callbackNode = n),
              t
            );
          }
          return (
            null !== r && null !== r && ie(r),
            (e.callbackPriority = 2),
            (e.callbackNode = null),
            2
          );
        }
        function Bc(e, t) {
          if (0 !== Ou && 5 !== Ou)
            return (e.callbackNode = null), (e.callbackPriority = 0), null;
          var n = e.callbackNode;
          if (wc() && e.callbackNode !== n) return null;
          var r = gu;
          return 0 ===
            (r = Pe(
              e,
              e === pu ? r : 0,
              null !== e.cancelPendingCommit || -1 !== e.timeoutHandle
            ))
            ? null
            : (Ku(e, r, t),
              Vc(e, le()),
              null != e.callbackNode && e.callbackNode === n
                ? Bc.bind(null, e)
                : null);
        }
        function Ic(e, t) {
          if (wc()) return null;
          Ku(e, t, !0);
        }
        function Uc() {
          if (0 === jc) {
            var e = Ha;
            0 === e && ((e = ke), 0 === (261888 & (ke <<= 1)) && (ke = 256)),
              (jc = e);
          }
          return jc;
        }
        function Hc(e) {
          return null == e || "symbol" === typeof e || "boolean" === typeof e
            ? null
            : "function" === typeof e
            ? e
            : Dt("" + e);
        }
        function Wc(e, t) {
          var n = t.ownerDocument.createElement("input");
          return (
            (n.name = t.name),
            (n.value = t.value),
            e.id && n.setAttribute("form", e.id),
            t.parentNode.insertBefore(n, t),
            (e = new FormData(e)),
            n.parentNode.removeChild(n),
            e
          );
        }
        for (var $c = 0; $c < Er.length; $c++) {
          var Yc = Er[$c];
          Tr(Yc.toLowerCase(), "on" + (Yc[0].toUpperCase() + Yc.slice(1)));
        }
        Tr(gr, "onAnimationEnd"),
          Tr(vr, "onAnimationIteration"),
          Tr(yr, "onAnimationStart"),
          Tr("dblclick", "onDoubleClick"),
          Tr("focusin", "onFocus"),
          Tr("focusout", "onBlur"),
          Tr(br, "onTransitionRun"),
          Tr(wr, "onTransitionStart"),
          Tr(xr, "onTransitionCancel"),
          Tr(Sr, "onTransitionEnd"),
          at("onMouseEnter", ["mouseout", "mouseover"]),
          at("onMouseLeave", ["mouseout", "mouseover"]),
          at("onPointerEnter", ["pointerout", "pointerover"]),
          at("onPointerLeave", ["pointerout", "pointerover"]),
          rt(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          rt(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          rt("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          rt(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          rt(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          rt(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var qc =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Xc = new Set(
            "beforetoggle cancel close invalid load scroll scrollend toggle"
              .split(" ")
              .concat(qc)
          );
        function Kc(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var i = void 0;
              if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                  var s = r[o],
                    l = s.instance,
                    u = s.currentTarget;
                  if (((s = s.listener), l !== i && a.isPropagationStopped()))
                    break e;
                  (i = s), (a.currentTarget = u);
                  try {
                    i(a);
                  } catch (c) {
                    Cr(c);
                  }
                  (a.currentTarget = null), (i = l);
                }
              else
                for (o = 0; o < r.length; o++) {
                  if (
                    ((l = (s = r[o]).instance),
                    (u = s.currentTarget),
                    (s = s.listener),
                    l !== i && a.isPropagationStopped())
                  )
                    break e;
                  (i = s), (a.currentTarget = u);
                  try {
                    i(a);
                  } catch (c) {
                    Cr(c);
                  }
                  (a.currentTarget = null), (i = l);
                }
            }
          }
        }
        function Qc(e, t) {
          var n = t[We];
          void 0 === n && (n = t[We] = new Set());
          var r = e + "__bubble";
          n.has(r) || (ed(t, e, 2, !1), n.add(r));
        }
        function Gc(e, t, n) {
          var r = 0;
          t && (r |= 4), ed(n, e, r, t);
        }
        var Zc = "_reactListening" + Math.random().toString(36).slice(2);
        function Jc(e) {
          if (!e[Zc]) {
            (e[Zc] = !0),
              tt.forEach(function (t) {
                "selectionchange" !== t &&
                  (Xc.has(t) || Gc(t, !1, e), Gc(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Zc] || ((t[Zc] = !0), Gc("selectionchange", !1, t));
          }
        }
        function ed(e, t, n, r) {
          switch (Pf(t)) {
            case 2:
              var a = xf;
              break;
            case 8:
              a = Sf;
              break;
            default:
              a = kf;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !Ut ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
              ? e.addEventListener(t, n, { passive: a })
              : e.addEventListener(t, n, !1);
        }
        function td(e, t, n, r, a) {
          var i = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var o = r.tag;
              if (3 === o || 4 === o) {
                var s = r.stateNode.containerInfo;
                if (s === a) break;
                if (4 === o)
                  for (o = r.return; null !== o; ) {
                    var u = o.tag;
                    if ((3 === u || 4 === u) && o.stateNode.containerInfo === a)
                      return;
                    o = o.return;
                  }
                for (; null !== s; ) {
                  if (null === (o = Qe(s))) return;
                  if (5 === (u = o.tag) || 6 === u || 26 === u || 27 === u) {
                    r = i = o;
                    continue e;
                  }
                  s = s.parentNode;
                }
              }
              r = r.return;
            }
          Vt(function () {
            var r = i,
              a = jt(n),
              o = [];
            e: {
              var s = kr.get(e);
              if (void 0 !== s) {
                var u = nn,
                  c = e;
                switch (e) {
                  case "keypress":
                    if (0 === Xt(n)) break e;
                  case "keydown":
                  case "keyup":
                    u = yn;
                    break;
                  case "focusin":
                    (c = "focus"), (u = un);
                    break;
                  case "focusout":
                    (c = "blur"), (u = un);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    u = un;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    u = sn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    u = ln;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    u = wn;
                    break;
                  case gr:
                  case vr:
                  case yr:
                    u = cn;
                    break;
                  case Sr:
                    u = xn;
                    break;
                  case "scroll":
                  case "scrollend":
                    u = an;
                    break;
                  case "wheel":
                    u = Sn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    u = dn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    u = bn;
                    break;
                  case "toggle":
                  case "beforetoggle":
                    u = kn;
                }
                var d = 0 !== (4 & t),
                  f = !d && ("scroll" === e || "scrollend" === e),
                  h = d ? (null !== s ? s + "Capture" : null) : s;
                d = [];
                for (var p, m = r; null !== m; ) {
                  var g = m;
                  if (
                    ((p = g.stateNode),
                    (5 !== (g = g.tag) && 26 !== g && 27 !== g) ||
                      null === p ||
                      null === h ||
                      (null != (g = Bt(m, h)) && d.push(nd(m, g, p))),
                    f)
                  )
                    break;
                  m = m.return;
                }
                0 < d.length &&
                  ((s = new u(s, c, null, n, a)),
                  o.push({ event: s, listeners: d }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((u = "mouseout" === e || "pointerout" === e),
                (!(s = "mouseover" === e || "pointerover" === e) ||
                  n === Lt ||
                  !(c = n.relatedTarget || n.fromElement) ||
                  (!Qe(c) && !c[He])) &&
                  (u || s) &&
                  ((s =
                    a.window === a
                      ? a
                      : (s = a.ownerDocument)
                      ? s.defaultView || s.parentWindow
                      : window),
                  u
                    ? ((u = r),
                      null !==
                        (c = (c = n.relatedTarget || n.toElement)
                          ? Qe(c)
                          : null) &&
                        ((f = l(c)),
                        (d = c.tag),
                        c !== f || (5 !== d && 27 !== d && 6 !== d)) &&
                        (c = null))
                    : ((u = null), (c = r)),
                  u !== c))
              ) {
                if (
                  ((d = sn),
                  (g = "onMouseLeave"),
                  (h = "onMouseEnter"),
                  (m = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((d = bn),
                    (g = "onPointerLeave"),
                    (h = "onPointerEnter"),
                    (m = "pointer")),
                  (f = null == u ? s : Ze(u)),
                  (p = null == c ? s : Ze(c)),
                  ((s = new d(g, m + "leave", u, n, a)).target = f),
                  (s.relatedTarget = p),
                  (g = null),
                  Qe(a) === r &&
                    (((d = new d(h, m + "enter", c, n, a)).target = p),
                    (d.relatedTarget = f),
                    (g = d)),
                  (f = g),
                  u && c)
                )
                  e: {
                    for (d = ad, m = c, p = 0, g = h = u; g; g = d(g)) p++;
                    g = 0;
                    for (var v = m; v; v = d(v)) g++;
                    for (; 0 < p - g; ) (h = d(h)), p--;
                    for (; 0 < g - p; ) (m = d(m)), g--;
                    for (; p--; ) {
                      if (h === m || (null !== m && h === m.alternate)) {
                        d = h;
                        break e;
                      }
                      (h = d(h)), (m = d(m));
                    }
                    d = null;
                  }
                else d = null;
                null !== u && id(o, s, u, d, !1),
                  null !== c && null !== f && id(o, f, c, d, !0);
              }
              if (
                "select" ===
                  (u =
                    (s = r ? Ze(r) : window).nodeName &&
                    s.nodeName.toLowerCase()) ||
                ("input" === u && "file" === s.type)
              )
                var y = In;
              else if (zn(s))
                if (Un) y = Gn;
                else {
                  y = Kn;
                  var b = Xn;
                }
              else
                !(u = s.nodeName) ||
                "input" !== u.toLowerCase() ||
                ("checkbox" !== s.type && "radio" !== s.type)
                  ? r && Ft(r.elementType) && (y = In)
                  : (y = Qn);
              switch (
                (y && (y = y(e, r))
                  ? Rn(o, y, n, a)
                  : (b && b(e, s, r),
                    "focusout" === e &&
                      r &&
                      "number" === s.type &&
                      null != r.memoizedProps.value &&
                      wt(s, "number", s.value)),
                (b = r ? Ze(r) : window),
                e)
              ) {
                case "focusin":
                  (zn(b) || "true" === b.contentEditable) &&
                    ((or = b), (sr = r), (lr = null));
                  break;
                case "focusout":
                  lr = sr = or = null;
                  break;
                case "mousedown":
                  ur = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (ur = !1), cr(o, n, a);
                  break;
                case "selectionchange":
                  if (ir) break;
                case "keydown":
                case "keyup":
                  cr(o, n, a);
              }
              var w;
              if (Tn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var x = "onCompositionStart";
                      break e;
                    case "compositionend":
                      x = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      x = "onCompositionUpdate";
                      break e;
                  }
                  x = void 0;
                }
              else
                Ln
                  ? Dn(e, n) && (x = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (x = "onCompositionStart");
              x &&
                (Fn &&
                  "ko" !== n.locale &&
                  (Ln || "onCompositionStart" !== x
                    ? "onCompositionEnd" === x && Ln && (w = qt())
                    : (($t = "value" in (Wt = a) ? Wt.value : Wt.textContent),
                      (Ln = !0))),
                0 < (b = rd(r, x)).length &&
                  ((x = new fn(x, e, null, n, a)),
                  o.push({ event: x, listeners: b }),
                  w ? (x.data = w) : null !== (w = Mn(n)) && (x.data = w))),
                (w = Pn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Mn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Nn = !0), An);
                        case "textInput":
                          return (e = t.data) === An && Nn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Ln)
                        return "compositionend" === e || (!Tn && Dn(e, t))
                          ? ((e = qt()), (Yt = $t = Wt = null), (Ln = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Fn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (x = rd(r, "onBeforeInput")).length &&
                  ((b = new fn("onBeforeInput", "beforeinput", null, n, a)),
                  o.push({ event: b, listeners: x }),
                  (b.data = w)),
                (function (e, t, n, r, a) {
                  if ("submit" === t && n && n.stateNode === a) {
                    var i = Hc((a[Ue] || null).action),
                      o = r.submitter;
                    o &&
                      null !==
                        (t = (t = o[Ue] || null)
                          ? Hc(t.formAction)
                          : o.getAttribute("formAction")) &&
                      ((i = t), (o = null));
                    var s = new nn("action", "action", null, r, a);
                    e.push({
                      event: s,
                      listeners: [
                        {
                          instance: null,
                          listener: function () {
                            if (r.defaultPrevented) {
                              if (0 !== jc) {
                                var e = o ? Wc(a, o) : new FormData(a);
                                ts(
                                  n,
                                  {
                                    pending: !0,
                                    data: e,
                                    method: a.method,
                                    action: i,
                                  },
                                  null,
                                  e
                                );
                              }
                            } else
                              "function" === typeof i &&
                                (s.preventDefault(),
                                (e = o ? Wc(a, o) : new FormData(a)),
                                ts(
                                  n,
                                  {
                                    pending: !0,
                                    data: e,
                                    method: a.method,
                                    action: i,
                                  },
                                  i,
                                  e
                                ));
                          },
                          currentTarget: a,
                        },
                      ],
                    });
                  }
                })(o, e, r, n, a);
            }
            Kc(o, t);
          });
        }
        function nd(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function rd(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              i = a.stateNode;
            if (
              ((5 !== (a = a.tag) && 26 !== a && 27 !== a) ||
                null === i ||
                (null != (a = Bt(e, n)) && r.unshift(nd(e, a, i)),
                null != (a = Bt(e, t)) && r.push(nd(e, a, i))),
              3 === e.tag)
            )
              return r;
            e = e.return;
          }
          return [];
        }
        function ad(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag && 27 !== e.tag);
          return e || null;
        }
        function id(e, t, n, r, a) {
          for (var i = t._reactName, o = []; null !== n && n !== r; ) {
            var s = n,
              l = s.alternate,
              u = s.stateNode;
            if (((s = s.tag), null !== l && l === r)) break;
            (5 !== s && 26 !== s && 27 !== s) ||
              null === u ||
              ((l = u),
              a
                ? null != (u = Bt(n, i)) && o.unshift(nd(n, u, l))
                : a || (null != (u = Bt(n, i)) && o.push(nd(n, u, l)))),
              (n = n.return);
          }
          0 !== o.length && e.push({ event: t, listeners: o });
        }
        var od = /\r\n?/g,
          sd = /\u0000|\uFFFD/g;
        function ld(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(od, "\n")
            .replace(sd, "");
        }
        function ud(e, t) {
          return (t = ld(t)), ld(e) === t;
        }
        function cd(e, t, n, r, a, i) {
          switch (n) {
            case "children":
              "string" === typeof r
                ? "body" === t || ("textarea" === t && "" === r) || Et(e, r)
                : ("number" === typeof r || "bigint" === typeof r) &&
                  "body" !== t &&
                  Et(e, "" + r);
              break;
            case "className":
              ut(e, "class", r);
              break;
            case "tabIndex":
              ut(e, "tabindex", r);
              break;
            case "dir":
            case "role":
            case "viewBox":
            case "width":
            case "height":
              ut(e, n, r);
              break;
            case "style":
              Pt(e, r, i);
              break;
            case "data":
              if ("object" !== t) {
                ut(e, "data", r);
                break;
              }
            case "src":
            case "href":
              if ("" === r && ("a" !== t || "href" !== n)) {
                e.removeAttribute(n);
                break;
              }
              if (
                null == r ||
                "function" === typeof r ||
                "symbol" === typeof r ||
                "boolean" === typeof r
              ) {
                e.removeAttribute(n);
                break;
              }
              (r = Dt("" + r)), e.setAttribute(n, r);
              break;
            case "action":
            case "formAction":
              if ("function" === typeof r) {
                e.setAttribute(
                  n,
                  "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
                );
                break;
              }
              if (
                ("function" === typeof i &&
                  ("formAction" === n
                    ? ("input" !== t && cd(e, t, "name", a.name, a, null),
                      cd(e, t, "formEncType", a.formEncType, a, null),
                      cd(e, t, "formMethod", a.formMethod, a, null),
                      cd(e, t, "formTarget", a.formTarget, a, null))
                    : (cd(e, t, "encType", a.encType, a, null),
                      cd(e, t, "method", a.method, a, null),
                      cd(e, t, "target", a.target, a, null))),
                null == r || "symbol" === typeof r || "boolean" === typeof r)
              ) {
                e.removeAttribute(n);
                break;
              }
              (r = Dt("" + r)), e.setAttribute(n, r);
              break;
            case "onClick":
              null != r && (e.onclick = Mt);
              break;
            case "onScroll":
              null != r && Qc("scroll", e);
              break;
            case "onScrollEnd":
              null != r && Qc("scrollend", e);
              break;
            case "dangerouslySetInnerHTML":
              if (null != r) {
                if ("object" !== typeof r || !("__html" in r))
                  throw Error(o(61));
                if (null != (n = r.__html)) {
                  if (null != a.children) throw Error(o(60));
                  e.innerHTML = n;
                }
              }
              break;
            case "multiple":
              e.multiple =
                r && "function" !== typeof r && "symbol" !== typeof r;
              break;
            case "muted":
              e.muted = r && "function" !== typeof r && "symbol" !== typeof r;
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "ref":
            case "autoFocus":
              break;
            case "xlinkHref":
              if (
                null == r ||
                "function" === typeof r ||
                "boolean" === typeof r ||
                "symbol" === typeof r
              ) {
                e.removeAttribute("xlink:href");
                break;
              }
              (n = Dt("" + r)),
                e.setAttributeNS(
                  "http://www.w3.org/1999/xlink",
                  "xlink:href",
                  n
                );
              break;
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
              null != r && "function" !== typeof r && "symbol" !== typeof r
                ? e.setAttribute(n, "" + r)
                : e.removeAttribute(n);
              break;
            case "inert":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
              r && "function" !== typeof r && "symbol" !== typeof r
                ? e.setAttribute(n, "")
                : e.removeAttribute(n);
              break;
            case "capture":
            case "download":
              !0 === r
                ? e.setAttribute(n, "")
                : !1 !== r &&
                  null != r &&
                  "function" !== typeof r &&
                  "symbol" !== typeof r
                ? e.setAttribute(n, r)
                : e.removeAttribute(n);
              break;
            case "cols":
            case "rows":
            case "size":
            case "span":
              null != r &&
              "function" !== typeof r &&
              "symbol" !== typeof r &&
              !isNaN(r) &&
              1 <= r
                ? e.setAttribute(n, r)
                : e.removeAttribute(n);
              break;
            case "rowSpan":
            case "start":
              null == r ||
              "function" === typeof r ||
              "symbol" === typeof r ||
              isNaN(r)
                ? e.removeAttribute(n)
                : e.setAttribute(n, r);
              break;
            case "popover":
              Qc("beforetoggle", e), Qc("toggle", e), lt(e, "popover", r);
              break;
            case "xlinkActuate":
              ct(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
              break;
            case "xlinkArcrole":
              ct(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
              break;
            case "xlinkRole":
              ct(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
              break;
            case "xlinkShow":
              ct(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
              break;
            case "xlinkTitle":
              ct(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
              break;
            case "xlinkType":
              ct(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
              break;
            case "xmlBase":
              ct(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
              break;
            case "xmlLang":
              ct(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
              break;
            case "xmlSpace":
              ct(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
              break;
            case "is":
              lt(e, "is", r);
              break;
            case "innerText":
            case "textContent":
              break;
            default:
              (!(2 < n.length) ||
                ("o" !== n[0] && "O" !== n[0]) ||
                ("n" !== n[1] && "N" !== n[1])) &&
                lt(e, (n = At.get(n) || n), r);
          }
        }
        function dd(e, t, n, r, a, i) {
          switch (n) {
            case "style":
              Pt(e, r, i);
              break;
            case "dangerouslySetInnerHTML":
              if (null != r) {
                if ("object" !== typeof r || !("__html" in r))
                  throw Error(o(61));
                if (null != (n = r.__html)) {
                  if (null != a.children) throw Error(o(60));
                  e.innerHTML = n;
                }
              }
              break;
            case "children":
              "string" === typeof r
                ? Et(e, r)
                : ("number" === typeof r || "bigint" === typeof r) &&
                  Et(e, "" + r);
              break;
            case "onScroll":
              null != r && Qc("scroll", e);
              break;
            case "onScrollEnd":
              null != r && Qc("scrollend", e);
              break;
            case "onClick":
              null != r && (e.onclick = Mt);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "innerHTML":
            case "ref":
            case "innerText":
            case "textContent":
              break;
            default:
              nt.hasOwnProperty(n) ||
                ("o" !== n[0] ||
                "n" !== n[1] ||
                ((a = n.endsWith("Capture")),
                (t = n.slice(2, a ? n.length - 7 : void 0)),
                "function" ===
                  typeof (i = null != (i = e[Ue] || null) ? i[n] : null) &&
                  e.removeEventListener(t, i, a),
                "function" !== typeof r)
                  ? n in e
                    ? (e[n] = r)
                    : !0 === r
                    ? e.setAttribute(n, "")
                    : lt(e, n, r)
                  : ("function" !== typeof i &&
                      null !== i &&
                      (n in e
                        ? (e[n] = null)
                        : e.hasAttribute(n) && e.removeAttribute(n)),
                    e.addEventListener(t, r, a)));
          }
        }
        function fd(e, t, n) {
          switch (t) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
              break;
            case "img":
              Qc("error", e), Qc("load", e);
              var r,
                a = !1,
                i = !1;
              for (r in n)
                if (n.hasOwnProperty(r)) {
                  var s = n[r];
                  if (null != s)
                    switch (r) {
                      case "src":
                        a = !0;
                        break;
                      case "srcSet":
                        i = !0;
                        break;
                      case "children":
                      case "dangerouslySetInnerHTML":
                        throw Error(o(137, t));
                      default:
                        cd(e, t, r, s, n, null);
                    }
                }
              return (
                i && cd(e, t, "srcSet", n.srcSet, n, null),
                void (a && cd(e, t, "src", n.src, n, null))
              );
            case "input":
              Qc("invalid", e);
              var l = (r = s = i = null),
                u = null,
                c = null;
              for (a in n)
                if (n.hasOwnProperty(a)) {
                  var d = n[a];
                  if (null != d)
                    switch (a) {
                      case "name":
                        i = d;
                        break;
                      case "type":
                        s = d;
                        break;
                      case "checked":
                        u = d;
                        break;
                      case "defaultChecked":
                        c = d;
                        break;
                      case "value":
                        r = d;
                        break;
                      case "defaultValue":
                        l = d;
                        break;
                      case "children":
                      case "dangerouslySetInnerHTML":
                        if (null != d) throw Error(o(137, t));
                        break;
                      default:
                        cd(e, t, a, d, n, null);
                    }
                }
              return void bt(e, r, l, u, c, s, i, !1);
            case "select":
              for (i in (Qc("invalid", e), (a = s = r = null), n))
                if (n.hasOwnProperty(i) && null != (l = n[i]))
                  switch (i) {
                    case "value":
                      r = l;
                      break;
                    case "defaultValue":
                      s = l;
                      break;
                    case "multiple":
                      a = l;
                    default:
                      cd(e, t, i, l, n, null);
                  }
              return (
                (t = r),
                (n = s),
                (e.multiple = !!a),
                void (null != t
                  ? xt(e, !!a, t, !1)
                  : null != n && xt(e, !!a, n, !0))
              );
            case "textarea":
              for (s in (Qc("invalid", e), (r = i = a = null), n))
                if (n.hasOwnProperty(s) && null != (l = n[s]))
                  switch (s) {
                    case "value":
                      a = l;
                      break;
                    case "defaultValue":
                      i = l;
                      break;
                    case "children":
                      r = l;
                      break;
                    case "dangerouslySetInnerHTML":
                      if (null != l) throw Error(o(91));
                      break;
                    default:
                      cd(e, t, s, l, n, null);
                  }
              return void kt(e, a, i, r);
            case "option":
              for (u in n)
                if (n.hasOwnProperty(u) && null != (a = n[u]))
                  if ("selected" === u)
                    e.selected =
                      a && "function" !== typeof a && "symbol" !== typeof a;
                  else cd(e, t, u, a, n, null);
              return;
            case "dialog":
              Qc("beforetoggle", e),
                Qc("toggle", e),
                Qc("cancel", e),
                Qc("close", e);
              break;
            case "iframe":
            case "object":
              Qc("load", e);
              break;
            case "video":
            case "audio":
              for (a = 0; a < qc.length; a++) Qc(qc[a], e);
              break;
            case "image":
              Qc("error", e), Qc("load", e);
              break;
            case "details":
              Qc("toggle", e);
              break;
            case "embed":
            case "source":
            case "link":
              Qc("error", e), Qc("load", e);
            case "area":
            case "base":
            case "br":
            case "col":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "track":
            case "wbr":
            case "menuitem":
              for (c in n)
                if (n.hasOwnProperty(c) && null != (a = n[c]))
                  switch (c) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                      throw Error(o(137, t));
                    default:
                      cd(e, t, c, a, n, null);
                  }
              return;
            default:
              if (Ft(t)) {
                for (d in n)
                  n.hasOwnProperty(d) &&
                    void 0 !== (a = n[d]) &&
                    dd(e, t, d, a, n, void 0);
                return;
              }
          }
          for (l in n)
            n.hasOwnProperty(l) &&
              null != (a = n[l]) &&
              cd(e, t, l, a, n, null);
        }
        function hd(e) {
          switch (e) {
            case "css":
            case "script":
            case "font":
            case "img":
            case "image":
            case "input":
            case "link":
              return !0;
            default:
              return !1;
          }
        }
        var pd = null,
          md = null;
        function gd(e) {
          return 9 === e.nodeType ? e : e.ownerDocument;
        }
        function vd(e) {
          switch (e) {
            case "http://www.w3.org/2000/svg":
              return 1;
            case "http://www.w3.org/1998/Math/MathML":
              return 2;
            default:
              return 0;
          }
        }
        function yd(e, t) {
          if (0 === e)
            switch (t) {
              case "svg":
                return 1;
              case "math":
                return 2;
              default:
                return 0;
            }
          return 1 === e && "foreignObject" === t ? 0 : e;
        }
        function bd(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            "bigint" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var wd = null;
        var xd = "function" === typeof setTimeout ? setTimeout : void 0,
          Sd = "function" === typeof clearTimeout ? clearTimeout : void 0,
          kd = "function" === typeof Promise ? Promise : void 0,
          Ed =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof kd
              ? function (e) {
                  return kd.resolve(null).then(e).catch(Td);
                }
              : xd;
        function Td(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function Cd(e) {
          return "head" === e;
        }
        function Pd(e, t) {
          var n = t,
            r = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ("/$" === (n = a.data) || "/&" === n) {
                if (0 === r) return e.removeChild(a), void $f(t);
                r--;
              } else if (
                "$" === n ||
                "$?" === n ||
                "$~" === n ||
                "$!" === n ||
                "&" === n
              )
                r++;
              else if ("html" === n) _d(e.ownerDocument.documentElement);
              else if ("head" === n) {
                _d((n = e.ownerDocument.head));
                for (var i = n.firstChild; i; ) {
                  var o = i.nextSibling,
                    s = i.nodeName;
                  i[Xe] ||
                    "SCRIPT" === s ||
                    "STYLE" === s ||
                    ("LINK" === s && "stylesheet" === i.rel.toLowerCase()) ||
                    n.removeChild(i),
                    (i = o);
                }
              } else "body" === n && _d(e.ownerDocument.body);
            n = a;
          } while (n);
          $f(t);
        }
        function Fd(e, t) {
          var n = e;
          e = 0;
          do {
            var r = n.nextSibling;
            if (
              (1 === n.nodeType
                ? t
                  ? ((n._stashedDisplay = n.style.display),
                    (n.style.display = "none"))
                  : ((n.style.display = n._stashedDisplay || ""),
                    "" === n.getAttribute("style") &&
                      n.removeAttribute("style"))
                : 3 === n.nodeType &&
                  (t
                    ? ((n._stashedText = n.nodeValue), (n.nodeValue = ""))
                    : (n.nodeValue = n._stashedText || "")),
              r && 8 === r.nodeType)
            )
              if ("/$" === (n = r.data)) {
                if (0 === e) break;
                e--;
              } else
                ("$" !== n && "$?" !== n && "$~" !== n && "$!" !== n) || e++;
            n = r;
          } while (n);
        }
        function Ad(e) {
          var t = e.firstChild;
          for (t && 10 === t.nodeType && (t = t.nextSibling); t; ) {
            var n = t;
            switch (((t = t.nextSibling), n.nodeName)) {
              case "HTML":
              case "HEAD":
              case "BODY":
                Ad(n), Ke(n);
                continue;
              case "SCRIPT":
              case "STYLE":
                continue;
              case "LINK":
                if ("stylesheet" === n.rel.toLowerCase()) continue;
            }
            e.removeChild(n);
          }
        }
        function Nd(e, t) {
          for (; 8 !== e.nodeType; ) {
            if (
              (1 !== e.nodeType ||
                "INPUT" !== e.nodeName ||
                "hidden" !== e.type) &&
              !t
            )
              return null;
            if (null === (e = Ld(e.nextSibling))) return null;
          }
          return e;
        }
        function Dd(e) {
          return "$?" === e.data || "$~" === e.data;
        }
        function Md(e) {
          return (
            "$!" === e.data ||
            ("$?" === e.data && "loading" !== e.ownerDocument.readyState)
          );
        }
        function Ld(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if (
                "$" === (t = e.data) ||
                "$!" === t ||
                "$?" === t ||
                "$~" === t ||
                "&" === t ||
                "F!" === t ||
                "F" === t
              )
                break;
              if ("/$" === t || "/&" === t) return null;
            }
          }
          return e;
        }
        var jd = null;
        function zd(e) {
          e = e.nextSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("/$" === n || "/&" === n) {
                if (0 === t) return Ld(e.nextSibling);
                t--;
              } else
                ("$" !== n &&
                  "$!" !== n &&
                  "$?" !== n &&
                  "$~" !== n &&
                  "&" !== n) ||
                  t++;
            }
            e = e.nextSibling;
          }
          return null;
        }
        function Rd(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if (
                "$" === n ||
                "$!" === n ||
                "$?" === n ||
                "$~" === n ||
                "&" === n
              ) {
                if (0 === t) return e;
                t--;
              } else ("/$" !== n && "/&" !== n) || t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        function Od(e, t, n) {
          switch (((t = gd(n)), e)) {
            case "html":
              if (!(e = t.documentElement)) throw Error(o(452));
              return e;
            case "head":
              if (!(e = t.head)) throw Error(o(453));
              return e;
            case "body":
              if (!(e = t.body)) throw Error(o(454));
              return e;
            default:
              throw Error(o(451));
          }
        }
        function _d(e) {
          for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
          Ke(e);
        }
        var Vd = new Map(),
          Bd = new Set();
        function Id(e) {
          return "function" === typeof e.getRootNode
            ? e.getRootNode()
            : 9 === e.nodeType
            ? e
            : e.ownerDocument;
        }
        var Ud = z.d;
        z.d = {
          f: function () {
            var e = Ud.f(),
              t = Ju();
            return e || t;
          },
          r: function (e) {
            var t = Ge(e);
            null !== t && 5 === t.tag && "form" === t.type ? rs(t) : Ud.r(e);
          },
          D: function (e) {
            Ud.D(e), Wd("dns-prefetch", e, null);
          },
          C: function (e, t) {
            Ud.C(e, t), Wd("preconnect", e, t);
          },
          L: function (e, t, n) {
            Ud.L(e, t, n);
            var r = Hd;
            if (r && e && t) {
              var a = 'link[rel="preload"][as="' + vt(t) + '"]';
              "image" === t && n && n.imageSrcSet
                ? ((a += '[imagesrcset="' + vt(n.imageSrcSet) + '"]'),
                  "string" === typeof n.imageSizes &&
                    (a += '[imagesizes="' + vt(n.imageSizes) + '"]'))
                : (a += '[href="' + vt(e) + '"]');
              var i = a;
              switch (t) {
                case "style":
                  i = Yd(e);
                  break;
                case "script":
                  i = Kd(e);
              }
              Vd.has(i) ||
                ((e = h(
                  {
                    rel: "preload",
                    href: "image" === t && n && n.imageSrcSet ? void 0 : e,
                    as: t,
                  },
                  n
                )),
                Vd.set(i, e),
                null !== r.querySelector(a) ||
                  ("style" === t && r.querySelector(qd(i))) ||
                  ("script" === t && r.querySelector(Qd(i))) ||
                  (fd((t = r.createElement("link")), "link", e),
                  et(t),
                  r.head.appendChild(t)));
            }
          },
          m: function (e, t) {
            Ud.m(e, t);
            var n = Hd;
            if (n && e) {
              var r = t && "string" === typeof t.as ? t.as : "script",
                a =
                  'link[rel="modulepreload"][as="' +
                  vt(r) +
                  '"][href="' +
                  vt(e) +
                  '"]',
                i = a;
              switch (r) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                  i = Kd(e);
              }
              if (
                !Vd.has(i) &&
                ((e = h({ rel: "modulepreload", href: e }, t)),
                Vd.set(i, e),
                null === n.querySelector(a))
              ) {
                switch (r) {
                  case "audioworklet":
                  case "paintworklet":
                  case "serviceworker":
                  case "sharedworker":
                  case "worker":
                  case "script":
                    if (n.querySelector(Qd(i))) return;
                }
                fd((r = n.createElement("link")), "link", e),
                  et(r),
                  n.head.appendChild(r);
              }
            }
          },
          X: function (e, t) {
            Ud.X(e, t);
            var n = Hd;
            if (n && e) {
              var r = Je(n).hoistableScripts,
                a = Kd(e),
                i = r.get(a);
              i ||
                ((i = n.querySelector(Qd(a))) ||
                  ((e = h({ src: e, async: !0 }, t)),
                  (t = Vd.get(a)) && ef(e, t),
                  et((i = n.createElement("script"))),
                  fd(i, "link", e),
                  n.head.appendChild(i)),
                (i = { type: "script", instance: i, count: 1, state: null }),
                r.set(a, i));
            }
          },
          S: function (e, t, n) {
            Ud.S(e, t, n);
            var r = Hd;
            if (r && e) {
              var a = Je(r).hoistableStyles,
                i = Yd(e);
              t = t || "default";
              var o = a.get(i);
              if (!o) {
                var s = { loading: 0, preload: null };
                if ((o = r.querySelector(qd(i)))) s.loading = 5;
                else {
                  (e = h(
                    { rel: "stylesheet", href: e, "data-precedence": t },
                    n
                  )),
                    (n = Vd.get(i)) && Jd(e, n);
                  var l = (o = r.createElement("link"));
                  et(l),
                    fd(l, "link", e),
                    (l._p = new Promise(function (e, t) {
                      (l.onload = e), (l.onerror = t);
                    })),
                    l.addEventListener("load", function () {
                      s.loading |= 1;
                    }),
                    l.addEventListener("error", function () {
                      s.loading |= 2;
                    }),
                    (s.loading |= 4),
                    Zd(o, t, r);
                }
                (o = { type: "stylesheet", instance: o, count: 1, state: s }),
                  a.set(i, o);
              }
            }
          },
          M: function (e, t) {
            Ud.M(e, t);
            var n = Hd;
            if (n && e) {
              var r = Je(n).hoistableScripts,
                a = Kd(e),
                i = r.get(a);
              i ||
                ((i = n.querySelector(Qd(a))) ||
                  ((e = h({ src: e, async: !0, type: "module" }, t)),
                  (t = Vd.get(a)) && ef(e, t),
                  et((i = n.createElement("script"))),
                  fd(i, "link", e),
                  n.head.appendChild(i)),
                (i = { type: "script", instance: i, count: 1, state: null }),
                r.set(a, i));
            }
          },
        };
        var Hd = "undefined" === typeof document ? null : document;
        function Wd(e, t, n) {
          var r = Hd;
          if (r && "string" === typeof t && t) {
            var a = vt(t);
            (a = 'link[rel="' + e + '"][href="' + a + '"]'),
              "string" === typeof n && (a += '[crossorigin="' + n + '"]'),
              Bd.has(a) ||
                (Bd.add(a),
                (e = { rel: e, crossOrigin: n, href: t }),
                null === r.querySelector(a) &&
                  (fd((t = r.createElement("link")), "link", e),
                  et(t),
                  r.head.appendChild(t)));
          }
        }
        function $d(e, t, n, r) {
          var a,
            i,
            s,
            l,
            u = (u = Y.current) ? Id(u) : null;
          if (!u) throw Error(o(446));
          switch (e) {
            case "meta":
            case "title":
              return null;
            case "style":
              return "string" === typeof n.precedence &&
                "string" === typeof n.href
                ? ((t = Yd(n.href)),
                  (r = (n = Je(u).hoistableStyles).get(t)) ||
                    ((r = {
                      type: "style",
                      instance: null,
                      count: 0,
                      state: null,
                    }),
                    n.set(t, r)),
                  r)
                : { type: "void", instance: null, count: 0, state: null };
            case "link":
              if (
                "stylesheet" === n.rel &&
                "string" === typeof n.href &&
                "string" === typeof n.precedence
              ) {
                e = Yd(n.href);
                var c = Je(u).hoistableStyles,
                  d = c.get(e);
                if (
                  (d ||
                    ((u = u.ownerDocument || u),
                    (d = {
                      type: "stylesheet",
                      instance: null,
                      count: 0,
                      state: { loading: 0, preload: null },
                    }),
                    c.set(e, d),
                    (c = u.querySelector(qd(e))) &&
                      !c._p &&
                      ((d.instance = c), (d.state.loading = 5)),
                    Vd.has(e) ||
                      ((n = {
                        rel: "preload",
                        as: "style",
                        href: n.href,
                        crossOrigin: n.crossOrigin,
                        integrity: n.integrity,
                        media: n.media,
                        hrefLang: n.hrefLang,
                        referrerPolicy: n.referrerPolicy,
                      }),
                      Vd.set(e, n),
                      c ||
                        ((a = u),
                        (i = e),
                        (s = n),
                        (l = d.state),
                        a.querySelector(
                          'link[rel="preload"][as="style"][' + i + "]"
                        )
                          ? (l.loading = 1)
                          : ((i = a.createElement("link")),
                            (l.preload = i),
                            i.addEventListener("load", function () {
                              return (l.loading |= 1);
                            }),
                            i.addEventListener("error", function () {
                              return (l.loading |= 2);
                            }),
                            fd(i, "link", s),
                            et(i),
                            a.head.appendChild(i))))),
                  t && null === r)
                )
                  throw Error(o(528, ""));
                return d;
              }
              if (t && null !== r) throw Error(o(529, ""));
              return null;
            case "script":
              return (
                (t = n.async),
                "string" === typeof (n = n.src) &&
                t &&
                "function" !== typeof t &&
                "symbol" !== typeof t
                  ? ((t = Kd(n)),
                    (r = (n = Je(u).hoistableScripts).get(t)) ||
                      ((r = {
                        type: "script",
                        instance: null,
                        count: 0,
                        state: null,
                      }),
                      n.set(t, r)),
                    r)
                  : { type: "void", instance: null, count: 0, state: null }
              );
            default:
              throw Error(o(444, e));
          }
        }
        function Yd(e) {
          return 'href="' + vt(e) + '"';
        }
        function qd(e) {
          return 'link[rel="stylesheet"][' + e + "]";
        }
        function Xd(e) {
          return h({}, e, {
            "data-precedence": e.precedence,
            precedence: null,
          });
        }
        function Kd(e) {
          return '[src="' + vt(e) + '"]';
        }
        function Qd(e) {
          return "script[async]" + e;
        }
        function Gd(e, t, n) {
          if ((t.count++, null === t.instance))
            switch (t.type) {
              case "style":
                var r = e.querySelector(
                  'style[data-href~="' + vt(n.href) + '"]'
                );
                if (r) return (t.instance = r), et(r), r;
                var a = h({}, n, {
                  "data-href": n.href,
                  "data-precedence": n.precedence,
                  href: null,
                  precedence: null,
                });
                return (
                  et((r = (e.ownerDocument || e).createElement("style"))),
                  fd(r, "style", a),
                  Zd(r, n.precedence, e),
                  (t.instance = r)
                );
              case "stylesheet":
                a = Yd(n.href);
                var i = e.querySelector(qd(a));
                if (i)
                  return (t.state.loading |= 4), (t.instance = i), et(i), i;
                (r = Xd(n)),
                  (a = Vd.get(a)) && Jd(r, a),
                  et((i = (e.ownerDocument || e).createElement("link")));
                var s = i;
                return (
                  (s._p = new Promise(function (e, t) {
                    (s.onload = e), (s.onerror = t);
                  })),
                  fd(i, "link", r),
                  (t.state.loading |= 4),
                  Zd(i, n.precedence, e),
                  (t.instance = i)
                );
              case "script":
                return (
                  (i = Kd(n.src)),
                  (a = e.querySelector(Qd(i)))
                    ? ((t.instance = a), et(a), a)
                    : ((r = n),
                      (a = Vd.get(i)) && ef((r = h({}, n)), a),
                      et(
                        (a = (e = e.ownerDocument || e).createElement("script"))
                      ),
                      fd(a, "link", r),
                      e.head.appendChild(a),
                      (t.instance = a))
                );
              case "void":
                return null;
              default:
                throw Error(o(443, t.type));
            }
          else
            "stylesheet" === t.type &&
              0 === (4 & t.state.loading) &&
              ((r = t.instance),
              (t.state.loading |= 4),
              Zd(r, n.precedence, e));
          return t.instance;
        }
        function Zd(e, t, n) {
          for (
            var r = n.querySelectorAll(
                'link[rel="stylesheet"][data-precedence],style[data-precedence]'
              ),
              a = r.length ? r[r.length - 1] : null,
              i = a,
              o = 0;
            o < r.length;
            o++
          ) {
            var s = r[o];
            if (s.dataset.precedence === t) i = s;
            else if (i !== a) break;
          }
          i
            ? i.parentNode.insertBefore(e, i.nextSibling)
            : (t = 9 === n.nodeType ? n.head : n).insertBefore(e, t.firstChild);
        }
        function Jd(e, t) {
          null == e.crossOrigin && (e.crossOrigin = t.crossOrigin),
            null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy),
            null == e.title && (e.title = t.title);
        }
        function ef(e, t) {
          null == e.crossOrigin && (e.crossOrigin = t.crossOrigin),
            null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy),
            null == e.integrity && (e.integrity = t.integrity);
        }
        var tf = null;
        function nf(e, t, n) {
          if (null === tf) {
            var r = new Map(),
              a = (tf = new Map());
            a.set(n, r);
          } else (r = (a = tf).get(n)) || ((r = new Map()), a.set(n, r));
          if (r.has(e)) return r;
          for (
            r.set(e, null), n = n.getElementsByTagName(e), a = 0;
            a < n.length;
            a++
          ) {
            var i = n[a];
            if (
              !(
                i[Xe] ||
                i[Ie] ||
                ("link" === e && "stylesheet" === i.getAttribute("rel"))
              ) &&
              "http://www.w3.org/2000/svg" !== i.namespaceURI
            ) {
              var o = i.getAttribute(t) || "";
              o = e + o;
              var s = r.get(o);
              s ? s.push(i) : r.set(o, [i]);
            }
          }
          return r;
        }
        function rf(e, t, n) {
          (e = e.ownerDocument || e).head.insertBefore(
            n,
            "title" === t ? e.querySelector("head > title") : null
          );
        }
        function af(e) {
          return "stylesheet" !== e.type || 0 !== (3 & e.state.loading);
        }
        var of = 0;
        function sf() {
          if (
            (this.count--,
            0 === this.count && (0 === this.imgCount || !this.waitingForImages))
          )
            if (this.stylesheets) uf(this, this.stylesheets);
            else if (this.unsuspend) {
              var e = this.unsuspend;
              (this.unsuspend = null), e();
            }
        }
        var lf = null;
        function uf(e, t) {
          (e.stylesheets = null),
            null !== e.unsuspend &&
              (e.count++,
              (lf = new Map()),
              t.forEach(cf, e),
              (lf = null),
              sf.call(e));
        }
        function cf(e, t) {
          if (!(4 & t.state.loading)) {
            var n = lf.get(e);
            if (n) var r = n.get(null);
            else {
              (n = new Map()), lf.set(e, n);
              for (
                var a = e.querySelectorAll(
                    "link[data-precedence],style[data-precedence]"
                  ),
                  i = 0;
                i < a.length;
                i++
              ) {
                var o = a[i];
                ("LINK" !== o.nodeName &&
                  "not all" === o.getAttribute("media")) ||
                  (n.set(o.dataset.precedence, o), (r = o));
              }
              r && n.set(null, r);
            }
            (o = (a = t.instance).getAttribute("data-precedence")),
              (i = n.get(o) || r) === r && n.set(null, a),
              n.set(o, a),
              this.count++,
              (r = sf.bind(this)),
              a.addEventListener("load", r),
              a.addEventListener("error", r),
              i
                ? i.parentNode.insertBefore(a, i.nextSibling)
                : (e = 9 === e.nodeType ? e.head : e).insertBefore(
                    a,
                    e.firstChild
                  ),
              (t.state.loading |= 4);
          }
        }
        var df = {
          $$typeof: x,
          Provider: null,
          Consumer: null,
          _currentValue: R,
          _currentValue2: R,
          _threadCount: 0,
        };
        function ff(e, t, n, r, a, i, o, s, l) {
          (this.tag = 1),
            (this.containerInfo = e),
            (this.pingCache = this.current = this.pendingChildren = null),
            (this.timeoutHandle = -1),
            (this.callbackNode =
              this.next =
              this.pendingContext =
              this.context =
              this.cancelPendingCommit =
                null),
            (this.callbackPriority = 0),
            (this.expirationTimes = De(-1)),
            (this.entangledLanes =
              this.shellSuspendCounter =
              this.errorRecoveryDisabledLanes =
              this.expiredLanes =
              this.warmLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = De(0)),
            (this.hiddenUpdates = De(null)),
            (this.identifierPrefix = r),
            (this.onUncaughtError = a),
            (this.onCaughtError = i),
            (this.onRecoverableError = o),
            (this.pooledCache = null),
            (this.pooledCacheLanes = 0),
            (this.formState = l),
            (this.incompleteTransitions = new Map());
        }
        function hf(e, t, n, r, a, i, o, s, l, u, c, d) {
          return (
            (e = new ff(e, t, n, o, l, u, c, d, s)),
            (t = 1),
            !0 === i && (t |= 24),
            (i = _r(3, null, null, t)),
            (e.current = i),
            (i.stateNode = e),
            (t = Va()).refCount++,
            (e.pooledCache = t),
            t.refCount++,
            (i.memoizedState = { element: r, isDehydrated: n, cache: t }),
            gi(i),
            e
          );
        }
        function pf(e) {
          return e ? (e = Rr) : Rr;
        }
        function mf(e, t, n, r, a, i) {
          (a = pf(a)),
            null === r.context ? (r.context = a) : (r.pendingContext = a),
            ((r = yi(t)).payload = { element: n }),
            null !== (i = void 0 === i ? null : i) && (r.callback = i),
            null !== (n = bi(e, r, t)) && (Xu(n, 0, t), wi(n, e, t));
        }
        function gf(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function vf(e, t) {
          gf(e, t), (e = e.alternate) && gf(e, t);
        }
        function yf(e) {
          if (13 === e.tag || 31 === e.tag) {
            var t = Lr(e, 67108864);
            null !== t && Xu(t, 0, 67108864), vf(e, 67108864);
          }
        }
        function bf(e) {
          if (13 === e.tag || 31 === e.tag) {
            var t = Yu(),
              n = Lr(e, (t = Re(t)));
            null !== n && Xu(n, 0, t), vf(e, t);
          }
        }
        var wf = !0;
        function xf(e, t, n, r) {
          var a = j.T;
          j.T = null;
          var i = z.p;
          try {
            (z.p = 2), kf(e, t, n, r);
          } finally {
            (z.p = i), (j.T = a);
          }
        }
        function Sf(e, t, n, r) {
          var a = j.T;
          j.T = null;
          var i = z.p;
          try {
            (z.p = 8), kf(e, t, n, r);
          } finally {
            (z.p = i), (j.T = a);
          }
        }
        function kf(e, t, n, r) {
          if (wf) {
            var a = Ef(r);
            if (null === a) td(e, t, r, Tf, n), Rf(e, r);
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case "focusin":
                    return (Af = Of(Af, e, t, n, r, a)), !0;
                  case "dragenter":
                    return (Nf = Of(Nf, e, t, n, r, a)), !0;
                  case "mouseover":
                    return (Df = Of(Df, e, t, n, r, a)), !0;
                  case "pointerover":
                    var i = a.pointerId;
                    return Mf.set(i, Of(Mf.get(i) || null, e, t, n, r, a)), !0;
                  case "gotpointercapture":
                    return (
                      (i = a.pointerId),
                      Lf.set(i, Of(Lf.get(i) || null, e, t, n, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((Rf(e, r), 4 & t && -1 < zf.indexOf(e))) {
              for (; null !== a; ) {
                var i = Ge(a);
                if (null !== i)
                  switch (i.tag) {
                    case 3:
                      if (
                        (i = i.stateNode).current.memoizedState.isDehydrated
                      ) {
                        var o = Ce(i.pendingLanes);
                        if (0 !== o) {
                          var s = i;
                          for (
                            s.pendingLanes |= 2, s.entangledLanes |= 2;
                            o;

                          ) {
                            var l = 1 << (31 - we(o));
                            (s.entanglements[1] |= l), (o &= ~l);
                          }
                          zc(i),
                            0 === (6 & hu) && ((ju = le() + 500), Rc(0, !1));
                        }
                      }
                      break;
                    case 31:
                    case 13:
                      null !== (s = Lr(i, 2)) && Xu(s, 0, 2), Ju(), vf(i, 2);
                  }
                if ((null === (i = Ef(r)) && td(e, t, r, Tf, n), i === a))
                  break;
                a = i;
              }
              null !== a && r.stopPropagation();
            } else td(e, t, r, null, n);
          }
        }
        function Ef(e) {
          return Cf((e = jt(e)));
        }
        var Tf = null;
        function Cf(e) {
          if (((Tf = null), null !== (e = Qe(e)))) {
            var t = l(e);
            if (null === t) e = null;
            else {
              var n = t.tag;
              if (13 === n) {
                if (null !== (e = u(t))) return e;
                e = null;
              } else if (31 === n) {
                if (null !== (e = c(t))) return e;
                e = null;
              } else if (3 === n) {
                if (t.stateNode.current.memoizedState.isDehydrated)
                  return 3 === t.tag ? t.stateNode.containerInfo : null;
                e = null;
              } else t !== e && (e = null);
            }
          }
          return (Tf = e), null;
        }
        function Pf(e) {
          switch (e) {
            case "beforetoggle":
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "toggle":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 2;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 8;
            case "message":
              switch (ue()) {
                case ce:
                  return 2;
                case de:
                  return 8;
                case fe:
                case he:
                  return 32;
                case pe:
                  return 268435456;
                default:
                  return 32;
              }
            default:
              return 32;
          }
        }
        var Ff = !1,
          Af = null,
          Nf = null,
          Df = null,
          Mf = new Map(),
          Lf = new Map(),
          jf = [],
          zf =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
              " "
            );
        function Rf(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Af = null;
              break;
            case "dragenter":
            case "dragleave":
              Nf = null;
              break;
            case "mouseover":
            case "mouseout":
              Df = null;
              break;
            case "pointerover":
            case "pointerout":
              Mf.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Lf.delete(t.pointerId);
          }
        }
        function Of(e, t, n, r, a, i) {
          return null === e || e.nativeEvent !== i
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: i,
                targetContainers: [a],
              }),
              null !== t && null !== (t = Ge(t)) && yf(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function _f(e) {
          var t = Qe(e.target);
          if (null !== t) {
            var n = l(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = u(n)))
                  return (
                    (e.blockedOn = t),
                    void Ve(e.priority, function () {
                      bf(n);
                    })
                  );
              } else if (31 === t) {
                if (null !== (t = c(n)))
                  return (
                    (e.blockedOn = t),
                    void Ve(e.priority, function () {
                      bf(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Vf(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Ef(e.nativeEvent);
            if (null !== n)
              return null !== (t = Ge(n)) && yf(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (Lt = r), n.target.dispatchEvent(r), (Lt = null), t.shift();
          }
          return !0;
        }
        function Bf(e, t, n) {
          Vf(e) && n.delete(t);
        }
        function If() {
          (Ff = !1),
            null !== Af && Vf(Af) && (Af = null),
            null !== Nf && Vf(Nf) && (Nf = null),
            null !== Df && Vf(Df) && (Df = null),
            Mf.forEach(Bf),
            Lf.forEach(Bf);
        }
        function Uf(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Ff ||
              ((Ff = !0),
              r.unstable_scheduleCallback(r.unstable_NormalPriority, If)));
        }
        var Hf = null;
        function Wf(e) {
          Hf !== e &&
            ((Hf = e),
            r.unstable_scheduleCallback(r.unstable_NormalPriority, function () {
              Hf === e && (Hf = null);
              for (var t = 0; t < e.length; t += 3) {
                var n = e[t],
                  r = e[t + 1],
                  a = e[t + 2];
                if ("function" !== typeof r) {
                  if (null === Cf(r || n)) continue;
                  break;
                }
                var i = Ge(n);
                null !== i &&
                  (e.splice(t, 3),
                  (t -= 3),
                  ts(
                    i,
                    { pending: !0, data: a, method: n.method, action: r },
                    r,
                    a
                  ));
              }
            }));
        }
        function $f(e) {
          function t(t) {
            return Uf(t, e);
          }
          null !== Af && Uf(Af, e),
            null !== Nf && Uf(Nf, e),
            null !== Df && Uf(Df, e),
            Mf.forEach(t),
            Lf.forEach(t);
          for (var n = 0; n < jf.length; n++) {
            var r = jf[n];
            r.blockedOn === e && (r.blockedOn = null);
          }
          for (; 0 < jf.length && null === (n = jf[0]).blockedOn; )
            _f(n), null === n.blockedOn && jf.shift();
          if (null != (n = (e.ownerDocument || e).$$reactFormReplay))
            for (r = 0; r < n.length; r += 3) {
              var a = n[r],
                i = n[r + 1],
                o = a[Ue] || null;
              if ("function" === typeof i) o || Wf(n);
              else if (o) {
                var s = null;
                if (i && i.hasAttribute("formAction")) {
                  if (((a = i), (o = i[Ue] || null))) s = o.formAction;
                  else if (null !== Cf(a)) continue;
                } else s = o.action;
                "function" === typeof s
                  ? (n[r + 1] = s)
                  : (n.splice(r, 3), (r -= 3)),
                  Wf(n);
              }
            }
        }
        function Yf() {
          function e(e) {
            e.canIntercept &&
              "react-transition" === e.info &&
              e.intercept({
                handler: function () {
                  return new Promise(function (e) {
                    return (a = e);
                  });
                },
                focusReset: "manual",
                scroll: "manual",
              });
          }
          function t() {
            null !== a && (a(), (a = null)), r || setTimeout(n, 20);
          }
          function n() {
            if (!r && !navigation.transition) {
              var e = navigation.currentEntry;
              e &&
                null != e.url &&
                navigation.navigate(e.url, {
                  state: e.getState(),
                  info: "react-transition",
                  history: "replace",
                });
            }
          }
          if ("object" === typeof navigation) {
            var r = !1,
              a = null;
            return (
              navigation.addEventListener("navigate", e),
              navigation.addEventListener("navigatesuccess", t),
              navigation.addEventListener("navigateerror", t),
              setTimeout(n, 100),
              function () {
                (r = !0),
                  navigation.removeEventListener("navigate", e),
                  navigation.removeEventListener("navigatesuccess", t),
                  navigation.removeEventListener("navigateerror", t),
                  null !== a && (a(), (a = null));
              }
            );
          }
        }
        function qf(e) {
          this._internalRoot = e;
        }
        function Xf(e) {
          this._internalRoot = e;
        }
        (Xf.prototype.render = qf.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(o(409));
            mf(t.current, Yu(), e, t, null, null);
          }),
          (Xf.prototype.unmount = qf.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                mf(e.current, 2, null, e, null, null), Ju(), (t[He] = null);
              }
            }),
          (Xf.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = _e();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < jf.length && 0 !== t && t < jf[n].priority;
                n++
              );
              jf.splice(n, 0, e), 0 === n && _f(e);
            }
          });
        var Kf = a.version;
        if ("19.2.4" !== Kf) throw Error(o(527, Kf, "19.2.4"));
        z.findDOMNode = function (e) {
          var t = e._reactInternals;
          if (void 0 === t) {
            if ("function" === typeof e.render) throw Error(o(188));
            throw ((e = Object.keys(e).join(",")), Error(o(268, e)));
          }
          return (
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = l(e))) throw Error(o(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var i = a.alternate;
                if (null === i) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === i.child) {
                  for (i = a.child; i; ) {
                    if (i === n) return d(a), e;
                    if (i === r) return d(a), t;
                    i = i.sibling;
                  }
                  throw Error(o(188));
                }
                if (n.return !== r.return) (n = a), (r = i);
                else {
                  for (var s = !1, u = a.child; u; ) {
                    if (u === n) {
                      (s = !0), (n = a), (r = i);
                      break;
                    }
                    if (u === r) {
                      (s = !0), (r = a), (n = i);
                      break;
                    }
                    u = u.sibling;
                  }
                  if (!s) {
                    for (u = i.child; u; ) {
                      if (u === n) {
                        (s = !0), (n = i), (r = a);
                        break;
                      }
                      if (u === r) {
                        (s = !0), (r = i), (n = a);
                        break;
                      }
                      u = u.sibling;
                    }
                    if (!s) throw Error(o(189));
                  }
                }
                if (n.alternate !== r) throw Error(o(190));
              }
              if (3 !== n.tag) throw Error(o(188));
              return n.stateNode.current === n ? e : t;
            })(t)),
            (e = null === (e = null !== e ? f(e) : null) ? null : e.stateNode)
          );
        };
        var Qf = {
          bundleType: 0,
          version: "19.2.4",
          rendererPackageName: "react-dom",
          currentDispatcherRef: j,
          reconcilerVersion: "19.2.4",
        };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var Gf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!Gf.isDisabled && Gf.supportsFiber)
            try {
              (ve = Gf.inject(Qf)), (ye = Gf);
            } catch (Jf) {}
        }
        (t.createRoot = function (e, t) {
          if (!s(e)) throw Error(o(299));
          var n = !1,
            r = "",
            a = Es,
            i = Ts,
            l = Cs;
          return (
            null !== t &&
              void 0 !== t &&
              (!0 === t.unstable_strictMode && (n = !0),
              void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
              void 0 !== t.onUncaughtError && (a = t.onUncaughtError),
              void 0 !== t.onCaughtError && (i = t.onCaughtError),
              void 0 !== t.onRecoverableError && (l = t.onRecoverableError)),
            (t = hf(e, 1, !1, null, 0, n, r, null, a, i, l, Yf)),
            (e[He] = t.current),
            Jc(e),
            new qf(t)
          );
        }),
          (t.hydrateRoot = function (e, t, n) {
            if (!s(e)) throw Error(o(299));
            var r = !1,
              a = "",
              i = Es,
              l = Ts,
              u = Cs,
              c = null;
            return (
              null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (r = !0),
                void 0 !== n.identifierPrefix && (a = n.identifierPrefix),
                void 0 !== n.onUncaughtError && (i = n.onUncaughtError),
                void 0 !== n.onCaughtError && (l = n.onCaughtError),
                void 0 !== n.onRecoverableError && (u = n.onRecoverableError),
                void 0 !== n.formState && (c = n.formState)),
              ((t = hf(e, 1, !0, t, 0, r, a, c, i, l, u, Yf)).context =
                pf(null)),
              (n = t.current),
              ((a = yi((r = Re((r = Yu()))))).callback = null),
              bi(n, a, r),
              (n = r),
              (t.current.lanes = n),
              Me(t, n),
              zc(t),
              (e[He] = t.current),
              Jc(e),
              new Xf(t)
            );
          }),
          (t.version = "19.2.4");
      },
      672(e, t, n) {
        "use strict";
        var r = n(43);
        function a(e) {
          var t = "https://react.dev/errors/" + e;
          if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var n = 2; n < arguments.length; n++)
              t += "&args[]=" + encodeURIComponent(arguments[n]);
          }
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        function i() {}
        var o = {
            d: {
              f: i,
              r: function () {
                throw Error(a(522));
              },
              D: i,
              C: i,
              L: i,
              m: i,
              X: i,
              S: i,
              M: i,
            },
            p: 0,
            findDOMNode: null,
          },
          s = Symbol.for("react.portal");
        var l =
          r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
        function u(e, t) {
          return "font" === e
            ? ""
            : "string" === typeof t
            ? "use-credentials" === t
              ? t
              : ""
            : void 0;
        }
        (t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (
              !t ||
              (1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType)
            )
              throw Error(a(299));
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: s,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.flushSync = function (e) {
            var t = l.T,
              n = o.p;
            try {
              if (((l.T = null), (o.p = 2), e)) return e();
            } finally {
              (l.T = t), (o.p = n), o.d.f();
            }
          }),
          (t.preconnect = function (e, t) {
            "string" === typeof e &&
              (t
                ? (t =
                    "string" === typeof (t = t.crossOrigin)
                      ? "use-credentials" === t
                        ? t
                        : ""
                      : void 0)
                : (t = null),
              o.d.C(e, t));
          }),
          (t.prefetchDNS = function (e) {
            "string" === typeof e && o.d.D(e);
          }),
          (t.preinit = function (e, t) {
            if ("string" === typeof e && t && "string" === typeof t.as) {
              var n = t.as,
                r = u(n, t.crossOrigin),
                a = "string" === typeof t.integrity ? t.integrity : void 0,
                i =
                  "string" === typeof t.fetchPriority
                    ? t.fetchPriority
                    : void 0;
              "style" === n
                ? o.d.S(
                    e,
                    "string" === typeof t.precedence ? t.precedence : void 0,
                    { crossOrigin: r, integrity: a, fetchPriority: i }
                  )
                : "script" === n &&
                  o.d.X(e, {
                    crossOrigin: r,
                    integrity: a,
                    fetchPriority: i,
                    nonce: "string" === typeof t.nonce ? t.nonce : void 0,
                  });
            }
          }),
          (t.preinitModule = function (e, t) {
            if ("string" === typeof e)
              if ("object" === typeof t && null !== t) {
                if (null == t.as || "script" === t.as) {
                  var n = u(t.as, t.crossOrigin);
                  o.d.M(e, {
                    crossOrigin: n,
                    integrity:
                      "string" === typeof t.integrity ? t.integrity : void 0,
                    nonce: "string" === typeof t.nonce ? t.nonce : void 0,
                  });
                }
              } else null == t && o.d.M(e);
          }),
          (t.preload = function (e, t) {
            if (
              "string" === typeof e &&
              "object" === typeof t &&
              null !== t &&
              "string" === typeof t.as
            ) {
              var n = t.as,
                r = u(n, t.crossOrigin);
              o.d.L(e, n, {
                crossOrigin: r,
                integrity:
                  "string" === typeof t.integrity ? t.integrity : void 0,
                nonce: "string" === typeof t.nonce ? t.nonce : void 0,
                type: "string" === typeof t.type ? t.type : void 0,
                fetchPriority:
                  "string" === typeof t.fetchPriority
                    ? t.fetchPriority
                    : void 0,
                referrerPolicy:
                  "string" === typeof t.referrerPolicy
                    ? t.referrerPolicy
                    : void 0,
                imageSrcSet:
                  "string" === typeof t.imageSrcSet ? t.imageSrcSet : void 0,
                imageSizes:
                  "string" === typeof t.imageSizes ? t.imageSizes : void 0,
                media: "string" === typeof t.media ? t.media : void 0,
              });
            }
          }),
          (t.preloadModule = function (e, t) {
            if ("string" === typeof e)
              if (t) {
                var n = u(t.as, t.crossOrigin);
                o.d.m(e, {
                  as:
                    "string" === typeof t.as && "script" !== t.as
                      ? t.as
                      : void 0,
                  crossOrigin: n,
                  integrity:
                    "string" === typeof t.integrity ? t.integrity : void 0,
                });
              } else o.d.m(e);
          }),
          (t.requestFormReset = function (e) {
            o.d.r(e);
          }),
          (t.unstable_batchedUpdates = function (e, t) {
            return e(t);
          }),
          (t.useFormState = function (e, t, n) {
            return l.H.useFormState(e, t, n);
          }),
          (t.useFormStatus = function () {
            return l.H.useHostTransitionStatus();
          }),
          (t.version = "19.2.4");
      },
      391(e, t, n) {
        "use strict";
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(4));
      },
      950(e, t, n) {
        "use strict";
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(672));
      },
      818(e, t, n) {
        var r = n(43);
        function a(e) {
          return e && "object" === typeof e && "default" in e
            ? e
            : { default: e };
        }
        var i = a(r);
        !(function (e) {
          if (!e || "undefined" === typeof window) return;
          const t = document.createElement("style");
          t.setAttribute("type", "text/css"),
            (t.innerHTML = e),
            document.head.appendChild(t);
        })(
          '.rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}'
        );
        const o = r.forwardRef(function (e, t) {
          let {
            style: n = {},
            className: a = "",
            autoFill: o = !1,
            play: s = !0,
            pauseOnHover: l = !1,
            pauseOnClick: u = !1,
            direction: c = "left",
            speed: d = 50,
            delay: f = 0,
            loop: h = 0,
            gradient: p = !1,
            gradientColor: m = "white",
            gradientWidth: g = 200,
            onFinish: v,
            onCycleComplete: y,
            onMount: b,
            children: w,
          } = e;
          const [x, S] = r.useState(0),
            [k, E] = r.useState(0),
            [T, C] = r.useState(1),
            [P, F] = r.useState(!1),
            A = r.useRef(null),
            N = t || A,
            D = r.useRef(null),
            M = r.useCallback(() => {
              if (D.current && N.current) {
                const e = N.current.getBoundingClientRect(),
                  t = D.current.getBoundingClientRect();
                let n = e.width,
                  r = t.width;
                ("up" !== c && "down" !== c) ||
                  ((n = e.height), (r = t.height)),
                  C(o && n && r && r < n ? Math.ceil(n / r) : 1),
                  S(n),
                  E(r);
              }
            }, [o, N, c]);
          r.useEffect(() => {
            if (P && (M(), D.current && N.current)) {
              const e = new ResizeObserver(() => M());
              return (
                e.observe(N.current),
                e.observe(D.current),
                () => {
                  e && e.disconnect();
                }
              );
            }
          }, [M, N, P]),
            r.useEffect(() => {
              M();
            }, [M, w]),
            r.useEffect(() => {
              F(!0);
            }, []),
            r.useEffect(() => {
              "function" === typeof b && b();
            }, []);
          const L = r.useMemo(
              () => (o ? (k * T) / d : k < x ? x / d : k / d),
              [o, x, k, T, d]
            ),
            j = r.useMemo(
              () =>
                Object.assign(Object.assign({}, n), {
                  "--pause-on-hover": !s || l ? "paused" : "running",
                  "--pause-on-click":
                    !s || (l && !u) || u ? "paused" : "running",
                  "--width": "up" === c || "down" === c ? "100vh" : "100%",
                  "--transform":
                    "up" === c
                      ? "rotate(-90deg)"
                      : "down" === c
                      ? "rotate(90deg)"
                      : "none",
                }),
              [n, s, l, u, c]
            ),
            z = r.useMemo(
              () => ({
                "--gradient-color": m,
                "--gradient-width":
                  "number" === typeof g ? "".concat(g, "px") : g,
              }),
              [m, g]
            ),
            R = r.useMemo(
              () => ({
                "--play": s ? "running" : "paused",
                "--direction": "left" === c ? "normal" : "reverse",
                "--duration": "".concat(L, "s"),
                "--delay": "".concat(f, "s"),
                "--iteration-count": h ? "".concat(h) : "infinite",
                "--min-width": o ? "auto" : "100%",
              }),
              [s, c, L, f, h, o]
            ),
            O = r.useMemo(
              () => ({
                "--transform":
                  "up" === c
                    ? "rotate(90deg)"
                    : "down" === c
                    ? "rotate(-90deg)"
                    : "none",
              }),
              [c]
            ),
            _ = r.useCallback(
              (e) =>
                [...Array(Number.isFinite(e) && e >= 0 ? e : 0)].map((e, t) =>
                  i.default.createElement(
                    r.Fragment,
                    { key: t },
                    r.Children.map(w, (e) =>
                      i.default.createElement(
                        "div",
                        { style: O, className: "rfm-child" },
                        e
                      )
                    )
                  )
                ),
              [O, w]
            );
          return P
            ? i.default.createElement(
                "div",
                { ref: N, style: j, className: "rfm-marquee-container " + a },
                p &&
                  i.default.createElement("div", {
                    style: z,
                    className: "rfm-overlay",
                  }),
                i.default.createElement(
                  "div",
                  {
                    className: "rfm-marquee",
                    style: R,
                    onAnimationIteration: y,
                    onAnimationEnd: v,
                  },
                  i.default.createElement(
                    "div",
                    { className: "rfm-initial-child-container", ref: D },
                    r.Children.map(w, (e) =>
                      i.default.createElement(
                        "div",
                        { style: O, className: "rfm-child" },
                        e
                      )
                    )
                  ),
                  _(T - 1)
                ),
                i.default.createElement(
                  "div",
                  { className: "rfm-marquee", style: R },
                  _(T)
                )
              )
            : null;
        });
        t.A = o;
      },
      799(e, t) {
        "use strict";
        var n = Symbol.for("react.transitional.element"),
          r = Symbol.for("react.fragment");
        function a(e, t, r) {
          var a = null;
          if (
            (void 0 !== r && (a = "" + r),
            void 0 !== t.key && (a = "" + t.key),
            "key" in t)
          )
            for (var i in ((r = {}), t)) "key" !== i && (r[i] = t[i]);
          else r = t;
          return (
            (t = r.ref),
            {
              $$typeof: n,
              type: e,
              key: a,
              ref: void 0 !== t ? t : null,
              props: r,
            }
          );
        }
        (t.Fragment = r), (t.jsx = a), (t.jsxs = a);
      },
      288(e, t) {
        "use strict";
        var n = Symbol.for("react.transitional.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          i = Symbol.for("react.strict_mode"),
          o = Symbol.for("react.profiler"),
          s = Symbol.for("react.consumer"),
          l = Symbol.for("react.context"),
          u = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          d = Symbol.for("react.memo"),
          f = Symbol.for("react.lazy"),
          h = Symbol.for("react.activity"),
          p = Symbol.iterator;
        var m = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          g = Object.assign,
          v = {};
        function y(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = v),
            (this.updater = n || m);
        }
        function b() {}
        function w(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = v),
            (this.updater = n || m);
        }
        (y.prototype.isReactComponent = {}),
          (y.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (y.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (b.prototype = y.prototype);
        var x = (w.prototype = new b());
        (x.constructor = w), g(x, y.prototype), (x.isPureReactComponent = !0);
        var S = Array.isArray;
        function k() {}
        var E = { H: null, A: null, T: null, S: null },
          T = Object.prototype.hasOwnProperty;
        function C(e, t, r) {
          var a = r.ref;
          return {
            $$typeof: n,
            type: e,
            key: t,
            ref: void 0 !== a ? a : null,
            props: r,
          };
        }
        function P(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var F = /\/+/g;
        function A(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function N(e, t, a, i, o) {
          var s = typeof e;
          ("undefined" !== s && "boolean" !== s) || (e = null);
          var l,
            u,
            c = !1;
          if (null === e) c = !0;
          else
            switch (s) {
              case "bigint":
              case "string":
              case "number":
                c = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    c = !0;
                    break;
                  case f:
                    return N((c = e._init)(e._payload), t, a, i, o);
                }
            }
          if (c)
            return (
              (o = o(e)),
              (c = "" === i ? "." + A(e, 0) : i),
              S(o)
                ? ((a = ""),
                  null != c && (a = c.replace(F, "$&/") + "/"),
                  N(o, t, a, "", function (e) {
                    return e;
                  }))
                : null != o &&
                  (P(o) &&
                    ((l = o),
                    (u =
                      a +
                      (null == o.key || (e && e.key === o.key)
                        ? ""
                        : ("" + o.key).replace(F, "$&/") + "/") +
                      c),
                    (o = C(l.type, u, l.props))),
                  t.push(o)),
              1
            );
          c = 0;
          var d,
            h = "" === i ? "." : i + ":";
          if (S(e))
            for (var m = 0; m < e.length; m++)
              c += N((i = e[m]), t, a, (s = h + A(i, m)), o);
          else if (
            "function" ===
            typeof (m =
              null === (d = e) || "object" !== typeof d
                ? null
                : "function" === typeof (d = (p && d[p]) || d["@@iterator"])
                ? d
                : null)
          )
            for (e = m.call(e), m = 0; !(i = e.next()).done; )
              c += N((i = i.value), t, a, (s = h + A(i, m++)), o);
          else if ("object" === s) {
            if ("function" === typeof e.then)
              return N(
                (function (e) {
                  switch (e.status) {
                    case "fulfilled":
                      return e.value;
                    case "rejected":
                      throw e.reason;
                    default:
                      switch (
                        ("string" === typeof e.status
                          ? e.then(k, k)
                          : ((e.status = "pending"),
                            e.then(
                              function (t) {
                                "pending" === e.status &&
                                  ((e.status = "fulfilled"), (e.value = t));
                              },
                              function (t) {
                                "pending" === e.status &&
                                  ((e.status = "rejected"), (e.reason = t));
                              }
                            )),
                        e.status)
                      ) {
                        case "fulfilled":
                          return e.value;
                        case "rejected":
                          throw e.reason;
                      }
                  }
                  throw e;
                })(e),
                t,
                a,
                i,
                o
              );
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          }
          return c;
        }
        function D(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            N(e, r, "", "", function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function M(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var L =
            "function" === typeof reportError
              ? reportError
              : function (e) {
                  if (
                    "object" === typeof window &&
                    "function" === typeof window.ErrorEvent
                  ) {
                    var t = new window.ErrorEvent("error", {
                      bubbles: !0,
                      cancelable: !0,
                      message:
                        "object" === typeof e &&
                        null !== e &&
                        "string" === typeof e.message
                          ? String(e.message)
                          : String(e),
                      error: e,
                    });
                    if (!window.dispatchEvent(t)) return;
                  } else if (
                    "object" === typeof process &&
                    "function" === typeof process.emit
                  )
                    return void process.emit("uncaughtException", e);
                  console.error(e);
                },
          j = {
            map: D,
            forEach: function (e, t, n) {
              D(
                e,
                function () {
                  t.apply(this, arguments);
                },
                n
              );
            },
            count: function (e) {
              var t = 0;
              return (
                D(e, function () {
                  t++;
                }),
                t
              );
            },
            toArray: function (e) {
              return (
                D(e, function (e) {
                  return e;
                }) || []
              );
            },
            only: function (e) {
              if (!P(e))
                throw Error(
                  "React.Children.only expected to receive a single React element child."
                );
              return e;
            },
          };
        (t.Activity = h),
          (t.Children = j),
          (t.Component = y),
          (t.Fragment = a),
          (t.Profiler = o),
          (t.PureComponent = w),
          (t.StrictMode = i),
          (t.Suspense = c),
          (t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
            E),
          (t.__COMPILER_RUNTIME = {
            __proto__: null,
            c: function (e) {
              return E.H.useMemoCache(e);
            },
          }),
          (t.cache = function (e) {
            return function () {
              return e.apply(null, arguments);
            };
          }),
          (t.cacheSignal = function () {
            return null;
          }),
          (t.cloneElement = function (e, t, n) {
            if (null === e || void 0 === e)
              throw Error(
                "The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var r = g({}, e.props),
              a = e.key;
            if (null != t)
              for (i in (void 0 !== t.key && (a = "" + t.key), t))
                !T.call(t, i) ||
                  "key" === i ||
                  "__self" === i ||
                  "__source" === i ||
                  ("ref" === i && void 0 === t.ref) ||
                  (r[i] = t[i]);
            var i = arguments.length - 2;
            if (1 === i) r.children = n;
            else if (1 < i) {
              for (var o = Array(i), s = 0; s < i; s++) o[s] = arguments[s + 2];
              r.children = o;
            }
            return C(e.type, a, r);
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: l,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
              }).Provider = e),
              (e.Consumer = { $$typeof: s, _context: e }),
              e
            );
          }),
          (t.createElement = function (e, t, n) {
            var r,
              a = {},
              i = null;
            if (null != t)
              for (r in (void 0 !== t.key && (i = "" + t.key), t))
                T.call(t, r) &&
                  "key" !== r &&
                  "__self" !== r &&
                  "__source" !== r &&
                  (a[r] = t[r]);
            var o = arguments.length - 2;
            if (1 === o) a.children = n;
            else if (1 < o) {
              for (var s = Array(o), l = 0; l < o; l++) s[l] = arguments[l + 2];
              a.children = s;
            }
            if (e && e.defaultProps)
              for (r in (o = e.defaultProps)) void 0 === a[r] && (a[r] = o[r]);
            return C(e, i, a);
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: u, render: e };
          }),
          (t.isValidElement = P),
          (t.lazy = function (e) {
            return {
              $$typeof: f,
              _payload: { _status: -1, _result: e },
              _init: M,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = E.T,
              n = {};
            E.T = n;
            try {
              var r = e(),
                a = E.S;
              null !== a && a(n, r),
                "object" === typeof r &&
                  null !== r &&
                  "function" === typeof r.then &&
                  r.then(k, L);
            } catch (i) {
              L(i);
            } finally {
              null !== t && null !== n.types && (t.types = n.types), (E.T = t);
            }
          }),
          (t.unstable_useCacheRefresh = function () {
            return E.H.useCacheRefresh();
          }),
          (t.use = function (e) {
            return E.H.use(e);
          }),
          (t.useActionState = function (e, t, n) {
            return E.H.useActionState(e, t, n);
          }),
          (t.useCallback = function (e, t) {
            return E.H.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return E.H.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e, t) {
            return E.H.useDeferredValue(e, t);
          }),
          (t.useEffect = function (e, t) {
            return E.H.useEffect(e, t);
          }),
          (t.useEffectEvent = function (e) {
            return E.H.useEffectEvent(e);
          }),
          (t.useId = function () {
            return E.H.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return E.H.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return E.H.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return E.H.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return E.H.useMemo(e, t);
          }),
          (t.useOptimistic = function (e, t) {
            return E.H.useOptimistic(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return E.H.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return E.H.useRef(e);
          }),
          (t.useState = function (e) {
            return E.H.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return E.H.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return E.H.useTransition();
          }),
          (t.version = "19.2.4");
      },
      43(e, t, n) {
        "use strict";
        e.exports = n(288);
      },
      579(e, t, n) {
        "use strict";
        e.exports = n(799);
      },
      896(e, t) {
        "use strict";
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(0 < i(a, t))) break e;
            (e[r] = t), (e[n] = a), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, o = a >>> 1; r < o; ) {
              var s = 2 * (r + 1) - 1,
                l = e[s],
                u = s + 1,
                c = e[u];
              if (0 > i(l, n))
                u < a && 0 > i(c, l)
                  ? ((e[r] = c), (e[u] = n), (r = u))
                  : ((e[r] = l), (e[s] = n), (r = s));
              else {
                if (!(u < a && 0 > i(c, n))) break e;
                (e[r] = c), (e[u] = n), (r = u);
              }
            }
          }
          return t;
        }
        function i(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          ((t.unstable_now = void 0),
          "object" === typeof performance &&
            "function" === typeof performance.now)
        ) {
          var o = performance;
          t.unstable_now = function () {
            return o.now();
          };
        } else {
          var s = Date,
            l = s.now();
          t.unstable_now = function () {
            return s.now() - l;
          };
        }
        var u = [],
          c = [],
          d = 1,
          f = null,
          h = 3,
          p = !1,
          m = !1,
          g = !1,
          v = !1,
          y = "function" === typeof setTimeout ? setTimeout : null,
          b = "function" === typeof clearTimeout ? clearTimeout : null,
          w = "undefined" !== typeof setImmediate ? setImmediate : null;
        function x(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) a(c);
            else {
              if (!(t.startTime <= e)) break;
              a(c), (t.sortIndex = t.expirationTime), n(u, t);
            }
            t = r(c);
          }
        }
        function S(e) {
          if (((g = !1), x(e), !m))
            if (null !== r(u)) (m = !0), E || ((E = !0), k());
            else {
              var t = r(c);
              null !== t && M(S, t.startTime - e);
            }
        }
        var k,
          E = !1,
          T = -1,
          C = 5,
          P = -1;
        function F() {
          return !!v || !(t.unstable_now() - P < C);
        }
        function A() {
          if (((v = !1), E)) {
            var e = t.unstable_now();
            P = e;
            var n = !0;
            try {
              e: {
                (m = !1), g && ((g = !1), b(T), (T = -1)), (p = !0);
                var i = h;
                try {
                  t: {
                    for (
                      x(e), f = r(u);
                      null !== f && !(f.expirationTime > e && F());

                    ) {
                      var o = f.callback;
                      if ("function" === typeof o) {
                        (f.callback = null), (h = f.priorityLevel);
                        var s = o(f.expirationTime <= e);
                        if (((e = t.unstable_now()), "function" === typeof s)) {
                          (f.callback = s), x(e), (n = !0);
                          break t;
                        }
                        f === r(u) && a(u), x(e);
                      } else a(u);
                      f = r(u);
                    }
                    if (null !== f) n = !0;
                    else {
                      var l = r(c);
                      null !== l && M(S, l.startTime - e), (n = !1);
                    }
                  }
                  break e;
                } finally {
                  (f = null), (h = i), (p = !1);
                }
                n = void 0;
              }
            } finally {
              n ? k() : (E = !1);
            }
          }
        }
        if ("function" === typeof w)
          k = function () {
            w(A);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var N = new MessageChannel(),
            D = N.port2;
          (N.port1.onmessage = A),
            (k = function () {
              D.postMessage(null);
            });
        } else
          k = function () {
            y(A, 0);
          };
        function M(e, n) {
          T = y(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (C = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return h;
          }),
          (t.unstable_next = function (e) {
            switch (h) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = h;
            }
            var n = h;
            h = t;
            try {
              return e();
            } finally {
              h = n;
            }
          }),
          (t.unstable_requestPaint = function () {
            v = !0;
          }),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = h;
            h = e;
            try {
              return t();
            } finally {
              h = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, i) {
            var o = t.unstable_now();
            switch (
              ("object" === typeof i && null !== i
                ? (i = "number" === typeof (i = i.delay) && 0 < i ? o + i : o)
                : (i = o),
              e)
            ) {
              case 1:
                var s = -1;
                break;
              case 2:
                s = 250;
                break;
              case 5:
                s = 1073741823;
                break;
              case 4:
                s = 1e4;
                break;
              default:
                s = 5e3;
            }
            return (
              (e = {
                id: d++,
                callback: a,
                priorityLevel: e,
                startTime: i,
                expirationTime: (s = i + s),
                sortIndex: -1,
              }),
              i > o
                ? ((e.sortIndex = i),
                  n(c, e),
                  null === r(u) &&
                    e === r(c) &&
                    (g ? (b(T), (T = -1)) : (g = !0), M(S, i - o)))
                : ((e.sortIndex = s),
                  n(u, e),
                  m || p || ((m = !0), E || ((E = !0), k()))),
              e
            );
          }),
          (t.unstable_shouldYield = F),
          (t.unstable_wrapCallback = function (e) {
            var t = h;
            return function () {
              var n = h;
              h = t;
              try {
                return e.apply(this, arguments);
              } finally {
                h = n;
              }
            };
          });
      },
      853(e, t, n) {
        "use strict";
        e.exports = n(896);
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var i = (t[r] = { exports: {} });
    return e[r](i, i.exports, n), i.exports;
  }
  (() => {
    "use strict";
    var e = n(43),
      t = n(391);
    const r = [
        "transformPerspective",
        "x",
        "y",
        "z",
        "translateX",
        "translateY",
        "translateZ",
        "scale",
        "scaleX",
        "scaleY",
        "rotate",
        "rotateX",
        "rotateY",
        "rotateZ",
        "skew",
        "skewX",
        "skewY",
      ],
      a = (() => new Set(r))();
    function i(e) {
      return (
        (i =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              }),
        i(e)
      );
    }
    function o(e) {
      var t = (function (e, t) {
        if ("object" != i(e) || !e) return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
          var r = n.call(e, t || "default");
          if ("object" != i(r)) return r;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t ? String : Number)(e);
      })(e, "string");
      return "symbol" == i(t) ? t : t + "";
    }
    function s(e, t, n) {
      return (
        (t = o(t)) in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function l(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function u(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? l(Object(n), !0).forEach(function (t) {
              s(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : l(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    const c = (e, t, n) => (n > t ? t : n < e ? e : n),
      d = {
        test: (e) => "number" === typeof e,
        parse: parseFloat,
        transform: (e) => e,
      },
      f = u(u({}, d), {}, { transform: (e) => c(0, 1, e) }),
      h = u(u({}, d), {}, { default: 1 }),
      p = (e) => Math.round(1e5 * e) / 1e5,
      m = /-?(?:[0-9]+(?:\.[0-9]+)?|\.[0-9]+)/g;
    const g =
        /^(?:#[0-9a-f]{3,8}|(?:rgb|h[s\u017F]l)a?\((?:-?[\.0-9]+%?[\t-\r ,\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+){2}-?[\.0-9]+%?[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*(?:[,\/][\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*)?(?:\b[0-9]+(?:\.[0-9]+)?|\.[0-9]+)?%?\))$/i,
      v = (e, t) => (n) =>
        Boolean(
          ("string" === typeof n && g.test(n) && n.startsWith(e)) ||
            (t &&
              !(function (e) {
                return null == e;
              })(n) &&
              Object.prototype.hasOwnProperty.call(n, t))
        ),
      y = (e, t, n) => (r) => {
        if ("string" !== typeof r) return r;
        const [a, i, o, s] = r.match(m);
        return {
          [e]: parseFloat(a),
          [t]: parseFloat(i),
          [n]: parseFloat(o),
          alpha: void 0 !== s ? parseFloat(s) : 1,
        };
      },
      b = u(
        u({}, d),
        {},
        { transform: (e) => Math.round(((e) => c(0, 255, e))(e)) }
      ),
      w = {
        test: v("rgb", "red"),
        parse: y("red", "green", "blue"),
        transform: (e) => {
          let { red: t, green: n, blue: r, alpha: a = 1 } = e;
          return (
            "rgba(" +
            b.transform(t) +
            ", " +
            b.transform(n) +
            ", " +
            b.transform(r) +
            ", " +
            p(f.transform(a)) +
            ")"
          );
        },
      };
    const x = {
        test: v("#"),
        parse: function (e) {
          let t = "",
            n = "",
            r = "",
            a = "";
          return (
            e.length > 5
              ? ((t = e.substring(1, 3)),
                (n = e.substring(3, 5)),
                (r = e.substring(5, 7)),
                (a = e.substring(7, 9)))
              : ((t = e.substring(1, 2)),
                (n = e.substring(2, 3)),
                (r = e.substring(3, 4)),
                (a = e.substring(4, 5)),
                (t += t),
                (n += n),
                (r += r),
                (a += a)),
            {
              red: parseInt(t, 16),
              green: parseInt(n, 16),
              blue: parseInt(r, 16),
              alpha: a ? parseInt(a, 16) / 255 : 1,
            }
          );
        },
        transform: w.transform,
      },
      S = (e) => ({
        test: (t) =>
          "string" === typeof t && t.endsWith(e) && 1 === t.split(" ").length,
        parse: parseFloat,
        transform: (t) => "".concat(t).concat(e),
      }),
      k = S("deg"),
      E = S("%"),
      T = S("px"),
      C = S("vh"),
      P = S("vw"),
      F = (() =>
        u(
          u({}, E),
          {},
          {
            parse: (e) => E.parse(e) / 100,
            transform: (e) => E.transform(100 * e),
          }
        ))(),
      A = {
        test: v("hsl", "hue"),
        parse: y("hue", "saturation", "lightness"),
        transform: (e) => {
          let { hue: t, saturation: n, lightness: r, alpha: a = 1 } = e;
          return (
            "hsla(" +
            Math.round(t) +
            ", " +
            E.transform(p(n)) +
            ", " +
            E.transform(p(r)) +
            ", " +
            p(f.transform(a)) +
            ")"
          );
        },
      },
      N = {
        test: (e) => w.test(e) || x.test(e) || A.test(e),
        parse: (e) =>
          w.test(e) ? w.parse(e) : A.test(e) ? A.parse(e) : x.parse(e),
        transform: (e) =>
          "string" === typeof e
            ? e
            : e.hasOwnProperty("red")
            ? w.transform(e)
            : A.transform(e),
        getAnimatableNone: (e) => {
          const t = N.parse(e);
          return (t.alpha = 0), N.transform(t);
        },
      },
      D =
        /(?:#[0-9a-f]{3,8}|(?:rgb|h[s\u017F]l)a?\((?:-?[\.0-9]+%?[\t-\r ,\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+){2}-?[\.0-9]+%?[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*(?:[,\/][\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*)?(?:\b[0-9]+(?:\.[0-9]+)?|\.[0-9]+)?%?\))/gi;
    const M = "number",
      L = "color",
      j =
        /var[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*\([\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*--(?:[\x2D0-9A-Z_a-z\u017F\u212A]+[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*|[\x2D0-9A-Z_a-z\u017F\u212A]+[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*,(?:[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*(?:(?![\t-\r \(\)\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uD800-\uDFFF\uFEFF])[^]|[\uD800-\uDBFF][\uDC00-\uDFFF])|[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*\((?:(?:(?![\(\)\uD800-\uDFFF])[^]|[\uD800-\uDBFF][\uDC00-\uDFFF])|\((?:(?![\(\)\uD800-\uDFFF])[^]|[\uD800-\uDBFF][\uDC00-\uDFFF])*\))*\))+[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*)\)|#[0-9a-f]{3,8}|(?:rgb|h[s\u017F]l)a?\((?:-?[\.0-9]+%?[\t-\r ,\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+){2}-?[\.0-9]+%?[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*(?:[,\/][\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*)?(?:\b[0-9]+(?:\.[0-9]+)?|\.[0-9]+)?%?\)|-?(?:[0-9]+(?:\.[0-9]+)?|\.[0-9]+)/gi;
    function z(e) {
      const t = e.toString(),
        n = [],
        r = { color: [], number: [], var: [] },
        a = [];
      let i = 0;
      const o = t
        .replace(
          j,
          (e) => (
            N.test(e)
              ? (r.color.push(i), a.push(L), n.push(N.parse(e)))
              : e.startsWith("var(")
              ? (r.var.push(i), a.push("var"), n.push(e))
              : (r.number.push(i), a.push(M), n.push(parseFloat(e))),
            ++i,
            "${}"
          )
        )
        .split("${}");
      return { values: n, split: o, indexes: r, types: a };
    }
    function R(e) {
      return z(e).values;
    }
    function O(e) {
      const { split: t, types: n } = z(e),
        r = t.length;
      return (e) => {
        let a = "";
        for (let i = 0; i < r; i++)
          if (((a += t[i]), void 0 !== e[i])) {
            const t = n[i];
            a += t === M ? p(e[i]) : t === L ? N.transform(e[i]) : e[i];
          }
        return a;
      };
    }
    const _ = (e) =>
      "number" === typeof e ? 0 : N.test(e) ? N.getAnimatableNone(e) : e;
    const V = {
        test: function (e) {
          var t, n;
          return (
            isNaN(e) &&
            "string" === typeof e &&
            ((null === (t = e.match(m)) || void 0 === t ? void 0 : t.length) ||
              0) +
              ((null === (n = e.match(D)) || void 0 === n
                ? void 0
                : n.length) || 0) >
              0
          );
        },
        parse: R,
        createTransformer: O,
        getAnimatableNone: function (e) {
          const t = R(e);
          return O(e)(t.map(_));
        },
      },
      B = new Set(["brightness", "contrast", "saturate", "opacity"]);
    function I(e) {
      const [t, n] = e.slice(0, -1).split("(");
      if ("drop-shadow" === t) return e;
      const [r] = n.match(m) || [];
      if (!r) return e;
      const a = n.replace(r, "");
      let i = B.has(t) ? 1 : 0;
      return r !== n && (i *= 100), t + "(" + i + a + ")";
    }
    const U =
        /\b([\x2Da-z]*)\((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\)/g,
      H = u(
        u({}, V),
        {},
        {
          getAnimatableNone: (e) => {
            const t = e.match(U);
            return t ? t.map(I).join(" ") : e;
          },
        }
      ),
      W = u(
        u({}, V),
        {},
        {
          getAnimatableNone: (e) => {
            const t = V.parse(e);
            return V.createTransformer(e)(
              t.map((e) =>
                "number" === typeof e
                  ? 0
                  : "object" === typeof e
                  ? u(u({}, e), {}, { alpha: 1 })
                  : e
              )
            );
          },
        }
      ),
      $ = u(u({}, d), {}, { transform: Math.round }),
      Y = u(
        u(
          {
            borderWidth: T,
            borderTopWidth: T,
            borderRightWidth: T,
            borderBottomWidth: T,
            borderLeftWidth: T,
            borderRadius: T,
            borderTopLeftRadius: T,
            borderTopRightRadius: T,
            borderBottomRightRadius: T,
            borderBottomLeftRadius: T,
            width: T,
            maxWidth: T,
            height: T,
            maxHeight: T,
            top: T,
            right: T,
            bottom: T,
            left: T,
            inset: T,
            insetBlock: T,
            insetBlockStart: T,
            insetBlockEnd: T,
            insetInline: T,
            insetInlineStart: T,
            insetInlineEnd: T,
            padding: T,
            paddingTop: T,
            paddingRight: T,
            paddingBottom: T,
            paddingLeft: T,
            paddingBlock: T,
            paddingBlockStart: T,
            paddingBlockEnd: T,
            paddingInline: T,
            paddingInlineStart: T,
            paddingInlineEnd: T,
            margin: T,
            marginTop: T,
            marginRight: T,
            marginBottom: T,
            marginLeft: T,
            marginBlock: T,
            marginBlockStart: T,
            marginBlockEnd: T,
            marginInline: T,
            marginInlineStart: T,
            marginInlineEnd: T,
            fontSize: T,
            backgroundPositionX: T,
            backgroundPositionY: T,
          },
          {
            rotate: k,
            rotateX: k,
            rotateY: k,
            rotateZ: k,
            scale: h,
            scaleX: h,
            scaleY: h,
            scaleZ: h,
            skew: k,
            skewX: k,
            skewY: k,
            distance: T,
            translateX: T,
            translateY: T,
            translateZ: T,
            x: T,
            y: T,
            z: T,
            perspective: T,
            transformPerspective: T,
            opacity: f,
            originX: F,
            originY: F,
            originZ: T,
          }
        ),
        {},
        { zIndex: $, fillOpacity: f, strokeOpacity: f, numOctaves: $ }
      ),
      q = u(
        u({}, Y),
        {},
        {
          color: N,
          backgroundColor: N,
          outlineColor: N,
          fill: N,
          stroke: N,
          borderColor: N,
          borderTopColor: N,
          borderRightColor: N,
          borderBottomColor: N,
          borderLeftColor: N,
          filter: H,
          WebkitFilter: H,
          mask: W,
          WebkitMask: W,
        }
      ),
      X = (e) => q[e],
      K = () => ({ x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }),
      Q = (e) => Boolean(e && e.getVelocity),
      G = new Set(["width", "height", "top", "left", "right", "bottom", ...r]),
      Z = (e) => (t) => t.test(e),
      J = [d, T, E, k, P, C, { test: (e) => "auto" === e, parse: (e) => e }],
      ee = (e) => J.find(Z(e));
    function te(e, t) {
      return t
        ? ""
            .concat(
              e,
              ". For more information and steps for solving, visit https://motion.dev/troubleshooting/"
            )
            .concat(t)
        : e;
    }
    var ne;
    let re = () => {},
      ae = () => {};
    "undefined" !== typeof process &&
      "production" !==
        (null ===
          (ne = {
            NODE_ENV: "production",
            PUBLIC_URL: "",
            WDS_SOCKET_HOST: void 0,
            WDS_SOCKET_PATH: void 0,
            WDS_SOCKET_PORT: void 0,
            FAST_REFRESH: !0,
          }) || void 0 === ne
          ? void 0
          : ne.NODE_ENV) &&
      ((re = (e, t, n) => {
        e || "undefined" === typeof console || console.warn(te(t, n));
      }),
      (ae = (e, t, n) => {
        if (!e) throw new Error(te(t, n));
      }));
    const ie = (e) => /^-?(?:[0-9]+(?:\.[0-9]+)?|\.[0-9]+)$/.test(e),
      oe = (e) => (t) => "string" === typeof t && t.startsWith(e),
      se = oe("--"),
      le = oe("var(--"),
      ue = (e) => !!le(e) && ce.test(e.split("/*")[0].trim()),
      ce =
        /var\(--(?:[\x2D0-9A-Z_a-z\u017F\u212A]+[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*|[\x2D0-9A-Z_a-z\u017F\u212A]+[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*,(?:[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*(?:(?![\t-\r \(\)\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uD800-\uDFFF\uFEFF])[^]|[\uD800-\uDBFF][\uDC00-\uDFFF])|[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*\((?:(?:(?![\(\)\uD800-\uDFFF])[^]|[\uD800-\uDBFF][\uDC00-\uDFFF])|\((?:(?![\(\)\uD800-\uDFFF])[^]|[\uD800-\uDBFF][\uDC00-\uDFFF])*\))*\))+[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*)\)$/i;
    function de(e) {
      return "string" === typeof e && e.split("/*")[0].includes("var(--");
    }
    const fe =
      /^var\(--(?:([\x2D0-9A-Z_a-z]+)|([\x2D0-9A-Z_a-z]+), ?([ #%\(\),-\.0-9A-Za-z]+))\)/;
    function he(e, t) {
      let n =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      ae(
        n <= 4,
        'Max CSS variable fallback depth detected in property "'.concat(
          e,
          '". This may indicate a circular fallback dependency.'
        ),
        "max-css-var-depth"
      );
      const [r, a] = (function (e) {
        const t = fe.exec(e);
        if (!t) return [,];
        const [, n, r, a] = t;
        return ["--".concat(null !== n && void 0 !== n ? n : r), a];
      })(e);
      if (!r) return;
      const i = window.getComputedStyle(t).getPropertyValue(r);
      if (i) {
        const e = i.trim();
        return ie(e) ? parseFloat(e) : e;
      }
      return ue(a) ? he(a, t, n + 1) : a;
    }
    const pe = (e) => (180 * e) / Math.PI,
      me = (e) => {
        const t = pe(Math.atan2(e[1], e[0]));
        return ve(t);
      },
      ge = {
        x: 4,
        y: 5,
        translateX: 4,
        translateY: 5,
        scaleX: 0,
        scaleY: 3,
        scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
        rotate: me,
        rotateZ: me,
        skewX: (e) => pe(Math.atan(e[1])),
        skewY: (e) => pe(Math.atan(e[2])),
        skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2,
      },
      ve = (e) => ((e %= 360) < 0 && (e += 360), e),
      ye = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
      be = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
      we = {
        x: 12,
        y: 13,
        z: 14,
        translateX: 12,
        translateY: 13,
        translateZ: 14,
        scaleX: ye,
        scaleY: be,
        scale: (e) => (ye(e) + be(e)) / 2,
        rotateX: (e) => ve(pe(Math.atan2(e[6], e[5]))),
        rotateY: (e) => ve(pe(Math.atan2(-e[2], e[0]))),
        rotateZ: me,
        rotate: me,
        skewX: (e) => pe(Math.atan(e[4])),
        skewY: (e) => pe(Math.atan(e[1])),
        skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2,
      };
    function xe(e) {
      return e.includes("scale") ? 1 : 0;
    }
    function Se(e, t) {
      if (!e || "none" === e) return xe(t);
      const n = e.match(
        /^matrix3d\(([\t-\r ,-\.0-9e\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+)\)$/
      );
      let r, a;
      if (n) (r = we), (a = n);
      else {
        const t = e.match(
          /^matrix\(([\t-\r ,-\.0-9e\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+)\)$/
        );
        (r = ge), (a = t);
      }
      if (!a) return xe(t);
      const i = r[t],
        o = a[1].split(",").map(ke);
      return "function" === typeof i ? i(o) : o[i];
    }
    function ke(e) {
      return parseFloat(e.trim());
    }
    const Ee = (e) => e === d || e === T,
      Te = new Set(["x", "y", "z"]),
      Ce = r.filter((e) => !Te.has(e));
    const Pe = {
      width: (e, t) => {
        let { x: n } = e,
          { paddingLeft: r = "0", paddingRight: a = "0" } = t;
        return n.max - n.min - parseFloat(r) - parseFloat(a);
      },
      height: (e, t) => {
        let { y: n } = e,
          { paddingTop: r = "0", paddingBottom: a = "0" } = t;
        return n.max - n.min - parseFloat(r) - parseFloat(a);
      },
      top: (e, t) => {
        let { top: n } = t;
        return parseFloat(n);
      },
      left: (e, t) => {
        let { left: n } = t;
        return parseFloat(n);
      },
      bottom: (e, t) => {
        let { y: n } = e,
          { top: r } = t;
        return parseFloat(r) + (n.max - n.min);
      },
      right: (e, t) => {
        let { x: n } = e,
          { left: r } = t;
        return parseFloat(r) + (n.max - n.min);
      },
      x: (e, t) => {
        let { transform: n } = t;
        return Se(n, "x");
      },
      y: (e, t) => {
        let { transform: n } = t;
        return Se(n, "y");
      },
    };
    (Pe.translateX = Pe.x), (Pe.translateY = Pe.y);
    const Fe = (e) => e,
      Ae = {},
      Ne = [
        "setup",
        "read",
        "resolveKeyframes",
        "preUpdate",
        "update",
        "preRender",
        "render",
        "postRender",
      ],
      De = { value: null, addProjectionMetrics: null };
    function Me(e, t) {
      let n = !1,
        r = !0;
      const a = { delta: 0, timestamp: 0, isProcessing: !1 },
        i = () => (n = !0),
        o = Ne.reduce(
          (e, n) => (
            (e[n] = (function (e, t) {
              let n = new Set(),
                r = new Set(),
                a = !1,
                i = !1;
              const o = new WeakSet();
              let s = { delta: 0, timestamp: 0, isProcessing: !1 },
                l = 0;
              function u(t) {
                o.has(t) && (c.schedule(t), e()), l++, t(s);
              }
              const c = {
                schedule: function (e) {
                  const t =
                    arguments.length > 2 &&
                    void 0 !== arguments[2] &&
                    arguments[2] &&
                    a
                      ? n
                      : r;
                  return (
                    arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1] &&
                      o.add(e),
                    t.has(e) || t.add(e),
                    e
                  );
                },
                cancel: (e) => {
                  r.delete(e), o.delete(e);
                },
                process: (e) => {
                  (s = e),
                    a
                      ? (i = !0)
                      : ((a = !0),
                        ([n, r] = [r, n]),
                        n.forEach(u),
                        t && De.value && De.value.frameloop[t].push(l),
                        (l = 0),
                        n.clear(),
                        (a = !1),
                        i && ((i = !1), c.process(e)));
                },
              };
              return c;
            })(i, t ? n : void 0)),
            e
          ),
          {}
        ),
        {
          setup: s,
          read: l,
          resolveKeyframes: u,
          preUpdate: c,
          update: d,
          preRender: f,
          render: h,
          postRender: p,
        } = o,
        m = () => {
          const i = Ae.useManualTiming ? a.timestamp : performance.now();
          (n = !1),
            Ae.useManualTiming ||
              (a.delta = r
                ? 1e3 / 60
                : Math.max(Math.min(i - a.timestamp, 40), 1)),
            (a.timestamp = i),
            (a.isProcessing = !0),
            s.process(a),
            l.process(a),
            u.process(a),
            c.process(a),
            d.process(a),
            f.process(a),
            h.process(a),
            p.process(a),
            (a.isProcessing = !1),
            n && t && ((r = !1), e(m));
        },
        g = Ne.reduce((t, i) => {
          const s = o[i];
          return (
            (t[i] = function (t) {
              let i =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                o =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2];
              return (
                n || ((n = !0), (r = !0), a.isProcessing || e(m)),
                s.schedule(t, i, o)
              );
            }),
            t
          );
        }, {});
      return {
        schedule: g,
        cancel: (e) => {
          for (let t = 0; t < Ne.length; t++) o[Ne[t]].cancel(e);
        },
        state: a,
        steps: o,
      };
    }
    const {
        schedule: Le,
        cancel: je,
        state: ze,
        steps: Re,
      } = Me(
        "undefined" !== typeof requestAnimationFrame
          ? requestAnimationFrame
          : Fe,
        !0
      ),
      Oe = new Set();
    let _e = !1,
      Ve = !1,
      Be = !1;
    function Ie() {
      if (Ve) {
        const e = Array.from(Oe).filter((e) => e.needsMeasurement),
          t = new Set(e.map((e) => e.element)),
          n = new Map();
        t.forEach((e) => {
          const t = (function (e) {
            const t = [];
            return (
              Ce.forEach((n) => {
                const r = e.getValue(n);
                void 0 !== r &&
                  (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
              }),
              t
            );
          })(e);
          t.length && (n.set(e, t), e.render());
        }),
          e.forEach((e) => e.measureInitialState()),
          t.forEach((e) => {
            e.render();
            const t = n.get(e);
            t &&
              t.forEach((t) => {
                var n;
                let [r, a] = t;
                null === (n = e.getValue(r)) || void 0 === n || n.set(a);
              });
          }),
          e.forEach((e) => e.measureEndState()),
          e.forEach((e) => {
            void 0 !== e.suspendedScrollY &&
              window.scrollTo(0, e.suspendedScrollY);
          });
      }
      (Ve = !1), (_e = !1), Oe.forEach((e) => e.complete(Be)), Oe.clear();
    }
    function Ue() {
      Oe.forEach((e) => {
        e.readKeyframes(), e.needsMeasurement && (Ve = !0);
      });
    }
    class He {
      constructor(e, t, n, r, a) {
        let i = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        (this.state = "pending"),
          (this.isAsync = !1),
          (this.needsMeasurement = !1),
          (this.unresolvedKeyframes = [...e]),
          (this.onComplete = t),
          (this.name = n),
          (this.motionValue = r),
          (this.element = a),
          (this.isAsync = i);
      }
      scheduleResolve() {
        (this.state = "scheduled"),
          this.isAsync
            ? (Oe.add(this),
              _e || ((_e = !0), Le.read(Ue), Le.resolveKeyframes(Ie)))
            : (this.readKeyframes(), this.complete());
      }
      readKeyframes() {
        const {
          unresolvedKeyframes: e,
          name: t,
          element: n,
          motionValue: r,
        } = this;
        if (null === e[0]) {
          const a = null === r || void 0 === r ? void 0 : r.get(),
            i = e[e.length - 1];
          if (void 0 !== a) e[0] = a;
          else if (n && t) {
            const r = n.readValue(t, i);
            void 0 !== r && null !== r && (e[0] = r);
          }
          void 0 === e[0] && (e[0] = i), r && void 0 === a && r.set(e[0]);
        }
        !(function (e) {
          for (let n = 1; n < e.length; n++) {
            var t;
            (null !== (t = e[n]) && void 0 !== t) || (e[n] = e[n - 1]);
          }
        })(e);
      }
      setFinalKeyframe() {}
      measureInitialState() {}
      renderEndStyles() {}
      measureEndState() {}
      complete() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        (this.state = "complete"),
          this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e),
          Oe.delete(this);
      }
      cancel() {
        "scheduled" === this.state &&
          (Oe.delete(this), (this.state = "pending"));
      }
      resume() {
        "pending" === this.state && this.scheduleResolve();
      }
    }
    const We = (e) =>
      /^0(?:[\0-\x08\x0E-\x1F!-\x2D\/-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+$/.test(
        e
      );
    function $e(e) {
      return "number" === typeof e
        ? 0 === e
        : null === e || "none" === e || "0" === e || We(e);
    }
    const Ye = new Set([H, W]);
    function qe(e, t) {
      let n = X(e);
      return (
        Ye.has(n) || (n = V),
        n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
      );
    }
    const Xe = new Set(["auto", "none", "0"]);
    class Ke extends He {
      constructor(e, t, n, r, a) {
        super(e, t, n, r, a, !0);
      }
      readKeyframes() {
        const { unresolvedKeyframes: e, element: t, name: n } = this;
        if (!t || !t.current) return;
        super.readKeyframes();
        for (let s = 0; s < e.length; s++) {
          let n = e[s];
          if ("string" === typeof n && ((n = n.trim()), ue(n))) {
            const r = he(n, t.current);
            void 0 !== r && (e[s] = r),
              s === e.length - 1 && (this.finalKeyframe = n);
          }
        }
        if ((this.resolveNoneKeyframes(), !G.has(n) || 2 !== e.length)) return;
        const [r, a] = e,
          i = ee(r),
          o = ee(a);
        if (de(r) !== de(a) && Pe[n]) this.needsMeasurement = !0;
        else if (i !== o)
          if (Ee(i) && Ee(o))
            for (let s = 0; s < e.length; s++) {
              const t = e[s];
              "string" === typeof t && (e[s] = parseFloat(t));
            }
          else Pe[n] && (this.needsMeasurement = !0);
      }
      resolveNoneKeyframes() {
        const { unresolvedKeyframes: e, name: t } = this,
          n = [];
        for (let r = 0; r < e.length; r++)
          (null === e[r] || $e(e[r])) && n.push(r);
        n.length &&
          (function (e, t, n) {
            let r,
              a = 0;
            for (; a < e.length && !r; ) {
              const t = e[a];
              "string" === typeof t &&
                !Xe.has(t) &&
                z(t).values.length &&
                (r = e[a]),
                a++;
            }
            if (r && n) for (const i of t) e[i] = qe(n, r);
          })(e, n, t);
      }
      measureInitialState() {
        const { element: e, unresolvedKeyframes: t, name: n } = this;
        if (!e || !e.current) return;
        "height" === n && (this.suspendedScrollY = window.pageYOffset),
          (this.measuredOrigin = Pe[n](
            e.measureViewportBox(),
            window.getComputedStyle(e.current)
          )),
          (t[0] = this.measuredOrigin);
        const r = t[t.length - 1];
        void 0 !== r && e.getValue(n, r).jump(r, !1);
      }
      measureEndState() {
        var e;
        const { element: t, name: n, unresolvedKeyframes: r } = this;
        if (!t || !t.current) return;
        const a = t.getValue(n);
        a && a.jump(this.measuredOrigin, !1);
        const i = r.length - 1,
          o = r[i];
        (r[i] = Pe[n](
          t.measureViewportBox(),
          window.getComputedStyle(t.current)
        )),
          null !== o &&
            void 0 === this.finalKeyframe &&
            (this.finalKeyframe = o),
          null !== (e = this.removedTransforms) &&
            void 0 !== e &&
            e.length &&
            this.removedTransforms.forEach((e) => {
              let [n, r] = e;
              t.getValue(n).set(r);
            }),
          this.resolveNoneKeyframes();
      }
    }
    function Qe(e, t) {
      if (null == e) return {};
      var n,
        r,
        a = (function (e, t) {
          if (null == e) return {};
          var n = {};
          for (var r in e)
            if ({}.hasOwnProperty.call(e, r)) {
              if (-1 !== t.indexOf(r)) continue;
              n[r] = e[r];
            }
          return n;
        })(e, t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (r = 0; r < i.length; r++)
          (n = i[r]),
            -1 === t.indexOf(n) &&
              {}.propertyIsEnumerable.call(e, n) &&
              (a[n] = e[n]);
      }
      return a;
    }
    const Ge = (e) => 1e3 * e,
      Ze = (e) => e / 1e3;
    function Je(e, t) {
      -1 === e.indexOf(t) && e.push(t);
    }
    function et(e, t) {
      const n = e.indexOf(t);
      n > -1 && e.splice(n, 1);
    }
    class tt {
      constructor() {
        this.subscriptions = [];
      }
      add(e) {
        return Je(this.subscriptions, e), () => et(this.subscriptions, e);
      }
      notify(e, t, n) {
        const r = this.subscriptions.length;
        if (r)
          if (1 === r) this.subscriptions[0](e, t, n);
          else
            for (let a = 0; a < r; a++) {
              const r = this.subscriptions[a];
              r && r(e, t, n);
            }
      }
      getSize() {
        return this.subscriptions.length;
      }
      clear() {
        this.subscriptions.length = 0;
      }
    }
    function nt(e) {
      let t;
      return () => (void 0 === t && (t = e()), t);
    }
    const rt = {};
    function at(e, t) {
      const n = nt(e);
      return () => {
        var e;
        return null !== (e = rt[t]) && void 0 !== e ? e : n();
      };
    }
    const it = at(() => void 0 !== window.ScrollTimeline, "scrollTimeline"),
      ot = (e) => null !== e;
    function st(e, t, n) {
      let { repeat: r, repeatType: a = "loop" } = t,
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
      const o = e.filter(ot),
        s = i < 0 || (r && "loop" !== a && r % 2 === 1) ? 0 : o.length - 1;
      return s && void 0 !== n ? n : o[s];
    }
    class lt {
      constructor() {
        this.updateFinished();
      }
      get finished() {
        return this._finished;
      }
      updateFinished() {
        this._finished = new Promise((e) => {
          this.resolve = e;
        });
      }
      notifyFinished() {
        this.resolve();
      }
      then(e, t) {
        return this.finished.then(e, t);
      }
    }
    const ut = { layout: 0, mainThread: 0, waapi: 0 },
      ct = (e) => Array.isArray(e) && "number" === typeof e[0],
      dt = at(() => {
        try {
          document
            .createElement("div")
            .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
        } catch (e) {
          return !1;
        }
        return !0;
      }, "linearEasing"),
      ft = function (e, t) {
        let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
          r = "";
        const a = Math.max(Math.round(t / n), 2);
        for (let i = 0; i < a; i++)
          r += Math.round(1e4 * e(i / (a - 1))) / 1e4 + ", ";
        return "linear(".concat(r.substring(0, r.length - 2), ")");
      },
      ht = (e) => {
        let [t, n, r, a] = e;
        return "cubic-bezier("
          .concat(t, ", ")
          .concat(n, ", ")
          .concat(r, ", ")
          .concat(a, ")");
      },
      pt = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: ht([0, 0.65, 0.55, 1]),
        circOut: ht([0.55, 0, 1, 0.45]),
        backIn: ht([0.31, 0.01, 0.66, -0.59]),
        backOut: ht([0.33, 1.53, 0.69, 0.99]),
      };
    function mt(e, t) {
      return e
        ? "function" === typeof e
          ? dt()
            ? ft(e, t)
            : "ease-out"
          : ct(e)
          ? ht(e)
          : Array.isArray(e)
          ? e.map((e) => mt(e, t) || pt.easeOut)
          : pt[e]
        : void 0;
    }
    function gt(e, t, n) {
      let {
          delay: r = 0,
          duration: a = 300,
          repeat: i = 0,
          repeatType: o = "loop",
          ease: s = "easeOut",
          times: l,
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        u =
          arguments.length > 4 && void 0 !== arguments[4]
            ? arguments[4]
            : void 0;
      const c = { [t]: n };
      l && (c.offset = l);
      const d = mt(s, a);
      Array.isArray(d) && (c.easing = d), De.value && ut.waapi++;
      const f = {
        delay: r,
        duration: a,
        easing: Array.isArray(d) ? "linear" : d,
        fill: "both",
        iterations: i + 1,
        direction: "reverse" === o ? "alternate" : "normal",
      };
      u && (f.pseudoElement = u);
      const h = e.animate(c, f);
      return (
        De.value &&
          h.finished.finally(() => {
            ut.waapi--;
          }),
        h
      );
    }
    function vt(e) {
      return "function" === typeof e && "applyToOptions" in e;
    }
    const yt = ["type"];
    class bt extends lt {
      constructor(e) {
        if (
          (super(),
          (this.finishedTime = null),
          (this.isStopped = !1),
          (this.manualStartTime = null),
          !e)
        )
          return;
        const {
          element: t,
          name: n,
          keyframes: r,
          pseudoElement: a,
          allowFlatten: i = !1,
          finalKeyframe: o,
          onComplete: s,
        } = e;
        (this.isPseudoElement = Boolean(a)),
          (this.allowFlatten = i),
          (this.options = e),
          ae(
            "string" !== typeof e.type,
            'Mini animate() doesn\'t support "type" as a string.',
            "mini-spring"
          );
        const l = (function (e) {
          let { type: t } = e,
            n = Qe(e, yt);
          return vt(t) && dt()
            ? t.applyToOptions(n)
            : ((null !== (r = n.duration) && void 0 !== r) ||
                (n.duration = 300),
              (null !== (a = n.ease) && void 0 !== a) || (n.ease = "easeOut"),
              n);
          var r, a;
        })(e);
        (this.animation = gt(t, n, r, l, a)),
          !1 === l.autoplay && this.animation.pause(),
          (this.animation.onfinish = () => {
            if (((this.finishedTime = this.time), !a)) {
              const e = st(r, this.options, o, this.speed);
              this.updateMotionValue && this.updateMotionValue(e),
                (function (e, t, n) {
                  ((e) => e.startsWith("--"))(t)
                    ? e.style.setProperty(t, n)
                    : (e.style[t] = n);
                })(t, n, e),
                this.animation.cancel();
            }
            null === s || void 0 === s || s(), this.notifyFinished();
          });
      }
      play() {
        this.isStopped ||
          ((this.manualStartTime = null),
          this.animation.play(),
          "finished" === this.state && this.updateFinished());
      }
      pause() {
        this.animation.pause();
      }
      complete() {
        var e, t;
        null === (e = (t = this.animation).finish) || void 0 === e || e.call(t);
      }
      cancel() {
        try {
          this.animation.cancel();
        } catch (e) {}
      }
      stop() {
        if (this.isStopped) return;
        this.isStopped = !0;
        const { state: e } = this;
        "idle" !== e &&
          "finished" !== e &&
          (this.updateMotionValue
            ? this.updateMotionValue()
            : this.commitStyles(),
          this.isPseudoElement || this.cancel());
      }
      commitStyles() {
        var e;
        const t =
          null === (e = this.options) || void 0 === e ? void 0 : e.element;
        var n, r;
        !this.isPseudoElement &&
          null !== t &&
          void 0 !== t &&
          t.isConnected &&
          (null === (n = (r = this.animation).commitStyles) ||
            void 0 === n ||
            n.call(r));
      }
      get duration() {
        var e, t;
        const n =
          (null === (e = this.animation.effect) ||
          void 0 === e ||
          null === (t = e.getComputedTiming) ||
          void 0 === t
            ? void 0
            : t.call(e).duration) || 0;
        return Ze(Number(n));
      }
      get iterationDuration() {
        const { delay: e = 0 } = this.options || {};
        return this.duration + Ze(e);
      }
      get time() {
        return Ze(Number(this.animation.currentTime) || 0);
      }
      set time(e) {
        (this.manualStartTime = null),
          (this.finishedTime = null),
          (this.animation.currentTime = Ge(e));
      }
      get speed() {
        return this.animation.playbackRate;
      }
      set speed(e) {
        e < 0 && (this.finishedTime = null), (this.animation.playbackRate = e);
      }
      get state() {
        return null !== this.finishedTime
          ? "finished"
          : this.animation.playState;
      }
      get startTime() {
        var e;
        return null !== (e = this.manualStartTime) && void 0 !== e
          ? e
          : Number(this.animation.startTime);
      }
      set startTime(e) {
        this.manualStartTime = this.animation.startTime = e;
      }
      attachTimeline(e) {
        let { timeline: t, rangeStart: n, rangeEnd: r, observe: a } = e;
        var i;
        this.allowFlatten &&
          (null === (i = this.animation.effect) ||
            void 0 === i ||
            i.updateTiming({ easing: "linear" }));
        return (
          (this.animation.onfinish = null),
          t && it()
            ? ((this.animation.timeline = t),
              n && (this.animation.rangeStart = n),
              r && (this.animation.rangeEnd = r),
              Fe)
            : a(this)
        );
      }
    }
    const wt = new Set(["opacity", "clipPath", "filter", "transform"]),
      { schedule: xt, cancel: St } = Me(queueMicrotask, !1);
    let kt;
    function Et() {
      kt = void 0;
    }
    const Tt = {
      now: () => (
        void 0 === kt &&
          Tt.set(
            ze.isProcessing || Ae.useManualTiming
              ? ze.timestamp
              : performance.now()
          ),
        kt
      ),
      set: (e) => {
        (kt = e), queueMicrotask(Et);
      },
    };
    function Ct(e, t) {
      return t ? e * (1e3 / t) : 0;
    }
    const Pt = { current: void 0 };
    class Ft {
      constructor(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        (this.canTrackVelocity = null),
          (this.events = {}),
          (this.updateAndNotify = (e) => {
            const t = Tt.now();
            var n;
            if (
              (this.updatedAt !== t && this.setPrevFrameValue(),
              (this.prev = this.current),
              this.setCurrent(e),
              this.current !== this.prev) &&
              (null === (n = this.events.change) ||
                void 0 === n ||
                n.notify(this.current),
              this.dependents)
            )
              for (const r of this.dependents) r.dirty();
          }),
          (this.hasAnimated = !1),
          this.setCurrent(e),
          (this.owner = t.owner);
      }
      setCurrent(e) {
        var t;
        (this.current = e),
          (this.updatedAt = Tt.now()),
          null === this.canTrackVelocity &&
            void 0 !== e &&
            (this.canTrackVelocity =
              ((t = this.current), !isNaN(parseFloat(t))));
      }
      setPrevFrameValue() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : this.current;
        (this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt);
      }
      onChange(e) {
        return this.on("change", e);
      }
      on(e, t) {
        this.events[e] || (this.events[e] = new tt());
        const n = this.events[e].add(t);
        return "change" === e
          ? () => {
              n(),
                Le.read(() => {
                  this.events.change.getSize() || this.stop();
                });
            }
          : n;
      }
      clearListeners() {
        for (const e in this.events) this.events[e].clear();
      }
      attach(e, t) {
        (this.passiveEffect = e), (this.stopPassiveEffect = t);
      }
      set(e) {
        this.passiveEffect
          ? this.passiveEffect(e, this.updateAndNotify)
          : this.updateAndNotify(e);
      }
      setWithVelocity(e, t, n) {
        this.set(t),
          (this.prev = void 0),
          (this.prevFrameValue = e),
          (this.prevUpdatedAt = this.updatedAt - n);
      }
      jump(e) {
        let t =
          !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this.updateAndNotify(e),
          (this.prev = e),
          (this.prevUpdatedAt = this.prevFrameValue = void 0),
          t && this.stop(),
          this.stopPassiveEffect && this.stopPassiveEffect();
      }
      dirty() {
        var e;
        null === (e = this.events.change) ||
          void 0 === e ||
          e.notify(this.current);
      }
      addDependent(e) {
        this.dependents || (this.dependents = new Set()),
          this.dependents.add(e);
      }
      removeDependent(e) {
        this.dependents && this.dependents.delete(e);
      }
      get() {
        return Pt.current && Pt.current.push(this), this.current;
      }
      getPrevious() {
        return this.prev;
      }
      getVelocity() {
        const e = Tt.now();
        if (
          !this.canTrackVelocity ||
          void 0 === this.prevFrameValue ||
          e - this.updatedAt > 30
        )
          return 0;
        const t = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
        return Ct(
          parseFloat(this.current) - parseFloat(this.prevFrameValue),
          t
        );
      }
      start(e) {
        return (
          this.stop(),
          new Promise((t) => {
            (this.hasAnimated = !0),
              (this.animation = e(t)),
              this.events.animationStart && this.events.animationStart.notify();
          }).then(() => {
            this.events.animationComplete &&
              this.events.animationComplete.notify(),
              this.clearAnimation();
          })
        );
      }
      stop() {
        this.animation &&
          (this.animation.stop(),
          this.events.animationCancel && this.events.animationCancel.notify()),
          this.clearAnimation();
      }
      isAnimating() {
        return !!this.animation;
      }
      clearAnimation() {
        delete this.animation;
      }
      destroy() {
        var e, t;
        null === (e = this.dependents) || void 0 === e || e.clear(),
          null === (t = this.events.destroy) || void 0 === t || t.notify(),
          this.clearListeners(),
          this.stop(),
          this.stopPassiveEffect && this.stopPassiveEffect();
      }
    }
    function At(e, t) {
      return new Ft(e, t);
    }
    const Nt = [...J, N, V],
      Dt = new WeakMap();
    function Mt(e) {
      return (
        null !== e && "object" === typeof e && "function" === typeof e.start
      );
    }
    function Lt(e) {
      return "string" === typeof e || Array.isArray(e);
    }
    const jt = [
        "animate",
        "whileInView",
        "whileFocus",
        "whileHover",
        "whileTap",
        "whileDrag",
        "exit",
      ],
      zt = ["initial", ...jt];
    function Rt(e) {
      return Mt(e.animate) || zt.some((t) => Lt(e[t]));
    }
    function Ot(e) {
      return Boolean(Rt(e) || e.variants);
    }
    const _t = { current: null },
      Vt = { current: !1 },
      Bt = "undefined" !== typeof window;
    function It(e) {
      const t = [{}, {}];
      return (
        null === e ||
          void 0 === e ||
          e.values.forEach((e, n) => {
            (t[0][n] = e.get()), (t[1][n] = e.getVelocity());
          }),
        t
      );
    }
    function Ut(e, t, n, r) {
      if ("function" === typeof t) {
        const [a, i] = It(r);
        t = t(void 0 !== n ? n : e.custom, a, i);
      }
      if (
        ("string" === typeof t && (t = e.variants && e.variants[t]),
        "function" === typeof t)
      ) {
        const [a, i] = It(r);
        t = t(void 0 !== n ? n : e.custom, a, i);
      }
      return t;
    }
    const Ht = ["willChange"],
      Wt = [
        "AnimationStart",
        "AnimationComplete",
        "Update",
        "BeforeLayoutMeasure",
        "LayoutMeasure",
        "LayoutAnimationStart",
        "LayoutAnimationComplete",
      ];
    let $t = {};
    function Yt(e) {
      $t = e;
    }
    class qt {
      scrapeMotionValuesFromProps(e, t, n) {
        return {};
      }
      constructor(e) {
        let {
            parent: t,
            props: n,
            presenceContext: r,
            reducedMotionConfig: a,
            skipAnimations: i,
            blockInitialAnimation: o,
            visualState: s,
          } = e,
          l =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        (this.current = null),
          (this.children = new Set()),
          (this.isVariantNode = !1),
          (this.isControllingVariants = !1),
          (this.shouldReduceMotion = null),
          (this.shouldSkipAnimations = !1),
          (this.values = new Map()),
          (this.KeyframeResolver = He),
          (this.features = {}),
          (this.valueSubscriptions = new Map()),
          (this.prevMotionValues = {}),
          (this.hasBeenMounted = !1),
          (this.events = {}),
          (this.propEventSubscriptions = {}),
          (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
          (this.render = () => {
            this.current &&
              (this.triggerBuild(),
              this.renderInstance(
                this.current,
                this.renderState,
                this.props.style,
                this.projection
              ));
          }),
          (this.renderScheduledAt = 0),
          (this.scheduleRender = () => {
            const e = Tt.now();
            this.renderScheduledAt < e &&
              ((this.renderScheduledAt = e), Le.render(this.render, !1, !0));
          });
        const { latestValues: c, renderState: d } = s;
        (this.latestValues = c),
          (this.baseTarget = u({}, c)),
          (this.initialValues = n.initial ? u({}, c) : {}),
          (this.renderState = d),
          (this.parent = t),
          (this.props = n),
          (this.presenceContext = r),
          (this.depth = t ? t.depth + 1 : 0),
          (this.reducedMotionConfig = a),
          (this.skipAnimationsConfig = i),
          (this.options = l),
          (this.blockInitialAnimation = Boolean(o)),
          (this.isControllingVariants = Rt(n)),
          (this.isVariantNode = Ot(n)),
          this.isVariantNode && (this.variantChildren = new Set()),
          (this.manuallyAnimateOnMount = Boolean(t && t.current));
        const f = this.scrapeMotionValuesFromProps(n, {}, this),
          { willChange: h } = f,
          p = Qe(f, Ht);
        for (const u in p) {
          const e = p[u];
          void 0 !== c[u] && Q(e) && e.set(c[u]);
        }
      }
      mount(e) {
        var t, n;
        if (this.hasBeenMounted)
          for (const a in this.initialValues) {
            var r;
            null === (r = this.values.get(a)) ||
              void 0 === r ||
              r.jump(this.initialValues[a]),
              (this.latestValues[a] = this.initialValues[a]);
          }
        (this.current = e),
          Dt.set(e, this),
          this.projection &&
            !this.projection.instance &&
            this.projection.mount(e),
          this.parent &&
            this.isVariantNode &&
            !this.isControllingVariants &&
            (this.removeFromVariantTree = this.parent.addVariantChild(this)),
          this.values.forEach((e, t) => this.bindToMotionValue(t, e)),
          "never" === this.reducedMotionConfig
            ? (this.shouldReduceMotion = !1)
            : "always" === this.reducedMotionConfig
            ? (this.shouldReduceMotion = !0)
            : (Vt.current ||
                (function () {
                  if (((Vt.current = !0), Bt))
                    if (window.matchMedia) {
                      const e = window.matchMedia("(prefers-reduced-motion)"),
                        t = () => (_t.current = e.matches);
                      e.addEventListener("change", t), t();
                    } else _t.current = !1;
                })(),
              (this.shouldReduceMotion = _t.current)),
          (this.shouldSkipAnimations =
            null !== (t = this.skipAnimationsConfig) && void 0 !== t && t),
          null === (n = this.parent) || void 0 === n || n.addChild(this),
          this.update(this.props, this.presenceContext),
          (this.hasBeenMounted = !0);
      }
      unmount() {
        var e;
        this.projection && this.projection.unmount(),
          je(this.notifyUpdate),
          je(this.render),
          this.valueSubscriptions.forEach((e) => e()),
          this.valueSubscriptions.clear(),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          null === (e = this.parent) || void 0 === e || e.removeChild(this);
        for (const t in this.events) this.events[t].clear();
        for (const t in this.features) {
          const e = this.features[t];
          e && (e.unmount(), (e.isMounted = !1));
        }
        this.current = null;
      }
      addChild(e) {
        var t;
        this.children.add(e),
          (null !== (t = this.enteringChildren) && void 0 !== t) ||
            (this.enteringChildren = new Set()),
          this.enteringChildren.add(e);
      }
      removeChild(e) {
        this.children.delete(e),
          this.enteringChildren && this.enteringChildren.delete(e);
      }
      bindToMotionValue(e, t) {
        if (
          (this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)(),
          t.accelerate && wt.has(e) && this.current instanceof HTMLElement)
        ) {
          const {
              factory: n,
              keyframes: r,
              times: a,
              ease: i,
              duration: o,
            } = t.accelerate,
            s = new bt({
              element: this.current,
              name: e,
              keyframes: r,
              times: a,
              ease: i,
              duration: Ge(o),
            }),
            l = n(s);
          return void this.valueSubscriptions.set(e, () => {
            l(), s.cancel();
          });
        }
        const n = a.has(e);
        n && this.onBindTransform && this.onBindTransform();
        const r = t.on("change", (t) => {
          (this.latestValues[e] = t),
            this.props.onUpdate && Le.preRender(this.notifyUpdate),
            n && this.projection && (this.projection.isTransformDirty = !0),
            this.scheduleRender();
        });
        let i;
        "undefined" !== typeof window &&
          window.MotionCheckAppearSync &&
          (i = window.MotionCheckAppearSync(this, e, t)),
          this.valueSubscriptions.set(e, () => {
            r(), i && i(), t.owner && t.stop();
          });
      }
      sortNodePosition(e) {
        return this.current &&
          this.sortInstanceNodePosition &&
          this.type === e.type
          ? this.sortInstanceNodePosition(this.current, e.current)
          : 0;
      }
      updateFeatures() {
        let e = "animation";
        for (e in $t) {
          const t = $t[e];
          if (!t) continue;
          const { isEnabled: n, Feature: r } = t;
          if (
            (!this.features[e] &&
              r &&
              n(this.props) &&
              (this.features[e] = new r(this)),
            this.features[e])
          ) {
            const t = this.features[e];
            t.isMounted ? t.update() : (t.mount(), (t.isMounted = !0));
          }
        }
      }
      triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props);
      }
      measureViewportBox() {
        return this.current
          ? this.measureInstanceViewportBox(this.current, this.props)
          : { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
      }
      getStaticValue(e) {
        return this.latestValues[e];
      }
      setStaticValue(e, t) {
        this.latestValues[e] = t;
      }
      update(e, t) {
        (e.transformTemplate || this.props.transformTemplate) &&
          this.scheduleRender(),
          (this.prevProps = this.props),
          (this.props = e),
          (this.prevPresenceContext = this.presenceContext),
          (this.presenceContext = t);
        for (let n = 0; n < Wt.length; n++) {
          const t = Wt[n];
          this.propEventSubscriptions[t] &&
            (this.propEventSubscriptions[t](),
            delete this.propEventSubscriptions[t]);
          const r = e["on" + t];
          r && (this.propEventSubscriptions[t] = this.on(t, r));
        }
        (this.prevMotionValues = (function (e, t, n) {
          for (const r in t) {
            const a = t[r],
              i = n[r];
            if (Q(a)) e.addValue(r, a);
            else if (Q(i)) e.addValue(r, At(a, { owner: e }));
            else if (i !== a)
              if (e.hasValue(r)) {
                const t = e.getValue(r);
                !0 === t.liveStyle ? t.jump(a) : t.hasAnimated || t.set(a);
              } else {
                const t = e.getStaticValue(r);
                e.addValue(r, At(void 0 !== t ? t : a, { owner: e }));
              }
          }
          for (const r in n) void 0 === t[r] && e.removeValue(r);
          return t;
        })(
          this,
          this.scrapeMotionValuesFromProps(e, this.prevProps || {}, this),
          this.prevMotionValues
        )),
          this.handleChildMotionValue && this.handleChildMotionValue();
      }
      getProps() {
        return this.props;
      }
      getVariant(e) {
        return this.props.variants ? this.props.variants[e] : void 0;
      }
      getDefaultTransition() {
        return this.props.transition;
      }
      getTransformPagePoint() {
        return this.props.transformPagePoint;
      }
      getClosestVariantNode() {
        return this.isVariantNode
          ? this
          : this.parent
          ? this.parent.getClosestVariantNode()
          : void 0;
      }
      addVariantChild(e) {
        const t = this.getClosestVariantNode();
        if (t)
          return (
            t.variantChildren && t.variantChildren.add(e),
            () => t.variantChildren.delete(e)
          );
      }
      addValue(e, t) {
        const n = this.values.get(e);
        t !== n &&
          (n && this.removeValue(e),
          this.bindToMotionValue(e, t),
          this.values.set(e, t),
          (this.latestValues[e] = t.get()));
      }
      removeValue(e) {
        this.values.delete(e);
        const t = this.valueSubscriptions.get(e);
        t && (t(), this.valueSubscriptions.delete(e)),
          delete this.latestValues[e],
          this.removeValueFromRenderState(e, this.renderState);
      }
      hasValue(e) {
        return this.values.has(e);
      }
      getValue(e, t) {
        if (this.props.values && this.props.values[e])
          return this.props.values[e];
        let n = this.values.get(e);
        return (
          void 0 === n &&
            void 0 !== t &&
            ((n = At(null === t ? void 0 : t, { owner: this })),
            this.addValue(e, n)),
          n
        );
      }
      readValue(e, t) {
        var n;
        let r =
          void 0 === this.latestValues[e] && this.current
            ? null !== (n = this.getBaseTargetFromProps(this.props, e)) &&
              void 0 !== n
              ? n
              : this.readValueFromInstance(this.current, e, this.options)
            : this.latestValues[e];
        var a;
        return (
          void 0 !== r &&
            null !== r &&
            ("string" === typeof r && (ie(r) || We(r))
              ? (r = parseFloat(r))
              : ((a = r), !Nt.find(Z(a)) && V.test(t) && (r = qe(e, t))),
            this.setBaseTarget(e, Q(r) ? r.get() : r)),
          Q(r) ? r.get() : r
        );
      }
      setBaseTarget(e, t) {
        this.baseTarget[e] = t;
      }
      getBaseTarget(e) {
        const { initial: t } = this.props;
        let n;
        if ("string" === typeof t || "object" === typeof t) {
          var r;
          const a = Ut(
            this.props,
            t,
            null === (r = this.presenceContext) || void 0 === r
              ? void 0
              : r.custom
          );
          a && (n = a[e]);
        }
        if (t && void 0 !== n) return n;
        const a = this.getBaseTargetFromProps(this.props, e);
        return void 0 === a || Q(a)
          ? void 0 !== this.initialValues[e] && void 0 === n
            ? void 0
            : this.baseTarget[e]
          : a;
      }
      on(e, t) {
        return (
          this.events[e] || (this.events[e] = new tt()), this.events[e].add(t)
        );
      }
      notify(e) {
        if (this.events[e]) {
          for (
            var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            n[r - 1] = arguments[r];
          this.events[e].notify(...n);
        }
      }
      scheduleRenderMicrotask() {
        xt.render(this.render);
      }
    }
    class Xt extends qt {
      constructor() {
        super(...arguments), (this.KeyframeResolver = Ke);
      }
      sortInstanceNodePosition(e, t) {
        return 2 & e.compareDocumentPosition(t) ? 1 : -1;
      }
      getBaseTargetFromProps(e, t) {
        const n = e.style;
        return n ? n[t] : void 0;
      }
      removeValueFromRenderState(e, t) {
        let { vars: n, style: r } = t;
        delete n[e], delete r[e];
      }
      handleChildMotionValue() {
        this.childSubscription &&
          (this.childSubscription(), delete this.childSubscription);
        const { children: e } = this.props;
        Q(e) &&
          (this.childSubscription = e.on("change", (e) => {
            this.current && (this.current.textContent = "".concat(e));
          }));
      }
    }
    function Kt(e) {
      return e.replace(/([A-Z])/g, (e) => "-".concat(e.toLowerCase()));
    }
    const Qt = (e, t) => (t && "number" === typeof e ? t.transform(e) : e),
      Gt = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective",
      },
      Zt = r.length;
    function Jt(e, t, n) {
      const { style: i, vars: o, transformOrigin: s } = e;
      let l = !1,
        u = !1;
      for (const r in t) {
        const e = t[r];
        if (a.has(r)) l = !0;
        else if (se(r)) o[r] = e;
        else {
          const t = Qt(e, Y[r]);
          r.startsWith("origin") ? ((u = !0), (s[r] = t)) : (i[r] = t);
        }
      }
      if (
        (t.transform ||
          (l || n
            ? (i.transform = (function (e, t, n) {
                let a = "",
                  i = !0;
                for (let o = 0; o < Zt; o++) {
                  const s = r[o],
                    l = e[s];
                  if (void 0 === l) continue;
                  let u = !0;
                  if ("number" === typeof l)
                    u = l === (s.startsWith("scale") ? 1 : 0);
                  else {
                    const e = parseFloat(l);
                    u = s.startsWith("scale") ? 1 === e : 0 === e;
                  }
                  if (!u || n) {
                    const e = Qt(l, Y[s]);
                    u ||
                      ((i = !1),
                      (a += "".concat(Gt[s] || s, "(").concat(e, ") "))),
                      n && (t[s] = e);
                  }
                }
                return (
                  (a = a.trim()),
                  n ? (a = n(t, i ? "" : a)) : i && (a = "none"),
                  a
                );
              })(t, e.transform, n))
            : i.transform && (i.transform = "none")),
        u)
      ) {
        const { originX: e = "50%", originY: t = "50%", originZ: n = 0 } = s;
        i.transformOrigin = "".concat(e, " ").concat(t, " ").concat(n);
      }
    }
    const en = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
      tn = { offset: "strokeDashoffset", array: "strokeDasharray" };
    const nn = [
        "attrX",
        "attrY",
        "attrScale",
        "pathLength",
        "pathSpacing",
        "pathOffset",
      ],
      rn = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
    function an(e, t, n, r, a) {
      let {
        attrX: i,
        attrY: o,
        attrScale: s,
        pathLength: l,
        pathSpacing: u = 1,
        pathOffset: c = 0,
      } = t;
      if ((Jt(e, Qe(t, nn), r), n))
        return void (e.style.viewBox && (e.attrs.viewBox = e.style.viewBox));
      (e.attrs = e.style), (e.style = {});
      const { attrs: d, style: f } = e;
      var h, p;
      (d.transform && ((f.transform = d.transform), delete d.transform),
      f.transform || d.transformOrigin) &&
        ((f.transformOrigin =
          null !== (h = d.transformOrigin) && void 0 !== h ? h : "50% 50%"),
        delete d.transformOrigin);
      f.transform &&
        ((f.transformBox =
          null !== (p = null === a || void 0 === a ? void 0 : a.transformBox) &&
          void 0 !== p
            ? p
            : "fill-box"),
        delete d.transformBox);
      for (const m of rn) void 0 !== d[m] && ((f[m] = d[m]), delete d[m]);
      void 0 !== i && (d.x = i),
        void 0 !== o && (d.y = o),
        void 0 !== s && (d.scale = s),
        void 0 !== l &&
          (function (e, t) {
            let n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 1,
              r =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : 0,
              a =
                !(arguments.length > 4 && void 0 !== arguments[4]) ||
                arguments[4];
            e.pathLength = 1;
            const i = a ? en : tn;
            (e[i.offset] = "".concat(-r)),
              (e[i.array] = "".concat(t, " ").concat(n));
          })(d, l, u, c, !1);
    }
    const on = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]),
      sn = (e) => "string" === typeof e && "svg" === e.toLowerCase();
    function ln(e, t, n, r) {
      let { style: a, vars: i } = t;
      const o = e.style;
      let s;
      for (s in a) o[s] = a[s];
      for (s in (null === r || void 0 === r || r.applyProjectionStyles(o, n),
      i))
        o.setProperty(s, i[s]);
    }
    function un(e, t) {
      return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
    }
    const cn = {
        correct: (e, t) => {
          if (!t.target) return e;
          if ("string" === typeof e) {
            if (!T.test(e)) return e;
            e = parseFloat(e);
          }
          const n = un(e, t.target.x),
            r = un(e, t.target.y);
          return "".concat(n, "% ").concat(r, "%");
        },
      },
      dn = (e, t, n) => e + (t - e) * n,
      fn = {
        correct: (e, t) => {
          let { treeScale: n, projectionDelta: r } = t;
          const a = e,
            i = V.parse(e);
          if (i.length > 5) return a;
          const o = V.createTransformer(e),
            s = "number" !== typeof i[0] ? 1 : 0,
            l = r.x.scale * n.x,
            u = r.y.scale * n.y;
          (i[0 + s] /= l), (i[1 + s] /= u);
          const c = dn(l, u, 0.5);
          return (
            "number" === typeof i[2 + s] && (i[2 + s] /= c),
            "number" === typeof i[3 + s] && (i[3 + s] /= c),
            o(i)
          );
        },
      };
    const hn = {
      borderRadius: u(
        u({}, cn),
        {},
        {
          applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
          ],
        }
      ),
      borderTopLeftRadius: cn,
      borderTopRightRadius: cn,
      borderBottomLeftRadius: cn,
      borderBottomRightRadius: cn,
      boxShadow: fn,
    };
    function pn(e, t) {
      let { layout: n, layoutId: r } = t;
      return (
        a.has(e) ||
        e.startsWith("origin") ||
        ((n || void 0 !== r) && (!!hn[e] || "opacity" === e))
      );
    }
    function mn(e, t, n) {
      const r = e.style,
        a = null === t || void 0 === t ? void 0 : t.style,
        i = {};
      if (!r) return i;
      for (const s in r) {
        var o;
        (Q(r[s]) ||
          (a && Q(a[s])) ||
          pn(s, e) ||
          void 0 !==
            (null === n ||
            void 0 === n ||
            null === (o = n.getValue(s)) ||
            void 0 === o
              ? void 0
              : o.liveStyle)) &&
          (i[s] = r[s]);
      }
      return i;
    }
    function gn(e, t, n) {
      const a = mn(e, t, n);
      for (const i in e)
        if (Q(e[i]) || Q(t[i])) {
          a[
            -1 !== r.indexOf(i)
              ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
              : i
          ] = e[i];
        }
      return a;
    }
    class vn extends Xt {
      constructor() {
        super(...arguments),
          (this.type = "svg"),
          (this.isSVGTag = !1),
          (this.measureInstanceViewportBox = K);
      }
      getBaseTargetFromProps(e, t) {
        return e[t];
      }
      readValueFromInstance(e, t) {
        if (a.has(t)) {
          const e = X(t);
          return (e && e.default) || 0;
        }
        return (t = on.has(t) ? t : Kt(t)), e.getAttribute(t);
      }
      scrapeMotionValuesFromProps(e, t, n) {
        return gn(e, t, n);
      }
      build(e, t, n) {
        an(e, t, this.isSVGTag, n.transformTemplate, n.style);
      }
      renderInstance(e, t, n, r) {
        !(function (e, t, n, r) {
          ln(e, t, void 0, r);
          for (const a in t.attrs)
            e.setAttribute(on.has(a) ? a : Kt(a), t.attrs[a]);
        })(e, t, 0, r);
      }
      mount(e) {
        (this.isSVGTag = sn(e.tagName)), super.mount(e);
      }
    }
    function yn(e) {
      let { top: t, left: n, right: r, bottom: a } = e;
      return { x: { min: n, max: r }, y: { min: t, max: a } };
    }
    function bn(e) {
      return void 0 === e || 1 === e;
    }
    function wn(e) {
      let { scale: t, scaleX: n, scaleY: r } = e;
      return !bn(t) || !bn(n) || !bn(r);
    }
    function xn(e) {
      return (
        wn(e) ||
        Sn(e) ||
        e.z ||
        e.rotate ||
        e.rotateX ||
        e.rotateY ||
        e.skewX ||
        e.skewY
      );
    }
    function Sn(e) {
      return kn(e.x) || kn(e.y);
    }
    function kn(e) {
      return e && "0%" !== e;
    }
    function En(e, t, n) {
      return n + t * (e - n);
    }
    function Tn(e, t, n, r, a) {
      return void 0 !== a && (e = En(e, a, r)), En(e, n, r) + t;
    }
    function Cn(e) {
      let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
        r = arguments.length > 3 ? arguments[3] : void 0,
        a = arguments.length > 4 ? arguments[4] : void 0;
      (e.min = Tn(e.min, t, n, r, a)), (e.max = Tn(e.max, t, n, r, a));
    }
    function Pn(e, t) {
      let { x: n, y: r } = t;
      Cn(e.x, n.translate, n.scale, n.originPoint),
        Cn(e.y, r.translate, r.scale, r.originPoint);
    }
    const Fn = 0.999999999999,
      An = 1.0000000000001;
    function Nn(e, t) {
      (e.min = e.min + t), (e.max = e.max + t);
    }
    function Dn(e, t, n, r) {
      let a =
        arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0.5;
      Cn(e, t, n, dn(e.min, e.max, a), r);
    }
    function Mn(e, t) {
      return "string" === typeof e
        ? (parseFloat(e) / 100) * (t.max - t.min)
        : e;
    }
    function Ln(e, t) {
      Dn(e.x, Mn(t.x, e.x), t.scaleX, t.scale, t.originX),
        Dn(e.y, Mn(t.y, e.y), t.scaleY, t.scale, t.originY);
    }
    function jn(e, t) {
      return yn(
        (function (e, t) {
          if (!t) return e;
          const n = t({ x: e.left, y: e.top }),
            r = t({ x: e.right, y: e.bottom });
          return { top: n.y, left: n.x, bottom: r.y, right: r.x };
        })(e.getBoundingClientRect(), t)
      );
    }
    class zn extends Xt {
      constructor() {
        super(...arguments), (this.type = "html"), (this.renderInstance = ln);
      }
      readValueFromInstance(e, t) {
        var n, r;
        if (a.has(t))
          return null !== (n = this.projection) &&
            void 0 !== n &&
            n.isProjecting
            ? xe(t)
            : ((e, t) => {
                const { transform: n = "none" } = getComputedStyle(e);
                return Se(n, t);
              })(e, t);
        {
          const n = ((r = e), window.getComputedStyle(r)),
            a = (se(t) ? n.getPropertyValue(t) : n[t]) || 0;
          return "string" === typeof a ? a.trim() : a;
        }
      }
      measureInstanceViewportBox(e, t) {
        let { transformPagePoint: n } = t;
        return jn(e, n);
      }
      build(e, t, n) {
        Jt(e, t, n.transformTemplate);
      }
      scrapeMotionValuesFromProps(e, t, n) {
        return mn(e, t, n);
      }
    }
    const Rn = [
      "animate",
      "circle",
      "defs",
      "desc",
      "ellipse",
      "g",
      "image",
      "line",
      "filter",
      "marker",
      "mask",
      "metadata",
      "path",
      "pattern",
      "polygon",
      "polyline",
      "rect",
      "stop",
      "switch",
      "symbol",
      "svg",
      "text",
      "tspan",
      "use",
      "view",
    ];
    function On(e) {
      return (
        "string" === typeof e &&
        !e.includes("-") &&
        !!(Rn.indexOf(e) > -1 || /[A-Z]/.test(e))
      );
    }
    const _n = (t, n) => {
      var r;
      return (null !== (r = n.isSVG) && void 0 !== r ? r : On(t))
        ? new vn(n)
        : new zn(n, { allowProjection: t !== e.Fragment });
    };
    var Vn = n(579);
    const Bn = (0, e.createContext)({}),
      In = (0, e.createContext)({ strict: !1 }),
      Un = (0, e.createContext)({
        transformPagePoint: (e) => e,
        isStatic: !1,
        reducedMotion: "never",
      }),
      Hn = (0, e.createContext)({});
    function Wn(t) {
      const { initial: n, animate: r } = (function (e, t) {
        if (Rt(e)) {
          const { initial: t, animate: n } = e;
          return {
            initial: !1 === t || Lt(t) ? t : void 0,
            animate: Lt(n) ? n : void 0,
          };
        }
        return !1 !== e.inherit ? t : {};
      })(t, (0, e.useContext)(Hn));
      return (0, e.useMemo)(() => ({ initial: n, animate: r }), [$n(n), $n(r)]);
    }
    function $n(e) {
      return Array.isArray(e) ? e.join(" ") : e;
    }
    const Yn = () => ({
      style: {},
      transform: {},
      transformOrigin: {},
      vars: {},
    });
    function qn(e, t, n) {
      for (const r in t) Q(t[r]) || pn(r, n) || (e[r] = t[r]);
    }
    function Xn(t, n) {
      const r = {};
      return (
        qn(r, t.style || {}, t),
        Object.assign(
          r,
          (function (t, n) {
            let { transformTemplate: r } = t;
            return (0, e.useMemo)(() => {
              const e = {
                style: {},
                transform: {},
                transformOrigin: {},
                vars: {},
              };
              return Jt(e, n, r), Object.assign({}, e.vars, e.style);
            }, [n]);
          })(t, n)
        ),
        r
      );
    }
    function Kn(e, t) {
      const n = {},
        r = Xn(e, t);
      return (
        e.drag &&
          !1 !== e.dragListener &&
          ((n.draggable = !1),
          (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
          (r.touchAction =
            !0 === e.drag
              ? "none"
              : "pan-".concat("x" === e.drag ? "y" : "x"))),
        void 0 === e.tabIndex &&
          (e.onTap || e.onTapStart || e.whileTap) &&
          (n.tabIndex = 0),
        (n.style = r),
        n
      );
    }
    const Qn = () =>
      u(
        u({}, { style: {}, transform: {}, transformOrigin: {}, vars: {} }),
        {},
        { attrs: {} }
      );
    function Gn(t, n, r, a) {
      const i = (0, e.useMemo)(() => {
        const e = Qn();
        return (
          an(e, n, sn(a), t.transformTemplate, t.style),
          u(u({}, e.attrs), {}, { style: u({}, e.style) })
        );
      }, [n]);
      if (t.style) {
        const e = {};
        qn(e, t.style, t), (i.style = u(u({}, e), i.style));
      }
      return i;
    }
    const Zn = new Set([
      "animate",
      "exit",
      "variants",
      "initial",
      "style",
      "values",
      "variants",
      "transition",
      "transformTemplate",
      "custom",
      "inherit",
      "onBeforeLayoutMeasure",
      "onAnimationStart",
      "onAnimationComplete",
      "onUpdate",
      "onDragStart",
      "onDrag",
      "onDragEnd",
      "onMeasureDragConstraints",
      "onDirectionLock",
      "onDragTransitionEnd",
      "_dragX",
      "_dragY",
      "onHoverStart",
      "onHoverEnd",
      "onViewportEnter",
      "onViewportLeave",
      "globalTapTarget",
      "propagate",
      "ignoreStrict",
      "viewport",
    ]);
    function Jn(e) {
      return (
        e.startsWith("while") ||
        (e.startsWith("drag") && "draggable" !== e) ||
        e.startsWith("layout") ||
        e.startsWith("onTap") ||
        e.startsWith("onPan") ||
        e.startsWith("onLayout") ||
        Zn.has(e)
      );
    }
    let er = (e) => !Jn(e);
    try {
      "function" === typeof (tr = require("@emotion/is-prop-valid").default) &&
        (er = (e) => (e.startsWith("on") ? !Jn(e) : tr(e)));
    } catch (Kl) {}
    var tr;
    function nr(t, n, r, a, i) {
      let { latestValues: o } = a,
        s = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        l = arguments.length > 6 ? arguments[6] : void 0;
      const c = ((null !== l && void 0 !== l ? l : On(t)) ? Gn : Kn)(
          n,
          o,
          i,
          t
        ),
        d = (function (e, t, n) {
          const r = {};
          for (const a in e)
            ("values" === a && "object" === typeof e.values) ||
              ((er(a) ||
                (!0 === n && Jn(a)) ||
                (!t && !Jn(a)) ||
                (e.draggable && a.startsWith("onDrag"))) &&
                (r[a] = e[a]));
          return r;
        })(n, "string" === typeof t, s),
        f = t !== e.Fragment ? u(u(u({}, d), c), {}, { ref: r }) : {},
        { children: h } = n,
        p = (0, e.useMemo)(() => (Q(h) ? h.get() : h), [h]);
      return (0, e.createElement)(t, u(u({}, f), {}, { children: p }));
    }
    function rr(e) {
      return Q(e) ? e.get() : e;
    }
    const ar = (0, e.createContext)(null);
    function ir(t) {
      const n = (0, e.useRef)(null);
      return null === n.current && (n.current = t()), n.current;
    }
    const or = ["transitionEnd", "transition"];
    function sr(e, t, n, r) {
      const a = {},
        i = r(e, {});
      for (const f in i) a[f] = rr(i[f]);
      let { initial: o, animate: s } = e;
      const l = Rt(e),
        u = Ot(e);
      t &&
        u &&
        !l &&
        !1 !== e.inherit &&
        (void 0 === o && (o = t.initial), void 0 === s && (s = t.animate));
      let c = !!n && !1 === n.initial;
      c = c || !1 === o;
      const d = c ? s : o;
      if (d && "boolean" !== typeof d && !Mt(d)) {
        const t = Array.isArray(d) ? d : [d];
        for (let n = 0; n < t.length; n++) {
          const r = Ut(e, t[n]);
          if (r) {
            const { transitionEnd: e, transition: t } = r,
              n = Qe(r, or);
            for (const r in n) {
              let e = n[r];
              if (Array.isArray(e)) {
                e = e[c ? e.length - 1 : 0];
              }
              null !== e && (a[r] = e);
            }
            for (const r in e) a[r] = e[r];
          }
        }
      }
      return a;
    }
    const lr = (t) => (n, r) => {
        const a = (0, e.useContext)(Hn),
          i = (0, e.useContext)(ar),
          o = () =>
            (function (e, t, n, r) {
              let { scrapeMotionValuesFromProps: a, createRenderState: i } = e;
              return { latestValues: sr(t, n, r, a), renderState: i() };
            })(t, n, a, i);
        return r ? o() : ir(o);
      },
      ur = lr({ scrapeMotionValuesFromProps: mn, createRenderState: Yn }),
      cr = lr({ scrapeMotionValuesFromProps: gn, createRenderState: Qn }),
      dr = {
        animation: [
          "animate",
          "variants",
          "whileHover",
          "whileTap",
          "exit",
          "whileInView",
          "whileFocus",
          "whileDrag",
        ],
        exit: ["exit"],
        drag: ["drag", "dragControls"],
        focus: ["whileFocus"],
        hover: ["whileHover", "onHoverStart", "onHoverEnd"],
        tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
        pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
        inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
        layout: ["layout", "layoutId"],
      };
    let fr = !1;
    function hr() {
      return (
        (function () {
          if (fr) return;
          const e = {};
          for (const t in dr)
            e[t] = { isEnabled: (e) => dr[t].some((t) => !!e[t]) };
          Yt(e), (fr = !0);
        })(),
        $t
      );
    }
    const pr = Symbol.for("motionComponentSymbol");
    function mr(t, n, r) {
      const a = (0, e.useRef)(r);
      (0, e.useInsertionEffect)(() => {
        a.current = r;
      });
      const i = (0, e.useRef)(null);
      return (0, e.useCallback)(
        (e) => {
          var r;
          e && (null === (r = t.onMount) || void 0 === r || r.call(t, e));
          const o = a.current;
          if ("function" === typeof o)
            if (e) {
              const t = o(e);
              "function" === typeof t && (i.current = t);
            } else i.current ? (i.current(), (i.current = null)) : o(e);
          else o && (o.current = e);
          n && (e ? n.mount(e) : n.unmount());
        },
        [n]
      );
    }
    const gr = "data-" + Kt("framerAppearId"),
      vr = (0, e.createContext)({});
    function yr(e) {
      return (
        e &&
        "object" === typeof e &&
        Object.prototype.hasOwnProperty.call(e, "current")
      );
    }
    const br = "undefined" !== typeof window ? e.useLayoutEffect : e.useEffect;
    function wr(t, n, r, a, i, o) {
      var s, l, u, c;
      const { visualElement: d } = (0, e.useContext)(Hn),
        f = (0, e.useContext)(In),
        h = (0, e.useContext)(ar),
        p = (0, e.useContext)(Un),
        m = p.reducedMotion,
        g = p.skipAnimations,
        v = (0, e.useRef)(null),
        y = (0, e.useRef)(!1);
      (a = a || f.renderer),
        !v.current &&
          a &&
          ((v.current = a(t, {
            visualState: n,
            parent: d,
            props: r,
            presenceContext: h,
            blockInitialAnimation: !!h && !1 === h.initial,
            reducedMotionConfig: m,
            skipAnimations: g,
            isSVG: o,
          })),
          y.current && v.current && (v.current.manuallyAnimateOnMount = !0));
      const b = v.current,
        w = (0, e.useContext)(vr);
      !b ||
        b.projection ||
        !i ||
        ("html" !== b.type && "svg" !== b.type) ||
        (function (e, t, n, r) {
          const {
            layoutId: a,
            layout: i,
            drag: o,
            dragConstraints: s,
            layoutScroll: l,
            layoutRoot: u,
            layoutCrossfade: c,
          } = t;
          (e.projection = new n(
            e.latestValues,
            t["data-framer-portal-id"] ? void 0 : xr(e.parent)
          )),
            e.projection.setOptions({
              layoutId: a,
              layout: i,
              alwaysMeasureLayout: Boolean(o) || (s && yr(s)),
              visualElement: e,
              animationType: "string" === typeof i ? i : "both",
              initialPromotionConfig: r,
              crossfade: c,
              layoutScroll: l,
              layoutRoot: u,
            });
        })(v.current, r, i, w);
      const x = (0, e.useRef)(!1);
      (0, e.useInsertionEffect)(() => {
        b && x.current && b.update(r, h);
      });
      const S = r[gr],
        k = (0, e.useRef)(
          Boolean(S) &&
            "undefined" !== typeof window &&
            !(
              null !== (s = (l = window).MotionHandoffIsComplete) &&
              void 0 !== s &&
              s.call(l, S)
            ) &&
            (null === (u = (c = window).MotionHasOptimisedAnimation) ||
            void 0 === u
              ? void 0
              : u.call(c, S))
        );
      return (
        br(() => {
          (y.current = !0),
            b &&
              ((x.current = !0),
              (window.MotionIsMounted = !0),
              b.updateFeatures(),
              b.scheduleRenderMicrotask(),
              k.current &&
                b.animationState &&
                b.animationState.animateChanges());
        }),
        (0, e.useEffect)(() => {
          b &&
            (!k.current &&
              b.animationState &&
              b.animationState.animateChanges(),
            k.current &&
              (queueMicrotask(() => {
                var e, t;
                null === (e = (t = window).MotionHandoffMarkAsComplete) ||
                  void 0 === e ||
                  e.call(t, S);
              }),
              (k.current = !1)),
            (b.enteringChildren = void 0));
        }),
        b
      );
    }
    function xr(e) {
      if (e)
        return !1 !== e.options.allowProjection ? e.projection : xr(e.parent);
    }
    function Sr(t) {
      var n, r;
      let { forwardMotionProps: a = !1, type: i } =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        o = arguments.length > 2 ? arguments[2] : void 0,
        s = arguments.length > 3 ? arguments[3] : void 0;
      o &&
        (function (e) {
          const t = hr();
          for (const n in e) t[n] = u(u({}, t[n]), e[n]);
          Yt(t);
        })(o);
      const l = i ? "svg" === i : On(t),
        c = l ? cr : ur;
      function d(n, r) {
        let i;
        const o = u(
            u(u({}, (0, e.useContext)(Un)), n),
            {},
            { layoutId: kr(n) }
          ),
          { isStatic: d } = o,
          f = Wn(n),
          h = c(n, d);
        if (!d && "undefined" !== typeof window) {
          !(function () {
            (0, e.useContext)(In).strict;
            0;
          })();
          const n = (function (e) {
            const t = hr(),
              { drag: n, layout: r } = t;
            if (!n && !r) return {};
            const a = u(u({}, n), r);
            return {
              MeasureLayout:
                (null !== n && void 0 !== n && n.isEnabled(e)) ||
                (null !== r && void 0 !== r && r.isEnabled(e))
                  ? a.MeasureLayout
                  : void 0,
              ProjectionNode: a.ProjectionNode,
            };
          })(o);
          (i = n.MeasureLayout),
            (f.visualElement = wr(t, h, o, s, n.ProjectionNode, l));
        }
        return (0, Vn.jsxs)(Hn.Provider, {
          value: f,
          children: [
            i && f.visualElement
              ? (0, Vn.jsx)(i, u({ visualElement: f.visualElement }, o))
              : null,
            nr(t, n, mr(h, f.visualElement, r), h, d, a, l),
          ],
        });
      }
      d.displayName = "motion.".concat(
        "string" === typeof t
          ? t
          : "create(".concat(
              null !==
                (n =
                  null !== (r = t.displayName) && void 0 !== r ? r : t.name) &&
                void 0 !== n
                ? n
                : "",
              ")"
            )
      );
      const f = (0, e.forwardRef)(d);
      return (f[pr] = t), f;
    }
    function kr(t) {
      let { layoutId: n } = t;
      const r = (0, e.useContext)(Bn).id;
      return r && void 0 !== n ? r + "-" + n : n;
    }
    function Er(e, t) {
      if ("undefined" === typeof Proxy) return Sr;
      const n = new Map(),
        r = (n, r) => Sr(n, r, e, t);
      return new Proxy((e, t) => r(e, t), {
        get: (a, i) =>
          "create" === i
            ? r
            : (n.has(i) || n.set(i, Sr(i, void 0, e, t)), n.get(i)),
      });
    }
    class Tr {
      constructor(e) {
        (this.isMounted = !1), (this.node = e);
      }
      update() {}
    }
    function Cr(e, t, n) {
      const r = e.getProps();
      return Ut(r, t, void 0 !== n ? n : r.custom, e);
    }
    const Pr = ["inherit"];
    function Fr(e, t) {
      if (null !== e && void 0 !== e && e.inherit && t) {
        const { inherit: n } = e,
          r = Qe(e, Pr);
        return u(u({}, t), r);
      }
      return e;
    }
    function Ar(e, t) {
      var n, r;
      const a =
        null !==
          (n =
            null !== (r = null === e || void 0 === e ? void 0 : e[t]) &&
            void 0 !== r
              ? r
              : null === e || void 0 === e
              ? void 0
              : e.default) && void 0 !== n
          ? n
          : e;
      return a !== e ? Fr(a, e) : a;
    }
    const Nr = (e) => Array.isArray(e),
      Dr = ["transitionEnd", "transition"];
    function Mr(e, t, n) {
      e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, At(n));
    }
    function Lr(e) {
      return Nr(e) ? e[e.length - 1] || 0 : e;
    }
    function jr(e, t) {
      const n = e.getValue("willChange");
      if (((r = n), Boolean(Q(r) && r.add))) return n.add(t);
      if (!n && Ae.WillChange) {
        const n = new Ae.WillChange("auto");
        e.addValue("willChange", n), n.add(t);
      }
      var r;
    }
    function zr(e) {
      return e.props[gr];
    }
    const Rr = (e, t) => (n) => t(e(n)),
      Or = function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return t.reduce(Rr);
      };
    function _r(e, t, n) {
      return (
        n < 0 && (n += 1),
        n > 1 && (n -= 1),
        n < 1 / 6
          ? e + 6 * (t - e) * n
          : n < 0.5
          ? t
          : n < 2 / 3
          ? e + (t - e) * (2 / 3 - n) * 6
          : e
      );
    }
    function Vr(e, t) {
      return (n) => (n > 0 ? t : e);
    }
    const Br = (e, t, n) => {
        const r = e * e,
          a = n * (t * t - r) + r;
        return a < 0 ? 0 : Math.sqrt(a);
      },
      Ir = [x, w, A];
    function Ur(e) {
      const t = ((n = e), Ir.find((e) => e.test(n)));
      var n;
      if (
        (re(
          Boolean(t),
          "'".concat(
            e,
            "' is not an animatable color. Use the equivalent color code instead."
          ),
          "color-not-animatable"
        ),
        !Boolean(t))
      )
        return !1;
      let r = t.parse(e);
      return (
        t === A &&
          (r = (function (e) {
            let { hue: t, saturation: n, lightness: r, alpha: a } = e;
            (t /= 360), (n /= 100), (r /= 100);
            let i = 0,
              o = 0,
              s = 0;
            if (n) {
              const e = r < 0.5 ? r * (1 + n) : r + n - r * n,
                a = 2 * r - e;
              (i = _r(a, e, t + 1 / 3)),
                (o = _r(a, e, t)),
                (s = _r(a, e, t - 1 / 3));
            } else i = o = s = r;
            return {
              red: Math.round(255 * i),
              green: Math.round(255 * o),
              blue: Math.round(255 * s),
              alpha: a,
            };
          })(r)),
        r
      );
    }
    const Hr = (e, t) => {
        const n = Ur(e),
          r = Ur(t);
        if (!n || !r) return Vr(e, t);
        const a = u({}, n);
        return (e) => (
          (a.red = Br(n.red, r.red, e)),
          (a.green = Br(n.green, r.green, e)),
          (a.blue = Br(n.blue, r.blue, e)),
          (a.alpha = dn(n.alpha, r.alpha, e)),
          w.transform(a)
        );
      },
      Wr = new Set(["none", "hidden"]);
    function $r(e, t) {
      return (n) => dn(e, t, n);
    }
    function Yr(e) {
      return "number" === typeof e
        ? $r
        : "string" === typeof e
        ? ue(e)
          ? Vr
          : N.test(e)
          ? Hr
          : Kr
        : Array.isArray(e)
        ? qr
        : "object" === typeof e
        ? N.test(e)
          ? Hr
          : Xr
        : Vr;
    }
    function qr(e, t) {
      const n = [...e],
        r = n.length,
        a = e.map((e, n) => Yr(e)(e, t[n]));
      return (e) => {
        for (let t = 0; t < r; t++) n[t] = a[t](e);
        return n;
      };
    }
    function Xr(e, t) {
      const n = u(u({}, e), t),
        r = {};
      for (const a in n)
        void 0 !== e[a] && void 0 !== t[a] && (r[a] = Yr(e[a])(e[a], t[a]));
      return (e) => {
        for (const t in r) n[t] = r[t](e);
        return n;
      };
    }
    const Kr = (e, t) => {
      const n = V.createTransformer(t),
        r = z(e),
        a = z(t);
      return r.indexes.var.length === a.indexes.var.length &&
        r.indexes.color.length === a.indexes.color.length &&
        r.indexes.number.length >= a.indexes.number.length
        ? (Wr.has(e) && !a.values.length) || (Wr.has(t) && !r.values.length)
          ? (function (e, t) {
              return Wr.has(e)
                ? (n) => (n <= 0 ? e : t)
                : (n) => (n >= 1 ? t : e);
            })(e, t)
          : Or(
              qr(
                (function (e, t) {
                  const n = [],
                    r = { color: 0, var: 0, number: 0 };
                  for (let i = 0; i < t.values.length; i++) {
                    var a;
                    const o = t.types[i],
                      s = e.indexes[o][r[o]],
                      l = null !== (a = e.values[s]) && void 0 !== a ? a : 0;
                    (n[i] = l), r[o]++;
                  }
                  return n;
                })(r, a),
                a.values
              ),
              n
            )
        : (re(
            !0,
            "Complex values '"
              .concat(e, "' and '")
              .concat(
                t,
                "' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition."
              ),
            "complex-values-different"
          ),
          Vr(e, t));
    };
    function Qr(e, t, n) {
      if (
        "number" === typeof e &&
        "number" === typeof t &&
        "number" === typeof n
      )
        return dn(e, t, n);
      return Yr(e)(e, t);
    }
    const Gr = (e) => {
        const t = (t) => {
          let { timestamp: n } = t;
          return e(n);
        };
        return {
          start: function () {
            let e =
              !(arguments.length > 0 && void 0 !== arguments[0]) ||
              arguments[0];
            return Le.update(t, e);
          },
          stop: () => je(t),
          now: () => (ze.isProcessing ? ze.timestamp : Tt.now()),
        };
      },
      Zr = 2e4;
    function Jr(e) {
      let t = 0;
      let n = e.next(t);
      for (; !n.done && t < Zr; ) (t += 50), (n = e.next(t));
      return t >= Zr ? 1 / 0 : t;
    }
    function ea(e, t, n) {
      const r = Math.max(t - 5, 0);
      return Ct(n - e(r), t - r);
    }
    const ta = {
        stiffness: 100,
        damping: 10,
        mass: 1,
        velocity: 0,
        duration: 800,
        bounce: 0.3,
        visualDuration: 0.3,
        restSpeed: { granular: 0.01, default: 2 },
        restDelta: { granular: 0.005, default: 0.5 },
        minDuration: 0.01,
        maxDuration: 10,
        minDamping: 0.05,
        maxDamping: 1,
      },
      na = 0.001;
    function ra(e) {
      let t,
        n,
        {
          duration: r = ta.duration,
          bounce: a = ta.bounce,
          velocity: i = ta.velocity,
          mass: o = ta.mass,
        } = e;
      re(
        r <= Ge(ta.maxDuration),
        "Spring duration must be 10 seconds or less",
        "spring-duration-limit"
      );
      let s = 1 - a;
      (s = c(ta.minDamping, ta.maxDamping, s)),
        (r = c(ta.minDuration, ta.maxDuration, Ze(r))),
        s < 1
          ? ((t = (e) => {
              const t = e * s,
                n = t * r,
                a = t - i,
                o = ia(e, s),
                l = Math.exp(-n);
              return na - (a / o) * l;
            }),
            (n = (e) => {
              const n = e * s * r,
                a = n * i + i,
                o = Math.pow(s, 2) * Math.pow(e, 2) * r,
                l = Math.exp(-n),
                u = ia(Math.pow(e, 2), s);
              return ((-t(e) + na > 0 ? -1 : 1) * ((a - o) * l)) / u;
            }))
          : ((t = (e) => Math.exp(-e * r) * ((e - i) * r + 1) - 0.001),
            (n = (e) => Math.exp(-e * r) * (r * r * (i - e))));
      const l = (function (e, t, n) {
        let r = n;
        for (let a = 1; a < aa; a++) r -= e(r) / t(r);
        return r;
      })(t, n, 5 / r);
      if (((r = Ge(r)), isNaN(l)))
        return { stiffness: ta.stiffness, damping: ta.damping, duration: r };
      {
        const e = Math.pow(l, 2) * o;
        return { stiffness: e, damping: 2 * s * Math.sqrt(o * e), duration: r };
      }
    }
    const aa = 12;
    function ia(e, t) {
      return e * Math.sqrt(1 - t * t);
    }
    const oa = ["duration", "bounce"],
      sa = ["stiffness", "damping", "mass"];
    function la(e, t) {
      return t.some((t) => void 0 !== e[t]);
    }
    function ua() {
      let e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : ta.visualDuration,
        t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : ta.bounce;
      const n =
        "object" !== typeof e
          ? { visualDuration: e, keyframes: [0, 1], bounce: t }
          : e;
      let { restSpeed: r, restDelta: a } = n;
      const i = n.keyframes[0],
        o = n.keyframes[n.keyframes.length - 1],
        s = { done: !1, value: i },
        {
          stiffness: l,
          damping: d,
          mass: f,
          duration: h,
          velocity: p,
          isResolvedFromDuration: m,
        } = (function (e) {
          let t = u(
            {
              velocity: ta.velocity,
              stiffness: ta.stiffness,
              damping: ta.damping,
              mass: ta.mass,
              isResolvedFromDuration: !1,
            },
            e
          );
          if (!la(e, sa) && la(e, oa))
            if (((t.velocity = 0), e.visualDuration)) {
              const n = e.visualDuration,
                r = (2 * Math.PI) / (1.2 * n),
                a = r * r,
                i = 2 * c(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(a);
              t = u(u({}, t), {}, { mass: ta.mass, stiffness: a, damping: i });
            } else {
              const n = ra(u(u({}, e), {}, { velocity: 0 }));
              (t = u(u(u({}, t), n), {}, { mass: ta.mass })),
                (t.isResolvedFromDuration = !0);
            }
          return t;
        })(u(u({}, n), {}, { velocity: -Ze(n.velocity || 0) })),
        g = p || 0,
        v = d / (2 * Math.sqrt(l * f)),
        y = o - i,
        b = Ze(Math.sqrt(l / f)),
        w = Math.abs(y) < 5;
      let x;
      if (
        (r || (r = w ? ta.restSpeed.granular : ta.restSpeed.default),
        a || (a = w ? ta.restDelta.granular : ta.restDelta.default),
        v < 1)
      ) {
        const e = ia(b, v);
        x = (t) => {
          const n = Math.exp(-v * b * t);
          return (
            o -
            n * (((g + v * b * y) / e) * Math.sin(e * t) + y * Math.cos(e * t))
          );
        };
      } else if (1 === v)
        x = (e) => o - Math.exp(-b * e) * (y + (g + b * y) * e);
      else {
        const e = b * Math.sqrt(v * v - 1);
        x = (t) => {
          const n = Math.exp(-v * b * t),
            r = Math.min(e * t, 300);
          return (
            o -
            (n * ((g + v * b * y) * Math.sinh(r) + e * y * Math.cosh(r))) / e
          );
        };
      }
      const S = {
        calculatedDuration: (m && h) || null,
        next: (e) => {
          const t = x(e);
          if (m) s.done = e >= h;
          else {
            let n = 0 === e ? g : 0;
            v < 1 && (n = 0 === e ? Ge(g) : ea(x, e, t));
            const i = Math.abs(n) <= r,
              l = Math.abs(o - t) <= a;
            s.done = i && l;
          }
          return (s.value = s.done ? o : t), s;
        },
        toString: () => {
          const e = Math.min(Jr(S), Zr),
            t = ft((t) => S.next(e * t).value, e, 30);
          return e + "ms " + t;
        },
        toTransition: () => {},
      };
      return S;
    }
    function ca(e) {
      let {
        keyframes: t,
        velocity: n = 0,
        power: r = 0.8,
        timeConstant: a = 325,
        bounceDamping: i = 10,
        bounceStiffness: o = 500,
        modifyTarget: s,
        min: l,
        max: u,
        restDelta: c = 0.5,
        restSpeed: d,
      } = e;
      const f = t[0],
        h = { done: !1, value: f },
        p = (e) =>
          void 0 === l
            ? u
            : void 0 === u || Math.abs(l - e) < Math.abs(u - e)
            ? l
            : u;
      let m = r * n;
      const g = f + m,
        v = void 0 === s ? g : s(g);
      v !== g && (m = v - f);
      const y = (e) => -m * Math.exp(-e / a),
        b = (e) => v + y(e),
        w = (e) => {
          const t = y(e),
            n = b(e);
          (h.done = Math.abs(t) <= c), (h.value = h.done ? v : n);
        };
      let x, S;
      const k = (e) => {
        var t;
        ((t = h.value), (void 0 !== l && t < l) || (void 0 !== u && t > u)) &&
          ((x = e),
          (S = ua({
            keyframes: [h.value, p(h.value)],
            velocity: ea(b, e, h.value),
            damping: i,
            stiffness: o,
            restDelta: c,
            restSpeed: d,
          })));
      };
      return (
        k(0),
        {
          calculatedDuration: null,
          next: (e) => {
            let t = !1;
            return (
              S || void 0 !== x || ((t = !0), w(e), k(e)),
              void 0 !== x && e >= x ? S.next(e - x) : (!t && w(e), h)
            );
          },
        }
      );
    }
    ua.applyToOptions = (e) => {
      const t = (function (e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
        const n = (arguments.length > 2 ? arguments[2] : void 0)(
            u(u({}, e), {}, { keyframes: [0, t] })
          ),
          r = Math.min(Jr(n), Zr);
        return {
          type: "keyframes",
          ease: (e) => n.next(r * e).value / t,
          duration: Ze(r),
        };
      })(e, 100, ua);
      return (
        (e.ease = t.ease),
        (e.duration = Ge(t.duration)),
        (e.type = "keyframes"),
        e
      );
    };
    const da = (e, t, n) =>
      (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e;
    function fa(e, t, n, r) {
      if (e === t && n === r) return Fe;
      const a = (t) =>
        (function (e, t, n, r, a) {
          let i,
            o,
            s = 0;
          do {
            (o = t + (n - t) / 2),
              (i = da(o, r, a) - e),
              i > 0 ? (n = o) : (t = o);
          } while (Math.abs(i) > 1e-7 && ++s < 12);
          return o;
        })(t, 0, 1, e, n);
      return (e) => (0 === e || 1 === e ? e : da(a(e), t, r));
    }
    const ha = fa(0.42, 0, 1, 1),
      pa = fa(0, 0, 0.58, 1),
      ma = fa(0.42, 0, 0.58, 1),
      ga = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
      va = (e) => (t) => 1 - e(1 - t),
      ya = fa(0.33, 1.53, 0.69, 0.99),
      ba = va(ya),
      wa = ga(ba),
      xa = (e) =>
        (e *= 2) < 1 ? 0.5 * ba(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
      Sa = (e) => 1 - Math.sin(Math.acos(e)),
      ka = va(Sa),
      Ea = ga(Sa),
      Ta = {
        linear: Fe,
        easeIn: ha,
        easeInOut: ma,
        easeOut: pa,
        circIn: Sa,
        circInOut: Ea,
        circOut: ka,
        backIn: ba,
        backInOut: wa,
        backOut: ya,
        anticipate: xa,
      },
      Ca = (e) => {
        if (ct(e)) {
          ae(
            4 === e.length,
            "Cubic bezier arrays must contain four numerical values.",
            "cubic-bezier-length"
          );
          const [t, n, r, a] = e;
          return fa(t, n, r, a);
        }
        return "string" === typeof e
          ? (ae(
              void 0 !== Ta[e],
              "Invalid easing type '".concat(e, "'"),
              "invalid-easing-type"
            ),
            Ta[e])
          : e;
      },
      Pa = (e, t, n) => {
        const r = t - e;
        return 0 === r ? 1 : (n - e) / r;
      };
    function Fa(e, t) {
      let {
        clamp: n = !0,
        ease: r,
        mixer: a,
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const i = e.length;
      if (
        (ae(
          i === t.length,
          "Both input and output ranges must be the same length",
          "range-length"
        ),
        1 === i)
      )
        return () => t[0];
      if (2 === i && t[0] === t[1]) return () => t[1];
      const o = e[0] === e[1];
      e[0] > e[i - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
      const s = (function (e, t, n) {
          const r = [],
            a = n || Ae.mix || Qr,
            i = e.length - 1;
          for (let o = 0; o < i; o++) {
            let n = a(e[o], e[o + 1]);
            if (t) {
              const e = Array.isArray(t) ? t[o] || Fe : t;
              n = Or(e, n);
            }
            r.push(n);
          }
          return r;
        })(t, r, a),
        l = s.length,
        u = (n) => {
          if (o && n < e[0]) return t[0];
          let r = 0;
          if (l > 1) for (; r < e.length - 2 && !(n < e[r + 1]); r++);
          const a = Pa(e[r], e[r + 1], n);
          return s[r](a);
        };
      return n ? (t) => u(c(e[0], e[i - 1], t)) : u;
    }
    function Aa(e) {
      const t = [0];
      return (
        (function (e, t) {
          const n = e[e.length - 1];
          for (let r = 1; r <= t; r++) {
            const a = Pa(0, t, r);
            e.push(dn(n, 1, a));
          }
        })(t, e.length - 1),
        t
      );
    }
    function Na(e) {
      let {
        duration: t = 300,
        keyframes: n,
        times: r,
        ease: a = "easeInOut",
      } = e;
      const i = ((e) => Array.isArray(e) && "number" !== typeof e[0])(a)
          ? a.map(Ca)
          : Ca(a),
        o = { done: !1, value: n[0] },
        s = (function (e, t) {
          return e.map((e) => e * t);
        })(r && r.length === n.length ? r : Aa(n), t),
        l = Fa(s, n, {
          ease: Array.isArray(i)
            ? i
            : ((u = n), (c = i), u.map(() => c || ma).splice(0, u.length - 1)),
        });
      var u, c;
      return {
        calculatedDuration: t,
        next: (e) => ((o.value = l(e)), (o.done = e >= t), o),
      };
    }
    const Da = { decay: ca, inertia: ca, tween: Na, keyframes: Na, spring: ua };
    function Ma(e) {
      "string" === typeof e.type && (e.type = Da[e.type]);
    }
    const La = (e) => e / 100;
    class ja extends lt {
      constructor(e) {
        super(),
          (this.state = "idle"),
          (this.startTime = null),
          (this.isStopped = !1),
          (this.currentTime = 0),
          (this.holdTime = null),
          (this.playbackSpeed = 1),
          (this.stop = () => {
            var e, t;
            const { motionValue: n } = this.options;
            n && n.updatedAt !== Tt.now() && this.tick(Tt.now()),
              (this.isStopped = !0),
              "idle" !== this.state &&
                (this.teardown(),
                null === (e = (t = this.options).onStop) ||
                  void 0 === e ||
                  e.call(t));
          }),
          ut.mainThread++,
          (this.options = e),
          this.initAnimation(),
          this.play(),
          !1 === e.autoplay && this.pause();
      }
      initAnimation() {
        const { options: e } = this;
        Ma(e);
        const {
          type: t = Na,
          repeat: n = 0,
          repeatDelay: r = 0,
          repeatType: a,
          velocity: i = 0,
        } = e;
        let { keyframes: o } = e;
        const s = t || Na;
        s !== Na &&
          "number" !== typeof o[0] &&
          ((this.mixKeyframes = Or(La, Qr(o[0], o[1]))), (o = [0, 100]));
        const l = s(u(u({}, e), {}, { keyframes: o }));
        "mirror" === a &&
          (this.mirroredGenerator = s(
            u(u({}, e), {}, { keyframes: [...o].reverse(), velocity: -i })
          )),
          null === l.calculatedDuration && (l.calculatedDuration = Jr(l));
        const { calculatedDuration: c } = l;
        (this.calculatedDuration = c),
          (this.resolvedDuration = c + r),
          (this.totalDuration = this.resolvedDuration * (n + 1) - r),
          (this.generator = l);
      }
      updateTime(e) {
        const t = Math.round(e - this.startTime) * this.playbackSpeed;
        null !== this.holdTime
          ? (this.currentTime = this.holdTime)
          : (this.currentTime = t);
      }
      tick(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const {
          generator: n,
          totalDuration: r,
          mixKeyframes: a,
          mirroredGenerator: i,
          resolvedDuration: o,
          calculatedDuration: s,
        } = this;
        if (null === this.startTime) return n.next(0);
        const {
          delay: l = 0,
          keyframes: u,
          repeat: d,
          repeatType: f,
          repeatDelay: h,
          type: p,
          onUpdate: m,
          finalKeyframe: g,
        } = this.options;
        this.speed > 0
          ? (this.startTime = Math.min(this.startTime, e))
          : this.speed < 0 &&
            (this.startTime = Math.min(e - r / this.speed, this.startTime)),
          t ? (this.currentTime = e) : this.updateTime(e);
        const v = this.currentTime - l * (this.playbackSpeed >= 0 ? 1 : -1),
          y = this.playbackSpeed >= 0 ? v < 0 : v > r;
        (this.currentTime = Math.max(v, 0)),
          "finished" === this.state &&
            null === this.holdTime &&
            (this.currentTime = r);
        let b = this.currentTime,
          w = n;
        if (d) {
          const e = Math.min(this.currentTime, r) / o;
          let t = Math.floor(e),
            n = e % 1;
          !n && e >= 1 && (n = 1), 1 === n && t--, (t = Math.min(t, d + 1));
          Boolean(t % 2) &&
            ("reverse" === f
              ? ((n = 1 - n), h && (n -= h / o))
              : "mirror" === f && (w = i)),
            (b = c(0, 1, n) * o);
        }
        const x = y ? { done: !1, value: u[0] } : w.next(b);
        a && (x.value = a(x.value));
        let { done: S } = x;
        y ||
          null === s ||
          (S =
            this.playbackSpeed >= 0
              ? this.currentTime >= r
              : this.currentTime <= 0);
        const k =
          null === this.holdTime &&
          ("finished" === this.state || ("running" === this.state && S));
        return (
          k && p !== ca && (x.value = st(u, this.options, g, this.speed)),
          m && m(x.value),
          k && this.finish(),
          x
        );
      }
      then(e, t) {
        return this.finished.then(e, t);
      }
      get duration() {
        return Ze(this.calculatedDuration);
      }
      get iterationDuration() {
        const { delay: e = 0 } = this.options || {};
        return this.duration + Ze(e);
      }
      get time() {
        return Ze(this.currentTime);
      }
      set time(e) {
        var t;
        (e = Ge(e)),
          (this.currentTime = e),
          null === this.startTime ||
          null !== this.holdTime ||
          0 === this.playbackSpeed
            ? (this.holdTime = e)
            : this.driver &&
              (this.startTime = this.driver.now() - e / this.playbackSpeed),
          null === (t = this.driver) || void 0 === t || t.start(!1);
      }
      get speed() {
        return this.playbackSpeed;
      }
      set speed(e) {
        this.updateTime(Tt.now());
        const t = this.playbackSpeed !== e;
        (this.playbackSpeed = e), t && (this.time = Ze(this.currentTime));
      }
      play() {
        var e, t;
        if (this.isStopped) return;
        const { driver: n = Gr, startTime: r } = this.options;
        this.driver || (this.driver = n((e) => this.tick(e))),
          null === (e = (t = this.options).onPlay) || void 0 === e || e.call(t);
        const a = this.driver.now();
        "finished" === this.state
          ? (this.updateFinished(), (this.startTime = a))
          : null !== this.holdTime
          ? (this.startTime = a - this.holdTime)
          : this.startTime ||
            (this.startTime = null !== r && void 0 !== r ? r : a),
          "finished" === this.state &&
            this.speed < 0 &&
            (this.startTime += this.calculatedDuration),
          (this.holdTime = null),
          (this.state = "running"),
          this.driver.start();
      }
      pause() {
        (this.state = "paused"),
          this.updateTime(Tt.now()),
          (this.holdTime = this.currentTime);
      }
      complete() {
        "running" !== this.state && this.play(),
          (this.state = "finished"),
          (this.holdTime = null);
      }
      finish() {
        var e, t;
        this.notifyFinished(),
          this.teardown(),
          (this.state = "finished"),
          null === (e = (t = this.options).onComplete) ||
            void 0 === e ||
            e.call(t);
      }
      cancel() {
        var e, t;
        (this.holdTime = null),
          (this.startTime = 0),
          this.tick(0),
          this.teardown(),
          null === (e = (t = this.options).onCancel) ||
            void 0 === e ||
            e.call(t);
      }
      teardown() {
        (this.state = "idle"),
          this.stopDriver(),
          (this.startTime = this.holdTime = null),
          ut.mainThread--;
      }
      stopDriver() {
        this.driver && (this.driver.stop(), (this.driver = void 0));
      }
      sample(e) {
        return (this.startTime = 0), this.tick(e, !0);
      }
      attachTimeline(e) {
        var t;
        return (
          this.options.allowFlatten &&
            ((this.options.type = "keyframes"),
            (this.options.ease = "linear"),
            this.initAnimation()),
          null === (t = this.driver) || void 0 === t || t.stop(),
          e.observe(this)
        );
      }
    }
    const za = { anticipate: xa, backInOut: wa, circInOut: Ea };
    function Ra(e) {
      "string" === typeof e.ease && e.ease in za && (e.ease = za[e.ease]);
    }
    const Oa = ["motionValue", "onUpdate", "onComplete", "element"];
    class _a extends bt {
      constructor(e) {
        Ra(e),
          Ma(e),
          super(e),
          void 0 !== e.startTime && (this.startTime = e.startTime),
          (this.options = e);
      }
      updateMotionValue(e) {
        const t = this.options,
          { motionValue: n, onUpdate: r, onComplete: a, element: i } = t,
          o = Qe(t, Oa);
        if (!n) return;
        if (void 0 !== e) return void n.set(e);
        const s = new ja(u(u({}, o), {}, { autoplay: !1 })),
          l = Math.max(10, Tt.now() - this.startTime),
          d = c(0, 10, l - 10);
        n.setWithVelocity(
          s.sample(Math.max(0, l - d)).value,
          s.sample(l).value,
          d
        ),
          s.stop();
      }
    }
    const Va = (e, t) =>
      "zIndex" !== t &&
      (!("number" !== typeof e && !Array.isArray(e)) ||
        !(
          "string" !== typeof e ||
          (!V.test(e) && "0" !== e) ||
          e.startsWith("url(")
        ));
    function Ba(e) {
      (e.duration = 0), (e.type = "keyframes");
    }
    const Ia = new Set(["opacity", "clipPath", "filter", "transform"]),
      Ua = nt(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
    const Ha = [
      "autoplay",
      "delay",
      "type",
      "repeat",
      "repeatDelay",
      "repeatType",
      "keyframes",
      "name",
      "motionValue",
      "element",
    ];
    class Wa extends lt {
      constructor(e) {
        var t;
        let {
            autoplay: n = !0,
            delay: r = 0,
            type: a = "keyframes",
            repeat: i = 0,
            repeatDelay: o = 0,
            repeatType: s = "loop",
            keyframes: l,
            name: c,
            motionValue: d,
            element: f,
          } = e,
          h = Qe(e, Ha);
        super(),
          (this.stop = () => {
            var e, t;
            this._animation &&
              (this._animation.stop(),
              null === (t = this.stopTimeline) || void 0 === t || t.call(this));
            null === (e = this.keyframeResolver) || void 0 === e || e.cancel();
          }),
          (this.createdAt = Tt.now());
        const p = u(
            {
              autoplay: n,
              delay: r,
              type: a,
              repeat: i,
              repeatDelay: o,
              repeatType: s,
              name: c,
              motionValue: d,
              element: f,
            },
            h
          ),
          m = (null === f || void 0 === f ? void 0 : f.KeyframeResolver) || He;
        (this.keyframeResolver = new m(
          l,
          (e, t, n) => this.onKeyframesResolved(e, t, p, !n),
          c,
          d,
          f
        )),
          null === (t = this.keyframeResolver) ||
            void 0 === t ||
            t.scheduleResolve();
      }
      onKeyframesResolved(e, t, n, r) {
        var a;
        this.keyframeResolver = void 0;
        const {
          name: i,
          type: o,
          velocity: s,
          delay: l,
          isHandoff: c,
          onUpdate: d,
        } = n;
        (this.resolvedAt = Tt.now()),
          (function (e, t, n, r) {
            const a = e[0];
            if (null === a) return !1;
            if ("display" === t || "visibility" === t) return !0;
            const i = e[e.length - 1],
              o = Va(a, t),
              s = Va(i, t);
            return (
              re(
                o === s,
                "You are trying to animate "
                  .concat(t, ' from "')
                  .concat(a, '" to "')
                  .concat(i, '". "')
                  .concat(o ? i : a, '" is not an animatable value.'),
                "value-not-animatable"
              ),
              !(!o || !s) &&
                ((function (e) {
                  const t = e[0];
                  if (1 === e.length) return !0;
                  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
                })(e) ||
                  (("spring" === n || vt(n)) && r))
            );
          })(e, i, o, s) ||
            ((!Ae.instantAnimations && l) ||
              null === d ||
              void 0 === d ||
              d(st(e, n, t)),
            (e[0] = e[e.length - 1]),
            Ba(n),
            (n.repeat = 0));
        const f = u(
            u(
              {
                startTime: r
                  ? this.resolvedAt && this.resolvedAt - this.createdAt > 40
                    ? this.resolvedAt
                    : this.createdAt
                  : void 0,
                finalKeyframe: t,
              },
              n
            ),
            {},
            { keyframes: e }
          ),
          h =
            !c &&
            (function (e) {
              var t;
              const {
                motionValue: n,
                name: r,
                repeatDelay: a,
                repeatType: i,
                damping: o,
                type: s,
              } = e;
              if (
                !(
                  (null === n ||
                  void 0 === n ||
                  null === (t = n.owner) ||
                  void 0 === t
                    ? void 0
                    : t.current) instanceof HTMLElement
                )
              )
                return !1;
              const { onUpdate: l, transformTemplate: u } = n.owner.getProps();
              return (
                Ua() &&
                r &&
                Ia.has(r) &&
                ("transform" !== r || !u) &&
                !l &&
                !a &&
                "mirror" !== i &&
                0 !== o &&
                "inertia" !== s
              );
            })(f),
          p =
            null === (a = f.motionValue) ||
            void 0 === a ||
            null === (a = a.owner) ||
            void 0 === a
              ? void 0
              : a.current,
          m = h ? new _a(u(u({}, f), {}, { element: p })) : new ja(f);
        m.finished
          .then(() => {
            this.notifyFinished();
          })
          .catch(Fe),
          this.pendingTimeline &&
            ((this.stopTimeline = m.attachTimeline(this.pendingTimeline)),
            (this.pendingTimeline = void 0)),
          (this._animation = m);
      }
      get finished() {
        return this._animation ? this.animation.finished : this._finished;
      }
      then(e, t) {
        return this.finished.finally(e).then(() => {});
      }
      get animation() {
        var e;
        this._animation ||
          (null === (e = this.keyframeResolver) || void 0 === e || e.resume(),
          (Be = !0),
          Ue(),
          Ie(),
          (Be = !1));
        return this._animation;
      }
      get duration() {
        return this.animation.duration;
      }
      get iterationDuration() {
        return this.animation.iterationDuration;
      }
      get time() {
        return this.animation.time;
      }
      set time(e) {
        this.animation.time = e;
      }
      get speed() {
        return this.animation.speed;
      }
      get state() {
        return this.animation.state;
      }
      set speed(e) {
        this.animation.speed = e;
      }
      get startTime() {
        return this.animation.startTime;
      }
      attachTimeline(e) {
        return (
          this._animation
            ? (this.stopTimeline = this.animation.attachTimeline(e))
            : (this.pendingTimeline = e),
          () => this.stop()
        );
      }
      play() {
        this.animation.play();
      }
      pause() {
        this.animation.pause();
      }
      complete() {
        this.animation.complete();
      }
      cancel() {
        var e;
        this._animation && this.animation.cancel(),
          null === (e = this.keyframeResolver) || void 0 === e || e.cancel();
      }
    }
    const $a = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
      Ya = { type: "keyframes", duration: 0.8 },
      qa = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
      Xa = (e, t) => {
        let { keyframes: n } = t;
        return n.length > 2
          ? Ya
          : a.has(e)
          ? e.startsWith("scale")
            ? {
                type: "spring",
                stiffness: 550,
                damping: 0 === n[1] ? 2 * Math.sqrt(550) : 30,
                restSpeed: 10,
              }
            : $a
          : qa;
      },
      Ka = (e) => null !== e;
    const Qa = [
      "when",
      "delay",
      "delayChildren",
      "staggerChildren",
      "staggerDirection",
      "repeat",
      "repeatType",
      "repeatDelay",
      "from",
      "elapsed",
    ];
    const Ga = function (e, t, n) {
        let r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          a = arguments.length > 4 ? arguments[4] : void 0,
          i = arguments.length > 5 ? arguments[5] : void 0;
        return (o) => {
          const s = Ar(r, e) || {},
            l = s.delay || r.delay || 0;
          let { elapsed: c = 0 } = r;
          c -= Ge(l);
          const d = u(
            u(
              {
                keyframes: Array.isArray(n) ? n : [null, n],
                ease: "easeOut",
                velocity: t.getVelocity(),
              },
              s
            ),
            {},
            {
              delay: -c,
              onUpdate: (e) => {
                t.set(e), s.onUpdate && s.onUpdate(e);
              },
              onComplete: () => {
                o(), s.onComplete && s.onComplete();
              },
              name: e,
              motionValue: t,
              element: i ? void 0 : a,
            }
          );
          (function (e) {
            let {
                when: t,
                delay: n,
                delayChildren: r,
                staggerChildren: a,
                staggerDirection: i,
                repeat: o,
                repeatType: s,
                repeatDelay: l,
                from: u,
                elapsed: c,
              } = e,
              d = Qe(e, Qa);
            return !!Object.keys(d).length;
          })(s) || Object.assign(d, Xa(e, d)),
            d.duration && (d.duration = Ge(d.duration)),
            d.repeatDelay && (d.repeatDelay = Ge(d.repeatDelay)),
            void 0 !== d.from && (d.keyframes[0] = d.from);
          let f = !1;
          if (
            ((!1 === d.type || (0 === d.duration && !d.repeatDelay)) &&
              (Ba(d), 0 === d.delay && (f = !0)),
            (Ae.instantAnimations ||
              Ae.skipAnimations ||
              (null !== a && void 0 !== a && a.shouldSkipAnimations)) &&
              ((f = !0), Ba(d), (d.delay = 0)),
            (d.allowFlatten = !s.type && !s.ease),
            f && !i && void 0 !== t.get())
          ) {
            const e = (function (e, t, n) {
              let { repeat: r, repeatType: a = "loop" } = t;
              const i = e.filter(Ka),
                o = r && "loop" !== a && r % 2 === 1 ? 0 : i.length - 1;
              return o && void 0 !== n ? n : i[o];
            })(d.keyframes, s);
            if (void 0 !== e)
              return void Le.update(() => {
                d.onUpdate(e), d.onComplete();
              });
          }
          return s.isSync ? new ja(d) : new Wa(d);
        };
      },
      Za = ["transition", "transitionEnd"];
    function Ja(e, t) {
      let { protectedKeys: n, needsAnimating: r } = e;
      const a = n.hasOwnProperty(t) && !0 !== r[t];
      return (r[t] = !1), a;
    }
    function ei(e, t) {
      var n;
      let {
          delay: r = 0,
          transitionOverride: a,
          type: i,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { transition: o, transitionEnd: s } = t,
        l = Qe(t, Za);
      const c = e.getDefaultTransition();
      o = o ? Fr(o, c) : c;
      const d = null === (n = o) || void 0 === n ? void 0 : n.reduceMotion;
      a && (o = a);
      const f = [],
        h = i && e.animationState && e.animationState.getState()[i];
      for (const m in l) {
        var p;
        const t = e.getValue(
            m,
            null !== (p = e.latestValues[m]) && void 0 !== p ? p : null
          ),
          n = l[m];
        if (void 0 === n || (h && Ja(h, m))) continue;
        const a = u({ delay: r }, Ar(o || {}, m)),
          i = t.get();
        if (
          void 0 !== i &&
          !t.isAnimating &&
          !Array.isArray(n) &&
          n === i &&
          !a.velocity
        )
          continue;
        let s = !1;
        if (window.MotionHandoffAnimation) {
          const t = zr(e);
          if (t) {
            const e = window.MotionHandoffAnimation(t, m, Le);
            null !== e && ((a.startTime = e), (s = !0));
          }
        }
        jr(e, m);
        const c = null !== d && void 0 !== d ? d : e.shouldReduceMotion;
        t.start(Ga(m, t, n, c && G.has(m) ? { type: !1 } : a, e, s));
        const g = t.animation;
        g && f.push(g);
      }
      if (s) {
        const t = () =>
          Le.update(() => {
            s &&
              (function (e, t) {
                let n = Cr(e, t) || {},
                  { transitionEnd: r = {}, transition: a = {} } = n,
                  i = Qe(n, Dr);
                i = u(u({}, i), r);
                for (const o in i) Mr(e, o, Lr(i[o]));
              })(e, s);
          });
        f.length ? Promise.all(f).then(t) : t();
      }
      return f;
    }
    function ti(e, t, n) {
      let r =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
      const i = Array.from(e)
          .sort((e, t) => e.sortNodePosition(t))
          .indexOf(t),
        o = e.size,
        s = (o - 1) * r;
      return "function" === typeof n ? n(i, o) : 1 === a ? i * r : s - i * r;
    }
    function ni(e, t) {
      var n;
      let r =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const a = Cr(
        e,
        t,
        "exit" === r.type
          ? null === (n = e.presenceContext) || void 0 === n
            ? void 0
            : n.custom
          : void 0
      );
      let { transition: i = e.getDefaultTransition() || {} } = a || {};
      r.transitionOverride && (i = r.transitionOverride);
      const o = a ? () => Promise.all(ei(e, a, r)) : () => Promise.resolve(),
        s =
          e.variantChildren && e.variantChildren.size
            ? function () {
                let n =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 0;
                const {
                  delayChildren: a = 0,
                  staggerChildren: o,
                  staggerDirection: s,
                } = i;
                return (function (e, t) {
                  let n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : 0,
                    r =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : 0,
                    a =
                      arguments.length > 4 && void 0 !== arguments[4]
                        ? arguments[4]
                        : 0,
                    i =
                      arguments.length > 5 && void 0 !== arguments[5]
                        ? arguments[5]
                        : 1,
                    o = arguments.length > 6 ? arguments[6] : void 0;
                  const s = [];
                  for (const l of e.variantChildren)
                    l.notify("AnimationStart", t),
                      s.push(
                        ni(
                          l,
                          t,
                          u(
                            u({}, o),
                            {},
                            {
                              delay:
                                n +
                                ("function" === typeof r ? 0 : r) +
                                ti(e.variantChildren, l, r, a, i),
                            }
                          )
                        ).then(() => l.notify("AnimationComplete", t))
                      );
                  return Promise.all(s);
                })(e, t, n, a, o, s, r);
              }
            : () => Promise.resolve(),
        { when: l } = i;
      if (l) {
        const [e, t] = "beforeChildren" === l ? [o, s] : [s, o];
        return e().then(() => t());
      }
      return Promise.all([o(), s(r.delay)]);
    }
    const ri = zt.length;
    function ai(e) {
      if (!e) return;
      if (!e.isControllingVariants) {
        const t = (e.parent && ai(e.parent)) || {};
        return void 0 !== e.props.initial && (t.initial = e.props.initial), t;
      }
      const t = {};
      for (let n = 0; n < ri; n++) {
        const r = zt[n],
          a = e.props[r];
        (Lt(a) || !1 === a) && (t[r] = a);
      }
      return t;
    }
    function ii(e, t) {
      if (!Array.isArray(t)) return !1;
      const n = t.length;
      if (n !== e.length) return !1;
      for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
      return !0;
    }
    const oi = ["transition", "transitionEnd"],
      si = [...jt].reverse(),
      li = jt.length;
    function ui(e) {
      return (t) =>
        Promise.all(
          t.map((t) => {
            let { animation: n, options: r } = t;
            return (function (e, t) {
              let n,
                r =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {};
              if ((e.notify("AnimationStart", t), Array.isArray(t))) {
                const a = t.map((t) => ni(e, t, r));
                n = Promise.all(a);
              } else if ("string" === typeof t) n = ni(e, t, r);
              else {
                const a = "function" === typeof t ? Cr(e, t, r.custom) : t;
                n = Promise.all(ei(e, a, r));
              }
              return n.then(() => {
                e.notify("AnimationComplete", t);
              });
            })(e, n, r);
          })
        );
    }
    function ci(e) {
      let t = ui(e),
        n = hi(),
        r = !0,
        a = !1;
      const i = (t) => (n, r) => {
        var a;
        const i = Cr(
          e,
          r,
          "exit" === t
            ? null === (a = e.presenceContext) || void 0 === a
              ? void 0
              : a.custom
            : void 0
        );
        if (i) {
          const { transition: e, transitionEnd: t } = i,
            r = Qe(i, oi);
          n = u(u(u({}, n), r), t);
        }
        return n;
      };
      function o(o) {
        const { props: s } = e,
          l = ai(e.parent) || {},
          c = [],
          d = new Set();
        let f = {},
          h = 1 / 0;
        for (let t = 0; t < li; t++) {
          const p = si[t],
            m = n[p],
            g = void 0 !== s[p] ? s[p] : l[p],
            v = Lt(g),
            y = p === o ? m.isActive : null;
          !1 === y && (h = t);
          let b = g === l[p] && g !== s[p] && v;
          if (
            (b && (r || a) && e.manuallyAnimateOnMount && (b = !1),
            (m.protectedKeys = u({}, f)),
            (!m.isActive && null === y) ||
              (!g && !m.prevProp) ||
              Mt(g) ||
              "boolean" === typeof g)
          )
            continue;
          if ("exit" === p && m.isActive && !0 !== y) {
            m.prevResolvedValues && (f = u(u({}, f), m.prevResolvedValues));
            continue;
          }
          const w = di(m.prevProp, g);
          let x = w || (p === o && m.isActive && !b && v) || (t > h && v),
            S = !1;
          const k = Array.isArray(g) ? g : [g];
          let E = k.reduce(i(p), {});
          !1 === y && (E = {});
          const { prevResolvedValues: T = {} } = m,
            C = u(u({}, T), E),
            P = (t) => {
              (x = !0),
                d.has(t) && ((S = !0), d.delete(t)),
                (m.needsAnimating[t] = !0);
              const n = e.getValue(t);
              n && (n.liveStyle = !1);
            };
          for (const e in C) {
            const t = E[e],
              n = T[e];
            if (f.hasOwnProperty(e)) continue;
            let r = !1;
            (r = Nr(t) && Nr(n) ? !ii(t, n) : t !== n),
              r
                ? void 0 !== t && null !== t
                  ? P(e)
                  : d.add(e)
                : void 0 !== t && d.has(e)
                ? P(e)
                : (m.protectedKeys[e] = !0);
          }
          (m.prevProp = g),
            (m.prevResolvedValues = E),
            m.isActive && (f = u(u({}, f), E)),
            (r || a) && e.blockInitialAnimation && (x = !1);
          const F = b && w;
          x &&
            (!F || S) &&
            c.push(
              ...k.map((t) => {
                const n = { type: p };
                if (
                  "string" === typeof t &&
                  (r || a) &&
                  !F &&
                  e.manuallyAnimateOnMount &&
                  e.parent
                ) {
                  const { parent: r } = e,
                    a = Cr(r, t);
                  if (r.enteringChildren && a) {
                    const { delayChildren: t } = a.transition || {};
                    n.delay = ti(r.enteringChildren, e, t);
                  }
                }
                return { animation: t, options: n };
              })
            );
        }
        if (d.size) {
          const t = {};
          if ("boolean" !== typeof s.initial) {
            const n = Cr(
              e,
              Array.isArray(s.initial) ? s.initial[0] : s.initial
            );
            n && n.transition && (t.transition = n.transition);
          }
          d.forEach((n) => {
            const r = e.getBaseTarget(n),
              a = e.getValue(n);
            a && (a.liveStyle = !0),
              (t[n] = null !== r && void 0 !== r ? r : null);
          }),
            c.push({ animation: t });
        }
        let p = Boolean(c.length);
        return (
          !r ||
            (!1 !== s.initial && s.initial !== s.animate) ||
            e.manuallyAnimateOnMount ||
            (p = !1),
          (r = !1),
          (a = !1),
          p ? t(c) : Promise.resolve()
        );
      }
      return {
        animateChanges: o,
        setActive: function (t, r) {
          var a;
          if (n[t].isActive === r) return Promise.resolve();
          null === (a = e.variantChildren) ||
            void 0 === a ||
            a.forEach((e) => {
              var n;
              return null === (n = e.animationState) || void 0 === n
                ? void 0
                : n.setActive(t, r);
            }),
            (n[t].isActive = r);
          const i = o(t);
          for (const e in n) n[e].protectedKeys = {};
          return i;
        },
        setAnimateFunction: function (n) {
          t = n(e);
        },
        getState: () => n,
        reset: () => {
          (n = hi()), (a = !0);
        },
      };
    }
    function di(e, t) {
      return "string" === typeof t ? t !== e : !!Array.isArray(t) && !ii(t, e);
    }
    function fi() {
      return {
        isActive:
          arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {},
      };
    }
    function hi() {
      return {
        animate: fi(!0),
        whileInView: fi(),
        whileHover: fi(),
        whileTap: fi(),
        whileDrag: fi(),
        whileFocus: fi(),
        exit: fi(),
      };
    }
    let pi = 0;
    const mi = {
        animation: {
          Feature: class extends Tr {
            constructor(e) {
              super(e), e.animationState || (e.animationState = ci(e));
            }
            updateAnimationControlsSubscription() {
              const { animate: e } = this.node.getProps();
              Mt(e) && (this.unmountControls = e.subscribe(this.node));
            }
            mount() {
              this.updateAnimationControlsSubscription();
            }
            update() {
              const { animate: e } = this.node.getProps(),
                { animate: t } = this.node.prevProps || {};
              e !== t && this.updateAnimationControlsSubscription();
            }
            unmount() {
              var e;
              this.node.animationState.reset(),
                null === (e = this.unmountControls) ||
                  void 0 === e ||
                  e.call(this);
            }
          },
        },
        exit: {
          Feature: class extends Tr {
            constructor() {
              super(...arguments), (this.id = pi++);
            }
            update() {
              if (!this.node.presenceContext) return;
              const { isPresent: e, onExitComplete: t } =
                  this.node.presenceContext,
                { isPresent: n } = this.node.prevPresenceContext || {};
              if (!this.node.animationState || e === n) return;
              const r = this.node.animationState.setActive("exit", !e);
              t &&
                !e &&
                r.then(() => {
                  t(this.id);
                });
            }
            mount() {
              const { register: e, onExitComplete: t } =
                this.node.presenceContext || {};
              t && t(this.id), e && (this.unmount = e(this.id));
            }
            unmount() {}
          },
        },
      },
      gi = { x: !1, y: !1 };
    function vi() {
      return gi.x || gi.y;
    }
    function yi(e) {
      return [e("x"), e("y")];
    }
    function bi(e) {
      return e.max - e.min;
    }
    function wi(e, t, n) {
      let r =
        arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0.5;
      (e.origin = r),
        (e.originPoint = dn(t.min, t.max, e.origin)),
        (e.scale = bi(n) / bi(t)),
        (e.translate = dn(n.min, n.max, e.origin) - e.originPoint),
        ((e.scale >= 0.9999 && e.scale <= 1.0001) || isNaN(e.scale)) &&
          (e.scale = 1),
        ((e.translate >= -0.01 && e.translate <= 0.01) || isNaN(e.translate)) &&
          (e.translate = 0);
    }
    function xi(e, t, n, r) {
      wi(e.x, t.x, n.x, r ? r.originX : void 0),
        wi(e.y, t.y, n.y, r ? r.originY : void 0);
    }
    function Si(e, t, n) {
      (e.min = n.min + t.min), (e.max = e.min + bi(t));
    }
    function ki(e, t, n) {
      (e.min = t.min - n.min), (e.max = e.min + bi(t));
    }
    function Ei(e, t, n) {
      ki(e.x, t.x, n.x), ki(e.y, t.y, n.y);
    }
    const Ti = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
    const Ci = new Set(["INPUT", "SELECT", "TEXTAREA"]);
    function Pi(e, t, n) {
      let r =
        arguments.length > 3 && void 0 !== arguments[3]
          ? arguments[3]
          : { passive: !0 };
      return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
    }
    function Fi(e) {
      return "object" === typeof e && null !== e;
    }
    function Ai(e) {
      return Fi(e) && "ownerSVGElement" in e;
    }
    function Ni(e, t, n) {
      if (null == e) return [];
      if (e instanceof EventTarget) return [e];
      if ("string" === typeof e) {
        var r;
        let a = document;
        t && (a = t.current);
        const i =
          null !== (r = null === n || void 0 === n ? void 0 : n[e]) &&
          void 0 !== r
            ? r
            : a.querySelectorAll(e);
        return i ? Array.from(i) : [];
      }
      return Array.from(e).filter((e) => null != e);
    }
    const Di = new WeakMap();
    let Mi;
    const Li = (e, t, n) => (r, a) =>
        a && a[0]
          ? a[0][e + "Size"]
          : Ai(r) && "getBBox" in r
          ? r.getBBox()[t]
          : r[n],
      ji = Li("inline", "width", "offsetWidth"),
      zi = Li("block", "height", "offsetHeight");
    function Ri(e) {
      var t;
      let { target: n, borderBoxSize: r } = e;
      null === (t = Di.get(n)) ||
        void 0 === t ||
        t.forEach((e) => {
          e(n, {
            get width() {
              return ji(n, r);
            },
            get height() {
              return zi(n, r);
            },
          });
        });
    }
    function Oi(e) {
      e.forEach(Ri);
    }
    function _i(e, t) {
      Mi ||
        ("undefined" !== typeof ResizeObserver &&
          (Mi = new ResizeObserver(Oi)));
      const n = Ni(e);
      return (
        n.forEach((e) => {
          var n;
          let r = Di.get(e);
          r || ((r = new Set()), Di.set(e, r)),
            r.add(t),
            null === (n = Mi) || void 0 === n || n.observe(e);
        }),
        () => {
          n.forEach((e) => {
            const n = Di.get(e);
            var r;
            (null === n || void 0 === n || n.delete(t),
            null !== n && void 0 !== n && n.size) ||
              null === (r = Mi) ||
              void 0 === r ||
              r.unobserve(e);
          });
        }
      );
    }
    const Vi = new Set();
    let Bi;
    function Ii(e) {
      return (
        Vi.add(e),
        Bi ||
          ((Bi = () => {
            const e = {
              get width() {
                return window.innerWidth;
              },
              get height() {
                return window.innerHeight;
              },
            };
            Vi.forEach((t) => t(e));
          }),
          window.addEventListener("resize", Bi)),
        () => {
          Vi.delete(e),
            Vi.size ||
              "function" !== typeof Bi ||
              (window.removeEventListener("resize", Bi), (Bi = void 0));
        }
      );
    }
    function Ui(e, t) {
      return "function" === typeof e ? Ii(e) : _i(e, t);
    }
    const Hi = (e) =>
      "mouse" === e.pointerType
        ? "number" !== typeof e.button || e.button <= 0
        : !1 !== e.isPrimary;
    function Wi(e) {
      return { point: { x: e.pageX, y: e.pageY } };
    }
    function $i(e, t, n, r) {
      return Pi(
        e,
        t,
        (
          (e) => (t) =>
            Hi(t) && e(t, Wi(t))
        )(n),
        r
      );
    }
    const Yi = (e) => {
        let { current: t } = e;
        return t ? t.ownerDocument.defaultView : null;
      },
      qi = (e, t) => Math.abs(e - t);
    const Xi = new Set(["auto", "scroll"]);
    class Ki {
      constructor(e, t) {
        let {
          transformPagePoint: n,
          contextWindow: r = window,
          dragSnapToOrigin: a = !1,
          distanceThreshold: i = 3,
          element: o,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (
          ((this.startEvent = null),
          (this.lastMoveEvent = null),
          (this.lastMoveEventInfo = null),
          (this.handlers = {}),
          (this.contextWindow = window),
          (this.scrollPositions = new Map()),
          (this.removeScrollListeners = null),
          (this.onElementScroll = (e) => {
            this.handleScroll(e.target);
          }),
          (this.onWindowScroll = () => {
            this.handleScroll(window);
          }),
          (this.updatePoint = () => {
            if (!this.lastMoveEvent || !this.lastMoveEventInfo) return;
            const e = Zi(this.lastMoveEventInfo, this.history),
              t = null !== this.startEvent,
              n =
                (function (e, t) {
                  const n = qi(e.x, t.x),
                    r = qi(e.y, t.y);
                  return Math.sqrt(n ** 2 + r ** 2);
                })(e.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
            if (!t && !n) return;
            const { point: r } = e,
              { timestamp: a } = ze;
            this.history.push(u(u({}, r), {}, { timestamp: a }));
            const { onStart: i, onMove: o } = this.handlers;
            t ||
              (i && i(this.lastMoveEvent, e),
              (this.startEvent = this.lastMoveEvent)),
              o && o(this.lastMoveEvent, e);
          }),
          (this.handlePointerMove = (e, t) => {
            (this.lastMoveEvent = e),
              (this.lastMoveEventInfo = Qi(t, this.transformPagePoint)),
              Le.update(this.updatePoint, !0);
          }),
          (this.handlePointerUp = (e, t) => {
            this.end();
            const {
              onEnd: n,
              onSessionEnd: r,
              resumeAnimation: a,
            } = this.handlers;
            if (
              ((!this.dragSnapToOrigin && this.startEvent) || (a && a()),
              !this.lastMoveEvent || !this.lastMoveEventInfo)
            )
              return;
            const i = Zi(
              "pointercancel" === e.type
                ? this.lastMoveEventInfo
                : Qi(t, this.transformPagePoint),
              this.history
            );
            this.startEvent && n && n(e, i), r && r(e, i);
          }),
          !Hi(e))
        )
          return;
        (this.dragSnapToOrigin = a),
          (this.handlers = t),
          (this.transformPagePoint = n),
          (this.distanceThreshold = i),
          (this.contextWindow = r || window);
        const s = Qi(Wi(e), this.transformPagePoint),
          { point: l } = s,
          { timestamp: c } = ze;
        this.history = [u(u({}, l), {}, { timestamp: c })];
        const { onSessionStart: d } = t;
        d && d(e, Zi(s, this.history)),
          (this.removeListeners = Or(
            $i(this.contextWindow, "pointermove", this.handlePointerMove),
            $i(this.contextWindow, "pointerup", this.handlePointerUp),
            $i(this.contextWindow, "pointercancel", this.handlePointerUp)
          )),
          o && this.startScrollTracking(o);
      }
      startScrollTracking(e) {
        let t = e.parentElement;
        for (; t; ) {
          const e = getComputedStyle(t);
          (Xi.has(e.overflowX) || Xi.has(e.overflowY)) &&
            this.scrollPositions.set(t, { x: t.scrollLeft, y: t.scrollTop }),
            (t = t.parentElement);
        }
        this.scrollPositions.set(window, {
          x: window.scrollX,
          y: window.scrollY,
        }),
          window.addEventListener("scroll", this.onElementScroll, {
            capture: !0,
          }),
          window.addEventListener("scroll", this.onWindowScroll),
          (this.removeScrollListeners = () => {
            window.removeEventListener("scroll", this.onElementScroll, {
              capture: !0,
            }),
              window.removeEventListener("scroll", this.onWindowScroll);
          });
      }
      handleScroll(e) {
        const t = this.scrollPositions.get(e);
        if (!t) return;
        const n = e === window,
          r = n
            ? { x: window.scrollX, y: window.scrollY }
            : { x: e.scrollLeft, y: e.scrollTop },
          a = r.x - t.x,
          i = r.y - t.y;
        (0 === a && 0 === i) ||
          (n
            ? this.lastMoveEventInfo &&
              ((this.lastMoveEventInfo.point.x += a),
              (this.lastMoveEventInfo.point.y += i))
            : this.history.length > 0 &&
              ((this.history[0].x -= a), (this.history[0].y -= i)),
          this.scrollPositions.set(e, r),
          Le.update(this.updatePoint, !0));
      }
      updateHandlers(e) {
        this.handlers = e;
      }
      end() {
        this.removeListeners && this.removeListeners(),
          this.removeScrollListeners && this.removeScrollListeners(),
          this.scrollPositions.clear(),
          je(this.updatePoint);
      }
    }
    function Qi(e, t) {
      return t ? { point: t(e.point) } : e;
    }
    function Gi(e, t) {
      return { x: e.x - t.x, y: e.y - t.y };
    }
    function Zi(e, t) {
      let { point: n } = e;
      return {
        point: n,
        delta: Gi(n, eo(t)),
        offset: Gi(n, Ji(t)),
        velocity: to(t, 0.1),
      };
    }
    function Ji(e) {
      return e[0];
    }
    function eo(e) {
      return e[e.length - 1];
    }
    function to(e, t) {
      if (e.length < 2) return { x: 0, y: 0 };
      let n = e.length - 1,
        r = null;
      const a = eo(e);
      for (; n >= 0 && ((r = e[n]), !(a.timestamp - r.timestamp > Ge(t))); )
        n--;
      if (!r) return { x: 0, y: 0 };
      r === e[0] &&
        e.length > 2 &&
        a.timestamp - r.timestamp > 2 * Ge(t) &&
        (r = e[1]);
      const i = Ze(a.timestamp - r.timestamp);
      if (0 === i) return { x: 0, y: 0 };
      const o = { x: (a.x - r.x) / i, y: (a.y - r.y) / i };
      return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
    }
    function no(e, t, n) {
      return {
        min: void 0 !== t ? e.min + t : void 0,
        max: void 0 !== n ? e.max + n - (e.max - e.min) : void 0,
      };
    }
    function ro(e, t) {
      let n = t.min - e.min,
        r = t.max - e.max;
      return (
        t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r }
      );
    }
    const ao = 0.35;
    function io(e, t, n) {
      return { min: oo(e, t), max: oo(e, n) };
    }
    function oo(e, t) {
      return "number" === typeof e ? e : e[t] || 0;
    }
    const so = new WeakMap();
    class lo {
      constructor(e) {
        (this.openDragLock = null),
          (this.isDragging = !1),
          (this.currentDirection = null),
          (this.originPoint = { x: 0, y: 0 }),
          (this.constraints = !1),
          (this.hasMutatedConstraints = !1),
          (this.elastic = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null),
          (this.visualElement = e);
      }
      start(e) {
        let { snapToCursor: t = !1, distanceThreshold: n } =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const { presenceContext: r } = this.visualElement;
        if (r && !1 === r.isPresent) return;
        const { dragSnapToOrigin: a } = this.getProps();
        this.panSession = new Ki(
          e,
          {
            onSessionStart: (e) => {
              t && this.snapToCursor(Wi(e).point), this.stopAnimation();
            },
            onStart: (e, t) => {
              const {
                drag: n,
                dragPropagation: r,
                onDragStart: a,
              } = this.getProps();
              if (
                n &&
                !r &&
                (this.openDragLock && this.openDragLock(),
                (this.openDragLock =
                  "x" === (i = n) || "y" === i
                    ? gi[i]
                      ? null
                      : ((gi[i] = !0),
                        () => {
                          gi[i] = !1;
                        })
                    : gi.x || gi.y
                    ? null
                    : ((gi.x = gi.y = !0),
                      () => {
                        gi.x = gi.y = !1;
                      })),
                !this.openDragLock)
              )
                return;
              var i;
              (this.latestPointerEvent = e),
                (this.latestPanInfo = t),
                (this.isDragging = !0),
                (this.currentDirection = null),
                this.resolveConstraints(),
                this.visualElement.projection &&
                  ((this.visualElement.projection.isAnimationBlocked = !0),
                  (this.visualElement.projection.target = void 0)),
                yi((e) => {
                  let t = this.getAxisMotionValue(e).get() || 0;
                  if (E.test(t)) {
                    const { projection: n } = this.visualElement;
                    if (n && n.layout) {
                      const r = n.layout.layoutBox[e];
                      if (r) {
                        t = bi(r) * (parseFloat(t) / 100);
                      }
                    }
                  }
                  this.originPoint[e] = t;
                }),
                a && Le.update(() => a(e, t), !1, !0),
                jr(this.visualElement, "transform");
              const { animationState: o } = this.visualElement;
              o && o.setActive("whileDrag", !0);
            },
            onMove: (e, t) => {
              (this.latestPointerEvent = e), (this.latestPanInfo = t);
              const {
                dragPropagation: n,
                dragDirectionLock: r,
                onDirectionLock: a,
                onDrag: i,
              } = this.getProps();
              if (!n && !this.openDragLock) return;
              const { offset: o } = t;
              if (r && null === this.currentDirection)
                return (
                  (this.currentDirection = (function (e) {
                    let t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 10,
                      n = null;
                    Math.abs(e.y) > t
                      ? (n = "y")
                      : Math.abs(e.x) > t && (n = "x");
                    return n;
                  })(o)),
                  void (
                    null !== this.currentDirection &&
                    a &&
                    a(this.currentDirection)
                  )
                );
              this.updateAxis("x", t.point, o),
                this.updateAxis("y", t.point, o),
                this.visualElement.render(),
                i && Le.update(() => i(e, t), !1, !0);
            },
            onSessionEnd: (e, t) => {
              (this.latestPointerEvent = e),
                (this.latestPanInfo = t),
                this.stop(e, t),
                (this.latestPointerEvent = null),
                (this.latestPanInfo = null);
            },
            resumeAnimation: () => {
              const { dragSnapToOrigin: e } = this.getProps();
              (e || this.constraints) && this.startAnimation({ x: 0, y: 0 });
            },
          },
          {
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: a,
            distanceThreshold: n,
            contextWindow: Yi(this.visualElement),
            element: this.visualElement.current,
          }
        );
      }
      stop(e, t) {
        const n = e || this.latestPointerEvent,
          r = t || this.latestPanInfo,
          a = this.isDragging;
        if ((this.cancel(), !a || !r || !n)) return;
        const { velocity: i } = r;
        this.startAnimation(i);
        const { onDragEnd: o } = this.getProps();
        o && Le.postRender(() => o(n, r));
      }
      cancel() {
        this.isDragging = !1;
        const { projection: e, animationState: t } = this.visualElement;
        e && (e.isAnimationBlocked = !1), this.endPanSession();
        const { dragPropagation: n } = this.getProps();
        !n &&
          this.openDragLock &&
          (this.openDragLock(), (this.openDragLock = null)),
          t && t.setActive("whileDrag", !1);
      }
      endPanSession() {
        this.panSession && this.panSession.end(), (this.panSession = void 0);
      }
      updateAxis(e, t, n) {
        const { drag: r } = this.getProps();
        if (!n || !co(e, r, this.currentDirection)) return;
        const a = this.getAxisMotionValue(e);
        let i = this.originPoint[e] + n[e];
        this.constraints &&
          this.constraints[e] &&
          (i = (function (e, t, n) {
            let { min: r, max: a } = t;
            return (
              void 0 !== r && e < r
                ? (e = n ? dn(r, e, n.min) : Math.max(e, r))
                : void 0 !== a &&
                  e > a &&
                  (e = n ? dn(a, e, n.max) : Math.min(e, a)),
              e
            );
          })(i, this.constraints[e], this.elastic[e])),
          a.set(i);
      }
      resolveConstraints() {
        var e;
        const { dragConstraints: t, dragElastic: n } = this.getProps(),
          r =
            this.visualElement.projection &&
            !this.visualElement.projection.layout
              ? this.visualElement.projection.measure(!1)
              : null === (e = this.visualElement.projection) || void 0 === e
              ? void 0
              : e.layout,
          a = this.constraints;
        t && yr(t)
          ? this.constraints ||
            (this.constraints = this.resolveRefConstraints())
          : (this.constraints =
              !(!t || !r) &&
              (function (e, t) {
                let { top: n, left: r, bottom: a, right: i } = t;
                return { x: no(e.x, r, i), y: no(e.y, n, a) };
              })(r.layoutBox, t)),
          (this.elastic = (function () {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : ao;
            return (
              !1 === e ? (e = 0) : !0 === e && (e = ao),
              { x: io(e, "left", "right"), y: io(e, "top", "bottom") }
            );
          })(n)),
          a !== this.constraints &&
            !yr(t) &&
            r &&
            this.constraints &&
            !this.hasMutatedConstraints &&
            yi((e) => {
              !1 !== this.constraints &&
                this.getAxisMotionValue(e) &&
                (this.constraints[e] = (function (e, t) {
                  const n = {};
                  return (
                    void 0 !== t.min && (n.min = t.min - e.min),
                    void 0 !== t.max && (n.max = t.max - e.min),
                    n
                  );
                })(r.layoutBox[e], this.constraints[e]));
            });
      }
      resolveRefConstraints() {
        const { dragConstraints: e, onMeasureDragConstraints: t } =
          this.getProps();
        if (!e || !yr(e)) return !1;
        const n = e.current;
        ae(
          null !== n,
          "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.",
          "drag-constraints-ref"
        );
        const { projection: r } = this.visualElement;
        if (!r || !r.layout) return !1;
        const a = (function (e, t, n) {
          const r = jn(e, n),
            { scroll: a } = t;
          return a && (Nn(r.x, a.offset.x), Nn(r.y, a.offset.y)), r;
        })(n, r.root, this.visualElement.getTransformPagePoint());
        let i = (function (e, t) {
          return { x: ro(e.x, t.x), y: ro(e.y, t.y) };
        })(r.layout.layoutBox, a);
        if (t) {
          const e = t(
            (function (e) {
              let { x: t, y: n } = e;
              return { top: n.min, right: t.max, bottom: n.max, left: t.min };
            })(i)
          );
          (this.hasMutatedConstraints = !!e), e && (i = yn(e));
        }
        return i;
      }
      startAnimation(e) {
        const {
            drag: t,
            dragMomentum: n,
            dragElastic: r,
            dragTransition: a,
            dragSnapToOrigin: i,
            onDragTransitionEnd: o,
          } = this.getProps(),
          s = this.constraints || {},
          l = yi((o) => {
            if (!co(o, t, this.currentDirection)) return;
            let l = (s && s[o]) || {};
            i && (l = { min: 0, max: 0 });
            const c = r ? 200 : 1e6,
              d = r ? 40 : 1e7,
              f = u(
                u(
                  {
                    type: "inertia",
                    velocity: n ? e[o] : 0,
                    bounceStiffness: c,
                    bounceDamping: d,
                    timeConstant: 750,
                    restDelta: 1,
                    restSpeed: 10,
                  },
                  a
                ),
                l
              );
            return this.startAxisValueAnimation(o, f);
          });
        return Promise.all(l).then(o);
      }
      startAxisValueAnimation(e, t) {
        const n = this.getAxisMotionValue(e);
        return (
          jr(this.visualElement, e),
          n.start(Ga(e, n, 0, t, this.visualElement, !1))
        );
      }
      stopAnimation() {
        yi((e) => this.getAxisMotionValue(e).stop());
      }
      getAxisMotionValue(e) {
        const t = "_drag".concat(e.toUpperCase()),
          n = this.visualElement.getProps(),
          r = n[t];
        return (
          r ||
          this.visualElement.getValue(
            e,
            (n.initial ? n.initial[e] : void 0) || 0
          )
        );
      }
      snapToCursor(e) {
        yi((t) => {
          const { drag: n } = this.getProps();
          if (!co(t, n, this.currentDirection)) return;
          const { projection: r } = this.visualElement,
            a = this.getAxisMotionValue(t);
          if (r && r.layout) {
            const { min: n, max: i } = r.layout.layoutBox[t],
              o = a.get() || 0;
            a.set(e[t] - dn(n, i, 0.5) + o);
          }
        });
      }
      scalePositionWithinConstraints() {
        if (!this.visualElement.current) return;
        const { drag: e, dragConstraints: t } = this.getProps(),
          { projection: n } = this.visualElement;
        if (!yr(t) || !n || !this.constraints) return;
        this.stopAnimation();
        const r = { x: 0, y: 0 };
        yi((e) => {
          const t = this.getAxisMotionValue(e);
          if (t && !1 !== this.constraints) {
            const n = t.get();
            r[e] = (function (e, t) {
              let n = 0.5;
              const r = bi(e),
                a = bi(t);
              return (
                a > r
                  ? (n = Pa(t.min, t.max - r, e.min))
                  : r > a && (n = Pa(e.min, e.max - a, t.min)),
                c(0, 1, n)
              );
            })({ min: n, max: n }, this.constraints[e]);
          }
        });
        const { transformTemplate: a } = this.visualElement.getProps();
        (this.visualElement.current.style.transform = a ? a({}, "") : "none"),
          n.root && n.root.updateScroll(),
          n.updateLayout(),
          (this.constraints = !1),
          this.resolveConstraints(),
          yi((t) => {
            if (!co(t, e, null)) return;
            const n = this.getAxisMotionValue(t),
              { min: a, max: i } = this.constraints[t];
            n.set(dn(a, i, r[t]));
          }),
          this.visualElement.render();
      }
      addListeners() {
        if (!this.visualElement.current) return;
        so.set(this.visualElement, this);
        const e = this.visualElement.current,
          t = $i(e, "pointerdown", (t) => {
            const { drag: n, dragListener: r = !0 } = this.getProps(),
              a = t.target,
              i =
                a !== e &&
                (function (e) {
                  return Ci.has(e.tagName) || !0 === e.isContentEditable;
                })(a);
            n && r && !i && this.start(t);
          });
        let n;
        const r = () => {
            const { dragConstraints: t } = this.getProps();
            yr(t) &&
              t.current &&
              ((this.constraints = this.resolveRefConstraints()),
              n ||
                (n = (function (e, t, n) {
                  const r = Ui(e, uo(n)),
                    a = Ui(t, uo(n));
                  return () => {
                    r(), a();
                  };
                })(e, t.current, () => this.scalePositionWithinConstraints())));
          },
          { projection: a } = this.visualElement,
          i = a.addEventListener("measure", r);
        a && !a.layout && (a.root && a.root.updateScroll(), a.updateLayout()),
          Le.read(r);
        const o = Pi(window, "resize", () =>
            this.scalePositionWithinConstraints()
          ),
          s = a.addEventListener("didUpdate", (e) => {
            let { delta: t, hasLayoutChanged: n } = e;
            this.isDragging &&
              n &&
              (yi((e) => {
                const n = this.getAxisMotionValue(e);
                n &&
                  ((this.originPoint[e] += t[e].translate),
                  n.set(n.get() + t[e].translate));
              }),
              this.visualElement.render());
          });
        return () => {
          o(), t(), i(), s && s(), n && n();
        };
      }
      getProps() {
        const e = this.visualElement.getProps(),
          {
            drag: t = !1,
            dragDirectionLock: n = !1,
            dragPropagation: r = !1,
            dragConstraints: a = !1,
            dragElastic: i = ao,
            dragMomentum: o = !0,
          } = e;
        return u(
          u({}, e),
          {},
          {
            drag: t,
            dragDirectionLock: n,
            dragPropagation: r,
            dragConstraints: a,
            dragElastic: i,
            dragMomentum: o,
          }
        );
      }
    }
    function uo(e) {
      let t = !0;
      return () => {
        t ? (t = !1) : e();
      };
    }
    function co(e, t, n) {
      return (!0 === t || t === e) && (null === n || n === e);
    }
    const fo = (e) => (t, n) => {
      e && Le.update(() => e(t, n), !1, !0);
    };
    const ho = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
    function po() {
      let t =
        !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      const n = (0, e.useContext)(ar);
      if (null === n) return [!0, null];
      const { isPresent: r, onExitComplete: a, register: i } = n,
        o = (0, e.useId)();
      (0, e.useEffect)(() => {
        if (t) return i(o);
      }, [t]);
      const s = (0, e.useCallback)(() => t && a && a(o), [o, a, t]);
      return !r && a ? [!1, s] : [!0];
    }
    let mo = !1;
    class go extends e.Component {
      componentDidMount() {
        const {
            visualElement: e,
            layoutGroup: t,
            switchLayoutGroup: n,
            layoutId: r,
          } = this.props,
          { projection: a } = e;
        a &&
          (t.group && t.group.add(a),
          n && n.register && r && n.register(a),
          mo && a.root.didUpdate(),
          a.addEventListener("animationComplete", () => {
            this.safeToRemove();
          }),
          a.setOptions(
            u(
              u({}, a.options),
              {},
              {
                layoutDependency: this.props.layoutDependency,
                onExitComplete: () => this.safeToRemove(),
              }
            )
          )),
          (ho.hasEverUpdated = !0);
      }
      getSnapshotBeforeUpdate(e) {
        const {
            layoutDependency: t,
            visualElement: n,
            drag: r,
            isPresent: a,
          } = this.props,
          { projection: i } = n;
        return i
          ? ((i.isPresent = a),
            e.layoutDependency !== t &&
              i.setOptions(u(u({}, i.options), {}, { layoutDependency: t })),
            (mo = !0),
            r || e.layoutDependency !== t || void 0 === t || e.isPresent !== a
              ? i.willUpdate()
              : this.safeToRemove(),
            e.isPresent !== a &&
              (a
                ? i.promote()
                : i.relegate() ||
                  Le.postRender(() => {
                    const e = i.getStack();
                    (e && e.members.length) || this.safeToRemove();
                  })),
            null)
          : null;
      }
      componentDidUpdate() {
        const { projection: e } = this.props.visualElement;
        e &&
          (e.root.didUpdate(),
          xt.postRender(() => {
            !e.currentAnimation && e.isLead() && this.safeToRemove();
          }));
      }
      componentWillUnmount() {
        const {
            visualElement: e,
            layoutGroup: t,
            switchLayoutGroup: n,
          } = this.props,
          { projection: r } = e;
        (mo = !0),
          r &&
            (r.scheduleCheckAfterUnmount(),
            t && t.group && t.group.remove(r),
            n && n.deregister && n.deregister(r));
      }
      safeToRemove() {
        const { safeToRemove: e } = this.props;
        e && e();
      }
      render() {
        return null;
      }
    }
    function vo(t) {
      const [n, r] = po(),
        a = (0, e.useContext)(Bn);
      return (0, Vn.jsx)(
        go,
        u(
          u({}, t),
          {},
          {
            layoutGroup: a,
            switchLayoutGroup: (0, e.useContext)(vr),
            isPresent: n,
            safeToRemove: r,
          }
        )
      );
    }
    function yo(e, t) {
      const n = Tt.now(),
        r = (a) => {
          let { timestamp: i } = a;
          const o = i - n;
          o >= t && (je(r), e(o - t));
        };
      return Le.setup(r, !0), () => je(r);
    }
    const bo = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
      wo = bo.length,
      xo = (e) => ("string" === typeof e ? parseFloat(e) : e),
      So = (e) => "number" === typeof e || T.test(e);
    function ko(e, t) {
      return void 0 !== e[t] ? e[t] : e.borderRadius;
    }
    const Eo = Co(0, 0.5, ka),
      To = Co(0.5, 0.95, Fe);
    function Co(e, t, n) {
      return (r) => (r < e ? 0 : r > t ? 1 : n(Pa(e, t, r)));
    }
    function Po(e, t) {
      (e.min = t.min), (e.max = t.max);
    }
    function Fo(e, t) {
      Po(e.x, t.x), Po(e.y, t.y);
    }
    function Ao(e, t) {
      (e.translate = t.translate),
        (e.scale = t.scale),
        (e.originPoint = t.originPoint),
        (e.origin = t.origin);
    }
    function No(e, t, n, r, a) {
      return (
        (e = En((e -= t), 1 / n, r)), void 0 !== a && (e = En(e, 1 / a, r)), e
      );
    }
    function Do(e, t, n, r, a) {
      let [i, o, s] = n;
      !(function (e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          r =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : 0.5,
          a = arguments.length > 4 ? arguments[4] : void 0,
          i =
            arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : e,
          o =
            arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : e;
        E.test(t) &&
          ((t = parseFloat(t)), (t = dn(o.min, o.max, t / 100) - o.min));
        if ("number" !== typeof t) return;
        let s = dn(i.min, i.max, r);
        e === i && (s -= t),
          (e.min = No(e.min, t, n, s, a)),
          (e.max = No(e.max, t, n, s, a));
      })(e, t[i], t[o], t[s], t.scale, r, a);
    }
    const Mo = ["x", "scaleX", "originX"],
      Lo = ["y", "scaleY", "originY"];
    function jo(e, t, n, r) {
      Do(e.x, t, Mo, n ? n.x : void 0, r ? r.x : void 0),
        Do(e.y, t, Lo, n ? n.y : void 0, r ? r.y : void 0);
    }
    function zo(e) {
      return 0 === e.translate && 1 === e.scale;
    }
    function Ro(e) {
      return zo(e.x) && zo(e.y);
    }
    function Oo(e, t) {
      return e.min === t.min && e.max === t.max;
    }
    function _o(e, t) {
      return (
        Math.round(e.min) === Math.round(t.min) &&
        Math.round(e.max) === Math.round(t.max)
      );
    }
    function Vo(e, t) {
      return _o(e.x, t.x) && _o(e.y, t.y);
    }
    function Bo(e) {
      return bi(e.x) / bi(e.y);
    }
    function Io(e, t) {
      return (
        e.translate === t.translate &&
        e.scale === t.scale &&
        e.originPoint === t.originPoint
      );
    }
    class Uo {
      constructor() {
        this.members = [];
      }
      add(e) {
        Je(this.members, e);
        for (let t = this.members.length - 1; t >= 0; t--) {
          const n = this.members[t];
          if (n === e || n === this.lead || n === this.prevLead) continue;
          const r = n.instance;
          (r && !1 !== r.isConnected) ||
            n.snapshot ||
            (et(this.members, n), n.unmount());
        }
        e.scheduleRender();
      }
      remove(e) {
        if (
          (et(this.members, e),
          e === this.prevLead && (this.prevLead = void 0),
          e === this.lead)
        ) {
          const e = this.members[this.members.length - 1];
          e && this.promote(e);
        }
      }
      relegate(e) {
        for (let n = this.members.indexOf(e) - 1; n >= 0; n--) {
          var t;
          const e = this.members[n];
          if (
            !1 !== e.isPresent &&
            !1 !==
              (null === (t = e.instance) || void 0 === t
                ? void 0
                : t.isConnected)
          )
            return this.promote(e), !0;
        }
        return !1;
      }
      promote(e, t) {
        const n = this.lead;
        if (e !== n && ((this.prevLead = n), (this.lead = e), e.show(), n)) {
          n.updateSnapshot(), e.scheduleRender();
          const { layoutDependency: a } = n.options,
            { layoutDependency: i } = e.options;
          var r;
          if (void 0 === a || a !== i)
            (e.resumeFrom = n),
              t && (n.preserveOpacity = !0),
              n.snapshot &&
                ((e.snapshot = n.snapshot),
                (e.snapshot.latestValues =
                  n.animationValues || n.latestValues)),
              null !== (r = e.root) &&
                void 0 !== r &&
                r.isUpdating &&
                (e.isLayoutDirty = !0);
          !1 === e.options.crossfade && n.hide();
        }
      }
      exitAnimationComplete() {
        this.members.forEach((e) => {
          var t, n, r, a, i;
          null === (t = (n = e.options).onExitComplete) ||
            void 0 === t ||
            t.call(n),
            null === (r = e.resumingFrom) ||
              void 0 === r ||
              null === (a = (i = r.options).onExitComplete) ||
              void 0 === a ||
              a.call(i);
        });
      }
      scheduleRender() {
        this.members.forEach((e) => e.instance && e.scheduleRender(!1));
      }
      removeLeadSnapshot() {
        var e;
        null !== (e = this.lead) &&
          void 0 !== e &&
          e.snapshot &&
          (this.lead.snapshot = void 0);
      }
    }
    const Ho = (e, t) => e.depth - t.depth;
    class Wo {
      constructor() {
        (this.children = []), (this.isDirty = !1);
      }
      add(e) {
        Je(this.children, e), (this.isDirty = !0);
      }
      remove(e) {
        et(this.children, e), (this.isDirty = !0);
      }
      forEach(e) {
        this.isDirty && this.children.sort(Ho),
          (this.isDirty = !1),
          this.children.forEach(e);
      }
    }
    const $o = {
        nodes: 0,
        calculatedTargetDeltas: 0,
        calculatedProjections: 0,
      },
      Yo = ["", "X", "Y", "Z"];
    let qo = 0;
    function Xo(e, t, n, r) {
      const { latestValues: a } = t;
      a[e] && ((n[e] = a[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
    }
    function Ko(e) {
      if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
      const { visualElement: t } = e.options;
      if (!t) return;
      const n = zr(t);
      if (window.MotionHasOptimisedAnimation(n, "transform")) {
        const { layout: t, layoutId: r } = e.options;
        window.MotionCancelOptimisedAnimation(n, "transform", Le, !(t || r));
      }
      const { parent: r } = e;
      r && !r.hasCheckedOptimisedAppear && Ko(r);
    }
    function Qo(e) {
      let {
        attachResizeListener: t,
        defaultParent: n,
        measureScroll: r,
        checkIsScrollRoot: a,
        resetTransform: i,
      } = e;
      return class {
        constructor() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null === n || void 0 === n
                ? void 0
                : n();
          (this.id = qo++),
            (this.animationId = 0),
            (this.animationCommitId = 0),
            (this.children = new Set()),
            (this.options = {}),
            (this.isTreeAnimating = !1),
            (this.isAnimationBlocked = !1),
            (this.isLayoutDirty = !1),
            (this.isProjectionDirty = !1),
            (this.isSharedProjectionDirty = !1),
            (this.isTransformDirty = !1),
            (this.updateManuallyBlocked = !1),
            (this.updateBlockedByResize = !1),
            (this.isUpdating = !1),
            (this.isSVG = !1),
            (this.needsReset = !1),
            (this.shouldResetTransform = !1),
            (this.hasCheckedOptimisedAppear = !1),
            (this.treeScale = { x: 1, y: 1 }),
            (this.eventHandlers = new Map()),
            (this.hasTreeAnimated = !1),
            (this.layoutVersion = 0),
            (this.updateScheduled = !1),
            (this.scheduleUpdate = () => this.update()),
            (this.projectionUpdateScheduled = !1),
            (this.checkUpdateFailed = () => {
              this.isUpdating &&
                ((this.isUpdating = !1), this.clearAllSnapshots());
            }),
            (this.updateProjection = () => {
              (this.projectionUpdateScheduled = !1),
                De.value &&
                  ($o.nodes =
                    $o.calculatedTargetDeltas =
                    $o.calculatedProjections =
                      0),
                this.nodes.forEach(Jo),
                this.nodes.forEach(os),
                this.nodes.forEach(ss),
                this.nodes.forEach(es),
                De.addProjectionMetrics && De.addProjectionMetrics($o);
            }),
            (this.resolvedRelativeTargetAt = 0),
            (this.linkedParentVersion = 0),
            (this.hasProjected = !1),
            (this.isVisible = !0),
            (this.animationProgress = 0),
            (this.sharedNodes = new Map()),
            (this.latestValues = e),
            (this.root = t ? t.root || t : this),
            (this.path = t ? [...t.path, t] : []),
            (this.parent = t),
            (this.depth = t ? t.depth + 1 : 0);
          for (let n = 0; n < this.path.length; n++)
            this.path[n].shouldResetTransform = !0;
          this.root === this && (this.nodes = new Wo());
        }
        addEventListener(e, t) {
          return (
            this.eventHandlers.has(e) || this.eventHandlers.set(e, new tt()),
            this.eventHandlers.get(e).add(t)
          );
        }
        notifyListeners(e) {
          const t = this.eventHandlers.get(e);
          for (
            var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1;
            a < n;
            a++
          )
            r[a - 1] = arguments[a];
          t && t.notify(...r);
        }
        hasListeners(e) {
          return this.eventHandlers.has(e);
        }
        mount(e) {
          if (this.instance) return;
          var n;
          (this.isSVG = Ai(e) && !(Ai((n = e)) && "svg" === n.tagName)),
            (this.instance = e);
          const { layoutId: r, layout: a, visualElement: i } = this.options;
          if (
            (i && !i.current && i.mount(e),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            this.root.hasTreeAnimated && (a || r) && (this.isLayoutDirty = !0),
            t)
          ) {
            let n,
              r = 0;
            const a = () => (this.root.updateBlockedByResize = !1);
            Le.read(() => {
              r = window.innerWidth;
            }),
              t(e, () => {
                const e = window.innerWidth;
                e !== r &&
                  ((r = e),
                  (this.root.updateBlockedByResize = !0),
                  n && n(),
                  (n = yo(a, 250)),
                  ho.hasAnimatedSinceResize &&
                    ((ho.hasAnimatedSinceResize = !1), this.nodes.forEach(is)));
              });
          }
          r && this.root.registerSharedNode(r, this),
            !1 !== this.options.animate &&
              i &&
              (r || a) &&
              this.addEventListener("didUpdate", (e) => {
                let {
                  delta: t,
                  hasLayoutChanged: n,
                  hasRelativeLayoutChanged: r,
                  layout: a,
                } = e;
                if (this.isTreeAnimationBlocked())
                  return (
                    (this.target = void 0), void (this.relativeTarget = void 0)
                  );
                const o =
                    this.options.transition || i.getDefaultTransition() || hs,
                  { onLayoutAnimationStart: s, onLayoutAnimationComplete: l } =
                    i.getProps(),
                  c = !this.targetLayout || !Vo(this.targetLayout, a),
                  d = !n && r;
                if (
                  this.options.layoutRoot ||
                  this.resumeFrom ||
                  d ||
                  (n && (c || !this.currentAnimation))
                ) {
                  this.resumeFrom &&
                    ((this.resumingFrom = this.resumeFrom),
                    (this.resumingFrom.resumingFrom = void 0));
                  const e = u(
                    u({}, Ar(o, "layout")),
                    {},
                    { onPlay: s, onComplete: l }
                  );
                  (i.shouldReduceMotion || this.options.layoutRoot) &&
                    ((e.delay = 0), (e.type = !1)),
                    this.startAnimation(e),
                    this.setAnimationOrigin(t, d);
                } else
                  n || is(this),
                    this.isLead() &&
                      this.options.onExitComplete &&
                      this.options.onExitComplete();
                this.targetLayout = a;
              });
        }
        unmount() {
          this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
          const e = this.getStack();
          e && e.remove(this),
            this.parent && this.parent.children.delete(this),
            (this.instance = void 0),
            this.eventHandlers.clear(),
            je(this.updateProjection);
        }
        blockUpdate() {
          this.updateManuallyBlocked = !0;
        }
        unblockUpdate() {
          this.updateManuallyBlocked = !1;
        }
        isUpdateBlocked() {
          return this.updateManuallyBlocked || this.updateBlockedByResize;
        }
        isTreeAnimationBlocked() {
          return (
            this.isAnimationBlocked ||
            (this.parent && this.parent.isTreeAnimationBlocked()) ||
            !1
          );
        }
        startUpdate() {
          this.isUpdateBlocked() ||
            ((this.isUpdating = !0),
            this.nodes && this.nodes.forEach(ls),
            this.animationId++);
        }
        getTransformTemplate() {
          const { visualElement: e } = this.options;
          return e && e.getProps().transformTemplate;
        }
        willUpdate() {
          let e =
            !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked()))
            return void (
              this.options.onExitComplete && this.options.onExitComplete()
            );
          if (
            (window.MotionCancelOptimisedAnimation &&
              !this.hasCheckedOptimisedAppear &&
              Ko(this),
            !this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
          )
            return;
          this.isLayoutDirty = !0;
          for (let a = 0; a < this.path.length; a++) {
            const e = this.path[a];
            (e.shouldResetTransform = !0),
              e.updateScroll("snapshot"),
              e.options.layoutRoot && e.willUpdate(!1);
          }
          const { layoutId: t, layout: n } = this.options;
          if (void 0 === t && !n) return;
          const r = this.getTransformTemplate();
          (this.prevTransformTemplateValue = r
            ? r(this.latestValues, "")
            : void 0),
            this.updateSnapshot(),
            e && this.notifyListeners("willUpdate");
        }
        update() {
          this.updateScheduled = !1;
          if (this.isUpdateBlocked())
            return (
              this.unblockUpdate(),
              this.clearAllSnapshots(),
              void this.nodes.forEach(ns)
            );
          if (this.animationId <= this.animationCommitId)
            return void this.nodes.forEach(rs);
          (this.animationCommitId = this.animationId),
            this.isUpdating
              ? ((this.isUpdating = !1),
                this.nodes.forEach(as),
                this.nodes.forEach(Go),
                this.nodes.forEach(Zo))
              : this.nodes.forEach(rs),
            this.clearAllSnapshots();
          const e = Tt.now();
          (ze.delta = c(0, 1e3 / 60, e - ze.timestamp)),
            (ze.timestamp = e),
            (ze.isProcessing = !0),
            Re.update.process(ze),
            Re.preRender.process(ze),
            Re.render.process(ze),
            (ze.isProcessing = !1);
        }
        didUpdate() {
          this.updateScheduled ||
            ((this.updateScheduled = !0), xt.read(this.scheduleUpdate));
        }
        clearAllSnapshots() {
          this.nodes.forEach(ts), this.sharedNodes.forEach(us);
        }
        scheduleUpdateProjection() {
          this.projectionUpdateScheduled ||
            ((this.projectionUpdateScheduled = !0),
            Le.preRender(this.updateProjection, !1, !0));
        }
        scheduleCheckAfterUnmount() {
          Le.postRender(() => {
            this.isLayoutDirty
              ? this.root.didUpdate()
              : this.root.checkUpdateFailed();
          });
        }
        updateSnapshot() {
          !this.snapshot &&
            this.instance &&
            ((this.snapshot = this.measure()),
            !this.snapshot ||
              bi(this.snapshot.measuredBox.x) ||
              bi(this.snapshot.measuredBox.y) ||
              (this.snapshot = void 0));
        }
        updateLayout() {
          if (!this.instance) return;
          if (
            (this.updateScroll(),
            (!this.options.alwaysMeasureLayout || !this.isLead()) &&
              !this.isLayoutDirty)
          )
            return;
          if (this.resumeFrom && !this.resumeFrom.instance)
            for (let n = 0; n < this.path.length; n++) {
              this.path[n].updateScroll();
            }
          const e = this.layout;
          (this.layout = this.measure(!1)),
            this.layoutVersion++,
            (this.layoutCorrected = {
              x: { min: 0, max: 0 },
              y: { min: 0, max: 0 },
            }),
            (this.isLayoutDirty = !1),
            (this.projectionDelta = void 0),
            this.notifyListeners("measure", this.layout.layoutBox);
          const { visualElement: t } = this.options;
          t &&
            t.notify(
              "LayoutMeasure",
              this.layout.layoutBox,
              e ? e.layoutBox : void 0
            );
        }
        updateScroll() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "measure",
            t = Boolean(this.options.layoutScroll && this.instance);
          if (
            (this.scroll &&
              this.scroll.animationId === this.root.animationId &&
              this.scroll.phase === e &&
              (t = !1),
            t && this.instance)
          ) {
            const t = a(this.instance);
            this.scroll = {
              animationId: this.root.animationId,
              phase: e,
              isRoot: t,
              offset: r(this.instance),
              wasRoot: this.scroll ? this.scroll.isRoot : t,
            };
          }
        }
        resetTransform() {
          if (!i) return;
          const e =
              this.isLayoutDirty ||
              this.shouldResetTransform ||
              this.options.alwaysMeasureLayout,
            t = this.projectionDelta && !Ro(this.projectionDelta),
            n = this.getTransformTemplate(),
            r = n ? n(this.latestValues, "") : void 0,
            a = r !== this.prevTransformTemplateValue;
          e &&
            this.instance &&
            (t || xn(this.latestValues) || a) &&
            (i(this.instance, r),
            (this.shouldResetTransform = !1),
            this.scheduleRender());
        }
        measure() {
          let e =
            !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          const t = this.measurePageBox();
          let n = this.removeElementScroll(t);
          var r;
          return (
            e && (n = this.removeTransform(n)),
            gs((r = n).x),
            gs(r.y),
            {
              animationId: this.root.animationId,
              measuredBox: t,
              layoutBox: n,
              latestValues: {},
              source: this.id,
            }
          );
        }
        measurePageBox() {
          var e;
          const { visualElement: t } = this.options;
          if (!t) return { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
          const n = t.measureViewportBox();
          if (
            !(
              (null === (e = this.scroll) || void 0 === e
                ? void 0
                : e.wasRoot) || this.path.some(ys)
            )
          ) {
            const { scroll: e } = this.root;
            e && (Nn(n.x, e.offset.x), Nn(n.y, e.offset.y));
          }
          return n;
        }
        removeElementScroll(e) {
          var t;
          const n = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
          if (
            (Fo(n, e), null !== (t = this.scroll) && void 0 !== t && t.wasRoot)
          )
            return n;
          for (let r = 0; r < this.path.length; r++) {
            const t = this.path[r],
              { scroll: a, options: i } = t;
            t !== this.root &&
              a &&
              i.layoutScroll &&
              (a.wasRoot && Fo(n, e), Nn(n.x, a.offset.x), Nn(n.y, a.offset.y));
          }
          return n;
        }
        applyTransform(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          const n = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
          Fo(n, e);
          for (let r = 0; r < this.path.length; r++) {
            const e = this.path[r];
            !t &&
              e.options.layoutScroll &&
              e.scroll &&
              e !== e.root &&
              Ln(n, { x: -e.scroll.offset.x, y: -e.scroll.offset.y }),
              xn(e.latestValues) && Ln(n, e.latestValues);
          }
          return xn(this.latestValues) && Ln(n, this.latestValues), n;
        }
        removeTransform(e) {
          const t = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
          Fo(t, e);
          for (let n = 0; n < this.path.length; n++) {
            const e = this.path[n];
            if (!e.instance) continue;
            if (!xn(e.latestValues)) continue;
            wn(e.latestValues) && e.updateSnapshot();
            const r = K();
            Fo(r, e.measurePageBox()),
              jo(
                t,
                e.latestValues,
                e.snapshot ? e.snapshot.layoutBox : void 0,
                r
              );
          }
          return xn(this.latestValues) && jo(t, this.latestValues), t;
        }
        setTargetDelta(e) {
          (this.targetDelta = e),
            this.root.scheduleUpdateProjection(),
            (this.isProjectionDirty = !0);
        }
        setOptions(e) {
          this.options = u(
            u(u({}, this.options), e),
            {},
            { crossfade: void 0 === e.crossfade || e.crossfade }
          );
        }
        clearMeasurements() {
          (this.scroll = void 0),
            (this.layout = void 0),
            (this.snapshot = void 0),
            (this.prevTransformTemplateValue = void 0),
            (this.targetDelta = void 0),
            (this.target = void 0),
            (this.isLayoutDirty = !1);
        }
        forceRelativeParentToResolveTarget() {
          this.relativeParent &&
            this.relativeParent.resolvedRelativeTargetAt !== ze.timestamp &&
            this.relativeParent.resolveTargetDelta(!0);
        }
        resolveTargetDelta() {
          var e;
          let t =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const n = this.getLead();
          this.isProjectionDirty ||
            (this.isProjectionDirty = n.isProjectionDirty),
            this.isTransformDirty ||
              (this.isTransformDirty = n.isTransformDirty),
            this.isSharedProjectionDirty ||
              (this.isSharedProjectionDirty = n.isSharedProjectionDirty);
          const r = Boolean(this.resumingFrom) || this !== n;
          if (
            !(
              t ||
              (r && this.isSharedProjectionDirty) ||
              this.isProjectionDirty ||
              (null !== (e = this.parent) &&
                void 0 !== e &&
                e.isProjectionDirty) ||
              this.attemptToResolveRelativeTarget ||
              this.root.updateBlockedByResize
            )
          )
            return;
          const { layout: a, layoutId: i } = this.options;
          if (!this.layout || (!a && !i)) return;
          this.resolvedRelativeTargetAt = ze.timestamp;
          const o = this.getClosestProjectingParent();
          var s, l, u;
          (o &&
            this.linkedParentVersion !== o.layoutVersion &&
            !o.options.layoutRoot &&
            this.removeRelativeTarget(),
          this.targetDelta ||
            this.relativeTarget ||
            (o && o.layout
              ? this.createRelativeTarget(
                  o,
                  this.layout.layoutBox,
                  o.layout.layoutBox
                )
              : this.removeRelativeTarget()),
          this.relativeTarget || this.targetDelta) &&
            (this.target ||
              ((this.target = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }),
              (this.targetWithTransforms = {
                x: { min: 0, max: 0 },
                y: { min: 0, max: 0 },
              })),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                (s = this.target),
                (l = this.relativeTarget),
                (u = this.relativeParent.target),
                Si(s.x, l.x, u.x),
                Si(s.y, l.y, u.y))
              : this.targetDelta
              ? (Boolean(this.resumingFrom)
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : Fo(this.target, this.layout.layoutBox),
                Pn(this.target, this.targetDelta))
              : Fo(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget &&
              ((this.attemptToResolveRelativeTarget = !1),
              o &&
              Boolean(o.resumingFrom) === Boolean(this.resumingFrom) &&
              !o.options.layoutScroll &&
              o.target &&
              1 !== this.animationProgress
                ? this.createRelativeTarget(o, this.target, o.target)
                : (this.relativeParent = this.relativeTarget = void 0)),
            De.value && $o.calculatedTargetDeltas++);
        }
        getClosestProjectingParent() {
          if (
            this.parent &&
            !wn(this.parent.latestValues) &&
            !Sn(this.parent.latestValues)
          )
            return this.parent.isProjecting()
              ? this.parent
              : this.parent.getClosestProjectingParent();
        }
        isProjecting() {
          return Boolean(
            (this.relativeTarget ||
              this.targetDelta ||
              this.options.layoutRoot) &&
              this.layout
          );
        }
        createRelativeTarget(e, t, n) {
          (this.relativeParent = e),
            (this.linkedParentVersion = e.layoutVersion),
            this.forceRelativeParentToResolveTarget(),
            (this.relativeTarget = {
              x: { min: 0, max: 0 },
              y: { min: 0, max: 0 },
            }),
            (this.relativeTargetOrigin = {
              x: { min: 0, max: 0 },
              y: { min: 0, max: 0 },
            }),
            Ei(this.relativeTargetOrigin, t, n),
            Fo(this.relativeTarget, this.relativeTargetOrigin);
        }
        removeRelativeTarget() {
          this.relativeParent = this.relativeTarget = void 0;
        }
        calcProjection() {
          var e;
          const t = this.getLead(),
            n = Boolean(this.resumingFrom) || this !== t;
          let r = !0;
          if (
            ((this.isProjectionDirty ||
              (null !== (e = this.parent) &&
                void 0 !== e &&
                e.isProjectionDirty)) &&
              (r = !1),
            n &&
              (this.isSharedProjectionDirty || this.isTransformDirty) &&
              (r = !1),
            this.resolvedRelativeTargetAt === ze.timestamp && (r = !1),
            r)
          )
            return;
          const { layout: a, layoutId: i } = this.options;
          if (
            ((this.isTreeAnimating = Boolean(
              (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
            )),
            this.isTreeAnimating ||
              (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || (!a && !i))
          )
            return;
          Fo(this.layoutCorrected, this.layout.layoutBox);
          const o = this.treeScale.x,
            s = this.treeScale.y;
          !(function (e, t, n) {
            let r =
              arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const a = n.length;
            if (!a) return;
            let i, o;
            t.x = t.y = 1;
            for (let s = 0; s < a; s++) {
              (i = n[s]), (o = i.projectionDelta);
              const { visualElement: a } = i.options;
              (a && a.props.style && "contents" === a.props.style.display) ||
                (r &&
                  i.options.layoutScroll &&
                  i.scroll &&
                  i !== i.root &&
                  Ln(e, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
                o && ((t.x *= o.x.scale), (t.y *= o.y.scale), Pn(e, o)),
                r && xn(i.latestValues) && Ln(e, i.latestValues));
            }
            t.x < An && t.x > Fn && (t.x = 1),
              t.y < An && t.y > Fn && (t.y = 1);
          })(this.layoutCorrected, this.treeScale, this.path, n),
            !t.layout ||
              t.target ||
              (1 === this.treeScale.x && 1 === this.treeScale.y) ||
              ((t.target = t.layout.layoutBox),
              (t.targetWithTransforms = {
                x: { min: 0, max: 0 },
                y: { min: 0, max: 0 },
              }));
          const { target: l } = t;
          l
            ? (this.projectionDelta && this.prevProjectionDelta
                ? (Ao(this.prevProjectionDelta.x, this.projectionDelta.x),
                  Ao(this.prevProjectionDelta.y, this.projectionDelta.y))
                : this.createProjectionDeltas(),
              xi(
                this.projectionDelta,
                this.layoutCorrected,
                l,
                this.latestValues
              ),
              (this.treeScale.x === o &&
                this.treeScale.y === s &&
                Io(this.projectionDelta.x, this.prevProjectionDelta.x) &&
                Io(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", l)),
              De.value && $o.calculatedProjections++)
            : this.prevProjectionDelta &&
              (this.createProjectionDeltas(), this.scheduleRender());
        }
        hide() {
          this.isVisible = !1;
        }
        show() {
          this.isVisible = !0;
        }
        scheduleRender() {
          var e;
          let t =
            !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          if (
            (null === (e = this.options.visualElement) ||
              void 0 === e ||
              e.scheduleRender(),
            t)
          ) {
            const e = this.getStack();
            e && e.scheduleRender();
          }
          this.resumingFrom &&
            !this.resumingFrom.instance &&
            (this.resumingFrom = void 0);
        }
        createProjectionDeltas() {
          (this.prevProjectionDelta = {
            x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
            y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
          }),
            (this.projectionDelta = {
              x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
              y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
            }),
            (this.projectionDeltaWithTransform = {
              x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
              y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
            });
        }
        setAnimationOrigin(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          const n = this.snapshot,
            r = n ? n.latestValues : {},
            a = u({}, this.latestValues),
            i = {
              x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
              y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
            };
          (this.relativeParent && this.relativeParent.options.layoutRoot) ||
            (this.relativeTarget = this.relativeTargetOrigin = void 0),
            (this.attemptToResolveRelativeTarget = !t);
          const o = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } },
            s =
              (n ? n.source : void 0) !==
              (this.layout ? this.layout.source : void 0),
            l = this.getStack(),
            c = !l || l.members.length <= 1,
            d = Boolean(
              s && !c && !0 === this.options.crossfade && !this.path.some(fs)
            );
          let f;
          (this.animationProgress = 0),
            (this.mixTargetDelta = (t) => {
              const n = t / 1e3;
              var l, u, h, p, m, g;
              cs(i.x, e.x, n),
                cs(i.y, e.y, n),
                this.setTargetDelta(i),
                this.relativeTarget &&
                  this.relativeTargetOrigin &&
                  this.layout &&
                  this.relativeParent &&
                  this.relativeParent.layout &&
                  (Ei(
                    o,
                    this.layout.layoutBox,
                    this.relativeParent.layout.layoutBox
                  ),
                  (h = this.relativeTarget),
                  (p = this.relativeTargetOrigin),
                  (m = o),
                  (g = n),
                  ds(h.x, p.x, m.x, g),
                  ds(h.y, p.y, m.y, g),
                  f &&
                    ((l = this.relativeTarget),
                    (u = f),
                    Oo(l.x, u.x) && Oo(l.y, u.y)) &&
                    (this.isProjectionDirty = !1),
                  f || (f = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }),
                  Fo(f, this.relativeTarget)),
                s &&
                  ((this.animationValues = a),
                  (function (e, t, n, r, a, i) {
                    var o, s;
                    if (a)
                      (e.opacity = dn(
                        0,
                        null !== (o = n.opacity) && void 0 !== o ? o : 1,
                        Eo(r)
                      )),
                        (e.opacityExit = dn(
                          null !== (s = t.opacity) && void 0 !== s ? s : 1,
                          0,
                          To(r)
                        ));
                    else if (i) {
                      var l, u;
                      e.opacity = dn(
                        null !== (l = t.opacity) && void 0 !== l ? l : 1,
                        null !== (u = n.opacity) && void 0 !== u ? u : 1,
                        r
                      );
                    }
                    for (let c = 0; c < wo; c++) {
                      const a = "border".concat(bo[c], "Radius");
                      let i = ko(t, a),
                        o = ko(n, a);
                      (void 0 === i && void 0 === o) ||
                        (i || (i = 0),
                        o || (o = 0),
                        0 === i || 0 === o || So(i) === So(o)
                          ? ((e[a] = Math.max(dn(xo(i), xo(o), r), 0)),
                            (E.test(o) || E.test(i)) && (e[a] += "%"))
                          : (e[a] = o));
                    }
                    (t.rotate || n.rotate) &&
                      (e.rotate = dn(t.rotate || 0, n.rotate || 0, r));
                  })(a, r, this.latestValues, n, d, c)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                (this.animationProgress = n);
            }),
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
        }
        startAnimation(e) {
          var t, n;
          this.notifyListeners("animationStart"),
            null === (t = this.currentAnimation) || void 0 === t || t.stop(),
            null === (n = this.resumingFrom) ||
              void 0 === n ||
              null === (n = n.currentAnimation) ||
              void 0 === n ||
              n.stop(),
            this.pendingAnimation &&
              (je(this.pendingAnimation), (this.pendingAnimation = void 0)),
            (this.pendingAnimation = Le.update(() => {
              (ho.hasAnimatedSinceResize = !0),
                ut.layout++,
                this.motionValue || (this.motionValue = At(0)),
                this.motionValue.jump(0, !1),
                (this.currentAnimation = (function (e, t, n) {
                  const r = Q(e) ? e : At(e);
                  return r.start(Ga("", r, t, n)), r.animation;
                })(
                  this.motionValue,
                  [0, 1e3],
                  u(
                    u({}, e),
                    {},
                    {
                      velocity: 0,
                      isSync: !0,
                      onUpdate: (t) => {
                        this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t);
                      },
                      onStop: () => {
                        ut.layout--;
                      },
                      onComplete: () => {
                        ut.layout--,
                          e.onComplete && e.onComplete(),
                          this.completeAnimation();
                      },
                    }
                  )
                )),
                this.resumingFrom &&
                  (this.resumingFrom.currentAnimation = this.currentAnimation),
                (this.pendingAnimation = void 0);
            }));
        }
        completeAnimation() {
          this.resumingFrom &&
            ((this.resumingFrom.currentAnimation = void 0),
            (this.resumingFrom.preserveOpacity = void 0));
          const e = this.getStack();
          e && e.exitAnimationComplete(),
            (this.resumingFrom =
              this.currentAnimation =
              this.animationValues =
                void 0),
            this.notifyListeners("animationComplete");
        }
        finishAnimation() {
          this.currentAnimation &&
            (this.mixTargetDelta && this.mixTargetDelta(1e3),
            this.currentAnimation.stop()),
            this.completeAnimation();
        }
        applyTransformsToTarget() {
          const e = this.getLead();
          let {
            targetWithTransforms: t,
            target: n,
            layout: r,
            latestValues: a,
          } = e;
          if (t && n && r) {
            if (
              this !== e &&
              this.layout &&
              r &&
              vs(this.options.animationType, this.layout.layoutBox, r.layoutBox)
            ) {
              n = this.target || {
                x: { min: 0, max: 0 },
                y: { min: 0, max: 0 },
              };
              const t = bi(this.layout.layoutBox.x);
              (n.x.min = e.target.x.min), (n.x.max = n.x.min + t);
              const r = bi(this.layout.layoutBox.y);
              (n.y.min = e.target.y.min), (n.y.max = n.y.min + r);
            }
            Fo(t, n),
              Ln(t, a),
              xi(this.projectionDeltaWithTransform, this.layoutCorrected, t, a);
          }
        }
        registerSharedNode(e, t) {
          this.sharedNodes.has(e) || this.sharedNodes.set(e, new Uo());
          this.sharedNodes.get(e).add(t);
          const n = t.options.initialPromotionConfig;
          t.promote({
            transition: n ? n.transition : void 0,
            preserveFollowOpacity:
              n && n.shouldPreserveFollowOpacity
                ? n.shouldPreserveFollowOpacity(t)
                : void 0,
          });
        }
        isLead() {
          const e = this.getStack();
          return !e || e.lead === this;
        }
        getLead() {
          var e;
          const { layoutId: t } = this.options;
          return (
            (t &&
              (null === (e = this.getStack()) || void 0 === e
                ? void 0
                : e.lead)) ||
            this
          );
        }
        getPrevLead() {
          var e;
          const { layoutId: t } = this.options;
          return t
            ? null === (e = this.getStack()) || void 0 === e
              ? void 0
              : e.prevLead
            : void 0;
        }
        getStack() {
          const { layoutId: e } = this.options;
          if (e) return this.root.sharedNodes.get(e);
        }
        promote() {
          let {
            needsReset: e,
            transition: t,
            preserveFollowOpacity: n,
          } = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {};
          const r = this.getStack();
          r && r.promote(this, n),
            e && ((this.projectionDelta = void 0), (this.needsReset = !0)),
            t && this.setOptions({ transition: t });
        }
        relegate() {
          const e = this.getStack();
          return !!e && e.relegate(this);
        }
        resetSkewAndRotation() {
          const { visualElement: e } = this.options;
          if (!e) return;
          let t = !1;
          const { latestValues: n } = e;
          if (
            ((n.z ||
              n.rotate ||
              n.rotateX ||
              n.rotateY ||
              n.rotateZ ||
              n.skewX ||
              n.skewY) &&
              (t = !0),
            !t)
          )
            return;
          const r = {};
          n.z && Xo("z", e, r, this.animationValues);
          for (let a = 0; a < Yo.length; a++)
            Xo("rotate".concat(Yo[a]), e, r, this.animationValues),
              Xo("skew".concat(Yo[a]), e, r, this.animationValues);
          e.render();
          for (const a in r)
            e.setStaticValue(a, r[a]),
              this.animationValues && (this.animationValues[a] = r[a]);
          e.scheduleRender();
        }
        applyProjectionStyles(e, t) {
          if (!this.instance || this.isSVG) return;
          if (!this.isVisible) return void (e.visibility = "hidden");
          const n = this.getTransformTemplate();
          if (this.needsReset)
            return (
              (this.needsReset = !1),
              (e.visibility = ""),
              (e.opacity = ""),
              (e.pointerEvents =
                rr(null === t || void 0 === t ? void 0 : t.pointerEvents) ||
                ""),
              void (e.transform = n ? n(this.latestValues, "") : "none")
            );
          const r = this.getLead();
          if (!this.projectionDelta || !this.layout || !r.target)
            return (
              this.options.layoutId &&
                ((e.opacity =
                  void 0 !== this.latestValues.opacity
                    ? this.latestValues.opacity
                    : 1),
                (e.pointerEvents =
                  rr(null === t || void 0 === t ? void 0 : t.pointerEvents) ||
                  "")),
              void (
                this.hasProjected &&
                !xn(this.latestValues) &&
                ((e.transform = n ? n({}, "") : "none"),
                (this.hasProjected = !1))
              )
            );
          e.visibility = "";
          const a = r.animationValues || r.latestValues;
          this.applyTransformsToTarget();
          let i = (function (e, t, n) {
            let r = "";
            const a = e.x.translate / t.x,
              i = e.y.translate / t.y,
              o = (null === n || void 0 === n ? void 0 : n.z) || 0;
            if (
              ((a || i || o) &&
                (r = "translate3d("
                  .concat(a, "px, ")
                  .concat(i, "px, ")
                  .concat(o, "px) ")),
              (1 === t.x && 1 === t.y) ||
                (r += "scale(".concat(1 / t.x, ", ").concat(1 / t.y, ") ")),
              n)
            ) {
              const {
                transformPerspective: e,
                rotate: t,
                rotateX: a,
                rotateY: i,
                skewX: o,
                skewY: s,
              } = n;
              e && (r = "perspective(".concat(e, "px) ").concat(r)),
                t && (r += "rotate(".concat(t, "deg) ")),
                a && (r += "rotateX(".concat(a, "deg) ")),
                i && (r += "rotateY(".concat(i, "deg) ")),
                o && (r += "skewX(".concat(o, "deg) ")),
                s && (r += "skewY(".concat(s, "deg) "));
            }
            const s = e.x.scale * t.x,
              l = e.y.scale * t.y;
            return (
              (1 === s && 1 === l) ||
                (r += "scale(".concat(s, ", ").concat(l, ")")),
              r || "none"
            );
          })(this.projectionDeltaWithTransform, this.treeScale, a);
          n && (i = n(a, i)), (e.transform = i);
          const { x: o, y: s } = this.projectionDelta;
          var l, u;
          ((e.transformOrigin = ""
            .concat(100 * o.origin, "% ")
            .concat(100 * s.origin, "% 0")),
          r.animationValues)
            ? (e.opacity =
                r === this
                  ? null !==
                      (l =
                        null !== (u = a.opacity) && void 0 !== u
                          ? u
                          : this.latestValues.opacity) && void 0 !== l
                    ? l
                    : 1
                  : this.preserveOpacity
                  ? this.latestValues.opacity
                  : a.opacityExit)
            : (e.opacity =
                r === this
                  ? void 0 !== a.opacity
                    ? a.opacity
                    : ""
                  : void 0 !== a.opacityExit
                  ? a.opacityExit
                  : 0);
          for (const c in hn) {
            if (void 0 === a[c]) continue;
            const { correct: t, applyTo: n, isCSSVariable: o } = hn[c],
              s = "none" === i ? a[c] : t(a[c], r);
            if (n) {
              const t = n.length;
              for (let r = 0; r < t; r++) e[n[r]] = s;
            } else
              o
                ? (this.options.visualElement.renderState.vars[c] = s)
                : (e[c] = s);
          }
          this.options.layoutId &&
            (e.pointerEvents =
              r === this
                ? rr(null === t || void 0 === t ? void 0 : t.pointerEvents) ||
                  ""
                : "none");
        }
        clearSnapshot() {
          this.resumeFrom = this.snapshot = void 0;
        }
        resetTree() {
          this.root.nodes.forEach((e) => {
            var t;
            return null === (t = e.currentAnimation) || void 0 === t
              ? void 0
              : t.stop();
          }),
            this.root.nodes.forEach(ns),
            this.root.sharedNodes.clear();
        }
      };
    }
    function Go(e) {
      e.updateLayout();
    }
    function Zo(e) {
      var t;
      const n =
        (null === (t = e.resumeFrom) || void 0 === t ? void 0 : t.snapshot) ||
        e.snapshot;
      if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
        const { layoutBox: t, measuredBox: r } = e.layout,
          { animationType: a } = e.options,
          i = n.source !== e.layout.source;
        "size" === a
          ? yi((e) => {
              const r = i ? n.measuredBox[e] : n.layoutBox[e],
                a = bi(r);
              (r.min = t[e].min), (r.max = r.min + a);
            })
          : vs(a, n.layoutBox, t) &&
            yi((r) => {
              const a = i ? n.measuredBox[r] : n.layoutBox[r],
                o = bi(t[r]);
              (a.max = a.min + o),
                e.relativeTarget &&
                  !e.currentAnimation &&
                  ((e.isProjectionDirty = !0),
                  (e.relativeTarget[r].max = e.relativeTarget[r].min + o));
            });
        const o = {
          x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
          y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
        };
        xi(o, t, n.layoutBox);
        const s = {
          x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
          y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
        };
        i
          ? xi(s, e.applyTransform(r, !0), n.measuredBox)
          : xi(s, t, n.layoutBox);
        const l = !Ro(o);
        let u = !1;
        if (!e.resumeFrom) {
          const r = e.getClosestProjectingParent();
          if (r && !r.resumeFrom) {
            const { snapshot: a, layout: i } = r;
            if (a && i) {
              const o = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
              Ei(o, n.layoutBox, a.layoutBox);
              const s = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
              Ei(s, t, i.layoutBox),
                Vo(o, s) || (u = !0),
                r.options.layoutRoot &&
                  ((e.relativeTarget = s),
                  (e.relativeTargetOrigin = o),
                  (e.relativeParent = r));
            }
          }
        }
        e.notifyListeners("didUpdate", {
          layout: t,
          snapshot: n,
          delta: s,
          layoutDelta: o,
          hasLayoutChanged: l,
          hasRelativeLayoutChanged: u,
        });
      } else if (e.isLead()) {
        const { onExitComplete: t } = e.options;
        t && t();
      }
      e.options.transition = void 0;
    }
    function Jo(e) {
      De.value && $o.nodes++,
        e.parent &&
          (e.isProjecting() ||
            (e.isProjectionDirty = e.parent.isProjectionDirty),
          e.isSharedProjectionDirty ||
            (e.isSharedProjectionDirty = Boolean(
              e.isProjectionDirty ||
                e.parent.isProjectionDirty ||
                e.parent.isSharedProjectionDirty
            )),
          e.isTransformDirty ||
            (e.isTransformDirty = e.parent.isTransformDirty));
    }
    function es(e) {
      e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
    }
    function ts(e) {
      e.clearSnapshot();
    }
    function ns(e) {
      e.clearMeasurements();
    }
    function rs(e) {
      e.isLayoutDirty = !1;
    }
    function as(e) {
      const { visualElement: t } = e.options;
      t &&
        t.getProps().onBeforeLayoutMeasure &&
        t.notify("BeforeLayoutMeasure"),
        e.resetTransform();
    }
    function is(e) {
      e.finishAnimation(),
        (e.targetDelta = e.relativeTarget = e.target = void 0),
        (e.isProjectionDirty = !0);
    }
    function os(e) {
      e.resolveTargetDelta();
    }
    function ss(e) {
      e.calcProjection();
    }
    function ls(e) {
      e.resetSkewAndRotation();
    }
    function us(e) {
      e.removeLeadSnapshot();
    }
    function cs(e, t, n) {
      (e.translate = dn(t.translate, 0, n)),
        (e.scale = dn(t.scale, 1, n)),
        (e.origin = t.origin),
        (e.originPoint = t.originPoint);
    }
    function ds(e, t, n, r) {
      (e.min = dn(t.min, n.min, r)), (e.max = dn(t.max, n.max, r));
    }
    function fs(e) {
      return e.animationValues && void 0 !== e.animationValues.opacityExit;
    }
    const hs = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
      ps = (e) =>
        "undefined" !== typeof navigator &&
        navigator.userAgent &&
        navigator.userAgent.toLowerCase().includes(e),
      ms = ps("applewebkit/") && !ps("chrome/") ? Math.round : Fe;
    function gs(e) {
      (e.min = ms(e.min)), (e.max = ms(e.max));
    }
    function vs(e, t, n) {
      return (
        "position" === e ||
        ("preserve-aspect" === e &&
          ((r = Bo(t)), (a = Bo(n)), (i = 0.2), !(Math.abs(r - a) <= i)))
      );
      var r, a, i;
    }
    function ys(e) {
      var t;
      return (
        e !== e.root &&
        (null === (t = e.scroll) || void 0 === t ? void 0 : t.wasRoot)
      );
    }
    const bs = Qo({
        attachResizeListener: (e, t) => Pi(e, "resize", t),
        measureScroll: () => {
          var e, t;
          return {
            x:
              document.documentElement.scrollLeft ||
              (null === (e = document.body) || void 0 === e
                ? void 0
                : e.scrollLeft) ||
              0,
            y:
              document.documentElement.scrollTop ||
              (null === (t = document.body) || void 0 === t
                ? void 0
                : t.scrollTop) ||
              0,
          };
        },
        checkIsScrollRoot: () => !0,
      }),
      ws = { current: void 0 },
      xs = Qo({
        measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
        defaultParent: () => {
          if (!ws.current) {
            const e = new bs({});
            e.mount(window),
              e.setOptions({ layoutScroll: !0 }),
              (ws.current = e);
          }
          return ws.current;
        },
        resetTransform: (e, t) => {
          e.style.transform = void 0 !== t ? t : "none";
        },
        checkIsScrollRoot: (e) =>
          Boolean("fixed" === window.getComputedStyle(e).position),
      }),
      Ss = {
        pan: {
          Feature: class extends Tr {
            constructor() {
              super(...arguments), (this.removePointerDownListener = Fe);
            }
            onPointerDown(e) {
              this.session = new Ki(e, this.createPanHandlers(), {
                transformPagePoint: this.node.getTransformPagePoint(),
                contextWindow: Yi(this.node),
              });
            }
            createPanHandlers() {
              const {
                onPanSessionStart: e,
                onPanStart: t,
                onPan: n,
                onPanEnd: r,
              } = this.node.getProps();
              return {
                onSessionStart: fo(e),
                onStart: fo(t),
                onMove: fo(n),
                onEnd: (e, t) => {
                  delete this.session, r && Le.postRender(() => r(e, t));
                },
              };
            }
            mount() {
              this.removePointerDownListener = $i(
                this.node.current,
                "pointerdown",
                (e) => this.onPointerDown(e)
              );
            }
            update() {
              this.session &&
                this.session.updateHandlers(this.createPanHandlers());
            }
            unmount() {
              this.removePointerDownListener(),
                this.session && this.session.end();
            }
          },
        },
        drag: {
          Feature: class extends Tr {
            constructor(e) {
              super(e),
                (this.removeGroupControls = Fe),
                (this.removeListeners = Fe),
                (this.controls = new lo(e));
            }
            mount() {
              const { dragControls: e } = this.node.getProps();
              e && (this.removeGroupControls = e.subscribe(this.controls)),
                (this.removeListeners = this.controls.addListeners() || Fe);
            }
            update() {
              const { dragControls: e } = this.node.getProps(),
                { dragControls: t } = this.node.prevProps || {};
              e !== t &&
                (this.removeGroupControls(),
                e && (this.removeGroupControls = e.subscribe(this.controls)));
            }
            unmount() {
              this.removeGroupControls(),
                this.removeListeners(),
                this.controls.isDragging || this.controls.endPanSession();
            }
          },
          ProjectionNode: xs,
          MeasureLayout: vo,
        },
      };
    function ks(e, t) {
      const n = Ni(e),
        r = new AbortController();
      return [
        n,
        u(u({ passive: !0 }, t), {}, { signal: r.signal }),
        () => r.abort(),
      ];
    }
    function Es(e, t) {
      let n =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const [r, a, i] = ks(e, n);
      return (
        r.forEach((e) => {
          let n,
            r = !1,
            i = !1;
          const o = (t) => {
              n && (n(t), (n = void 0)),
                e.removeEventListener("pointerleave", l);
            },
            s = (e) => {
              (r = !1),
                window.removeEventListener("pointerup", s),
                window.removeEventListener("pointercancel", s),
                i && ((i = !1), o(e));
            },
            l = (e) => {
              "touch" !== e.pointerType && (r ? (i = !0) : o(e));
            };
          e.addEventListener(
            "pointerenter",
            (r) => {
              if ("touch" === r.pointerType || vi()) return;
              i = !1;
              const o = t(e, r);
              "function" === typeof o &&
                ((n = o), e.addEventListener("pointerleave", l, a));
            },
            a
          ),
            e.addEventListener(
              "pointerdown",
              () => {
                (r = !0),
                  window.addEventListener("pointerup", s, a),
                  window.addEventListener("pointercancel", s, a);
              },
              a
            );
        }),
        i
      );
    }
    function Ts(e, t, n) {
      const { props: r } = e;
      e.animationState &&
        r.whileHover &&
        e.animationState.setActive("whileHover", "Start" === n);
      const a = r["onHover" + n];
      a && Le.postRender(() => a(t, Wi(t)));
    }
    function Cs(e) {
      return Fi(e) && "offsetHeight" in e;
    }
    const Ps = (e, t) => !!t && (e === t || Ps(e, t.parentElement)),
      Fs = new WeakSet();
    function As(e) {
      return (t) => {
        "Enter" === t.key && e(t);
      };
    }
    function Ns(e, t) {
      e.dispatchEvent(
        new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 })
      );
    }
    function Ds(e) {
      return Hi(e) && !vi();
    }
    const Ms = new WeakSet();
    function Ls(e, t) {
      let n =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const [r, a, i] = ks(e, n),
        o = (e) => {
          const r = e.currentTarget;
          if (!Ds(e)) return;
          if (Ms.has(e)) return;
          Fs.add(r), n.stopPropagation && Ms.add(e);
          const i = t(r, e),
            o = (e, t) => {
              window.removeEventListener("pointerup", s),
                window.removeEventListener("pointercancel", l),
                Fs.has(r) && Fs.delete(r),
                Ds(e) && "function" === typeof i && i(e, { success: t });
            },
            s = (e) => {
              o(
                e,
                r === window ||
                  r === document ||
                  n.useGlobalTarget ||
                  Ps(r, e.target)
              );
            },
            l = (e) => {
              o(e, !1);
            };
          window.addEventListener("pointerup", s, a),
            window.addEventListener("pointercancel", l, a);
        };
      return (
        r.forEach((e) => {
          var t;
          (n.useGlobalTarget ? window : e).addEventListener(
            "pointerdown",
            o,
            a
          ),
            Cs(e) &&
              (e.addEventListener("focus", (e) =>
                ((e, t) => {
                  const n = e.currentTarget;
                  if (!n) return;
                  const r = As(() => {
                    if (Fs.has(n)) return;
                    Ns(n, "down");
                    const e = As(() => {
                      Ns(n, "up");
                    });
                    n.addEventListener("keyup", e, t),
                      n.addEventListener("blur", () => Ns(n, "cancel"), t);
                  });
                  n.addEventListener("keydown", r, t),
                    n.addEventListener(
                      "blur",
                      () => n.removeEventListener("keydown", r),
                      t
                    );
                })(e, a)
              ),
              (t = e),
              Ti.has(t.tagName) ||
                !0 === t.isContentEditable ||
                e.hasAttribute("tabindex") ||
                (e.tabIndex = 0));
        }),
        i
      );
    }
    function js(e, t, n) {
      const { props: r } = e;
      if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
      e.animationState &&
        r.whileTap &&
        e.animationState.setActive("whileTap", "Start" === n);
      const a = r["onTap" + ("End" === n ? "" : n)];
      a && Le.postRender(() => a(t, Wi(t)));
    }
    const zs = ["root"],
      Rs = new WeakMap(),
      Os = new WeakMap(),
      _s = (e) => {
        const t = Rs.get(e.target);
        t && t(e);
      },
      Vs = (e) => {
        e.forEach(_s);
      };
    function Bs(e, t, n) {
      const r = (function (e) {
        let { root: t } = e,
          n = Qe(e, zs);
        const r = t || document;
        Os.has(r) || Os.set(r, {});
        const a = Os.get(r),
          i = JSON.stringify(n);
        return (
          a[i] || (a[i] = new IntersectionObserver(Vs, u({ root: t }, n))), a[i]
        );
      })(t);
      return (
        Rs.set(e, n),
        r.observe(e),
        () => {
          Rs.delete(e), r.unobserve(e);
        }
      );
    }
    const Is = { some: 0, all: 1 };
    const Us = {
        inView: {
          Feature: class extends Tr {
            constructor() {
              super(...arguments),
                (this.hasEnteredView = !1),
                (this.isInView = !1);
            }
            startObserver() {
              this.unmount();
              const { viewport: e = {} } = this.node.getProps(),
                { root: t, margin: n, amount: r = "some", once: a } = e,
                i = {
                  root: t ? t.current : void 0,
                  rootMargin: n,
                  threshold: "number" === typeof r ? r : Is[r],
                };
              return Bs(this.node.current, i, (e) => {
                const { isIntersecting: t } = e;
                if (this.isInView === t) return;
                if (((this.isInView = t), a && !t && this.hasEnteredView))
                  return;
                t && (this.hasEnteredView = !0),
                  this.node.animationState &&
                    this.node.animationState.setActive("whileInView", t);
                const { onViewportEnter: n, onViewportLeave: r } =
                    this.node.getProps(),
                  i = t ? n : r;
                i && i(e);
              });
            }
            mount() {
              this.startObserver();
            }
            update() {
              if ("undefined" === typeof IntersectionObserver) return;
              const { props: e, prevProps: t } = this.node,
                n = ["amount", "margin", "root"].some(
                  (function (e) {
                    let { viewport: t = {} } = e,
                      { viewport: n = {} } =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {};
                    return (e) => t[e] !== n[e];
                  })(e, t)
                );
              n && this.startObserver();
            }
            unmount() {}
          },
        },
        tap: {
          Feature: class extends Tr {
            mount() {
              const { current: e } = this.node;
              if (!e) return;
              const { globalTapTarget: t, propagate: n } = this.node.props;
              this.unmount = Ls(
                e,
                (e, t) => (
                  js(this.node, t, "Start"),
                  (e, t) => {
                    let { success: n } = t;
                    return js(this.node, e, n ? "End" : "Cancel");
                  }
                ),
                {
                  useGlobalTarget: t,
                  stopPropagation:
                    !1 === (null === n || void 0 === n ? void 0 : n.tap),
                }
              );
            }
            unmount() {}
          },
        },
        focus: {
          Feature: class extends Tr {
            constructor() {
              super(...arguments), (this.isActive = !1);
            }
            onFocus() {
              let e = !1;
              try {
                e = this.node.current.matches(":focus-visible");
              } catch (t) {
                e = !0;
              }
              e &&
                this.node.animationState &&
                (this.node.animationState.setActive("whileFocus", !0),
                (this.isActive = !0));
            }
            onBlur() {
              this.isActive &&
                this.node.animationState &&
                (this.node.animationState.setActive("whileFocus", !1),
                (this.isActive = !1));
            }
            mount() {
              this.unmount = Or(
                Pi(this.node.current, "focus", () => this.onFocus()),
                Pi(this.node.current, "blur", () => this.onBlur())
              );
            }
            unmount() {}
          },
        },
        hover: {
          Feature: class extends Tr {
            mount() {
              const { current: e } = this.node;
              e &&
                (this.unmount = Es(
                  e,
                  (e, t) => (
                    Ts(this.node, t, "Start"), (e) => Ts(this.node, e, "End")
                  )
                ));
            }
            unmount() {}
          },
        },
      },
      Hs = { layout: { ProjectionNode: xs, MeasureLayout: vo } },
      Ws = Er(u(u(u(u({}, mi), Us), Ss), Hs), _n);
    function $s(e, t) {
      if ("function" === typeof e) return e(t);
      null !== e && void 0 !== e && (e.current = t);
    }
    function Ys() {
      for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
        n[r] = arguments[r];
      return e.useCallback(
        (function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return (e) => {
            let n = !1;
            const r = t.map((t) => {
              const r = $s(t, e);
              return n || "function" !== typeof r || (n = !0), r;
            });
            if (n)
              return () => {
                for (let e = 0; e < r.length; e++) {
                  const n = r[e];
                  "function" === typeof n ? n() : $s(t[e], null);
                }
              };
          };
        })(...n),
        n
      );
    }
    class qs extends e.Component {
      getSnapshotBeforeUpdate(e) {
        const t = this.props.childRef.current;
        if (
          t &&
          e.isPresent &&
          !this.props.isPresent &&
          !1 !== this.props.pop
        ) {
          const e = t.offsetParent,
            n = (Cs(e) && e.offsetWidth) || 0,
            r = (Cs(e) && e.offsetHeight) || 0,
            a = this.props.sizeRef.current;
          (a.height = t.offsetHeight || 0),
            (a.width = t.offsetWidth || 0),
            (a.top = t.offsetTop),
            (a.left = t.offsetLeft),
            (a.right = n - a.width - a.left),
            (a.bottom = r - a.height - a.top);
        }
        return null;
      }
      componentDidUpdate() {}
      render() {
        return this.props.children;
      }
    }
    function Xs(t) {
      var n, r;
      let {
        children: a,
        isPresent: i,
        anchorX: o,
        anchorY: s,
        root: l,
        pop: u,
      } = t;
      const c = (0, e.useId)(),
        d = (0, e.useRef)(null),
        f = (0, e.useRef)({
          width: 0,
          height: 0,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }),
        { nonce: h } = (0, e.useContext)(Un),
        p =
          null !==
            (n = null === (r = a.props) || void 0 === r ? void 0 : r.ref) &&
          void 0 !== n
            ? n
            : null === a || void 0 === a
            ? void 0
            : a.ref,
        m = Ys(d, p);
      return (
        (0, e.useInsertionEffect)(() => {
          const {
            width: e,
            height: t,
            top: n,
            left: r,
            right: a,
            bottom: p,
          } = f.current;
          if (i || !1 === u || !d.current || !e || !t) return;
          const m = "left" === o ? "left: ".concat(r) : "right: ".concat(a),
            g = "bottom" === s ? "bottom: ".concat(p) : "top: ".concat(n);
          d.current.dataset.motionPopId = c;
          const v = document.createElement("style");
          h && (v.nonce = h);
          const y = null !== l && void 0 !== l ? l : document.head;
          return (
            y.appendChild(v),
            v.sheet &&
              v.sheet.insertRule(
                '\n          [data-motion-pop-id="'
                  .concat(
                    c,
                    '"] {\n            position: absolute !important;\n            width: '
                  )
                  .concat(e, "px !important;\n            height: ")
                  .concat(t, "px !important;\n            ")
                  .concat(m, "px !important;\n            ")
                  .concat(g, "px !important;\n          }\n        ")
              ),
            () => {
              y.contains(v) && y.removeChild(v);
            }
          );
        }, [i]),
        (0, Vn.jsx)(qs, {
          isPresent: i,
          childRef: d,
          sizeRef: f,
          pop: u,
          children: !1 === u ? a : e.cloneElement(a, { ref: m }),
        })
      );
    }
    const Ks = (t) => {
      let {
        children: n,
        initial: r,
        isPresent: a,
        onExitComplete: i,
        custom: o,
        presenceAffectsLayout: s,
        mode: l,
        anchorX: c,
        anchorY: d,
        root: f,
      } = t;
      const h = ir(Qs),
        p = (0, e.useId)();
      let m = !0,
        g = (0, e.useMemo)(
          () => (
            (m = !1),
            {
              id: p,
              initial: r,
              isPresent: a,
              custom: o,
              onExitComplete: (e) => {
                h.set(e, !0);
                for (const t of h.values()) if (!t) return;
                i && i();
              },
              register: (e) => (h.set(e, !1), () => h.delete(e)),
            }
          ),
          [a, h, i]
        );
      return (
        s && m && (g = u({}, g)),
        (0, e.useMemo)(() => {
          h.forEach((e, t) => h.set(t, !1));
        }, [a]),
        e.useEffect(() => {
          !a && !h.size && i && i();
        }, [a]),
        (n = (0, Vn.jsx)(Xs, {
          pop: "popLayout" === l,
          isPresent: a,
          anchorX: c,
          anchorY: d,
          root: f,
          children: n,
        })),
        (0, Vn.jsx)(ar.Provider, { value: g, children: n })
      );
    };
    function Qs() {
      return new Map();
    }
    const Gs = (e) => e.key || "";
    function Zs(t) {
      const n = [];
      return (
        e.Children.forEach(t, (t) => {
          (0, e.isValidElement)(t) && n.push(t);
        }),
        n
      );
    }
    const Js = (t) => {
      let {
        children: n,
        custom: r,
        initial: a = !0,
        onExitComplete: i,
        presenceAffectsLayout: o = !0,
        mode: s = "sync",
        propagate: l = !1,
        anchorX: u = "left",
        anchorY: c = "top",
        root: d,
      } = t;
      const [f, h] = po(l),
        p = (0, e.useMemo)(() => Zs(n), [n]),
        m = l && !f ? [] : p.map(Gs),
        g = (0, e.useRef)(!0),
        v = (0, e.useRef)(p),
        y = ir(() => new Map()),
        b = (0, e.useRef)(new Set()),
        [w, x] = (0, e.useState)(p),
        [S, k] = (0, e.useState)(p);
      br(() => {
        (g.current = !1), (v.current = p);
        for (let e = 0; e < S.length; e++) {
          const t = Gs(S[e]);
          m.includes(t)
            ? (y.delete(t), b.current.delete(t))
            : !0 !== y.get(t) && y.set(t, !1);
        }
      }, [S, m.length, m.join("-")]);
      const E = [];
      if (p !== w) {
        let e = [...p];
        for (let t = 0; t < S.length; t++) {
          const n = S[t],
            r = Gs(n);
          m.includes(r) || (e.splice(t, 0, n), E.push(n));
        }
        return "wait" === s && E.length && (e = E), k(Zs(e)), x(p), null;
      }
      const { forceRender: T } = (0, e.useContext)(Bn);
      return (0, Vn.jsx)(Vn.Fragment, {
        children: S.map((e) => {
          const t = Gs(e),
            n = !(l && !f) && (p === S || m.includes(t));
          return (0, Vn.jsx)(
            Ks,
            {
              isPresent: n,
              initial: !(g.current && !a) && void 0,
              custom: r,
              presenceAffectsLayout: o,
              mode: s,
              root: d,
              onExitComplete: n
                ? void 0
                : () => {
                    if (b.current.has(t)) return;
                    if ((b.current.add(t), !y.has(t))) return;
                    y.set(t, !0);
                    let e = !0;
                    y.forEach((t) => {
                      t || (e = !1);
                    }),
                      e &&
                        (null === T || void 0 === T || T(),
                        k(v.current),
                        l && (null === h || void 0 === h || h()),
                        i && i());
                  },
              anchorX: u,
              anchorY: c,
              children: e,
            },
            t
          );
        }),
      });
    };
    var el = n(818);
    const tl = (e) => {
        const t = ((e) =>
          e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) =>
            n ? n.toUpperCase() : t.toLowerCase()
          ))(e);
        return t.charAt(0).toUpperCase() + t.slice(1);
      },
      nl = function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return t
          .filter(
            (e, t, n) => Boolean(e) && "" !== e.trim() && n.indexOf(e) === t
          )
          .join(" ")
          .trim();
      };
    var rl = {
      xmlns: "http://www.w3.org/2000/svg",
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
    };
    const al = [
        "color",
        "size",
        "strokeWidth",
        "absoluteStrokeWidth",
        "className",
        "children",
        "iconNode",
      ],
      il = (0, e.forwardRef)((t, n) => {
        let {
            color: r = "currentColor",
            size: a = 24,
            strokeWidth: i = 2,
            absoluteStrokeWidth: o,
            className: s = "",
            children: l,
            iconNode: c,
          } = t,
          d = Qe(t, al);
        return (0, e.createElement)(
          "svg",
          u(
            u(
              u({ ref: n }, rl),
              {},
              {
                width: a,
                height: a,
                stroke: r,
                strokeWidth: o ? (24 * Number(i)) / Number(a) : i,
                className: nl("lucide", s),
              },
              !l &&
                !((e) => {
                  for (const t in e)
                    if (t.startsWith("aria-") || "role" === t || "title" === t)
                      return !0;
                })(d) && { "aria-hidden": "true" }
            ),
            d
          ),
          [
            ...c.map((t) => {
              let [n, r] = t;
              return (0, e.createElement)(n, r);
            }),
            ...(Array.isArray(l) ? l : [l]),
          ]
        );
      }),
      ol = ["className"],
      sl = (t, n) => {
        const r = (0, e.forwardRef)((r, a) => {
          let { className: i } = r,
            o = Qe(r, ol);
          return (0, e.createElement)(
            il,
            u(
              {
                ref: a,
                iconNode: n,
                className: nl(
                  "lucide-".concat(
                    ((s = tl(t)),
                    s.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase())
                  ),
                  "lucide-".concat(t),
                  i
                ),
              },
              o
            )
          );
          var s;
        });
        return (r.displayName = tl(t)), r;
      },
      ll = sl("chevron-down", [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]]),
      ul = sl("check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]),
      cl = sl("copy", [
        [
          "rect",
          {
            width: "14",
            height: "14",
            x: "8",
            y: "8",
            rx: "2",
            ry: "2",
            key: "17jyea",
          },
        ],
        [
          "path",
          {
            d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
            key: "zix9uf",
          },
        ],
      ]),
      dl = sl("external-link", [
        ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
        ["path", { d: "M10 14 21 3", key: "gplh6r" }],
        [
          "path",
          {
            d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
            key: "a6xqqp",
          },
        ],
      ]);
    var fl = n(950);
    const hl = ["message"];
    const pl = Array(12).fill(0),
      ml = (t) => {
        let { visible: n, className: r } = t;
        return e.createElement(
          "div",
          {
            className: ["sonner-loading-wrapper", r].filter(Boolean).join(" "),
            "data-visible": n,
          },
          e.createElement(
            "div",
            { className: "sonner-spinner" },
            pl.map((t, n) =>
              e.createElement("div", {
                className: "sonner-loading-bar",
                key: "spinner-bar-".concat(n),
              })
            )
          )
        );
      },
      gl = e.createElement(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor",
          height: "20",
          width: "20",
        },
        e.createElement("path", {
          fillRule: "evenodd",
          d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
          clipRule: "evenodd",
        })
      ),
      vl = e.createElement(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          fill: "currentColor",
          height: "20",
          width: "20",
        },
        e.createElement("path", {
          fillRule: "evenodd",
          d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
          clipRule: "evenodd",
        })
      ),
      yl = e.createElement(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor",
          height: "20",
          width: "20",
        },
        e.createElement("path", {
          fillRule: "evenodd",
          d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
          clipRule: "evenodd",
        })
      ),
      bl = e.createElement(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor",
          height: "20",
          width: "20",
        },
        e.createElement("path", {
          fillRule: "evenodd",
          d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
          clipRule: "evenodd",
        })
      ),
      wl = e.createElement(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: "12",
          height: "12",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        },
        e.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
        e.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
      );
    let xl = 1;
    const Sl = new (class {
        constructor() {
          (this.subscribe = (e) => (
            this.subscribers.push(e),
            () => {
              const t = this.subscribers.indexOf(e);
              this.subscribers.splice(t, 1);
            }
          )),
            (this.publish = (e) => {
              this.subscribers.forEach((t) => t(e));
            }),
            (this.addToast = (e) => {
              this.publish(e), (this.toasts = [...this.toasts, e]);
            }),
            (this.create = (e) => {
              var t;
              const { message: n } = e,
                r = Qe(e, hl),
                a =
                  "number" === typeof (null == e ? void 0 : e.id) ||
                  (null == (t = e.id) ? void 0 : t.length) > 0
                    ? e.id
                    : xl++,
                i = this.toasts.find((e) => e.id === a),
                o = void 0 === e.dismissible || e.dismissible;
              return (
                this.dismissedToasts.has(a) && this.dismissedToasts.delete(a),
                i
                  ? (this.toasts = this.toasts.map((t) =>
                      t.id === a
                        ? (this.publish(
                            u(u(u({}, t), e), {}, { id: a, title: n })
                          ),
                          u(
                            u(u({}, t), e),
                            {},
                            { id: a, dismissible: o, title: n }
                          ))
                        : t
                    ))
                  : this.addToast(
                      u(u({ title: n }, r), {}, { dismissible: o, id: a })
                    ),
                a
              );
            }),
            (this.dismiss = (e) => (
              e
                ? (this.dismissedToasts.add(e),
                  requestAnimationFrame(() =>
                    this.subscribers.forEach((t) => t({ id: e, dismiss: !0 }))
                  ))
                : this.toasts.forEach((e) => {
                    this.subscribers.forEach((t) =>
                      t({ id: e.id, dismiss: !0 })
                    );
                  }),
              e
            )),
            (this.message = (e, t) =>
              this.create(u(u({}, t), {}, { message: e }))),
            (this.error = (e, t) =>
              this.create(u(u({}, t), {}, { message: e, type: "error" }))),
            (this.success = (e, t) =>
              this.create(u(u({}, t), {}, { type: "success", message: e }))),
            (this.info = (e, t) =>
              this.create(u(u({}, t), {}, { type: "info", message: e }))),
            (this.warning = (e, t) =>
              this.create(u(u({}, t), {}, { type: "warning", message: e }))),
            (this.loading = (e, t) =>
              this.create(u(u({}, t), {}, { type: "loading", message: e }))),
            (this.promise = (t, n) => {
              if (!n) return;
              let r;
              void 0 !== n.loading &&
                (r = this.create(
                  u(
                    u({}, n),
                    {},
                    {
                      promise: t,
                      type: "loading",
                      message: n.loading,
                      description:
                        "function" !== typeof n.description
                          ? n.description
                          : void 0,
                    }
                  )
                ));
              const a = Promise.resolve(t instanceof Function ? t() : t);
              let i,
                o = void 0 !== r;
              const s = a
                  .then(async (t) => {
                    i = ["resolve", t];
                    if (e.isValidElement(t))
                      (o = !1),
                        this.create({ id: r, type: "default", message: t });
                    else if (kl(t) && !t.ok) {
                      o = !1;
                      const a =
                          "function" === typeof n.error
                            ? await n.error(
                                "HTTP error! status: ".concat(t.status)
                              )
                            : n.error,
                        i =
                          "function" === typeof n.description
                            ? await n.description(
                                "HTTP error! status: ".concat(t.status)
                              )
                            : n.description,
                        s =
                          "object" === typeof a && !e.isValidElement(a)
                            ? a
                            : { message: a };
                      this.create(
                        u({ id: r, type: "error", description: i }, s)
                      );
                    } else if (t instanceof Error) {
                      o = !1;
                      const a =
                          "function" === typeof n.error
                            ? await n.error(t)
                            : n.error,
                        i =
                          "function" === typeof n.description
                            ? await n.description(t)
                            : n.description,
                        s =
                          "object" === typeof a && !e.isValidElement(a)
                            ? a
                            : { message: a };
                      this.create(
                        u({ id: r, type: "error", description: i }, s)
                      );
                    } else if (void 0 !== n.success) {
                      o = !1;
                      const a =
                          "function" === typeof n.success
                            ? await n.success(t)
                            : n.success,
                        i =
                          "function" === typeof n.description
                            ? await n.description(t)
                            : n.description,
                        s =
                          "object" === typeof a && !e.isValidElement(a)
                            ? a
                            : { message: a };
                      this.create(
                        u({ id: r, type: "success", description: i }, s)
                      );
                    }
                  })
                  .catch(async (t) => {
                    if (((i = ["reject", t]), void 0 !== n.error)) {
                      o = !1;
                      const a =
                          "function" === typeof n.error
                            ? await n.error(t)
                            : n.error,
                        i =
                          "function" === typeof n.description
                            ? await n.description(t)
                            : n.description,
                        s =
                          "object" === typeof a && !e.isValidElement(a)
                            ? a
                            : { message: a };
                      this.create(
                        u({ id: r, type: "error", description: i }, s)
                      );
                    }
                  })
                  .finally(() => {
                    o && (this.dismiss(r), (r = void 0)),
                      null == n.finally || n.finally.call(n);
                  }),
                l = () =>
                  new Promise((e, t) =>
                    s
                      .then(() => ("reject" === i[0] ? t(i[1]) : e(i[1])))
                      .catch(t)
                  );
              return "string" !== typeof r && "number" !== typeof r
                ? { unwrap: l }
                : Object.assign(r, { unwrap: l });
            }),
            (this.custom = (e, t) => {
              const n = (null == t ? void 0 : t.id) || xl++;
              return this.create(u({ jsx: e(n), id: n }, t)), n;
            }),
            (this.getActiveToasts = () =>
              this.toasts.filter((e) => !this.dismissedToasts.has(e.id))),
            (this.subscribers = []),
            (this.toasts = []),
            (this.dismissedToasts = new Set());
        }
      })(),
      kl = (e) =>
        e &&
        "object" === typeof e &&
        "ok" in e &&
        "boolean" === typeof e.ok &&
        "status" in e &&
        "number" === typeof e.status,
      El = (e, t) => {
        const n = (null == t ? void 0 : t.id) || xl++;
        return Sl.addToast(u(u({ title: e }, t), {}, { id: n })), n;
      },
      Tl = Object.assign(
        El,
        {
          success: Sl.success,
          info: Sl.info,
          warning: Sl.warning,
          error: Sl.error,
          custom: Sl.custom,
          message: Sl.message,
          promise: Sl.promise,
          dismiss: Sl.dismiss,
          loading: Sl.loading,
        },
        { getHistory: () => Sl.toasts, getToasts: () => Sl.getActiveToasts() }
      );
    function Cl(e) {
      return void 0 !== e.label;
    }
    !(function (e) {
      if (!e || "undefined" == typeof document) return;
      let t = document.head || document.getElementsByTagName("head")[0],
        n = document.createElement("style");
      (n.type = "text/css"),
        t.appendChild(n),
        n.styleSheet
          ? (n.styleSheet.cssText = e)
          : n.appendChild(document.createTextNode(e));
    })(
      "[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}"
    );
    const Pl = 3,
      Fl = 14;
    function Al() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return t.filter(Boolean).join(" ");
    }
    const Nl = (t) => {
      var n, r, a, i, o, s, l, c, d;
      const {
          invert: f,
          toast: h,
          unstyled: p,
          interacting: m,
          setHeights: g,
          visibleToasts: v,
          heights: y,
          index: b,
          toasts: w,
          expanded: x,
          removeToast: S,
          defaultRichColors: k,
          closeButton: E,
          style: T,
          cancelButtonStyle: C,
          actionButtonStyle: P,
          className: F = "",
          descriptionClassName: A = "",
          duration: N,
          position: D,
          gap: M,
          expandByDefault: L,
          classNames: j,
          icons: z,
          closeButtonAriaLabel: R = "Close toast",
        } = t,
        [O, _] = e.useState(null),
        [V, B] = e.useState(null),
        [I, U] = e.useState(!1),
        [H, W] = e.useState(!1),
        [$, Y] = e.useState(!1),
        [q, X] = e.useState(!1),
        [K, Q] = e.useState(!1),
        [G, Z] = e.useState(0),
        [J, ee] = e.useState(0),
        te = e.useRef(h.duration || N || 4e3),
        ne = e.useRef(null),
        re = e.useRef(null),
        ae = 0 === b,
        ie = b + 1 <= v,
        oe = h.type,
        se = !1 !== h.dismissible,
        le = h.className || "",
        ue = h.descriptionClassName || "",
        ce = e.useMemo(
          () => y.findIndex((e) => e.toastId === h.id) || 0,
          [y, h.id]
        ),
        de = e.useMemo(() => {
          var e;
          return null != (e = h.closeButton) ? e : E;
        }, [h.closeButton, E]),
        fe = e.useMemo(() => h.duration || N || 4e3, [h.duration, N]),
        he = e.useRef(0),
        pe = e.useRef(0),
        me = e.useRef(0),
        ge = e.useRef(null),
        [ve, ye] = D.split("-"),
        be = e.useMemo(
          () => y.reduce((e, t, n) => (n >= ce ? e : e + t.height), 0),
          [y, ce]
        ),
        we = (() => {
          const [t, n] = e.useState(document.hidden);
          return (
            e.useEffect(() => {
              const e = () => {
                n(document.hidden);
              };
              return (
                document.addEventListener("visibilitychange", e),
                () => window.removeEventListener("visibilitychange", e)
              );
            }, []),
            t
          );
        })(),
        xe = h.invert || f,
        Se = "loading" === oe;
      (pe.current = e.useMemo(() => ce * M + be, [ce, be])),
        e.useEffect(() => {
          te.current = fe;
        }, [fe]),
        e.useEffect(() => {
          U(!0);
        }, []),
        e.useEffect(() => {
          const e = re.current;
          if (e) {
            const t = e.getBoundingClientRect().height;
            return (
              ee(t),
              g((e) => [
                { toastId: h.id, height: t, position: h.position },
                ...e,
              ]),
              () => g((e) => e.filter((e) => e.toastId !== h.id))
            );
          }
        }, [g, h.id]),
        e.useLayoutEffect(() => {
          if (!I) return;
          const e = re.current,
            t = e.style.height;
          e.style.height = "auto";
          const n = e.getBoundingClientRect().height;
          (e.style.height = t),
            ee(n),
            g((e) =>
              e.find((e) => e.toastId === h.id)
                ? e.map((e) =>
                    e.toastId === h.id ? u(u({}, e), {}, { height: n }) : e
                  )
                : [{ toastId: h.id, height: n, position: h.position }, ...e]
            );
        }, [I, h.title, h.description, g, h.id, h.jsx, h.action, h.cancel]);
      const ke = e.useCallback(() => {
        W(!0),
          Z(pe.current),
          g((e) => e.filter((e) => e.toastId !== h.id)),
          setTimeout(() => {
            S(h);
          }, 200);
      }, [h, S, g, pe]);
      e.useEffect(() => {
        if (
          (h.promise && "loading" === oe) ||
          h.duration === 1 / 0 ||
          "loading" === h.type
        )
          return;
        let e;
        return (
          x || m || we
            ? (() => {
                if (me.current < he.current) {
                  const e = new Date().getTime() - he.current;
                  te.current = te.current - e;
                }
                me.current = new Date().getTime();
              })()
            : te.current !== 1 / 0 &&
              ((he.current = new Date().getTime()),
              (e = setTimeout(() => {
                null == h.onAutoClose || h.onAutoClose.call(h, h), ke();
              }, te.current))),
          () => clearTimeout(e)
        );
      }, [x, m, h, oe, we, ke]),
        e.useEffect(() => {
          h.delete && (ke(), null == h.onDismiss || h.onDismiss.call(h, h));
        }, [ke, h.delete]);
      const Ee =
        h.icon ||
        (null == z ? void 0 : z[oe]) ||
        ((e) => {
          switch (e) {
            case "success":
              return gl;
            case "info":
              return yl;
            case "warning":
              return vl;
            case "error":
              return bl;
            default:
              return null;
          }
        })(oe);
      var Te, Ce;
      return e.createElement(
        "li",
        {
          tabIndex: 0,
          ref: re,
          className: Al(
            F,
            le,
            null == j ? void 0 : j.toast,
            null == h || null == (n = h.classNames) ? void 0 : n.toast,
            null == j ? void 0 : j.default,
            null == j ? void 0 : j[oe],
            null == h || null == (r = h.classNames) ? void 0 : r[oe]
          ),
          "data-sonner-toast": "",
          "data-rich-colors": null != (Te = h.richColors) ? Te : k,
          "data-styled": !Boolean(h.jsx || h.unstyled || p),
          "data-mounted": I,
          "data-promise": Boolean(h.promise),
          "data-swiped": K,
          "data-removed": H,
          "data-visible": ie,
          "data-y-position": ve,
          "data-x-position": ye,
          "data-index": b,
          "data-front": ae,
          "data-swiping": $,
          "data-dismissible": se,
          "data-type": oe,
          "data-invert": xe,
          "data-swipe-out": q,
          "data-swipe-direction": V,
          "data-expanded": Boolean(x || (L && I)),
          "data-testid": h.testId,
          style: u(
            u(
              {
                "--index": b,
                "--toasts-before": b,
                "--z-index": w.length - b,
                "--offset": "".concat(H ? G : pe.current, "px"),
                "--initial-height": L ? "auto" : "".concat(J, "px"),
              },
              T
            ),
            h.style
          ),
          onDragEnd: () => {
            Y(!1), _(null), (ge.current = null);
          },
          onPointerDown: (e) => {
            2 !== e.button &&
              !Se &&
              se &&
              ((ne.current = new Date()),
              Z(pe.current),
              e.target.setPointerCapture(e.pointerId),
              "BUTTON" !== e.target.tagName &&
                (Y(!0), (ge.current = { x: e.clientX, y: e.clientY })));
          },
          onPointerUp: () => {
            var e, t, n;
            if (q || !se) return;
            ge.current = null;
            const r = Number(
                (null == (e = re.current)
                  ? void 0
                  : e.style
                      .getPropertyValue("--swipe-amount-x")
                      .replace("px", "")) || 0
              ),
              a = Number(
                (null == (t = re.current)
                  ? void 0
                  : t.style
                      .getPropertyValue("--swipe-amount-y")
                      .replace("px", "")) || 0
              ),
              i =
                new Date().getTime() -
                (null == (n = ne.current) ? void 0 : n.getTime()),
              o = "x" === O ? r : a,
              s = Math.abs(o) / i;
            if (Math.abs(o) >= 45 || s > 0.11)
              return (
                Z(pe.current),
                null == h.onDismiss || h.onDismiss.call(h, h),
                B(
                  "x" === O ? (r > 0 ? "right" : "left") : a > 0 ? "down" : "up"
                ),
                ke(),
                void X(!0)
              );
            var l, u;
            null == (l = re.current) ||
              l.style.setProperty("--swipe-amount-x", "0px"),
              null == (u = re.current) ||
                u.style.setProperty("--swipe-amount-y", "0px"),
              Q(!1),
              Y(!1),
              _(null);
          },
          onPointerMove: (e) => {
            var n, r, a;
            if (!ge.current || !se) return;
            if (
              (null == (n = window.getSelection())
                ? void 0
                : n.toString().length) > 0
            )
              return;
            const i = e.clientY - ge.current.y,
              o = e.clientX - ge.current.x;
            var s;
            const l =
              null != (s = t.swipeDirections)
                ? s
                : (function (e) {
                    const [t, n] = e.split("-"),
                      r = [];
                    return t && r.push(t), n && r.push(n), r;
                  })(D);
            !O &&
              (Math.abs(o) > 1 || Math.abs(i) > 1) &&
              _(Math.abs(o) > Math.abs(i) ? "x" : "y");
            let u = { x: 0, y: 0 };
            const c = (e) => 1 / (1.5 + Math.abs(e) / 20);
            if ("y" === O) {
              if (l.includes("top") || l.includes("bottom"))
                if (
                  (l.includes("top") && i < 0) ||
                  (l.includes("bottom") && i > 0)
                )
                  u.y = i;
                else {
                  const e = i * c(i);
                  u.y = Math.abs(e) < Math.abs(i) ? e : i;
                }
            } else if ("x" === O && (l.includes("left") || l.includes("right")))
              if (
                (l.includes("left") && o < 0) ||
                (l.includes("right") && o > 0)
              )
                u.x = o;
              else {
                const e = o * c(o);
                u.x = Math.abs(e) < Math.abs(o) ? e : o;
              }
            (Math.abs(u.x) > 0 || Math.abs(u.y) > 0) && Q(!0),
              null == (r = re.current) ||
                r.style.setProperty("--swipe-amount-x", "".concat(u.x, "px")),
              null == (a = re.current) ||
                a.style.setProperty("--swipe-amount-y", "".concat(u.y, "px"));
          },
        },
        de && !h.jsx && "loading" !== oe
          ? e.createElement(
              "button",
              {
                "aria-label": R,
                "data-disabled": Se,
                "data-close-button": !0,
                onClick:
                  Se || !se
                    ? () => {}
                    : () => {
                        ke(), null == h.onDismiss || h.onDismiss.call(h, h);
                      },
                className: Al(
                  null == j ? void 0 : j.closeButton,
                  null == h || null == (a = h.classNames)
                    ? void 0
                    : a.closeButton
                ),
              },
              null != (Ce = null == z ? void 0 : z.close) ? Ce : wl
            )
          : null,
        (oe || h.icon || h.promise) &&
          null !== h.icon &&
          (null !== (null == z ? void 0 : z[oe]) || h.icon)
          ? e.createElement(
              "div",
              {
                "data-icon": "",
                className: Al(
                  null == j ? void 0 : j.icon,
                  null == h || null == (i = h.classNames) ? void 0 : i.icon
                ),
              },
              h.promise || ("loading" === h.type && !h.icon)
                ? h.icon ||
                    (function () {
                      var t, n;
                      return (null == z ? void 0 : z.loading)
                        ? e.createElement(
                            "div",
                            {
                              className: Al(
                                null == j ? void 0 : j.loader,
                                null == h || null == (n = h.classNames)
                                  ? void 0
                                  : n.loader,
                                "sonner-loader"
                              ),
                              "data-visible": "loading" === oe,
                            },
                            z.loading
                          )
                        : e.createElement(ml, {
                            className: Al(
                              null == j ? void 0 : j.loader,
                              null == h || null == (t = h.classNames)
                                ? void 0
                                : t.loader
                            ),
                            visible: "loading" === oe,
                          });
                    })()
                : null,
              "loading" !== h.type ? Ee : null
            )
          : null,
        e.createElement(
          "div",
          {
            "data-content": "",
            className: Al(
              null == j ? void 0 : j.content,
              null == h || null == (o = h.classNames) ? void 0 : o.content
            ),
          },
          e.createElement(
            "div",
            {
              "data-title": "",
              className: Al(
                null == j ? void 0 : j.title,
                null == h || null == (s = h.classNames) ? void 0 : s.title
              ),
            },
            h.jsx ? h.jsx : "function" === typeof h.title ? h.title() : h.title
          ),
          h.description
            ? e.createElement(
                "div",
                {
                  "data-description": "",
                  className: Al(
                    A,
                    ue,
                    null == j ? void 0 : j.description,
                    null == h || null == (l = h.classNames)
                      ? void 0
                      : l.description
                  ),
                },
                "function" === typeof h.description
                  ? h.description()
                  : h.description
              )
            : null
        ),
        e.isValidElement(h.cancel)
          ? h.cancel
          : h.cancel && Cl(h.cancel)
          ? e.createElement(
              "button",
              {
                "data-button": !0,
                "data-cancel": !0,
                style: h.cancelButtonStyle || C,
                onClick: (e) => {
                  Cl(h.cancel) &&
                    se &&
                    (null == h.cancel.onClick ||
                      h.cancel.onClick.call(h.cancel, e),
                    ke());
                },
                className: Al(
                  null == j ? void 0 : j.cancelButton,
                  null == h || null == (c = h.classNames)
                    ? void 0
                    : c.cancelButton
                ),
              },
              h.cancel.label
            )
          : null,
        e.isValidElement(h.action)
          ? h.action
          : h.action && Cl(h.action)
          ? e.createElement(
              "button",
              {
                "data-button": !0,
                "data-action": !0,
                style: h.actionButtonStyle || P,
                onClick: (e) => {
                  Cl(h.action) &&
                    (null == h.action.onClick ||
                      h.action.onClick.call(h.action, e),
                    e.defaultPrevented || ke());
                },
                className: Al(
                  null == j ? void 0 : j.actionButton,
                  null == h || null == (d = h.classNames)
                    ? void 0
                    : d.actionButton
                ),
              },
              h.action.label
            )
          : null
      );
    };
    function Dl() {
      if ("undefined" === typeof window) return "ltr";
      if ("undefined" === typeof document) return "ltr";
      const e = document.documentElement.getAttribute("dir");
      return "auto" !== e && e
        ? e
        : window.getComputedStyle(document.documentElement).direction;
    }
    function Ml(e, t) {
      const n = {};
      return (
        [e, t].forEach((e, t) => {
          const r = 1 === t,
            a = r ? "--mobile-offset" : "--offset",
            i = r ? "16px" : "24px";
          function o(e) {
            ["top", "right", "bottom", "left"].forEach((t) => {
              n["".concat(a, "-").concat(t)] =
                "number" === typeof e ? "".concat(e, "px") : e;
            });
          }
          "number" === typeof e || "string" === typeof e
            ? o(e)
            : "object" === typeof e
            ? ["top", "right", "bottom", "left"].forEach((t) => {
                void 0 === e[t]
                  ? (n["".concat(a, "-").concat(t)] = i)
                  : (n["".concat(a, "-").concat(t)] =
                      "number" === typeof e[t] ? "".concat(e[t], "px") : e[t]);
              })
            : o(i);
        }),
        n
      );
    }
    const Ll = e.forwardRef(function (t, n) {
      const {
          id: r,
          invert: a,
          position: i = "bottom-right",
          hotkey: o = ["altKey", "KeyT"],
          expand: s,
          closeButton: l,
          className: c,
          offset: d,
          mobileOffset: f,
          theme: h = "light",
          richColors: p,
          duration: m,
          style: g,
          visibleToasts: v = Pl,
          toastOptions: y,
          dir: b = Dl(),
          gap: w = Fl,
          icons: x,
          containerAriaLabel: S = "Notifications",
        } = t,
        [k, E] = e.useState([]),
        T = e.useMemo(
          () =>
            r
              ? k.filter((e) => e.toasterId === r)
              : k.filter((e) => !e.toasterId),
          [k, r]
        ),
        C = e.useMemo(
          () =>
            Array.from(
              new Set(
                [i].concat(T.filter((e) => e.position).map((e) => e.position))
              )
            ),
          [T, i]
        ),
        [P, F] = e.useState([]),
        [A, N] = e.useState(!1),
        [D, M] = e.useState(!1),
        [L, j] = e.useState(
          "system" !== h
            ? h
            : "undefined" !== typeof window &&
              window.matchMedia &&
              window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light"
        ),
        z = e.useRef(null),
        R = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
        O = e.useRef(null),
        _ = e.useRef(!1),
        V = e.useCallback((e) => {
          E((t) => {
            var n;
            return (
              (null == (n = t.find((t) => t.id === e.id))
                ? void 0
                : n.delete) || Sl.dismiss(e.id),
              t.filter((t) => {
                let { id: n } = t;
                return n !== e.id;
              })
            );
          });
        }, []);
      return (
        e.useEffect(
          () =>
            Sl.subscribe((e) => {
              e.dismiss
                ? requestAnimationFrame(() => {
                    E((t) =>
                      t.map((t) =>
                        t.id === e.id ? u(u({}, t), {}, { delete: !0 }) : t
                      )
                    );
                  })
                : setTimeout(() => {
                    fl.flushSync(() => {
                      E((t) => {
                        const n = t.findIndex((t) => t.id === e.id);
                        return -1 !== n
                          ? [
                              ...t.slice(0, n),
                              u(u({}, t[n]), e),
                              ...t.slice(n + 1),
                            ]
                          : [e, ...t];
                      });
                    });
                  });
            }),
          [k]
        ),
        e.useEffect(() => {
          if ("system" !== h) return void j(h);
          if (
            ("system" === h &&
              (window.matchMedia &&
              window.matchMedia("(prefers-color-scheme: dark)").matches
                ? j("dark")
                : j("light")),
            "undefined" === typeof window)
          )
            return;
          const e = window.matchMedia("(prefers-color-scheme: dark)");
          try {
            e.addEventListener("change", (e) => {
              let { matches: t } = e;
              j(t ? "dark" : "light");
            });
          } catch (t) {
            e.addListener((e) => {
              let { matches: t } = e;
              try {
                j(t ? "dark" : "light");
              } catch (n) {
                console.error(n);
              }
            });
          }
        }, [h]),
        e.useEffect(() => {
          k.length <= 1 && N(!1);
        }, [k]),
        e.useEffect(() => {
          const e = (e) => {
            var t;
            var n;
            o.every((t) => e[t] || e.code === t) &&
              (N(!0), null == (n = z.current) || n.focus());
            "Escape" !== e.code ||
              (document.activeElement !== z.current &&
                !(null == (t = z.current)
                  ? void 0
                  : t.contains(document.activeElement))) ||
              N(!1);
          };
          return (
            document.addEventListener("keydown", e),
            () => document.removeEventListener("keydown", e)
          );
        }, [o]),
        e.useEffect(() => {
          if (z.current)
            return () => {
              O.current &&
                (O.current.focus({ preventScroll: !0 }),
                (O.current = null),
                (_.current = !1));
            };
        }, [z.current]),
        e.createElement(
          "section",
          {
            ref: n,
            "aria-label": "".concat(S, " ").concat(R),
            tabIndex: -1,
            "aria-live": "polite",
            "aria-relevant": "additions text",
            "aria-atomic": "false",
            suppressHydrationWarning: !0,
          },
          C.map((n, r) => {
            var i;
            const [o, h] = n.split("-");
            return T.length
              ? e.createElement(
                  "ol",
                  {
                    key: n,
                    dir: "auto" === b ? Dl() : b,
                    tabIndex: -1,
                    ref: z,
                    className: c,
                    "data-sonner-toaster": !0,
                    "data-sonner-theme": L,
                    "data-y-position": o,
                    "data-x-position": h,
                    style: u(
                      u(
                        {
                          "--front-toast-height": "".concat(
                            (null == (i = P[0]) ? void 0 : i.height) || 0,
                            "px"
                          ),
                          "--width": "".concat(356, "px"),
                          "--gap": "".concat(w, "px"),
                        },
                        g
                      ),
                      Ml(d, f)
                    ),
                    onBlur: (e) => {
                      _.current &&
                        !e.currentTarget.contains(e.relatedTarget) &&
                        ((_.current = !1),
                        O.current &&
                          (O.current.focus({ preventScroll: !0 }),
                          (O.current = null)));
                    },
                    onFocus: (e) => {
                      (e.target instanceof HTMLElement &&
                        "false" === e.target.dataset.dismissible) ||
                        _.current ||
                        ((_.current = !0), (O.current = e.relatedTarget));
                    },
                    onMouseEnter: () => N(!0),
                    onMouseMove: () => N(!0),
                    onMouseLeave: () => {
                      D || N(!1);
                    },
                    onDragEnd: () => N(!1),
                    onPointerDown: (e) => {
                      (e.target instanceof HTMLElement &&
                        "false" === e.target.dataset.dismissible) ||
                        M(!0);
                    },
                    onPointerUp: () => M(!1),
                  },
                  T.filter(
                    (e) => (!e.position && 0 === r) || e.position === n
                  ).map((r, i) => {
                    var o, u;
                    return e.createElement(Nl, {
                      key: r.id,
                      icons: x,
                      index: i,
                      toast: r,
                      defaultRichColors: p,
                      duration:
                        null != (o = null == y ? void 0 : y.duration) ? o : m,
                      className: null == y ? void 0 : y.className,
                      descriptionClassName:
                        null == y ? void 0 : y.descriptionClassName,
                      invert: a,
                      visibleToasts: v,
                      closeButton:
                        null != (u = null == y ? void 0 : y.closeButton)
                          ? u
                          : l,
                      interacting: D,
                      position: n,
                      style: null == y ? void 0 : y.style,
                      unstyled: null == y ? void 0 : y.unstyled,
                      classNames: null == y ? void 0 : y.classNames,
                      cancelButtonStyle:
                        null == y ? void 0 : y.cancelButtonStyle,
                      actionButtonStyle:
                        null == y ? void 0 : y.actionButtonStyle,
                      closeButtonAriaLabel:
                        null == y ? void 0 : y.closeButtonAriaLabel,
                      removeToast: V,
                      toasts: T.filter((e) => e.position == r.position),
                      heights: P.filter((e) => e.position == r.position),
                      setHeights: F,
                      expandByDefault: s,
                      gap: w,
                      expanded: A,
                      swipeDirections: t.swipeDirections,
                    });
                  })
                )
              : null;
          })
        )
      );
    });
    const jl = "0xpumpfun",
      zl = "https://pump.fun/coin/0xpumpfun",
      Rl = "https://x.com/brwotonsol",
      Ol = "https://x.com/i/communities/#",
      RL = "https://t.me/browtonsol",
      _l =
        "https://customer-assets.emergentagent.com/job_browt-preview/artifacts/lo3clpz5_image.png",
      Vl = (e) => {
        let { onEnter: t } = e;
        return (0, Vn.jsxs)(Ws.div, {
          className:
            "fixed inset-0 z-50 bg-[#0a2010] flex flex-col items-center justify-center",
          exit: { opacity: 0 },
          transition: { duration: 0.5 },
          children: [
            (0, Vn.jsxs)("div", {
              className: "absolute inset-0 overflow-hidden pointer-events-none",
              children: [
                (0, Vn.jsx)("img", {
                  src: "https://customer-assets.emergentagent.com/job_browt-preview/artifacts/258bt5nv_image.jpeg",
                  alt: "",
                  className: "w-full h-full object-cover opacity-30",
                }),
                (0, Vn.jsx)("div", {
                  className:
                    "absolute inset-0 bg-gradient-to-b from-[#0a2010]/80 via-[#0a2010]/60 to-[#0a2010]/80",
                }),
              ],
            }),
            (0, Vn.jsx)(Ws.img, {
              src: _l,
              alt: "Browt",
              className:
                "w-48 h-48 md:w-64 md:h-64 object-contain mb-8 relative z-10",
              initial: { scale: 0, rotate: -180 },
              animate: { scale: 1, rotate: 0 },
              transition: { type: "spring", duration: 1.5 },
            }),
            (0, Vn.jsx)(Ws.h1, {
              className:
                "font-bangers text-5xl md:text-7xl text-[#FFDA44] text-shadow text-center mb-4 relative z-10",
              initial: { y: 50, opacity: 0 },
              animate: { y: 0, opacity: 1 },
              transition: { delay: 0.5 },
              children: "$BROWT",
            }),
            (0, Vn.jsx)(Ws.p, {
              className:
                "font-bangers text-xl md:text-2xl text-[#7CFC00] text-shadow-sm mb-12 text-center relative z-10",
              initial: { y: 30, opacity: 0 },
              animate: { y: 0, opacity: 1 },
              transition: { delay: 0.7 },
              children: "10TH GENERATION GRASS-TYPE POKEMON",
            }),
            (0, Vn.jsx)(Ws.button, {
              onClick: t,
              className:
                "btn-primary px-12 py-5 text-3xl animate-pulse-glow relative z-10",
              initial: { scale: 0 },
              animate: { scale: 1 },
              transition: { delay: 1, type: "spring" },
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.95 },
              "data-testid": "enter-button",
              children: "ENTER BROWT",
            }),
            (0, Vn.jsx)(Ws.p, {
              className: "font-mono text-sm text-[#7CFC00] mt-8 relative z-10",
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 1.5 },
              children: "Click to enter the world of Browt",
            }),
          ],
        });
      },
      Bl = (e) => {
        let { className: t } = e;
        return (0, Vn.jsx)("svg", {
          viewBox: "0 0 24 24",
          className: t,
          fill: "currentColor",
          children: (0, Vn.jsx)("path", {
            d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
          }),
        });
      },
      Il = () =>
        (0, Vn.jsx)("div", {
          className: "flex justify-center py-8",
          children: (0, Vn.jsx)(Ws.div, {
            animate: { y: [0, 10, 0] },
            transition: { repeat: 1 / 0, duration: 1.5 },
            className: "text-[#FFDA44]",
            children: (0, Vn.jsx)(ll, { size: 40 }),
          }),
        }),
      Ul = () => {
        const [t, n] = (0, e.useState)(!1);
        return (0, Vn.jsxs)("section", {
          className:
            "min-h-screen relative flex flex-col items-center justify-center px-4 py-20 overflow-hidden bg-[#0a2010]",
          children: [
            (0, Vn.jsxs)("div", {
              className: "absolute inset-0 z-0",
              children: [
                (0, Vn.jsx)("img", {
                  src: "https://customer-assets.emergentagent.com/job_browt-preview/artifacts/nhy5gruh_image.jpeg",
                  alt: "",
                  className: "w-full h-full object-cover",
                  "data-testid": "hero-background",
                }),
                (0, Vn.jsx)("div", {
                  className: "absolute inset-0 bg-[#0a2010]/50",
                }),
              ],
            }),
            (0, Vn.jsx)(Ws.div, {
              className: "mb-8 z-10",
              initial: { scale: 0, rotate: -180 },
              animate: { scale: 1, rotate: 0 },
              transition: { type: "spring", duration: 1 },
              children: (0, Vn.jsx)("img", {
                src: _l,
                alt: "Browt - 10th Generation Grass-Type Pokemon",
                className:
                  "w-64 h-64 md:w-80 md:h-80 object-contain animate-float",
                "data-testid": "hero-logo",
              }),
            }),
            (0, Vn.jsx)(Ws.h1, {
              className:
                "font-bangers text-6xl md:text-8xl lg:text-9xl text-[#FFDA44] text-shadow text-center z-10",
              initial: { y: 50, opacity: 0 },
              animate: { y: 0, opacity: 1 },
              transition: { delay: 0.3 },
              "data-testid": "hero-title",
              children: "$BROWT",
            }),
            (0, Vn.jsx)(Ws.p, {
              className:
                "font-bangers text-2xl md:text-4xl text-[#7CFC00] text-shadow-sm mt-4 text-center z-10",
              initial: { y: 30, opacity: 0 },
              animate: { y: 0, opacity: 1 },
              transition: { delay: 0.5 },
              "data-testid": "hero-subtitle",
              children: "10TH GENERATION GRASS-TYPE POKEMON",
            }),
            (0, Vn.jsx)(Ws.div, {
              className: "flex flex-col sm:flex-row gap-4 mt-10 z-10",
              initial: { y: 30, opacity: 0 },
              animate: { y: 0, opacity: 1 },
              transition: { delay: 0.9 },
              children: (0, Vn.jsx)("a", {
                href: zl,
                target: "_blank",
                rel: "noopener noreferrer",
                className:
                  "btn-primary px-10 py-4 text-2xl flex items-center gap-3 hover:rotate-0 transition-transform",
                "data-testid": "buy-button",
                children: "BUY $BROWT",
              }),
            }),
            (0, Vn.jsxs)(Ws.div, {
              className: "flex gap-6 mt-8 z-10",
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 1.1 },
              children: [
                (0, Vn.jsx)("a", {
                  href: Rl,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "social-btn border-[#FFDA44] text-[#FFDA44] hover:border-[#7CFC00]",
                  "data-testid": "x-link",
                  title: "X Profile",
                  children: (0, Vn.jsx)(Bl, { className: "w-7 h-7" }),
                }),
                (0, Vn.jsx)("a", {
                  href: Ol,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "social-btn border-[#7CFC00] text-[#7CFC00] hover:border-[#FFDA44]",
                  "data-testid": "community-link",
                  title: "X Community",
                  children: (0, Vn.jsx)("svg", {
                    viewBox: "0 0 24 24",
                    className: "w-7 h-7",
                    fill: "currentColor",
                    children: (0, Vn.jsx)("path", {
                      d: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z",
                    }),
                  }),
                }),
              ],
            }),
            (0, Vn.jsx)(Ws.div, {
              className: "mt-12 w-full max-w-2xl px-4 z-10",
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 1.3 },
              children: (0, Vn.jsx)("div", {
                className: "ca-box p-4 cursor-pointer transition-all ".concat(
                  t ? "copy-success" : ""
                ),
                onClick: () => {
                  navigator.clipboard.writeText(jl),
                    n(!0),
                    Tl.success("Contract Address Copied!"),
                    setTimeout(() => n(!1), 2e3);
                },
                "data-testid": "contract-address",
                children: (0, Vn.jsxs)("div", {
                  className: "flex items-center justify-between gap-4",
                  children: [
                    (0, Vn.jsx)("p", {
                      className:
                        "font-mono text-xs md:text-sm text-[#90EE90] break-all",
                      children: jl,
                    }),
                    (0, Vn.jsx)("button", {
                      className:
                        "flex-shrink-0 text-[#FFDA44] hover:text-[#7CFC00] transition-colors",
                      children: t
                        ? (0, Vn.jsx)(ul, { size: 24 })
                        : (0, Vn.jsx)(cl, { size: 24 }),
                    }),
                  ],
                }),
              }),
            }),
            (0, Vn.jsx)("div", {
              className: "absolute bottom-4 left-1/2 -translate-x-1/2 z-10",
              children: (0, Vn.jsx)(Ws.div, {
                animate: { y: [0, 10, 0] },
                transition: { repeat: 1 / 0, duration: 1.5 },
                className: "text-[#FFDA44]",
                children: (0, Vn.jsx)(ll, { size: 40 }),
              }),
            }),
          ],
        });
      },
      Hl = () =>
        (0, Vn.jsx)("div", {
          className: "marquee-container py-3",
          "data-testid": "marquee-section",
          children: (0, Vn.jsxs)(el.A, {
            gradient: !1,
            speed: 60,
            children: [
              (0, Vn.jsx)("span", {
                className:
                  "font-bangers text-3xl md:text-4xl text-[#006400] mx-8",
                children: "$BROWT",
              }),
              (0, Vn.jsx)("span", {
                className:
                  "font-bangers text-3xl md:text-4xl text-[#006400] mx-8",
                children: "GRASS-TYPE POKEMON",
              }),
              (0, Vn.jsx)("span", {
                className:
                  "font-bangers text-3xl md:text-4xl text-[#006400] mx-8",
                children: "10TH GENERATION",
              }),
              (0, Vn.jsx)("span", {
                className:
                  "font-bangers text-3xl md:text-4xl text-[#006400] mx-8",
                children: "PUMP IT",
              }),
              (0, Vn.jsx)("span", {
                className:
                  "font-bangers text-3xl md:text-4xl text-[#006400] mx-8",
                children: "BROWT ON SOLANA",
              }),
            ],
          }),
        }),
      Wl = () =>
        (0, Vn.jsxs)("section", {
          className: "py-24 px-4 relative overflow-hidden",
          "data-testid": "lore-section",
          children: [
            (0, Vn.jsxs)("div", {
              className: "absolute inset-0 z-0",
              children: [
                (0, Vn.jsx)("img", {
                  src: "https://customer-assets.emergentagent.com/job_browt-preview/artifacts/hqlvm53h_image.jpeg",
                  alt: "",
                  className: "w-full h-full object-cover",
                }),
                (0, Vn.jsx)("div", {
                  className: "absolute inset-0 bg-[#0a2010]/70",
                }),
              ],
            }),
            (0, Vn.jsxs)("div", {
              className: "relative z-10 max-w-6xl mx-auto",
              children: [
                (0, Vn.jsxs)(Ws.div, {
                  initial: { opacity: 0, y: 30 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: !0 },
                  transition: { duration: 0.6 },
                  children: [
                    (0, Vn.jsx)("h2", {
                      className:
                        "font-bangers text-5xl md:text-7xl text-[#FFDA44] text-shadow mb-12 text-center",
                      children: "THE LORE",
                    }),
                    (0, Vn.jsxs)("div", {
                      className:
                        "grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8",
                      children: [
                        (0, Vn.jsx)(Ws.div, {
                          className: "rounded-xl overflow-hidden shadow-lg",
                          initial: { opacity: 0, x: -30 },
                          whileInView: { opacity: 1, x: 0 },
                          viewport: { once: !0 },
                          transition: { delay: 0.1 },
                          whileHover: { scale: 1.02 },
                          children: (0, Vn.jsx)("img", {
                            src: "https://customer-assets.emergentagent.com/job_browt-preview/artifacts/4n1jfg0g_image.png",
                            alt: "Dexerto Tweet - 10th Generation Pokemon Starters Revealed",
                            className: "w-full h-auto",
                          }),
                        }),
                        (0, Vn.jsx)(Ws.div, {
                          className: "rounded-xl overflow-hidden shadow-lg",
                          initial: { opacity: 0, x: 30 },
                          whileInView: { opacity: 1, x: 0 },
                          viewport: { once: !0 },
                          transition: { delay: 0.2 },
                          whileHover: { scale: 1.02 },
                          children: (0, Vn.jsx)("img", {
                            src: "https://customer-assets.emergentagent.com/job_browt-preview/artifacts/qkhitocc_image.png",
                            alt: "IGN Tweet - Pokemon Winds and Waves Starters",
                            className: "w-full h-auto",
                          }),
                        }),
                      ],
                    }),
                    (0, Vn.jsxs)("div", {
                      className:
                        "grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8",
                      children: [
                        (0, Vn.jsx)(Ws.div, {
                          className: "rounded-xl overflow-hidden shadow-lg",
                          initial: { opacity: 0, y: 30 },
                          whileInView: { opacity: 1, y: 0 },
                          viewport: { once: !0 },
                          transition: { delay: 0.3 },
                          whileHover: { scale: 1.02 },
                          children: (0, Vn.jsx)("img", {
                            src: "/assets/HCc2UrfWoAATcwi.jpg",
                            alt: "Browt Tweet - Reporting for duty",
                            className: "w-full h-auto",
                          }),
                        }),
                        (0, Vn.jsx)(Ws.div, {
                          className: "rounded-xl overflow-hidden shadow-lg",
                          initial: { opacity: 0, y: 30 },
                          whileInView: { opacity: 1, y: 0 },
                          viewport: { once: !0 },
                          transition: { delay: 0.4 },
                          whileHover: { scale: 1.02 },
                          children: (0, Vn.jsx)("img", {
                            src: "/assets/HCoUCSuXkAAXy9e.jpg",
                            alt: "Browt Tweet - Heard you twin",
                            className: "w-full h-auto",
                          }),
                        }),
                        (0, Vn.jsx)(Ws.div, {
                          className: "rounded-xl overflow-hidden shadow-lg",
                          initial: { opacity: 0, y: 30 },
                          whileInView: { opacity: 1, y: 0 },
                          viewport: { once: !0 },
                          transition: { delay: 0.5 },
                          whileHover: { scale: 1.02 },
                          children: (0, Vn.jsx)("img", {
                            src: "/assets/HClq3UaWQAA1hAO.jpg",
                            alt: "Browt Tweet - Hearing things",
                            className: "w-full h-auto",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, Vn.jsx)(Il, {}),
              ],
            }),
          ],
        }),
      $l = () =>
        (0, Vn.jsxs)("section", {
          className: "py-24 px-4 relative overflow-hidden",
          "data-testid": "chart-section",
          children: [
            (0, Vn.jsxs)("div", {
              className: "absolute inset-0 z-0",
              children: [
                (0, Vn.jsx)("img", {
                  src: "https://customer-assets.emergentagent.com/job_browt-preview/artifacts/x98b3ngr_image.jpeg",
                  alt: "",
                  className: "w-full h-full object-cover",
                }),
                (0, Vn.jsx)("div", {
                  className: "absolute inset-0 bg-[#0a2010]/80",
                }),
              ],
            }),
            (0, Vn.jsxs)("div", {
              className: "relative z-10 max-w-5xl mx-auto",
              children: [
                (0, Vn.jsx)(Ws.h2, {
                  className:
                    "font-bangers text-5xl md:text-7xl text-[#FFDA44] text-shadow mb-12 text-center",
                  initial: { opacity: 0, y: -30 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: !0 },
                  children: "LIVE CHART",
                }),
                (0, Vn.jsx)(Ws.div, {
                  className:
                    "w-full rounded-lg overflow-hidden border-4 border-[#7CFC00] shadow-lg shadow-[#7CFC00]/20",
                  initial: { opacity: 0, scale: 0.95 },
                  whileInView: { opacity: 1, scale: 1 },
                  viewport: { once: !0 },
                  transition: { delay: 0.2 },
                  children: (0, Vn.jsx)("iframe", {
                    src: "https://dexscreener.com/solana/0xcomingsoon?embed=1&theme=dark&trades=0&info=0",
                    title: "Browt Live Chart",
                    className: "w-full h-[500px] md:h-[600px]",
                    frameBorder: "0",
                    allowFullScreen: !0,
                  }),
                }),
                (0, Vn.jsx)(Ws.div, {
                  className: "mt-8 text-center",
                  initial: { opacity: 0 },
                  whileInView: { opacity: 1 },
                  viewport: { once: !0 },
                  transition: { delay: 0.4 },
                  children: (0, Vn.jsxs)("a", {
                    href: "https://dexscreener.com/solana/0xcomingsoon",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className:
                      "btn-secondary inline-flex items-center gap-2 px-8 py-3",
                    children: [
                      (0, Vn.jsx)(dl, { size: 20 }),
                      "View on DexScreener",
                    ],
                  }),
                }),
                (0, Vn.jsx)(Il, {}),
              ],
            }),
          ],
        }),
      Yl = () =>
        (0, Vn.jsxs)("section", {
          className: "py-24 px-4 relative overflow-hidden",
          "data-testid": "how-to-buy-section",
          children: [
            (0, Vn.jsxs)("div", {
              className: "absolute inset-0 z-0",
              children: [
                (0, Vn.jsx)("img", {
                  src: "https://customer-assets.emergentagent.com/job_browt-preview/artifacts/druxka9t_image.jpeg",
                  alt: "",
                  className: "w-full h-full object-cover",
                }),
                (0, Vn.jsx)("div", {
                  className: "absolute inset-0 bg-[#0a2010]/75",
                }),
              ],
            }),
            (0, Vn.jsxs)("div", {
              className: "relative z-10 max-w-5xl mx-auto",
              children: [
                (0, Vn.jsx)(Ws.h2, {
                  className:
                    "font-bangers text-5xl md:text-7xl text-[#FFDA44] text-shadow mb-16 text-left",
                  initial: { opacity: 0, x: -30 },
                  whileInView: { opacity: 1, x: 0 },
                  viewport: { once: !0 },
                  children: "HOW TO BUY",
                }),
                (0, Vn.jsx)("div", {
                  className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                  children: [
                    {
                      number: "1",
                      title: "Create a Wallet",
                      description:
                        "Download Phantom or Solflare wallet and create a new wallet. Save your seed phrase safely.",
                    },
                    {
                      number: "2",
                      title: "Get SOL",
                      description:
                        "Buy SOL from an exchange like Coinbase or Binance and send it to your wallet address.",
                    },
                    {
                      number: "3",
                      title: "Go to PumpFun",
                      description:
                        "Visit pump.fun and connect your wallet. Search for $Browt or use our direct link.",
                    },
                    {
                      number: "4",
                      title: "Swap for $Browt",
                      description:
                        "Enter the amount of SOL you want to swap and confirm the transaction. Welcome to the Browt family!",
                    },
                  ].map((e, t) =>
                    (0, Vn.jsxs)(
                      Ws.div,
                      {
                        className: "step-card card-wood p-6 pl-20",
                        initial: { opacity: 0, y: 30 },
                        whileInView: { opacity: 1, y: 0 },
                        viewport: { once: !0 },
                        transition: { delay: 0.1 * t },
                        "data-testid": "step-".concat(e.number),
                        children: [
                          (0, Vn.jsx)("div", {
                            className: "step-number",
                            children: e.number,
                          }),
                          (0, Vn.jsx)("h3", {
                            className:
                              "font-bangers text-2xl text-[#FFDA44] mb-3",
                            children: e.title,
                          }),
                          (0, Vn.jsx)("p", {
                            className: "font-mono text-sm text-[#90EE90]",
                            children: e.description,
                          }),
                        ],
                      },
                      e.number
                    )
                  ),
                }),
                (0, Vn.jsx)(Ws.div, {
                  className: "mt-12 text-center",
                  initial: { opacity: 0 },
                  whileInView: { opacity: 1 },
                  viewport: { once: !0 },
                  transition: { delay: 0.5 },
                  children: (0, Vn.jsxs)("a", {
                    href: zl,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className:
                      "btn-primary inline-flex items-center gap-3 px-12 py-5 text-2xl",
                    "data-testid": "buy-button-secondary",
                    children: [(0, Vn.jsx)(dl, { size: 24 }), "BUY ON PUMPFUN"],
                  }),
                }),
                (0, Vn.jsx)(Il, {}),
              ],
            }),
          ],
        }),
      ql = () =>
        (0, Vn.jsxs)("footer", {
          className: "py-16 px-4 relative overflow-hidden",
          "data-testid": "footer-section",
          children: [
            (0, Vn.jsxs)("div", {
              className: "absolute inset-0 z-0",
              children: [
                (0, Vn.jsx)("img", {
                  src: "https://customer-assets.emergentagent.com/job_browt-preview/artifacts/2i3vja1j_image.jpeg",
                  alt: "",
                  className: "w-full h-full object-cover",
                }),
                (0, Vn.jsx)("div", {
                  className: "absolute inset-0 bg-[#0a2010]/70",
                }),
              ],
            }),
            (0, Vn.jsxs)("div", {
              className: "relative z-10 max-w-5xl mx-auto",
              children: [
                (0, Vn.jsxs)("div", {
                  className:
                    "flex flex-col md:flex-row items-center justify-between gap-8",
                  children: [
                    (0, Vn.jsxs)("div", {
                      className: "flex items-center gap-4",
                      children: [
                        (0, Vn.jsx)("img", {
                          src: _l,
                          alt: "Browt",
                          className: "w-16 h-16 object-contain",
                        }),
                        (0, Vn.jsxs)("div", {
                          children: [
                            (0, Vn.jsx)("h3", {
                              className: "font-bangers text-3xl text-[#FFDA44]",
                              children: "$BROWT",
                            }),
                            (0, Vn.jsx)("p", {
                              className: "font-mono text-sm text-[#7CFC00]",
                              children: "10th Gen Grass-Type",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, Vn.jsxs)("div", {
                      className: "flex gap-4",
                      children: [
                        (0, Vn.jsxs)("a", {
                          href: Rl,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className:
                            "btn-secondary px-6 py-3 flex items-center gap-2",
                          children: [
                            (0, Vn.jsx)(Bl, { className: "w-5 h-5" }),
                            "X",
                          ],
                        }),
                        (0, Vn.jsxs)("a", {
                          href: Ol,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className:
                            "btn-secondary px-6 py-3 flex items-center gap-2 border-[#7CFC00] text-[#7CFC00] hover:bg-[#7CFC00] hover:text-[#0a2010]",
                          children: [
                            (0, Vn.jsx)("svg", {
                              viewBox: "0 0 24 24",
                              className: "w-5 h-5",
                              fill: "currentColor",
                              children: (0, Vn.jsx)("path", {
                                d: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z",
                              }),
                            }),
                            "X Community",
                          ],
                        }),
                        (0, Vn.jsxs)("a", {
                          href: RL,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className:
                            "btn-secondary px-6 py-3 flex items-center gap-2 border-[#7CFC00] text-[#7CFC00] hover:bg-[#7CFC00] hover:text-[#0a2010]",
                          children: [
                            (0, Vn.jsx)("svg", {
                              viewBox: "0 0 24 24",
                              className: "w-5 h-5",
                              fill: "currentColor",
                              children: (0, Vn.jsx)("path", {
                                d: "M9.04 15.47l-.39 5.49c.56 0 .81-.24 1.11-.53l2.67-2.55 5.53 4.05c1.01.56 1.72.27 1.98-.94l3.59-16.8.001-.001c.32-1.5-.54-2.09-1.52-1.73L1.6 9.6C.15 10.17.17 10.97 1.35 11.34l5.53 1.73L19.47 5.4c.59-.36 1.13-.16.69.2",
                              }),
                            }),
                            "Telegram",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, Vn.jsx)("div", {
                  className: "mt-12 pt-8 border-t border-[#7CFC00]/30",
                  children: (0, Vn.jsx)("p", {
                    className:
                      "font-mono text-xs text-[#90EE90]/70 text-center max-w-2xl mx-auto",
                    children:
                      "$BROWT is a meme coin with no intrinsic value or expectation of financial return. There is no formal team or roadmap. The coin is completely useless and for entertainment purposes only.",
                  }),
                }),
                (0, Vn.jsx)("div", {
                  className: "mt-8 text-center",
                  children: (0, Vn.jsx)("p", {
                    className: "font-mono text-sm text-[#7CFC00]",
                    children: "$BROWT - 10TH GENERATION GRASS-TYPE - 2026",
                  }),
                }),
              ],
            }),
          ],
        });
    const Xl = function () {
      const [t, n] = (0, e.useState)(!1);
      return (0, Vn.jsxs)("div", {
        className: "App min-h-screen bg-[#0a2010]",
        children: [
          (0, Vn.jsx)(Ll, {
            position: "top-center",
            toastOptions: {
              style: {
                background: "#1a4020",
                color: "#FFDA44",
                border: "2px solid #7CFC00",
                fontFamily: '"JetBrains Mono", monospace',
              },
            },
          }),
          (0, Vn.jsx)(Js, {
            mode: "wait",
            children: t
              ? (0, Vn.jsxs)(
                  Ws.div,
                  {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    transition: { duration: 0.5 },
                    children: [
                      (0, Vn.jsx)(Ul, {}),
                      (0, Vn.jsx)(Hl, {}),
                      (0, Vn.jsx)(Wl, {}),
                      (0, Vn.jsx)($l, {}),
                      (0, Vn.jsx)(Yl, {}),
                      (0, Vn.jsx)(Hl, {}),
                      (0, Vn.jsx)(ql, {}),
                    ],
                  },
                  "main"
                )
              : (0, Vn.jsx)(
                  Vl,
                  {
                    onEnter: () => {
                      n(!0);
                    },
                  },
                  "intro"
                ),
          }),
        ],
      });
    };
    t.createRoot(document.getElementById("root")).render(
      (0, Vn.jsx)(e.StrictMode, { children: (0, Vn.jsx)(Xl, {}) })
    );
  })();
})();
//# sourceMappingURL=main.872fd331.js.map
