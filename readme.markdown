# browserify-v2-talk

examples from my talk at [js.la](http://js.la)

# bundle

# builtins

# external

# standalone

```
browserify -r index.js --standalone xyz
```

# pipes

[module-deps](http://github.com/substack/module-deps),
[browser-pack](https://github.com/substack/browser-pack),
and [insert-module-globals](https://github.com/substack/insert-module-globals)
all work together inside of browserify to create a pipeline of work.

module-deps starts at one or more entry points and generates a json array of all
the files in the dependency graph of the entire program:

```
$ module-deps main.js
[
{"id":"/home/substack/projects/talks/browserify-v2/example/pipes/main.js","source":"var foo = require('./foo');\nvar bar = require('./bar');\n","deps":{"./foo":"/home/substack/projects/talks/browserify-v2/example/pipes/foo.js","./bar":"/home/substack/projects/talks/browserify-v2/example/pipes/bar.js"},"entry":true}
,
{"id":"/home/substack/projects/talks/browserify-v2/example/pipes/bar.js","source":"module.exports = function (n) { return n * 111 };\n","deps":{}}
,
{"id":"/home/substack/projects/talks/browserify-v2/example/pipes/foo.js","source":"var baz = require('./baz');\nmodule.exports = function (n) { return n * baz(5) };\n","deps":{"./baz":"/home/substack/projects/talks/browserify-v2/example/pipes/baz.js"}}
,
{"id":"/home/substack/projects/talks/browserify-v2/example/pipes/baz.js","source":"module.exports = function (n) { return n + 100 };\n","deps":{}}
]
```

browser-pack can read this stream of json module sources definitions to produce
a single javascript bundle file:

```
$ module-deps main.js | browser-pack

(function(e,t,n){function i(n,s){if(!t[n]){if(!e[n]){var o=typeof require=="function"&&require;if(!s&&o)return o(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=t[n]={exports:{}};e[n][0](function(t){var r=e[n][1][t];return i(r?r:t)},u,u.exports)}return t[n].exports}var r=typeof require=="function"&&require;for(var s=0;s<n.length;s++)i(n[s]);return i})({"/home/substack/projects/talks/browserify-v2/example/pipes/main.js":[function(require,module,exports){
var foo = require('./foo');
var bar = require('./bar');

},{"./foo":"/home/substack/projects/talks/browserify-v2/example/pipes/foo.js","./bar":"/home/substack/projects/talks/browserify-v2/example/pipes/bar.js"}],"/home/substack/projects/talks/browserify-v2/example/pipes/bar.js":[function(require,module,exports){
module.exports = function (n) { return n * 111 };

},{}],"/home/substack/projects/talks/browserify-v2/example/pipes/foo.js":[function(require,module,exports){
var baz = require('./baz');
module.exports = function (n) { return n * baz(5) };

},{"./baz":"/home/substack/projects/talks/browserify-v2/example/pipes/baz.js"}],"/home/substack/projects/talks/browserify-v2/example/pipes/baz.js":[function(require,module,exports){
module.exports = function (n) { return n + 100 };

},{}]},{},["/home/substack/projects/talks/browserify-v2/example/pipes/main.js"])
```

insert-module-globals sits between module-deps and browser-pack to detect and
inline definitions for `process`, `Buffer`, `global`, `__filename`, and
`__dirname`.

```
$ module-deps main.js | insert-module-globals main.js | browser-pack
```

# debug

```
browserify main.js --debug
```

# static assets

```
browserify -t brfs main.js
```

# coffee script

```
browserify -t coffeeify main.js
```

and for debugging with inline source maps:

```
browserify -t coffeeify main.js --debug
```

# tests

# music
