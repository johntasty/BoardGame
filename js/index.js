
var food =2;
var money = 1;
var studyTokens = 0;
var bikeInv = 0;
var house = 0;
var movement = 3;
var tutorialinv = 0;
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
    localStorage.setItem('TutorialInv',tutorialinv.toString());
  overlay.style.display = 'block';
  popup.style.display = 'block';
  var element = document.getElementById("saveAva");
  element.classList.add("tutorial");
  var elementplay = document.getElementById("PlayButton");
  elementplay.classList.add("tutorial");
}
