const showmenu = document.querySelector('.ri-menu-line')
const show = document.getElementsByClassName("menu")

showmenu.addEventListener("click",function (){
    if(show.style.display === "none"){
         show.style.display = "block"
         
    }
    else{
        show.style.display = "none"
    }
}

)