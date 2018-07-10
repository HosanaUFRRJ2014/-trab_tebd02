<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Detalhes do Ator</title>
<script src="./js/requisicao.js"></script>
<link rel="stylesheet" type="text/css" href="./css/base.css"></link>
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

<style>
.Botao{
text-align: center;
font-family: 'Trebuchet MS';
border-radius: 5px;
box-shadow: 0px 1px 0px 0px #d6d6d6;
vertical-align: middle;
}
 
.BotaoPequeno{
width: auto;
overflow: hidden;
padding: 5px 15px 5px 15px;
}
.BotaoTextoPequeno{
font-size: 14px;
}

.BotaoPreto{
color: #ffffff;
border: 1px solid #111111;
text-decoration:none;
text-shadow: 0px 1px 0px #333333;
background: linear-gradient(to bottom, #666666 -50%, #111111 100%) repeat scroll 0% 0% transparent;
}
.BotaoPreto:hover{
color: #f9f9f9;
border: 1px solid #666666;
background: linear-gradient(to bottom, #111111 -50%, #666666 100%) repeat scroll 0% 0% transparent;
}
</style>
 
<input value="FILMES" class="Botao BotaoPequeno BotaoTextoPequeno BotaoPreto" type="button" onclick="location.href='detalhesAtor.jsp'">
<br/><br/>
</html>