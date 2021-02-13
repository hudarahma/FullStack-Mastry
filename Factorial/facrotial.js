const n =5;
const factorail = (n) => {

  if (n === 0 || n ===1) {
    return 1;
  } else {
    return n * factorail(n-1);
  }
  
}

console.log(`Factorail of ${n} is -->`,factorail(5));