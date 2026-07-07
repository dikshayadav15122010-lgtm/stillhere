const openBtn = document.getElementById("openBtn");
const backBtn = document.getElementById("backBtn");

const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");

const topFlap = document.querySelector(".top");
const letter = document.querySelector(".letter");

openBtn.addEventListener("click",()=>{

topFlap.style.transform="rotateX(180deg) translateY(-5px)";

letter.style.top="-70px";

setTimeout(()=>{

page1.style.display="none";
page2.style.display="block";

},900);

});

backBtn.addEventListener("click",()=>{

page2.style.display="none";
page1.style.display="block";

topFlap.style.transform="rotateX(0deg)";

letter.style.top="20px";

});
