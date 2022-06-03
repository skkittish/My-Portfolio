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