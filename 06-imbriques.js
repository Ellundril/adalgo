// Chapitre 06 — Tableaux d'objets imbriqués
// Notions : propriétés de type tableau, accès en profondeur
// Exos 1 à 3 obligatoires — Exos 4 et 5 facultatifs

/**
 * Reçoit un tableau de { nom, prenoms } où prenoms est un tableau de strings.
 * Retourne un tableau plat contenant tous les prénoms.
 * @param {{ nom: string, prenoms: string[] }[]} personnes
 * @returns {string[]}
 * @example tousLesPrenoms([
 *   { nom: "Lovelace", prenoms: ["Ada", "Augusta"] },
 *   { nom: "Hopper", prenoms: ["Grace"] }
 * ]) → ["Ada", "Augusta", "Grace"]
 */
export const tousLesPrenoms = (personnes) => {
  // à compléter
}

/**
 * Reçoit un tableau de { nom, notes } où notes est un tableau de nombres.
 * Retourne un tableau de { nom, total } avec le total des notes de chaque étudiante.
 * @param {{ nom: string, notes: number[] }[]} etudiantes
 * @returns {{ nom: string, total: number }[]}
 * @example totalPoints([
 *   { nom: "Ada", notes: [12, 15, 18] },
 *   { nom: "Grace", notes: [10, 14] }
 * ]) → [{ nom: "Ada", total: 45 }, { nom: "Grace", total: 24 }]
 */
export const totalPoints = (etudiantes) => {
  // à compléter
}

/**
 * Reçoit un tableau de { nom, competences } où competences est un tableau de strings.
 * Retourne les noms des étudiantes qui ont la compétence demandée.
 * @param {{ nom: string, competences: string[] }[]} etudiantes
 * @param {string} competence
 * @returns {string[]}
 * @example aMaitriseCompetence([
 *   { nom: "Ada", competences: ["HTML", "CSS", "JS"] },
 *   { nom: "Grace", competences: ["HTML", "Python"] }
 * ], "JS") → ["Ada"]
 */
export const aMaitriseCompetence = (etudiantes, competence) => {
  // à compléter
}

/**
 * [FACULTATIF]
 * [FACULTATIF]
 * Reçoit un tableau de { nom, taches } où taches est un tableau de { titre, terminee }.
 * Retourne les noms des projets qui ont au moins une tâche non terminée.
 * @param {{ nom: string, taches: { titre: string, terminee: boolean }[] }[]} projets
 * @returns {string[]}
 * @example projetsEnRetard([
 *   { nom: "Adapage", taches: [{ titre: "HTML", terminee: true }, { titre: "CSS", terminee: false }] },
 *   { nom: "AdaQuiz", taches: [{ titre: "JSON", terminee: true }] }
 * ]) → ["Adapage"]
 */
export const projetsEnRetard = (projets) => {
  // à compléter
}

/**
 * [FACULTATIF]
 * [FACULTATIF]
 * Reçoit un tableau de { nom, notes } où notes est un tableau de nombres.
 * Calcule la moyenne de chaque étudiante, puis retourne :
 * - meilleure : le nom de celle avec la moyenne la plus haute
 * - moinsBonne : le nom de celle avec la moyenne la plus basse
 * - moyenneGenerale : la moyenne des moyennes individuelles
 * @param {{ nom: string, notes: number[] }[]} etudiantes
 * @returns {{ meilleure: string, moinsBonne: string, moyenneGenerale: number }}
 * @example resumePromo([
 *   { nom: "Ada", notes: [18, 16, 20] },
 *   { nom: "Grace", notes: [12, 14, 10] },
 *   { nom: "Alan", notes: [15, 15, 15] }
 * ]) → { meilleure: "Ada", moinsBonne: "Grace", moyenneGenerale: 15 }
 */
export const resumePromo = (etudiantes) => {
  // à compléter
}
