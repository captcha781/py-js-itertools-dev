const lodash = require('lodash')

let arr = []

const accumulate = (arrays = []) => {
    for (let i = 0; i < arrays.length; i++) {
        if (i == 0) {
            arr.push(arrays[i])
        } else {
            arr.push((arr[i - 1] + arrays[i]))
        }
    }
    return arr
}

const chain = (...args) => {
    for (let i = 0; i < args.length; i++) {
        for (let j = 0; j < args[i].length; j++) {
            arr.push(args[i][j])
        }
    }
    return arr
}

const from_iterbles = (...arg) => {
    let args = lodash.flattenDeep(arg)
    for (let i = 0; i < args.length; i++) {
        for (let j = 0; j < args[i].length; j++) {
            arr.push(args[i][j])
        }
    }
    return arr
}







module.exports = { accumulate, chain, from_iterbles }