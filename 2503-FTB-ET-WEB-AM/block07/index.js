//Below is my Psuedocode
    // STEP 1
        //Create a message to the user.
        //Message to display in dialog box: Congratulations!!   You are receiving this message because you have been chosen to open an important vault!
    
    // STEP 2
        // Create three const variables and assign each one a value; these values will not change.

    // STEP 3
        // Create nine new different const variables and assign each one to a different arithmetic expression. 
                
    // STEP 4
        // Create three alert dialog boxes to display this string: "Here is the secret combination: ", and in combination with the variable values to display the vault codes. 

        // Create another three alert dialog boxes to display this string: `Here is the secret combination:`, and in combination with the template strings to display the vault codes. 
    
    // STEP 5
        // Be sure to include comments throughout the code.


// Implementing my psuedocode with comments
// STEP 1
// Creating a string for the user and creating an initial alert dialog box
alert("Congratulations!!   You are receiving this message because you have been chosen to open an important vault!");

// STEP 2
// Assigning three const variables
const num1= 5;
const num2= 4;
const num3= 7;

// STEP 3
// Using an arithmetic expression to equal the three codes in the combination: 10 40 39
// As a challenge, I choose to use three different arithmetic expressions to equal the same output three times.
// That's why there is three outputs for the vault code 10, and so on.   
const codeA= num1 + 5;
console.log(codeA);             // equal 10

const codeB= num1 * 2;
console.log(codeB);             // equal 10

const codeC= (num1 * 3) - 5;
console.log(codeC);             // equal 10

const codeD= num2 * 10;
console.log(codeD);             // equal 40

const codeE= (num2 * 9) + 4;
console.log(codeE);             // equal 40

const codeF= num2 * (5 + 5);
console.log(codeF);             // equal 40

const codeG= (num3 * 5) + 4;
console.log(codeG);             // equal 39

const codeH= (num3 * 6) - 3;
console.log(codeH);             // equal 39

const codeI= (num3 * 7) - 10;
console.log(codeI);             // equal 39

// STEP 4
// Creating three alert dialog boxes to display the vault codes utilizing a greeting, empty strings, const variable names (from STEP 3), and concatenation symbols
alert("Here is the secret combination: " + codeA + " " + codeD + " " + codeG);

alert("Here is the secret combination: " + codeB + " " + codeE + " " + codeH);

alert("Here is the secret combination: " + codeC + " " + codeF + " " + codeI);


// Creating three alert dialog boxes to display the vault codes utilizing a greeting, back ticks, const variable names (from STEP 3), and template literals
alert(`Here is the secret combination: ${codeA} - ${codeD} - ${codeG}`);

alert(`Here is the secret combination: ${codeB} - ${codeE} - ${codeH}`);

alert(`Here is the secret combination: ${codeC} - ${codeF} - ${codeI}`);

