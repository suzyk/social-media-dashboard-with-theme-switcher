const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');


const setColorMode = () => {
    if (localStorage.getItem('colorMode') == 'dark'){
        setDarkMode();
        darkButton.click();
    }else{
        setLightMode();
        lightButton.click();
    }
}
const checkMode = () =>{
    if (localStorage.getItem('colorMode') == null){ // only the first time os setting will affect appearance
        if(window.matchMedia("(prefers-color-scheme: light)").matches){
            lightButton.click();
        }else if(window.matchMedia("(prefers-color-scheme: dark)").matches){
            darkButton.click();
        }
    }
}

const checkModeChange = () => {
    window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', event => { // I can just do event.matches ? "dark" : "light";
        checkMode();
    });
}

const setDarkMode =() =>{
    document.querySelector('body').classList = 'dark';
}
const setLightMode =() =>{
    document.querySelector('body').classList = 'light';
}

setColorMode();
checkModeChange();
const radioButtons = document.querySelectorAll('.toggle__wrapper input');

for (let i = 0; i < radioButtons.length; i++){
    radioButtons[i].addEventListener('click', event =>{
        if (darkButton.checked){
            localStorage.setItem('colorMode', 'dark');
            setDarkMode();
            console.log("dark checked");
        }else{
            localStorage.setItem('colorMode', 'light');
            setLightMode();
            console.log("light checked");
        }
    });
}

