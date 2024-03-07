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
public class LocaleBean implements Serializable{
    private Locale locale;
    
    public LocaleBean() {
        locale = FacesContext.getCurrentInstance().getExternalContext().getRequestLocale();
    }

    public Locale getLocale() {
        return locale;
    }

    public void setLocale(Locale locale) {
        this.locale = locale;
    }

    public void changeLocale(String language) {
        locale = new Locale(language);
        FacesContext.getCurrentInstance().getViewRoot().setLocale(locale);
        updateLocaleCookie(language);
    }

    private void updateLocaleCookie(String language) {
        FacesContext facesContext = FacesContext.getCurrentInstance();
        ExternalContext externalContext = facesContext.getExternalContext();
        HttpServletResponse response = (HttpServletResponse) externalContext.getResponse();

        Cookie cookie = new Cookie("locale", language);
        cookie.setMaxAge(30 * 24 * 60 * 60); // 30 days
        response.addCookie(cookie);
    }

	
    
}