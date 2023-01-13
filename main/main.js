const navlinks = document.querySelector('#navLinks');


function showMenu(){

    navlinks.style.right = "0";
}

function hideMenu(){
    navlinks.style.right = "-200px";
}

window.onscroll = function(){

       if(document.body.scrollTop < 50){

        navlinks.style.right = "-200px";
       }

}