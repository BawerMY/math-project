export default function tree(input) {
    var output = []
    input = input+"+"
    var bracketCounter = 0
    var lastAppend = -1
    for( var i = 0; i < input.length; i++) {
        if(input[i]==="(") bracketCounter += 1
        else if(input[i]===")") bracketCounter -= 1
        else if('+-*/'.includes(input[i]) && bracketCounter === 0) {
            if(input[lastAppend+1] === '(' && input[i-1] === ')') output.push(tree(input.slice(lastAppend+2, i-1)))
            else output.push(input.slice(lastAppend+1, i))
            output.push(input[i])
            lastAppend = i
        }
    }
    return output.slice(0, -1)
}