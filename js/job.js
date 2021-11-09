var money = Number(localStorage.getItem('moneyInv'));
var reward = 0;
window.onload = function () {
    var jobhead = new Image();
    var jobheadnum = Math.floor(Math.random()*15)+1;
    var jobheadname = "job" + jobheadnum + ".png";
    jobhead.src = "img/" + jobheadname;    
    reward = Math.floor(Math.random()*3)+1; 
    document.getElementById('reward').innerHTML = reward;
    jobhead.onload = function(){
        buildJob();
    }
    function buildJob(){
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');       
    
        //var scale = Math.min(canvas.width/jobhead.width, canvas.height / jobhead.height)*1;
        //var x = (canvas.width/2) - (jobhead.width/2) * scale;
        //var y = (canvas.height/2) - (jobhead.height/2) * scale;
        ctx.drawImage(jobhead,0,0);
    }
}

//var btnP = document.getElementById("PlayButton"); image as button
//btnP.innerHTML = '<img src="img/Play1.png">';
document.getElementById('PlayButton').onclick = function(){ 
    money = money + reward;
    localStorage.setItem('moneyInv', money.toString());
    location.href = "play.html";
    }
document.getElementById('home').onclick = function (){
        location.href = "play.html"
    }

