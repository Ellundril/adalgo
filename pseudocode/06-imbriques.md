# Chapitre 6 - Tableaux d'objets imbriqués

## Exercice 1 - tousLesPrenoms(personnes)

VARIABLES
personnes = TABLEAU d'OBJETS{nom: CHAINE, prenoms: TABLEAU}
prenoms: TABLEAU

```
DEBUT tousLesPrenoms(personnes)
    prenoms <- []
    POUR i <- 0 à longueur de personnes - 1
        POUR j <- 0 à longueur de personnes[i] - 1
            prenoms <- prenoms + personnes[i].prenom[j]
        FIN POUR
    FIN POUR
    RETOURNER prenoms
FIN
```
