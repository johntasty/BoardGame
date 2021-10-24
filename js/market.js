let food = Number(localStorage.getItem('foodInv'));
var money = Number(localStorage.getItem('moneyInv'));
var foodAmount = 0;
//display to web all quantities
document.getElementById("money").innerHTML = money;
document.getElementById("food").innerHTML = food;

//Increase and Decrease buttons
document.getElementById('increaseButton').onclick = function(){ 
    foodAmount += 1;
    document.getElementById("show").value = foodAmount;
    }
document.getElementById('decreaseButton').onclick = function(){
    foodAmount -= 1;
    document.getElementById("show").value = foodAmount;
}

//Button Creation and logic, checks if enough money or valid amount
document.getElementById('buy').onclick = function(){
    if (foodAmount < 0){
        alert("You cannot Sell food. Choose positive number!")
        foodAmount = 0;
        document.getElementById("show").value = foodAmount;
    }
    else if(foodAmount > money){
        alert("Not enough money.")
        foodAmount = 0;
        document.getElementById("show").value = foodAmount;
    }
    else {var foodAmountTotal = food + foodAmount;
    localStorage.setItem('foodInv', foodAmountTotal.toString());
    money = money - foodAmount;
    localStorage.setItem('moneyInv',money.toString());
    document.getElementById("money").innerHTML = money;
    document.getElementById("food").innerHTML = food;
    window.location.reload();}
}

//redirects to play page
document.getElementById('cancel').onclick = function (){
    location.href = "play.html"
}
window.onload = function(){
    var marketbg = new Image();
    var marketnum = Math.floor(Math.random()*3)+1;
    var marketname = "market" + marketnum + ".png";
    marketbg.src = "img/" + marketname;

    marketbg.onload = function(){
        market();
    }

    function market(){
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');  
        var scale = Math.min(canvas.width/marketbg.width, canvas.height / marketbg.height);
        var x = (canvas.width/2) - (marketbg.width/2) * scale;
        var y = (canvas.height/2) - (marketbg.height/2) * scale;
        ctx.drawImage(marketbg, x, y, marketbg.width * scale, marketbg.height * scale);
    }  

}
