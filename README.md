# BellMediaTest



# Bell Media Test

## Test Front-End

### Description

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

Ce project utilise le system de test "chakram", une extension de "chai"

http://dareid.github.io/chakram/

#### Installation et Fonctionnement

1. Installer le system de test "mocha"

2. Dans l'interface de ligne de commande, entrer 'npm install -g mocha'

4. Dans l'interface de ligne de commande, naviger dans le dossier du project,
   'RESTTesting'

5. Dans l'interface de ligne de commande, entrer 'npm run test'

Par la suite, les résultats des deux tests seront affichés dans l'interface de ligne de commande.
À noter que le fichier contenant les tests est situé au 'RESTTesting/test/test.js'


## Test UI

Ce project le système de test UI end-to-end "Cypress"

https://www.cypress.io/

#### Fonctionnement

1. Dans l'interface de ligne de commande, entrer 'npm install -g cypress'
   pour installer Cypress

2. Dans l'interface de ligne de commande, naviguer dans le dossier du project,
   'UITesting'

3. Dans l'interface de ligne de commande, entrer 'npm run cypress'

4. L'interface Cypress va ouvrir. Veuiller selectionner le test nommé 'rdsui_spec.js'

Par la suite, Cypress va ouvrir un naviguateur web et les instructions et tests demanders 
seront automatiquement effectués. 
À noter que le ficher contenant les tests est situé au 'UITesting/cypress/integration/rdsui_spec.js'


#### Notes

1. 'Cypress' et 'chakram devraient être déjà installer dans le projet, par contre s'ils 
    ne sont pas, tout simplement enter dans l'interface de ligne de commande:
   'npm install -g cypress' et 'npm install -g chakram' 

2. À noter que 'Cypress' est un système de test UI conçu pour les applications webs en 
   développement, et donc il ne laisse pas l'utilisateur tester plus d'un domaine publique 
   par tests. Conséquamment, l'exercise est séparer en deux tests: le premier pour faire la recherche 
   google 'rds', et le deuxième pour naviguer sur 'rds.ca' et assurer la présence de l'image.
