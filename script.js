var back_video = document.getElementById("back_video");
var btn = document.getElementById("btn");
btn.addEventListener("click", ()=>{
    back_video.style.display = "block";
    if(back_video.paused){
        back_video.play();
        btn.src = "images/pause.png";
    }
    else{
        back_video.pause();
        btn.src = "images/play.png";
    }
})

var side_bar = document.getElementsByClassName("side_bar");
var menu_icon = document.getElementsByClassName("menu_icon");
menu_icon[0].addEventListener("click",()=>{
    side_bar[0].style.display = "block";
     btn.style.left = "30%";
    if(screen.width <= 490){
        btn.style.left = "10%";
    }
})

var btn = document.getElementById('btn');
var arrow = document.getElementsByClassName("arrow_icon");
arrow[0].addEventListener("click", ()=>{
    side_bar[0].style.display = "none";
    btn.style.left = "40%";
})