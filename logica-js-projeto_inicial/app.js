alert('Boas vindas ao jogo do número secreto!');
let numeroSecreto = 9;
let chute = prompt('Escolha um número entre 1 e 10')

 if (chute == numeroSecreto){
    alert(`Parabéns, você acertou o número secreto (${numeroSecreto}).`);
 } else {
   alert(`Você errou! O número secreto é ${numeroSecreto} e você escolheu o número ${chute}`)
 }