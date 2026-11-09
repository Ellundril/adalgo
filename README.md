# Adalgo

Projet d'entraînement algorithmique — Ada Tech School · Bloc 1 · S7

## Installation

```bash
npm install
```

## Lancer les tests

Par chapitre (recommandé) :

```bash
npm run ch01
npm run ch02
npm run ch03
npm run ch04
npm run ch05
npm run ch06
npm run ch07
```

Tous les chapitres d'un coup :

```bash
npm test
```

Mode watch (relance automatique à chaque sauvegarde) :

```bash
npm run test:watch
```

## Workflow

Pour chaque exercice :

1. Écrire le pseudo-code dans `pseudocode/XX-chapitre.md`
2. Coder la fonction dans `XX-chapitre.js`
3. Lancer `npm run chXX` — faire passer les tests au vert
4. Commit

## Chapitres

| Fichier               | Notions                                           | Obligatoires |
| --------------------- | ------------------------------------------------- | ------------ |
| `01-conditions.js`    | if/else, comparaison, logique                     | Exos 1 à 4   |
| `02-boucles.js`       | for, while, accumulation, construction de tableau | Exos 1 à 7   |
| `03-tableaux.js`      | indice, .length, filtrage                         | Exos 1 à 5   |
| `04-chaines.js`       | .length, .split(), .join()                        | Exos 1 à 3   |
| `05-objets.js`        | propriétés, tableaux d'objets                     | Exos 1 à 3   |
| `06-imbriques.js`     | objets imbriqués, accès en profondeur             | Exos 1 à 3   |
| `07-tri-recherche.js` | O(n), O(n²), algorithmes classiques               | Exos 1 à 3   |

À la fin des exercices obligatoires d'un chapitre, passe au suivant — les facultatifs sont là si tu es en avance.

## Rendu

GitHub Classroom — samedi de la semaine 7 à minuit.
