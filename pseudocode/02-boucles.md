# Chapitre 2 - boucles

## Exercice 1 - compterJusqua(n)

VARIABLES
n: ENTIER

```
DEBUT compterJusqua(n)
    POUR i<- 1 à n
        AFFICHER i
    FIN POUR
FIN

```

## Exercice 2 - afficherPairs(n)

VARIABLES
n: ENTIER

```
DEBUT afficherPairs(n)
    POUR i<- 2 à n avec un pas de 2
        AFFICHER i
    FIN POUR
FIN

```

## Exercice 3 - somme(n)

VARIABLES
n: ENTIER
i: ENTIER
somme: ENTIER

```
DEBUT somme(n)
    somme <- 0
    POUR i <- 1 à n
        somme <- somme + i
    FIN POUR
    RETOURNER somme
FIN
```

## Exercice 4 - produit(n)

VARIABLES
n: ENTIER
i: ENTIER
produit: ENTIER

```
DEBUT produit(n)
    produit <- 1
    POUR i <- 1 à n
        produit <- produit * i
    FIN POUR
    RETOURNER produit
FIN
```

## Exercice 5 - compterPairs(n)

VARIABLES :
n: ENTIER
nbPairs: ENTIER

```
DEBUT compterPairs(n)
    nbPairs <- 0
    POUR i <- 1 à n
        SI i % 2 == 0 ALORS
            nbPairs <- nbPairs + 1
        FIN_SI
    FIN POUR
    RETOURNER nbPairs
FIN
```

## Exercice 6 - table(n)

VARIABLES
n: ENTIER
tab: TABLEAU d'ENTIERS

```
DEBUT table(n)
    tab <- []
    POUR i <- 1 à n
        tab[i] <- i * n
    FIN POUR
    RETOURNER tab
FIN
```

## Exercice 7 - multiplesJusqua(n, limite)

VARIABLES
n: ENTIER
limite: ENTIER
iteration: ENTIER
tab: TABLEAU d'ENTIER

```
DEBUT multiplesJusqua(n,limite)
    tab <- 0
    iteration <- 1
    TANT QUE iteration * n <= limite FAIRE
        tab[i]<- iteration * n
        iteration <- iteration +1
    RETOURNER tab
FIN
```

## Exercice 8 - puissance(base, exposant)

VARIABLES
base: ENTIER
exposant: ENTIER
result: ENTIER

```
DEBUT puissance(base, exposant)
    result <- 1;
    POUR i<-1 à exposant
      result <- base*result
    FIN POUR
FIN
```

## Exercice 9 - estDivisibleParTous(n, diviseurs)

VARIABLES
diviseurs: TABLEAU d'ENTIERS
n: ENTIER

```
DEBUT estDivisibleParTous(n, diviseurs)
    POUR i<-0 à longueur de diviseurs -1
        SI n % diviseurs[i] != 0 ALORS
            RETOURNER false
        FIN SI
    FIN POUR
    RETOURNER true
FIN
```

## Exercice 10 - fibonacci(n)

VARIABLES
n1: ENTIER
n2: ENTIER
temp: ENTIER
tabFibo = TABLEAU d'ENTIER

```
DEBUT fibonacci(n)
    n1 <- 0
    n2 <- 1
    temp <- 0
    tabFibo <- [n1]
    POUR i<-1 à n - 1
        temp <- n2
        n2 <- n2 + n1
        n1 <- temp
        tabFibo[i] <- n1
    FIN POUR
    RETOURNER tabFibo
FIN
```
