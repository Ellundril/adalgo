import {
  inverserChaine,
  estPalindrome,
  compterVoyelles,
  capitaliser,
  tronquer,
  toCamelCase,
  toSnakeCase,
  validerMotDePasse,
  analyserTexte,
} from "./04-chaines.js";

// Tu maîtrises maintenant .toBe(), .toEqual() et le cas null.
// À partir d'ici, on ne te montre plus les tests — tu les écris.
// Les cas à couvrir sont indiqués dans chaque describe.

// Cas à couvrir : chaîne normale, chaîne vide.
describe("inverserChaine", () => {
  it("inverse une chaine de caractères", () => {
    const chaine = "bonjour";

    const result = inverserChaine(chaine);

    expect(result).toBe("ruojnob");
  });
  it("inverse une chaine de caractères", () => {
    const chaine = "";

    const result = inverserChaine(chaine);

    expect(result).toBe("");
  });
});

// Cas à couvrir : palindrome, non-palindrome, un seul caractère.
describe("estPalindrome", () => {
  it("retourne true si la chaine est un palindrome", () => {
    const chaine = "kayak";
    const result = estPalindrome(chaine);
    expect(result).toBe(true);
  });
  it("retourne false si la chaine n'est pas un palindrome", () => {
    const chaine = "bonjour";
    const result = estPalindrome(chaine);
    expect(result).toBe(false);
  });
  it("retourne true si la chaine comporte un seul caractère", () => {
    const chaine = "k";
    const result = estPalindrome(chaine);
    expect(result).toBe(true);
  });
});

// Cas à couvrir : chaîne avec voyelles, chaîne sans voyelle.
describe("compterVoyelles", () => {
  it("fonctionne avec une chaine contenant des voyelles", () => {
    const chaine = "bonjour";
    const result = compterVoyelles(chaine);
    expect(result).toBe(3);
  });
  it("fonctionne avec une chaine contenant des voyelles", () => {
    const chaine = "pfft";
    const result = compterVoyelles(chaine);
    expect(result).toBe(0);
  });
});

// [FACULTATIF] Cas à couvrir : chaîne mixte (boNJOUR → Bonjour), chaîne déjà correcte.
describe("capitaliser", () => {
  it("convertit correctement une chaîne mixte", () => {
    const chaine = "boNJOUR";
    const result = capitaliser(chaine);
    expect(result).toBe("Bonjour");
  });
  it("Laisse telle quelle une chaîne déjà correcte", () => {
    const chaine = "Bonjour";
    const result = capitaliser(chaine);
    expect(result).toBe("Bonjour");
  });
});

// [FACULTATIF] Cas à couvrir : chaîne trop longue, chaîne assez courte.
describe("tronquer", () => {
  it("tronque une chaine courte et ajoute des points de suspension", () => {
    const chaine = "bonjour tout le monde";
    const longueur = 7;
    const result = tronquer(chaine, longueur);
    expect(result).toBe("bonjour...");
  });
  it("tronque une chaine courte et ajoute des points de suspension", () => {
    const chaine = "coucou";
    const longueur = 10;
    const result = tronquer(chaine, longueur);
    expect(result).toBe("coucou");
  });
});

// [FACULTATIF] Cas à couvrir : plusieurs mots, deux mots.
describe("toCamelCase", () => {
  it("convertit en camelCase une chaine de plusieurs mots", () => {
    const chaine = "mon_nom_de_variable";
    const result = toCamelCase(chaine);
    expect(result).toBe("monNomDeVariable");
  });
  it("convertit en camelCase une chaine de plusieurs mots", () => {
    const chaine = "mon_nom";
    const result = toCamelCase(chaine);
    expect(result).toBe("monNom");
  });
});

// [FACULTATIF] Même pattern inverse.
describe("toSnakeCase", () => {
  it.todo("à compléter");
});

// [FACULTATIF] Cas à couvrir : valide, trop court, pas de chiffre, pas de majuscule.
describe("validerMotDePasse", () => {
  it.todo("à compléter");
});

// [FACULTATIF] Cas à couvrir : texte simple, texte vide.
// Rappel : le résultat est un objet { lettres, mots, phrases } — utilise .toEqual().
describe("analyserTexte", () => {
  it.todo("à compléter");
});
