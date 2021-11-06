var food = Number(localStorage.getItem('foodInv'));
var foodCount = Number(localStorage.getItem('foodCard'));
var money = Number(localStorage.getItem('moneyInv'));
var study = Number(localStorage.getItem('studyInv'));
var movement = Number(localStorage.getItem('movementPoints'));

var closePopup = document.getElementById("popupclose");
var overlay = document.getElementById("overlay");
var popup = document.getElementById("popup");
if (food >= 0){
  movement = 3;
  localStorage.setItem('movementPoints',movement.toString());
}
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

document.getElementById('foodplus').onclick = function (){
  food += 1;
  if (food < 0){
    food = 0;
  }
  localStorage.setItem('foodInv', food);
  document.getElementById("food").innerHTML = food;
}
document.getElementById('foodminus').onclick = function (){
  food -= 1;
  localStorage.setItem('foodInv', food);
  document.getElementById("food").innerHTML = food;
}

document.getElementById('moneyplus').onclick = function (){
  money += 1;
  localStorage.setItem('moneyInv', money);
  document.getElementById("money").innerHTML = money;
}

document.getElementById('moneyminus').onclick = function (){
  money -= 1;
  localStorage.setItem('moneyInv', money);
  document.getElementById("money").innerHTML = money;
}
document.getElementById('walkplus').onclick = function (){
  movement += 1;
  localStorage.setItem('movementPoints', movement);
  document.getElementById("movement").innerHTML = movement;
}
document.getElementById('walkminus').onclick = function (){
  movement -= 1;
  localStorage.setItem('movementPoints', movement);
  document.getElementById("movement").innerHTML = movement;
}


document.getElementById('endturn').onclick = function() {
  food -= 1;
  if (food < 0){
    movement -=1;    
  };
  if(food >= 0){
    window.location.reload();
    localStorage.setItem('movementPoints', movement);
  }
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
    
   
    if (localStorage.getItem("houseName") === null) {
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
  }else {
      var housename = localStorage.getItem("houseName");
      var house = new Image();
      house.src = "img/" + housename;
      var avatarhead = new Image();
        avatarhead.src = "img/" + avatarheadname;
       avatarhead.onload = function(){
         buildAvatar();
     }
      console.log(house);
       function buildAvatar(){
       var canvas = document.getElementById('canvas');
       var ctx = canvas.getContext('2d'); 
       var scale = Math.min((canvas.width/house.width, canvas.height / house.height)*1.2);
       var x = (canvas.width/2) - (house.width/2) * scale;
       var y = (canvas.height/2) - (house.height/2) * scale;
       ctx.drawImage(house, x, y, house.width * scale, house.height * scale); 
       var scalehead = Math.min((canvas.width/avatarhead.width, canvas.height / avatarhead.height)*0.5);
       var xhead = (canvas.width/6) - (avatarhead.width/2) * scalehead;
       var yhead = (canvas.height/2) - (avatarhead.height/2) * scalehead;  
       ctx.drawImage(avatarhead, xhead, yhead, avatarhead.width * scalehead, avatarhead.height * scalehead); 

       
     }
  }
    
    
}
document.getElementById('storageClear').onclick = function() {
  localStorage.clear();
  location.href = "index.html"
}


