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
    var completarFrase = document.getElementById('completar-frase')
    var inputCompletarFrase = document.getElementById('inputCompletarFrase')
    var resCompletarFrase = document.getElementById('resFrase')
    var verificarFrase = document.getElementById('verificarFrase')
    

//funções  

    //gravar audio
    function gravarAudio(){
        gravaraudio.innerHTML = `<strong>Agora é com você. <br> Siga os seguintes passos:<br><br></strong> 1- Aperte no botão <u>GRAVAR</u> para você gravar sua voz.<br> 2- Aperte em <u>PAUSAR</u> 
        para parar de gravar. <br> 3- Aperte em <u>OUVIR</u> para comparar sua pronúncia com a pronúncia do professor.<br>4- Ao lado, escreva a palavra que falta nas frases. 
        <br>5- Por último, escolha a imagem certa que combine com a palavra.`

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

     //quando clicar no botão começar - começar com as imagens: Bola - Bota
     function comecar(){
      palavra.innerHTML = `A palavra é: Bota`
  
      pronuncia.innerHTML = 'Escute a pronúncia da palavra apertando no ícone de play logo abaixo.'
      audioPalavras[0].style.display = 'block'
      btnComecar.style.display = 'none'
      tituloPrincipal.style.display = 'none'
      figure.style.display = 'none'
  
      //Completar frase
      completarFrase.innerHTML = `<strong> Complete as frases: </strong> <br><br> Eu vesti minha ... e ela estava apertada. <br> Eu preciso comprar uma ... porque vai chover.`
      inputCompletarFrase.style.display = 'block'
      verificarFrase.style.display = 'block'

      verificarFrase.addEventListener('click', function(){
        resCompletarFrase.innerHTML = ``
        if(inputCompletarFrase.value == 'Bota' || inputCompletarFrase.value == 'bota'){
          
          resCompletarFrase.innerHTML = `Muito bem! Você acertou.`
        } else if(inputCompletarFrase.value != 'Bota' || inputCompletarFrase.value != 'bota') {
          
          resCompletarFrase.innerHTML = 'Campo inválido ou palavra errada.'
        }

      })
  
      escolhaImagem.innerHTML = `Qual das imagens é a palavra destacada?`
      imagens[1].style.display = 'inline-block'
      imagens[0].style.display = 'inline-block' //indice 1 - bota - correta 

      }

//chamadas
    //chamada do botão comecar
    btnComecar.addEventListener('click', function(){
        comecar()
        gravarAudio()
    })
    
    //chamada das imagens 
      //validações

        //Palavra: Faca
          if(imagens[1].addEventListener('click', function(){
              imagemCerta()

              palavra.innerHTML = `A palavra é: Faca`
              audioPalavras[0].style.display = 'none'
              audioPalavras[1].style.display = 'block'             

            //Completar frase
              completarFrase.innerHTML = `Complete as frases: <br> Me cortei com a .... <br> Cuidado! Você pode se machucar com a ....`
              inputCompletarFrase.style.display = 'block'
              verificarFrase.style.display = 'block'

              verificarFrase.addEventListener('click', function(){
                resCompletarFrase.innerHTML = ``
                if(inputCompletarFrase.value == 'Faca' || inputCompletarFrase.value == 'faca'){
                  
                  resCompletarFrase.innerHTML = `Muito bem! Você acertou.`
                } else if(inputCompletarFrase.value != 'Faca' || inputCompletarFrase.value != 'faca') {
                  
                  resCompletarFrase.innerHTML = 'Campo inválido ou palavra errada.'
                }

              })

              imagens[1].style.display = 'none'//bola
              imagens[0].style.display = 'none'//bota

              imagens[2].style.display = 'inline-block'//indice 2 - faca - correta
              imagens[3].style.display = 'inline-block'

              
                  //Palavra:Pato                
                  if(imagens[2].addEventListener('click', function(){
                    imagemCerta()

                    palavra.innerHTML = `A palavra é: Pato`
                    audioPalavras[1].style.display = 'none'
                    audioPalavras[2].style.display = 'block'

                    //Completar frase
                    completarFrase.innerHTML = `Complete as frases: <br> O ... estava na lagoa. <br> Eu tenho me de ... por eles bicam.`
                    inputCompletarFrase.style.display = 'block'
                    verificarFrase.style.display = 'block'

                    verificarFrase.addEventListener('click', function(){
                      resCompletarFrase.innerHTML = ``
                      if(inputCompletarFrase.value == 'Pato' || inputCompletarFrase.value == 'pato'){
                        
                        resCompletarFrase.innerHTML = `Muito bem! Você acertou.`
                      } else if(inputCompletarFrase.value != 'Pato' || inputCompletarFrase.value != 'pato') {
                        
                        resCompletarFrase.innerHTML = 'Campo inválido ou palavra errada.'
                      }

                    })

                    imagens[2].style.display = 'none'//bola
                    imagens[3].style.display = 'none'//bota

                    imagens[4].style.display = 'inline-block'
                    imagens[5].style.display = 'inline-block'//indice 2 - pato - correta

                    






                      //Fim do jogo
                        if(imagens[5].addEventListener('click', function(){
                          imagemCerta()
                          palavra.innerHTML = `Muito bem! Você conseguiu terminar o Jogo. Parabéns!`
                          gravaraudio.innerHTML = ''
                          escolhaImagem.innerHTML = ''
                          pronuncia.innerHTML = '' 

                          completarFrase.innerHTML = ``
                          inputCompletarFrase.style.display = 'none'
                          verificarFrase.style.display = 'none'

                          audioPalavras[2].style.display = 'none'

                          imagens[4].style.display = 'none'
                          imagens[5].style.display = 'none'

                          button[0].style.display = 'none'
                          button[1].style.display = 'none'
                          button[2].style.display = 'none'

                        })){}
                        
                        //Else - fim do jogo
                        else if(imagens[4].addEventListener('click', function(){
                            imagemErrada()
                        })){}

                  })){} 

                  //Else - palavra: bota
                  else if(imagens[3].addEventListener('click', function(){
                          imagemErrada()
                  })){}

          })){} 

          //Else - palavra: vaca
          else if(imagens[0].addEventListener('click', function(){
              imagemErrada()
          })){}
   

    
    
