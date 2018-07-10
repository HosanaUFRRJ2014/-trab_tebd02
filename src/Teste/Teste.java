package Teste;
import java.io.*;
import org.apache.jena.query.Query;
import org.apache.jena.query.QueryExecution;
import org.apache.jena.query.QueryExecutionFactory;
import org.apache.jena.query.QueryFactory;
import org.apache.jena.query.ResultSet;
import org.apache.jena.query.ResultSetFormatter;
import org.apache.jena.rdf.model.*;
import org.apache.jena.vocabulary.VCARD;

public class Teste {
	
	public void consultar(int idAutor)
	{
		String prefixo  = "foaf: <http://movieland.com/ufrrj/tebd/#>";
		String consulta = prefixo + "SELECT ?ID_FILME \n" + 
				"WHERE\n" + 
				"{\n" + 
				"  ?filme foaf:movieId ?ID_FILME .\n" + 
				"  ?filme foaf:actorId '137' .\n" + 
				"}";
		
		Query query 	  	= QueryFactory.create(consulta);
		QueryExecution qe 	= QueryExecutionFactory.create(query);
		ResultSet resultado = qe.execSelect();
		System.out.println(resultado);
	}
	
}
