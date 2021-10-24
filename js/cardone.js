let food = Number(localStorage.getItem('foodInv'));
var foodAfter = food - 1;

document.getElementById("show").innerHTML = localStorage.getItem("foodInv");

document.getElementById('reduceButton').onclick = function(){  
    localStorage.setItem('foodInv', foodAfter.toString());   
    location.href = "play.html";

    }