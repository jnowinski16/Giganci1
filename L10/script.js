"use strict";

let avatar = document.getElementById("avatar");
let name = document.getElementById("name");
let description = document.getElementById("description");
let toggleBtn = document.getElementById("toggle-btn");


toggleBtn.addEventListener("click", function(){

    let isHero = document.body.classList.contains("hero");

    if(isHero){
        document.body.classList.replace("hero", "villain");
        name.textContent = "Quwer villan";
        description.textContent = "Mode villan";
        avatar.src = "https://api.dicebear.com/9.x/adventurer/svg?seed=29"
        avatar.style.borderColor = 'rgb(238, 51, 66)'
        toggleBtn.textContent = "Wróć do Hero"
        
    }else{
        document.body.classList.replace("villain", "hero");
        name.textContent = "Opils hero";
        description.textContent = "Mode hero";
        avatar.src = "https://api.dicebear.com/9.x/adventurer/svg?seed=3"
        avatar.style.borderColor = 'rgb(0, 204, 255)'
        toggleBtn.textContent = "Zmień na Villain"
    }
});
