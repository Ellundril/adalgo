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
  let max = tableau[0];
  tableau.forEach((nombre) => {
    if (nombre > max) {
      max = nombre;
    }
  });
  return max;
};

/**
 * Retourne la plus petite valeur d'un tableau de nombres. Sans Math.min().
 * @param {number[]} tableau
 * @returns {number}
 * @example minimum([3, 7, 2, 9, 1]) → 1
 */
export const minimum = (tableau) => {
  let min = tableau[0];
  tableau.forEach((nombre) => {
    if (nombre < min) {
      min = nombre;
    }
  });
  return min;
};

/**
 * Retourne la moyenne des valeurs. Retourne null si le tableau est vide.
 * @param {number[]} tableau
 * @returns {number|null}
 * @example moyenne([2, 4, 6]) → 4 / moyenne([]) → null
 */
export const moyenne = (tableau) => {
  let somme = 0;
  if (tableau.length !== 0) {
    tableau.forEach((nombre) => {
      somme += nombre;
    });
    return somme / tableau.length;
  } else {
    return null;
  }
};

/**
 * Retourne true si la valeur est présente dans le tableau, false sinon.
 * Sans utiliser .includes().
 * @param {any[]} tableau
 * @param {any} valeur
 * @returns {boolean}
 * @example contient([1, 2, 3], 2) → true / contient([1, 2, 3], 5) → false
 */
export const contient = (tableau, valeur) => {
  for (let i = 0; i < tableau.length; i++) {
    if (tableau[i] === valeur) {
      return true;
    }
  }
  return false;
};

/**
 * Retourne le nombre de fois que la valeur apparaît dans le tableau.
 * @param {any[]} tableau
 * @param {any} valeur
 * @returns {number}
 * @example compter([1, 2, 2, 3, 2], 2) → 3
 */
export const compter = (tableau, valeur) => {
  let compteur = 0;
  for (let i = 0; i < tableau.length; i++) {
    if (tableau[i] === valeur) {
      compteur++;
    }
  }
  return compteur;
};

/**
 * [FACULTATIF]
 * Retourne un nouveau tableau dans l'ordre inverse. Sans utiliser .reverse().
 * Ne modifie pas le tableau original.
 * @param {any[]} tableau
 * @returns {any[]}
 * @example inverser([1, 2, 3]) → [3, 2, 1]
 */
export const inverser = (tableau) => {
  let tabInv = [];
  for (let i = 0; i < tableau.length; i++) {
    tabInv.push(tableau[tableau.length - 1 - i]);
  }
  return tabInv;
};

/**
 * [FACULTATIF]
 * Retourne un nouveau tableau sans les doublons, dans l'ordre d'apparition.
 * @param {any[]} tableau
 * @returns {any[]}
 * @example sansDoublons([1, 2, 2, 3, 1]) → [1, 2, 3]
 */
export const sansDoublons = (tableau) => {
  let tabTri = [];
  let dejaVus = {};
  for (let i = 0; i < tableau.length; i++) {
    if (dejaVus[tableau[i]]) {
      continue;
    } else {
      dejaVus[tableau[i]] = true;
      tabTri.push(tableau[i]);
    }
  }
  return tabTri;
};
