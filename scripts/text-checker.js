function textChecker() {
  let typedText = document.getElementById("typedTextBox");
  let typedTextReturn = typedText.value;
  let typedTextIncludes = typedTextReturn.includes("coding") || typedTextReturn.includes("zaki");
  alert(`Your text includes coding or zaki: ${typedTextIncludes}`);
}
