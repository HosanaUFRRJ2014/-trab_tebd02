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