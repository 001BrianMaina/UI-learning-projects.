let navigation = document.querySelectorAll("#nav-links a");
for(let i=0; i < navigation.length; i++){
    navigation[i].addEventListener("click",function(e){
        e.preventDefault();
        let targeted = this.getAttribute("href");
        let target = document. querySelector(targeted);
        target.scrollIntoView({
            behavior: "smooth"
        });
    });
}

let getstarted = document.getElementById("btn1");
getstarted.addEventListener("click", function(){
    let target = document.getElementById("about");
    target.scrollIntoView({
        behavior:"smooth"
    });
});

let navbar = document.querySelector("nav");
let logo = document.getElementById("logo");
window.addEventListener("scroll", function(){
if(window.scrollY > 60){
    navbar.style.backgroundColor = "orange"
    logo.style.color = "rgb(98,5,5)"
} else{
    navbar.style.backgroundColor = "rgb(98,5,5)"
    logo.style.color = "white"
};
});

let contactform = document.getElementById("contactform");
let message = document.getElementById("formmessage");
contactform.addEventListener("submit", function(e){
e.preventDefault();
let nameinput = document.getElementById("name");
let emailinput = document.getElementById("email");
let text = document.getElementById("message");
if(
    nameinput.value.trim() === "" ||
    emailinput.value.trim() === ""||
    text.value.trim() === ""
){
    message.textContent = "Please fill in All fields!"
    message.style.color = "red"

    contactform.reset();
    
    setTimeout( function(){
    message.textContent ="";
    },3000);
    
}else{
    message.textContent = "Submitted Sucessfullly"
    message.style.color = "green"

    contactform.reset();
    
    setTimeout( function(){
    message.textContent ="";
    },3000);
}
});

let backtotop = document.getElementById("btn3");
window.addEventListener("scroll", function(){
    if(this.window.scrollY > 300){
        backtotop.style.display = "block"
    }else{
        backtotop.style.display = "none"
    }
});

backtotop.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth" 
    })
});

