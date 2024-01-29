const caixaNomes = document.querySelector('#caixaCursos')
const novosCursos = document.getElementById('nomeCurso')
const btn_c = [...document.querySelectorAll('.times')]
const c1_2 = document.querySelector('#c1_2')
const cursos = ['Gleiton','joão','Eldina','Luan','Elisabete','Vinicio','Nadya','Ingrid']
const botaoSelecionado = document.getElementById('botaoselecionado')
const BotaoRemover = document.getElementById('botaoRemover')
const botaoAntes = document.getElementById('AdAntes')
const botaoDepois = document.getElementById('Addepois')

let posicao = 0

const tirarSelecao = () =>{
    const nomesSelecionados = [...document.querySelectorAll('.selecionado')]
    nomesSelecionados.map((upu,pos)=>{
        upu.classList.remove('selecionado')
    })
}

const criarNomes = (novosNomes) =>{
    const novoElemento = document.createElement('div')
    novoElemento.setAttribute('id','c' + posicao)
    novoElemento.setAttribute('class','times c1')
    novoElemento.innerHTML = novosNomes
    
    novoElemento.addEventListener('click',(evt)=>{
        tirarSelecao()
        evt.target.classList.toggle('selecionado')
    })
    return novoElemento


}

cursos.map((upu,pos)=>{
  const novoElemento = criarNomes(upu)  
  caixaNomes.appendChild(novoElemento)
  posicao++
    })

    const ReceberEvento = () =>{
       const  todosNomes = [...document.querySelectorAll('.selecionado')]
     return todosNomes[0]
            
    }

    botaoSelecionado.addEventListener('click',(evt)=>{
       const nomeClic = ReceberEvento()
       if(nomeClic == undefined){
       alert('[Erro] escolha um nome abaixo')
       }else{
       alert('o nome selecionado foi ' + ReceberEvento().innerHTML)
       }
       
    })
    BotaoRemover.addEventListener('click',(evt)=>{
       const nomeClic = ReceberEvento()
       if(nomeClic == undefined){
       alert('[Erro] escolha um nome abaixo')
       }else{
       
        nomeClic.remove()
       }
       
    })
    botaoAntes.addEventListener('click',(evt)=>{
        try{
            if(novosCursos.value!=""){
              const remElem = criarNomes(novosCursos.value)
              caixaNomes.insertBefore(remElem,ReceberEvento())
            }else{
                alert("digite um nome")
            }
          }catch(ex){
           
            alert('[Erro] escolha um nome abaixo para adicionar outro nome antes')
        }
    }) 
     botaoDepois.addEventListener('click',(evt)=>{
        try{
            if(novosCursos.value != ''){ 
            const remElem = criarNomes(novosCursos.value)
            caixaNomes.insertBefore(remElem,ReceberEvento().nextSibling)
            }else{
                alert('Digite um nome')
            }
       
        }catch(ex){
            alert('[Erro] escolha um nome abaixo para adicionar outro nome antes')
        }
    })



//  outras opções de busca de elementos
//  *parentNode
//  *childNodes[nodeNumber]
//  *firstChild
//  *NextSibling
//  *lastChild
//  *previousSibling