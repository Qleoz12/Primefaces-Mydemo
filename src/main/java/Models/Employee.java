package Models;

public class Employee {
    private String id;
    private String name;
    private String dept;

    public Employee(String id, String name, String dept) {
        this.id = id;
        this.name = name;
        this.dept = dept;
    }

    public String getName() {
        return name;
    }

    public String getDept() {
        return dept;
    }

    public String getId() {
        return id;
    }
}