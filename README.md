# Gestion de Recettes

## Description

L'application de gestion de recettes permet aux utilisateurs de gérer leurs recettes de cuisine de manière simple et intuitive. Avec cette application, vous pouvez ajouter, modifier, supprimer et visualiser toutes vos recettes. L'application est construite avec Vue.js 3, en utilisant la Composition API pour une meilleure gestion des états et des composants. Pinia est utilisé pour la gestion des états globaux, et Bootstrap est utilisé pour styliser l'interface utilisateur.

## Fonctionnalités

- **Ajout de recettes :** Les utilisateurs peuvent ajouter de nouvelles recettes en spécifiant le titre, les ingrédients et le type de recette (entrée, plat, dessert, etc.).
- **Modification de recettes :** Les recettes existantes peuvent être modifiées pour mettre à jour les informations.
- **Suppression de recettes :** Les utilisateurs peuvent supprimer des recettes de la liste.
- **Affichage de la liste des recettes :** Une vue permet de voir toutes les recettes disponibles avec la possibilité de voir les détails de chaque recette.

## Déploiement et Gestion de Version

### Déploiement

- **Gestion de version avec Git :** Le projet est versionné avec Git. Chaque changement est accompagné de messages de commit appropriés.
  
- **Déploiement sur Vercel :** L'application est déployée sur Vercel. [Lien vers l'application](https://gestion-recettes-zeta.vercel.app/)

- **Conteneurisation avec Docker :** Une image Docker de l'application est créée après le déploiement sur Vercel.

  - **Dockerfile utilisé pour créer l'image Docker :**

    ```dockerfile
    # Utiliser l'image de base Node.js
    FROM node:18-alpine AS build

    # Définir le répertoire de travail
    WORKDIR /app

    # Copier les fichiers package.json et package-lock.json
    COPY package*.json ./

    # Installer les dépendances
    RUN npm install

    # Copier le reste des fichiers de l'application
    COPY . .

    # Construire l'application
    RUN npm run build

    # Exposer le port utilisé par l'application
    EXPOSE 80

    # Définir la commande à exécuter pour démarrer l'application
    CMD ["npm", "run", "start"]
    ```

  - **Pour construire l'image Docker :**

    ```bash
    docker build -t mohamedabdallahi/gestion-recettes:latest .
    ```

- **Publication sur Docker Hub :** L'image Docker est publiée sur Docker Hub. [Lien vers l'image Docker](https://hub.docker.com/layers/mohamedabdallahi/gestion_recettes/latest/images/sha256:f7eb13bf6a68c4600af0bcbe0b19b212e2b6280818fbf896bdb6ac1644368d11?uuid=68762D76-51E9-45A4-85B8-20EAE90C3F8C) 


## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

- Node.js (version 16 ou supérieure recommandée)
- npm (inclus avec Node.js)
- Git (pour le contrôle de version)
- Docker (pour la conteneurisation)

## Installation

1. **Cloner le dépôt :**

   ```bash
   git clone https://github.com/Mohamed11abdallah/gestion_recettes.git

2. **Naviguer dans le répertoire du projet :**

    ```bash
   cd gestion_recettes

3. **Installer les dépendances :**

    ```bash
   npm install

## Utilisation

3. **Démarrer le serveur de développement :**

    ```bash
   npm run serve

3. **Pour exécuter le conteneur Docker :**

    ```bash
   docker run -d -p 8084:80 gestion_recette

## Auteur

[Mohamed Abdallahi M'khaitir, ](https://github.com/Mohamed11abdallah) 
