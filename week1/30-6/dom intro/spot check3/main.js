const playing = document.getElementById("playing-field")
playing.style.backgroundColor = "blue"
const b = document.getElementById("ball")
b.style.backgroundColor = "yellow"
const down = document.getElementById("down")
down.innerHTML = "Down"


const moveRight = function(){
    if(parseInt(document.getElementById("ball").style.left) || 0)
    {
    
    document.getElementById("ball").style.left = parseInt(document.getElementById("ball").style.left)+15+"px";
  }
  else  document.getElementById("ball").style.left += "15px"
}