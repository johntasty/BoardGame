let movement = Number(localStorage.getItem('movementPoints'));
var money = Number(localStorage.getItem('moneyInv'));
var biketotal = Number(localStorage.getItem('bikeInv'));
var bikeCost = 4;
//display to web all quantities
document.getElementById("bikeCost").innerHTML = bikeCost;
document.getElementById("money").innerHTML = money;

document.getElementById("bike").innerHTML = biketotal;

//logic for buy
console.log(bike);
window.onload = function (){    

    var bike = new Image();
    var bikenum = Math.floor(Math.random()*4)+1;
    var bikename = "bike" + bikenum + ".png";
    bike.src = "img/" + bikename;

    bike.onload = function(){
        bikefun();
    }

    function bikefun(){
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');  
        var r = Math.floor(Math.random() * (255 - 100 + 1) + 100);
        var g = Math.floor(Math.random() * (255 - 100 + 1) + 100);
        var b = Math.floor(Math.random() * (255 - 100 + 1) + 100); 
        var bgcol = '#' + r.toString(16) + g.toString(16) + b.toString(16);
        ctx.fillStyle = bgcol;
        ctx.fillRect(0, 0, 400, 400);
        var scale = Math.min(canvas.width/bike.width, canvas.height / bike.height);
        var x = (canvas.width/2) - (bike.width/2) * scale;
        var y = (canvas.height/2) - (bike.height/2) * scale;
        ctx.drawImage(bike, x, y, bike.width * scale, bike.height * scale);
    }  
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
        var bikenow = biketotal + 1;
        localStorage.setItem('bikeName', bikename.toString());
        localStorage.setItem('bikeInv',bikenow.toString());
        var movementnow = movement + 1;
        localStorage.setItem('movementPoints',movementnow.toString());
        document.getElementById("money").innerHTML = money;
        document.getElementById("bike").innerHTML = bikenow;
        window.location.reload();
}
}
}
document.getElementById('cancel').onclick = function() {
    location.href = 'play.html';
}