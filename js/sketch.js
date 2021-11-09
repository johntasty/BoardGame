var food = Number(localStorage.getItem('foodInv'));
var foodCount = Number(localStorage.getItem('foodCard'));
var money = Number(localStorage.getItem('moneyInv'));
var study = Number(localStorage.getItem('studyInv'));
var movement = Number(localStorage.getItem('movementPoints'));
var tutorialinv = Number(localStorage.getItem('TutorialInv'));
var bikeinv = Number(localStorage.getItem('bikeInv'));
var closePopup = document.getElementById("popupclose");
var overlay = document.getElementById("overlay");
var popup = document.getElementById("popup");
var tutorialclose = document.getElementById("tutorialclose");
var tutorial = document.getElementById("tutorial");
var poptutorial = document.getElementById("tutorialpop");
var mapimg = document.getElementById("tutorialimg");
if ((food >= 0)&&(bikeinv === 1)){
  movement = 4;
  localStorage.setItem('movementPoints',movement.toString());
}
else if((food >=0)&&(bikeinv === 0)){
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
helptutorial.onclick = function(){
  tutorial.style.display = 'block';
  poptutorial.style.display = 'block';
  mapimg.style.display = 'block';
}
tutorial.onclick = function(){
  tutorial.style.display = 'none';
  poptutorial.style.display = 'none';
  mapimg.style.display = 'none';
}
tutorialclose.onclick = function() {
  mapimg.style.display = 'none';  
  tutorial.style.display = 'none';
  poptutorial.style.display = 'none';
};
let tutorialstep = 0;
document.getElementById('counter').innerHTML = tutorialstep;
let textshow = "This is your inventory. <br>Use the markets to buy food!<br>"+
"Use money to buy suplies, a house or a bike. A house is needed to win the game, and food is needed to survive.";
let textshowQr = "This is the QR scanner, use this to scan the codes on the board.<br>"+
"Each code you scan takes you to the corresponding interaction page.";
let textshowNext = "This is your map, on it there are QR codes, scan those to interact with the map. "+
"<br> The map is divided into districts, moving from district to district costs 1 Movement Point, you have 3 per round."+
" Buying a bike gives you +1 movement. Moving within a district does not cost movement.";
let textshowgoal = "The goal of the game is to gather Study Tokens, you can earn those by Study Cards at Zernike Campus."+
"The amount you need to gather can be decided by the players. Good Luck!"
let textbus = "You can also use the bus to move around the map, using the bus does not cost movement BUT triggers an Event. Draw an event card"
let textending = "At the end of each round press end turn, watch your food, if it goes below 0 your movement will decrease!"
//tutorial highlight creation

document.getElementById('next').onclick = function(){  
  tutorialstep+= 1;
  if(tutorialstep >= 6){
    tutorialstep = 6;
  }
  document.getElementById('counter').innerHTML = tutorialstep;
  console.log(tutorialstep); 
  if (tutorialstep == 1){  
    document.getElementById('testingshow').innerHTML = textshowgoal;
  }
  if (tutorialstep == 2){    
    var elementimg = document.getElementById('tutorialimg');
    elementimg.classList.add('boardimg');    
    document.getElementById('testingshow').innerHTML = textshowNext; 
  }
  if (tutorialstep == 3){
    var elementbusimg = document.getElementById('tutorialimg');
    elementbusimg.classList.add('busimg'); 
    var elementimg = document.getElementById('tutorialimg');
    elementimg.classList.remove('boardimg');    
    document.getElementById('testingshow').innerHTML = textbus;      
    }        
  if (tutorialstep == 4){
    var elementtwo = document.getElementById('btn-scan-qr');
    elementtwo.classList.add('imginventory');
    var elementbusimg = document.getElementById('tutorialimg');
    elementbusimg.classList.remove('busimg');          
    document.getElementById('testingshow').innerHTML = textshowQr;
    }         
    if (tutorialstep == 5){
    var element = document.getElementById('foodinvparent');
    element.classList.add('inventoryhelp');        
    var elementtwo = document.getElementById('btn-scan-qr');
    elementtwo.classList.remove('imginventory');                     
    document.getElementById('testingshow').innerHTML = textshow; 
    }
    if (tutorialstep == 6){
      var elementend = document.getElementById("endturn");
      elementend.classList.add('endturnhigh');
      var element = document.getElementById('foodinvparent');
      element.classList.remove('inventoryhelp');  
      document.getElementById('testingshow').innerHTML = textending;
    } 
    
  }  
  

document.getElementById('back').onclick = function(){
  tutorialstep-= 1;
  document.getElementById('counter').innerHTML = tutorialstep;
  if(tutorialstep <= 1){
    tutorialstep = 1;
  }
  if (tutorialstep == 1){  
    document.getElementById('testingshow').innerHTML = textshowgoal;
    var element = document.getElementById('foodinvparent');
    element.classList.remove('inventoryhelp');            
    }
    if (tutorialstep == 2){
      var elementbusimg = document.getElementById('tutorialimg');
      elementbusimg.classList.remove('busimg');   
      var elementimg = document.getElementById('tutorialimg');
      elementimg.classList.add('boardimg');   
      var element = document.getElementById('foodinvparent');
      element.classList.remove('inventoryhelp'); 
      var elementtwo = document.getElementById('btn-scan-qr');
      elementtwo.classList.remove('imginventory');              
      document.getElementById('testingshow').innerHTML = textshowNext;
      }        
    if (tutorialstep == 3){
      var elementimg = document.getElementById('tutorialimg');
      elementimg.classList.remove('boardimg'); 
      var elementbusimg = document.getElementById('tutorialimg');
      elementbusimg.classList.add('busimg');   
      var elementtwo = document.getElementById('btn-scan-qr');
      elementtwo.classList.remove('imginventory');             
      document.getElementById('testingshow').innerHTML = textbus; 
      }         
      if (tutorialstep == 4){
        var elementtwo = document.getElementById('btn-scan-qr');
        elementtwo.classList.add('imginventory');
        var element = document.getElementById('foodinvparent');
        element.classList.remove('inventoryhelp');     
        var element = document.getElementById('tutorialimg');
        element.classList.remove('boardimg');          
        document.getElementById('testingshow').innerHTML = textshowQr;
      } 
      if (tutorialstep == 5){
      var element = document.getElementById('foodinvparent');
      element.classList.add('inventoryhelp');        
      var elementtwo = document.getElementById('btn-scan-qr');
      elementtwo.classList.remove('imginventory');  
      var elementend = document.getElementById("endturn");
      elementend.classList.remove('endturnhigh');                   
      document.getElementById('testingshow').innerHTML = textshow; 
      }
      if (tutorialstep == 6){
        var elementend = document.getElementById("endturn");
        elementend.classList.add('endturnhigh');
        var element = document.getElementById('foodinvparent');
        element.classList.remove('inventoryhelp');  
        document.getElementById('testingshow').innerHTML = textending;
      }
  }

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
  if (tutorialinv == 0){
    tutorial.style.display = 'block';
    poptutorial.style.display = 'block';
    mapimg.style.display = 'block';
    tutorialinv += 1;
    localStorage.setItem('TutorialInv',tutorialinv);
    }
  if ((localStorage.getItem("bikeName") !== null) && (localStorage.getItem("houseName") !== null)) {
      var housename = localStorage.getItem("houseName");
      var bikename = localStorage.getItem("bikeName");
      var house = new Image();
      var bike = new Image();
      var avatarhead = new Image();
      house.src = "img/" + housename;      
      bike.src = "img/" + bikename;      
      avatarhead.src = "img/" + avatarheadname;
      avatarhead.onload = function(){
         buildAvatar();
     }
       function buildAvatar(){
       var canvas = document.getElementById('canvas');
       var ctx = canvas.getContext('2d'); 
       var r = Math.floor(Math.random() * (255 - 100 + 1) + 100);
       var g = Math.floor(Math.random() * (255 - 100 + 1) + 100);
       var b = Math.floor(Math.random() * (255 - 100 + 1) + 100); 
       var bgcol = '#' + r.toString(16) + g.toString(16) + b.toString(16);
       ctx.fillStyle = bgcol;
       ctx.fillRect(0, 0, 400, 400);
       var scale = Math.min((canvas.width/house.width, canvas.height / house.height)*1.2);
       var x = (canvas.width/2) - (house.width/2) * scale;
       var y = (canvas.height/2) - (house.height/2) * scale;
       ctx.drawImage(house, x, y, house.width * scale, house.height * scale); 
       var scalebike = Math.min((canvas.width/bike.width, canvas.height / bike.height)*0.6);
       var xbike = (canvas.width/1.3) - (bike.width/2) * scalebike;
       var ybike = (canvas.height/1.3) - (bike.height/2) * scalebike;
       ctx.drawImage(bike, xbike, ybike, bike.width * scalebike, bike.height * scalebike); 
       var scalehead = Math.min((canvas.width/avatarhead.width, canvas.height / avatarhead.height)*0.5);
       var xhead = (canvas.width/6) - (avatarhead.width/2) * scalehead;
       var yhead = (canvas.height/2) - (avatarhead.height/2) * scalehead;  
       ctx.drawImage(avatarhead, xhead, yhead, avatarhead.width * scalehead, avatarhead.height * scalehead);        
     }
  }
  else if((localStorage.getItem("bikeName") !== null) && (localStorage.getItem("houseName") === null)){
      var bikename = localStorage.getItem("bikeName");
      var bike = new Image();
      bike.src = "img/" + bikename;
      var avatarhead = new Image();
      avatarhead.src = "img/" + avatarheadname;
      avatarhead.onload = function(){
         buildAvatar();
     }
       function buildAvatar(){
       var canvas = document.getElementById('canvas');
       var ctx = canvas.getContext('2d'); 
       var r = Math.floor(Math.random() * (255 - 100 + 1) + 100);
       var g = Math.floor(Math.random() * (255 - 100 + 1) + 100);
       var b = Math.floor(Math.random() * (255 - 100 + 1) + 100); 
       var bgcol = '#' + r.toString(16) + g.toString(16) + b.toString(16);
       ctx.fillStyle = bgcol;
       ctx.fillRect(0, 0, 400, 400);       
       var scalebike = Math.min((canvas.width/bike.width, canvas.height / bike.height)*0.6);
       var xbike = (canvas.width/1.3) - (bike.width/2) * scalebike;
       var ybike = (canvas.height/1.3) - (bike.height/2) * scalebike;
       ctx.drawImage(bike, xbike, ybike, bike.width * scalebike, bike.height * scalebike); 
       var scalehead = Math.min((canvas.width/avatarhead.width, canvas.height / avatarhead.height)*0.5);
       var xhead = (canvas.width/10) - (avatarhead.width/2) * scalehead;
       var yhead = (canvas.height/2) - (avatarhead.height/2) * scalehead;  
       ctx.drawImage(avatarhead, xhead, yhead, avatarhead.width * scalehead, avatarhead.height * scalehead);
       }
  }
  else if ((localStorage.getItem("bikeName") === null) && (localStorage.getItem("houseName") !== null)){
      var housename = localStorage.getItem("houseName");
      var house = new Image();
      house.src = "img/" + housename;
      var avatarhead = new Image();
      avatarhead.src = "img/" + avatarheadname;
      avatarhead.onload = function(){
        buildAvatar();
    }
      function buildAvatar(){
      var canvas = document.getElementById('canvas');
      var ctx = canvas.getContext('2d'); 
      var r = Math.floor(Math.random() * (255 - 100 + 1) + 100);
      var g = Math.floor(Math.random() * (255 - 100 + 1) + 100);
      var b = Math.floor(Math.random() * (255 - 100 + 1) + 100); 
      var bgcol = '#' + r.toString(16) + g.toString(16) + b.toString(16);
      ctx.fillStyle = bgcol;
      ctx.fillRect(0, 0, 400, 400);
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
  else if  ((localStorage.getItem("houseName") === null) && (localStorage.getItem("bikeName") === null)) {
      var avatarhead = new Image();
      avatarhead.src = "img/" + avatarheadname;

    avatarhead.onload = function(){
      buildAvatar();
  }
    function buildAvatar(){
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');    
    var r = Math.floor(Math.random() * (255 - 100 + 1) + 100);
    var g = Math.floor(Math.random() * (255 - 100 + 1) + 100);
    var b = Math.floor(Math.random() * (255 - 100 + 1) + 100); 
    var bgcol = '#' + r.toString(16) + g.toString(16) + b.toString(16);
    ctx.fillStyle = bgcol;
    ctx.fillRect(0, 0, 400, 400);
    ctx.drawImage(avatarhead,((canvas.width - avatarhead.width)/2),10);
    
    }
  }  
}
document.getElementById('storageClear').onclick = function() {
  localStorage.clear();
  location.href = "index.html"
}


