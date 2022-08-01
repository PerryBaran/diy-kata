const getEmployerRole = (employeeName, employees) => employees.find(employee => employee.name === employeeName).role;

module.exports = getEmployerRole;
