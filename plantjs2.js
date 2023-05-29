const closeIcon= document.querySelector(".fa-x")
const hamburgerIcon= document.querySelector(".fa-bars")
const hamburgerMenu= document.querySelector(".hamburger-menu")



closeIcon.addEventListener("click", ()=>{
    hamburgerMenu.style.right="-200vw";
    
})

hamburgerIcon.addEventListener("click", ()=>{
    hamburgerMenu.style.right="0";
})
















