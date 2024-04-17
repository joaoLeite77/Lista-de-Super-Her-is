

const grupoGrama = ["bulbasaur","venusaur","ivysaur"]
const grupoFogo = ["charmander","charmeleon","charizard"]


function carregarSuperHerois(){

    const requisicaoHttp = new XMLHttpRequest()
    requisicaoHttp.open("GET","https://akabab.github.io/superhero-api/api/all.json",false)
    requisicaoHttp.send()
    
    const resposta = JSON.parse(requisicaoHttp.responseText)
    const superherois = resposta

    for( let index = 0 ; index < superherois.length; index ++){
        const superherois = superherois[index]
        const id = index + 1
        superherois.imagem = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + id +".png"
        adicionarCardSuperherois(superherois)
    }
}

function adicionarCardSuperherois(superherois){

    const divCardElemento = document.createElement("div")
    divCardElemento.classList.add("card")

    const imagemElemento = document.createElement("img")
    imagemElemento.setAttribute("src", superherois.imagem)
    imagemElemento.style.width="90%"

    const textoElemento = document.createElement("h1")
    textoElemento.innerHTML = superherois.name

    if(grupoGrama.includes(superherois.name)){
        textoElemento.classList.add("grama")
    } else if(grupoFogo.includes(superherois.name)){
        textoElemento.classList.add("fogo")
    }
   
    const divElemento = document.getElementById("conteudo-superherois")

    divCardElemento.appendChild(imagemElemento)
    divCardElemento.appendChild(textoElemento)

    divElemento.appendChild(divCardElemento)

}
