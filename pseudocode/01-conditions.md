# Conditions

## Exercice 1 - estPositif(n)

```
VARIABLES :
n : REEL

DEBUT
    RETURN n >= 0
FIN
```

## Exercice 2 - estPair(n)

```
VARIABLES :
n : ENTIER

DEBUT
    RETURN n % 2 == 0
FIN
```

## Exercice 3 - max(a,b)

```
VARIABLES :
a : REEL
b : REEL

DEBUT
    SI a <= b ALORS
        RETURN b
    SINON
        RETURN a
    FIN_SI
FIN
```

## Exercice 4 - mention(note)

```
VARIABLES :
note : REEL

DEBUT
    SI note >= 16 ALORS
        RETURN "Très bien"
    SINON SI note >= 14
        RETURN "Bien"
    SINON SI note >= 12
        RETURN "Assez bien"
    SINON SI note >= 10
        RETURN "Passable"
    SINON
        RETURN "Insuffisant"
    FIN_SI
FIN
```

## Exercice 5 - fizzbuzz(n)

```
VARIABLES
n: ENTIER

DEBUT
    SI n % 15 == 0 ALORS
        RETURN "FizzBuzz"
    SINON SI n % 3 == 0 ALORS
        RETURN "Fizz"
    SINON SI n % 5 == 0 ALORS
        RETURN "Buzz"
    SINON
        RETURN "n"
    FIN_SI
FIN
```
