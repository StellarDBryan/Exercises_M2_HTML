const num = 4;

function EsPar(num) {
    if (num === 0) {
        console.log(num, " es indefinido. ");
    } else if ((num % 2) === 0) {
        console.log(num, " es par. ");
    } else if ((num % 2) != 0) {
        console.log(num, " es impar. ");
    }
} 

EsPar(num); 