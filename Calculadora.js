    var number1 = parseInt(prompt("Digite o primeiro Numero"))
    var number2 = parseInt(prompt("Digite o primeiro Numero"))
    var keep = "s"
    var result = []
    var i = 0

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

function ExibirHitorico(){
    console.log(result)
}
while(keep == "s")
{
    var operation = prompt("Insira qual operação voce deseja... 1 = somar, 2 = subtrair, 3 = multiplicar, 4 = dividir")
    if(operation == "1"){
    result[i] = Sum(number1, number2)
    i++
    console.log(Sum(number1, number2))
    }
    else if(operation == "2"){
    result[i] = Subtraction(number1, number2)
    i++
    console.log(Subtraction(number1, number2))
    }
    else if(operation == "3"){
    result[i] = multiplication(number1, number2)
    i++
    console.log(multiplication(number1, number2))
    }
    else {
        result[i] = division(number1, number2)
        i++
        console.log(division(number1, number2))
    }

    keep = prompt("Deseja continuar as operações ?")
}

ExibirHitorico()
