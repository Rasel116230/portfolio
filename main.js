/*~~~~~~~~~~~~~~~ TOGGLE BUTTON ~~~~~~~~~~~~~~~*/
const hamburger=document.getElementById("hamburger");
const navMenu=document.getElementById("navmenu");
const navLink=document.querySelectorAll("nav-link");
const closeIcon=document.getElementById("nav-close");

navLink.forEach((link)=>{
    link.addEventListener("click",()=>{
        navMenu.classList.add("hidden");
    });
});

closeIcon.addEventListener("click",()=>{
    navMenu.classList.add("hidden");
});


hamburger.addEventListener("click",()=>{
    navMenu.classList.remove("hidden");
});

/*~~~~~~~~~~~~~~~ DARK LIGHT THEME ~~~~~~~~~~~~~~~*/
const html=document.querySelector("html");
const themeBtn=document.getElementById("theme-toogle");

if(localStorage.getItem("mode")=="dark"){
    darkMOde();
}else{
    lightMode();
}

themeBtn.addEventListener("click",(e)=>{
    if(localStorage.getItem("mode") == "light"){
        darkMOde();
    }else{
        lightMode();
    }
})

function darkMOde(){
    html.classList.add("dark");
    themeBtn.classList.replace("ri-moon-line","ri-sun-line");
    localStorage.setItem("mode","dark");
}

function lightMode(){
    html.classList.remove("dark");
    themeBtn.classList.replace("ri-sun-line","ri-moon-line");
    localStorage.setItem("mode","light");
}

/*~~~~~~~~~~~~~~~ TABS ~~~~~~~~~~~~~~~*/
let tabs = document.querySelectorAll('.tab');
let indicator = document.querySelector(".indicator");
const all=document.querySelectorAll('.work_card');
const ui=document.querySelectorAll('.uiux');
const brand=document.querySelectorAll('.branding');
const app=document.querySelectorAll('.apps');

indicator.style.width = tabs[0].getBoundingClientRect().width + "px"; 
indicator.style.left = tabs[0].getBoundingClientRect().left - tabs[0].parentElement.getBoundingClientRect().left + "px";

tabs.forEach((tab) => {
tab.addEventListener("click", () => {
indicator.style.width = tab.getBoundingClientRect().width + "px";
 indicator.style.left = tab.getBoundingClientRect().left-tab.parentElement.getBoundingClientRect().left +"px";
tabs.forEach(t => t.classList.remove("text-whiteColor")); 
tab.classList.add("text-whiteColor");

const tabval=tab.getAttribute('data-tabs');

all.forEach(item=>{
    item.style.display="none"
});

if(tabval=="uiux"){
    ui.forEach(item=>{
        item.style.display="block"
    });
}else if(tabval=="branding"){
    brand.forEach(item=>{
        item.style.display="block"
    });
}else if(tabval=="apps"){
    app.forEach(item=>{ 
        item.style.display="block"
    });
}else{
    all.forEach(item=>{
        item.style.display="block"
    });
}

})
})

/*~~~~~~~~~~~~~~~ CHANGE BACKGROUND HEADER ~~~~~~~~~~~~~~~*/

/*~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~*/

/*~~~~~~~~~~~~~~~ SCROLL SECTIONS ACTIVE LINK ~~~~~~~~~~~~~~~*/

/*~~~~~~~~~~~~~~~ SCROLL REVEAL ANIMATION ~~~~~~~~~~~~~~~*/
