const url = "http://localhost:8000/api";

const accForm = document.querySelector("#form");
const firsN = document.querySelector("#firstName");
const lastN = document.querySelector("#lastName");
const accPhone = document.querySelector("#phone");
const accEmail = document.querySelector("#email");
let user = JSON.parse(localStorage.getItem("user"));

firsN.value = user.firstName;
lastN.value = user.lastName;
accPhone.value = user.phone;
accEmail.value = user.email;


// MY ACCOUNT
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
        console.log(data.payload)
        let jsonUser = JSON.stringify(data.payload)
        if (data.success) {
            localStorage.setItem("user", jsonUser);
        };
    })();
});




// SECURITY
const secForm = document.querySelector("#security__form");

const secEmail = document.querySelector("#secEmail")

secEmail.value = user.email

secForm.addEventListener("submit", (e) => {
    e.preventDefault();


    let newPass = e.target.new.value;
    let confPass = e.target.conf.value;
    let newPassword = {
        password: e.target.new.value,
    };

    let login = {
        email: e.target.secEmail.value,
        password: e.target.secPassword.value,
    };

    (async() => {
        let res = await fetch(url + "/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(login),
        });
        let data = await res.json();
        console.log(data);

        if (data.success && newPass === confPass) {
            Swal.fire({
                title: "Do you want to save the changes?",
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: "Save",
                denyButtonText: `Don't save`,
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    Swal.fire("Saved!", "", "success");
                    (async() => {
                        let res = await fetch(url + "/users/", {
                            method: "PATCH",
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: "Baerer " + localStorage.getItem("token"),
                            },
                            body: JSON.stringify(newPassword),
                        });
                        let data = await res.json();
                        if (newPass == confPass) {
                            Swal.fire(
                                "Good job!",
                                "You clicked the button!",
                                "success"
                            );
                        }
                    })();
                } else if (result.isDenied) {
                    Swal.fire("Changes are not saved", "", "info");
                }
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: data.msg,
                footer: '<a href="">Why do I have this issue?</a>',
            });
        }
    })();
})



const settings = document.querySelector("#settings");
const setBtn = document.querySelector("#setBtn");

settings.addEventListener("submit", (e) => {
    e.preventDefault()

    let newEmail = {
        email: e.target.setEmail.value
    };

    (async() => {
        let res = await fetch(url + "/users", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Baerer " + localStorage.getItem("token"),
            },
            body: JSON.stringify(newEmail),
        });
        let data = await res.json();
        console.log(data);
    })();
});





// top bar
const home = document.querySelector("#homeLink");
const myAccountLink = document.querySelector("#myAccount__link");
const myAccountCard = document.querySelector(".myAccount");
const securityLink = document.querySelector("#security__link");
const securityForm = document.querySelector("#security__form");
const settingsLink = document.querySelector("#settings__link");
const settingscard = document.querySelector("#settings");
const ball = document.querySelector(".ball");

home.addEventListener("click", () => {
    window.location.assign("http://127.0.0.1:5501/Home-page/home.html");
});

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