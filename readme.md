Test technique
Strateg.in
API sécurisée par Register/Login
Nous vous demandons de développer une application permettant de s’inscrire via
des informations basiques.
• Au premier accès, l’utilisateur doit se créer un compte (email, mdp) sur la route
/register
• Une fois le compte créé, l’utilisateur doit utiliser la route /login pour récupérer un
token.
• Une fois logué, l’utilisateur peut accéder à la liste des utilisateurs déjà enregistrés
sur la plateforme via la route /users.


Pour lancer l'API
-ouvrir un terminal sur le dossier du Projet :API_Register_LoginBackend
-Sur un terminal lancez la commande : npm run dev.(Pour ouvrir le serveur)

Commandes pour tester l'API (si vous n'utilisez pas le port 3000 changes le sur URL):

Pour registrer un utilisateur(Changer NewUser et password pour les données que vous voudriez avoir ):

curl -d "user=NewUser>&password=password" -X POST http://localhost:3000/register

Pour le login et pour récupérer le token(Changer "User" et "password" pour les données d'un utilisateur ):

curl -d "user=User&password=password" -X POST http://localhost:3000/login


Pour obtenir les users (token étant le token de la commande précédente (sans les " " de la réponse JSON) ):

curl -H "Authorization: Beaber token " -d "user=User&password=password" -X GET http://localhost:3000/users
