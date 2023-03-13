# Projet React Matis AMRI Anice TAJGALT Ines BACCOUCHE

## Installations nécessaires au bon fonctionnement du projet

### Télécharger le projet sur votre machine.

Télécharger les repository "helloworld-master" et "backend-master" en format zip, puis extraire le tout dans votre machine à un endroit adéquat.

### npm configuration 

A l'aide de l'invite de commande ("cmd" sur windows), déplacer vous dans les répertoire que vous venez d'extraire (ouvrir 2 terminal).
C:\Users\bob\helloworld-master
C:\Users\bob\backend-master

Dans chaque répertoire lancer la commande "npm install", des téléchargement s'effectueront.

### npm lancement

Une fois npm installez dans les répertoires back et front, faire les commandes suivantes :
"npx json-server db.json" dans C:\Users\bob\backend-master
"npm start" dans C:\Users\bob\helloworld-master

Une page web devrait s'ouvrir sur votre navigateur par défaut.

Félicitation : votre projet est Lancé !!!

## Fonctionnalités et défauts

### Pense-Bête

Cette fonctionnalité possède 2 pages, une permettant de créer un pense-bête, l'autre permettant de voir tous les pense-bête créé.
Une pense-bête possède 2 caractéristiques : un contenu et une priorité.

Nous voulions rajouter rajouter un style en couleur par rapport à la priorité du pense-bête ainsi qu'une fonction de tri que nous n'avons pas pu réaliser par manque de temps.

### Consommables 

Cette fonctionnalité possède 2 pages, une permettant de créer un consommable, l'autre permettant de voir tous les consommables créé.
Un consommable possède un contenu et un type (livre, film et autre).

L'ajout d'un bouton "delete" permettant de supprimer le consommable de la base de donnée -> requête delete coder dans l'Api mais pas utilisé dans le front

### Budget 

Page simple permettant de gérer son budget

Bug affichant le budget restant avec un décalage -> bug ayant prit énormément de temps avant de trouver la réponse :"batching des mises à jour d'état"
Données non ajoutées à la BDD suite au bug précédent.

### RDV

Page de création de rdv 

Plusieurs problèmes concernant les Dates -> pas réussi à transféré les données de date sur la BDD (plusieurs jours de blocage)
Par conséquent pas de page de visualisation des rdv enregistrer.
