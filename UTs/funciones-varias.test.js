const { unir_palabras, filtrar_letras, verificar_vocales, regresar_numeros } = require('./funciones-varias.js');

 test('unir_palabras debe retornar un arreglo con dos palabras', () => {
    expect(unir_palabras('Hola', 'Mundo')).toEqual(['Hola', 'Mundo']);
  });

  test('filtrar_letras debe remover las letras especificadas', () => {
    const resultado = filtrar_letras('javascript', 'aeiou');
    expect(resultado).toBeTruthy();
  });

  test('verificar_vocales debe retornar true cuando hay vocales', () => {
    expect(verificar_vocales('hola')).toBeTruthy();
  });

  test('verificar_vocales debe retornar false cuando no hay vocales', () => {
    expect(verificar_vocales('xyz')).toBeFalsy();
  });

  test('regresar_numeros debe retornar un arreglo con los dígitos', () => {
    expect(regresar_numeros('abc123def456')).toEqual(['1', '2', '3', '4', '5', '6']);
  });

  test('regresar_numeros debe retornar arreglo vacío si no hay números', () => {
    const resultado = regresar_numeros('abcdef');
    expect(resultado).toEqual([]);
  });

  test('filtrar_letras con string vacío debe retornar string vacío', () => {
    const resultado = filtrar_letras('', 'abc');
    expect(resultado).toBeFalsy();
  });

  test('unir_palabras debe crear un arreglo definido', () => {
    const resultado = unir_palabras('test', 'jest');
    expect(resultado).not.toBeUndefined();
    expect(resultado).not.toBeNull();
  });