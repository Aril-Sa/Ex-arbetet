/* Form Subscribe */
let date = new Date();
document.getElementById("dTime").innerHTML = date;

/* Subscribtion section */

 function myFunction() {
    let fName = document.getElementById("fName").value;
    let email = document.getElementById("email").value;
    document.getElementById("display").innerHTML = 
    fName  + " your email " + email +  " has been addet to the subscription list!"; 
}


const toggleButten = document.getElementsByClassName("toggle_button")[0]
const navLink = document.getElementsByClassName("nav_link")[0]

toggleButten.addEventListener("click", () => {
    navLink.classList.toggle("active");
})




