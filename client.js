// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.




// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus( employee ) {  
  // your logic here
  //INPUTS: Object: employeeName, employeeNumber, annulSalary, reviewRating
  //SIDE EFFECTS: 
  //OUTPUTS: Object: name, bonus percentage, total compensation, total bonus
  let bonusPercentage;
  if (employee.reviewRating <= 2){
    bonusPercentage = 0;
  }else if (employee.reviewRating === 3 ){
    bonusPercentage = 0.04; 
  }else if(employee.reviewRating === 4){
    bonusPercentage = 0.06; 
  }else if(employee.reviewRating === 5){
    bonusPercentage = 0.10;
  }

  if (employee.employeeNumber)
  // const calculate = {
  //   name: employee.name,

  //   bonusPercentage: bonusPercentage,

  //   totalCompensation: 


    // totalCompensation:

    // totalBonus:

  return bonusPercentage;
}

  // return new object with bonus results

  let testEmployee = {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  }


console.log(calculateIndividualEmployeeBonus(testEmployee));