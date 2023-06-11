// Write your solution in this file!
const employee = {
  name: "John",
  streetAddress: "Nyayo Estate Embakasi, Nairobi",
};

function updateEmployeeWithKeyAndValue(employeeObject, key, value) {
  return { ...employeeObject, [key]: value };
}

function destructivelyUpdateEmployeeWithKeyAndValue(
  employeeObject,
  key,
  value
) {
  employeeObject[key] = value;
  return employeeObject;
}

function deleteFromEmployeeByKey(employee, key) {
  const newObj = { ...employee };
  delete newObj[key];

  return newObj;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}
