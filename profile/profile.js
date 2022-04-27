const url = "http://localhost:8000/api";

const accForm = document.querySelector("#form");
const firsN = document.querySelector("#firstName");
const lastN = document.querySelector("#lastName");
const accPhone = document.querySelector("#phone");
const accEmail = document.querySelector("#email");
let user = JSON.parse(localStorage.getItem("user"));
console.log(user);

firsN.value = user.firstName;
lastN.value = user.lastName;
accPhone.value = user.phone;
accEmail.value = user.email;

accForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let userInfo = {
        firstName: e.target.firstName.value,
        lastName: e.target.lastName.value,
        phone: e.target.phone.value,
        email: e.target.email.value,
    };



    (async() => {
        let res = await fetch(url + "/users/", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Baerer " + localStorage.getItem("token"),
            },
            body: JSON.stringify(userInfo),
        });
        let data = await res.json();
        console.log(data)
        if (data.success) {
            localStorage.setItem("user", data.payload)
        }
    })();
});



// top bar
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
    settingsLink.style.backgroundColor = "#fff";
});

ball.addEventListener("click", () => {
    ball.classList.toggle("active");
});