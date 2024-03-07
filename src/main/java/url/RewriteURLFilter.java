//package url;
//
//
//import java.io.IOException;
//import java.io.InputStream;
//
//import javax.servlet.Filter;
//import javax.servlet.FilterChain;
//import javax.servlet.FilterConfig;
//import javax.servlet.RequestDispatcher;
//import javax.servlet.ServletException;
//import javax.servlet.ServletRequest;
//import javax.servlet.ServletResponse;
//import javax.servlet.annotation.WebFilter;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//
//import org.apache.commons.io.IOUtils;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.slf4j.MDC;
//
////import net.bizkaia.bide.soporte.application.ApplicationUtils;
////import net.bizkaia.bide.soporte.utils.Constantes;
//
///**
// *
// * @author Adam M. Gamboa G
// */
//@WebFilter(urlPatterns = {"/*" }, asyncSupported = true)
//public class RewriteURLFilter implements Filter {
//
//	private static final Logger		LOGGER	= LoggerFactory.getLogger(RewriteURLFilter.class);
//
//	private RewritteConfiguration	configuration;
//
//	@Override
//	public void init(FilterConfig filterConfig) throws ServletException {
//		LOGGER.info("Initializing the RewriteURLFilter class");
//		InputStream in = filterConfig.getServletContext().getResourceAsStream("/WEB-INF/rewrite-config.xml");
//		this.configuration = new RewritteConfiguration(in);
//		IOUtils.closeQuietly(in);
//	}
//
//	@Override
//	public void destroy() {
//		LOGGER.info("Destroying the RewriteURLFilter class");
//	}
//
//	@Override
//	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
//		MDC.put(Constantes.LOGBACK_APPLICATION_KEY, ApplicationUtils.getMyApplicationCodeNoCache());
//
//		request.setCharacterEncoding("UTF-8");
//		response.setCharacterEncoding("UTF-8");
//
//		RewriteHttpServletRequest requestWrapper = new RewriteHttpServletRequest((HttpServletRequest) request);
//		String contextPath = requestWrapper.getContextPath();
//		String original = requestWrapper.getRequestURI().substring(contextPath.length());
//
//		RewritteConfiguration.log(LOGGER, requestWrapper);
//
//		String[] parts = RewritteConfiguration.parseURL(original);
//		String originalURLWithoutParam = parts[0];
//		String originalParams = parts[1];
//
//		RewriteHttpServletResponse responseWrapper = new RewriteHttpServletResponse((HttpServletResponse) response, contextPath);
//
//		if (configuration.containsPattern(originalURLWithoutParam)) {
//			String forwardURL = responseWrapper.encodeURL(configuration.getViewIdOfPattern(originalURLWithoutParam) + originalParams);
//			LOGGER.info("originalURL={},originalParams={},forwarURL={}", originalURLWithoutParam, originalParams, forwardURL);
//			RequestDispatcher dispatcher = requestWrapper.getRequestDispatcher(forwardURL);
//			dispatcher.forward(requestWrapper, responseWrapper);
//		} else {
//			chain.doFilter(requestWrapper, responseWrapper);
//		}
//	}
//}
