
package Beans;


import javax.faces.context.FacesContext;

import utils.EWConstantes;
import utils.IJSFManager;
import utils.IJSFManagerEx;
import utils.*;
//import net.bizkaia.ewcommonutilities.backingbean.LocaleBean;
//import net.bizkaia.ewcommonutilities.comun.EWConstantes;
//import net.bizkaia.ewcommonutilities.comun.IJSFManager;
//import net.bizkaia.ewcommonutilities.comun.IJSFManagerEx;

/**
 * The Class JSFUtils.
 */
public final class JSFUtils {

	/**
	 * Metodo constructor.
	 */
	private JSFUtils() {
		super();
	}

	/**
	 * Return the result of the resolved expression.
	 *
	 * @param <T>
	 *            the generic type
	 * @param expression
	 *            the expression
	 * @return the object
	 */
	public static <T> T resolveExpression(String expression) {
		Object value = null;
		if ((expression.indexOf("#{") != -1) && (expression.indexOf("#{") < expression.indexOf('}'))) {
			FacesContext context = FacesContext.getCurrentInstance();
			value = context.getApplication().getExpressionFactory().createValueExpression(context.getELContext(), expression, Object.class)
					.getValue(context.getELContext());
		} else {
			value = expression;
		}
		return (T) value;
	}

	/**
	 * Return the managed bean with the given name.
	 *
	 * @param <T>
	 *            the generic type
	 * @param mgdBeanName
	 *            the name of the managed bean to retrieve
	 * @return the managed bean
	 */
	public static <T> T getManagedBean(String mgdBeanName) {
		final String expression = "#{" + mgdBeanName + "}";
		return resolveExpression(expression);
	}

	/**
	 * Gets the JSF manager.
	 *
	 * @return the JSF manager
	 */
	public static IJSFManager getJSFManager() {
		IJSFManager manager = (IJSFManager) getManagedBean(EWConstantes.BACKINGBEAN_JSFMANAGERBACKINGBEAN);
		if (manager != null) {
			return manager;
		}
		return getJSFManagerEx();
	}

	/**
	 * Gets the JSF manager extendido.
	 *
	 * @return the JSF manager extendio
	 */
	public static IJSFManagerEx getJSFManagerEx() {
		return (IJSFManagerEx) getManagedBean(EWConstantes.BACKINGBEAN_JSFMANAGERBACKINGBEAN_EX);
	}

	/**
	 * Gets the locale bean.
	 *
	 * @return the locale bean
	 */
	public static LocaleBean getLocaleBean() {
		return (LocaleBean) getManagedBean(EWConstantes.BACKINGBEAN_LOCALE_BEAN);
	}

}