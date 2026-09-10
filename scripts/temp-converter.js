function tempConverter() {
  const text = document.getElementById("tempbox").value.toLowerCase();
  const numberMatch = text.match(/-?\d+\.?\d*/);
  if (!numberMatch) {
    alert("Please enter a number in the box!");
    return;
  }
  const num = parseFloat(numberMatch[0]);
  if (text.includes("f") || text.includes("fahrenheit") || text.includes("farentheit")) {
    const toCelsius = ((num - 32) * 5) / 9;
    alert(`${num}°F is equal to ${toCelsius.toFixed(1)}°C`);
  } 
  else if (text.includes("c") || text.includes("celsius")) {
    const toFahrenheit = (num * 9) / 5 + 32;
    alert(`${num}°C is equal to ${toFahrenheit.toFixed(1)}°F`);
  } 
  else {
    alert("Please specify if it's Fahrenheit or Celsius!");
  }
}
