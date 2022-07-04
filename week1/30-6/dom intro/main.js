const playing = document.getElementById("playing-field")
playing.style.backgroundColor = "blue"
const b = document.getElementById("ball")
b.style.backgroundColor = "yellow"


const moveRight = function(){
    if(parseInt(document.getElementById("ball").style.left)  )
    {

    document.getElementById("ball").style.left = parseInt(document.getElementById("ball").style.left)+15+"px";
  }
  else  document.getElementById("ball").style.left += "15px";

}


const moveLeft = function(){
   if(parseInt(document.getElementById("ball").style.left)>= "500px")
    if(parseInt(document.getElementById("ball").style.left)  )
    {

    document.getElementById("ball").style.left = parseInt(document.getElementById("ball").style.left)-15+"px";
  }
  else  document.getElementById("ball").style.left -= "15px";

}


const moveUp = function(){
    if(parseInt(document.getElementById("ball").style.bottom) )
    {
    
    document.getElementById("ball").style.bottom = parseInt(document.getElementById("ball").style.bottom)+15+"px";
  }
  else  document.getElementById("ball").style.bottom += "15px";

}


const moveDown = function(){
    if(parseInt(document.getElementById("ball").style.bottom)  )
    {
    
    document.getElementById("ball").style.bottom = parseInt(document.getElementById("ball").style.bottom)-15+"px";
  }
  else  document.getElementById("ball").style.bottom -= "15px";

}
