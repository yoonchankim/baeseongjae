const span=document.querySelector(".click");
const rSpan=document.querySelector(".opacity");
const left=document.querySelector(".left-div");
const right=document.querySelector(".right-div");
const img=document.querySelector(".img");
const cute=document.querySelector("audio");
let click=0;
function leftClick(event) {
    img.src="baeseongjae1(right).jpg";
    click++;
    localStorage.setItem("click",click);
    rSpan.classList.add("animationLeft");
    cute.play();
    if(click%100===0){
        alert("Congratulations! You clicked "+JSON.stringify(click));
    }
    setTimeout(function(){ img.src="baeseongjae2(right).jpg";
    rSpan.classList.remove("animationLeft");
}, 2380);
}
function leftHover(event) {
    img.src="baeseongjae2(right).jpg";
}
function rightClick(event) {
    img.src="baeseongjae1(left).jpg";
    click++;
    localStorage.setItem("click",click);
    rSpan.classList.add("animationRight");
    cute.play();
    if(click%100===0){
        alert("Congratulations! You clicked "+JSON.stringify(click));
    }
    setTimeout(function(){ img.src="baeseongjae2(left).jpg";
    rSpan.classList.remove("animationRight");
}, 2380);
}
function rightHover(event) {
    img.src="baeseongjae2(left).jpg";
}
function init() {
    const locaClick=localStorage.getItem("click");
    if(locaClick===null){
        localStorage.setItem("click",click);
    }
    window.onbeforeunload=function localstorage(){
        click=locaClick;
    };
    left.addEventListener("click",leftClick);
    left.addEventListener("mouseenter",leftHover);
    right.addEventListener("click",rightClick);
    right.addEventListener("mouseenter",rightHover);
}
  
  
init();
setInterval(innerText,1);
function innerText(){
    const locaClick=localStorage.getItem("click");
    click=locaClick;
    span.innerText=`POP:${click}`;
}