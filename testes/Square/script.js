function onOver(div){
    div.style.backgroundColor = "red"
}

function onOut(div){
    div.style.backgroundColor = "blue"
}

/////////////////////////////////////////////////////////////////////////////////////////////
/* FORMA SIMPLIFICADA DE FAZER (APENAS MUDAR A FUNÇÃO NA DIV)

function change(div){
    div.style.backgroundColor = "blue"
    div.setAttribute("onmouseover", "this.style.backgroundColor = 'red'")
}
*/
/////////////////////////////////////////////////////////////////////////////////////////////
/*
let h1 = document.querySelector("#titulo")

// h1.onclick = mudarTxt    // OUTRA FORMA

h1.addEventListener("mouseover", mudarTxt) //ADICIONANDO EVENTOS DIRETO NO JS, AO INVES DE SER NO HTML
h1.addEventListener("mouseout", mouseFora)

function mudarTxt(){
    this.innerHTML = "Novo Texto"
}

function mouseFora(){
    this.innerHTML = "Mouse Fora"
}
*/

let h1 = document.getElementsByTagName("h1")

for (let h of h1){
    console.log(h)

    h.addEventListener("click", qop)
}

function qop(e){
    let t = e.target
    console.log(t.parentElement)
}

