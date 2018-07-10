<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Detalhes do Ator</title>
<script src="./js/requisicao.js"></script>
</head>
<body onload=exibirDetalhesFilmes()>

<h3>Dados Oriundos do Sistema de Filmes:</h3>
<table >
 <tr>
    <td>ID: </td>
    <td id="id"></td>
  </tr>
  <tr>
    <td>Título: </td>
    <td id="nomeFilme"></td>
  </tr>
  <tr>
    <td>Descrição: </td>
    <td id="descricao"></td>
  </tr>
   <tr>
    <td>IdLinguagem: </td>
    <td id="idLinguagem"></td>
  </tr>
  <tr>
    <td>Duração do aluguel: </td>
    <td id="duracaoAluguel"></td>
  </tr>
  <tr>
    <td>Custo Substituição: </td>
    <td id="custoSubstituicao"></td>
  </tr>
  <tr>
    <td>Ano Lançamento: </td>
    <td id="anoLancamento"></td>
  </tr>
  <tr>
    <td>Duração: </td>
    <td id="duracao"></td>
  </tr>
  <tr>
    <td>Última atualização: </td>
    <td id="ultimaAtualizacao"></td>
  </tr>
    <tr>
    <td>Classificação: </td>
    <td id="classificacao"></td>
  </tr>
    <tr>
    <td>Taxa de aluguel: </td>
    <td id="taxaAluguel"></td>
  </tr>
    <tr>
    <td>Mais informações: </td>
    <td id="maisInformacoes"></td>
  </tr>
      <tr>
  <td>Especial: </td>
    <td id="especial"></td>
  </tr>
</table>

</body>
</html>