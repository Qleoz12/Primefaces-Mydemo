package utils;


import java.io.Serializable;
import java.util.Locale;

import javax.enterprise.context.SessionScoped;
import javax.faces.context.FacesContext;
import javax.inject.Named;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * The Class LocaleBean.
 */
@Named("localeBean")
@SessionScoped
public class LocaleBean implements Serializable {

	private static final long	serialVersionUID	= 1L;

	private static final Logger	logger				= LoggerFactory.getLogger(LocaleBean.class);

	private Locale				locale				= FacesContext.getCurrentInstance().getViewRoot().getLocale();

	public Locale getLocale() {
		return locale;
	}

	public String getLanguage() {
		return locale.getLanguage();
	}

	public void setLanguage(String language) {
		logger.info("setLanguage(); IN + '{}'", language);
		this.locale = new Locale(language);
		FacesContext.getCurrentInstance().getViewRoot().setLocale(locale);
	}

}
