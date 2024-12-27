// const age = 19;
// const id = true; 
// const palanca = false; 

// if ((age >= 18 && id===true) || palanca===true) {
//     console.log('Puedes entrar');
// } else {
//     console.log('Nel papi, pa fuera');
// } 

const dormamu_se_rindio=false;
let i=0;
// while (dormamu_se_rindio===false) {
//     console.logy('no se rindio en el intento ', i); 
//     i++;
//     if (dormamu_se_rindio===3459) {
//         dormamu_se_rindio=true;
//     }
// } 

// do {
//     i++; 
//     console.log('no se rindio en el intento ', i); 
//     if (i===3459) {
//         dormamu_se_rindio=true;
//     }
// } while (dormamu_se_rindio===false); 

// for (let index = 0; index <= 150; index++) {
//     console.log('repito ', index)
// } 

// const option=0;
// switch (option) {
//     case 0:
//         console.log('Option 0')        
//         break;
//     case 1:
//         console.log('Option 1')        
//         break;
//     case 2:
//         console.log('Option 2')        
//         break;
//     default:
//         console.log('Option Not available')
//         break; 
// } 

function dividir(a, b){
    try {
        if (b===0) {
            throw new Error("No se puede dividir entre 0");
        }
        let resultado = a/b;
        console.log(resultado);
    } catch (error) {
        console.log("Tenemos un error: ", error.message);
    }
    
}

dividir(3,0);