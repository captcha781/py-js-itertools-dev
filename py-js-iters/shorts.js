const { each } = require('lodash');
const lodash = require('lodash')

let arr = []

const factorial = (n) => {
    let a = 1;
    for (let i = n; i >= 1; i--) {
        a *= i;
    }
    return a
}

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

const from_iterables = (...arg) => {
    let args = lodash.flattenDeep(arg)
    for (let i = 0; i < args.length; i++) {
        for (let j = 0; j < args[i].length; j++) {
            arr.push(args[i][j])
        }
    }
    return arr
}

const product = (string = "") => {
    let stres = string.split("")
    let combs = []
    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < string.length; j++) {
            if (false) {
                continue
            } else {
                combs.push([stres[i], stres[j]])
            }
        }
    }
    return combs
}

const combinations = (value) => {
    let stres;
    if (typeof (value) == 'string') {
        stres = value.split("")
        
    }
    else if (typeof (value) == 'object') {
        stres = value
        
    }
    let combs = []
    for (let i = 0; i < value.length; i++) {
        for (let j = 0; j < value.length; j++) {
            if (i == j || j < i) {
                continue
            } else {
                combs.push([stres[i], stres[j]])
            }
        }
    }

    return combs

}

const combinations_withreplacement = (value) => {
    let stres;
    if (typeof (value) == 'string') {
        stres = value.split("")
    }
    if (typeof (value) == 'object') {
        stres = value
    }
    let combs = []
    for (let i = 0; i < value.length; i++) {
        for (let j = 0; j < value.length; j++) {
            if (j < i) {
                continue
            } else {
                combs.push([stres[i], stres[j]])
            }
        }
    }
    return combs
}

let permutations = (string) => {
    if (!string || typeof string !== "string") {
        return "Please enter a string"
    } else if (string.length < 2) {
        return string
    }

    let permutationsArray = []

    for (let i = 0; i < string.length; i++) {
        let char = string[i]
        let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length)
        for (let permutation of permutations(remainingChars)) {
            permutationsArray.push(char + permutation)
        }
    }
    return permutationsArray
}


const compress = (data = [], selector = []) => {
    let temp = []
    for (let i = 0; i < data.length; i++) {
        if (selector[i] == true) {
            temp.push(data[i])
        }
    }
    return temp
}




module.exports = { accumulate, chain, from_iterables, combinations, permutations, combinations_withreplacement, product, factorial, compress }