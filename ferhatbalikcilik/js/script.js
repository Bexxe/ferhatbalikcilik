const nextbtn = document.getElementById("next-btn");
var containernext = document.querySelector('.baliklar-container');
nextbtn.addEventListener("click", function (){
    containernext.scrollLeft += 500;
});

const leftbtn = document.getElementById("left-btn");
var containerleft = document.querySelector('.baliklar-container');
leftbtn.addEventListener("click", function (){
    containerleft.scrollLeft -= 500;
});

const nextbtn2 = document.getElementById("next-btn-2");
var containernext2 = document.querySelector('.baliklar-container-2');
nextbtn2.addEventListener("click", function (){
    containernext2.scrollLeft += 500;
});

const leftbtn2 = document.getElementById("left-btn-2");
var containerleft2 = document.querySelector('.baliklar-container-2');
leftbtn2.addEventListener("click", function (){
    containerleft2.scrollLeft -= 500;
});