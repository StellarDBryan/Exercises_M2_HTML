
function EsNumeroValido(numero){
    if (numero >= 1 && numero <=100) {
        console.log(numero, " es un numero valido. ");
    } else {
        console.log(numero, " es un numero fuera de rango. ");
    }
}

EsNumeroValido(100);
EsNumeroValido(0); 
EsNumeroValido(50);
EsNumeroValido(-5);
EsNumeroValido(150);