const numeros = [0, 1, 2, 3, 4, 5, 6];
function sumarArreglo(){
    let suma = 0;
    for(i=0; i<numeros.length; i++){
        suma += numeros[i];
    }
    return suma;
}
 console.log(sumarArreglo())