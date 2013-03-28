var fs = require('fs');
var src = fs.readFileSync(__dirname + '/page.html');

var div = document.createElement('div');
div.innerHTML = src;

var data = fs.readFileSync(__dirname + '/thinkpad.png', 'base64');
div.querySelector('img').setAttribute('src', 'data:image/png;base64,' + data);

document.body.appendChild(div);
