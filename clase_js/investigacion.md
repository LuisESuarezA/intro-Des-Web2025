# Clases en JavaScript

## Definición
Una clase en JavaScipt es una sintaxis que funciona como plantilla para crear objetos con propiedads y métodos predefinidos. Es decir, son una herramienta útil para desarrollar código orientado a objetos con la base de JavaScript. Antes de las clases, JavaScript necesitaba usar funciones constructoras y prototipos para crear objetos con metodos compartidos. Con clases, el proceso se simplifica com en lenguajes orientados a objetos tradicionales como Java o Python.

## Sintaxis básica
```javascript
class NombreDeLaClase { // se define la clase
  constructor(param1, param2, param3) {  método con el cual se contruyen nuevos objetos
    this.propiedad1 = param1; // se asignan las propiedades
    this.propiedad2 = param2;
    this.propiedad3 = 'valor por defecto'; // se pueden asignar valores por defecto
    this.numero = param3;
    this.#privado = 'valor privado'; // se pueden definir propiedades privadas con #
  }

  metodo1() { 
    console.log(this.propiedad1); // se definen metodos o funciones con propiedades de la clase
  }

  metodo2(numero) {
    this.propiedad3 += numero ;
    console.log("Número actualizado= " + this.propiedad3);
  }
  
  #metodoPrivado() { // se pueden definir metodos privados con #
    console.log("Este es un método privado");
  }
}

// Extensión de clases
class SubClase extends NombreDeLaClase { // se puede crear una subclase que herede de la clase principal
  constructor(param1, param2, param3, param4) {
    super(param1, param2, param3); // se llama al constructor de la clase padre con super()
    this.propiedad4 = param4; // se pueden agregar nuevas propiedades
  }
}   

// Crear una instancia de la clase
const objeto1 = new NombreDeLaClase('valor1', 'valor2', 5);
objeto1.metodo1(); // Llama al método metodo1
objeto1.metodo2(10); // Llama al método metodo2 con un argumento
```

