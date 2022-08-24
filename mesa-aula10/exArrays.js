let atividadeA = ["Posição 0", "Posição 1", "Posição 2", "Posição 3"];
console.log(atividadeA[2]);

let atividadeB = ["Posição 0", "Posição 1", "Posição 2", "Posição 3"];
atividadeB[0] = '0 -'+atividadeB[0];
atividadeB[1] = '1 -'+atividadeB[1];
atividadeB[2] = '2 -'+atividadeB[2];
atividadeB[3] = '3 -'+atividadeB[3];
console.log(atividadeB);

let atividadeC = ["Posição 0", "Posição 1", "Posição 2", "Posição 3"];
atividadeC.push("Posição 4");
console.log(atividadeC);

let atividadeD = ["Posição 0", "Posição 1", "Posição 2", "Posição 3"];
atividadeD.pop();
console.log(atividadeD);

//atividadeE

let nomes1 = ['Maria', 'Paulo', 'João'];
let nomes2 = ['Carla', 'Pedro', 'Carlos']

console.log(nomes1[1]==nomes2[1]);

////////////////

let numbers = [22, 33, 54, 66, 72, 73];
console.log(numbers[numbers.length]);

let grupoDeAmigos1 = [
  ["Harry", "Ron", "Hermione"],
  ["Spiderman", "Hulk", "Ironman"],
  ["Penélope Glamour", "Pierre Nodoyuna", "Patán"],
];
console.log(grupoDeAmigos1[1][0])

let str = "uma string qualquer";
let grupoDeAmigos = [ [45, 89, 0], ["Digital", "House", true], ["string", "123","false", 54, true, str] ]
console.log(grupoDeAmigos[2][grupoDeAmigos[2].length - 1])

////////////////

function imprimirInverso (vetor) {
    while (vetor.length > 0) {
        let ultimoItem = vetor.pop();
        console.log(ultimoItem);
    }
}
imprimirInverso([0,1,2,3])

////////////////

function inverter (vetor) {
    let invertido = [];
    while (vetor.length > 0) {
        let ultimoItem = vetor.pop();
        invertido.push(ultimoItem);
    }
    return invertido;
}

console.log(inverter([0,1,2,3,4,5]));

////////////////

function somarArray (vetor) {
    let soma = 0;
    while (vetor.length > 0) {
        let valor = vetor.shift();
        soma += valor;
    }
    console.log(soma);
}

somarArray([1,2,3]);
somarArray([10,3,10,4]);
somarArray([-5,100]);

////////////////

////////////////

function arrayJoin(vetor) {
    let texto = "";
    while (vetor.length > 0) {
        let letra = vetor.shift();
        texto += letra;
    }
    console.log(texto);
}

arrayJoin(["o","l","a"]);
arrayJoin(["t","c","h","a","u"]);


////////////////

