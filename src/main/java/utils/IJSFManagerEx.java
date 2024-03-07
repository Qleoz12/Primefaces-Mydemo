package utils;

import javax.servlet.http.HttpServletResponse;

/**
 * The Interface JSF Manager Extended.
 */
public interface IJSFManagerEx extends IJSFManager {

	/**
	 * Gets the parameter.
	 *
	 * @param nombre
	 *            nombre del parametro
	 * @return valor del parametro
	 */
	String getParameter(final String nombre);

	/**
	 * Gets the http servlet response.
	 *
	 * @return the http servlet response
	 */
	HttpServletResponse getHttpServletResponse();

	/**
	 * Returns the host name of the server to which the request was sent. It is the value of the part before ":" in the <code>Host</code>
	 * header value, if any, or the resolved server name, or the server IP address.
	 *
	 * @return a <code>String</code> containing the name of the server
	 */
	String getServerName();

	/**
	 * Returns the port number to which the request was sent. It is the value of the part after ":" in the <code>Host</code> header value,
	 * if any, or the server port where the client connection was accepted on.
	 *
	 * @return an integer specifying the port number
	 *
	 */
	int getServerPort();

	/**
	 *
	 * Returns the value of the specified request header as a <code>String</code>. If the request did not include a header of the specified
	 * name, this method returns <code>null</code>. If there are multiple headers with the same name, this method returns the first head in
	 * the request. The header name is case insensitive. You can use this method with any request header.
	 *
	 * @param name
	 *            a <code>String</code> specifying the header name
	 *
	 * @return a <code>String</code> containing the value of the requested header, or <code>null</code> if the request does not have a
	 *         header of that name
	 *
	 */
	String getHeader(String name);

	/**
	 * Returns the Internet Protocol (IP) address of the client or last proxy that sent the request. For HTTP servlets, same as the value of
	 * the CGI variable <code>REMOTE_ADDR</code>.
	 *
	 * @return a <code>String</code> containing the IP address of the client that sent the request
	 *
	 */
	public String getRemoteAddr();

}
