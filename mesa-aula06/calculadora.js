//ETAPA 01

function operacaoAdicao(adicionarA,adicionarB) {
    return adicionarA+adicionarB;
}

function operacaoSubtracao(subtrairA,subtrairB) {
    return subtrairA-subtrairB;
}

function operacaoMultiplicao(multiplicarA,multiplicarB){
    return multiplicarA*multiplicarB;
}

function operacaoDivisao(dividirA,dividirB) {
    return dividirA/dividirB;
}
//ETAPA 02
console.log("----------- Teste de Operações / Calculador -----------")
console.log(operacaoAdicao(10,10));
console.log(operacaoSubtracao(10,10));
console.log(operacaoMultiplicao(10,10));
console.log(operacaoDivisao(10,10));
console.log(operacaoDivisao(10,0));

//ETAPA 03
    //Ativida 01
function quadradoDoNumero(numeroA) {
    return operacaoMultiplicao(numeroA,numeroA);
}
console.log(quadradoDoNumero(2));

    //Ativida 02
function mediaDeTresNumeros(numeroA,numeroB,numeroC) {
    let soma = operacaoAdicao(numeroA,numeroB);
    soma =operacaoAdicao(soma,numeroC);
    const media = operacaoDivisao(soma,3);
    return media;
}
console.log(mediaDeTresNumeros(8,9,7));

    //Ativida 03
function calcularPorcentagem(numeroTotal,porcentagem) {
    const divisao = operacaoDivisao(numeroTotal,100);
    return operacaoMultiplicao(divisao,porcentagem);
}
console.log(calcularPorcentagem(300,15));

    //Ativida 04
function geradorDePorcentagem(valorParcial,valorTotal) {
    const divisao = operacaoDivisao(100,valorTotal);
    return `${operacaoMultiplicao(valorParcial,divisao)}%` //templateString
}
console.log(geradorDePorcentagem(2,200));
