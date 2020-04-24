let profile = document.querySelector("#profileMenu"),
    menu = document.createElement("div"),
    arrow = document.querySelector("#uiArrow"),
    rightSide = document.querySelector(".rightSide"),

    isVisible = false,
    menuElements = [
        document.createElement("button"), 
        document.createElement("button"),
        document.createElement("button"),
    ];

profile.addEventListener('click', function() {
    if(!isVisible) {
        menu.classList.add("uiMenu");
        for (let i = 0; i < menuElements.length; i++){
            menuElements[i].classList.add("uiMenuBtn");
            menuElements[i].classList.add("text");
        }   

        menuElements[0].innerHTML = "My account";
        menu.appendChild(menuElements[0]);

        
        menuElements[1].innerHTML = "Tasks";
        menu.appendChild(menuElements[1]);
        
        menuElements[2].innerHTML = "Log out";
        menu.appendChild(menuElements[2]);

        rightSide.appendChild(menu);

        arrow.style.transform = "rotate(180deg)";

        isVisible = true;
    } else {
        arrow.style.transform = "rotate(0deg)";
        rightSide.removeChild(menu);
        isVisible = false;
    }
    return;
});