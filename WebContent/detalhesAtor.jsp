<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Detalhes do Ator</title>
<script src="./js/requisicao.js"></script>
</head>
<body onload=exibirDetalhesAtor()>
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
 
<input value="PÁGINA INICIAL" class="Botao BotaoPequeno BotaoTextoPequeno BotaoPreto" type="button" onclick="location.href='index.jsp'">
<br/><br/>

<h3>Dados do ator:</h3>
<table >

    <td>ID: </td>
    <td id="id"></td>
  </tr>
  <tr>
    <td>Nome: </td>
    <td id="nome"></td>
  </tr>
   <tr>
    <td>Sobrenome: </td>
    <td id="sobrenome"></td>
  </tr>
</table>

<h4>Filmes que o artista participou:</h4>
<p id="filmes"></p>
	
	
<!-- possível código java aqui para carregamento dos dados dos filmes -->
</body>
</html>
