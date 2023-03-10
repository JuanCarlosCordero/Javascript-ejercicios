function convertirFahrenheitACelsius() {
    let fahrenheit = parseFloat(prompt("Ingrese la temperatura en grados Fahrenheit:"));
    let celsius = (fahrenheit - 32) * (5/9);
    alert(`La temperatura en grados Celsius es: ${celsius.toFixed(2)}`);
  }
  
  convertirFahrenheitACelsius();
  