function toggle(){
    document.body.classList.toggle("dark-theme");
}
function hamburger(){
    var hamburg = document.getElementById('hamburger-1');
    hamburg.classList.toggle("is-active");
    var slidebar = document.getElementById("slide");
    slidebar.classList.toggle("is-active");
    var menu = document.getElementById("menu");
    menu.classList.toggle("is-active")
}