var menu  = document.querySelector("#menu");
var navItem = document.querySelector(".navItem");
menu.addEventListener("click",()=>{
    navItem.classList.toggle("showmenu")
    console.log("clicked")
})