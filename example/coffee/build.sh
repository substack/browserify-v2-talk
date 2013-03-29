#!/bin/bash
browserify -t coffeeify main.coffee > static/bundle.js
