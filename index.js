const form=document.querySelector(".js-form")
const input=form.querySelector("input");
const span=document.querySelector("span");
const left=document.querySelector(".left-div");
const right=document.querySelector(".right-div");
const img=document.querySelector(".img");
let message="";
function handleSubmit(event) {
    event.preventDefault();
    message = input.value;
    span.innerText=message;
}
function leftClick(event) {
    img.src="baeseongjae1(right).jpg";
    setTimeout(function(){ img.src="baeseongjae2(right).jpg";}, 2380);  
}
function leftHover(event) {
    img.src="baeseongjae2(right).jpg";
}
function rightClick(event) {
    img.src="baeseongjae1(left).jpg";
    setTimeout(function(){ img.src="baeseongjae2(left).jpg";}, 2380);}
function rightHover(event) {
    img.src="baeseongjae2(left).jpg";
}
function init() {
    form.addEventListener("submit",handleSubmit);
    left.addEventListener("click",leftClick);
    left.addEventListener("mouseenter",leftHover);
    right.addEventListener("click",rightClick);
    right.addEventListener("mouseenter",rightHover);
}
  
init();
