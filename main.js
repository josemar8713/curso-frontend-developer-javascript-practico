const navamail =document.querySelector (".navbar-email");
const desktopmenu=document.querySelector(".desktop-menu");

const btnhamburguesa=document.querySelector(".menu")
const menumobile=document.querySelector (".mobile-menu")

const btncarrito =document.querySelector(".navbar-shopping-cart") 
const aside =document.querySelector(".product-detail")




navamail.addEventListener("click",toggleCorreoclick);

btnhamburguesa.addEventListener("click",toggleclicham);

btncarrito.addEventListener("click",toggleclickproductos);

function toggleclicham(){
menumobile.classList.toggle("inactive")
aside.classList.add("inactive")

}

function toggleCorreoclick(){
desktopmenu.classList.toggle("inactive")
aside.classList.add("inactive")
}

function toggleclickproductos(){
    aside.classList.toggle("inactive")
    menumobile.classList.add("inactive")
}


