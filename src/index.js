module.exports = function reverse (n) {
    if (n < 0 ) n = Math.abs(n);
    const nStr = n.toString();
    const result = nStr.split('').reverse().join('');  
    return result;
}
