
const fs = require("fs")

function enviarEmail( corpo, para, callback ){
setTimeout(function(){
 console.log(`
 Para: ${para}
 -------------------------------------------------
 ${corpo}
-------------------------------------------------
De: Elijane Almeida

`)
callback("ok", 42, "1s")
}, 1000)


}

console.log("Inicio do envio do email")
enviarEmail("olá, cheguei!", "eljalmeida@outlook.com", (status, amount, time) => {
    console.log(`
    Status:${status}
    ------------------------------------------------------
    Contatos:${amount}
    ------------------------------------------------------
    Tempo de envio: ${time}
    `)
    console.log("Deu tudo certo <3") 
} )