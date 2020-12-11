/* Form Subscribe */
let date = new Date();
document.getElementById("dTime").innerHTML = date;

/* Subscribtion section */

let fName = document.getElementById("fName");
let email = document.getElementById("email");
let display = document.getElementById("display");
let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let message = "";

    if(fName.value === ""){
        message += " Firstname is required <br> "
    }
    if(email.value === ""){
        message += " Email is required <br> <br> "
    }
    if(message === ""){
        display.innerHTML = fName.value  + " your email " + email.value +  " has been addet to the subscription list! "
        display.style.color = "darkgreen"
        display.style.marginTop = "1em"
        
    } else{
        display.innerHTML = message
        display.style.color ="red"
        display.style.marginTop = "1em"
    }
});
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
subImg.style.cursor = "pointer";
document.querySelector('nav #show_more').appendChild(subImg);

button.onclick = function() {
    if(content.className == "open") {
        /* Shrink box */
        content.className = subImg;
        
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

let logo = ["OPTIMASATION", "ACHIEVEMENT", "KNOWLEDGE"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

    if(count === logo.length){
        count = 0;
    }
    currentText = logo[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".type").textContent = letter;

    if(letter.length === currentText.length){
        count++;
        index = 0;
    }
    setTimeout(type, 400);

}());
