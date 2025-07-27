function convertTemperature() {
    const degrees = parseFloat(document.getElementById("Degrees").value);
    const type = document.getElementById("Type").value;
    const resultField = document.getElementById("Result");

    if (isNaN(degrees)) {
        resultField.value = "Please enter a number that's valid";
        return;
    }

    let result = 0;

    if (type === "fahrenheit") {
        // Fahrenheit to Celsius
        result = (degrees - 32) * 5 / 9;
        resultField.value = result.toFixed(4) + " °C";
    } else if (type === "celsius") {
        // Celsius to Fahrenheit
        result = (degrees * 9 / 5) + 32;
        resultField.value = result.toFixed(4) + " °F";
    }
}
