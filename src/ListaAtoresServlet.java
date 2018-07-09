

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class ListaAtoresServlet
 */
@WebServlet("/ListaAtoresServlet")
public class ListaAtoresServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ListaAtoresServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	//	response.getWriter().append("Served at: ").append(request.getContextPath());
		String query = this.montarQueryListarAtores();
		
		
	}


	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
//		doGet(request, response);
		String query = this.montarQueryListarAtores();
		
		/*request.set
		
		RequestDispatcher rdSucesso = request.getRequestDispatcher("./index.jsp");
		rdSucesso.forward(request, response);*/
	}

	
	private String montarQueryListarAtores() {
		String query =  "prefix foaf:   <http://movieland.com/ufrrj/tebd/#> " 
					+	"SELECT ?id ?nome ?Sobrenome"
					+   "	WHERE {"
					+	"	    ?actor foaf:actorId ?id ."
					+	"  	    ?actor foaf:firstName ?nome ."
					+	"	  	?actor foaf:lastName ?Sobrenome ."							
					+	"	}";
		return query;
	}
}
