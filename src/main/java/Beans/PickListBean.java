package Beans;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.inject.Named;

import org.primefaces.model.DualListModel;

import Models.Employee;

@Named
@javax.faces.view.ViewScoped
public class PickListBean implements Serializable {

	private static final long serialVersionUID = 1391438493899480075L;
	private DualListModel<Employee> listModel;
	private static final org.slf4j.Logger logger = org.slf4j.LoggerFactory.getLogger(CompositeComponent.class);
	private DualListModel<String> cities;
	List<String> citiesSource = new ArrayList<String>();
	List<String> citiesTarget = new ArrayList<String>();
	
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
		// initial unselected list
		List<Employee> sourceList = Arrays.asList(new Employee("1", "Jim", "IT"), new Employee("2", "Sara", "Sale"),
				new Employee("3", "Tom", "Admin"), new Employee("4", "Diana", "IT"));

		// initial selected list
		List<Employee> destinationList = new ArrayList<>();
		destinationList.add(new Employee("5", "Jessica", "Sale"));

		listModel = new DualListModel<>(new ArrayList<>(sourceList), destinationList);
	}

	public DualListModel<Employee> getListModel() {
		return listModel;
	}

	public void setListModel(DualListModel<Employee> listModel) {
		this.listModel = listModel;
	}



	public DualListModel<String> getCities() {
		return cities;
	}

	public void setCities(DualListModel<String> cities) {
		this.cities = cities;
	}
}
