class Animal {
    constructor(nombre, especie, edad) {
        this.name = nombre;
        this.species = especie;
        this.age = edad;
    }

    describe() {
        return `${this.name} es un ${this.species} con ${this.age} años.`;
    }

    envejecer(anios) {
        this.age += anios;
        return `${this.name} ahora tiene ${this.age} años.`;
    }

    makeSound() {
        if (this.species.toLowerCase() === "perro") {
            return `${this.name} está ladrando.`;
        } else {
            return `${this.name} está haciendo un sonido.`;
        }
    }
}

// Example usage:
const dog = new Animal("Luna", "Perro", 3);
console.log(dog.describe());
console.log(dog.envejecer(2));
console.log(dog.makeSound());