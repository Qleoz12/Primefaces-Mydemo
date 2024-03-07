package utils;

import java.io.IOException;
import java.util.List;

import javax.faces.event.FacesEvent;
import javax.servlet.http.HttpServletRequest;

//import net.bizkaia.bide.soporte.filemanager.FileManager;

/**
 * The Interface JSF Manager.
 */
public interface IJSFManager {

	/**
	 * Gets the attribute.
	 *
	 * @param nombre
	 *            the nombre
	 * @return the attribute
	 */
	Object getAttribute(final String nombre);

	/**
	 * Removes the attribute.
	 *
	 * @param nombre
	 *            the nombre
	 */
	void removeAttribute(final String nombre);

	/**
	 * Sets the attribute.
	 *
	 * @param nombre
	 *            the nombre
	 * @param valor
	 *            the valor
	 */
	void setAttribute(final String nombre, final Object valor);

	/**
	 * Gets the http servlet request.
	 *
	 * @return the http servlet request
	 */
	HttpServletRequest getHttpServletRequest();

	/**
	 * Gets the parameter names.
	 *
	 * @return the parameter names
	 */
	List<String> getParameterNames();

	/**
	 * Gets the file manager.
	 *
	 * @param fileUploadEvent
	 *            the file upload event
	 * @return the file manager
	 * @throws IOException
	 *             Signals that an I/O exception has occurred.
	 */
//	FileManager getFileManager(final FacesEvent fileUploadEvent) throws IOException;

	/**
	 * Metodo que descarga un documento.
	 *
	 * @param contenidoFichero
	 *            byte[]
	 * @param mimeType
	 *            String
	 * @param nombreDocumento
	 *            String
	 * @param inline
	 *            the inline
	 * @return true, if successful
	 */
	boolean descargarDocumento(final byte[] contenidoFichero, final String mimeType, final String nombreDocumento, final boolean inline);

	/**
	 * Mostrar error.
	 *
	 * @param mensaje
	 *            mensaje
	 * @param exception
	 *            exception
	 */
	void mostrarError(final String mensaje, final Exception exception);

}
