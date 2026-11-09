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
  // à compléter
}

/**
 * Reçoit un tableau de { nom, age } et retourne ceux dont l'âge est >= ageMin.
 * @param {{ nom: string, age: number }[]} personnes
 * @param {number} ageMin
 * @returns {{ nom: string, age: number }[]}
 * @example filtrerParAge([{ nom: "Ada", age: 28 }, { nom: "Alan", age: 17 }], 18)
 *          → [{ nom: "Ada", age: 28 }]
 */
export const filtrerParAge = (personnes, ageMin) => {
  // à compléter
}

/**
 * Reçoit un tableau de { nom, ... } et retourne le tableau trié par ordre alphabétique du nom.
 * @param {{ nom: string }[]} personnes
 * @returns {{ nom: string }[]}
 * @example trierParNom([{ nom: "Turing" }, { nom: "Lovelace" }, { nom: "Hopper" }])
 *          → [{ nom: "Hopper" }, { nom: "Lovelace" }, { nom: "Turing" }]
 */
export const trierParNom = (personnes) => {
  // à compléter
}

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
  // à compléter
}

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
  // à compléter
}

/**
 * [FACULTATIF]
 * Reçoit un tableau de { nom, prix } et retourne le prix total.
 * @param {{ nom: string, prix: number }[]} cadeaux
 * @returns {number}
 * @example prixTotal([{ nom: "livre", prix: 15 }, { nom: "jeu", prix: 40 }]) → 55
 */
export const prixTotal = (cadeaux) => {
  // à compléter
}

/**
 * [FACULTATIF]
 * Reçoit un tableau de { nom, prix } et retourne le nom du cadeau le plus cher.
 * @param {{ nom: string, prix: number }[]} cadeaux
 * @returns {string}
 * @example plusCher([{ nom: "livre", prix: 15 }, { nom: "jeu", prix: 40 }]) → "jeu"
 */
export const plusCher = (cadeaux) => {
  // à compléter
}
