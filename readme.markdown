# bundle

```
browserify main.js > bundle.js
```

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

# debugging

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
