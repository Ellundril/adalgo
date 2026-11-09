// Chapitre 04 — Chaînes de caractères
// Notions : .length, accès par indice, .split(), .join()
// Exos 1 à 3 obligatoires — Exos 4 à 9 facultatifs

/**
 * Retourne la chaîne dans l'ordre inverse.
 * @param {string} chaine
 * @returns {string}
 * @example inverserChaine("bonjour") → "ruojnob"
 */
export const inverserChaine = (chaine) => {
  // à compléter
}

/**
 * Retourne true si la chaîne se lit de la même façon dans les deux sens.
 * @param {string} chaine
 * @returns {boolean}
 * @example estPalindrome("kayak") → true / estPalindrome("bonjour") → false
 */
export const estPalindrome = (chaine) => {
  // à compléter
}

/**
 * Retourne le nombre de voyelles dans la chaîne (a, e, i, o, u, y).
 * @param {string} chaine
 * @returns {number}
 * @example compterVoyelles("bonjour") → 3
 */
export const compterVoyelles = (chaine) => {
  // à compléter
}

/**
 * [FACULTATIF]
 * Met la première lettre en majuscule et le reste en minuscule.
 * @param {string} chaine
 * @returns {string}
 * @example capitaliser("boNJOUR") → "Bonjour"
 */
export const capitaliser = (chaine) => {
  // à compléter
}

/**
 * [FACULTATIF]
 * [FACULTATIF]
 * Si la chaîne dépasse longueur caractères, retourne les longueur premiers
 * caractères suivis de "...". Sinon retourne la chaîne telle quelle.
 * @param {string} chaine
 * @param {number} longueur
 * @returns {string}
 * @example tronquer("bonjour tout le monde", 7) → "bonjour..."
 * @example tronquer("coucou", 10) → "coucou"
 */
export const tronquer = (chaine, longueur) => {
  // à compléter
}

/**
 * [FACULTATIF]
 * Convertit une chaîne en snake_case vers le camelCase.
 * @param {string} str
 * @returns {string}
 * @example toCamelCase("mon_nom_de_variable") → "monNomDeVariable"
 */
export const toCamelCase = (str) => {
  // à compléter
}

/**
 * [FACULTATIF]
 * Convertit une chaîne en camelCase vers le snake_case.
 * @param {string} str
 * @returns {string}
 * @example toSnakeCase("monNomDeVariable") → "mon_nom_de_variable"
 */
export const toSnakeCase = (str) => {
  // à compléter
}

/**
 * [FACULTATIF]
 * [FACULTATIF]
 * Retourne true si le mot de passe respecte toutes ces règles :
 * - entre 6 et 12 caractères
 * - au moins une lettre minuscule
 * - au moins une lettre majuscule
 * - au moins un chiffre
 * - au moins un caractère spécial parmi : $, #, @
 * @param {string} mdp
 * @returns {boolean}
 * @example validerMotDePasse("el3H1@f") → true
 * @example validerMotDePasse("l#H1@") → false  (trop court)
 */
export const validerMotDePasse = (mdp) => {
  // à compléter
}

/**
 * [FACULTATIF]
 * [FACULTATIF]
 * Analyse un texte et retourne un objet { lettres, mots, phrases }.
 * - lettres : nombre de lettres (sans espaces ni ponctuation)
 * - mots : nombre de mots (séquences de lettres séparées par des espaces ou ponctuation)
 * - phrases : nombre de phrases (terminées par . ! ou ?)
 * Contrainte : pas de .split(), itérer caractère par caractère.
 * @param {string} texte
 * @returns {{ lettres: number, mots: number, phrases: number }}
 * @example analyserTexte("Bonjour monde.") → { lettres: 12, mots: 2, phrases: 1 }
 */
export const analyserTexte = (texte) => {
  // à compléter
}
