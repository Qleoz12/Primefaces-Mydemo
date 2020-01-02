package converter;

import org.primefaces.component.picklist.PickList;
import org.primefaces.model.DualListModel;

import Models.Employee;

import javax.faces.component.UIComponent;
import javax.faces.context.FacesContext;
import javax.faces.convert.Converter;
import javax.faces.convert.FacesConverter;

@SuppressWarnings({"unchecked", "rawtypes"})
@FacesConverter(value = "empConverter")
public class PickListEmpConverter implements Converter {
    @Override
    public Object getAsObject(FacesContext fc, UIComponent comp, String value) {
       
		DualListModel<Employee> model = (DualListModel<Employee>) ((PickList) comp).getValue();
        for (Employee employee : model.getSource()) {
            if (employee.getId().equals(value)) {
                return employee;
            }
        }
        for (Employee employee : model.getTarget()) {
            if (employee.getId().equals(value)) {
                return employee;
            }
        }
        return null;
    }

    @Override
    public String getAsString(FacesContext fc, UIComponent comp, Object value) {
        return ((Employee) value).getId();
    }
}