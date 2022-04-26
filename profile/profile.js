const myAccountLink = document.querySelector("#myAccount__link");
const myAccountCard = document.querySelector(".myAccount");
const securityLink = document.querySelector("#security__link");
const securityForm = document.querySelector("#security__form");
const settingsLink = document.querySelector("#settings__link");
const settingscard = document.querySelector("#settings");
const ball = document.querySelector(".ball");



myAccountLink.addEventListener("click", () => {
    myAccountCard.classList.remove("hide");
    securityForm.classList.add("hide");
    settingscard.classList.add("hide");
    myAccountLink.style.backgroundColor = "#fff";
    securityLink.style.backgroundColor = "#F3F6F9";
    settingsLink.style.backgroundColor = "#F3F6F9";
});
securityLink.addEventListener("click", () => {
    securityForm.classList.remove("hide");
    myAccountCard.classList.add("hide");
    settingscard.classList.add("hide");
    securityLink.style.backgroundColor = "#fff";
    myAccountLink.style.backgroundColor = "#F3F6F9";
    settingsLink.style.backgroundColor = "#F3F6F9";
});
settingsLink.addEventListener("click", () => {
    myAccountCard.classList.add("hide");
    securityForm.classList.add("hide");
    myAccountLink.style.backgroundColor = "#F3F6F9";
    securityLink.style.backgroundColor = "#F3F6F9";
    settingscard.classList.remove("hide");
    settingsLink.style.backgroundColor = "#fff"
});













ball.addEventListener("click", () => {
    ball.classList.toggle("active");
})