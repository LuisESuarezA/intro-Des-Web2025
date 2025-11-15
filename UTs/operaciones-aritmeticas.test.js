const { sumar, restar, dividir, operar } = require("./operaciones-aritmeticas.js");

test("Debe sumar dos números correctamente", () => {
  expect(sumar(2, 3)).toBe(5);
});

test("Debe restar dos números correctamente", () => {
  expect(restar(2, 3)).toBe(-1);
  expect(restar(10, 7)).toBe(3);
});

test("Debe lanzar un error al dividir entre cero", () => {
  try {
    dividir(10, 0);
  } catch (e) {
    expect(e.message).toBe("No se puede dividir entre cero :(");
  }
});

test("Debe lanzar un error al dividir entre cero (versión con toThrow)", () => {
  expect(() => dividir(10, 0)).toThrow("No se puede dividir entre cero :(");
});

test("Debe funcionar todas las operaciones de la función de operación", () => {
  try {
    operar(1,1,"test");
  } catch (e) {
    expect(e.message).toBe("Operación no válida")
  }
  expect(operar(2, 3, "restar")).toBe(-1);
  expect(operar(10, 7, "sumar")).toBe(17);
  expect(operar(2, 3, "multiplicar")).toBe(6);
  expect(operar(10, 4, "dividir")).toBe(2.5);
  expect(operar(3, 2, "modulo")).toBe(1);
});