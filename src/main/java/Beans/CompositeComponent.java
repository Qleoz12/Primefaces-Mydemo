package Beans;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.inject.Named;

import org.primefaces.model.DualListModel;

@Named
@javax.faces.view.ViewScoped
public class CompositeComponent implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private static final org.slf4j.Logger logger = org.slf4j.LoggerFactory.getLogger(CompositeComponent.class);
	private DualListModel<String> cities;
	List<String> citiesSource = new ArrayList<String>();
	List<String> citiesTarget = new ArrayList<String>();

	public CompositeComponent() {
		super();
	}

	@PostConstruct
	public void init() {
		// Cities
		citiesSource.add("San Francisco");
		citiesSource.add("London");
		citiesSource.add("Paris");
		citiesSource.add("Istanbul");
		citiesSource.add("Berlin");
		citiesSource.add("Barcelona");
		citiesSource.add("Rome");

		cities = new DualListModel<String>(citiesSource, citiesTarget);
	}

	public DualListModel<String> getCities() {
		return cities;
	}

	public void setCities(DualListModel<String> cities) {
		this.cities = cities;
	}

}