let filmes= ["star wars", "totoro",  "rocky", "pulp fiction",  "a vida é bela"];

for (let indice = 0; indice < filmes.length; indice++) {
    filmes[indice] = filmes[indice].toUpperCase();    
}
console.log(filmes);

let filmesAnimacoes = ["Toy Story", "Procurando Nemo", "Kung-fu Panda", "Wally", "Fortnite"];

function passagemDeElementos(array1, array2) {
    const fortnitePosicao = array2.indexOf("Fortnite");
    array2.splice(fortnitePosicao,1);
    while (array2.length > 0) {
        array1.push(array2.pop().toUpperCase());
    }
}
passagemDeElementos(filmes,filmesAnimacoes);
console.log(filmes);
