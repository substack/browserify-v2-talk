var x = 10;

module.exports = function (n) {
    x += n;
    throw new Error('beep boop');
    return x * 5;
};
