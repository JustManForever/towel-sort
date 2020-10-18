
// You should implement your task here.

module.exports = function towelSort (matrix) {
   if (arguments.length === 0 || matrix.length === 0) {
        return [];
    }
    let a = [];
    let aft= matrix.map((current,index) => index % 2 === 1 ? current.reverse() : current)
    for (let i of aft) {
        a = a.concat(i)
    }
    return a;
}
