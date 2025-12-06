function monthlySavings(payments, livingCost) {
  
  if (!Array.isArray(payments) || typeof livingCost !== "number") {
    return "invalid input";
  }

  let totalAfterTax = 0;

  for (let payment of payments) {
    if (payment >= 3000) {
      totalAfterTax += payment * 0.8;
    } else {
      totalAfterTax += payment;
    }
  }

  let savings = totalAfterTax - livingCost;

  if (savings < 0) {
    return "earn more";
  }
  return savings;
}

console.log(monthlySavings([1000, 2000, 3000], 5400)); 
console.log(monthlySavings([1000, 2000, 2500], 5000)); 
console.log(monthlySavings([900, 2700, 3400], 10000)); 
console.log(monthlySavings(100, [900, 2700, 3400])); 

