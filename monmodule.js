let direBonjour = function() {
    console.log('Bonjour !');
};

let direByeBye = function() {
    console.log('Bye bye !');
};

exports.direBonjour = direBonjour; // export des fonctions pour qu'elles soient utilisables de l'extérieur (VOIR PAGE event.js)
exports.direByeBye = direByeBye;