function calcularIMC(altura,peso) {
    const calcularIMC = (peso/(altura*altura)).toFixed(2);
    return "seu índice de massa corporal é de: " + calcularIMC;
}

console.log(calcularIMC(1.70,83.5))

console.log(calcularIMC(1.80,80))

console.log(calcularIMC(1.40,20))