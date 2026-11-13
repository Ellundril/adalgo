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
FIN
```

## Exercice 5 - tronquer(chaine, longueur)

VARIABLES
chaine: CHAINE DE CARACTERES
chaineTronquee: CHAINE DE CARACTERES

```
DEBUT tronquer(chaine, longueur)
    SI longueur de chaine > longeur ALORS
        chaineTronquee <- ""
        POUR i <- 0 à longueur-1
            chaineTronque <- chaineTronque + chaine[i]
        FIN POUR
        chaineTronque <- chaineTronque + "..."
        RETOURNER chaineTronquee
    SINON
        RETOURNER chaine
    FIN_SI
FIN
```

## Exercice 6 - toCamelCase(chaine)

VARIABLES
chaine: CHAINE DE CARACTERES en snake_case
chaineCamel: CHAINE DE CARACTERES en camelCase
tabMots: TABLEAU de chaines

```
DEBUT toCamelCase(chaine)
    tabMots <- chaine transformée en tableau séparateur "_"
    chaineCamel <- tabMots[0]
    POUR i <- 1 à longueur de tabMots
        chaineCamel <- chaineCamel + capitaliser(tabMots[i])
    FIN POUR
    RETOURNER chaineCamel
FIN
```

## Exercice 7 - toSnakeCase(str)

VARIABLES
str: CHAINE DE CARACTERES en camelCase
strSnake: CHAINE DE CARACTERES en snake_case

```
DEBUT toSnakeCase(chaine)
    strSnake <- ""
    POUR i<-0 à longueur de str
        SI str[i] == str[i] converti en majuscule ALORS
            strSnake <- strSnake + "_"
            strSnake <- strSnake + str[i] converti en minuscule
        SINON
            strSnake <- strSnake + str[i]
        FIN_SI
    FIN POUR
FIN
```

## Exercice 8 - validerMotDePasse(mdp)

VARIABLES
mdp: CHAINE
caractereSpeciaux: TABLEAU ["$", "#", "@"]
nbCaracteres: BOOLEEN
minuscule: BOOLEEN
majuscule: BOOLEEN
chiffre: BOOLEEN
isSpecial: BOOLEEN

```
DEBUT validerMotDePasse(mdp)
    nbCaracteres <- false
    minuscule <- false
    majuscule <- false
    chiffre <- false
    isSpecial <- false
    SI longueur de mdp <= 12 && longueur de mdp >= 6 ALORS
        nbCaracteres <- true
    POUR i <- 0 à longueur de mdp -1
        SI mdp[i] == mdp[i] converti en minuscule
            minuscule <- true
        FIN_Si
        SI mdp[i] == mdp[i] converti en majuscules
            majuscules <- true
        FIN_Si
        SI mdp[i] converti en entier est un entier && 0 <= mdp[i]<=9 ALORS
            chiffre <- true
        FIN_SI
        POUR j <- 0 longueur de caracteresSpeciaux - 1
            SI mdp[i] == caracteresSpeciaux[j] ALORS
                isSpecial <- true
            FIN_SI
        FIN POUR
    FIN POUR
    RETURN nbCaracteres && minuscule && majuscule && chiffre && isSpecial
FIN
```

## Exercice 9 - analyserTexte(texte)

VARIABLES
lettres: ENTIER
mots: ENTIER
phrase: ENTIER
texte: CHAINE

```
DEBUT analyserTexte(texte)
    lettres <- 0
    mots <- 0
    chaine <- 0
    POUR i <-0 à longueur de texte -1
        SI texte[i] == " " ALORS
            mots <- mot + 1
        SINON SI texte[i] == "." || texte[i] == "!" || texte[i] == "?" ALORS
            phrase <- phrase +1
        SINON
            lettres <- lettre + 1
        FIN_SI
    FIN POUR
    RETOURNER {lettres, mots, phrase}
FIN
```
