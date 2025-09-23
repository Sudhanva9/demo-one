let lightmode = localStorage.getItem('light-mode')
const themeSwitch = document.getElementById('mode-toggler')

const enableLightMode = () => {
    document.body.classList.add('light-mode')
    localStorage.setItem('light-mode', 'active')
}

const disableLightMode = () => {
    document.body.classList.remove('light-mode')
    localStorage.setItem('light-mode', null)
}

// init: default to light if nothing stored
// if (lightmode === null || lightmode === 'active') enableLightMode();


// if(lightmode === "active")  enableLightMode()

themeSwitch.addEventListener("click", () => {
    lightmode = localStorage.getItem('light-mode')
    lightmode != "active" ? enableLightMode() : disableLightMode()
})