let button = document.getElementsByTagName("button")
let firstName = document.getElementById("firstName")
let lastName = document.getElementById("lastName")
let form = document.getElementById("form")
let error = document.getElementById("error")
let email = document.getElementById("email")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let message = "";

    if(firstName.value === ""){
        message += " Firstname is required <br> "
    }
    if(lastName.value === ""){
        message += " Lasttname is required <br> "
    }
    if(email.value === ""){
        message += " Email is required <br> <br> "
    }
    if(message === ""){
        error.innerHTML = "Your request has been received. <br> We´ll get back to you within 3 days."
        error.style.backgroundColor ="lightgreen"
        error.style.border = "solid grey"
        error.style.fontSize = 20
        
    } else{
        error.innerHTML = message
        error.style.backgroundColor ="rgb(233, 68, 68, 0.5)"
        error.style.border = "solid grey"
        error.style.fontSize = 20
    }
});

/* let submit = document.getElementsByClassName("submit")
submit.addEventListener("click", () => {
    button.classList.add("active")
}) */

