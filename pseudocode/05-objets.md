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

## Exercice 4 - grouperParVille(personnes)

VARIABLES
personnes: TABLEAU d'OBJETS{nom: CHAINE, ville: CHAINE}
villes: OBJET{nomVille: TABLEAU de CHAINES}
cle: CHAINE

```
DEBUT
    villes <- {}
    cle <- ""
    POUR i <- 0 à longueur de personnes - 1
        cle <- personnes[i].ville
        villes.cle <- villes.cle + personnes[i].nom
    FIN POUR
    RETOURNER villes
FIN

```

## Exercice 5 - statistiques(notes)

VARIABLES
notes: TABLEAU d'OBJETS{nom: CHAINE, note:ENTIER}
stats: OBJET{moyenne: REEL, max: ENTIER, min: ENTIER}
somme: ENTIER
moyenne: REEL
max: ENTIER
min: ENTIER

```
DEBUT
    SI longueur de notes != 0 ALORS
        somme <- 0
        max <- notes[0].note
        min <- notes[0].note
        POUR i <- 0 à longueur du tableau notes - 1
            somme <- somme + notes[i].note
            SI notes[i].note < min ALORS
                min <- notes[i].note
            FIN_SI
            SI notes[i].note > max ALORS
                max <- notes[i].note
            FIN_SI
        FIN POUR
        moyenne <- somme / longueur de notes
        RETOURNER {moyenne: moyenne, max: max, min: min}
    SINON
        RETOURNER "Pas de notes pas de stats !"
    FIN_SI
FIN
```

## Exercice 6 - prixTotal(cadeaux)

VARIABLES
cadeaux : TABLEAU d'OBJETS { nom: CHAINE, prix: REEL}
prixFinal: REEL

```
DEBUT prixTotal(cadeaux)
    prixFinal <- 0
    POUR i<- 0  à longueur de cadeaux -1
        prixFinal <- prixFinal + cadeaux[i].prix
    FIN POUR
    RETOURNER prixFinal
FIN
```

## Exercice 7 - plusCher(cadeaux)

VARIABLES
cadeaux : TABLEAU d'OBJETS { nom: CHAINE, prix: REEL}
cadeauPlusCher: OBJET { nom: CHAINE, prix: REEL}

```
DEBUT prixTotal(cadeaux)
    cadeauPlusCher <- cadeaux[0]
    POUR i<- 1  à longueur de cadeaux -1
        SI cadeaux[i].prix > cadeauPlusCher.prix ALORS
            cadeauPlusCher <- cadeaux[i]
        FIN_Si
    FIN POUR
    RETOURNER cadeauPlusCher.nom
FIN
```
