// Chapitre 05 — Objets
// Notions : accès aux propriétés, tableaux d'objets, filtrage, regroupement
// Exos 1 à 3 obligatoires — Exos 4 à 7 facultatifs

/**
 * Reçoit un objet { prenom, nom } et retourne le nom complet.
 * @param {{ prenom: string, nom: string }} personne
 * @returns {string}
 * @example fullName({ prenom: "Ada", nom: "Lovelace" }) → "Ada Lovelace"
 */
export const fullName = (personne) => {
  return `${personne.prenom} ${personne.nom}`;
};

/**
 * Reçoit un tableau de { nom, age } et retourne ceux dont l'âge est >= ageMin.
 * @param {{ nom: string, age: number }[]} personnes
 * @param {number} ageMin
 * @returns {{ nom: string, age: number }[]}
 * @example filtrerParAge([{ nom: "Ada", age: 28 }, { nom: "Alan", age: 17 }], 18)
 *          → [{ nom: "Ada", age: 28 }]
 */
export const filtrerParAge = (personnes, ageMin) => {
  return personnes.filter((personne) => personne.age >= ageMin);
};

/**
 * Reçoit un tableau de { nom, ... } et retourne le tableau trié par ordre alphabétique du nom.
 * @param {{ nom: string }[]} personnes
 * @returns {{ nom: string }[]}
 * @example trierParNom([{ nom: "Turing" }, { nom: "Lovelace" }, { nom: "Hopper" }])
 *          → [{ nom: "Hopper" }, { nom: "Lovelace" }, { nom: "Turing" }]
 */
export const trierParNom = (personnes) => {
  let personneAComparer = {};
  let index = 0;
  let temp;
  for (let j = 0; j < personnes.length; j++) {
    personneAComparer = personnes[j];
    index = j;
    for (let i = j + 1; i < personnes.length; i++) {
      if (personneAComparer.nom > personnes[i].nom) {
        personneAComparer = personnes[i];
        index = i;
      }
    }
    temp = personnes[j];
    personnes[j] = personneAComparer;
    personnes[index] = temp;
    console.log(personnes);
  }
  return personnes;
};

/**
 * [FACULTATIF]
 * [FACULTATIF]
 * Reçoit un tableau de { nom, ville } et retourne un objet dont les clés sont
 * les villes et les valeurs sont les tableaux de noms correspondants.
 * @param {{ nom: string, ville: string }[]} personnes
 * @returns {{ [ville: string]: string[] }}
 * @example grouperParVille([
 *   { nom: "Ada", ville: "Paris" },
 *   { nom: "Alan", ville: "Lyon" },
 *   { nom: "Grace", ville: "Paris" }
 * ]) → { Paris: ["Ada", "Grace"], Lyon: ["Alan"] }
 */
export const grouperParVille = (personnes) => {
  let villes = {};
  let cle = "";
  let listeCle = [];
  for (const personne of personnes) {
    cle = personne.ville;
    if (!listeCle.includes(cle)) {
      listeCle.push(cle);
      villes[cle] = [personne.nom];
    } else {
      villes[cle].push(personne.nom);
    }
  }
  return villes;
};

/**
 * [FACULTATIF]
 * [FACULTATIF]
 * Reçoit un tableau de { nom, note } et retourne { moyenne, max, min }.
 * @param {{ nom: string, note: number }[]} notes
 * @returns {{ moyenne: number, max: number, min: number }}
 * @example statistiques([{ nom: "Ada", note: 18 }, { nom: "Alan", note: 12 }])
 *          → { moyenne: 15, max: 18, min: 12 }
 */
export const statistiques = (notes) => {
  if (notes.length !== 0) {
    let somme = 0;
    let max = notes[0].note;
    let min = notes[0].note;
    for (const eleve of notes) {
      somme += eleve.note;
      if (eleve.note < min) {
        min = eleve.note;
      }
      if (eleve.note > max) {
        max = eleve.note;
      }
    }
    const moyenne = somme / notes.length;
    return { moyenne: moyenne, max: max, min: min };
  } else {
    return "Pas de notes pas de stats !";
  }
};

/**
 * [FACULTATIF]
 * Reçoit un tableau de { nom, prix } et retourne le prix total.
 * @param {{ nom: string, prix: number }[]} cadeaux
 * @returns {number}
 * @example prixTotal([{ nom: "livre", prix: 15 }, { nom: "jeu", prix: 40 }]) → 55
 */
export const prixTotal = (cadeaux) => {
  let prixFinal = 0;
  for (const cadeau of cadeaux) {
    prixFinal += cadeau.prix;
  }
  return prixFinal;
};

/**
 * [FACULTATIF]
 * Reçoit un tableau de { nom, prix } et retourne le nom du cadeau le plus cher.
 * @param {{ nom: string, prix: number }[]} cadeaux
 * @returns {string}
 * @example plusCher([{ nom: "livre", prix: 15 }, { nom: "jeu", prix: 40 }]) → "jeu"
 */
export const plusCher = (cadeaux) => {
  let cadeauPlusCher = cadeaux[0];
  for (let i = 1; i < cadeaux.length; i++) {
    if (cadeaux[i].prix > cadeauPlusCher.prix) {
      cadeauPlusCher = cadeaux[i];
    }
  }
  return cadeauPlusCher.nom;
};
