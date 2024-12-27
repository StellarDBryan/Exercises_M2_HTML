
function EsPalindromo(numero){
    const num = numero.toString();
    for (let i=0, j=num.length-1; i < j; i++, j--) {
        if(num.charAt(i) != num.charAt(j))
            return num+" NO es palindromo. ";
    } 
    return num+" SI es palindromo. ";
}

console.log(EsPalindromo(132325));