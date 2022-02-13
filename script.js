// to hide the totalTip while loading 
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//calling a function
document.getElementById("calculator").onclick = function() { goCalculator(); };

//main code for the function
function goCalculator() {

    //importing the input values
    var billAmount = document.getElementById("billAmount").value;
    var serviceQuality = document.getElementById("serviceQuality").value;
    var totalPeople = document.getElementById("totalPeople").value;

    //Quick validation
    if (billAmount === "" || billAmount === "0" || serviceQuality === "0") {
        window.alert("put some value to make this baby go");
        return;
    }

    if (totalPeople == "" || totalPeople <= "1") {
        totalPeople ="1";
        document.getElementById("each").style.display = "none";

    } else {
        document.getElementById("each").style.display = "block";
    }

    //maths part
    var total = (billAmount * serviceQuality)/totalPeople;
    total = Math.round(total * 100)/100;
    total = total.toFixed(2);

    //Display Total Amount
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;


}