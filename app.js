function ConvertToCelcius() {
   
    // Read the textvalue from the inputbox named inputFahrenheit
    let myInput = document.getElementById("inputFahrenheit").value;
   
    // Calculate Fahrenheit into Celsius formula: (Fahrenheit - 32) * 5) / 9;
    let celsius = ((myInput - 32) * 5) / 9;
   
    // Display the result into a textfield on the page
    document.getElementById("result").innerHTML = celsius;
}







        //Writing a problemstatement and the solution in pseudocode

        // Input? 
        let fahrenheit = 68;


        // Algoritme (step by step)
        // (Degree in Fahrenheit - 32) * 5/9
        // Step 1. Calculate Fanhrenheid - 32
        // Step 2. The result of step 1 * 5/9
        // Step 3. Display the result
    //    let step1 = (fahrenheit - 32)
    //    let step2 = step1 * (5/9)
        let celcius = (fahrenheit - 32) * 5/9;


        // Output
        console.log(celsius);
