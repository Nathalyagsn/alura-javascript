let titulo = document.querySelector('h1');
titulo.innerHTML = ('Hora do desafio');

function verificarClick() {
    console.log('O botão foi clicado.');
}

function verificarAlerta() {
    alert('Eu amo JS.');
}

function verificarPrompt() {
   let Cidade = prompt('Para que cidade foi sua ultima viagem?');
    alert(`Estive em ${Cidade} e lembrei de você. `);
}

function verificarSoma() {
    let numero1 = parseInt(prompt('Escolha um número.'));
    let numero2 = parseInt(prompt('Escolha outro número.'));
    let soma = (numero1 + numero2 );
    alert(`A soma entre ${numero1} e ${numero2} é ${soma}`);
}