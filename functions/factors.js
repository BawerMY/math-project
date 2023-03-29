// (x)/(y)
function simp(input) {
    input = input.slice(1,-1)
    var [numerator, denominator] = input.split(')/(')
    var changed = true
    while(changed) {
        changed = false
        for(var i = Math.min(numerator, denominator); i > 1; i--) {
            if(numerator%i===0 && denominator%i===0) {
                numerator = numerator/i
                denominator = denominator/i
                changed = true
            }
        }
    }
    if(denominator === 1) return '('+numerator+')'
    return '('+numerator+')/('+denominator+')'
}







module.exports = {
    simp,
}