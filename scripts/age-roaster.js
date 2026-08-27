function ageRoaster() {
  let ageText = Number(document.getElementById("age-field").value);
  
  if (ageText >= 0 && ageText <= 10) {
    alert(`Your age is ${ageText} and you are still as old as me!`);
  } else if (ageText > 10 && ageText <= 12) {
    alert(`Your age is ${ageText} and you arent a stinking teenager!`);
  } else if (ageText >= 13 && ageText <= 17) {
    alert(`Your age is ${ageText} and you are a stinking teenager!`);
  } else if (ageText >= 18 && ageText <= 25) {
    alert(`Your age is ${ageText} and you are in college like innaya!`);
  } else if (ageText >= 26 && ageText <= 35) {
    alert(`Your age is ${ageText} and you are kinda like aquel bobby and should be married!`);
  } else if (ageText >= 36 && ageText <= 50) {
    alert(`Your age is ${ageText} and you are mama and baba and definetaly should be married!`);
  } else if (ageText > 50 && ageText <= 100) {
    alert(`AGE TOO HIGH YOU ARE OLD`);
  } else {
    alert(`You didnt enter a number from 1-100 or you are just really old.`);
  }
}
