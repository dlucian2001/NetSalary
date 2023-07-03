const calculateBtn = document.querySelector('.button-12');
const grossSalaryInput = document.getElementsByClassName('type')[0];
const netSalaryDisplay = document.getElementsByClassName('net')[0];

calculateBtn.addEventListener("click", calculateNetSalary);

function calculateNetSalary() {
  const grossSalary = parseFloat(grossSalaryInput.value);
  const socialSecurityTax = grossSalary * 0.25;
  const healthInsuranceTax = grossSalary * 0.1;
  const taxableIncome = grossSalary - socialSecurityTax - healthInsuranceTax;
  let incomeTax;

  if (taxableIncome <= 23350) {
    incomeTax = taxableIncome * 0.1;
  } else if (taxableIncome <= 85500) {
    incomeTax = 2335 + (taxableIncome - 23350) * 0.16;
  } else if (taxableIncome <= 180000) {
    incomeTax = 11915 + (taxableIncome - 85500) * 0.25;
  } else if (taxableIncome <= 220000) {
    incomeTax = 35720 + (taxableIncome - 180000) * 0.3;
  } else if (taxableIncome <= 290000) {
    incomeTax = 48720 + (taxableIncome - 220000) * 0.35;
  } else {
    incomeTax = 82420 + (taxableIncome - 290000) * 0.45;
  }

  const netSalary = grossSalary - socialSecurityTax - healthInsuranceTax - incomeTax;
  
  netSalaryDisplay.innerHTML = "Salariu net " + netSalary.toFixed(2) + " Lei";
}
