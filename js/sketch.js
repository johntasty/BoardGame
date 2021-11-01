

var food = Number(localStorage.getItem('foodInv'));
var foodCount = Number(localStorage.getItem('foodCard'));
var money = Number(localStorage.getItem('moneyInv'));
var study = Number(localStorage.getItem('studyInv'));
var movement = Number(localStorage.getItem('movementPoints'));

var closePopup = document.getElementById("popupclose");
var overlay = document.getElementById("overlay");
var popup = document.getElementById("popup");

let gif;
function preload(){
    
    url = "img/v1.gif"
    gif = loadImage(url);
}
function setup(){
    let cvn = createCanvas(500,450);
    cvn.parent('canvasrip');    
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function draw(){
    image(gif,0,0);
}
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


document.getElementById('endturn').onclick = function() {
  food -= 1;
  if (food <= 0){
    movement -=1;    
  };
  localStorage.setItem('movementPoints', movement);
  localStorage.setItem('foodInv', food);
  document.getElementById("food").innerHTML = food;
  document.getElementById("movement").innerHTML = movement;
  if (movement <= 0){
    overlay.style.display = 'block';
    popup.style.display = 'block';
    }
  

}
document.getElementById("food").innerHTML = food; 
document.getElementById('money').innerHTML = money;
document.getElementById("movement").innerHTML = movement;

var avatarheadname = localStorage.getItem('headAvatar');
window.onload = function () {
    var avatarhead = new Image();
    
    avatarhead.src = "img/" + avatarheadname;
 
  avatarhead.onload = function(){
    buildAvatar();
}
    function buildAvatar(){
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');    
    
    ctx.drawImage(avatarhead,((canvas.width - avatarhead.width)/2),10);
  }
}
document.getElementById('storageClear').onclick = function() {
  localStorage.clear();
  location.href = "index.html"
}


