var randomnumber1 = Math.floor(Math.random()*6) + 1;

var img1 = document.querySelectorAll('img')[0];
var img1_src_link = "images/" + "dice" + randomnumber1 +".png";

img1.setAttribute("src", img1_src_link) ;


var randomnumber2 = Math.floor(Math.random()*6) + 1;

var img2 = document.querySelectorAll('img')[1];
var img2_src_link = "images\\" + "dice" + randomnumber2 +".png";

img2.setAttribute("src", img2_src_link) ;

var heading = document.querySelector("h1");
if(randomnumber1 > randomnumber2){
  heading.innerText = "🚩Player1 Wins..";
}
else if(randomnumber1 === randomnumber2){
  heading.innerText = "Match ties..";
}
else{
  heading.innerText = "Player2 Wins..🚩";
}
