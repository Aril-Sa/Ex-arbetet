
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

function myFunction1(){
    let newText =  document.createElement("section");
    let textArea = document.getElementById("text_area").value;
    let nameSubmit = document.getElementById("name_submit").value;
    document.getElementById("person_message").innerHTML = nameSubmit + " commented."; 
    document.getElementById("content").innerHTML = textArea;
    document.getElementById("content").appendChild(newText);
    
    if(nameSubmit == ""){
        document.getElementById("person_message").innerHTML = "Anonymous comment.";
    }
    
}
