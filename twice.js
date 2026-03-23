const clear = document.getElementById('change')
const rename = document.getElementById('nedd')
const butle = document.getElementById('tytle')
const bodyStyle = document.getElementsByName('bodiee')

clear.onclick = function() {
    rename.textContent = 'Олег!';
    clear.textContent = 'Олег!';
    tytle.textContent = 'Олег!';
    bodyStyle.style = 'background-color: black'
}