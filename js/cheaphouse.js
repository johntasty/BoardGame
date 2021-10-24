var money = Number(localStorage.getItem('moneyInv'));
var house = Number(localStorage.getItem('houseInv'));
var houseCost = 3;
//display to web all quantities
document.getElementById("money").innerHTML = money;


//logic for buy
document.getElementById('buy').onclick = function(){
    if (money < houseCost){
        alert("Not Enough Money!")
        
    }
    else if(houseCost > 0){
        alert("You already have a House")
    }
    else {
        var moneyTotal = money - houseCost;
        localStorage.setItem('moneyInv', moneyTotal.toString());
        house = house + 1;
        localStorage.setItem('houseInv',house.toString());
        document.getElementById("money").innerHTML = money;        
        window.location.reload();
}
}
document.getElementById('cancel').onclick = function() {
    location.href = 'play.html';
}