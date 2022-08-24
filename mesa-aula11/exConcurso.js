let ParticipanteA = [5, 8, 4, 9, 5];
let ParticipanteB = [8, 7, 8, 6, 8];
let ParticipanteC = [7, 5, 10, 8, 3];

function pontuacaoMedia(participante) {
  let media = 0;
  let soma = 0;

  for (let valorInicio = 0; valorInicio < participante.length; valorInicio++) {
    soma += participante[valorInicio];
  }
  return soma / participante.length;
}

console.log(pontuacaoMedia(ParticipanteA));
console.log(pontuacaoMedia(ParticipanteB));
console.log(pontuacaoMedia(ParticipanteC));

///---------////

function pontuacaoMaior(participante) {
  let valorAtual = 0;

  for (let posicao = 0; posicao < participante.length; posicao++) {
    if (participante[posicao] > valorAtual) {
      valorAtual = participante[posicao];
    }
  }
  return valorAtual;
}

console.log(pontuacaoMaior(ParticipanteA));
console.log(pontuacaoMaior(ParticipanteB));
console.log(pontuacaoMaior(ParticipanteC));

///---------////

function competicao(participanteA, participanteB, participanteC) {
  const participantes = [
    ["Participante A", participanteA],
    ["Participante B", participanteB],
    ["Participante C", participanteC],
  ];
  let vencedorMedia =0;
  let vencedorMediaNome = "";
  let vencedorNotaMaior = 0;
  let vencedorNotaMaiorNome = "";
  for (let indice = 0; indice < participantes.length; indice++) {
    const participanteMedia = pontuacaoMedia(participantes[indice][1]);
    if (participanteMedia > vencedorMedia) {
      vencedorMedia = participanteMedia;
      vencedorMediaNome = participantes[indice][0];
    }
    const participanteNotaMaior = pontuacaoMaior(participantes[indice][1]);
    if (participanteNotaMaior > vencedorNotaMaior) {
      vencedorNotaMaior = participanteNotaMaior;
      vencedorNotaMaiorNome = participantes[indice][0];
    }
  }
  console.log(
    "Na categoria Melhor Média o ganhador foi " +
      vencedorMediaNome +
      " com a pontuação de: " +
      vencedorMedia
  );

  console.log(
    "Na categoria Maior e-tip o ganhador foi " +
    vencedorNotaMaiorNome +
    " com a pontuação de: " + 
    vencedorNotaMaior
  );
}

competicao(ParticipanteA,ParticipanteB,ParticipanteC);