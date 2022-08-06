class Employee {
  constructor(name, department, hoursPerMonth, payRate) {
    this.name = name;
    this.department = department;
    this.hoursPerMonth = hoursPerMonth;
    this.payRate = payRate;
  }
  calculatePay() {
    return this.hoursPerMonth * this.payRate;
  }
}

class FullTimeEmployee extends Employee {
  static #PAY_RAYE = 10000;
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, FullTimeEmployee.#PAY_RAYE);
  }
}

class PartTimeEmployee extends Employee {
  static #PAY_RAYE = 8000;
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, PartTimeEmployee.#PAY_RAYE);
  }
}

const ellie = new FullTimeEmployee("앨리", "s/w", 30);
const bob = new PartTimeEmployee("밥", "s/w", 20);
console.log(ellie.calculatePay());
console.log(bob.calculatePay());
