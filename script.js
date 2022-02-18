//pegando dados do html
let comecarbtn = window.document.getElementById('comecarbtn')
let div_imagens = document.getElementById('div-imagens')
let palavra = document.getElementById('palavra')

//criando parágrafo para a palavra
let paragrafo=document.createElement('p')
paragrafo.setAttribute('id', 'resultado')

//criando as variaveis das imagens
var faca=document.createElement('img')
var vaca=document.createElement('img')
var bota=document.createElement('img')
var bola=document.createElement('img')

//função se apertar no botão começar
if(comecarbtn.addEventListener('click', function(){    

    palavra.innerHTML='A palavra é: Bota'
    bola.setAttribute('src', 'bola.png')
    bota.setAttribute('src', 'bota.jpg')
    
    div_imagens.appendChild(bota)
    div_imagens.appendChild(bola)

    comecarbtn.style.display='none'

    if(bota.addEventListener('click', function(){
            paragrafo.innerHTML = ''
            window.alert("Você acertou. Parabens")
            div_imagens.appendChild(paragrafo)

            //proxima palavra
            palavra.innerHTML="A palavra é: Faca"

            bota.style.display = 'none'
            bola.style.display = 'none'

            palavra.innerHTML = 'A palavra é: faca'
            faca.setAttribute('src', 'faca.jpg')
            vaca.setAttribute('src', 'vaca.png')

            div_imagens.appendChild(faca)
            div_imagens.appendChild(vaca)

            if(faca.addEventListener('click', function(){

                paragrafo.innerHTML = ''
                window.alert("Você acertou. Parabens")
                paragrafo.innerHTML=""
                div_imagens.appendChild(paragrafo)

                faca.style.display = 'none'
                vaca.style.display = 'none'

                //próxima palavra
                palavra.innerHTML = 'A palavra é: bola'
                bota.style.display = 'inline-block'
                bola.style.display = 'inline-block'

            })){}  else if (vaca.addEventListener('click', function(){
                    paragrafo.innerHTML = ''
                    paragrafo.innerHTML = 'A palavra é Faca. Tenta mais um vez. Você consegue.'
                    div_imagens.appendChild(paragrafo)
            })){}


        })){} 
            
            else if (bola.addEventListener('click', function(){
            paragrafo.innerHTML = ''
            paragrafo.innerHTML = 'A palavra é Bota. Tenta mais um vez. Você consegue.'
            div_imagens.appendChild(paragrafo)
        })){}
})){}