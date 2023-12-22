//items goes into array
let itemList = [] 

function addItem(){
    var item = document.getElementById('itemField').value;

    // push into array
    itemList.push(item);

    document.getElementById('itemField').value = '';

    console.log(itemList);
}

function updateTable() {
    
    var table = document.getElementById("dataTable")
    table.innerHTML = `<thead>
                    <th>S.No</th>
                    <th>Item</th>
                    <th>Actions</th>
                    </thead>`
    itemList.forEach((item, index) => {
        var row = table.insertRow(-1);
        var col1 = row.insertCell(0);
        var col2 = row.insertCell(1);
        var col3 = row.insertCell(2);

        col1.innerHTML = index+1;
        col2.innerHTML = item;
        col3.innerHTML = `<button>Delete</button>`
    });
   
}



function main(){
    addItem()
    updateTable()
}
