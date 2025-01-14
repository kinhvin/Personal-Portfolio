// Dark Mode
let darkmode = localStorage.getItem('darkmode')
const modeSwitch = document.getElementById('mode-switch')
const logo = document.getElementById('logo')

function changeLogo() {
    const currSrc = logo.src
    logo.src = logo.dataset.alt
    logo.dataset.alt = currSrc
}

const enableDarkmode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active')
    changeLogo()
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
    changeLogo()
}

if (darkmode === "active") enableDarkmode()

modeSwitch.addEventListener('click', () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})