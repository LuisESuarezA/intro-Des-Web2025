# SessionStorage
## ¿Qué es SessionStorage?

- API de almacenamiento web en HTML5 (igual que localStorage).
- Guarda datos temporalmente en el navegador mientras dure la sesión de la pestaña/ventana.
- Alternativa más moderna y optimizada que cookies para datos de sesión.
- Almacenamiento clave-valor.
- Sólo admite strings. Afortunadamente existe `JSON.stringify()` y `JSON.parse()`.
- Aislamiento de información por dominio (cada dominio tiene su propio sessionStorage).
- Los datos se eliminan automáticamente cuando se cierra la pestaña o ventana del navegador.
- Esta información no se envía de forma automática al servidor.
- Se guarda la información en "texto plano".
- No es seguro para datos sensibles: contraseñas, tokens, tarjetas, etc.

---

## Características específicas de SessionStorage

### Persistencia temporal
- Los datos sólo duran mientras la pestaña/ventana está abierta.
- Si recargas la página (F5), los datos persisten.
- Si abres una nueva pestaña o ventana, se crea un sessionStorage independiente.
- Al cerrar la pestaña/ventana, todos los datos se eliminan automáticamente.

### Aislamiento por pestaña
- Cada pestaña o ventana tiene su propio sessionStorage.
- Los datos NO se comparten entre pestañas del mismo dominio.
- Duplicar una pestaña (Ctrl+Shift+T o botón derecho > Duplicar) sí copia el sessionStorage.

### No se sincroniza
- No se sincroniza entre dispositivos (igual que localStorage).
- No se sincroniza entre pestañas del mismo navegador.

---

## Casos de uso comunes

SessionStorage suele usarse en:
- Datos de formularios temporales (formularios multipaso, wizards).
- Estado de navegación temporal (filtros aplicados, página actual en paginación).
- Información de sesión del usuario (no sensible).
- Datos temporales durante un proceso de checkout/compra.
- Estado de UI temporal (modales abiertos, pestañas activas).
- Tokens de sesión de corta duración (aunque no es lo más seguro).
- Carrito de compras temporal (que se pierde al cerrar la pestaña).

---

## Métodos básicos de SessionStorage

- sessionStorage.getItem("clave") → te regresa el valor guardado en esa clave.
- sessionStorage.setItem("clave", "valor") → guarda la clave y el valor que se pasaron como parámetros.
- sessionStorage.removeItem("clave") → remueve dicha clave del almacenamiento de sesión.
- sessionStorage.clear() → elimina toda la información del almacenamiento de sesión.
- sessionStorage.key(índice) → devuelve el nombre de la clave en la posición especificada.
- sessionStorage.length → propiedad que indica el número total de elementos almacenados.