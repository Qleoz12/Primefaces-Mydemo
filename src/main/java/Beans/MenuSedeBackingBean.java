package Beans;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.Serializable;
import java.nio.file.Paths;
import java.util.Enumeration;
import java.util.Locale;
import java.util.Properties;

import javax.annotation.PostConstruct;
import javax.faces.view.ViewScoped;
import javax.inject.Named;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import utils.EWConstantes;
import utils.MenuTypeDTO;

//import net.bizkaia.bide.presentacion.pf6.backingbean.POCUtil;
//import net.bizkaia.bide.presentacion.pf6.comando.CommandInvoker;
//import net.bizkaia.bide.presentacion.pf6.faces.ViewScoped;
//import net.bizkaia.bide.soporte.excepciones.exceptions.Severity;
//import net.bizkaia.bide.soporte.excepciones.exceptions.componentes.PropertyFwRuntimeException;
//import net.bizkaia.bide.soporte.propiedades.PropertyManager;
//import net.bizkaia.ewcommonutilities.comun.EWConstantes;
//import net.bizkaia.ewcommonutilities.util.JSFUtils;
//import net.bizkaia.ewpl001c.command.ConsultaMenuCiudadaniaCastellanoCommand;
//import net.bizkaia.ewpl001c.command.ConsultaMenuCiudadaniaEuskeraCommand;
//import net.bizkaia.ewpl001c.command.ConsultaMenuProfesionalCastellanoCommand;
//import net.bizkaia.ewpl001c.command.ConsultaMenuProfesionalEuskeraCommand;
//import net.bizkaia.ewpl001c.dto.menu.MenuTypeDTO;
//import net.bizkaia.ewpl001c.util.EWPL001CConstants;

/**
 * The Class PreferenciasIndividuo.
 */
@Named(EWConstantes.MENU_SEDE_BEAN)
@ViewScoped
public class MenuSedeBackingBean implements Serializable {

	/** The Constant serialVersionUID. */
	private static final long serialVersionUID = 1L;

	/** The Constant LOGGER. */
	private static final Logger LOGGER = LoggerFactory.getLogger(MenuSedeBackingBean.class);

	private MenuTypeDTO menu;

	private boolean desabat;

	@PostConstruct
	public void inicializar() {
		LOGGER.info("inicializar MenuSedeBackingBean; IN");
		try {
			// Actualizamos el archivo properties
//			Properties ficheroProperties = obtenerFicheroPropiedades(Paths.get(System.getProperty("BIDE.ConfigPath"),
//					"config", EWPL001CConstants.EWPL001C, "comun.properties").toString());
//			actualizarMapaPropiedades(ficheroProperties);
//			llamarConsultaMenu();
//			menu.setDominio(PropertyManager.getInstance().getProperty("EWPL1001C.comun.Dominio"));
//			menu.setDominioLR(PropertyManager.getInstance().getProperty("EWPL1001C.comun.DominioLR"));
//			menu.setDominioReact(PropertyManager.getInstance().getProperty("EWPL1001C.comun.DominioReact"));
//			desabat = StringUtils.equals(menu.getDominio(), EWPL001CConstants.DESABAT_DOMAIN);
			menu.setDominio("http://sedelocal.desebizkaia.bfa:82");
		} catch (Exception e) {
			menu = new MenuTypeDTO();
			LOGGER.error("Se ha producido un error al cargar los procedimientos y formularios", e);
		}
		LOGGER.info("MenuSedeBackingBean; menu: {}", menu);
		LOGGER.info("inicializar MenuSedeBackingBean; OUT");
	}

	public MenuTypeDTO getMenu() {
		return menu;
	}

	public void setMenu(MenuTypeDTO menu) {
		this.menu = menu;
	}

	public boolean isDesabat() {
		return desabat;
	}

