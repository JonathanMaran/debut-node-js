let http = require('http'); //require effectue un appel à une bibliothèque de Node.js, ici la bibliothèque "http" qui nous permet de créer un serveur web.
// let url = require("url");

let server = http.createServer(function(req, res) { //La variable http représente un objet JavaScript qui va nous permettre de lancer un serveur web.
    // let page = url.parse(req.url).pathname;
    // console.log(page);
    res.writeHead(200, {"Content-Type": "text/html"}); //code 200 dans l'en-tête de la réponse, qui signifie au navigateur "OK tout va bien", + Type MIME
    res.write('<!DOCTYPE html>'+
        '<html>'+
        '    <head>'+
        '        <meta charset="utf-8" />'+
        '        <title>Ma page Node.js !</title>'+
        '    </head>'+
        '    <body>'+
        '     	<p>Voici un paragraphe <strong>HTML</strong> !</p>'+
        '    </body>'+
        '</html>');
    res.end();
    res.end('<p>Voici un paragraphe <strong>HTML</strong> !</p>'); //on termine la réponse (avecend()) en envoyant le message de notre choix au navigateur
});
server.listen(8080); //le serveur est lancé et "écoute" sur le port 8080

//La fonction de callback est donc appelée à chaque fois qu'un visiteur se connecte à notre site. Elle prend 2 paramètres :
//
//     La requête du visiteur (req dans mes exemples) : cet objet contient toutes les informations sur ce que le visiteur a demandé.
//     On y trouve le nom de la page appelée, les paramètres, les éventuels champs de formulaires remplis...
//
//     La réponse que vous devez renvoyer (res dans mes exemples) : c'est cet objet qu'il faut remplir pour donner un retour au visiteur.
//     Au final, res contiendra en général le code HTML de la page à renvoyer au visiteur.