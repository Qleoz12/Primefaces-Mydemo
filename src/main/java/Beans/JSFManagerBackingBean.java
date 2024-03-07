package Beans;

import java.io.IOException;
import java.io.Serializable;
import java.io.Writer;
import java.util.Collections;
import java.util.List;

import javax.faces.context.ExternalContext;
import javax.faces.context.FacesContext;
import javax.faces.event.FacesEvent;
import javax.inject.Named;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.commons.io.IOUtils;
import org.apache.commons.lang3.ArrayUtils;
import org.primefaces.event.FileUploadEvent;
//import org.primefaces.model.UploadedFile;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

//import net.bizkaia.bide.presentacion.pf6.backingbean.POCUtil;
//import net.bizkaia.bide.presentacion.pf6.contexto.PageCodeBaseLantik;
//import net.bizkaia.bide.presentacion.pf6.faces.ViewScoped;
//import net.bizkaia.bide.soporte.filemanager.FileManager;
//import net.bizkaia.ewcommonutilities.comun.EWConstantes;
//import net.bizkaia.ewcommonutilities.comun.IJSFManager;

/**
 * The Class Prueba.
 */
//@Named(EWConstantes.BACKINGBEAN_JSFMANAGERBACKINGBEAN)
//@ViewScoped
//public class JSFManagerBackingBean extends PageCodeBaseLantik implements IJSFManager {
//
//	private static final long	serialVersionUID	= 5625855486533839869L;
//
//	private static final Logger	LOGGER				= LoggerFactory.getLogger(JSFManagerBackingBean.class);

//	@Override
//	public Object getAttribute(final String nombre) {
//		HttpServletRequest request = (HttpServletRequest) FacesContext.getCurrentInstance().getExternalContext().getRequest();
//		HttpSession httpSession = request.getSession();
//		return httpSession.getAttribute(nombre);
//	}
//
//	@Override
//	public void removeAttribute(String nombre) {
//		HttpServletRequest request = (HttpServletRequest) FacesContext.getCurrentInstance().getExternalContext().getRequest();
//		HttpSession httpSession = request.getSession();
//		httpSession.removeAttribute(nombre);
//	}
//
//	@Override
//	public void setAttribute(String nombre, Object value) {
//		HttpServletRequest request = (HttpServletRequest) FacesContext.getCurrentInstance().getExternalContext().getRequest();
//		Serializable serializableValue = (Serializable) value;
//		request.getSession().setAttribute(nombre, serializableValue);
//	}
//
//	@Override
//	public HttpServletRequest getHttpServletRequest() {
//		HttpServletRequest httpServletRequest = null;
//
//		Object objExternalReq = FacesContext.getCurrentInstance().getExternalContext().getRequest();
//		if (objExternalReq instanceof HttpServletRequest) {
//			httpServletRequest = (HttpServletRequest) objExternalReq;
//		}
//		return httpServletRequest;
//	}
//
//	@Override
//	public List<String> getParameterNames() {
////		final HttpServletRequest request = (HttpServletRequest) getFacesContext().getExternalContext().getRequest();
////		return Collections.list(request.getParameterNames());
//	}
//
//	@Override
//	public FileManager getFileManager(final FacesEvent fileUploadEvent) throws IOException {
////		final UploadedFile uploadedFile = ((FileUploadEvent) fileUploadEvent).getFile();
////		FileManager file = new FileManager();
////		file.setContent(uploadedFile.getContents());
////		file.setName(uploadedFile.getFileName());
////		file.setType(uploadedFile.getContentType());
////		return file;
//	}
//
//	@Override
//	public boolean descargarDocumento(byte[] contenidoFichero, String mimeType, String nombreDocumento, boolean inline) {
////		LOGGER.info("descargarDocumento IN");
////		Object[] valores = new Object[] {mimeType, nombreDocumento, ArrayUtils.getLength(contenidoFichero), inline };
////		LOGGER.info("mimeType: {}; nombreDocumento: {}; contenidoFichero (bytes): {}; inline: {}", valores);
////
////		boolean ok = true;
////		ExternalContext externalContext = FacesContext.getCurrentInstance().getExternalContext();
////		try {
////			externalContext.setResponseContentType(mimeType);
////			String contentDispositionValue = inline ? "inline" : "attachment";
////			externalContext.setResponseHeader("Content-Disposition", contentDispositionValue + ";filename=\"" + nombreDocumento + "\"");
////
////			IOUtils.write(contenidoFichero, externalContext.getResponseOutputStream());
////
////			externalContext.setResponseStatus(EWConstantes.INT_DOCIENTOS);
////			externalContext.responseFlushBuffer();
////			FacesContext.getCurrentInstance().responseComplete();
////		} catch (IOException e) {
////			ok = false;
////			mostrarError("Se ha producido un error al recuperar el adjunto", e);
////		}
////
////		LOGGER.info("descargarDocumento OUT");
////		return ok;
//	}
//
//	/**
//	 * Mostrar error.
//	 *
//	 * @param mensaje
//	 *            mensaje
//	 * @param exception
//	 *            exception
//	 */
//	@Override
//	public void mostrarError(final String mensaje, final Exception exception) {
//		ExternalContext externalContext = FacesContext.getCurrentInstance().getExternalContext();
//		externalContext.setResponseContentType("text/html");
//		try {
//			LOGGER.error(mensaje, exception);
//			POCUtil.processPOC(exception);
//			Writer outputWriter = externalContext.getResponseOutputWriter();
//			outputWriter.write(EWConstantes.CONSTANTE_HTML_BODY);
//			outputWriter.write("<p>");
//			outputWriter.write(mensaje);
//			outputWriter.write("</p>");
//			outputWriter.write("<p>" + exception + "</p>");
//			outputWriter.write(EWConstantes.CONSTANTE_BODY_HTML);
//		} catch (final IOException ioe) {
//			String mensajeExcepcion = "Error escribiendo respuesta de error." + ioe.getMessage();
//			LOGGER.error(mensajeExcepcion, ioe);
//		}
//	}

//}
