import {loadGameStartingDigits, updateDigitsString, loadDigitsRange, load500Digits, next500Digits, last500Digits, updateDigitsRange} from "./eulersNumber.js";

// Home Page
const digitsBtn = document.getElementById("btnDigits");
const gameSettingsBtn = document.getElementById("btnStart");
const digitsPage = document.getElementById("digitsPage");
const homePage = document.getElementById("homePage");
const gameSettingsPage = document.getElementById("gameSettingsPage");

digitsBtn.addEventListener("click", () => {
    homePage.style.display = "none";
    digitsPage.style.display = "flex";
})

gameSettingsBtn.addEventListener("click", () => {
    homePage.style.display = "none";
    gameSettingsPage.style.display = "flex";
    loadDigitsRange();
});

load500Digits();

// Digits Page
const next500DigitsBtn = document.getElementById("btnRight");
const last500DigitsBtn = document.getElementById("btnLeft");
const closeDigitsBtn = document.getElementById("closeDigitsPage");

next500DigitsBtn.addEventListener("click", () => {
    next500Digits();
});

last500DigitsBtn.addEventListener("click", () => {
    last500Digits();
});

closeDigitsBtn.addEventListener("click", () => {
    homePage.style.display = "flex";
    digitsPage.style.display = "none";
});

// Settings Page
const startGameBtn = document.getElementById("startGameBtn");
const closeSettingsPage = document.getElementById("closeSettingsPage");

closeSettingsPage.addEventListener("click", () => {
    homePage.style.display = "flex";
    gameSettingsPage.style.display = "none";
});

const gamePage = document.getElementById("gamePage");
startGameBtn.addEventListener("click", () => {
    updateDigitsRange();
    loadGameStartingDigits();
    gameSettingsPage.style.display = "none";
    gamePage.style.display = "block";
})

// Game Page
const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
    key.addEventListener("click", () => {
        updateDigitsString(key.dataset.value);
    });
})

const closeGameBtn = document.getElementById("closeGamePage");
closeGameBtn.addEventListener("click", () => {
    gamePage.style.display = "none";
    homePage.style.display = "flex";
})

// Credits Page
const creditsBtn = document.getElementById("btnCredits");
const creditsPage = document.getElementById("creditsPage");
creditsBtn.addEventListener("click", () => {
    homePage.style.display = "none";
    creditsPage.style.display = "flex";
})

const closeCreditsPage = document.getElementById("closeCreditsPage");
closeCreditsPage.addEventListener("click", () => {
    creditsPage.style.display = "none";
    homePage.style.display = "flex";
})

// Sounds page
const btnSoundOptions = document.getElementById("btnSoundOptions");
const soundsPage = document.getElementById("soundsPage");
btnSoundOptions.addEventListener("click", () => {
    soundsPage.style.display = "flex";
    homePage.style.display = "none";
});

const soundBtns = document.querySelectorAll(".sound-btn");
soundBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        let sound = new Audio(`../Sounds/${btn.dataset.song}`);
        sound.play();

        localStorage.setItem("sound.key", `../Sounds/${btn.dataset.song}`)
    })

})

const closeSoundsBtn = document.getElementById("closeSoundsPage");
closeSoundsBtn.addEventListener("click", () => {
    soundsPage.style.display = "none";
    homePage.style.display = "flex";
})