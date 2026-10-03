function truthyOrFalsy() {
  const text = document.getElementById("truthyorfalsyinput").value;
  const boolean = Boolean(text);
  if (boolean === true) {
    alert(`Your text is truthy!`);
  } else {
    alert(`Your text is falsy!`);
  }
}