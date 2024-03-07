//package url;
//
//import java.io.IOException;
//import java.io.InputStream;
//import java.util.Arrays;
//import java.util.Collections;
//import java.util.HashMap;
//import java.util.LinkedHashSet;
//import java.util.LinkedList;
//import java.util.List;
//import java.util.Locale;
//import java.util.Map;
//import java.util.Set;
//import java.util.stream.Collectors;
//
//import javax.faces.context.FacesContext;
//import javax.servlet.http.Cookie;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//import javax.servlet.http.HttpSession;
//import javax.xml.parsers.DocumentBuilder;
//import javax.xml.parsers.DocumentBuilderFactory;
//import javax.xml.parsers.ParserConfigurationException;
//
//import org.apache.commons.lang3.BooleanUtils;
//import org.apache.commons.lang3.StringUtils;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.w3c.dom.Document;
//import org.w3c.dom.Element;
//import org.w3c.dom.Node;
//import org.w3c.dom.NodeList;
//import org.xml.sax.SAXException;
//
////import net.bizkaia.bide.soporte.excepciones.exceptions.AppRuntimeException;
////import net.bizkaia.bide.soporte.excepciones.exceptions.Severity;
////import net.bizkaia.ewcommonutilities.comun.EWConstantes;
////import net.bizkaia.ewcommonutilities.util.JSFUtils;
//
///**
// *
// * @author Adam M. Gamboa G
// */
//public class RewritteConfiguration {
//
//	private static final String				JSESSIONID	= "JSESSIONID";
//
//	private static final String				PREFFIX		= "preffix";
//
//	private static final String				ELEMENT		= "element";
//
//	private static final String				ADD_COOKIES	= "add-cookies";
//
//	private static final Logger				LOGGER		= LoggerFactory.getLogger(RewritteConfiguration.class);
//
//	private Map<String, List<URLMapping>>	viewMap;
//
//	private Map<String, URLMapping>			patternMap;
//
//	private Set<String>						preffixes;
//
//	private boolean							addCokies;
//
//	public RewritteConfiguration(InputStream in) {
//		this.viewMap = new HashMap<>();
//		this.patternMap = new HashMap<>();
//		this.preffixes = new LinkedHashSet<>();
//		loadConfiguration(in);
//	}
//
//	private static String getValue(Element element, String name, String language) {
//		String value = name + (language != null ? ("-" + language) : StringUtils.EMPTY);
//		return StringUtils.trimToNull(element.getAttribute(value));
//	}
//
//	private static String getValue(Element element, String name) {
//		return getValue(element, name, null);
//	}
//
//	private void loadConfiguration(InputStream in) {
//		try {
//			DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
//			DocumentBuilder dBuilder = dbFactory.newDocumentBuilder();
//			Document doc = dBuilder.parse(in);
//
//			NodeList nodeList = doc.getElementsByTagName("url-mapping");
//
//			String addCookiesValue = getValue(doc.getDocumentElement(), ADD_COOKIES);
//			if (StringUtils.isNotEmpty(addCookiesValue)) {
//				setAddCokies(BooleanUtils.toBoolean(addCookiesValue));
//			}
//
//			String rootPreffixEs = getValue(doc.getDocumentElement(), PREFFIX, EWConstantes.IDIOMA_ES_LC);
//			String rootPreffixEu = getValue(doc.getDocumentElement(), PREFFIX, EWConstantes.IDIOMA_EU_LC);
//
//			for (int temp = 0; temp < nodeList.getLength(); temp++) {
//				Node node = nodeList.item(temp);
//				if (node.getNodeType() == Node.ELEMENT_NODE) {
//					Element element = (Element) node;
//					URLMapping um = new URLMapping();
//					String preffixEs = getValue(element, PREFFIX, EWConstantes.IDIOMA_ES_LC);
//					um.setPreffixEs(StringUtils.defaultString(preffixEs, rootPreffixEs));
//					String preffixEu = getValue(element, PREFFIX, EWConstantes.IDIOMA_EU_LC);
//					um.setPreffixEu(StringUtils.defaultString(preffixEu, rootPreffixEu));
//					um.setElementEs(getValue(element, ELEMENT, EWConstantes.IDIOMA_ES_LC));
//					um.setElementEu(getValue(element, ELEMENT, EWConstantes.IDIOMA_EU_LC));
//					um.setViewId(element.getAttribute("view-id"));
//					LOGGER.info("Rewrite url mapping: {}", um);
//					addView(um);
//					this.patternMap.put(um.getPatternEs(), um);
//					this.patternMap.put(um.getPatternEu(), um);
//				}
//			}
//		} catch (ParserConfigurationException | IOException | SAXException ex) {
//			throw new AppRuntimeException(Severity.GRAVE, "error.rewrite.configuration", "Error leyenedo el fichero rewrite-config.xml",
//					this.getClass(), ex);
//		}
//	}
//
//	public boolean isAddCokies() {
//		return addCokies;
//	}
//
//	public void setAddCokies(boolean addCokies) {
//		this.addCokies = addCokies;
//	}
//
//	private void addView(URLMapping um) {
//		List<URLMapping> list = this.viewMap.get(um.getViewId());
//		if (list == null) {
//			list = new LinkedList<>();
//			this.viewMap.put(um.getViewId(), list);
//		}
//		list.add(um);
//		preffixes.add(um.getPreffixEs());
//		preffixes.add(um.getPreffixEu());
//	}
//
//	private static boolean isEu() {
//		Locale locale = FacesContext.getCurrentInstance().getViewRoot().getLocale();
//		return StringUtils.startsWith(locale.getLanguage(), "eu");
//	}
//
//	public boolean containsViewId(String viewId) {
//		return viewMap.containsKey(viewId);
//	}
//
//	public String getPatternOfViewId(String viewId, String preffix) {
//		List<URLMapping> list = viewMap.get(viewId);
//		URLMapping um = null;
//		if ((preffix == null) || (list.size() == 1)) {
//			um = list.get(0);
//		} else {
//			for (URLMapping urlMapping : list) {
//				if (StringUtils.equals(preffix, urlMapping.getPreffixEs()) || StringUtils.equals(preffix, urlMapping.getPreffixEu())) {
//					um = urlMapping;
//					break;
//				}
//			}
//		}
//		if (um != null) {
//			return isEu() ? um.getPatternEu() : um.getPatternEs();
//		}
//		return null;
//	}
//
//	public boolean containsPattern(String pattern) {
//		return patternMap.containsKey(pattern);
//	}
//
//	public String getViewIdOfPattern(String pattern) {
//		return patternMap.get(pattern).getViewId();
//	}
//
//	public static String[] parseURL(String original) {
//		String[] parts = new String[EWConstantes.INT_DOS];
//		int indexOfParam = original.indexOf('?');
//		if (indexOfParam != -1) {
//			parts[0] = original.substring(0, indexOfParam);
//			parts[1] = original.substring(indexOfParam);
//		} else {
//			indexOfParam = original.indexOf(";jsessionid");
//			if (indexOfParam != -1) {
//				parts[0] = original.substring(0, indexOfParam);
//				parts[1] = "";
//			} else {
//				parts[0] = original;
//				parts[1] = "";
//			}
//		}
//		if (StringUtils.endsWith(parts[0], "/")) {
//			parts[0] = StringUtils.left(parts[0], StringUtils.length(parts[0]) - 1);
//		}
//		return parts;
//	}
//
//	public static void log(Logger logger, HttpServletRequest request) {
//		logger.debug("Request: type={},url={}", request.getDispatcherType(), request.getRequestURL());
//
//		String headers = Collections.list(request.getHeaderNames()).stream()
//				.map(headerName -> headerName + " : " + Collections.list(request.getHeaders(headerName))).collect(Collectors.joining(", "));
//
//		if (StringUtils.isNotEmpty(headers)) {
//			logger.debug("Request headers: [{}]", headers);
//		}
//
//		String parameters = Collections.list(request.getParameterNames()).stream()
//				.map(p -> p + " : " + Arrays.asList(request.getParameterValues(p))).collect(Collectors.joining(", "));
//
//		if (StringUtils.isNotEmpty(parameters)) {
//			logger.debug("Request parameters: [{}]", parameters);
//		}
//	}
//
//	public void addJSessionIdCookie(HttpServletResponse response, String sessionId) {
//		for (String path : preffixes) {
//			Cookie cookie = new Cookie(JSESSIONID, sessionId);
//			cookie.setMaxAge(-1);
//			cookie.setPath(path);
//			cookie.setHttpOnly(true);
//			response.addCookie(cookie);
//		}
//	}
//
//	private static String getNodeName() {
//		String jbossNodeName = System.getProperty("jboss.node.name");
//		if (StringUtils.isEmpty(jbossNodeName)) {
//			return JSFUtils.getJSFManagerEx().getServerName();
//		}
//		return jbossNodeName;
//	}
//
//	public static String getSessionId(HttpServletRequest request) {
//		HttpSession session = request.getSession(false);
//		if (session != null) {
//			String nodeName = getNodeName();
//			return session.getId() + (StringUtils.isNotEmpty(nodeName) ? ("." + nodeName) : StringUtils.EMPTY);
//		}
//		return null;
//	}
//
//}
