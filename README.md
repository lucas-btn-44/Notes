# Mes notes

Site personnel qui affiche mes notes de l'Icam (A2, semestre 1 2026/2027) :
moyenne générale du semestre, modules dans l'ordre du portail, saisie des notes,
courbe et graphique circulaire.

- Tout le site tient dans `index.html`.
- Les notes de départ (bulletin du 04/11/2026) sont dans l'objet `DEFAUT` en haut du fichier.
- Les notes ajoutées sur le site sont enregistrées dans le navigateur. Le bouton
  « Exporter mes notes » les sauvegarde dans un fichier `mes-notes.json`, que
  « Importer un fichier » recharge sur un autre appareil.

Calcul : chaque note est ramenée sur 20 ; la moyenne d'un module tient compte du
coefficient de chaque note ; la moyenne générale tient compte du coefficient de
chaque module (seuls les modules notés comptent).
