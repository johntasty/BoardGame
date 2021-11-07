let movement = Number(localStorage.getItem('movementPoints'));
var money = Number(localStorage.getItem('moneyInv'));
var biketotal = Number(localStorage.getItem('bikeInv'));
var bikeCost = 2;
//display to web all quantities
document.getElementById("usedbikeCost").innerHTML = bikeCost;
document.getElementById("money").innerHTML = money;

document.getElementById("bike").innerHTML = biketotal;

//logic for buy
window.onload = function (){    

    var bikeused = new Image();
    var usedbikenum = Math.floor(Math.random()*2)+1;
    var usedbikename = "usedbike" + usedbikenum + ".png";
    bikeused.src = "img/" + usedbikename;

    bikeused.onload = function(){
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
        var scale = Math.min(canvas.width/bikeused.width, canvas.height / bikeused.height);
        var x = (canvas.width/2) - (bikeused.width/2) * scale;
        var y = (canvas.height/2) - (bikeused.height/2) * scale;
        ctx.drawImage(bikeused, x, y, bikeused.width * scale, bikeused.height * scale);
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
        localStorage.setItem('bikeName', usedbikename.toString());
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