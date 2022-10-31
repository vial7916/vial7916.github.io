/** Problem 1 */

 let employees = {
    "employeeList": [
      {
      "firstName": "Sam",
      "department": "Tech",
      "designation": "Manager",
      "salary": 40000,
      "raiseEligible": true
    },
    {
      "firstName": "Mary",
      "department": "Finance",
      "designation": "Trainee",
      "salary": 18500,
      "raiseEligible": true
    },
    {
      "firstName": "Bill",
      "department": "HR",
      "designation": "Executive",
      "salary": 21200,
      "raiseEligible": false
    }]
  }
 console.log(employees);
 
/** Problem 2 */
 
  let company = {
    "companyName": "Tech Stars",
    "website": "www.techstars.site",
    "employeeList": [
      {
      "firstName": "Sam",
      "department": "Tech",
      "designation": "Manager",
      "salary": 40000,
      "raiseEligible": true
    },
    {
      "firstName": "Mary",
      "department": "Finance",
      "designation": "Trainee",
      "salary": 18500,
      "raiseEligible": true
    },
    {
      "firstName": "Bill",
      "department": "HR",
      "designation": "Executive",
      "salary": 21200,
      "raiseEligible": false
    }]
  }
 console.log(company);
 
/** Problem 3 */

  let newEmployee = {
    "companyName": "Tech Stars",
    "website": "www.techstars.site",
    "employeeList": [
      {
      "firstName": "Sam",
      "department": "Tech",
      "designation": "Manager",
      "salary": 40000,
      "raiseEligible": true
    },
    {
      "firstName": "Mary",
      "department": "Finance",
      "designation": "Trainee",
      "salary": 18500,
      "raiseEligible": true
    },
    {
      "firstName": "Bill",
      "department": "HR",
      "designation": "Executive",
      "salary": 21200,
      "raiseEligible": false
    }]
  }
  console.log(newEmployee);
 
  function addEmployee(obj, name, depar, desig, salar, raise) {
   let employee = {
     "firstName": name,
     "department": depar,
     "designation": desig,
     "salary": salar,
     "raiseEligible": raise
   };
   obj['employeeList'].push(employee);
 }
 addEmployee(newEmployee, "Anna", "Tech", "Executive", 25600, false);
 
/** Problem 4 */

 let totalSalary = 0;
 for(let i = 0; i < newEmployee.employeeList.length; i++){
   totalSalary += newEmployee.employeeList[i]['salary'];
 }
 
 console.log(totalSalary);

/** Problem 5 */
 
 for(let i = 0; i < newEmployee.employeeList.length; i++){
   if(newEmployee.employeeList[i]['raiseEligible'] === true){
     newEmployee.employeeList[i]['salary'] += newEmployee.employeeList[i]['salary'] * .1;
     newEmployee.employeeList[i]['raiseEligible'] = false;
   }
 }
 console.log(newEmployee.employeeList);
 
/** Problem 6 */

 let wfh = ['Anna', 'Sam'];
 for(let i = 0; i < newEmployee.employeeList.length; i++){
   let check = false;
   let name = newEmployee.employeeList[i].firstName;
   console.log(check);
   for(let j = 0; j < wfh.length; j++){
     if(wfh[j] === name){
       check = true;
     }
   }
   if(check === true){
     newEmployee['employeeList'][i].workFromHome = true;
   }
   else {
     newEmployee['employeeList'][i].workFromHome = false;
     }
 }
 console.log(newEmployee);