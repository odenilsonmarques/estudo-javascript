
//escrevendo um texto na página apeeas com js usando o write
document.write('sou um texto criado com o write')

document.write('<h1>sou um texto criado com o write</h1>')

//usando o getElementById. O innerText é mais recomendado usar quando estamos usando tags: (<p>)
document.getElementById('text').innerText = 'Hello here'

//usando o getElementById. O innerHTML é mais recomendado usar quando estamos usando div, class, h1...
document.getElementById('text2').innerHTML = '<h1>sou um texto dentro de uma div</h1>'
