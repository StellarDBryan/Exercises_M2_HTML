const numeros = [1, 2, 4, 2, 3];
let empates = [];
let mayor = {
    index: 0,  
    numero: 0, 
}; 

for (let index = 0; index < numeros.length; index++) {
    if (numeros[index] > mayor.numero) {
        mayor.index = index+1;
        mayor.numero = numeros[index]; 
        empates.splice(0, empates.length);
    } else if(numeros[index] === mayor.numero){
        if (empates.length === 0) {
            empates.push(mayor.index, index+1);
        } else {
            empates.push(index+1); 
        } 
    } 
} 

if (empates.length > 0) {
    console.log("Hay un empate entre los siguientes indices: ", empates.toString()); 
} else {
    console.log("El mayor numero encontrado es: ", mayor.numero);
}