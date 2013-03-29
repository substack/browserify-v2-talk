#!/bin/bash
browserify -r hyperquest -r through -r url > static/bundle.js
