package converter;

import javax.faces.component.UIComponent;
import javax.faces.context.FacesContext;
import javax.faces.convert.Converter;
import javax.faces.convert.FacesConverter;

import org.primefaces.component.picklist.PickList;
import org.primefaces.model.DualListModel;


@SuppressWarnings({"unused", "rawtypes"})
@FacesConverter("PickListConverter")
public class PickListConverter implements Converter{

    public Object getAsObject(FacesContext facesContext, UIComponent component, String submittedValue) {
        PickList  p = (PickList) component;
        DualListModel dl = (DualListModel) p.getValue();
        return dl.getSource().get(Integer.valueOf(submittedValue));
    }

    public String getAsString(FacesContext facesContext, UIComponent component, Object value) {
        PickList  p = (PickList) component;
        DualListModel dl = (DualListModel) p.getValue();
        return  String.valueOf(dl.getSource().indexOf(value));
    }
}