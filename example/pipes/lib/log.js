module.exports = function (msg) {
    var text = document.createTextNode(String(msg));
    var div = document.createElement('div');
    div.appendChild(text);
    document.body.appendChild(div);
};
