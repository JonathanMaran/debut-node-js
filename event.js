let EventEmitter = require('events').EventEmitter; // émettre des évènements en incluant le module EventEmitter
let jeu = new EventEmitter();

jeu.on('gameover', function(message) {
    console.log(message);
}); // si on veut écouter l'événement

jeu.emit('gameover', 'Vous avez perdu !'); // générer un événement et envoyer un message

let monmodule = require('./monmodule');
monmodule.direBonjour();
monmodule.direByeBye();