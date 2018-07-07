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


### Executar a aplicação:

1. Clone o repositório na perspectiva de git do Eclipse
2. Na perspectiva Java EE, abra a aba *"File"* e selecione *"Import"*
3. Na busca, procure por *"Existing Maven Projects"* e clique em *"Next"*
4. Vá até o diretório raiz da aplicação e , caso não esteja selecionado, marque o checkbox do `pom.xml` e selecione *"Next"*
5. Espere que o Eclipse termine de baixar os artefatos. Caso seja executado antes dessa etapa, muito erros acontecerão.
6. Após finalizado, selecione o arquivo principal da aplicação como o lado direito do mouse, *"Run As -> 2 Java Application"*  
