/**
 * 
 */

/****************************************/
//*****Endpoint para sistema de filmes
endpoint_sistema_filmes = `http://10.10.4.212:3030/filme_meu/query`;



//*****Dataset sistema de filmes
dataset_filmes = "<http://10.10.4.212:3030/actors/data/filme_meu>";

/***************************************/

prefixo = "prefix foaf:   <http://movieland.com/ufrrj/tebd/#> ";

//*****Variáveis para requisições internas
endpoint_atores = `http://localhost:3030/ds/query`;
dataset_atores = "<http://localhost:3030/actors/data/actors>";
dataset_atores_filmes = "<http://localhost:3030/actors/data/actors_movies>";

const post = (url = ``, data = {}) => {
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
	post(endpoint_atores, "query=" + prefixo + " SELECT ?id ?nome ?Sobrenome " 
			+" WHERE {?actor foaf:actorId ?id . ?actor foaf:firstName ?nome . ?actor foaf:lastName ?Sobrenome . }")
	.then(data => {
		console.log(data);
		resultados = data["results"];

		//recuperando nome do ator do json
		let exibicao = montarExibicaoNomeAtor(resultados["bindings"]);
		
		document.getElementById("lista").innerHTML = exibicao;
		
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
	}
	
	return dadosAexibir;
}

const exibirDetalhesAtor = () => {
	
	//Recuperando id de ator contido na url da página para recuperar seus dados
	let urlPagina = window.location.href;
	let idAtor = urlPagina.split("#")[1];
	
	post(endpoint_atores, "query=" + prefixo + " SELECT ?id ?nome ?Sobrenome"
			+"  WHERE {?actor foaf:actorId ?id . ?actor foaf:firstName ?nome . ?actor foaf:lastName ?Sobrenome . FILTER (?id = \"" 
			+ idAtor +"\") }")
	.then(data => {
		console.log(data);
		resultados = data["results"];
		
		montarExibicaoDadosAtor(resultados["bindings"][0]);

		
	}) // JSON from `response.json()` call
	.catch(error => console.log(error));
	
	//listando filmes que o ator participa:
	post(endpoint_atores, "query=" + prefixo + " SELECT ?idAtor ?idFilme  "
			+ " WHERE  {  ?actor_movie foaf:movieId ?idFilme .  ?actor_movie foaf:actorId ?idAtor . FILTER(?idAtor = \""
			+ idAtor + "\") }")
	.then(data => {
		console.log(data);
		resultados = data["results"];

		//recuperando nome do ator do json
		let exibicao = montarExibicaoNomeFilme(resultados["bindings"]);
		
		document.getElementById("filmes").innerHTML = exibicao;
		
	}) // JSON from `response.json()` call
	.catch(error => console.log(error));	
}


const montarExibicaoNomeFilme = (dados = ``) => {
	let dadosAexibir = "";
	
	
	for (i = 0; dados[i]!=null; i++) {
		carregarNomeFilme(dados[i].idFilme.value);
		dadosAexibir +=   "<a href=\"detalhesFilme.jsp#"+dados[i].idFilme.value  +"\" id=filme"+dados[i].idFilme.value +"></a>";
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


const carregarNomeFilme = (idFilme = ``) => {
	let nomeFilme = "";
	post(endpoint_sistema_filmes,
			"query=" + prefixo + "  SELECT ?idFilme ?nomeFilme   WHERE  {   ?movie foaf:movieId ?idFilme .  ?movie foaf:title ?nomeFilme FILTER(?idFilme = \"" + idFilme +"\") }")
			.then(data => {

				//setando o nome de dado filme no link respectivo de seu id
				resultados = data["results"];
				nomeFilme =  resultados["bindings"][0].nomeFilme.value;				
				document.getElementById("filme"+idFilme).innerHTML = nomeFilme;
	
			})
			.catch(error => console.log(error));

	
}

const exibirDetalhesFilmes = () => {
	//Recuperando id do filme contido na url da página para recuperar seus dados
	let urlPagina = window.location.href;
	let idFilme = urlPagina.split("#")[1];
	
	
	
	post(endpoint_sistema_filmes, "query= " + prefixo + 
			" SELECT ?idFilme ?nomeFilme ?descricao ?idLinguagem ?duracaoAluguel " +
			"?custoSubstituicao ?anoLancamento ?duracao ?ultimaAtualizacao ?classificacao ?taxaAluguel ?maisInformacoes ?especial " +
			
			"  WHERE {?movie foaf:movieId ?idFilme .  ?movie foaf:title ?nomeFilme . " +
			"?movie foaf:description ?descricao . ?movie foaf:languageId ?idLinguagem . ?movie foaf:rentalDuration " +
		    "?duracaoAluguel . ?movie foaf:replacementCost ?custoSubstituicao . ?movie foaf:releaseYear ?anoLancamento . " +
			"?movie foaf:length ?duracao . ?movie foaf:lastUpdate ?ultimaAtualizacao . ?movie foaf:rating ?classificacao . " +
			"?movie foaf:rentalRate ?taxaAluguel . ?movie foaf:fulltext ?maisInformacoes . ?movie foaf:specialFeatures ?especial . " +
			"FILTER (?idFilme = \"" + idFilme +"\") }")
	.then(data => {
		console.log(data);
		resultados = data["results"];
		
		montarExibicaoDadosFilme(resultados["bindings"][0]);

		
	}) // JSON from `response.json()` call
	.catch(error => console.log(error));
	
}

const montarExibicaoDadosFilme = (dados = ``) => {
	document.getElementById("id").innerHTML = dados.idFilme.value;
	document.getElementById("nomeFilme").innerHTML = dados.nomeFilme.value;
	document.getElementById("descricao").innerHTML = dados.descricao.value;
	document.getElementById("idLinguagem").innerHTML = dados.idLinguagem.value;
	document.getElementById("duracaoAluguel").innerHTML = dados.duracaoAluguel.value;
	document.getElementById("custoSubstituicao").innerHTML = dados.custoSubstituicao.value;
	document.getElementById("anoLancamento").innerHTML = dados.anoLancamento.value;
	document.getElementById("duracao").innerHTML = dados.duracao.value;
	document.getElementById("ultimaAtualizacao").innerHTML = dados.ultimaAtualizacao.value;
	document.getElementById("classificacao").innerHTML = dados.classificacao.value;
	document.getElementById("taxaAluguel").innerHTML = dados.taxaAluguel.value;
	document.getElementById("maisInformacoes").innerHTML = dados.maisInformacoes.value;
	document.getElementById("especial").innerHTML = dados.especial.value;

}
