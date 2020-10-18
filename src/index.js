
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (arguments.length === 0 || matrix.length === 0) {
        return [];
    }
    let aft = matrix.map((current,index) => index % 2 === 1 ? current.reverse() : current).join(',')
     aft = Array.from(aft).filter((item) =>(typeof +item === "number" && !(isNaN(+item))) )
    return aft.map((item) => +item)
}
