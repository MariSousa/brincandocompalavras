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

    let palavraCerta = ['bota', 'faca', 'pato', 'saco', 'casa', 'doce', 'roda', 'bote', 'pés', 'dança']
    
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
        palavra.innerHTML = `A palavra é: ${palavraCerta[0]}`
        
        //escutar pronúncia
        pronuncia.innerHTML = 'Escute a pronúncia da palavra apertando no ícone de play logo abaixo.'
        audioPalavras[0].style.display = 'block'

        //display none
        btnComecar.style.display = 'none'
        tituloPrincipal.style.display = 'none'
        figure.style.display = 'none'
    
            //Completar frase
            completarFrase.innerHTML = `<strong> Complete as frases: </strong> <br><br> Eu vesti minha ... e ela estava apertada. <br> Eu preciso comprar uma ... porque vai chover.`
            inputCompletarFrase.style.display = 'block'
            verificarFrase.style.display = 'block'

                //validação da frase
                verificarFrase.addEventListener('click', function(){
                    resCompletarFrase.innerHTML = ``

                    if(inputCompletarFrase.value == palavraCerta[0]){                    
                    resCompletarFrase.innerHTML = `Muito bem! Você acertou.`

                    } else if(inputCompletarFrase.value != palavraCerta[0]) {                    
                    resCompletarFrase.innerHTML = 'Campo inválido ou palavra errada.'
                    }
                })
    
        //escolher imagens
        escolhaImagem.innerHTML = `Qual das imagens é a palavra destacada?`
        imagens[1].style.display = 'inline-block'
        imagens[0].style.display = 'inline-block' 
    }

