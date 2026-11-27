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
  it("retourne un tableau d'objet avec le nom de chaque étudiante et son total de points", () => {
    const etudiantes = [
      { nom: "Ada", notes: [12, 15, 18] },
      { nom: "Grace", notes: [10, 14] },
    ];
    const result = totalPoints(etudiantes);
    expect(result).toEqual([
      { nom: "Ada", total: 45 },
      { nom: "Grace", total: 24 },
    ]);
  });
  it("retourne un tableau vide si pas d'étudiante", () => {
    const etudiantes = [];
    const result = totalPoints(etudiantes);
    expect(result).toEqual([]);
  });
  it("fonctionne si les étudiantes ont une seule note", () => {
    const etudiantes = [
      { nom: "Ada", notes: [12] },
      { nom: "Grace", notes: [10] },
    ];
    const result = totalPoints(etudiantes);
    expect(result).toEqual([
      { nom: "Ada", total: 12 },
      { nom: "Grace", total: 10 },
    ]);
  });
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
