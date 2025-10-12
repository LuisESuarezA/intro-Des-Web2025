class Banco {
    constructor(nombre, deuda, interes) {
        this.nombre = nombre;
        this.deuda = deuda;
        this.interes = interes;
    }

    describir() {
        return `${this.nombre} tiene una deuda de $${this.deuda} con un interés del ${this.interes}%.`;
    }

    pagarDeuda(cantidad) {
        this.deuda -= cantidad;
        if (this.deuda < 0) this.deuda = 0;
        return `${this.nombre} ha pagado $${cantidad}. La deuda actual es de $${this.deuda}.`;
    }

    calcularInteres() {
        const interesCalculado = (this.deuda * this.interes) / 100;
        return `El interés sobre la deuda actual de $${this.deuda} es de $${interesCalculado}.`;
    }
}

// Ejemplo de uso:
const cliente = new Banco("Juan Pérez", 5000, 5);
console.log(cliente.describir());
console.log(cliente.pagarDeuda(1000));
console.log(cliente.calcularInteres());