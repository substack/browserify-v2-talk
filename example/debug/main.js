var foo = require('./foo.js');
var bar = require('./bar.js');

document.body.innerHTML += String(foo(5) + bar(6));
