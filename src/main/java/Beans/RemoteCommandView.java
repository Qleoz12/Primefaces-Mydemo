package Beans;


import java.io.Serializable;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.faces.application.FacesMessage;
import javax.faces.context.FacesContext;
import javax.inject.Named;

import org.primefaces.PrimeFaces;
import org.primefaces.model.DualListModel;

import Models.Employee;

@Named
@javax.faces.view.ViewScoped
public class RemoteCommandView  implements Serializable{

    public void execute() {
        String param1 = FacesContext.getCurrentInstance().getExternalContext().getRequestParameterMap().get("param1");
        String param2 = FacesContext.getCurrentInstance().getExternalContext().getRequestParameterMap().get("param2");
        if (param1 != null || param2 != null) {
            FacesContext.getCurrentInstance().addMessage(null,
                    new FacesMessage(FacesMessage.SEVERITY_INFO, "Executed", "param1: " + param1 + ", param2: " + param2));
        }
        else {
            FacesContext.getCurrentInstance().addMessage(null,
                    new FacesMessage(FacesMessage.SEVERITY_INFO, "Executed", "Using RemoteCommand."));
        }

        PrimeFaces.current().ajax().addCallbackParam("serverTime", System.currentTimeMillis());
    }
}