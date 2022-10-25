    var keep = "s"
    var result = []
    var number1 = parseInt(prompt("Digite o primeiro Numero"))
    var number2 = parseInt(prompt("Digite o primeiro Numero"))


function Sum() {
    var sum = number1 + number2
    return sum}

function Subtraction(){
    var sub = number1 - number2
    return sub}

function multiplication(){
    var mult = number1 * number2
    return mult}

function division(){
    var div = number1 / number2
    return div}

while(keep == "s")
{
    var operation = prompt("Insira qual operação voce deseja... 1 = somar, 2 = subtrair, 3 = multiplicar, 4 = dividir")
    if(operation == "1")
    console.log(Sum(number1, number2))
    else if(operation == "2")
    console.log(Subtraction(number1, number2))
    else if(operation == "3")
    console.log(multiplication(number1, number2))

    keep = prompt("Deseja continuar as operações ?")
}
