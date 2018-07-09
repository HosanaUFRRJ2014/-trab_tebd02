/**
 * 
 */
const postActorsList = (url = ``, data = {}) => {
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

postActorsList(`http://localhost:3030/ds/query`, "query=prefix foaf:<http://movieland.com/ufrrj/tebd/#> SELECT ?id ?nome ?Sobrenome WHERE {?actor foaf:actorId ?id . ?actor foaf:firstName ?nome . ?actor foaf:lastName ?Sobrenome . }")
.then(data => {
	console.log(data);
	resultados = data["results"];
	//binded = resultados["bindings"];
	//obj = binded["id"];
	//alert(JSON.stringify(binded));
	
	obj = resultados["bindings"][1].id.value;
	
	let exibicao = montarExibicaoDados(resultados["bindings"]);
	
	document.getElementById("lista").innerHTML = exibicao;
	
}) // JSON from `response.json()` call
.catch(error => console.log(error));


const montarExibicaoDados = (dados = ``) => {
	let dadosAexibir = "";
	for (i = 0; dados[i]!=null; i++) {
		dadosAexibir +=   "<a href=\"detalhesAtor.jsp#"+dados[i].id.value  +"\">";// + dados[i].id.value + " ";
		dadosAexibir +=   dados[i].nome.value+"</a>"+ "<br><br>";;
	//	dadosAexibir +=   dados[i].Sobrenome.value ;
	}
	
	return dadosAexibir;
}