//chamadas
    //chamada do botão comecar
    btnComecar.addEventListener('click', function(){
        comecar()
        gravarAudio()
    })

      //validações
      //validando se a imagem bota foi pressionada
       if(imagens[1].addEventListener('click', function(){

            //se a imagem bota foi pressionada, entao:
                //mensagem de acerto
                imagemCerta()

                //mudar palavra: faca
                palavra.innerHTML = `A palavra é: ${palavraCerta[1]}`

                //escutar pronúncia
                pronuncia.innerHTML = 'Escute a pronúncia da palavra apertando no ícone de play logo abaixo.'
                audioPalavras[0].style.display = 'none'
                audioPalavras[1].style.display = 'block'

                //limpando campo da palavra e resultado    
                inputCompletarFrase.value = ''
                inputCompletarFrase.focus()
                resCompletarFrase.innerHTML = ''

                //as imagens some
                imagens[1].style.display = 'none'
                imagens[0].style.display = 'none' 

                //novas imagens aparecem
                escolhaImagem.innerHTML = `Qual das imagens é a palavra destacada?`
                imagens[2].style.display = 'inline-block' 
                imagens[3].style.display = 'inline-block'       
                
                //Completar frase
                completarFrase.innerHTML = `<strong> Complete as frases: </strong> <br><br> Me cortei com a .... <br> Cuidado para não se machucar com a ....`
                inputCompletarFrase.style.display = 'block'
                verificarFrase.style.display = 'block'

                    //validação da frase
                    verificarFrase.addEventListener('click', function(){

                        if(inputCompletarFrase.value == palavraCerta[1]){                    
                        resCompletarFrase.innerHTML = `Muito bem! Você acertou.`

                        } else if(inputCompletarFrase.value != palavraCerta[1]) {                    
                        resCompletarFrase.innerHTML = 'Campo inválido ou palavra errada.'
                        }
                    })

                
            //senão:
       })){} else if (imagens[0].addEventListener('click', function(){
                imagemErrada()
       })){}


       //validando se a imagem faca foi pressionada
       if(imagens[2].addEventListener('click', function(){

        //se a imagem faca foi pressionada, entao:
            //mensagem de acerto
            imagemCerta()

            //mudar palavra: pato
            palavra.innerHTML = `A palavra é: ${palavraCerta[2]}`

             //escutar pronúncia
             pronuncia.innerHTML = 'Escute a pronúncia da palavra apertando no ícone de play logo abaixo.'
             audioPalavras[1].style.display = 'none'
             audioPalavras[2].style.display = 'block'

             //limpando campo da palavra e resultado    
             inputCompletarFrase.value = ''
             inputCompletarFrase.focus()
             resCompletarFrase.innerHTML = ''

            //as imagens some
            imagens[2].style.display = 'none'
            imagens[3].style.display = 'none' 

            //novas imagens aparecem
            escolhaImagem.innerHTML = `Qual das imagens é a palavra destacada?`
            imagens[4].style.display = 'inline-block'
            imagens[5].style.display = 'inline-block'
            
             //Completar frase
             completarFrase.innerHTML = `<strong> Complete as frases: </strong> <br><br> Tenho medo de ... pois eles bicam. <br> O ... estava nadando no lago.`
             inputCompletarFrase.style.display = 'block'
             verificarFrase.style.display = 'block'

                 //validação da frase
                 verificarFrase.addEventListener('click', function(){

                     if(inputCompletarFrase.value == palavraCerta[2]){                    
                     resCompletarFrase.innerHTML = `Muito bem! Você acertou.`

                     } else if(inputCompletarFrase.value != palavraCerta[2]) {                    
                     resCompletarFrase.innerHTML = 'Campo inválido ou palavra errada.'
                     }
                 })

            
        //senão:
        })){} else if (imagens[3].addEventListener('click', function(){
                    imagemErrada()
        })){}


        //valindo se a imagem do pato foi pressionada
        if(imagens[5].addEventListener('click', function(){

            //se a imagem pato foi pressionada, entao:
                //mensagem de acerto
                imagemCerta()
    
                //mudar palavra: saco
                palavra.innerHTML = `A palavra é: ${palavraCerta[3]}`
    
                 //escutar pronúncia
                 pronuncia.innerHTML = 'Escute a pronúncia da palavra apertando no ícone de play logo abaixo.'
                 audioPalavras[2].style.display = 'none'
                 audioPalavras[3].style.display = 'block'
    
                //as imagens some
                imagens[4].style.display = 'none'
                imagens[5].style.display = 'none'
                
                //limpando campo da palavra e resultado    
                inputCompletarFrase.value = ''
                inputCompletarFrase.focus()
                resCompletarFrase.innerHTML = ''
    
                //novas imagens aparecem
                escolhaImagem.innerHTML = `Qual das imagens é a palavra destacada?`
                imagens[6].style.display = 'inline-block'
                imagens[7].style.display = 'inline-block'
                
                 //Completar frase
                 completarFrase.innerHTML = `<strong> Complete as frases: </strong> <br><br>O ... de dinheiro está cheio. <br> Coloque o doce dentro do ....`
                 inputCompletarFrase.style.display = 'block'
                 verificarFrase.style.display = 'block'
    
                     //validação da frase
                     verificarFrase.addEventListener('click', function(){
    
                         if(inputCompletarFrase.value == palavraCerta[3]){                    
                         resCompletarFrase.innerHTML = `Muito bem! Você acertou.`
    
                         } else if(inputCompletarFrase.value != palavraCerta[3]) {                    
                         resCompletarFrase.innerHTML = 'Campo inválido ou palavra errada.'
                         }
                     })
    
                
            //senão:
            })){} else if (imagens[4].addEventListener('click', function(){
                        imagemErrada()
        })){}


        //validando se a imagem do saco foi pressionada
        if(imagens[6].addEventListener('click', function(){

            //se a imagem saco foi pressionada, entao:
                //mensagem de acerto
                imagemCerta()
    
                //mudar palavra: casa
                palavra.innerHTML = `A palavra é: ${palavraCerta[4]}`
    
                 //escutar pronúncia
                 pronuncia.innerHTML = 'Escute a pronúncia da palavra apertando no ícone de play logo abaixo.'
                 audioPalavras[3].style.display = 'none'
                 audioPalavras[4].style.display = 'block'
    
                //as imagens some
                imagens[6].style.display = 'none'
                imagens[7].style.display = 'none'
                
                //limpando campo da palavra e resultado    
                inputCompletarFrase.value = ''
                inputCompletarFrase.focus()
                resCompletarFrase.innerHTML = ''
    
                //novas imagens aparecem
                escolhaImagem.innerHTML = `Qual das imagens é a palavra destacada?`
                imagens[8].style.display = 'inline-block'
                imagens[9].style.display = 'inline-block'
                
                 //Completar frase
                 completarFrase.innerHTML = `<strong> Complete as frases: </strong> <br><br>Preciso limpar minha .... <br> Pintei minha ... ontem de banco.`
                 inputCompletarFrase.style.display = 'block'
                 verificarFrase.style.display = 'block'
    
                     //validação da frase
                     verificarFrase.addEventListener('click', function(){
    
                         if(inputCompletarFrase.value == palavraCerta[4]){                    
                         resCompletarFrase.innerHTML = `Muito bem! Você acertou.`
    
                         } else if(inputCompletarFrase.value != palavraCerta[4]) {                    
                         resCompletarFrase.innerHTML = 'Campo inválido ou palavra errada.'
                         }
                     })    
                
            //senão:
            })){} else if (imagens[7].addEventListener('click', function(){
                        imagemErrada()
        })){}


         //validando se a imagem do casa foi pressionada
         if(imagens[9].addEventListener('click', function(){

            //se a imagem casa foi pressionada, entao:
                //mensagem de acerto
                imagemCerta()
    
                //mudar palavra: doce
                palavra.innerHTML = `A palavra é: ${palavraCerta[5]}`
    
                 //escutar pronúncia
                 pronuncia.innerHTML = 'Escute a pronúncia da palavra apertando no ícone de play logo abaixo.'
                 audioPalavras[4].style.display = 'none'
                 audioPalavras[5].style.display = 'block'
    
                //as imagens some
                imagens[8].style.display = 'none'
                imagens[9].style.display = 'none'
                
                //limpando campo da palavra e resultado    
                inputCompletarFrase.value = ''
                inputCompletarFrase.focus()
                resCompletarFrase.innerHTML = ''
    
                //novas imagens aparecem
                escolhaImagem.innerHTML = `Qual das imagens é a palavra destacada?`
                imagens[10].style.display = 'inline-block'
                imagens[11].style.display = 'inline-block'
                
                 //Completar frase
                 completarFrase.innerHTML = `<strong> Complete as frases: </strong> <br><br>Coloquei o ... dentro do saco. <br> Estou com vontade de comer um ....`
                 inputCompletarFrase.style.display = 'block'
                 verificarFrase.style.display = 'block'
    
                     //validação da frase
                     verificarFrase.addEventListener('click', function(){
    
                         if(inputCompletarFrase.value == palavraCerta[5]){                    
                         resCompletarFrase.innerHTML = `Muito bem! Você acertou.`
    
                         } else if(inputCompletarFrase.value != palavraCerta[5]) {                    
                         resCompletarFrase.innerHTML = 'Campo inválido ou palavra errada.'
                         }
                     })    
                
            //senão:
            })){} else if (imagens[8].addEventListener('click', function(){
                        imagemErrada()
        })){}


        //validando se a imagem do doce foi pressionada
        if(imagens[11].addEventListener('click', function(){

            //se a imagem doce foi pressionada, entao:
                //mensagem de acerto
                imagemCerta()
    
                //mudar palavra: roda
                palavra.innerHTML = `A palavra é: ${palavraCerta[6]}`
    
                 //escutar pronúncia
                 pronuncia.innerHTML = 'Escute a pronúncia da palavra apertando no ícone de play logo abaixo.'
                 audioPalavras[5].style.display = 'none'
                 audioPalavras[6].style.display = 'block'
    
                //as imagens some
                imagens[10].style.display = 'none'
                imagens[11].style.display = 'none'
                
                //limpando campo da palavra e resultado    
                inputCompletarFrase.value = ''
                inputCompletarFrase.focus()
                resCompletarFrase.innerHTML = ''
    
                //novas imagens aparecem
                escolhaImagem.innerHTML = `Qual das imagens é a palavra destacada?`
                imagens[12].style.display = 'inline-block'
                imagens[13].style.display = 'inline-block'
                
                 //Completar frase
                 completarFrase.innerHTML = `<strong> Complete as frases: </strong> <br><br>A ... da minha bicicleta furou. <br> Preciso de uma ... para minha moto.`
                 inputCompletarFrase.style.display = 'block'
                 verificarFrase.style.display = 'block'
    
                     //validação da frase
                     verificarFrase.addEventListener('click', function(){
    
                         if(inputCompletarFrase.value == palavraCerta[6]){                    
                         resCompletarFrase.innerHTML = `Muito bem! Você acertou.`
    
                         } else if(inputCompletarFrase.value != palavraCerta[6]) {                    
                         resCompletarFrase.innerHTML = 'Campo inválido ou palavra errada.'
                         }
                     })    
                
            //senão:
            })){} else if (imagens[10].addEventListener('click', function(){
                        imagemErrada()
        })){}


        //validando se a imagem do roda foi pressionada
        if(imagens[12].addEventListener('click', function(){

            //se a imagem roda foi pressionada, entao:
                //mensagem de acerto
                imagemCerta()
    
                //mudar palavra: bote
                palavra.innerHTML = `A palavra é: ${palavraCerta[7]}`
    
                 //escutar pronúncia
                 pronuncia.innerHTML = 'Escute a pronúncia da palavra apertando no ícone de play logo abaixo.'
                 audioPalavras[6].style.display = 'none'
                 audioPalavras[7].style.display = 'block'
    
                //as imagens some
                imagens[12].style.display = 'none'
                imagens[13].style.display = 'none'
                
                //limpando campo da palavra e resultado    
                inputCompletarFrase.value = ''
                inputCompletarFrase.focus()
                resCompletarFrase.innerHTML = ''
    
                //novas imagens aparecem
                escolhaImagem.innerHTML = `Qual das imagens é a palavra destacada?`
                imagens[14].style.display = 'inline-block'
                imagens[15].style.display = 'inline-block'
                
                 //Completar frase
                 completarFrase.innerHTML = `<strong> Complete as frases: </strong> <br><br>O ... está navegando no lago. <br> Andei de ... no mar.`
                 inputCompletarFrase.style.display = 'block'
                 verificarFrase.style.display = 'block'
    
                     //validação da frase
                     verificarFrase.addEventListener('click', function(){
    
                         if(inputCompletarFrase.value == palavraCerta[7]){                    
                         resCompletarFrase.innerHTML = `Muito bem! Você acertou.`
    
                         } else if(inputCompletarFrase.value != palavraCerta[7]) {                    
                         resCompletarFrase.innerHTML = 'Campo inválido ou palavra errada.'
                         }
                     })    
                
            //senão:
            })){} else if (imagens[13].addEventListener('click', function(){
                        imagemErrada()
        })){}


        //validando se a imagem do bote foi pressionada
        if(imagens[14].addEventListener('click', function(){

            //se a imagem bote foi pressionada, entao:
                //mensagem de acerto
                imagemCerta()
    
                //mudar palavra: pés
                palavra.innerHTML = `A palavra é: ${palavraCerta[8]}`
    
                 //escutar pronúncia
                 pronuncia.innerHTML = 'Escute a pronúncia da palavra apertando no ícone de play logo abaixo.'
                 audioPalavras[7].style.display = 'none'
                 audioPalavras[8].style.display = 'block'
    
                //as imagens some
                imagens[14].style.display = 'none'
                imagens[15].style.display = 'none'
                
                //limpando campo da palavra e resultado    
                inputCompletarFrase.value = ''
                inputCompletarFrase.focus()
                resCompletarFrase.innerHTML = ''
    
                //novas imagens aparecem
                escolhaImagem.innerHTML = `Qual das imagens é a palavra destacada?`
                imagens[16].style.display = 'inline-block'
                imagens[17].style.display = 'inline-block'
                
                 //Completar frase
                 completarFrase.innerHTML = `<strong> Complete as frases: </strong> <br><br>Meus ... estão gelados. <br> Preciso de uma meia para colocar nos ....`
                 inputCompletarFrase.style.display = 'block'
                 verificarFrase.style.display = 'block'
    
                     //validação da frase
                     verificarFrase.addEventListener('click', function(){
    
                         if(inputCompletarFrase.value == palavraCerta[8]){                    
                         resCompletarFrase.innerHTML = `Muito bem! Você acertou.`
    
                         } else if(inputCompletarFrase.value != palavraCerta[8]) {                    
                         resCompletarFrase.innerHTML = 'Campo inválido ou palavra errada.'
                         }
                     })    
                
            //senão:
            })){} else if (imagens[15].addEventListener('click', function(){
                        imagemErrada()
        })){}
       

         //validando se a imagem do pés foi pressionada
         if(imagens[17].addEventListener('click', function(){

            //se a imagem pés foi pressionada, entao:
                //mensagem de acerto
                imagemCerta()
    
                //mudar palavra: dança
                palavra.innerHTML = `A palavra é: ${palavraCerta[9]}`
    
                 //escutar pronúncia
                 pronuncia.innerHTML = 'Escute a pronúncia da palavra apertando no ícone de play logo abaixo.'
                 audioPalavras[8].style.display = 'none'
                 audioPalavras[9].style.display = 'block'
    
                //as imagens some
                imagens[16].style.display = 'none'
                imagens[17].style.display = 'none'
                
                //limpando campo da palavra e resultado    
                inputCompletarFrase.value = ''
                inputCompletarFrase.focus()
                resCompletarFrase.innerHTML = ''
    
                //novas imagens aparecem
                escolhaImagem.innerHTML = `Qual das imagens é a palavra destacada?`
                imagens[18].style.display = 'inline-block'
                imagens[19].style.display = 'inline-block'
                
                 //Completar frase
                 completarFrase.innerHTML = `<strong> Complete as frases: </strong> <br><br>Eu gosto de ... de salão. <br> Quando estou com meus amigos, sempre tem ... com muita música.`
                 inputCompletarFrase.style.display = 'block'
                 verificarFrase.style.display = 'block'
    
                     //validação da frase
                     verificarFrase.addEventListener('click', function(){
    
                         if(inputCompletarFrase.value == palavraCerta[9]){                    
                         resCompletarFrase.innerHTML = `Muito bem! Você acertou.`
    
                         } else if(inputCompletarFrase.value != palavraCerta[9]) {                    
                         resCompletarFrase.innerHTML = 'Campo inválido ou palavra errada.'
                         }
                     })    
                
            //senão:
            })){} else if (imagens[16].addEventListener('click', function(){
                        imagemErrada()
        })){}


         //validando se a imagem da dança foi pressinada
         if(imagens[19].addEventListener('click', function(){
            imagemCerta()
            palavra.innerHTML = `Muito bem! Você conseguiu terminar o Jogo. Parabéns!`
            gravaraudio.innerHTML = ''
            escolhaImagem.innerHTML = ''
            pronuncia.innerHTML = '' 

            completarFrase.innerHTML = ``
            inputCompletarFrase.style.display = 'none'
            verificarFrase.style.display = 'none'
            resCompletarFrase.innerHTML = ''

            audioPalavras[9].style.display = 'none'

            imagens[19].style.display = 'none'
            imagens[18].style.display = 'none'

            button[0].style.display = 'none'
            button[1].style.display = 'none'
            button[2].style.display = 'none'

          })){} else if(imagens[18].addEventListener('click', function(){
              imagemErrada()
          })){}