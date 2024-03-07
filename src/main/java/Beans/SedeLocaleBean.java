package Beans;

import java.io.Serializable;
import java.util.Locale;
import java.util.ResourceBundle;

import javax.enterprise.context.RequestScoped;
import javax.faces.context.FacesContext;
import javax.inject.Named;
import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;




@Named("sedeLocaleBean")
@RequestScoped
public class SedeLocaleBean implements Serializable {

	private static final Logger LOGGER = LoggerFactory.getLogger(SedeLocaleBean.class);

	private static final long serialVersionUID = 1L;

	private static final Locale SPANISH = new Locale("es", "ES");

	private static final Locale BASQUE = new Locale("eu", "ES");

	private Locale locale = resolveLocale();

	public static Locale resolveLocale() {

		HttpServletRequest request = JSFUtils.getJSFManager().getHttpServletRequest();

		String url = request.getRequestURI();

		Object value = request.getAttribute("javax.servlet.forward.request_uri");

		if (value != null) {

			url = value.toString();

		}

		Locale result = SPANISH;

		if (StringUtils.contains(url, "/eu/")) {

			result = BASQUE;

		}

		LOGGER.info("locale={},url={}", result, url);

		return result;

	}

	public Locale getLocale() {

		LOGGER.info("getLocale locale={}", locale);

		return locale;

	}

	public String getLanguage() {

		LOGGER.info("getLanguage Language={}", locale.getLanguage());

		return locale.getLanguage();

	}

	public String getResource(String key, String language) {

		FacesContext facesContext = FacesContext.getCurrentInstance();

		ResourceBundle resourceBundle = FacesContext.getCurrentInstance().getApplication()
				.getResourceBundle(facesContext, "msgSede");

		Locale aLocale = "eu".equals(language) ? BASQUE : SPANISH;

		ResourceBundle rb = ResourceBundle.getBundle(resourceBundle.getBaseBundleName(), aLocale);

		if (rb.containsKey(key)) {

			return rb.getString(key);

		}

		return rb.getString("sede.electronica.url");

	}

}