function podeSubir(alturaPessoa, acompanhada) {
  if ((alturaPessoa) => 1.4 && alturaPessoa < 2) {
    console.log("Pode Subir!");
  } else if (alturaPessoa > 2) {
    console.log("Sua altura é superior ao permitido");
  } else if (alturaPessoa >= 1.2 && acompanhada == true) {
    console.log("Pode subir, pois está acompanhado(a)!");
  } else if (alturaPessoa >= 1.2 && acompanhada == false) {
    console.log("Não pode subir, pois não está acompanhado(a)");
  } else {
    console.log("Não pode subir, mesmo se estiver acompanhada!");
  }
}

podeSubir(1.4, false);
podeSubir(1.41, false);
podeSubir(1.5, false);
podeSubir(3, false);
podeSubir(1.3, false);
podeSubir(1.3, true);
podeSubir(1.2, true);
podeSubir(1.19, true);
podeSubir(1.39, false);
