const openBtn = document.getElementById("openBtn");
const backBtn = document.getElementById("backBtn");

const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");

openBtn.onclick = () => {

page1.style.display = "none";
page2.style.display = "block";

}

backBtn.onclick = () => {

page2.style.display = "none";
page1.style.display = "block";

}
