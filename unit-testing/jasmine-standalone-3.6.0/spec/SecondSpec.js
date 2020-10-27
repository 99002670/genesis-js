describe("Suite to test classes", () => {
    let emp = null;
    //beforeALL();
    beforeEach(() => {
        emp = new employee(111, "Milind", "Odisha");
    });

    //afterAll();
    afterEach(() => {
        emp = null;
    });

    it("should set id", () => {
        expect(emp.id).toBe(111);
    });

    it("should set name", () => {
        expect(emp.name).toBe("Milind");
    });

    it("should set address", () => {
        expect(emp.address).toBe("Odisha");
    });
});

describe("Suite to test empManager", () => {
    let mgr = null;
    beforeAll(() => {
        mgr = new empManager();
    });

    const func = () => {
        mgr.addEmployee(null);
    };

    it("should throw exception if invalid employee is added", () => {
        let emp = null;
        expect(func).toThrow();
    });

    it("should add employee", () => {
        mgr.addEmployee(new employee(111, "Milind", "Odisha"));
        expect(mgr.employees.length).toBe(1);
    });

    it("should update employee", () => {
        let emp = new employee(111, "Amit", "Odisha");
        mgr.updateEmployee(emp);
        expect(mgr.employees[0]).toEqual(emp);
    });

    it("should get employee", () => {
        let emp = mgr.getEmployee(111);
        expect(mgr.employees[0]).toBe(emp);
    });

    it("should remove employee", () => {
        mgr.removeEmployee(111);
        const emp = new employee(111, "Amit", "Odisha");
        expect(mgr.employees).not.toContain(emp);
    });
});

describe("Check for Arrays", () => {
    it("should check for arrays", () => {
        const arr = [2, 3, 4];
        expect(arr).toEqual([2, 3, 4]);
    });

    it("should check for same sequence", () => {
        const arr = [2, 3, 4];
        expect(arr).not.toEqual([3, 2, 4]);
    });

    it("should have the same content", () => {
        const arr = [2, 3, 4];
        expect(arr.sort()).toEqual([3, 2, 4].sort());
    });
});
