import {
  tousLesPrenoms,
  totalPoints,
  aMaitriseCompetence,
  projetsEnRetard,
  resumePromo,
} from "./06-imbriques.js";

// À ce stade tu sais écrire des tests complets.
// Écris tes propres describe et it pour chaque fonction.
// Pense aux cas limites : tableau vide, aucun résultat, un seul élément.

describe("tousLesPrenoms", () => {
  it("retourne tous les prenoms pour un tableau non vide", () => {
    //arrange
    const personnes = [
      { nom: "Lovelace", prenoms: ["Ada", "Augusta"] },
      { nom: "Hopper", prenoms: ["Grace"] },
    ];
    //act
    const result = tousLesPrenoms(personnes);
    //assert
    expect(result).toEqual(["Ada", "Augusta", "Grace"]);
  });
  it("retourne un tableau vide si pas de prenoms", () => {
    const personnes = [
      { nom: "Lovelace", prenoms: [] },
      { nom: "Hopper", prenoms: [] },
    ];
    //act
    const result = tousLesPrenoms(personnes);
    //assert
    expect(result).toEqual([]);
  });
});

describe("totalPoints", () => {
  it.todo("à compléter");
});

describe("aMaitriseCompetence", () => {
  it.todo("à compléter");
});

describe("projetsEnRetard", () => {
  it.todo("à compléter");
});

describe("resumePromo", () => {
  it.todo("à compléter");
});
