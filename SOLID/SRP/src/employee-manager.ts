export class Employee {
  id: number;
  name: string;
  department: string;
  hourlyRate: number;
  hoursWorked: number;

  constructor(
    id: number,
    name: string,
    department: string,
    hourlyRate: number,
    hoursWorked: number
  ) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.hourlyRate = hourlyRate;
    this.hoursWorked = hoursWorked;
  }
}

export class EmployeeManager {
  employees: Employee[] = [];

  constructor() {
    this.employees = [];
  }

  save(employee: Employee) {
    this.employees.push(employee);
  }

  calculatePay(employeeId: number) {
    const employee = this.employees.find((emp) => emp.id === employeeId);
    if (!employee) return 0;
    const regularHours = this.regularHours(employee);
    return regularHours * employee.hourlyRate;
  }

  reportHours(employeeId: number) {
    const employee = this.employees.find((emp) => emp.id === employeeId);
    if (!employee) return 0;
    return this.regularHours(employee);
  }

  regularHours(employee: Employee) {
    const baseHours = Math.min(40, employee.hoursWorked);
    return baseHours;
  }
}
