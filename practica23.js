const calificaciones = [5, 7, 10, 8, 9, 11]; 

console.log("Las calificaciones son las siguientes: ");
for (let index = 0; index < calificaciones.length; index++) {
    if (calificaciones[index] >= 0 && calificaciones[index] < 6) 
        console.log(index+1, " Reprobado"); 
     else if(calificaciones[index] >= 6 && calificaciones[index] < 8) 
        console.log(index+1, " Regular"); 
     else if(calificaciones[index] >= 8 && calificaciones[index] < 9) 
        console.log(index+1, " Bien"); 
    else if(calificaciones[index] >= 9 && calificaciones[index] < 10) 
        console.log(index+1, " Muy bien"); 
    else if(calificaciones[index] === 10) 
        console.log(index+1, " Excelente"); 
    else console.log("Numero no valido en el arreglo en el indice: ", index); 
}