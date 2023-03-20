let toggleButton = document.getElementById("toggle_button")
let background = document.querySelector('#background')
let isDarkMode = false;

toggleButton.addEventListener('click', () => {
    if(isDarkMode) {
        background.style.backgroundColor = 'white';
    } else {
        background.style.backgroundColor = 'black';
    }
    isDarkMode = !isDarkMode;
})