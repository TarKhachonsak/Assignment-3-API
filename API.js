// https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline

async function getData(){
    const url = "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
    const res = await fetch(url)
    const json = await res.json()
    const tableData = document.getElementById("tableData")
    
    json.forEach(element => {
        const productName = element.name;
        const productDetail = element.description;

        const row = document.createElement("tr");
        const nameCell = document.createElement("td");
        nameCell.textContent = productName;
        const detailCell = document.createElement("td");
        detailCell.textContent = productDetail;

        row.appendChild(nameCell);
        row.appendChild(detailCell);

        tableData.appendChild(row);
    })
}

getData()