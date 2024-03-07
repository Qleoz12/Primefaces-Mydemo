package utils;



/**
 * The Class EWConstantes.
 */
public final class EWConstantes {

	public static final String	ACCESO_INTERNET								= "I";
	public static final String	ACCESO_HOST									= "H";
	public static final String	FUNCION_01									= "01";
	public static final String	FUNCION_02									= "02";
	public static final String	FUNCION_03									= "03";
	public static final String	FUNCION_04									= "04";
	public static final String	FUNCION_05									= "05";
	public static final String	FUNCION_06									= "06";
	public static final String	FUNCION_07									= "07";
	public static final String	FUNCION_08									= "08";
	public static final String	FUNCION_09									= "09";
	public static final String	FUNCION_10									= "10";
	public static final String	FUNCION_11									= "11";
	public static final String	FUNCION_12									= "12";
	public static final String	FUNCION_13									= "13";
	public static final String	FUNCION_14									= "14";
	public static final String	FUNCION_15									= "15";
	public static final String	SI											= "S";
	public static final String	NO											= "N";
	public static final String	SI_COMPLETO									= "Si";
	public static final String	NO_COMPLETO									= "No";
	public static final String	SI_NUMERICO									= "1";
	public static final String	NO_NUMERICO									= "0";

	public static final char	DOLAR										= '$';

	public static final String	MSG											= "msg";

	public static final String	CADENA_VACIA								= "";

	public static final String	IDIOMA_CASTELLANO							= "C";
	public static final String	IDIOMA_EUSKERA								= "E";
	public static final String	IDIOMA_ES									= "ES";
	public static final String	IDIOMA_ES_LC								= "es";
	public static final String	IDIOMA_EU									= "EU";
	public static final String	IDIOMA_EU_LC								= "eu";

	public static final String	FORMATO_FECHA_PROCEDIMIENTO					= "yyyy-MM-dd";
	public static final String	FORMATO_TIMESTAMP_PROCEDIMIENTO				= "yyyy-MM-dd-HH.mm.ss.SSSSSS";
	public static final String	FORMATO_FECHA_SIMPLE_CASTELLANO				= "dd/MM/yyyy";
	public static final String	FORMATO_FECHA_SIMPLE_EUSKERA				= "yyyy/MM/dd";
	public static final String	FORMATO_TIMESTAMP_PUNTOS					= "dd.MM.yyyy";
	public static final String	FORMATO_FECHA_CASTELLANO					= "dd/MM/yyyy HH:mm:ss";
	public static final String	FORMATO_FECHA_EUSKERA						= "yyyy/MM/dd HH:mm:ss";
	public static final String	FORMATO_FECHA_INGLESA_EXTENDIDA				= "yyyy-MM-dd HH:mm:ss.SSSSSS";
	public static final String	FECHA_NULA									= "0001-01-01 00:00:00.0";

	public static final String	FORMATO_TIMESTAMP_PROCEDIMIENTO_JAVA		= "yyyy-MM-dd-HH.mm.ss.SSS";
	public static final String	FORMATO_TIMESTAMP_PROCEDIMIENTO_SINMS		= "yyyy-MM-dd-HH.mm.ss";
	public static final String	FORMATO_HORA								= "HH:mm:ss";
	public static final String	FORMATO_FECHA_REGISTRO						= "dd-MM-yyyy HH:mm:ss";
	public static final String	FORMATO_FECHA_BD							= "yyyy-MM-dd HH:mm:ss.SSSS";

	/* Constante para el mensaje variable de control nula */
	public static final String	MSG_VARIABLE_CONTROL_NULA					= "La variable de control es nula.";
	/* Constante para el codigo de error que devuleven los Proc. Almac. cuando un registro esta en baja logica en BBDD */
	public static final int		COD_ERROR_REGISTRO_EN_BAJA_LOGICA			= -909;
	/* Constante para el codigo de error que devuleven los Proc. Almac. cuando no existe un registro en BBDD */
	public static final int		COD_ERROR_REGISTRO_NO_EXISTE				= 100;
	public static final String	CLAVE_ERROR_REGISTRO_CON_BAJA_LOGICA		= "error.registro_eliminado";
	public static final String	PARAMETRO_CONTROL							= "control";
	public static final String	SQL_CONECTOR								= "sqlConnector";
	public static final String	COBOL_CONNECTOR								= "cobolConnector";
	public static final String	PARAMETRO_CLAVE								= "clave";
	public static final String	PARAMETRO_XML								= "xml";
	public static final String	PARAMETRO_ACCESO							= "acceso";
	public static final String	PARAMETRO_IDIOMA							= "idioma";
	public static final String	PARAMETRO_FUNCION							= "funcion";

