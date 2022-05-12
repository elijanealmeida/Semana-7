function soaceitaPares(numero){
    const promisse = new Promise((resolve, reject) =>{
        if(numero %2 == 0){
            const resultado = 'É par'
            resolve(resultado)
        } else {
            reject(new Error('Você passou um número impar'))
        }
    })
    return promisse
}

soaceitaPares(20)
.then(result => console.log('Promessa Comprida' + result))
.catch(error => console.log('Promessa não cumprida' + error))