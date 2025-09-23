// (() => {
//   const root = document.documentElement;             // or document.body
//   const btn  = document.getElementById('mode-toggler');
//   if (!btn) return;

//   const iconLight = btn.querySelector('.icon-dark'); // your sun-like icon
//   const iconDark  = btn.querySelector('.icon-light');  // your moon-like icon

//   // 1) Start in LIGHT mode
//   root.classList.remove('dark-mode');
//   if (iconLight) iconLight.style.display = '';        // show
//   if (iconDark)  iconDark.style.display  = 'none';    // hide

//   // 2) Toggle on click (no memory)
//   btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     const toDark = !root.classList.contains('dark-mode');
//     root.classList.toggle('dark-mode', toDark);

//     // swap icons
//     if (iconLight) iconLight.style.display = toDark ? 'none' : '';
//     if (iconDark)  iconDark.style.display  = toDark ? '' : 'none';

//     // a11y (optional)
//     btn.setAttribute('aria-pressed', String(toDark));
//   });
// })();

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