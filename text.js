const menuBtn=document.querySelector(".menu-btn");
let mobileLinks=document.getElementById("mobileLinks");
let menuOpen=false
menuBtn.addEventListener("click",()=>{
    if(!menuOpen){
        menuBtn.classList.add("open");
        mobileLinks.classList.toggle("mobile");
    
        menuOpen=true;
    }else{
        menuBtn.classList.remove("open");
        mobileLinks.classList.toggle("mobile");
        menuOpen=false
    }
})



// let hambergerIcon=document.getElementById("hambergerIcon");
// let mobileLinks=document.getElementById("mobileLinks");
// console.log("hello")
// hambergerIcon.onclick=function() {
//      mobileLinks.classList.toggle("mobile");
    
// }