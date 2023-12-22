function calculateFactorial(){
    var num = parseInt(document.getElementById('number').value)

    // compute factorial here
    var result = 1;
    for(let i=1; i<=num; i++)
    {
        result = result * i;
    }
    console.log("Factorial", result)

    var tableBody = document.getElementById("tBodyData")

    var row = tableBody.insertRow();
    var col1 = row.insertCell(0);
    var col2 = row.insertCell(1);

    col1.innerHTML = num;
    col2.innerHTML = result;

    document.getElementById("number").value = "";

}