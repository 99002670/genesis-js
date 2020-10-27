class Employee {
    constructor(empId, empName, empAddress) {
        this.empId = empId;
        this.empName = empName;
        this.empAddress = empAddress;
    }

    display() {
        alert("The name is: " + this.empName);
        alert("The ID is: " + this.empId);
        alert("The Address is: " + this.empAddress);
    }
}

const empObj = new Employee(123, "Milind", "Mysore");
console.log(empObj);
console.log(JSON.stringify(empObj));
