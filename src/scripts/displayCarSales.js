let container = document.getElementById("display-container");

salesByWeek.forEach(sale => {
    let docFrag = document.createDocumentFragment()
    let h1 = document.createElement("h1")
    let fullName = sale.sales_agent.first_name + " " + sale.sales_agent.last_name;
    h1.textContent = fullName;
    docFrag.appendChild(h1)
    ////
    let vehicleList = document.createElement("ul")
    vehicleList.textContent = "Vehicle Sold: "
    for(const entry of Object.entries(sale.vehicle)){
        let li = document.createElement("li")
        li.textContent = `${entry[0]}: ${entry[1]}`;
        vehicleList.appendChild(li)
    }
    docFrag.appendChild(vehicleList)
    const h3 = document.createElement("h3")
    h3.textContent = `Gross Profit: $${sale.gross_profit}`;
    docFrag.appendChild(h3)

    container.appendChild(docFrag)
})


