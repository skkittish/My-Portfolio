const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
};


function drop(){
document.getElementById("navbarSupportedContent").classList.toggle("show");
};
window.OnMouseOver = function(event){
if (!event.target.matches('dropbtn')){
    var dropdowns = document.getElementsByClassName("dropdown");
    var i;
    for (i = 0; i < dropdowns.length; i++ ){ 
        var OpenDropdown = dropdowns [i];
        if (OpenDropdown.classList.contains("show")){
            OpenDropdown.classList.remove("show");
        }
    }
}
}


const scrollUp = document.querySelector("#scroll-up")
scrollUp.addEventListener("click", () =>{
    window.scrollTo({
        top: 0,
        left:0,
        behavior:"smooth",
    });
});

const checkbox = document.querySelector("#checkbox");
checkbox.addEventListener("change", () => {
document.body.classList.toggle("dark")
});

