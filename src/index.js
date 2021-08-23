module.exports = function reverse(n) {
    let h = n.toString()
    return parseFloat(h.split('').reverse().join(''))
}