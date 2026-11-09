// Chapitre 03 — Tableaux
// Notions : accès par indice, .length, accumulation, filtrage
// Exos 1 à 5 obligatoires — Exos 6 et 7 facultatifs

/**
 * Retourne la plus grande valeur d'un tableau de nombres. Sans Math.max().
 * @param {number[]} tableau
 * @returns {number}
 * @example maximum([3, 7, 2, 9, 1]) → 9
 */
export const maximum = (tableau) => {
  // à compléter
}

/**
 * Retourne la plus petite valeur d'un tableau de nombres. Sans Math.min().
 * @param {number[]} tableau
 * @returns {number}
 * @example minimum([3, 7, 2, 9, 1]) → 1
 */
export const minimum = (tableau) => {
  // à compléter
}

/**
 * Retourne la moyenne des valeurs. Retourne null si le tableau est vide.
 * @param {number[]} tableau
 * @returns {number|null}
 * @example moyenne([2, 4, 6]) → 4 / moyenne([]) → null
 */
export const moyenne = (tableau) => {
  // à compléter
}

/**
 * Retourne true si la valeur est présente dans le tableau, false sinon.
 * Sans utiliser .includes().
 * @param {any[]} tableau
 * @param {any} valeur
 * @returns {boolean}
 * @example contient([1, 2, 3], 2) → true / contient([1, 2, 3], 5) → false
 */
export const contient = (tableau, valeur) => {
  // à compléter
}

/**
 * Retourne le nombre de fois que la valeur apparaît dans le tableau.
 * @param {any[]} tableau
 * @param {any} valeur
 * @returns {number}
 * @example compter([1, 2, 2, 3, 2], 2) → 3
 */
export const compter = (tableau, valeur) => {
  // à compléter
}

/**
 * [FACULTATIF]
 * Retourne un nouveau tableau dans l'ordre inverse. Sans utiliser .reverse().
 * Ne modifie pas le tableau original.
 * @param {any[]} tableau
 * @returns {any[]}
 * @example inverser([1, 2, 3]) → [3, 2, 1]
 */
export const inverser = (tableau) => {
  // à compléter
}

/**
 * [FACULTATIF]
 * Retourne un nouveau tableau sans les doublons, dans l'ordre d'apparition.
 * @param {any[]} tableau
 * @returns {any[]}
 * @example sansDoublons([1, 2, 2, 3, 1]) → [1, 2, 3]
 */
export const sansDoublons = (tableau) => {
  // à compléter
}
