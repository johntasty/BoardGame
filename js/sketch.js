

var food = Number(localStorage.getItem('foodInv'));
var foodCount = Number(localStorage.getItem('foodCard'));
var money = Number(localStorage.getItem('moneyInv'));
var study = Number(localStorage.getItem('studyInv'));
var movement = Number(localStorage.getItem('movementPoints'));

document.getElementById('endturn').onclick = function() {
  food -= 1;
  if (food <= 0){
    movement -=1;    
  };
  localStorage.setItem('movementPoints', movement);
  localStorage.setItem('foodInv', food);
  document.getElementById("food").innerHTML = food;
  document.getElementById("movement").innerHTML = movement;
  

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

document.getElementById('test').onclick = function() {
  location.href = "cardone.html";
}
