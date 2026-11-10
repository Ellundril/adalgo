# Chapitre 3 - Tableaux

## Exercice 1 - maximum(tableau)

VARIABLES
max: ENTIER
tab: TABLEAU d'ENTIERS

```
DEBUT
    max <- tab[0]
    POUR i<- 0 à longueur de tab - 1
        SI tab[i] > max ALORS
            max <- tab[i]
        FIN_SI
    FIN POUR
    RETOURNER max
FIN
```

## Exercice 2 - minimum(tableau)

VARIABLES
min: ENTIER
tab: TABLEAU d'ENTIERS

```
DEBUT
    min <- tab[0]
    POUR i<- 0 à longueur de tab - 1
        SI tab[i] < min ALORS
            min <- tab[i]
        FIN_SI
    FIN POUR
    RETOURNER min
FIN
```

## Exercice 3 - Moyenne(tableau)

VARIABLES
tab: TABLEAU d'ENTIERS
somme: ENTIER

```
DEBUT
    somme <- 0
    SI tab != [] ALORS
        POUR i<- 0 à longueur de tab - 1
            somme <- somme + tab[i]
        FIN POUR
        RETOURNER somme / longueur de tab
    SINON
        RETOURNER null
    FIN_SI
FIN
```

## Exercice 4 - contient(tableau, valeur)

VARIABLES
valeur: ENTIER
tab: TABLEAU d'ENTIERS

```
DEBUT
    POUR i<- 0 à longueur de tab - 1
        SI tab[i] == valeur ALORS
            RETOURNER true
        FIN_SI
    FIN POUR
    RETOURNER false
FIN
```

## Exercice 5 - compter(tableau, valeur)

VARIABLES
valeur: ENTIER
tab: TABLEAU d'ENTIERS
compteur: ENTIER

```
DEBUT
    compteur <- 0
    POUR i<- 0 à longueur de tab - 1
        SI tab[i] == valeur ALORS
            compteur <- compteur + 1
        FIN_SI
    FIN POUR
    RETOURNER compteur
FIN
```

## Exercice 6 - inverser(tableau)

VARIABLES
tab: TABLEAU d'ENTIERS
tabInv: TABLEAU d'ENTIERS

```
DEBUT
    tabInv <- []
    POUR i<- 0 à longueur de tab - 1
       tabInv[i] <- tab[longueur de tab - 1 - i]
    FIN POUR
    RETOURNER tabInv
FIN
```

## Exercice 7 - sansDoublons(tableau) à finir

VARIABLES
tab: TABLEAU d'ENTIERS
tabTri = TABLEAU d'ENTIERS
dejaVus = OBJET

```
DEBUT
    tabTri <- []
    dejaVus <-{}
    POUR i<- 1 à longueur de tab - 1
        SI dejaVus[tab[i]] == true ALORS
                CONTINUER
        SINON
            dejaVus[tab[i]] <- true
            tabTri <- tab[i]
        FIN SI
    FIN POUR
    RETOURNER tabTri
FIN
```
