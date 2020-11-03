/**
 * Dato el siguiente array `[3,62,234,7,23,74,23,76,92]` use el metodo filter y una function arrow para:
 * crear un array que contenga solo los numeros pares
 */

const numbers = [3, 62, 234, 7, 23, 74, 23, 76, 92];
let numbersPares = (numbers) => {
    return numbers.filter (numbers => numbers % 2 == 0 );


};
console.log(numbersPares (numbers));


