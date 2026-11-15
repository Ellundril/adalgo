# Chapitre 5 - Objets

## Exercice 1 - fullName(personne)

VARIABLES
personne: OBJET {prenom: CHAINE; nom: CHAINE}

```
DEBUT fullName(personne)
    RETOURNER personne.prenom + " " + personne.nom
FIN
```

## Exercice 2 - filtrerParAge(personnes, ageMin)

VARIABLES
personnes: TABLEAU d'OBJETS {nom: CHAINE, age: ENTIER}
ageMin: ENTIER
ageOk: TABLEAU d'OBJETS {nom: CHAINE, age: ENTIER}

```
DEBUT
    ageOk<- []
    POUR i <- 0 à longueur de personnes -1
        SI personnes[i].age >= ageMin ALORS
            ageok <- ageok + personnes[i]
        FIN_SI
    FIN POUR
    RETOURNER ageOk
FIN
```

## Exercice 3 - trierParNom(personnes)

VARIABLES
personnes: TABLEAU d'OBEJTS{nom: CHAINE}
personneAComparer: OBJET{nom:Chaine}
temp: OBEJT{nom:CHAINE}
index: ENTIER

```

DEBUT
    POUR j<- 0 à longueur de personnes - 1
            personneAComparer<- personnes[j]
            index <- j
        POUR i <- j+1 à longueur de personnes -1
            SI personneAcomparer.nom > personnes[i].nom ALORS
                personneAComparer <- personnes[i]
                index <- i
            FIN_SI
        FIN POUR
        temp <- personne[j]
        personnes[j] <- personne à comparer
        personnes[index] <- temp
    FIN POUR
    RETOURNER personnes
FIN

```
