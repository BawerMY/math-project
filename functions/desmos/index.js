const element = document.getElementById('desmos')
var calculator = Desmos.GraphingCalculator(element, {
    settingsMenu: false,
    expressions: false
})



document.getElementById("btn").addEventListener("click", function addExpression() {
    console.log(document.getElementById('inp').value)
    calculator.setExpression({ id: 'graph1', latex: document.getElementById('inp').value })
});
