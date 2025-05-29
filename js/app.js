
    
    const apikey = '59ed8138';
    const formulario = document.querySelector(".formulario_pesquisa");
    formulario.onsubmit = (ev) =>{
        ev.preventDefault();
        
        const pesquisar = ev.target.pesquisar.value;
        if(pesquisar == ""){
            alert('Preencha o campo!');
            return;
}
        fetch(`https://www.omdbapi.com/?s=${pesquisar}&apikey=${apikey}`)
        .then(result => result.json())
        .then(json => carregaLista(json))
        const carregaLista = (json) => {
            const lista = document.querySelector(".lista")
            lista.innerHTML = "";
            
            if(json.Response == 'False'){
                alert('Nenhum Filme Encontrado');
                return
            }
            json.Search.forEach(element => {
                console.log(element)
                let item = document.createElement("div");
                item.classList.add("item");
                item.innerHTML = `<img src="${element.Poster}" /><h2 class ="title-filmes"> ${element.Title}</h2>`
                lista.appendChild(item);
            });
        }
    }
 