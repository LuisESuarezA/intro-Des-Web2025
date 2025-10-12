// Inserción
function guardar(clave, valor) {
  sessionStorage.setItem(clave, valor);
}

function guardarObjeto(clave, objeto) {
  sessionStorage.setItem(clave, JSON.stringify(objeto));
}

// Consulta
function obtener(clave) {
  return sessionStorage.getItem(clave);
}

function obtenerObjeto(clave) {
  const valor = sessionStorage.getItem(clave);
  return valor ? JSON.parse(valor) : null;
}

function existe(clave) {
  return sessionStorage.getItem(clave) !== null;
}

// Eliminación
function eliminar(clave) {
  sessionStorage.removeItem(clave);
}

function eliminarTodo() {
  sessionStorage.clear();
}

// Ejemplos de uso
guardar('usuario', 'Juan');
guardar('edad', '25');

guardarObjeto('datos', {
  nombre: 'Maria',
  email: 'maria@example.com'
});

console.log(obtener('usuario'));
console.log(obtenerObjeto('datos'));
console.log(existe('usuario'));

eliminar('edad');
eliminarTodo();