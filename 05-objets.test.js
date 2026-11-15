import {
  fullName,
  filtrerParAge,
  trierParNom,
  grouperParVille,
  statistiques,
  prixTotal,
  plusCher,
} from "./05-objets.js";

// Les fonctions retournent des objets et des tableaux d'objets.
// Utilise .toBe() pour une string, .toEqual() pour un objet ou un tableau.
// Plus d'indications sur les cas — choisis toi-même ce qui est pertinent à tester.

describe("fullName", () => {
  it("retourne le prénom et nom", () => {
    const personne = { prenom: "Ada", nom: "Lovelace" };
    const result = fullName(personne);
    expect(result).toBe("Ada Lovelace");
  });
});

describe("filtrerParAge", () => {
  it("retourne un tableau vide si personne n'a l'âge minimum", () => {
    const personnes = [
      { nom: "Ada", age: 18 },
      { nom: "Alan", age: 17 },
    ];
    const ageMin = 20;
    const result = filtrerParAge(personnes, ageMin);
    expect(result).toEqual([]);
  });
  it("retourne un tableau avec les personnes ayant l'âge minimum", () => {
    const personnes = [
      { nom: "Ada", age: 28 },
      { nom: "Alan", age: 17 },
      { nom: "John", age: 20 },
    ];
    const ageMin = 20;
    const result = filtrerParAge(personnes, ageMin);
    expect(result).toEqual([
      { nom: "Ada", age: 28 },
      { nom: "John", age: 20 },
    ]);
  });
});

describe("trierParNom", () => {
  it("retourne le tableau trié par ordre alphabétique", () => {
    const personnes = [
      { nom: "Turing" },
      { nom: "Lovelace" },
      { nom: "Hopper" },
      { nom: "Jones" },
      { nom: "Adams" },
    ];
    const result = trierParNom(personnes);
    expect(result).toEqual([
      { nom: "Adams" },
      { nom: "Hopper" },
      { nom: "Jones" },
      { nom: "Lovelace" },
      { nom: "Turing" },
    ]);
  });
});

// [FACULTATIF]
describe("grouperParVille", () => {
  it.todo("à compléter");
});

// [FACULTATIF]
describe("statistiques", () => {
  it.todo("à compléter");
});

// [FACULTATIF]
describe("prixTotal", () => {
  it.todo("à compléter");
});

// [FACULTATIF]
describe("plusCher", () => {
  it.todo("à compléter");
});
