package Beans;


import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import javax.faces.context.ExternalContext;
import javax.faces.context.FacesContext;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.Serializable;
import java.util.Locale;

@ManagedBean
@SessionScoped
public class Demobean implements Serializable {

	private static final long serialVersionUID = 1L;

	private String mylocale="es";
	
	public String getMylocale() {
		return mylocale;
	}

	public void setMylocale(String mylocale) {
		this.mylocale = mylocale;
	}
	
	public String change() {
		if(mylocale.equalsIgnoreCase("es")) 
		{
			mylocale="eu";
		}
		else {
			mylocale="es";
		}
		
		return null;
	}
    
}