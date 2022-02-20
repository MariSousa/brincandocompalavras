//variáveis
    //coletando dados do HTML 
    var button = document.querySelectorAll('button')
    var imagens = document.querySelectorAll('img')
    var audioPalavras = document.querySelectorAll('audio')

    var palavra = document.getElementById('palavra')
    var gravaraudio = document.getElementById('gravar_audio')
    var btnComecar = document.getElementById('comecarbtn')   
    var escolhaImagem = document.getElementById('escolhaImagem')
    var resultado = document.getElementById('resultado')
    var pronuncia = document.getElementById('pronuncia')
    var tituloPrincipal = document.getElementById('tituloPrincipal')
    var figure = document.getElementById('figure')
    

//funções
    //quando clicar no botão começar - começar com as imagens: Bola - Bota
    function comecar(){
    palavra.innerHTML = `A palavra é: Bota`

    pronuncia.innerHTML = 'Escute a pronúncia da palavra apertando no ícone de play logo abaixo.'
    audioPalavras[0].style.display = 'block'
    btnComecar.style.display = 'none'
    tituloPrincipal.style.display = 'none'
    figure.style.display = 'none'

    escolhaImagem.innerHTML = `Qual das imagens é a palavra destacada?`
    imagens[1].style.display = 'inline-block'
    imagens[0].style.display = 'inline-block' //indice 1 - bota - correta 
    }

    //gravar audio
    function gravarAudio(){
        gravaraudio.innerHTML = `<strong>Agora é com você. <br> Siga os seguintes passos:<br><br></strong> 1- Aperte no botão <u>GRAVAR</u> para você gravar sua voz.<br> 2- Aperte em <u>PAUSAR</u> 
        para parar de gravar. <br> 3- Aperte em <u>OUVIR</u> para comparar sua pronúncia com a pronúncia do professor.<br> 4- Por último, ao lado, escolha a imagem certa que combine com a palavra.`

        button[0].style.display = 'inline-block'
        button[1].style.display = 'inline-block'
        button[2].style.display = 'inline-block'
    }

    //imagem certa
    function imagemCerta(){
        return window.alert("Parabéns! Você acertou")
    }

    //imagem errada
    function imagemErrada(){
        return window.alert("Calma. Vamos tentar novamente. Leia e escute a palavra mais uma vez.")
    }

//chamadas
    //chamada do botão comecar
    btnComecar.addEventListener('click', function(){
        comecar()
        gravarAudio()
    })
    
    //chamda das imagens 
      //validações

        //Bota - Bola
          if(imagens[1].addEventListener('click', function(){
              imagemCerta()

              palavra.innerHTML = `A palavra é: Faca`
              audioPalavras[0].style.display = 'none'
              audioPalavras[1].style.display = 'block'

              imagens[1].style.display = 'none'//bola
              imagens[0].style.display = 'none'//bota

              imagens[2].style.display = 'inline-block'//indice 2 - faca - correta
              imagens[3].style.display = 'inline-block'

                //Faca - Vaca
                  if(imagens[2].addEventListener('click', function(){
                    imagemCerta()

                    palavra.innerHTML = `A palavra é: Pato`
                    audioPalavras[1].style.display = 'none'
                    audioPalavras[2].style.display = 'block'

                    imagens[2].style.display = 'none'//bola
                    imagens[3].style.display = 'none'//bota

                    imagens[4].style.display = 'inline-block'
                    imagens[5].style.display = 'inline-block'//indice 2 - pato - correta

                      //Pato - Gato
                        if(imagens[5].addEventListener('click', function(){
                          imagemCerta()
                          palavra.innerHTML = `Muito bem! Você conseguiu terminar o Jogo. Parabéns!`
                          gravaraudio.innerHTML = ''
                          escolhaImagem.innerHTML = ''
                          pronuncia.innerHTML = '' 

                          audioPalavras[2].style.display = 'none'

                          imagens[4].style.display = 'none'
                          imagens[5].style.display = 'none'

                          button[0].style.display = 'none'
                          button[1].style.display = 'none'
                          button[2].style.display = 'none'

                        })){}else if(imagens[4].addEventListener('click', function(){
                            imagemErrada()
                        })){}



                  })){} else if(imagens[3].addEventListener('click', function(){
                          imagemErrada()
                  })){}

          })){} 
          else if(imagens[0].addEventListener('click', function(){
              imagemErrada()
          })){}
   

    
    