	public static final String	SISTEMA_HTML_ESTATICO						= "E";
	public static final String	SISTEMA_HTML_DINAMICO						= "D";
	public static final String	SISTEMA_PDF									= "P";

	public static final String	SITUACION_BORRADOR							= "B";
	public static final String	SITUACION_TEMPORAL							= "T";
	public static final String	SITUACION_PRECARGA							= "P";

	public static final String	XML_DISENO									= "xmlDiseno";
	public static final String	XML_UT										= "xmlUt";

	public static final String	TIPO_INDIVIDUO_PERSONA_FISICA				= "PF";
	public static final String	TIPO_INDIVIDUO_PERSONA_JURIDICA				= "PJ";
	public static final String	TIPO_INDIVIDUO_PERSONA_EMPRESA				= "PE";

	public static final String	TIPO_APODERAMIENTO_VOLUNTARIO				= "V";
	public static final String	TIPO_APODERAMIENTO_LEGAL					= "L";

	public static final String	ORIGEN_SEDE									= "SEDE";
	public static final String	APLICACION_EW								= "EW";
	public static final String	APLICACION_EWSF								= "EWSF";
	public static final String	APLICACION_RWBO								= "RWBO";
	public static final String	APLICACION_EWRW								= "EWRW";
	public static final String	APLICACION_EWSC								= "EWSC";
	public static final String	APLICACION_JX								= "JX";
	public static final String	APLICACION_EWSB								= "EWSB";
	public static final String	APLICACION_N3PR								= "N3PR";
	public static final String	APLICACION_EWFO								= "EWFO";
	public static final String	APLICACION_JXW3								= "JXW3";
	public static final String	APLICACION_EWFD								= "EWFD";
	public static final String	APLICACION_JXSS								= "JXSS";
	public static final String	APLICACION_DFTR								= "DFTR";

	public static final String	FIRMA_REQUERIDA_NO							= "1";
	public static final String	FIRMA_REQUERIDA_SI							= "2";

	public static final Integer	COD_PAIS_ESPANA								= 108;
	public static final Integer	COD_PROVINCIA_BIZKAIA						= 48;
	public static final String	CODIGO_POSTAL_POR_DEFECTO					= "00000";

	public static final String	CUENTA_BANCARIA_PAGO						= "ibanPago";
	public static final String	CUENTA_BANCARIA_ABONO						= "ibanAbono";
	public static final String	CUENTA_BANCARIA_AUTORIZA					= "ctaAutoriza";
	public static final String	CUENTA_BANCARIA_SELECT						= "ctaSelect";
	public static final String	CUENTA_APORTADA_CIUDADANO					= "ctaAporCiu";
	// public static final String CUENTA_CONTRASTADA = "ctaContrastada";
	public static final String	CUENTA_BANCARIA_OBLIGATORIA					= "ctaOblig";
	public static final String	CUENTA_BANCARIA_TIPO_PAGO					= "PAGO";
	public static final String	CUENTA_BANCARIA_TIPO_ABONO					= "ABONO";
	public static final String	CUENTA_BANCARIA_APORTADA_CIUDADANO			= "APORTADACIUDADANO";
	public static final String	CUENTA_BANCARIA_VERIFICA					= "ctaVerifica";
	public static final String	CUENTA_BANCARIA_OPONGO_VERIFICA				= "ctaOpongoVerifica";
	public static final String	CUENTA_BANCARIA_CONTRASTADA					= "contrastada";
	public static final String	ID_CUENTA									= "idCuenta";
	public static final String	COD_TIPO_TIT								= "codTipoTit";
	public static final String	FECHA_CONTRASTE								= "fechaContraste";
	public static final String	TIPO_VERIFICACION							= "tipoVerificacion";
	public static final String	ORIGEN_CONTRASTE							= "origenContraste";
	public static final String	ID_INTEROPERAR_RESPUESTA					= "idInteroperarRespuesta";
	public static final String	ID_TITULAR_REAL								= "idTitularReal";
	public static final String	TIPO_TITULAR_REAL							= "tipoTitularReal";

