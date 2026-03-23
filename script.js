const dark = document.getElementById('night');
const light = document.getElementById('day');
const body = document.getElementById('color');

dark.onclick = function() {
    body.style.backgroundColor = 'black';
    body.style.color = 'blue';
};

light.onclick = function() {
    body.style.backgroundColor = 'white';
    body.style.color = 'blue'; 
    
};