	private void llamarConsultaMenu() {
		final HttpServletRequest request = JSFUtils.getJSFManager().getHttpServletRequest();
		try {
			String idioma = getLocaleIdioma();
			LOGGER.info("MenuSedeBackingBean; idioma: {}", idioma);
			if (!valorCookiePcProfesional(request)) {
				if (EWConstantes.IDIOMA_ES_LC.equalsIgnoreCase(idioma)) {
					LOGGER.info(
							"INFO rendimiento. Llamada de EJB de EWPL para buscar menu, perfil ciudadano castellano; MenuSedeBackingBean");
//					ConsultaMenuCiudadaniaCastellanoCommand consultaMenuCiudadaniaCastellano = CommandInvoker
//							.getInstance().invoke(ConsultaMenuCiudadaniaCastellanoCommand.class);
//					this.menu = consultaMenuCiudadaniaCastellano.getTipoMenu();
				} else {
					LOGGER.info(
							"INFO rendimiento. Llamada de EJB de EWPL para buscar menu, perfil ciudadano euskera; MenuSedeBackingBean");
//					ConsultaMenuCiudadaniaEuskeraCommand consultaMenuCiudadaniaEuskera = CommandInvoker.getInstance()
//							.invoke(ConsultaMenuCiudadaniaEuskeraCommand.class);
//					this.menu = consultaMenuCiudadaniaEuskera.getTipoMenu();
				}

			} else if (EWConstantes.IDIOMA_ES_LC.equalsIgnoreCase(idioma)) {
				LOGGER.info(
						"INFO rendimiento. Llamada de EJB de EWPL para buscar menu, perfil profesional castellano ; MenuSedeBackingBean");
//				ConsultaMenuProfesionalCastellanoCommand consultaMenuProfesionalCastellano = CommandInvoker
//						.getInstance().invoke(ConsultaMenuProfesionalCastellanoCommand.class);
//				this.menu = consultaMenuProfesionalCastellano.getTipoMenu();
			} else {
				LOGGER.info(
						"INFO rendimiento. Llamada de EJB de EWPL para buscar menu, perfil profesional euskera ; MenuSedeBackingBean");
//				ConsultaMenuProfesionalEuskeraCommand consultaMenuProfesionalEuskera = CommandInvoker.getInstance()
//						.invoke(ConsultaMenuProfesionalEuskeraCommand.class);
//				this.menu = consultaMenuProfesionalEuskera.getTipoMenu();
			}
		} catch (Exception e) {
//			POCUtil.processPOCWithFacesMessages(e);
		}
	}

	private static boolean valorCookiePcProfesional(final HttpServletRequest request) {
		Cookie[] cookies = request.getCookies();
		boolean actuaComoColaborador = false;
		if (cookies != null) {
			for (int i = 0; i < cookies.length; i++) {
				if ("pc_profesional".equals(cookies[i].getName())) {
					LOGGER.info("recuperocookie --> {}", cookies[i].getValue());
					String valor = cookies[i].getValue();
					if ("true".equals(valor)) {
						actuaComoColaborador = true;
						break;
					}
				}
			}
		}
		return actuaComoColaborador;
	}

	/**
	 * Metodo que obtiene el fichero de propiedades pasado como parametro.
	 *
	 * @param rutaFichero Ruta absoluta del fichero properties que se van a
	 *                    devolver.
	 *
	 * @return Devuelve un fichero de propiedades.
	 *
	 * @throws PropertyFwRuntimeException
	 */
//	private Properties obtenerFicheroPropiedades(String rutaFichero) {
//		LOGGER.info("obtenerFicheroPropiedades(String); IN: {}", rutaFichero);
//		final Properties ficheroProperties = new Properties();
//		InputStream is = null;
//		try {
//			final File f = new File(rutaFichero);
//			is = new FileInputStream(f);
//			ficheroProperties.load(is);
//		} catch (IOException e) {
//			throw new PropertyFwRuntimeException(Severity.GRAVE, "",
//					"(IOException)--No se ha podido cargar el fichero::" + rutaFichero, this.getClass(), e);
//		} finally {
//			if (is != null) {
//				try {
//					is.close();
//				} catch (IOException e) {
//					POCUtil.processPOCWithFacesMessages(e);
//				}
//			}
//		}
//		LOGGER.info("obtenerFicheroPropiedades(String); OUT");
//		return ficheroProperties;
//	}

	/**
	 * Metodo que inserta en el mapa de propiedades las propiedades definidas en el
	 * fichero pasado por parametro.
	 *
	 * @param nombreFichero ruta absoluta del fichero del que se van a leer las
	 *                      propiedades.
	 *
	 * @return
	 *
	 * @throws PropertyFwRuntimeException
//	 */
//	private void actualizarMapaPropiedades(Properties ficheroProperties) {
//
//		LOGGER.info("actualizarMapaPropiedades(Properties); IN: {}", ficheroProperties);
//
//		final Enumeration<?> e = ficheroProperties.propertyNames();
//		while (e.hasMoreElements()) {
//			final String clave = (String) e.nextElement();
//
//			synchronized (PropertyManager.getInstance().getMapaPropiedades()) {
//				if (PropertyManager.getInstance().getMapaPropiedades().containsKey(clave)) {
//					LOGGER.info("Se esta intentando insertar una clave previamente cargada. La clave duplicada es: {}",
//							clave);
//				} else {
//					final String valor = ficheroProperties.getProperty(clave);
//					LOGGER.info("Insertando propiedad con clave '{}' y valor '{}'.", clave, valor);
//					PropertyManager.getInstance().getMapaPropiedades().put(clave, valor);
//				}
//			}
//
//		}
//		LOGGER.info("actualizarMapaPropiedades(Properties); OUT");
//	}

	private static String getLocaleIdioma() {
		SedeLocaleBean bean = JSFUtils.getManagedBean(EWConstantes.SEDE_LOCALE_BEAN);
		Locale locale = bean.getLocale();
		LOGGER.info("getLocaleIdioma locale={}", locale);
		return locale.getLanguage();
	}
}
