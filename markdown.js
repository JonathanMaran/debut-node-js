// markdown permet de convertir du code markdown en HTML
let markdown = require('markdown').markdown;

console.log(markdown.toHTML('Un paragraphe en **markdown** !'));