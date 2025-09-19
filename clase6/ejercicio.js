// funciones para multiplicar
// funcion clasica
function multiplicar(a, b) {
  return a * b;
}
// funcion arrow
const multiplicarA = (a, b) => a * b;

// funciones para elevar al cuadrado
// funcion clasica
function cuadrado(x) {
  return x * x;
}
// funcion arrow
const cuadradoA = x => x * x;


console.log(multiplicar(3, 4));
console.log(multiplicarA(3,4));
console.log(cuadrado(9));
console.log(cuadradoA(9));