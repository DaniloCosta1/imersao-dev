
console.log(dados);

let section = document.getElementById('resultados-pesquisa')

for(let i = 0; i <= dados.length; i++){
    section.innerHTML += `<div class="item-resultado">
                <h2><a href=${dados[i].link} target="_blank">${dados[i].titulo}</a></h2>
                <p class="descricao-meta">${dados[i].descricao}</p>
                <a href=${dados[i].link} target="_blank" >mais sobre ${dados[i].titulo}</a>
            </div>`
}

