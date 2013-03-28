var qs = require('querystring');

var params = qs.parse(window.location.search.replace(/^\?/, ''));
var text = document.createTextNode(JSON.stringify(params));
document.body.appendChild(text);
