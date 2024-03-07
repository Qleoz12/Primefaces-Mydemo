package Beans;

import java.io.IOException;
import java.io.Serializable;
import java.io.Writer;
import java.util.Collections;
import java.util.List;

import javax.enterprise.context.SessionScoped;
import javax.faces.context.ExternalContext;
import javax.faces.context.FacesContext;
import javax.faces.event.FacesEvent;
import javax.inject.Named;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.io.IOUtils;
import org.apache.commons.lang3.ArrayUtils;
import org.primefaces.event.FileUploadEvent;
import org.primefaces.model.file.UploadedFile;
//import org.primefaces.model.UploadedFile;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import utils.IJSFManagerEx;

//import net.bizkaia.bide.presentacion.pf6.backingbean.POCUtil;
//import net.bizkaia.bide.soporte.filemanager.FileManager;
import utils.EWConstantes;
//import net.bizkaia.ewcommonutilities.comun.IJSFManagerEx;

@Named(EWConstantes.BACKINGBEAN_JSFMANAGERBACKINGBEAN_EX)
@SessionScoped
public class JSFManagerBackingBeanEx implements IJSFManagerEx, Serializable {

	private static final long	serialVersionUID	= -5507788524438447436L;

	private static final Logger	LOGGER				= LoggerFactory.getLogger(JSFManagerBackingBeanEx.class);

	private HttpSession getHttpSession() {
		return getHttpServletRequest().getSession();
	}

	@Override
	public Object getAttribute(final String nombre) {
		return getHttpSession().getAttribute(nombre);
	}

	@Override
	public void removeAttribute(String nombre) {
		getHttpSession().removeAttribute(nombre);
	}

	@Override
	public void setAttribute(String nombre, Object value) {
		Serializable serializableValue = (Serializable) value;
		getHttpSession().setAttribute(nombre, serializableValue);
	}

	@Override
	public HttpServletRequest getHttpServletRequest() {
		HttpServletRequest httpServletRequest = null;

		Object objExternalReq = FacesContext.getCurrentInstance().getExternalContext().getRequest();
		if (objExternalReq instanceof HttpServletRequest) {
			httpServletRequest = (HttpServletRequest) objExternalReq;
		}
		return httpServletRequest;
	}

	@Override
	public HttpServletResponse getHttpServletResponse() {
		HttpServletResponse httpServletResponse = null;

		Object objExternalResponse = FacesContext.getCurrentInstance().getExternalContext().getResponse();
		if (objExternalResponse instanceof HttpServletResponse) {
			httpServletResponse = (HttpServletResponse) objExternalResponse;
		}
		return httpServletResponse;
	}

	@Override
	public String getParameter(String nombre) {
		return getHttpServletRequest().getParameter(nombre);
	}

	@Override
	public List<String> getParameterNames() {
		return Collections.list(getHttpServletRequest().getParameterNames());
	}

//	@Override
//	public FileManager getFileManager(final FacesEvent fileUploadEvent) throws IOException {
//		final UploadedFile uploadedFile = ((FileUploadEvent) fileUploadEvent).getFile();
//		FileManager file = new FileManager();
//		file.setContent(uploadedFile.getContents());
//		file.setName(uploadedFile.getFileName());
//		file.setType(uploadedFile.getContentType());
//		return file;
//	}

	@Override
	public boolean descargarDocumento(byte[] contenidoFichero, String mimeType, String nombreDocumento, boolean inline) {
		LOGGER.info("descargarDocumento IN");
		Object[] valores = {mimeType, nombreDocumento, ArrayUtils.getLength(contenidoFichero), inline };
		LOGGER.info("mimeType: {}; nombreDocumento: {}; contenidoFichero (bytes): {}; inline: {}", valores);

		boolean ok = true;
		ExternalContext externalContext = FacesContext.getCurrentInstance().getExternalContext();
		try {
			externalContext.setResponseContentType(mimeType);
			String contentDispositionValue = inline ? "inline" : "attachment";
			externalContext.setResponseHeader("Content-Disposition", contentDispositionValue + ";filename=\"" + nombreDocumento + "\"");

			IOUtils.write(contenidoFichero, externalContext.getResponseOutputStream());

			externalContext.setResponseStatus(EWConstantes.INT_DOCIENTOS);
			externalContext.responseFlushBuffer();
			FacesContext.getCurrentInstance().responseComplete();
		} catch (IOException e) {
//			POCUtil.processPOCWithFacesMessages(e);
			ok = false;
			mostrarError("Se ha producido un error al recuperar el adjunto", e);
		}
		LOGGER.info("descargarDocumento OUT");
		return ok;
	}

	/**
	 * Mostrar error.
	 *
	 * @param mensaje
	 *            mensaje
	 * @param exception
	 *            exception
	 */
	@Override
	public void mostrarError(final String mensaje, final Exception exception) {
		ExternalContext externalContext = FacesContext.getCurrentInstance().getExternalContext();
		externalContext.setResponseContentType("text/html");
		try {
			LOGGER.error(mensaje, exception);
			Writer outputWriter = externalContext.getResponseOutputWriter();
			outputWriter.write(EWConstantes.CONSTANTE_HTML_BODY);
			outputWriter.write("<p>");
			outputWriter.write(mensaje);
			outputWriter.write("</p>");
			outputWriter.write("<p>" + exception + "</p>");
			outputWriter.write(EWConstantes.CONSTANTE_BODY_HTML);
		} catch (final IOException ioe) {
//			POCUtil.processPOCWithFacesMessages(ioe);
		}
	}

	@Override
	public String getServerName() {
		return getHttpServletRequest().getServerName();
	}

	@Override
	public int getServerPort() {
		return getHttpServletRequest().getServerPort();
	}

	@Override
	public String getHeader(String name) {
		return getHttpServletRequest().getHeader(name);
	}

	@Override
	public String getRemoteAddr() {
		return getHttpServletRequest().getRemoteAddr();
	}

}
