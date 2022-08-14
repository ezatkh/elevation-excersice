const employee = {
  ax01: {
    name: "Ray",
    age: 28,
    salary: 1300,
  },
  qs84: {
    name: "Lucius",
    age: 21,
    salary: 840,
  },
  bg33: {
    name: "Taylor ",
    age: 18,
    salary: 2700,
  },
};
function findEmployeeSalary(employeeID) {
  console.log(employee[employeeID].salary);
}
findEmployeeSalary("ax01");
