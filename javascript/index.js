function validateFn()
{
    var estate_name = document.getElementById("estate_name").value;
    var estate_length = document.getElementById("estate_length").value;
    var estate_breadth = document.getElementById("estate_breadth").value;
    var cost_per_feet = document.getElementById("cost_per_feet").value;
    var estate_type = document.getElementById("estate_type").value;

    var total= estate_breadth * estate_length * cost_per_feet;

    if(estate_length < 10 || estate_breadth < 10)
    {
        alert("Length and breadth should be greater than 10");
        document.getElementById("estate_length").value=""; 
        document.getElementById("estate_breadth").value="";
    }
    
    if(estate_length > 10 && estate_breadth > 10)
    {
        if(cost_per_feet != "")
        {
            alert("Total: "+ total);
        }
        
    }

   
}
