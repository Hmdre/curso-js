function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value == 0 || fano.value >= ano || fano.value > 110) {
        window.alert('Verifique os dados')
    } else {
        var idade = ano - Number(fano.value)
    }
}