	public static final int		ACCION_DESCONEXION							= 1;
	public static final int		ACCION_INICIO_FORMULARIO					= 2;
	public static final int		ACCION_CONEXION								= 3;
	public static final int		ACCION_ENVIO_FORMULARIO						= 4;
	public static final int		ACCION_CONFIRMAR_FORMULARIO					= 15;
	public static final int		ACCION_INICIO_FIRMA_FORMULARIO				= 16;
	public static final int		ACCION_FIN_FIRMA_FORMULARIO					= 17;
	public static final int		ACCION_VER_JUSTIFICANTE						= 21;
	public static final int		ACCION_ACCESO_SOLICITUD_FORMULARIOS			= 26;
	public static final int		ACCION_INICIO_PASO_FORMULARIO				= 95;
	public static final int		ACCION_ACCESO_LISTADO_EXP_NOMBREPROPIO		= 96;
	public static final int		ACCION_ACCESO_LISTADO_EXP_REPRESENTACION	= 97;
	public static final int		ACCION_ACCESO_DETALLE_EXPEDIENTE			= 98;
	public static final int		ACCION_ACCESO_SEGUNDA_ACTUACION_CARPETA		= 99;
	public static final int		ACCION_FORMULARIO_FUERA_PLAZO				= 122;
	public static final int		ACCION_ACCESO_LISTADO_EXP_AUTORIZADO		= 124;
	public static final int		ACCION_TRAMITAR_FORMULARIO_MISFAVORITOS		= 136;

	public static final int		INT_CERO									= 0;
	public static final int		INT_UNO										= 1;
	public static final int		INT_DOS										= 2;
	public static final int		INT_TRES									= 3;
	public static final int		INT_CUATRO									= 4;
	public static final int		INT_CINCO									= 5;
	public static final int		INT_SEIS									= 6;
	public static final int		INT_SIETE									= 7;
	public static final int		INT_OCHO									= 8;
	public static final int		INT_NUEVE									= 9;
	public static final int		INT_DIEZ									= 10;
	public static final int		INT_ONCE									= 11;
	public static final int		INT_DOCE									= 12;
	public static final int		INT_TRECE									= 13;
	public static final int		INT_CATORCE									= 14;
	public static final int		INT_QUINCE									= 15;
	public static final int		INT_DIECISEIS								= 16;
	public static final int		INT_DIECISIETE								= 17;
	public static final int		INT_DIECIOCHO								= 18;
	public static final int		INT_DIECINUEVE								= 19;
	public static final int		INT_VEINTE									= 20;
	public static final int		INT_VEINTEUNO								= 21;
	public static final int		INT_VEINTIDOS								= 22;
	public static final int		INT_VEINTITRES								= 23;
	public static final int		INT_VEINTICUATRO							= 24;
	public static final int		INT_VEINTICINCO								= 25;
	public static final int		INT_TREINTA									= 30;
	public static final int		INT_TREINTAYUNO								= 31;
	public static final int		INT_TREINTAYDOS								= 32;
	public static final int		INT_CUARENTAYCINCO							= 45;
	public static final int		INT_CUARENTAYSEIS							= 46;
	public static final int		INT_CINCUENTA								= 50;
	public static final int		INT_CINCUENTAYNUEVE							= 59;
	public static final int		INT_SESENTAYOCHO							= 68;
	public static final int		INT_SESENTAYNUEVE							= 69;
	public static final int		INT_SETENTAYCINCO							= 75;
	public static final int		INT_SETENTAYSEIS							= 76;
	public static final int		INT_OCHENTAYSEIS							= 86;
	public static final int		INT_NOVENTAYSEIS							= 96;
	public static final int		INT_NOVENTAYNUEVE							= 99;
	public static final int		INT_CIEN									= 100;
	public static final int		INT_CIENTO_CINCUENTAYSEIS					= 156;
	public static final int		INT_DOCIENTOS								= 200;
	public static final int		INT_DOCIENTOS_CINCUENTA						= 250;
	public static final int		INT_TRESCIENTOS								= 300;
	public static final int		INT_CUATROCIENTOS							= 400;
	public static final int		INT_QUINIENTOS								= 400;

	public static final int		INT_MIL										= 1000;
	public static final int		INT_MIL_UNO									= 1001;
	public static final int		INT_MIL_DOS									= 1002;

