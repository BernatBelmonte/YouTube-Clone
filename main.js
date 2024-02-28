
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.left-menu-btn').onclick = display_side_menu;
    document.querySelector('.aside-menu-btn').onclick = hide_side_menu;
    document.querySelector('.lupa-search-btn').onclick = display_small_header;
    document.querySelector('.back-btn').onclick = hide_small_header;
});

function display_side_menu() { 
    document.querySelector('aside').classList.add('side-in');
    document.querySelector('main').style.filter = "brightness(0.5)";
    document.querySelector('header').style.filter = "brightness(0.5)";
}
function hide_side_menu() {
    document.querySelector('aside').classList.remove('side-in');
    document.querySelector('aside').classList.add('side-out'); 
    document.querySelector('main').style.filter = "brightness(1)";
    document.querySelector('header').style.filter = "brightness(1)";
}

function display_small_header() {
    const small_header = document.querySelector('.small-screen-search');
    small_header.style.display = "flex";

}

function hide_small_header() {
    const small_header = document.querySelector('.small-screen-search');
    small_header.style.display = "none";
}