import { EmployeeManager, Employee } from "../src/employee-manager";

describe("EmployeeManager", () => {
  test("Should return the regular hours from an employee", () => {
    const employee = new Employee(1, "John", "Sales", 10, 45);
    const employeeManager = new EmployeeManager();
    expect(employeeManager.regularHours(employee)).toBe(40);
  });
  test("Should return the payment from an employee without overtime hours", () => {
    const employee = new Employee(1, "John", "HR", 10, 45);
    const employeeManager = new EmployeeManager();
    employeeManager.save(employee);
    expect(employeeManager.calculatePay(1)).toBe(400);
  });
  test("Should return an Employee reported Hours", () => {
    const employee = new Employee(1, "John", "Developer", 10, 45);
    const employeeManager = new EmployeeManager();
    employeeManager.save(employee);
    expect(employeeManager.reportHours(1)).toBe(45);
  });
});
