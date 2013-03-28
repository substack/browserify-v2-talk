var url = require('url');
var log = require('./lib/log');

var u = url.parse(window.location.search.replace(/^\?/, ''));
log(JSON.stringify(u));
