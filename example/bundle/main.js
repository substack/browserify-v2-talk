var beep = require('./beep');
var gamma = require('gamma');

var s = gamma(beep(6)).toString(31).slice(26,30);
var txt = document.createTextNode(s.toUpperCase());
document.body.appendChild(txt);
