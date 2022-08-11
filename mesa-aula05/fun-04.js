function idadeCachorro(AnoHumano,MesHumano) {
    const idadeCachorro = (7/12)*(12*AnoHumano+MesHumano);
    return "seu pet tem " + Math.trunc(idadeCachorro) + " anos"; //Math.trunc(idadeCachorro) retorna o valor sem as casas decimais, sem arredondar.
}

console.log(idadeCachorro(0,3));