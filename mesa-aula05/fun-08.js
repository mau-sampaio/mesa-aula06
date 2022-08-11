function tipoDeDado(dadoParaValidar) {
    return " O dado informado foi " + dadoParaValidar + ", ele é um(a): " + typeof dadoParaValidar;
}

console.log(tipoDeDado(5));

console.log(tipoDeDado("a"));