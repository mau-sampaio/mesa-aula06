const alicia = [23, 69, 32];
const bob = [12, 67, 43];

function encontrarGanhador(a, b) {
  let pontosPrimeiroParticipante = 0;
  let pontosSegundoParticipante = 0;

  for (let indice = 0; indice < a.length; indice++) {
    if (a[indice] > b[indice]) {
      pontosPrimeiroParticipante++;
    } else if (a[indice] < b[indice]) {
        pontosSegundoParticipante++;
    } 
  }
    if (pontosPrimeiroParticipante > pontosSegundoParticipante) {
        return "Alicia"
    } else if (pontosPrimeiroParticipante < pontosSegundoParticipante){
        return "Bob"        
    } else {
        return "Ninguém. Tivemos um empate!"
    } 
}

console.log("O ganhador é: " + encontrarGanhador(alicia,bob));
