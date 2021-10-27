let movement = Number(localStorage.getItem('movementPoints'));
var money = Number(localStorage.getItem('moneyInv'));
var bike = Number(localStorage.getItem('bikeInv'));

var bikeCost = 2;
//display to web all quantities
document.getElementById("money").innerHTML = money;

document.getElementById("bike").innerHTML = bike;

//logic for buy
document.getElementById('buy').onclick = function(){
    if (money < bikeCost){
        alert("Not Enough Money!")
        
    }
    else if(bike > 0){
        alert("You already have a bike")
    }
    else {
        var moneyTotal = money - bikeCost;
        localStorage.setItem('moneyInv', moneyTotal.toString());
        bike = bike + 1;
        localStorage.setItem('bikeInv',bike.toString());
        movement = movement + 1;
        localStorage.setItem('movementPoints',movement.toString());
        document.getElementById("money").innerHTML = money;
        document.getElementById("bike").innerHTML = bike;
        window.location.reload();
}
}