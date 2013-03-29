var baz = require('./baz');
module.exports = function (n) { return n * baz(5) };
