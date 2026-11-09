// Chapitre 07 — Tri et recherche
// Notions : O(n) vs O(n²), algorithmes classiques, fonctions natives
// Exos 1 à 3 obligatoires — Exos 4 à 6 facultatifs

/**
 * Retourne l'indice de la valeur dans le tableau, ou -1 si absente.
 * Sans .indexOf().
 */
export const rechercheLineaire = (tableau, valeur) => { /* à compléter */ }

/**
 * Recherche dichotomique sur un tableau TRIÉ.
 * Retourne l'indice ou -1.
 */
export const rechercheDict = (tableau, valeur) => { /* à compléter */ }

/**
 * Tri à bulles. Retourne un nouveau tableau trié.
 * Ne modifie pas le tableau original.
 */
export const triBulles = (tableau) => { /* à compléter */ }

/**
 * [FACULTATIF] Génère un tableau aléatoire de taille éléments,
 * mesure le temps de rechercheLineaire vs rechercheDict
 * avec console.time / console.timeEnd.
 * Pas de test Jest — c'est une exploration.
 */
/**
 * [FACULTATIF] Génère un tableau aléatoire de taille éléments,
 * mesure le temps de rechercheLineaire vs rechercheDict
 * avec console.time / console.timeEnd.
 * Pas de test Jest pour cet exercice — c'est une exploration.
 * @param {number} taille
 */
export const comparerTemps = (taille) => {
  // à compléter
}

/**
 * [FACULTATIF] Refaire les exo 1 et 3 avec les fonctions natives
 * .indexOf() et .sort(). Comparer les deux versions en commentaire.
 */
export const rechercheNative = (tableau, valeur) => { /* à compléter */ }
// [FACULTATIF]
/**
 * [FACULTATIF]
 */
export const triNatif         = (tableau)         => { /* à compléter */ }

/**
 * [FACULTATIF] Réimplémenter les méthodes natives sans les utiliser.
 */
export const myIncludes  = (tableau, valeur)  => { /* à compléter */ }
// [FACULTATIF]
/**
 * [FACULTATIF]
 */
export const myIndexOf   = (tableau, valeur)  => { /* à compléter */ }
// [FACULTATIF]
/**
 * [FACULTATIF]
 */
export const myStartsWith = (chaine, prefixe) => { /* à compléter */ }
