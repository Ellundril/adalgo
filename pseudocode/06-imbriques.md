# Chapitre 6 - Tableaux d'objets imbriqués

## Exercice 1 - tousLesPrenoms(personnes)

VARIABLES
personnes = TABLEAU d'OBJETS{nom: CHAINE, prenoms: TABLEAU}
listePrenoms: TABLEAU

```
DEBUT tousLesPrenoms(personnes)
    listePrenoms <- []
    POUR i <- 0 à longueur de personnes - 1
        POUR j <- 0 à longueur de personnes[i] - 1
            prenoms <- prenoms + personnes[i].prenom[j]
        FIN POUR
    FIN POUR
    RETOURNER prenoms
FIN
```

## Exercice 2 - totalPoints(etudiantes)

VARIABLES
etudiantes = TABLEAU d'OBJETS{nom: CHAINE, notes: TABLEAU}
resultat = TABLEAU d'OBJETS{nom: CHAINE, total: TABLEAU}
somme: ENTIER

```
DEBUT totalPoints(etudiantes)
    resultat <- 0
    POUR i <- 0 à longueur de etudiante - 1
        somme <- 0
        Pour j <- 0 à longueur de etudiante[i].notes - 1
            somme <- somme + etudiante[i].note[j]
        FIN POUR
        resultat <- resultat + {nom: etudiante[i].nom, total: somme}
    FIN POUR
    RETOURNER resultat
FIN
```
