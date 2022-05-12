const fs = require('fs');

console.log('inicio')

fs.writeFile('arquivo.txt' , 'Somos sinistras', function(err){
    // set time out -> definir um tempo para executar - o 3000 é 3 segundos, por exemplo
    setTimeout(function(){
        console.log('O arquivo foi criado')
    }, 20000);
})

console.log('fim')