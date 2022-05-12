function pegarId(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(8)
        }, 4000)
    })
}
function buscarEmailNoBanco(id){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("eljalmeida@outlook.com")
        }, 4000)
    })
}

function enviarEmail(corpo, para){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let deuErro = false;
            if (!deuErro) {
            resolve ({time:4, to: "eljalmeida@outlook.com"})
        }else{
            reject("O Correio esta cheio, boneka")
        }
         }, 4000)
    })
}
console.log("Inicio")
pegarId().then((id)=>{
buscarEmailNoBanco(id).then((email)=>{
enviarEmail("Oi princesa", email).then(()=>{
    console.log("Email enviado, para usuario com id: " + id)
}).catch(err=>{
    console.log(err)
})
})
})
console.log("Foi tudo!")