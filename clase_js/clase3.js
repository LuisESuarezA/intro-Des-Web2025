class Alumno {
    constructor(nombre, edad, grado, carrera) {
        this.nombre = nombre;
        this.edad = edad;
        this.grado = grado;
        this.carrera = carrera;
    }

    describir() {
        return `${this.nombre} tiene ${this.edad} años, está en el grado ${this.grado} y estudia ${this.carrera}.`;
    }

    avanzarGrado() {
        this.grado += 1;
        return `${this.nombre} ahora está en el grado ${this.grado}.`;
    }

    estudiar(examen) {
        return `${this.nombre} está estudiando para el examen de ${examen}.`;
    }
}

class Ingeniero extends Alumno {
    constructor(nombre, edad, grado, carrera, numClasesFisica) {
        super(nombre, edad, grado, carrera);
        this.numClasesFisica = numClasesFisica;
    }

    describir() {
        return `${this.nombre} tiene ${this.edad} años, está en el grado ${this.grado}, estudia ${this.carrera} y toma ${this.numClasesFisica} clases de física.`;
    }

    inscribirMateria(materia) {
        return `${this.nombre} se ha inscrito en la materia de ${materia}.`;
    }
}

// Ejemplo de uso:
const alumno1 = new Alumno("Carlos", 16, 10, "Matemáticas");
console.log(alumno1.describir());
console.log(alumno1.avanzarGrado());
console.log(alumno1.estudiar("Matemáticas"));

const ingeniero1 = new Ingeniero("Ana", 21, 5, "Ingeniería", 3);
console.log(ingeniero1.describir());
console.log(ingeniero1.avanzarGrado());
console.log(ingeniero1.inscribirMateria("Física del universo"));