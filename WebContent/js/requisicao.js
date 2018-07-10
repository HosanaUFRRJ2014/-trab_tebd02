/**
 * 
 */

endpoint_atores = `http://localhost:3030/actors/query`;
dataset_atores = "<http://localhost:3030/actors/data/actors>";
dataset_atores_filmes = "<http://localhost:3030/actors/data/actors_movies>";

const postActors = (url = ``, data = {}) => {
  return fetch(url, {
      method: "POST",
      headers: {
           "Content-Type": "application/x-www-form-urlencoded",
      },
      body: data, // body data type must match "Content-Type" header
  })
  .then(response => response.json())
  .catch(error => console.log(`Fetch Error =\n`, error));
};

listarAtores = () => {
	postActors(endpoint_atores, "query=prefix foaf:<http://movieland.com/ufrrj/tebd/#> SELECT ?id ?nome ?Sobrenome FROM "+ dataset_atores +" WHERE {?actor foaf:actorId ?id . ?actor foaf:firstName ?nome . ?actor foaf:lastName ?Sobrenome . }")
	.then(data => {
		console.log(data);
		resultados = data["results"];

		//recuperando nome do ator do json
		let exibicao = montarExibicaoNomeAtor(resultados["bindings"]);
		
		document.getElementById("lista").innerHTML = exibicao;
		
	}) // JSON from `response.json()` call
	.catch(error => console.log(error));	
	
}

listarFilmes = () => {
	
}



const exibirDetalhesAtor = () => {
	
	//Recuperando id de ator contido na url da página para recuperar seus dados
	let urlPagina = window.location.href;
	let idAtor = urlPagina.split("#")[1];
	
	postActors(endpoint_atores, "query=prefix foaf:<http://movieland.com/ufrrj/tebd/#> SELECT ?id ?nome ?Sobrenome FROM "+ dataset_atores +"  WHERE {?actor foaf:actorId ?id . ?actor foaf:firstName ?nome . ?actor foaf:lastName ?Sobrenome . FILTER (?id = \"" + idAtor +"\") }")
	.then(data => {
		console.log(data);
		resultados = data["results"];
		
		montarExibicaoDadosAtor(resultados["bindings"][0]);

		
	}) // JSON from `response.json()` call
	.catch(error => console.log(error));
	
	//listando filmes que o ator participa:
	postActors(endpoint_atores, "query=prefix foaf:   <http://movieland.com/ufrrj/tebd/#>  SELECT ?idAtor ?idFilme  FROM " + dataset_atores_filmes + " WHERE  {  ?actor_movie foaf:movieId ?idFilme .  ?actor_movie foaf:actorId ?idAtor . FILTER(?idAtor = \""+ idAtor + "\") }")
	.then(data => {
		console.log(data);
		resultados = data["results"];

		//recuperando nome do ator do json
		let exibicao = montarExibicaoFilmes(resultados["bindings"]);
		
		document.getElementById("filmes").innerHTML = exibicao;
		
	}) // JSON from `response.json()` call
	.catch(error => console.log(error));	
}



const montarExibicaoNomeAtor= (dados = ``) => {
	let dadosAexibir = "";
	
	//ordenando os objetos dos atores em ordem alfabética
	dados.sort(function(a, b){
	    if(a.nome.value < b.nome.value) return -1;
	    if(a.nome.value > b.nome.value) return 1;
	    return 0;
	});
	
	//exibindo apenas o primeiro no com link para os detalhes. Id para diferenciar
	for (i = 0; dados[i]!=null; i++) {
		dadosAexibir +=   "<a href=\"detalhesAtor.jsp#"+dados[i].id.value  +"\">";// + dados[i].id.value + " ";
		dadosAexibir +=   dados[i].nome.value+"</a>"+ "<br><br>";
	//	dadosAexibir +=   dados[i].Sobrenome.value ;
	}
	
	return dadosAexibir;
}

const montarExibicaoFilmes = (dados = ``) => {
	let dadosAexibir = "";
	//exibindo apenas o primeiro no com link para os detalhes. Id para diferenciar
	for (i = 0; dados[i]!=null; i++) {
		dadosAexibir +=   "<a href=\"detalhesFilme.jsp#"+dados[i].idFilme.value  +"\">" + dados[i].idFilme.value + "</a>";
		if(dados[i+1] == null)
			dadosAexibir += ".";
		else
			dadosAexibir += ", ";
	}
	
	return dadosAexibir;
}

const montarExibicaoDadosAtor = (dados = ``) => {
	document.getElementById("id").innerHTML = dados.id.value;
	document.getElementById("nome").innerHTML = dados.nome.value;
	document.getElementById("sobrenome").innerHTML = dados.Sobrenome.value;
}
