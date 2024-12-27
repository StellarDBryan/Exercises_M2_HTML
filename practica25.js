
function SerieFibonacci(numero){
    let list = []; 
    function Fibonacci(numero){
        if (numero === 0) {
            return 0;
        }
        else if(numero === 1) {
            return 1;
        }
        else if (numero >= 2) {
            return (Fibonacci(numero-1) + Fibonacci(numero-2)); 
        }
    } 

    for (let index = 0; index <= numero; index++) {
        list.push(Fibonacci(index));
    }

    return list.join(' - ');
}

console.log(SerieFibonacci(10));