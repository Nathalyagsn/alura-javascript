alert('Boas vindas ao jogo do número secreto!');
let numeroSecreto = 5;
let chute;
let tentativas = 1;

// enquanto chute não for igual !=
  while (chute!= numeroSecreto) {
      chute = prompt('Escolha um número entre 1 e 10');
      if (chute == numeroSecreto){
        break;
    } else {
        if (numeroSecreto > chute){
          alert(`O número secreto é maior que ${chute}.`);
        } else {
          alert(`O numero secreto é menor que ${chute}.`);
        }
        //tentativas = tentativas + 1; faz a mesma coisa que o de baixo mas é mais longo
        tentativas++;
    }
  }
  if(tentativas > 1){
alert(`Parabéns, você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
} else {
  alert(`Parabéns, você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
}