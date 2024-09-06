function pesquisar(){
    let section = document.getElementById('resultados-pesquisa')
    let resultado = '';
    for(let item of dados){
        resultado += `<div class="item-resultado">
                    <h2><a href=${item.link} target="_blank">${item.titulo}</a></h2>
                    <p class="descricao-meta">${item.descricao}</p>
                    <a href=${item.link} target="_blank" >mais sobre ${item.titulo}</a>
                </div>`
    }
    section.innerHTML = resultado
}

