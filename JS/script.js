/* Form Subscribe */
let date = new Date();
document.getElementById("dTime").innerHTML = date;

/* Subscribtion section */

 function myFunction() {
    let fName = document.getElementById("fName").value;
    let email = document.getElementById("email").value;
    let display = document.getElementById("display");
    
    display.innerHTML = 
    fName  + " your email " + email +  " has been addet to the subscription list!"; 
}
// Navbar
const toggleButten = document.getElementsByClassName("toggle_button")[0]
const navLink = document.getElementsByClassName("nav_link")[0]

toggleButten.addEventListener("click", () => {
    navLink.classList.toggle("active");
})
// Subscribtion hidde
let content = document.getElementById("showForm");
let button = document.getElementById("show_more");
let subImg= document.createElement("img");
subImg.setAttribute("src", "./IMAGES/sub.jpg");
document.querySelector('nav #show_more').appendChild(subImg);

button.onclick = function() {
    if(content.className == "open") {
        /* Shrink box */
        content.className = subImg;
        subImg.style.cursor = "pointer";
        
    } else {
        /* Expand box */
        content.className = "open";
    }
};

function activeFade() {
      
    if(this.scrollY > this.innerHeight /1.2){
        document.body.classList.add("backGr");
    } 
}

window.addEventListener("scroll", activeFade);







/* Fade artikle */
/* let text = document.querySelector(".item_article1 h1 span");
let textCon = text.textContent;
textCon = textCon.split(""); */

/* text.textContent = ""; */
/* 
for(let i = 0; i < textCon.length; i++){
    text.innerHTML = "<span>" + textCon[i] + "</span>";
} */
/* 
let char = 0;
let time = setInterval(onClock, 50);

function onClock(){
    let span = text.querySelectorAll("span")[char];
    span.classList.add("fade");
    char++; 
    if(char === content.length){
        stop();
        return;
    }
}
function stop(){
    clearInterval(time);
    char = null;
}
console.log(textCon); 
 */


