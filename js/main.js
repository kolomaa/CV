'use strict'

const body = document.querySelector('#body');
const obj = {
    'BarHTML': 78,
    'BarCSS' : 80,
    'BarJS' : 65
}

function move(elName, maxWidth) {
    let i = 0;
    if (i == 0) {
        i = 1;
        let width = 0;
        const elem = document.getElementById(elName);
        let id = setInterval(frame, 10);
        function frame() {
            if (width >= maxWidth) {
            clearInterval(id);
            i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
                elem.innerHTML = width + "%";
            }
        }
    }
}

Object.keys(obj).forEach(el => {
    body.addEventListener('load', move(el, obj[el]));
});


function openProfile() {
    document.getElementById("user").style.display = "block";
}

function closeProfile() {
    document.getElementById("user").style.display = "none";
}

