function esVocal(letra){
    return letra.match(/[aeiouAEIOU]/) ? true : false;

}

console.log(esVocal("A"));