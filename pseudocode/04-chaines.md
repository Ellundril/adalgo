# Chapitre 4 - Chaînes

## Exercice 1 - inverserChaine(chaine)

VARIABLES
chaine: CHAINE DE CARACTERES
chaineInv: CHAINE DE CARACTERES

```
DEBUT inverserChaine(chaine)
    chaineInv <- ""
    POUR i<-0 à longueur de chaine - 1
        chaineInv <- chaine[longueur du chaine -1 -i]
    FIN POUR
    RETOURNER chaineInv
FIN

```

## Exercice 2 - estPalindrome(chaine)

VARIABLES
chaine: CHAINE DE CARACTERES
chaineInv: CHAINE DE CARACTERES

```
DEBUT estPalindrome(chaine)
    chaineInv <- ""
    POUR i<-0 à longueur de chaine - 1
        chaineInv <- chaine[longueur du chaine -1 -i]
    FIN POUR
    RETOURNER chaineInv == chaine
FIN

```

## Exercice 3 - compterVoyelle(chaine)

VARIABLES
chaine: CHAINE DE CARACTERES
nbVoyelles: ENTIER
voyelles: TABLEAU

```
DEBUT compterVoyelle(chaine)
    voyelles <- [a, e, i, o, u, y]
    nbVoyelles <- 0
    POUR i<-0 à longueur de chaine - 1
        POUR j <- 0 à 5
            SI chaine[i] == voyelle[j] ALORS
                nbVoyelles <- nbVoyelles + 1
                CONTINUER
            FIN_SI
    FIN POUR
    RETOURNER nbVoyelles
FIN

```

## Exercice 4 - capitaliser(chaine)

VARIABLES
chaine: CHAINE DE CARACTERES
chaineCap: CHAINE DE CARACTERES

```
DEBUT capitaliser(chaine)
    chaineCap <- Convertir en capitale (chaine[0])
        POUR i<-1 à longueur de chaine - 1
            chaineCap <- chaineCap + convertir en minuscule(chaine[i])
        FIN POUR
    RETOURNER chaineCap
```
