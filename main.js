const navamail =document.querySelector (".navbar-email");
const desktopmenu=document.querySelector(".desktop-menu");

const btnhamburguesa=document.querySelector(".menu")
const menumobile=document.querySelector (".mobile-menu")

navamail.addEventListener("click",toggleCorreoclick);

btnhamburguesa.addEventListener("click",toggleclicham)

function toggleclicham(){
menumobile.classList.toggle("inactive")

}

function toggleCorreoclick(){
desktopmenu.classList.toggle("inactive")
}
 