let lightswitch = document.getElementById('lightswitch');

const imageSwitcher = event => {
    let patio = document.getElementById('outdoor');
    if(patio.src = `http://localhost:4000/images/outdoor.jpeg`) {
        patio.src = `http://localhost:4000/images/outdoorDark.png`
    } else {
        patio.src = `http://localhost:4000/images/outdoor.jpeg`
    }
}

lightswitch.addEventListener('click', imageSwitcher)