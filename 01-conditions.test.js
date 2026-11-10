import {
  estPositif,
  estPair,
  max,
  mention,
  fizzbuzz,
} from "./01-conditions.js";

// Pattern : expect(fonction(argument)).toBe(valeur_attendue)
// On te montre estPositif en entier. Pour estPair, c'est le même pattern — à toi.

describe("estPositif", () => {
  it("retourne true pour un nombre positif", () => {
    expect(estPositif(5)).toBe(true);
  });
  it("retourne false pour un nombre négatif", () => {
    expect(estPositif(-3)).toBe(false);
  });
  it("retourne true pour zéro", () => {
    expect(estPositif(0)).toBe(true);
  });
});

// Même pattern qu'estPositif — écris les 3 tests toi-même.
// Cas à couvrir : un nombre pair, un nombre impair, zéro.
describe("estPair", () => {
  it("retourne true pour un nombre pair", () => {
    expect(estPair(6)).toBe(true);
  });
  it("retourne false pour un nombre impair", () => {
    expect(estPair(5)).toBe(false);
  });
  it("retourne true pour 0", () => {
    expect(estPair(0)).toBe(true);
  });
});

// Nouveau pattern : deux paramètres, cas d'égalité.
// On te montre max en entier.
describe("max", () => {
  it("retourne le plus grand quand a > b", () => {
    expect(max(7, 3)).toBe(7);
  });
  it("retourne le plus grand quand b > a", () => {
    expect(max(3, 7)).toBe(7);
  });
  it("retourne la valeur si les deux sont égaux", () => {
    expect(max(5, 5)).toBe(5);
  });
});

// Même pattern que max — écris les tests pour chaque mention.
// Cas à couvrir : une note dans chaque tranche, et la valeur frontière 16.
describe("mention", () => {
  it("retourne 'Très bien' pour une note >= 16", () => {
    const note = 18;
    expect(mention(note)).toBe("Très bien");
  });
  it("retourne 'Très bien' pour une note = 16", () => {
    const note = 16;
    expect(mention(note)).toBe("Très bien");
  });
  it("retourne 'Bien' pour une note >= 14", () => {
    const note = 15;
    expect(mention(note)).toBe("Bien");
  });
  it("retourne 'Assez bien' pour une note >= 12", () => {
    const note = 13;
    expect(mention(note)).toBe("Assez bien");
  });
  it("retourne 'Passable' pour une note >= 10", () => {
    const note = 10;
    expect(mention(note)).toBe("Passable");
  });
  it("retourne 'Insuffisant' pour une note >= 10", () => {
    const note = 8;
    expect(mention(note)).toBe("Insuffisant");
  });
});

// [FACULTATIF] Même pattern — à toi.
// Cas à couvrir : multiple de 3, multiple de 5, multiple des deux, autre.
describe("fizzbuzz", () => {
  it("retourne 'Fizz' si le nombre est un multiple de 3 mais pas de 5", () => {
    const nombre = 6;
    expect(fizzbuzz(nombre)).toBe("Fizz");
  });
  it("retourne 'Buzz' si le nombre est un multiple de 5 mais pas de 3", () => {
    const nombre = 25;

    expect(fizzbuzz(nombre)).toBe("Buzz");
  });
  it("retourne 'FizzBuzz' si le nombre est un multiple de 3 et de 5", () => {
    const nombre = 15;

    expect(fizzbuzz(nombre)).toBe("FizzBuzz");
  });
  it("retourne 'nombre' si le nombre n'est ni un multiple de 3 ni un multiple de 5", () => {
    const nombre = 7;

    expect(fizzbuzz(nombre)).toBe("7");
  });
});
