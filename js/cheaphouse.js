var money = Number(localStorage.getItem('moneyInv'));
var house = Number(localStorage.getItem('houseInv'));
var houseCost = 0;
var minimum = 2;
var maximum = 4;
//display to web all quantities
document.getElementById("money").innerHTML = money;
window.onload = function (){
    houseCost = (Math.floor(Math.random() * (maximum - minimum + 1)) + minimum);
    document.getElementById('cost').innerHTML = houseCost;
    var housebg = new Image();
    var housenum = Math.floor(Math.random()*5)+1;
    var housename = "house" + housenum + ".png";
    housebg.src = "img/" + housename;

    housebg.onload = function(){
        housefun();
    }

    function housefun(){
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');  
        var scale = Math.min(canvas.width/housebg.width, canvas.height / housebg.height);
        var x = (canvas.width/2) - (housebg.width/2) * scale;
        var y = (canvas.height/2) - (housebg.height/2) * scale;
        ctx.drawImage(housebg, x, y, housebg.width * scale, housebg.height * scale);
    }  
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
            localStorage.setItem('houseName', housename.toString());
            document.getElementById("money").innerHTML = money;        
            location.href = 'play.html';
        }
    }
}


document.getElementById('cancel').onclick = function() {
    location.href = 'play.html';
}



