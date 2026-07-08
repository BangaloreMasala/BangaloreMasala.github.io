const menu=document.querySelector(".menu-toggle");
const nav=document.querySelector("nav");

menu.addEventListener("click",()=>{

menu.classList.toggle("active");

nav.classList.toggle("show");

});