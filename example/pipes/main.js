var foo = require('./foo');
var bar = require('./bar');
var log = require('./lib/log');

var n = parseInt(Buffer('abc').toString('hex'), 16);
log(foo(5) + bar(3) + n);
