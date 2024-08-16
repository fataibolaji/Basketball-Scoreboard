function addHome(points) {
    const scoreElement = document.getElementById('home-score');
    let currentScore = parseInt(scoreElement.textContent);
    scoreElement.textContent = currentScore + points;
}

function addGuest(points) {
    const scoreElement = document.getElementById('guest-score');
    let currentScore = parseInt(scoreElement.textContent);
    scoreElement.textContent = currentScore + points;
}

function addHome1() {
    addHome(1);
}

function addHome2() {
    addHome(2);
}

function addHome3() {
    addHome(3);
}

// Functions to handle each button click for the guest team
function addGuest1() {
    addGuest(1);
}

function addGuest2() {
    addGuest(2);
}

function addGuest3() {
    addGuest(3);
}