	public static final int		INT_OCHO_MIL								= 8_000;
	public static final int		INT_DOCE_MIL								= 12_000;
	public static final int		INT_TRESCIENTOS_MIL							= 300_000;

	public static final int		NUM_DIAS_ANYO								= 365;
	public static final int		NUM_DIAS_ANYO_BISIESTO						= 366;

	public static final int		MAX_LENGTH_STRING_PROD						= 50;

	public static final char	MASK_CHARACTER								= '*';

	public static final String	BACKINGBEAN_JSFMANAGERBACKINGBEAN			= "pc_JSFManager";

	public static final String	BACKINGBEAN_JSFMANAGERBACKINGBEAN_EX		= "pc_JSFManagerEx";

	public static final String	BACKINGBEAN_LOCALE_BEAN						= "localeBean";

	public static final String	FILEUPLOAD_TIPO_DOCUMENTO					= "idDocumento";

	public static final String	NODO_EXPONE									= "expone";
	public static final String	NODO_OTRO_EXPEDIENTE						= "otroExpediente";

	public static final String	DATOS_DISENO_SCOPE							= "datosDisenoBIDEScope";
	public static final String	FILTRO_DISENO_SCOPE							= "filtroDisenoBIDEScope";
	public static final String	INFRAESTRUCTURA_SCOPE						= "infraestructuraBIDEScope";
	public static final String	ALMACEN_DOCUMENTACION_SCOPE					= "almacenDocumentacionBIDEScope";
	public static final String	INFORMACION_MULTIINTERESADO					= "informacionMultiInteresadoBIDEScope";

	// Constantes medio notificacion
	public static final String	NOTIFICACION_PAPEL							= "P";
	public static final String	NOTIFICACION_ELECTRONICA					= "E";

	public static final String	SEXO_HOMBRE									= "H";
	public static final String	SEXO_MUJER									= "M";

	public static final String	TIPO_PODERDANTE_HIJO						= "H";

	public static final String	USUARIO_LOGUEADO							= "usuarioLogueado";

	public static final String	CONSTANTE_HTML_BODY							= "<html><body>";
	public static final String	CONSTANTE_BODY_HTML							= "</body></html>";

	public static final String	FECHA_INICIO_SQL							= "0001-01-01 00:00:00.000000";

	public static final String	FECHA_FIN_SQL								= "9999-12-12 00:00:00.000000";

	public static final String	FORMATO_FECHA_SQL							= "yyyy-MM-dd HH:mm:ss.mmmmmm";

	public static final String	SISTEMA_INFRAESTRUCTURA						= "I";

	public static final String	ID_REGI										= "ID_REGI";

	public static final String	APELLIDO1									= "APELLIDO1";

	public static final String	APELLIDO2									= "APELLIDO2";

	public static final String	TIPO_INTERESADO								= "TIPO_INTERESADO";

	public static final String	AUTORIZADO_ENTIDAD							= "E";

	public static final String	RECOGER_IRINDA_DATOS_PASARELA				= "datosPasarela";

	public static final String	RECOGER_IRINDA_URL_VUELTA					= "urlVuelta";

	// Constantes Tipo Relacion NTBA

	public static final String	TIPO_RELACION_INTERESADO					= "I";

	public static final String	TIPO_RELACION_INTERESADO_MENOR				= "Y";

	public static final String	TIPO_RELACION_INTERESADO_N					= "N";

	public static final String	TIPO_RELACION_REPRESENTANTE_DIRECTO			= "D";

	public static final String	TIPO_RELACION_AUTORIZADO_DE_REPRESENTANTE	= "R";

	public static final String	TIPO_RELACION_AUTORIZADO_DE_ENTIDAD			= "E";

	// Constantes TIPO APLICACION

	public static final String	TIPO_APLICACION_SEDE						= "S";

	public static final String	TIPO_APLICACION_EKIN						= "E";

	public static final String	PUNTO_Y_COMA								= ";";

	public static final String	TOKEN										= "token";

	public static final Integer	MECANISMO_CPN								= Integer.valueOf(14);

	public static final String	ALGORITMO_SHA1								= "SHA";
	
	
	//
	
	public static final String	MENU_SEDE_BEAN					= "pc_menuSede";
	public static final String	SEDE_LOCALE_BEAN				= "sedeLocaleBean";
	/**
	 * Constructor por defecto
	 */
	private EWConstantes() {
	}

}
