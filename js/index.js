
var food =2;
var money = 1;
var studyTokens = 0;
var bikeInv = 0;
var house = 0;
var movement = 3;

window.onload = function () {
    var avatarhead = new Image();
    var avatarheadnum = Math.floor(Math.random()*4)+1;
    var avatarheadname = "head" + avatarheadnum + ".png";
    avatarhead.src = "img/" + avatarheadname;        
    avatarhead.onload = function(){
        buildAvatar();
    }
    
    function buildAvatar(){
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');  

        
        var grd = ctx.createLinearGradient(40, 45, 120, 0);
        grd.addColorStop(0, "#FF4C1A");
        grd.addColorStop(1, "#EB268F");
        ctx.fillStyle = grd;                          
        ctx.fillRect(0, 0, canvas.width, canvas.height);   
       ///var r = Math.floor(Math.random() * (255 - 100 + 1) + 100);
       //var g = Math.floor(Math.random() * (255 - 100 + 1) + 100);
       //var b = Math.floor(Math.random() * (255 - 100 + 1) + 100); 
       //var bgcol = '#' + r.toString(16) + g.toString(16) + b.toString(16);
       //ctx.fillStyle = bgcol;
       //ctx.fillRect(0, 0, 400, 400);
        
        ctx.imageSmoothingEnabled = false;
        ctx.drawImage(avatarhead,((canvas.width - avatarhead.width)/2),10);
    }
    document.getElementById('PlayButton').onclick = function(){
    localStorage.setItem('headAvatar', avatarheadname.toString()); 
    localStorage.setItem('moneyInv', money.toString());
    localStorage.setItem('foodInv', food.toString());  
    localStorage.setItem('studyInv', studyTokens.toString()); 
    localStorage.setItem('bikeInv', bikeInv.toString());
    localStorage.setItem('houseInv', house.toString());
    localStorage.setItem('movementPoints',movement.toString());
    location.href = "play.html";
    }
}

//var btnP = document.getElementById("PlayButton"); image as button
//btnP.innerHTML = '<img src="img/Play1.png">';


document.getElementById('saveAva').onclick = function(){
    window.location.reload();
}
var closePopup = document.getElementById("popupclose");
var overlay = document.getElementById("overlay");
var popup = document.getElementById("popup");
var button = document.getElementById("button");
// Close Popup Event
overlay.onclick = function(){
    overlay.style.display = 'none';
    popup.style.display = 'none';
}
closePopup.onclick = function() {
    
  overlay.style.display = 'none';
  popup.style.display = 'none';
};
// Show Overlay and Popup
button.onclick = function() {
  overlay.style.display = 'block';
  popup.style.display = 'block';
}
