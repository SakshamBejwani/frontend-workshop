function method1(){
    var element = document.getElementById("navbarID")
    element.style.color = "white";
}

function submit() {
    var emailValue = document.getElementById("emailField").value;

    console.log("Email", emailValue);

    var passwordValue = document.getElementById("passwordField").value;
    
    console.log("Password", passwordValue);


    if(emailValue=="admin@admin.com" && passwordValue=="123")
    {
        alert("Logged in as admin!");
    }
}

function calculate() {
    var num1 = parseInt(document.getElementById("number1").value);
    var num2 = parseInt(document.getElementById("number2").value);
    var operation = document.getElementById("operation").value;
    
    var result;
    switch(operation)
    {   
        case 'add':
            result = num1 + num2;
            console.log("Result of addition", result)
            break;
        case 'sub':
            result = num1 - num2;
            console.log("Result of subtraction", result)
            break;
        case 'div':
            result = num1 / num2;
            console.log("Result of division",result)
            break;
        case 'mul':
            result = num1 * num2;
            console.log("Result of multiplication", result)
            break;
        default: alert("Invalid operation");

    }
    document.getElementById("mainResult").innerText = result;
}