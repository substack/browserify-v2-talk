var fs = require('fs');
var src = fs.readFileSync(__dirname + '/page.html');

var div = document.createElement('div');
div.innerHTML = src;
document.body.appendChild(div);
