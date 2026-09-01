function coinFlip() {
  let guess = document.getElementById("guess-box").value.toLowerCase();
  if (guess === "heads" || guess === "tails") {
    let result = Math.random() < 0.5 ? "heads" : "tails";
    alert(`It landed on ${result}`);
  }
  else {
    alert(`That is not a valid answer`);
  }
}
    
