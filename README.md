## Introdução:

Este é um trabalho que consiste num sistema de listagem de atores. Esse sistema se comunica com um sistema de listagem de filmes. Para a comunicação, são usados RDFs e uma ontologia comum a esses sistemas foi definida. O framework [Apache Jena](http://jena.apache.org/index.html) foi usado para a manipulação dos componentes da aplicação.  

## Pré Requisitos:

### Instalar Java JDK 1.8, caso não possua. 

Tenha em sua máquina alguma versão do Java JDK 8 para que o Maven funcione corretamente. Para saber qual a versão possui, abra o terminal do computador e digite:

    javac -version
    java -version

Se algo relacionado a openJDK aparecer no seu sistema ou a versão de Java não foi a 1.8.x, será necessário configurar. Para tal, acesse o [site da Oracle](http://www.oracle.com/technetwork/pt/java/javase/downloads/jdk8-downloads-2133151.html) e escolha uma versão para baixar. Este tutorial foi construído com base no Java JDK 1.8.0_171. Após o Download, siga as intruções de [como configurar o Java JDK corretamente](https://www.ubuntudicas.com.br/2015/11/instalando-java-da-maneira-correta-no-ubuntu-e-linuxmint/), eliminando apenas o passo de baixar diretamente pelo terminal. Não se esqueça de, antes de executar qualquer um dos comandos, trocar a versão fornecida no site pela versão que você baixou.


### Instalar a IDE Eclipse para Java EE Developers
Esse tutorial foi construido com base no [Eclipse Neon.2](http://www.eclipse.org/downloads/packages/release/Neon/2), mas a aplicação deve funcionar perfeitamente no [Eclipse Oxigen](http://www.eclipse.org/downloads/packages/release/Oxygen/3A).
**Obs:** Para este projeto, sempre mantenha o seu Eclipse na perspectiva Java EE.

### Adicionar o servidor Tomcat 8.5.x ao Eclipse
A aplicação usa Tomcat 8.5.32, que pode ser baixado [aqui](http://mirror.nbtelecom.com.br/apache/tomcat/tomcat-8/v8.5.32/bin/apache-tomcat-8.5.32.tar.gz). Outras versões podem ser encontradas no [site do Apache Tomcat](https://tomcat.apache.org/download-80.cgi).

- Na aba *Servers*, opte por criar um novo servidor, caso não possua nenhum Tomcat 8.5.x presente.
- Ao invés de baixar do site, aponte para a pasta do Tomcat já descompactada e baixada anteriormente.
- *Nota:* Não se esqueça de configurar o Tomcat com a mesma versão de Java do projeto.


### Ter o servidor Jena Fuseki 3.8.0 executando na máquina
Antes de executar esta aplicação no Tomcat, é necessário ter o Jena Fuseki ([download aqui](https://jena.apache.org/download/index.cgi)) sendo executado. Para tal, abra uma janela do terminal e, dentro do diretório do framework, execute o comando:

    ./fuseki-server --update - /ds

Em seguida, abra num browser o endereço `http://localhost:3030/dataset.html`. A partir da interface que aparece na tela, é possível manipular os datasets e executar as queries sparql. Maiores detalhes podem ser obtidos na [documentação do framework](https://jena.apache.org/documentation/serving_data/).

Para que a aplicação funcione, é necessário carregar os dados `actors.rdf` e `actors_movies.rdf`. Esses arquivos são RDFs compartilhados pela turma do trabalho.

### Executar a aplicação:

1. Clone o repositório na perspectiva de git do Eclipse
2. Selecione o repositório importado e escolha a opção *"Import Projects"*. (obs: Dê preferência a versão da branch master).
5. Espere que o Eclipse termine de baixar os artefatos do Maven. Caso seja executado antes dessa etapa, muito erros acontecerão.
3. Adicione o projeto ao servidor Tomcat 8.5.x. (Menu do projeto: *Run As -> Run On Server*)
