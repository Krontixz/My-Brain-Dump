function textSplitter() {
  let typedTextBox1 = document.getElementById("typedTextBox1");
  let typedTextBox1Text = typedTextBox1.value;
  let typedTextBox1SplitText = typedTextBox1Text.slice(0, 10);
  typedTextBox1.value = typedTextBox1SplitText;
  console.log(`I split your text into: ${typedTextBox1SplitText}`);
}
