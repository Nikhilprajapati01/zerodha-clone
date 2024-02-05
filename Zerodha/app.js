const showmenu = document.querySelector('.ri-menu-line')

// show.style.display = "none"

function showclick(){

    console.log("asdd")
    document.getElementsByClassName("menu").classList.toggle("hide");
}

showmenu.addEventListener("click",function(){
      showclick()
})




// const check = true;
// showmenu.addEventListener("click", function(){
//     if(check == true){
//         show.style.display = "block"
//         check = false;
//     }
//     else{
//         show.style.display = "none"
//         check = true;
//     }
// })