
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
                            <div class="mini-header">
                                <img src="${item.foto}" alt="">
                                <h2><a href=${item.link} target="_blank">${item.nome}</a></h2>  
                            </div>                            
                            <p class="descricao-meta">${item.descricao}</p>
                            
                            <iframe width="560" height="315" src="${item.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>`;             
        }
    }

    if(!resultado){
        resultado = "Nada foi encontrado";
    }
    section.innerHTML = resultado;
}
