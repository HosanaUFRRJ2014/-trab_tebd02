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

<table >
  <caption>Dados do ator</caption>
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

<h3>Ebibir dados dos filmes aqui</h3>
<!-- possível código java aqui para carregamento dos dados dos filmes -->
</body>
</html>