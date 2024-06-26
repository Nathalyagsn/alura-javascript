let numerosOrdenados =  [10,1, 5, 9, 8, 12, 15];
console.log(numerosOrdenados.sort(OrdenarNumeros));

function OrdenarNumeros(a,b) {
    return ( a - b)
}