let arr = [];
const count = (start=0, step = 1, end = 1000) => {
    if (start >= end) {
        return
    } else {
        for (let i = Number(start); i <= end; i += step) {
            arr.push(i);
        }
        return arr
    }
}


const cycle = (string = "ABCD", end = 50) => {
    if(arr.length >= end){
        return
    } else {
        let a = 0;
        for(let i = 0; i <= end; i++){
            if(a > string.length-1){
                a = 0;
            }
            arr.push(string[a])
            a += 1
        }
        return arr
    }
}

const repeat = (item, n) => {
    for(let i = 0; i< n; i++){
        arr.push(item)
    }
    return arr
}










module.exports = { count, cycle, repeat };