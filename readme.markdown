# browserify-v2-talk

examples from my talk at [js.la](http://js.la)

# bundle

```
browserify main.js > bundle.js
```

# builtins

# external

```
browserify -r through -r duplex > bundle.js
```

# standalone

--standalone

...

# pipes

module-deps
browser-pack
insert-module-globals

# debug

```
browserify main.js --debug
```

# transforms

## static assets

```
browserify -t brfs main.js
```

## coffee script

```
browserify -t coffeeify main.js
```

and for debugging with inline source maps:

```
browserify -t coffeeify main.js --debug
```

# music
