const grass = document.getElementById('grass');
const water = document.getElementById('water');
const mount = document.getElementById('mountains');
const body = document.getElementById('color');
const velsk = document.getElementById('gorod');
const rev = document.getElementById("back")

grass.onclick = function() {
    body.style.backgroundImage = 'url("https://avatars.mds.yandex.net/i?id=a70af2399e57c58d9968d4e619a9c12f927506d6-4886334-images-thumbs&n=13")';
    grass.textContent = 'Выбрано!';
    grass.style.fontSize = '30px';
    water.textContent = 'Вода';
    mount.textContent = 'Горы';
    velsk.textContent = 'Вельск';
    body.style.color = 'white';
    water.style.fontSize = '40px';
    mount.style.fontSize = '40px';
    velsk.style.fontSize = '40px'
    back.textContent = '🔄'
};

water.onclick = function() {
    body.style.backgroundImage = 'url("https://avatars.mds.yandex.net/i?id=8faac57223e38495495005ddd04bbdd98d8ce290-4949469-images-thumbs&n=13")';
    water.textContent = 'Выбрано!';
    water.style.fontSize = '30px';
    grass.textContent = 'Трава';
    mount.textContent = 'Горы';
    velsk.textContent = 'Вельск';
    body.style.color = 'white';
    grass.style.fontSize = '40px';
    mount.style.fontSize = '40px';
    velsk.style.fontSize = '40px';
    back.textContent = '🔄'
};


mount.onclick = function() {
    body.style.backgroundImage = 'url("https://avatars.mds.yandex.net/i?id=341a25ed2d178c1d6bd8f2420981a85a180b8a2f-5878141-images-thumbs&n=13")';
    mount.textContent = 'Выбрано!';
    mount.style.fontSize = '30px';
    water.textContent = 'Вода';
    grass.textContent = 'Трава';
    velsk.textContent = 'Вельск';
    body.style.color = 'black';
    grass.style.fontSize = '40px';
    water.style.fontSize = '40px';
    velsk.style,fontSize = '40px';
    back.textContent = '🔄'
}


velsk.onclick = function() {
    body.style.backgroundImage = 'url("https://avatars.mds.yandex.net/i?id=26267f3de5ad5280cd6862201a7f95cbf1a4caf8-10877308-images-thumbs&n=13")';
    velsk.textContent = 'Выбрано!';
    velsk.style.fontSize = '30px';
    water.textContent = 'Вода';
    grass.textContent = 'Трава';
    mount.textContent = 'Горы';
    body.style.color = 'lightyellow';
    mount.style.fontSize = '40px';
    grass.style.fontSize = '40px';
    water.style.fontSize = '40px';
    back.textContent = '🔄'
};

back.onclick  = function() {
    body.style.backgroundImage = 'url("")';
    velsk.textContent = 'Вельск';
    grass.textContent = 'Трава';
    mount.textContent = 'Горы';
    water.textContent = 'Вода';
    water.style.fontSize = '40px';
    mount.style.fontSize = '40px';
    grass.style.fontSize = '40px';
    velsk.style.fontSize = '40px';
    body.style.backgroundColor = 'black';
    body.style.color = 'white';
    back.textContent = '⚫';
    back.style.fontSize = '40px'
}
