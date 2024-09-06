function pesquisar(){
    let section = document.getElementById('resultados-pesquisa')
    let resultado = '';
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toUpperCase();

    if(!campoPesquisa){
        section.innerHTML = "Nada encontrado. Digite algo para pesquisar"
        return
    }
    
    for(let item of dados){
        if(item.titulo.toUpperCase().includes(campoPesquisa) || item.descricao.toUpperCase().includes(campoPesquisa)
            || item.tags.toUpperCase().includes(campoPesquisa) ){
            resultado += `<div class="item-resultado">
                            <h2><a href=${item.link} target="_blank">${item.titulo}</a></h2>
                            <p class="descricao-meta">${item.descricao}</p>
                            <a href=${item.link} target="_blank" >mais sobre ${item.titulo}</a>
                        </div>`;             
        }
    }

    if(!resultado){
        resultado = "Nada foi encontrado";
    }
    section.innerHTML = resultado;
}
