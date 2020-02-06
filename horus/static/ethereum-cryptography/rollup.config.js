const builtins = require('rollup-plugin-node-builtins')
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const json = require('rollup-plugin-json')
const globals = require('rollup-plugin-node-globals')

const allExternals = [
  'uuid',
  'events',
  'buffer',
  'stream',
  'util',
]

export default {
  external: allExternals,
  output: {
    name: 'ethereum-cryptography/sha256',
    format: 'umd',
  },
  plugins: [
    json(),
    commonjs(),
    globals(),
    builtins(),
    resolve({
      preferBuiltins: true,
      browser: true,
    }),
  ]
}