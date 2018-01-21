# Bell Média Exercise

## Test Front-End

### Description et Fonctionnement

Ce project utilise du javascript, HTML5, et CSS pour afficher l'alignement d'une équipe
LNH provenu d'un object JSON. Le framework CSS W3 est utilisé.

Pour visionner:

1. Naviguer au dossier 'FrontEndTest'

2. Simplement ouvrir le ficher 'rds.html' dans un navigateur web


## Test REST/JSON et UI

#### Note

Ces deux projets requierts NodeJS.

Vous pouvez télécharger et installer NodeJS ici:

https://nodejs.org/en/

 Le projet "test REST/JSON" utilise également le système de testing 'Chakram', qui devraient
 déjà être inclus et installés. Par contre s'ils 
 ne l'est pas, tout simplement entrer dans l'interface de ligne de commande:
- 'npm install -g chakram' 


## Test REST

Ce project utilise le système de test "chakram", une extension de "chai" et "mocha"

http://dareid.github.io/chakram/

### Installation et Fonctionnement

1. Dans l'interface de ligne de commande:

   - naviguer dans le dossier du project: 'RESTTesting'
   - entrer 'npm install --save-dev mocha' pour installer Mocha
   - entrer 'npm run test'

Par la suite, les résultats des deux tests seront affichés dans l'interface de ligne de commande.
À noter que le fichier contenant les tests est situé au 'RESTTesting/test/test.js'


## Test UI

Ce project utilise le système de test UI end-to-end "Cypress"

https://www.cypress.io/

### Installation et Fonctionnement

1. Dans l'interface de ligne de commande:

   - naviguer dans le dossier du project:'UITesting'
   - entrer 'npm install --save-dev cypress' pour installer Cypress
   - entrer 'npm run cypress'

2. L'interface Cypress va ouvrir. Veuiller selectionner le test nommé 'rdsui_spec.js'

Par la suite, Cypress va ouvrir un navigateur web et les instructions et tests 
seront automatiquement effectués. 
À noter que le ficher contenant le code pour les tests est situé au 'UITesting/cypress/integration/rdsui_spec.js'


#### Note sur Cypress

   À noter que 'Cypress' est un système de test UI conçu pour les applications webs en 
   développement, donc il ne laisse pas l'utilisateur tester plus d'un domaine publique 
   par test. Conséquemment, l'exercise est séparé en deux tests: le premier pour faire la recherche 
   google 'rds', et le deuxième pour naviguer sur 'rds.ca' et assurer la présence de l'image.
