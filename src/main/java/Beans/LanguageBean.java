package Beans;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import javax.faces.context.FacesContext;
import java.io.Serializable;
import java.util.Locale;

@ManagedBean
@SessionScoped
public class LanguageBean implements Serializable {
    private String selectedLanguage = "en"; // Default language is English

    public String getSelectedLanguage() {
        return selectedLanguage;
    }

    public void setSelectedLanguage(String selectedLanguage) {
        this.selectedLanguage = selectedLanguage;
    }

    public String getCurrentLanguage() {
        return selectedLanguage.toUpperCase(); // Just to display the current language
    }

    public void changeLanguage() {
        FacesContext.getCurrentInstance().getViewRoot().setLocale(new Locale(selectedLanguage));
    }
}