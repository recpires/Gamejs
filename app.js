alert(' Bem vindo ao jogo do número secreto');
let numeroSecreto = 9;
console.log(numeroSecreto)
let chute;
let tentativas = 1;

//enquanto chute não for igual ao número secreto
while (chute != numeroSecreto){
    chute = prompt('Escolha um número entr 1 e 10');
    // se chute fo igual ao número secreto
    if (numeroSecreto == chute) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secrteto é menor que ${chute}`);
        } else{
            alert(`O número secrteto é maior que ${chute}`);
        }
        // tentativas =tentativas + 1;
        tentativas++;
    }
}

if (tentativas > 1) {
    alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
} else {
    alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
}