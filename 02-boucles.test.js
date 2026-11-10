import {
  compterJusqua,
  afficherPairs,
  somme,
  produit,
  compterPairs,
  table,
  multiplesJusqua,
  puissance,
  estDivisibleParTous,
  fibonacci,
} from "./02-boucles.js";

// Pattern 1 : boucle + console.log (pas de valeur de retour à tester)
// On vérifie juste que la fonction s'exécute sans erreur.
describe("compterJusqua", () => {
  it("s'exécute sans erreur pour n=5", () => {
    expect(() => compterJusqua(5)).not.toThrow();
  });
});

// Même pattern que compterJusqua — à toi.
// Cas à couvrir : s'exécute sans erreur pour n=8, s'exécute sans erreur pour n=0.
describe("afficherPairs", () => {
  it("s'exécute sans erreur pour n=8", () => {
    expect(() => compterJusqua(8)).not.toThrow();
  });
  it("s'exécute sans erreur pour n=0", () => {
    expect(() => compterJusqua(0)).not.toThrow();
  });
});

// Pattern 2 : boucle + accumulateur numérique → .toBe() sur un nombre.
// On te montre somme en entier.
describe("somme", () => {
  it("retourne 15 pour n=5", () => {
    expect(somme(5)).toBe(15);
  });
  it("retourne 1 pour n=1", () => {
    expect(somme(1)).toBe(1);
  });
  it("retourne 0 pour n=0", () => {
    expect(somme(0)).toBe(0);
  });
});

// Même pattern que somme — à toi.
// Cas à couvrir : produit(5) → 120, produit(1) → 1, produit(0) → 1.
describe("produit", () => {
  it("retourne 120 pour n = 5", () => {
    expect(produit(5)).toBe(120);
  });
  it("retourne 1 pour n = 1", () => {
    expect(produit(1)).toBe(1);
  });
  it("retourne 1 pour n = 0", () => {
    expect(produit(0)).toBe(1);
  });
});

// Même pattern que somme — à toi.
// Cas à couvrir : compterPairs(10) → 5, compterPairs(7) → 3, compterPairs(1) → 0.
describe("compterPairs", () => {
  it("retourne 5 pour n = 10", () => {
    expect(compterPairs(10)).toBe(5);
  });
  it("retourne 3 pour n = 7", () => {
    expect(compterPairs(7)).toBe(3);
  });
  it("retourne 0 pour n = 1", () => {
    expect(compterPairs(1)).toBe(0);
  });
});

// Pattern 3 : boucle + construction de tableau → .toEqual() sur un tableau.
// On te montre table en entier — c'est le premier .toEqual().
describe("table", () => {
  it("retourne les 3 premiers multiples de 3", () => {
    expect(table(3)).toEqual([3, 6, 9]);
  });
  it("retourne les 5 premiers multiples de 5", () => {
    expect(table(5)).toEqual([5, 10, 15, 20, 25]);
  });
  it("retourne un tableau vide pour n=0", () => {
    expect(table(0)).toEqual([]);
  });
});

// Même pattern que table — à toi.
// Cas à couvrir : multiplesJusqua(3, 12) → [3, 6, 9, 12], multiplesJusqua(7, 20) → [7, 14].
describe("multiplesJusqua", () => {
  it("retourne [3, 6, 9, 12] pour n = 3 et limite = 12", () => {
    expect(multiplesJusqua(3, 12)).toEqual([3, 6, 9, 12]);
  });
  it("retourne [7, 14] pour n = 7 et limite = 20", () => {
    expect(multiplesJusqua(3, 12)).toEqual([3, 6, 9, 12]);
  });
});

// [FACULTATIF] Même pattern que somme/produit — à toi.
// Cas à couvrir : puissance(2, 10) → 1024, puissance(3, 3) → 27, puissance(5, 0) → 1.
describe("puissance", () => {
  it("retourne 1024 lorsque base = 2 et exposant = 10", () => {
    //Arrange
    const base = 2;
    const exposant = 10;
    //Act
    const result = puissance(base, exposant);
    //Assert
    expect(result).toBe(1024);
  });
  it("retourne 27 lorsque base = 3 et exposant = 3", () => {
    const base = 3;
    const exposant = 3;

    const result = puissance(base, exposant);

    expect(result).toBe(27);
  });
  it("retourne 1 lorsque base = 5 et exposant = 0", () => {
    const base = 5;
    const exposant = 0;

    const result = puissance(base, exposant);

    expect(result).toBe(1);
  });
});

// [FACULTATIF] Même pattern que table avec .toEqual() — à toi.
// Cas à couvrir : estDivisibleParTous(12, [2, 3, 4]) → true, estDivisibleParTous(10, [2, 3]) → false.
describe("estDivisibleParTous", () => {
  it("retourne true pour n = 12 et diviseurs = [2, 3, 4]", () => {
    //Arrange
    const n = 12;
    const diviseurs = [2, 3, 4];
    //Act
    const result = estDivisibleParTous(n, diviseurs);
    //Assert
    expect(result).toBe(true);
  });
  it("retourne false pour n = 10 et diviseurs = [2, 3]", () => {
    //Arrange
    const n = 10;
    const diviseurs = [2, 3];
    //Act
    const result = estDivisibleParTous(n, diviseurs);
    //Assert
    expect(result).toBe(false);
  });
});

// [FACULTATIF] Même pattern que table — à toi.
// Cas à couvrir : fibonacci(6) → [0, 1, 1, 2, 3, 5], fibonacci(1) → [0].
describe("fibonacci", () => {
  it("retourne [0, 1, 1, 2, 3, 5] pour n = 6", () => {
    //Arrange
    const n = 6;
    //Act
    const result = fibonacci(n);
    //Assert
    expect(result).toEqual([0, 1, 1, 2, 3, 5]);
  });
  it("retourne [0] pour n = 1", () => {
    //Arrange
    const n = 1;
    //Act
    const result = fibonacci(n);
    //Assert
    expect(result).toEqual([0]);
  });
});
