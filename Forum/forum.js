/* Nav-bar */
const toggleButten = document.getElementsByClassName("toggle_button")[0]
const navLink = document.getElementsByClassName("nav_link")[0]

toggleButten.addEventListener("click", () => {
    navLink.classList.toggle("active");
})

/* form */
let content = document.getElementById("content");
let button = document.getElementById("show_more");


button.onclick = function() {
    if(content.className == "open") {
        /* Shrink box */
        content.className = "";
        button.innerHTML = "Show More";
    } else {
        /* Expand box */
        content.className = "open";
        button.innerHTML = "Show Less";
    }
};

/* function myFunction(){
    
    let textArea = document.getElementById("text_area").value;
    let nameSubmit = document.getElementById("inputName").value;
    document.getElementById("person_message").innerHTML = nameSubmit + " commented."; 
    document.getElementById("content").innerHTML = textArea;
    console.log(newText);
    
    if(nameSubmit == ""){
        document.getElementById("person_message").innerHTML = "Anonymous comment.";
    }
    
} */





















/* function scrollAppear(){
    let introText = document.querySelector(".intro-text");
    let introPosition = introText.getBoundingClientRect().top;
    let screenPosition = window.innerHeight /2;

    if(introPosition < screenPosition){
        introText.classList.add("intro-appear");
    }
}

window.addEventListener("scroll", scrollAppear); */