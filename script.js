function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Erro! Verifique os dados.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gereno = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade < 10) {
                img.setAttribute('src', 'imagens/guri.png')
            } else if (idade < 30) {
                img.setAttribute('src', 'imagens/jovemguri.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'imagens/homem.png')
            } else {
                img.setAttribute('src', 'imagens/idoso.png')
            }
        } else {
            genero = 'Mulher'
            if (idade < 10) {
                img.setAttribute('src', 'imagens/guria.png')
            } else if (idade < 30) {
                img.setAttribute('src', 'imagens/jovemguria.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'imagens/mulher.png')
            } else {
                img.setAttribute('src', 'imagens/idosa.png')
            }
        }
        res.innerHTML = `<strong>${genero} com ${idade} anos.</strong>`
        res.appendChild(img)
    }
}
