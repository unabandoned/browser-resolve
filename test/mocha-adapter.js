// Minimal adapter backing mocha's qunit-UI global `test()` with node:test.
//
// browser-resolve's suite was written for `mocha --ui qunit`, which exposes a
// global `test(name, fn)`. Rather than rewrite every file, each test file now
// requires this adapter as `test` instead of relying on the mocha global.
//
// mocha ran these two ways:
//   test('name', function ()      { assert(...) })          // sync
//   test('name', function (done)  { async(...); done() })   // async via done
// The adapter maps both onto node:test: a zero-arg body runs synchronously; a
// body that declares `done` is awaited until it calls done()/done(err). A
// node:assert failure (thrown, even inside an async callback) rejects the
// node:test test, so the right test fails instead of surfacing as uncaught.

var nodeTest = require('node:test');

var DEFAULT_TIMEOUT = 120000;

function test (name, fn) {
  return nodeTest(name, { timeout: DEFAULT_TIMEOUT }, function () {
    if (fn.length >= 1) {
      return new Promise(function (resolve, reject) {
        var settled = false;
        function done (err) {
          if (settled) return;
          settled = true;
          if (err) reject(err instanceof Error ? err : new Error(String(err)));
          else resolve();
        }
        try { fn(done); } catch (e) { done(e); }
      });
    }
    return fn();
  });
}

module.exports = test;
module.exports.test = test;
