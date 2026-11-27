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
    POUR i <- 0 à longueur de etudiantes - 1
        somme <- 0
        Pour j <- 0 à longueur de etudiantes[i].notes - 1
            somme <- somme + etudiantes[i].note[j]
        FIN POUR
        resultat <- resultat + {nom: etudiantes[i].nom, total: somme}
    FIN POUR
    RETOURNER resultat
FIN
```

## Exercice 3 - aMaitriseCompetence(etudiantes, competence)

VARIABLES
etudiantes = TABLEAU d'OBJETS{nom: CHAINE, competences: TABLEAU de chaines}
competence = CHAINE
etudiantesCompetentes: TABLEAU de CHAINES

```
DEBUT aMaitriseCompetence(etudiantes, competence)
    etudiantesCompetentes <- []
    SI longueur de etudiantes == 0 ALORS
        RETOURNER etudiantes
    POUR i <- 0 à longueur de etudiantes - 1
        SI etudiantes[i].competences inclut competence ALORS
            etudiantesCompetentes <- etudiantesCompetentes + etudiantes[i].nom
        FIN_SI
    FIN POUR
    SI longueur de etudiantesCompetentes != 0 ALORS
        RETOURNER etudiantesCompetentes
    SINON
        RETOURNER "Aucune étudiante ne possède la compétence " + competence
FIN
```

## Exercice 4 - projetsEnRetard(projets)

VARIABLES
projets = TABLEAU d'OBJETS{nom: CHAINE, taches: TABLEAU d'OBJETS{titre: CHAINE, terminee: BOOLEEN}}
enRetard: TABLEAU de CHAINE

```
DEBUT projetsEnRetard(projets)
    SI longueur de projets == 0 ALORS
        RETOURNER projets
    FIN_SI
    enRetard <- []
    POUR i<-0 à longeur de projets - 1
        POUR j<- 0 à longueur de projets[i].taches
            SI projets[i].taches[j].terminee == false ALORS
                enRetard <- enRetard + projets[i].name
                STOP
            FIN_SI
        FIN POUR
    FIN POUR
    SI longueur de enRetard == 0 ALORS
        RETOURNER "Pas de projets en retard"
    SINON
        RETOURNER enRetard
    FIN_SI
FIN
```

## Exercice 5 - resumePromo(etudiantes)

VARIABLES
etudiantes = TABLEAU d'OBJETS{nom: CHAINE, notes: TABLEAU d'ENTIERS}
somme<- REEL
moyenneMax: OBJET{ nom: CHAINE, note:REEL}
moyenneMin: OBJET{ nom: CHAINE, note:REEL}
moyenneEtudiante: REEL
sommeEtudiante: REEL

```
DEBUT resumePromo(etudiantes)
    SI longueur de etudiantes == 0 ALORS
        RETOURNER "Pas d'étudiantes"
    FIN_SI
    moyenneMin <- {note: 20}
    moyenneMax <- {note: 0}
    moyenneEtudiante <- 0

    somme <- 0

    POUR i<- 0 à longueur de etudiantes -1
        sommeEtudiante <- 0

        POUR j<- 0 à longueur de etudiantes[i].notes - 1
            sommeEtudiante <- sommeEtudiante + etudiantes[i].notes[j]
        FIN POUR

        moyenneEtudiante <- sommeEtudiante / longueur de etudiantes[i].notes
        somme <- somme + moyenneEtudiante

        SI moyenneEtudiante < moyenneMin.note ALORS
            moyenneMin.nom = etudiantes[i].nom
            moyenneMin.note = moyenneEtudiante
        FIN_SI

        SI moyenneEtudiante > moyenneMax.note ALORS
            moyenneMax.nom = etudiantes[i].nom
            moyenneMax.note = moyenneEtudiante
        FIN_SI

    FIN POUR

    RETOURNER {meilleure = moyenneMax.nom, moinsBonne = moyenneMin.nom, moyenneGenerale = somme / longueur de etudiantes }
FIN
```
