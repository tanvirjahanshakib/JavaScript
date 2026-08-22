function checkScore(score) {
  if (score >= 50) {
    return "Pass";
  } else {
    return "Fail";
  }
}
 
console.log(checkScore(50));
console.log(checkScore(40)); 
