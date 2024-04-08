navMobileLogo = document.querySelectorAll(".nav-bar-mobile-logo")[0]
navBarMobile = document.querySelectorAll(".nav-bar-mobile")[0]
topBar = document.querySelector(".top-bar")[0]


function clickNavLogo(){
    if(navBarMobile.style.display == "flex"){
        navBarMobile.style.display = "none"
        navMobileLogo.style.position = "relative"
    } else if(navBarMobile.style.display = "none"){
        navBarMobile.style.display = "flex"
        navMobileLogo.style.position = "fixed"
    }
}

navMobileLogo.onclick = clickNavLogo