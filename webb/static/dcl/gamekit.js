!(function(e, t) {
  for (var n in t) e[n] = t[n]
})(
  this,
  (function(e) {
    var t = {}
    function n(s) {
      if (t[s]) return t[s].exports
      var r = (t[s] = { i: s, l: !1, exports: {} })
      return e[s].call(r.exports, r, r.exports, n), (r.l = !0), r.exports
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function(e, t, s) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: s })
      }),
      (n.r = function(e) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 })
      }),
      (n.t = function(e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e
        if (4 & t && 'object' == typeof e && e && e.__esModule) return e
        var s = Object.create(null)
        if ((n.r(s), Object.defineProperty(s, 'default', { enumerable: !0, value: e }), 2 & t && 'string' != typeof e))
          for (var r in e)
            n.d(
              s,
              r,
              function(t) {
                return e[t]
              }.bind(null, r)
            )
        return s
      }),
      (n.n = function(e) {
        var t =
          e && e.__esModule
            ? function() {
                return e.default
              }
            : function() {
                return e
              }
        return n.d(t, 'a', t), t
      }),
      (n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
      }),
      (n.p = ''),
      n((n.s = 2))
    )
  })([
    function(e, t, n) {
      'use strict'
      function s(e) {
        return {
          onConnect(t) {
            e.addEventListener('message', () => t(), { once: !0 })
          },
          onError(t) {
            e.addEventListener('error', e => {
              e.error
                ? t(e.error)
                : e.message &&
                  t(
                    Object.assign(new Error(e.message), {
                      colno: e.colno,
                      error: e.error,
                      filename: e.filename,
                      lineno: e.lineno,
                      message: e.message
                    })
                  )
            })
          },
          onMessage(t) {
            e.addEventListener('message', e => {
              t(e.data)
            })
          },
          sendMessage(t) {
            e.postMessage(t)
          },
          close() {
            'terminate' in e ? e.terminate() : 'close' in e && e.close()
          }
        }
      }
      n.d(t, 'a', function() {
        return s
      })
    },
    function(e, t, n) {
      'use strict'
      ;(function(e) {
        n.d(t, 'a', function() {
          return o
        }),
          n.d(t, 'b', function() {
            return i
          })
        const s = [
            'eval',
            'parseInt',
            'parseFloat',
            'isNaN',
            'isFinite',
            'decodeURI',
            'decodeURIComponent',
            'encodeURI',
            'encodeURIComponent',
            'escape',
            'unescape',
            'Object',
            'Function',
            'String',
            'Boolean',
            'Number',
            'Math',
            'Date',
            'RegExp',
            'Error',
            'EvalError',
            'RangeError',
            'ReferenceError',
            'SyntaxError',
            'TypeError',
            'URIError',
            'JSON',
            'Array',
            'Promise',
            'NaN',
            'Infinity'
          ],
          r = Promise.resolve().then.bind(Promise.resolve())
        async function o(e, t) {
          let n = {},
            s = 'SAFE_EVAL_' + Math.floor(1e6 * Math.random())
          return (
            (n[s] = {}),
            Object.keys(t).forEach(function(e) {
              n[e] = t[e]
            }),
            (n.window = n),
            (n.self = n),
            r(() => new Function('code', `with (this) { ${e} }`).call(n, e))
          )
        }
        function i(t) {
          return s.forEach(n => (t[n] = e[n])), t
        }
      }.call(this, n(3)))
    },
    function(e, t, n) {
      'use strict'
      n.r(t)
      var s = n(0)
      const r = n(4)
      r && r.__esModule && r.default && new r.default(Object(s.a)(self))
    },
    function(e, t) {
      var n
      n = (function() {
        return this
      })()
      try {
        n = n || new Function('return this')()
      } catch (e) {
        'object' == typeof window && (n = window)
      }
      e.exports = n
    },
    function(e, t, n) {
      'use strict'
      n.r(t)
      const s = /\s+/g
      class r {
        constructor(e, t, n, s, r) {
          ;(this.id = e), (this.cb = t), (this.event = n), (this.sharedList = s), (this.object = r), (this.enabled = !0)
        }
        off() {
          this.object &&
            (this.cb && this.object.off(this),
            (this.cb = null),
            (this.object = null),
            this.sharedList && delete this.sharedList)
        }
        enable() {
          if (this.sharedList) for (let e = 0; e < this.sharedList.length; e++) this.sharedList[e].enabled = !0
          else this.enabled = !0
        }
        disable() {
          if (this.sharedList) for (let e = 0; e < this.sharedList.length; e++) this.sharedList[e].enabled = !1
          else this.enabled = !1
        }
      }
      function o(e) {
        delete e.cb
      }
      class i {
        constructor() {
          ;(this.edBindings = {}), (this.edBindCount = 0)
        }
        on(e, t, n) {
          this.edBindCount++
          let o = e.split(s),
            i = [],
            a = null
          for (let e of o) {
            let s = new r(this.edBindCount, null, e, i, this)
            i && i.push(s),
              (s.cb = n
                ? function() {
                    t.apply(this, arguments), (s.cb = null)
                  }.bind(this)
                : t.bind(this)),
              (this.edBindings[e] = this.edBindings[e] || []),
              this.edBindings[e].push(s),
              (a = s)
          }
          return a
        }
        once(e, t) {
          return this.on(e, t, !0)
        }
        off(e, t) {
          if (0 === arguments.length)
            for (let e in this.edBindings) {
              for (let t in this.edBindings[e]) delete this.edBindings[e][t].cb
              this.edBindings[e].length = 0
            }
          else if (e instanceof r) (e.cb = null), e.sharedList && e.sharedList.length && e.sharedList.forEach(o)
          else if ('string' == typeof e)
            if ('function' == typeof t)
              for (let n in this.edBindings[e]) this.edBindings[e][n].cb === t && (this.edBindings[e][n].cb = null)
            else 'string' == typeof e && (this.edBindings[e] = [])
          else if ('function' == typeof e)
            for (let t in this.edBindings)
              for (let n in this.edBindings[t]) this.edBindings[t][n].cb === e && (this.edBindings[t][n].cb = null)
        }
        emit(e) {
          if (e in this.edBindings) {
            if (1 === arguments.length)
              for (let t = 0; t < this.edBindings[e].length; t++) {
                let n = this.edBindings[e][t]
                n && n.cb && n.enabled && n.cb()
              }
            else if (2 === arguments.length)
              for (let t = 0; t < this.edBindings[e].length; t++) {
                let n = this.edBindings[e][t]
                n && n.cb && n.enabled && n.cb(arguments[1])
              }
            else if (3 === arguments.length)
              for (let t = 0; t < this.edBindings[e].length; t++) {
                let n = this.edBindings[e][t]
                n && n.cb && n.enabled && n.cb(arguments[1], arguments[2])
              }
            else if (4 === arguments.length)
              for (let t = 0; t < this.edBindings[e].length; t++) {
                let n = this.edBindings[e][t]
                n && n.cb && n.enabled && n.cb(arguments[1], arguments[2], arguments[3])
              }
            else if (5 === arguments.length)
              for (let t = 0; t < this.edBindings[e].length; t++) {
                let n = this.edBindings[e][t]
                n && n.cb && n.enabled && n.cb(arguments[1], arguments[2], arguments[3], arguments[4])
              }
            else if (arguments.length > 4) {
              let t = Array.prototype.slice.call(arguments, 1)
              for (let n = 0; n < this.edBindings[e].length; n++) {
                let s = this.edBindings[e][n]
                s && s.cb && s.enabled && s.cb.apply(this, t)
              }
            }
          } else if ('error' === e) {
            const e = arguments[1]
            let t = null
            throw ((t =
              e instanceof Error
                ? e
                : Object.assign(new Error('EventDispatcher: Unhandled "error" event'), { data: arguments })),
            console.error(t),
            console.trace(arguments),
            t)
          }
        }
        getEventBindings(e) {
          return (this.edBindings[e] || []).filter(e => e && e.enabled)
        }
      }
      class a extends i {
        constructor(e) {
          super(),
            (this._responsePromiseMap = new Map()),
            (this._nextMessageId = 0),
            (this._consoleLog = !1),
            (this._requestQueue = []),
            (this._connected = !1),
            this.setLogging(e)
        }
        processMessage(e) {
          let t
          if ('string' == typeof e) {
            this._logMessage(e, 'receive')
            try {
              t = JSON.parse(e)
            } catch (e) {
              return this.emit('error', e)
            }
          } else t = e
          if (t)
            if (t.id)
              if (this._responsePromiseMap.has(t.id)) {
                const n = this._responsePromiseMap.get(t.id)
                if ((this._responsePromiseMap.delete(t.id), 'result' in t)) n.resolve(t.result)
                else if ('error' in t) {
                  const e = Object.assign(new Error('Remote error'), t.error, (t.error && t.error.data) || {})
                  n.reject(e)
                } else n.reject(Object.assign(new Error(`Response must have result or error: ${e}`), { code: -32700 }))
              } else this.emit('error', new Error(`Response with id:${t.id} has no pending request`))
            else t.method ? this.emit(t.method, t.params) : this.emit('error', new Error(`Invalid message: ${e}`))
          else this.emit('error', new Error('Message cannot be null, empty or undefined'))
        }
        setLogging({ logConsole: e } = {}) {
          this._consoleLog = !!e
        }
        call(e, t) {
          if (void 0 !== t && 'object' != typeof t)
            throw new Error(`Client#call Params must be structured data (Array | Object) got ${JSON.stringify(t)}`)
          const n = ++this._nextMessageId,
            s = { id: n, method: e, params: t, jsonrpc: '2.0' }
          return new Promise((e, t) => {
            try {
              this._responsePromiseMap.set(n, { resolve: e, reject: t }), this._send(s)
            } catch (e) {
              return t(e)
            }
          })
        }
        notify(e, t) {
          if (void 0 !== t && 'object' != typeof t)
            throw new Error(`Client#notify Params must be structured data (Array | Object) got ${JSON.stringify(t)}`)
          this._send({ method: e, params: t, jsonrpc: '2.0' })
        }
        didConnect() {
          !1 === this._connected && ((this._connected = !0), this._sendQueuedRequests())
        }
        _send(e) {
          this._requestQueue.push(JSON.stringify(e)), this._sendQueuedRequests()
        }
        _sendQueuedRequests() {
          if (this._connected) {
            const e = this._requestQueue.splice(0, this._requestQueue.length)
            for (let t of e) this._logMessage(t, 'send'), this.sendMessage(t)
          }
        }
        _logMessage(e, t) {
          this._consoleLog && console.log(`Client ${'send' === t ? '>' : '<'}`, e.toString())
        }
      }
      const c = ['then', 'catch']
      const l = 'function' == typeof Symbol && Symbol.for
      function d(e, t) {
        return l ? Object.getOwnPropertySymbols(e).includes(t) : Object.getOwnPropertyNames(e).includes(t)
      }
      const h = 'LoadComponents',
        u = 'function' == typeof Symbol && Symbol.for ? Symbol('injectedAPIs') : 65184
      function p(e) {
        if (void 0 !== e && !e) throw new TypeError('API name cannot be null / empty')
        return function(t, n) {
          if ('string' != typeof n) throw new TypeError('Cannot inject APIs with non-string names')
          ;(function(e) {
            const t = e
            d(e, u) || (t[u] = new Map())
            return t[u]
          })(t).set(n, e || n)
        }
      }
      async function f(e) {
        let t = (function(e) {
          const t = new Map()
          let n = Object.getPrototypeOf(e)
          for (; n; ) {
            if (d(n, u)) {
              n[u].forEach((e, n) => t.set(n, e))
            }
            n = Object.getPrototypeOf(n)
          }
          return t
        })(e)
        0 !== t.size &&
          (await e.loadAPIs(Array.from(t.values())),
          t.forEach(function(t, n) {
            e[n] = e.loadedAPIs[t]
          }))
      }
      class g extends a {
        constructor(e, t) {
          super(t),
            (this.transport = e),
            (this.loadedAPIs = {}),
            (this.started = !1),
            e.onError &&
              e.onError(e => {
                this.emit('error', e)
              }),
            e.onClose &&
              e.onClose(() => {
                this.emit('transportClosed')
              }),
            e.onMessage(e => {
              this.processMessage(e)
            }),
            e.onConnect
              ? e.onConnect(() => {
                  this.didConnect()
                })
              : this.didConnect()
        }
        sendMessage(e) {
          this.transport.sendMessage(e)
        }
        async loadAPIs(e) {
          const t = Object.keys(this.loadedAPIs),
            n = e.filter(function(e) {
              return !t.includes(e)
            })
          return (
            n.length &&
              (await this.call(h, [n]),
              n.forEach(async e => {
                this.loadedAPIs[e] = (function(e, t = '') {
                  if (!Proxy) throw new Error('getApi() requires ES6 Proxy. Please use an ES6 compatible engine')
                  const n = '' === t ? '' : `${t}.`
                  return new Proxy(
                    {},
                    {
                      get: (t, s) => {
                        if (t[s]) return t[s]
                        if ('__proto__' === s || 'prototype' === s) return Object.prototype
                        if ('on' === s.substr(0, 2) && s.length > 3) {
                          const r = s.substr(2)
                          t[s] = t =>
                            e.on(`${n}${r}`, n => {
                              try {
                                n && n instanceof Array ? t.apply(null, n) : t.call(null, n)
                              } catch (t) {
                                e.emit('error', t)
                              }
                            })
                        } else if ('emit' === s.substr(0, 4) && s.length > 5) {
                          const r = s.substr(4)
                          t[s] = (...t) => e.notify(`${n}${r}`, t)
                        } else {
                          if (-1 !== c.indexOf(s)) return
                          {
                            const r = s
                            t[s] = (...t) => e.call(`${n}${r}`, t)
                          }
                        }
                        return t[s]
                      }
                    }
                  )
                })(this, e)
              })),
            this.loadedAPIs
          )
        }
        didConnect() {
          const e = f(this)
          super.didConnect(),
            e
              .then(() => {
                if (this.systemDidEnable && !this.started) {
                  this.started = !0
                  try {
                    const e = this.systemDidEnable()
                    e &&
                      (function(e) {
                        return e && 'object' == typeof e && 'function' == typeof e.then && 'function' == typeof e.catch
                      })(e) &&
                      e.catch(e => this.emit('error', e))
                  } catch (e) {
                    this.emit('error', e)
                  }
                }
              })
              .catch(e => this.emit('error', e))
        }
      }
      g.inject = p
      class y extends i {
        constructor(e) {
          super(),
            (this.component = e),
            e.onSubscribedEvent(e => {
              super.emit(e.event, e)
            })
        }
        on(e, t) {
          return (
            0 === this.getEventBindings(e).length && this.component.subscribe(e).catch(e => this.emit('error', e)),
            super.on.apply(this, arguments)
          )
        }
        off(e) {
          let t = null
          const n = super.off.apply(this, arguments)
          return (
            'string' == typeof e ? (t = e) : e instanceof r && (e = e.event),
            null !== t &&
              0 === this.getEventBindings(t).length &&
              this.component.unsubscribe(t).catch(e => this.emit('error', e)),
            n
          )
        }
      }
      n(0)
      const b =
        ((m = ''),
        {
          error(e, ...t) {
            'object' == typeof e && e.stack ? console.error(m + e, ...t, e.stack) : console.error(m + e, ...t)
          },
          log(e, ...t) {
            ;(t && t[0] && t[0].startsWith && t[0].startsWith('The entity is already in the engine.')) ||
              console.log(m + e, ...t)
          },
          warn(e, ...t) {
            console.log(m + e, ...t)
          },
          info(e, ...t) {
            console.info(m + e, ...t)
          },
          trace(e, ...t) {
            console.trace(m + e, ...t)
          }
        })
      var m,
        v = n(1)
      class E {
        constructor(e) {
          ;(this.api = e), (this.exceptions = []), (this.catchHandler = (...e) => console.log(...e))
        }
        get now() {
          return performance.now()
        }
        log(...e) {
          const t = {
            type: 'log',
            timestamp: this.now,
            executionContextId: 0,
            args: e.map(e => {
              let t = void 0,
                n = void 0
              const s = typeof e
              if ('object' === s && null !== e)
                try {
                  JSON.stringify(e), (t = e)
                } catch (t) {
                  n = Object.prototype.toString.apply(e)
                }
              else 'number' !== s || (!isNaN(e) && isFinite(e)) ? (t = e) : (n = Object.prototype.toString.apply(e))
              return { type: typeof e, value: t, unserializableValue: n }
            })
          }
          this.api.event('Runtime.consoleAPICalled', [t]).catch(this.catchHandler)
        }
        error(e) {
          const t = this.exceptions.push(e) - 1
          let n = void 0,
            s = void 0
          try {
            n = JSON.stringify(e)
          } catch (t) {
            s = e.toString()
          }
          const r = { type: typeof e, value: n, unserializableValue: s },
            o = {
              timestamp: this.now,
              exceptionDetails: {
                text: e.toString() + '\n' + e.stack,
                exceptionId: t,
                columnNumber: 0,
                lineNumber: 0,
                exception: r
              }
            }
          this.api.event('Runtime.exceptionThrown', [o]).catch(this.catchHandler)
        }
      }
      n.d(t, 'default', function() {
        return C
      })
      var w = function(e, t, n, s) {
          var r,
            o = arguments.length,
            i = o < 3 ? t : null === s ? (s = Object.getOwnPropertyDescriptor(t, n)) : s
          if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, s)
          else
            for (var a = e.length - 1; a >= 0; a--)
              (r = e[a]) && (i = (o < 3 ? r(i) : o > 3 ? r(t, n, i) : r(t, n)) || i)
          return o > 3 && i && Object.defineProperty(t, n, i), i
        },
        j = function(e, t) {
          if ('object' == typeof Reflect && 'function' == typeof Reflect.metadata) return Reflect.metadata(e, t)
        }
      const O = 1e3 / 30,
        S = /^data:[^\/]+\/[^;]+;base64,/,
        P = /^blob:http/,
        B = 'web3-provider',
        _ = 'getProvider'
      const I = /^(engine\.)/
      class C extends g {
        constructor(e, t) {
          super(e, t),
            (this.engine = null),
            (this.onUpdateFunctions = []),
            (this.onStartFunctions = []),
            (this.onEventFunctions = []),
            (this.events = []),
            (this.updateInterval = O),
            (this.devToolsAdapter = null),
            (this.manualUpdate = !1),
            (this.didStart = !1),
            (this.provider = null)
        }
        onError(e) {
          this.devToolsAdapter ? this.devToolsAdapter.error(e) : b.error('', e)
        }
        onLog(...e) {
          this.devToolsAdapter ? this.devToolsAdapter.log(...e) : b.info('', ...e)
        }
        async getEthereumProvider() {
          const { EthereumController: e } = await this.loadAPIs(['EthereumController'])
          return {
            send(t, n) {
              if (!(t && n && n instanceof Function)) throw new Error('Decentraland provider only allows async calls')
              e.sendAsync(t)
                .then(e => n(null, e))
                .catch(n)
            },
            sendAsync(t, n) {
              e.sendAsync(t)
                .then(e => n(null, e))
                .catch(n)
            }
          }
        }
        async loadProject() {
          const { EnvironmentAPI: e } = await this.loadAPIs(['EnvironmentAPI']),
            t = await e.getBootstrapData()
          if (t && t.main) {
            const e = t.main,
              n = t.mappings.find(t => t.file === e),
              s = (function(e, t, n) {
                let s = t
                return e && (s = e), S.test(s) ? s : P.test(s) ? s : (n.endsWith('/') ? n : n + '/') + s
              })(n && n.hash, e, t.baseUrl),
              r = await fetch(s)
            if (r.ok) return r.text()
            throw new Error(`SDK: Error while loading ${s} (${e} -> ${n})`)
          }
        }
        fireEvent(e) {
          try {
            for (let t of this.onEventFunctions) t(e)
          } catch (e) {
            this.onError(e)
          }
        }
        async systemDidEnable() {
          ;(this.eventSubscriber = new y(this.engine)), (this.devToolsAdapter = new E(this.devTools))
          try {
            const e = await this.loadProject()
            if (!e) throw new Error('Received empty source.')
            const t = this,
              n = {
                DEBUG: !0,
                log(...e) {
                  t.onLog(...e)
                },
                addEntity(e) {
                  '0' !== e && t.events.push({ type: 'CreateEntity', tag: e, payload: JSON.stringify({ id: e }) })
                },
                removeEntity(e) {
                  t.events.push({ type: 'RemoveEntity', tag: e, payload: JSON.stringify({ id: e }) })
                },
                onUpdate(e) {
                  'function' != typeof e
                    ? t.onError(new Error('onUpdate must be called with only a function argument'))
                    : t.onUpdateFunctions.push(e)
                },
                onEvent(e) {
                  'function' != typeof e
                    ? t.onError(new Error('onEvent must be called with only a function argument'))
                    : t.onEventFunctions.push(e)
                },
                updateEntityComponent(e, n, s, r) {
                  I.test(n) &&
                    t.events.push({
                      type: 'UpdateEntityComponent',
                      tag: e + '_' + s,
                      payload: JSON.stringify({ entityId: e, classId: s, name: n.replace(I, ''), json: r })
                    })
                },
                attachEntityComponent(e, n, s) {
                  I.test(n) &&
                    t.events.push({
                      type: 'AttachEntityComponent',
                      tag: e,
                      payload: JSON.stringify({ entityId: e, name: n.replace(I, ''), id: s })
                    })
                },
                removeEntityComponent(e, n) {
                  I.test(n) &&
                    t.events.push({
                      type: 'ComponentRemoved',
                      tag: e,
                      payload: JSON.stringify({ entityId: e, name: n.replace(I, '') })
                    })
                },
                setParent(e, n) {
                  t.events.push({
                    type: 'SetEntityParent',
                    tag: e,
                    payload: JSON.stringify({ entityId: e, parentId: n })
                  })
                },
                query(e, n) {
                  t.events.push({ type: 'Query', payload: JSON.stringify({ queryId: e, payload: n }) })
                },
                subscribe(e) {
                  t.eventSubscriber.on(e, n => {
                    t.fireEvent({ type: e, data: n.data })
                  })
                },
                unsubscribe(e) {
                  t.eventSubscriber.off(e)
                },
                componentCreated(e, n, s) {
                  I.test(n) &&
                    t.events.push({
                      type: 'ComponentCreated',
                      tag: e,
                      payload: JSON.stringify({ id: e, classId: s, name: n.replace(I, '') })
                    })
                },
                componentDisposed(e) {
                  t.events.push({ type: 'ComponentDisposed', tag: e, payload: JSON.stringify({ id: e }) })
                },
                componentUpdated(e, n) {
                  t.events.push({ type: 'ComponentUpdated', tag: e, payload: JSON.stringify({ id: e, json: n }) })
                },
                loadModule: async e => {
                  const t = e.replace(/^@decentraland\//, '')
                  let n = []
                  if (t === B) n.push(_), (this.provider = await this.getEthereumProvider())
                  else {
                    const e = (await this.loadAPIs([t]))[t]
                    try {
                      n = await e._getExposedMethods()
                    } catch (e) {
                      throw Object.assign(new Error(`Error getting the methods of ${t}: ` + e.message), { original: e })
                    }
                  }
                  return { rpcHandle: t, methods: n.map(e => ({ name: e })) }
                },
                callRpc: async (e, t, n) => {
                  if (e === B && t === _) return this.provider
                  const s = this.loadedAPIs[e]
                  if (!s) throw new Error(`RPCHandle: ${e} is not loaded`)
                  return s[t].apply(s, n)
                },
                onStart(e) {
                  t.onStartFunctions.push(e)
                },
                error(e, n) {
                  t.onError(Object.assign(new Error(e), { data: n }))
                }
              }
            n.updateEntity = function() {
              throw new Error('The scene is using an outdated version of decentraland-ecs, please upgrade to >5.0.0')
            }
            this.eventSubscriber.once('sceneStart', () => {
              this.manualUpdate || this.startLoop(),
                this.onStartFunctions.forEach(e => {
                  try {
                    e()
                  } catch (e) {
                    this.onError(e)
                  }
                })
            })
            try {
              await Object(v.a)(e, Object(v.b)({ dcl: n })),
                this.events.push(this.initMessagesFinished()),
                this.onStartFunctions.push(() => {
                  this.engine.startSignal().catch(e => this.onError(e))
                })
            } catch (e) {
              t.onError(e), this.events.push(this.initMessagesFinished())
            }
            this.sendBatch()
          } catch (e) {
            this.onError(e)
          } finally {
            this.didStart = !0
          }
        }
        update(e) {
          for (let t of this.onUpdateFunctions)
            try {
              t(e)
            } catch (e) {
              this.onError(e)
            }
          this.sendBatch()
        }
        initMessagesFinished() {
          return { type: 'InitMessagesFinished', tag: 'scene', payload: '{}' }
        }
        sendBatch() {
          try {
            if (this.events.length) {
              const e = this.events.slice()
              ;(this.events.length = 0), this.engine.sendBatch(e).catch(e => this.onError(e))
            }
          } catch (e) {
            this.onError(e)
          }
        }
        startLoop() {
          let e = performance.now()
          const t = () => {
            const n = performance.now(),
              s = n - e
            ;(e = n), setTimeout(t, this.updateInterval)
            let r = s / 1e3
            this.update(r)
          }
          t()
        }
      }
      w([p('EngineAPI'), j('design:type', Object)], C.prototype, 'engine', void 0),
        w([p('DevTools'), j('design:type', Object)], C.prototype, 'devTools', void 0)
    }
  ])
)