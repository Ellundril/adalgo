// Chapitre 02 — Boucles
// Notions : for, while, accumulation, comptage, construction de tableau
// Exos 1 à 6 obligatoires — Exos 7 à 9 facultatifs

/**
 * Affiche les nombres de 1 à n dans la console.
 * @param {number} n
 * @example compterJusqua(5) → affiche 1, 2, 3, 4, 5
 */
export const compterJusqua = (n) => {
  // à compléter
}

/**
 * Affiche uniquement les nombres pairs de 1 à n dans la console.
 * Même pattern que compterJusqua, avec une condition en plus.
 * @param {number} n
 * @example afficherPairs(8) → affiche 2, 4, 6, 8
 */
export const afficherPairs = (n) => {
  // à compléter
}

/**
 * Retourne la somme de tous les entiers de 1 à n.
 * Pattern : boucle + accumulateur numérique.
 * @param {number} n
 * @returns {number}
 * @example somme(5) → 15  (1+2+3+4+5)
 */
export const somme = (n) => {
  // à compléter
}

/**
 * Retourne le produit de tous les entiers de 1 à n (factorielle).
 * Même pattern que somme, avec une multiplication au lieu d'une addition.
 * @param {number} n
 * @returns {number}
 * @example produit(5) → 120  (1×2×3×4×5)
 * @example produit(0) → 1
 */
export const produit = (n) => {
  // à compléter
}

/**
 * Retourne le nombre d'entiers pairs entre 1 et n inclus.
 * Même pattern que somme, mais on compte au lieu d'additionner.
 * @param {number} n
 * @returns {number}
 * @example compterPairs(10) → 5
 * @example compterPairs(7)  → 3
 */
export const compterPairs = (n) => {
  // à compléter
}

/**
 * Retourne un tableau contenant les n premiers multiples de n.
 * Pattern : boucle + construction de tableau.
 * @param {number} n
 * @returns {number[]}
 * @example table(3) → [3, 6, 9]
 * @example table(0) → []
 */
export const table = (n) => {
  // à compléter
}

/**
 * Retourne un tableau contenant tous les multiples de n inférieurs ou égaux à limite.
 * Même pattern que table, avec une limite différente.
 * @param {number} n
 * @param {number} limite
 * @returns {number[]}
 * @example multiplesJusqua(3, 12) → [3, 6, 9, 12]
 * @example multiplesJusqua(7, 20) → [7, 14]
 */
export const multiplesJusqua = (n, limite) => {
  // à compléter
}

/**
 * [FACULTATIF]
 * Retourne base élevé à la puissance exposant. Sans Math.pow().
 * Même pattern que produit, sur un nombre fixe d'itérations.
 * @param {number} base
 * @param {number} exposant
 * @returns {number}
 * @example puissance(2, 10) → 1024
 * @example puissance(5, 0)  → 1
 */
export const puissance = (base, exposant) => {
  // à compléter
}

/**
 * [FACULTATIF]
 * [FACULTATIF]
 * Retourne true si n est divisible par tous les nombres du tableau diviseurs.
 * Pattern : boucle + condition de sortie anticipée.
 * @param {number} n
 * @param {number[]} diviseurs
 * @returns {boolean}
 * @example estDivisibleParTous(12, [2, 3, 4]) → true
 * @example estDivisibleParTous(10, [2, 3])    → false
 */
export const estDivisibleParTous = (n, diviseurs) => {
  // à compléter
}

/**
 * [FACULTATIF]
 * [FACULTATIF]
 * Retourne un tableau contenant les n premiers nombres de Fibonacci.
 * La suite commence par [0, 1] et chaque nombre est la somme des deux précédents.
 * Pattern : boucle + construction de tableau à partir des éléments précédents.
 * @param {number} n
 * @returns {number[]}
 * @example fibonacci(6) → [0, 1, 1, 2, 3, 5]
 * @example fibonacci(1) → [0]
 */
export const fibonacci = (n) => {
  // à compléter
}
