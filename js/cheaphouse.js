var money = Number(localStorage.getItem('moneyInv'));
var house = Number(localStorage.getItem('houseInv'));
var houseCost = 0;
var minimum = 4;
var maximum = 6;
//display to web all quantities
document.getElementById("money").innerHTML = money;
window.onload = function (){
    houseCost = (Math.floor(Math.random() * (maximum - minimum + 1)) + minimum) / 2;
    document.getElementById('cost').innerHTML = houseCost;
}


//logic for buy
document.getElementById('buy').onclick = function(){
    if (money < houseCost){
        alert("Not Enough Money!")
        
    }
    else if(house > 0){
        alert("You already have a House")
    }
    else {
        alert("Congratulations on your new house!")
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