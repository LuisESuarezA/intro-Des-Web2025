// Este archivo contiene funciones de operaciones con texto
function unir_palabras(a, b) {
  // une dos palabras en una lista
  return [a, b];
}

function filtrar_letras(a, b) {
  // filtra las letras b de a 
  return a.split('').filter(letra => !b.includes(letra)).join('');
}

function verificar_vocales(voc) {
  // verifica si voc tiene o no vocales
  const vocales = 'aeiouAEIOUáéíóúÁÉÍÓÚ';
  return voc.split('').some(letra => vocales.includes(letra));
}

function regresar_numeros(num) {
  // regresa una lista con los números de un texto
  return num.match(/\d/g) || [];
}


module.exports = { unir_palabras, filtrar_letras, verificar_vocales, regresar_numeros};