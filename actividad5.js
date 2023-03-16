function numeroMayor(n1, n2, n3){
    if(n1===n2 & n2===n3){
        return "son iguales"
    }else{
        return Math.max(n1, n2, n3)
    }
}

console.log(numeroMayor(3, 3, 3))