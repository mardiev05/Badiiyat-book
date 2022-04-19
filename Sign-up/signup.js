let form = document.querySelector("#form");
let url = "https://bookzon.herokuapp.com/api/";

form.addEventListener("submit", function(e) {
    e.preventDefault();
    if (e.target[4].value !== e.target[5].value) {
        // Swal.fire({
        //     icon: "error",
        //     title: "Oops...",
        //     text: "Something went wrong!",
        //     footer: '<a href="">Why do I have this issue?</a>',
        // });
        let error = document.getElementById("password__msg");
        error.innerHTML = "Password does not match";
        error.style.color = "red";
        return;
    }
    let user = {
        email: e.target[2].value,
        password: e.target.password.value,
        firstName: e.target[0].value,
        lastName: e.target[1].value,
        phone: e.target[3].value,
        // address: e.target[4].value,
    };

    (async() => {
        let response = await fetch(url + "sign-up", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
        let data = await response.json();
        if (data.success) {
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));
            Swal.fire({
                icon: "success",
                title: "Success",
                text: "You have successfully registered",
                footer: '<a href="">Why do I have this issue?</a>',
            });
            window.location.assign(
                "http://127.0.0.1:5501/Home-page/home.html?search="
            );
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: data.msg,
                footer: '<a href="">Why do I have this issue?</a>',
            });
        }
        console.log(data);
    })();
});