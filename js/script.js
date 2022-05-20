const menuBarra = document.getElementById ("menuBarra");
const MainMenu = document.getElementById ("mainMenu");


menuBarra.addEventListener("click", function() {

if (mainMenu.classList.contains("menu-vertical-oculto")){
    mainMenu.classList.add("menu-vertical");
    mainMenu.classList.remove("menu-vertical-oculto");
}

else{
    mainMenu.classList.remove("menu-vertical");
    mainMenu.classList.add("menu-vertical-oculto");
}

}

);