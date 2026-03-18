let back = document.getElementById('return')
let download = document.getElementById('download')
let foward = document.getElementById('advance')
let image = document.getElementById('image')
let link = document.createElement('a')
let imagemAtual = 1
let mediumPic = ''

async function buscarImagem() {
    let resposta = await fetch(`https://api.pexels.com/v1/search?query=landscape&per_page=1&page=${imagemAtual}`, {
        headers: {
            'Authorization': '7EbE2PBHHBaBVI10yveDlyXCTPyFCbxupWS7ZHDLXZlL6I1K18lFiCke'
        }
    })
    let dados = await resposta.json()
    mediumPic = dados.photos[0].src.medium
    image.src = mediumPic
}


document.addEventListener('DOMContentLoaded', function() {
    buscarImagem()
})

foward.addEventListener('click', function() {
    imagemAtual += 1
    buscarImagem()
}) 

download.addEventListener('click', async function() {
    let blob = await fetch(mediumPic).then(r => r.blob())
    let url = URL.createObjectURL(blob)

    document.body.appendChild(link)
    link.href = url
    link.setAttribute('download', 'paisagem')
    link.click()
    document.body.removeChild(link)
}) 

back.addEventListener('click', function() {
    if(imagemAtual == 1) {
        window.alert('Não é possível voltar')
    } else {
        imagemAtual -= 1
        buscarImagem()
    }
}) 