import {
  maximum,
  minimum,
  moyenne,
  contient,
  compter,
  inverser,
  sansDoublons,
} from "./03-tableaux.js";

// Tu connais maintenant .toBe() et .toEqual().
// Nouveau cas ici : tester avec des négatifs et des tableaux vides.
// On te montre maximum en entier.
describe("maximum", () => {
  it("retourne le maximum", () => {
    expect(maximum([3, 7, 2, 9, 1])).toBe(9);
  });
  it("fonctionne avec un seul élément", () => {
    expect(maximum([5])).toBe(5);
  });
  it("fonctionne avec des négatifs", () => {
    expect(maximum([-3, -1, -7])).toBe(-1);
  });
});

// Même pattern qu'maximum — à toi.
// Cas à couvrir : cas normal, négatifs.
describe("minimum", () => {
  it("retourne le minimum", () => {
    expect(minimum([3, 7, 2, 9, 1])).toBe(1);
  });
  it("fonctionne avec un seul élément", () => {
    expect(minimum([5])).toBe(5);
  });
  it("fonctionne avec des négatifs", () => {
    expect(minimum([-3, -1, -7])).toBe(-7);
  });
});

// Nouveau cas : retourner null. On te montre moyenne en entier.
describe("moyenne", () => {
  it("retourne la moyenne", () => {
    expect(moyenne([2, 4, 6])).toBe(4);
  });
  it("retourne null pour un tableau vide", () => {
    expect(moyenne([])).toBe(null);
  });
  it("fonctionne avec un seul élément", () => {
    expect(moyenne([10])).toBe(10);
  });
});

// Même pattern — à toi.
// Cas à couvrir : valeur présente, valeur absente, tableau vide.
describe("contient", () => {
  it("retourne true pour une valeur présente", () => {
    //Arrange
    const valeur = 3;
    const tableau = [1, 4, 3, 5, 6];
    //Act
    const result = contient(tableau, valeur);

    //Assert
    expect(result).toBe(true);
  });
  it("retourne false pour une valeur absente", () => {
    //Arrange
    const valeur = 8;
    const tableau = [1, 4, 3, 5, 6];
    //Act
    const result = contient(tableau, valeur);

    //Assert
    expect(result).toBe(false);
  });
  it("retourne false lorsque le tableau est vide", () => {
    //Arrange
    const valeur = 8;
    const tableau = [];
    //Act
    const result = contient(tableau, valeur);

    //Assert
    expect(result).toBe(false);
  });
});

// Même pattern — à toi.
// Cas à couvrir : plusieurs occurrences, valeur absente (retourne 0).
describe("compter", () => {
  it("fonctionne lorsqu'il y a plusieurs occurences", () => {
    //Arrange
    const valeur = 2;
    const tableau = [1, 2, 2, 3, 2];
    //Act
    const result = compter(tableau, valeur);
    //Assert
    expect(result).toBe(3);
  });
  it("fonctionne lorsque la valeur est absente (retourne 0)", () => {
    //Arrange
    const valeur = 4;
    const tableau = [1, 2, 2, 3, 2];
    //Act
    const result = compter(tableau, valeur);
    //Assert
    expect(result).toBe(0);
  });
});

// [FACULTATIF] Nouveau cas : vérifier que le tableau original n'est pas modifié.
// On te montre inverser en entier.
describe("inverser", () => {
  it("inverse un tableau", () => {
    expect(inverser([1, 2, 3])).toEqual([3, 2, 1]);
  });
  it("ne modifie pas le tableau original", () => {
    const t = [1, 2, 3];
    inverser(t);
    expect(t).toEqual([1, 2, 3]);
  });
});

// [FACULTATIF] Même pattern qu'inverser — à toi.
// Cas à couvrir : doublons retirés, ordre d'apparition conservé.
describe("sansDoublons", () => {
  it("retire bien les doublons", () => {
    const tableau = [1, 2, 2, 3, 1];

    const result = sansDoublons(tableau);

    expect(result).toEqual([1, 2, 3]);
  });
  it("conserve l'ordre d'apparition", () => {
    const tableau = [1, 4, 2, 3, 1, 4];

    const result = sansDoublons(tableau);

    expect(result).toEqual([1, 4, 2, 3]);
  });
});
