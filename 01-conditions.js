// Chapitre 01 — Conditions
// Notions : if/else, opérateurs de comparaison, opérateurs logiques
// Exos 1 à 4 obligatoires — Exo 5 facultatif

/**
 * Retourne true si n est positif ou nul, false sinon.
 * @param {number} n
 * @returns {boolean}
 * @example estPositif(5) → true / estPositif(-3) → false
 */
export const estPositif = (n) => {
  return n >= 0;
};

/**
 * Retourne true si n est pair.
 * @param {number} n
 * @returns {boolean}
 * @example estPair(4) → true / estPair(7) → false
 */
export const estPair = (n) => {
  return n % 2 === 0;
};

/**
 * Retourne le plus grand des deux nombres. Sans Math.max().
 * @param {number} a
 * @param {number} b
 * @returns {number}
 * @example max(3, 7) → 7
 */
export const max = (a, b) => {
  if (a <= b) {
    return b;
  } else {
    return a;
  }
};

/**
 * Retourne la mention correspondant à la note.
 * >= 16 → "Très bien" / >= 14 → "Bien" / >= 12 → "Assez bien"
 * >= 10 → "Passable" / < 10 → "Insuffisant"
 * @param {number} note
 * @returns {string}
 * @example mention(17) → "Très bien"
 */
export const mention = (note) => {
  if (note >= 16) {
    return "Très bien";
  } else if (note >= 14) {
    return "Bien";
  } else if (note >= 12) {
    return "Assez bien";
  } else if (note >= 10) {
    return "Passable";
  } else {
    return "Insuffisant";
  }
};

/**
 * [FACULTATIF]
 * Retourne "Fizz" si divisible par 3, "Buzz" par 5,
 * "FizzBuzz" si les deux, sinon le nombre en string.
 * @param {number} n
 * @returns {string}
 * @example fizzbuzz(15) → "FizzBuzz"
 */
export const fizzbuzz = (n) => {
  if (n % 15 === 0) {
    return "FizzBuzz";
  } else if (n % 3 === 0) {
    return "Fizz";
  } else if (n % 5 === 0) {
    return "Buzz";
  } else {
    return `${7}`;
  }
};
