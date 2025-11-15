# Funciones de validación de Jest con expect()

## Definición
Los matchers son métodos de Jest que permiten validar o comparar valores en las pruebas unitarias. Se utilizan junto con la función `expect()` para verificar que el código tenga los resultados esperados. Jest proporciona una amplia variedad de funciones que facilitan la escritura de pruebas, desde comparaciones simples hasta validaciones de excepciones y tipos de datos.

## Lista de Matchers

### .toEqual()
Compara el valor de dos objetos o arreglos de forma recursiva, verificando que tengan la misma estructura y valores. Es decir, verifica que el contenido sea equivalente, no que sean el mismo objeto en memoria.

### .toBeTruthy()
Verifica que un valor sea "truthy" en JavaScript, es decir, cualquier valor que se evalúe como `true`. Esto incluye valores como números distintos de cero, strings no vacíos, objetos, arreglos, etc.

### .toBeFalsy()
Verifica que un valor sea "falsy" en JavaScript, es decir, cualquier valor que se evalúe como `false`. Los valores falsy en JavaScript son: `false`, `0`, `''` (string vacío), `null`, `undefined` y `NaN`.

### .toBeNull()
Verifica que un valor sea exactamente `null`. Es más específico que `.toBeFalsy()` ya que solo pasa si el valor es `null` y no otro valor falsy como `undefined` o `0`.

### .toBeUndefined()
Verifica que un valor sea exactamente `undefined`. Útil para validar variables no inicializadas o propiedades inexistentes en objetos.

### .toThrow()
Verifica que una función lance un error (throw) cuando se ejecuta. Permite validar tanto que se lance cualquier error como verificar el mensaje específico del error. La función debe pasarse sin ejecutar (sin paréntesis) o envuelta en otra función. Este método permite omitir el uso de try-catch para validar errores.

### .toStrictEqual()
Similar a `.toEqual()`, pero realiza una comparación más estricta. Verifica que los objetos sean del mismo tipo de clase y que no tengan propiedades `undefined`.

## Ejemplos de Uso

### Ejemplo con .toEqual()
```javascript
test('compara dos objetos con la misma estructura', () => {
  const usuario1 = { nombre: 'Ana', edad: 25 };
  const usuario2 = { nombre: 'Ana', edad: 25 };
  expect(usuario1).toEqual(usuario2); // ✓ Pasa
});
```

### Ejemplo con .toBeTruthy()
```javascript
test('valida que un valor sea truthy', () => {
  const texto = 'Hola mundo';
  expect(texto).toBeTruthy(); // ✓ Pasa
});
```

### Ejemplo con .toBeFalsy()
```javascript
test('valida que un string vacío sea falsy', () => {
  const textoVacio = '';
  expect(textoVacio).toBeFalsy(); // ✓ Pasa
});
```

### Ejemplo con .toBeNull()
```javascript
test('verifica que el valor sea null', () => {
  const valor = null;
  expect(valor).toBeNull(); // ✓ Pasa
});
```

### Ejemplo con .toBeUndefined()
```javascript
test('verifica que una variable sea undefined', () => {
  let sinDefinir;
  expect(sinDefinir).toBeUndefined(); // ✓ Pasa
});
```

### Ejemplo con .toThrow()
```javascript
function dividir(a, b) {
  if (b === 0) {
    throw new Error('No se puede dividir entre cero');
  }
  return a / b;
}

test('lanza error al dividir entre cero', () => {
  expect(() => dividir(10, 0)).toThrow('No se puede dividir entre cero'); // ✓ Pasa
});
```

**Nota:** El uso de `.toThrow()` elimina la necesidad de usar try-catch para validar errores, haciendo el código más limpio y legible.

### Ejemplo con .toStrictEqual()
```javascript
test('compara objetos de forma estricta', () => {
  const producto = { id: 1, nombre: 'Laptop', precio: 999.99 };
  expect(producto).toStrictEqual({ id: 1, nombre: 'Laptop', precio: 999.99 }); // ✓ Pasa
});
```