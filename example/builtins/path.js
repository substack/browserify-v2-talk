var path = require('path');
var log = require('./lib/log');

var norm = path.normalize('/foo/bar//../quux/..//baz');
log(norm);

var rel = path.relative('/beep/boop', '../robots');
log(rel);
