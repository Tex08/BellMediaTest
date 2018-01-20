# Bell Media Test

## Test Front-End

#### Description et Fonctionnement

Ce project utilise du javascript, HTML5, et CSS pour afficher l'alignement d'une équipe
LNH provenu d'un object JSON. Le framework CSS W3 est utilisé

1. Naviguer au dossier 'FrontEndTest'

2. Simplement ouvrir le ficher 'rds.html' dans un navigateur web


## Test REST/JSON et UI

#### Note

Ces deux projets requierts NodeJS.

Vous pouvez télécharger et installer NodeJS ici:

https://nodejs.org/en/


## Test REST

Ce project utilise le système de test "chakram", une extension de "chai"

http://dareid.github.io/chakram/

### Installation et Fonctionnement

1. Dans l'interface de ligne de commande:

   - entrer 'npm install -g mocha' pour installer Mocha
   - naviger dans le dossier du project: 'RESTTesting'
   - entrer 'npm run test'

Par la suite, les résultats des deux tests seront affichés dans l'interface de ligne de commande.
À noter que le fichier contenant les tests est situé au 'RESTTesting/test/test.js'


## Test UI

Ce project utilise le système de test UI end-to-end "Cypress"

https://www.cypress.io/

#### Fonctionnement

1. Dans l'interface de ligne de commande:

   - entrer 'npm install -g cypress' pour installer Cypress
   - naviguer dans le dossier du project:'UITesting'
   - entrer 'npm run cypress'

2. L'interface Cypress va ouvrir. Veuiller selectionner le test nommé 'rdsui_spec.js'

Par la suite, Cypress va ouvrir un naviguateur web et les instructions et tests 
seront automatiquement effectués. 
À noter que le ficher contenant le code pour les tests est situé au 'UITesting/cypress/integration/rdsui_spec.js'


#### Notes 

1. 'Cypress' et 'chakram' devraient être déjà installer dans le projet, par contre s'ils 
    ne sont pas, tout simplement enter dans l'interface de ligne de commande:
   'npm install -g cypress' et 'npm install -g chakram' 

2. À noter que 'Cypress' est un système de test UI conçu pour les applications webs en 
   développement, et donc il ne laisse pas l'utilisateur tester plus d'un domaine publique 
   par tests. Conséquamment, l'exercise est séparer en deux tests: le premier pour faire la recherche 
   google 'rds', et le deuxième pour naviguer sur 'rds.ca' et assurer la présence de l'image.
