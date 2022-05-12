// fs é uma biblioteca do node
const fs = require('fs');

console.log('inicio')

// criar sincrono (Sync)
fs.writeFileSync('arquivo.txt' , 'Uma frase legal')

console.log('fim')
