//pegando dados do html
let comecarbtn = window.document.getElementById('comecarbtn')
let div_imagens = document.getElementById('div-imagens')
let palavra = document.getElementById('palavra')
let resultado = window.document.getElementById('resultado')

//criando as variaveis das imagens
var faca=document.createElement('img')
var vaca=document.createElement('img')
var bota=document.createElement('img')
var bola=document.createElement('img')
var gato=document.createElement('img')
var pato=document.createElement('img')

//inserindo as imagens
faca.setAttribute('src', 'faca.jpg')
vaca.setAttribute('src', 'vaca.png')
bota.setAttribute('src', 'bota.jpg')
bola.setAttribute('src', 'bola.png')
gato.setAttribute('src', 'gato.png')
pato.setAttribute('src', 'pato.jpg')

//mostrando as imagens na div_imagens
div_imagens.appendChild(faca)
div_imagens.appendChild(vaca)
div_imagens.appendChild(bota)
div_imagens.appendChild(bola)
div_imagens.appendChild(gato)
div_imagens.appendChild(pato)

//definindo o display das imagens
faca.style.display = 'none'
vaca.style.display = 'none'
bola.style.display = 'none'
bota.style.display = 'none'
gato.style.display = 'none'
pato.style.display = 'none'

//função de o botão começar foi clicado
if(comecarbtn.addEventListener('click', function(){
    //botão começar sumir
    comecarbtn.style.display = 'none'

    //aparecer primeira palavra: Bota
    palavra.innerHTML = 'A palavra é: Bota'
    bola.style.display = 'inline-block'
    bota.style.display = 'inline-block'

        //validando se a palavra Bota está certa
        if (bota.addEventListener('click', function(){

            //mensagem de parabéns
            window.alert('Parabéns! Você acertou.')

            //troca da palavra
            palavra.innerHTML = 'A palavra é: Vaca'

            //troca de imagens
            bola.style.display = 'none'
            bota.style.display = 'none'

            faca.style.display = 'inline-block'
            vaca.style.display = 'inline-block'

            //validando se a palavra Vaca está certa
            if (vaca.addEventListener('click', function(){

                //mensagem de parabens
                window.alert('Parabéns! Você acertou.')

                //troca de palavra
                palavra.innerHTML = 'A palavra é: Gato'

                //troca de imagens
                faca.style.display = 'none'
                vaca.style.display = 'none'

                gato.style.display = 'inline-block'
                pato.style.display = 'inline-block'

            })) {
                
            } //validando se a palavra vaca está errada
            else if(faca.addEventListener('click', function(){

                //mensagem de erro
                window.alert('Opa! Calma. Vamos tentar novamente? A palavra é vaca.')
            })) {
                
            }

        })) {       

        } //validando se a palavra Bota está errada
        else if (bola.addEventListener('click', function(){

            //mensagem de erro
            window.alert('Opa! Calma. Vamos tentar novamente? A palavra é bota.')
        })){
            
        }




})){} else{}