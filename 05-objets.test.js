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
  it("fonctionne avec une seule personne", () => {
    const personnes = [{ nom: "Turing" }];
    const result = trierParNom(personnes);
    expect(result).toEqual([{ nom: "Turing" }]);
  });
  it("retourne un tableau vide si personnes est vide au départ", () => {
    const personnes = [];
    const result = trierParNom(personnes);
    expect(result).toEqual([]);
  });
});

// [FACULTATIF]
describe("grouperParVille", () => {
  it("regroupe bien dans la même ville si plusieurs personnes viennent de la même ville", () => {
    const personnes = [
      { nom: "Ada", ville: "Paris" },
      { nom: "Alan", ville: "Lyon" },
      { nom: "Grace", ville: "Paris" },
    ];
    const result = grouperParVille(personnes);
    expect(result).toEqual({ Paris: ["Ada", "Grace"], Lyon: ["Alan"] });
  });
});

// [FACULTATIF]
describe("statistiques", () => {
  it("retourne la moyenne des notes, le min et le max", () => {
    const notes = [
      { nom: "Ada", note: 18 },
      { nom: "Alan", note: 12 },
    ];
    const result = statistiques(notes);
    expect(result).toEqual({ moyenne: 15, max: 18, min: 12 });
  });
  it("retourne pas de notes si le tableau est vide", () => {
    const notes = [];
    const result = statistiques(notes);
    expect(result).toBe("Pas de notes pas de stats !");
  });
});

// [FACULTATIF]
describe("prixTotal", () => {
  it("retourne le prix total des cadeaux", () => {
    const cadeaux = [
      { nom: "livre", prix: 15 },
      { nom: "jeu", prix: 40 },
    ];
    const result = prixTotal(cadeaux);
    expect(result).toBe(55);
  });
});

// [FACULTATIF]
describe("plusCher", () => {
  it("retourne le nom du cadeau le plus cher", () => {
    const cadeaux = [
      { nom: "livre", prix: 15 },
      { nom: "jeu", prix: 40 },
    ];
    const result = plusCher(cadeaux);
    expect(result).toBe("jeu");
  });
});
