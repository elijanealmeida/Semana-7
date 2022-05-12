const {resolve} = require("path")

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
            resolve("gaiademelos@gmail.com")
        }, 4000)
    })
}

function enviarEmail(corpo, para){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let deuErro = false;
            if (!deuErro) {
            resolve ({time:4, to: "gaiademelos@gmail.com"})
        }else{
            reject("O Correio esta cheio, boneka")
        }
         }, 4000)
    })
}
// function buscarUsuario(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve([
//                 {name: "Gaia", language: "Grego"},
//                 {name: "Andreza", language: "Espanhol"},
//                 {name: "Agnes", language: "Ingles"}
//             ])
//         },2000)
//     })
// }
// async function principal(){
//     let usuarios = await buscarUsuario()
//     console.log(usuarios)
//     console.log("Deu certo")
// }
// principal()

// console.log("Inicio")
// pegarId().then((id)=>{
// buscarEmailNoBanco(id).then((email)=>{
// enviarEmail("oi princesa", email).then(()=>{
// console.log("Email enviado, para usuario com id: " + id)
// }).catch(err=>{
//     console.log(err)
// })
// })
// }) 

async function principal(){
let id = await pegarId()
let email = await buscarEmailNoBanco(id)
enviarEmail("Olá como vai?",email ).then(() =>{
    console.log("Email enviado")

}).catch((err) =>{
    console.log((err))
})

}
principal()