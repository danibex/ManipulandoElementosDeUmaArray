let numeros = []

function adicionar() {
    let numero = Number(document.getElementById("numero").value)
    numeros.push(numero)    
/*     window.alert(numeros[0]) */
    let espaco = document.getElementById("resultado")
    let item = document.createElement('option')
    item.text = `Valor ${numero} adicionado`
    espaco.appendChild(item)
}

function finalizar() {
    let resposta = document.getElementById("resposta")
    let somatorio = 0
    for(let count=0; count<numeros.length; count++) {
        somatorio += numeros[count]
    }
    let media = somatorio/numeros.length
    resposta.innerHTML = `Ao todo, temos ${numeros.length} números cadastrados.`
    resposta.innerHTML += `</br>O maior valor informado foi o ${Math.max(...numeros)}`
    resposta.innerHTML += `</br>O menor valor informado foi o ${Math.min(...numeros)}`
    resposta.innerHTML += `</br>A soma dos numeros foi ${somatorio}`
    resposta.innerHTML += `</br>A media dos valores é ${media}`    
}