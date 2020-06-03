/* 
Considerar el string original "La mejor forma de predecir el futuro es creándolo"
con base en dicho string, realizar lo siguiente:
1.- Regresar un nuevo string, en el cual las palabras pares esten escritas en minúscula, y las palabras nones en mayúscula
    input => "La mejor forma de predecir el futuro es creándolo"
    output => "LA mejor FORMA de PREDECIR el FUTURO es CREÁNDOLO"
*/



const words = "La mejor forma de predecir el futuro es creándolo";
var wordText = words.split(" ");

let transformigText = wordText.map((word, index) => {
    
    if (index % 2 === 0) {
      return word.toUpperCase();
    } else {
      return word;
    } }) .join(" ");
console.log(transformigText);



/*
2.- Regresar un nuevo string, que sea una frase formada con todas las palabras del string original que tengan más de 5 letras
    input => "La mejor forma de predecir el futuro es creándolo"
    output => "mejor forma predecir futuro creándolo"
*/

let fiveWords = wordText.filter((word) => word.length > 5).join(" ");
console.log(fiveWords);



/*
3.- Regresar el promedio de caracteres por palabra con base en el string original
    input => "La mejor forma de predecir el futuro es creándolo"
    output => "La frase usa en promedio ${average} caracteres por palabra"
*/

const averageByWord = wordText.reduce((accum, word) => { accum += word.length;
    return accum;
  }, 0) / wordText.length;

console.log(`La frase usa en promedio ${averageByWord} caracteres por palabra`);

 
