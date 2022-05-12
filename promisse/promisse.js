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
console.log('promessa')