//Atividade 1 DigitalHouse()

function digitalHouse(num1,num2) {
    for (let i = 1; i <= 100; i++) {
        if (i%num1 == 0 && i%num2 ==0) {
            console.log("Digital House");
        } else if (i%num2 == 0) {
            console.log("House");
        } else if (i%num1 == 0) {
            console.log("Digital")
        } else {
            console.log(i)
        }
    } 
}
//digitalHouse(3,9)


//Atividade SomaArray() Reloaded

function somarArray(numArray) {
   let soma = 0;
    for (let indice = 0; indice < numArray.length; indice++) {
        soma += numArray[indice]
    }
    console.log(soma);
}
somarArray([1,2,3]);
somarArray([10, 3, 10, 4]);
somarArray([-5,100]);

function joinArray(stringArray) {
    let unir = "";
     for (let indice = 0; indice < stringArray.length; indice++) {
         unir += stringArray[indice]
     }
     console.log(unir);
 }
 joinArray(["o","l","a"]);
 joinArray(["x","a","u"]);
