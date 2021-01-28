const form=document.querySelector(".js-form")
const input=form.querySelector("input");
const span=document.querySelector("span");
const left=document.querySelector(".left-div");
const right=document.querySelector(".right-div");
const img=document.querySelector(".img");
let message="POP";
function handleSubmit(event) {
    event.preventDefault();
    message = input.value;
    input.value="";
}
function leftClick(event) {
    img.src="baeseongjae1(right).jpg";
    span.innerText=message;
    span.classList.add("animationLeft");
    setTimeout(function(){ img.src="baeseongjae2(right).jpg";
    span.classList.remove("animationLeft");
}, 2380);  
}
function leftHover(event) {
    img.src="baeseongjae2(right).jpg";
}
function rightClick(event) {
    img.src="baeseongjae1(left).jpg";
    span.innerText=message;
    span.classList.add("animationRight");
    setTimeout(function(){ img.src="baeseongjae2(left).jpg";
    span.classList.remove("animationRight");
}, 2380);}
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
