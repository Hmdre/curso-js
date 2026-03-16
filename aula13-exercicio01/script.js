function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerText = `Agora são ${hora} horas.`
    if (hora >= 12 && hora < 18) {
        img.src = 'imagens/tarde-pequeno.jpg'
        document.body.style.backgroundImage = 'linear-gradient(to bottom, #CB5B0B, #F7C385, #A24C00)'
    } else if (hora >= 0 && hora < 12) {
        img.src = 'imagens/manha-pequeno.jpg'
        document.body.style.backgroundImage = 'linear-gradient(to bottom, #DDCBBD, #E08A33, #775513)'
    } else { 
        img.src = 'imagens/noite-pequeno.jpg'
        document.body.style.backgroundImage = 'linear-gradient(to bottom, #32496C, #9B9CA9, #171616)'
    }
}