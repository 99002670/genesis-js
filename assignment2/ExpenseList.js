class Expense
{
    constructor(serial, description, amount, date)
    {
        this.serial = serial;
        this.description = description;
        this.amount = amount;
        this.date = date;
    }
   
    displayRecords()
    {
        let row = "<tr><td>" + this.serial + "</td>";
        row += "<td>" + this.description + "</td>";
        row += "<td>" + this.date + "</td>";
        row += "<td>" + this.amount+ "</td></tr>";
        let new_ROW = $get("tblRecords").insertRow(1)
        new_ROW.innerHTML += row;
    }
       
    display()
    {
        console.log(this.serial);
        console.log(this.description);
        console.log(this.amount);
        console.log(this.date);
    }
}