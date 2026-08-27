function whitespaceRemover() {
  let whitespaceField = document.getElementById("whitespace-field");
  let trimmedText = whitespaceField.value.trim();
  alert(`${trimmedText} is your trimmed text!`);
}
