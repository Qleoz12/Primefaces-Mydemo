//package url;
//
//
//import java.io.InputStream;
//
//import javax.faces.application.ViewHandler;
//import javax.faces.application.ViewHandlerWrapper;
//import javax.faces.context.ExternalContext;
//import javax.faces.context.FacesContext;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//
//import org.apache.commons.io.IOUtils;
//import org.apache.commons.lang3.ArrayUtils;
//import org.apache.commons.lang3.StringUtils;
//import org.slf4j.LoggerFactory;
//
////import net.bizkaia.bide.soporte.propiedades.PropertyManager;
//
///**
// *
// * @author Adam M. Gamboa G
// */
//public class RewriteViewHandler extends ViewHandlerWrapper {
//
//	private static final org.slf4j.Logger	LOGGER	= LoggerFactory.getLogger(RewriteViewHandler.class);
//
//	private RewritteConfiguration			configuration;
//
//	public RewriteViewHandler(ViewHandler wrapped) {
//		super(wrapped);
//		ExternalContext externalContext = FacesContext.getCurrentInstance().getExternalContext();
//		InputStream in = externalContext.getResourceAsStream("/WEB-INF/rewrite-config.xml");
//		this.configuration = new RewritteConfiguration(in);
//		IOUtils.closeQuietly(in);
//	}
//
//	private static String getRequestURL(FacesContext context) {
//		HttpServletRequest request = (HttpServletRequest) context.getExternalContext().getRequest();
//		RewritteConfiguration.log(LOGGER, request);
//		return request.getRequestURL().toString();
//	}
//
//	private String calculatePreffix(FacesContext context) {
//		String preffix = null;
//
//		HttpServletRequest request = (HttpServletRequest) context.getExternalContext().getRequest();
//
//		Object value = request.getAttribute("javax.servlet.forward.request_uri");
//		if (value != null) {
//			String url = value.toString().substring(request.getContextPath().length());
//			String[] parts = StringUtils.split(url, "/");
//			if (ArrayUtils.getLength(parts) > 1) {
//				preffix = "/" + parts[0] + "/" + StringUtils.substringBefore(parts[1], ";");
//			}
//		}
//
//		return preffix;
//	}
//
//	private boolean isIncludeContextPath(String requestURL) {
//		boolean include = false;
////		if (PropertyManager.getInstance().isMaquinaPruebas() && StringUtils.startsWith(requestURL, "http://prujboss.pruebizkaia.bfa/")) {
////			LOGGER.debug("Acceso directo al JBoss de Pruebas, se mantiene el context path");
////			include = true;
////		} else if (PropertyManager.getInstance().isMaquinaDesarrollo() && StringUtils.startsWith(requestURL, "http://desajboss.desebizkaia.bfa/")) {
////			LOGGER.debug("Acceso directo al JBoss de Desarrollo, se mantiene el context path");
////			include = true;
////		} else if (PropertyManager.getInstance().isMaquinaLocal() && StringUtils.startsWith(requestURL, "http://sedelocal.desebizkaia.bfa:28080/")) {
////			LOGGER.debug("Acceso directo al JBoss Local, se mantiene el context path");
////			include = true;
////		}
//		return include;
//	}
//
//	private void updateSessionIdCookie(FacesContext context) {
//		HttpServletRequest request = (HttpServletRequest) context.getExternalContext().getRequest();
//		String sessionId = RewritteConfiguration.getSessionId(request);
//		if (sessionId != null) {
//			LOGGER.info("JSESSIONID: {}", sessionId);
//			HttpServletResponse response = (HttpServletResponse) context.getExternalContext().getResponse();
//			configuration.addJSessionIdCookie(response, sessionId);
//		}
//	}
//
//	@Override
//	public String getActionURL(FacesContext context, String viewId) {
//		String actionURL = super.getActionURL(context, viewId);
//
//		LOGGER.debug("actionURL={}", actionURL);
//
//		String[] parts = RewritteConfiguration.parseURL(actionURL);
//		String actionURLWithoutParam = parts[0];
//		String actionParams = parts[1];
//
//		String action = actionURLWithoutParam;
//		String requestURL = getRequestURL(context);
//		if (!isIncludeContextPath(requestURL)) {
//			String contextPath = context.getExternalContext().getRequestContextPath();
//			action = actionURLWithoutParam.substring(contextPath.length());
//		}
//		if (configuration.containsViewId(action)) {
//			String preffix = calculatePreffix(context);
//			String newURL = configuration.getPatternOfViewId(action, preffix) + actionParams;
//			newURL = context.getExternalContext().encodeActionURL(newURL);
//			LOGGER.info("action={},preffix={},params={},newURL={}", action, preffix, actionParams, newURL);
//			if (configuration.isAddCokies()) {
//				updateSessionIdCookie(context);
//			}
//			return newURL;
//		}
//		return actionURL;
//	}
//
//}
