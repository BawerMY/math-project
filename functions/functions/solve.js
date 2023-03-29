export default function risolvi(input) {
    while(0===0)
    {
        var sublist = false
        for(var i=0; i < input.length; i++) {
            if(typeof input[i]=== "object") {
                input[i] = risolvi(input[i]);
                sublist = true
                break
            }
        }
        if(!sublist) input = quattroOperazioni(input)
        sublist = false
        if(input.length===1) return input[0]
    }
}

function quattroOperazioni(input) {
    for(var i=0; i < input.length; i++) {
        if(input[i]==='*') {
            var newV = Number(input[i-1])*Number(input[i+1])
            input.splice(i-1, 3, newV)
            i=i-1
        }
        if(input[i]==='/') {
            var newV = Number(input[i-1])/Number(input[i+1])
            input.splice(i-1, 3, newV)
            i=i-1
        }
    }
    for(var i=0; i < input.length; i++) {
        if(input[i]==='+') {
            var newV = Number(input[i-1])+Number(input[i+1])
            input.splice(i-1, 3, newV)
            i=i-1
        }
        if(input[i]==='-') {
            var newV = Number(input[i-1])-Number(input[i+1])
            input.splice(i-1, 3, newV)
            i=i-1
        }  
    }
    return input
}