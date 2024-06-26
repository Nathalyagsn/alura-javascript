function inverterTexto(textoOriginal) {
    return textoOriginal.split('').reverse().join('')
}

function removerEspacosEPontuacao(texto) {
    return texto.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
}

let textoOriginal = "ana"
let textoFiltrado = removerEspacosEPontuacao(textoOriginal);
let textoInvertido = inverterTexto(textoFiltrado);

if (textoInvertido === textoFiltrado){
    console.log('É um palindromo');

}else {
    console.log('Não é um palindromo');
}
