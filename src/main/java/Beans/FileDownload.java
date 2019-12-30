package Beans;

import java.io.InputStream;
import java.io.Serializable;

import javax.inject.Named;

import org.primefaces.model.DefaultStreamedContent;
import org.primefaces.model.StreamedContent;

@Named
@javax.faces.view.ViewScoped
public class FileDownload implements Serializable {

	private StreamedContent file;

	public FileDownload() {
	        InputStream stream = this.getClass().getResourceAsStream("lorem_ipsum_definicion.pdf");
	        file = new DefaultStreamedContent(stream, "application/pdf", "downloaded_file.pdf");
	    }
	
	
	public void generateDnwload() {
        InputStream stream = this.getClass().getResourceAsStream("/lorem_ipsum_definicion.pdf");
        file = new DefaultStreamedContent(stream, "application/pdf", "downloaded_file.pdf");
    }
	public StreamedContent getFile() {
		return this.file;
	}
}