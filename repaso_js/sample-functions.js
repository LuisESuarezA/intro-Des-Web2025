/*
 Descripción:
 Este archivo contiene 15 funciones básicas en Python para practicar lógica y programación.
 El objetivo es que los alumnos las traduzcan a JavaScript, entendiendo los conceptos
 de variables, concatenación, estructuras de control, arreglos (listas), y funciones.
*/

function saludar_usuario(nombre) {
    /*
    Imprime un saludo personalizado.
    Ejemplo de concatenación y salida por consola.
    */
    console.log("Hola, " + nombre + "! Bienvenido al curso de programación.");
}

function repetir_texto(texto, veces) {
    /*
    Devuelve una cadena repetida 'veces' veces, separada por espacios.
    Ejemplo de concatenación y multiplicación de strings.
    */
    return texto.repeat(veces);
}

function invertir_palabra(palabra) {
    /*
    Invierte una palabra usando slicing.
    */
    return palabra.split('').reverse().join('');
}

function contar_vocales(texto) {
    /*
    Cuenta el número de vocales en una cadena.
    */
    return texto.match(/[aeiou]/gi).length;
}

function mayusculas_y_minusculas(texto) {
    /*
    Devuelve una tupla con la cadena en mayúsculas y minúsculas.
    */
    return [texto.toUpperCase(), texto.toLowerCase()];
}

function promedio_lista(numeros) {
    /*
    Calcula el promedio de una lista de números.
    */
    return numeros.reduce((sum, num) => sum + num, 0) / numeros.length;
}

function maximo_y_minimo(numeros) {
    /*
    Devuelve una tupla con el número máximo y mínimo de una lista de números.
    */
    return [Math.max(...numeros), Math.min(...numeros)];
}

function filtrar_pares(numeros) {
    /*
    Devuelve una lista con los números pares de una lista de números.
    */
    return numeros.filter(num => num % 2 === 0);
}

function sumar_elementos_texto(lista_textos) {
    /*
    Devuelve la suma de los elementos de una lista de textos.
    */
    return lista_textos.reduce((sum, texto) => sum + texto.length, 0);
}

function buscar_elemento(lista, elemento) {
    /*
    Busca un elemento en una lista y devuelve True si existe, False si no.
    */
    return lista.includes(elemento);
}

function contar_palabras(frase) {
    /*
    Cuenta el número de palabras en una frase.
    */
    return frase.split(' ').length;
}

function duplicar_elementos(lista) {  
    /*
    Devuelve una lista con los elementos duplicados.
    */
    return lista.map(elemento => elemento * 2);
}

function capitalizar_palabras(frase) {
    /*
    Devuelve una frase con las palabras capitalizadas.
    */
    return frase.split(' ').map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1)).join(' ');
}

function mezclar_listas(lista1, lista2) {
    /*
    Devuelve una lista con los elementos de las dos listas mezclados.
    */
    return lista1.concat(lista2);
}

function contar_frecuencia(lista) {
    /*
    Devuelve un diccionario con la frecuencia de cada elemento en la lista.
    */ 
    return lista.reduce((acc, item) => {
        acc[item] = (acc[item] || 0) + 1;
        return acc;
    }, {});
}
