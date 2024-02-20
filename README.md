


* **Titre:** BalDev : Un site web pour explorer les propriétés HTML, CSS et plus encore !
* **Description:** BalDev est un projet open source qui vise à créer une plateforme collaborative pour explorer et apprendre les propriétés des langages web tels que HTML, CSS et bientôt d'autres.

# Comment faire un push sur GitHub (ajouter du code au project).

Pour envoyer vos modifications locales sur GitHub, vous devez effectuer un "push". Voici les étapes à suivre :

## 1. Vérifiez votre configuration git

Assurez-vous que votre nom d'utilisateur et votre adresse e-mail sont correctement configurés dans git. Vous pouvez vérifier cela en utilisant les commandes suivantes dans votre terminal :

```bash
git config --global user.name "VotreNom"
git config --global user.email "votre@email.com"
```

## 2. Ajoutez vos modifications

Ajoutez les fichiers que vous souhaitez pousser vers GitHub à l'index en utilisant la commande `git add`. Par exemple, pour ajouter tous les fichiers modifiés :

```bash
git add .
```

## 3. Validez vos modifications

Validez les modifications que vous avez ajoutées à l'index avec un message descriptif en utilisant la commande `git commit` :

```bash
git commit -m "Description de vos modifications"
```

## 4. Poussez vos modifications vers GitHub

Enfin, poussez vos modifications vers GitHub en utilisant la commande `git push`. Assurez-vous que vous avez les autorisations appropriées pour pousser vers le dépôt :

```bash
git push origin nom_de_votre_branche
```

Remplacez `nom_de_votre_branche` par le nom de la branche sur laquelle vous souhaitez pousser vos modifications. Par exemple, si vous travaillez sur la branche principale (habituellement nommée `main` ou `master`), remplacez `nom_de_votre_branche` par `main`.

Et voilà ! Vos modifications locales ont maintenant été poussées vers GitHub avec succès.

Assurez-vous également de résoudre tout conflit potentiel qui pourrait survenir lors du push en fusionnant les modifications distantes avec vos modifications locales.
